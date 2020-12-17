---
layout: page
title: Intune configuration
menu: abac
---

The following can be found at `Intune > Devices > Configuration profiles`

## ACSC-Jan2020-MacroSecurity

* Name: `ACSC-Jan2020-MacroSecurity`
* Description: `Only digitally signed macros are enabled (hardened implementation)`
* Type: `Windows 10 and later`
* Profile Type: `Administrative Templates`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: -

Configuration settings

ClassType | CategoryPath | DisplayName | Value | Enabled
--- | --- | --- | --- | --- 
user | \Microsoft Publisher 2016\Disable Items in User Interface\Custom | Disable commands |  | true
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center | Turn off trusted documents |  | true
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center | Turn off Trusted Documents on the network |  | true
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center | Block macros from running in Office files from the Internet |  | true
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center | Trust access to Visual Basic Project  |  | False
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Trusted Locations | Disable all trusted locations |  | true
user | \Microsoft Excel 2016\Excel Options\Security\Trust Center\Trusted Locations | Allow Trusted Locations on the network |  | false
user | \Microsoft Excel 2016\Disable Items in User Interface\Custom | Disable commands |  | true
user | \Microsoft Excel 2016\Excel Options\Security | Scan encrypted macros in Excel Open XML workbooks | 0 | true
user | \Microsoft Access 2016\Application Settings\Security\Trust Center | Turn off Trusted Documents on the network |  | true
user | \Microsoft Access 2016\Application Settings\Security\Trust Center\Trusted Locations | Disable all trusted locations |  | true
user | \Microsoft Access 2016\Application Settings\Security\Trust Center | Turn off trusted documents |  | true
user | \Microsoft Access 2016\Application Settings\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft Access 2016\Application Settings\Security\Trust Center\Trusted Locations | Allow Trusted Locations on the network |  | false
user | \Microsoft Access 2016\Disable Items in User Interface\Custom | Disable commands |  | true
user | \Microsoft Word 2016\Word Options\Security\Trust Center | Turn off trusted documents |  | true
user | \Microsoft Word 2016\Word Options\Security\Trust Center\Trusted Locations | Disable all trusted locations |  | true
user | \Microsoft Word 2016\Disable Items in User Interface\Custom | Disable commands |  | true
user | \Microsoft Word 2016\Word Options\Security\Trust Center | Block macros from running in Office files from the Internet |  | true
user | \Microsoft Word 2016\Word Options\Security\Trust Center | Trust access to Visual Basic Project |  | false
user | \Microsoft Word 2016\Word Options\Security\Trust Center | Turn off Trusted Documents on the network |  | true
user | \Microsoft Word 2016\Word Options\Security\Trust Center\Trusted Locations | Allow Trusted Locations on the network |  | false
user | \Microsoft Word 2016\Word Options\Security\Trust Center | Scan encrypted macros in Word Open XML documents | 0 | true
user | \Microsoft Word 2016\Word Options\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | Turn off trusted documents |  | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\Trusted Locations | Disable all trusted locations |  | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center\Trusted Locations | Allow Trusted Locations on the network |  | false
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security | Scan encrypted macros in PowerPoint Open XML presentations | 0 | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | Trust access to Visual Basic Project |  | false
user | \Microsoft PowerPoint 2016\Disable Items in User Interface\Custom | Disable commands |  | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | Turn off Trusted Documents on the network |  | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft PowerPoint 2016\PowerPoint Options\Security\Trust Center | Block macros from running in Office files from the Internet |  | true
user | \Microsoft Project 2016\Project Options\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft Project 2016\Project Options\Security\Trust Center | Disable all trusted locations |  | true
user | \Microsoft Project 2016\Project Options\Security\Trust Center | Allow Trusted Locations on the network |  | false
user | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Allow Trusted Locations on the network |  | false
user | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Turn off trusted documents |  | true
user | \Microsoft Visio 2016\Visio Options\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Block macros from running in Office files from the Internet |  | true
user | \Microsoft Visio 2016\Disable Items in User Interface\Custom | Disable commands |  | true
user | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Disable all trusted locations |  | true
user | \Microsoft Visio 2016\Visio Options\Security\Macro Security | Load Microsoft Visual Basic for Applications projects from text |  | false
user | \Microsoft Visio 2016\Visio Options\Security\Trust Center | Turn off Trusted Documents on the network |  | true
user | \Microsoft Visio 2016\Visio Options\Security\Macro Security | Enable Microsoft Visual Basic for Applications project creation |  | false
user | \Microsoft Office 2016\Security Settings\Trust Center | Allow mix of policy and user locations |  | false
user | \Microsoft Office 2016\Security Settings | Disable VBA for Office applications |  | false
user | \Microsoft Office 2016\Security Settings | Macro Runtime Scan Scope | 2 | true
user | \Microsoft Office 2016\Security Settings | Disable all Trust Bar notifications for security issues |  | true
user | \Microsoft Office 2016\Security Settings | Automation Security | 2 | true
user | \Microsoft Outlook 2016\Security\Trust Center | Apply macro security settings to macros, add-ins and additional actions |  | true
user | \Microsoft Outlook 2016\Security\Trust Center | Security setting for macros | 3 | true
user | \Microsoft Outlook 2016\Disable Items in User Interface\Custom | Disable command bar buttons and menu items |  | true
user | \Microsoft Publisher 2016\Security\Trust Center | VBA Macro Notification Settings | 3 | true
user | \Microsoft Publisher 2016\Security | Publisher Automation Security Level | 2 | true

## ACSC-Surface2BIOS

* Name: `ACSC-Surface2BIOS`
* Description: -
* Type: `Windows 10 and later`
* Profile Type: `Device Firmware Configuration Interface`
* Configuration settings
    * Allow local user to change UEFI settings: `None`
    * CPU and IO virtualization: `Enabled`
    * Cameras: `Enabled`
    * Microphones and speakers: `Enabled`
    * Radios (Bluetooth, Wi-Fi, NFC, etc..): `Enabled`
    * Boot from external media (USB, SD): `Disabled`
    * Boot from network adapters: `Disabled`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Surface2-Devices`
  * Excluded groups: -

## ACSC-WindowsHelloforBusiness

* Name: `ACSC-WindowsHelloforBusiness`
* Description: -
* Type: `Windows 10 and later`
* Profile Type: `Identity protection`
* Configuration settings
    * Configure Windows Hello for Business: `Disable`
    * Use security keys for sign-in: `Not configured`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: `grp-iPhone-Devices`, `grp-iOS-Devices`

## Agency-BlockAdminTerminal-User

* Name: `Agency-BlockAdminTerminal-User`
* Description: `This policy blocks users from accessing CMD & PowerShell terminals`
* Type: `Windows 10 and later`
* Profile Type: `Custom`
* Configuration settings
    * OMA-URI Settings
      * Name: `Agency-BlockAdminTerminal-User`
      * Description: `This policy blocks users from accessing CMD & PowerShell terminals`
      * OMA-URI: `./Vendor/MSFT/AppLocker/ApplicationLaunchRestrictions/000000001/EXE/Policy`
      * Custom XML:

```xml
<RuleCollection Type="Exe" EnforcementMode="Enabled">
  <FilePathRule Id="e16ce5e4-67f2-4ebf-ad01-c81fc8f28cd5" Name="All Files" Description="" UserOrGroupSid="S-1-5-32-544" Action="Allow">
    <Conditions>
      <FilePathCondition Path="*"/>
    </Conditions>
  </FilePathRule>
  <FilePathRule Id="9eb15b2e-f9c2-42d4-8692-ad1a0f6a0722" Name="All files" Description="Allows user to run files execpt powershell" UserOrGroupSid="S-1-1-0" Action="Allow">
    <Conditions>
      <FilePathCondition Path="*"/>
    </Conditions>
    <Exceptions>
      <FilePublisherCondition PublisherName="O=MICROSOFT CORPORATION, L=REDMOND, S=WASHINGTON, C=US" ProductName="MICROSOFTÂ® WINDOWSÂ® OPERATING SYSTEM" BinaryName="POWERSHELL.EXE">
        <BinaryVersionRange LowSection="*" HighSection="*"/>
      </FilePublisherCondition>
      <FilePublisherCondition PublisherName="O=MICROSOFT CORPORATION, L=REDMOND, S=WASHINGTON, C=US" ProductName="MICROSOFTÂ® WINDOWSÂ® OPERATING SYSTEM" BinaryName="POWERSHELL_ISE.EXE">
        <BinaryVersionRange LowSection="*" HighSection="*"/>
      </FilePublisherCondition>
      <FilePublisherCondition PublisherName="O=MICROSOFT CORPORATION, L=REDMOND, S=WASHINGTON, C=US" ProductName="MICROSOFTÂ® WINDOWSÂ® OPERATING SYSTEM" BinaryName="CMD.EXE">
        <BinaryVersionRange LowSection="*" HighSection="*"/>
      </FilePublisherCondition>
      <FilePublisherCondition PublisherName="O=MICROSOFT CORPORATION, L=REDMOND, S=WASHINGTON, C=US" ProductName="MICROSOFTÂ® WINDOWSÂ® OPERATING SYSTEM" BinaryName="REGEDIT.EXE">
        <BinaryVersionRange LowSection="*" HighSection="*"/>
      </FilePublisherCondition>
    </Exceptions>
  </FilePathRule>
</RuleCollection>
```

* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Users`
  * Excluded groups: -

## Agency-DeliveryOptimisation
