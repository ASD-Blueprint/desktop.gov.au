---
layout: page
title: Office 365
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

`Search > Licenses > Microsoft 365 E5 > Licensed groups `

Table 4 describes the configuration for the manual allocation of Microsoft 365 E5 licenses.

Name | State
--- | ---
Office365_AssignLicense_Administrators | Active
Office365_AssignLicense_CloudUsers | Active
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

The ABAC settings for the Agencies Exchange Online instance can be found below. This includes connectors, Mail Exchange (MX) records, SPF, DMARC, DKIM, Remote Domains, User mailbox configurations, Authentication Policies, Outlook on the Web policies, Mailbox Archiving, and Address lists.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Connectors

Table 2 describes the Exchange Online inbound mail connectors.

Name | Status | TLS | Certificate
--- | --- | --- | ---
Not configured | N/A | N/A | N/A

Table 3 describes the Exchange Online outbound mail connectors.

Name | Status | TLS | Certificate
--- | --- | --- | ---
Not configured | N/A | N/A | N/A

### MX records

Table 4 describes the MX records configuration settings.

Domain | MX Preferences | Mail Exchanger
--- | --- | ---
Agency.gov.au | `10` | `Agency-gov-au.mail.protection.outlook.com`

### SPF records

Table 5 describes the SPF records configuration settings.

Domain | SPF Record | DMARC Policy
--- | --- | ---
Agency.gov.au | `"v=spf1 include:spf.protection.outlook.com -all"` | Not configured

### Remote domains

Table 6 describes the Remote Domains configuration settings.

Configuration Item | Value
--- | ---
Name | Default
Remote Domain | *
Allowed Out Of Office Type | External
Automatic Reply | True
Automatic Forward | True
Delivery Reports | False
Non-Delivery Reports | True
Meeting Forward Notifications | True
Content Type | MimeHtmlText

### Organisational add-ins

No organisational add-ins have been configured.

### CAS mailbox plan

Table 7 describes the CAS Mailbox Plan configuration settings.

Configuration Item | Value
--- | ---
Name | ExchangeOnlineDeskless
ActiveSync | False
ActiveSync Mailbox Policy | Not Configured
IMAP | False
MAPI | False
Outlook Web Access | True
Outlook Web Access Policy | Default-OWA-Mailbox-Policy
POP | False
EWS | False
Name | ExchangeOnlineEnterprise
ActiveSync | False
ActiveSync Mailbox Policy | Not Configured
IMAP | False
MAPI | True
Outlook Web Access | True
Outlook Web Access Policy | Default-OWA-Mailbox-Policy
POP | False
EWS | True
Name | ExchangeOnlineEssentials
ActiveSync | False
ActiveSync Mailbox Policy | Not Configured
IMAP | False
MAPI | True
Outlook Web Access | True
Outlook Web Access Policy | Default-OWA-Mailbox-Policy
POP | False
EWS | True
Name | ExchangeOnline
ActiveSync | True
ActiveSync Mailbox Policy | Not Configured
IMAP | True
MAPI | True
Outlook Web Access | True
Outlook Web Access Policy | OwaMailboxPolicy-Default
POP | True
EWS | True

### Authentication policy

Table 8 describes the Authentication Policy configuration settings.

Configuration Item | Value
--- | ---
Name | Default-Authentication-Policy
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
Allow Basic Authentication PowerShell | True

### Outlook Web Access policy

Table 9 describes the Outlook Web Access Policy configuration settings.

Configuration Item | Value
--- | ---
Name | Default-OWA-Mailbox-Policy
Wac Editing Enabled | True
Print Without Download Enabled | True
OneDrive Attachments Enabled | True
Third Party File Providers Enabled | False
Classic Attachments Enabled | True
Reference Attachments Enabled | True
Save Attachments to Cloud Enabled | True
Message Previews Disabled | False
Direct File Access On Public Computers Enabled | False
Direct File Access On Private Computers Enabled | True
Web Ready Document Viewing On Public Computers Enabled | True
Web Ready Document Viewing On Private Computers Enabled | True
Force Web Ready Document Viewing First On Public Computers | False
Force Web Ready Document Viewing First On Private Computers | False
Wac Viewing On Public Computers Enabled | True
Wac Viewing On Private Computers Enabled | True
Force Wac Viewing First On Public Computers | False
Force Wac Viewing First On Private Computers | False
Action For Unknown File And MIME Types | True
Phonetic Support Enabled | True
Default Client Language | 0
Use GB18030 | True
Use ISO885915 | True
Outbound Charset | AutoDetect
Global Address List Enabled | True
Organization Enabled | False
Explicit Logon Enabled | True
OWA Light Enabled | False
Delegate Access Enabled | True
IRM Enabled | True
Calendar Enabled | True
Contacts Enabled | True
Tasks Enabled | True
Journal Enabled | False
Notes Enabled | False
On Send Addins Enabled | True
Reminders And Notifications Enabled | True
Premium Client Enabled | True
Spell Checker Enabled | False
Classic Attachments Enabled | True
Search Folders Enabled | True
Signatures Enabled | True
Theme Selection Enabled | True
Junk Email Enabled | True
UM Integration Enabled | True
WSS Access On Public Computers Enabled | True
WSS Access On Private Computers Enabled | True
Change Password Enabled | True
UNC Access On Public Computers Enabled | True
UNC Access On Private Computers Enabled | True
ActiveSync Integration Enabled | True
All Address Lists Enabled | True
Rules Enabled | True
Public Folders Enabled | False
SMime Enabled | True
Recover Deleted Items Enabled | True
Instant Messaging Enabled | False
Text Messaging Enabled | True
Force Save Attachment Filtering Enabled | False
Silverlight Enabled | True
Instant Messaging Type | Ocs
Display Photos Enabled | True
Set Photo Enabled | False
Allow Offline On | NoComputers
Set Photo URL | 
Places Enabled | False
Weather Enabled | True
Local Events Enabled | False
Interesting Calendars Enabled | False
Allow Copy Contacts To Device Address Book | True
Predicted Actions Enabled | False
User Diagnostic Enabled | False
Facebook Enabled | True
LinkedIn Enabled | False
Wac External Services Enabled | True
Wac OMEX Enabled | False
Report Junk Email Enabled | True
Group Creation Enabled | False
Skip Create Unified Group Custom SharePoint Classification | True
User Voice Enabled | False
Satisfaction Enabled | False
Outlook Beta Toggle Enabled | False
Name | OWAOnSendAddinAllUserPolicy
Wac Editing Enabled | True
Print Without Download Enabled | True
OneDrive Attachments Enabled | True
Third Party File Providers Enabled | False
Classic Attachments Enabled | True
Reference Attachments Enabled | True
Save Attachments To Cloud Enabled | True
Message Previews Disabled | False
Direct File Access On Public Computers Enabled | True
Direct File Access On Private Computers Enabled | True
Web Ready Document Viewing On Public Computers Enabled | True
Web Ready Document Viewing On Private Computers Enabled | True
Force Web Ready Document Viewing First On Public Computers | False
Force Web Ready Document Viewing First On Private Computers | False
Wac Viewing On Public Computers Enabled | True
Wac Viewing On Private Computers Enabled | True
Force Wac Viewing First On Public Computers | False
Force Wac Viewing First On Private Computers | False
Action For Unknown File And MIME Types | True
Phonetic Support Enabled | False
Default Client Language | 0
Use GB18030 | False
Use ISO885915 | False
Outbound Charset | AutoDetect
Global Address List Enabled | True
Organization Enabled | True
Explicit Logon Enabled | True
OWA Light Enabled | True
Delegate Access Enabled | True
IRM Enabled | True
Calendar Enabled | True
Contacts Enabled | True
Tasks Enabled | True
Journal Enabled | True
Notes Enabled | True
On Send Addins Enabled | True
Reminders And Notifications Enabled | True
Premium Client Enabled | True
Spell Checker Enabled | False
Classic Attachments Enabled | True
Search Folders Enabled | True
Signatures Enabled | True
Theme Selection Enabled | True
Junk Email Enabled | True
UM Integration Enabled | True
WSS Access On Public Computers Enabled | True
WSS Access On Private Computers Enabled | True
Change Password Enabled | True
UNC Access On Public Computers Enabled | True
UNC Access On Private Computers Enabled | True
ActiveSync Integration Enabled | True
All Address Lists Enabled | True
Rules Enabled | True
Public Folders Enabled | True
SMime Enabled | True
Recover Deleted Items Enabled | True
Instant Messaging Enabled | True
Text Messaging Enabled | True
Force Save Attachment Filtering Enabled | False
Silverlight Enabled | True
Instant Messaging Type | Ocs
Display Photos Enabled | True
Set Photo Enabled | True
Allow Offline On | AllComputers
Set Photo URL | 
Places Enabled | True
Weather Enabled | True
Local Events Enabled | False
Interesting Calendars Enabled | True
Allow Copy Contacts To Device Address Book | True
Predicted Actions Enabled | False
User Diagnostic Enabled | False
Facebook Enabled | True
LinkedIn Enabled | True
Wac External Services Enabled | True
Wac OMEX Enabled | False
Report Junk Email Enabled | True
Group Creation Enabled | True
Skip Create Unified Group Custom SharePoint Classification | True
User Voice Enabled | True
Satisfaction Enabled | True
Outlook Beta Toggle Enabled | True
Name | OwaMailboxPolicy-Default
Wac Editing Enabled | True
Print Without Download Enabled | True
OneDrive Attachments Enabled | True
Third Party File Providers Enabled | False
Classic Attachments Enabled | True
Reference Attachments Enabled | True
Save Attachments To Cloud Enabled | True
Message Previews Disabled | False
Direct File Access On Public Computers Enabled | True
Direct File Access On Private Computers Enabled | True
Web Ready Document Viewing On Public Computers Enabled | True
Web Ready Document Viewing On Private Computers Enabled | True
Force Web Ready Document Viewing First On Public Computers | False
Force Web Ready Document Viewing First On Private Computers | False
Wac Viewing On Public Computers Enabled | True
Wac Viewing On Private Computers Enabled | True
Force Wac Viewing First On Public Computers | False
Force Wac Viewing First On Private Computers | False
Action For Unknown File And MIME Types | True
Phonetic Support Enabled | False
Default Client Language | 0
Use GB18030 | False
Use ISO885915 | False
Outbound Charset | AutoDetect
Global Address List Enabled | True
Organization Enabled | True
Explicit Logon Enabled | True
OWA Light Enabled | True
Delegate Access Enabled | True
IRM Enabled | True
Calendar Enabled | True
Contacts Enabled | True
Tasks Enabled | True
Journal Enabled | True
Notes Enabled | True
On Send Addins Enabled | False
Reminders And Notifications Enabled | True
Premium Client Enabled | True
Spell Checker Enabled | False
Classic Attachments Enabled | True
Search Folders Enabled | True
Signatures Enabled | True
Theme Selection Enabled | True
Junk Email Enabled | True
UM Integration Enabled | True
WSS Access On Public Computers Enabled | True
WSS Access On Private Computers Enabled | True
Change Password Enabled | True
UNC Access On Public Computers Enabled | True
UNC Access On Private Computers Enabled | True
ActiveSync Integration Enabled | True
All Address Lists Enabled | True
Rules Enabled | True
Public Folders Enabled | True
SMime Enabled | True
Recover Deleted Items Enabled | True
Instant Messaging Enabled | True
Text Messaging Enabled | True
Force Save Attachment Filtering Enabled | False
Silverlight Enabled | True
Instant Messaging Type | Ocs
Display Photos Enabled | True
Set Photo Enabled | True
Allow Offline On | AllComputers
Set Photo URL | 
Places Enabled | True
Weather Enabled | True
Local Events Enabled | False
Interesting Calendars Enabled | True
Allow Copy Contacts To Device Address Book | True
Predicted Actions Enabled | False
User Diagnostic Enabled | False
Facebook Enabled | True
LinkedIn Enabled | True
Wac External Services Enabled | True
Wac OMEX Enabled | False
Report Junk Email Enabled | True
Group Creation Enabled | True
Skip Create Unified Group Custom SharePoint Classification | True
User Voice Enabled | True
Satisfaction Enabled | True
Outlook Beta Toggle Enabled | True

### Address lists

Table 10 describes the Address List configuration settings.

Configuration Item | Value
--- | ---
All Contacts | `((Alias -ne $null) -and (((ObjectCategory -like 'person') -and (ObjectClass -eq 'contact'))))`
All Distribution Lists | `((Alias -ne $null) -and (ObjectCategory -like 'group'))`
All Rooms | `((Alias -ne $null) -and (((RecipientDisplayType -eq 'ConferenceRoomMailbox') -or (RecipientDisplayType -eq 'SyncedConferenceRoomMailbox'))))`
All Users | `((Alias -ne $null) -and (((((((ObjectCategory -like 'person') -and (ObjectClass -eq 'user') -and (-not(Database -ne $null)) -and (-not(ServerLegacyDN -ne $null)))) -or (((ObjectCategory -like 'person') -and (ObjectClass -eq 'user') -and (((Database -ne $null) -or (ServerLegacyDN -ne $null))))))) -and (-not(RecipientTypeDetailsValue -eq 'GroupMailbox')))))`
All Groups | `((Alias -ne $null) -and (RecipientTypeDetailsValue -eq 'GroupMailbox'))`
Public Folders | `((Alias -ne $null) -and (ObjectCategory -like 'publicFolder'))`
Offline Global Address List | `((Alias -ne $null) -and (((((((((((ObjectClass -eq 'user') -or (ObjectClass -eq 'contact'))) -or (ObjectClass -eq 'msExchSystemMailbox'))) -or (ObjectClass -eq 'msExchDynamicDistributionList'))) -or (ObjectClass -eq 'group'))) -or (ObjectClass -eq 'publicFolder'))))`

## Exchange Online Protection

The ABAC settings for the Agencies Exchange Online Protection instance can be found below. This includes the Connection Filtering, Anti-Malware, Policy Filtering, and Content Filtering Configuration.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Connection filtering

Table 11 describes the Connection Filter configuration settings.

Name | IP Allow List | IP Block List | Enable Safe List | Directory Based Edge Block Mode
--- | --- | --- | --- | --- 
Default-Connection-Filter |  |  | True | Default

### Anti-malware

Table 12 describes the Malware Filter configuration settings.

Configuration Item | Value
--- | ---
Name | Default-Malware-Filter-Policy
Custom Notifications | False
Custom notification details | Not Configured
Internal Sender Admin Address | itsa@agency.gov.au
External Sender Admin Address | itsa@agency.gov.au
Action | DeleteMessage
Enable Internal Sender Notifications | False
Enable External Sender Notifications | False
Enable Internal Sender Admin Notifications | False
Enable External Sender Admin Notifications | False
Enable File Filter | True
Filter file types | ace,ani,app,exe,jar,reg,scr,vbe,vbs

### Policy filtering

Table 13 describes the Policy Filter configuration settings.

Name | State | Mode | Priority | Comments
--- | --- | --- | --- | ---
Not Configured | N/A | N/A | N/A | N/A

### Content filtering

Table 14 describes the Content Filter configuration settings.

Configuration Item | Value
--- | ---
Name | Default-HostedContentFilterPolicy
Add X Header Value | Not Configured
Modify Subject value | [SPAM]
Redirect to recipients | Not Configured
False positive additional recipients | Not Configured
Quarantine retention period | 15
End user spam notification frequency | 3
Increase Score | Increase score with image links: On<br>Increase score with numeric IPs: On<br>Increase score with redirect to other port: On<br>Increase score with Biz or info URLs: On
Mark as spam | Mark as spam empty messages: On<br>Mark as spam javascript in html: On<br>Mark as spam frames in HTML: Off<br>Mark as spam object tags in HTML: On<br>Mark as spam embed tags in HTML: Off<br>Mark as spam form tags in HTML: Off<br>Mark as spam web bugs in HTML: On<br>Mark as spam sensitive word list: On<br>Mark as spam SPF record hard fail: On<br>Mark as spam from address auth fail: On<br>Mark as spam bulk mail: On<br>Mark as spam NDR backscatter: On
High confidence spam action | Quarantine
Spam action | MoveToJmf
Bulk spam action | MoveToJmf
Phish Spam action | Quarantine
Enable end user spam notifications | True
End user spam notification | Notification custom from address: itsa@agency.gov.au<br>Notification language: Default<br>Notification limit: 0
Download link | False
Enable region block list | False
Region block list | Not Configured
Enable language block list | Not Configured
Language block list | Not Configured
Bulk Threshold | 6
Allowed Senders | Not Configured
Allowed sender domains | Not Configured
Blocked Senders | Not Configured
Blocked Sender Domains | Not Configured

## Teams

The ABAC settings for the Agencies Teams instance can be found below. This includes the Client Configuration, Channels Policy, Calling Policy, Meetings Policy, Messaging Policy, and Guest Meeting/Calling/Messaging configuration.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Client configuration

Table 15 describes the Teams Client configuration settings.

Configuration Item | Value
--- | ---
Name | Global
Allow email into the channel | True
Restricted sender list | agency.gov.au
Allow DropBox | False
Allow box | False
Allow Google drive | False
Allow Sharefile | False
Allow organisation tab | True
Allow Skype for business interop | False
Content pin | RequiredOutsideScheduleMeeting
Allow resource account send message | True
Resource account content access | NoAccess
Allow guest user | True
Allow scoped people search and access | True

### Channel policy

Table 16 describes the Teams Channel policy configuration settings.

Configuration Item | Value
--- | ---
Name | Global
Description | Not Configured
Org wide Team creation | False
Private Team discovery | True
Allow private channel creation | True
Name | Tag:Default
Description | Not Configured
Org wide Team creation | True
Private Team discovery | True
Allow private channel creation | True

### Calling policy

Table 17 describes the Teams Calling policy configuration settings.

Configuration Item | Value
--- | ---
Name | Global
Description | Not Configured
Allow private calling | True
Allow voicemail | AlwaysEnabled
Allow call groups | True
Allow delegation | True
Allow call forwarding to user | True
Allow call forwarding to phone | True
Prevent toll bypass | False
Busy on busy enabled type | Enabled
Name | Tag:AllowCalling
Description | Not Configured
Allow private calling | True
Allow voicemail | UserOverride
Allow call groups | True
Allow delegation | True
Allow call forwarding to user | True
Allow call forwarding to phone | True
Prevent toll bypass | False
Busy on busy enabled type | Disabled
Name | Tag:DisallowCalling
Description | Not Configured
Allow private calling | False
Allow voicemail | AlwaysDisabled
Allow call groups | False
Allow delegation | False
Allow call forwarding to user | False
Allow call forwarding to phone | False
Prevent toll bypass | False
Busy on busy enabled type | Disabled
Name | Tag:AllowCallingPreventTollBypass
Description | Not Configured
Allow private calling | True
Allow voicemail | UserOverride
Allow call groups | True
Allow delegation | True
Allow call forwarding to user | True
Allow call forwarding to phone | True
Prevent toll bypass | True
Busy on busy enabled type | Disabled
Name | Tag:AllowCallingPreventForwardingtoPhone
Description | Not Configured
Allow private calling | True
Allow voicemail | UserOverride
Allow call groups | True
Allow delegation | True
Allow call forwarding to user | True
Allow call forwarding to phone | False
Prevent toll bypass | False
Busy on busy enabled type | Disabled

### Meeting policy

Table 18 describes the Teams Meeting policy configuration settings.

Configuration Item | Value
--- | ---
Name | Global
Description | Not Configured
Allow Channel Meeting Scheduling | True
Allow Meet Now | True
Allow Private Meet Now | True
Meeting Chat Enabled Type | Enabled
Live Captions Enabled Type | DisabledUserOverride
Allow IP Video | True
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | True
Auto Admitted Users | Everyone
Allow Cloud Recording | True
Allow Outlook Add-in | True
Allow PowerPoint Sharing | True
Allow Participant Give/Request Control | True
Allow External Participant Give/Request Control | False
Allow Shared Notes | True
Allow Whiteboard | True
Allow Transcription | False
Screen Sharing Mode | EntireScreen
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False
Name | Tag:AllOn
Description | Do not assign. This policy is same as global defaults and would be deprecated
Allow Channel Meeting Scheduling | True
Allow Meet Now | True
Allow Private Meet Now | True
Meeting Chat Enabled Type | Enabled
Live Captions Enabled Type | DisabledUserOverride
Allow IP Video | True
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | True
Auto Admitted Users | EveryoneInCompany
Allow Cloud Recording | True
Allow Outlook Add-in | True
Allow PowerPoint Sharing | True
Allow Participant Give/Request Control | True
Allow External Participant Give/Request Control | False
Allow Shared Notes | True
Allow Whiteboard | True
Allow Transcription | False
Screen Sharing Mode | EntireScreen
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False
Name | Tag:RestrictedAnonymousAccess
Description | Do not assign. This policy is same as global defaults and would be deprecated
Allow Channel Meeting Scheduling | True
Allow Meet Now | True
Allow Private Meet Now | True
Meeting Chat Enabled Type | Enabled
Live Captions Enabled Type | Disabled
Allow IP Video | True
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | True
Auto Admitted Users | EveryoneInCompany
Allow Cloud Recording | True
Allow Outlook Add-in | True
Allow PowerPoint Sharing | True
Allow Participant Give/Request Control | True
Allow External Participant Give/Request Control | False
Allow Shared Notes | True
Allow Whiteboard | True
Allow Transcription | False
Screen Sharing Mode | EntireScreen
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False
Name | Tag:AllOff
Description | Not Configured
Allow Channel Meeting Scheduling | False
Allow Meet Now | False
Allow Private Meet Now | False
Meeting Chat Enabled Type | Disabled
Live Captions Enabled Type | Disabled
Allow IP Video | False
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | False
Auto Admitted Users | EveryoneInCompany
Allow Cloud Recording | False
Allow Outlook Add-in | False
Allow PowerPoint Sharing | False
Allow Participant Give/Request Control | False
Allow External Participant Give/Request Control | False
Allow Shared Notes | False
Allow Whiteboard | False
Allow Transcription | False
Screen Sharing Mode | Disabled
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False
Name | Tag:RestrictedAnonymousNoRecording
Description | Do not assign. This policy is similar to global defaults and would be deprecated
Allow Channel Meeting Scheduling | True
Allow Meet Now | True
Allow Private Meet Now | True
Meeting Chat Enabled Type | Enabled
Live Captions Enabled Type | Disabled
Allow IP Video | True
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | True
Auto Admitted Users | EveryoneInCompany
Allow Cloud Recording | False
Allow Outlook Add-in | True
Allow PowerPoint Sharing | True
Allow Participant Give/Request Control | True
Allow External Participant Give/Request Control | False
Allow Shared Notes | True
Allow Whiteboard | True
Allow Transcription | False
Screen Sharing Mode | EntireScreen
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False
Name | Tag:Default
Description | Not Configured
Allow Channel Meeting Scheduling | True
Allow Meet Now | True
Allow Private Meet Now | True
Meeting Chat Enabled Type | Enabled
Live Captions Enabled Type | DisabledUserOverride
Allow IP Video | True
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | True
Auto Admitted Users | Everyone
Allow Cloud Recording | True
Allow Outlook Add-in | True
Allow PowerPoint Sharing | True
Allow Participant Give/Request Control | True
Allow External Participant Give/Request Control | False
Allow Shared Notes | True
Allow Whiteboard | True
Allow Transcription | False
Screen Sharing Mode | EntireScreen
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False
Name | Tag:Kiosk
Description | Not Configured
Allow Channel Meeting Scheduling | False
Allow Meet Now | True
Allow Private Meet Now | True
Meeting Chat Enabled Type | Enabled
Live Captions Enabled Type | Disabled
Allow IP Video | True
Allow Anonymous Users to Dial Out | False
Allow Anonymous Users to Start Meeting | False
Allow Private Meeting Scheduling | False
Auto Admitted Users | EveryoneInCompany
Allow Cloud Recording | False
Allow Outlook Add-in | False
Allow PowerPoint Sharing | True
Allow Participant Give/Request Control | True
Allow External Participant Give/Request Control | False
Allow Shared Notes | True
Allow Whiteboard | True
Allow Transcription | False
Screen Sharing Mode | EntireScreen
Allow PSTN Users to Bypass Lobby | True
Allow Organizers to Override Lobby Settings | False

### Messaging policy

Table 19 describes the Teams Messaging policy configuration settings.

Configuration Item | Value
--- | ---
Name | Global
Description | Global Teams Messaging Policy
Allow URL previews | True
Allow Owner Delete Message | True
Allow User Edit Message | True
Allow User Delete Message | True
Allow User Chat | True
Allow Remove User | True
Allow Giphy | True
Giphy Rating Type | Strict
Allow Memes | False
Allow Immersive Reader | True
Allow Stickers | False
Allow User Translation | True
Allow User Translation | True
Allow Priority Messages | True
Channels in Chat List Enabled Type | DisabledUserOverride
Audio Message Enabled Type | ChatsAndChannels
Name | Tag:Default
Description | Not Configured
Allow URL previews | True
Allow Owner Delete Message | False
Allow User Edit Message | True
Allow User Delete Message | True
Allow User Chat | True
Allow Remove User | True
Allow Giphy | True
Giphy Rating Type | Moderate
Allow Memes | True
Allow Immersive Reader | True
Allow Stickers | True
Allow User Translation | False
Allow User Translation | False
Allow Priority Messages | True
Channels in Chat List Enabled Type | DisabledUserOverride
Audio Message Enabled Type | ChatsAndChannels
Name | Tag:EduFaculty
Description | Not Configured
Allow URL previews | True
Allow Owner Delete Message | True
Allow User Edit Message | True
Allow User Delete Message | True
Allow User Chat | True
Allow Remove User | True
Allow Giphy | False
Giphy Rating Type | Strict
Allow Memes | True
Allow Immersive Reader | True
Allow Stickers | True
Allow User Translation | False
Allow User Translation | False
Allow Priority Messages | True
Channels in Chat List Enabled Type | DisabledUserOverride
Audio Message Enabled Type | ChatsAndChannels
Name | Tag:EduStudent
Description | Not Configured
Allow URL previews | True
Allow Owner Delete Message | False
Allow User Edit Message | True
Allow User Delete Message | True
Allow User Chat | True
Allow Remove User | True
Allow Giphy | False
Giphy Rating Type | Strict
Allow Memes | True
Allow Immersive Reader | True
Allow Stickers | True
Allow User Translation | False
Allow User Translation | False
Allow Priority Messages | True
Channels in Chat List Enabled Type | DisabledUserOverride
Audio Message Enabled Type | ChatsAndChannels

### Meeting broadcast policy

Table 20 describes the Teams meeting broadcast policy configuration settings.

Configuration Item | Value
--- | ---
Name | Global
Description | Not Configured
Allow Broadcast Scheduling | True
Allow Broadcast Transcription | False
Broadcast Attendee Visibility Mode | EveryoneInCompany
Broadcast Record Mode | AlwaysEnabled
Name | Tag:Default
Description | Not Configured
Allow Broadcast Scheduling | True
Allow Broadcast Transcription | False
Broadcast Attendee Visibility Mode | EveryoneInCompany
Broadcast Record Mode | AlwaysEnabled

## SharePoint Online & OneDrive

The ABAC settings for SharePoint Online and OneDrive instances can be found below. This includes the Site and Sharing configuration.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Tenant configuration

Table 21 describes the SharePoint Online Tenant configuration settings.

Configuration Item | Value
--- | ---
Storage quota | 1025048576
Storage quota allocated | 104857600
Resource quota | 20000300
Resource quota allocated | 300
External services enabled | False
No access redirect URL | Not Configured
Sharing Capability | Disabled
Display start a site option | False
Start a site form URL | Not Configured
Office client ADAL Disabled | False
Legacy authentication protocols enabled | False
Search resolve exact email or UPN | False
Require accepting account match invited account | True
Provision shared with everyone folder | False
Bcc external sharing invitations | False
Bcc external sharing invitation list | 
User Voice for feedback enabled | False
Public CDN enabled | False
Public CDN allowed file types | CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF
Public CDN origins | Not Configured
Require anonymous links expiration in days | 14
Sharing allowed domain list | Not Configured
Sharing blocked domain list | Not Configured
Sharing domain restriction mode | None
IP address enforcement | False
IP address allow list | Not Configured
IP address WAC token lifetime | 15
Use find people in people picker | False
Default sharing link type | Internal
ODB members can share | Off
ODB access requests | Off
Prevent external users from resharing | True
File anonymous link type | Edit
Folder anonymous link type | Edit
Notify owners when items are reshared | True
Notify owners when invitations accepted | True
Notifications in OneDrive for business enabled | True
Notifications in SharePoint enabled | True
Special characters state in file folder names | Allowed
Owner anonymous notification | True
Comments on site pages disabled | False
Comments on files disabled | False
Social bar on site pages disabled | True
Orphaned personal site retention period | 365
Disallow infected file download | True
Default link permission | None
Allow downloading nonweb viewable files | False
Limited access file type | WebPreviewableFiles
Apply app enforced restrictions to adhoc recipients | True
File picker external image search enabled | True
Email attestation required | False
Email attestation reauth days | 30
Sync privacy profile properties | True
Mark new files sensitive by default | AllowExternalSharing
Enable AIP integration | False

## Security and Compliance

The ABAC settings for the Agencies Office 365 Security and Compliance instance can be found below. This includes the Alerts, Labels, Data Loss Prevention, Retention Policies, Audit Logging, and Customer Key configuration.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Audit logging

`Microsoft 365 compliance > Audit > Audit Retention Policies`

* Enabled: `True`
* Policy name: `10 year audit log`
* Policy description: `Retains all audit log records for 10 years`
* Record Type: `All`
* Duration: `10 years`
* Priority: `1`

### Retention labels

Table 22 describes the Retention labels configuration settings.

Configuration Item | Value
--- | ---
Name | Teams Channel messages Indefinite Hold
Status | On
Policy Name | Teams Channel Message Indefinite Hold
Description | Teams Channel Message Indefinite Hold
Applies to content in these locations | Teams channel messages
Retention period | Keep content forever
Turn on preservation lock | No
Name | Microsoft 365 groups Indefinite Hold
Status | On
Policy Name | Office 365 Group Indefinite Hold
Description | Office 365 Group Indefinite Hold
Applies to content in these locations | Microsoft 365 groups – All Groups
Retention period | Keep content forever
Turn on preservation lock | No
Name | Exchange Indefinite Hold
Status | On
Policy Name | Exchange Indefinite Hold
Description | Exchange Indefinite Hold
Applies to content in these locations | Exchange email – All users included<br>Exchange Public Folders
Retention period | Keep content forever
Turn on preservation lock | No
Name | Teams chats Indefinite Hold
Status | On
Policy Name | Teams chats Indefinite Hold
Description | Teams chats Indefinite Hold
Applies to content in these locations | Teams chats messages – All users included
Retention period | Keep content forever
Turn on preservation lock | No
Name | OneDrive Indefinite Hold
Status | On
Policy Name | OneDrive Indefinite Hold
Description | OneDrive Indefinite Hold
Applies to content in these locations | OneDrive accounts - All
Retention period | Keep content forever
Turn on preservation lock | No
Name | SharePoint Indefinite Hold
Status | On
Policy Name | SharePoint Indefinite Hold
Description | SharePoint Indefinite Hold
Applies to content in these locations | SharePoint Sites – All Sites
Retention period | Keep content forever
Turn on preservation lock | No

### Sensitivity labels

Table 24 describes the Sensitivity label configuration settings.

#### Unofficial

* Name: `Unofficial`
* Workload: `Exchange`, `SharePoint`
* Settings: 
```
[tooltip, No damage. This information does not form part of official duty]
[displayname, Unofficial]
[colour, #000000]
```
* Label Actions:
```json
{
    "Type": "applycontentmarking",
    "SubType": "header",
    "Settings": [
        {
            "Key": "text",
            "Value": "UNOFFICIAL"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Header"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "applycontentmarking",
    "SubType": "footer",
    "Settings": [
        {
            "Key": "text",
            "Value": "UNOFFICIAL"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Footer"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "encrypt",
    "SubType": null,
    "Settings": [
        {
            "Key": "disabled",
            "Value": "true"
        },
        {
            "Key": "protectiontype",
            "Value": "template"
        },
        {
            "Key": "aiptemplatescopes",
            "Value": "[\"All\"]"
        }
    ]
}
```
* Conditions: Not configured
* Local Settings: Not configured
* Tooltip: `No damage. This information does not form part of official duty`

#### Official

* Name: `Official`
* Workload: `Exchange`, `SharePoint`
* Settings: 
```
[tooltip, 1 Low business impact No or insignificant damage. This is the majority of routine information.]
[displayname, Official]
[colour, #000000]
```
* Label Actions:
```json
{
    "Type": "applycontentmarking",
    "SubType": "header",
    "Settings": [
        {
            "Key": "text",
            "Value": "OFFICIAL"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Header"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "applycontentmarking",
    "SubType": "footer",
    "Settings": [
        {
            "Key": "text",
            "Value": "OFFICIAL"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Footer"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "encrypt",
    "SubType": null,
    "Settings": [
        {
            "Key": "disabled",
            "Value": "true"
        },
        {
            "Key": "protectiontype",
            "Value": "template"
        },
        {
            "Key": "aiptemplatescopes",
            "Value": "[\"All\"]"
        }
    ]
}
```
* Conditions: Not configured
* Local Settings: Not configured
* Tooltip: `1 Low business impact No or insignificant damage. This is the majority of routine information.`

#### Official Sensitive

* Name: `Official Sensitive`
* Workload: `Exchange`, `SharePoint`
* Settings: 
```
[tooltip, 2 Low to medium business impact Limited damage to an individual, organisation or government generally if compromised]
[displayname, OFFICIAL Sensitive]
[colour, #000000]
```
* Label Actions:
```json
{
    "Type": "applycontentmarking",
    "SubType": "header",
    "Settings": [
        {
            "Key": "text",
            "Value": "OFFICIAL Sensitive"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Header"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "applycontentmarking",
    "SubType": "footer",
    "Settings": [
        {
            "Key": "text",
            "Value": "OFFICIAL Sensitive"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Footer"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "encrypt",
    "SubType": null,
    "Settings": [
        {
            "Key": "disabled",
            "Value": "true"
        },
        {
            "Key": "protectiontype",
            "Value": "template"
        },
        {
            "Key": "aiptemplatescopes",
            "Value": "[\"All\"]"
        }
    ]
}
```
* Conditions: Not configured
* Local Settings: Not configured
* Tooltip: `2 Low to medium business impact Limited damage to an individual, organisation or government generally if compromised`

#### Protected

* Name: `Protected`
* Workload: `Exchange`, `SharePoint`
* Settings: 
```
[tooltip, 3 High business impact Damage to the national interest, organisations, or individuals]
[displayname, Protected]
[colour, #000000]
```
* Label Actions:
```json
{
    "Type": "applycontentmarking",
    "SubType": "header",
    "Settings": [
        {
            "Key": "text",
            "Value": "PROTECTED"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Header"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "applycontentmarking",
    "SubType": "footer",
    "Settings": [
        {
            "Key": "text",
            "Value": "PROTECTED"
        },
        {
            "Key": "fontsize",
            "Value": "10"
        },
        {
            "Key": "fontcolor",
            "Value": "#000000"
        },
        {
            "Key": "alignment",
            "Value": "Center"
        },
        {
            "Key": "margin",
            "Value": "15"
        },
        {
            "Key": "placement",
            "Value": "Footer"
        },
        {
            "Key": "disabled",
            "Value": "false"
        }
    ]
}
{
    "Type": "encrypt",
    "SubType": null,
    "Settings": [
        {
            "Key": "disabled",
            "Value": "true"
        },
        {
            "Key": "protectiontype",
            "Value": "template"
        },
        {
            "Key": "aiptemplatescopes",
            "Value": "[\"All\"]"
        }
    ]
}
```
* Conditions: Not configured
* Local Settings: Not configured
* Tooltip: `3 High business impact Damage to the national interest, organisations, or individuals`

### Sensitivity label policy

Table 25 lists the Sensitivity label policy configuration.

`Microsoft 365 Security Center > Classification > Sensitvitiy labels > Label policies> agency acronym sensitivity labels`

Item | Configuration
--- | ---
Name | agency acronym sensitivity labels
Description | Default sensitivity labels based on [PSPF infosec document](https://www.protectivesecurity.gov.au/sites/default/files/2019-12/pspf-infosec-08-sensitive-classified-information.pdf)
Published Labels | UNOFFICIAL<br>OFFICIAL<br>OFFICIAL Sensitive<br>OFFICIAL Sensitive ACCESS=Legal-Privilege<br>OFFICIAL Sensitive ACCESS=Legislative-Secrecy<br>OFFICIAL Sensitive ACCESS=Personal-Privacy<br>PROTECTED<br>PROTECTED ACCESS=Legal-Privilege<br>PROTECTED ACCESS=Legislative-Secrecy<br>PROTECTED ACCESS=Personal-Privacy<br>PROTECTED CAVEAT=SH CABINET<br>PROTECTED ACCESS=Legal-Privilege CAVEAT=SH CABINET<br>PROTECTED ACCESS=Legislative-Secrecy CAVEAT=SH CABINET<br>PROTECTED ACCESS=Personal-Privacy CAVEAT=SH CABINET
Published to | All
Policy settings | Label is mandatory<br>Users must provide justification to remove a label or lower its classification

### Data Loss Prevention (DLP) compliance policy

* Name: `Australia Privacy Act`
  * Enabled: `True`
  * Locations: `Exchange, SharePoint, OneDriveForBusiness, Teams`
  * Mode: `Enable`
  * Type: `DLP`
  * Exchange Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Exchange`
    * SchemaVersion: `2`
  * SharePoint Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `SharePoint`
    * SchemaVersion: `2`
  * SharePoint Location Exception: `Not Configured`
  * OneDrive Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `OneDriveForBusiness`
    * SchemaVersion: `2`
  * OneDrive Location Exception: `Not Configured`
  * Exchange On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location Exception: `Not Configured`
  * Teams Location: 
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Teams`
    * SchemaVersion: `2`
  * Teams Location Exception: `Not Configured`
  * Exchange Sender: `Not Configured`
  * Exchange Sender Member Of: `Not Configured`
  * Exchange Sender Exception: `Not Configured`
  * Exchange Sender Member Of Exception: `Not Configured`
* Name: `Australia Personally Identifiable Information (PII) Data`
  * Enabled: `True`
  * Workload: `Exchange, SharePoint, OneDriveForBusiness, Teams`
  * Mode: `Enable`
  * Type: `DLP`
  * Exchange Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Exchange`
    * SchemaVersion: `2`
  * SharePoint Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `SharePoint`
    * SchemaVersion: `2`
  * SharePoint Location Exception: `Not Configured`
  * OneDrive Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `OneDriveForBusiness`
    * SchemaVersion: `2`
  * OneDrive Location Exception: `Not Configured`
  * Exchange On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location Exception: `Not Configured`
  * Teams Location: 
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Teams`
    * SchemaVersion: `2`
  * Teams Location Exception: `Not Configured`
  * Exchange Sender: `Not Configured`
  * Exchange Sender Member Of: `Not Configured`
  * Exchange Sender Exception: `Not Configured`
  * Exchange Sender Member Of Exception: `Not Configured`
* Name: `Australia Health Records Act (HRIP Act)`
  * Enabled: `True`
  * Workload: `Exchange, SharePoint, OneDriveForBusiness, Teams`
  * Mode: `Enable`
  * Type: `DLP`
  * Exchange Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Exchange`
    * SchemaVersion: `2`
  * SharePoint Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `SharePoint`
    * SchemaVersion: `2`
  * SharePoint Location Exception: `Not Configured`
  * OneDrive Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `OneDriveForBusiness`
    * SchemaVersion: `2`
  * OneDrive Location Exception: `Not Configured`
  * Exchange On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location Exception: `Not Configured`
  * Teams Location: 
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Teams`
    * SchemaVersion: `2`
  * Teams Location Exception: `Not Configured`
  * Exchange Sender: `Not Configured`
  * Exchange Sender Member Of: `Not Configured`
  * Exchange Sender Exception: `Not Configured`
  * Exchange Sender Member Of Exception: `Not Configured`
* Name: `Detect Australian Drivers licence numbers`
  * Enabled: `True`
  * Workload: `Exchange, SharePoint, OneDriveForBusiness, Teams`
  * Mode: `TestWithNotifications`
  * Type: `DLP`
  * Exchange Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Exchange`
    * SchemaVersion: `2`
  * SharePoint Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `SharePoint`
    * SchemaVersion: `2`
  * SharePoint Location Exception: `Not Configured`
  * OneDrive Location:
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `OneDriveForBusiness`
    * SchemaVersion: `2`
  * OneDrive Location Exception: `Not Configured`
  * Exchange On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location: `Not Configured`
  * SharePoint On-Premises Location Exception: `Not Configured`
  * Teams Location: 
    * DisplayName: `All`
    * Name: `All`
    * ImmutableIdentity: `All`
    * Type: `Tenant`
    * Workload: `Teams`
    * SchemaVersion: `2`
  * Teams Location Exception: `Not Configured`
  * Exchange Sender: `Not Configured`
  * Exchange Sender Member Of: `Not Configured`
  * Exchange Sender Exception: `Not Configured`
  * Exchange Sender Member Of Exception: `Not Configured`
