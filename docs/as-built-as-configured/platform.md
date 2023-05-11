---

---

# Platform

<p id="date-and-time">63 minutes to read - 30 March 2023</p>

## Identity and access management

The ABAC settings for the identity and access management for all implementation types can be found below. This includes Azure Active Directory, Active Directory Identity Protection, Multi-factor authentication, Microsoft 365 Groups and hybrid identity configuration (for Hybrid implementation types only). Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Azure Active Directory

The following ABAC settings outlines the Azure Active Directory configuration for all implementation types.

`Azure Active Directory > Properties`

- Name: `<Agency Name>`
- Country or Region: `Australia`
- Location: `Australian datacenters`
- Notification language: `English`
- Technical Contact: `<username>@<Agency>.gov.au`
- Global privacy contact: `Not configured`
- Privacy Statement URL: `Not configured`
- Access management for Azure Resources: `No`

`Azure Active Directory > Users > User settings > Enterprise applications`

- Enterprise applications
  - Users can consent to apps accessing information on their behalf: `No`
  - Users can add gallery apps to their access panel: `No`
- Admin consent requests
  - Users can request admin consent to apps they are unable to consent to: `No`
  - Select users to review admin consent requests: `Not configured`
  - Selected users will receive email notifications for requests: `Not configured`
  - Selected users will receive request expiration reminders: `Not configured`
  - Consent request expires after (days): `Not configured`
- Office 365 Settings
  - Users can only see Office 365 apps in the Office 365 portal: `No`

`Azure Active Directory > Users > User settings`

- App registrations
  - Users can register applications: `No`
- Administration portal
  - Restrict non-administrator access to Azure AD administration portal: `Yes`
- LinkedIn account connections
  - Allow users to connect work or school account with LinkedIn: `No`

`Azure Active Directory > Users > User settings > External collaboration settings`

- Guest user access: `Guest users have limited access to properties and memberships of directory objects`
- Guest invite settings
  - Guest invite restrictions:
    - Only users assigned to specific admin roles can invite guest users: `Checked`
    - Enable guest self-service sign up via user flows: `No`
  - Guests can invite: `No`
  - Enable guest self-service sign up via user flows: `No`
- Collaboration restrictions
  - Allow invitations only to the specified domains (most restrictive): `Selected`
  - Target domains:
    - `<Agency>.gov.au`

`Azure Active Directory > External Identities > Configured identity providers `

- Email one-time passcode for guests
  - Enable email one-time passcode for guests effective now: `Checked`

`Azure Active Directory > Groups > General`

- Self Service Group Management
  - Owners can manage group membership requests in the Access Panel: `No`
  - Restrict user ability to access groups features in the Access Panel. Administrators (Global, Group and User Admin) will have access regardless of the value of this setting: `Yes`
- Security Groups
  - Users can create security groups in the Azure portals: `No`
- Microsoft 365 Groups
  - Users can create Microsoft 365 groups in Azure portals: `No`

`Azure Active Directory > Groups > Expiration`

- Group lifetime (in days): `365`
- Email contact for groups with no owners: `Office365_Group_Expiration@<Agency>.gov.au`
- Enable expiration for these Microsoft 365 groups: `All`

`Azure Active Directory > Groups > Naming policy`

- Blocked words: `Not configured`

`Azure Active Directory > Custom domain names`

- `<Agency>.gov.au (Primary)`
- `<Agency>.onmicrosoft.com`

`Azure Active Directory > Company branding`

- Locale: `Default`
  - Sign-in Page background image (1920x1080px):	Generic Australian Government Background
  - Banner logo (280x60px): Generic Australian Government Logo
  - Username hint: `user@agency.gov.au`
  - Sign-in page text: `<insert agency logon banner/disclaimer warning message>`
    Note: User terms are configured using Conditional Access Policies.
  - Sign-in page background color: -
  - Square logo image (240x240px): Generic Australian Government Logo
  - Square logo image, dark theme (240x240px): -
  - Show option to remain signed in: `No`

`Azure Active Directory > Devices > Device settings`

- Users may join devices to Azure AD: `All`
- Devices to be Azure AD joined or Azure AD registered require Multi-Factor Authentication: `No`
- Maximum number of devices per user: `Unlimited`
- Additional local administrators on all Azure AD joined devices: -
- Enterprise State Roaming: -

`Azure Active Directory > Devices > Enterprise State Roaming`

- Users may sync settings and app data across devices: `All`

`Azure Active Directory > Password reset > Properties`

- Self-service password reset enabled: `Selected`
- Select group: `rol-Agency-Users`

`Azure Active Directory > Password reset > Authentication methods`

- Number of methods required to reset: `2`
- Methods available to users: `Mobile app notification`, `Email`, `Mobile phone`

`Azure Active Directory > Password reset > Registration`

- Require users to register when signing in?: `Yes`
- Number of days before users are asked to re-confirm their authentication information: `180`

`Azure Active Directory > Password reset > Notifications`

- Notify users on password resets?: `Yes`
- Notify all admins when other admins reset their password?: `Yes`

`Azure Active Directory > Password reset > Customization`

- Customize helpdesk line: `No`

`PowerShell (MSOL) > Disable Self-Service user creation`

- Allow users to Email verify: `Disabled`
- Allow Ad Hoc self-service sign-up: `Disabled`

```powershell
Set-MsolCompanySettings -AllowEmailVerifiedUsers $false -AllowAdHocSubscriptions $false
```

### Microsoft 365 groups

The following ABAC settings outlines the Microsoft 365 groups configuration for all implementation types.

`Azure Active Directory > Groups > General`

- Self Service Group Management
  - Owners can manage group membership requests in the Access Panel: `No`
  - Restrict user ability to access groups features in the Access Panel. Administrators (Global, Group and User Admin) will have access regardless of the value of this setting.: `Yes`
- Security Groups
  - Users can create security groups in Azure portals: `No`
  - Owners who can assign members as group owners in Azure portals: `All`
- Microsoft 365 groups
  - Users can create Microsoft 365 groups in Azure portal: `No`
  - Owners who can assign members as group owners in Azure portal: `All`

`Azure Active Directory > Groups > Naming policy`

- Group naming policy: `Agency to define`

`Azure Active Directory > Groups > Expiration`

- Group lifetime (in days): `365`
- Email contact for groups with no owners: `Office365_Group_Expiration@<Agency>.gov.au`
- Enable expiration for these Microsoft 365 groups: `All`

`Azure Active Directory > Groups`

- Group Name: `grp-<Agency Acronym>O365-Outlook`
  - Implementation types: `all`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Office`
  - Email: `grp-<Agency Acronym>o365-outlook@<Agency>.gov.au`
  - Members: `<Agency User>`
  - Owners: `<Agency User>`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`
- Group Name: `grp-<Agency Acronym>o365-Teams`
  - Implementation types: `all`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Office`
  - Email: `grp-<Agency Acronym>o365-teams@<Agency>.gov.au`
  - Members: `<Agency User>`
  - Owners: `<Agency User>`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`
- Group Name: `rol-Agency-administrators`
  - Implementation types: `all`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members: `None admin accounts`
  - Owners: `<Agency Owner> (Admin)`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `Microsoft 365 E5`
  - Azure role assignment: `None`
- Group Name: `rol-Agency-users`
  - Implementation types: `Hybrid`
  - Membership type: `Assigned`
  - Source: `Windows server AD` 
  - Type: `Security`
  - Members: `None admin accounts`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `Microsoft 365 E5`
  - Azure role assignment: `None`
- Group Name: `rol-Agency-users`
  - Implementation types: `Cloud`
  - Membership type: `Assigned`
  - Source: `Cloud ` 
  - Type: `Security`
  - Members: `None admin accounts`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `Microsoft 365 E5`
  - Azure role assignment: `None`
- Group Name: `grp-Conditional_Access_Exclude`
  - Implementation types: `Hybrid`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members
    - Break Glass account
      - break.glass_priv1
      - break.glass_priv2
    - AAD Connect Synchronization accounts (hybrid implementation types only)
      - `Sync_<AAD Server 1>_<account GUID>`
      - `Sync_<AAD Server 2>_<account GUID>`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`
- Group Name: `grp-Conditional_Access_Exclude`
  - Implementation types: `Cloud`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members
    - Break Glass account
      - break.glass_priv1
      - break.glass_priv2
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None
- Group Name: `rol-AgencyName-o365groupcreators`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members: `<Agency User>`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`
- Group Name: `rol-ATPUsers`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members: `<Agency User>`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`
- Group Name: `rol-ATPViewers`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members: `<Agency User>`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`
- Group Name: `rol-Agency-log-admin`
  - Membership type: `Assigned`
  - Source: `Cloud`
  - Type: `Security`
  - Members: `<Agency User>`
  - Owners: `None`
  - Group membership: `None`
  - Applications: `None`
  - Licenses: `None`
  - Azure role assignment: `None`

### Delegate Office 365 Group Creation

Delegation of 365 Group creation is set through [Azure AD (preview module) PowerShell for Graph](https://docs.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0). For reference see [manage creation of groups](https://docs.microsoft.com/en-us/microsoft-365/solutions/manage-creation-of-groups?view=o365-worldwide).

```powershell
$GroupName = "rol-<AgencyName>-o365groupcreators"
$AllowGroupCreation = $False

Connect-AzureAD

$settingsObjectID = (Get-AzureADDirectorySetting | Where-object -Property Displayname -Value "Group.Unified" -EQ).id
if(!$settingsObjectID)
{
  $template = Get-AzureADDirectorySettingTemplate | Where-object {$_.displayname -eq "group.unified"}
  $settingsCopy = $template.CreateDirectorySetting()
  New-AzureADDirectorySetting -DirectorySetting $settingsCopy
  $settingsObjectID = (Get-AzureADDirectorySetting | Where-object -Property Displayname -Value "Group.Unified" -EQ).id
}

$settingsCopy = Get-AzureADDirectorySetting -Id $settingsObjectID
$settingsCopy["EnableGroupCreation"] = $AllowGroupCreation

if($GroupName)
{
  $settingsCopy["GroupCreationAllowedGroupId"] = (Get-AzureADGroup -SearchString $GroupName).objectid
}
 else {
  $settingsCopy["GroupCreationAllowedGroupId"] = $GroupName
}
Set-AzureADDirectorySetting -Id $settingsObjectID -DirectorySetting $settingsCopy

(Get-AzureADDirectorySetting -Id $settingsObjectID).Values
```

### Emergency access admin accounts

The following ABAC settings outlines the emergency access admin (break glass) accounts configuration for all implementation types.

`Azure Active Directory > Users > Break Glass > Profile`

- Name: `Break Glass`
- User Principal Name: `break.glass_priv<number>@<Tenant Name>.onmicrosoft.com`
- User Type: `Member`

`Azure Active Directory > Users > Break Glass > Assigned roles`

- Active assignments: `Global Administrator`

`Azure Active Directory > Users > Break Glass > Groups`

- Name: `Excluded from CA`, `rol-Agency-administrators`, `<Agency Name>`, `All Users`

`Azure Active Directory > Users > Break Glass > Licenses`

- Products: `None`
- Assignment Paths: `Inherited (rol-Agency-administrators)`

### Azure Active Directory Identity Protection

The following ABAC settings outlines the Identity Protection configuration for all implementation types.

`Azure Active Directory > Security > Identity Protection > MFA registration policy`

- Policy name: `Multi-factor authentication registration policy`

`Azure Active Directory > Security > Identity Protection > MFA registration policy > Assignments`

- Users: `Included:  All Users`
- Excluded: `Office365_Conditional_Access_Exclude`

`Azure Active Directory > Security > Identity Protection > MFA registration policy > Controls`

- Access: `Require Azure MFA registration`
- Enforce Policy: `On`

`Azure Active Directory > Security > Identity Protection > Sign-in Risk policy`

- Include users: `All users`

- Exclude users

  | Implementation | Accounts to exclude                                          |
  | -------------- | ------------------------------------------------------------ |
  | Cloud-native   | `break.glass_priv1@<Agency>.onmicrosoft.com`<br>`break.glass_priv2@<Agency>.onmicrosoft.com` |
  | Hybrid         | `break.glass_priv1@<Agency>.onmicrosoft.com`<br>`break.glass_priv2@<Agency>.onmicrosoft.com`<br>`Sync_<account_1>_<account guid>@<Agency>.onmicrosoft.com`<br>`Sync_<account_2>_<account guid>@<Agency>.onmicrosoft.com` |

  Sign-in risk settings: `Medium and above`

- Access: `Allow access (Require MFA)`
- Enforce policy: `On`

`Azure Active Directory > Security > Identity Protection > User Risk Policy`

- Include users: `All users`

- Exclude users

  | Implementation | Accounts to exclude                                          |
  | -------------- | ------------------------------------------------------------ |
  | Cloud-native   | `break.glass_priv1@<Agency>.onmicrosoft.com`<br>`break.glass_priv2@<Agency>.onmicrosoft.com` |
  | Hybrid         | `break.glass_priv1@<Agency>.onmicrosoft.com`<br>`break.glass_priv2@<Agency>.onmicrosoft.com`<br>`Sync_<account_1>_<account guid>@<Agency>.onmicrosoft.com`<br>`Sync_<account_2>_<account guid>@<Agency>.onmicrosoft.com` |

  User risk setting: `Medium and above`

- Access: `Allow access (with require password change selected)`
- Enforce policy: `On`

### Azure Active Directory multifactor authentication

The following ABAC settings outlines the multifactor authentication configuration for all implementation types.

`Azure Active Directory > Users > Per-user MFA`

- App passwords: `Do not allow users to create app passwords to sign in to non-browser apps`
- Trusted IPs: `Not configured`
- Verification options: `Notification through mobile app`, `Verification code from mobile app or hardware token`
- Remember multi-factor authentication: `Not configured`

`Azure Active Directory > Security > Multi-Factor Authentication > Fraud alert`

- Allow users to submit fraud alerts: `On`
- Automatically block users who report fraud: `On`
- Code to report fraud during initial greeting: `0`

### Hybrid Identity - Azure AD Connect (hybrid implementation types only)

The following ABAC settings outlines the Azure AD connect configuration for hybrid implementation types only.

Primary Azure AD Connect settings

- Installation Mode: `Custom`
- SQL Mode: `Local DB`
- Directory to connect to: `<Agency>.gov.au`
- Source of truth for account information: `On-Premises Active Directory (<Agency>.gov.au)`
- User sign-in method
```
Selected - Pass-through authentication
Not selected – Password Hash Synchronization
Not selected – Federation with AD FS
Not selected – Federation with PingFederate
```
- Enable Single Sign-on: `Enabled`
- Directory Type: `Active Directory`
- Forest for Configured Directories: `<agency_forest_name>.local`
- Active Directory UPN Suffix: `<Agency>.gov.au`
- Azure AD Domain: `Verified`
- Attribute used for login: `userPrincipalName   (User ID)`
- Domain and OU filtering
  - Directory: `<agency_forest_name>.local`
  - Sync selected domains and OUs:
  ```
  Department
    . Groups
    .  . Admin
    .  . Security Access
    . Users
    .  . Admin
    .  . General
    .  . Service Accounts
    . Computers
  ```
  - How users should be identified in your on-premises directories: `Users are represented only once across all directories`
  - How users should be identified with Azure AD: `ms-DS-Consistency-Guid`
  - Filter users and devices: `Synchronize all users and devices`
- Optional Features
  - Exchange hybrid deployment: `Enabled`
  - Exchange Mail Public Folders: `Disabled`
  - Password hash synchronization: `Disabled`
  - Password writeback: `Disabled`
  - Group writeback: `Disabled`
  - Azure AD app and attribute filtering: `Enabled`
  - Azure AD Apps: The following applications are enabled:
  ```
  Office 365 ProPlus
  Exchange Online
  SharePoint Online
  Lync Online
  Azure RMS
  Intune
  Dynamics CRM
  3rd party application
  ```

Standby Azure AD Connect settings:

- Source of truth for account information: `On-Premises Active Directory (<Agency>.gov.au)`
- User sign-in method
```
Selected - Pass-through authentication
Not selected – Password Hash Synchronization
Not selected – Federation with AD FS
Not selected – Federation with PingFederate
```
- Enable Single Sign-on: `Enabled`
- Directory Type: `Active Directory`
- Forest for Configured Directories: `<agency_forest_name>.local`
- Active Directory UPN Suffix: `<Agency>.gov.au`
- Azure AD Domain: `Verified`
- Attribute used for login: `userPrincipleName   (User ID)`
- Domain and OU filtering
  - Directory \| `<agency_forest_name>.local`
  - Sync selected domains and OUs
  ```
  Department
      . Groups
      .  . Admin
      .  . Security Access
      . Users
      .  . Admin
      .  . General
      .  . Service Accounts
      . Computers
  ```
  - How users should be identified in your on-premises directories: `Users are represented only once across all directories`
  - How users should be identified with Azure AD: `ms-DS-Consistency-Guid`
  - Filter users and devices: `Synchronize all users and devices`
- Optional Features
  - Exchange hybrid deployment: `Enabled`
  - Exchange Mail Public Folders: `Disabled`
  - Password hash synchronization: `Disabled`
  - Password writeback: `Disabled`
  - Group writeback: `Disabled`
  - Azure AD app and attribute filtering: `Enabled`
  - Azure AD Apps: The following applications are enabled:
```
Office 365 ProPlus
Exchange Online
SharePoint Online
Lync Online
Azure RMS
Intune
Dynamics CRM
3rd party application
```

The following table describes the Azure AD attributes being synchronized via Azure AD Connect.

| Attribute                           | IsExported | IsMandatory |
| ----------------------------------- | ---------- | ----------- |
| accountEnabled                      | TRUE       | TRUE        |
| accountName                         | TRUE       | FALSE       |
| altRecipient                        | TRUE       | FALSE       |
| assistant                           | TRUE       | FALSE       |
| authOrig                            | TRUE       | FALSE       |
| c                                   | TRUE       | FALSE       |
| cloudUserCertificate                | TRUE       | FALSE       |
| cloudUserSMIMECertificate           | TRUE       | FALSE       |
| cn                                  | TRUE       | FALSE       |
| co                                  | TRUE       | FALSE       |
| company                             | TRUE       | FALSE       |
| countryCode                         | TRUE       | FALSE       |
| dLMemRejectPerms                    | TRUE       | FALSE       |
| dLMemSubmitPerms                    | TRUE       | FALSE       |
| department                          | TRUE       | FALSE       |
| description                         | TRUE       | FALSE       |
| deviceId                            | TRUE       | FALSE       |
| deviceOSType                        | TRUE       | FALSE       |
| deviceTrustType                     | TRUE       | FALSE       |
| displayName                         | TRUE       | FALSE       |
| distinguishedName                   | TRUE       | FALSE       |
| domainFQDN                          | TRUE       | FALSE       |
| domainNetBios                       | TRUE       | FALSE       |
| employeeID                          | TRUE       | FALSE       |
| extensionAttribute1                 | TRUE       | FALSE       |
| extensionAttribute10                | TRUE       | FALSE       |
| extensionAttribute11                | TRUE       | FALSE       |
| extensionAttribute12                | TRUE       | FALSE       |
| extensionAttribute13                | TRUE       | FALSE       |
| extensionAttribute14                | TRUE       | FALSE       |
| extensionAttribute15                | TRUE       | FALSE       |
| extensionAttribute2                 | TRUE       | FALSE       |
| extensionAttribute3                 | TRUE       | FALSE       |
| extensionAttribute4                 | TRUE       | FALSE       |
| extensionAttribute5                 | TRUE       | FALSE       |
| extensionAttribute6                 | TRUE       | FALSE       |
| extensionAttribute7                 | TRUE       | FALSE       |
| extensionAttribute8                 | TRUE       | FALSE       |
| extensionAttribute9                 | TRUE       | FALSE       |
| facsimileTelephoneNumber            | TRUE       | FALSE       |
| givenName                           | TRUE       | FALSE       |
| hideDLMembership                    | TRUE       | FALSE       |
| homePhone                           | TRUE       | FALSE       |
| info                                | TRUE       | FALSE       |
| initials                            | TRUE       | FALSE       |
| ipPhone                             | TRUE       | FALSE       |
| isIntuneManagedDevice               | TRUE       | FALSE       |
| l                                   | TRUE       | FALSE       |
| legacyExchangeDN                    | TRUE       | FALSE       |
| mail                                | TRUE       | FALSE       |
| mailNickname                        | TRUE       | FALSE       |
| managedBy                           | TRUE       | FALSE       |
| manager                             | TRUE       | FALSE       |
| member                              | TRUE       | FALSE       |
| middleName                          | TRUE       | FALSE       |
| mobile                              | TRUE       | FALSE       |
| msDS-HABSeniorityIndex              | TRUE       | FALSE       |
| msDS-PhoneticDisplayName            | TRUE       | FALSE       |
| msExchArchiveGUID                   | TRUE       | FALSE       |
| msExchArchiveName                   | TRUE       | FALSE       |
| msExchAssistantName                 | TRUE       | FALSE       |
| msExchAuditAdmin                    | TRUE       | FALSE       |
| msExchAuditDelegate                 | TRUE       | FALSE       |
| msExchAuditDelegateAdmin            | TRUE       | FALSE       |
| msExchAuditOwner                    | TRUE       | FALSE       |
| msExchBlockedSendersHash            | TRUE       | FALSE       |
| msExchBypassAudit                   | TRUE       | FALSE       |
| msExchBypassModerationLink          | TRUE       | FALSE       |
| msExchCoManagedByLink               | TRUE       | FALSE       |
| msExchDelegateListLink              | TRUE       | FALSE       |
| msExchELCExpirySuspensionEnd        | TRUE       | FALSE       |
| msExchELCExpirySuspensionStart      | TRUE       | FALSE       |
| msExchELCMailboxFlags               | TRUE       | FALSE       |
| msExchEnableModeration              | TRUE       | FALSE       |
| msExchExtensionCustomAttribute1     | TRUE       | FALSE       |
| msExchExtensionCustomAttribute2     | TRUE       | FALSE       |
| msExchExtensionCustomAttribute3     | TRUE       | FALSE       |
| msExchExtensionCustomAttribute4     | TRUE       | FALSE       |
| msExchExtensionCustomAttribute5     | TRUE       | FALSE       |
| msExchHideFromAddressLists          | TRUE       | FALSE       |
| msExchImmutableId                   | TRUE       | FALSE       |
| msExchLitigationHoldDate            | TRUE       | FALSE       |
| msExchLitigationHoldOwner           | TRUE       | FALSE       |
| msExchMailboxAuditEnable            | TRUE       | FALSE       |
| msExchMailboxAuditLogAgeLimit       | TRUE       | FALSE       |
| msExchMailboxGuid                   | TRUE       | FALSE       |
| msExchModeratedByLink               | TRUE       | FALSE       |
| msExchModerationFlags               | TRUE       | FALSE       |
| msExchRecipientDisplayType          | TRUE       | FALSE       |
| msExchRecipientTypeDetails          | TRUE       | FALSE       |
| msExchRemoteRecipientType           | TRUE       | FALSE       |
| msExchRequireAuthToSendTo           | TRUE       | FALSE       |
| msExchResourceCapacity              | TRUE       | FALSE       |
| msExchResourceDisplay               | TRUE       | FALSE       |
| msExchResourceMetaData              | TRUE       | FALSE       |
| msExchResourceSearchProperties      | TRUE       | FALSE       |
| msExchRetentionComment              | TRUE       | FALSE       |
| msExchRetentionURL                  | TRUE       | FALSE       |
| msExchSafeRecipientsHash            | TRUE       | FALSE       |
| msExchSafeSendersHash               | TRUE       | FALSE       |
| msExchSenderHintTranslations        | TRUE       | FALSE       |
| msExchTeamMailboxExpiration         | TRUE       | FALSE       |
| msExchTeamMailboxOwners             | TRUE       | FALSE       |
| msExchTeamMailboxSharePointLinkedBy | TRUE       | FALSE       |
| msExchTeamMailboxSharePointUrl      | TRUE       | FALSE       |
| msExchUserHoldPolicies              | TRUE       | FALSE       |
| msOrg-IsOrganizational              | TRUE       | FALSE       |
| msRTCSIP-ApplicationOptions         | TRUE       | FALSE       |
| msRTCSIP-DeploymentLocator          | TRUE       | FALSE       |
| msRTCSIP-Line                       | TRUE       | FALSE       |
| msRTCSIP-OptionFlags                | TRUE       | FALSE       |
| msRTCSIP-OwnerUrn                   | TRUE       | FALSE       |
| msRTCSIP-PrimaryUserAddress         | TRUE       | FALSE       |
| msRTCSIP-UserEnabled                | TRUE       | FALSE       |
| oOFReplyToOriginator                | TRUE       | FALSE       |
| objectSid                           | TRUE       | FALSE       |
| onPremisesUserPrincipalName         | TRUE       | FALSE       |
| otherFacsimileTelephoneNumber       | TRUE       | FALSE       |
| otherHomePhone                      | TRUE       | FALSE       |
| otherIpPhone                        | TRUE       | FALSE       |
| otherMobile                         | TRUE       | FALSE       |
| otherPager                          | TRUE       | FALSE       |
| otherTelephone                      | TRUE       | FALSE       |
| pager                               | TRUE       | FALSE       |
| physicalDeliveryOfficeName          | TRUE       | FALSE       |
| postOfficeBox                       | TRUE       | FALSE       |
| postalCode                          | TRUE       | FALSE       |
| preferredLanguage                   | TRUE       | FALSE       |
| proxyAddresses                      | TRUE       | FALSE       |
| publicDelegates                     | TRUE       | FALSE       |
| pwdLastSet                          | TRUE       | FALSE       |
| registeredOwnerReference            | TRUE       | FALSE       |
| reportToOriginator                  | TRUE       | FALSE       |
| reportToOwner                       | TRUE       | FALSE       |
| securityEnabled                     | TRUE       | FALSE       |
| sn                                  | TRUE       | FALSE       |
| sourceAnchor                        | TRUE       | TRUE        |
| st                                  | TRUE       | FALSE       |
| streetAddress                       | TRUE       | FALSE       |
| targetAddress                       | TRUE       | FALSE       |
| telephoneAssistant                  | TRUE       | FALSE       |
| telephoneNumber                     | TRUE       | FALSE       |
| thumbnailPhoto                      | TRUE       | FALSE       |
| title                               | TRUE       | FALSE       |
| unauthOrig                          | TRUE       | FALSE       |
| url                                 | TRUE       | FALSE       |
| usageLocation                       | TRUE       | FALSE       |
| userCertificate                     | TRUE       | FALSE       |
| userPrincipalName                   | TRUE       | TRUE        |
| userSMIMECertificate                | TRUE       | FALSE       |
| wWWHomePage                         | TRUE       | FALSE       |

#### Authentication method (pass through agent)

The following ABAC settings outlines the AD Connect authentication method configuration for hybrid implementation types only.

- Authentication Method: `PTA`
- Number of PTA servers: `3`
- Add Proxy settings
  - Add the following text to the end of the file `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\machine.config` to enable proxy settings. This file needs to be opened as "administrator" context.
  
  ```xml
  <system.net>
    <defaultProxy enabled="true" useDefaultCredentials="true">
      <proxy
        usesystemdefault="true"
        proxyaddress="http://<proxyserveraddress>:8080"
        bypassonlocal="true"
      />
    </defaultProxy>
  </system.net>
  ```
- Required Protocols
  - Enable outbound HTTP – 80 (TCP/UDP)
  - Enable outbound HTTPS – 443 (TCP/UDP)
- Register PTA Connector
  - Execute the following power shell command to register PTA connector:
  
  ```
  cd C:\Program Files\Microsoft Azure AD Connect Authentication Agent

  ./RegisterConnector.ps1 -modulePath "C:\Program Files\Microsoft Azure AD Connect Authentication Agent\Modules\" -moduleName "PassthroughAuthPSModule" -Authenticationmode Credentials -Usercredentials $cred -Feature PassthroughAuthentication
  ```

## Privileged identity management

The ABAC settings for the Agency Privileged Identity Management for all implementations types can be found below. This includes Authentication Administrator, Azure Information Protection Administrator, Global Administrator, Exchange Administrator, Helpdesk Administrator, Intune Administrator, Office Apps Administrator, Power BI Administrator, Power Platform, Privileged Role Administrator, Security Administrator, Security Operator, SharePoint Administrator, Teams Communications Administrator, Teams Communications Support Engineer, Teams Communications Support Specialist, Teams Service Administrator and User Administrator settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Authentication administrator

`Azure AD Privileged Identity Management > Azure AD roles > Roles > Authentication Administrator > Role settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Not checked`
  - Expire eligible assignments after: `6 month(s)`
  - Allow permanent active assignment: `Not checked`
  - Expire active assignments after: `1 month(s)`
  - Require Azure Multi-Factor Authentication on active assignment: `Checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Azure information protection administrator

`Azure AD Privileged Identity Management > Azure AD roles > Roles > Azure Information Protection Administrator > Role settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Global administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Global Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Exchange administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Exchange Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Helpdesk administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Helpdesk Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Intune administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Intune Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Office Apps administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Office Apps Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Power BI administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Power BI Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Power Platform administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Power Platform Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Privileged role administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Privileged Role Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Security administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Security Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Security Operator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Security Operator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### SharePoint administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > SharePoint Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Teams communications administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams Communication Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Teams communications support engineer

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams Communications Support Engineer > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Teams communications support specialist

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams Communications Support Specialist > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Teams service administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams service Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### User administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > User Administrator > Role Settings`

- Activation
  - Activation maximum duration: `10 hours`
  - On activation, require: `Azure MFA`
  - Require justification on activation: `Checked`
  - Require ticket information on activation: `Not checked`
  - Require approval to activate: `Not checked`
  - Select approvers(s):
    - Members: None
    - Groups: None 
    - If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
- Assignment
  - Allow permanent eligible assignment: `Checked`
  - Expire eligible assignments after: `Not configured`
  - Allow permanent active assignment: `Checked`
  - Expire active assignments after: `Not configured`
  - Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  - Require justification on active assignment: `Checked`
- Notification
  - Send notifications when members are assigned as eligible to this role
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when members are assigned as active to this role:
    - Role assignment alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to the assigned user (assignee)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve a role assignment renewal/extension
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
  - Send notifications when eligible members activate this role:
    - Role activation alert
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Notification to activated user (requestor)
      - Default recipients: `Checked`
      - Additional recipients: `Not configured`
      - Critical emails only: `Not checked`
    - Request to approve an activation
      - Default recipients: `Checked`
      - Additional recipients: `Only designated approvers can receive this email`
      - Critical emails only: `Not checked`

### Licensing

The following table describes the user (`rol-Agency-users`) licensing settings for all implementation types that are configured within the tenant available at `Azure Active Directory > Groups > All groups > rol-Agency-users > Licenses > Microsoft 365 E5`

| Item                                             | Configuration |
| ------------------------------------------------ | ------------- |
| Azure Active Directory Premium P1                | On            |
| Azure Active Directory Premium P2                | On            |
| Azure Advanced Threat Protection                 | On            |
| Azure Information Protection Premium P1          | On            |
| Azure Information Protection Premium P2          | On            |
| Azure Rights Management                          | On            |
| Common Data Service                              | On            |
| Common Data Service for Teams                    | On            |
| Customer Lockbox                                 | On            |
| Data Classification in Microsoft 365             | On            |
| Exchange Online (Plan 2)                         | On            |
| Graph Connectors Search with Index               | On            |
| Information Barriers                             | On            |
| Information Protection for Office 365 - Premium  | On            |
| Information Protection for Office 365 - Standard | On            |
| Insights by MyAnalytics                          | Off           |
| M365 Communication Compliance                    | On            |
| Microsoft 365 Advanced Auditing                  | On            |
| Microsoft 365 Apps for enterprise                | On            |
| Microsoft 365 Audio Conferencing                 | On            |
| Microsoft 365 Defender                           | On            |
| Microsoft 365 Phone System                       | Off           |
| Microsoft Azure Multi-Factor Authentication      | On            |
| Microsoft Bookings                               | Off           |
| Microsoft Cloud App Security                     | On            |
| Microsoft Communications DLP                     | On            |
| Microsoft Customer Key                           | Off           |
| Microsoft Data Investigations                    | On            |
| Microsoft Defender For Endpoint                  | On            |
| Microsoft Defender for Identity                  | On            |
| Microsoft Defender for Office 365 (Plan 2)       | On            |
| Microsoft Endpoint DLP                           | On            |
| Microsoft Excel Advanced Analytics               | On            |
| Microsoft Forms (Plan E5)                        | On            |
| Microsoft Information Governance                 | On            |
| Microsoft Insider Risk Management                | On            |
| Microsoft Intune                                 | On            |
| Microsoft Kaizala Pro                            | Off           |
| Microsoft ML-based classification                | On            |
| Microsoft MyAnalytics (Full)                     | Off           |
| Microsoft Planner                                | On            |
| Microsoft Records Management                     | On            |
| Microsoft StaffHub                               | Off           |
| Microsoft Stream for O365 E5 SKU                 | On            |
| Microsoft Teams                                  | On            |
| Office 365 Advanced eDiscovery                   | On            |
| Office 365 Cloud App Security                    | On            |
| Office 365 Privileged Access Management          | On            |
| Office 365 SafeDocs                              | On            |
| Office for the web                               | On            |
| Power BI Pro                                     | On            |
| PowerApps for Office 365 Plan 3                  | Off           |
| Power Automate for Office 365                    | Off           |
| Power BI Pro                                     | Off           |
| Power Virtual Agents for Office 365              | Off           |
| Premium Encryption in Office 365                 | On            |
| Project for Office (Plan E5)                     | On            |
| SharePoint (Plan 2)                              | On            |
| Skype for Business Online (Plan 2)               | Off           |
| Sway                                             | On            |
| To-Do (Plan 3)                                   | On            |
| Universal Print                                  | Off           |
| Whiteboard (Plan 3)                              | On            |
| Windows 10 Enterprise                            | On            |
| Windows Update for Business Deployment Service   | On            |
| Yammer Enterprise                                | Off           |

The following table describes the admin (`rol-Agency-administrators`) licensing settings for all implementation types that are configured within the tenant.

`Azure Active Directory | Groups | All groups > rol-Agency-administrators | Licenses > Microsoft 365 E5`

| Item                                             | Configuration |
| ------------------------------------------------ | ------------- |
| Azure Active Directory Premium P1                | On            |
| Azure Active Directory Premium P2                | On            |
| Azure Advanced Threat Protection                 | On            |
| Azure Information Protection Premium P1          | On            |
| Azure Information Protection Premium P2          | On            |
| Azure Rights Management                          | On            |
| Common Data Service                              | Off           |
| Common Data Service for Teams                    | Off           |
| Customer Lockbox                                 | On            |
| Data Classification in Microsoft 365             | On            |
| Exchange Online (Plan 2)                         | Off           |
| Graph Connectors Search with Index               | Off           |
| Information Barriers                             | On            |
| Information Protection for Office 365 - Premium  | On            |
| Information Protection for Office 365 - Standard | On            |
| Insights by MyAnalytics                          | Off           |
| M365 Communication Compliance                    | On            |
| Microsoft 365 Advanced Auditing                  | On            |
| Microsoft 365 Apps for enterprise                | Off           |
| Microsoft 365 Audio Conferencing                 | Off           |
| Microsoft 365 Defender                           | On            |
| Microsoft 365 Phone System                       | Off           |
| Microsoft Azure Multi-Factor Authentication      | On            |
| Microsoft Bookings                               | Off           |
| Microsoft Cloud App Security                     | On            |
| Microsoft Communications DLP                     | On            |
| Microsoft Customer Key                           | Off           |
| Microsoft Data Investigations                    | On            |
| Microsoft Defender For Endpoint                  | On            |
| Microsoft Defender for Identity                  | On            |
| Microsoft Defender for Office 365 (Plan 2)       | On            |
| Microsoft Endpoint DLP                           | On            |
| Microsoft Excel Advanced Analytics               | Off           |
| Microsoft Forms (Plan E5)                        | Off           |
| Microsoft Information Governance                 | On            |
| Microsoft Insider Risk Management                | On            |
| Microsoft Intune                                 | Off           |
| Microsoft Kaizala Pro                            | Off           |
| Microsoft ML-based classification                | On            |
| Microsoft MyAnalytics (Full)                     | Off           |
| Microsoft Planner                                | Off           |
| Microsoft Records Management                     | On            |
| Microsoft StaffHub                               | Off           |
| Microsoft Stream for O365 E5 SKU                 | Off           |
| Microsoft Teams                                  | Off           |
| Office 365 Advanced eDiscovery                   | On            |
| Office 365 Cloud App Security                    | On            |
| Office 365 Privileged Access Management          | On            |
| Office 365 SafeDocs                              | On            |
| Office for the web                               | Off           |
| Power BI Pro                                     | Off           |
| PowerApps for Office 365 Plan 3                  | Off           |
| Power Automate for Office 365                    | Off           |
| Power BI Pro                                     | Off           |
| Power Virtual Agents for Office 365              | Off           |
| Premium Encryption in Office 365                 | On            |
| Project for Office (Plan E5)                     | Off           |
| SharePoint (Plan 2)                              | Off           |
| Skype for Business Online (Plan 2)               | Off           |
| Sway                                             | Off           |
| To-Do (Plan 3)                                   | Off           |
| Universal Print                                  | Off           |
| Whiteboard (Plan 3)                              | Off           |
| Windows 10 Enterprise                            | Off           |
| Windows Update for Business Deployment Service   | Off           |
| Yammer Enterprise                                | Off           |

## Windows Information Protection

### Application protection policies

The following ABAC settings outlines the application protection policy configuration for all implementation types.

`Microsoft Endpoint Manager > Client apps > App protection policies > Windows Information Protection > Properties`

- Name: `Windows Information Protection`
- Description: `Application Protection policies`
- Enrollment state: `With enrollment`
- Targeted apps
  - Protected apps:
  ```
  Office-365-ProPlus-1810-Allowed.xml
  Recommended-Denied-Office-365-ProPlus-1810.xml
  MsEdge - WIPMode-Allow - Enterprise AppLocker Policy File.xml
  Microsoft OneDrive
  Notepad
  Microsoft Paint
  Microsoft Remote Desktop
  Microsoft Teams
  Microsoft Azure Information Protection
  Microsoft Edge
  Microsoft People
  Word Mobile
  Excel Mobile
  PowerPoint Mobile
  OneDrive App
  OneNote
  Mail and Calendar for Windows 10
  Microsoft Photos
  Groove Music
  Microsoft Movies and TV
  Microsoft Messaging
  Company Portal
  ```
  - Exempt apps: -
- Required settings
  - Windows Information Protection mode: `Block`
  - Corporate identity: `<Agency>.gov.au`
- Advanced settings
  - Network perimeter
    - Type: `Cloud resources`
    - Name: `Office365`
    - Value:
    ```
    Agency.sharepoint.com|Agency-my.sharepoint.com|Agency-files.sharepoint.com|tasks.office.com|protection.office.com|meet.lync.com|teams.microsoft.com|www.yammer.com|yammer.com|persona.yammer.com|outlook.office.com|outlook.office365.com|attachments.office.net|Agency.crm.dynamics.com|Agency.visualstudio.com|Agency.powerbi.com
    ```
    - Enterprise Proxy Servers list is authoritative (do not auto-detect): `Off`
    - Enterprise IP Ranges list is authoritative (do not auto-detect): `Off`
  - Data protection
    - Upload a Data Recovery Agent (DRA) certificate to allow recovery of encrypted data: `Not configured`
    - Prevent corporate data from being accessed by apps when the device is locked. Applies only to Windows 10 Mobile: `Off`
    - Revoke encryption keys on unenroll: `On`
    - Show the enterprise data protection icon: `On`
    - Use Azure RMS for WIP: `Off`
    - Allow Windows Search Indexer to search encrypted items: `On`
    - Encrypted file extensions: -
- Assignments
  - Included groups: `rol-Agency-administrators`, `rol-Agency-users`
  - Excluded groups: -
- Scope tags: `Default`

`Microsoft Endpoint Manager > Client apps > App protection policies > iOS App Protection Policy > Properties`

- Name: `iOS App Protection Policy`
- Description: `App management for Apple`
- Platform: `iOS/iPadOS`
- Apps
  - Target to apps on all device types: `Yes`
  - Device types: -
  - Public apps:
  ```
  Adobe Acrobat Reader
  Microsoft Dynamics 365
  Microsoft Dynamics 365 for phones
  Skype for Business
  Microsoft Excel
  Microsoft Edge
  Microsoft Outlook
  Microsoft PowerPoint
  Microsoft Word
  Microsoft OneNote
  Microsoft Planner
  Microsoft Power BI
  Azure Information Protection
  Microsoft SharePoint
  Microsoft OneDrive
  Microsoft Teams
  Microsoft Stream
  Microsoft To-Do
  Microsoft Visio Viewer
  ```
  - Custom apps:
  ```
  com.adobe.acrobatdc.intune
  com.microsoft.rdc.ios  Microsoft Dynamics 365
  ```
- Data protection
  - Data Transfer
    - Backup org data to iTunes and iCloud backups: `Block`
    - Send org data to other apps: `Policy managed apps`
    - Select apps to exempt:
      - Name 1: `Default`
      - Value 1: `tel;telprompt;skype;app-settings;calshow;itms;itmss;itms-apps;itms-appss;itms-services;`
      - Name 2: `Apple Maps`
      - Value 2: `maps`
      - Name 3: `Google Maps`
      - Value 3: `comgooglemaps`
    - Save copies of org data: `Block`
    - Allow user to save copies to selected services: `OneDrive for Business`, `SharePoint`
    - Receive data from other apps: `Policy managed apps`
    - Restrict cut, copy, and paste between other apps: `Policy managed apps with paste in`
    - Cut and copy character limit for any app: `0`
    - Third party keyboards: `Block`
  - Encryption
    - Encrypt org data: `Require`
  - Functionality
    - Sync app with native contacts app: `Block`
    - Printing org data: `Block`
    - Restrict web content transfer with other apps: `Microsoft Edge`
    - Org data notifications: `Block org Data`
- Access requirements
  - PIN for access: `Require`
  - PIN type: `Numeric`
  - Simple PIN: `Block`
  - Select minimum PIN length: `4`
  - Touch ID instead of PIN for access (iOS 8+/iPadOS): `Block`
  - PIN reset after number of days: `Yes`
  - Number of days: `365`
  - App PIN when device PIN is set: `Require`
  - Work or school account credentials for access: `Require`
  - Recheck the access requirements after (minutes of inactivity): `30`
- Conditional launch

| Setting                   | Value | Action                 |
| ------------------------- | ----- | ---------------------- |
| Max PIN attempts          | 5     | Reset PIN              |
| Offline grace period      | 720   | Block access (minutes) |
| Offline grace period      | 90    | Wipe data (days)       |
| Jailbroken/rooted devices |       | Block access           |
| Min OS version            | 12.0  | Block access           |

- Assignments
  - Included groups: `rol-Agency-administrators`, `rol-Agency-users`
  - Excluded groups: `grp-Windows-10-Devices`
- Scope tags: `Default`

## Threat protection

### Microsoft Defender for Endpoint

The following ABAC settings outlines the Microsoft Defender for Endpoint policy configuration for all implementation types.

`Microsoft 365 Defender > Settings > Endpoints`

#### General

- Data retention
  - Data Storage: `US`
  - Data Retention: `180 days`
- Email notifications: `Not Configured`
- Advanced features
  - Automated Investigation: `On`
  - Live Response: `On`
  - Live Response for Servers: `On`
  - Live Response unsigned script execution: `Off`
  - Restrict correlation to within scoped device groups: `Off`
  - Enable EDR in block mode: `On`
  - Automatically Resolve Alerts: `On`
  - Allow or block file: `On`
  - Custom network indicators: `On`
  - Tamper protection: `On`
  - Show user details: `On`
  - Skype for Business integration: `On`
  - Microsoft Defender for Identity integration: `On`
  - Office 365 Threat Intelligence connection: `On`
  - Microsoft Defender for Cloud Apps: `On`
  - Microsoft Secure Score: `On`
  - Web content filtering: `On`
  - Download quarantined files: `On`
  - Share endpoint alerts with Microsoft Compliance Center: `On`
  - Microsoft Intune connection: `On`
  - Device discovery: `On`
  - Preview features: `On`
  - Microsoft Threat Expert: `Not configured`
- Auto remediation

| Rank | Device group                | Remediation level                      |
| ---- | --------------------------- | -------------------------------------- |
| 1    | Windows 10                  | Full - Remediate threats automatically |
| Last | Ungrouped devices (default) | Full - Remediate threats automatically |

#### Permissions

- Roles
  - Microsoft Defender for Endpoint administrator (default)
    - Assigned user groups: `rol-Agency-security-defenderatp-admins`
  - Microsoft Defender for Endpoint Viewer
    - Description: `Viewer privileges`
    - View Data
      - Security operations
      - Threat and vulnerability management
    - Assigned user groups: `rol-Agency-security-defenderatp-viewer`
  - Microsoft Defender for Endpoint Remediation
    - Description: `Investigate and remediate alerts`
    - View Data
      - Security operations
      - Threat and vulnerability management
    - Active remediation actions
      - Security operations
      - Threat and vulnerability management - Exception handling
      - Threat and vulnerability management - Remediation handling
    - Alerts investigation
    - Live response capabilities
      - Advanced
    - Assigned user groups: `rol-Agency-security-defenderatp-remediation`
- Device groups
  - Device group name: `Windows 10`
    - Rank: `1`
    - Automation level: `Full - Remediate threats automatically`
    - Members:
    ```
    Name Starts with <Agency 3 characters>
    And Domain Starts with <Not configured>
    And Tag: Starts with <Not configured>
    And OS In <Not configured>
    ```
    - User access
      - Azure AD user groups with access to this machine group: `rol-Agency-security-defenderatp-admins`, `rol-Agency-security-defenderatp-viewer`, `rol-Agency-security-defenderatp-remediation`
  - Device group name: `Ungrouped devices (default)`
    - Rank: `Last`
    - Automation level: `Full - Remediate threats automatically`
    - User access
      - Azure AD user groups with access to this machine group: `rol-Agency-security-defenderatp-admins`, `rol-Agency-security-defenderatp-viewer`, `rol-Agency-security-defenderatp-remediation`  

#### APIs

- SIEM
  - General
    - Application URI: `https://WindowsDefenderATPSiemConnector`
    - Client ID: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
    - Authorisation server URL: `https://login.windows.net/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/oauth2/token`
    - Resource: `https://graph.windows.net`
    - Client secret: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
    - Choose the SIEM you want to configure and download details to file.: `<Agency SIEM>`

#### Rules

- Custom detections: `Not configured`
- Alert suppression: `Not configured`
- Indicators: `Not configured`
- Process Memory Indicators: `Not configured`
- Web content filtering
  - Policy name: `Adult Sites`
    - Blocked categories:
    ```
    Cults
    Gambling
    Nudity
    Pornography/Sexually explicit
    Sex education
    Tasteless
    Violence
    ```
    - Scope: `All devices`
  - Policy name: `High Traffic Sites`
    - Blocked categories:
    ```
    Download sites
    Image sharing
    Peer-to-peer
    Streaming media & downloads
    ```
    - Scope: `All devices`
  - Policy name: `Legal Liability`
    - Blocked categories:
    ```
    Child abuse images
    Criminal activitiy
    Hacking
    Hate & intolerance
    Illegal drug
    Illegal software
    School cheating
    Self-harm
    Weapons
    ```
    - Scope: `All devices`
- Automation uploads
  - Content analysis: `On`
  - File extension names: `wsf,tcl,sys,scr,'',job,ws,ko.gz,vbe,bat,ps1,vb,com,air,cpl,exe,rb,cmd,msi,url,reg,gadget,dll,ko,js,pl,sh,rgs,inf,vbs,elf,py`
  - Memory Content Analysis: `On`
- Automation folder exclusions: `Not configured`

#### Device management

- Onboarding
  - Select operating system to start offboarding process: `Windows 10`
  - Deployment method: `Intune`
- Offboarding
  - Select operating system to start offboarding process: `Windows 10`
  - Deployment method: `Intune`

### Microsoft Defender for Cloud Apps

The following ABAC settings outlines the Microsoft Defender for Cloud Apps configuration for all implementation types.

`https://portal.cloudappsecurity.com/ > Settings`

- System
  - Organization details
    - Organizations display name: `AGENCY`
    - Environment name: `AGENCY ENVIRONMENT NAME`
    - Managed Domains: `<Agency>.onmicrosoft.com`, `<Agency>.gov.au`
  - Mail settings
    - Email sender identity: `Default settings`
  - Export settings
    - Export settings: `None`
  - Automatic sign out
    - Sign out when a user is inactive for: `After 15 Minutes`
- Cloud Discovery
  - Snapshot reports: `Not configured`
  - Continuous reports
    - Report name: `Application Group`
      - Comment: `This report captures information on the User Group Application (Cloud App Security)`
      - Data sources: `All data sources`
      - Filters: `User Group > Application (Defender for Cloud Apps)`
    - Report name: `External Users`
      - Comment: `This report captures information on the External Users group`
      - Data sources: `All data sources`
      - Filters: `User Group > External users`
    - Report name: `Windows 10 Endpoint Users`
      - Comment: `This report will capture information for Windows 10 Endpoint users.`
      - Data sources: `Win10 Endpoint Users`
    - Report name: `Cloud App Security Conditional Access App Control`
      - Comment: `Cloud App Security Conditional Access App Control`
      - Data sources: `Cloud App Security Proxy`
  - Automatic log upload
    - Data sources
      - Name: `Win10 Endpoint Users`
        - Source: `Windows Defender Advanced Threat Protection`
        - Receiver type: `Built-in`
      - Name: `Cloud App Security Proxy`
        - Source: `Cloud App Security Conditional Access App Control`
        - Receiver type: `Built-in`
    - Log collectors: `Not configured`
  - App tags
    - Sanctioned:
    ```
    Microsoft Exchange Online
    Microsoft Teams
    Microsoft SharePoint Online
    Microsoft Skype for Business
    Office 365
    Microsoft Power BI
    Microsoft OneDrive for Business
    Microsoft Defedner for Cloud Apps
    Microsoft Azure
    Active Directory
    ```
    - Unsanctioned: `Not configured`
    - Monitored: `Not configured`
    - Restricted: `Not configured`
  - Exclude entities: `Not configured`
  - Microsoft Defender for Endpoint
    - Block unsanctioned apps: `Checked`
  - User enrichment
    - Enrich discovered user identifiers with Azure Active Directory usernames: `Checked`
  - Anonymization: `Not configured`
- Threat Protection
  - Microsoft Defender for Identity integration: `Checked`
  - Azure AD Identity Protection: `Checked`
  - App Governance: `Not configured`
- Information Protection
  - Admin quarantine folder location: `https://<Agency>.sharepoint.com/sites/quarantine`
  - User notification: `Not configured`
  - Microsoft Information Protection
    - Automatically scan new files for Microsoft Information Protection classification labels and content inspection warnings: `Checked`
    - Only scan files for Microsoft Information Protection classification labels and content inspection warnings from this tenant: `Checked`
  - Files
    - Enable file monitoring: `Enabled`
- Conditional Access App Control
  - Default behavior
    - During system downtime: `Allow access`
  - User monitoring: `Not configured`
  - Device identification: `Not configured`

`Settings (Cog) > Manage admin access`

- User: `<Agency User>`
- Email: `<agency_username>@<Agency>.gov.au`
- Role: `Global Admin`
- Permission: `Full access`

`Settings (Cog) > User groups`

| User                               | Type      | Source app | Status                |
| ---------------------------------- | --------- | ---------- | --------------------- |
| Office 365 administrator           | Automatic | Office 365 | Imported successfully |
| External users                     | Automatic | All apps   | Imported successfully |
| Application (Defender for Cloud Apps)   | Automatic | All apps   | Imported successfully |

`Settings (Cog) > App connectors`

| Application                                | Status    | Selected Components                                          |
| ------------------------------------------ | --------- | ------------------------------------------------------------ |
| Office 365 (Collaboration)                 | Connected | Azure AD Users and groups<br>Azure AD Management events<br>Azure AD Sign-in events<br>Azure AD Apps<br>Office 365 activities<br>Office 365 files |
| Microsoft Azure (Cloud computing platform) | Connected | Not Applicable                                               |

`Settings (Cog) > Security extensions`

- API tokens: `Not configured`
- External DLP: `Not configured`
- Playbooks: `Not configured`

`Home > Control > Policy`

- Default Policies Active: `26`
- Default Policies Disabled: `3`
- Create activity policy
  - Policy name: `Break Glass Account 1 Activity`
  - Policy severity: `Medium`
  - Category: `Privileged accounts`
  - Description: `This policy monitors break glass account called "break.glass_priv1@<Agency>.onmicrosoft.com" for all logon activity`
  - Account to monitor: `break.glass_priv1@<Agency>.onmicrosoft.com`
  - Act on activity: `Single activity`
  - Policy Filters
    - Office 365
    ```
    SAS:EndAuth
    WindowsAuthenticationController:usernamemixed
    OrgIdWsTrust2:extsts
    WindowsAuthenticationController:sso
    DebugMode:Set
    Federation:oauth2claimsprovider
    ForeignRealmIndexLogonInitialAuthUsingSAML20PostSimpleSign
    SSO Logon
    bind:BindComplete
    OAuth2:Authorize
    Federation:oauth2msa
    WsFederation:wsfederation
    OAuth2:Token
    Federation:oauth2
    bind:Bind
    OrgIdWsFederation:federation
    LOGIN
    UserInfo:Index
    ForeignRealmIndexLogonInitialAuthUsingADFSFederatedToken
    DeviceAuth:ReprocessTls
    KeyDataService:GetKeyData
    WindowsAuthenticationController:windowstransport
    PasswordLogonCookieCopyUsingDAToken
    Login:login
    SAS:ProcessAuth
    Consent:Set
    Login:resume
    Saml2:processrequest
    PIA:PIAProcessAuth
    OAuth2:DeviceAuth
    cmsi:Cmsi
    PasswordLogonSilentReAuthUsingDAToken
    ForeignRealmIndexLogonCookieCopyUsingDAToken
    OAuth2:ApproveSession
    Consent:Grant
    Login:reprocess
    MessagePrompt:MessagePrompt
    OrgIdWsFederation:postsrfactionhandler
    DeviceAuth:PKeyAuth
    SAS:BeginAuth
    OrgIdWsTrust2:process
    PasswordLogonInitialAuthUsingPassword
    ForeignRealmIndexLogonCookieCopyUsingSha1RememberMyPassword
    kmsi:kmsi
    SSPR:end
    WindowsAuthenticationController:sso
    PasswordLogonInitialAuthUsingADFSFederatedToken
    DeviceAuth:ReprocessTls
    KeyDataService:GetKeyData
    OrgIdWsTrust2:extsts
    OAuth2:Authorize
    SidToName:SidToName
    SAS:ProcessAuth
    ```
    - Azure
    ```
    OAuth2:DeviceAuth
    SAS:BeginAuth
    PIA:PIAProcessAuth
    DeviceAuth:ReprocessTls
    KeyDataService:GetKeyData
    OAuth2:Token
    Login:reprocess
    MessagePrompt:MessagePrompt
    Federation:oauth2claimsprovider
    Federation:oauth2
    Consent:Grant
    Login:reprocess
    SAS:EndAuth
    OrgIdWsFederation:postsrfactionhandler
    Login:login
    bind:Bind
    SAS:ProcessAuth
    SSPR:end
    WindowsAuthenticationController:usernamemixed
    OAuth2:DeviceAuth
    OAuth2:ApproveSession
    WsFederation:wsfederation
    KeyDataService:GetKeyData
    Consent:Set
    OAuth2:Token
    LOGIN
    PIA:PIAProcessAuth
    DeviceAuth:PKeyAuth
    OrgIdWsFederation:federation
    Login:resume
    kmsi:kmsi
    LOGIN
    ```
    - Microsoft
    ```
    OAuth2:DeviceAuth
    Login:resume
    Consent:Grant
    SAS:BeginAuth
    WsFederation:wsfederation
    OAuth2:Authorize
    Saml2:processrequest
    login
    Login:reprocess
    Federation:oauth2claimsprovider
    Federation:oauth2
    OrgIdWsTrust2:process
    kmsi:kmsi
    SAS:EndAuth
    LOGIN
    Login:login
    DeviceAuth:ReprocessTls
    MessagePrompt:MessagePrompt
    SAS:ProcessAuth
    Consent:Set
    WindowsAuthenticationController:usernamemixed
    ```
  - Alerts
    - Create an alert for each matching event with the policy's severity: `Configured`
    - Send alert as email: `Not configured`
    - Send alert as text message: `Not configured`
    - Send alerts to Power Automate: `Not configured`
  - Governance actions
    - All apps: `Not configured`
    - Office 365: `Not configured`
- Create activity policy
  - Policy name: `Break Glass Account 2 Activity`
  - Policy severity: `Medium`
  - Category: `Privileged accounts`
  - Description: `This policy monitors break glass account called "break.glass_priv2@<Agency>.onmicrosoft.com" for all logon activity`
  - Account to monitor: `break.glass_priv2@<Agency>.onmicrosoft.com`
  - Act on activity: `Single activity`
  - Policy Filters
    - Office 365
    ```
    SAS:EndAuth
    WindowsAuthenticationController:usernamemixed
    OrgIdWsTrust2:extsts
    WindowsAuthenticationController:sso
    DebugMode:Set
    Federation:oauth2claimsprovider
    ForeignRealmIndexLogonInitialAuthUsingSAML20PostSimpleSign
    SSO Logon
    bind:BindComplete
    OAuth2:Authorize
    Federation:oauth2msa
    WsFederation:wsfederation
    OAuth2:Token
    Federation:oauth2
    bind:Bind
    OrgIdWsFederation:federation
    LOGIN
    UserInfo:Index
    ForeignRealmIndexLogonInitialAuthUsingADFSFederatedToken
    DeviceAuth:ReprocessTls
    KeyDataService:GetKeyData
    WindowsAuthenticationController:windowstransport
    PasswordLogonCookieCopyUsingDAToken
    Login:login
    SAS:ProcessAuth
    Consent:Set
    Login:resume
    Saml2:processrequest
    PIA:PIAProcessAuth
    OAuth2:DeviceAuth
    cmsi:Cmsi
    PasswordLogonSilentReAuthUsingDAToken
    ForeignRealmIndexLogonCookieCopyUsingDAToken
    OAuth2:ApproveSession
    Consent:Grant
    Login:reprocess
    MessagePrompt:MessagePrompt
    OrgIdWsFederation:postsrfactionhandler
    DeviceAuth:PKeyAuth
    SAS:BeginAuth
    OrgIdWsTrust2:process
    PasswordLogonInitialAuthUsingPassword
    ForeignRealmIndexLogonCookieCopyUsingSha1RememberMyPassword
    kmsi:kmsi
    SSPR:end
    WindowsAuthenticationController:sso
    PasswordLogonInitialAuthUsingADFSFederatedToken
    DeviceAuth:ReprocessTls
    KeyDataService:GetKeyData
    OrgIdWsTrust2:extsts
    OAuth2:Authorize
    SidToName:SidToName
    SAS:ProcessAuth
    ```
    - Azure
    ```
    OAuth2:DeviceAuth
    SAS:BeginAuth
    PIA:PIAProcessAuth
    DeviceAuth:ReprocessTls
    KeyDataService:GetKeyData
    OAuth2:Token
    Login:reprocess
    MessagePrompt:MessagePrompt
    Federation:oauth2claimsprovider
    Federation:oauth2
    Consent:Grant
    Login:reprocess
    SAS:EndAuth
    OrgIdWsFederation:postsrfactionhandler
    Login:login
    bind:Bind
    SAS:ProcessAuth
    SSPR:end
    WindowsAuthenticationController:usernamemixed
    OAuth2:DeviceAuth
    OAuth2:ApproveSession
    WsFederation:wsfederation
    KeyDataService:GetKeyData
    Consent:Set
    OAuth2:Token
    LOGIN
    PIA:PIAProcessAuth
    DeviceAuth:PKeyAuth
    OrgIdWsFederation:federation
    Login:resume
    kmsi:kmsi
    LOGIN
    ```
    - Microsoft
    ```
    OAuth2:DeviceAuth
    Login:resume
    Consent:Grant
    SAS:BeginAuth
    WsFederation:wsfederation
    OAuth2:Authorize
    Saml2:processrequest
    login
    Login:reprocess
    Federation:oauth2claimsprovider
    Federation:oauth2
    OrgIdWsTrust2:process
    kmsi:kmsi
    SAS:EndAuth
    LOGIN
    Login:login
    DeviceAuth:ReprocessTls
    MessagePrompt:MessagePrompt
    SAS:ProcessAuth
    Consent:Set
    WindowsAuthenticationController:usernamemixed
    ```
  - Alerts
    - Create an alert for each matching event with the policy's severity: `Configured`
    - Send alert as email: `Not configured`
    - Send alert as text message: `Not configured`
    - Send alerts to Power Automate: `Not configured`
  - Governance actions
    - All apps: `Not configured`
    - Office 365: `Not configured`

#### Cloud Discovery > Score metrics

##### General

- Category importance: `Low (x1)`

| Field               | Importance  | N/A values    |
| ------------------- | ----------- | ------------- |
| Founded             | Medium (x2) | Excluded N/As |
| Holding             | Medium (x2) | Excluded N/As |
| Domain registration | Medium (x2) | Excluded N/As |
| Consumer popularity | Medium (x2) | Excluded N/As |

##### Security

- Category importance: `Medium (x2)`

| Field                          | Importance  | N/A values    |
| ------------------------------ | ----------- | ------------- |
| Data-at-rest encryption method | Medium (x2) | Excluded N/As |
| Multi-factor authentication    | Medium (x2) | Excluded N/As |
| IP address restriction         | Medium (x2) | Excluded N/As |
| User audit trail               | Medium (x2) | Excluded N/As |
| Admin audit trail              | Medium (x2) | Excluded N/As |
| Data audit trail               | Medium (x2) | Excluded N/As |
| Data classification            | Medium (x2) | Excluded N/As |
| Data-at-rest encryption        | Medium (x2) | Excluded N/As |
| User-roles support             | Medium (x2) | Excluded N/As |
| Valid certificate name         | Medium (x2) | Excluded N/As |
| Trusted certificate            | Medium (x2) | Excluded N/As |
| Encryption protocol            | Medium (x2) | Excluded N/As |
| Heartbleed patched             | Medium (x2) | Excluded N/As |
| HTTP security headers          | Medium (x2) | Excluded N/As |
| Support SAML                   | Medium (x2) | Excluded N/As |
| Enforce transport encryption   | Medium (x2) | Excluded N/As |
| Penetration Testing            | Medium (x2) | Excluded N/As |
| Requires user authentication   | Medium (x2) | Excluded N/As |
| Password Policy                | Medium (x2) | Excluded N/As |

##### Compliance

- Category importance: `Medium (x2)`

| Field           | Importance  | N/A values    |
| --------------- | ----------- | ------------- |
| FINRA           | Medium (x2) | Excluded N/As |
| FISMA           | Medium (x2) | Excluded N/As |
| GAAP            | Medium (x2) | Excluded N/As |
| HIPAA           | Medium (x2) | Excluded N/As |
| ISAE 3402       | Medium (x2) | Excluded N/As |
| ISO 27001       | Medium (x2) | Excluded N/As |
| ITAR            | Medium (x2) | Excluded N/As |
| SOC 1           | Medium (x2) | Excluded N/As |
| SOC 2           | Medium (x2) | Excluded N/As |
| SOC 3           | Medium (x2) | Excluded N/As |
| SOX             | Medium (x2) | Excluded N/As |
| SSAE 16         | Medium (x2) | Excluded N/As |
| Safe Harbor     | Medium (x2) | Excluded N/As |
| PCI DSS version | Medium (x2) | Excluded N/As |
| ISO 27018       | Medium (x2) | Excluded N/As |
| GLBA            | Medium (x2) | Excluded N/As |
| FedRAMP level   | Medium (x2) | Excluded N/As |
| CSA STAR level  | Medium (x2) | Excluded N/As |
| Privacy Shield  | Medium (x2) | Excluded N/As |
| ISO 27017       | Medium (x2) | Excluded N/As |
| FFIEC           | Medium (x2) | Excluded N/As |

##### Legal

- Category importance: `Medium (x2)`

| Field                       | Importance  | N/A values    |
| --------------------------- | ----------- | ------------- |
| Data ownership              | Medium (x2) | Excluded N/As |
| DMCA                        | Medium (x2) | Excluded N/As |
| Data retention policy       | Medium (x2) | Excluded N/As |
| GDPR – Report data breaches | Medium (x2) | Excluded N/As |
| GDPR – Data protection      | Medium (x2) | Excluded N/As |
| GDPR – User ownership       | Medium (x2) | Excluded N/As |

### Log Analytics

The following ABAC settings are required for Log Analytics log aggregation for Azure AD and Endpoint Manager. The Agency requires an Azure subscription to support this configuration.

`https://portal.azure.com/ > Log Analytics workspaces > Create Log Analytics Workspace  `

The following tables describe the Log Analytics settings that are configured within the Log Analytics Workspace for all implementation types.

| Item                            | Configuration                                    |
| ------------------------------- | ------------------------------------------------ |
| Workspace Name                  | agency-log-workspace                             |
| Azure Subscription              | Agency subscription                              |
| Region                          | Australia Central                                |
| Log retention                   | Retention Period: 1 year<br>Data Volume Cap: Off |
| Log Analytics Contributor Group | rol-Agency-log-admin                             |

#### Microsoft Endpoint Manager

`Endpoint Manager admin center > Reports > Diagnostic settings` 

| Item                    | Configuration                                                |
| ----------------------- | ------------------------------------------------------------ |
| Diagnostic Setting Name | Send to Log Analytics                                        |
| Log                     | AuditLogs <br>SignInLogs <br>NonInteractiveUserSignInLogs <br>ServicePrincipalSignInLogs <br>ManagedIdentitySignInLogs <br>ProvisioningLogs |
| Destination details     | Send to Log Analytics Workspace (agency-log-workspace)       |

#### Azure Active Directory

`Azure Active Directory > Monitoring > Diagnostic settings`

| Item                    | Configuration                                                |
| ----------------------- | ------------------------------------------------------------ |
| Diagnostic Setting Name | Send to Log Analytics                                        |
| Log                     | AuditLogs <br>SignInLogs <br>NonInteractiveUserSignInLogs <br>ServicePrincipalSignInLogs <br>ManagedIdentitySignInLogs <br>ProvisioningLogs<br>RiskyUsers<br>UserRiskEvents |
| Destination details     | Send to Log Analytics Workspace (agency-log-workspace)       |

## Client configuration

### Intune configuration

All Windows 10 client configuration is accomplished via Microsoft Intune policies for all implementation types. Hybrid implementation types may use a combination of Group Policy and MECM to configure clients in addition to Intune policies. These Intune configuration policies are detailed in separate documents that are explained in table below. 

The following table describes the additional Intune Configuration Documents required for the blueprint for all implementation types.

| Section              | Description                                                  | Document Name                                                |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Device enrollment    | Automatic Enrolment, Enrolment Status page, Deployment Profiles | [ABAC - Intune Enrolment](../../as-built-as-configured/intune-enrolment) |
| Device compliance    | Device compliance policies                                   | [ABAC - Intune Compliance](../../as-built-as-configured/intune-compliance) |
| Device configuration | Configuration Profiles, PowerShell scripts                   | [ABAC - Intune Configuration](../../as-built-as-configured/intune-configuration) |
| Device security      | Windows 10 Security Hardening (ACSC), Microsoft Defender Configuration, Microsoft Edge Configuration | [ABAC - Intune Configuration](../../as-built-as-configured/intune-configuration) |
| Client apps          | Win32 Apps, Web links, Windows MSI Line of Business apps, Office 365 installation, Windows Information Protection | [ABAC - Intune Applications](../../as-built-as-configured/intune-applications) |
| Conditional Access   | Conditional Access policies                                  | [ABAC - Conditional Access Policies](../../as-built-as-configured/conditional-access-policies) |
| Software Updates     | Windows 10 update rings and updates configuration            | [ABAC – Intune Software Updates](../../as-built-as-configured/intune-software-updates) |

### Intune Co-management configuration (Hybrid implementation types only)

The following configuration is required for Intune Co-management is for Hybrid implementations only.

`Microsoft Endpoint Manager > Quick Start > Account Details`

- Account Name: `<Agency>.gov.au`
- Account status: `Active`
- Account location: `Australia 0101`

`Azure Active Directory > Mobility (MDM and MAM) > Microsoft Intune`

- MDM user scope: `All`
- MDM terms of use URL: `https://portal.manage.microsoft.com/TermsofUse.aspx`
- MDM discovery URL: `https://enrollment.manage.microsoft.com/enrollmentserver/discovery.svc`
- MDM compliance URL: `https://portal.manage.microsoft.com/?portalAction=Compliance`
- MAM user scope: `None`
- MAM terms of use URL: `<Blank>`
- MAM discovery URL: `https://wip.mam.manage.microsoft.com/Enroll`
- MAM Compliance URL: `<Blank>`

`Azure Active Directory > Mobility (MDM and MAM) > Microsoft Intune Enrollment`

- MDM user scope: `All`
- MDM terms of use URL: `https://portal.manage.microsoft.com/TermsofUse.aspx`
- MDM discovery URL: `https://enrollment.manage.microsoft.com/enrollmentserver/discovery.svc`

`MECM admin console > About Microsoft Endpoint Configuration Manager`

- Version: `2107`
- SOE Name: `Intune Auto Enrolment`
- Enrolled Device Types: `Windows 10 | Version 21H2 | Build 19044`

`MECM admin console > Administration > Overview > Cloud Services > Co-management`

- Name: `CoMgmtSettingsProd`
- Description: `Co-management Production policy`
- Tenant onboarding: `AzurePublicCloud`
- Enablement
  - Automatic enrollment in Intune: `All`
- Workloads
  - Compliance policies: `Intune`
  - Device Configuration: `Configuration Manager`
  - Endpoint Protection: `Configuration Manager`
  - Resource access policies: `Configuration Manager`
  - Office Click-to-run apps: `Configuration Manager`
  - Windows Update policies: `Configuration Manager`

`MECM admin console > Monitoring > Overview > Co-Management`

Co-Management monitor screen is showing 

- Green for Client OS Distribution,
- Blue for Co-management Enrollment Status

![](../img/abac/sccm-comanagement.png#center)

### Printing

The following table outlines the client printing configuration per implementation type.

| Implementation | Item                          | Configuration                                                |
| -------------- | ----------------------------- | ------------------------------------------------------------ |
| All            | Printer addition restrictions | Device Restrictions Intune Policy will be used to prevent addition and delivery of new printers via DNS name of printer: `Endpoint Manager Admin center > Devices > Device Restrictions > Printer > Add New Printers: Block` |
| All            | Shared Printer Connections    | Prevent user install via Intune policy CSP: `Devices_PreventUsersFromInstallingPrinterDriversWhenConnectingToSharedPrinters` |
| Cloud-native   | Driver Delivery               | Intune application deployment (*.intunewin) via script or native printer installation utility will be used for printer driver installation. |
| Hybrid         | Driver Delivery               | Existing MECM solution will be utilised in driver delivery for local printers. <br>Point to Print is enabled through GPO for printer driver installation from network printer queues. |
| All            | External Printer Connectivity | External Printer Connectivity will be via an Always On VPN.  |
| All            | Hybrid Cloud Print            | Not Configured.                                              |

### End user internet access

The following table outlines the client internet access configuration scenarios per implementation type.

| Implementation | Item                              | Configuration                                                |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| All            | Internet Access Mechanism         | As per agency pattern for Internet access.                   |
| All            | Web Proxy  Configuration          | Proxy can be configured in Intune via the NetworkProxyCSP: `*./Vendor/MSFT/NetworkProxy` or depending on the Agency internet access pattern. |
| Cloud-native   | DNS Provider                      | Existing on-premises Active Directory DNS services will be utilised. |
| Hybrid         | DNS Provider                      | As per agency pattern for DNS services.                      |
| All            | Office 365 Endpoint connectivity  | As per agency pattern for internet browser connectivity. Optimisation of traffic is required and recommended, see [Office 365 URLs and IP address ranges](https://docs.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide) for which categories are recommended for optimisation, and those that are compatible with ExpressRoute (if applicable). |
| Cloud-native   | Office 365 Authentication Traffic | Configured to traverse the web proxy (if part of Agency pattern). Cloud-native implementation types without a proxy that supports SSL inspection will not be able to implement tenancy whitelisting feature. |
| Hybrid         | Office 365 Authentication Traffic | Existing on-premises proxy will be utilised for Hybrid implementation types. |
| Cloud          | Windows Updates                   | Client Devices will retrieve updates direct from Microsoft. Windows Update for Business Update Rings are configured in Intune as per the [Software Updates ABAC](../../as-built-as-configured/intune-software-updates). |
| Hybrid         | Windows Updates                   | Existing MECM/WSUS solution will be utilised for update retrieval.<br>Hybrid Agencies may wish to transition over to Windows Update Rings in Intune (Windows Update for Business) by moving the Windows Update Policy slider to Intune. For more information on this configuration pattern see [Windows Update for Business with management solutions](https://docs.microsoft.com/en-us/windows/deployment/update/waas-integrate-wufb). |

## Application control

The ABAC settings for the Agency Application Control can be found below. Please note, if a setting is not mentioned below, it should be assumed to have been left at its default setting.

### Windows Defender Application Control

#### MECM managed installer (Hybrid implementation types)

The ABAC settings for MECM managed installer are applicable to hybrid implementation types only.

- Device Collection
  - Name: `WDAC-DeploymentCollection`
  - Description: `Collection used to deploy Managed Installer WDAC policy`
  - Limiting collection: `All Desktop and Server Clients`
  - Membership Rule
    - Type: `Query rule`
    - Name: `Windows 10 Machine Query`
    - Query: `select SMS_R_SYSTEM.ResourceID, SMS_R_SYSTEM.ResourceType, SMS_R_SYSTEM.Name, SMS_R_SYSTEM.SMSUniqueIdentifier, SMS_R_SYSTEM.ResourceDomainORWorkgroup, SMS_R_SYSTEM.Client from SMS_R_System where SMS_R_System.OperatingSystemNameandVersion like "%Workstation%" and SMS_R_System.OperatingSystemNameandVersion like "%10.0%" `
  - Use incremental updates for this collection: `enabled`
  - Schedule a full update on this collection: `enabled`
- Application Control Policy
  - Name: `Agency-WDAC-ManagedInstaller`
  - Description: -
  - Enforcement mode: `Enforcement enabled - Only allow trusted executables to run`
  - Authorize software that is trusted by the Intelligent Security Graph: `Disabled`
  - Trusted files or folders: `Add as required`
  - Deployment collection: `WDAC-DeploymentCollection`
  - Schedule: `Simple schedule`

#### Intune WDAC Base Policy

For all implementation types, it is recommended to deploy WDAC configuration through Intune configuration profiles:


- ABAC configuration for this item can be found within the [Intune Configuration ABAC](../../as-built-as-configured/intune-configuration#custom---windows-defender-application-control-csp).
- Instructions on generating base policy that is used to generate the binary format policy file can be found within the [Client Devices ABAC](../../as-built-as-configured/wdac-policy-creation#wdac-policy---baseline).

Configuration Profiles using Custom OMA-URI policy:

- **OMA-URI**: `./Vendor/MSFT/ApplicationControl/Policies/*Policy GUID*/Policy`
- **Data type**: `Base64`
- **Certificate file**: upload the binary format policy file. You do not need to upload a Base64 file, as Intune will convert the uploaded .bin file to Base64.

Note, the *Policy GUID* can be found within the policy file's `<policyID>` xml block which can be viewed prior to converting to .bin format using `ConvertFromCIPolicy`. Additional policies as supplementals can be deployed using this method rather than maintaining a larger base policy.
