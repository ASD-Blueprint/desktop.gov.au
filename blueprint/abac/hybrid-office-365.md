---
layout: page
title: Hybrid - Office 365
menu: abac
---

## Organisation 

The ABAC settings for the Agency organisation can be found below. This includes Residency, Licensing and Licensing Manual Groups, Theme, Add-ins and Security and Privacy settings.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Residency

`Azure Active Directory > Properties`

Table 2 describes the Office 365 Region settings.

Item | Configuration
--- | ---
Name | Agency Name
Country or region | Australia
Location | Australia datacenters

`Microsoft 365 Admin center > Settings > Org settings > Organization profile`

Item | Configuration
--- | ---
Name | Agency Name
Street address | Agency Street Address
City | Canberra
State  | ACT
ZIP or postal code | Agency Post Code
Country or region | Australia
Phone | Agency Phone Number
Technical Contact | Agency@outlook.com
Preferred Language | English

### Licensing

`Microsoft 365 Admin center > Billing`

Table 3 describes the Microsoft 365 Licensing settings.

Item | Configuration
--- | ---
Name | Quantity
Microsoft 365 E5 | 100,000
Microsoft Power Automate Free | 10,000
Office 365 E5 | 3
Microsoft Power Apps Plan 2 Trial | 10,000

### Licensing manual groups

`Azure Active Directory > Licenses > Microsoft 365 E5 > Licensed groups `

Table 4 describes the configuration for the manual allocation of Microsoft 365 E5 licenses.

Name | State
--- | ---
rol-Agency-Administrators | Active
rol-Agency-Users | Active
Office365_AssignLicense_StandUsers | Active


### Theme

`Microsoft 365 Admin Center > Settings > Org settings > Organisation Profile > Custom themes`

Table 5 describes the Custom Theme settings.

Item | Configuration
--- | ---
Use a custom logo image | Use an image from a URL
Use an image from a URL | https://Agency.sharepoint.com/:i:/r/sites/AdminTeamsandLicensing/SiteAssets/UX/Agency Acronym%20Logo%20Inline%20White.png?csf=1&e=VqNfLh
Make the logo clickable | https://Agency.sharepoint.com/
Select background image | --
Navigation bar colour | #005A70
Text and icon colour | #FFFFFF
Accent colour | #B1E4E3
Prevent users from overriding their theme | Enabled
Show the user’s display name | Enabled

`Endpoint Manager Admin Center > Tenant administration > Customization`

* Branding
  * Organization name: `<Agency Name>`
  * Theme color: `#512876`
  * Show in header: `Organization logo only`
  * Upload logo for theme color background: Agency supplied
  * Upload logo for theme color light background: Agency supplied
  * Upload brand image: Agency supplied
* Support information
  * Contact name: `<Agency Acronym> IT Service Desk`
  * Phone number: `<Agency Support Telephone Number>`
  * Email address: `ITServiceDesk@Agency.gov.au`
  * Website name: -
  * Website URL: -
  * Additional information: -
* Configuration
  * Device enrollment: `Available, with prompts`
  * Privacy messages in Company Portal for iOS/iPadOS: `Default`
  * Privacy statement URL: - 
  * Send a push notification to users when their device ownership type changes from personal to corporate (Android and iOS/iPadOS only): `No`
  * Hide remove button on corporate Windows devices: `Yes`
  * Hide reset button on corporate Windows devices: `No`
  * Hide remove button on corporate iOS/iPadOS devices: `No`
  * Hide reset button on corporate iOS/iPadOS devices: `No`

### Add-ins

`Microsoft 365 Admin Center > Settings > Org settings > Services`

Item | Configuration
--- | ---
Azure Speech Services | Disabled
Power Automate (Flow) | Disabled
Power Apps | Disabled
Power Bi | Disabled
Bookings | Disabled
Calendar | Disabled
Cortana | Disabled
Integrated Apps | Disabled
Microsoft Forms | Send a link to the form and collect responses (enabled)<br>Share to collaborate on the form layout and structure (enabled)<br>Share the form as a template that can be duplicated (enabled)<br>Share form results summary (disabled)<br>Record names by default (disabled)<br>Include Bing search, YouTube videos (disabled)<br>Add internal phishing protection
Microsoft Graph Data Connect | Enabled
Microsoft Planner | Enabled
Microsoft Search in Bing | Disabled
Office What’s New management preview | Disabled
Modern Authentication | Enabled
MyAnalytics | Insights dashboard (enabled)<br>Weekly digest (enabled)<br>Insights Outlook add-in (enabled)<br>Allow Microsoft to contact me (Disabled)
External Office 365 group content sharing | Let group members outside your organization access content (Enabled)<br><br>Let group owners add people outside your organization (Enabled)
‎Office‎ software download settings | Disabled
Office on the web | Disabled
Reports | Disabled
SharePoint | New and existing guests – guests must sign in or provide a verification code – Enabled
Skype for Business | Disabled
Sway  | Disabled
User owned apps and services | Disabled
Whiteboard | Turn on Whiteboard for everyone in your org (enabled) <br>Level of diagnostic data to send to Microsoft (Neither)<br>Allow the use of optional connected experiences in Whiteboard (disabled)<br>Enable easy sharing of Whiteboard from Surface Hub (enabled)


### Security and privacy

Table 8 describes the Microsoft 365 Security and Privacy settings.

`Microsoft 365 admin center > Org Settings > Security & Privacy`

Item | Configuration
--- | ---
Customer lockbox | Enabled
Password expiration policy | Not configured
Privacy profile | Not configured
Self-service password reset | Not configured
Sharing | Not configured

## Exchange Online

The ABAC settings for the Agency Exchange Online instance can be found below. This includes Connectors, Mail Exchange (MX) Records, SPF, DNS Records, Accepted and Remote Domains, Client Access Services (CAS) Mailbox Plan, Authentication Policy, Outlook Web Access Policy, Mailbox Archive and Auditing, Mail Flow Rules, Journaling, Mailbox Retention, Shared and Resource Mailboxes, Distribution, Dynamic and Microsoft 365 groups. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Connectors

`Exchange admin center > Mail flow > Connectors`

Table 9a describes the Exchange Online inbound mail connectors

Item | Configuration
--- | ---
From | Your Organization's email server
To | Office 365
Description | None
Status | On
Retain internal Exchange email headers (recommended) | Enable
How to identify your organization | Identify the organization by verifying that messages are coming Inbound from xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Security restrictions | Reject messages if they aren’t encrypted using Transport Layer Security ‎(TLS)‎, or the subject name on the certificate that the organization uses to authenticate with Office 365 doesn’t‎ match this domain name: *.Agency.gov.au

Table 9b describes the Exchange Online outbound mail connectors

Item | Configuration
--- | ---
From | Office 365
To | Your Organization’s email server
Description | None
Status | On
Retain internal Exchange email headers (recommended) | Enable
How to identify your organization | Identify the organization by verifying that messages are going outbound from xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
When to use the connector | Only when email messages are sent to these domains: *
Routing method | Route email messages through these smart hosts: Agency.gov.au
Security restrictions | Always use Transport Layer Security ‎(TLS)‎ and connect only if the recipient’s email server certificate is issued by a trusted certificate authority ‎(CA)‎, and the subject name matches this domain: mail.Agency.gov.au

### MX records

Table 10 describes the MX records that have been configured.

These records are not set within Azure or Exchange and have been configured with the hosting provider.

Domain | MX Preferences | Mail Exchanger
--- | --- | ---
Agency.onmicrosoft.com | `0` | `Agency.mail.protection.outlook.com`

### SPF records

Table 11 describes the SPF records have been configured.

These records are not set within Azure or Exchange and have been configured with the hosting provider.

Domain | SPF Record | DMARC Policy
--- | --- | ---
Agency.onmicrosoft.com | `"v=spf1 include:spf.protection.outlook.com -all"` | Not configured`

### DNS records

Table 12a describes the DNS record settings for Agency.gov.au (default)

Type | Priority | Host name | Points to address or value | TTL
--- | --- | --- | --- | ---
MX | 0 | Agency Domain | Agency-gov-au.mail.protection.outlook.com | 1 hour
TXT | - | Agency Domain | v=spf1 include:spf.protection.outlook.com -all | 1 hour
CNAME | - | Autodiscover.Agency Domain | Autodiscover.outlook.com | 1 hour

Table 12b describes the DNS record settings for Agency.onmicrosoft.com

Type | Host name | Points to address or value | TTL
--- | --- | --- | ---
TXT | `selector1-Agency-mail-onmicrosoft-com._domainkey.Agency.onmicrosoft.com` | `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCff/x+ZR9dYMl+d137AAu0aM7u0keutv/J+YdV1vegammbcwgnu7IrFFuS1WpOWiyc1IUp/XoskpKPHpA9k6L/UafJjTxI+KI2nrx7qgY7DXFqTsHIEVZDpdnMZOHmooW24i7HZ/0Yh/ZSkUYr1mE/MoUnS77PgYRDT+BjuG5lnQIDAQAB;` | 1 hour
TXT | `selector1-Agency-onmicrosoft-com._domainkey.Agency.onmicrosoft.com` | `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDaUXUBDLyhaVehWKVTyJHQA1TIpu34b9dh3dZaaEMfiq5vHV2Mrs5r+H+nfNtxIfxAaOPyMLTEPhIipmeie2qQSbm+pUCAj09s/fOZqjwYZ0Y4/6RfNe0VzawvX4Fls9NbuZaiEe6PN5kqABzEq755bfJMLqVT+gzXZuea+K5SIQIDAQAB;` | 1 hour
TXT | `selector1-Agency-gov-au._domainkey.Agency.onmicrosoft.com` | `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDejs4tfJJ9cwb/aCteu+IPMEjoJI4z5Jir3Y5eK0vREh0FSpir/qBk6tH5xPMSDFsH8qWErOTN57mZ6E8IB4CTgxI0kakYmZJr9USAoyUJNCrgjuwcJ9cNcKqJmkYAo4/dUO6B80SKT8pNIzkSrhq92Y6CejFPm1zUYTL8CZOypQIDAQAB;` | 1 hour
TXT | `selector2-Agency-mail-onmicrosoft-com._domainkey.Agency.onmicrosoft.com `| `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9HlySKa1sSUdHI8WkaUEiINtRLExcis6p+R7p3DKzTEe3Ir0k9IPj3o0hp0mNfWZ62b8uOBhTir9ZTwdGP6Yr2UehFDWgz+nrEXQA0XFOfXiU+BHPW3XVy6rLRD/9jFqmnLuZi3I2CVmsVO/cdiMjoDwj5qbCvD3DCwWXkGHK5QIDAQAB;` | 1 hour
TXT | `selector2-Agency-onmicrosoft-com._domainkey.Agency.onmicrosoft.com` | `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvReE2Is6fDDFtKI/JEcNDOrIuEm3ry+PACwEEwzHuu5UW0nv1nQfQqnR61xz/o+HOR7GZLgu1DjfMWB9EUaub/yaNGrt/qn7X9rcaLRiK9UW+c/TuC4DkSuH+Ks0MmfUYp7UhiBIWaBTCx47qkvVE6qU8AZuwvt7hB8TF4Cyr9QIDAQAB;` | 1 hour
TXT | `selector2-Agency-gov-au._domainkey.Agency.onmicrosoft.com` | `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsk8uDLWkqiD80eR5aNtnwZgH31CqWFHpF2hYd8FEIeWfJtYwQ77JhHNBVsPc1IxwuHYSH1DN0xn9CZ8eLaKiyykOZpLWhozMSYLNB944+FCDZzT8rKhrBAOQ0Gsv1CKYbNHkOwvIePmy2eFQOS0CfFNU7dIHnnqPfjFxfs9ErQQIDAQAB;` | 1 hour

### Accepted domains

`Exchange Admin Centre > mail flow > Accepted domains`

Table 13 describes the Accepted Domains settings.

Name | Accepted Domain | Domain Type
--- | --- | ---
Agency.gov.au (default) | Agency.gov.au | Authoritative
Agency.onmicrosoft.com | Agency.onmicrosoft.com | Authoritative
Agency.mail.onmicrosoft.com | Agency.mail.onmicrosoft.com | Authoritative

### Remote domains

Table 14 describes the Remote Domains have been configured.

Item | Configuration
--- | ---
Name | Default
Remote Domain | *
Allowed Out Of Office Type | External only
Automatic Reply | False
Automatic Forward | False
Delivery Reports | True
Non-Delivery Reports | True
Meeting Forward Notifications | False
Display Sender Name | True
Trusted Mail Outbound Enabled | False
Trusted Mail Inbound Enabled | False
Use Simple Display Name | False
Non-Delivery Report Diagnostic Info Enabled | True
Use rich-text format | Follow users’ settings
MIME character set | None
Non-MIME character set | None

### CAS mailbox plan

Table 15 describes the CAS Mailbox Plans that have been configured. These settings have been configured with PowerShell.

Item | Configuration
--- | ---
Name | ExchangeOnlineEnterprise
ActiveSyncMailboxPolicy | --
ActiveSyncDebugLogging | False
ActiveSyncEnabled | True
ActiveSyncSuppressReadReceipt | False
DisplayName | ExchangeOnlineEnterprise
ECPEnabled | True
ImapEnabled | False
ImapUseProtocolDefaults | True
ImapMessagesRetrievalMimeFormat | BestBodyFormat
ImapEnableExactRFC822Size | False
ImapProtocolLoggingEnabled | False
ImapSuppressReadReceipt | False
ImapForceICalForCalendarRetrievalOption | False
MAPIEnabled | True
MapiHttpEnabled | --
MAPIBlockOutlookNonCachedMode | False
MAPIBlockOutlookVersions | --
MAPIBlockOutlookRpcHttp | False
PublicFolderClientAccess | False
MAPIBlockOutlookExternalConnectivity | False
OwaMailboxPolicy | OwaMailboxPolicy-Default
OWAEnabled | True
OWAforDevicesEnabled | True
PopEnabled | False
PopMessageDeleteEnabled | True
PopUseProtocolDefaults | True
PopMessagesRetrievalMimeFormat | BestBodyFormat
PopEnableExactRFC822Size | False
PopProtocolLoggingEnabled | False
PopSuppressReadReceipt | False
PopForceICalForCalendarRetrievalOption | True
RemotePowerShellEnabled | True
UniversalOutlookEnabled | True
OutlookMobileEnabled | True
MacOutlookEnabled | True
EwsEnabled | True
EwsAllowOutlook | --
EwsAllowMacOutlook | --
EwsAllowEntourage | --
EwsApplicationAccessPolicy | --
EwsAllowList | --
EwsBlockList | --
IsValid | True
Name | ExchangeOnlineDeskless
ActiveSyncDebugLogging | False
ActiveSyncEnabled | True
ActiveSyncMailboxPolicy | --
ActiveSyncSuppressReadReceipt | False
DisplayName | ExchangeOnlineDeskless
ECPEnabled | True
EwsAllowEntourage | --
EwsAllowList | --
EwsAllowMacOutlook | --
EwsAllowOutlook | --
EwsApplicationAccessPolicy | --
EwsBlockList | --
EwsEnabled | False
ImapEnabled | False
ImapEnableExactRFC822Size | False
ImapForceICalForCalendarRetrievalOption | False
ImapMessagesRetrievalMimeFormat | BestBodyFormat
ImapProtocolLoggingEnabled | False
ImapSuppressReadReceipt | False
ImapUseProtocolDefaults | True
IsValid | True
MacOutlookEnabled | True
MAPIBlockOutlookExternalConnectivity | False
MAPIBlockOutlookNonCachedMode | False
MAPIBlockOutlookRpcHttp | False
MAPIBlockOutlookVersions | --
MAPIEnabled | False
MapiHttpEnabled | --
OutlookMobileEnabled | True
OWAEnabled | True
OWAforDevicesEnabled | True
OwaMailboxPolicy | OwaMailboxPolicy-Default
PopEnabled | False
PopEnableExactRFC822Size | False
PopForceICalForCalendarRetrievalOption | True
PopMessageDeleteEnabled | True
PopMessagesRetrievalMimeFormat | BestBodyFormat
PopProtocolLoggingEnabled | False
PopSuppressReadReceipt | False
PopUseProtocolDefaults | True
PublicFolderClientAccess | False
RemotePowerShellEnabled | True
UniversalOutlookEnabled | True
Name | ExchangeOnlineEssentials
ActiveSyncMailboxPolicy |  --
ActiveSyncDebugLogging  | False
ActiveSyncEnabled | True
ActiveSyncSuppressReadReceipt | False
ECPEnabled  | True
ImapEnabled | False
ImapUseProtocolDefaults | True
ImapMessagesRetrievalMimeFormat | BestBodyFormat
ImapEnableExactRFC822Size | False
ImapProtocolLoggingEnabled | False
ImapSuppressReadReceipt | False
ImapForceICalForCalendarRetrievalOption  | False
MAPIEnabled | True
MapiHttpEnabled |  --
MAPIBlockOutlookNonCachedMode | False
MAPIBlockOutlookVersions  |  --
MAPIBlockOutlookRpcHttp | False
PublicFolderClientAccess  | False
MAPIBlockOutlookExternalConnectivity  | False
OwaMailboxPolicy  | OwaMailboxPolicy-Default
OWAEnabled  | True
OWAforDevicesEnabled | True
PopEnabled  | False
PopMessageDeleteEnabled | True
PopUseProtocolDefaults  | True
PopMessagesRetrievalMimeFormat  | BestBodyFormat
PopEnableExactRFC822Size  | False
PopProtocolLoggingEnabled | False
PopSuppressReadReceipt  | False
PopForceICalForCalendarRetrievalOption | True
RemotePowerShellEnabled | True
UniversalOutlookEnabled | True
OutlookMobileEnabled | True
MacOutlookEnabled | True
EwsEnabled  | True
EwsAllowOutlook | --
EwsAllowMacOutlook | --
EwsAllowEntourage | --
EwsApplicationAccessPolicy | --
EwsAllowList | --
EwsBlockList | --
IsValid  | True
Name | ExchangeOnline
ActiveSyncMailboxPolicy | --
ActiveSyncDebugLogging  | False
ActiveSyncEnabled | True
ActiveSyncSuppressReadReceipt | False
ECPEnabled | True
ImapEnabled | False
ImapUseProtocolDefaults | True
ImapMessagesRetrievalMimeFormat | BestBodyFormat
ImapEnableExactRFC822Size | False
ImapProtocolLoggingEnabled | False
ImapSuppressReadReceipt | False
ImapForceICalForCalendarRetrievalOption | False
MAPIEnabled | True
MapiHttpEnabled | --
MAPIBlockOutlookNonCachedMode | False
MAPIBlockOutlookVersions | --
MAPIBlockOutlookRpcHttp | False
PublicFolderClientAccess | False
MAPIBlockOutlookExternalConnectivity | False
OwaMailboxPolicy | OwaMailboxPolicy-Default
OWAEnabled | True
OWAforDevicesEnabled | True
PopEnabled | False
PopMessageDeleteEnabled | True
PopUseProtocolDefaults | True
PopMessagesRetrievalMimeFormat | BestBodyFormat
PopEnableExactRFC822Size | False
PopProtocolLoggingEnabled | False
PopSuppressReadReceipt | False
PopForceICalForCalendarRetrievalOption | True
RemotePowerShellEnabled | True
UniversalOutlookEnabled | True
OutlookMobileEnabled | True
MacOutlookEnabled | True
EwsEnabled | True
EwsAllowOutlook | --
EwsAllowMacOutlook | --
EwsAllowEntourage | --
EwsApplicationAccessPolicy | --
EwsAllowList | --
EwsBlockList | --
IsValid | True

### Mailbox attributes

Below describes the Mailbox attribute that have been configured. These settings have been configured with PowerShell.

`Exchange Admin Center > recipients > mailboxes > <username> > mailbox features`

* Litigation hold: `False` (configured as true only when required)`

`Exchange Admin Center > recipients > mailboxes > <username> > mailbox usage`

* Exchange Mailbox Size: `100GB per user`

`Exchange Admin Center > recipients > mailboxes > three dots > Set default message size restrictions`

* Maximum szie for sent messages (KB): `90MB`
* Maximum size for received messages (KB): `90MB`

`Exchange Admin Center > recipients > mailboxes > <username> > email address`

* Custom Primary SMTP Addressing: `FirstName.LastName@<Agency>.gov.au`
* Language: `English (en-au)`
* Default Time Zone: `GMT +10 (AUS Eastern Standard Time)`
* Exchange Online PowerShell
  * Disabled for standard users: `True`

### Authentication policy

Table 17 describes the Authentication Policies that have been configured. These settings have been configured using PowerShell.

Item | Configuration
--- | ---
Name | Block Basic Auth
Allow Basic Authentication ActiveSync | False
Allow Basic Authentication Autodiscover | False
Allow Basic Authentication IMAP | False
Allow Basic Authentication MAPI | False
Allow Basic Authentication Offline AddressBook | False
Allow Basic Authentication Outlook Service | False
Allow Basic Authentication POP | False
Allow Basic Authentication Reporting Web Services | False
Allow Basic Authentication Rest | False
Allow Basic Authentication RPC | False
Allow Basic Authentication SMTP | False
Allow Basic Authentication Web Services | False
Allow Basic Authentication PowerShell | False
Admin Display Name | --
Is Valid | True

### Outlook Web Access policy

Table 18 describes the Outlook Web Access Policies have been configured. These settings have been configured using PowerShell.

Item | Configuration
--- | ---
Name | OwaMailboxPolicy-Default
WacEditingEnabled | True
PrintWithoutDownloadEnabled | True
OneDriveAttachmentsEnabled  | True
ThirdPartyFileProvidersEnabled | False
AdditionalStorageProvidersAvailable  | False
ClassicAttachmentsEnabled | True
ReferenceAttachmentsEnabled | True
SaveAttachmentsToCloudEnabled  | True
InternalSPMySiteHostURL  | --
ExternalSPMySiteHostURL  | --
ExternalImageProxyEnabled | True
NpsSurveysEnabled | False
MessagePreviewsDisabled  | False
PersonalAccountCalendarsEnabled | True
TeamsnapCalendarsEnabled | True
BookingsMailboxCreationEnabled | True
DirectFileAccessOnPublicComputersEnabled | True
DirectFileAccessOnPrivateComputersEnabled | True
WebReadyDocumentViewingOnPublicComputersEnabled | True
WebReadyDocumentViewingOnPrivateComputersEnabled | True
ForceWebReadyDocumentViewingFirstOnPublicComputers | False
ForceWebReadyDocumentViewingFirstOnPrivateComputers | False
WacViewingOnPublicComputersEnabled | True
WacViewingOnPrivateComputersEnabled  | True
ForceWacViewingFirstOnPublicComputers  | False
ForceWacViewingFirstOnPrivateComputers | False
ActionForUnknownFileAndMIMETypes | Allow
WebReadyFileTypes | {.xlsx, .pptx, .docx, .xls...}
WebReadyMimeTypes | {application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint...}
WebReadyDocumentViewingForAllSupportedTypes  | True
WebReadyDocumentViewingSupportedMimeTypes | {application/msword, application/vnd.ms-excel,application/x-msexcel, application/vnd.ms-powerpoint...}
WebReadyDocumentViewingSupportedFileTypes | {.doc, .dot, .rtf, .xls...}
AllowedFileTypes | {.rpmsg, .xlsx, .xlsm, .xlsb...}
AllowedMimeTypes | {image/jpeg, image/png, image/gif, image/bmp}
ForceSaveFileTypes | {.svgz, .html, .xml, .swf...}
ForceSaveMimeTypes | {Application/x-shockwave-flash, Application/octet-stream,Application/futuresplash, Application/x-director...}
BlockedFileTypes | {.settingcontent-ms, .printerexport, .appcontent-ms,.appref-ms...}
BlockedMimeTypes | {application/x-javascript, application/javascript,application/msaccess, x-internet-signup...}
PhoneticSupportEnabled | False
DefaultTheme | 
IsDefault | True
DefaultClientLanguage | 0
LogonAndErrorLanguage | 0
UseGB18030 | False
UseISO885915 | False
OutboundCharset | AutoDetect
GlobalAddressListEnabled | True
OrganizationEnabled | True
ExplicitLogonEnabled | True
OWALightEnabled | True
DelegateAccessEnabled | True
IRMEnabled | True
CalendarEnabled | True
ContactsEnabled | True
TasksEnabled | True
JournalEnabled | True
NotesEnabled | True
OnSendAddinsEnabled | False
RemindersAndNotificationsEnabled  | True
PremiumClientEnabled | True
SpellCheckerEnabled | True
SearchFoldersEnabled | True
SignaturesEnabled | True
ThemeSelectionEnabled | True
JunkEmailEnabled | True
UMIntegrationEnabled | True
WSSAccessOnPublicComputersEnabled | True
WSSAccessOnPrivateComputersEnabled | True
ChangePasswordEnabled | True
UNCAccessOnPublicComputersEnabled | True
UNCAccessOnPrivateComputersEnabled | True
ActiveSyncIntegrationEnabled | True
AllAddressListsEnabled | True
RulesEnabled | True
PublicFoldersEnabled | True
SMimeEnabled | True
RecoverDeletedItemsEnabled | True
InstantMessagingEnabled | True
TextMessagingEnabled | True
ForceSaveAttachmentFilteringEnabled | False
SilverlightEnabled | True
InstantMessagingType | Ocs
DisplayPhotosEnabled | True
SetPhotoEnabled | True
AllowOfflineOn | Always
SetPhotoURL | --
PlacesEnabled | True
WeatherEnabled | True
LocalEventsEnabled | False
InterestingCalendarsEnabled | True
AllowCopyContactsToDeviceAddressBook | True
PredictedActionsEnabled | False
UserDiagnosticEnabled | False
FacebookEnabled | False
LinkedInEnabled | True
WacExternalServicesEnabled  | True
WacOMEXEnabled | False
ReportJunkEmailEnabled | True
GroupCreationEnabled | True
SkipCreateUnifiedGroupCustomSharepointClassification  | True
WebPartsFrameOptionsType | SameOrigin
UserVoiceEnabled | True
SatisfactionEnabled | False
FreCardsEnabled | True
ConditionalAccessPolicy | Off
ConditionalAccessFeatures | {}
OutlookBetaToggleEnabled | True
AdminDisplayName | --
DistinguishedName | CN=OwaMailboxPolicy-Default,CN=OWA Mailbox Policies,CN=Configuration, ,CN=Agency.onmicrosoft.com, CN=ConfigurationUnits,DC=exchange server,DC=PROD, DC=OUTLOOK,DC=COM
Identity | OwaMailboxPolicy-Default
IsValid | True
ObjectState | Unchanged
Third party file provider integration | Disabled
Office 365 group creation by users | Disabled

### Mailbox archive

`Exchange Admin Center > recipients > mailboxes > <username> > mailbox features`

Table 19 describes the mailbox archive settings. These settings can only be configured using the On-Premises Exchange Administrator console.

Item | Configuration
--- | ---
Archiving | Enabled
Auto-Expanding Archive (via Powershell command) | Enabled
Archive Configuration | Configured

### Mailbox auditing

Table 20 describes the mailbox archive settings. These settings have been configured using PowerShell.

Item | Configuration
--- | ---
Mailbox Auditing | Enabled
Centralized Logging | Not configured

User Mailbox and Shared Mailbox Audit Configuration

Item | Configuration
--- | ---
Admin Audit Actions | ApplyRecord<br>Copy<br>Create<br>FolderBind<br>HardDelete<br>MessageBind<br>Move<br>MoveToDeletedItems<br>RecordDelete<br>SendAs<br>SendOnBehalf<br>SoftDelete<br>Update<br>UpdateCalendarDelegation<br>UpdateFolderPermissions<br>UpdateInboxRules
Delegated Audit Actions | ApplyRecord<br>Create<br>FolderBind<br>HardDelete<br>Move<br>MoveToDeletedItems<br>RecordDelete<br>SendAs<br>SendOnBehalf<br>SoftDelete<br>Update<br>UpdateFolderPermissions<br>UpdateInboxRules
Owner Audited Actions | ApplyRecord<br>Create<br>HardDelete<br>MailboxLogin<br>Move<br>MoveToDeletedItems<br>RecordDelete<br>SoftDelete<br>Update<br>UpdateCalendarDelegation<br>UpdateFolderPermissions<br>UpdateInboxRules

### Mail flow rules

`Exchange Admin Centre > mail flow > rules`

#### Disclaimer

* Apply this rule if: The recipient is located `Outside the organization`
* Do the following actions: Append the message with the disclaimer

```
'<br/>
<br/>
<p style="font-size:8pt; line-height:10pt; font-family: 'Cambria','times roman',serif;">The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</p>'. 
```

* If the disclaimer can't be applied, reject the message.
* ExceptIfSubjectMatchesPatterns: -
* FromScope: -
* HeaderContainsMessageHeader: -
* HeaderContainsWords: -
* Mode: `Enforce`
* Name: `Disclaimer`
* PrependSubject: -
* Priority: `0`
* SentToScope: `NotInOrganization`
* State: `Enabled`

#### UNOFFICIAL

* If the message: Is sent to `Inside the organization` **and** `msip_labels` header contains `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true` **and** Is received from `Inside the organization`
* Take the following actions: Prepend the subject with `[SEC=UNOFFICIAL]`
* Except if the message: Includes these patterns in the message subject: `(SEC=UNOFFICIAL)`
* ExceptIfSubjectMatchesPatterns: `(SEC=UNOFFICIAL)`
* FromScope: `InOrganization`
* HeaderContainsMessageHeader: `msip_labels`
* HeaderContainsWords: `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true`
* Mode: `Enforce`
* Name: `UNOFFICIAL`
* PrependSubject: `[SEC=UNOFFICIAL]`
* Priority: `1`
* SentToScope: `InOrganization`
* State: `Enabled`

#### OFFICIAL

* If the message: Is sent to `Inside the organization` **and** `msip_labels` header contains `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true` **and** Is received from `Inside the organization`
* Take the following actions: Prepend the subject with `[SEC=OFFICIAL]`
* Except if the message: Includes these patterns in the message subject: `(SEC=OFFICIAL)`
* ExceptIfSubjectMatchesPatterns: `(SEC=OFFICIAL)`
* FromScope: `InOrganization`
* HeaderContainsMessageHeader: `msip_labels`
* HeaderContainsWords: `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true`
* Mode: `Enforce`
* Name: `OFFICIAL`
* PrependSubject: `[SEC=OFFICIAL]`
* Priority: `2`
* SentToScope: `InOrganization`
* State: `Enabled`

#### OFFICIAL:Sensitive

* If the message: Is sent to `Inside the organization` **and** `msip_labels` header contains `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true` **and** Is received from `Inside the organization`
* Take the following actions: Prepend the subject with `[SEC=OFFICIAL:Sensitive]`
* Except if the message: Includes these patterns in the message subject: `(SEC=OFFICIAL:Sensitive)`
* ExceptIfSubjectMatchesPatterns: `(SEC=OFFICIAL:Sensitive)`
* FromScope: `InOrganization`
* HeaderContainsMessageHeader: `msip_labels`
* HeaderContainsWords: `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true`
* Mode: `Enforce`
* Name: `OFFICIAL:Sensitive`
* PrependSubject: `[SEC=OFFICIAL:Sensitive]`
* Priority: `3`
* SentToScope: `InOrganization`
* State: `Enabled`

#### PROTECTED

* If the message: Is sent to `Inside the organization` **and** `msip_labels` header contains `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true` **and** Is received from `Inside the organization`
* Take the following actions: Prepend the subject with `[SEC=PROTECTED]`
* Except if the message: Includes these patterns in the message subject: `(SEC=PROTECTED)`
* ExceptIfSubjectMatchesPatterns: `(SEC=PROTECTED)`
* FromScope: `InOrganization`
* HeaderContainsMessageHeader: `msip_labels`
* HeaderContainsWords: `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true`
* Mode: `Enforce`
* Name: `PROTECTED`
* PrependSubject: `[SEC=PROTECTED]`
* Priority: `4`
* SentToScope: `InOrganization`
* State: `Enabled`

#### Double classification

* If the message: Includes these patterns in the message subject: `\[SEC\=.*\].*\[SEC\=.*\]` **and** Is received from `Inside the organization`
* Take the following actions: reject the message and include the explanation `Multiple Security Classifications in Subject Line` with the status code: `5.7.1`
* ExceptIfSubjectMatchesPatterns: -
* FromScope: `InOrganization`
* HeaderContainsMessageHeader: -
* HeaderContainsWords: -
* Mode: `Enforce`
* Name: `Double Classification`
* PrependSubject: -
* Priority: `5`
* SentToScope: -
* State: `Enabled`

### Journaling

`Exchange Admin Centre > compliance management > journal rules` is not configured.

### Mailbox retention

`Exchange Admin Centre > compliance management > retention polices`

Table 23 describes the Mailbox Retention settings for Default MRM Policy.

Name | Type | Retention Period | Retention Action
--- | --- | --- | ---
Never Delete | Personal | Unlimited | DeleteAndAllowRecovery
Recoverable Items 14 days move to archive | Recoverable items | 14 days | Archive
Junk Email | JunkEmail | 30 days | DeleteAndAllowRecovery
Deleted Items | DeletedItems | 30 days | DeleteAndAllowRecovery
Default 2 year move to archive | All | 730 days | Archive
Personal 1 year move to archive | Personal | 365 days | Archive
Personal never move to archive | Personal | Unlimited | Archive
1 Week Delete | Personal | 7 days | DeleteAndAllowRecovery
1 Month Delete | Personal | 30 days | DeleteAndAllowRecovery
Personal 5 year move to archive | Personal | 1825 days | Archive
6 Month Delete | Personal | 180 days | DeleteAndAllowRecovery
1 Year Delete | Personal | 365 days | DeleteAndAllowRecovery
5 Year Delete | Personal | 1825 days | DeleteAndAllowRecovery

### Shared mailboxes and resource mailboxes

`Exchange Admin Centre > recipients`

None available

`Exchange Admin Centre > recipients > groups`

* Display name: `grp-<Agency Acronym>O365-Outlook`
  * Group email address: `grp-<Agency Acronym>0365-outlook@<Agency>.gov.au`
  * Privacy: `Private – Only members can see content`
  * Language: `English (Australia)`
  * Subscribe new members: `Enabled`
  * Let people outside the organization send email to the group: `Disabled`
  * Owners: `<Agency Owner> (Admin)`
  * Members: `<Agency Owner> (Admin)`
  * Delivery Management
    * Accept messages from: `All senders`
    * Reject message from: `No senders`
  * Group Delegation
    * Send As: `None`
    * Send on Behalf: `None`
* Display name: `Grp-<Agency Acronym>O365-Teams`
  * Group email address: `Grp-<Agency Acronym>0365-Teams@<Agency>.gov.au`
  * Privacy: `Private – Only members can see content`
  * Language: `English (Australia)`
  * Subscribe new members: `Disabled`
  * Let people outside the organization send email to the group: `Disabled`
  * Owners: `<Agency Owner> (Admin)`
  * Members: `<Agency Owner> (Admin)`
  * Delivery Management
    * Accept messages from: `All senders`
    * Reject message from: `No senders`
  * Group Delegation
    * Send As: `None`
    * Send on Behalf: `None`
* Display name: `Protected Desktop Experience`
  * Group email address: `ProtectedDesktopDemo@<Agency>.gov.au`
  * Privacy: `Private – Only members can see content`
  * Language: `English (Australia)`
  * Subscribe new members: `Disabled`
  * Let people outside the organization send email to the group: `Disabled`
  * Owners: `<Agency Exchange Owners>`
  * Members: `<Agency Exchange Administrators>`
  * Delivery Management
    * Accept messages from: `All senders`
    * Reject message from: `No senders`
  * Group Delegation
    * Send As: `None`
    * Send on Behalf: `None`

`Exchange Admin Centre > recipients > resources`

* Display name: `Equipment 1`
  * Email address: `equipment1@<Agency>.gov.au`
  * Capacity: -
  * Department: -
  * Company: -
  * Address book policy: `[No policy]`
  * Booking delegates
    * Booking requests: `Use customized setting to accept or decline booking requests.`
  * Booking options
    * Allow repeating meetings: `Enabled`
    * Allow scheduling only during working hours: `Disabled`
    * Always decline if the end date is beyond the limit: `Enabled`
    * Maximum booking lead time: `180 days`
    * Maximum duration: `24 hours`
  * Contact Information
    * Location: -
    * Phone: -
    * Street: -
    * City: -
    * State: -
    * Post Code: -
    * Country: -
  * Email address
    * Email address: `equipment1@<Agency>.gov.au`
  * Mailbox delegation
    * Send As: `NT AUTHORITY\SELF`
    * Send on Behalf: `None`
    * Full Access: `None`
* Display name: `Room1`
  * Email address: `Room1@<Agency>.gov.au`
  * Capacity: -
  * Department: -
  * Company: -
  * Address book policy: `[No policy]`
  * Booking delegates
    * Booking requests: `Use customized setting to accept or decline booking requests.`
  * Booking options
    * Allow repeating meetings: `Enabled`
    * Allow scheduling only during working hours: `Disabled`
    * Always decline if the end date is beyond the limit: `Enabled`
    * Maximum booking lead time: `180 days`
    * Maximum duration: `24 hours`
  * Contact Information
    * Location: -
    * Phone: -
    * Street: -
    * City: -
    * State: -
    * Post Code: -
    * Country: -
    * Email address
    * Email address: `Room1@<Agency>.gov.au`
  * Mailbox delegation
    * Send As: `NT AUTHORITY\SELF`
    * Send on Behalf: `None`
    * Full Access: `None`

### Distribution lists

`Exchange Admin Centre > recipients > groups > <three dots> > Configure group naming policy`

* Group Naming Policy: `grp-<Department>-<Group Name>`
* Blocked words: `None`

### Dynamic security groups

These settings have been configured using PowerShell.

* Naming Policy: `grp-[Department]-[Group Name]`
* Display Name: `Grp-<Agency Acronym>0365-Outlook`
  * Welcome Email: `Disabled`
* Display Name: `Grp-<Agency Acronym>O365-Teams`
  * Welcome Email: `Disabled`

### Office 365 groups

`Azure Active Directory > Groups > General`

* Self Service Group Management
  * Owners can manage group membership requests in the Access Panel: `No`
  * Restrict user ability to access groups features in the Access Panel. Administrators (Global, Group and User Admin) will have access regardless of the value of this setting.: `Yes`
* Security Groups
  * Users can create security groups in Azure portals: `No`
  * Owners who can assign members as group owners in Azure portals: `All`
* Office 365 Groups
  * Users can create Office 365 groups in Azure portal: `No`
  * Owners who can assign members as group owners in Azure portal: `All`

`Azure Active Directory > Groups > Naming policy`

* Group naming policy: `Grp-<Department>-<Group name>`

`Azure Active Directory > Groups > Expiration`

* Group lifetime (in days): `365`
* Email contact for groups with no owners: `Office365_Group_Expiration@<Agency>.gov.au`
* Enable expiration for these Office 365 groups: `All`

`Azure Active Directory > Groups`

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
* Group Name: `rol-Agency-Users`
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
      * `Sync_<AAD Server 1>_144f9a623d47`
      * `Sync_<AAD Server 2>_b49bd30fb398`
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

## Exchange Online Protection

The ABAC settings for the Agency Exchange Online Protection instance can be found below. This includes the Connection Filtering, Anti-Malware, Policy Filtering, and Content Filtering configuration. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Connection filtering

`Exchange admin center > protection > connection filter`

Table 28 describes the Connection Filters have been configured for `Default-Connection-Filter`

Item | Configuration
--- | ---
Name | Default
IPAllowList | Not configured
IPBlockList | Not configured
Enable safe list | Disabled

### Anti-Malware

Table 29 following Malware Filters have been configured. These settings are configured through PowerShell.

Item | Configuration
--- | ---
Name | Default
PSShowComputerName | False
CustomAlertText | Not Configured
AdminDisplayName | Not Configured
CustomInternalSubject | Not Configured
CustomInternalBody | Not Configured
CustomExternalSubject | Not Configured
CustomExternalBody | Not Configured
CustomFromName | Not Configured
CustomFromName | Not Configured
InternalSenderAdminAddress | Agency Exchange Administrator@<Agency>.gov.au
ExternalSenderAdminAddress | Agency Exchange Administrator@<Agency>.gov.au
BypassInboundMessages | False
BypassOUtboundMessages | False
Action | DeleteAttachmentAndUseDefaultAlertText
IsDefault | True
CustomNotifcations | False
EnableInternalSenderNotifications | True 
EnableExternalSenderNotifications | False
EnableInternalSenderAdminNotifications | True
EnableExternalSenderAdminNotifications | True
EnableFileFilter | True
FileTypes | {ace,ani,app,exe,jar,reg,scr,vbe,vbs}
ZapEnabled | True
RecommendedPolicyType | Custom

### Content filtering

Table 30 describes the Content Filters have been configured. These settings have been configured with PowerShell.

Item | Configuration
--- | ---
Id | Default
AdminDisplayName | --
AddXHeaderValue | --
ModifySubjectValue | --
RedirectToRecipients  |  {}
TestModeBccToRecipients |  {}
FalsePositiveAdditionalRecipients |  {}
QuarantineRetentionPeriod |  15
EndUserSpamNotificationFrequency |  3
TestModeAction | None
IncreaseScoreWithImageLinks | Off
IncreaseScoreWithNumericIps | Off
IncreaseScoreWithRedirectToOtherPort | Off
IncreaseScoreWithBizOrInfoUrls | Off
MarkAsSpamEmptyMessages  | Off
MarkAsSpamJavaScriptInHtml | Off
MarkAsSpamFramesInHtml | Off
MarkAsSpamObjectTagsInHtml | Off
MarkAsSpamEmbedTagsInHtml  | Off
MarkAsSpamFormTagsInHtml | Off
MarkAsSpamWebBugsInHtml  | Off
MarkAsSpamSensitiveWordList | Off
MarkAsSpamSpfRecordHardFail | Off
MarkAsSpamFromAddressAuthFail | Off
MarkAsSpamBulkMail |  On
MarkAsSpamNdrBackscatter |  Off
IsDefault |  True
LanguageBlockList  |  {}
RegionBlockList |  {}
HighConfidenceSpamAction |  MoveToJmf
SpamAction |  MoveToJmf
EnableEndUserSpamNotifications |  False
DownloadLink |  False
EnableRegionBlockList |  False
EnableLanguageBlockList  |  False
EndUserSpamNotificationCustomFromAddress  | --
EndUserSpamNotificationCustomFromName  | --
EndUserSpamNotificationCustomSubject | --
EndUserSpamNotificationLanguage  |  Default
EndUserSpamNotificationLimit  |  0
BulkThreshold |  7
AllowedSenders  |  {}
AllowedSenderDomains  |  {}
BlockedSenders  |  {}
BlockedSenderDomains  |  {}
ZapEnabled |  True
InlineSafetyTipsEnabled  |  True
BulkSpamAction  |  MoveToJmf
PhishSpamAction |  MoveToJmf
SpamZapEnabled  |  True
PhishZapEnabled |  True
ApplyPhishActionToIntraOrg |  False
HighConfidencePhishAction  |  Quarantine
RecommendedPolicyType |  Custom
SpamQuarantineTag | --
HighConfidenceSpamQuarantineTag | --
PhishQuarantineTag | --
HighConfidencePhishQuarantineTag | --
BulkQuarantineTag | --
Identity | Default
Id | Default
IsValid |  True
Item | Value

## Teams

The ABAC settings for the Agency Teams instance can be found below. This includes the Teams Policy, Meetings Policy, Live Events Policy, Meetings Settings, Live Events Policy, Messaging Settings, Manage Apps, App Permission Policy, App Setup Policy, Calling Policy, Caller ID Policy, External Access Settings, Guest Access, and Team Settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Teams policy

`Teams admin center > Teams > Teams policies`

Table 31 describes the Teams Policies configuration.

Item | Configuration
--- | ---
Name | Global
Discover private teams | Off
Create private channels | Off

### Meeting policy

`Teams admin center > Teams > Meeting policies`

* Name: `Global`
  * Custom policy: `No`
  * General
    * Allow Meet Now in channels: `On`
    * Allow the Outlook add-in: `On`
    * Allow scheduling private meetings: `On`
    * Allow channel meeting scheduling: `On`
  * Audio & Video
    * Allow transcription: `Off`
    * Allow cloud recording: `On`
    * Allow IP Video: `On`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `EntireScreen`
    * Allow Participant Give/Request Control: `On`
    * Allow External Participant Give/Request Control: `Off`
    * Allow PowerPoint Sharing: `On`
    * Allow Whiteboard: `Off`
    * Allow Shared Notes: `On`
  * Participants & guests
    * Let anonymous people to start a meeting: `Off`
    * Automatically admit users: `Everyone in your organization`
    * Allow dial-in users to bypass the lobby: `Off`
    * Allow Meet now in private messages: `On`
    * Enable live captions: `Disable but the organizer can override`
    * Allow chat in meetings: `Enable`
* Name: `AllOn`
  * Custom policy: `No`
  * General
    * Allow Meet Now in channels: `On`
    * Allow the Outlook add-in: `On`
    * Allow scheduling private meetings: `On`
    * Allow channel meeting scheduling: `On`
  * Audio & Video
    * Allow Transcription: `Off`
    * Allow cloud recording: `On`
    * Allow IP Video: `On`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `EntireScreen`
    * Allow Participant Give/Request Control: `On`
    * Allow External Participant Give/Request Control: `Off`
    * Allow PowerPoint Sharing: `On`
    * Allow Whiteboard: `On`
    * Allow Shared Notes: `On`
  * Participants & guests
    * Let anonymous people start a meeting: `Off`
    * Automatically admit people: `Everyone in your organization`
    * Allow dial-in users to bypass the lobby: `Off`
    * Allow meet now in private meetings: `On`
    * Enable live captions: `Disabled but the organizer can override`
    * Allow chat in meetings: `Enabled`
* Name: `RestrictedAnonymousAccess`
    * Custom policy: `No`
  * General
    * Allow Meet Now in channels: `On`
    * Allow the Outlook add-in: `On`
    * Allow scheduling private meetings: `On`
    * Allow channel meeting scheduling: `On`
  * Audio & Video
    * Allow Transcription: `Off`
    * Allow cloud recording: `On`
    * Allow IP Video: `On`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `EntireScreen`
    * Allow Participant Give/Request Control: `On`
    * Allow External Participant Give/Request Control: `Off`
    * Allow PowerPoint Sharing: `On`
    * Allow Whiteboard: `On`
    * Allow Shared Notes: `On`
  * Participants & guests
    * Let anonymous people start a meeting: `Off`
    * Automatically admit people: `Everyone in your organization`
    * Allow dial-in users to bypass the lobby: `Off`
    * Allow meet now in private meetings: `On`
    * Enable live captions: `Disabled`
    * Allow chat in meetings: `Enabled`
* Name: `AllOff`
    * Custom policy: `No`
  * General
    * Allow Meet Now in channels: `Off`
    * Allow the Outlook add-in: `Off`
    * Allow scheduling private meetings: `Off`
    * Allow channel meeting scheduling: `Off`
  * Audio & Video
    * Allow Transcription: `Off`
    * Allow cloud recording: `Off`
    * Allow IP Video: `Off`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `Disabled`
    * Allow Participant Give/Request Control: `Off`
    * Allow External Participant Give/Request Control: `Off`
    * Allow PowerPoint Sharing: `Off`
    * Allow Whiteboard: `Off`
    * Allow Shared Notes: `Off`
  * Participants & guests
    * Let anonymous people start a meeting: `Off`
    * Automatically admit people: `Everyone in your organization`
    * Allow dial-in users to bypass the lobby: `Off`
    * Allow meet now in private meetings: `Off`
    * Enable live captions: `Disabled`
    * Allow chat in meetings: `Disabled`
* Name: `RestrictedAnonymousNoRecording`
    * Custom policy: `No`
  * General
    * Allow Meet Now in channels: `On`
    * Allow the Outlook add-in: `On`
    * Allow scheduling private meetings: `On`
    * Allow channel meeting scheduling: `On`
  * Audio & Video
    * Allow Transcription: `Off`
    * Allow cloud recording: `Off`
    * Allow IP Video: `On`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `EntireScreen`
    * Allow Participant Give/Request Control: `On`
    * Allow External Participant Give/Request Control: `Off`
    * Allow PowerPoint Sharing: `On`
    * Allow Whiteboard: `On`
    * Allow Shared Notes: `On`
  * Participants & guests
    * Let anonymous people start a meeting: `Off`
    * Automatically admit people: `Everyone in your organization`
    * Allow dial-in users to bypass the lobby: `Off`
    * Allow meet now in private meetings: `On`
    * Enable live captions: `Disabled`
    * Allow chat in meetings: `Enabled`
* Name: `Kiosk`
    * Custom policy: `No`
  * General
    * Allow Meet Now in channels: `On`
    * Allow the Outlook add-in: `Off`
    * Allow scheduling private meetings: `Off`
    * Allow channel meeting scheduling: `Off`
  * Audio & Video
    * Allow Transcription: `Off`
    * Allow cloud recording: `Off`
    * Allow IP Video: `On`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `EntireScreen`
    * Allow Participant Give/Request Control: `On`
    * Allow External Participant Give/Request Control: `Off`
    * Allow PowerPoint Sharing: `On`
    * Allow Whiteboard: `On`
    * Allow Shared Notes: `On`
  * Participants & guests
    * Let anonymous people start a meeting: `Off`
    * Automatically admit people: `Everyone in your organization`
    * Allow dial-in users to bypass the lobby: `Off`
    * Allow meet now in private meetings: `On`
    * Enable live captions: `Disabled`
    * Allow chat in meetings: `Enabled`
* Name: `Custom All On Policy`
    * Custom policy: `Yes`
  * General
    * Allow Meet Now in channels: `On`
    * Allow the Outlook add-in: `On`
    * Allow scheduling private meetings: `On`
    * Allow channel meeting scheduling: `On`
  * Audio & Video
    * Allow Transcription: `On`
    * Allow cloud recording: `On`
    * Allow IP Video: `On`
    * Media bit rate: `50000`
  * Content sharing
    * Screen Sharing Mode: `EntireScreen`
    * Allow Participant Give/Request Control: `On`
    * Allow External Participant Give/Request Control: `On`
    * Allow PowerPoint Sharing: `On`
    * Allow Whiteboard: `On`
    * Allow Shared Notes: `On`
  * Participants & guests
    * Let anonymous people start a meeting: `Off`
    * Automatically admit people: `Everyone`
    * Allow dial-in users to bypass the lobby: `On`
    * Allow meet now in private meetings: `On`
    * Enable live captions: `Disabled but the organizer can override`
    * Allow chat in meetings: `Enabled`

### Live events policy

`Teams admin center > Live events policies > Global`

* Custom policy: `No`
* Allow scheduling: `On`
* Allow transcription for attendees: `On`
* Who can join scheduled live events: `Everyone in the organization`
* Who can record an event: `Always record`

`Teams admin center > Live events policies > Live Events Organisers`

* Custom policy: `Yes`
* Allow scheduling: `On`
* Allow transcription for attendees: `On`
* Who can join scheduled live events: `Everyone in the organization`
* Who can record an event: `Always record`

### Meeting settings

`Teams admin center > Meetings > Meeting settings > participants`

* Anonymous users can join a meeting: `On`

`Teams admin center > Meetings > Meeting settings > Email invitation`

* Logo URL: `Not configured`
* Legal URL: `Not configured`
* Help URL: `Not configured`
* Footer: `Not configured`

`Teams admin center > Meetings > Meeting settings > Network`

* Insert Quality of Service (QoS) markers for real-time media traffic: `Off`
* Select a port range for each type of real time media traffic: `Specify port ranges`

Media traffic type | Starting port | Ending port | Total ports
--- | --- | --- | ---
Audio | 50000 | 50019 | 20
Video | 50020 | 50039 | 20
Screen sharing | 50040 | 50059 | 20

### Live events settings

`Teams admin center > Meetings > Live events settings`

* Support URL
  * Customize the support URL if a user needs to contact support during a live event: `https://support.office.com/home/contact`
* Third party video distribution providers
  * Use a third party distribution provider: `Off`

### Messaging policy

`Teams admin center > Messaging policies \ Global`

* Name: `Global (Org-wide default)`
* Description: `Global Teams Messaging Policy`
* Owners can delete sent messages: `Off`
* Delete sent messages: `On`
* Edit sent message: `On`
* Read receipts: `User Controlled`
* Chat: `On`
* Use Giphys in conversation : `On`
* Giphy content rating : `Strict`
* Use Memes in conversations: `On`
* Use Stickers in conversations: `On`
* Allow URL previews: `On`
* Translate messages: `Off`
* Allow Immersive Reader for viewing messages: `On`
* Send urgent messages using priority notifications: `On`
* Create voice messages: `Allowed in chats and channels`
* On mobile devices, display favorite channels above recent chats: `Disabled`
* Remove users from group chats: `On`

### Manage apps

`Teams admin center > Team apps > Manage apps > Org-wide app settings > Third party apps`

* Allow third party apps: `Off`
* Allow any new third party apps published to the store by default: `Off`

`Teams admin center > Team apps > Manage apps > Org-wide app settings > Custom apps`

* Allow interaction with custom apps: `Off`

### App permission policy

`Teams admin center > Team apps > Permission policies \ Global > Microsoft apps`

* Choose which Teams apps published by Microsoft or its partners can be installed by your users: `Allow all apps`

`Teams admin center > Team apps > Permission policies \ Global > Third party apps`

* Choose which Teams apps published by a third-party that can be installed by your users: `Block all apps`

`Teams admin center > Team apps > Permission policies \ Global > Custom apps`

* Choose which custom apps can be installed by your users: `Block all apps`

`Teams admin center > Team apps > Permission policies \ App Reviewers > Microsoft apps`

* Choose which Teams apps published by Microsoft or its partners can be installed by your users: `Allow all apps`

`Teams admin center > Team apps > Permission policies \ App Reviewers > Third party apps`

* Choose which Teams apps published by a third-party that can be installed by your users: `Allow all apps`

`Teams admin center > Team apps > Permission policies \ App Reviewers > Custom apps`

* Choose which custom apps can be installed by your users: `Allow all apps`

### App setup policy

`Teams admin center > Team apps > Setup policies \ FirstLineWorker`

* Upload custom apps: `Off`
* Allow user pinning: `On`

`Teams admin center > Team apps > Setup policies \ FirstLineWorker > Pinned apps`

Name | Distributor
--- | ---
Activity | Microsoft
Shifts | Microsoft Corp.
Chat | Microsoft
Calling | Microsoft

`Teams admin center > Team apps > Setup policies \ Global`

* Upload custom apps: `Off`
* Allow user pinning: `On`

`Teams admin center > Team apps > Setup policies \ Global > Pinned apps`

Name | Distributor
--- | ---
Activity | Microsoft
Chat | Microsoft
Teams | Microsoft
Calendar | Microsoft
Calling | Microsoft
Files | Microsoft

### Calling policy

`Teams admin center > Voice > Calling polices > Global (org-wide default)`

* Name: `Global`
* Description: `Not Configured`
* Make private calls: `On`
* Call forwarding and simultaneous ringing to people in your organization: `On`
* Call forwarding and simultaneous ringing to external phone numbers: `On`
* Voicemail is available for routing inbound calls: `User controlled`
* Inbound calls can be routed to call groups: `On`
* Allow delegation for inbound and outbound calls: `On`
* Prevent toll bypass and send calls through the PSTN: `Off`
* Busy on busy is available when in a call: `Off`
* Allow web PSTN calling: `On`

`Teams admin center > Voice > Calling policies > AllowCalling`

* Name: `Tag:AllowCalling`
* Description: `Not Configured`
* Make private calls: `On`
* Call forwarding and simultaneous ringing to people in your organization: `On`
* Call forwarding and simultaneous ringing to external phone numbers: `On`
* Voicemail is available for routing inbound calls: `User controlled`
* Inbound calls can be routed to call groups: `On`
* Allow delegation for inbound and outbound calls: `On`
* Prevent toll bypass and send calls through the PSTN: `Off`
* Busy on busy is available when in a call: `Off`
* Allow web PSTN calling: `On`

`Teams admin center > Voice > Calling policies > DisallowCalling`

* Name: `Tag:DisallowCalling`
* Description: `Not Configured`
* Make private calls: `Off`
* Call forwarding and simultaneous ringing to people in your organization: `Off`
* Call forwarding and simultaneous ringing to external phone numbers: `Off`
* Voicemail is available for routing inbound calls: `Disabled`
* Inbound calls can be routed to call groups: `Off`
* Allow delegation for inbound and outbound calls: `Off`
* Prevent toll bypass and send calls through the PSTN: `Off`
* Busy on busy is available when in a call: `Off`
* Allow web PSTN calling: `On`

### Caller ID policy

`Teams admin center > Voice > Caller ID policies > Global`

* Block incoming caller ID: `Off`
* Override the caller ID policy: `Off`
* Replace the caller ID with : `User’s Number`
* Replace the caller ID with this service number : `Not configured`

### External access settings

`Teams admin center > Org-wide settings > External access`

* Users can communicate with other Skype for Business and Teams users: `On`
* Users can communicate with Skype users: `Off`
* Domain:

```
<Agency>.gov.au: Allowed
microsoft.com: Allowed
```

### Guest access

`Teams admin center > Org-wide settings > Guest Access`

* Allow guest access in Teams: `On`

`Teams admin center > Org-wide settings > Guest Access > Calling`

* Make private calls: `Off`

`Teams admin center > Org-wide settings > Guest Access > Meeting`

* Allow IP video: `On`
* Screen sharing mode: `Entire screen`
* Allow Meet Now : `On`

`Teams admin center > Org-wide settings > Guest Access > Messaging`

* Edit sent messages: `Off`
* Delete sent messages: `Off`
* Chat: `On`
* Use Giphys in conversation: `On`
* Giphy content rating: `Moderate`
* Use Memes in conversations : `On`
* Use Stickers in conversations : `On`
* Allow immersive reader for viewing messages : `On`

### Team settings

`Teams admin center > Org-wide settings > Team settings > Notifications and feeds`

* Suggested feeds can appear in a user's activity feed: `On`

`Teams admin center > Org-wide settings > Team settings > Tagging`

* Tagging is enabled for:: `Team owners
* Team owner can override who can apply tags: `On`
* Members can add additional tags: `On`
* Suggested default tags: -

`Teams admin center > Org-wide settings > Team settings > Email integration`

* Allow users to send emails to a channel email address: `On`
* Accept channel email from these SMTP domains: `<Agency>.gov.au`

`Teams admin center > Org-wide settings > Team settings > Files`

* Turn on or turn off file sharing and cloud file storage options for the Files tab:

```
Citrix files: off
DropBox: off
Box: off
Google Drive: off
```

`Teams admin center > Org-wide settings > Team settings > Organization`

* Show Organization tab in chats: `On`

`Teams admin center > Org-wide settings > Team settings > Devices`

* Require a secondary form of authentication to access meeting content: `No access`
* Set content PIN: `Required for outside scheduled meeting`
* Resource accounts can send messages: `On`

`Teams admin center > Org-wide settings > Team settings > Search by name`

* Scope directory search using an Exchange address book policy: `Off`

## SharePoint Online & OneDrive

The ABAC settings for the Agency SharePoint Online and OneDrive instances can be found below. This includes the Sharing Configuration, Access Control and SharePoint Settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Sharing

`SharePoint admin center > Policies > Sharing > External Sharing`

* Content can be shared with:
```
SharePoint: New and existing guests
OneDrive: Only people in your organization
```

* Limit external sharing by domain:
```
Agency.gov.au
microsoft.com
```

* Allow only users in specific security groups to share externally: `False`
* Guests must sign in using the same account to which sharing invitations are sent: `True`
* Allow guests to share items they don’t own: `False`
* People who use a verification code must reauthenticate after this many days : `Not configured`

`SharePoint admin center > Policies > Sharing > File and Folder links`

* Default link type: `Specific people (only the people the user specifies)`
* Default link permission : `Edit`

`SharePoint admin center > Policies > Sharing > Other settings`

* Show owners the names of people who viewed their files in OneDrive: `True`
* Let site owners choose to display the names of people who viewed files or pages in SharePoint: `True`
* Use short links for sharing files and folders : `True`

### Access control

`SharePoint admin center > Policies > Access control > Unmanaged devices`

* Allow access from unmanaged devices: `Block access`

`SharePoint admin center > Policies > Access control > Idle session sign-out`

* Sign out inactive users automatically: `On`
* Sign out users after:: `1 hours`
* Give users this much notice before signing them out: `5 minutes`

`SharePoint admin center > Policies > Access control > Network location`

* Allow access only from specific IP address ranges: `Off`

`SharePoint admin center > Policies > Access control > Apps that don’t use modern authentication`

* Allow or block access from applications that don’t user modern authentication: `Block access`

### SharePoint settings

`SharePoint admin center > Settings > Default admin center`

* New SharePoint admin center: `True`

`SharePoint admin center > Settings > Pages`

* Allow users to create new modern pages on sites that don’t already have site pages: `True`
* Allow commenting on modern pages : `True`

`SharePoint admin center > Settings > SharePoint notifications`

* Allow notifications: `True `

`SharePoint admin center > Settings > Site creation`

* Let users create sites from the SharePoint start page and OneDrive: `False`
* Create team sites under: `https://<Agency>.sharepoint.com/sites/`
* Default time zone : `(UTC+10:00) Canberra, Melbourne, Sydney`
* Default storage limit for new sites: `200 GB`

`SharePoint admin center > Settings > Site storage limits`

Share storage among all sites or control storage limits: `Manual`

## Security and compliance

The ABAC settings for the Agency Office 365 Security and Compliance instance can be found below. This includes the Alerts, Labels, Data Loss Prevention, Retention Policies, Audit Logging, and Customer Key configuration. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Audit logging

`Microsoft 365 compliance > Audit > Audit Retention Policies`

* Enabled: `True`
* Policy name: `10 year audit log`
* Policy description: `Retains all audit log records for 10 years`
* Record Type: `All`
* Duration: `10 years`
* Priority: `1`

### Retention policies

`Office 365 Security & compliance > Information governance > Retention | Exchange 3 Years Hold`

* Status: `On`
* Policy Name: `Exchange 3 Years Hold`
* Description: `Exchange 3 Years Hold`
* Applies to content in these locations:
```
Exchange email
Exchange Public Folders
```

* Retention period: `Keep content for 3 years`
* Turn on preservation lock: `No`

`Office 365 Security & compliance > Information governance > Retention | Microsoft 365 groups 3 Years Hold`

* Status: `On`
* Policy Name: `Microsoft 365 groups 3 Years Hold`
* Description: `Microsoft 365 groups 3 Years Hold`
* Applies to content in these locations: `Microsoft 365 groups`
* Retention period: `Keep content for 3 years`
* Turn on preservation lock: `No`

`Office 365 Security & compliance > Information governance > Retention | OneDrive 3 Years Hold`

* Status: `On`
* Policy Name: `OneDrive 3 Years Hold`
* Description: `OneDrive 3 Years Hold`
* Applies to content in these locations: `OneDrive Accounts`
* Retention period: `Keep content for 3 years`
* Turn on preservation lock: `No`

`Office 365 Security & compliance > Information governance > Retention | SharePoint 3 Years Hold`

* Status: `On`
* Policy Name: `SharePoint 3 Years Hold`
* Description: `SharePoint 3 Years Hold`
* Applies to content in these locations: `SharePoint sites`
* Retention period: `Keep content for 3 years`
* Turn on preservation lock: `No`

`Office 365 Security & compliance > Information governance > Retention | Teams Channel Messages 3 Years Hold`

* Status: `On`
* Policy Name: `Teams Channel Messages 3 Years Hold`
* Description: `Teams Channel Messages 3 Years Hold`
* Applies to content in these locations: `Teams channel messages`
* Retention period: `Keep content for 3 years`
* Turn on preservation lock: `No`

`Office 365 Security & compliance > Information governance > Retention | Teams Chats 3 Years Hold`

* Status: `On`
* Policy Name: `Teams Chats 3 Years Hold`
* Description: `Teams Chats 3 Years Hold`
* Applies to content in these locations: `Teams chats`
* Retention period: `Keep content for 3 years`
* Turn on preservation lock: `No`

### Retention labels

`Office 365 Security & compliance > Information governance > Labels`

Not Configured

### Sensitivity labels

`Office 365 Security & compliance > Information protection > Labels`

* UNOFFICIAL: `0 – lowest`
* OFFICIAL: `1`
* OFFICIAL Sensitive: `2`
* OFFICIAL Sensitive ACCESS=Legal-Privilege: `3`
* OFFICIAL Sensitive ACCESS=Legislative-Secrecy: `4`
* OFFICIAL Sensitive ACCESS=Personal-Privacy: `5`
* PROTECTED: `6`
* PROTECTED ACCESS=Legal-Privilege: `7`
* PROTECTED ACCESS=Legislative-Secrecy: `8`
* PROTECTED ACCESS=Personal-Privacy: `9`
* PROTECTED CAVEAT=SH CABINET: `10`
* PROTECTED ACCESS=Legal-Privilege CAVEAT=SH CABINET: `11`
* PROTECTED ACCESS=Legislative-Secrecy CAVEAT=SH CABINET: `12`
* PROTECTED ACCESS=Personal-Privacy CAVEAT=SH CABINET: `13 – highest`

### Sensitivity label policy

`Office 365 Security & compliance > Information protection >Label polices > <Agency Acronym> sensitivity labels`

* Name: `<Agency Acronym> sensitivity labels`
* Description: Default sensitivity labels based on [PSPF infosec document](https://www.protectivesecurity.gov.au/sites/default/files/2019-12/pspf-infosec-08-sensitive-classified-information.pdf)
* Published Labels
```
UNOFFICIAL
OFFICIAL
OFFICIAL Sensitive
OFFICIAL Sensitive ACCESS=Legal-Privilege
OFFICIAL Sensitive ACCESS=Legislative-Secrecy
OFFICIAL Sensitive ACCESS=Personal-Privacy
PROTECTED
PROTECTED ACCESS=Legal-Privilege
PROTECTED ACCESS=Legislative-Secrecy
PROTECTED ACCESS=Personal-Privacy
PROTECTED CAVEAT=SH CABINET
PROTECTED ACCESS=Legal-Privilege CAVEAT=SH CABINET
PROTECTED ACCESS=Legislative-Secrecy CAVEAT=SH CABINET
PROTECTED ACCESS=Personal-Privacy CAVEAT=SH CABINET
```

* Published to: `All`
* Policy settings:
```
Label is mandatory
Users must provide justification to remove a label or lower its classification
```

### Data loss prevention

`Office 365 Security & compliance > Data Loss Prevention`

* Australia Financial Data: `0`
* Australia Health Records ACT (HRIP Act): `1`
* Australia Personally Identifiable Information (PII) Data: `2`
* Australia Privacy Act: `3`
* Locations to apply this policy: 
```
Exchange email
SharePoint sites
OneDrive accounts
Teams chat and channel messages
```

* Policy settings: 
```
Low volume of content detected
High volume of content detected
```

## Microsoft 365 Defender

The ABAC settings for Microsoft 365 Defender can be found below. This includes Safe Links, Safe Attachments, and Anti-phishing configuration.

Please note, if a setting is not mentioned below, it should be assumed to have been left at its default setting.

### Safe Links

* Name: `Default Safe Links Policy`
* Description: `This policy is the default Safe Links policy for the environment`
* Users and domains:
  * Users: `Not Configured`
  * Groups: `Not Configured`
  * Domains: `All Agency domains`
* Protection Settings:
  * Select the action for unknown potentially malicious URLs in messages: `On - URLs will be rewritten and checked against a list of known malicious links when user clicks on the link`
  * Select the action for unknown or potentially malicious URLs within Microsoft Teams: `On - Microsoft Teams will check against a list of known malicious links when user clicks on the link; URLs will not be rewreitten`
  * Apply real-time URL scanning for suspicious links and links that point to files: `Enabled`
    * Wait for URL scanning to complete before delivering the message: `Enabled`
  * Apply Safe Links to email messages sent within the organisation: `Enabled`
  * Do not track user clicks: `Disabled`
  * Do not let users click through to the original URL: `Enabled`
  * Display the organization branding on notification and warning pages: `Disabled`
  * Do not rewrite the following URLs: `Not Configured`
* Notification:
  * How would you like to notify your users: `Use the default notification text`

### Safe Attachments

#### Global Settings

* Turn on Defender for Office 365 for SharePoint, OneDrive, and Microsoft Teams: `Enabled`
* Turn on Safe Documents for Office Clients: `Enabled`
  * Allow people to click through Protected View even if Safe Documents has identified the file as malicious: `Disabled`

### Policy

* Name: `Default Safe Attachments Policy`
* Description: `This policy is the default Safe Attachments policy for the environment`
* Users and domains:
  * Users: `Not Configured`
  * Groups: `Not Configured`
  * Domains: `All Agency domains`
* Settings:
  * Safe Attachments unknown malware response: `Block - Block current and future messages and attachments with detected malware`
  * Enable Redirect: `Enabled`
    * Send messages that contain blocked, monitored, or replaced attachments to the specified email address: `quarantine@agency.gov.au`
  * Apply the Safe Attachments detection response if scanning can't complete (timeout or errors): `Enabled`

### Anti-phishing

* Name: `Office365 AntiPhish Default (Default)`
* Phishing email threshold: `2 - Aggressive`
* Enable users to protect: `Configured - agency executives added`
* Enabled domains to protect: `Enabled`
  * Include domains I own: `Enabled`
  * Include custom domains: `Disabled`
* Add trusted senders and domains: `Not configured`
* Enable mailbox intelligence: `Enabled`
  * Enable Intelligence for impersonation protection: `Enabled`
* Spoof
  * Enable spoof intelligence: `Enabled`
* Actions
* Message actions
  * If message is detected as an impersonated user:`Quarantine the message`
  * If message is detected as an impersonated domain: `Quarantine the message`
  * If Mailbox Intelligence detects an impersonated user: `Quarantine the message`
  * If message is detected as spoof: `Quarantine the message`
* Safety tips & indicators
  * Show user impersonation safety tip: `Enabled`
  * Show domain impersonation safety tip: `Enabled`
  * Show user impersonation unusual characters safety tip: `Enabled`
  * Show (?) for unauthenticated senders for spoof: `Enabled`
