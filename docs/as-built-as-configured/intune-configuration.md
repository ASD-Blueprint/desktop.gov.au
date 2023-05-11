---

---

# Microsoft Endpoint Manager - Intune configuration

<p id="date-and-time">59 minutes to read - 30 March 2023</p>

## Configuration Profiles

The ABAC settings for the Agency Microsoft Endpoint Manager - Intune (Intune) Profiles can be found below. This includes macro security, Windows 10 Hardening (ACSC), Windows Hello, block admins, delivery optimisation, disable Adobe Flash, Microsoft Store, Defender, network boundary, OneDrive, timezone, Bitlocker, and Windows 10 Enterprise settings.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Windows Client Devices

`Microsoft Endpoint Manager > Devices > Configuration profiles > Create Profile > Windows 10 and Later`

#### ACSC - AppLocker Lockdown CSP

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Profile Name       | ACSC – AppLocker Lockdown CSP  |
| Profile type       | Custom                         |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the OMA-URI settings within the profile.

| Name                      | Description                                                  | OMA-URI                                                      | Value                                                        |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Block - Apps Local Admins | Defines restrictions for launching  executable applications. | ./Vendor/MSFT/AppLocker/ApplicationLaunchRestrictions/BlockedExe01/EXE/Policy | Custom XML: [block-apps-local-admins.txt](../files/abac/block-apps-local-admins.txt) |
| Block - Users PowerShell  | Defines restrictions for launching  executable applications. | ./Vendor/MSFT/AppLocker/ApplicationLaunchRestrictions/BlockedExe02/EXE/Policy | Custom XML: [block-users-powershell.txt](../files/abac/block-users-powershell.txt) |

#### ACSC - Device Restrictions

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Profile Name       | ACSC – Device Restrictions     |
| Profile type       | Device Restrictions            |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the configuration settings within the profile.

| Item                                                         | Configuration                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **App store**                                                |                                                              |
| Use private store only                                       | Allow                                                        |
| Game  DVR (desktop only)                                     | Block                                                        |
| User  control over installations                             | Block                                                        |
| Install  apps with elevated privileges                       | Block                                                        |
| **Cloud and Storage**                                        |                                                              |
| Non-Microsoft account                                        | Block                                                        |
| **Control Panel and Settings**                               |                                                              |
| Power  and sleep settings modification (desktop only)        | Block                                                        |
| **General**                                                  |                                                              |
| Cortana                                                      | Block                                                        |
| Autopilot  Reset                                             | Allow                                                        |
| Direct  Memory Access                                        | Block                                                        |
| **Locked Screen Experience**                                 |                                                              |
| Cortana  on locked screen (Desktop only)                     | Block                                                        |
| Toast  notifications on locked screen                        | Block                                                        |
| Voice  activate apps from locked screen                      | Disabled                                                     |
| **Password**                                                 |                                                              |
| Password                                                     | Require                                                      |
| Required  password type                                      | Alphanumeric                                                 |
| Password  complexity                                         | Numbers,  lowercase and uppercase letters required           |
| Minimum  password length                                     | 14                                                           |
| Number  of sign-in failures before wiping device             | 10                                                           |
| Maximum  minutes of inactivity until screen locks            | 15  Minutes                                                  |
| Password  expiration (days)                                  | 60                                                           |
| Prevent  reuse of previous passwords                         | 24                                                           |
| Require  password when device returns from idle state (Mobile and Holographic) | Require                                                      |
| Simple  passwords                                            | Block                                                        |
| Preferred  Azure AD tenant domain                            | AGENCY.gov.au                                                |
| **Reporting and Telemetry**                                  |                                                              |
| Share  usage data                                            | Diagnostic  data off                                         |
| **Search**                                                   |                                                              |
| Display  web results in search                               | Block                                                        |
| **Microsoft Defender SmartScreen**                           |                                                              |
| SmartScreen  for Microsoft Edge Legacy                       | Require                                                      |
| Malicious  site access                                       | Block                                                        |
| Unverified  file download                                    | Block                                                        |
| **Windows Spotlight**                                        |                                                              |
| Windows  Spotlight                                           | Block                                                        |
| **Microsoft Defender Antivirus**                             |                                                              |
| Scan  incoming mail messages                                 | Enable                                                       |
| Scan  removable drives during a full scan                    | Enable                                                       |
| Scan  files opened from network folders                      | Enable                                                       |
| **Power Settings**                                           |                                                              |
| Hybrid  sleep                                                | Disable                                                      |

#### ACSC - Edge Browser

The following table outlines the profile is created for all implementation types. The configuration includes the recommended ACSC Windows 10 hardening guide settings as well as additional settings for the blueprint.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Profile Name       | ACSC – Edge Browser            |
| Profile type       | Administrative templates       |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the profile.

| Item                                                         | Type   | ADMX Path                                                    | Value                                                        |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Allow user-level native messaging hosts (installed   without admin permissions) | Device | \Microsoft Edge\Native Messaging                             | Disabled                                                     |
| Allow users to proceed from  the HTTPS warning page          | Device | \Microsoft Edge                                              | Disabled                                                     |
| Enable saving passwords to  the password manager             | Device | \Microsoft Edge\Password  manager and protection             | Disabled                                                     |
| Intranet Sites: Include all  network paths (UNCs)            | Device | \Windows Components\Internet  Explorer\Internet Control Panel\Security Page | Disabled                                                     |
| Ads setting for sites with  intrusive ads                    | Device | \Microsoft Edge                                              | Enabled – Block ads on sites  with intrusive ads. (Default value) |
| Block access to a list of  URLs                              | Device | \Microsoft Edge                                              | Enabled AGENCY to configure                                  |
| Block all ads on Bing search  results                        | Device | \Microsoft Edge                                              | Enabled                                                      |
| Configure Do Not Track                                       | Device | \Microsoft Edge                                              | Enabled                                                      |
| Configure Microsoft Defender  SmartScreen                    | Device | \Microsoft Edge\SmartScreen  settings                        | Enabled                                                      |
| Configure Microsoft Defender  SmartScreen to block potentially unwanted apps | Device | \Microsoft Edge\SmartScreen  settings                        | Enabled                                                      |
| Control where developer  tools can be used                   | Device | \Microsoft Edge                                              | Enabled – Don’t allow using  the developer tools             |
| Control which extensions are  installed silently             | Device | \Microsoft Edge\Extensions                                   | Enabled – AGENCY to configure                                |
| Control which extensions  cannot be installed                | Device | \Microsoft Edge\Extensions                                   | Enabled                                                      |
| Default Adobe Flash setting  (obsolete)                      | Device | \Microsoft Edge\Content  settings                            | Enabled – Block the Adobe  Flash plugin                      |
| Enable site isolation for  every site                        | Device | \Microsoft Edge                                              | Enabled                                                      |
| Force Microsoft Defender  SmartScreen checks on downloads from trusted sources | Device | \Microsoft Edge\SmartScreen  settings                        | Enabled                                                      |
| Minimum TLS version enabled  (deprecated)                    | Device | \Microsoft Edge                                              | Enabled – TLS 1.2                                            |
| Prevent bypassing Microsoft  Defender SmartScreen prompts for sites | Device | \Microsoft Edge\SmartScreen  settings                        | Enabled                                                      |
| Prevent bypassing of  Microsoft Defender SmartScreen warnings about downloads | Device | \Microsoft Edge\SmartScreen  settings                        | Enabled                                                      |
| Prevent downloading of  enclosures                           | Device | \Windows Components\RSS  Feeds                               | Enabled                                                      |
| Supported authentication  schemes                            | Device | \Microsoft Edge\HTTP  authentication                         | Enabled - ntlm,negotiate                                     |
| Default pop-up window  setting                               | Device | \Microsoft Edge\Content  settings                            | Enabled: Do not allow any  site to show popups               |
| DNS interception checks  enabled                             | Device | \Microsoft Edge                                              | Disabled                                                     |
| Control the mode of  DNS-over-HTTPS                          | Device | \Microsoft Edge                                              | Enabled: Disable DNS-over-HTTPS                              |
| Allow download restrictions                                  | Device | \Microsoft Edge                                              | Enabled:  Block  potentially dangerous or unwanted downloads |

#### ACSC - Endpoint Protection

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Profile Name       | ACSC – Endpoint Protection     |
| Profile type       | Endpoint Protection            |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the configuration settings within the profile.

| Item                                                         | Configuration                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Microsoft  Defender SmartScreen**                          |                                                              |
| SmartScreen for apps and files                               | Enable                                                       |
| Unverified files execution                                   | Block                                                        |
| **Local  device security options**                           |                                                              |
| Add new Microsoft accounts                                   | Block                                                        |
| Remote log on without password                               | Block                                                        |
| Local admin account                                          | Block                                                        |
| Rename admin account                                         | Blueprint_admin                                              |
| Guest account                                                | Block                                                        |
| Rename guest account                                         | Blueprint_guest                                              |
| Minutes to lock screen inactivity until screen saver activates | 15                                                         |
| User information on lock screen                              | User display name only                                       |
| Anonymous access to Named Pipes and Shares                   | Block                                                        |
| Anonymous enumeration of SAM accounts                        | Block                                                        |
| Anonymous enumeration of SAM accounts and shares             | Block                                                        |
| LAN Manager hash value stored on password change             | Block                                                        |
| PKU2U authentication requests                                | Block                                                        |
| Restrict remote RPC connections to SAM                       | Allow                                                        |
| Security Descriptor                                          | O:BAG:BAD:(A;;RC;;;BA)                                       |
| Minimum Session Security For NTLM SSP Based  Clients         | NTLMv2 and 128-bit encryption                                |
| Minimum Session Security For NTLM SSP Based Server           | NTLMv2 and 128-bit encryption                                |
| LAN Manager Authentication Level                             | NTLMv2                                                       |
| Insecure Guest Logons                                        | Block                                                        |
| UIA integrity without secure location                        | Block                                                        |
| Virtualize file and registry write failures to  per-user locations | Enabled                                                |
| Elevated prompt for app installations                        | Enabled                                                      |
| Admin Approval Mode For Built-in Administrator               | Enabled                                                      |
| Run all admins in Admin Approval Mode                        | Enabled                                                      |
| Send unencrypted password to third-party SMB  servers        | Block                                                        |
| Digitally sign communications (always) Server                | Enable                                                       |
| Digitally sign communications (always) Client                | Enable                                                       |
| **Xbox services**                                            |                                                              |
| Xbox  Accessory Management Service                           | Disabled                                                     |
| Xbox  Live Auth Manager Service                              | Disabled                                                     |
| Xbox  Live Game Save Service                                 | Disabled                                                     |
| Xbox  Live Networking Service                                | Disabled                                                     |

#### ACSC - Microsoft Office Hardening

The following table outlines the profile is created for all implementation types. The configuration includes the recommended ACSC Windows 10 hardening guide settings as well as additional settings for the blueprint.

| Item               | Configuration                                 |
| ------------------ | --------------------------------------------- |
| Profile Name       | ACSC – Microsoft Office Hardening             |
| Profile type       | Administrative templates                      |
| Platform supported | Windows 10 and later                          |
| Groups excluded    | 0                                             |
| Assigned           | Yes                                           |
| Groups assigned    | `rol-Agency-users, rol-Agency-administrators` |

The following table outlines the settings within the profile.

| Item                                                         | Type | ADMX Path                                                    | Value                                                        |
| ------------------------------------------------------------ | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Allow including screenshot with Office Feedback              | User | \Microsoft Office 2016\Privacy\Trust Center | Disabled |
| Allow mix of policy and   user locations                     | User | \Microsoft Office   2016\Security Settings\Trust Center      | Disabled                                                     |
| Allow Trusted Locations on the network                       | User | \Microsoft PowerPoint 2016\PowerPoint  Options\Security\Trust Center\Trusted Locations | Disabled                                                     |
| Allow Trusted Locations on the network                       | User | \Microsoft Access 2016\Application  Settings\Security\Trust Center\Trusted Locations | Disabled                                                     |
| Allow Trusted Locations on the network                       | User | \Microsoft Project 2016\Project Options\Security\Trust  Center | Disabled                                                     |
| Allow Trusted Locations on the network                       | User | \Microsoft Visio 2016\Visio Options\Security\Trust  Center   | Disabled                                                     |
| Allow Trusted Locations on the network                       | User | \Microsoft Word 2016\Word Options\Security\Trust  Center\Trusted Locations | Disabled                                                      |
| Allow Trusted Locations on the network                       | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center\Trusted Locations | Disabled                                                      |
| Automatically receive small updates to improve reliability   | User | \Microsoft Office 2016\Privacy\Trust Center | Disabled |
| Disable VBA for Office applications                          | User | \Microsoft Office 2016\Security Settings                     | Disabled                                                     |
| Do not open files from the Internet zone in Protected View   | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Protected View | Disabled |
| Do not open files from the Internet zone in Protected View   | user | \Microsoft Word 2016\Word Options\Security\Trust Center\Protected View | Disabled |
| Do not open files from the Internet zone in Protected View   | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\Protected View | Disabled |
| Do not open files in unsafe locations in Protected View      | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Protected View | Disabled |
| Do not open files in unsafe locations in Protected View      | User | \Microsoft Word 2016\Word Options\Security\Trust Center\Protected View | Disabled |
| Do not open files in unsafe locations in Protected View      | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\Protected View | Disabled |
| Enable Customer Experience Improvement Program               | User | \Microsoft Office 2016\Privacy\Trust Center | Disabled |
| Enable Microsoft Visual Basic for Applications project creation | User | \Microsoft Visio 2016\Visio Options\Security\Macro  Security | Disabled                                                     |
| Load Microsoft Visual Basic for Applications projects from text | User | \Microsoft Visio 2016\Visio Options\Security\Macro  Security | Disabled                                                     |
| Send Office Feedback                                         | User | \Microsoft Office 2016\Privacy\Trust Center | Disabled |
| Send personal information                                    | User | \Microsoft Office 2016\Privacy\Trust Center | Disabled |
| Trust access to Visual Basic Project                         | User | \Microsoft Word 2016\Word Options\Security\Trust Center      | Disabled                                                     |
| Trust access to Visual Basic Project                         | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust  Center | Disabled                                                     |
| Trust access to Visual Basic Project                         | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center   | Disabled                                                     |
| Turn off file validation                                     | User | \Microsoft Word 2016\Word Options\Security | Disabled |
| Turn off file validation                                     | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security | Disabled |
| Turn off file validation                                     | User | \Microsoft Excel 2016\Excel Options\Security | Disabled |
| Turn off Protected View for attachments opened from Outlook  | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Protected View | Disabled |
| Turn off Protected View for attachments opened from Outlook  | User | \Microsoft Word 2016\Word Options\Security\Trust Center\Protected View | Disabled |
| Turn off Protected View for attachments opened from Outlook  | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\Protected View | Disabled |
| Update automatic links at Open                               | User | \Microsoft Word 2016\Word Options\Advanced | Disabled |
| Always open untrusted database files in Protected View       | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Protected View | Enabled |
| Always prevent untrusted Microsoft Query files from opening  | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\External Content | Enabled |
| Apply macro security settings to macros, add-ins and  additional actions | User | \Microsoft Outlook 2016\Security\Trust Center                | Enabled                                                      |
| Automation Security                                          | User | \Microsoft Office 2016\Security Settings                     | Enabled – Use application macro security level               |
| Block additional file extensions for OLE embedding           | User | \Microsoft Office 2016\Security Settings                     | Enabled                                                      |
| Block all unmanaged add-ins                                  | User | \Microsoft Outlook 2016\Miscellaneous                        | Enabled                                                      |
| Block macros from running in Office files from the  Internet | User | \Microsoft Word 2016\Word Options\Security\Trust Center      | Enabled                                                      |
| Block macros from running in Office files from the  Internet | User | \Microsoft PowerPoint 2016\PowerPoint  Options\Security\Trust Center | Enabled                                                      |
| Block macros from running in Office files from the  Internet | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center   | Enabled                                                      |
| Block macros from running in Office files from the  Internet | User | \Microsoft Access 2016\Application  Settings\Security\Trust Center | Enabled                                                      |
| Block macros from running in Office files from the  Internet | User | \Microsoft Visio 2016\Visio Options\Security\Trust  Center   | Enabled                                                      |
| Configure trusted add-ins                                    | User | \Microsoft Outlook 2016\Security\Security Form  Settings\Programmatic Security\Trusted Add-ins | Enabled – Agency defined list                                |
| dBase III / IV files                                         | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Dif and Sylk files                                           | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Disable All ActiveX                                          | User | \Microsoft Office 2016\Security Settings | Enabled |
| Disable all Trust Bar notifications for security issues      | User | \Microsoft Office 2016\Security Settings                     | Enabled                                                      |
| Disable all trusted locations                                | User | \Microsoft PowerPoint 2016\PowerPoint  Options\Security\Trust Center\Trusted Locations | Enabled                                                      |
| Disable all trusted locations                                | User | \Microsoft Word 2016\Word Options\Security\Trust  Center\Trusted Locations | Enabled                                                      |
| Disable all trusted locations                                | User | \Microsoft Access 2016\Application  Settings\Security\Trust Center\Trusted Locations | Enabled                                                      |
| Disable all trusted locations                                | User | \Microsoft Project 2016\Project Options\Security\Trust  Center | Enabled                                                      |
| Disable all trusted locations                                | User | \Microsoft Visio 2016\Visio Options\Security\Trust  Center   | Enabled                                                      |
| Disable all trusted locations                                | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center\Trusted Locations | Enabled                                                      |
| Disable commands                                             | User | \Microsoft PowerPoint 2016\Disable Items in User  Interface\Predefined | Enabled – <br>Developer tab \| Code \| Macros  <br>Developer tab \| Code \| Macro Security  <br>Developer tab \| Code \| Visual Basic |
| Disable commands                                             | User | \Microsoft Excel 2016\Disable Items in User  Interface\Predefined | Enabled -  <br>Developer tab \| Code \| Macros <br>Developer tab \| Code \| Record Macros<br>Developer tab \| Code \| Macro Security<br>Developer tab \| Code \| Visual Basic |
| Disable commands                                             | User | \Microsoft Visio 2016\Disable Items in User  Interface\Predefined | Enabled – <br>Developer tab \| Macros <br>Developer tab \| Visual Basic |
| Disable commands                                             | User | \Microsoft Access 2016\Disable Items in User  Interface\Predefined | Enabled - <br>Database tools \| Macro \| Visual Basic<br>Database tools \| Macro \| Run Macro <br>Database tools \| Macro \| Convert Macros to Visual Basic <br>Database tools \| Macro \| Create Shortcut Menu from Macro |
| Disable commands                                             | User | \Microsoft Word 2016\Disable Items in User  Interface\Predefined | Enabled -  <br>Developer tab \| Code \| Macros <br>Developer tab \| Code \| Record Macros <br>Developer tab \| Code \| Macro Security <br>Developer tab \| Code \| Visual Basic |
| Disable commands                                             | User | \Microsoft Publisher 2016\Disable Items in User  Interface\Predefined | Enabled - <br>Developer tab <br>Developer tab \| Code \| Macros <br>Developer tab \| Code \| Macro Security <br>Developer tab \| Code \| Visual Basic <br> Developer tab \| Add-Ins \| COM Add-Ins |
| Disable Opt-in Wizard on first run | User | \Microsoft Office 2016\Privacy\Trust Center | Enabled |
| Disable Trust Bar Notification for unsigned application add-ins and block them | User | \Microsoft Word 2016\Word Options\Security\Trust Center | Enabled |
| Disable Trust Bar Notification for unsigned application add-ins and block them | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | Enabled |
| Disable Trust Bar Notification for unsigned application add-ins and block them | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center | Enabled |
| Disable Trust Bar Notification for unsigned application add-ins and block them | User | \Microsoft Project 2016\Project Options\Security\Trust Center | Enabled |
| Disable Trust Bar Notification for unsigned application add-ins and block them | User | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Enabled |
| Don’t allow Dynamic Data Exchange (DDE) server launch in Excel | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\External Content | Enabled |
| Don’t allow Dynamic Data Exchange (DDE) server lookup in Excel | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\External Content | Enabled |
| Excel 2 macrosheets and add-in files | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 2 worksheets | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 3 macrosheets and add-in files | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 3 worksheets | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 4 macrosheets and add-in files | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 4 workbooks | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 4 worksheets | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 95 workbooks | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 95-97 workbooks and templates | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Excel 97-2003 workbooks and templates | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Force file extension to match file type | User | \Microsoft Excel 2016\Excel Options\Security | Enabled (Always match file type) |
| List of managed add-ins                                      | User | \Microsoft Outlook 2016\Miscellaneous                        | Agency defined                                               |
| Macro Runtime Scan Scope                                     | User | \Microsoft Office 2016\Security Settings                     | Enabled (Enable for all documents)                     |
| Make hidden markup visible | User | \Microsoft Word 2016\Word Options\Security | Enabled |
| Make hidden markup visible | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security | Enabled |
| PowerPoint 97-2003 presentations, shows, templates and add-in files | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\File Block Settings | Enabled (Always match file type) |
| Publisher Automation Security Level                          | User | \Microsoft Publisher 2016\Security                           | Enabled – High (disabled)                                    |
| Require that application add-ins are signed by Trusted Publisher | User | \Microsoft Word 2016\Word Options\Security\Trust Center | Enabled |
| Require that application add-ins are signed by Trusted Publisher | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | Enabled |
| Require that application add-ins are signed by Trusted Publisher | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center | Enabled |
| Require that application add-ins are signed by Trusted Publisher | User | \Microsoft Project 2016\Project Options\Security\Trust Center | Enabled |
| Require that application add-ins are signed by Trusted Publisher | User | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Enabled |
| Run Programs | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security | Enabled (disable (don't run any programs)) |
| Scan encrypted macros in Excel Open XML workbooks            | User | \Microsoft Excel 2016\Excel Options\Security                 | Enabled – Scan encrypted macros (default)                    |
| Scan encrypted macros in PowerPoint Open XML  presentations  | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security       | Enabled – Scan encrypted macros (default)                    |
| Scan encrypted macros in Word Open XML documents             | User | \Microsoft Word 2016\Word Options\Security\Trust Center      | Enabled – Scan encrypted macros (default)                    |
| Security setting for macros                                  | User | \Microsoft Outlook 2016\Security\Trust Center                | Enabled – Warn for signed, disable unsigned                  |
| Set default file block behavior | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\File Block Settings | Enabled (Blocked files are not opened) |
| Set default file block behavior | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Blocked files are not opened) |
| Set default file block behavior | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Blocked files are not opened) |
| Set document behavior if file validation fails | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Protected View | Enabled (Block files) |
| Set document behavior if file validation fails | User | \Microsoft Word 2016\Word Options\Security\Trust Center\Protected View | Enabled (Block files) |
| Set document behavior if file validation fails | User | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\Protected View | Enabled (Block files) |
| Turn off trusted documents                                   | User | \Microsoft Word 2016\Word Options\Security\Trust Center      | Enabled                                                      |
| Turn off trusted documents                                   | User | \Microsoft PowerPoint 2016\PowerPoint  Options\Security\Trust Center | Enabled                                                      |
| Turn off trusted documents                                   | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center   | Enabled                                                      |
| Turn off trusted documents                                   | User | \Microsoft Access 2016\Application  Settings\Security\Trust Center | Enabled                                                      |
| Turn off trusted documents                                   | User | \Microsoft Visio 2016\Visio Options\Security\Trust  Center   | Enabled                                                      |
| Turn off Trusted Documents on the network                    | User | \Microsoft Word 2016\Word Options\Security\Trust Center      | Enabled                                                      |
| Turn off Trusted Documents on the network                    | User | \Microsoft PowerPoint 2016\PowerPoint  Options\Security\Trust Center | Enabled                                                      |
| Turn off Trusted Documents on the network                    | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center   | Enabled                                                      |
| Turn off Trusted Documents on the network                    | User | \Microsoft Access 2016\Application  Settings\Security\Trust Center | Enabled                                                      |
| Turn off Trusted Documents on the network                    | User | \Microsoft Visio 2016\Visio Options\Security\Trust  Center   | Enabled                                                      |
| VBA Macro Notification Settings                              | User | \Microsoft Word 2016\Word Options\Security\Trust Center      | Enabled -Disable all except digitally signed macros          |
| VBA Macro Notification Settings                              | User | \Microsoft PowerPoint 2016\PowerPoint  Options\Security\Trust Center | Enabled -Disable all except digitally signed macros          |
| VBA Macro Notification Settings                              | User | \Microsoft Excel 2016\Excel Options\Security\Trust  Center   | Enabled -Disable all except digitally signed macros          |
| VBA Macro Notification Settings                              | User | \Microsoft Access 2016\Application  Settings\Security\Trust Center | Enabled -Disable all except digitally signed macros          |
| VBA Macro Notification Settings                              | User | \Microsoft Project 2016\Project Options\Security\Trust  Center | Enabled -Disable all except digitally signed macros          |
| VBA Macro Notification Settings                              | User | \Microsoft Visio 2016\Visio Options\Security\Trust  Center   | Enabled -Disable all except digitally signed macros          |
| VBA Macro Notification Settings                              | User | \Microsoft Publisher 2016\Security\Trust Center              | Enabled -Disable all except digitally signed macros          |
| Visio 2000-2002 Binary Drawings, Templates and Stencils | User | \Microsoft Visio 2016\Visio Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked) |
| Visio 2003-2010 Binary Drawings, Templates and Stencils | User | \Microsoft Visio 2016\Visio Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked) |
| Visio 5.0 or earlier Binary Drawings, Templates and Stencils | User | \Microsoft Visio 2016\Visio Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked) |
| Web pages and Excel 2003 XML spreadsheets | User | \Microsoft Excel 2016\Excel Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 2 and earlier binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 2000 binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 2003 binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 2007 and later binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 6.0 binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 95 binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word 97 binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |
| Word XP binary documents and templates | User | \Microsoft Word 2016\Word Options\Security\Trust Center\File Block Settings | Enabled (Open/Save blocked, use open policy) |

#### ACSC - Windows 10 Hardening

The following table outlines the profile is created for all implementation types. The configuration includes the recommended ACSC Windows 10 hardening guide settings as well as additional settings for the blueprint.

| Item               | Configuration                                                |
| ------------------ | ------------------------------------------------------------ |
| Profile Name       | ACSC – Windows 10 Hardening                                  |
| Profile type       | Administrative templates                                     |
| Platform supported | Windows 10 and later                                         |
| Groups excluded    | 0                                                            |
| Assigned           | Yes                                                          |
| Groups assigned    | `grp-agency-windows10-dynamic, rol-Agency-Administrators, rol-Agency-users` |

The following table outlines the settings within the profile.

| Item                                                         | Type   | ADMX Path                                                    | Value                                                        |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Allow Basic authentication                                   | Device | \Windows Components\Windows   Remote Management (WinRM)\WinRM Service | Disabled                                                     |
| Allow Basic authentication                                   | Device | \Windows Components\Windows Remote Management  (WinRM)\WinRM Client | Disabled                                                     |
| Allow standby states (S1-S3) when sleeping (on battery)      | Device | \System\Power Management\Sleep Settings                      | Disabled                                                     |
| Allow standby states (S1-S3) when sleeping (plugged in)      | Device | \System\Power Management\Sleep Settings                      | Disabled                                                     |
| Allow unencrypted traffic                                    | Device | \Windows Components\Windows Remote Management  (WinRM)\WinRM Service | Disabled                                                     |
| Allow unencrypted traffic                                    | Device | \Windows Components\Windows Remote Management  (WinRM)\WinRM Client | Disabled                                                     |
| Configure Offer Remote Assistance                            | Device | \System\Remote Assistance                                    | Disabled                                                     |
| Configure SMB v1 server                                      | Device | \MS Security Guide                                           | Disabled                                                     |
| Do not preserve zone information in file attachments         | User   | \Windows Components\Attachment Manager                       | Disabled                                                     |
| Enumerate administrator accounts on elevation                | Device | \Windows Components\Credential User Interface                | Disabled                                                     |
| Enumerate local users on domain-joined computers             | Device | \System\Logon                                                | Disabled                                                     |
| MSS: (EnableICMPRedirect) Allow ICMP redirects to  override OSPF generated routes | Device | \MSS (Legacy)                                                | Disabled                                                     |
| MSS: (NoNameReleaseOnDemand) Allow the computer to  ignore NetBIOS name release requests except from WINS servers | Device | \MSS (Legacy)                                                | Disabled                                                     |
| Turn on convenience PIN sign-in                              | Device | \System\Logon                                                | Disabled                                                     |
| WDigest Authentication (disabling may require  KB2871997)    | Device | \MS Security Guide                                           | Disabled                                                     |
| Allow Microsoft accounts to be optional                      | Device | \Windows Components\App runtime                              | Enabled                                                      |
| Allow users to connect remotely by using Remote Desktop  Services | Device | \Windows Components\Remote Desktop Services\Remote  Desktop Session Host\Connections | Enabled                                                      |
| Always prompt for password upon connection                   | Device | \Windows Components\Remote Desktop Services\Remote  Desktop Session Host\Security | Enabled                                                      |
| Apply UAC restrictions to local accounts on network  logons  | Device | \MS Security Guide                                           | Enabled                                                      |
| Boot-Start Driver Initialization Policy                      | Device | \System\Early Launch Antimalware                             | Enabled – Good and unknown                                   |
| Configure SMB v1 client driver                               | Device | \MS Security Guide                                           | Enabled – Disable driver (recommended)                       |
| Configure Solicited Remote Assistance                        | Device | \System\Remote Assistance                                    | Enabled – Allow helpers to remotely control the  computer, 1, Hours, Mailto |
| Disallow Autoplay for non-volume devices                     | Device | \Windows Components\AutoPlay Policies                        | Enabled                                                      |
| Disallow Digest authentication                               | Device | \Windows Components\Windows Remote Management  (WinRM)\WinRM Client | Enabled                                                      |
| Disallow WinRM from storing RunAs credentials                | Device | \Windows Components\Windows Remote Management  (WinRM)\WinRM Service | Enabled                                                      |
| Do not allow drive redirection                               | Device | \Windows Components\Remote Desktop Services\Remote  Desktop Session Host\Device and Resource Redirection | Enabled                                                      |
| Do not allow passwords to be saved                           | Device | \Windows Components\Remote Desktop Services\Remote  Desktop Connection Client | Enabled                                                      |
| Do not display the password reveal button                    | Device | \Windows Components\Credential User Interface                | Enabled                                                      |
| Enable Structured Exception Handling Overwrite  Protection (SEHOP) | Device | \MS Security Guide                                           | Enabled                                                      |
| Hardened UNC Paths                                           | Device | \Network\Network Provider                                    | Enabled -    Name: `\\*\SYSVOL`, Value: `RequireMutualAuthentication=1,RequireIntegrity=1`   Name: `\\*\NETLOGON`, Value: `RequireMutualAuthentication=1,RequireIntegrity=1` |
| Hide mechanisms to remove zone information                   | User   | \Windows Components\Attachment Manager                       | Enabled                                                      |
| MSS: (DisableIPSourceRouting IPv6) IP source routing  protection level (protects against packet spoofing) | Device | \MSS (Legacy)                                                | Enabled – Highest protection, source routing is  completely disabled |
| MSS: (DisableIPSourceRouting) IP source routing  protection level (protects against packet spoofing) | Device | \MSS (Legacy)                                                | Enabled – Highest protection, source routing is  completely disabled |
| Prevent enabling lock screen camera                          | Device | \Control Panel\Personalization                               | Enabled                                                      |
| Prevent enabling lock screen slide show                      | Device | \Control Panel\Personalization                               | Enabled                                                      |
| Prevent installation of devices that match any of these device IDs | Device | \System\Device Installation\Device Installation Restrictions | Enabled - Device IDs: `PCI\CC_0C0010, PCI\CC_0C0A` <br>(Also apply to matching devices that are already installed.) |
| Prevent installation of devices using drivers that  match these device setup classes | Device | \System\Device Installation\Device Installation  Restrictions | Enabled - Setup classes: `{d48179be-ec20-11d1-b6b8-00c04fa372a7}` <br>(Also apply to matching devices that are already installed.)                                                      |
| Prohibit connection to non-domain networks when  connected to domain authenticated network | Device | \Network\Windows Connection Manager                          | Enabled                                                      |
| Prohibit installation and configuration of Network  Bridge on your DNS domain network | Device | \Network\Network Connections                                 | Enabled                                                      |
| Remote host allows delegation of non-exportable  credentials | Device | \System\Credentials Delegation                               | Enabled                                                      |
| Require a password when a computer wakes (on battery)        | Device | \System\Power Management\Sleep Settings                      | Enabled                                                      |
| Require a password when a computer wakes (plugged in)        | Device | \System\Power Management\Sleep Settings                      | Enabled                                                      |
| Require secure RPC communication                             | Device | \Windows Components\Remote Desktop Services\Remote  Desktop Session Host\Security | Enabled                                                      |
| Restrict Unauthenticated RPC clients                         | Device | \System\Remote Procedure Call                                | Enabled - Authenticated                                      |
| Set the default behavior for AutoRun                         | Device | \Windows Components\AutoPlay Policies                        | Enabled – Do not execute any autorun commands                |
| Specify the maximum log file size (KB)                       | Device | \Windows Components\Event Log Service\Application            | Enabled - 65536                                              |
| Specify the maximum log file size (KB)                       | Device | \Windows Components\Event Log Service\System                 | Enabled - 65536                                              |
| Specify the maximum log file size (KB)                       | Device | \Windows Components\Event Log Service\Security               | Enabled - 2097152                                            |
| Specify the system hibernate timeout (on battery)            | Device | \System\Power Management\Sleep Settings                      | Enabled - 0                                                  |
| Specify the system hibernate timeout (plugged in)            | Device | \System\Power Management\Sleep Settings                      | Enabled - 0                                                  |
| Specify the system sleep timeout (on battery)                | Device | \System\Power Management\Sleep Settings                      | Enabled - 300                                                |
| Specify the system sleep timeout (plugged in)                | Device | \System\Power Management\Sleep Settings                      | Enabled - 0                                                  |
| Turn off Autoplay                                            | Device | \Windows Components\AutoPlay Policies                        | Enabled - All drives                                                 |
| Turn off Data Execution Prevention for Explorer              | Device | \Windows Components\File Explorer                            | Enabled                                                      |
| Turn off heap termination on corruption                      | Device | \Windows Components\File Explorer                            | Enabled                                                      |
| Turn off picture password sign-in                            | Device | \System\Logon                                                | Enabled                                                      |
| Turn on PowerShell Script Block Logging                      | Device | \Windows Components\Windows PowerShell                       | Enabled                                                      |
| Turn on session logging                                      | Device | \System\Remote Assistance                                    | Enabled                                                      |
| Turn on Windows Defender protection against Potentially  Unwanted Applications (DEPRECATED) | Device | \MS Security Guide                                           | Enabled                                                      |

#### ACSC - Windows 10 Hardening CSP

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                   |
| ------------------ | ------------------------------- |
| Profile Name       | ACSC – Windows 10 Hardening CSP |
| Profile type       | Custom                          |
| Platform supported | Windows 10 and later            |
| Groups excluded    | 0                               |
| Assigned           | Yes                             |
| Groups assigned    | `grp-agency-windows10-dynamic`  |

The following table outlines the OMA-URI settings within the profile.

| Name                                                         | Description                                                  | OMA-URI                                                      | Value          |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------- |
| Network security: Allow   Local System to use computer identity for NTLM | When services connect to   devices that are running versions of the Windows operating system earlier   than Windows Vista or Windows Server 2008, services that run as Local System   and use SPNEGO (Negotiate) that revert to NTLM will authenticate   anonymously. In Windows Server 2008 R2 and Windows 7 and later, if a service   connects to a computer running Windows Server 2008 or Windows Vista, the   system service uses the computer identity. When a service connects with the   device identity, signing and encryption are supported to provide data   protection. (When a service connects anonymously, a system-generated session   key is created, which provides no protection, but it allows applications to   sign and encrypt data without errors. Anonymous authentication uses a NULL   session, which is a session with a server in which no user authentication is   performed; and therefore, anonymous access is allowed.) | `./Vendor/MSFT/Policy/Config/LocalPoliciesSecurityOptions/NetworkSecurity_AllowLocalSystemToUseComputerIdentityForNTLM` | Integer: 0     |
| Configure System Guard                                       | This policy allows the IT admin to configure  the launch of System Guard. | `./Vendor/MSFT/Policy/Config/DeviceGuard/ConfigureSystemGuardLaunch` | Integer: 1     |
| Turn On Virtualization Based Security                        | Added in Windows 10, version 1709. Turns on  virtualization based security(VBS) at the next reboot. virtualization based  security uses the Windows Hypervisor to provide support for security  services. Value type is integer. | `./Vendor/MSFT/Policy/Config/DeviceGuard/EnableVirtualizationBasedSecurity` | Integer: 1     |
| Required Platform Security Features                          | Added in Windows 10, version 1709. Specifies  the platform security level at the next reboot. Value type is integer. | `./Vendor/MSFT/Policy/Config/DeviceGuard/RequirePlatformSecurityFeatures` | Integer: 1     |
| Allow Windows to automatically connect to  suggested open hotspots, to networks shared by contacts, and to hotspots  offering paid services | Allow or disallow the device to  automatically connect to Wi-Fi hotspots. | `./Vendor/MSFT/Policy/Config/Wifi/AllowAutoConnectToWiFiSenseHotspots` | Integer: 0     |
| Audit Credential Validation                                  | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by validation tests on  user account logon credentials. Events  in this subcategory occur only on the computer that is authoritative for  those credentials. For domain accounts, the domain controller is  authoritative. For local accounts, the local computer is authoritative. Volume: High on domain controllers. | `./Vendor/MSFT/Policy/Config/Audit/AccountLogon_AuditCredentialValidation` | Integer: 3     |
| Audit Account Lockout                                        | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by a failed attempt to  log on to an account that is locked out.   If you configure this policy setting, an audit event is generated when  an account cannot log on to a computer because the account is locked out.  Success audits record successful attempts and Failure audits record  unsuccessful attempts. Logon events  are essential for understanding user activity and to detect potential  attacks. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/AccountLogonLogoff_AuditAccountLockout` | Integer: 2     |
| Audit Group Membership                                       | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy allows you to audit the group membership information in the user's  logon token. Events in this subcategory are generated on the computer on  which a logon session is created. For an interactive logon, the security  audit event is generated on the computer that the user logged on to. For a  network logon, such as accessing a shared folder on the network, the security  audit event is generated on the computer hosting the resource. When this setting is configured, one or  more security audit events are generated for each successful logon. You must  also enable the Audit Logon setting under Advanced Audit Policy  Configuration\System Audit Policies\Logon/Logoff. Multiple events are  generated if the group membership information cannot fit in a single security  audit event. Volume: Low on a client  computer. Medium on a domain controller or a network server. | `./Vendor/MSFT/Policy/Config/Audit/AccountLogonLogoff_AuditGroupMembership` | Integer: 1     |
| Audit Logoff                                                 | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by the closing of a logon  session. These events occur on the computer that was accessed. For an  interactive logoff the security audit event is generated on the computer that  the user account logged on to. If you  configure this policy setting, an audit event is generated when a logon session  is closed. Success audits record successful attempts to close sessions and  Failure audits record unsuccessful attempts to close sessions. If you do not  configure this policy setting, no audit event is generated when a logon  session is closed. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/AccountLogonLogoff_AuditLogoff` | Integer: 3     |
| Audit Logon                                                  | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by user account logon  attempts on the computer. Events in this subcategory are related to the  creation of logon sessions and occur on the computer which was accessed. For  an interactive logon, the security audit event is generated on the computer that  the user account logged on to. For a network logon, such as accessing a  shared folder on the network, the security audit event is generated on the  computer hosting the resource | `./Vendor/MSFT/Policy/Config/Audit/AccountLogonLogoff_AuditLogon` | Integer: 3     |
| Audit Other Logon Logoff Events                              | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit other logon/logoff-related events that are  not covered in the “Logon/Logoff” policy setting, such as the following: Terminal Services session disconnections.  New Terminal Services sessions. Locking and unlocking a workstation. Invoking  a screen saver. Dismissal of a screen saver. Detection of a Kerberos replay  attack, in which a Kerberos request was received twice with identical  information. This condition could be caused by network misconfiguration.  Access to a wireless network granted to a user or computer account. Access to  a wired 802.1x network granted to a user or computer account. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/AccountLogonLogoff_AuditOtherLogonLogoffEvents` | Integer: 3     |
| Audit Special Logon                                          | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by special logons, such  as the following: The use of a special  logon, which is a logon that has administrator-equivalent privileges and can  be used to elevate a process to a higher level. A logon by a member of a  Special Group. Special Groups enable you to audit events generated when a  member of a certain group has logged on to your network. You can configure a  list of group security identifiers (SIDs) in the registry. If any of those  SIDs are added to a token during logon and the subcategory is enabled, an  event is logged. For more information about this feature, see Audit Special  Logon. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/AccountLogonLogoff_AuditSpecialLogon` | Integer: 3     |
| Audit Security Group Management                              | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by changes to security  groups, such as the following:   Security group is created, changed, or deleted. Member is added or  removed from a security group. Group type is changed. If you configure this  policy setting, an audit event is generated when an attempt to change a  security group is made. Success audits record successful attempts and Failure  audits record unsuccessful attempts. If you do not configure this policy  setting, no audit event is generated when a security group changes. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/AccountManagement_AuditSecurityGroupManagement` | Integer: 3     |
| Audit User Account Management                                | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This policy  setting allows you to audit changes to user accounts. Events include the  following: A user account is created,  changed, deleted; renamed, disabled, enabled, locked out, or unlocked. A user  account’s password is set or changed. A security identifier (SID) is added to  the SID History of a user account. The Directory Services Restore Mode  password is configured. Permissions on administrative user accounts are  changed. Credential Manager credentials are backed up or restored. If you  configure this policy setting, an audit event is generated when an attempt to  change a user account is made. Success audits record successful attempts and  Failure audits record unsuccessful attempts. If you do not configure this  policy setting, no audit event is generated when a user account changes. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/AccountManagement_AuditUserAccountManagement` | Integer: 3     |
| Audit PNP Activity                                           | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit when plug and play detects an external  device. If you configure this policy  setting, an audit event is generated whenever plug and play detects an  external device. Only Success audits are recorded for this category. If you  do not configure this policy setting, no audit event is generated when an  external device is detected by plug and play.   Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/DetailedTracking_AuditPNPActivity` | Integer: 1     |
| Audit Process Creation                                       | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated when a process is created  or starts. The name of the application or user that created the process is  also audited. If you configure this  policy setting, an audit event is generated when a process is created.  Success audits record successful attempts and Failure audits record  unsuccessful attempts. If you do not configure this policy setting, no audit  event is generated when a process is created.   Volume: Depends on how the computer is used. | `./Vendor/MSFT/Policy/Config/Audit/DetailedTracking_AuditProcessCreation` | Integer: 1     |
| Audit Detailed File Share                                    | Added in Windows 10, version 1903. Also available  in Windows 10, versions 1809 and 1803 through servicing. This policy setting  allows you to audit attempts to access files and folders on a shared folder.  The Detailed File Share setting logs an event every time a file or folder is  accessed, whereas the File Share setting only records one event for any  connection established between a client and file share. Detailed File Share  audit events include detailed information about the permissions or other  criteria used to grant or deny access.   If you configure this policy setting, an audit event is generated when  an attempt is made to access a file or folder on a share. The administrator  can specify whether to audit only successes, only failures, or both successes  and failures. | `./Vendor/MSFT/Policy/Config/Audit/ObjectAccess_AuditDetailedFileShare` | Integer: 2     |
| Audit File Share                                             | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit attempts to access a shared folder. If you configure this policy setting, an  audit event is generated when an attempt is made to access a shared folder.  If this policy setting is defined, the administrator can specify whether to  audit only successes, only failures, or both successes and failures. | `./Vendor/MSFT/Policy/Config/Audit/ObjectAccess_AuditFileShare` | Integer: 3     |
| Audit Other Object Access Events                             | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by the management of task  scheduler jobs or COM+ objects. For scheduler jobs, the following are  audited: Job created. Job deleted. Job  enabled. Job disabled. Job updated. For COM+ objects, the following are  audited: Catalog object added. Catalog  object updated. Catalog object deleted. | `./Vendor/MSFT/Policy/Config/Audit/ObjectAccess_AuditOtherObjectAccessEvents` | Integer: 3     |
| Audit Removable Storage                                      | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit user attempts to access file system  objects on a removable storage device. A security audit event is generated  only for all objects for all types of access requested. If you configure this policy setting, an  audit event is generated each time an account accesses a file system object  on a removable storage. Success audits record successful attempts and Failure  audits record unsuccessful attempts.   If you do not configure this policy setting, no audit event is  generated when an account accesses a file system object on a removable  storage. | `./Vendor/MSFT/Policy/Config/Audit/ObjectAccess_AuditRemovableStorage` | Integer: 3     |
| Audit Authentication Policy Change                           | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by changes to the  authentication policy. If you configure this policy setting, an audit event  is generated when an attempt to change the authentication policy is made.  Success audits record successful attempts and Failure audits record  unsuccessful attempts. If you do not configure this policy setting, no audit  event is generated when the authentication policy is changed. | `./Vendor/MSFT/Policy/Config/Audit/PolicyChange_AuditAuthenticationPolicyChange` | Integer: 1     |
| Audit MPSSVC Rule Level                                      | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This policy  setting allows you to audit events generated by changes in policy rules used  by the Microsoft Protection Service (MPSSVC). This service is used by Windows  Firewall. If you configure this policy setting, an audit event is generated  by attempts to change policy rules used by the MPSSVC. Success audits record  successful attempts and Failure audits record unsuccessful attempts. If you  do not configure this policy setting, no audit event is generated by changes  in policy rules used by the MPSSVC. | `./Vendor/MSFT/Policy/Config/Audit/PolicyChange_AuditMPSSVCRuleLevelPolicyChange` | Integer: 3     |
| Audit Other Policy Change Events                             | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by other security policy  changes that are not audited in the policy change category, such as the  following: Trusted Platform Module  (TPM) configuration changes. Kernel-mode cryptographic self tests.  Cryptographic provider operations. Cryptographic context operations or  modifications. Applied Central Access Policies (CAPs) changes. Boot  Configuration Data (BCD) modifications. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/PolicyChange_AuditOtherPolicyChangeEvents` | Integer: 3     |
| Audit Policy Change                                          | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit changes in the security audit policy  settings, such as the following:   Settings permissions and audit settings on the Audit Policy object.  Changes to the system audit policy. Registration of security event sources.  De-registration of security event sources. Changes to the per-user audit  settings. Changes to the value of CrashOnAuditFail. Changes to the system  access control list on a file system or registry object. Changes to the  Special Groups list. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/PolicyChange_AuditPolicyChange` | Integer: 3     |
| Audit Sensitive Privilege Use                                | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated when sensitive privileges  (user rights) are used, such as the following: A privileged service is called. One of the  following privileges are called: Act as part of the operating system. Back up  files and directories. Create a token object. Debug programs. Enable computer  and user accounts to be trusted for delegation. Generate security audits. Impersonate  a client after authentication. Load and unload device drivers. Manage  auditing and security log. Modify firmware environment values. Replace a  process-level token. Restore files and directories. Take ownership of files  or other objects. | `./Vendor/MSFT/Policy/Config/Audit/PrivilegeUse_AuditSensitivePrivilegeUse` | Integer: 3     |
| Audit Other System Events                                    | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit any of the following events: Startup and shutdown of the Windows  Firewall service and driver. Security policy processing by the Windows  Firewall Service. Cryptography key file and migration operations. Volume:  Low. | `./Vendor/MSFT/Policy/Config/Audit/System_AuditOtherSystemEvents` | Integer: 3     |
| Audit Security State Change                                  | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events generated by changes in the  security state of the computer, such as the following events: Startup and shutdown of the computer.  Change of system time. Recovering the system from CrashOnAuditFail, which is  logged after a system restarts when the security event log is full and the  CrashOnAuditFail registry entry is configured. Volume: Low. | `./Vendor/MSFT/Policy/Config/Audit/System_AuditSecurityStateChange` | Integer: 1     |
| Audit Security System Extension                              | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events related to security system  extensions or services. If you configure this policy setting, an audit event  is generated when an attempt is made to load a security system extension.  Success audits record successful attempts and Failure audits record  unsuccessful attempts. If you do not configure this policy setting, no audit  event is generated when an attempt is made to load a security system  extension. Volume: Low. Security  system extension events are generated more often on a domain controller than  on client computers or member servers. | `./Vendor/MSFT/Policy/Config/Audit/System_AuditSecuritySystemExtension` | Integer: 1     |
| Audit System Integrity                                       | Added in Windows 10, version 1903. Also  available in Windows 10, versions 1809 and 1803 through servicing. This  policy setting allows you to audit events that violate the integrity of the  security subsystem, such as the following:   Events that could not be written to the event log because of a problem  with the auditing system. A process that uses a local procedure call (LPC)  port that is not valid in an attempt to impersonate a client by replying,  reading, or writing to or from a client address space. The detection of a  Remote Procedure Call (RPC) that compromises system integrity. The detection  of a hash value of an executable file that is not valid as determined by Code  Integrity. Cryptographic operations that compromise system integrity. Volume:  Low. | `./Vendor/MSFT/Policy/Config/Audit/System_AuditSystemIntegrity` | Integer: 3     |
| Allow Windows Ink Workspace                                  | Added in Windows 10, version 1607. Specifies  whether to allow the user to access the ink workspace. ADMX Info:   GP English name: Allow Windows Ink Workspace GP name: AllowWindowsInkWorkspace  GP element: AllowWindowsInkWorkspaceDropdown GP path: Windows Components/Windows  Ink Workspace GP ADMX file name: WindowsInkWorkspace.admx Value type is int.  The following list shows the supported values: 0 - access to ink workspace is disabled.  The feature is turned off. 1 - ink workspace is enabled (feature is turned  on), but the user cannot access it above the lock screen. 2 (default) - ink  workspace is enabled (feature is turned on), and the user is allowed to use  it above the lock screen. | `./Vendor/MSFT/Policy/Config/WindowsInkWorkspace/AllowWindowsInkWorkspace` | Integer: 1     |
| Allow Find My Files                                          | Controls if the user can configure search to  Find My Files mode, which searches files in secondary hard drives and also  outside of the user profile. Find My Files does not allow users to search  files or locations to which they do not have access. ADMX Info:   GP English name: Allow Find My Files GP name: AllowFindMyFiles GP  path: Computer Configuration/Administrative Templates/Windows  Components/Search GP ADMX file name: Search.admx The following list shows the  supported values: 1 (Default) - Find  My Files feature can be toggled (still off by default), and the settings UI  is present. 0 - Find My Files feature is turned off completely, and the  settings UI is disabled. | `./Device/Vendor/MSFT/Policy/Config/Search/AllowIndexingEncryptedStoresOrItems` | Integer: 0     |
| Allow indexing of encrypted files                            | Allows or disallows the indexing of items.  This switch is for the Windows Search Indexer, which controls whether it will  index items that are encrypted, such as the Windows Information Protection  (WIP) protected files. When the policy  is enabled, WIP protected items are indexed and the metadata about them are  stored in an unencrypted location. The metadata includes things like file  path and date modified. When the  policy is disabled, the WIP protected items are not indexed and do not show  up in the results in Cortana or file explorer. There may also be a  performance impact on photos and Groove apps if there are a lot of WIP  protected media files on the device.   Most restricted value is 0. | `./Vendor/MSFT/Policy/Config/Search/AllowIndexingEncryptedStoresOrItems` | Integer: 0     |
| Allow Telemetry                                              | Allows the device to send diagnostic and  usage telemetry data, such as Watson. The following list shows the supported  values for Windows 8.1: 0 - Not  allowed. 1 – Allowed, except for Secondary Data Requests. 2 (default) –  Allowed. In Windows 10, you can configure this policy setting to decide what  level of diagnostic data to send to Microsoft. The following list shows the  supported values for Windows 10: 0 –  (Security) Sends information that is required to help keep Windows more  secure, including data about the Connected User Experience and Telemetry  component settings, the Malicious Software Removal Tool, and Microsoft  Defender. Note: This value is only applicable to Windows 10 Enterprise,  Windows 10 Education, Windows 10 Mobile Enterprise, Windows 10 IoT Core (IoT  Core), Hololens 2, and Windows Server 2016. Using this setting on other  devices is equivalent to setting the value of 1. | `./Device/Vendor/MSFT/Policy/Config/System/AllowTelemetry`     | Integer: 0     |
| Prevent access to the about:flags page                       | By default, users can access the about:flags  page in Microsoft Edge, which is used to change developer settings and enable  experimental features. Enabling this policy prevents users from accessing the  about:flags page. | `./Vendor/MSFT/Policy/Config/Browser/PreventAccessToAboutFlagsInMicrosoftEdge` | Integer: 1     |
| Windows Hello for Business                                   | Boolean value that sets Windows Hello for  Business as a method for signing into Windows. | `./Vendor/MSFT/PassportforWork/f87adb37-069d-44ab-b352-f6d61ecc6db2/Policies/UsePassportForWork` | Boolean: False |
| Store for Business Private only                              | Block the Windows 10 public store but allow access to the business store. | `./Vendor/MSFT/Policy/Config/ApplicationManagement/RequirePrivateStoreOnly` | Integer: 1     |

#### Blueprint - Delivery Optimisation

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                           |
| ------------------ | --------------------------------------- |
| Profile Name       | Blueprint - Delivery Optimisation |
| Profile type       | Delivery Optimisation                   |
| Platform supported | Windows 10 and later                    |
| Groups excluded    | 0                                       |
| Assigned           | Yes                                     |
| Groups assigned    | `grp-agency-windows10-dynamic`          |

The following table outlines the configuration settings within the profile.

| Item                                                 | Configuration                                 |
| ---------------------------------------------------- | --------------------------------------------- |
| Download mode                                        | HTTP blended with peering behind same NAT (1) |
| Bandwidth  optimization type                         | Percentage                                    |
| Maximum  foreground download bandwidth (in %)        | 70                                            |
| Maximum  background download bandwidth (in %)        | 25                                            |
| Delay  background HTTP download (in seconds)         | 60                                            |
| Delay  foreground HTTP download (in seconds)         | 60                                            |
| Minimum  RAM required for peer caching (in GB)       | 4                                             |
| Minimum  disk size required for peer caching (in GB) | 32                                            |
| Minimum  content file size for peer caching (in MB)  | 5                                             |
| Minimum  battery level required to upload (in %)     | 40                                            |
| Maximum  cache age (in days)                         | 7                                             |
| Maximum  cache size type                             | Percentage                                    |
| Maximum  cache size (in %)                           | 20                                            |

#### Blueprint - Network Boundary

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                      |
| ------------------ | ---------------------------------- |
| Profile Name       | Blueprint - Network Boundary |
| Profile type       | Network Boundary                   |
| Platform supported | Windows 10 and later               |
| Groups excluded    | 0                                  |
| Assigned           | Yes                                |
| Groups assigned    | `grp-agency-windows10-dynamic`     |

The following table outlines the configuration settings within the profile.

| Item                                              | Configuration                                                |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Cloud resources                                   | `sharepoint.com|www.yammer.com|yammer.com|persona.yammer.com|outlook.office.com|outlook.office365.com|attachments.office.net|crm.dynamics.com|visualstudio.com|powerbi.com|teams.microsoft.com|tasks.office.com|protection.office.com|meet.lync.com|project.microsoft.com` |

#### Blueprint - OneDrive Device

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                          |
| ------------------ | ------------------------------------------------------ |
| Profile Name       | Blueprint - OneDrive Device                      |
| Profile type       | Administrative templates                               |
| Platform supported | Windows 10 and later                                   |
| Groups excluded    | 0                                                      |
| Assigned           | Yes                                                    |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the profile.

| Item                                                         | Type   | ADMX Path | Value                                                |
| ------------------------------------------------------------ | ------ | --------- | ---------------------------------------------------- |
| Silently move Windows known folders to OneDrive              | Device | \OneDrive | Enabled: Agency tenant ID<br>Show notification: No |
| Prevent users from syncing libraries and folders shared from other organizations | Device | \OneDrive | Enabled                                              |
| Require users to confirm large delete operations             | Device | \OneDrive | Enabled                                              |
| Set the sync app update ring                              | Device | \OneDrive | Enabled: Production                                  |
| Prevent users from redirecting their Windows known folders to their PC | Device | \OneDrive | Enabled                                              |
| Use OneDrive Files On-Demand                                 | Device | \OneDrive | Enabled                                              |

#### Blueprint - OneDrive User

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                       |
| ------------------ | --------------------------------------------------- |
| Profile Name       | Blueprint - OneDrive User                     |
| Profile type       | Administrative templates                            |
| Platform supported | Windows 10 and later                                |
| Groups excluded    | 0                                                   |
| Assigned           | Yes                                                 |
| Groups assigned    | `rol-Agency-users, rol-Agency-Administrators` |

The following table outlines the settings within the profile.

| Item                                                  | Type | ADMX Path | Value   |
| ----------------------------------------------------- | ---- | --------- | ------- |
| Coauthor and share in Office desktop apps             | User | \OneDrive | Enabled |
| Prevent users from syncing personal OneDrive accounts | User | \OneDrive | Enabled |

#### Custom - Desktop Configuration CSP

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                               |
| ------------------ | ------------------------------------------- |
| Profile Name       | Custom - Desktop Configuration CSP |
| Profile type       | Custom                                      |
| Platform supported | Windows 10 and later                        |
| Groups excluded    | 0                                           |
| Assigned           | Yes                                         |
| Groups assigned    | `grp-agency-windows10-dynamic`              |

The following table outlines the OMA-URI settings within the profile.

| Name                             | Description    | OMA-URI                                                      | Value                                                        |
| -------------------------------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| DefaultAssociationsConfiguration | Not configured | `./Vendor/MSFT/Policy/Config/ApplicationDefaults/DefaultAssociationsConfiguration` | Agency to generate base64 file on reference computer. <br>See [ApplicationDefaults policy csp](https://docs.microsoft.com/en-us/windows/client-management/mdm/policy-csp-applicationdefaults). |
| TimeZone                         | Not configured | `./Device/Vendor/MSFT/Policy/Config/TimeLanguageSettings/ConfigureTimeZone` | String: AUS Eastern Standard Time                            |

#### Custom - Device Restrictions

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                         |
| ------------------ | ------------------------------------- |
| Profile Name       | Custom - Device Restrictions |
| Profile type       | Device Restrictions                   |
| Platform supported | Windows 10 and later                  |
| Groups excluded    | 0                                     |
| Assigned           | Yes                                   |
| Groups assigned    | `grp-agency-windows10-dynamic`        |

The following table outlines the configuration settings within the profile.

| Item                           | Configuration                                                |
| ------------------------------ | ------------------------------------------------------------ |
| **Locked Screen Experience**            |                                                              |
| Locked screen picture URL (Desktop only) | Agency to define                                             |
| **Personalization**            |                                                              |
| Desktop background picture URL | Agency to define                                             |
| **Start**                      |                                                              |
| Start Menu Layout              | File: [Start_menu_layout.xml](../files/abac/Start_menu_layout.xml) |

#### Custom - Edge Browser

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                                |
| ------------------ | ------------------------------------------------------------ |
| Profile Name       | Custom - Edge Browser                               |
| Profile type       | Administrative templates                                     |
| Platform supported | Windows 10 and later                                         |
| Groups excluded    | 0                                                            |
| Assigned           | Yes                                                          |
| Groups assigned    | `grp-agency-windows10-dynamic, rol-Agency-Administrators, rol-Agency-users` |

The following table outlines the settings within the profile.

| Item                                                         | Type   | ADMX Path                                                    | Value                                           |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------ | ----------------------------------------------- |
| Action to take on startup                                    | Device | \Microsoft Edge\Startup, home page and new tab page          | Open a list of URLs                             |
| Browser  sign-in settings                                    | Device | \Microsoft  Edge                                             | Force users to sign-in to use the browser       |
| Configure  the new tab page URL                              | Device | \Microsoft  Edge\Startup, home page and new tab page         | Agency to define                                |
| Configure  whether a user always has a default profile automatically signed in with  their work or school account | Device | \Microsoft  Edge                                             | Enabled                                         |
| Default  search provider name                                | Device | \Microsoft  Edge\Default search provider                     | Agency to define                                |
| Default  search provider search URL                          | Device | \Microsoft  Edge\Default search provider                     | Agency to define                                |
| Default  search provider URL for suggestions                 | Device | \Microsoft  Edge\Default search provider                     | Agency to define                                |
| Enable  the default search provider                          | Device | \Microsoft  Edge\Default search provider                     | Enabled                                         |
| Force  synchronization of browser data and do not show the sync consent prompt | Device | \Microsoft  Edge                                             | Enabled                                         |
| Hide  the First-run experience and splash screen             | Device | \Microsoft  Edge                                             | Enabled                                         |
| Site  to Zone Assignment List                                | Device | \Windows  Components\Internet Explorer\Internet Control Panel\Security Page | https://autologon.microsoftazuread-sso.com  - 1 |
| Sites  to open when the browser starts                       | Device | \Microsoft  Edge\Startup, home page and new tab page         | Agency to define                                |

#### Custom - Interactive Logon Banner CSP

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                  |
| ------------------ | ---------------------------------------------- |
| Profile Name       | Custom - Interactive Logon Banner CSP |
| Profile type       | Custom                                         |
| Platform supported | Windows 10 and later                           |
| Groups excluded    | 0                                              |
| Assigned           | Yes                                            |
| Groups assigned    | `grp-agency-windows10-dynamic`                 |

The following table outlines the OMA-URI settings within the profile.

| Name                               | Description    | OMA-URI                                                      | Value                                      |
| ---------------------------------- | -------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Interactive Login Banner -   Title | Not configured | `./Vendor/MSFT/Policy/Config/LocalPoliciesSecurityOptions/InteractiveLogon_MessageTitleForUsersAttemptingToLogOn` | String: Agency to define warning title     |
| Interactive Login Banner - Text    | Not Configured | `./Vendor/MSFT/Policy/Config/LocalPoliciesSecurityOptions/InteractiveLogon_MessageTextForUsersAttemptingToLogOn` | String: Agency to define logon banner text |

#### Custom - Windows Defender Application Control CSP

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                              |
| ------------------ | ---------------------------------------------------------- |
| Profile Name       | Custom - Windows Defender Application Control CSP |
| Profile type       | Custom                                                     |
| Platform supported | Windows 10 and later                                       |
| Groups excluded    | 0                                                          |
| Assigned           | Yes                                                        |
| Groups assigned    | `grp-agency-windows10-dynamic`                             |

The following table outlines the OMA-URI settings within the profile.

| Name            | Description                                                  | OMA-URI                                                      | Value                                                        |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| WDACBasePolicy  | The ApplicationControl CSP enforces that the "ID" segment of a given policy URI is the same GUID as the policy ID in the policy blob. Each Policy GUID node contains a Policy node and a corresponding PolicyInfo node. | `./Vendor/MSFT/ApplicationControl/Policies/(policy GUID)/Policy` | Base64 (file) (see [Client devices technical instruction](../../as-built-as-configured/wdac-policy-creation#wdac-policy---baseline) |
| WDACSuppPolicy1 | Additional supplemental policy from generated from a base WDAC policy. | `./Vendor/MSFT/ApplicationControl/Policies/(policy GUID)/Policy` | Base64 (file) (see [Client devices technical instruction](../../as-built-as-configured/wdac-policy-creation#wdac-policy---supplementary-policy) |

### iOS Devices

`Microsoft Endpoint Manager > Devices > Configuration profiles > Create Profile > iOS/iPadOS`

#### Blueprint - iOS device restrictions

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                 |
| ------------------ | --------------------------------------------- |
| Profile Name       | Blueprint - iOS device restrictions              |
| Profile type       | Device Restrictions                           |
| Platform supported | iOS/iPadOS                                    |
| Groups excluded    | 0                                             |
| Assigned           | Yes                                           |
| Groups assigned    | `rol-Agency-users, rol-Agency-Administrators` |

Configuration settings:

- App Store, Doc Viewing, Gaming
  - Block viewing corporate documents in unmanaged apps: `Yes`
  - Treat AirDrop as an unmanaged destination: `Yes`
  - Viewing non-corporate documents in corporate apps: `Yes`
  - Block in-app purchases: `Yes`
  - Block download of explicit sexual content in Apple Books: `Yes`
  - Block App store: `Yes`
  - Block playback of explicit iTunes music, podcast, or news content: `Yes`
  - Block adding Game Center friends: `Yes`
  - Block Game Center: `Yes`
  - Block multiplayer gaming in the Game Center: `Yes`
  - Block Access to network drive in Files app: `Yes`
- Built-in Apps
  - Block Siri: `Yes`
  - Require Safari fraud warnings: `Yes`
  - Block internet search results from Spotlight: `Yes`
  - Safari cookies: `Block all cookies, and block cross site tracking`
  - Block Safari JavaScript: `Yes`
  - Block Safari pop-ups: `Yes`
  - Block Siri for dictation: `Yes`
  - Block camera: `Yes`
  - Block Apple Book: `Yes`
  - Block iTunes Store: `Yes`
  - Block Find My iPhone: `Yes`
  - Block Find My Friends: `Yes`
  - Block user modification to the Find My Friends settings: `Yes`
  - Block removal of system apps from device: `Yes`
  - Block Safari Autofill: `Yes`
- Cloud and Storage
  - Force Encrypted backup: `Yes`
  - Block managed apps from storing data in iCloud: `Yes`
  - Block backup of enterprise books: `Yes`
  - Block notes and highlights sync for enterprise books: `Yes`
  - Block iCloud Photos sync: `Yes`
  - Block iCloud Photo Library: `Yes`
  - Block My photo stream: `Yes`
  - Block Handoff: `Yes`
  - Block iCloud backup: `Yes`
  - Block iCloud document and data sync: `Yes`
  - Block iCloud Keychain sync: `Yes`
- Connected Devices
  - Force wrist detection for paired Apple Watch: `Yes`
  - Require AirPlay outgoing requests pairing password: `Yes`
  - Block Apple Watch auto unlock: `Yes`
  - Block AirDrop: `Yes`
  - Block pairing with Apple Watch: `Yes`
  - Block pairing with non-Configurator hosts: `Yes`
  - Block AirPrint: `Block`
  - Block setting up new nearby devices: `Yes`
  - Block access to USB drive in Files app: `Yes`
  - Disable near-field communication (NFC): `Yes`
- General
  - Block sending diagnostic and usage data to Apple: `Yes`
  - Block screenshots and screen recording: `Yes`
  - Block untrusted TLS certificates: `Yes`
  - Block over-the-air PKI updates: `Yes`
  - Force limited ad tracking: `Yes`
  - Block trusting new enterprise app authors: `Yes`
  - Limit Apple personalized advertising: `Yes`
  - Block modification of account settings: `Block`
  - Block Screen Time: `Yes`
  - Block use of erase all content and settings: `Yes`
  - Block modification of device name: `Yes`
  - Block modification of notifications settings: `Yes`
  - Block modification of Wallpaper: `Yes`
  - Block configuration profile changes: `Yes`
  - Allow activation lock: `Yes`
  - Block removing apps: `Yes`
  - Block app clips: `Yes`
  - Force automatic date and time: `Yes`
  - Block VPN creation: `Yes`
  - Block modification of eSIM settings: `Yes`
- Lock Screen Experience
  - Block Control Center access in lock screen: `Yes`
  - Block Notification Center access in lock screen: `Yes`
  - Block Today view in lock screen: `Yes`
  - Block Wallet notifications in lock screen: `Yes`
- Password
  - Require Password: `Yes`
  - Block Simple passwords: `Yes`
  - Required password type: `Alphanumeric`
  - Number of non-alphanumerics characters in password: `1`
  - Minimum password length: `14`
  - Number of sign-in failures before wiping the device: `11`
  - Maximum minutes after screen lock before password is required: `Immediately`
  - Maximum minutes of inactivity until screen locks: `2 Minutes`
  - Password expiration (days): `365`
  - Prevent reuse of previous passwords: `5`
  - Block Touch ID and Face ID unlock: `Yes`
  - Block password AutoFill: `Yes`
  - Block password proximity requests: `Yes`
  - Block password sharing: `Yes`
- Restricted Apps
  - Type of restricted app list: `Approved apps` 

| App store URL                                                | App bundle ID                    | App Name                     | Publisher             |
| ------------------------------------------------------------ | -------------------------------- | ---------------------------- | --------------------- |
| https://apps.apple.com/au/app/adobe-acrobat-reader-for-pdf/id469337564 | com.adobe.Adobe-Reader           | Adobe Acrobat Reader for PDF | Adobe Inc             |
| https://apps.apple.com/us/app/microsoft-authenticator/id983156458 | com.microsoft.azureauthenticator | Microsoft Authenticator      | Microsoft Corporation |
| https://apps.apple.com/us/app/microsoft-edge/id1288723196    | com.microsoft.msedge             | Microsoft Edge               | Microsoft Corporation |
| https://apps.apple.com/us/app/microsoft-excel/id586683407    | com.microsoft.Office.Excel       | Microsoft Excel              | Microsoft Corporation |
| https://apps.apple.com/us/app/microsoft-onedrive/id477537958 | com.microsoft.skydrive           | Microsoft OneDrive           | Microsoft Corporation |
| https://apps.apple.com/au/app/microsoft-onenote/id410395246  | com.microsoft.onenote            | Microsoft OneNote            | Microsoft Corporation |
| https://apps.apple.com/au/app/microsoft-powerpoint/id586449534 | com.microsoft.Office.Powerpoint  | Microsoft PowerPoint         | Microsoft Corporation |
| https://apps.apple.com/us/app/microsoft-outlook/id951937596  | com.microsoft.Office.Outlook     | Microsoft Outlook            | Microsoft Corporation |
| https://apps.apple.com/au/app/microsoft-sharepoint/id1091505266 | com.microsoft.sharepoint         | Microsoft SharePoint         | Microsoft Corporation |
| https://apps.apple.com/us/app/microsoft-teams/id1113153706   | com.microsoft.skype.teams        | Microsoft Teams              | Microsoft Corporation |
| https://apps.apple.com/us/app/microsoft-word/id586447913     | com.microsoft.Office.Word        | Microsoft Word               | Microsoft Corporation |
| https://apps.apple.com/au/app/power-apps/id1047318566        | com.microsoft.msapps             | PowerApps                    | Microsoft Corporation |

- Shared iPad
  - Block Shared iPad temporary sessions: `Yes`
- Wireless
  - Block voice dialing while device is locked: `Yes`
  - Require joining Wi-Fi networks only using configuration profiles: `Yes`

#### Custom - iOS device feature policy

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                 |
| ------------------ | --------------------------------------------- |
| Profile Name       | Custom - iOS device feature policy            |
| Profile type       | Device Features                               |
| Platform supported | iOS/iPadOS                                    |
| Groups excluded    | 0                                             |
| Assigned           | Yes                                           |
| Groups assigned    | `rol-Agency-users, rol-Agency-Administrators` |

Configuration settings:

- Lock Screen Message	
  - "If Lost, Return to..." Message: `If lost return to the <Agency Name>`
- Wallpaper
  - Wallpaper Display Location: `Lock Screen and Home Screen`
  - Wallpaper Image: `Agency wallpaper`

#### Custom - Per App VPN

The following table outlines the profile is created for all implementation types.

| Item               | Configuration                                 |
| ------------------ | --------------------------------------------- |
| Profile Name       | Custom - Per App VPN                          |
| Profile type       | VPN                                           |
| Platform supported | iOS/iPadOS                                    |
| Groups excluded    | 0                                             |
| Assigned           | Yes                                           |
| Groups assigned    | `rol-Agency-users, rol-Agency-Administrators` |

Configuration settings:

- Connection Type: `VPN Provider`
- Connection name: `PerApp VPN`
- VPN Address: `XXX.XXX.XXX.XXX`
- Authentication method: `username and password`
- Split tunnelling: `Disabled`
- Type of automatic VPN: `Per-app VPN`
- Block users from disabling automatic VPN: `Yes`

## Endpoint Security

The ABAC settings for the Agency Microsoft Endpoint Manager - Intune (Intune) Endpoint Security settings can be found below. This includes configuration specific to Windows devices for Antivirus, Disk Encryption, Firewall, Endpoint Detection and Response, Attack Surface Reduction, Account Protection and Microsoft Defender for Endpoint. 

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Windows Client Devices

`Microsoft Endpoint Manager > Endpoint Security`

#### Antivirus

`Microsoft Endpoint Manager > Endpoint Security > Antivirus`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Policy Name        | ACSC - Defender Antivirus      |
| Profile            | Microsoft Defender Antivirus   |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the policy.

| Item                                                         | Configuration                   |
| ------------------------------------------------------------ | ------------------------------- |
| **Cloud protection**                                         |                                 |
| Turn on cloud-delivered protection                           | Yes                             |
| Cloud-delivered protection level                             | High                            |
| Defender Cloud Extended Timeout In Seconds                   | 50                              |
| **Microsoft Defender Antivirus Exclusions**                  |                                 |
| Disable local admin merge                                    | Yes                             |
| Defender Processes To Exclude                                | Agency to define (if required)  |
| File extensions to exclude from scans and  real-time protection | 0 items                      |
| Defender Files and Folders to Exclude                        | Agency to define (if required)  |
| **Real-time protection**                                     |                                 |
| Turn on real-time protection                                 | Yes                             |
| Enable on access protection                                  | Yes                             |
| Monitoring for incoming and outgoing files                   | Monitor all files               |
| Turn on behavior monitoring                                  | Yes                             |
| Turn on intrusion protection                                 | Yes                             |
| Enable network protection                                    | Enabled                         |
| Scan all downloaded files and attachments                    | Yes                             |
| Scan scripts that are used in Microsoft browsers             | Yes                             |
| Scan network files                                           | Yes                             |
| Scan emails                                                  | Yes                             |
| **Remediation**                                              |                                 |
| Number of days (0-90) to keep quarantined  malware           | 0                               |
| Submit samples consent                                       | Send all samples automatically  |
| Action to take on potentially unwanted apps                  | Enable                          |
| **Scan**                                                     |                                 |
| Scan archive files                                           | Yes                             |
| Use low CPU priority for scheduled scans                     | Yes                             |
| Disable catch-up full scan                                   | No                              |
| Disable Catchup Quick Scan                                   | No                              |
| CPU usage limit per scan                                     | 50                              |
| Scan mapped network drives during full scan                  | Yes                             |
| Run daily quick scan at                                      | 2 AM                            |
| Scan type                                                    | Quick scan                      |
| Check for signature updates before running  scan             | Yes                             |
| **Updates**                                                  |                                 |
| Enter how often (0-24 hours) to check for  security intelligence updates | 1                   |
| Define file shares for downloading  definition updates       | 0 items                         |
| Define the order of sources for downloading  definition updates | 0 items                      |
| **User experience**                                          |                                 |
| Allow user access to Microsoft Defender app                  | Yes                             |

#### Windows Security

`Microsoft Endpoint Manager > Endpoint Security > Antivirus`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Policy Name        | ACSC - Windows Security        |
| Profile            | Windows Security experience    |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the policy.

| Item                                                         | Configuration                   |
| ------------------------------------------------------------ | ------------------------------- |
| **Windows Security**                                         |                                 |
| Enable tamper protection to prevent Microsoft Defender being disabled | Enable                 |
| Windows Security app notifications                           | Block non-critical notifications|
| Disable the Clear TPM option in the Windows Security app     | Yes                             |

#### Disk Encryption

`Microsoft Endpoint Manager > Endpoint Security > Disk Encryption`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Policy Name        | ACSC - BitLocker               |
| Profile            | BitLocker                      |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 0                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the policy.

| Item                                                         | Configuration                              |
| ------------------------------------------------------------ | ------------------------------------------ |
| **BitLocker - Base Settings**                                |                                            |
| Enable full disk encryption for OS and fixed  data drives    | Yes                                        |
| Hide prompt about third-party encryption                     | Yes                                        |
| Allow standard users to enable encryption during Autopilot   | Yes                                        |
| Configure client-driven recovery password  rotation          | Enable rotation on Azure AD-joined devices |
| **BitLocker - Fixed Drive Settings**                         |                                            |
| BitLocker fixed drive policy                                 | Configure                                  |
| Fixed drive recovery                                         | Configure                                  |
| Recovery key file creation                                   | Allowed                                    |
| Configure BitLocker recovery package                         | Password and key                           |
| Require device to back up recovery information to Azure AD   | Yes                                        |
| Recovery password creation                                   | Allowed                                    |
| Hide recovery options during BitLocker setup                 | Yes                                        |
| Enable BitLocker after recovery information to store         | Yes                                        |
| Block write access to fixed data-drives not protected by BitLocker | Yes                                  |
| Configure encryption method for fixed  data-drives           | AES 256bit XTS                             |
| **BitLocker - OS Drive Settings**                            |                                            |
| BitLocker system drive policy                                | Configure                                  |
| Startup authentication required                              | Yes                                        |
| Compatible TPM startup                                       | Allowed                                    |
| Compatible TPM startup PIN                                   | Allowed                                    |
| Compatible TPM startup key                                   | Allowed                                    |
| Compatible TPM startup key and PIN                           | Allowed                                    |
| System drive recovery                                        | Configure                                  |
| Recovery key file creation                                   | Allowed                                    |
| Configure BitLocker recovery package                         | Password and key                           |
| Require device to back up recovery  information to Azure AD  | Yes                                        |
| Recovery password creation                                   | Allowed                                    |
| Hide recovery options during BitLocker setup                 | Yes                                        |
| Enable BitLocker after recovery information  to store        | Yes                                        |
| Minimum PIN length                                           | 14                                         |
| Configure encryption method for fixed  data-drives           | AES 256bit XTS                             |
| **BitLocker - Removable Drive Settings**                     |                                            |
| BitLocker removable drive policy                             | Configure                                  |
| Configure encryption method for removable  data-drives       | AES 256bit XTS                             |
| Block write access to removable data-drives not protected by BitLocker | Yes                              |
| Block write access to devices configured in  another organization | Yes                                   |

#### Firewall

`Microsoft Endpoint Manager > Endpoint Security > Firewall`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Policy Name        | ACSC - Defender Firewall       |
| Profile            | Microsoft Defender Firewall    |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 1                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the policy.

| Item                                                         | Configuration  |
| ------------------------------------------------------------ | -------------- |
| **Microsoft Defender Firewall**                              |                |
| Stateful File Transfer Protocol (FTP)                        | Allow          |
| Number of seconds a security association can  be idle before it's deleted | 300 |
| Preshared key encoding                                       | UTF8           |
| Certificate revocation list (CRL)  verification              | Attempt        |
| Turn on Microsoft Defender Firewall for  domain networks     | Yes            |
| Block stealth mode                                           | No             |
| Block unicast responses to multicast  broadcasts             | No             |
| Disable inbound notifications                                | Yes            |
| Block outbound connections                                   | Yes            |
| Block inbound connections                                    | Yes            |
| Ignore authorized application firewall rules                 | No             |
| Ignore global port firewall rules                            | No             |
| Ignore all local firewall rules                              | No             |
| Ignore connection security rules                             | No             |
| Turn on Microsoft Defender Firewall for  private networks    | Yes            |
| Block stealth mode                                           | No             |
| Block unicast responses to multicast  broadcasts             | No             |
| Disable inbound notifications                                | Yes            |
| Block outbound connections                                   | Yes            |
| Block inbound connections                                    | Yes            |
| Ignore authorized application firewall rules                 | No             |
| Ignore global port firewall rules                            | No             |
| Ignore all local firewall rules                              | No             |
| Ignore connection security rules                             | No             |
| Turn on Microsoft Defender Firewall for  public network      | Yes            |
| Block stealth mode                                           | No             |
| Block unicast responses to multicast  broadcasts             | No             |
| Disable inbound notifications                                | Yes            |
| Block outbound connections                                   | Yes            |
| Block inbound connections                                    | Yes            |
| Ignore authorized application firewall rules                 | No             |
| Ignore global port firewall rules                            | No             |
| Ignore all local firewall rules                              | No             |
| Ignore connection security rules                             | No             |

`Microsoft Endpoint Manager > Endpoint Security > Firewall`

The following table outlines the policy is created for all implementation types. 

Each firewall rule policy can contain up to 150 individual rules. Guidance on creating this policy can be found within [Windows Firewall rules import technical guide](../../as-built-as-configured/wfw-rules-import).

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Policy Name        | ACSC - Defender Firewall Rules  #(number) |
| Profile            | Microsoft Defender Firewall Rules|
| Platform supported | Windows 10 and later           |
| Groups excluded    | 1                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The exact firewall rules imported are specific to the agency reference computer and will vary depending on Windows version and build.

#### Endpoint Detection and Response

`Microsoft Endpoint Manager > Endpoint Security > Endpoint Detection and Response`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                          |
| ------------------ | -------------------------------------- |
| Policy Name        | ACSC - Endpoint Detection and Response |
| Profile            | Endpoint Detection and Response        |
| Platform supported | Windows 10 and later                   |
| Groups excluded    | 1                                      |
| Assigned           | Yes                                    |
| Groups assigned    | `grp-agency-windows10-dynamic`         |

The following table outlines the settings within the policy.

| Item                                                         | Configuration                 |
| ------------------------------------------------------------ | ----------------------------- |
| **Endpoint Detection and Response**                        |                               |
| Microsoft Defender for Endpoint client  configuration package type | Onboarding blob         |
| Microsoft Defender for Endpoint onboarding  blob             | Value has been set            |
| Microsoft Defender for Endpoint onboarding  filename         | WindowsDefenderATP.onboarding |
| Sample sharing for all files                                 | Yes                           |
| Expedite telemetry reporting frequency                       | Yes                           |

#### Attack Surface Reduction

`Microsoft Endpoint Manager > Endpoint Security > Attack Surface Reduction`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                   |
| ------------------ | ------------------------------- |
| Policy Name        | ACSC - Attack Surface Reduction |
| Profile            | Attack surface reduction rules  |
| Platform supported | Windows 10 and later            |
| Groups excluded    | 1                               |
| Assigned           | Yes                             |
| Groups assigned    | `grp-agency-windows10-dynamic`  |

The following table outlines the settings within the policy.

| Item                                                         | Configuration    |
| ------------------------------------------------------------ | ---------------- |
| Block persistence through WMI event subscription             | Block            |
| Block credential stealing from the Windows local security authority subsystem (lsass.exe) | Enable |
| Block Adobe Reader from creating child processes             | Enable           |
| Block Office applications from injecting code into other processes | Block      |
| Block Office applications from creating executable content   | Block            |
| Block all Office applications from creating child processes  | Block            |
| Block Win32 API calls from Office macro                      | Block            |
| Block Office communication apps from creating child processes | Enable          |
| Block execution of potentially obfuscated scripts (js/vbs/ps) | Block           |
| Block JavaScript or VBScript from launching downloaded executable content | Block |
| Block process creations originating from PSExec and WMI commands | Block        |
| Block untrusted and unsigned processes that run from USB     | Block            |
| Block executable files from running unless they meet a prevalence, age, or trusted list criteria | Block |
| Block executable content download from email and webmail clients | Block        |
| Use advanced protection against ransomware                   | Enable           |
| Enable folder protection                                     | Enable           |
| List of additional folders that need to be  protected        | 0 items          |
| List of apps that have access to protected  folders          | 0 items          |
| Exclude files and paths from attack surface reduction rules | Agency to define (if required)|

`Microsoft Endpoint Manager > Endpoint Security > Attack Surface Reduction`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                   |
| ------------------ | ------------------------------- |
| Policy Name        | ACSC - Device Control           |
| Profile            | Device Control                  |
| Platform supported | Windows 10 and later            |
| Groups excluded    | 1                               |
| Assigned           | Yes                             |
| Groups assigned    | `grp-agency-windows10-dynamic`  |

The following table outlines the settings within the policy.

| Item                                                         | Configuration    |
| ------------------------------------------------------------ | ---------------- |
| Allow hardware device installation by device identifiers     | Yes              |
| Allow list                                                   | Agency to define |
| Allow hardware device installation by setup class            | Yes              |
| Allow list                                                   | Agency to define |
| Allow hardware device installation by device instance identifiers| Yes          |
| Allow list                                                   | Agency to define |
| Scan removable drives during full scan                       | Yes              |
| Block direct memory access                                   | Enabled          |
| Enumeration of external devices incompatible with Kernel DMA Protection| Block All|
| Block bluetooth pre-pairing                                  | Yes              |
| Block bluetooth advertising                                  | Yes              |
| Block bluetooth proximal connections                         | Yes              |
| Bluetooth allowed services                                   |`00000000-deca-fade-deca-deafdecacaff 00001108-0000-1000-8000-00805F9B34FB 00001109-0000-1000-8000-00805F9B34FB 0000110A-0000-1000-8000-00805F9B34FB 0000110B-0000-1000-8000-00805F9B34FB 0000110C-0000-1000-8000-00805F9B34FB 0000110D-0000-1000-8000-00805F9B34FB 0000110E-0000-1000-8000-00805F9B34FB 0000110F-0000-1000-8000-00805F9B34FB 00001110-0000-1000-8000-00805F9B34FB 00001112-0000-1000-8000-00805F9B34FB 0000111E-0000-1000-8000-00805F9B34FB 0000111F-0000-1000-8000-00805F9B34FB 00001124-0000-1000-8000-00805F9B34FB 00001131-0000-1000-8000-00805F9B34FB 00001200-0000-1000-8000-00805F9B34FB 00001203-0000-1000-8000-00805F9B34FB 00001204-0000-1000-8000-00805F9B34FB 00001800-0000-1000-8000-00805F9B34FB 00001801-0000-1000-8000-00805F9B34FB 0000180A-0000-1000-8000-00805F9B34FB 00001812-0000-1000-8000-00805F9B34FB 00001813-0000-1000-8000-00805F9B34FB 82972387-294e-4d62-97b5-2668aa35f618`|

`Microsoft Endpoint Manager > Endpoint Security > Attack Surface Reduction`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                   |
| ------------------ | ------------------------------- |
| Policy Name        | ACSC - Application Guard        |
| Profile            | App and browser isolation       |
| Platform supported | Windows 10 and later            |
| Groups excluded    | 1                               |
| Assigned           | Yes                             |
| Groups assigned    | `grp-agency-windows10-dynamic`  |

The following table outlines the settings within the policy.

| Item                                                         | Configuration    |
| ------------------------------------------------------------ | ---------------- |
| Turn on Application Guard                                    | Enabled for Edge |
| Collect logs for events that occur within an Application Guard session | Yes    |


`Microsoft Endpoint Manager > Endpoint Security > Attack Surface Reduction`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                   |
| ------------------ | ------------------------------- |
| Policy Name        | ACSC - Exploit Protection       |
| Profile            | Exploit protection              |
| Platform supported | Windows 10 and later            |
| Groups excluded    | 1                               |
| Assigned           | Yes                             |
| Groups assigned    | `grp-agency-windows10-dynamic`  |

The following table outlines the settings within the policy.

| Item                                                         | Configuration    |
| ------------------------------------------------------------ | ---------------- |
| Upload XML                                                   | Agency to generate XML from from a reference computer. <br>See [create exploit guard policy](https://docs.microsoft.com/en-us/mem/configmgr/protect/deploy-use/create-deploy-exploit-guard-policy) |
| Block users from editing the Exploit Guard protection interface | Yes           |

#### Account Protection

`Microsoft Endpoint Manager > Endpoint Security > Account Protection`

The following table outlines the policy is created for all implementation types.

| Item               | Configuration                  |
| ------------------ | ------------------------------ |
| Policy Name        | ACSC - Account Protection      |
| Profile            | Account protection (preview)   |
| Platform supported | Windows 10 and later           |
| Groups excluded    | 1                              |
| Assigned           | Yes                            |
| Groups assigned    | `grp-agency-windows10-dynamic` |

The following table outlines the settings within the policy.

| Item                                    | Configuration                                                |
| --------------------------------------- | ------------------------------------------------------------ |
| Block Windows Hello for Business        | Enabled                                                      |
| Turn on Credential Guard                | Enable with UEFI lock                                        |

#### Defender for Endpoint

`Microsoft Endpoint Manager > Endpoint Security > Setup > Microsoft Defender for Endpoint`

The following table outlines the policy is created for all implementation types. 

Note, configuration is completed after Defender for Endpoint has been enabled to connect within Intune, see [connecting Microsoft Defender for Endpoint to Intune.](https://docs.microsoft.com/en-gb/mem/intune/protect/advanced-threat-protection?WT.mc_id=Portal-Microsoft_Intune_DeviceSettings)

The following table outlines the settings within the Microsoft Defender for Endpoint setup node.

| Item                                                         | Configuration |
| ------------------------------------------------------------ | ------------- |
| **MDM Compliance   Policy Settings**                         |               |
| Connect Android devices of version 6.0.0 and  above to Microsoft Defender ATP | Off           |
| Connect iOS devices version 8.0 and above to  Microsoft Defender ATP | On            |
| Connect Windows devices version 10.0.15063  and above to Microsoft Defender ATP | On            |
| Block unsupported OS versions                                | Off           |
| **App Protection Policy Settings**                           |               |
| Connect Android devices to Microsoft  Defender for Endpoint for app protection policy evaluation | Off           |
| Connect iOS devices to Microsoft Defender  for Endpoint for app protection policy evaluation | Off           |
| **Common Shared Settings**                                   |               |
| Number of days until partner is unresponsive                 | 0             |

## Scripts

In additional to configuration profiles, native Intune scripts are used to deploy configuration where there is not a supported configuration item natively to configure a setting on a Windows Device.

Scripts can be found within the following console node  `Microsoft Endpoint Manager> Devices > Scripts`

### Remove built-in apps

- Profile name: `RemoveBuiltInApps`
- Script settings
  - PowerShell script: [RemoveBuiltInApps.ps1](../files/abac/RemoveBuiltInApps.txt)
  - Run this script using the logged-on credentials: `No`
  - Enforce script signature check: `No`
  - Run script in 64 bit PowerShell Host: `No`
- Scope tags: `Default`
- Assignments
  - Included groups: ``grp-agency-windows10-dynamic``
  - Excluded groups: -
