---

---

# Disable inactive accounts automation

<p id="date-and-time">5 minutes to read - 30 March 2023</p>

The following guide provides instructions to automate disabling and suspending inactive accounts for cloud-native implementation types.

The following is guidance from the Australian Cyber Security Centre (ACSC) for inactive accounts:

- Access to systems, applications and data repositories is removed or suspended after 45 days of inactivity (**ISM** security controls 1404 and 1648).
- Privileged access to systems and applications is automatically disabled after 45 days of inactivity (**Essential Eight**).

Azure Active Directory (Azure AD) does not include the ability to disable inactive accounts automatically, however, automation can be implemented to provide this administrative function.

With hybrid implementation types, access is managed through Active Directory Domain Services (AD DS) management tools and Active Directory mirrors changes to Azure AD. This may also include third-party tooling for automation.

This guide includes a sample script that uses the Microsoft Graph API and Azure AD PowerShell modules. The Microsoft Graph API is used to query the sign-in activity within the tenant as it is the only method to reliably ascertain the last interactive sign-in from Azure AD sign-in logs. 

The script can be executed manually by an administrator or automatically on a schedule. If the agency has an Azure subscription, it can be scheduled from within an Azure Automation account.

For simplicity, the script disables all accounts after 30 days of inactivity, excluding break glass accounts or those that are yet to sign in.

Agencies can tweak the script to better reflect their needs.

The script is provided as a sample and without warranty, limited error checking or handling provided.

## Microsoft Graph API

In order to use the Graph API to query sign-in information, the agency must create an Azure AD App registration which will be used by the script to authenticate to the Graph API.

One of the following role based access control groups are required to create the app registration:

```
Application Administrator
Cloud Application Administrator
Global Administrator 
```

Register the Application for Microsoft Graph.

1. Navigate to `Azure Portal > Active Directory > App Registration > New Registration`

   ![Register an application](../img/abac/app-registration.png#center)

2. Provide the following details for the Application registration:

   - Name: `Agency to define`
   - Who can use this application or access this API: `Accounts in this organizational directory only`
   - Redirect URI: Web \| `http://localhost`

3. Navigate to `Azure Portal > Active Directory > App registrations > Application Name > API permissions`

   ![API permissions](../img/abac/app-registration-api.png#center)

4. Add the following permissions to the application

   - API Permissions name: `Microsoft Graph`
     - Type: `Application Permissions`
     - Permission:`AuditLog.Read.All`
     - Permission: `Directory.Read.All`
     - Permission:`User.Read.All`

5. Click on the `Grant admin consent`  button to complete the registration.

6. Navigate to `Azure Portal > Active Directory > App registrations > Application Name > Certificates and secrets`

   ![Certificates and secrets](../img/abac/app-registration-secret.png#center)

7. Generate a client secret and take note of the details (client ID and secret) for use in the script below. The client secret is to be stored securely as it can be used to query the environment. The script example uses a client secret for Graph API, for additional security it is recommended to generate certificates.

## Sample automation script

The following is a sample script that is used to query Microsoft Graph API for user sign-in information:

- Users that have not signed in within 30 days are disabled,
- Emergency administrative accounts (break glass) are exempt, and
- Accounts that have not yet logged on are excluded.

The script is ideally executed within an Azure Automation account on a schedule. The permissions delegated to the script to disable user accounts would be granted to the Azure Automation RunAs account within the tenant.

```powershell
# Sample Script - disable user accounts in tenant that have not been logged in within 30 days
# Source: https://desktop.gov.au/blueprint/abac/admin-disable-inactive-users.html

# Connection information for Azure AD using Azure Automation account/runbook
$connectionName = AzureRunAsConnection
$servicePrincipalConnection=Get-AutomationConnection -Name $connectionName         
Connect-AzureAD -TenantId $servicePrincipalConnection.TenantId `
     -ApplicationId $servicePrincipalConnection.ApplicationId `
     -CertificateThumbprint $servicePrincipalConnection.CertificateThumbprint
 
# Manual connect to Azure AD
#Connect-AzureAD   
 
# Connection information for Graph API connection - specific to Agency
$clientID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$tenantName = "agency.onmicrosoft.com"
$clientSecret = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$resource = "https://graph.microsoft.com/"
 
$ReqTokenBody = @{
    Grant_Type    = "client_credentials"
    Scope         = "https://graph.microsoft.com/.default"
    client_Id     = $clientID
    Client_Secret = $clientSecret
} 
 
$TokenResponse = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$TenantName/oauth2/v2.0/token" -Method POST -Body $ReqTokenBody
 
# Get all users in the tenant
$uri = 'https://graph.microsoft.com/beta/users?$select=displayName,userPrincipalName,signInActivity'
 
# Get todays date for date test later
$Today=(Get-Date)

# @odata.nextLink is used if results greated than 999 results
$Data = while (-not [string]::IsNullOrEmpty($uri)) {
    $apiCall = try {
        Invoke-RestMethod -Headers @{Authorization = "Bearer $($Tokenresponse.access_token)"} -Uri $uri -Method Get
    }
    catch {
        $errorMessage = $_.ErrorDetails.Message | ConvertFrom-Json
    }
    $uri = $null
    if ($apiCall) {
        $uri = $apiCall.'@odata.nextLink'
        $apiCall
    }
}
 
# Set the result into an variable
$result = ($Data | select-object Value).Value
$Export = $result | select DisplayName,UserPrincipalName,@{n="LastLoginDate";e={$_.signInActivity.lastSignInDateTime}}

# Export user data
$Users = $Export | select DisplayName,UserPrincipalName,@{Name='LastLoginDate';Expression={[datetime]::Parse($_.LastLoginDate)}}

#Disable accounts that are not breakglass that have not been used in 30 days.
Foreach ($User in $Users) {
    if ($User.LastLoginDate) {        
        $LastLogin = $User.LastLoginDate
        $TimeSpan = New-TimeSpan –Start $LastLogin –End $Today
        If ($TimeSpan.Days -gt 30) {
            write-host "User to be disabled true" $User.userPrincipalName "Last logon:"$user.LastLoginDate $TimeSpan.Days "days ago"
            If ($User.userPrincipalName -notlike '*break.glass*') {
                write-host $User.userPrincipalName "-User not breakglass account, proceed with disable of user"
                Set-AzureADUser -ObjectId $User.userPrincipalName -AccountEnabled $false
                Revoke-AzureADUserAllRefreshToken -ObjectId $User.userPrincipalName
            } else {
                write-host $User.userPrincipalName "- User is breakglass account, no action taken on user"
            }               
        }
        } else {
            write-host $User.userPrincipalName "-User is active within 30 day threshold, last logon:"$user.LastLoginDate " " $TimeSpan.Days " days ago"
        }
}
```
