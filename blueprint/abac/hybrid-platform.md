---
layout: page
title: Hybrid - Platform
menu: abac
---

## Identity and access management

The ABAC settings for the Agency Identity and Access Management can be found below. This includes Azure Active Directory, Azure AD Connect, Azure AD Multifactor Authentication, Authentication Method (Pass Through Authentication), Azure Active Directory Identity Protection, Domain, Emergency Access Admin Accounts and Collaboration settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Azure Active Directory

`Azure Active Directory > Properties`

* Directory Properties Name: `<Agency Name>`
* Technical Contact: `<username>@<Agency>.gov.au`
* Initial Domain Name: `<Agency>.onmicrosoft.com`
* Country or Region: `Australia`

`Azure Active Directory > Enterprise applications > User settings`

* Users can consent to apps accessing information on their behalf.: `No`
* Users can add gallery apps to their access panel: `No`
* Users can request admin consent to apps they are unable to consent to: `No`
* Users can only see Office 365 Apps in the Office 365 Portal: `No`

`Azure Active Directory > Users > User settings > App registrations`

* Users can register applications: `No`

`Azure Active Directory > Users > User settings > Administration portal`

* Restrict non-administrator access to Azure AD Administration Portal: `Yes`

`Azure Active Directory > Users > User settings > LinkedIn Account Connections`

* Allow users to connect work or school account with LinkedIn: `No`

`Azure Active Directory > Users > User settings > External Collaboration Settings`

* Guest user permissions are limited: `Yes`
* Admins and users in the guest inviter role can invite: `Yes`
* Members can invite: `No`
* Guests can invite: `No`
* Enable Email On-time passcode for guests: `No`

`Azure Active Directory > Users > User settings > External Collaboration Settings – Collaboration restrictions`

* Allow invitations only to the specified domains (most restrictive): `Selected`
* Target domains: `<Agency>.gov.au`

`Azure Active Directory > Groups > General > Self Service Group Management`

* Owners can manage membership requests in the access panel: `No`
* Restrict access to Groups in the Access Panel: `Yes`

`Azure Active Directory > Groups > General > Security Groups`

* Users can create security groups in the Azure portals: `No`
* Owners who can assign members as group owners in Azure Portals: `All`

`Azure Active Directory > Groups > General > Office 365 Groups`

* Users can create Microsoft 365 groups in Azure portals: `No`
* Owners who can assign members as group owners in Azure portals: `All`

`Azure Active Directory > Groups > General > Directory-wide Groups`

* Enable an “All Users” group in the directory: `No`

`Azure Active Directory > Groups > Expiration`

* Group lifetime (in days): `365`
* Email contact for groups with no owners: `Office365_Group_Expiration@<Agency>.gov.au`
* Enable expiration for these Microsoft 365 groups: `None`

`Azure Active Directory > Groups > Naming policy`

* Blocked words: `N/A`
* Group naming policy: `Prefix = String = <Agency Acronym>`

`Azure Active Directory > Custom Domain Names`

```
<Agency>.gov.au (Primary)
<Agency>.onmicrosoft.com
```

`Azure Active Directory > Company Branding`

* Sign-in Page background image (1920x1080px):: `Generic Australian Government Background`
* Banner logo (280x60px): Generic Australian Government Logo
* Username hint: `user@agency.gov.au`
* Sign-in page text: -  
  Note: User terms are configured using Conditional Access Policies.
* Sign-in page background color: -
* Square logo image (240x240px): Generic Australian Government Logo
* Square logo image, dark theme (240x240px): -
* Show option to remain signed in: `No`

`Azure Active Directory > Devices > Device settings`

* Users may join devices to Azure AD: `Selected`
* Display Name: `Office365_Grant_AzureAD_Join`
* Additional local administrators on Azure AD joined devices: `None`
* Require Multi-Factor Auth to join devices: `Yes`

`Azure Active Directory > Enterprise State Roaming`

* Users may sync settings and app data across devices: `All`

`Azure Active Directory > Password reset > Properties`

* Self-service password reset enabled: `None`

`Azure Active Directory > Password reset > Authentication methods`

* Number of methods required to reset: `1`
* Methods available to users: `Email`
* Mobile phone

`Azure Active Directory > Password reset > Registration`

* Require users to register when signing in?: `Yes`
* Number of days before users are asked to re-confirm their authentication information: `180`

`Azure Active Directory > Password reset > Notifications`

* Notify users on password resets?: `Yes`
* Notify all admins when other admins reset their password?: `Yes`

### Microsoft 365 groups

`Search > Azure Active Directory > Groups > General`

* Self Service Group Management
  * Owners can manage group membership requests in the Access Panel: `No`
  * Restrict user ability to access groups features in the Access Panel. Administrators (Global, Group and User Admin) will have access regardless of the value of this setting.: `Yes`
* Security Groups
  * Users can create security groups in Azure portals: `No`
  * Owners who can assign members as group owners in Azure portals: `All`
* Microsoft 365 groups
  * Users can create Microsoft 365 groups in Azure portal: `No`
  * Owners who can assign members as group owners in Azure portal: `All`

`Search > Azure Active Directory > Groups > Naming policy`

* Group naming policy: `Grp-<Department>-<Group name>`

`Search > Azure Active Directory > Groups > Expiration`

* Group lifetime (in days): `365`
* Email contact for groups with no owners: `Office365_Group_Expiration@<Agency>.gov.au`
* Enable expiration for these Microsoft 365 groups: `All`

`Search > Azure Active Directory > Groups`

* Group Name: `ADMIN_O365_Admin`
  * Membership type: `Assigned`
  * Source: `Windows server AD`
  * Type: `Security`
  * Members: `Admin accounts`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `ADMIN_O365_DCA_Accounts`
  * Membership type: `Assigned`
  * Source: `Windows server AD`
  * Type: `Security`
  * Members: `Admin accounts`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `ADMIN_O365_GlobalAdmins`
  * Membership type: `Assigned`
  * Source: `Windows server AD`
  * Type: `Security`
  * Members: `Admin accounts`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `Grp-<Agency Acronym>O365-Outlook`
  * Membership type: `Assigned`
  * Source: `Cloud`
  * Type: `Office`
  * Email: `Grp-<Agency Acronym>o365-outlook@<Agency>.gov.au`
  * Members: `<Agency User>`
  * Owners: `<Agency User>`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `Grp-<Agency Acronym>O365-Teams`
  * Membership type: `Assigned`
  * Source: `Cloud`
  * Type: `Office`
  * Email: `Grp-<Agency Acronym>o365-teams@<Agency>.gov.au`
  * Members: `<Agency User>`
  * Owners: `<Agency User>`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `Grp-<Agency Acronym>O365-Teams`
  * Membership type: `Assigned`
  * Source: `Cloud`
  * Type: `Office`
  * Email: `Grp-<Agency Acronym>o365-teams@<Agency>.gov.au`
  * Members: `<Agency User>`
  * Owners: `<Agency User>`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `Office365_AssignLicense_CloudUsers`
  * Membership type: `Assigned`
  * Source: `Cloud`
  * Type: `Security`
  * Members: `None admin accounts`
  * Owners: `<Agency Owner> (Admin)`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `Microsoft 365 E5`
  * Azure role assignment: `None`
* Group Name: `rol-Agency-Users`
  * Membership type: `Assigned`
  * Source: `Windows server AD`
  * Type: `Security`
  * Members: `None admin accounts`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `Microsoft 365 E5`
  * Azure role assignment: `None`
* Group Name: `Office365_Conditional_Access_Exclude`
  * Membership type: `Assigned`
  * Source: `Cloud`
  * Type: `Security`
  * Members
    * Break Glass account
      * TenantAdmin
      * TenantAdmin2
    * AAD Connect Synchronization accounts
      * `Sync_<AAD Server 1>_<account GUID>`
      * `Sync_<AAD Server 2>_<account GUID>`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `Office365_Grant_AzureAD_Join`
  * Membership type: `Assigned`
  * Source: `Windows server AD`
  * Type: `Security`
  * Members: `Admin accounts`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`
* Group Name: `Office365_Grant_CreateGroups`
  * Membership type: `Assigned`
  * Source: `Cloud`
  * Type: `Security`
  * Members: `<Agency User>`
  * Owners: `None`
  * Group membership: `None`
  * Applications: `None`
  * Licenses: `None`
  * Azure role assignment: `None`

### Azure AD Connect

Primary Azure AD Connect settings

* Installation Mode: `Custom`
* SQL Mode: `Local DB`
* Directory to connect to: `<Agency>.gov.au`
* Source of truth for account information: `On-Premises Active Directory (<Agency>.gov.au)`
* User sign-in method
```
Selected - Pass-through authentication
Not selected – Password Hash Synchronization
Not selected – Federation with AD FS
Not selected – Federation with PingFederate
```

* Enable Single Sign-on: `Enabled`
* Directory Type: `Active Directory`
* Forest for Configured Directories: `<agency_forest_name>.local`
* Active Directory UPN Suffix: `<Agency>.gov.au`
* Azure AD Domain: `Verified`
* Attribute used for login: `userPrincipleName   (User ID)`
* Domain and OU filtering
  * Directory: `<agency_forest_name>.local`
  * Sync selected domains and OUs:
```
Department
  * Groups
    * Admin
    * Security Access
  * Users
    * Admin
    * General
    * Service Accounts
  * Computers
```

  * How users should be identified in your on-premises directories: `Users are represented only once across all directories`
  * How users should be identified with Azure AD: `ms-DS-Consistency-Guid`
  * Filter users and devices: `Synchronize all users and devices`
* Optional Features
  * Exchange hybrid deployment: `Enabled`
  * Exchange Mail Public Folders: `Disabled`
  * Password hash synchronization: `Disabled`
  * Password writeback: `Disabled`
  * Group writeback: `Disabled`
  * Azure AD app and attribute filtering: `Enabled`
  * Azure AD Apps: The following applications are enabled:
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

Standby Azure AD Connect settings

* Source of truth for account information: `On-Premises Active Directory (<Agency>.gov.au)`
* User sign-in method
```
Selected - Pass-through authentication
Not selected – Password Hash Synchronization
Not selected – Federation with AD FS
Not selected – Federation with PingFederate
```
* Enable Single Sign-on: `Enabled`
* Directory Type: `Active Directory`
* Forest for Configured Directories: `<agency_forest_name>.local`
* Active Directory UPN Suffix: `<Agency>.gov.au`
* Azure AD Domain: `Verified`
* Attribute used for login: `userPrincipleName   (User ID)`
* Domain and OU filtering
  * Directory | <agency_forest_name>.local
  * Sync selected domains and OUs
```
Department
  * Groups
    * Admin
    * Security Access
  * Users
    * Admin
    * General
    * Service Accounts
  * Computers
```
  * How users should be identified in your on-premises directories: `Users are represented only once across all directories`
  * How users should be identified with Azure AD: `ms-DS-Consistency-Guid`
  * Filter users and devices: `Synchronize all users and devices`
* Optional Features
  * Exchange hybrid deployment: `Enabled`
  * Exchange Mail Public Folders: `Disabled`
  * Password hash synchronization: `Disabled`
  * Password writeback: `Disabled`
  * Group writeback: `Disabled`
  * Azure AD app and attribute filtering: `Enabled`
  * Azure AD Apps: The following applications are enabled:
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

Attribute | IsExported | IsMandatory
--- | --- | ---
accountEnabled | TRUE | TRUE
accountName | TRUE | FALSE
altRecipient | TRUE | FALSE
assistant | TRUE | FALSE
authOrig | TRUE | FALSE
c | TRUE | FALSE
cloudUserCertificate | TRUE | FALSE
cloudUserSMIMECertificate | TRUE | FALSE
cn | TRUE | FALSE
co | TRUE | FALSE
company | TRUE | FALSE
countryCode | TRUE | FALSE
dLMemRejectPerms | TRUE | FALSE
dLMemSubmitPerms | TRUE | FALSE
department | TRUE | FALSE
description | TRUE | FALSE
deviceId | TRUE | FALSE
deviceOSType | TRUE | FALSE
deviceTrustType | TRUE | FALSE
displayName | TRUE | FALSE
distinguishedName | TRUE | FALSE
domainFQDN | TRUE | FALSE
domainNetBios | TRUE | FALSE
employeeID | TRUE | FALSE
extensionAttribute1 | TRUE | FALSE
extensionAttribute10 | TRUE | FALSE
extensionAttribute11 | TRUE | FALSE
extensionAttribute12 | TRUE | FALSE
extensionAttribute13 | TRUE | FALSE
extensionAttribute14 | TRUE | FALSE
extensionAttribute15 | TRUE | FALSE
extensionAttribute2 | TRUE | FALSE
extensionAttribute3 | TRUE | FALSE
extensionAttribute4 | TRUE | FALSE
extensionAttribute5 | TRUE | FALSE
extensionAttribute6 | TRUE | FALSE
extensionAttribute7 | TRUE | FALSE
extensionAttribute8 | TRUE | FALSE
extensionAttribute9 | TRUE | FALSE
facsimileTelephoneNumber | TRUE | FALSE
givenName | TRUE | FALSE
hideDLMembership | TRUE | FALSE
homePhone | TRUE | FALSE
info | TRUE | FALSE
initials | TRUE | FALSE
ipPhone | TRUE | FALSE
isIntuneManagedDevice | TRUE | FALSE
l | TRUE | FALSE
legacyExchangeDN | TRUE | FALSE
mail | TRUE | FALSE
mailNickname | TRUE | FALSE
managedBy | TRUE | FALSE
manager | TRUE | FALSE
member | TRUE | FALSE
middleName | TRUE | FALSE
mobile | TRUE | FALSE
msDS-HABSeniorityIndex | TRUE | FALSE
msDS-PhoneticDisplayName | TRUE | FALSE
msExchArchiveGUID | TRUE | FALSE
msExchArchiveName | TRUE | FALSE
msExchAssistantName | TRUE | FALSE
msExchAuditAdmin | TRUE | FALSE
msExchAuditDelegate | TRUE | FALSE
msExchAuditDelegateAdmin | TRUE | FALSE
msExchAuditOwner | TRUE | FALSE
msExchBlockedSendersHash | TRUE | FALSE
msExchBypassAudit | TRUE | FALSE
msExchBypassModerationLink | TRUE | FALSE
msExchCoManagedByLink | TRUE | FALSE
msExchDelegateListLink | TRUE | FALSE
msExchELCExpirySuspensionEnd | TRUE | FALSE
msExchELCExpirySuspensionStart | TRUE | FALSE
msExchELCMailboxFlags | TRUE | FALSE
msExchEnableModeration | TRUE | FALSE
msExchExtensionCustomAttribute1 | TRUE | FALSE
msExchExtensionCustomAttribute2 | TRUE | FALSE
msExchExtensionCustomAttribute3 | TRUE | FALSE
msExchExtensionCustomAttribute4 | TRUE | FALSE
msExchExtensionCustomAttribute5 | TRUE | FALSE
msExchHideFromAddressLists | TRUE | FALSE
msExchImmutableId | TRUE | FALSE
msExchLitigationHoldDate | TRUE | FALSE
msExchLitigationHoldOwner | TRUE | FALSE
msExchMailboxAuditEnable | TRUE | FALSE
msExchMailboxAuditLogAgeLimit | TRUE | FALSE
msExchMailboxGuid | TRUE | FALSE
msExchModeratedByLink | TRUE | FALSE
msExchModerationFlags | TRUE | FALSE
msExchRecipientDisplayType | TRUE | FALSE
msExchRecipientTypeDetails | TRUE | FALSE
msExchRemoteRecipientType | TRUE | FALSE
msExchRequireAuthToSendTo | TRUE | FALSE
msExchResourceCapacity | TRUE | FALSE
msExchResourceDisplay | TRUE | FALSE
msExchResourceMetaData | TRUE | FALSE
msExchResourceSearchProperties | TRUE | FALSE
msExchRetentionComment | TRUE | FALSE
msExchRetentionURL | TRUE | FALSE
msExchSafeRecipientsHash | TRUE | FALSE
msExchSafeSendersHash | TRUE | FALSE
msExchSenderHintTranslations | TRUE | FALSE
msExchTeamMailboxExpiration | TRUE | FALSE
msExchTeamMailboxOwners | TRUE | FALSE
msExchTeamMailboxSharePointLinkedBy | TRUE | FALSE
msExchTeamMailboxSharePointUrl | TRUE | FALSE
msExchUserHoldPolicies | TRUE | FALSE
msOrg-IsOrganizational | TRUE | FALSE
msRTCSIP-ApplicationOptions | TRUE | FALSE
msRTCSIP-DeploymentLocator | TRUE | FALSE
msRTCSIP-Line | TRUE | FALSE
msRTCSIP-OptionFlags | TRUE | FALSE
msRTCSIP-OwnerUrn | TRUE | FALSE
msRTCSIP-PrimaryUserAddress | TRUE | FALSE
msRTCSIP-UserEnabled | TRUE | FALSE
oOFReplyToOriginator | TRUE | FALSE
objectSid | TRUE | FALSE
onPremisesUserPrincipalName | TRUE | FALSE
otherFacsimileTelephoneNumber | TRUE | FALSE
otherHomePhone | TRUE | FALSE
otherIpPhone | TRUE | FALSE
otherMobile | TRUE | FALSE
otherPager | TRUE | FALSE
otherTelephone | TRUE | FALSE
pager | TRUE | FALSE
physicalDeliveryOfficeName | TRUE | FALSE
postOfficeBox | TRUE | FALSE
postalCode | TRUE | FALSE
preferredLanguage | TRUE | FALSE
proxyAddresses | TRUE | FALSE
publicDelegates | TRUE | FALSE
pwdLastSet | TRUE | FALSE
registeredOwnerReference | TRUE | FALSE
reportToOriginator | TRUE | FALSE
reportToOwner | TRUE | FALSE
securityEnabled | TRUE | FALSE
sn | TRUE | FALSE
sourceAnchor | TRUE | TRUE
st | TRUE | FALSE
streetAddress | TRUE | FALSE
targetAddress | TRUE | FALSE
telephoneAssistant | TRUE | FALSE
telephoneNumber | TRUE | FALSE
thumbnailPhoto | TRUE | FALSE
title | TRUE | FALSE
unauthOrig | TRUE | FALSE
url | TRUE | FALSE
usageLocation | TRUE | FALSE
userCertificate | TRUE | FALSE
userPrincipalName | TRUE | TRUE
userSMIMECertificate | TRUE | FALSE
wWWHomePage | TRUE | FALSE

### Azure Active Directory multifactor authentication

`Multi-Factor Authentication > Fraud alert`

* Allow users to submit fraud alerts: `On`
* Automatically block users who report fraud: `On`

`Azure Active Directory > MFA > Additional cloud-based MFA settings`

* App Passwords: `Do not allow users to create app passwords to sign-in to non-browser apps`
* Trusted Ips: `Disabled`
* Disabled Verification options
  * Call to phone
  * Text message to phone
* Enabled Verification options
  * Notifications through mobile app
  * Verification code from mobile app or hardware token
* Remember multi-factor authentication: `Disabled`

### Authentication method (pass through agent)

* Authentication Method: `PTA`
* Number of PTA servers: 

```
3

Server names:
<server_1>.<domain_name>.local
<server_2>.<domain_name>.local
<server_3>.<domain_name>.local
```

* Add Proxy settings
  * Add the following text to the end of the file `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\machine.config` to enable proxy settings. This file needs to be opened as "administrator" context.`

```xml`
<system.net>
  <defaultProxy enabled="true" useDefaultCredentials="true">
    <proxy
      usesystemdefault="true"
      proxyaddress="http://webproxytest.production.local:8080"
      bypassonlocal="true"
    />
  </defaultProxy>
</system.net>
```

* Required Protocols
  * Enable outbound HTTP – 80 (TCP/UDP)
  * Enable outbound HTTPS – 443 (TCP/UDP)
* Register PTA Connector
  * Execute the following power shell command to register PTA connector:

```
cd C:\Program Files\Microsoft Azure AD Connect Authentication Agent

./RegisterConnector.ps1 -modulePath "C:\Program Files\Microsoft Azure AD Connect Authentication Agent\Modules\" -moduleName "PassthroughAuthPSModule" -Authenticationmode Credentials -Usercredentials $cred -Feature PassthroughAuthentication
```

### Azure Active Directory Identity Protection (authorisation)

`Azure Active Directory > Security > Identity Protection > MFA registration policy`

* Policy name: `Multi-factor authentication registration policy`

`Azure Active Directory > Security > Identity Protection > MFA registration policy > Assignments`

* Users: `Included:  All Users`
* Excluded: `Office365_Conditional_Access_Exclude`

`Azure Active Directory > Security > Identity Protection > MFA registration policy > Controls`

* Access: `Require Azure MFA registration`
* Enforce Policy: `On`

`Azure Active Directory > Security > Identity Protection > Sign-in Risk`

* Include users: `All users`
* Exclude users

```
Break glass accounts
tenantadmin@<Agency>.onmicrosoft.com
tenantadmin2@<Agency>.onmicrosoft.com

AAD Connect Sync Accounts
Sync_<account_1>_144f9a623d47@<Agency>.onmicrosoft.com
Sync_<account_2>_b49bd30fb398@<Agency>.onmicrosoft.com
```

* Sign-in risk settings: `Medium and above`
* Access: `Allow access (Require MFA)`
* Enforce policy: `On`

`Azure Active Directory > Security > Identity Protection > User Risk Policy`

* Include users: `All users`
* Exclude users

```
Break glass accounts
tenantadmin@<Agency>.onmicrosoft.com
tenantadmin2@<Agency>.onmicrosoft.com

AAD Connect Sync accounts
Sync_<account_1>_144f9a623d47@<Agency>.onmicrosoft.com
Sync_<account_2>_b49bd30fb398@<Agency>.onmicrosoft.com
```

* User risk setting: `Medium and above`
* Access: `Allow access (with require password change selected)`
* Enforce policy: `On`

### Domain

`Azure Active Directory > Custom domain names`

* Registration of domain name: `<Agency>.onmicrosoft.com`
  * Status: `Available`
  * Federated: `Not Configured`
  * Azure AD Primary Domain: `Not Configured`
* Registration of on-premises domains: `<Agency>.gov.au`
  * Status: `Verified`
  * Federated: `Not Configured`
  * Azure AD Primary Domain: `<Agency>.gov.au`

### Emergency access admin accounts

`Azure Active Directory > Users`

* Account Name: `tenantadmin`
  * Account Type: `Cloud Only Account: tenantadmin@<Tenant Name>.onmicrosoft.com`
  * Password Expiry: `Disabled`
  * Roles: `Global Administrator`
  * MFA:
    * Member of `Office365_Conditional_Access_Exclude`
    * Group `Office365_Conditional_Access_Exclude` excluded from MFA registration policy
  * Conditional Access: Excluded from Conditional Access policies:
    * GRANT – Require MFA for administrators
    * GRANT – Require MFA for Azure management
    * GRANT – No MFA for compliant devices in Aust
  * Monitoring of accounts:
    * MCAS policy monitoring break glass account activity.
    * MCAS Policy name: Break Glass Account 1 Activity
* Account Name: `tenantadmin2`
  * Account Type: `Cloud Only Account: tenantadmin2@<Tenant Name>.onmicrosoft.com`
  * Password Expiry: `Disabled`
  * Roles: `Global Administrator`
  * MFA:
    * Member of `Office365_Conditional_Access_Exclude`
    * Group `Office365_Conditional_Access_Exclude` excluded from MFA registration policy
  * Conditional Access: Excluded from Conditional Access policies:
    * GRANT – Require MFA for administrators
    * GRANT – Require MFA for Azure management
    * GRANT – No MFA for compliant devices in Aust
  * Monitoring of accounts:
    * MCAS policy monitoring break glass account activity.
    * MCAS Policy name: Break Glass Account 2 Activity

### Collaboration

`Azure Active Directory > Users settings > Manage External collaboration settings`

* Guest users' permissions are limited: `Yes`
* Admins and users in the guest inviter role can invite:
  * `Yes` (for Dev environment ONLY. Discussion and design decision details available in the [Platform blueprint](/blueprint/platform.html#collaboration) )
  * `No` for production
* Members can invite: `No`
* Guests can invite: `No`
* Enable Email One-Time Passcode for guests (preview): `No`
* Collaboration restrictions: `Allow invitations only to the specified domains (most restrictive)`
* Target Domains:

```
<Agency>.gov.au
microsoft.com
```

## Privileged identity management

The ABAC settings for the Agency Privileged Identity Management can be found below. This includes Authentication Administrator, Azure Information Protection Administrator, Global Administrator, Exchange Administrator, Helpdesk Administrator, Intune Administrator, Office Apps Administrator, Power BI Administrator, Power Platform, Privileged Role Administrator, Security Administrator, Security Operator, SharePoint Administrator, Teams Communications Administrator, Teams Communications Support Engineer, Teams Communications Support Specialist, Teams Service Administrator and User Administrator settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Authentication administrator

`Azure AD Privileged Identity Management > Azure AD roles > Roles > Authentication Administrator > Role settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Not checked`
  * Expire eligible assignments after: `6 month(s)`
  * Allow permanent active assignment: `Not checked`
  * Expire active assignments after: `1 month(s)`
  * Require Azure Multi-Factor Authentication on active assignment: `Checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Azure information protection administrator

`Azure AD Privileged Identity Management > Azure AD roles > Roles > Azure Information Protection Administrator > Role settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Global administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Global Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Exchange administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Exchange Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Helpdesk administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Helpdesk Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Intune administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Intune Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Office Apps administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Office Apps Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Power BI administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Power BI Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Power Platform administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Power Platform Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Privileged role administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Provileged Role Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Security administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Security Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Security Operator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Security Operator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### SharePoint administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > SharePoint Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Teams communications administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams Communication Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Teams communications support engineer

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams Communications Support Engineer > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Teams communications support specialist

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams Communications Support Specialist > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### Teams service administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Teams service Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

### User administrator

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > User Administrator > Role Settings`

* Activation
  * Activation maximum duration: `10 hours`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s):
    * Members: None
    * Groups: None 
    * If no specific approvers are selected, privileged role administrators/global administrators will become the default approvers.
* Assignment
  * Allow permanent eligible assignment: `Checked`
  * Expire eligible assignments after: `Not configured`
  * Allow permanent active assignment: `Checked`
  * Expire active assignments after: `Not configured`
  * Require Azure Multi-Factor Authentication on active assignment: `Not checked`
  * Require justification on active assignment: `Checked`
* Notification
  * Send notifications when members are assigned as eligible to this role
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when members are assigned as active to this role:
    * Role assignment alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to the assigned user (assignee)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve a role assignment renewal/extension
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
  * Send notifications when eligible members activate this role:
    * Role activation alert
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Notification to activated user (requestor)
      * Default recipients: `Checked`
      * Additional recipients: `Not configured`
      * Critical emails only: `Not checked`
    * Request to approve an activation
      * Default recipients: `Checked`
      * Additional recipients: `Only designated approvers can receive this email`
      * Critical emails only: `Not checked`

## Information protection

The ABAC settings for the Agency Information Protection can be found below. This includes Azure Information Protection settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Azure Information Protection

`Azure Information Protection > Classifications > Labels`

* Unofficial
  * Specify how this label is displayed in the Information Protection client on user devices
    * Enabled: `On`
    * Label display name: `UNOFFICIAL`
    * Description: `This information does not form part of official duty.`
    * Color: `Black`
  * Set permissions for documents and emails containing this label: `Not configured`
  * Set visual marking (such as header or footer)
    * Documents with this label have a header: `On`
      * Header text: `UNOFFICIAL`
      * Header font size: `10`
      * Header font name: `Default`
      * Header color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Header alignment: `Center`
    * Documents with this label have a footer: `On`
      * Footer text: `UNOFFICIAL`
      * Footer font size: `10`
      * Footer font name: `Default`
      * Footer color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Footer alignment: `Center`
    * Documents with this label have a watermark: `Off`
  * Configure conditions for automatically applying this label
    * No condition set
* Official
  * Specify how this label is displayed in the Information Protection client on user devices
    * Enabled: `On`
    * Label display name: `OFFICIAL`
    * Description: `This is the majority of routine information.`
    * Color: `Black`
  * Set permissions for documents and emails containing this label: `Not configured`
  * Set visual marking (such as header or footer)
    * Documents with this label have a header: `On`
      * Header text: `OFFICIAL`
      * Header font size: `10`
      * Header font name: `Default`
      * Header color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Header alignment: `Center`
    * Documents with this label have a footer: `On`
      * Footer text: `OFFICIAL`
      * Footer font size: `10`
      * Footer font name: `Default`
      * Footer color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Footer alignment: `Center`
    * Documents with this label have a watermark: `Off`
  * Configure conditions for automatically applying this label
    * No condition set
* Official: Sensitive
  * Specify how this label is displayed in the Information Protection client on user devices
    * Enabled: `On`
    * Label display name: `OFFICIAL Sensitive`
    * Description: `OFFICIAL information that due to its sensitive nature requires limited dissemination. OFFICIAL Sensitive is not a security classification. It is a dissemination limiting marker (DLM), indicating compromise of the information would result in limited damage to an individual, organization or government.`
    * Color: `Black`
  * Set permissions for documents and emails containing this label: `Not configured`
  * Set visual marking (such as header or footer)
    * Documents with this label have a header: `On`
      * Header text: `OFFICIAL: Sensitive`
      * Header font size: `10`
      * Header font name: `Default`
      * Header color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Header alignment: `Center`
    * Documents with this label have a footer: `On`
      * Footer text: `OFFICIAL: Sensitive`
      * Footer font size: `10`
      * Footer font name: `Default`
      * Footer color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Footer alignment: `Center`
    * Documents with this label have a watermark: `Off`
  * Configure conditions for automatically applying this label
    * No condition set
* Protected
  * Specify how this label is displayed in the Information Protection client on user devices
    * Enabled: `On`
    * Label display name: `PROTECTED`
    * Description: `Valuable, important and sensitive information. Compromise of PROTECTED information would be expected to cause damage to the national interest, organization, or individuals.`
    * Color: `Black`
  * Set permissions for documents and emails containing this label: `Protect`
    * Protection settings: `Azure (cloud key)`
    * Select the protection action type: `Set permissions`
    * Add permissions
      * Users: `AuthenticatedUsers`
      * Permissions: `Co-Author`
    * File Content Expiration: `Never`
    * Allow offline access: `By days`
    * Number of days the content is available without an internet connection: `5`
  * Set visual marking (such as header or footer)
    * Documents with this label have a header: `On`
      * Header text: `PROTECTED`
      * Header font size: `10`
      * Header font name: `Default`
      * Header color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Header alignment: `Center`
    * Documents with this label have a footer: `On`
      * Footer text: `PROTECTED`
      * Footer font size: `10`
      * Footer font name: `Default`
      * Footer color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Footer alignment: `Center`
    * Documents with this label have a watermark: `On`
      * Watermark text: `PROTECTED`
      * Watermark font size: `Custom`
      * Font size: `10`
      * Watermark font name: `Default`
      * Watermark color: `Custom`
      * Enter a hex triplet code for the red, green and blue (RGB) components of the color, for example #FA8072.: `#FF0000`
      * Watermark layout: `Diagonal`
  * Configure conditions for automatically applying this label
    * No condition set

## Threat protection

The ABAC settings for the Agency Threat Protection can be found below. This includes Microsoft Defender Advanced Threat Protection, SCCM and Microsoft Defender Advanced Threat Protection, Microsoft Cloud App Security and Security Information and Event Management settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Microsoft Defender Advanced Threat Protection

`Microsoft Endpoint Manager > Device compliance > Microsoft Defender ATP > Open the Microsoft Defender ATP admin console`

#### General

* Data retention
  * Data Storage: `US`
  * Data Retention: `180 days`
* Alert notifications

Notification rule | Device groups | Alert severity | Recipients
--- | --- | --- | ---
High severity alert | Any device in my organization | High | SOESupport@agency.gov.au
Medium severity alert | Any device in my organization | Medium | SOESupport@agency.gov.au
Low severity alert | Any device in my organization | Low | SOESupport@agency.gov.au

* Power BI reports: `Not Configured`
* Advanced features
  * Automated Investigation: `On`
  * Live Response: `Off`
  * Live Response unsigned script execution: `Off`
  * Automatically Resolve Alerts: `On`
  * Allow or block file: `On`
  * Custom network indicators: `Off`
  * Show user details: `On`
  * Skype for Business integration: `On`
  * Azure ATP integration: `Off`
  * Office 365 Threat Intelligence connection: `On`
  * Microsoft Cloud App Security: `On`
  * Azure Information Protection: `Off`
  * Microsoft Secure Score: `On`
  * Web content filtering: `Off`
  * Microsoft Intune connection: `On`
  * Preview features: `On`
* Auto remediation

Rank | Device group | User groups | Remediation level
--- | --- | --- | --
1 | Windows 10 | ADMIN_WDATP_Admin, ADMIN_WDATP_Viewer, ADMIN_WDATP_Remediation | Semi - require approval for all folders
Last | Ungrouped devices (default) | None | Semi - require approval for all folders

#### Permissions

* Roles
  * Microsoft Defender for Endpoint administrator (default)
    * Description: `Default role with full permissions to the service. It cannot be modified or deleted.`
    * Assigned user groups: `ADMIN_WDATP_Admin`
  * Microsoft Defender ATP Viewer
    * Description: `Viewer privileges`
    * View Data
      * Security operations
      * Threat and vulnerability management
    * Assigned user groups: `ADMIN_WDATP_Viewer`
  * Microsoft Defender ATP Remediation
    * Description: `Investigate and remediate alerts`
    * View Data
      * Security operations
      * Threat and vulnerability management
    * Active remediation actions
      * Security operations
      * Threat and vulnerability management - Exception handling
      * Threat and vulnerability management - Remediation handling
    * Alerts investigation
    * Assigned user groups: `ADMIN_WDATP_Remediation`
* Device groups
  * Device group name: `Windows 10`
    * Rank: `1`
    * Automation level: `Semi - require approval for all folders`
    * Description: `Windows 10 Remediation device group`
    * Members: `Windows 10`
    * User access
      * Azure AD user groups with access to this machine group: `ADMIN_WDATP_Admin`, `ADMIN_WDATP_Viewer`, `ADMIN_WDATP_Remediation`
  * Device group name: `Ungrouped devices (default)`
    * Rank: `Last`
    * Automation level: `Semi - require approval for all folders`
    * Description: `Devices that do not belong to a custom group. This default group cannot be modified or deleted.`
    * Members: `None`
    * User access: `None`

#### APIs

* SIEM
  * General
    * Application URI: `https://WindowsDefenderATPSiemConnector`
    * Client ID: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
    * Authorisation server URL: `https://login.windows.net/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/oauth2/token`
    * Resource: `https://graph.windows.net`
    * Client secret: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
    * Choose the SIEM you want to configure and download details to file.: `<Agency SIEM>`


#### Rules

* Custom detections: `Not configured`
* Alert suppression: `Not configured`
* Indicators: `Not configured`
* Automation uploads
  * Content analysis: `On`
  * File extension names: `vb,'',tcl,inf,ps1,scr,rgs,py,elf,dll,msi,reg,pl,rb,gadget,js,sys,job,ws,ko.gz,bat,exe,cpl,vbe,wsf,url,cmd,ko,air,vbs,sh,com`
  * Memory Content Analysis: `On`
* Automation folder exclusions: `Not configured`

#### Device management

* Onboarding
  * Select operating system to start offboarding process: `Windows 10`
  * Deployment method: `Intune`
* Offboarding
  * Select operating system to start offboarding process: `Windows 10`
  * Deployment method: `Intune`

### Microsoft Cloud App Security

`https://portal.cloudappsecurity.com/ > Settings`

* System
  * Organization details
    * Organizations display name: `Digital Transformation Agency`
    * Environment name: `GovDesk`
    * Managed Domains: `<Agency>.onmicrosoft.com`, `<Agency>.gov.au`, `<Agency>.mail.onmicrosoft.com`
  * Mail settings
    * Email sender identity: `Default settings`
  * Export settings
    * Export settings: `None`
  * Automatic sign out
    * Sign out when a user is inactive for: `After 15 Minutes`
* Cloud Discovery
  * Snapshot reports: `Not configured`
  * Continuous reports
    * Report name: `Application Group`
      * Comment: `This report captures information on the User Group Application (Cloud App Security)`
      * Data sources: `All data sources`
      * Filters: `User Group > Application (Cloud App Security)`
    * Report name: `External Users`
      * Comment: `This report captures information on the External Users group`
      * Data sources: `All data sources`
      * Filters: `User Group > External users`
    * Report name: `Windows 10 Endpoint Users`
      * Comment: `This report will capture information for Windows 10 Endpoint users.`
      * Data sources: `Win10 Endpoint Users`
    * Report name: `Cloud App Security Conditional Access App Control`
      * Comment: `Cloud App Security Conditional Access App Control`
      * Data sources: `Cloud App Security Proxy`
  * Automatic log upload
    * Data sources
      * Name: `Win10 Endpoint Users`
        * Source: `Windows Defender Advanced Threat Protection`
        * Receiver type: `Built-in`
      * Name: `Cloud App Security Proxy`
        * Source: `Cloud App Security Conditional Access App Control`
        * Receiver type: `Built-in`
    * Log collectors: `Not configured`
  * App tags
    * Sanctioned:
```
Microsoft Skype for Business
Microsoft SharePoint Online
Office 365
Microsoft Flow
Microsoft Exchange Online
Microsoft Teams
Microsoft Power BI
Microsoft OneDrive for Business
Microsoft Cloud App Security
Microsoft Azure
```
    * Unsanctioned: `Not configured`
    * Monitored: `Not configured`
    * Restricted: `Not configured`
  * Exclude entities: `Not configured`
  * Microsoft Defender ATP
    * Block unsanctioned apps: `Checked`
  * User enrichment
    * Enrich discovered user identifiers with Azure Active Directory usernames: `Checked`
  * Anonymization: `Not configured`
* Threat Protection
  * Azure ATP integration: `Not configured`
* Information Protection
  * Admin quarantine folder location: `https://<Agency>.sharepoint.com/sites/mcas`
  * User notification: `Not configured`
  * Azure Information Protection
    * Automatically scan new files for Azure Information Protection classification labels and content inspection warnings: `Not configured`
    * Only scan files for Azure Information Protection classification labels and content inspection warnings from this tenant: `Not configured`
  * Files
    * Enable file monitoring: `Enabled`
* Conditional Access App Control
  * Default behavior
    * During system downtime: `Allow access`
  * User monitoring: `Not configured`
  * Device identification: `Not configured`

`Settings (Cog) > Manage admin access`

* User: `<Agency User>`
* Email: `<agency_username>@<Agency>.gov.au`
* Role: `Global Admin`
* Permission: `Full access`

`Settings (Cog) > User groups`

User | Type | Source app | Status
--- | --- | --- | ---
Office 365 (Default) administrator | Automatic | Office 365 | Imported successfully
External users | Automatic | All apps | Imported successfully
Application (Cloud App Security) | Automatic | All apps | Imported successfully

`Settings (Cog) > App connectors`

Application | Status | Selected Components
--- | --- | ---
Office 365 (Collaboration) | Connected | Azure AD Users and groups<br>Azure AD Management events<br>Azure AD Sign-in events<br>Azure AD Apps<br>Office 365 activities<br>Office 365 files
Microsoft Azure (Cloud computing platform) | Connected | Not Applicable

`Settings (Cog) > Security extensions`

* API tokens: `Not configured`
* External DLP: `Not configured`
* Playbooks: `Not configured`

`Home > Discover > Cloud app catalog`

```
Microsoft Volume Licensing
Microsoft Graph
Microsoft Intune
Microsoft App Source
Microsoft Support
Microsoft Tech Community
Microsoft 365 Admin Center
Microsoft Project
Microsoft Secure Score
Microsoft Dynamics
Microsoft Project Portal
Microsoft Word Online
Microsoft Excel Online
Microsoft PowerPoint Online
Microsoft Outlook Online
Microsoft Skype for Business
Microsoft Office Online
Microsoft Defender Security Center
Microsoft Visual Studio
OneDrive Admin Center
Microsoft SharePoint Online
Microsoft Office 365 Planner
Office 365
Microsoft Office 365 Admin Center
Office Help & Training
Microsoft Stream
Microsoft Exchange Online
Microsoft PowerApps
Microsoft Flow
Microsoft Teams
Microsoft Power BI
Microsoft OneDrive for Business
Microsoft Cloud App Security
Security and Compliance
Microsoft Azure
```

`Home > Control > Policy`

* Default Policies Active: `26`
* Default Policies Disabled: `3`
* Create activity policy
  * Policy name: `Break Glass Account 1 Activity`
  * Policy severity: `Medium`
  * Category: `Privileged accounts`
  * Description: `This policy monitors break glass account called "tenantadmin@<Agency>.onmicrosoft.com" for all logon activity`
  * Account to monitor: `tenantadmin@<Agency>.onmicrosoft.com`
  * Act on activity: `Single activity`
  * Policy Filters
    * Office 365
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

    * Azure
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

    * Microsoft
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

  * Alerts
    * Create an alert for each matching event with the policy’s severity: `Configured`
    * Send alert as email: `Not configured`
    * Send alert as text message: `Not configured`
    * Send alerts to Power Automate: `Not configured`
  * Governance actions
    * All apps: `Not configured`
    * Office 365: `Not configured`
* Create activity policy
  * Policy name: `Break Glass Account 2 Activity`
  * Policy severity: `Medium`
  * Category: `Privileged accounts`
  * Description: `This policy monitors break glass account called "tenantadmin2@<Agency>.onmicrosoft.com" for all logon activity`
  * Account to monitor: `tenantadmin2@<Agency>.onmicrosoft.com`
  * Act on activity: `Single activity`
  * Policy Filters
    * Office 365
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

    * Azure
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

    * Microsoft
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

  * Alerts
    * Create an alert for each matching event with the policy’s severity: `Configured`
    * Send alert as email: `Not configured`
    * Send alert as text message: `Not configured`
    * Send alerts to Power Automate: `Not configured`
  * Governance actions
    * All apps: `Not configured`
    * Office 365: `Not configured`

#### Cloud Discovery > Score metrics

##### General

* Category importance: `Low (x1)`

Field | Importance | N/A values
--- | --- | ---
Founded | Medium (x2) | Excluded N/As
Holding | Medium (x2) | Excluded N/As
Domain registration | Medium (x2) | Excluded N/As
Consumer popularity | Medium (x2) | Excluded N/As

##### Security

* Category importance: `Medium (x2)`

Field | Importance | N/A values
--- | --- | ---
Data-at-rest encryption method | Medium (x2) | Excluded N/As
Multi-factor authentication | Medium (x2) | Excluded N/As
IP address restriction | Medium (x2) | Excluded N/As
User audit trail | Medium (x2) | Excluded N/As
Admin audit trail | Medium (x2) | Excluded N/As
Data audit trail | Medium (x2) | Excluded N/As
Data classification | Medium (x2) | Excluded N/As
Data-at-rest encryption | Medium (x2) | Excluded N/As
User-roles support | Medium (x2) | Excluded N/As
Valid certificate name | Medium (x2) | Excluded N/As
Trusted certificate | Medium (x2) | Excluded N/As
Encryption protocol | Medium (x2) | Excluded N/As
Heartbleed patched | Medium (x2) | Excluded N/As
HTTP security headers | Medium (x2) | Excluded N/As
Support SAML | Medium (x2) | Excluded N/As
Enforce transport encryption | Medium (x2) | Excluded N/As
Penetration Testing | Medium (x2) | Excluded N/As
Requires user authentication | Medium (x2) | Excluded N/As
Password Policy | Medium (x2) | Excluded N/As

##### Compliance

* Category importance: `Medium (x2)`

Field | Importance | N/A values
--- | --- | ---
FINRA | Medium (x2) | Excluded N/As
FISMA | Medium (x2) | Excluded N/As
GAAP | Medium (x2) | Excluded N/As
HIPAA | Medium (x2) | Excluded N/As
ISAE 3402 | Medium (x2) | Excluded N/As
ISO 27001 | Medium (x2) | Excluded N/As
ITAR | Medium (x2) | Excluded N/As
SOC 1 | Medium (x2) | Excluded N/As
SOC 2 | Medium (x2) | Excluded N/As
SOC 3 | Medium (x2) | Excluded N/As
SOX | Medium (x2) | Excluded N/As
SSAE 16 | Medium (x2) | Excluded N/As
Safe Harbor | Medium (x2) | Excluded N/As
PCI DSS version | Medium (x2) | Excluded N/As
ISO 27018 | Medium (x2) | Excluded N/As
GLBA | Medium (x2) | Excluded N/As
FedRAMP level | Medium (x2) | Excluded N/As
CSA STAR level | Medium (x2) | Excluded N/As
Privacy Shield | Medium (x2) | Excluded N/As
ISO 27017 | Medium (x2) | Excluded N/As
FFIEC | Medium (x2) | Excluded N/As

##### Legal

* Category importance: `Medium (x2)`

Field | Importance | N/A values
--- | --- | ---
Data ownership | Medium (x2) | Excluded N/As
DMCA | Medium (x2) | Excluded N/As
Data retention policy | Medium (x2) | Excluded N/As
GDPR – Report data breaches | Medium (x2) | Excluded N/As
GDPR – Data protection | Medium (x2) | Excluded N/As
GDPR – User ownership | Medium (x2) | Excluded N/As

### Log Analytics

Table 12 describes the Log Analytics settings that are configured within the Log Analytics Workspace.

Configuration | Value 
--- | ---
Workspace Name | agency-log-workspace
Azure Subscription | Agency subscription 
Region | Australia Central
Log retention | Retention Period: 1 year<br>Data Volume Cap: Off 
Log Analytics Contributor Group | rol-agency-log-admin

#### Microsoft Endpoint Manager

Configuration | Value 
--- | ---
Diagnostic Setting Name | Send to Log Analytics
Log | AuditLogs <br> OperationalLogs <br> DeviceComplianceOrg <br> Devices
Destination details | Send to Log Analytics Workspace (agency-log-workspace)

#### Azure Active Directory

Configuration | Value 
--- | ---
Diagnostic Setting Name | Send to Log Analytics
Log | AuditLogs <br> SignInLogs <br> NonInteractiveUserSignInLogs <br> ServicePrincipalSignInLogs <br> ManagedIdentitySignInLogs <br> ProvisioningLogs
Destination details | Send to Log Analytics Workspace (agency-log-workspace)

## Client configuration

The ABAC settings for the Agency Client Configuration can be found below. This includes Microsoft Co-Management, Registry Settings, Application Packaging, Printing and End User Internet Access settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Microsoft co-management

`Microsoft Endpoint Manager > Quick Start > Account Details`

* Account Name: `<Agency>.gov.au`
* Account status: 1Active`
* Account location: `Australia 0101`

`Azure Active Directory > Mobility (MDM and MAM) > Microsoft Intune`

* MDM user scope: `All`
* MDM terms of use URL: `https://portal.manage.microsoft.com/TermsofUse.aspx`
* MDM discovery URL: `https://enrollment.manage.microsoft.com/enrollmentserver/discovery.svc`
* MDM compliance URL: `https://portal.manage.microsoft.com/?portalAction=Compliance`
* MAM user scope: `None`
* MAM terms of use URL: `<Blank>`
* MAM discovery URL: `https://wip.mam.manage.microsoft.com/Enroll`
* MAM Compliance URL: `<Blank>`

`Azure Active Directory > Mobility (MDM and MAM) > Microsoft Intune Enrollment`

* MDM user scope: `All`
* MDM terms of use URL: `https://portal.manage.microsoft.com/TermsofUse.aspx`
* MDM discovery URL: `https://enrollment.manage.microsoft.com/enrollmentserver/discovery.svc`

`SCCM admin console > About Microsoft Endpoint Configuration Manager`

* Version: `1910`
* SOE Name: `Intune Auto Enrolment`
* Enrolled Device Types: `Windows 10 | Version 1909 | Build 18363`

`SCCM admin console > Administration > Overview > Cloud Services > Co-management`

* Name: `CoMgmtSettingsProd`
* Description: `Co-management Production policy`
* Tenant onboarding: `AzurePublicCloud`
* Enablement
  * Automatic enrollment in Intune: `All`
* Workloads
  * Compliance policies: `Intune`
  * Device Configuration: `Configuration Manager`
  * Endpoint Protection: `Configuration Manager`
  * Resource access policies: `Configuration Manager`
  * Office Click-to-run apps: `Configuration Manager`
  * Windows Update policies: `Configuration Manager`

`MECM admin console > Monitoring > Overview > Co-Management`

Co-Management monitor screen is showing 

* Green for Client OS Distribution,
* Blue for Co-management Enrollment Status

![](/assets/images/abac/sccm-comanagement.png)

### Registry settings

Registry settings are contained within the Group Policy Objects (GPO’s) and will be managed and deployed using GPO’s and SCCM.

### Application packaging

Item | Value
--- | ---
Packaging Method | The existing App-V packaging method will be utilized
Deployment Method | The existing SCCM solution will be utilized as the deployment method
Patching Method | The existing SCCM solution will be utilized as the patching method

### Printing

Item | Value
--- | ---
Printer addition restrictions | Existing Group Policy Objects (GPOs) will be utilized
Driver Delivery | Existing SCCM solution will be utilized in driver delivery
External Printer Connectivity | Existing Group Policy Objects (GPOs) and SCCM will be utilized to configure External Printer Connectivity via Always On VPN
Hybrid Cloud Print | Not Configured

### End user internet access

Item | Value
--- | ---
Internet Access Mechanism | Configured via existing GPO’s and SCCM.
Web Proxy Auto Discover Configuration | Configured via existing GPO’s using Web Proxy Auto Discover (WPAD) configuration file.
DNS Provider | Existing on-premises Active Directory DNS services will be utilized
Business Applications Connectivity | Existing on-premises proxy will be utilized
Office 365 Application Connectivity | Configured via existing GPO’s and SCCM.
Office 365 Authentication Traffic | Existing on-premises proxy will be utilized
Windows Updates | Existing SCCM solution will be utilized

## Backup

The ABAC settings for the Agency Backup can be found below. This includes Backup Tool, Data Availability, Retention Period and Backup Method, Application and Data Set RTO and RPO and Disaster Recovery Time Objective settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Backup tool

Item | Value
--- | ---
Restoration tools | Microsoft backup and restoration tools
Items to Backup | Exchange Online<br>SharePoint Online<br>Microsoft Teams<br>OneDrive for Business<br>Microsoft 365 groups

### Data availability

Application / Data | Data Availability Configuration / Option
--- | ---
On-Premises Exchange Mailboxes | Database Availability Groups (DAGs) configured with 4 copies of the Exchange databases with one being a lag copy. DAG spread across two data centers.
On-Premises Exchange Mail items | Database Availability Groups (DAGs) configured with 4 copies of the Exchange databases with one being a lag copy. DAG spread across two data centers.
Online Exchange Mailboxes | [https://docs.microsoft.com/en-us/office365/enterprise/office-365-exchange-data-resiliency](https://docs.microsoft.com/en-us/office365/enterprise/office-365-exchange-data-resiliency)
Online Exchange Mail items | -
On-Premises SharePoint | SQL Availability Group (AG) consisting of two member SQL servers. SQL AG spread across two data centers.
Online SharePoint | [https://docs.microsoft.com/en-us/office365/Enterprise/office-365-data-resiliency-overview](https://docs.microsoft.com/en-us/office365/Enterprise/office-365-data-resiliency-overview)
Teams | [https://docs.microsoft.com/en-us/office365/Enterprise/office-365-data-resiliency-overview](https://docs.microsoft.com/en-us/office365/Enterprise/office-365-data-resiliency-overview)
OneDrive for Business (User home directory data) | [https://docs.microsoft.com/en-us/office365/Enterprise/office-365-data-resiliency-overview](https://docs.microsoft.com/en-us/office365/Enterprise/office-365-data-resiliency-overview)
Group Drive Data / File Server Data / NAS (On-Premises) | Enterprise storage solution which hosts file shares replicated between two data centers.

### Retention period and backup method

Application / Data | Retention Period | Backup Method
--- | --- | ---
On-Premises Exchange Mailboxes | At discretion of Agency | On-premises third party application
On-Premises Exchange Mailbox items | At discretion of Agency | On-premises third party application
Online Exchange Mailboxes | Up to 30 days. Refer to: [https://docs.microsoft.com/en-us/office365/Enterprise/office-365-exchange-online-data-deletion](https://docs.microsoft.com/en-us/office365/Enterprise/office-365-exchange-online-data-deletion) | Native Microsoft process
Online Exchange Mailbox items | Up to 30 days. Refer to: [https://docs.microsoft.com/en-us/office365/Enterprise/office-365-exchange-online-data-deletion](https://docs.microsoft.com/en-us/office365/Enterprise/office-365-exchange-online-data-deletion) | Native Microsoft process
On-Premises SharePoint | At discretion of Agency | On-premises third party application
Online SharePoint | Up to 93 days. Refer to: [https://docs.microsoft.com/en-us/office365/Enterprise/office-365-sharepoint-online-data-deletion](https://docs.microsoft.com/en-us/office365/Enterprise/office-365-sharepoint-online-data-deletion) | Native Microsoft process
Teams | Teams chat, channel, and files data retained indefinitely unless retention policies are applied. Refer to: [https://docs.microsoft.com/en-us/microsoftteams/retention-policies](https://docs.microsoft.com/en-us/microsoftteams/retention-policies) | Native Microsoft process
OneDrive for Business | Up to 30 days user initiated restore. Refer to: [https://support.office.com/en-us/article/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15](https://support.office.com/en-us/article/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15) | Native Microsoft process
Group Drive Data / File Server Data / NAS (On-Premises) | At discretion of Agency | On-premises third party application
Active Directory | At discretion of Agency | On-premises third party application
SQL Databases | At discretion of Agency | On-premises third party application
Oracle Databases | At discretion of Agency | On-premises third party application
VMware Virtual Machines | At discretion of Agency | On-premises third party application
Pre-Production | At discretion of Agency | On-premises third party application
Test and Development | At discretion of Agency | On-premises third party application

### Application and data set RTO and RPO

Application / Data | RPO – Backup < 100 Days | RTO – Backup < 100 Days
--- | --- | ---
On-Premises Exchange Mailboxes | 24 hours from backup or better | < 48 hours or better
On-Premises Exchange Mailbox items | 24 hours from backup or better | < 48 hours or better
Online Exchange Mailboxes | 24 hours from backup or better | < 48 hours or better
Online Exchange Mailbox items | 24 hours from backup or better | < 48 hours or better
On-Premises SharePoint | 24 hours from backup or better | < 48 hours or better
Online SharePoint | 24 hours from backup or better | < 48 hours or better
Teams | 24 hours from backup or better | < 48 hours or better
OneDrive for Business | 24 hours from backup or better | < 48 hours or better
Group Drive Data / File Server Data / NAS (On-Premises) | 24 hours from backup or better | < 48 hours or better
SQL Databases | 24 hours from backup or better | < 48 hours or better
Oracle Databases | 24 hours from backup or better | < 48 hours or better
VMware Virtual Machines | 24 hours from backup or better | < 48 hours or better

### Disaster recovery time objectives

Data Type | DRTO – Backups < 100 Days
--- | ---
Critical servers / services | `< 48 hours`
Non-Critical servers / services | `> 48 hours`

## Application control

The ABAC settings for the Agency Application Control can be found below. This includes Windows Defender Application Control settings within System Center Configuration Manager (SCCM) and Group Policy. Please note, if a setting is not mentioned below, it should be assumed to have been left at its default setting.

### Windows Defender Application Control

#### MECM managed installer

* Device Collection
  * Name: `WDAC-DeploymentCollection`
  * Description: `Collection used to deploy Managed Installer WDAC policy`
  * Limiting collection: `All Desktop and Server Clients`
  * Membership Rule
    * Type: `Query rule`
    * Name: `Windows 10 Machine Query`
    * Query: `select SMS_R_SYSTEM.ResourceID, SMS_R_SYSTEM.ResourceType, SMS_R_SYSTEM.Name, SMS_R_SYSTEM.SMSUniqueIdentifier, SMS_R_SYSTEM.ResourceDomainORWorkgroup, SMS_R_SYSTEM.Client from SMS_R_System where SMS_R_System.OperatingSystemNameandVersion like "%Workstation%" and SMS_R_System.OperatingSystemNameandVersion like "%10.0%" `
  * Use incremental updates for this collection: `enabled`
  * Schedule a full update on this collection: `enabled`
* Application Control Policy
  * Name: `Agency-WDAC-ManagedInstaller`
  * Description: -
  * Enforcement mode: `Enforcement enabled - Only allow trusted executables to run`
  * Authorize software that is trusted by the Intelligent Security Graph: `Disabled`
  * Trusted files or folders: `Add as required`
  * Deployment collection: `WDAC-DeploymentCollection`
  * Schedule: `Simple schedule`

#### Group policy

Note, in order to deploy via group policy, all supplementary policies must be merged into the base policy. Also the base policy must be stored in a location where all devices can access it (i.e. Sysvol). The XML file must also be converted to Binary via the `Convertfrom-CIPolicy` PowerShell command. The XML files are located within the [Hybrid Client Devices](hybrid-client-devices.html#application-control) section.

* Group policy
  * Type: `Computer Policy`
  * Link location: `Windows 10 Computer OU`
  * Settings:
    * Administrative Templates/system/device guard/Deploy Windows Defender Application Control: `Enabled - Path to policy location on share`