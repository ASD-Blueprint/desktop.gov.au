---
layout: page
title: Disable inactive accounts automation
menu: abac
---

The following guide provides instructions to automate disabling and suspending inactive accounts for cloud implementation types.

The following is guidance from the Australian Cyber Security Centre (ACSC) for inactive accounts:

- **ISM** - Access to systems, applications and data repositories is removed or suspended after one month of inactivity.
- **Essential Eight** - Privileged access to systems and applications is automatically disabled after 45 days of inactivity.

Azure Active Directory (Azure AD) does not include the ability to disable inactive accounts automatically, however, automation can be implemented to provide this administrative function.

With hybrid implementation types, access is managed through Active Directory Domain Services (AD DS) management tools and Active Directory sync mirrors these changes to Azure AD. This also may include third-party identity management toolsets for automation.

This guide includes a sample script that uses the Microsoft Graph API and Azure AD PowerShell modules. The Microsoft Graph API is used to query the sign-in activity within the tenant as it is the only method to reliably ascertain the last interactive sign-in from Azure AD sign-in logs. 

The script can be ran either manually by an administrator or automatically via a schedule. If the Agency has an Azure Subscription, it can be scheduled from within an Azure Automation account.

For simplicity, the script will disable all accounts after 30 days of inactivity across the board, excluding break glass accounts or those that are yet to sign in. 

Agencies can use the script logic as a template to enhance it based on their requirements. 

Agencies should test the script thoroughly, and should adapt for their own needs and security requirements. The script is provided as a sample and without warranty, limited error checking and handling is provided.

## Microsoft Graph API

In order to use the Graph API to query sign-in information, the Agency must create an Azure AD App registration which will be used by the script to authenticate to the Graph.

One of the following role based access control groups are required to create the app registration:

```
Application Administrator
Cloud Application Administrator
Global Administrator 
```

Register the Application for Microsoft Graph.

1. Navigate to `Azure Portal > Active Directory > App Registration > New Registration`.

   ![Register an application](/assets/images/abac/app-registration.png)

2. Provide the following details for the Application registration:

   - Name: `Agency to define`
   - Who can use this application or access this API: `Accounts in this organizational directory only`
   - Redirect URI: Web | `http://localhost`

3. Navigate to `Azure Portal > Active Directory >App registrations > Application Name > API permissions `.

   ![API permissions](/assets/images/abac/app-registration-api.png)

4. Add the following permissions to the application

   - API Permissions name: `Microsoft Graph`
     - Type: `Application Permissions`
     - Permission:`AuditLog.Read.All`
     - Permission: `Directory.Read.All`
     - Permission:`User.Read.All`

5. Click on the `Grant admin consent`  button to complete the registration.

6. Navigate to `Azure Portal > Active Directory >App registrations > Application Name > Certificates and secrets `.

   ![API secrets](/assets/images/abac/app-registration-api.png)

7. Generate a client secret and take note of the details (client ID and secret) for use in the script below. The client secret is to be stored securely as it can be used to query the environment. The script example uses a client secret for Graph API, for additional security it is recommended to generate certificates.

## Sample automation script

The following is a sample script that is used to query Microsoft Graph for user sign in information:

- Users that have not signed in within 30 days are disabled,
- Emergency administrative accounts (break glass) are exempt, and
- Accounts that have not yet logged onto are exempt.

The script is ideally ran within an Azure Automation account on a schedule. The permissions delegated to the script to disable user accounts would be granted to the Azure Automation RunAs account within the tenant.

```powershell
# Sample Script - disable user accounts in tenant that have not been logged in within 30 days

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
$ClientSecret = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
                write-host $User.userPrincipalName "-User not breakglass account, porceed with disable of user"
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
