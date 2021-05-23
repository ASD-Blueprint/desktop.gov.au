---
layout: page
title: Platform
menu: abac
---

## Identity and access management

### Azure Active Directory

`Azure Active Directory > Properties`

* Name: `<Agency Name>`
* Country or Region: `Australia`
* Location: `Australian datacenters`
* Notification language: `English`
* Technical Contact: `<username>@<Agency>.gov.au`
* Global privacy contact: `Not configured`
* Privacy Statement URL: `Not configured`
* Access management for Azure Resources: `No`

`Azure Active Directory > Users > User settings > Enterprise applications`

* Enterprise applications
  * Users can consent to apps accessing information on their behalf: `No`
  * Users can add gallery apps to their access panel: `No`
* Admin consent requests
  * Users can request admin consent to apps they are unable to consent to: `No`
  * Select users to review admin consent requests: `Not configured`
  * Selected users will receive email notifications for requests: `Not configured`
  * Selected users will receive request expiration reminders: `Not configured`
  * Consent request expires after (days): `Not configured`
* Office 365 Settings
  * Users can only see Office 365 apps in the Office 365 portal: `No`

`Azure Active Directory > Users > User settings`

* App registrations
  * Users can register applications: `No`
* Administration portal
  * Restrict non-administrator access to Azure AD administration portal: `Yes`
* LinkedIn account connections
  * Allow users to connect work or school account with LinkedIn: `No`

`Azure Active Directory > Users > User settings > External collaboration settings`

* Guest user access: `Guest users have limited access to properties and memberships of directory objects`
* Guest invite settings
  * Admins and users in the guest inviter role can invite: `Yes`
  * Members can invite: `No`
  * Guests can invite: `No`
  * Enable guest self-service sign up via user flows: `No`
* Enable Email One-time passcode for guests: `No`
* Collaboration restrictions
  * Allow invitations only to the specified domains (most restrictive): `Selected`
  * Target domains:
    * `<Agency>.gov.au`

`Azure Active Directory > Groups > General`

* Self Service Group Management
  * Owners can manage group membership requests in the Access Panel: `No`
  * Restrict user ability to access groups features in the Access Panel. Administrators (Global, Group and User Admin) will have access regardless of the value of this setting: `Yes`
* Security Groups
  * Users can create security groups in the Azure portals: `No`
* Microsoft 365 Groups
  * Users can create Microsoft 365 groups in Azure portals: `No`

`Azure Active Directory > Groups > Expiration`

* Group lifetime (in days): `365`
* Email contact for groups with no owners: `Office365_Group_Expiration@<Agency>.gov.au`
* Enable expiration for these Microsoft 365 groups: `None`

`Azure Active Directory > Groups > Naming policy`

* Blocked words: `Not configured`

`Azure Active Directory > Custom domain names`

* `<Agency>.gov.au (Primary)`
* `<Agency>.onmicrosoft.com`

`Azure Active Directory > Company branding`

* Locale: `Default`
  * Sign-in Page background image (1920x1080px):	Generic Australian Government Background
  * Banner logo (280x60px): Generic Australian Government Logo
  * Username hint: `user@agency.gov.au`
  * Sign-in page text: -  
    Note: User terms are configured using Conditional Access Policies.
  * Sign-in page background color: -
  * Square logo image (240x240px): Generic Australian Government Logo
  * Square logo image, dark theme (240x240px): -
  * Show option to remain signed in: `No`

`Azure Active Directory > Devices > Device settings`

* Users may join devices to Azure AD: `All`
* Devices to be Azure AD joined or Azure AD registered require Muti-Factor Authentication: `No`
* Maximum number of devices per user: `Unlimited`
* Additional local administrators on all Azure AD joined devices: -
* Enterprise State Roaming: -

`Azure Active Directory > Devices > Enterprise State Roaming`

* Users may sync settings and app data across devices: `All`

`Azure Active Directory > Password reset > Properties`

* Self-service password reset enabled: `All`

`Azure Active Directory > Password reset > Authentication methods`

* Number of methods required to reset: `2`
* Methods available to users: `Mobile app notification`, `Email`, `Mobile phone`

`Azure Active Directory > Password reset > Registration`

* Require users to register when signing in?: `Yes`
* Number of days before users are asked to re-confirm their authentication information: `180`

`Azure Active Directory > Password reset > Notifications`

* Notify users on password resets?: `Yes`
* Notify all admins when other admins reset their password?: `Yes`

`Azure Active Directory > Password reset > Customization`

* Customize helpdesk line: `No`

`Azure Active Directory > Password reset > On-premises integration`

* Write back passwords to your on-premises directory?: `Not configured`
* Allow users to unlock accounts without resetting their password?: `Not configured`

### Emergency access admin accounts

`Azure Active Directory > Users > Break Glass > Profile`

* Name: `Break Glass`
* User Principal Name: `break.glass_priv@<Tenant Name>.onmicrosoft.com`
* User Type: `Member`

`Azure Active Directory > Users > Break Glass > Assigned roles`

* Active assignments: `Global Administrator`

`Azure Active Directory > Users > Break Glass > Groups`

* Name: `Excluded from CA`, `rol-Agency-Administrators`, `<Agency Name>`, `All Users`

`Azure Active Directory > Users > Break Glass > Licenses`

* Products: `Microsoft 365 E5`
* Assignment Paths: `Inherited (rol-Agency-Administrators)`

### Azure Active Directory identity protection

`Azure Active Directory > Security > Identity Protection > Sign-in risk policy`

* Policy Name: `Sign-in risk remediation policy`
  * Assignments
    * Users
      * Include: `All users`
      * Exclude: `Break Glass`
    * Sign-in risk: `Medium and above`
  * Controls
    * Select the controls to be enforced: `Allow access`
    * Require multi-factor authentication: `Checked`
  * Enforce policy: `On`

`Azure Active Directory > Security > Identity Protection > User risk policy`

* Policy Name: `User risk remediation policy`
  * Assignments
    * Users
      * Include: `All users`
      * Exclude: -
    * Sign-in risk: `Medium and above`
  * Controls
    * Select the controls to be enforced: `Allow access`
    * Require password change: `Checked`
  * Enforce policy: `On`

### Azure Active Directory multifactor authentication

`Multi-Factor Authentication > Fraud alert`

* Allow users to submit fraud alerts: `On`
* Automatically block users who report fraud: `On`

`Multi-Factor Authentication > Getting started > Configure additional cloud-based MFA settings`

* App passwords: `Do not allow users to create app passwords to sign in to non-browser apps`
* Trusted IPs: `Not configured`
* Verification options: `Notification through mobile app`, `Verification code from mobile app or hardware token`
* Remember multi-factor authentication: `Not configured`

### Licensing

Table 6 describes the user (`rol-agency-users`) licensing settings that are configured within the tenant available at `Azure Active Directory > Groups > All groups > rol-Agency-Users > Licenses > Microsoft 365 E5`

Item | Configuration
--- | ---
Azure Active Directory Premium P1 | On
Azure Active Directory Premium P2 | On
Azure Advanced Threat Protection | On
Azure Information Protection Premium P1 | On
Azure Information Protection Premium P2 | On
Azure Rights Management | On
Customer Lockbox | On
Exchange Online (Plan 2) | On
Flow for Office 365 | Off
Information Barriers | On
Information Protection for Office 365 - Premium | On
Information Protection for Office 365 - Standard | On
Insights by MyAnalytics | Off
Microsoft 365 Advanced Auditing | On
Microsoft 365 Apps for enterprise | On
Microsoft 365 Audio Conferencing | On
Microsoft 365 Phone System | Off
Microsoft Azure Multi-Factor Authentication | On
Microsoft Cloud App Security | On
Microsoft Communications Compliance | On
Microsoft Communications DLP | On
Microsoft Customer Key | Off
Microsoft Data Investigations | On
Microsoft Defender Advanced Threat Protection | On
Microsoft Forms (Plan E5) | On
Microsoft Information Governance | On
Microsoft Insider Risk Management | On
Microsoft Intune | On
Microsoft Kaizala Pro | Off
Microsoft ML-based classification | On
Microsoft MyAnalytics (Full) | Off
Microsoft Planner | On
Microsoft Records Management | On
Microsoft StaffHub | Off
Microsoft Stream for O365 E5 SKU | On
Microsoft Teams | On
Office 365 Advanced eDiscovery | On
Office 365 Advanced Threat Protection (Plan 2) | On
Office 365 Cloud App Security | On
Office 365 Privileged Access Management | On
Office 365 SafeDocs | On
Office for the web | On
Power BI Pro | On
PowerApps for Office 365 | Off
Premium Encryption in Office 365 | On
SharePoint Online (Plan 2) | On
Skype for Business Online (Plan 2) | Off
Sway | On
To-Do (Plan 3) | On
Whiteboard (Plan 3) | On
Windows 10 Enterprise | On
Yammer Enterprise | Off

Table 7 describes the admin (`rol-agency-administrators`) licensing settings that are configured within the tenant.

`Azure Active Directory | Groups | All groups > rol-Agency-Administrators | Licenses > Microsoft 365 E5`

Item | Configuration
--- | ---
Azure Active Directory Premium P1 | On
Azure Active Directory Premium P2 | On
Azure Advanced Threat Protection | Off
Azure Information Protection Premium P1 | Off
Azure Information Protection Premium P2 | Off
Azure Rights Management | Off
Customer Lockbox | Off
Exchange Online (Plan 2) | Off
Flow for Office 365 | Off
Information Barriers | Off
Information Protection for Office 365 - Premium | Off
Information Protection for Office 365 - Standard | Off
Insights by MyAnalytics | Off
Microsoft 365 Advanced Auditing | Off
Microsoft 365 Apps for enterprise | Off
Microsoft 365 Audio Conferencing | Off
Microsoft 365 Phone System | Off
Microsoft Azure Multi-Factor Authentication | Off
Microsoft Cloud App Security | On
Microsoft Communications Compliance | Off
Microsoft Communications DLP | Off
Microsoft Customer Key | Off
Microsoft Data Investigations | Off
Microsoft Defender Advanced Threat Protection | Off
Microsoft Forms (Plan E5) | Off
Microsoft Information Governance | Off
Microsoft Insider Risk Management | Off
Microsoft Intune | Off
Microsoft Kaizala Pro | Off
Microsoft ML-based classification | Off
Microsoft MyAnalytics (Full) | Off
Microsoft Planner | Off
Microsoft Records Management | Off
Microsoft StaffHub | Off
Microsoft Stream for O365 E5 SKU | Off
Microsoft Teams | Off
Office 365 Advanced eDiscovery | Off
Office 365 Advanced Threat Protection (Plan 2) | Off
Office 365 Cloud App Security | Off
Office 365 Privileged Access Management | Off
Office 365 SafeDocs | Off
Office for the web | Off
Power BI Pro | Off
PowerApps for Office 365 | Off
Premium Encryption in Office 365 | Off
SharePoint Online (Plan 2) | Off
Skype for Business Online (Plan 2) | Off
Sway | Off
To-Do (Plan 3) | Off
Whiteboard (Plan 3) | Off
Windows 10 Enterprise | Off
Yammer Enterprise | Off

## Windows Information Protection

### Application protection policies

`Intune > Client apps > App protection policies > Windows Information Protection > Properties`

* Name: `Windows Information Protection`
* Description: `Application Protection policies`
* Enrollment state: `With enrollment`
* Targeted apps
  * Protected apps:
```
Office-365-ProPlus-1810-Allowed.xml
Recommended-Denied-Office-365-ProPlus-1810.xml
MsEdge - WIPMode-Allow - Enterprise AppLocker Policy File.xml
IE11
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
  * Exempt apps: -
* Required settings
  * Windows Information Protection mode: `Block`
  * Corporate identity: `<Agency>.gov.au`
* Advanced settings
  * Network perimeter
    * Type: `Cloud resources`
    * Name: `Office365`
    * Value:
```
Agency.sharepoint.com|Agency-my.sharepoint.com|Agency-files.sharepoint.com|tasks.office.com|protection.office.com|meet.lync.com|teams.microsoft.com|www.yammer.com|yammer.com|persona.yammer.com|outlook.office.com|outlook.office365.com|attachments.office.net|Agency.crm.dynamics.com|Agency.visualstudio.com|Agency.powerbi.com
```
    * Enterprise Proxy Servers list is authoritative (do not auto-detect): `Off`
    * Enterprise IP Ranges list is authoritative (do not auto-detect): `Off`
  * Data protection
    * Upload a Data Recovery Agent (DRA) certificate to allow recovery of encrypted data: `Not configured`
    * Prevent corporate data from being accessed by apps when the device is locked. Applies only to Windows 10 Mobile: `Off`
    * Revoke encryption keys on unenroll: `On`
    * Show the enterprise data protection icon: `On`
    * Use Azure RMS for WIP: `Off`
    * Allow Windows Search Indexer to search encrypted items: `On`
    * Encrypted file extensions: -
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: -
* Scope tags: `Default`

`Intune > Client apps > App protection policies > iOS App Protection Policy > Properties`

* Name: `iOS App Protection Policy`
* Description: -
* Platform: `iOS/iPadOS`
* Apps
  * Target to apps on all device types: `Yes`
  * Device types: -
  * Public apps:
```
Skype for Business
Microsoft Excel
Microsoft Outlook
Microsoft PowerPoint
Microsoft Word
Microsoft OneNote
Microsoft Planner
Azure Information Protection
Microsoft SharePoint
Microsoft OneDrive
Microsoft Teams
Microsoft Stream
Microsoft To-Do
Microsoft Visio Viewer
```
* Data protection
  * Data Transfer
    * Backup org data to iTunes and iCloud backups: `Block`
    * Send org data to other apps: `Policy managed apps`
    * Select apps to exempt:
      * Name 1: `Default`
      * Value 1: `tel;telprompt;skype;app-settings;calshow;itms;itmss;itms-apps;itms-appss;itms-services;`
      * Name 2: `Apple Maps`
      * Value 2: `maps`
      * Name 3: `Google Maps`
      * Value 3: `comgooglemaps`
    * Save copies of org data: `Block`
    * Allow user to save copies to selected services: `OneDrive for Business`, `SharePoint`
    * Receive data from other apps: `Policy managed apps`
    * Restrict cut, copy, and paste between other apps: `Policy managed apps`
    * Cut and copy character limit for any app: `0`
    * Third party keyboards: `Block`
  * Encryption
    * Encrypt org data: `Require`
  * Functionality
    * Sync app with native contacts app: `Block`
    * Printing org data: `Block`
    * Restrict web content transfer with other apps: `Microsoft Edge`
    * Org data notifications: `Allow`
* Access requirements
  * PIN for access: `Not required`
  * PIN type: `Numeric`
  * Select minimum PIN length: `4`
  * Touch ID instead of PIN for access (iOS 8+/iPadOS): `Block`
  * Override biometrics with PIN after timeout: `Require`
  * Timeout (minutes of inactivity): `30`
  * Face ID instead of PIN for access (iOS 11+/iPadOS): `Block`
  * PIN reset after number of days: `Yes`
  * Number of days: `365`
  * App PIN when device PIN is set: `Require`
  * Work or school account credentials for access: `Require`
  * Recheck the access requirements after (minutes of inactivity): `30`
* Conditional launch

Setting | Value | Action
--- | --- | ---
Offline grace period | 720 | Block access (minutes)
Offline grace period | 90 | Wipe data (days)
Jailbroken/rooted devices | | Block access
Min OS version | 12.0 | Block access

* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: `grp-Windows-10-Devices`
* Scope tags: `Default`

## Threat protection

### Microsoft Defender Advanced Threat Protection

`Microsoft Intune > Device compliance > Microsoft Defender ATP > Open the Microsoft Defender ATP admin console`

#### General

* Data retention
  * Data Storage: `US`
  * Data Retention: `180 days`
* Alert notifications

Notification rule | Device groups | Alert severity | Recipients
--- | --- | --- | ---
High severity alert | Any device in my organization | High | itsa@desktop.gov.au
Medium severity alert | Any device in my organization | Medium | itsa@desktop.gov.au
Low severity alert | Any device in my organization | Low | itsa@desktop.gov.au

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
  * Microsoft Secure Score: `Off`
  * Web content filtering: `On`
  * Microsoft Intune connection: `On`
  * Preview features: `On`
  * Microsoft Threat Expert: `Not configured`
* Auto remediation

Rank | Device group | Remediation level
--- | --- | ---
1 | Windows 10 | Semi - require approval for all folders
Last | Ungrouped devices (default) | Semi - require approval for all folders

#### Permissions

* Roles
  * Microsoft Defender for Endpoint administrator (default)
    * Assigned user groups: `rol-agency-security-defenderatp-admins`
  * Microsoft Defender ATP Viewer
    * Description: `Viewer privileges`
    * View Data
      * Security operations
      * Threat and vulnerability management
    * Assigned user groups: `rol-agency-security-defenderatp-viewer`
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
    * Assigned user groups: `rol-agency-security-defenderatp-remediation`
* Device groups
  * Device group name: `Windows 10`
    * Rank: `1`
    * Automation level: `Semi - require approval for all folders`
    * Members: 
```
Name Starts with <Agency 3 characters>
And Domain Starts with <Not configured>
And Tag: Starts with <Not configured>
And OS In <Not configured>
```
    * User access
      * Azure AD user groups with access to this machine group: `rol-agency-security-defenderatp-admins`, `rol-agency-security-defenderatp-viewer`, `rol-agency-security-defenderatp-remediation`
  * Device group name: `Ungrouped devices (default)`
    * Rank: `Last`
    * Automation level: `Semi - require approval for all folders`
    * User access
      * Azure AD user groups with access to this machine group: `rol-agency-security-defenderatp-admins`, `rol-agency-security-defenderatp-viewer`, `rol-agency-security-defenderatp-remediation`  

#### APIs

* SIEM: `Not configured`

#### Rules

* Custom detections: `Not configured`
* Alert suppression: `Not configured`
* Indicators: `Not configured`
* Process Memory Indicators: `Not configured`
* Web content filtering
  * Policy name: `Adult Sites`
    * Blocked categories:
```
Cults
Gambling
Nudity
Pornography/Sexually explicit
Sex education
Tasteless
Violence
```
    * Scope: `All devices`
  * Policy name: `High Traffic Sites`
    * Blocked categories:
```
Download sites
Image sharing
Peer-to-peer
Streaming media & downloads
```
    * Scope: `All devices`
* Automation uploads
  * Content analysis: `On`
  * File extension names: `wsf,tcl,sys,scr,'',job,ws,ko.gz,vbe,bat,ps1,vb,com,air,cpl,exe,rb,cmd,msi,url,reg,gadget,dll,ko,js,pl,sh,rgs,inf,vbs,elf,py`
  * Memory Content Analysis: `On`
* Automation folder exclusions: `Not configured`

#### Device management

* Onboarding
  * Select operating system to start offboarding process: `Windows 10`
  * Deployment method: `Local Script (for up to 10 machines)`
* Offboarding
  * Select operating system to start offboarding process: `Windows 10`
  * Deployment method: `Local Script (for up to 10 machines)`

### Microsoft Cloud App Security

`https://portal.cloudappsecurity.com/`

* System
  * Organization details
    * Organizations display name: `Digital Transformation Agency`
    * Environment name: `GovDesk`
    * Managed Domains: `<Agency>.onmicrosoft.com`, `<Agency>.gov.au`
  * Mail settings
    * Email sender identity: `Default settings`
    * Email template: `Not configured`
  * Automatic sign out
    * Sign out when a user is inactive for: `After 15 Minutes`
* Cloud Discovery
  * Snapshot reports: `Not configured`
  * Continuous reports: `Not configured`
  * Automatic log upload
    * Data sources
      * Name: `Win10 Endpoint Users`
      * Source: `Windows Defender Advanced Threat Protection`
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
  * Microsoft Defender ATP: `Not configured`
  * User enrichment: `Not configured`
  * Anonymization: `Not configured`
* Threat Protection
  * Azure ATP integration: `Not configured`
* Information Protection
  * Admin quarantine folder location: `Not configured`
  * User notification: `Not configured`
  * Azure Information Protection
    * Automatically scan new files for Azure Information Protection classification labels and content inspection warnings: `Not configured`
    * Only scan files for Azure Information Protection classification labels and content inspection warnings from this tenant: `Not configured`
  * Files
    * Enable file monitoring: `Not configured`
* Conditional Access App Control
  * Default behavior
    * During system down time: `Allow access`
    * User monitoring
      * Notify users that their activity is being monitored: `Use default message`
    * Device identification
      * Client certificate based identification: `Not configured`
    * App onboarding/maintenance
      * Included users: `Not configured`

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

Item | Configuration
--- | ---
Log Analytics was not implemented for this environment at this time refer to the DTA-Platform Designv1.0 for configuration guidance. | |

## Microsoft Intune configuration

All Windows 10 client configuration is accomplished via Microsoft Intune policies. These Intune configuration policies are detailed in separate documents that are explained in Table 13 below. 

Table 13 Additional Intune Configuration Documents

Section | Description | Document Name
--- | --- | ---
Device enrollment | Automatic Enrolment, Enrolment Status page, Deployment Profiles | DTA – Cloud-Only ABAC - Intune Enrolment
Device compliance | Device compliance policies | DTA – Cloud-Only ABAC - Intune Compliance
Device configuration | Configuration Profiles, PowerShell scripts | DTA – Cloud-Only ABAC - Intune Configuration
Device security | Windows 10 Security Baselines, Microsoft Defender ATP Baselines, Microsoft Edge Baseline | DTA – Cloud-Only ABAC - Intune Security Baselines
Client apps | Win32 Apps, Web links, Windows MSI Line of Business apps, Office 365 installation, Windows Information Protection | DTA – Cloud-Only ABAC - Intune Applications
Conditional Access | Conditional Access policies | DTA – Cloud-Only ABAC - Conditional Access Policies
Software Updates | Windows 10 update rings | DTA – Cloud-Only ABAC – Intune Software Updates

### Printing

Table 14 describes the Printing settings that are configured within Intune.

Item | Configuration
--- | ---
Printer addition restrictions | Can be configured using scripts deployed by Intune.
Unsecure location printing | Configured in Intune Security Baselines.

## Role based access control

### Privileged identity management

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Global Administrator > Role Settings`

* Activation
  * Activation maximum duration: `1 hour`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Checked`
  * Select approvers(s): `No approver selected`
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

`Azure Active Directory > Identity Governance > Azure AD roles > Azure AD roles > Roles > Global Reader > Role Settings`

* Activation
  * Activation maximum duration: `1 hour`
  * On activation, require: `Azure MFA`
  * Require justification on activation: `Checked`
  * Require ticket information on activation: `Not checked`
  * Require approval to activate: `Not checked`
  * Select approvers(s): `No approver selected`
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
