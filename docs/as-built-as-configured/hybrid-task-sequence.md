---

---

# Hybrid - task sequence deploy 

<p id="date-and-time">5 minutes to read - 30 March 2023</p>

The following provides guidance on settings required to develop a Windows 10 task sequence that can be used as the basis for the Agency specific Operating System image used prior to Autopilot taking over the image in Hybrid deployments.

## Base configuration

The following table describes the base configuration for the Operating System.

Item | Value
--- | ---
Windows Edition | Windows 10 Enterprise
System Type | 64-bit Operating System
Windows Servicing Channel | Semi-Annual
Windows Version | 21H1 

## Task sequence prerequisites

The following table describes the prerequisites in use in the task sequence.

Item | Description
--- | ---
AutopilotConfigurationFile.json | The AutopilotConfigurationFile.json is required to be available within an Microsoft Endpoint Configuration Manager (MECM) package. As a requirement the [Intune enrolment ABAC](../../as-built-as-configured/intune-enrolment) would need to be implemented before this ABAC. 
MECM Package | **Windows 10 Customisations** package to be created within MECM and contain the [AutopilotConfigurationFile.json](#annex-2-autopilotconfigurationfilejson) and the [Unattend.xml](#annex-1-unattendxml) files.
MECM Package | **Configuration Manager Client** packaged needs to exist, this typically exists by default with the MECM installation.
MECM Boot Image | A WinPE boot image is required to boot to Windows PE, this typically exists by default with the MECM installation.
MECM Operating System Image  | An Operating System image is required within MECM. This should consist of the Windows 10 WIM file as per the **Base Configuration**. Additional Agency specific customisations can be injected into the WIM as required, however this is out of scope of this ABAC.

## Windows 10 task sequence

- Install operating system
  - Item: Restart in Windows PE
    - Type: Restart Computer
    - Configuration: The boot image assigned to this task sequence
    - Options/Scripts: Task Sequence Variable `_SMSTSInWinPE equals “false”`
  - Item: Partition Disk 0 - BIOS
    - Type: Format and Partition Disk
    - Configuration
      - System Reserved (Primary) 350 MB fixed size. NTFS file system
      - Windows (Primary) 99% of remaining space on disk. NTFS file system
      - Recovery (Recovery) 100% of remaining space on disk. NTFS file system.
    - Options/Scripts: Task Sequence Variable
```
_SMSTSClientCache not exists
_SMSTSMediaType not equals “OEMMedia”
_OSDMigrateUseHardlinks not equals “true”
_SMSTSBootUEFI not equals “true”
```
  - Item: Partition Disk 0 – UEFI
    - Type: Format and Partition Disk
    - Configuration
      - (EFI) 500 MB fixed size. FAT32 file system.
      - (MBR) 128 MB fixed size.
      - Windows (Primary) 99% of remaining space on disk. NTFS file system.
      - Recovery (Recovery) 100% of remaining space on disk. NTFS file system.
  - Item: Pre-provision BitLocker
    - Type: Pre-provision BitLocker
    - Configuration
      - Apply BitLocker to the specified drive: Next available formatted partition
      - Skip this step for computers that do not have a TPM or when TPM is not enabled
  - Item: Apply Operating System
    - Type: Apply Operating System Image
    - Configuration
      - Apply operating system from a captured image
        - Install package: Windows 10 x64 1909
        - Image index: Windows 10 Enterprise
      - Use an unattended or sysprep answer file for a custom installation
        - Packaged: Windows 10 Customisations
        - File name: [Unattend.xml](#annex-1-unattendxml)
  - Item: Apply Windows Settings
    - Type: Apply Windows Settings
    - Configuration
      - Organization name: Agency Name
      - Product key: KMS or leave blank
      - Randomly generate the local administrator password and disable the account on all supported platforms (recommended)
      - Time zone: (UTC +10:00) Canberra, Melbourne, Sydney
  - Item: Apply Windows Autopilot configuration
    - Type: Run Command Line
    - Configuration
      - Command line: `Cmd.exe /c xcopy AutopilotConfigurationFile.json %OSDTargetSystemDrive%\Windows\ Provisioning\Autopilot\ /c` <br>Note: for Autopilot Configuration File refer to [Annex 2](#annex-2-autopilotconfigurationfilejson).
      - Package: Windows 10 Customisations
  - Item: Apply Device Drivers
    - Type: Auto Apply Drivers
    - Configuration
      - Install only the best matched compatible drivers
      - Consider drivers from all categories. Note: Agency specific Device Drivers will need to be added to MECM.
- Setup Operating System
  - Item: Setup Windows and Configuration Manager
    - Type: Setup Windows and ConfigMgr
    - Configuration
      - Client Package: Configuration Manager Client Package
  - Item: Enable BitLocker
    - Type: Enable BitLocker
    - Configuration
      - Current operating system drive
      - TPM only
      - Choose where to create the recovery key: In Active Directory Domain Services
      - Note: This task may cause issues if there is no supported TPM module located.
  - Item: Install Updates
    - Type: Install Software Updates
    - Configuration
      - Available for installation – All software updates
      - Evaluate software updates form cached scan results: Enabled
    - Options/Scripts
      - Continue on error
      - Task Sequence Variable: `_SMSTSMediaType not equals "FullMedia"`
  - Item: Install Applications
    - Type: Install Applications
    - Configuration
      - Install the following applications: Agency specific applications
      - Note: This step should be considered optional and only used if the applications are unable to be migrated to Microsoft Endpoint Manager - Intune (Intune)
- Prepare device for Windows Autopilot
  - Item: Prepare Configuration Manager Client
    - Type: Prepare ConfigMgr Client for Capture
  - Item: Prepare Windows for Capture
    - Type: Run Command Line
    - Configuration
      - Command Line: `c:\windows\system32\sysprep\sysprep.exe /oobe /reboot`

Figure 1 has been included to show order of the task sequence.

![Figure 1 Windows 10 Task Sequence](../img/abac/windows-10-task-sequence.png#center)

## Autopilot

Once the Task Sequence has been completed the Windows OOBE (Out Of the Box Experience) will start at next power cycle of the workstation. Autopilot will start its process to apply the additional Agency customisations.

Item | Configuration
--- | ---
Region | Australia
Keyboard Layout | US
Email Address | Agency specific user

The following figure shows the OOBE Agency specific welcome page.

![Figure 2 Windows 10 OOBE Welcome Screen](../img/abac/windows-10-welcome.png#center)

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
