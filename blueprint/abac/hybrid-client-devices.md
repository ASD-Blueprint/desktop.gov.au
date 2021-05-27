---
layout: page
title: Hybrid - client devices
menu: abac
---

The ABAC settings for the Agency workstation configuration can be found below. This includes base configuration, Windows 10 task sequence, and Windows Defender Application Control configuration. This workstation configuration should be utilised as the basis for the Agency specific Operating System image used prior to Autopilot taking over the image.

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

## Base configuration

Table 2 describes the base configuration for the Operating System.

Item | Value
--- | ---
Windows Edition | Windows 10 Enterprise
System Type | 64-bit Operating System
Windows Servicing Channel | Semi-Annual
Windows Version | 1909

## Task sequence prerequisites

Table 3 describes the prerequisites in use in the task sequence.

Item | Description
--- | ---
AutopilotConfigurationFile.json | The AutopilotConfigurationFile.json is required to be available within an Microsoft Endpoint Configuration Manager (MECM) package. As a requirement the [DTA – Hybrid ABAC – Intune Enrollment for Windows Devices](/blueprint/abac/hybrid-intune-enrolment-windows.html) document would need to be implemented before this ABAC.
MECM Package | **Windows 10 Customisations** package to be created within MECM and contain the **AutopilotConfigurationFile.json** and the **Unattend.xml** files.
MECM Package | **Configuration Manager Client** packaged needs to exist, this typically exists by default with the MECM installation.
MECM Boot Image | A WinPE boot image is required to boot to Windows PE, this typically exists by default with the MECM installation.
MECM Operating System Image  | An Operating System image is required within MECM. This should consist of the Windows 10 WIM file as per the **Base Configuration**. Additional Agency specific customisations can be injected into the WIM as required, however this is out of scope of this ABAC.

## Windows 10 task sequence

* Install operating system
  * Item: Restart in Windows PE
    * Type: Restart Computer
    * Configuration: The boot image assigned to this task sequence
    * Options/Scripts: Task Sequence Variable `_SMSTSInWinPE equals “false”`
  * Item: Partition Disk 0 - BIOS
    * Type: Format and Partition Disk
    * Configuration
      * System Reserved (Primary) 350 MB fixed size. NTFS file system
      * Windows (Primary) 99% of remaining space on disk. NTFS file system
      * Recovery (Recovery) 100% of remaining space on disk. NTFS file system.
    * Options/Scripts: Task Sequence Variable
```
_SMSTSClientCache not exists
_SMSTSMediaType not equals “OEMMedia”
_OSDMigrateUseHardlinks not equals “true”
_SMSTSBootUEFI not equals “true”
```
  * Item: Partition Disk 0 – UEFI
    * Type: Format and Partition Disk
    * Configuration
      * (EFI) 500 MB fixed size. FAT32 file system.
      * (MBR) 128 MB fixed size.
      * Windows (Primary) 99% of remaining space on disk. NTFS file system.
      * Recovery (Recovery) 100% of remaining space on disk. NTFS file system.
  * Item: Pre-provision BitLocker
    * Type: Pre-provision BitLocker
    * Configuration
      * Apply BitLocker to the specified drive: Next available formatted partition
      * Skip this step for computers that do not have a TPM or when TPM is not enabled
  * Item: Apply Operating System
    * Type: Apply Operating System Image
    * Configuration
      * Apply operating system from a captured image
        * Install package: Windows 10 x64 1909
        * Image index: Windows 10 Enterprise
      * Use an unattended or sysprep answer file for a custom installation
        * Packaged: Windows 10 Customisations
        * File name: [Unattend.xml](#annex-1-unattendxml)
  * Item: Apply Windows Settings
    * Type: Apply Windows Settings
    * Configuration
      * Organization name: Agency Name
      * Product key: KMS or leave blank
      * Randomly generate the local administrator password and disable the account on all supported platforms (recommended)
      * Time zone: (UTC +10:00) Canberra, Melbourne, Sydney
  * Item: Apply Windows Autopilot configuration
    * Type: Run Command Line
    * Configuration
      * Command line: `Cmd.exe /c xcopy AutopilotConfigurationFile.json %OSDTargetSystemDrive%\Windows\ Provisioning\Autopilot\ /c` <br>Note: for Autopilot Configuration File refer to [Annex 2](#annex-2-autopilotconfigurationfilejson).
      * Package: Windows 10 Customisations
  * Item: Apply Device Drivers
    * Type: Auto Apply Drivers
    * Configuration
      * Install only the best matched compatible drivers
      * Consider drivers from all categories. Note: Agency specific Device Drivers will need to be added to MECM.
* Setup Operating System
  * Item: Setup Windows and Configuration Manager
    * Type: Setup Windows and ConfigMgr
    * Configuration
      * Client Package: Configuration Manager Client Package
  * Item: Enable BitLocker
    * Type: Enable BitLocker
    * Configuration
      * Current operating system drive
      * TPM only
      * Choose where to create the recovery key: In Active Directory Domain Services
      * Note: This task may cause issues if there is no supported TPM module located.
  * Item: Install Updates
    * Type: Install Software Updates
    * Configuration
      * Available for installation – All software updates
      * Evaluate software updates form cached scan results: Enabled
    * Options/Scripts
      * Continue on error
      * Task Sequence Variable: `_SMSTSMediaType not equals "FullMedia"`
  * Item: Install Applications
    * Type: Install Applications
    * Configuration
      * Install the following applications: Agency specific applications
      * Note: This step should be considered optional and only used if the applications are unable to be migrated to Microsoft Endpoint Manager - Intune (Intune)
* Prepare device for Windows Autopilot
  * Item: Prepare Configuration Manager Client
    * Type: Prepare ConfigMgr Client for Capture
  * Item: Prepare Windows for Capture
    * Type: Run Command Line
    * Configuration
      * Command Line: `c:\windows\system32\sysprep\sysprep.exe /oobe /reboot`

Figure 1 has been included to show order of the task sequence.

![Figure 1 Windows 10 Task Sequence](/assets/images/abac/windows-10-task-sequence.png)

## Autopilot

Once the Task Sequence has been completed the Windows OOBE (Out Of the Box Experience) will start at next power cycle of the workstation. Autopilot will start its process to apply the additional Agency customisations.

Item | Configuration
--- | ---
Region | Australia
Keyboard Layout | US
Email Address | Agency specific user

Figure 2 shows the OOBE Agency specific welcome page.

![Figure 2 Windows 10 OOBE Welcome Screen](/assets/images/abac/windows-10-welcome.png)

### Annex 1: Unattend.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend">
     <settings pass="oobeSystem">
          <component name="Microsoft-Windows-International-Core" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
               <InputLocale>0c09:00000409</InputLocale>
               <SystemLocale>en-AU</SystemLocale>
               <UILanguage>en-AU</UILanguage>
               <UserLocale>en-AU</UserLocale>
               <UILanguageFallback>en-US</UILanguageFallback>
          </component>
          <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State">
               <OOBE>
                    <HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
                    <NetworkLocation>Work</NetworkLocation>
                    <SkipMachineOOBE>true</SkipMachineOOBE>
                    <SkipUserOOBE>true</SkipUserOOBE>
               </OOBE>
          </component>
     </settings>
</unattend>
```

### Annex 2: AutopilotConfigurationFile.json

This is an example AutopilotConfigurationFile.json only. This file will be agency specific and should be generated from the Intune tenant. Ensure that the `TenantId` and `ZtdCorrelationID` are correct before using.

```json
{
  "CloudAssignedDomainJoinMethod": 0,
  "CloudAssignedDeviceName": "TEST%RAND: 2%",
  "CloudAssignedAutopilotUpdateTimeout": 1800000,
  "CloudAssignedForcedEnrollment": 1,
  "Version": 2049,
  "CloudAssignedTenantId": "xxxxxxxx-xxx-xxxx-xxxx-xxxxxxxxxxxx",
  "CloudAssignedAutopilotUpdateDisabled": 1,
  "ZtdCorrelationId": "xxxxxxxx-xxx-xxxx-xxxx-xxxxxxxxxxxx",
  "Comment_File": "Profile Autopilot",
  "CloudAssignedAadServerData": "{\"ZeroTouchConfig\":{\"CloudAssignedTenantUpn\":\"\",\"ForcedEnrollment\":1,\"CloudAssignedTenantDomain\":\"testagency.gov.au\"}}",
  "CloudAssignedOobeConfig": 1310,
  "CloudAssignedTenantDomain": "testagency.gov.au",
  "CloudAssignedLanguage": "os-default"
}
```

## Application control

WDAC utilise one or more policies to defined what drivers and files are whitelisted to run on a Windows 10 devices. Multiple policies can only be leveraged when the policies are deployed utilising Microsoft Endpoint Manager and the Application Control Configuration Service Provider (CSP). When deployed utilising Group Policy, all policies must be merged into the single policy. This policy can be signed to ensure that it cannot be tampered with. Details on signing policy can be found in the [WDAC policy - policy signing](#wdac-policy---policy-signing) section.

Once implemented, the procedure to remove the WDAC policy can be found in the [WDAC policy - removal](#wdac-policy---removal) section.

### WDAC policy - baseline policy

The base policy contains the whitelist for the operating system, base applications, and drivers. It can be generated based upon an existing image (i.e a gold image) or leveraging a predefined Microsoft baseline.  

![WDAC Base policy](/assets/images/WDAC_base.svg "WDAC Base Policy creation should utilise a gold image where available else a Microsoft baseline. The Managed Installer function should also be leveraged where a managed installer is in use in the environment")

#### Gold image base

A base policy generated from a gold image machine should only be utlised where all Windows 10 machines in the environment utilise the same image. The procedure to generate the policy is as follows:

1. Deploy the image to a standard organisational Windows 10 device.
2. Ensure all standard software is installed (e.g. Microsoft Office).
3. Verify all drivers are signed (This can be completed utilising sigverif)
4. Using an administrative PowerShell session run
```powershell
$PolicyPath=$env:userprofile+"\Desktop\"
$PolicyName="GoldImagePolicy"
$WDACPolicy=$PolicyPath+$PolicyName+".xml"
New-CIPolicy -Level PcaCertificate -FilePath $WDACPolicy –UserPEs 3> CIPolicyLog.txt -Fallback hash
```
5. Review the CIPolicy.txt file for any items which could not be whitelisted.
6. Using an administrative PowerShell session run
```powershell
Set-RuleOption -FilePath $WDACPolicy -Option 0 # Enabled UMCI
Set-RuleOption -FilePath $WDACPolicy -Option 1 # Enable Boot Menu Protection
Set-RuleOption -FilePath $WDACPolicy -Option 2 # Require WHQL
Set-RuleOption -FilePath $WDACPolicy -Option 3 # Enable Audit Mode
Set-RuleOption -FilePath $WDACPolicy -Option 4 # Disable Flight Signing
Set-RuleOption -FilePath $WDACPolicy -Option 6 # Enable Unsigned Policy
Set-RuleOption -FilePath $WDACPolicy -Option 8 # Require EV Signers
Set-RuleOption -FilePath $WDACPolicy -Option 10 # Enable Boot Audit on Failure
Set-RuleOption -FilePath $WDACPolicy -Option 12 # Enable Enforce Store Apps
Set-RuleOption -FilePath $WDACPolicy -Option 13 # Enable Managed Installer
Set-RuleOption -FilePath $WDACPolicy -Option 16 # Enable No Reboot
Set-RuleOption -FilePath $WDACPolicy -Option 19 # Enable Dynamic Code Security
```
7. Deploy the file locally in audit mode and validate no additional files require whitelisting
8. Using an administrative PowerShell session run the following to switch the policy into enforce mode
```powershell
Set-RuleOption -FilePath $WDACPolicy -Option 3 -Delete
```
9. Deploy the file locally in enforce mode and validate no additional files require whitelisting
10. [Deploy the file globally](#wdac-policy---deployment) 

#### Predefined Microsoft base 

Microsoft have developed a number of base policies which provide the whitelisting rules for a standard Windows 10 image. These base policies are located on any Windows 10 machine under `%windir%\schemas\CodeIntegrity\ExamplePolicies`. Within that directory, the policy titled `DefaultWindows_Audit.xml` should be leveraged as the base policy. It includes the rules necessary to ensure that Windows, 3rd party hardware and software kernel drivers, and Windows Store apps will run.  

The procedure to leverage this policy is as follows:
1. Make a copy of the policy and place it into a working directory (i.e. My documents)
2. Open the policy in a XML editor such as Visual Studio code or notepad.
3. Remove all flighting related signers (note they will also need to be removed from the signing scenarios)
4. Using an administrative PowerShell session run
```powershell
$WDACPolicy = path to policy file
Set-RuleOption -FilePath $WDACPolicy -Option 0 # Enabled UMCI
Set-RuleOption -FilePath $WDACPolicy -Option 1 # Enable Boot Menu Protection
Set-RuleOption -FilePath $WDACPolicy -Option 2 # Require WHQL
Set-RuleOption -FilePath $WDACPolicy -Option 3 # Enable Audit Mode
Set-RuleOption -FilePath $WDACPolicy -Option 4 # Disable Flight Signing
Set-RuleOption -FilePath $WDACPolicy -Option 6 # Enable Unsigned Policy
Set-RuleOption -FilePath $WDACPolicy -Option 8 # Require EV Signers
Set-RuleOption -FilePath $WDACPolicy -Option 10 # Enable Boot Audit on Failure
Set-RuleOption -FilePath $WDACPolicy -Option 12 # Enable Enforce Store Apps
Set-RuleOption -FilePath $WDACPolicy -Option 13 # Enable Managed Installer
Set-RuleOption -FilePath $WDACPolicy -Option 16 # Enable No Reboot
Set-RuleOption -FilePath $WDACPolicy -Option 17 # Enable Allow Supplemental
Set-RuleOption -FilePath $WDACPolicy -Option 19 # Enable Dynamic Code Security
```
5. Deploy the file locally in audit mode and validate no additional files require whitelisting
6. Using an administrative PowerShell session run the following to switch the policy into enforce mode
```powershell
Set-RuleOption -FilePath $WDACPolicy -Option 3 -Delete
```
7. Deploy the file locally in enforce mode and validate no additional files require whitelisting
8. [Deploy the file globally](hybrid-platform.html#application-control) 

### WDAC policy - whitelisting an application

Whitelisting of an application utilising WDAC can be completed utilising a number of methods including Hash (ACSC recommended), file path, and certificate based. Depending on the application, the chosen method of whitelisting may change. Hash whitelisting offers the highest degree of security however it increases the management overhead associated with whitelisting. 

If the managed installer option within the base policy is enabled, whitelisting of applications deployed via the managed installer is not required. 

![WDAC whitelisting application policy](/assets/images/WDAC_SCCM.svg "Where additional applications are required they should leverage the hash of the files or the publisher file name and version. Once whitelisted they must be merged into the base policy")

Post identification of the appropriate whitelisting method, the following procedure is used to whitelist the application:

1. Within an administrative PowerShell session navigate to the install directory of the application
2. Run the following command
```powershell
$whitelistlevel = {the chosen method of whitelist e.g. hash}
$Outputlocation = {the path to output the policy file}
$fallbacklevel = {the backup method of whitelist e.g. publisher}
$directory = {the path to be scanned}
New-CIPolicy -Level $whitelistlevel -FilePath $Outputlocation -Fallback $fallbacklevel  -ScanPath $directory -UserPEs
```
3. Merge the new base policy with the existing base policy.

#### Whitelisting errors in the event log

Applications which are not whitelisted will be logged in the code integrity event log on execution. These applications can be whitelisted using the following procedure:

1.  Within an administrative PowerShell session run the following command
```powershell
$whitelistlevel = {the chosen method of whitelist e.g. hash}
$Outputlocation = {the path to output the policy file}
$fallbacklevel = {the backup method of whitelist e.g. publisher}
New-CIPolicy -Level $whitelistlevel -FilePath $Outputlocation -Fallback $fallbacklevel  -audit -UserPEs
```
2. Merge the new base policy with the existing base policy.

#### Merging with the base policy

To merge base policies together the following procedure is used:
1. Using an administrative PowerShell session run
```powershell
$InitialCIPolicy= {Path to the first base policy}
$AuditCIPolicy= {Path to the new base policy}
$MergedCIPolicy= {location to output the policy}
Merge-CIPolicy -PolicyPaths $InitialCIPolicy,$AuditCIPolicy -OutputFilePath $MergedCIPolicy
```

### WDAC policy - policy signing

Prior to deployment of the WDAC policy it can be signed using an internal Certificate Authority code signing certificate or a purchased code signing certificate.

The procedure to sign the policy is as follows:

```powershell
Add-SignerRule -FilePath {Path to the XML policy file} -CertificatePath {Path to exported .cer certificate} -Kernel -User –Update
ConvertFrom-CIPolicy -XmlFilePath {Path to the XML policy file} -BinaryFilePath {Binary output location}
{Path to signtool.exe} sign -v /n {Certificate Subject name} -p7 . -p7co 1.3.6.1.4.1.311.79.1 -fd sha256 {Binary policy location}
```

### WDAC policy - deployment

The above policy is deployed through Group Policy. The deployment configuration is available within the [Platform Configuration](hybrid-platform.html#application-control) section.

### WDAC policy - removal

#### Signed policies

The procedure to remove signed policies is as follows:
1. Create a new signed policy with `6 Enabled: Unsigned System Integrity Policy` enabled.
2. Deploy the policy and remove the previous policy from deployment.
3. Reboot the machine.
4. Disable the WDAC deployment method.
5. On the machine verify the following files have been deleted (if they have not then delete them)
  * `OS Volume\Windows\System32\CodeIntegrity\{Policy GUID}.cip`
  * `EFI System Partition\Microsoft\Boot\{Policy GUID}.cip`
6. Reboot the machine.

#### Unsigned policies

The procedure to remove unsigned policies is as follows:
1. Disable the WDAC deployment method. 
2. On the machine verify the following files have been deleted (if they have not then delete them)
  * `OS Volume\Windows\System32\CodeIntegrity\{Policy GUID}.cip`
  * `EFI System Partition\Microsoft\Boot\{Policy GUID}.cip`
3. Reboot the machine.

### Appendix 1: Example merged base policy

* [Example merged base policy](/assets/files/abac/wdac-merged-base.xml)
