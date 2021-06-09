---
layout: page
title: Hybrid - Microsoft Endpoint Manager - Intune applications for Windows devices
menu: abac
---

## Microsoft Endpoint Manager applications

The following Microsoft Endpoint Manager - Intune (Intune) applications can be found in the Azure Portal at `Microsoft Endpoint Manager > Apps > All apps`

### Citrix Workspace App

* Name: `Citrix Workspace App`
* Type: `Windows app (Win32)`
* App information
  * Publisher: `Citrix`
  * Category: `Productivity`
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: `Version 2002`
  * Logo: ![Citrix Workspace App](/assets/images/abac/citrix-workspace.png)
* Program
  * Install command: `CitrixWorkspaceApp.exe /silent /noreboot /AutoUpdateCheck=disabled EnableCEIP=False`
  * Uninstall command: `CitrixWorkspaceApp.exe /silent /uninstall`
  * Install behaviour: `System`
  * Device restart behaviour: `App install may force a device restart`
  * Return codes:
```
0 Success
1707 Success
3010 Soft reboot
1641 Hard reboot
1618 Retry
```
* Requirements
  * Operating system architecture: `X64`
  * Minimum operating system: `Windows 10 1903`
  * Disk space required (MB): -
  * Physical memory required (MB): -
  * Minimum number of logical processors required: -
  * Minimum CPU speed required (MHz): -
  * Additional requirement rules: -
* Detection rules
  * Rules format: `Manually configure detection rules`
  * Detection rules: 
```
File: %ProgramFiles (x86)%\Citrix\ICA Client\Receiver\ Receiver.exe
Version: Greater than or equal to 20.2.0.7
```
* Dependencies: -
* Scope tags: `Default`
* Assignments
  * Required: -
  * Available for enrolled devices: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Uninstall: -

### Microsoft Edge for Windows 10

* Name: `Microsoft Edge for Windows 10`
* Description: `Microsoft Edge is the browser for business with modern and legacy web compatibility, new privacy features such as Tracking prevention, and built-in productivity tools such as enterprise-grade PDF support and access to Office and corporate search right from a new tab.`
* Type: `Microsoft Edge (Windows 10)`
* App information
  * Publisher: `Microsoft`
  * Category: `Productivity`
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: `https://www.microsoft.com/en-us/windows/microsoft-edge`
  * Privacy URL: `https://privacy.microsoft.com/en-US/privacystatement`
  * Developer: `Microsoft`
  * Owner: `Microsoft`
  * Notes: -
  * Channel: `Stable`
  * Language: `Operating system default`
  * Logo: ![Microsoft Edge for Windows 10](/assets/images/abac/microsoft-edge-for-windows-10.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

### Office 365 monthly targeted

* Name: `Office 365 monthly targeted`
* Type: `Office 365 ProPlus Suite (Windows 10)`
* App information
  * Publisher: `Microsoft`
  * Category: `Productivity`
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: `Microsoft`
  * Owner: `Microsoft`
  * Notes: -
  * Logo: ![Microsoft Office](/assets/images/abac/microsoft-office.png)
* App suite configuration
  * Apps to be installed as part of the suite: `Excel, OneDrive Desktop, Outlook, PowerPoint, Publisher, Skype for Business, Teams, Word`
  * Architecture: `64-bit`
  * Update channel: `Monthly (Targeted)`
  * Remove other versions: `Yes`
  * Version to install: `Latest`
  * Use shared computer activation: `Yes`
  * Accept the Microsoft Software License Terms on behalf of users: `Yes`
  * Apps to be installed as part of the suite: `No languages selected`
* Scope tags: `Default`
* Assignments
  * Required: `grp-agency-windows10-dynamic`
  * Uninstall: -

## Windows information protection

`Microsoft Endpoint Manager > Apps > App protection policies`

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
