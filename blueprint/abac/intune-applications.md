---
layout: page
title: Microsoft Endpoint Manager - Intune applications
menu: abac
---

The following Microsoft Endpoint Manager - Intune (Intune) applications can be found in the Azure Portal at `Microsoft Endpoint Manager > Apps`

## Privileged access

* Name: `Privileged Access`
* Description: `Azure Portal`
* Type: `Web link`
* App information
  * Publisher: `Microsoft`
  * App URL: `https://portal.azure.com/#blade/Microsoft_Azure_PIMCommon/CommonMenuBlade/quickstart`
  * Require a managed browser to open this link: `No`
  * Category: `Productivity`
  * Show this as a featured app in the Company Portal: `No`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: -
* Scope tags: `Default`
* Assignments
  * Required: `grp-iPhone-Devices`, `grp-iOS-Devices`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Configuration Manager Trace (CMTrace) install

* Name: `CMTrace Install`
* Description: `Install CMTrace.exe and create shortcut on desktop to Intune log location to monitor.`
* Type: `Windows app (Win32)`
* App information
  * Publisher: `Microsoft`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: -
* Program
  * Install command: `powershell.exe -executionpolicy bypass -file CMTraceInstall.ps1` 
  * Uninstall command: `powershell.exe -executionpolicy bypass -file CMTraceRemove.ps1`
  * Install behaviour: `System`
  * Device restart behavior: `App install may force a device restart`
  * Return codes: 
```
0 Success
1707 Success
3010 Soft reboot
1641 Hard reboot
1618 Retry
```
* Requirements
  * Operating system architecture: `x64`
  * Minimum operating system: `Windows 10 1903`
  * Disk space required (MB): -
  * Physical memory required (MB): -
  * Minimum number of logical processors required: -
  * Minimum CPU speed required (MHz): -
  * Additional requirement rules: -
* Detection rules
  * Rules format: `Manually configure detection rules`
  * Detection rules: `File %windir%`
* Dependencies: -
* Scope tags: `Default`
* Assignments
  * Required: -`grp-agency-windows10-dynamic`
  * Available for enrolled devices: -
  * Uninstall: -

You will need a copy of:

* [CMTraceInstall.ps1](/assets/files/abac/CMTraceInstall.txt)
* [CMTraceRemove.ps1](/assets/files/abac/CMTraceRemove.txt)

## Company portal

* Name: `Company Portal`
* Description: -
* Type: `Web link`
* App information
  * Publisher: `Microsoft`
  * App URL: `https://portal.manage.microsoft.com/`
  * Require a managed browser to open this link: `No`
  * Category: `Business`
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: -
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Defender Advanced Threat Protection (ATP) registry recommendations

* Name: `Defender ATP Registry Recommendations`
* Description: `Registry settings as per MS Defender ATP recommendations`
* Type: `Windows app (Win32)`
* App information
  * Publisher: `<Agency Name>`
  * Category: -
  * Show this as a featured app in the Company Portal: `No`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: -
* Program
  * Install command: `%SystemRoot%\sysnative\WindowsPowerShell\v1.0\powershell.exe -executionpolicy bypass -file DefenderATP.ps1`
  * Uninstall command: `%SystemRoot%\sysnative\WindowsPowerShell\v1.0\powershell.exe -executionpolicy bypass -file DefenderATP.ps1`
  * Install behaviour: `System`
  * Device restart behavior: `App install may force a device restart`
  * Return codes: 
```
0 Success
1707 Success
3010 Soft reboot
1641 Hard reboot
1618 Retry
```
* Requirements
  * Operating system architecture: `x64`
  * Minimum operating system: `Windows 10 1903`
  * Disk space required (MB): -
  * Physical memory required (MB): -
  * Minimum number of logical processors required: -
  * Minimum CPU speed required (MHz): -
  * Additional requirement rules: -
* Detection rules
  * Rules format: `Manually configure detection rules`
  * Detection rules: `Registry Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters`
* Dependencies: -
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Users`
  * Available for enrolled devices: -
  * Uninstall: -

You will need a copy of:

*  [DefenderATP.ps1](/assets/files/abac/DefenderATP.txt)

## Microsoft Authenticator

* Name: `Microsoft Authenticator`
* Description: `Sign in is easy, convenient, and secure when you use Microsoft Authenticator. Use your phone, not your password, to log into your Microsoft account. You simply have to enter your username, then approve the notification sent to your phone. Your fingerprint, face ID, or PIN will provide a second layer of security in this two step verification process. After, you'll have access to all your Microsoft products`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-authenticator/id983156458?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Authenticator](/assets/images/abac/microsoft-authenticator.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Edge

* Name: `Microsoft Edge`
* Description: `Introducing the new Microsoft Edge. It’s time to expect more. More privacy. More control. More productivity. More value. Browse anywhere with one continuous experience from your phone to your computer and other signed-in devices. Microsoft Edge gives you the tools to protect your privacy online with features like tracking prevention, AdBlock Plus and InPrivate mode. Organise the web in a way that cuts through the clutter, making it easier to find, view and manage your content on-the-go. With world class compatibility, performance and new features, the new Microsoft Edge is the only browser you’ll ever need.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-edge/id1288723196?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Edge](/assets/images/abac/microsoft-edge.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Edge for Windows 10

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
  * Required: `grp-agency-windows10-dynamic`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Excel

* Name: `Microsoft Excel`
* Description: `Microsoft Excel, the spreadsheet app, lets you create, view, edit, and share your files quickly and easily. Manage spreadsheets, tables and workbooks attached to email messages from your phone with this powerful productivity app from Microsoft.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-excel/id586683407?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Excel](/assets/images/abac/microsoft-excel.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft OneDrive

* Name: `Microsoft OneDrive`
* Description: `Do more wherever you go with Microsoft OneDrive. Get to and share your documents, photos, and other files from your iOS device, computer (PC or Mac), and any other devices you use. Use the Office mobile apps to stay productive and work together, no matter where you are. The OneDrive app for iOS lets you easily work with your personal and work files when you're on the go.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-onedrive/id477537958?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft OneDrive](/assets/images/abac/microsoft-onedrive.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Outlook

* Name: `Microsoft Outlook`
* Description: `Outlook lets you bring all your email accounts and calendars in one convenient spot. Whether it's staying on top of your inbox or scheduling the next big thing, we make it easy to be your most productive, organized, and connected self.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-outlook/id951937596?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: `Productivity`
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Outlook](/assets/images/abac/microsoft-outlook.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Teams

* Name: `Microsoft Teams`
* Description: `Microsoft Teams is your hub for teamwork in Office 365. All your team conversations, files, meetings, and apps live together in a single shared workspace, and you can take it with you on your favourite mobile device. Whether you’re sprinting towards a deadline or sharing your next big idea, Teams can help you achieve more.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-teams/id1113153706?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Teams](/assets/images/abac/microsoft-teams.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Word

* Name: `Microsoft Word`
* Description: `The trusted Word app lets you create, edit, view, and share your files with others quickly and easily. Send, view and edit Office docs attached to emails from your phone with this powerful word processing app from Microsoft.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/us/app/microsoft-word/id586447913?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Word](/assets/images/abac/microsoft-word.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Power Apps

* Name: `Power Apps`
* Description: `Get Power Apps to use business apps made for your team and organization. Install Power Apps for iPhone and iPad to: Use custom Power Apps that were shared with you; Get work done from anywhere and on any device; Automate tasks and accomplish more • Access, capture, and share business data.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/au/app/power-apps/id1047318566?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![PowerApps](/assets/images/abac/microsoft-power-apps.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Whiteboard

* Name: `Microsoft Whiteboard`
* Description: `Microsoft Whiteboard provides a freeform intelligent canvas where teams can ideate, create and collaborate visually via the cloud. Designed for pen and touch, it lets you write or draw as smoothly as you would with ink, while automatically recognising and transforming shapes and tables as you draw. It enhances teamwork by allowing all team members to edit and comment directly on the canvas in real time, no matter where they are. And all your work stays safe in the cloud, ready to be picked back up from another location or device.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/au/app/microsoft-whiteboard/id1352499399?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Whiteboard](/assets/images/abac/Whiteboard.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft Planner

* Name: `Microsoft Planner`
* Description: `Planner provides a simple, visual way to organize teamwork. Planner makes it easy for your team to create new plans, organize and assign tasks, share files, chat about what you’re working on, and get updates on progress.`
* Type: `iOS store app`
* App information
  * Publisher: `Microsoft Corporation`
  * Appstore URL: `https://apps.apple.com/au/app/microsoft-planner/id1219301037?uo=4`
  * Minimum operating system: `iOS 14.0`
  * Applicable device type: `iPad`, `iPhone and iPod`
  * Category: -
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: -
  * Privacy URL: -
  * Developer: -
  * Owner: -
  * Notes: -
  * Logo: ![Microsoft Planner](/assets/images/abac/Planner.png)
* Scope tags: `Default`
* Assignments
  * Required: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Available for enrolled devices: -
  * Available with or without enrollment: -
  * Uninstall: -

## Microsoft 365 Apps for Windows 10

* Name: `Microsoft 365 Apps for Windows 10`
* Type: `Microsoft 365 Apps for Windows 10`
* App information
  * Publisher: `Microsoft`
  * Category: `Productivity`
  * Show this as a featured app in the Company Portal: `Yes`
  * Information URL: `https://products.office.com/en-us/explore-office-for-home`
  * Privacy URL: `https://privacy.microsoft.com/en-US/privacystatement`
  * Developer: `Microsoft`
  * Owner: `Microsoft`
  * Notes: -
  * Logo: ![Microsoft Office](/assets/images/abac/microsoft-office.png)
* App suite configuration
  * Apps to be installed as part of the suite: `Excel, Outlook, PowerPoint, Publisher, Teams, Word`
  * Architecture: `64-bit`
  * Update channel: `Current Channel`
  * Remove other versions: `Yes`
  * Version to install: `Latest`
  * Use shared computer activation: `Yes`
  * Accept the Microsoft Software License Terms on behalf of users: `Yes`
  * Apps to be installed as part of the suite: `No languages selected`
* Scope tags: `Default`
* Assignments
  * Required: `grp-agency-windows10-dynamic`
  * Uninstall: -
