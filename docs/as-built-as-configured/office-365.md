---

---

# Office 365

<p id="date-and-time">51 minutes to read - 30 March 2023</p>

## Organisation 

The ABAC settings for the Agency organisation for all implementation types can be found below. This includes Residency, Licensing and Licensing Manual Groups, Theme, Add-ins and Security and Privacy settings.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting

`Microsoft 365 Admin center > Settings > Org settings > Organization profile > Organization information`

The following table describes the Office 365 Organization profile settings for all implementation types.

| Item               | Configuration         |
| ------------------ | --------------------- |
| Name               | Agency Name           |
| Street address     | Agency defined        |
| City               | Agency defined        |
| State              | Agency defined        |
| ZIP or postal code | Agency defined        |
| Country or region  | Australia             |
| Phone              | Agency defined        |
| Technical Contact  | Agency defined        |
| Preferred Language | English               |

### Licensing

`Microsoft 365 Admin center > Billing`

The following table describes the Microsoft 365 Licensing settings for all implementation types.

| Item                              | Configuration |
| --------------------------------- | ------------- |
| Name                              | Quantity      |
| Microsoft 365 E5                  | 100,000       |
| Microsoft Power Automate Free     | 10,000        |
| Office 365 E5                     | 3             |
| Microsoft Power Apps Plan 2 Trial | 10,000        |

### Licensing manual groups

`Azure Active Directory > Licenses > All products > Microsoft 365 E5 > Licensed groups `

The following table describes the configuration for the manual allocation of Microsoft 365 E5 licenses for all implementation types.

| Name                      | State  |
| ------------------------- | ------ |
| rol-Agency-Administrators | Active |
| rol-Agency-Users          | Active |


### Theme

`Microsoft 365 admin center > Settings > Org settings > Organization profile > Custom themes`

The following table describes the Custom Theme settings for all implementation types.

| Item                                      | Configuration                                                |
| ----------------------------------------- | ------------------------------------------------------------ |
| Use a custom logo image                   | Agency supplied                                              |
| Use an image from a URL                   | Agency supplied                                              |
| Make the logo clickable                   | Agency supplied                                              |
| Select background image                   | Agency supplied                                              |
| Navigation bar colour                     | Agency supplied                                              |
| Text and icon colour                      | Agency supplied                                              |
| Accent colour                             | Agency supplied                                              |
| Prevent users from overriding their theme | Enabled                                                      |
| Show the user’s display name              | Enabled                                                      |

`Endpoint Manager admin center > Tenant administration > Customization`

- Branding
  - Organization name: `<Agency Name>`
  - Theme color: Agency supplied
  - Show in header: `Organization logo only`
  - Upload logo for theme color background: Agency supplied
  - Upload logo for theme color light background: Agency supplied
  - Upload brand image: Agency supplied
- Support information
  - Contact name: `<Agency Acronym> IT Service Desk`
  - Phone number: `<Agency Support Telephone Number>`
  - Email address: `ITServiceDesk@Agency.gov.au`
  - Website name: -
  - Website URL: -
  - Additional information: -
- Configuration
  - Device enrollment: `Available, with prompts`
  - Privacy messages in Company Portal for iOS/iPadOS: `Default`
  - Privacy statement URL: - 
  - Send a push notification to users when their device ownership type changes from personal to corporate (Android and iOS/iPadOS only): `No`
  - Hide remove button on corporate Windows devices: `Yes`
  - Hide reset button on corporate Windows devices: `No`
  - Hide remove button on corporate iOS/iPadOS devices: `No`
  - Hide reset button on corporate iOS/iPadOS devices: `No`

### Add-ins

`Microsoft 365 admin center > Settings > Org settings > Services`

The following table describes the Microsoft 365 Services settings for all implementation types.

| Item                                      | Configuration                                                |
| ----------------------------------------- | ------------------------------------------------------------ |
| Azure Speech Services                     | Enabled                                                      |
| Bookings                                  | Disabled                                                     |
| ‎Briefing‎ email from ‎Microsoft Viva‎        | Enabled                                                      |
| Calendar                                  | Disabled                                                     |
| Cortana                                   | Disabled                                                     |
| ‎Microsoft‎ communication to users          | Disabled                                                     |
| Microsoft Forms                           | Send a link to the form and collect responses: Unchecked<br>Share to collaborate on the form layout and structure: Unchecked<br>Share the form as a template that can be duplicated: Unchecked<br>Share form results summary: Unchecked<br>Record names by default: Unchecked<br>Include Bing search, YouTube videos: Unchecked<br>Add internal phishing protection: Checked |
| Microsoft Graph Data Connect              | Disabled                                                     |
| Planner                                   | ‎iCalendar‎ publishing: Unchecked                              |
| Microsoft Search in Bing homepage         | Disabled                                                     |
| Microsoft Teams                           | Advanced management options: Checked<br>Guest access: Checked |
| Microsoft To Do                           | Disabled                                                     |
| ‎Viva Insights (formerly MyAnalytics)‎      | Insights dashboard: Checked<br>Weekly digest: Checked<br>Insights Outlook add-in: Checked<br>Allow Microsoft to contact me about my feedback: Unchecked |
| Microsoft 365 Groups                      | Enabled                                                      |
| Modern Authentication                     | Turn on modern authentication for Outlook 2013 for Windows and later (recommended): Checked<br>Allow access to basic authentication protocols: Unchecked (All)                                 |
| News                                      | Disabled                                                     |
| ‎Office‎ installation options               | Once a month (Monthly Enterprise Channel)<br>Apps for Windows and mobile devices: Office (includes Skype for Business)<br>Apps for Mac: Office                                               |
| Office on the web (third-party storage services) | Disabled                                                     |
| Office Scripts                            | Disabled                                                     |
| Reports                                   | Disabled                                                     |
| SharePoint                                | Users can share with: New and existing guests - guests must sign in or provide a verification code |
| Sway                                      | Disabled                                                     |
| User consent to apps                      | Disabled                                                     |
| User owned apps and services              | Disabled                                                     |
| Viva Learning                             | Diagnostic data: Unchecked<br>LinkedIn Learning: Unchecked<br>Microsoft Learn: Unchecked<br>Microsoft 365 Training: Unchecked<br>SharePoint: Unchecked |
| Whiteboard                                | Turn on Whiteboard for everyone in your org: Checked<br>Level of diagnostic data to send to Microsoft: Neither<br>Allow the use of optional connected experiences in Whiteboard: Unchecked<br>Enable easy sharing of Whiteboard from Surface Hub: Unchecked<br>Enable storing new whiteboards in OneDrive: Unchecked |

### Security and privacy

`Microsoft 365 admin center > Org Settings > Security & privacy`

The following table describes the Microsoft 365 Security and Privacy settings for all implementation types.

| Item                        | Configuration  |
| --------------------------- | -------------- |
| ‎Bing‎ data collection        | Disabled       |
| Customer lockbox            | Enabled        |
| Password expiration policy  | Enabled<br>Days before passwords expire: 365<br>Days before a user is notified about expiration: 14|
| Privacy profile             | Enabled (Agency to define) |
| Privileged access           | Enabled        |
| Sharing                     | Disabled       |

## Exchange Online

The ABAC settings for the Agencies Exchange Online instance can be found below. This includes connectors, Mail Exchange (MX) records, SPF, DMARC, DKIM, Remote Domains, User mailbox configurations, Authentication Policies, Outlook on the Web policies, Mailbox Archiving, and Address lists

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting. 

### Connectors

#### Cloud-native implementation types

Cloud-native connector configuration assumes Office 365 is not configured with a 3rd party gateway for mail flow. 

Agencies that are required to route traffic through a 3rd party mail gateway will require connectors to be configured.

`Exchange Online admin center > Mail flow > Connectors`

The following table describes the Exchange Online inbound mail connectors for a Cloud-native implementation type.

| Item           | Configuration |
| -------------- | ------------- |
| Not configured | N/A           |

The following table describes the Exchange Online outbound mail connectors for a Cloud-native implementation type.

| Item           | Configuration |
| -------------- | ------------- |
| Not configured | N/A           |

#### Hybrid implementation types

`Exchange Online admin center > Mail flow > Connectors`

The following table describes the Exchange Online inbound mail connectors for a Hybrid implementation type.

| Item                                                 | Configuration                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| From                                                 | Your Organization's email server                             |
| To                                                   | Office 365                                                   |
| Description                                          | None                                                         |
| Status                                               | On                                                           |
| Retain internal Exchange email headers (recommended) | Enable                                                       |
| How to identify your organization                    | Identify the organization by verifying that messages are coming Inbound from xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
| Security restrictions                                | Reject messages if they aren’t encrypted using Transport Layer Security ‎(TLS)‎, or the subject name on the certificate that the organization uses to authenticate with Office 365 doesn’t‎ match this domain name: `*.Agency.gov.au` |

The following table describes the Exchange Online outbound mail connectors for a Hybrid implementation type.

| Item                                                 | Configuration                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| From                                                 | Office 365                                                   |
| To                                                   | Your Organization’s email server                             |
| Description                                          | None                                                         |
| Status                                               | On                                                           |
| Retain internal Exchange email headers (recommended) | Enable                                                       |
| How to identify your organization                    | Identify the organization by verifying that messages are going outbound from xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
| When to use the connector                            | Only when email messages are sent to these domains: *        |
| Routing method                                       | Route email messages through these smart hosts: Agency.gov.au |
| Security restrictions                                | Always use Transport Layer Security ‎(TLS)‎ and connect only if the recipient’s email server certificate is issued by a trusted certificate authority ‎(CA)‎, and the subject name matches this domain: `mail.Agency.gov.au` |

### MX records

MX records are not set within Azure or Exchange and have been configured with the hosting provider.

Note, cloud-native MX configuration assumes Office 365 is not configured with a 3rd party gateway for mail flow. 

Agencies that are required to route traffic through a 3rd party mail gateway will point MX record to the 3rd party gateway.

The following table describes the MX records that have been configured per implementation type.

| Implementation | Domain        | MX Preferences | Mail Exchanger                              |
| -------------- | ------------- | -------------- | ------------------------------------------- |
| Cloud-native   | Agency.gov.au | `10`           | `Agency-gov-au.mail.protection.outlook.com` |
| Hybrid         | Agency.gov.au | `10`           | `<agency mx provider>`                      |

### SPF and DMARC records

Note, SPF and DMARC DNS records are configured through the agency's DNS provider. DMARC and SPF configuration is unique to the agency. The following configuration are included as examples.

The following table describes the SPF records have been configured per implementation type.

| Implementation | Domain        | SPF Record                                         | DMARC Policy                                                 |
| -------------- | ------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| Cloud-native   | Agency.gov.au | `"v=spf1 include:spf.protection.outlook.com -all"` | `"v=DMARC1; p=reject; pct=100; rua=mailto:<rua reporting address>; ruf=mailto:<ruf reporting address>; fo=1"` |
| Hybrid         | Agency.gov.au | Specific to gateway provider                       | `"v=DMARC1; p=reject; pct=100; rua=mailto:<rua reporting address>; ruf=mailto:<ruf reporting address>; fo=1"` |

### DKIM records

Note, DKIM DNS selector records are configured through the agency's DNS provider. Cloud-native configuration assumes DKIM signing is handled by Exchange Online Protection and not a third-party selector.

The following table describes the DKIM records configuration settings per implementation type. 

| Implementation | Type  | Domain        | Host name                     | TTL      | Points to address or value                                   |
| -------------- | ----- | ------------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| Cloud-native   | CNAME | Agency.gov.au | `selector1._domainkey `       | `5 Min.` | `selector1-agency-gov-au._domainkey.<agencyinitialdomain>.onmicrosoft.com.` |
| Cloud-native   | CNAME | Agency.gov.au | `selector2._domainkey `       | `5 Min.` | `selector2-agency-gov-au._domainkey.<agencyinitialdomain>.onmicrosoft.com.` |
| Hybrid         | CNAME | Agency.gov.au | `<gateway provided selector>` | `5 Min.` | `<gateway provided selector>`                                |

### DNS records

Note, the Autodiscover service external DNS entry is specific to the Hybrid implementation of the Agency. Once all mailboxes have been migrated to Office 365 within a Hybrid configuration this can be pointed as an alias to the Office 365 Autodiscover service using `autodiscover.outlook.com`.

Hybrid implementation types will require additional external DNS records depending on the hybrid implementation (classic or modern). The additional certificate requirements for hybrid can be located at - [certificate requirements for hybrid deployments](https://docs.microsoft.com/en-us/exchange/certificate-requirements).

The following table describes the DNS record settings for Agency.gov.au (default) per implementation type. 

| Implementation | Type  | Priority | Host name                     | Points to address or value                              | TTL    |
| -------------- | ----- | -------- | ----------------------------- | ------------------------------------------------------- | ------ |
| Cloud-native   | MX    | `10`     | Agency Domain                 | `Agency-gov-au.mail.protection.outlook.com`             | 1 hour |
| Hybrid         | MX    | `10`     | Agency Domain                 | Agency mx provider address.                             | 1 hour |
| Hybrid         | CNAME | -        | Agency Edge Transport address | Agency edge transport gateway address.                  | 1 hour |
| Hybrid         | CNAME | -        | Agency CAS/EWS NAT address    | Agency CAS/EWS NAT when using hybrid classic full.      | 1 hour |
| All            | TXT   | -        | Agency Domain                 | Text string provided by Office 365 domain setup wizard. | 1 hour |
| Cloud-native   | CNAME | -        | Autodiscover.Agency.gov.au    | `autodiscover.outlook.com`                              | 1 hour |
| Hybrid         | CNAME | -        | Autodiscover.Agency.gov.au    | Agency autodiscover NAT address.                        | 1 hour |

### Accepted domains

`Exchange Online admin centre > Mail flow > Accepted domains`

The following table describes the Accepted Domains settings for all implementation types.

| Name                        | Accepted Domain             | Domain Type   |
| --------------------------- | --------------------------- | ------------- |
| Agency.gov.au (default)     | Agency.gov.au               | Authoritative |
| Agency.onmicrosoft.com      | Agency.onmicrosoft.com      | Authoritative |
| Agency.mail.onmicrosoft.com | Agency.mail.onmicrosoft.com | Authoritative |

### Remote domains

`Exchange Online admin centre > Mail flow > Remote domains`

Note, existing remote domains configuration for hybrid implementations can be transferred to Exchange Online during the hybrid wizard using the [Organization configuration transfer](https://docs.microsoft.com/en-us/exchange/org-config-transfer-attributes/org-config-transfer-attributes) option.

The following table describes the Remote Domains have been configured for all implementation types.

| Item                                        | Configuration          |
| ------------------------------------------- | ---------------------- |
| Name                                        | Default                |
| Remote Domain                               | *                      |
| Allowed Out Of Office Type                  | Allow only external out of office replies |
| Allow automatic replies                     | False                  |
| Allow automatic forwarding                  | False                  |
| Allow delivery reports                      | False                  |
| Allow non-delivery reports                  | False                  |
| Allow meeting forward notifications         | False                  |
| Use rich-text format                        | Follow users settings  |
| MIME character set                          | None                   |
| Non-MIME character set                      | None                   |

### Organisational add-ins

`Exchange Online admin center > Organization > Add-ins`

No organisational add-ins have been configured.

### CAS mailbox plan

Please note, CAS mailbox plan can be retrieved (or set) through Exchange Online PowerShell. The policy objects are Exchange Online out of box policies, that require minimal edit.

```powershell
Get-CASMailboxPlan | Format-Table -Auto DisplayName,ActiveSyncEnabled,ImapEnabled,PopEnabled,OwaMailboxPolicy
```

The following table describes the mailbox plans have been configured for all implementation types.

| Item                                    | Configuration            |
| --------------------------------------- | ------------------------ |
| Name                                    | ExchangeOnlineEnterprise |
| ActiveSyncMailboxPolicy                 | --                       |
| ActiveSyncDebugLogging                  | False                    |
| ActiveSyncEnabled                       | False                    |
| ActiveSyncSuppressReadReceipt           | False                    |
| DisplayName                             | ExchangeOnlineEnterprise |
| ECPEnabled                              | True                     |
| ImapEnabled                             | False                    |
| ImapUseProtocolDefaults                 | True                     |
| ImapMessagesRetrievalMimeFormat         | BestBodyFormat           |
| ImapEnableExactRFC822Size               | False                    |
| ImapProtocolLoggingEnabled              | False                    |
| ImapSuppressReadReceipt                 | False                    |
| ImapForceICalForCalendarRetrievalOption | False                    |
| MAPIEnabled                             | True                     |
| MapiHttpEnabled                         | --                       |
| MAPIBlockOutlookNonCachedMode           | False                    |
| MAPIBlockOutlookVersions                | --                       |
| MAPIBlockOutlookRpcHttp                 | False                    |
| PublicFolderClientAccess                | False                    |
| MAPIBlockOutlookExternalConnectivity    | False                    |
| OwaMailboxPolicy                        | OwaMailboxPolicy-Default |
| OWAEnabled                              | True                     |
| OWAforDevicesEnabled                    | True                     |
| PopEnabled                              | False                    |
| PopMessageDeleteEnabled                 | True                     |
| PopUseProtocolDefaults                  | True                     |
| PopMessagesRetrievalMimeFormat          | BestBodyFormat           |
| PopEnableExactRFC822Size                | False                    |
| PopProtocolLoggingEnabled               | False                    |
| PopSuppressReadReceipt                  | False                    |
| PopForceICalForCalendarRetrievalOption  | True                     |
| RemotePowerShellEnabled                 | True                     |
| UniversalOutlookEnabled                 | True                     |
| OutlookMobileEnabled                    | True                     |
| MacOutlookEnabled                       | True                     |
| EwsEnabled                              | True                     |
| EwsAllowOutlook                         | --                       |
| EwsAllowMacOutlook                      | --                       |
| EwsAllowEntourage                       | --                       |
| EwsApplicationAccessPolicy              | --                       |
| EwsAllowList                            | --                       |
| EwsBlockList                            | --                       |
| **Item**                                | **Configuration**        |
| Name                                    | ExchangeOnlineDeskless   |
| ActiveSyncDebugLogging                  | False                    |
| ActiveSyncEnabled                       | False                    |
| ActiveSyncMailboxPolicy                 | --                       |
| ActiveSyncSuppressReadReceipt           | False                    |
| DisplayName                             | ExchangeOnlineDeskless   |
| ECPEnabled                              | True                     |
| EwsAllowEntourage                       | --                       |
| EwsAllowList                            | --                       |
| EwsAllowMacOutlook                      | --                       |
| EwsAllowOutlook                         | --                       |
| EwsApplicationAccessPolicy              | --                       |
| EwsBlockList                            | --                       |
| EwsEnabled                              | False                    |
| ImapEnabled                             | False                    |
| ImapEnableExactRFC822Size               | False                    |
| ImapForceICalForCalendarRetrievalOption | False                    |
| ImapMessagesRetrievalMimeFormat         | BestBodyFormat           |
| ImapProtocolLoggingEnabled              | False                    |
| ImapSuppressReadReceipt                 | False                    |
| ImapUseProtocolDefaults                 | True                     |
| MacOutlookEnabled                       | True                     |
| MAPIBlockOutlookExternalConnectivity    | False                    |
| MAPIBlockOutlookNonCachedMode           | False                    |
| MAPIBlockOutlookRpcHttp                 | False                    |
| MAPIBlockOutlookVersions                | --                       |
| MAPIEnabled                             | False                    |
| MapiHttpEnabled                         | --                       |
| OutlookMobileEnabled                    | True                     |
| OWAEnabled                              | True                     |
| OWAforDevicesEnabled                    | True                     |
| OwaMailboxPolicy                        | OwaMailboxPolicy-Default |
| PopEnabled                              | False                    |
| PopEnableExactRFC822Size                | False                    |
| PopForceICalForCalendarRetrievalOption  | True                     |
| PopMessageDeleteEnabled                 | True                     |
| PopMessagesRetrievalMimeFormat          | BestBodyFormat           |
| PopProtocolLoggingEnabled               | False                    |
| PopSuppressReadReceipt                  | False                    |
| PopUseProtocolDefaults                  | True                     |
| PublicFolderClientAccess                | False                    |
| RemotePowerShellEnabled                 | True                     |
| UniversalOutlookEnabled                 | True                     |
| **Item**                                | **Configuration**        |
| Name                                    | ExchangeOnlineEssentials |
| ActiveSyncMailboxPolicy                 | --                       |
| ActiveSyncDebugLogging                  | False                    |
| ActiveSyncEnabled                       | False                    |
| ActiveSyncSuppressReadReceipt           | False                    |
| ECPEnabled                              | True                     |
| ImapEnabled                             | False                    |
| ImapUseProtocolDefaults                 | True                     |
| ImapMessagesRetrievalMimeFormat         | BestBodyFormat           |
| ImapEnableExactRFC822Size               | False                    |
| ImapProtocolLoggingEnabled              | False                    |
| ImapSuppressReadReceipt                 | False                    |
| ImapForceICalForCalendarRetrievalOption | False                    |
| MAPIEnabled                             | True                     |
| MapiHttpEnabled                         | --                       |
| MAPIBlockOutlookNonCachedMode           | False                    |
| MAPIBlockOutlookVersions                | --                       |
| MAPIBlockOutlookRpcHttp                 | False                    |
| PublicFolderClientAccess                | False                    |
| MAPIBlockOutlookExternalConnectivity    | False                    |
| OwaMailboxPolicy                        | OwaMailboxPolicy-Default |
| OWAEnabled                              | True                     |
| OWAforDevicesEnabled                    | True                     |
| PopEnabled                              | False                    |
| PopMessageDeleteEnabled                 | True                     |
| PopUseProtocolDefaults                  | True                     |
| PopMessagesRetrievalMimeFormat          | BestBodyFormat           |
| PopEnableExactRFC822Size                | False                    |
| PopProtocolLoggingEnabled               | False                    |
| PopSuppressReadReceipt                  | False                    |
| PopForceICalForCalendarRetrievalOption  | True                     |
| RemotePowerShellEnabled                 | True                     |
| UniversalOutlookEnabled                 | True                     |
| OutlookMobileEnabled                    | True                     |
| MacOutlookEnabled                       | True                     |
| EwsEnabled                              | True                     |
| EwsAllowOutlook                         | --                       |
| EwsAllowMacOutlook                      | --                       |
| EwsAllowEntourage                       | --                       |
| EwsApplicationAccessPolicy              | --                       |
| EwsAllowList                            | --                       |
| EwsBlockList                            | --                       |
| **Item**                                | **Configuration**        |
| Name                                    | ExchangeOnline           |
| ActiveSyncMailboxPolicy                 | --                       |
| ActiveSyncDebugLogging                  | False                    |
| ActiveSyncEnabled                       | False                    |
| ActiveSyncSuppressReadReceipt           | False                    |
| ECPEnabled                              | True                     |
| ImapEnabled                             | False                    |
| ImapUseProtocolDefaults                 | True                     |
| ImapMessagesRetrievalMimeFormat         | BestBodyFormat           |
| ImapEnableExactRFC822Size               | False                    |
| ImapProtocolLoggingEnabled              | False                    |
| ImapSuppressReadReceipt                 | False                    |
| ImapForceICalForCalendarRetrievalOption | False                    |
| MAPIEnabled                             | True                     |
| MapiHttpEnabled                         | --                       |
| MAPIBlockOutlookNonCachedMode           | False                    |
| MAPIBlockOutlookVersions                | --                       |
| MAPIBlockOutlookRpcHttp                 | False                    |
| PublicFolderClientAccess                | False                    |
| MAPIBlockOutlookExternalConnectivity    | False                    |
| OwaMailboxPolicy                        | OwaMailboxPolicy-Default |
| OWAEnabled                              | True                     |
| OWAforDevicesEnabled                    | True                     |
| PopEnabled                              | False                    |
| PopMessageDeleteEnabled                 | True                     |
| PopUseProtocolDefaults                  | True                     |
| PopMessagesRetrievalMimeFormat          | BestBodyFormat           |
| PopEnableExactRFC822Size                | False                    |
| PopProtocolLoggingEnabled               | False                    |
| PopSuppressReadReceipt                  | False                    |
| PopForceICalForCalendarRetrievalOption  | True                     |
| RemotePowerShellEnabled                 | True                     |
| UniversalOutlookEnabled                 | True                     |
| OutlookMobileEnabled                    | True                     |
| MacOutlookEnabled                       | True                     |
| EwsEnabled                              | True                     |
| EwsAllowOutlook                         | --                       |
| EwsAllowMacOutlook                      | --                       |
| EwsAllowEntourage                       | --                       |
| EwsApplicationAccessPolicy              | --                       |
| EwsAllowList                            | --                       |
| EwsBlockList                            | --                       |

### Mailbox attributes

The following describes the Mailbox attribute that have been configured.

`Exchange Admin Center > Recipients > Mailboxes > <username> > mailbox features`

- Litigation hold: `False` (configured as true only when required)

`Exchange Admin Center > Recipients > Mailboxes > <username> > mailbox usage`

- Exchange Mailbox Size: `100GB per user`

`Exchange Admin Center > Recipients > Mailboxes > Set default message size restrictions`

- Maximum size for sent messages (KB): `90MB`
- Maximum size for received messages (KB): `90MB`

`Exchange Admin Center > Recipients > Mailboxes > <username> > email address`

- Custom Primary SMTP Addressing: `FirstName.LastName@<Agency>.gov.au`
- Language: `English (en-au)`
- Default Time Zone: `GMT +10 (AUS Eastern Standard Time)`
- Exchange Online PowerShell
  - Disabled for standard users: `True`

### Authentication policy

Please note, authentication policies can be retrieved (or set) through Exchange Online PowerShell. If the setting for block legacy authentication is in the Microsoft Admin portal, a policy named **BlockBasic** is created but it does not turn off all the basic authentication parameters.

```powershell
Get-AuthenticationPolicy
```

To update the default `BlockBasic` policy, run the following PowerShell command.

```powershell
Set-AuthenticationPolicy -Identity "BlockBasic<number>" -AllowBasicAuthOutlookService:$false -AllowBasicAuthReportingWebServices:$false
```

If a new custom policy is created that blocks the specific parameters, then it can be set as a default for the whole organisation using the following PowerShell command.

```powershell
Set-OrganizationConfig -DefaultAuthenticationPolicy "Agency Authentication Policy"
```

The following table describes the Authentication Policy configuration settings for all implementation types.

| Item                                              | Configuration                |
| ------------------------------------------------- | ---------------------------- |
| Name                                              | Agency Authentication Policy |
| Allow Basic Authentication ActiveSync             | False                        |
| Allow Basic Authentication Autodiscover           | False                        |
| Allow Basic Authentication IMAP                   | False                        |
| Allow Basic Authentication MAPI                   | False                        |
| Allow Basic Authentication Offline AddressBook    | False                        |
| Allow Basic Authentication Outlook Service        | False                        |
| Allow Basic Authentication POP                    | False                        |
| Allow Basic Authentication Reporting Web Services | False                        |
| Allow Basic Authentication Rest                   | False                        |
| Allow Basic Authentication RPC                    | False                        |
| Allow Basic Authentication SMTP                   | False                        |
| Allow Basic Authentication Web Services           | False                        |
| Allow Basic Authentication PowerShell             | False                        |

### Outlook Web Access policy

Please note, Outlook Web Access policies can be retrieved (or set) through Exchange Online PowerShell. The policy object is Exchange Online out of box policy, that requires minimal edit.

```powershell
Get-OwaMailboxPolicy -identity OwaMailboxPolicy-Default
```

The following table describes the Outlook Web Access Policy configuration settings for all implementation types.

| Item                                                       | Configuration            |
| ---------------------------------------------------------- | ------------------------ |
| Name                                                       | OwaMailboxPolicy-Default |
| Wac Editing Enabled                                        | True                     |
| Print Without Download Enabled                             | True                     |
| OneDrive Attachments Enabled                               | True                     |
| Additional Storage Providers Available                     | False                    |
| Classic Attachments Enabled                                | True                     |
| Reference Attachments Enabled                              | True                     |
| Save Attachments to Cloud Enabled                          | True                     |
| External Image Proxy Enabled                               | False                    |
| Nps Surveys Enabled                                        | False                    |
| Message Previews Disabled                                  | False                    |
| Personal Account Calendars Enabled                         | False                    |
| Teamsnap Calendars Enabled                                 | False                    |
| Bookings Mailbox Creation Enabled                          | True                     |
| Project Moca Enabled                                       | False                    |
| Direct File Access On Public Computers Enabled             | False                    |
| Direct File Access On Private Computers Enabled            | True                     |
| Wac Viewing On Public Computers Enabled                    | True                     |
| Wac Viewing On Private Computers Enabled                   | True                     |
| Force Wac Viewing First On Public Computers                | False                    |
| Force Wac Viewing First On Private Computers               | False                    |
| Action For Unknown File And MIME Types                     | Allow                    |
| Feedback Enabled                                           | False                    |
| Phonetic Support Enabled                                   | False                    |
| Default Client Language                                    | 0                        |
| Use GB18030                                                | False                    |
| Use ISO885915                                              | False                    |
| Outbound Charset                                           | AutoDetect               |
| Global Address List Enabled                                | True                     |
| Organization Enabled                                       | True                     |
| Explicit Logon Enabled                                     | True                     |
| OWA Light Enabled                                          | True                     |
| Delegate Access Enabled                                    | True                     |
| IRM Enabled                                                | True                     |
| Calendar Enabled                                           | True                     |
| Contacts Enabled                                           | True                     |
| Tasks Enabled                                              | True                     |
| Journal Enabled                                            | False                    |
| Notes Enabled                                              | True                     |
| On Send Addins Enabled                                     | True                     |
| Reminders And Notifications Enabled                        | True                     |
| Premium Client Enabled                                     | True                     |
| Spell Checker Enabled                                      | True                     |
| Classic Attachments Enabled                                | True                     |
| Search Folders Enabled                                     | True                     |
| Signatures Enabled                                         | True                     |
| Theme Selection Enabled                                    | True                     |
| UM Integration Enabled                                     | True                     |
| WSS Access On Public Computers Enabled                     | True                     |
| WSS Access On Private Computers Enabled                    | True                     |
| Change Password Enabled                                    | True                     |
| ActiveSync Integration Enabled                             | False                    |
| All Address Lists Enabled                                  | True                     |
| Rules Enabled                                              | True                     |
| Public Folders Enabled                                     | False                    |
| Recover Deleted Items Enabled                              | True                     |
| Instant Messaging Enabled                                  | True                     |
| Text Messaging Enabled                                     | True                     |
| Force Save Attachment Filtering Enabled                    | False                    |
| Silverlight Enabled                                        | True                     |
| Instant Messaging Type                                     | None                     |
| Display Photos Enabled                                     | True                     |
| Set Photo Enabled                                          | True                     |
| Places Enabled                                             | False                    |
| Weather Enabled                                            | True                     |
| Local Events Enabled                                       | False                    |
| Interesting Calendars Enabled                              | False                    |
| Allow Copy Contacts To Device Address Book                 | True                     |
| Predicted Actions Enabled                                  | False                    |
| User Diagnostic Enabled                                    | False                    |
| Facebook Enabled                                           | False                    |
| LinkedIn Enabled                                           | False                    |
| Wac External Services Enabled                              | True                     |
| Wac OMEX Enabled                                           | False                    |
| Report Junk Email Enabled                                  | True                     |
| Group Creation Enabled                                     | False                    |
| Skip Create Unified Group Custom SharePoint Classification | True                     |
| User Voice Enabled                                         | False                    |
| Satisfaction Enabled                                       | False                    |
| Outlook Beta Toggle Enabled                                | False                    |

### Mailbox archive

For Hybrid implementation types, the Archive is configured using the On-Premises Exchange Administrator Console or PowerShell.

`Exchange Admin Center > recipients > mailboxes > <username> > mailbox features`

```powershell
Enable-RemoteMailbox -Identity "Jane Smith" -Archive
```

For Cloud-native implementation types, the Archive is configured using the Exchange Online Admin Center or Exchange Online PowerShell.

`Exchange Online Admin Center > recipients > mailboxes > <username> > mailbox features`

```powershell
Enable-Mailbox "Jane Smith" -Archive
```

The following table describes the mailbox archive settings for all implementation types.

| Item                                                         | Configuration |
| ------------------------------------------------------------ | ------------- |
| Archiving                                                    | Enabled       |
| Auto-Expanding Archive (via PowerShell command in Exchange Online) | Enabled       |
| Archive Configuration                                        | Configured    |

The following PowerShell command enables the Auto Expanding Archive using the Exchange Online module.

```powershell
Set-OrganizationConfig -AutoExpandingArchive
```

### Mailbox auditing

User Mailbox and Shared Mailbox audit actions are set using the global defaults, this avoids having a per mailbox audit configuration. For more information on each audit type in Exchange Online and additional per-mailbox configuration options, see [Manage mailbox auditing](https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide#mailbox-actions-for-user-mailboxes-and-shared-mailboxes).

Mailbox auditing settings can be set and retrieved using Exchange Online PowerShell.

```powershell
Set-OrganizationConfig -AuditDisabled $true
```

The following table describes the mailbox archive settings for all implementation types. 

| Item                | Configuration                                                |
| ------------------- | ------------------------------------------------------------ |
| Mailbox Auditing    | Enabled for organisation by default                          |
| Centralized Logging | Not configured<br>E5 subscriptions log search is via the Microsoft 365 Purview. |

### Mail flow rules

The following mail flow rules have been configured for all implementation types.

`Exchange Online Admin Centre > Mail flow > Rules`

#### Outgoing X-Protective-Marker (multiple rules)

Note 1, the `x-protective-marking` rules listed here are not exhaustive and are an example that can be used for each classification used within the Agency.

Note 2, as of February 2022 the ability to add the `ORIGIN=user@agency.gov.au` parameter is not possible using a transport rule. If the Agency has the ability to transform mail messages using a gateway appliance then this is the current recommended approach for updating header values.

To find the `MSIP_Label` "guid" IDs for each sensitivity label use the [Security & Compliance Center PowerShell Modules](https://docs.microsoft.com/en-us/powershell/exchange/scc-powershell?view=exchange-ps).

```powershell
Connect-IPPSSession -UserPrincipalName <admin>@<agency>.onmicrosoft.com

Get-label | where{$_.Name -eq "U"} |select name,guid
```

- If the message header includes:  `msip_labels` header contains `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true`
- Take the following actions: Set the message header with this value: `X-Protective-Marking` to the value `VER=2018.4, NS=gov.au, SEC=<CLASSIFICATION>, CAVEAT=<CAVEAT>, ACCESS=<IMM>`
- HeaderContainsMessageHeader: `msip_labels`
- HeaderContainsWords: `MSIP_Label_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX_Enabled=true`
- Mode: `Enforce`
- Name: `Outgoing X-Protective-Marker <Classification>`
- Priority: `0`
- State: `Enabled`

#### Apply Disclaimer

Note, the disclaimer text is provided as an example only and is typically unique across Agencies.

- Apply this rule if: The recipient is located `Outside the organization`
- Do the following actions: Append the message with the disclaimer
  ```
  '<br>
  <br>
  <p style="font-size:8pt; line-height:10pt; font-family: 'Cambria','times roman',serif;">The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</p>'. 
  ```
- If the disclaimer can't be applied, reject the message.
- ExceptIfSubjectMatchesPatterns: -
- FromScope: -
- HeaderContainsMessageHeader: -
- HeaderContainsWords: -
- Mode: `Enforce`
- Name: `Disclaimer`
- PrependSubject: -
- Priority: `1`
- SentToScope: `NotInOrganization`
- State: `Enabled`

### Journaling

`Exchange Online Admin Centre (Classic) > compliance management > journal rules` is not configured for all implementation types.

### Mailbox retention

Existing retention configuration for hybrid implementations can be transferred to Exchange Online during the hybrid wizard using the [Organization configuration transfer](https://docs.microsoft.com/en-us/exchange/org-config-transfer-attributes/org-config-transfer-attributes) option.

`Exchange Online Admin Centre (Classic)> compliance management > retention polices`

The following table describes the Mailbox Retention settings within the "Default MRM Policy" for all implementation types.

| Name                                      | Type              | Retention Period | Retention Action       |
| ----------------------------------------- | ----------------- | ---------------- | ---------------------- |
| Never Delete                              | Personal          | Unlimited        | DeleteAndAllowRecovery |
| Recoverable Items 14 days move to archive | Recoverable items | 14 days          | Archive                |
| Junk Email                                | JunkEmail         | 30 days          | DeleteAndAllowRecovery |
| Deleted Items                             | DeletedItems      | 30 days          | DeleteAndAllowRecovery |
| Default 2 year move to archive            | All               | 730 days         | Archive                |
| Personal 1 year move to archive           | Personal          | 365 days         | Archive                |
| Personal never move to archive            | Personal          | Unlimited        | Archive                |
| 1 Week Delete                             | Personal          | 7 days           | DeleteAndAllowRecovery |
| 1 Month Delete                            | Personal          | 30 days          | DeleteAndAllowRecovery |
| Personal 5 year move to archive           | Personal          | 1825 days        | Archive                |
| 6 Month Delete                            | Personal          | 180 days         | DeleteAndAllowRecovery |
| 1 Year Delete                             | Personal          | 365 days         | DeleteAndAllowRecovery |
| 5 Year Delete                             | Personal          | 1825 days        | DeleteAndAllowRecovery |

### Shared mailboxes and resource mailboxes

`Exchange Online Admin Centre > Recipients > Groups`

- Display name: `grp-<Agency Acronym>O365-Outlook`
  - Group email address: `grp-<Agency Acronym>0365-outlook@<Agency>.gov.au`
  - Privacy: `Private – Only members can see content`
  - Language: `English (Australia)`
  - Subscribe new members: `Enabled`
  - Let people outside the organization send email to the group: `Disabled`
  - Owners: `<Agency Owner> (Admin)`
  - Members: `<Agency Owner> (Admin)`
  - Delivery Management
    - Accept messages from: `All senders`
    - Reject message from: `No senders`
  - Group Delegation
    - Send As: `None`
    - Send on Behalf: `None`
- Display name: `Grp-<Agency Acronym>O365-Teams`
  - Group email address: `Grp-<Agency Acronym>0365-Teams@<Agency>.gov.au`
  - Privacy: `Private – Only members can see content`
  - Language: `English (Australia)`
  - Subscribe new members: `Disabled`
  - Let people outside the organization send email to the group: `Disabled`
  - Owners: `<Agency Owner> (Admin)`
  - Members: `<Agency Owner> (Admin)`
  - Delivery Management
    - Accept messages from: `All senders`
    - Reject message from: `No senders`
  - Group Delegation
    - Send As: `None`
    - Send on Behalf: `None

### Address lists

Existing address list configuration for hybrid implementations can be transferred to Exchange Online during the hybrid wizard using the [Organization configuration transfer](https://docs.microsoft.com/en-us/exchange/org-config-transfer-attributes/org-config-transfer-attributes) option.

Please note, address lists can be retrieved (or set) through Exchange Online PowerShell. The *'Address Lists'* role within Exchange Online is required, for the account used to view or update Address lists.

```powershell
Get-AddressList -identity 'Address List Name'
```

The following table describes the Address List configuration settings for all implementation types. 

| Item                        | Configuration                                                |
| --------------------------- | ------------------------------------------------------------ |
| All Contacts                | `((Alias -ne $null) -and (((ObjectCategory -like 'person') -and (ObjectClass -eq 'contact'))))` |
| All Distribution Lists      | `((Alias -ne $null) -and (ObjectCategory -like 'group'))`    |
| All Rooms                   | `((Alias -ne $null) -and (((RecipientDisplayType -eq 'ConferenceRoomMailbox') -or (RecipientDisplayType -eq 'SyncedConferenceRoomMailbox'))))` |
| All Users                   | `((Alias -ne $null) -and (((((((ObjectCategory -like 'person') -and (ObjectClass -eq 'user') -and (-not(Database -ne $null)) -and (-not(ServerLegacyDN -ne $null)))) -or (((ObjectCategory -like 'person') -and (ObjectClass -eq 'user') -and (((Database -ne $null) -or (ServerLegacyDN -ne $null))))))) -and (-not(RecipientTypeDetailsValue -eq 'GroupMailbox')))))` |
| All Groups                  | `((Alias -ne $null) -and (RecipientTypeDetailsValue -eq 'GroupMailbox'))` |
| Public Folders              | `((Alias -ne $null) -and (ObjectCategory -like 'publicFolder'))` |
| Offline Global Address List | `((Alias -ne $null) -and (((((((((((ObjectClass -eq 'user') -or (ObjectClass -eq 'contact'))) -or (ObjectClass -eq 'msExchSystemMailbox'))) -or (ObjectClass -eq 'msExchDynamicDistributionList'))) -or (ObjectClass -eq 'group'))) -or (ObjectClass -eq 'publicFolder'))))` |

### Distribution lists

`Exchange Online Admin Centre > recipients > groups > <three dots> > Configure group naming policy`

- Group Naming Policy: `<as per agency group naming standard>`
- Blocked words: `None`

## Exchange Online Protection

The ABAC settings for the Agency Exchange Online Protection instance can be found below. This includes the Connection Filtering, Anti-Malware, Policy Filtering, and Content Filtering configuration. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Anti-spam

`Microsoft 365 security > Policies & rules > Threat policies > Anti-spam`

The following table describes the Connection filter policy configuration settings for per implementation type.

| Implementation | Name                               | IP Allow List                                          | IP Block List | Enable Safe List | Directory Based Edge Block Mode |
| -------------- | ---------------------------------- | ------------------------------------------------------ | ------------- | ---------------- | ------------------------------- |
| Cloud-native   | Connection filter policy (Default) |                                                        |               | True             | Default                         |
| Hybird         | Connection filter policy (Default) | `<agency smtp gateway IP adddresses for skip listing>` |               | True             | Default                         |

The following tables describe the Anti-spam policies for all implementation types.

| Item                                 | Configuration                                                |
| ------------------------------------ | ------------------------------------------------------------ |
| Name                                 | Anti-spam inbound policy (Default)                           |
| Bulk email spam action               | 6                                                            |
| Increase spam score                  | Image links to remote websites: On<br>Numeric IP address in URL: On<br>URL redirect to other port: On<br>Links to .biz or .info websites: On |
| Mark as spam                         | Empty messages: On<br>Embedded tags in HTML: Off<br>JavaScript or VBScript in HTML: On<br>Form tags in HTML: Off<br>Frame or iframe tags in HTML: Off<br>Web bugs in HTML: On<br>Object tags in HTML: On<br>Sensitive words: On<br>SPF record hard fail: On<br>Sender ID filtering hard fail: On<br>Backscatter: On |
| Spam                                 | Move message to Junk email folder                            |
| High confidence spam                 | Quarantine message                                           |
| Phishing                             | Quarantine message                                           |
| Bulk                                 | Move message to Junk email folder                            |
| Retain spam in quarantine for this many days | 15                                                   |
| Enable spam safety tips              | Checked                                                      |
| Enable zero-hour auto purge (ZAP)    | Checked                                                      |
| Enable for phishing messages         | Checked                                                      |
| Enable for spam messages             | Checked                                                      |
| Enable end-user spam notifications   | Checked                                                      |
| Send end-user spam notifications every (days) | 3                                                   |

| Item                                 | Configuration                                                |
| ------------------------------------ | ------------------------------------------------------------ |
| Name                                 | Anti-spam outbound policy (Default)                          |
| Set an external message limit        | 0                                                            |
| Set an internal message limit        | 0                                                            |
| Set a daily message limit            | 0                                                            |
| Restriction placed on users who reach the message limit | Restrict the user from sending mail until the following day |
| Automatic forwarding rules           | Automatic - System-controlled                                |
| Notifications                        | Unchecked                                                    |

### Anti-malware

`Microsoft 365 security > Policies & rules > Threat policies > Anti-malware`

The following table describes the Malware Filter configuration settings for all implementation types.

| Item                                       | Configuration                       |
| ------------------------------------------ | ----------------------------------- |
| Name                                       | Default (Default)                   |
| Enable the common attachements filter      | Checked                             |
| Filter file types                          | ace,ani,app,exe,jar,reg,scr,vbe,vbs |
| Enable zero-hour auto purge for malware    | Checked                             |
| Admin notifications (internal senders)     | Checked                             |
| Admin notifications (external senders)     | Checked                             |       
| Admin email address                        | Agency defined                      |       

## Microsoft Teams

The ABAC settings for Microsoft Teams can be found below for all implementation types. This includes the Client Configuration, Channels Policy, Calling Policy, Meetings Policy, Messaging Policy, and Guest Meeting/Calling/Messaging configuration.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Client configuration

`Microsoft Teams admin center > Teams > Teams settings`

The following table describes the Teams configuration settings for all implementation types.

| Item                                                         | Configuration                          |
| ------------------------------------------------------------ | -------------------------------------- |
| Suggested feeds can appear in a user's activity feed         | On                                     |
| Tags are managed by                                          | Team Owners                            |
| Let team owners override who can manage tags                 | On                                     |
| Let custom tags to be created                                | On                                     |
| Allow Shifts app to apply tags                               | On                                     |
| Allow users to send emails to a channel email address        | On                                     |
| Accept channel email from these SMTP domains                 | Agency defined                         |
| Citrix files                                                 | Off                                    |
| DropBox                                                      | Off                                    |
| Box                                                          | Off                                    |
| Google Drive                                                 | Off                                    |
| Egnyte                                                       | Off                                    |
| Show Organization tab in chats                               | On                                     |
| Require a secondary form of authentication to access meeting content | No access                      |
| Set Content PIN                                              | Required for outside scheduled meeting |
| Surface Hub accounts can send mails                          | On                                     |
| Scope directory search using an Exchange address book policy | On                                     |
| Role-base chat permissions                                   | Off                                    |

### Teams policy

`Microsoft Teams admin center > Teams > Teams policies`

The following table describes the Teams policy configuration settings for all implementation types.

| Item                    | Configuration             |
| ----------------------- | ------------------------- |
| Name                    | Global (Org-wide default) |
| Description             | Not configured            |
| Create private channels | True                      |

### Teams apps

`Microsoft Teams admin center > Teams apps > Permission policies`

The following table describes the Teams apps configuration settings for all implementation types.

| Item                    | Configuration             |
| ----------------------- | ------------------------- |
| Name                    | Global (Org-wide default) |
| Description             | Not configured            |
| Microsoft apps          | Allow all apps            |
| Third-party apps        | Block all apps            |
| Custom apps             | Block all apps            |

### Calling policy

`Microsoft Teams admin center > Voice > Calling policies`

The following tables describes the Teams Calling policy configuration settings for all implementation types.

Note, policies that are not configurable are not included below.

| Item                                           | Configuration                            |
| ---------------------------------------------- | ---------------------------------------- |
| Name                                           | Global                                   |
| Description                                    | Not Configured                           |
| Make private calls                             | On                                       |
| Cloud recording for calling                    | Off                                      |
| Call forwarding and simultaneous ringing to people in your organization | On              |
| Call forwarding and simultaneous ringing to external phone numbers | Off                  |
| Voicemail is available for routing inbound calls | Enabled                                |
| Inbound calls can be routed to call groups     | On                                       |
| Delegation for inbound and outbound calls      | On                                       |
| Prevent toll bypass and send calls through the PSTN | Off                                 |
| Music on hold for PSTN callers                 | Enabled                                  |
| Busy on busy when in a call                    | Enabled                                  |
| Web PSTN calling                               | Off                                      |
| Real-time captions in Teams calls              | On                                       |
| Automatically answer incoming meeting invites  | Off                                      |
| SIP devices can be used to perform calling     | Off                                      |

### Meeting policy

`Microsoft Teams Admin center > Meetings > Meeting policies`

The following table describes the Teams Meeting policy configuration settings for all implementation types.

Note, policies that are not configurable are not included below.

| Item                                            | Configuration                                                |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Name                                            | Global                                                       |
| Description                                     | Not Configured                                               |
| Meet now in channels                            | On                                                           |
| Outlook add-in                                  | On                                                           |
| Channel meeting scheduling                      | On                                                           |
| Private meeting scheduling                      | On                                                           |
| Engagement report                               | Enabled                                                      |
| Meeting registration                            | On                                                           |
| Who can register                                | Everyone                                                     |
| Mode for IP audio                               | Outgoing and incoming audio enabled                          |
| Mode for IP video                               | Outgoing and incoming video enabled                          |
| IP video                                        | On                                                           |
| Local broadcasting                              | Off                                                          |
| Media bit rate (Kbs)                            | 50000                                                        |
| Network configuration lookup                    | Off                                                          |
| Transcription                                   | Off                                                          |
| Cloud recording                                 | On                                                           |
| Meetings automatically expire                   | On                                                           |
| Default expiration time                         | 60                                                           |
| Store recordings outside of your country or region | Off                                                       |
| Screen sharing mode                             | Entire screen                                                |
| Allow a participant to give or request control  | On                                                           |
| Allow an external participant to give or request control | Off                                                 |
| PowerPoint sharing                              | On                                                           |
| Whiteboard                                      | On                                                           |
| Shared notes                                    | On                                                           |
| Select video filters                            | All filters                                                  |
| Let anonymous people join a meeting             | Off                                                          |
| Let anonymous people start a meeting            | Off                                                          |
| Roles that have presenter rights in meetings    | Everyone, but user can override                              |
| Automatically admit people                      | People in my organization                                    |
| Allow dial-in users to bypass the lobby         | Off                                                          |
| Meet now in private meetings                    | On                                                           |
| Live captions                                   | Not enabled but the user can override                        |
| Chat in meetings                                | Enabled                                                      |

### Messaging policy

`Microsoft Teams Admin center > Messaging policies`

The following table describes the Teams Messaging policy configuration settings for all implementation types.

| Item                               | Configuration                 |
| ---------------------------------- | ----------------------------- |
| Name                               | Global                        |
| Description                        | Global Teams Messaging Policy |
| Owners can delete sent messages    | On                            |
| Delete sent messages               | On                            |
| Edit sent messages                 | On                            |
| Read receipts                      | User controlled               |
| Chat                               | On                            |
| Giphy in conversations             | Off                           |
| Memes in conversations             | Off                           |
| Stickers in conversations          | Off                           |
| URL previews                       | On                            |
| Translate messages                 | Off                           |
| Immersive reader for messages      | On                            |
| Send urgent messages using priority notifications | On             |
| Create voice messages              | Allowed in chats and channels |
| On mobile devices, display favorite channels above recent chats | Not enabled |
| Remove users from group chats      | On                            |
| Suggested replies                  | Off                           |
| Chat permission role               | Restricted permissions        |
| Users with full chat permissions can delete any message | Off      |

### Live events policies

`Microsoft Teams admin center > Meetings > Live events policies`

The following table describes the Teams Live events policy configuration settings for all implementation types.

| Item                               | Configuration                |
| ---------------------------------- | ---------------------------- |
| Name                               | Global (Org-wide default)    |
| Live events scheduling             | On                           |
| Transcription for attendees        | Off                          |
| Who can join scheduled live events | Everyone in the organization |
| Who can record an event            | Always record                |

### External access settings

`Microsoft Teams admin center > Users > External access`

The following table describes the External access configuration settings for all implementation types.

| Item                                                         | Configuration                               |
| ------------------------------------------------------------ | ------------------------------------------- |
| Teams and Skype for Business users in external organizations | Allow only specific external domains        |
| Add a domain (Allowed domains)                               | *Agency allowed list of domains*            |
| Allow users in my organization to communicate with Skype users. | On                                       |

### Guest access settings

`Microsoft Teams Admin center > Org-wide settings > Guest access`

The following table describes the External access configuration settings for all implementation types.

| Item                        | Configuration |
| --------------------------- | ------------- |
| Allow guest access in Teams | On            |
| Make private calls          | On            |
| IP video                    | On            |
| Screen sharing mode         | Entire screen |
| Meet Now                    | On            |
| Edit sent messages          | On            |
| Delete sent messages        | On            |
| Chat                        | On            |
| Giphy in conversations      | Off           |
| Memes in conversations      | Off           |
| Stickers in conversations   | Off           |
| Immersive reader for messages | On          |

## SharePoint Online & OneDrive

The ABAC settings for the Agency SharePoint Online and OneDrive instances can be found below for all implementation types. This includes the Sharing configuration, Access Control and SharePoint & OneDrive settings. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Sharing

`SharePoint admin center > Policies > Sharing > External Sharing`

- Content can be shared with:
  ```
  SharePoint: New and existing guests
  OneDrive: Only people in your organization
  ```
- Limit external sharing by domain:
  ```
  <Agency>.gov.au
  <other trusted Agencies>
  ```
- Allow only users in specific security groups to share externally: `False`
- Guests must sign in using the same account to which sharing invitations are sent: `True`
- Allow guests to share items they don’t own: `False`
- Guest access to a site or OneDrive will expire automatically after this many minutes: `Not configured`
- People who use a verification code must reauthenticate after this many days: `Not configured`

`SharePoint admin center > Policies > Sharing > File and Folder links`

- Default link type: `Specific people (only the people the user specifies)`
- Default link permission : `Edit`

`SharePoint admin center > Policies > Sharing > Other settings`

- Show owners the names of people who viewed their files in OneDrive: `True`
- Let site owners choose to display the names of people who viewed files or pages in SharePoint: `True`
- Use short links for sharing files and folders : `True`

### Access control

`SharePoint admin center > Policies > Access control > Unmanaged devices`

- Allow access from unmanaged devices: `Allow full access from desktop apps, mobile apps, and the web`

Note, restrictions for unmanaged devices are defined by Conditional Access policies as described in the Platform ABAC.

`SharePoint admin center > Policies > Access control > Idle session sign-out`

- Sign out inactive users automatically: `On`
- Sign out users after:: `1 hours`
- Give users this much notice before signing them out: `5 minutes`

`SharePoint admin center > Policies > Access control > Network location`

- Allow access only from specific IP address ranges: `Off`

`SharePoint admin center > Policies > Access control > Apps that don’t use modern authentication`

- Allow or block access from applications that don’t user modern authentication: `Block access`

### SharePoint settings

`SharePoint admin center > Settings > SharePoint > Default admin center`

- Default admin center: `New SharePoint admin center`

`SharePoint admin center > Settings > SharePoint > Notifications`

- Allow notifications: `True`

`SharePoint admin center > Settings > SharePoint > Pages`

- Allow users to create new modern pages: `True`
- Allow commenting on modern pages : `True`

`SharePoint admin center > Settings > SharePoint > Site creation`

- Let users create sites from the SharePoint start page and OneDrive: `False`
- Create team sites under: `/sites/`
- Default time zone : `(UTC+10:00) Canberra, Melbourne, Sydney`

`SharePoint admin center > Settings > SharePoint > Site storage limits`

- Site storage limits: `Automatic`

### OneDrive settings

`SharePoint admin center > Settings > OneDrive > Notifications`

- Allow notifications: `True`

`SharePoint admin center > Settings > OneDrive > Retention`

- Days to retain a deleted user's OneDrive: `365`

`SharePoint admin center > Settings > OneDrive > Default storage limit`

- Default storage limit : `1024 GB`

`SharePoint admin center > Settings > OneDrive > Sync`

- Show the Sync button on the OneDrive website: `True`
- Allow syncing only on computers joined to specific domains: `False`
- Block upload of specific file types: `False`

## Security and compliance

The ABAC settings for the Agency Office 365 Security and Compliance instance can be found below. This includes the Alerts, Labels, Data Loss Prevention, Retention Policies, Audit Logging, and Customer Key configuration. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Audit logging

`Microsoft 365 compliance > Audit > Audit retention policies`

- Enabled: `True`
- Policy name: `10 year audit log`
- Policy description: `Retains all audit log records for 10 years`
- Record Type: `All`
- Duration: `10 years`
- Priority: `1`

### Retention policies

Note, retention policies should not be used in place of an adequate backup solution.

`Microsoft 365 compliance > Information governance > Labels`

The following table describes the Retention labels configuration settings for all implementation types.

| Item                                  | Configuration                                                |
| ------------------------------------- | ------------------------------------------------------------ |
| Name                                  | Teams Channel messages Indefinite Hold                       |
| Status                                | On                                                           |
| Policy Name                           | Teams Channel Message Indefinite Hold                        |
| Description                           | Teams Channel Message Indefinite Hold                        |
| Applies to content in these locations | Teams channel messages                                       |
| Retention period                      | Keep content forever                                         |
| Turn on preservation lock             | No                                                           |
| Name                                  | Microsoft 365 groups Indefinite Hold                         |
| Status                                | On                                                           |
| Policy Name                           | Office 365 Group Indefinite Hold                             |
| Description                           | Office 365 Group Indefinite Hold                             |
| Applies to content in these locations | Microsoft 365 groups – All Groups                            |
| Retention period                      | Keep content forever                                         |
| Turn on preservation lock             | No                                                           |
| Name                                  | Exchange Indefinite Hold                                     |
| Status                                | On                                                           |
| Policy Name                           | Exchange Indefinite Hold                                     |
| Description                           | Exchange Indefinite Hold                                     |
| Applies to content in these locations | Exchange email – All users included<br>Exchange Public Folders |
| Retention period                      | Keep content forever                                         |
| Turn on preservation lock             | No                                                           |
| Name                                  | Teams chats Indefinite Hold                                  |
| Status                                | On                                                           |
| Policy Name                           | Teams chats Indefinite Hold                                  |
| Description                           | Teams chats Indefinite Hold                                  |
| Applies to content in these locations | Teams chats messages – All users included                    |
| Retention period                      | Keep content forever                                         |
| Turn on preservation lock             | No                                                           |
| Name                                  | OneDrive Indefinite Hold                                     |
| Status                                | On                                                           |
| Policy Name                           | OneDrive Indefinite Hold                                     |
| Description                           | OneDrive Indefinite Hold                                     |
| Applies to content in these locations | OneDrive accounts - All                                      |
| Retention period                      | Keep content forever                                         |
| Turn on preservation lock             | No                                                           |
| Name                                  | SharePoint Indefinite Hold                                   |
| Status                                | On                                                           |
| Policy Name                           | SharePoint Indefinite Hold                                   |
| Description                           | SharePoint Indefinite Hold                                   |
| Applies to content in these locations | SharePoint Sites – All Sites                                 |
| Retention period                      | Keep content forever                                         |
| Turn on preservation lock             | No                                                           |

### Retention labels

`Microsoft 365 compliance > Information governance > Labels`

Not configured.

### Sensitivity labels

`Microsoft 365 compliance > Information protection > Labels`

The following tables describe the sensitivity label configuration settings for all implementation types. Only create and publish labels that are required for the agency.

The sensitivity labels in this ABAC can be deployed through M365DSC automation. The process can be found within the [automation](../../blueprint/automation) guide. 

Note, labels **OFFICIAL Sensitive** and **PROTECTED** have a number of sub-labels to cater for DLMs in the PSPF. Both main labels will be presented as a group object but are not selectable as a user at the top level. They will also appear as a sub-label that is selectable under the group. This ensures that the sensitivity label selection is easier when dealing with a large number of DLM combinations. The following figure is an example of the configuration panel in the Microsoft 365 compliance portal.

![M365 compliance labels](../img/abac/sensitivity-labels.png#center)

#### UNOFFICIAL

The following table lists the sensitivity label configuration for UNOFFICIAL.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | U                                                            |
| Display Name          | UNOFFICIAL                                                   |
| Description for users | No damage. This information does not form part of official duty. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: UNOFFICIAL<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: UNOFFICIAL<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | N/A                                                          |

#### OFFICIAL

The following table lists the sensitivity label configuration for OFFICIAL.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OFFICIAL                                                     |
| Display Name          | OFFICIAL                                                     |
| Description for users | No or insignificant damage. This is the majority of routine information. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | N/A                                                          |

#### OFFICIAL: Sensitive (Group)

The following table lists the sensitivity label configuration for OFFICIAL Sensitive. This top-level object forms the grouping that all OFFICIAL Sensitive labels are a sub label for.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS group                                                     |
| Display Name          | OFFICIAL Sensitive                                           |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | N/A                                                          |

#### OFFICIAL: Sensitive

The following table lists the sensitivity label configuration for OFFICIAL Sensitive.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS                                                           |
| Display Name          | OFFICIAL Sensitive                                           |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//Legal-Privilege.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS LP                                                        |
| Display Name          | Legal-Privilege                                              |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive // Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//Legislative-Secrecy

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS LS                                                        |
| Display Name          | Legislative Secrecy                                          |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//Personal-Privacy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS PP                                                        |
| Display Name          | Personal-Privacy                                             |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive //Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//NATIONAL CABINET.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS NC                                                        |
| Display Name          | NATIONAL CABINET                                             |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//NATIONAL CABINET//Legal-Privilege.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS NC LP                                                     |
| Display Name          | NATIONAL CABINET - Legal-Privilege                           |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//NATIONAL CABINET//Legislative-Secrecy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | OS NC LS                                                     |
| Display Name          | NATIONAL CABINET - Legislative-Secrecy                       |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

The following table lists the sensitivity sub label configuration for OFFICIAL: Sensitive//NATIONAL CABINET//Personal-Privacy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | NATIONAL CABINET - Personal-Privacy                          |
| Description for users | Low to medium business impact. Limited damage <br>to an individual, organisation or government generally if compromised |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: OFFICIAL: Sensitive//NATIONAL CABINET//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | OS group                                                     |

#### PROTECTED (Group)

The following table lists the sensitivity label configuration for PROTECTED. This top-level object forms the grouping that all PROTECTED labels are a sub label for.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P group                                                      |
| Display Name          | PROTECTED                                                    |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | N/A                                                          |

The following table lists the sensitivity label configuration for PROTECTED.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P                                                            |
| Display Name          | PROTECTED                                                    |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//Legal-Privilege.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P LP                                                         |
| Display Name          | Legal-Privilege                                              |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//Legal-Privilege <br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//Legislative-Secrecy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P LS                                                         |
| Display Name          | Legislative-Secrecy                                          |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//Personal-Privacy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P PP                                                         |
| Display Name          | Personal-Privacy                                             |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//NATIONAL CABINET.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | NATIONAL CABINET                                             |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//NATIONAL CABINET<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//NATIONAL CABINET<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//NATIONAL CABINET//Legal-Privilege.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P NC LP                                                      |
| Display Name          | NATIONAL CABINET - Legal-Privilege                           |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//NATIONAL CABINET//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//NATIONAL CABINET//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//NATIONAL CABINET//Legislative-Secrecy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P NC LS                                                      |
| Display Name          | NATIONAL CABINET - Legislative-Secrecy                       |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//NATIONAL CABINET//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//NATIONAL CABINET//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//NATIONAL CABINET//Personal-Privacy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P NC PP                                                      |
| Display Name          | NATIONAL CABINET - Personal-Privacy                          |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//NATIONAL CABINET//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//NATIONAL CABINET//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//CABINET.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P C                                                          |
| Display Name          | CABINET                                                      |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//CABINET<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//CABINET<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//CABINET//Legal-Privilege.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P C LP                                                       |
| Display Name          | CABINET - Legal-Privilege                                    |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//CABINET//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//CABINET//Legal-Privilege<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//CABINET//Legislative-Secrecy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P C LS                                                       |
| Display Name          | PROTECTED//CABINET//Legislative-Secrecy                      |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//CABINET//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//CABINET//Legislative-Secrecy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

The following table lists the sensitivity sub label configuration for PROTECTED//CABINET//Personal-Privacy.

| Item                  | Configuration                                                |
| --------------------- | ------------------------------------------------------------ |
| Name                  | P C PP                                                       |
| Display Name          | CABINET - Personal-Privacy                                   |
| Description for users | High business impact. Damage to the national<br> interest, organisations or individuals. |
| Scope                 | Files & Emails                                               |
| Protection Settings   | Mark the content of files: Checked<br>Content marking: Checked<br>Apply a header: Checked<br>Customize text: PROTECTED//CABINET//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center<br>Apply a footer: Checked<br>Customize text: PROTECTED//CABINET//Personal-Privacy<br>Font site: 12<br>Font color: Red<br>Align text: Center |
| Sub Label of          | P group                                                      |

### Sensitivity label policy

Please note, the user may only need to publish the sensitivity labels (sensitivity, security classification, information management markers and caveats) that are required for the organisation or agency.

`Microsoft 365 compliance > Information protection > Label policies`

The following table lists the Sensitivity label policy configuration for all implementation types.

| Item             | Configuration                                                |
| ---------------- | ------------------------------------------------------------ |
| Name             | Sensitivity labels policy                                    |
| Description      | Default sensitivity labels based on [PSPF infosec document](https://www.protectivesecurity.gov.au/system/files/2021-11/pspf-policy-8-sensitive-and-classified-information.pdf) |
| Published Labels | UNOFFICIAL<br/>OFFICIAL<br/>OFFICIAL Sensitive<br/>OFFICIAL Sensitive/OFFICIAL Sensitive<br/>OFFICIAL Sensitive/Legal-Privilege<br/>OFFICIAL Sensitive/Legislative-Secrecy<br/>OFFICIAL Sensitive/Personal-Privacy<br/>OFFICIAL Sensitive/NATIONAL CABINET<br/>OFFICIAL Sensitive/NATIONAL CABINET - Legal-Privilege<br/>OFFICIAL Sensitive/NATIONAL CABINET - Legislative-Secrecy<br/>OFFICIAL Sensitive/NATIONAL CABINET - Personal-Privacy<br/>PROTECTED<br/>PROTECTED/PROTECTED<br/>PROTECTED/Legal-Privilege<br/>PROTECTED/Legislative-Secrecy<br/>PROTECTED/Personal-Privacy<br/>PROTECTED/NATIONAL CABINET<br/>PROTECTED/NATIONAL CABINET - Legal-Privilege<br/>PROTECTED/NATIONAL CABINET - Legislative-Secrecy<br/>PROTECTED/NATIONAL CABINET - Personal-Privacy<br/>PROTECTED/CABINET<br/>PROTECTED/CABINET - Legal-Privilege<br/>PROTECTED/CABINET - Legislative-Secrecy<br/>PROTECTED/CABINET - Personal-Privacy |
| Published to     | All                                                          |
| Policy settings  | Users must provide a justification to remove a label or lower its classification: Checked<br>Require users to apply a label to their emails and documents: Checked |
| Default label    | Apply this default label to documents: None<br>Apply this default label to emails: None<br>Require users to apply a label to their emails: Checked<br>Apply this default label to Power BI content: None |

### Data Loss Prevention (DLP) compliance policy

The ABAC settings for the initial Data Loss Prevention configuration for all implementation types can be found below. Additional Sensitive information types and policies specific to the Agency's requirements should be configured, the following are a baseline configuration.

`Microsoft 365 compliance > Data loss prevention > Policies`

- Name: `Australia Privacy Act`
  - Status: `On`
  - Description: `Helps detect the presence of information commonly considered to be subject to the privacy act in Australia, like driver's license and passport number.`
  - Content Types: `Australian Driver's License number, Australian Passport Number`
  - Locations to apply the policy:
    - Exchange email: `All, no exclusions`
    - SharePoint site: `All, no exclusions`
    - OneDrive accounts: `All, no exclusions`
    - Teams chat and channel messages: `All, no exclusions`
  - Policy settings:
    - Low volume: `Low volume of content detected Australia Privacy Act (default template)`
    - High volume: `High volume of content detected Australia Privacy Act (default template)`
  
- Name: `Australia Personally Identifiable Information (PII) Data`
  - Status: `On`
  - Description: `Helps detect the presence of information commonly considered to be personally identifiable information (PII) in Australia, like tax file number and driver's license.`
  - Content Types: `Australian Driver's License number, Australian Tax File Number`
  - Locations to apply the policy:
    - Exchange email: `All, no exclusions`
    - SharePoint site: `All, no exclusions`
    - OneDrive accounts: `All, no exclusions`
    - Teams chat and channel messages: `All, no exclusions`
  - Policy settings:
    - Low volume: `Low volume of content detected Australia Personally Identifiabl (default template)`
    - High volume: `High volume of content detected Australia Personally Identifiab (default template)`
  
- Name: `Australia Health Records Act (HRIP Act)`
  - Status: `On`
  - Description: `Helps detect the presence of information commonly considered to be subject to the Health Records and Information Privacy (HRIP) act in Australia, like medical account number and tax file number.`
  - Content Types: `Australian Tax File Number, Australian Medical Account Number`
  - Locations to apply the policy:
    - Exchange email: `All, no exclusions`
    - SharePoint site: `All, no exclusions`
    - OneDrive accounts: `All, no exclusions`
    - Teams chat and channel messages: `All, no exclusions`
  - Policy settings:
    - Low volume: `Low volume of content detected Australia Health Records Act (HR (default template)`
    - High volume: `High volume of content detected Australia Health Records Act (H (default template)`
  
- Name: `Australian Financial Data`
  - Status: `On`
  - Workload: `Helps detect the presence of information commonly considered to be financial data in Australia, including credit cards, and SWIFT codes.`
  - Content Types: `SWIFT Code, Australian Tax File Number, Australian Bank Account Number, Credit Card Number`
  - Locations to apply the policy:
    - Exchange email: `All, no exclusions`
    - SharePoint site: `All, no exclusions`
    - OneDrive accounts: `All, no exclusions`
    - Teams chat and channel messages: `All, no exclusions`
  - Policy settings:
    - Low volume: `Low volume of content detected Australia Financial Data (default template)`
    - High volume: `High volume of content detected Australia Financial Data (default template)`
  
- Name: `PROTECTED Data`
  - Status: `On`
  - Description: `Custom DLP policy to detect the sharing of data with PROTECTED sensitivity labels applied.`
  - Content Types: `PROTECTED (Sensitivity labels)`
  - Locations to apply the policy:
    - SharePoint site: `All, no exclusions`
    - OneDrive accounts: `All, no exclusions`
  - Policy settings: `PROTECTED Data Shared (custom rule)`
  
- Name: `<classification> Append Subject` Note, create a single DLP policy for each classification or DLM published
  - Status: `On`
  - Description: `Custom DLP policy to detect the sharing of data with PROTECTED sensitivity labels applied.`
  - Content Types: `Sensitivy info type for <classification>`  
  - Locations to apply the policy:
    - Exchange
  - Policy settings: `Actions`
    - Modify the Subject: `Replacement text: [SEC=<Classification>]`
    - Replacement strategy: `append`
    - Patterns: `\[SEC=.*?\]`

### Auto-labelling policy

The ABAC settings for the initial Auto-labeling configuration for all implementation types can be found below. The baseline configuration specifies a single auto-labeling policy per classification (sensitivity label).

- Name: `<classification> Inbound Marking` Note, create an auto-labelling policy for each classification or DLM published
  - Status: `On`
  - Description: `Custom auto-labelling policy to detect the email marked with <clasification> and add the appropriate Senstivity label.`
  - Locations to apply the policy:
    - Exchange
  - Policy rules: `Conditions`
    - Recipient domain is `agency.gov.au`
    - Header matches patterns `\SEC=<classification>`
  - Choose label to auto-apply: `<Classification>`

## Microsoft 365 Defender

The ABAC settings for Microsoft 365 Defender for all implementation types can be found below. This includes Safe Links, Safe Attachments, and Anti-phishing configuration.

Please note, if a setting is not mentioned below, it should be assumed to have been left at its default setting.

### Safe Links

`Microsoft 365 Defender > Policy & rules > Threat policies > Safe links`

#### Global Settings

- Use Safe Links in Office 365 apps: `Enabled`
- Do not track when users click protected links in Office 365 apps: `Enabled`
- Do not let users click through to the original URL in Office 365 app: `Enabled`

#### Policy

- Name: `Default Safe Links Policy`
- Description: `This policy is the default Safe Links policy for the environment`
- Users and domains:
  - Users: `Not Configured`
  - Groups: `Not Configured`
  - Domains: `All Agency domains`
- Protection Settings:
  - Select the action for unknown potentially malicious URLs in messages: `On - URLs will be rewritten and checked against a list of known malicious links when user clicks on the link`
  - Select the action for unknown or potentially malicious URLs within Microsoft Teams: `On - Microsoft Teams will check against a list of known malicious links when user clicks on the link; URLs will not be rewritten`
  - Apply real-time URL scanning for suspicious links and links that point to files: `Enabled`
    - Wait for URL scanning to complete before delivering the message: `Enabled`
  - Apply Safe Links to email messages sent within the organisation: `Enabled`
  - Do not track user clicks: `Disabled`
  - Do not let users click through to the original URL: `Enabled`
  - Display the organization branding on notification and warning pages: `Disabled`
  - Do not rewrite the following URLs: `Not Configured`
- Notification:
  - How would you like to notify your users: `Use the default notification text`

### Safe Attachments

`Microsoft 365 Defender > Policy & rules > Threat policies > Safe Attachments`

#### Global Settings

- Turn on Defender for Office 365 for SharePoint, OneDrive, and Microsoft Teams: `Enabled`
- Turn on Safe Documents for Office Clients: `Enabled`
  - Allow people to click through Protected View even if Safe Documents has identified the file as malicious: `Disabled`

#### Policy

- Name: `Default Safe Attachments Policy`
- Description: `This policy is the default Safe Attachments policy for the environment`
- Users and domains:
  - Users: `Not Configured`
  - Groups: `Not Configured`
  - Domains: `All Agency domains`
- Settings:
  - Safe Attachments unknown malware response: `Block - Block current and future messages and attachments with detected malware`
  - Enable Redirect: `Disabled`
    - Send messages that contain blocked, monitored, or replaced attachments to the specified email address: `Agency defined`
  - Apply the Safe Attachments detection response if scanning can't complete (timeout or errors): `Enabled`

### Anti-phishing

`Microsoft 365 Defender > Policy & rules > Threat policies > Anti-phishing`

- Name: `Office365 AntiPhish Default (Default)`
- Phishing email threshold: `2 - Aggressive`
- Enable users to protect: `Configured - Agency executives added`
- Enabled domains to protect: `Enabled`
  - Include domains I own: `Enabled`
  - Include custom domains: `Disabled`
- Add trusted senders and domains: `Not configured`
- Enable mailbox intelligence: `Enabled`
  - Enable Intelligence for impersonation protection: `Enabled`
- Spoof
  - Enable spoof intelligence: `Enabled`
- Actions
  - Message actions
    - If message is detected as an impersonated user:`Quarantine the message`
    - If message is detected as an impersonated domain: `Quarantine the message`
    - If Mailbox Intelligence detects an impersonated user: `Quarantine the message`
    - If message is detected as spoof: `Quarantine the message`
- Safety tips & indicators
  - Show first contact safety tip (Recommended): `Enabled`
  - Show user impersonation safety tip: `Enabled`
  - Show domain impersonation safety tip: `Enabled`
  - Show user impersonation unusual characters safety tip: `Enabled`
  - Show (?) for unauthenticated senders for spoof: `Enabled`
  - Show "via" tag: `Enabled`
