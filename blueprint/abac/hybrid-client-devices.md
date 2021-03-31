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
AutopilotConfigurationFile.json | The AutopilotConfigurationFile.json is required to be available within an SCCM package. As a requirement the [DTA – Hybrid ABAC – Intune Enrollment for Windows Devices](/blueprint/abac/hybrid-intune-enrolment-windows.html) document would need to be implemented before this ABAC.
SCCM Package | **Windows 10 Customisations** package to be created within SCCM and contain the **AutopilotConfigurationFile.json** and the **Unattend.xml** files.
SCCM Package | **Configuration Manager Client** packaged needs to exist, this typically exists by default with the SCCM installation.
SCCM Boot Image | A WinPE boot image is required to boot to Windows PE, this typically exists by default with the SCCM installation.
SCCM Operating System Image  | An Operating System image is required within SCCM. This should consist of the Windows 10 WIM file as per the **Base Configuration**. Additional Agency specific customisations can be injected into the WIM as required, however this is out of scope of this ABAC.

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
      * Consider drivers from all categories. Note: Agency specific Device Drivers will need to be added to SCCM.
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
      * Note: This step should be considered optional and only used if the applications are unable to be migrated to Intune
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
## WDAC Policy - Core Policy

This is the core application control policy. Additional policies can be not be added when utilising Group Policy as the deployment mechanism. All additional rules will need to be merged into this core policy.

```XML
<?xml version="1.0" encoding="utf-8"?>
<SiPolicy xmlns="urn:schemas-microsoft-com:sipolicy" PolicyType="Base Policy">
  <VersionEx>10.0.0.0</VersionEx>
  <PlatformID>{2E07F7E4-194C-4D20-B7C9-6F44A6C5A234}</PlatformID>
  <Rules>
    <Rule>
      <Option>Enabled:UMCI</Option>
    </Rule>
    <Rule>
      <Option>Required:WHQL</Option>
    </Rule>
    <Rule>
      <Option>Disabled:Flight Signing</Option>
    </Rule>
    <Rule>
      <Option>Required:EV Signers</Option>
    </Rule>
    <Rule>
      <Option>Enabled:Advanced Boot Options Menu</Option>
    </Rule>
    <Rule>
      <Option>Enabled:Boot Audit On Failure</Option>
    </Rule>
    <Rule>
      <Option>Required:Enforce Store Applications</Option>
    </Rule>
    <Rule>
      <Option>Enabled:Managed Installer</Option>
    </Rule>
    <Rule>
      <Option>Enabled:Update Policy No Reboot</Option>
    </Rule>
    <Rule>
      <Option>Enabled:Dynamic Code Security</Option>
    </Rule>
    <Rule>
      <Option>Enabled:Unsigned System Integrity Policy</Option>
    </Rule>
  </Rules>
  <!--EKUS-->
  <EKUs>
    <EKU ID="ID_EKU_STORE" Value="010a2b0601040182374c0301" FriendlyName="Windows Store EKU - 1.3.6.1.4.1.311.76.3.1 Windows Store" />
  </EKUs>
  <!--File Rules-->
  <FileRules>
    <Deny ID="ID_DENY_KD_KMCI_2" FriendlyName="kd.exe" FileName="kd.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_ADDINPROCESS_2" FriendlyName="AddInProcess.exe" FileName="AddInProcess.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_ADDINPROCESS32_2" FriendlyName="AddInProcess32.exe" FileName="AddInProcess32.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_ADDINUTIL_2" FriendlyName="AddInUtil.exe" FileName="AddInUtil.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_ASPNET_2" FriendlyName="aspnet_compiler.exe" FileName="aspnet_compiler.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_BASH_2" FriendlyName="bash.exe" FileName="bash.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_BGINFO_2" FriendlyName="bginfo.exe" FileName="BGINFO.Exe" MinimumFileVersion="4.21.0.0" />
    <Deny ID="ID_DENY_CBD_2" FriendlyName="cdb.exe" FileName="CDB.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_CSI_2" FriendlyName="csi.exe" FileName="csi.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_DBGHOST_2" FriendlyName="dbghost.exe" FileName="DBGHOST.Exe" MinimumFileVersion="2.3.0.0" />
    <Deny ID="ID_DENY_DBGSVC_2" FriendlyName="dbgsvc.exe" FileName="DBGSVC.Exe" MinimumFileVersion="2.3.0.0" />
    <Deny ID="ID_DENY_DNX_2" FriendlyName="dnx.exe" FileName="dnx.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_DOTNET_2" FriendlyName="dotnet.exe" FileName="dotnet.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_FSI_2" FriendlyName="fsi.exe" FileName="fsi.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_FSI_ANYCPU_2" FriendlyName="fsiAnyCpu.exe" FileName="fsiAnyCpu.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_INFINSTALL_2" FriendlyName="infdefaultinstall.exe" FileName="infdefaultinstall.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_KD_2" FriendlyName="kd.exe" FileName="kd.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_KILL_2" FriendlyName="kill.exe" FileName="kill.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_LXSS_2" FriendlyName="LxssManager.dll" FileName="LxssManager.dll" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_LXRUN_2" FriendlyName="lxrun.exe" FileName="lxrun.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MFC40_2" FriendlyName="mfc40.dll" FileName="mfc40.dll" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MS_BUILD_2" FriendlyName="Microsoft.Build.dll" FileName="Microsoft.Build.dll" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MS_BUILD_FMWK_2" FriendlyName="Microsoft.Build.Framework.dll" FileName="Microsoft.Build.Framework.dll" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MWFC_2" FriendlyName="Microsoft.Workflow.Compiler.exe" FileName="Microsoft.Workflow.Compiler.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MSBUILD_2" FriendlyName="MSBuild.exe" FileName="MSBuild.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MSBUILD_DLL_2" FriendlyName="MSBuild.dll" FileName="MSBuild.dll" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_MSHTA_2" FriendlyName="mshta.exe" FileName="mshta.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_NTKD_2" FriendlyName="ntkd.exe" FileName="ntkd.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_NTSD_2" FriendlyName="ntsd.exe" FileName="ntsd.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_PWRSHLCUSTOMHOST_2" FriendlyName="powershellcustomhost.exe" FileName="powershellcustomhost.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_RCSI_2" FriendlyName="rcsi.exe" FileName="rcsi.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_RUNSCRIPTHELPER_2" FriendlyName="runscripthelper.exe" FileName="runscripthelper.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_TEXTTRANSFORM_2" FriendlyName="texttransform.exe" FileName="texttransform.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_VISUALUIAVERIFY_2" FriendlyName="visualuiaverifynative.exe" FileName="visualuiaverifynative.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_WFC_2" FriendlyName="WFC.exe" FileName="wfc.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_WINDBG_2" FriendlyName="windbg.exe" FileName="windbg.Exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_WMIC_2" FriendlyName="wmic.exe" FileName="wmic.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_WSL_2" FriendlyName="wsl.exe" FileName="wsl.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_WSLCONFIG_2" FriendlyName="wslconfig.exe" FileName="wslconfig.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_WSLHOST_2" FriendlyName="wslhost.exe" FileName="wslhost.exe" MinimumFileVersion="65535.65535.65535.65535" />
    <Deny ID="ID_DENY_D_1_2" FriendlyName="Powershell 1" Hash="02BE82F63EE962BCD4B8303E60F806F6613759C6" />
    <Deny ID="ID_DENY_D_2_2" FriendlyName="Powershell 2" Hash="13765D9A16CC46B2113766822627F026A68431DF" />
    <Deny ID="ID_DENY_D_3_2" FriendlyName="Powershell 3" Hash="148972F670E18790D62D753E01ED8D22B351A57E45544D88ACE380FEDAF24A40" />
    <Deny ID="ID_DENY_D_4_2" FriendlyName="Powershell 4" Hash="29DF1D593D0D7AB365F02645E7EF4BCCA060763A" />
    <Deny ID="ID_DENY_D_5_2" FriendlyName="Powershell 5" Hash="2E3C47BBE1BA99842EE187F756CA616EFED61B94" />
    <Deny ID="ID_DENY_D_6_2" FriendlyName="Powershell 6" Hash="38DC1956313B160696A172074C6F5DA9852BF508F55AFB7FA079B98F2849AFB5" />
    <Deny ID="ID_DENY_D_7_2" FriendlyName="Powershell 7" Hash="513B625EA507ED9CE83E2FB2ED4F3D586C2AA379" />
    <Deny ID="ID_DENY_D_8_2" FriendlyName="Powershell 8" Hash="71FC552E66327EDAA72D72C362846BD80CB65EECFAE95C4D790C9A2330D95EE6" />
    <Deny ID="ID_DENY_D_9_2" FriendlyName="Powershell 9" Hash="72E4EC687CFE357F3E681A7500B6FF009717A2E9538956908D3B52B9C865C189" />
    <Deny ID="ID_DENY_D_10_2" FriendlyName="Powershell 10" Hash="74E207F539C4EAC648A5507EB158AEE9F6EA401E51808E83E73709CFA0820FDD" />
    <Deny ID="ID_DENY_D_11_2" FriendlyName="Powershell 11" Hash="75288A0CF0806A68D8DA721538E64038D755BBE74B52F4B63FEE5049AE868AC0" />
    <Deny ID="ID_DENY_D_12_2" FriendlyName="Powershell 12" Hash="7DB3AD53985C455990DD9847DE15BDB271E0C8D1" />
    <Deny ID="ID_DENY_D_13_2" FriendlyName="Powershell 13" Hash="84BB081141DA50B3839CD275FF34854F53AECB96CA9AEB8BCD24355C33C1E73E" />
    <Deny ID="ID_DENY_D_14_2" FriendlyName="Powershell 14" Hash="86DADE56A1DBAB6DDC2769839F89244693D319C6" />
    <Deny ID="ID_DENY_D_15_2" FriendlyName="Powershell 15" Hash="BD3139CE7553AC7003C96304F08EAEC2CDB2CC6A869D36D6F1E478DA02D3AA16" />
    <Deny ID="ID_DENY_D_16_2" FriendlyName="Powershell 16" Hash="BE3FFE10CDE8B62C3E8FD4D8198F272B6BD15364A33362BB07A0AFF6731DABA1" />
    <Deny ID="ID_DENY_D_17_2" FriendlyName="Powershell 17" Hash="C1196433541B87D22CE2DD19AAAF133C9C13037A" />
    <Deny ID="ID_DENY_D_18_2" FriendlyName="Powershell 18" Hash="C6C073A80A8E76DC13E724B5E66FE4035A19CCA0C1AF3FABBC18E5185D1B66CB" />
    <Deny ID="ID_DENY_D_19_2" FriendlyName="Powershell 19" Hash="CE5EA2D29F9DD3F15CF3682564B0E765ED3A8FE1" />
    <Deny ID="ID_DENY_D_20_2" FriendlyName="Powershell 20" Hash="D027E09D9D9828A87701288EFC91D240C0DEC2C3" />
    <Deny ID="ID_DENY_D_21_2" FriendlyName="Powershell 21" Hash="D2CFC8F6729E510AE5BA9BECCF37E0B49DDF5E31" />
    <Deny ID="ID_DENY_D_22_2" FriendlyName="Powershell 22" Hash="DED853481A176999723413685A79B36DD0F120F9" />
    <Deny ID="ID_DENY_D_23_2" FriendlyName="Powershell 23" Hash="DFCD10EAA2A22884E0A41C4D9E6E8DA265321870" />
    <Deny ID="ID_DENY_D_24_2" FriendlyName="Powershell 24" Hash="F16E605B55774CDFFDB0EB99FAFF43A40622ED2AB1C011D1195878F4B20030BC" />
    <Deny ID="ID_DENY_D_25_2" FriendlyName="Powershell 25" Hash="F29A958287788A6EEDE6035D49EF5CB85EEC40D214FDDE5A0C6CAA65AFC00EEC" />
    <Deny ID="ID_DENY_D_26_2" FriendlyName="Powershell 26" Hash="F875E43E12685ECE0BA2D42D55A13798CE9F1FFDE3CAE253D2529F4304811A52" />
    <Deny ID="ID_DENY_D_27_2" FriendlyName="PowerShell 27" Hash="720D826A84284E18E0003526A0CD9B7FF0C4A98A" />
    <Deny ID="ID_DENY_D_28_2" FriendlyName="PowerShell 28" Hash="CB5DF9D0D25571948C3D257882E07C7FA5E768448E0DEBF637E110F9FF575808" />
    <Deny ID="ID_DENY_D_29_2" FriendlyName="PowerShell 29" Hash="3C7265C3393C585D32E509B2D2EC048C73AC5EE6" />
    <Deny ID="ID_DENY_D_30_2" FriendlyName="PowerShell 30" Hash="7F1E03E956CA38CC0C491CB958D6E61A52491269CDB363BC488B525F80C56424" />
    <Deny ID="ID_DENY_D_31_2" FriendlyName="PowerShell 31" Hash="27D86C9B54E1A97399A6DC9C9DF9AE030CB734C8" />
    <Deny ID="ID_DENY_D_32_2" FriendlyName="PowerShell 32" Hash="917BD10E82C6E932F9C63B9BDCCC1D9BF04510CD8491B005CFFD273B48B5CD1E" />
    <Deny ID="ID_DENY_D_33_2" FriendlyName="PowerShell 33" Hash="B3BB2D75AECB34ED316CE54C6D513420186E4950" />
    <Deny ID="ID_DENY_D_34_2" FriendlyName="PowerShell 34" Hash="B734F6269A6738861E1DF98EE0E4E7377FAED10B82AAA9731DA0BB1CB366FCCE" />
    <Deny ID="ID_DENY_D_35_2" FriendlyName="PowerShell 35" Hash="FF378B465F2C8A87B4092F7C1F96399C0156CEEB" />
    <Deny ID="ID_DENY_D_36_2" FriendlyName="PowerShell 36" Hash="9B884CFE78F921042B003574AE30D9E86EE3DCC11E7110A1C92927F13C3F47E6" />
    <Deny ID="ID_DENY_D_37_2" FriendlyName="PowerShell 37" Hash="C7B99E8B59182112A3A14BD39880BDCDDD5C724F" />
    <Deny ID="ID_DENY_D_38_2" FriendlyName="PowerShell 38" Hash="6E585890C7369D6D8DA85C8B6B7411463BAA1ACAE9CE4197E033A46C897B35E5" />
    <Deny ID="ID_DENY_D_39_2" FriendlyName="PowerShell 39" Hash="BA4B3A92123FBCE66398020AFBCC0BCA1D1AAAD7" />
    <Deny ID="ID_DENY_D_40_2" FriendlyName="PowerShell 40" Hash="D8D361E3690676C7FDC483003BFC5C0C39FB16B42DFC881FB8D42A1064740B0B" />
    <Deny ID="ID_DENY_D_41_2" FriendlyName="PowerShell 41" Hash="1EA5104AE1A7A53F9421E0193B749F310B9261D1" />
    <Deny ID="ID_DENY_D_42_2" FriendlyName="PowerShell 42" Hash="66C1B8569019512ACDDC145DA6D348A68DE008BE7C05930AD0EC6927C26061AD" />
    <Deny ID="ID_DENY_D_43_2" FriendlyName="PowerShell 43" Hash="4EB2C3A4B551FC028E00F2E7DA9D0F1E38728571" />
    <Deny ID="ID_DENY_D_44_2" FriendlyName="PowerShell 44" Hash="30EAC589069FB79D540080B04B7FDBB8A9B1DF4E96B9D7C98519E49A1ED56851" />
    <Deny ID="ID_DENY_D_45_2" FriendlyName="PowerShell 45" Hash="E55505B609DD7A22F55C4BA9EDAD5627ECA6A8E8" />
    <Deny ID="ID_DENY_D_46_2" FriendlyName="PowerShell 46" Hash="ABDDA9C1EDA9F2344FB5B79890B7FD854D0E3D28BEC26AE33AAD196948AB642D" />
    <Deny ID="ID_DENY_D_47_2" FriendlyName="PowerShell 47" Hash="A15964475D213FB752B42E7DCDDBF4B14D623D14" />
    <Deny ID="ID_DENY_D_48_2" FriendlyName="PowerShell 48" Hash="61A68B436D828193E0C7B44D2AF83D22A9CB557B90186E4E6AC998CE5E3BFE8A" />
    <Deny ID="ID_DENY_D_49_2" FriendlyName="PowerShell 49" Hash="DB0C4B5CA1CBC3B117AB0439C5937B6A263DFD87" />
    <Deny ID="ID_DENY_D_50_2" FriendlyName="PowerShell 50" Hash="6D4FB385328CA01700092E1CDF75A97123A95120D5F8A9877FFB4D5A8531380B" />
    <Deny ID="ID_DENY_D_51_2" FriendlyName="PowerShell 51" Hash="72F9DCDA6ECDD6906A2538DFE795A2E2CA787BBC" />
    <Deny ID="ID_DENY_D_52_2" FriendlyName="PowerShell 52" Hash="F98FEC4A0306BD398F7FB7F611679B7797D32D54D1F2B35D728C0C7A058153ED" />
    <Deny ID="ID_DENY_D_53_2" FriendlyName="PowerShell 53" Hash="C980B65B86F780AC93B9458E9657291083CFEDA8" />
    <Deny ID="ID_DENY_D_54_2" FriendlyName="PowerShell 54" Hash="F9473493FF53274B8E75EC7E517F324AA0C5644C6F8045D3EF3A1B9A669ECF78" />
    <Deny ID="ID_DENY_D_55_2" FriendlyName="PowerShell 55" Hash="C30355B5E6FA3F793A3CC0A649945829723DD85C" />
    <Deny ID="ID_DENY_D_56_2" FriendlyName="PowerShell 56" Hash="4EB14099165177F0F3A1FACE32E72CF2DD221DB44155E73AFF94CB7DA195EF22" />
    <Deny ID="ID_DENY_D_57_2" FriendlyName="PowerShell 57" Hash="5C6CC1903D3DA2054ECD9A295EEE26F5561E152A" />
    <Deny ID="ID_DENY_D_58_2" FriendlyName="PowerShell 58" Hash="0BF8CAB75DAB712FC848DE7CC7DC5C8A10D666515E7535F89146F45AAAF9EF54" />
    <Deny ID="ID_DENY_D_59_2" FriendlyName="PowerShell 59" Hash="1443E8F56DEE11EEF5B746E3657C2F953FD4F6EA" />
    <Deny ID="ID_DENY_D_60_2" FriendlyName="PowerShell 60" Hash="487CB42795046E885303FC96EA54C3234E1B2072DAEB4F9218C21CC6C39A3223" />
    <Deny ID="ID_DENY_D_61_2" FriendlyName="PowerShell 61" Hash="072D4E33D1478C863DBAB20BF5DFF1A0FB5A9D53" />
    <Deny ID="ID_DENY_D_62_2" FriendlyName="PowerShell 62" Hash="631E091AE7AD2C543EE5755BC9D8DB34683C41E20D9A6CD41C8F07827156D6DB" />
    <Deny ID="ID_DENY_D_63_2" FriendlyName="PowerShell 63" Hash="FD15A313B890369B7D8E26C13B2070AE044FB4D8" />
    <Deny ID="ID_DENY_D_64_2" FriendlyName="PowerShell 64" Hash="AB9886A0993F87C2A39BC7822EE44FD4B4751C530ACF292ACD0319C967FB4F3B" />
    <Deny ID="ID_DENY_D_65_2" FriendlyName="PowerShell 65" Hash="4BAFD867B59328E7BB853148FE6D16B9411D7A12" />
    <Deny ID="ID_DENY_D_66_2" FriendlyName="PowerShell 66" Hash="D1F22B37902C2DD53FA27438436D9D236A196C10C8E492A8F4A14768644592D3" />
    <Deny ID="ID_DENY_D_67_2" FriendlyName="PowerShell 67" Hash="AC53AE4C8AB56D84393D67D820BEBDC3218739D3" />
    <Deny ID="ID_DENY_D_68_2" FriendlyName="PowerShell 68" Hash="49580C9459C3917E6F982C8E0D753D293DFA2E4FD1152F78FF7C73CF8B422507" />
    <Deny ID="ID_DENY_D_69_2" FriendlyName="PowerShell 69" Hash="333678A44D4BEBE9BEA3041FFDA9E2B55B58F1B5" />
    <Deny ID="ID_DENY_D_70_2" FriendlyName="PowerShell 70" Hash="94CBBC3970F01280D98C951BD0C4158D4B09A2BE21B8A27790D9F127B78C6F3F" />
    <Deny ID="ID_DENY_D_71_2" FriendlyName="PowerShell 71" Hash="5F5620DC049FE1F1C2DBAC077A59BA69CF2FF72C" />
    <Deny ID="ID_DENY_D_72_2" FriendlyName="PowerShell 72" Hash="A32C0769F36CAE0B6A7A1B8CCB6B7A75AA8BEB7F49815E96B4E120BFD7527E0A" />
    <Deny ID="ID_DENY_D_73_2" FriendlyName="PowerShell 73" Hash="BDBE541D269EC8235563842D024F9E37883DFB57" />
    <Deny ID="ID_DENY_D_74_2" FriendlyName="PowerShell 74" Hash="441076C7FD0AD481E6AC3198F08BE80EA9EB2926CA81D733F798D03DBEFD683E" />
    <Deny ID="ID_DENY_D_75_2" FriendlyName="PowerShell 75" Hash="FD6FE9143A46F4EBB46E6B46332FA7171002EBF0" />
    <Deny ID="ID_DENY_D_76_2" FriendlyName="PowerShell 76" Hash="85399D84601207AB92C8CA4D7D6E58CB1B0B0B57ED94FA7E5A1191FA1810E223" />
    <Deny ID="ID_DENY_D_77_2" FriendlyName="PowerShell 77" Hash="98FD94A89DCF92A7BEDB51C72BAD1A67650DD6E5" />
    <Deny ID="ID_DENY_D_78_2" FriendlyName="PowerShell 78" Hash="5CE4B042E986DAFEB7E2D2ABFB80376C4DEC325DB23B584B76039EEA6E1A74B1" />
    <Deny ID="ID_DENY_D_79_2" FriendlyName="PowerShell 79" Hash="6BC1E70F0EA84E88AC28BEAF74C10F3ABDF99209" />
    <Deny ID="ID_DENY_D_80_2" FriendlyName="PowerShell 80" Hash="93CB3907D1A9473E8A90593250C4A95EAE3A7066E9D8A57535CBDF82AA4AD4C2" />
    <Deny ID="ID_DENY_D_81_2" FriendlyName="PowerShell 81" Hash="7FCE82DBBC0FE45AFBE3927C323349C32D5A463A" />
    <Deny ID="ID_DENY_D_82_2" FriendlyName="PowerShell 82" Hash="2EDA8CA129E30CB5522C4DCD1E5AFDCA1E9C6447DD7053DACEF18DCDCCF3E2BC" />
    <Deny ID="ID_DENY_D_83_2" FriendlyName="PowerShell 83" Hash="BDB3DAC80667A0B931835D5D658C08F236B413D1" />
    <Deny ID="ID_DENY_D_84_2" FriendlyName="PowerShell 84" Hash="51287BACB692AAC5A8659774D982B304DC0C0B4A4D8F41CBCCD47D69796786DE" />
    <Deny ID="ID_DENY_D_85_2" FriendlyName="PowerShell 85" Hash="9633529CACE25ACCB29EBC5941DE1874903C0297" />
    <Deny ID="ID_DENY_D_86_2" FriendlyName="PowerShell 86" Hash="483A3997D5DA69A51DC7EA368A36C3CA4A5BD56CB08BFD9912BE799005156C18" />
    <Deny ID="ID_DENY_D_87_2" FriendlyName="PowerShell 87" Hash="B3493E30A2C347B550331C86529BDC288EAF8186" />
    <Deny ID="ID_DENY_D_88_2" FriendlyName="PowerShell 88" Hash="9371E2333906441715DE15FEE8A9AA03C4D076CA3C04D9A7AB0CC32189DA66ED" />
    <Deny ID="ID_DENY_D_89_2" FriendlyName="PowerShell 89" Hash="5D4B0794EB973D61CF74A700F11BE84E527E0E51" />
    <Deny ID="ID_DENY_D_90_2" FriendlyName="PowerShell 90" Hash="537DE34A1F4B3F8345D02F5BBA2B063F070A42FC1581AAC2AA91C1D071B14521" />
    <Deny ID="ID_DENY_D_91_2" FriendlyName="PowerShell 91" Hash="F3C75F35F42C1C5B3B4ED888187D6AB4035F994C" />
    <Deny ID="ID_DENY_D_92_2" FriendlyName="PowerShell 92" Hash="AD5678ED0734281973465DD728281A6C0EA146620FF2106A4EEFC7E94622B92F" />
    <Deny ID="ID_DENY_D_93_2" FriendlyName="PowerShell 93" Hash="91C0F76798A9679188C7D93FDEBAF797BDBE41B2" />
    <Deny ID="ID_DENY_D_94_2" FriendlyName="PowerShell 94" Hash="1D9244EAFEDFBFC02E13822E24A476C36FFD362B9D18F6CD195B654A34F946FF" />
    <Deny ID="ID_DENY_D_95_2" FriendlyName="PowerShell 95" Hash="7FCB424E67DDAC49413B45D7DCD636AD70E23B41" />
    <Deny ID="ID_DENY_D_96_2" FriendlyName="PowerShell 96" Hash="7E6F9A738520F78D1E9D0D0883FB07DD9188408CBE7C2937BDE1590F90C61753" />
    <Deny ID="ID_DENY_D_97_2" FriendlyName="PowerShell 97" Hash="A9745E20419EC1C90B23FE965D3C2DF028AF39DC" />
    <Deny ID="ID_DENY_D_98_2" FriendlyName="PowerShell 98" Hash="71B5B58EAA0C90397BC9546BCCA8C657500499CD2087CD7D7E1753D54C07E71D" />
    <Deny ID="ID_DENY_D_99_2" FriendlyName="PowerShell 99" Hash="3E5294910C59394DA93962128968E6C23016A028" />
    <Deny ID="ID_DENY_D_100_2" FriendlyName="PowerShell 100" Hash="DA700D4F58BCEA1D5A9CAD4F20AC725C6A354F9DA40E4F8F95E1C3DC7B84F550" />
    <Deny ID="ID_DENY_D_101_2" FriendlyName="PowerShell 101" Hash="266896FD257AD8EE9FC73B3A50306A573714EA8A" />
    <Deny ID="ID_DENY_D_102_2" FriendlyName="PowerShell 102" Hash="8E36BD08084C73AF674F2DAD568EE3BA2C85769FA7B3400CB62F7A7BD028BE9A" />
    <Deny ID="ID_DENY_D_103_2" FriendlyName="PowerShell 103" Hash="2CB781B3BD79FD277D92332ACA22C04430F9D692" />
    <Deny ID="ID_DENY_D_104_2" FriendlyName="PowerShell 104" Hash="92AE03F0090C0A5DF329B4B3FFEDBA622B0521BA699FA303C24120A30ED4C9E6" />
    <Deny ID="ID_DENY_D_105_2" FriendlyName="PowerShell 105" Hash="D82583F7D5EA477C94630AC5AAEB771C85BD4B0A" />
    <Deny ID="ID_DENY_D_106_2" FriendlyName="PowerShell 106" Hash="9B0F39AB233628A971ACEC53029C9B608CAB99868F1A1C5ABE20BC1BD1C2B70E" />
    <Deny ID="ID_DENY_D_107_2" FriendlyName="PowerShell 107" Hash="2DF4350DE3C97C9D4FD2973F8C5EA8AE621D22A8" />
    <Deny ID="ID_DENY_D_108_2" FriendlyName="PowerShell 108" Hash="015CE571E8503A353E2250D4D0DA19493B3311F3437527E6DDD2D2B6439FA2EB" />
    <Deny ID="ID_DENY_D_109_2" FriendlyName="PowerShell 109" Hash="080DEC3B15AD5AFE9BF3B0943A36285E92BAF469" />
    <Deny ID="ID_DENY_D_110_2" FriendlyName="PowerShell 110" Hash="F1391E78F17EA6097906B99C6F4F0AE8DD2E519856F837A3BCC58FBB87DAAE62" />
    <Deny ID="ID_DENY_D_111_2" FriendlyName="PowerShell 111" Hash="F87C726CCB5E64C6F363C21255935D5FEA9E4A0E" />
    <Deny ID="ID_DENY_D_112_2" FriendlyName="PowerShell 112" Hash="B7B42C3C8C61FD2616C16BBCF36EA15EC26A67536E94764D72A91CE04B89AAA4" />
    <Deny ID="ID_DENY_D_113_2" FriendlyName="PowerShell 113" Hash="25F52340199A0EA352C8B1A7014BCB610B232523" />
    <Deny ID="ID_DENY_D_114_2" FriendlyName="PowerShell 114" Hash="64D6D1F3A053908C5635BD6BDA36BC8E72D518C7ECE8DA761C0DDE70C50BB632" />
    <Deny ID="ID_DENY_D_115_2" FriendlyName="PowerShell 115" Hash="029198F05598109037A0E9E332EC052317E834DA" />
    <Deny ID="ID_DENY_D_116_2" FriendlyName="PowerShell 116" Hash="70B4BB6C2B7E9237FB14ABBC94955012285E2CAA74F91455EE52809CDAD4E7FC" />
    <Deny ID="ID_DENY_D_117_2" FriendlyName="PowerShell 117" Hash="A4390EF2D77F76DC4EFE55FF74EE1D06C303FDAE" />
    <Deny ID="ID_DENY_D_118_2" FriendlyName="PowerShell 118" Hash="3246A0CB329B030DA104E04B1A0728DE83724B08C724FD0238CE4578A0245576" />
    <Deny ID="ID_DENY_D_119_2" FriendlyName="PowerShell 119" Hash="89CEAB6518DA4E7F75B3C75BC04A112D3637B737" />
    <Deny ID="ID_DENY_D_120_2" FriendlyName="PowerShell 120" Hash="6581E491FBFF954A1A4B9CEA69B63951D67EB56DF871ED8B055193595F042B0D" />
    <Deny ID="ID_DENY_D_121_2" FriendlyName="PowerShell 121" Hash="00419E981EDC8613E600C939677F7B460855BF7E" />
    <Deny ID="ID_DENY_D_122_2" FriendlyName="PowerShell 122" Hash="61B724BCFC3DA1CC1583DB0BC42EFE166E92D8D3CE91E58A29F7AEBEFAE2149F" />
    <Deny ID="ID_DENY_D_123_2" FriendlyName="PowerShell 123" Hash="272EF88BBA9B4B54D242FFE1E96D07DBF53497A0" />
    <Deny ID="ID_DENY_D_124_2" FriendlyName="PowerShell 124" Hash="AFC0968EDCE9E5FC1BC392382833EBEF3265B32D3ECBB529D89A1DF33A31E9BD" />
    <Deny ID="ID_DENY_D_125_2" FriendlyName="PowerShell 125" Hash="CD9D9789B3B31562C4BE44B6BEEA8815C5EDAE1F" />
    <Deny ID="ID_DENY_D_126_2" FriendlyName="PowerShell 126" Hash="FCAF8DC3C7A5D3B29B19A9C5F89324BF65B50C440AC0316B08532CEA2F1FF9B0" />
    <Deny ID="ID_DENY_D_127_2" FriendlyName="PowerShell 127" Hash="941D0FD47887035A04E17F46DE6C4004D7FD8871" />
    <Deny ID="ID_DENY_D_128_2" FriendlyName="PowerShell 128" Hash="4AD6DC7FF0A2E776CE7F27B4E3D3C1C380CA3548DFED565429D88C3BBE61DD0F" />
    <Deny ID="ID_DENY_D_129_2" FriendlyName="PowerShell 129" Hash="421D1142105358B8360454E43FD15767DA111DBA" />
    <Deny ID="ID_DENY_D_130_2" FriendlyName="PowerShell 130" Hash="692CABD40C1EDFCB6DC50591F31FAE30848E579D6EF4D2CA0811D06B086CF8BE" />
    <Deny ID="ID_DENY_D_131_2" FriendlyName="PowerShell 131" Hash="AC9F095DD4AE80B124F55541761AA1F35E49A575" />
    <Deny ID="ID_DENY_D_132_2" FriendlyName="PowerShell 132" Hash="0D8A0FB3BF3CF80D44ED20D9F1E7292E9EE5A49ABCE68592DED55A71B0ACAECE" />
    <Deny ID="ID_DENY_D_133_2" FriendlyName="PowerShell 133" Hash="B1CF2A18B281F73FE6685B5CE74D1BA50BE9AFE5" />
    <Deny ID="ID_DENY_D_134_2" FriendlyName="PowerShell 134" Hash="095B79953F9E3E2FB721693FBFAD5841112D592B6CA7EB2055B262DEB7C7008A" />
    <Deny ID="ID_DENY_D_135_2" FriendlyName="PowerShell 135" Hash="128D7D03E4B85DBF95427D72EFF833DAB5E92C33" />
    <Deny ID="ID_DENY_D_136_2" FriendlyName="PowerShell 136" Hash="EACFC615FDE29BD858088AF42E0917E4B4CA5991EFB4394FB3129735D7299235" />
    <Deny ID="ID_DENY_D_137_2" FriendlyName="PowerShell 137" Hash="47D2F87F2D2D516D712A156421F0C2BD285200E9" />
    <Deny ID="ID_DENY_D_138_2" FriendlyName="PowerShell 138" Hash="8CACA1828E7770DADF21D558976D415AC7BDA16D58926308FD5E9D5087F4B0E6" />
    <Deny ID="ID_DENY_D_139_2" FriendlyName="PowerShell 139" Hash="CD9D70B0107801567EEADC4ECD74511A1A6FF4FE" />
    <Deny ID="ID_DENY_D_140_2" FriendlyName="PowerShell 140" Hash="9C96396EFCC9DC09F119DE8695CB3372F82DB46D23A1B7A88BD86CBE814233E1" />
    <Deny ID="ID_DENY_D_141_2" FriendlyName="PowerShell 141" Hash="233E3B5108A43239C6C13292043DED0567281AF9" />
    <Deny ID="ID_DENY_D_142_2" FriendlyName="PowerShell 142" Hash="6EDF19CC53EA2064CE108957343EB3505359CF05BD6955C7502AF565BD761702" />
    <Deny ID="ID_DENY_D_143_2" FriendlyName="PowerShell 143" Hash="CD725B606888E5C5426FEAB44E2CC7722DFE5411" />
    <Deny ID="ID_DENY_D_144_2" FriendlyName="PowerShell 144" Hash="B20C4F36AE6A3AC323759C81173FACE1B1C112FA5B701C65DCD7313D7CE59907" />
    <Deny ID="ID_DENY_D_145_2" FriendlyName="PowerShell 145" Hash="E5212F1081B5777B88F5C41174ADEDB35B4258CF" />
    <Deny ID="ID_DENY_D_146_2" FriendlyName="PowerShell 146" Hash="F4DE5B5395701F8C94D65D732E4D212E1879C9C84345B46A941965B094F75017" />
    <Deny ID="ID_DENY_D_147_2" FriendlyName="PowerShell 147" Hash="EC41A3FB8D6E3B0F55F6583C14C45B6238753019" />
    <Deny ID="ID_DENY_D_148_2" FriendlyName="PowerShell 148" Hash="76CA6B396796351685198D6189E865AFD7FB9E6C5CEFA9EA0B5F0A9F1FC98D57" />
    <Deny ID="ID_DENY_D_149_2" FriendlyName="PowerShell 149" Hash="3B2B7042A84033CA846AFE472912524F7BAD57E5" />
    <Deny ID="ID_DENY_D_150_2" FriendlyName="PowerShell 150" Hash="2DF95ABEB23DAA0377DFA6360976B69D3CEE7325A9B7571F331D569809FAED8B" />
    <Deny ID="ID_DENY_D_151_2" FriendlyName="PowerShell 151" Hash="7BED2F9C0ADF1597C7EBB79163BDA21D8D7D28CA" />
    <Deny ID="ID_DENY_D_152_2" FriendlyName="PowerShell 152" Hash="44BDD2DADB13E7A8FF6AFCF4AE3E2CC830506D9475B4C2C71D319E169977998F" />
    <Deny ID="ID_DENY_D_153_2" FriendlyName="PowerShell 153" Hash="A1251FA30162B13456A4687495726FF793D511BE" />
    <Deny ID="ID_DENY_D_154_2" FriendlyName="PowerShell 154" Hash="9C15E4DE10DE47ACD393359D523211AD8596C61FE54F2C0664D48E1D249231CE" />
    <Deny ID="ID_DENY_D_155_2" FriendlyName="PowerShell 155" Hash="D835947C84CFBA652B553A77A90475E02291AA5F" />
    <Deny ID="ID_DENY_D_156_2" FriendlyName="PowerShell 156" Hash="B4D6DAA10398D5DA192DFDD75010F428D24762D432934F0E2030D39610D43E12" />
    <Deny ID="ID_DENY_D_157_2" FriendlyName="PowerShell 157" Hash="1F85BBEC1DFC5785B91735A7C561E664F7FE1E94" />
    <Deny ID="ID_DENY_D_158_2" FriendlyName="PowerShell 158" Hash="828F05BFF829019EC0F3082323FEA859C0D71CCE14B5B75C07E7D418EF354269" />
    <Deny ID="ID_DENY_D_159_2" FriendlyName="PowerShell 159" Hash="FC0E23771620B41E6920F2463F49B84307D8BA91" />
    <Deny ID="ID_DENY_D_160_2" FriendlyName="PowerShell 160" Hash="C4FA568C852A46316308A660B80D83A11D41071F1CF4A79847A3F56714CC47AF" />
    <Deny ID="ID_DENY_D_161_2" FriendlyName="PowerShell 161" Hash="D18240AEE8B9B964F6B9CDFC5AFB6C343C286636" />
    <Deny ID="ID_DENY_D_162_2" FriendlyName="PowerShell 162" Hash="7B4C39285569F14AA9799332C542A0796717C5EF9D636BD11B2841450BC6399D" />
    <Deny ID="ID_DENY_D_163_2" FriendlyName="PowerShell 163" Hash="1A16008D330330182AA555B1D3E9BE0B2D6BECBF" />
    <Deny ID="ID_DENY_D_164_2" FriendlyName="PowerShell 164" Hash="D7685E259D0328937487856A3AB68B6D9D420DD4E02541F4D71164DFA65B4644" />
    <Deny ID="ID_DENY_D_165_2" FriendlyName="PowerShell 165" Hash="FBA274406B503B464B349805149E6AA722909CC9" />
    <Deny ID="ID_DENY_D_166_2" FriendlyName="PowerShell 166" Hash="FEBC97ED819C79E54157895457DBA755F182D6330A5103E0663AFA07E01E5CF8" />
    <Deny ID="ID_DENY_D_167_2" FriendlyName="PowerShell 167" Hash="293AF426A39282770387F5EE25CA719A91419A18" />
    <Deny ID="ID_DENY_D_168_2" FriendlyName="PowerShell 168" Hash="A9E655A96A124BC361D9CC5C7663FC033AA6F6609916EFAA76B6A6E9713A0D32" />
    <Deny ID="ID_DENY_D_169_2" FriendlyName="PowerShell 169" Hash="AEBFE7497F4A1947B5CB32650843CA0F85BD56D0" />
    <Deny ID="ID_DENY_D_170_2" FriendlyName="PowerShell 170" Hash="8C385B2C16136C097C96701D2140E014BF454CFA7297BE0C28431DED15339C0F" />
    <Deny ID="ID_DENY_D_171_2" FriendlyName="PowerShell 171" Hash="8FB604CD72701B83BC265D87F52B36C6F14E5DBE" />
    <Deny ID="ID_DENY_D_172_2" FriendlyName="PowerShell 172" Hash="B35AFBA7A897CB882C14A08AFB36A8EC938BDA14DF070234A2CCBDBA8F7DF91C" />
    <Deny ID="ID_DENY_D_173_2" FriendlyName="PowerShell 173" Hash="CE70309DB83C9202F45028EBEC252747F4936E6F" />
    <Deny ID="ID_DENY_D_174_2" FriendlyName="PowerShell 174" Hash="1F6D74FDA1F9EE6BBAC72E7E717A01B9FFC29822561D11175F6809D12215B4ED" />
    <Deny ID="ID_DENY_D_175_2" FriendlyName="PowerShell 175" Hash="9D71AD914DBB2FDF793742AA63AEEF4E4A430790" />
    <Deny ID="ID_DENY_D_176_2" FriendlyName="PowerShell 176" Hash="8CC1B5FA9A9609AC811F6505FA9B68E85A87BAE1EF676EFFE1BE438EACBDF3E1" />
    <Deny ID="ID_DENY_D_177_2" FriendlyName="PowerShell 177" Hash="7484FD78A9298DBA24AC5C882D16DB6146E53712" />
    <Deny ID="ID_DENY_D_178_2" FriendlyName="PowerShell 178" Hash="A79A74BFB768312E8EE089060C5C3238D59EF0C044A450FEB97DCA26815ECB34" />
    <Deny ID="ID_DENY_D_179_2" FriendlyName="PowerShell 179" Hash="78C3C6AEF52A6A5392C55F1EC98AF18053B3087D" />
    <Deny ID="ID_DENY_D_180_2" FriendlyName="PowerShell 180" Hash="493B620FCAD8A91D1FD7C726697E09358CA90822E8D6E021DF56E70B46F7C346" />
    <Deny ID="ID_DENY_D_181_2" FriendlyName="PowerShell 181" Hash="783FFB771F08BCF55C2EA474B5460EB65EA9444C" />
    <Deny ID="ID_DENY_D_182_2" FriendlyName="PowerShell 182" Hash="09DA1592B8457F860297821EB7FAA7F3BB71FC1916ED5DEE6D85044953640D5C" />
    <Deny ID="ID_DENY_D_183_2" FriendlyName="PowerShell 183" Hash="B303D1689ED99613E4F52CE6E5F96AAEBC3A45C3" />
    <Deny ID="ID_DENY_D_184_2" FriendlyName="PowerShell 184" Hash="82AB406FD78DCF58F65DC14D6FDDD72840015F3FE5B554428969BECA0325CD9C" />
    <Deny ID="ID_DENY_D_185_2" FriendlyName="PowerShell 185" Hash="DB5C6CB23C23BA6A3CD4FD4EC0A4DAEE3FC66500" />
    <Deny ID="ID_DENY_D_186_2" FriendlyName="PowerShell 186" Hash="9A46C16C5151D97A0EFA3EA503249E31A6D5D8D25E4F07CD4E5E077A574713FB" />
    <Deny ID="ID_DENY_D_187_2" FriendlyName="PowerShell 187" Hash="C1E08AD32F680100C51F138C6C095139E7230C3B" />
    <Deny ID="ID_DENY_D_188_2" FriendlyName="PowerShell 188" Hash="A5D5C1F79CD26216194D4C72DBAA3E48CB4A143D9E1F78819E52E9FEB2AD0AE3" />
    <Deny ID="ID_DENY_D_189_2" FriendlyName="PowerShell 189" Hash="BACA825D0852E2D8F3D92381D112B99B5DD56D9F" />
    <Deny ID="ID_DENY_D_190_2" FriendlyName="PowerShell 190" Hash="ABA28E0FC251E1D7FE5E264E1B36EC5E482D70AA434E75A756356F23F0C1F2F4" />
    <Deny ID="ID_DENY_D_191_2" FriendlyName="PowerShell 191" Hash="E89C29D38F554F6CB73B5FD3D0A783CC12FFEBC3" />
    <Deny ID="ID_DENY_D_192_2" FriendlyName="PowerShell 192" Hash="4C93CBDCF4328D27681453D8DFD7495955A07EE6A0EFB9A593853A86990CF528" />
    <Deny ID="ID_DENY_D_193_2" FriendlyName="PowerShell 193" Hash="5B5E7942233D7C8A325A429FC4F4AE281325E8F9" />
    <Deny ID="ID_DENY_D_194_2" FriendlyName="PowerShell 194" Hash="40DA20086ED76A5EA5F62901D110216EE206E7EEB2F2BFF02F61D0BE85B0BB5A" />
    <Deny ID="ID_DENY_D_195_2" FriendlyName="PowerShell 195" Hash="926DCACC6983F85A8ABBCB5EE13F3C756705A1D5" />
    <Deny ID="ID_DENY_D_196_2" FriendlyName="PowerShell 196" Hash="A22761E2BF18F02BB630962E3C5E32738770AAEA77F8EDA233E77792EB480072" />
    <Deny ID="ID_DENY_D_197_2" FriendlyName="PowerShell 197" Hash="6FE6723A355DEB4BC6B8637A634D1B43AFA64112" />
    <Deny ID="ID_DENY_D_198_2" FriendlyName="PowerShell 198" Hash="9BCC55A97A275F7D81110877F1BB5B41F86A848EA02B4EE1E1E6A44D927A488F" />
    <Deny ID="ID_DENY_D_199_2" FriendlyName="PowerShell 199" Hash="8D5599B34BED4A660DACC0922F6C2F112F264758" />
    <Deny ID="ID_DENY_D_200_2" FriendlyName="PowerShell 200" Hash="F375014915E5E027F697B29201362B56F2D9E598247C96F86ABADCC6FF42F034" />
    <Deny ID="ID_DENY_D_201_2" FriendlyName="PowerShell 201" Hash="CCFB247A3BCA9C64D82F647F3D30A3172E645F13" />
    <Deny ID="ID_DENY_D_202_2" FriendlyName="PowerShell 202" Hash="5E52ABBC051368315F078D31F01B0C1B904C1DDB6D1C1E4A91BE276BDF44C66F" />
    <Deny ID="ID_DENY_D_203_2" FriendlyName="PowerShell 203" Hash="E8EB859531F426CC45A3CB9118F399C92054563E" />
    <Deny ID="ID_DENY_D_204_2" FriendlyName="PowerShell 204" Hash="CD9E1D41F8D982F4AA6C610A2EFEAEBA5B0CDD883DF4A86FA0180ACD333CAA86" />
    <Deny ID="ID_DENY_D_205_2" FriendlyName="PowerShell 205" Hash="C92D4EAC917EE4842A437C54F96D87F003199DE8" />
    <Deny ID="ID_DENY_D_206_2" FriendlyName="PowerShell 206" Hash="3A270242EB49E06405FD654FA4954B166297BBC886891C64B4424134C39872DB" />
    <Deny ID="ID_DENY_D_207_2" FriendlyName="PowerShell 207" Hash="66681D9171981216B31996429695931DA2A638B9" />
    <Deny ID="ID_DENY_D_208_2" FriendlyName="PowerShell 208" Hash="7A2DF7D56912CB4EB5B36D071496EDC97661086B0E4C9CC5D9C61779A5A7DAAA" />
    <Deny ID="ID_DENY_D_209_2" FriendlyName="PowerShell 209" Hash="9DCA54C85E4C645CB296FE3055E90255B6506A95" />
    <Deny ID="ID_DENY_D_210_2" FriendlyName="PowerShell 210" Hash="8C9C58AD12FE61CBF021634EC6A4B3094750FC002DA224423E0BCEB01ECF292A" />
    <Deny ID="ID_DENY_D_211_2" FriendlyName="PowerShell 211" Hash="3AF2587E8B62F88DC363D7F5308EE4C1A6147338" />
    <Deny ID="ID_DENY_D_212_2" FriendlyName="PowerShell 212" Hash="D32D88F158FD341E32708CCADD48C426D227D0EC8465FF4304C7B7EAC2C6A93E" />
    <Deny ID="ID_DENY_D_213_2" FriendlyName="PowerShell 213" Hash="D3D453EBC368DF7CC2200474035E5898B58D93F1" />
    <Deny ID="ID_DENY_D_214_2" FriendlyName="PowerShell 214" Hash="BBE569BCC282B3AF682C1528D4E3BC53C1A0C6B5905FA34ADB4305160967B64A" />
    <Deny ID="ID_DENY_D_215_2" FriendlyName="PowerShell 215" Hash="D147CE5C7E7037D1BE3C0AF67EDB6F528C77DB0A" />
    <Deny ID="ID_DENY_D_216_2" FriendlyName="PowerShell 216" Hash="11F936112832738AD9B3A1C67537D5542DE8E86856CF2A5893C4D26CF3A2C558" />
    <Deny ID="ID_DENY_D_217_2" FriendlyName="PowerShell 217" Hash="7DBB41B87FAA887DE456C8E6A72E09D2839FA1E7" />
    <Deny ID="ID_DENY_D_218_2" FriendlyName="PowerShell 218" Hash="3741F3D2F264E047339C95A66085599A49766DEF1C5BD0C32237CE87FA0B41FB" />
    <Deny ID="ID_DENY_D_219_2" FriendlyName="PowerShell 219" Hash="5F3AECC89BAF094EAFA3C25E6B883EE68A6F00B0" />
    <Deny ID="ID_DENY_D_220_2" FriendlyName="PowerShell 220" Hash="AA085BE6498D2E3F527F3D72A5D1C604508133F0CDC05AD404BB49E8E3FB1A1B" />
    <Deny ID="ID_DENY_D_221_2" FriendlyName="PowerShell 221" Hash="DDE4D9A08514347CDE706C42920F43523FC74DEA" />
    <Deny ID="ID_DENY_D_222_2" FriendlyName="PowerShell 222" Hash="81835C6294B96282A4D7D70383BBF797C2E4E7CEF99648F85DDA50F7F41B02F6" />
    <Deny ID="ID_DENY_D_223_2" FriendlyName="PowerShell 223" Hash="48092864C96C4BF9B68B5006EAEDAB8B57B3738C" />
    <Deny ID="ID_DENY_D_224_2" FriendlyName="PowerShell 224" Hash="36EF3BED9A5D0D563BCB354BFDD2931F6256759D1D905BA5DC21CDA496F2FEB7" />
    <Deny ID="ID_DENY_D_225_2" FriendlyName="PowerShell 225" Hash="7F6725BA8CCD2DAEEFD0C9590A5DF9D98642CCEA" />
    <Deny ID="ID_DENY_D_226_2" FriendlyName="PowerShell 226" Hash="DB68DB3AE32A8A662AA6EE16CF459124D2701719D019B614CE9BF115F5F9C904" />
    <Deny ID="ID_DENY_D_227_2" FriendlyName="PowerShell 227" Hash="FF205856A3209227D571EAD4B8C1E611E7FF9924" />
    <Deny ID="ID_DENY_D_228_2" FriendlyName="PowerShell 228" Hash="A63B38CE17DA60C4C431FC42C4507A0B7C19B384AC9E121E2988AD026E71ED63" />
    <Deny ID="ID_DENY_D_229_2" FriendlyName="PowerShell 229" Hash="479C9429691314D3E21E4F4CA8B95D5BD2BDDEDA" />
    <Deny ID="ID_DENY_D_230_2" FriendlyName="PowerShell 230" Hash="2BA4E369D267A9ABDEBA50DA2CB5FC56A8EE4382C5BCFCFFD121350B88A6F0E1" />
    <Deny ID="ID_DENY_D_231_2" FriendlyName="PowerShell 231" Hash="C7D70B96440D215173F35412D56CF9329886D8D3" />
    <Deny ID="ID_DENY_D_232_2" FriendlyName="PowerShell 232" Hash="B00C54F1AA77D88335675EAF07ED834E68FD96DD7606914C2867F9C506AB0A56" />
    <Deny ID="ID_DENY_D_233_2" FriendlyName="PowerShell 233" Hash="2AB804E1FF982AE0EDB591BC61AA909CF32E99C5" />
    <Deny ID="ID_DENY_D_234_2" FriendlyName="PowerShell 234" Hash="253120422B0DD987C293CAF5928FA820414C0A01622FD0EAF304A750FC5AEEFE" />
    <Deny ID="ID_DENY_D_235_2" FriendlyName="PowerShell 235" Hash="8DAB1D74CAEDBAA8D17805CF00D64A44F5831C12" />
    <Deny ID="ID_DENY_D_236_2" FriendlyName="PowerShell 236" Hash="AC1CE3AA9023E23F2F63D5A3536294B914686057336402E059DEF6559D1CE723" />
    <Deny ID="ID_DENY_D_237_2" FriendlyName="PowerShell 237" Hash="993425279D204D1D14C3EB989DEB4805ADC558CF" />
    <Deny ID="ID_DENY_D_238_2" FriendlyName="PowerShell 238" Hash="BDADDD710E47EB8D24B78E542F3996B0EA2CA577ABD515785819302DB15839DD" />
    <Deny ID="ID_DENY_D_239_2" FriendlyName="PowerShell 239" Hash="F4DB0CDF3A3FD163A9B90789CC6D14D326AD609C" />
    <Deny ID="ID_DENY_D_240_2" FriendlyName="PowerShell 240" Hash="5D249D8366077713024552CA8D08F164E975AFF89E8909E35A43F02B0DC66F70" />
    <Deny ID="ID_DENY_D_241_2" FriendlyName="PowerShell 241" Hash="5B8E45EECA32C2F0968C2252229D768B0DB796A0" />
    <Deny ID="ID_DENY_D_242_2" FriendlyName="PowerShell 242" Hash="B4D336B32C27E3D3FEBE4B06252DDE9683814E7E903C98448972AAB7389DFC02" />
    <Deny ID="ID_DENY_D_243_2" FriendlyName="PowerShell 243" Hash="4F5D66B449C4D2FDEA532F9B5DBECA5ACA8195EF" />
    <Deny ID="ID_DENY_D_244_2" FriendlyName="PowerShell 244" Hash="39F2F19A5C6708CE8CE4E1ABBEBA8D3D1A6220391CA86B2D319E347B46005C97" />
    <Deny ID="ID_DENY_D_245_2" FriendlyName="PowerShell 245" Hash="4BFB3F95CA1B79DA3C6B0A2ECB432059E686F967" />
    <Deny ID="ID_DENY_D_246_2" FriendlyName="PowerShell 246" Hash="0C4688AACD02829850DE0F792AC06D3C87895412A910EA76F7F9BF31B3B4A3E9" />
    <Deny ID="ID_DENY_D_247_2" FriendlyName="PowerShell 247" Hash="6DC048AFA50B5B1B0AD7DD3125AC83D46FED730A" />
    <Deny ID="ID_DENY_D_248_2" FriendlyName="PowerShell 248" Hash="432F666CCE8CD222484E263AE02F63E0038143DD6AD07B3EB1633CD3C498C13D" />
    <Deny ID="ID_DENY_D_249_2" FriendlyName="PubPrn 249" Hash="68E96BE23748AA680D5E1E557778901F332ED5D3" />
    <Deny ID="ID_DENY_D_250_2" FriendlyName="PubPrn 250" Hash="8FA30B5931806565C2058E565C06AD5F1C5A48CDBE609975EB31207C25214063" />
    <Deny ID="ID_DENY_D_251_2" FriendlyName="PubPrn 251" Hash="32C4B29FE428B1DF473F3F4FECF519D285E93521" />
    <Deny ID="ID_DENY_D_252_2" FriendlyName="PubPrn 252" Hash="D44FB563198D60DFDC91608949FE2FADAD6161854D084EB1968C558AA36513C7" />
    <Deny ID="ID_DENY_D_253_2" FriendlyName="PubPrn 253" Hash="9EDBEF086D350863F29175F5AB5178B88B142C75" />
    <Deny ID="ID_DENY_D_254_2" FriendlyName="PubPrn 254" Hash="9B22C98351F2B6DEDDCED0D805C65F5B166FF519A8DF41EB242CB909471892EB" />
    <Deny ID="ID_DENY_D_255_2" FriendlyName="PubPrn 255" Hash="8A3B30F345C43246B3500721CFEEADBAC6B9D9C6" />
    <Deny ID="ID_DENY_D_256_2" FriendlyName="PubPrn 256" Hash="37C20BF20A2BBACE50957F8D0AB3FD16174BC005E79D47E51E899AFD9E4B7724" />
    <Deny ID="ID_DENY_D_257_2" FriendlyName="PubPrn 257" Hash="C659DAD2B37375781E2D584E16AAE2A10B5A1156" />
    <Deny ID="ID_DENY_D_258_2" FriendlyName="PubPRn 258" Hash="EBDACA86F10AC0446D60CC75628EC7A370B1E2236E6D20F22372F91033B6D429" />
    <Deny ID="ID_DENY_D_259_2" FriendlyName="PubPrn 259" Hash="C9D6394BBFF8CD9C6590F08C54EC6AFDEB5CFFB4" />
    <Deny ID="ID_DENY_D_260_2" FriendlyName="PubPrn 260" Hash="518E4EA7A2B70713E1AEC6E7E75A488C39384B625C5F2779073E9294CBF2BD9F" />
    <Deny ID="ID_DENY_D_263_2" FriendlyName="PubPrn 263" Hash="763A652217A1E30F2D288B7F44E08346949A02CD" />
    <Deny ID="ID_DENY_D_264_2" FriendlyName="PubPrn 264" Hash="FCDDA212B06602F642B29FC05316EF75E4EE9975E6E8A9526E842BE2EA237C5D" />
    <Deny ID="ID_DENY_D_267_2" FriendlyName="PubPrn 267" Hash="60FD28D770B23A0477679311D247DA4D5C61074C" />
    <Deny ID="ID_DENY_D_268_2" FriendlyName="PubPrn 268" Hash="D09A4B2EA611CDFDC6DCA44314289B622B2A5EDA09716EF4A16B91EC90BFBA8F" />
    <Deny ID="ID_DENY_D_271_2" FriendlyName="PubPrn 271" Hash="47CBE201ED224BF3F5C322F7A49EF64469AF2E1A" />
    <Deny ID="ID_DENY_D_272_2" FriendlyName="PubPrn 272" Hash="24855B9CC420719D5AB93F4F1589CE09E4063E4FC98681BD91A1D18A3C8ACB43" />
    <Deny ID="ID_DENY_D_275_2" FriendlyName="PubPrn 275" Hash="663D8E25BAE20510A882F6692BE2620FBABFB94E" />
    <Deny ID="ID_DENY_D_276_2" FriendlyName="PubPrn 276" Hash="649A9E5A4867A28C7D0934793F33B545F9441EA23872715C84826D80CC8EC576" />
    <Deny ID="ID_DENY_D_277_2" FriendlyName="PubPrn 277" Hash="226ABB2FBAEFC5A7E2A819D9D708F826C00FD215" />
    <Deny ID="ID_DENY_D_278_2" FriendlyName="PubPrn 278" Hash="AC6B35C904D388FD12C07C2F6A1A07F337D31895713BF01DCCE7A7F187D7F4D9" />
    <Deny ID="ID_DENY_D_279_2" FriendlyName="PubPrn 279" Hash="071D7849941E43144839988971255FE34690A747" />
    <Deny ID="ID_DENY_D_280_2" FriendlyName="PubPrn 280" Hash="5AF75895BDC11A6B68C816A8677D7CF9692BF25A95C4378A43FBDE740B18EEB1" />
    <Deny ID="ID_DENY_D_281_2" FriendlyName="PubPrn 281" Hash="9FBFF074C201BFEBE37710CB453EFF9A14AE3BFF" />
    <Deny ID="ID_DENY_D_282_2" FriendlyName="PubPrn 282" Hash="A0C71A925850D2D481C7E520F5D5A83305EC169EEA4C5B8DC20C8D8AFCD8A512" />
    <Deny ID="ID_DENY_D_283_2" FriendlyName="PSWorkflowUtility 283" Hash="4FBC9A72C5D5246F34994F13076A5AD98A1A844E" />
    <Deny ID="ID_DENY_D_284_2" FriendlyName="PSWorkflowUtility 284" Hash="7BF44433D3A606104778F64B11B92C52FC99C4BA570C50B70438275D0B587B8E" />
    <Deny ID="ID_DENY_D_285_2" FriendlyName="PSWorkflowUtility 285" Hash="99382ED8FA3577DFD903C01478A79D6D90681406" />
    <Deny ID="ID_DENY_D_286_2" FriendlyName="PSWorkflowUtility 286" Hash="C3A5DAB20947CA8FD092E75C25177E7BAE7884CA58710F14827144C09EA1F94B" />
    <Deny ID="ID_DENY_D_287_2" FriendlyName="PowerShellShell 287" Hash="2B45C165F5E0BFD932397B18980BA680E2E82BD1" />
    <Deny ID="ID_DENY_D_288_2" FriendlyName="PowerShellShell 288" Hash="1DD0AD6B85DAEBAE7555DC37EA6C160EA38F75E3D4847176F77562A59025660A" />
    <Deny ID="ID_DENY_D_289_2" FriendlyName="PowerShellShell 289" Hash="A8C9E28F25C9C5F479691F2F49339F4448747638" />
    <Deny ID="ID_DENY_D_290_2" FriendlyName="PowerShellShell 290" Hash="F8FA17038CD532BF5D0D6D3AC55CE34E45EB690637D38D399CAB14B09807EB6C" />
    <Deny ID="ID_DENY_D_293_2" FriendlyName="PowerShellShell 293" Hash="3BA0605C08935B340BEFDC83C0D92B1CE52B8348" />
    <Deny ID="ID_DENY_D_294_2" FriendlyName="PowerShellShell 294" Hash="B794B01CE561F2791D4ED3EADE523D03D2BE7B4CEFE9AAFC685ECE8ACF515ED2" />
    <Deny ID="ID_DENY_D_295_2" FriendlyName="PowerShellShell 295" Hash="8B74A22710A532A71532E4F0B1C60AABDCAA29AB" />
    <Deny ID="ID_DENY_D_296_2" FriendlyName="PowerShellShell 296" Hash="EB335007DF9897BCD2ED5C647BA724F07658E8597E73E353479201000CF2EF79" />
    <Deny ID="ID_DENY_D_297_2" FriendlyName="PowerShellShell 297" Hash="10E2CD3A2CFA0549590F740139F464626DEE2092" />
    <Deny ID="ID_DENY_D_298_2" FriendlyName="PowerShellShell 298" Hash="61DEC96B91F3F152DFDA84B28EBB184808A21C4C183CC0584C66AC7E20F0DDB6" />
    <Deny ID="ID_DENY_D_299_2" FriendlyName="PowerShellShell 299" Hash="98E84F46B3EB3AD7420C9715722145AFB0C065A7" />
    <Deny ID="ID_DENY_D_300_2" FriendlyName="PowerShellShell 300" Hash="67398990D42DFF84F8BE33B486BF492EBAF61671820BB9DCF039D1F8738EC5A4" />
    <Deny ID="ID_DENY_D_301_2" FriendlyName="PowerShellShell 301" Hash="58F399EC75708720E722FBD038F0EC089BF5A8C0" />
    <Deny ID="ID_DENY_D_302_2" FriendlyName="PowerShellShell 302" Hash="C523FFF884C44251337470870E0B158230961845FC1E953F877D515668524F2E" />
    <Deny ID="ID_DENY_D_303_2" FriendlyName="PowerShellShell 303" Hash="41EE8E9559FC0E772FC26EBA87ED4D77E60DC76C" />
    <Deny ID="ID_DENY_D_304_2" FriendlyName="PowerShellShell 304" Hash="219AD97976987C614B00C0CD1229B4245F2F1453F5AF90B907664D0BF6ADFE78" />
    <Deny ID="ID_DENY_D_305_2" FriendlyName="PowerShellShell 305" Hash="7F7E646892FCEB8D6A19647F00C1153014955C45" />
    <Deny ID="ID_DENY_D_306_2" FriendlyName="PowerShellShell 306" Hash="5825FF16398F12B4999B9A12849A757DD0884F9908220FB33E720F170DA288D5" />
    <Deny ID="ID_DENY_D_307_2" FriendlyName="PowerShellShell 307" Hash="7EA8A590583008446583F0AE7D66537FAD63619D" />
    <Deny ID="ID_DENY_D_308_2" FriendlyName="PowerShellShell 308" Hash="26DD094717B15B3D39600D909A9CAEBCF5C616C6277933BCC01326E8C475A128" />
    <Deny ID="ID_DENY_D_309_2" FriendlyName="PowerShellShell 309" Hash="5F6CDF52C1E184B080B89EB234DE179C19F110BA" />
    <Deny ID="ID_DENY_D_310_2" FriendlyName="PowerShellShell 310" Hash="41FB90606E3C66D21C703D84C943F8CB35772030B689D9A9895CB3EF7C863FB2" />
    <Deny ID="ID_DENY_D_311_2" FriendlyName="PowerShellShell 311" Hash="91C1DACBD6773BFC7F9305418A6683B8311949CF" />
    <Deny ID="ID_DENY_D_312_2" FriendlyName="PowerShellShell 312" Hash="EB678387D01938D88E6F2F46712269D54D845EB6A8AAC3FCA256DC2160D42975" />
    <Deny ID="ID_DENY_D_313_2" FriendlyName="PowerShellShell 313" Hash="A05294D23A4A7DC91692013C0EC4373598A28B21" />
    <Deny ID="ID_DENY_D_314_2" FriendlyName="PowerShellShell 314" Hash="ABEEA4903403D2C07489436E59955ECFEEF893C63D1FDBED234343F6A6D472B1" />
    <Deny ID="ID_DENY_D_315_2" FriendlyName="PowerShellShell 315" Hash="B155C278617845EC6318E4009E4CED6639FAB951" />
    <Deny ID="ID_DENY_D_316_2" FriendlyName="PowerShellShell 316" Hash="59549FEEB4D64BA3AF50F925FECC8107422D3F54AF6106E5B0152B2F50912980" />
    <Deny ID="ID_DENY_D_317_2" FriendlyName="PowerShellShell 317" Hash="465D848F11CECE4452E831D248D326360B73A319" />
    <Deny ID="ID_DENY_D_318_2" FriendlyName="PowerShellShell 318" Hash="B9C9F208C6E50AABF91D234227D09D7C6CAB2FDB229163103E7C1F541F71C213" />
    <Deny ID="ID_DENY_D_319_2" FriendlyName="PowerShellShell 319" Hash="F0B9D75B53A268C0AC30584738C3A5EC33420A2E" />
    <Deny ID="ID_DENY_D_320_2" FriendlyName="PowerShellShell 320" Hash="365A7812DFC448B1FE9CEA83CF55BC62189C4E72BAD84276BD5F1DAB47CB3EFF" />
    <Deny ID="ID_DENY_D_321_2" FriendlyName="PowerShellShell 321" Hash="8ADCDD18EB178B6A43CF5E11EC73212C90B91988" />
    <Deny ID="ID_DENY_D_322_2" FriendlyName="PowerShellShell 322" Hash="51BD119BE2FBEFEC560F618DBBBB8203A251F455B1DF825F37B1DFFDBE120DF2" />
    <Deny ID="ID_DENY_D_323_2" FriendlyName="PowerShellShell 323" Hash="D2011097B6038D8507B26B7618FF07DA0FF01234" />
    <Deny ID="ID_DENY_D_324_2" FriendlyName="PowerShellShell 324" Hash="BA3D20A577F355612E53428D573767C48A091AE965FCB30CC348619F1CB85A02" />
    <Deny ID="ID_DENY_D_325_2" FriendlyName="PowerShellShell 325" Hash="57ABBC8E2FE88E04C57CDDD13D58C9CE03455D25" />
    <Deny ID="ID_DENY_D_326_2" FriendlyName="PowerShellShell 326" Hash="0280C4714BC806BFC1863BE9E84D38F203942DD35C6AF2EB96958FD011E4D23D" />
    <Deny ID="ID_DENY_D_327_2" FriendlyName="PowerShellShell 327" Hash="DEB07053D6059B56109DFF885720D5721EB0F55C" />
    <Deny ID="ID_DENY_D_328_2" FriendlyName="PowerShellShell 328" Hash="E374A14871C35DB57D6D67281C16F5F9EF77ABE248DE92C1A937C6526133FA36" />
    <Deny ID="ID_DENY_D_329_2" FriendlyName="PowerShellShell 329" Hash="AC33BA432B35A662E2D9D015D6283308FD046251" />
    <Deny ID="ID_DENY_D_330_2" FriendlyName="PowerShellShell 330" Hash="93B22B0D5369327247DF491AABD3CE78421D0D68FE8A3931E0CDDF5F858D3AA7" />
    <Deny ID="ID_DENY_D_331_2" FriendlyName="PowerShellShell 331" Hash="05126413310F4A1BA2F7D2AD3305E2E3B6A1B00D" />
    <Deny ID="ID_DENY_D_332_2" FriendlyName="PowerShellShell 332" Hash="108A73F4AE78786C9955ED71EFD916465A36175F8DC85FD82DDA6410FBFCDB52" />
    <Deny ID="ID_DENY_D_333_2" FriendlyName="PowerShellShell 333" Hash="B976F316FB5EE6E5A325320E7EE5FBF487DA9CE5" />
    <Deny ID="ID_DENY_D_334_2" FriendlyName="PowerShellShell 334" Hash="D54CCD405D3E904CAECA3A6F7BE1737A9ACE20F7593D0F6192B811EF17744DD6" />
    <Deny ID="ID_DENY_D_335_2" FriendlyName="PowerShellShell 335" Hash="F3471DBF534995307AEA230D228BADFDCA9E4021" />
    <Deny ID="ID_DENY_D_336_2" FriendlyName="PowerShellShell 336" Hash="2048F33CCD924D224154307C28DDC6AC1C35A1859F118AB2B6536FB954FC44EF" />
    <Deny ID="ID_DENY_D_337_2" FriendlyName="PowerShellShell 337" Hash="1FAC9087885C2FEBD7F57CC9AACE8AF94294C8FB" />
    <Deny ID="ID_DENY_D_338_2" FriendlyName="PowerShellShell 338" Hash="942E0D0BA5ECBF64A3B2D0EA1E08C793712A4C89BC1BC3B6C32A419AE38FACC1" />
    <Deny ID="ID_DENY_D_339_2" FriendlyName="PowerShellShell 339" Hash="5B67EE19AA7E4B42E58127A63520D44A0679C6CE" />
    <Deny ID="ID_DENY_D_340_2" FriendlyName="PowerShellShell 340" Hash="2B6A59053953737D345B97FA1AFB23C379809D1532BAF31E710E48ED7FA2D735" />
    <Deny ID="ID_DENY_D_341_2" FriendlyName="PowerShellShell 341" Hash="1ABC67650B169E7C437853922805706D488EEEA2" />
    <Deny ID="ID_DENY_D_342_2" FriendlyName="PowerShellShell 342" Hash="754CA97A95464F1A1687C83AE3ECC6670B80A50503067DEBF6135077C886BCF4" />
    <Deny ID="ID_DENY_D_343_2" FriendlyName="PowerShellShell 343" Hash="0E280FF775F406836985ECA66BAA9BA17D12E38B" />
    <Deny ID="ID_DENY_D_344_2" FriendlyName="PowerShellShell 344" Hash="19C9A6D1AE90AEA163E35930FAB1B57D3EC78CA5FE192D6E510CED2DAB5DD03B" />
    <Deny ID="ID_DENY_D_345_2" FriendlyName="PowerShellShell 345" Hash="4E6081C3BBB2809C417E2D03412E29FF7317DA54" />
    <Deny ID="ID_DENY_D_346_2" FriendlyName="PowerShellShell 346" Hash="3AE4505A552EA04C7664C610E81172CA329981BF53ECC6758C03357EB653F5D1" />
    <Deny ID="ID_DENY_D_347_2" FriendlyName="PowerShellShell 347" Hash="61BED1C7CD54B2F60923D26CD2F6E48C063AFED5" />
    <Deny ID="ID_DENY_D_348_2" FriendlyName="PowerShellShell 348" Hash="9405CBE91B7519290F90577DCCF5796C514746DE6390322C1624BA258D284EE9" />
    <Deny ID="ID_DENY_D_349_2" FriendlyName="PowerShellShell 349" Hash="63AA55C3B46EFAFC8625F8D5562AB504E4CBB78F" />
    <Deny ID="ID_DENY_D_350_2" FriendlyName="PowerShellShell 350" Hash="FF54885D30A13008D60F6D0B96CE802209C89A2A7D9D86A85804E66B6DE29A5D" />
    <Deny ID="ID_DENY_D_351_2" FriendlyName="PowerShellShell 351" Hash="20845E4440DA2D9AB3559D4B6890691CACD0E93E" />
    <Deny ID="ID_DENY_D_352_2" FriendlyName="PowerShellShell 352" Hash="3C9098C4BFD818CE8CFA130F6E6C90876B97D57ABBEAFABB565C487F1DD33ECC" />
    <Deny ID="ID_DENY_D_353_2" FriendlyName="PowerShellShell 353" Hash="4A473F14012EB9BF7DCEA80B86C2612A6D9D914E" />
    <Deny ID="ID_DENY_D_354_2" FriendlyName="PowerShellShell 354" Hash="1C6914B58F70A9860F67311C32258CD9072A367BF30203DA9D8C48188D888E65" />
    <Deny ID="ID_DENY_D_355_2" FriendlyName="PowerShellShell 355" Hash="641871FD5D9875DB75BFC58B7B53672D2C645F01" />
    <Deny ID="ID_DENY_D_356_2" FriendlyName="PowerShellShell 356" Hash="C115A974DD2C56574E93A4800247A23B98B9495F6EF41460D1EC139266A2484D" />
    <Deny ID="ID_DENY_D_357_2" FriendlyName="PowerShellShell 357" Hash="A21E254C18D3D53B832AD381FF58B36E6737FFB6" />
    <Deny ID="ID_DENY_D_358_2" FriendlyName="PowerShellShell 358" Hash="D214AF2AD9204118EB670D08D80D4CB9FFD74A978726240360C35AD5A57F8E7D" />
    <Deny ID="ID_DENY_D_359_2" FriendlyName="PowerShellShell 359" Hash="102B072F29122BC3A89B924987A7BF1AC3C598DB" />
    <Deny ID="ID_DENY_D_360_2" FriendlyName="PowerShellShell 360" Hash="DA444773FE7AD8309FA9A0ABCDD63B302E6FC91E750903843FBA2A7F370DB0C0" />
    <Deny ID="ID_DENY_D_361_2" FriendlyName="PowerShellShell 361" Hash="EAD58EBB00001E678B9698A209308CC7406E1BCC" />
    <Deny ID="ID_DENY_D_362_2" FriendlyName="PowerShellShell 362" Hash="34A5F48629F9FDAEBAB9468EF7F1683EFA856AAD32E3C0CC0F92B5641D722EDC" />
    <Deny ID="ID_DENY_D_363_2" FriendlyName="PowerShellShell 363" Hash="727EDB00C15DC5D3C14368D88023FDD5A74C0B06" />
    <Deny ID="ID_DENY_D_364_2" FriendlyName="PowerShellShell 364" Hash="5720BEE5CBE7D724B67E07C53E22FB869F8F9B1EB95C4F71D61D240A1ED8D8AD" />
    <Deny ID="ID_DENY_D_365_2" FriendlyName="PowerShellShell 365" Hash="A43137EC82721A81C3E05DC5DE74F0549DE6A130" />
    <Deny ID="ID_DENY_D_366_2" FriendlyName="PowerShellShell 366" Hash="1731118D97F278C18E2C6922A016DA7C55970C6C4C5441710D1B0464EED6EAEB" />
    <Deny ID="ID_DENY_D_367_2" FriendlyName="PowerShellShell 367" Hash="17EC94CB9BF98E605F9352987CA33DCE8F5733CD" />
    <Deny ID="ID_DENY_D_368_2" FriendlyName="PowerShellShell 368" Hash="AFE0CC143108BBDBE60771B6894406785C471BA5730F06EE8185D0A71617B583" />
    <Deny ID="ID_DENY_D_369_2" FriendlyName="PowerShellShell 369" Hash="F6E9C098737F0905E53B92D4AD49C199EC76D24B" />
    <Deny ID="ID_DENY_D_370_2" FriendlyName="PowerShellShell 370" Hash="50A57BFCD20380DDEFD2A717D7937D49380D4D5931CC6CC403C904139546CB1D" />
    <Deny ID="ID_DENY_D_371_2" FriendlyName="PowerShellShell 371" Hash="2118ACC512464EE95946F064560C15C58341B80C" />
    <Deny ID="ID_DENY_D_372_2" FriendlyName="PowerShellShell 372" Hash="005990EE785C1CA7EAEC82DA29F5B363049DC117A18823D83C10B86B5E8D0A5F" />
    <Deny ID="ID_DENY_D_373_2" FriendlyName="PowerShellShell 373" Hash="54FAE3A389FDD2F5C21293D2317E87766AF0473D" />
    <Deny ID="ID_DENY_D_374_2" FriendlyName="PowerShellShell 374" Hash="70F4E503D7484DF5B5F73D9A753E585BFADB8B8EBA42EB482B6A66DB17C87881" />
    <Deny ID="ID_DENY_D_375_2" FriendlyName="PowerShellShell 375" Hash="B4831AF4B25527EF0C172DAA5E4CA26DE105D30B" />
    <Deny ID="ID_DENY_D_376_2" FriendlyName="PowerShellShell 376" Hash="D410A37042A2DC53AD1801EBB2EF507B4AE475870522A298567B79DA61C3E9C8" />
    <Deny ID="ID_DENY_D_377_2" FriendlyName="PowerShellShell 377" Hash="85BBC0CDC34BD5A56113B0DCB6795BCEBADE63FA" />
    <Deny ID="ID_DENY_D_378_2" FriendlyName="PowerShellShell 378" Hash="C6F8E3A3F2C513CEDD2F21D486BF0116BAF2E2EE4D631A9BE4760860B1161848" />
    <Deny ID="ID_DENY_D_379_2" FriendlyName="PowerShellShell 379" Hash="46105ACE7ABEC3A6E6226183F2F7F8E90E3639A5" />
    <Deny ID="ID_DENY_D_380_2" FriendlyName="PowerShellShell 380" Hash="F60BE088F226CA1E2308099C3B1C2A54DB4C41D2BE678504D03547B9E1E023F6" />
    <Deny ID="ID_DENY_D_381_2" FriendlyName="PowerShellShell 381" Hash="C9478352ACE4BE6D6B70BBE710C2E2128FEFC7FE" />
    <Deny ID="ID_DENY_D_382_2" FriendlyName="PowerShellShell 382" Hash="F4A81E7D4BD3B8762FAED760047877E06E40EC991D968BD6A6929B848804C1A4" />
    <Deny ID="ID_DENY_D_383_2" FriendlyName="PowerShellShell 383" Hash="9E56E910919FF65BCCF5D60A8F9D3EBE27EF1381" />
    <Deny ID="ID_DENY_D_384_2" FriendlyName="PowerShellShell 384" Hash="34887B225444A18158B632CAEA4FEF6E7D691FEA3E36C12D4152AFAB260668EB" />
    <Deny ID="ID_DENY_D_385_2" FriendlyName="PowerShellShell 385" Hash="1FD04D4BD5F9E41FA8278F3F9B05FE8702ADB4C8" />
    <Deny ID="ID_DENY_D_386_2" FriendlyName="PowerShellShell 386" Hash="6586176AEBE8307829A1E03D878EF6F500E8C5032E50198DF66F54D3B56EA718" />
    <Deny ID="ID_DENY_D_387_2" FriendlyName="PowerShellShell 387" Hash="DEBC3DE2AD99FC5E885A358A6994E6BD39DABCB0" />
    <Deny ID="ID_DENY_D_388_2" FriendlyName="PowerShellShell 388" Hash="FDF54A4A3089062FFFA4A41FEBF38F0ABC9D502B57749348DF6E78EA2A33DDEA" />
    <Deny ID="ID_DENY_D_389_2" FriendlyName="PowerShellShell 389" Hash="6AA06D07D9DE8FE7E13B66EDFA07232B56F7E21D" />
    <Deny ID="ID_DENY_D_390_2" FriendlyName="PowerShellShell 390" Hash="DD3E74CFB8ED64FA5BE9136C305584CD2E529D92B360651DD06A6DC629E23449" />
    <Deny ID="ID_DENY_D_391_2" FriendlyName="PowerShellShell 391" Hash="5C858042246FDDDB281C1BFD2FEFC9BAABC3F7AD" />
    <Deny ID="ID_DENY_D_392_2" FriendlyName="PowerShellShell 392" Hash="20E65B1BE06A99507412FC0E75D158EE1D9D43AE5F492BE4A87E3AA29A148310" />
    <Deny ID="ID_DENY_D_393_2" FriendlyName="PowerShellShell 393" Hash="2ABCD0525D31D4BB2D0131364FBE1D94A02A3E2A" />
    <Deny ID="ID_DENY_D_394_2" FriendlyName="PowerShellShell 394" Hash="806EC87F1EFA428627989318C882CD695F55F60A1E865C621C9F2B14E4E1FC2E" />
    <Deny ID="ID_DENY_D_395_2" FriendlyName="PowerShellShell 395" Hash="E2967D755D0F79FA8EA7A8585106926CA87F89CB" />
    <Deny ID="ID_DENY_D_396_2" FriendlyName="PowerShellShell 396" Hash="07382BE9D8ACBAFDA953C842BAAE600A82A69183D6B63F91B061671C4AF9434B" />
    <Deny ID="ID_DENY_D_397_2" FriendlyName="PowerShellShell 397" Hash="75EF6F0B78098FB1766DCC853E004476033499CF" />
    <Deny ID="ID_DENY_D_398_2" FriendlyName="PowerShellShell 398" Hash="699A9D17E1247F05767E82BFAFBD96DBE07AE521E23D39613D4A39C3F8CF4971" />
    <Deny ID="ID_DENY_D_399_2" FriendlyName="PowerShellShell 399" Hash="E73178C487AF6B9F182B2CCA25774127B0303093" />
    <Deny ID="ID_DENY_D_400_2" FriendlyName="PowerShellShell 400" Hash="0BD1FE62BE97032ADDAAB41B445D00103302D3CE8A03A798A36FEAA0F89939FF" />
    <Deny ID="ID_DENY_D_401_2" FriendlyName="PowerShellShell 401" Hash="EBF20FEECA95F83B9F5C22B97EB44DD7EB2C7B5F" />
    <Deny ID="ID_DENY_D_402_2" FriendlyName="PowerShellShell 402" Hash="B5AE0EAA5AF4245AD9B37C8C1FC5220081B92A13950C54D82E824D2D3B840A7C" />
    <Deny ID="ID_DENY_D_403_2" FriendlyName="PowerShellShell 403" Hash="5E53A4235DC549D0195A9DDF607288CEDE7BF115" />
    <Deny ID="ID_DENY_D_404_2" FriendlyName="PowerShellShell 404" Hash="FE57195757977E4485BF5E5D72A24EA65E33F8EAA7245381453960D5646FAF58" />
    <Deny ID="ID_DENY_D_405_2" FriendlyName="PowerShellShell 405" Hash="014BC30E1FC12F270824F01DC7C934497A573124" />
    <Deny ID="ID_DENY_D_406_2" FriendlyName="PowerShellShell 406" Hash="65B3B357C356DAE26E5B036820C193989C0F9E8E08131B3186F9443FF9A511E4" />
    <Deny ID="ID_DENY_D_411_2" FriendlyName="PowerShellShell 411" Hash="8287B536E8E63F024DE1248D0FE3E6A759E9ACEE" />
    <Deny ID="ID_DENY_D_412_2" FriendlyName="PowerShellShell 412" Hash="B714D4A700A56BC1D4B3F59DFC1F5835CB97CBEF3927523BF71AF96B00F0FFA4" />
    <Deny ID="ID_DENY_D_427_2" FriendlyName="PowerShellShell 427" Hash="EA157E01147629D1F59503D8335FB6EBC688B2C1" />
    <Deny ID="ID_DENY_D_428_2" FriendlyName="PowerShellShell 428" Hash="14C160DF95736EC1D7C6C55B9D0F81832E8FE0DB6C5931B23E45A559995A1000" />
    <Deny ID="ID_DENY_D_435_2" FriendlyName="PowerShellShell 435" Hash="6792915D3C837A39BD04AD169488009BB1EA372C" />
    <Deny ID="ID_DENY_D_436_2" FriendlyName="PowerShellShell 436" Hash="23B10EC5FC7EAEB9F8D147163463299328FAED4B973BB862ECD3F28D6794DA9D" />
    <Deny ID="ID_DENY_D_441_2" FriendlyName="PowerShellShell 441" Hash="24F9CF6C5E9671A295AD0DEED74737FB6E9146DE" />
    <Deny ID="ID_DENY_D_442_2" FriendlyName="PowerShellShell 442" Hash="C2E862CC578F54A53496EEE2DCB534A106AFD55C7288362AF6499B45F8D8755E" />
    <Deny ID="ID_DENY_D_457_2" FriendlyName="PowerShellShell 457" Hash="D5A9460A941FB5B49EAFDD57575CFB23F27779D3" />
    <Deny ID="ID_DENY_D_458_2" FriendlyName="PowerShellShell 458" Hash="4BDAAC1654328E4D37B6ED89DA351155438E558F51458F2129AFFAC5B596CD61" />
    <Deny ID="ID_DENY_D_463_2" FriendlyName="PowerShellShell 463" Hash="C647D17850941CFB5B9C8AF49A48569B52230274" />
    <Deny ID="ID_DENY_D_464_2" FriendlyName="PowerShellShell 464" Hash="0BCBDE8791E3D6D7A7C8FC6F25E14383014E6B43D9720A04AF0BD4BDC37F79E0" />
    <Deny ID="ID_DENY_D_465_2" FriendlyName="PowerShellShell 465" Hash="CA6E0BAB6B28E1592D0FC5940023C7A81E2568F8" />
    <Deny ID="ID_DENY_D_466_2" FriendlyName="PowerShellShell 466" Hash="366E00E2F517D4D404133AEFEF6F917DFA156E3E46D350A8CBBE59BE1FB877A2" />
    <Deny ID="ID_DENY_D_467_2" FriendlyName="PowerShellShell 467" Hash="7D9FFFA86DDCD227A3B4863D995456308BAC2403" />
    <Deny ID="ID_DENY_D_468_2" FriendlyName="PowerShellShell 468" Hash="4439BBF61DC012AFC8190199AF5722C3AE26F365DEE618D0D945D75FD1AABF3C" />
    <Deny ID="ID_DENY_D_469_2" FriendlyName="PowerShellShell 469" Hash="8FFDD4576F2B6D4999326CFAF67727BFB471FA21" />
    <Deny ID="ID_DENY_D_470_2" FriendlyName="PowerShellShell 470" Hash="94630AB6F60A7193A6E27E312AF9B71DA265D42AD49465F4EEA11EBF134BA54A" />
    <Deny ID="ID_DENY_D_471_2" FriendlyName="PowerShellShell 471" Hash="78B8454F78E216B629E43B4E40765F73BFE0D6C6" />
    <Deny ID="ID_DENY_D_472_2" FriendlyName="PowerShellShell 472" Hash="498BB1688410EE243D61FB5C7B37457FA6C0A9A32D136AF70FAD43D5F37D7A81" />
    <Deny ID="ID_DENY_D_475_2" FriendlyName="PowerShellShell 475" Hash="8AF579DE1D7E590A13BD1DAE5BFDB39476068A05" />
    <Deny ID="ID_DENY_D_476_2" FriendlyName="PowerShellShell 476" Hash="9917A3055D194F47AB295FA3F917E4BD2F08DDF45C04C65C591A020E1507A573" />
    <Deny ID="ID_DENY_D_477_2" FriendlyName="PowerShellShell 477" Hash="DD64046BAB221CF4110FF230FA5060310A4D9610" />
    <Deny ID="ID_DENY_D_478_2" FriendlyName="PowerShellShell 478" Hash="A55AF37229D7E249C8CAFED3432E595AA77FAF8B62990C07938220E957679081" />
    <Deny ID="ID_DENY_D_483_2" FriendlyName="PowerShellShell 483" Hash="2F587293F16DFCD06F3BF8B8348FF68827ECD307" />
    <Deny ID="ID_DENY_D_484_2" FriendlyName="PowerShellShell 484" Hash="B2F4A5FE21D5961F464CAB3E88C0ED88154B0C1A422629474AD5C9EDC11880B6" />
    <Deny ID="ID_DENY_D_493_2" FriendlyName="PowerShellShell 493" Hash="E180486F0CC90AF4FB8283ADCF571884894513C8" />
    <Deny ID="ID_DENY_D_494_2" FriendlyName="PowerShellShell 494" Hash="3800E38275E6BB3B4645CDAD14CD756239BB9A87EF261DC1B68072B6DB2850C0" />
    <Deny ID="ID_DENY_D_503_2" FriendlyName="PowerShellShell 503" Hash="231A02EAB7EB192638BC89AB61A5077346FF22B9" />
    <Deny ID="ID_DENY_D_504_2" FriendlyName="PowerShellShell 504" Hash="4D544170DE5D9916678EA43A7C6F796FC02EFA9197C6E0C01A1D832BF554F748" />
    <Deny ID="ID_DENY_D_507_2" FriendlyName="PowerShellShell 507" Hash="15EF1F7DBC474732E122A0147640ACBD9DA1775C" />
    <Deny ID="ID_DENY_D_508_2" FriendlyName="PowerShellShell 508" Hash="04724BF232D5F169FBB0DB6821E35D772619FB4F24069BE0EC571BA622ACC4D2" />
    <Deny ID="ID_DENY_D_509_2" FriendlyName="PowerShellShell 509" Hash="7959AB2B34A5F490AD54782D135BF155592DF13F" />
    <Deny ID="ID_DENY_D_510_2" FriendlyName="PowerShellShell 510" Hash="DD03CD6B5655B4EB9DD259F26E1585389804C23DB39C10122B6BC0E8886B4C2A" />
    <Deny ID="ID_DENY_D_511_2" FriendlyName="PowerShellShell 511" Hash="CCA8C8FB699496BD50AE296B20CC9ADC3496DECE" />
    <Deny ID="ID_DENY_D_512_2" FriendlyName="PowerShellShell 512" Hash="75E6C2DD81FE2664DF466C9C2EB0F923B0C6D992FF653B673793A896D8860957" />
    <Deny ID="ID_DENY_D_515_2" FriendlyName="PowerShellShell 515" Hash="B3B7A653DD1A10EE9A3D35C818D227E2E3C3B5FB" />
    <Deny ID="ID_DENY_D_516_2" FriendlyName="PowerShellShell 516" Hash="43E2D91C0C6A8473BE178F1793E5E34966D700F71362297ECF4B5D46239603E3" />
    <Deny ID="ID_DENY_D_519_2" FriendlyName="PowerShellShell 519" Hash="AAE22FD137E8B7217222974DCE60B9AD4AF2A512" />
    <Deny ID="ID_DENY_D_520_2" FriendlyName="PowerShellShell 520" Hash="DAC9E963A3897D7F7AB2B4FEBBD4894A15441246639CE3E8EE74B0228F312742" />
    <Deny ID="ID_DENY_D_527_2" FriendlyName="PowerShellShell 527" Hash="25CA971D7EDFAA7A48FA19B8399301853809D7CC" />
    <Deny ID="ID_DENY_D_528_2" FriendlyName="PowerShellShell 528" Hash="0A10C71CB5CC8A801F84F2CCD8041D13DB55711435388D9500C53D122688D4E5" />
    <Deny ID="ID_DENY_D_529_2" FriendlyName="PowerShellShell 529" Hash="46E05FD4D62451C1DCB0287B32B3D77AD41544EA" />
    <Deny ID="ID_DENY_D_530_2" FriendlyName="PowerShellShell 530" Hash="D86F930445F0715D0D7E4C3B089399280FBA2ACE0E4125BA5D3DAB9FAC1A6D3A" />
    <Deny ID="ID_DENY_D_537_2" FriendlyName="PowerShellShell 537" Hash="46936F4F0AFE4C87D2E55595F74DDDFFC9AD94EE" />
    <Deny ID="ID_DENY_D_538_2" FriendlyName="PowerShellShell 538" Hash="9843DC862BC7491A279A09EFD8FF122EB23C57CA" />
    <Deny ID="ID_DENY_D_539_2" FriendlyName="PowerShellShell 539" Hash="11F11FB1E57F299383A615D6A28436E02A1C1A83" />
    <Deny ID="ID_DENY_D_540_2" FriendlyName="PowerShellShell 540" Hash="C593ABE79DFFB1504CFCDB1A6AD65D24996E7B97" />
    <Deny ID="ID_DENY_D_541_2" FriendlyName="PowerShellShell 541" Hash="93E22F2BA6C8B1C09F100F9C0E3B06FAF2D1DDB6" />
    <Deny ID="ID_DENY_D_542_2" FriendlyName="PowerShellShell 542" Hash="5A8D9712CF7893C335FFB7414748625D524227FE" />
    <Deny ID="ID_DENY_D_543_2" FriendlyName="PowerShellShell 543" Hash="B5FFFEE20F25691A59F3894644AEF088B4845761" />
    <Deny ID="ID_DENY_D_544_2" FriendlyName="PowerShellShell 544" Hash="3334059FF4484C43A5D08CEC3E43E2D27EDB927B" />
    <Deny ID="ID_DENY_D_545_2" FriendlyName="PowerShellShell 545" Hash="00B6993F59990C3DFEA33584BDB050F91313B17A" />
    <Deny ID="ID_DENY_D_546_2" FriendlyName="PowerShellShell 546" Hash="7518F60A0B33011D19873908559961F96A9B4FC0" />
    <Deny ID="ID_DENY_D_547_2" FriendlyName="PowerShellShell 547" Hash="A1D1AF7675C2596D0DF977F57B54372298A56EE0F3E1FF2D974D387D7F69DD4E" />
    <Deny ID="ID_DENY_D_548_2" FriendlyName="PowerShellShell 548" Hash="3C1743CBC43B80F5AF5B17239B03A8727B4BE81F14052BDE37685E2D54214071" />
    <Deny ID="ID_DENY_D_549_2" FriendlyName="PowerShellShell 549" Hash="C7DC8B00F0BDA000D1F3CF0FBC7AB32D443C377C0130BB5153A0390E712DDDE5" />
    <Deny ID="ID_DENY_D_550_2" FriendlyName="PowerShellShell 550" Hash="ED5A4747C8AEEB1AC2F4FDB8EB0B9BFC240F2B3C00BF7C6CDB372BFFEC0F8ABE" />
    <Deny ID="ID_DENY_D_551_2" FriendlyName="PowerShellShell 551" Hash="939C291D4A2592209EC7664EC832670FA0AC1009F974F47489D866751F4B862F" />
    <Deny ID="ID_DENY_D_552_2" FriendlyName="PowerShellShell 552" Hash="497A2D4207B2AE6EF09424591624A86A64A2C8E451389ED9A3256E6274556A7B" />
    <Deny ID="ID_DENY_D_553_2" FriendlyName="PowerShellShell 553" Hash="732BC385B191C8436B42CD1441DC234FFDD5EC1BD18A32894F093EECA3DD8FBC" />
    <Deny ID="ID_DENY_D_554_2" FriendlyName="PowerShellShell 554" Hash="CBD19FDB6338DB02299A3F3FFBBEBF216B18013B3377D1D31E51491C0C5F074C" />
    <Deny ID="ID_DENY_D_555_2" FriendlyName="PowerShellShell 555" Hash="3A316A0A470744EB7D18339B76E786564D1E96130766A9895B2222C4066CE820" />
    <Deny ID="ID_DENY_D_556_2" FriendlyName="PowerShellShell 556" Hash="68A4A1E8F4E1B903408ECD24608659B390B9E7154EB380D94ADE7FEB5EA470E7" />
    <Deny ID="ID_DENY_D_557_2" FriendlyName="PowerShellShell 557" Hash="45F948AF27F4E698A8546027717901B5F70368EE" />
    <Deny ID="ID_DENY_D_558_2" FriendlyName="PowerShellShell 558" Hash="2D63C337961C6CF2660C5DB906D9070CA38BCE828584874680EC4F5097B82E30" />
    <Deny ID="ID_DENY_D_559_2" FriendlyName="PowerShellShell 559" Hash="DA4CD4B0158B774CE55721718F77ED91E3A42EB3" />
    <Deny ID="ID_DENY_D_560_2" FriendlyName="PowerShellShell 560" Hash="7D181BB7A4A0755FF687CCE34949FC6BD6FBC377E6D4883698E8B45DCCBEA140" />
    <Deny ID="ID_DENY_D_561_2" FriendlyName="PowerShellShell 561" Hash="C67D7B12BBFFD5FBD15FBD892955EA48E6F4B408" />
    <Deny ID="ID_DENY_D_562_2" FriendlyName="PowerShellShell 562" Hash="1DCAD0BBCC036B85875CC0BAF1B65027933624C1A29BE336C79BCDB00FD5467A" />
    <Deny ID="ID_DENY_D_563_2" FriendlyName="PowerShellShell 563" Hash="7D8CAB8D9663926E29CB810B42C5152E8A1E947E" />
    <Deny ID="ID_DENY_D_564_2" FriendlyName="PowerShellShell 564" Hash="2E0203370E6E5437CE2CE1C20895919F806B4E5FEBCBE31F16CB06FC5934F010" />
    <Deny ID="ID_DENY_D_565_2" FriendlyName="PowerShellShell 565" Hash="20E7156E348912C20D35BD4BE2D52C996BF5535E" />
    <Deny ID="ID_DENY_D_566_2" FriendlyName="PowerShellShell 566" Hash="EB26078544BDAA34733AA660A1A2ADE98523DAFD9D58B3995919C0E524F2FFC3" />
    <Deny ID="ID_DENY_D_567_2" FriendlyName="PowerShellShell 567" Hash="B9DD16FC0D02EA34613B086307C9DBEAC30546AF" />
    <Deny ID="ID_DENY_D_568_2" FriendlyName="PowerShellShell 568" Hash="DE5B012C4DC3FE3DD432AF9339C36EFB8D54E8864493EA2BA151F0ADBF3E338C" />
    <Deny ID="ID_DENY_D_569_2" FriendlyName="PowerShellShell 569" Hash="6397AB5D664CDB84A867BC7E22ED0789060C6276" />
    <Deny ID="ID_DENY_D_570_2" FriendlyName="PowerShellShell 570" Hash="B660F6CA0788DA18375602537095C378990E8229B11B57B092AC8A550E9C61E8" />
    <Deny ID="ID_DENY_D_571_2" FriendlyName="PowerShellShell 571" Hash="3BF717645AC3986AAD0B4EA9D196B18D05199DA9" />
    <Deny ID="ID_DENY_D_572_2" FriendlyName="PowerShellShell 572" Hash="364C227F9E57C72F9BFA652B8C1DE738AB4747D0DB68A7B899CA3EE51D802439" />
    <Deny ID="ID_DENY_D_573_2" FriendlyName="PowerShellShell 573" Hash="3A1B06680F119C03C60D12BAC682853ABE430D21" />
    <Deny ID="ID_DENY_D_574_2" FriendlyName="PowerShellShell 574" Hash="850759BCE4B66997CF84E84683A2C1980D4B498821A8AB9C3568EB298B824AE3" />
    <Deny ID="ID_DENY_D_575_2" FriendlyName="PowerShellShell 575" Hash="654C54AA3F2C74FBEB55B961FB1924A7B2737E61" />
    <Deny ID="ID_DENY_D_576_2" FriendlyName="PowerShellShell 576" Hash="B7EA81960C6EECFD2FF385890F158F5B1CB3D1E100C7157AB161B3D23DCA0389" />
    <Deny ID="ID_DENY_D_577_2" FriendlyName="PowerShellShell 577" Hash="496F793112B6BCF4B6EA16E8B2F8C3F5C1FEEB52" />
    <Deny ID="ID_DENY_D_578_2" FriendlyName="PowerShellShell 578" Hash="E430485B577774825CEF53E5125B618A2608F7BE3657BB28383E9A34FCA162FA" />
    <Deny ID="ID_DENY_D_579_2" FriendlyName="PowerShellShell 579" Hash="6EA8CEEA0D2879989854E8C86CECA26EF79F7B19" />
    <Deny ID="ID_DENY_D_580_2" FriendlyName="PowerShellShell 580" Hash="8838FE3D8E2505F3D3D8B98C64739115838A0B443BBBBFB487342F1EE7801360" />
    <Deny ID="ID_DENY_D_581_2" FriendlyName="PowerShellShell 581" Hash="28C5E53DE197E872F7E4772BF40F728F56FE3ACC" />
    <Deny ID="ID_DENY_D_582_2" FriendlyName="PowerShellShell 582" Hash="3493DAEC6EC03E56ECC4A15432C750735F75F9CB38D8779C7783B4DA956BF037" />
    <Deny ID="ID_DENY_D_583_2" FriendlyName="Winrm 583" Hash="3FA2D2963CBF47FFD5F7F5A9B4576F34ED42E552" />
    <Deny ID="ID_DENY_D_584_2" FriendlyName="Winrm 584" Hash="6C96E976DC47E0C99B77814E560E0DC63161C463C75FA15B7A7CA83C11720E82" />
    <Deny ID="ID_DENY_D_585_2" FriendlyName="PowerShellShell 585" Hash="DBB5A6F5388C574A3B5B63E65F7810AB271E9A77" />
    <Deny ID="ID_DENY_D_586_2" FriendlyName="PowerShellShell 586" Hash="6DB24D174CCF06C9138B5A9320AE4261CA0CF305357DEF1B7054DD84758E92AB" />
    <Deny ID="ID_DENY_D_587_2" FriendlyName="PowerShellShell 587" Hash="757626CF5D444F5A4AF79EDE38E9EF65FA2C9802" />
    <Deny ID="ID_DENY_D_588_2" FriendlyName="PowerShellShell 588" Hash="1E17D036EBB5E82BF2FD5BDC3ABAB08B5EA9E4504D989D2BAAAA0B6047988996" />
    <Deny ID="ID_DENY_D_589_2" FriendlyName="PowerShellShell 589" Hash="2965DC840B8F5F7ED2AEC979F21EADA664E3CB70" />
    <Deny ID="ID_DENY_D_590_2" FriendlyName="PowerShellShell 590" Hash="5449560095D020687C268BD34D9425E7A2739E1B9BFBC0886142519293E02B9D" />
    <Deny ID="ID_DENY_D_591_2" FriendlyName="PowerShellShell 591" Hash="BB47C1251866F87723A7EDEC9A01D3B955BAB846" />
    <Deny ID="ID_DENY_D_592_2" FriendlyName="PowerShellShell 592" Hash="B05F3BE23DE6AE2557D6661C6FE35E114E8A69B326A3C855023B7AC5CE9FC31B" />
    <Deny ID="ID_DENY_D_593_2" FriendlyName="PowerShellShell 593" Hash="2F3D30827E02D5FEF051E54C74ECA6AD4CC4BAD2" />
    <Deny ID="ID_DENY_D_594_2" FriendlyName="PowerShellShell 594" Hash="F074589A1FAA76A751B05AD61B968683134F3FFC10DE3077FBCEE4E263EAEB0D" />
    <Deny ID="ID_DENY_D_595_2" FriendlyName="PowerShellShell 595" Hash="10096BD0A359142A13F2B8023A341C79A4A97975" />
    <Deny ID="ID_DENY_D_596_2" FriendlyName="PowerShellShell 596" Hash="A271D72CDE48F69EB694B753BF9417CD6A72F7DA06C52E47BAB40EC2BD9DD819" />
    <Deny ID="ID_DENY_D_597_2" FriendlyName="PowerShellShell 597" Hash="F8E803E1623BA66EA2EE0751A648834130B8BE5D" />
    <Deny ID="ID_DENY_D_598_2" FriendlyName="PowerShellShell 598" Hash="E70DB033B773FE01B1D4464CAC112AF41C09E75D25FEA25AE8DAE67ED941E797" />
    <Deny ID="ID_DENY_D_599_2" FriendlyName="PowerShellShell 599" Hash="665BE52329F9CECEC1CD548A1B4924C9B1F79BD8" />
    <Deny ID="ID_DENY_D_600_2" FriendlyName="PowerShellShell 600" Hash="24CC5B946D9469A39CF892DD4E92117E0E144DC7C6FAA65E71643DEAB87B2A91" />
    <Deny ID="ID_DENY_D_601_2" FriendlyName="PowerShellShell 601" Hash="C4627F2CF69A8575D7BF7065ADF5354D96707DFD" />
    <Deny ID="ID_DENY_D_602_2" FriendlyName="PowerShellShell 602" Hash="7F1DF759C050E0EF4F9F96FF43904B418C674D4830FE61818B60CC68629F5ABA" />
    <Deny ID="ID_DENY_D_603_2" FriendlyName="PowerShellShell 603" Hash="4126DD5947E63DB50AD5C135AC39856B6ED4BF33" />
    <Deny ID="ID_DENY_D_604_2" FriendlyName="PowerShellShell 604" Hash="B38E1198F82E7C2B3123984C017417F2A48BDFF5B6DBAD20B2438D7B65F6E39F" />
    <Deny ID="ID_DENY_D_605_2" FriendlyName="PowerShellShell 605" Hash="DE16A6B93178B6C6FC33FBF3E9A86CFF070DA6D3" />
    <Deny ID="ID_DENY_D_606_2" FriendlyName="PowerShellShell 606" Hash="A3EF9A95D1E859958DEBE44C033B4562EBB9B4C6E32005CA5C07B2E07A42E2BE" />
  </FileRules>
  <!--Signers-->
  <Signers>
    <Signer ID="ID_SIGNER_MICROSOFT_PRODUCT_1997_0" Name="MincryptKnownRootMicrosoftProductRoot1997">
      <CertRoot Type="Wellknown" Value="04" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_PRODUCT_2001_0" Name="MincryptKnownRootMicrosoftProductRoot2001">
      <CertRoot Type="Wellknown" Value="05" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_PRODUCT_2010_0" Name="MincryptKnownRootMicrosoftProductRoot2010">
      <CertRoot Type="Wellknown" Value="06" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_STANDARD_2011_0" Name="MincryptKnownRootMicrosoftStandardRoot2011">
      <CertRoot Type="Wellknown" Value="07" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_CODEVERIFICATION_2006_0" Name="MincryptKnownRootMicrosoftCodeVerificationRoot2006">
      <CertRoot Type="Wellknown" Value="08" />
    </Signer>
    <Signer ID="ID_SIGNER_DRM_0" Name="MincryptKnownRootMicrosoftDMDRoot2005">
      <CertRoot Type="Wellknown" Value="0C" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_FLIGHT_2014_0" Name="MincryptKnownRootMicrosoftFlightRoot2014">
      <CertRoot Type="Wellknown" Value="0E" />
    </Signer>
    <Signer ID="ID_SIGNER_TEST2010_0" Name="MincryptKnownRootMicrosoftTestRoot2010">
      <CertRoot Type="Wellknown" Value="0A" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_PRODUCT_1997_UMCI_0" Name="MincryptKnownRootMicrosoftProductRoot1997">
      <CertRoot Type="Wellknown" Value="04" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_PRODUCT_2001_UMCI_0" Name="MincryptKnownRootMicrosoftProductRoot2001">
      <CertRoot Type="Wellknown" Value="05" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_PRODUCT_2010_UMCI_0" Name="MincryptKnownRootMicrosoftProductRoot2010">
      <CertRoot Type="Wellknown" Value="06" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_STANDARD_2011_UMCI_0" Name="MincryptKnownRootMicrosoftStandardRoot2011">
      <CertRoot Type="Wellknown" Value="07" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_CODEVERIFICATION_2006_UMCI_0" Name="MincryptKnownRootMicrosoftCodeVerificationRoot2006">
      <CertRoot Type="Wellknown" Value="08" />
    </Signer>
    <Signer ID="ID_SIGNER_DRM_UMCI_0" Name="MincryptKnownRootMicrosoftDMDRoot2005">
      <CertRoot Type="Wellknown" Value="0C" />
    </Signer>
    <Signer ID="ID_SIGNER_MICROSOFT_FLIGHT_2014_UMCI_0" Name="MincryptKnownRootMicrosoftFlightRoot2014">
      <CertRoot Type="Wellknown" Value="0E" />
    </Signer>
    <Signer ID="ID_SIGNER_STORE_0" Name="Microsoft MarketPlace PCA 2011">
      <CertRoot Type="TBS" Value="FC9EDE3DCCA09186B2D3BF9B738A2050CB1A554DA2DCADB55F3F72EE17721378" />
      <CertEKU ID="ID_EKU_STORE" />
    </Signer>
    <Signer ID="ID_SIGNER_TEST2010_UMCI_0" Name="MincryptKnownRootMicrosoftTestRoot2010">
      <CertRoot Type="Wellknown" Value="0A" />
    </Signer>
  </Signers>
  <!--Driver Signing Scenarios-->
  <SigningScenarios>
    <SigningScenario Value="131" ID="ID_SIGNINGSCENARIO_DRIVERS_1" FriendlyName="Auto generated policy on 04-01-2021">
      <ProductSigners>
        <AllowedSigners>
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_PRODUCT_1997_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_PRODUCT_2001_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_PRODUCT_2010_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_STANDARD_2011_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_CODEVERIFICATION_2006_0" />
          <AllowedSigner SignerId="ID_SIGNER_DRM_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_FLIGHT_2014_0" />
          <AllowedSigner SignerId="ID_SIGNER_TEST2010_0" />
        </AllowedSigners>
        <FileRulesRef>
          <FileRuleRef RuleID="ID_DENY_KD_KMCI_2" />
        </FileRulesRef>
      </ProductSigners>
    </SigningScenario>
    <SigningScenario Value="12" ID="ID_SIGNINGSCENARIO_WINDOWS" FriendlyName="Auto generated policy on 04-01-2021">
      <ProductSigners>
        <AllowedSigners>
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_PRODUCT_1997_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_PRODUCT_2001_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_PRODUCT_2010_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_STANDARD_2011_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_CODEVERIFICATION_2006_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_DRM_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_MICROSOFT_FLIGHT_2014_UMCI_0" />
          <AllowedSigner SignerId="ID_SIGNER_STORE_0" />
          <AllowedSigner SignerId="ID_SIGNER_TEST2010_UMCI_0" />
        </AllowedSigners>
        <FileRulesRef>
          <FileRuleRef RuleID="ID_DENY_ADDINPROCESS_2" />
          <FileRuleRef RuleID="ID_DENY_ADDINPROCESS32_2" />
          <FileRuleRef RuleID="ID_DENY_ADDINUTIL_2" />
          <FileRuleRef RuleID="ID_DENY_ASPNET_2" />
          <FileRuleRef RuleID="ID_DENY_BASH_2" />
          <FileRuleRef RuleID="ID_DENY_BGINFO_2" />
          <FileRuleRef RuleID="ID_DENY_CBD_2" />
          <FileRuleRef RuleID="ID_DENY_CSI_2" />
          <FileRuleRef RuleID="ID_DENY_DBGHOST_2" />
          <FileRuleRef RuleID="ID_DENY_DBGSVC_2" />
          <FileRuleRef RuleID="ID_DENY_DNX_2" />
          <FileRuleRef RuleID="ID_DENY_DOTNET_2" />
          <FileRuleRef RuleID="ID_DENY_FSI_2" />
          <FileRuleRef RuleID="ID_DENY_FSI_ANYCPU_2" />
          <FileRuleRef RuleID="ID_DENY_INFINSTALL_2" />
          <FileRuleRef RuleID="ID_DENY_KD_2" />
          <FileRuleRef RuleID="ID_DENY_KILL_2" />
          <FileRuleRef RuleID="ID_DENY_LXSS_2" />
          <FileRuleRef RuleID="ID_DENY_LXRUN_2" />
          <FileRuleRef RuleID="ID_DENY_MFC40_2" />
          <FileRuleRef RuleID="ID_DENY_MS_BUILD_2" />
          <FileRuleRef RuleID="ID_DENY_MS_BUILD_FMWK_2" />
          <FileRuleRef RuleID="ID_DENY_MWFC_2" />
          <FileRuleRef RuleID="ID_DENY_MSBUILD_2" />
          <FileRuleRef RuleID="ID_DENY_MSBUILD_DLL_2" />
          <FileRuleRef RuleID="ID_DENY_MSHTA_2" />
          <FileRuleRef RuleID="ID_DENY_NTKD_2" />
          <FileRuleRef RuleID="ID_DENY_NTSD_2" />
          <FileRuleRef RuleID="ID_DENY_PWRSHLCUSTOMHOST_2" />
          <FileRuleRef RuleID="ID_DENY_RCSI_2" />
          <FileRuleRef RuleID="ID_DENY_RUNSCRIPTHELPER_2" />
          <FileRuleRef RuleID="ID_DENY_TEXTTRANSFORM_2" />
          <FileRuleRef RuleID="ID_DENY_VISUALUIAVERIFY_2" />
          <FileRuleRef RuleID="ID_DENY_WFC_2" />
          <FileRuleRef RuleID="ID_DENY_WINDBG_2" />
          <FileRuleRef RuleID="ID_DENY_WMIC_2" />
          <FileRuleRef RuleID="ID_DENY_WSL_2" />
          <FileRuleRef RuleID="ID_DENY_WSLCONFIG_2" />
          <FileRuleRef RuleID="ID_DENY_WSLHOST_2" />
          <FileRuleRef RuleID="ID_DENY_D_1_2" />
          <FileRuleRef RuleID="ID_DENY_D_2_2" />
          <FileRuleRef RuleID="ID_DENY_D_3_2" />
          <FileRuleRef RuleID="ID_DENY_D_4_2" />
          <FileRuleRef RuleID="ID_DENY_D_5_2" />
          <FileRuleRef RuleID="ID_DENY_D_6_2" />
          <FileRuleRef RuleID="ID_DENY_D_7_2" />
          <FileRuleRef RuleID="ID_DENY_D_8_2" />
          <FileRuleRef RuleID="ID_DENY_D_9_2" />
          <FileRuleRef RuleID="ID_DENY_D_10_2" />
          <FileRuleRef RuleID="ID_DENY_D_11_2" />
          <FileRuleRef RuleID="ID_DENY_D_12_2" />
          <FileRuleRef RuleID="ID_DENY_D_13_2" />
          <FileRuleRef RuleID="ID_DENY_D_14_2" />
          <FileRuleRef RuleID="ID_DENY_D_15_2" />
          <FileRuleRef RuleID="ID_DENY_D_16_2" />
          <FileRuleRef RuleID="ID_DENY_D_17_2" />
          <FileRuleRef RuleID="ID_DENY_D_18_2" />
          <FileRuleRef RuleID="ID_DENY_D_19_2" />
          <FileRuleRef RuleID="ID_DENY_D_20_2" />
          <FileRuleRef RuleID="ID_DENY_D_21_2" />
          <FileRuleRef RuleID="ID_DENY_D_22_2" />
          <FileRuleRef RuleID="ID_DENY_D_23_2" />
          <FileRuleRef RuleID="ID_DENY_D_24_2" />
          <FileRuleRef RuleID="ID_DENY_D_25_2" />
          <FileRuleRef RuleID="ID_DENY_D_26_2" />
          <FileRuleRef RuleID="ID_DENY_D_27_2" />
          <FileRuleRef RuleID="ID_DENY_D_28_2" />
          <FileRuleRef RuleID="ID_DENY_D_29_2" />
          <FileRuleRef RuleID="ID_DENY_D_30_2" />
          <FileRuleRef RuleID="ID_DENY_D_31_2" />
          <FileRuleRef RuleID="ID_DENY_D_32_2" />
          <FileRuleRef RuleID="ID_DENY_D_33_2" />
          <FileRuleRef RuleID="ID_DENY_D_34_2" />
          <FileRuleRef RuleID="ID_DENY_D_35_2" />
          <FileRuleRef RuleID="ID_DENY_D_36_2" />
          <FileRuleRef RuleID="ID_DENY_D_37_2" />
          <FileRuleRef RuleID="ID_DENY_D_38_2" />
          <FileRuleRef RuleID="ID_DENY_D_39_2" />
          <FileRuleRef RuleID="ID_DENY_D_40_2" />
          <FileRuleRef RuleID="ID_DENY_D_41_2" />
          <FileRuleRef RuleID="ID_DENY_D_42_2" />
          <FileRuleRef RuleID="ID_DENY_D_43_2" />
          <FileRuleRef RuleID="ID_DENY_D_44_2" />
          <FileRuleRef RuleID="ID_DENY_D_45_2" />
          <FileRuleRef RuleID="ID_DENY_D_46_2" />
          <FileRuleRef RuleID="ID_DENY_D_47_2" />
          <FileRuleRef RuleID="ID_DENY_D_48_2" />
          <FileRuleRef RuleID="ID_DENY_D_49_2" />
          <FileRuleRef RuleID="ID_DENY_D_50_2" />
          <FileRuleRef RuleID="ID_DENY_D_51_2" />
          <FileRuleRef RuleID="ID_DENY_D_52_2" />
          <FileRuleRef RuleID="ID_DENY_D_53_2" />
          <FileRuleRef RuleID="ID_DENY_D_54_2" />
          <FileRuleRef RuleID="ID_DENY_D_55_2" />
          <FileRuleRef RuleID="ID_DENY_D_56_2" />
          <FileRuleRef RuleID="ID_DENY_D_57_2" />
          <FileRuleRef RuleID="ID_DENY_D_58_2" />
          <FileRuleRef RuleID="ID_DENY_D_59_2" />
          <FileRuleRef RuleID="ID_DENY_D_60_2" />
          <FileRuleRef RuleID="ID_DENY_D_61_2" />
          <FileRuleRef RuleID="ID_DENY_D_62_2" />
          <FileRuleRef RuleID="ID_DENY_D_63_2" />
          <FileRuleRef RuleID="ID_DENY_D_64_2" />
          <FileRuleRef RuleID="ID_DENY_D_65_2" />
          <FileRuleRef RuleID="ID_DENY_D_66_2" />
          <FileRuleRef RuleID="ID_DENY_D_67_2" />
          <FileRuleRef RuleID="ID_DENY_D_68_2" />
          <FileRuleRef RuleID="ID_DENY_D_69_2" />
          <FileRuleRef RuleID="ID_DENY_D_70_2" />
          <FileRuleRef RuleID="ID_DENY_D_71_2" />
          <FileRuleRef RuleID="ID_DENY_D_72_2" />
          <FileRuleRef RuleID="ID_DENY_D_73_2" />
          <FileRuleRef RuleID="ID_DENY_D_74_2" />
          <FileRuleRef RuleID="ID_DENY_D_75_2" />
          <FileRuleRef RuleID="ID_DENY_D_76_2" />
          <FileRuleRef RuleID="ID_DENY_D_77_2" />
          <FileRuleRef RuleID="ID_DENY_D_78_2" />
          <FileRuleRef RuleID="ID_DENY_D_79_2" />
          <FileRuleRef RuleID="ID_DENY_D_80_2" />
          <FileRuleRef RuleID="ID_DENY_D_81_2" />
          <FileRuleRef RuleID="ID_DENY_D_82_2" />
          <FileRuleRef RuleID="ID_DENY_D_83_2" />
          <FileRuleRef RuleID="ID_DENY_D_84_2" />
          <FileRuleRef RuleID="ID_DENY_D_85_2" />
          <FileRuleRef RuleID="ID_DENY_D_86_2" />
          <FileRuleRef RuleID="ID_DENY_D_87_2" />
          <FileRuleRef RuleID="ID_DENY_D_88_2" />
          <FileRuleRef RuleID="ID_DENY_D_89_2" />
          <FileRuleRef RuleID="ID_DENY_D_90_2" />
          <FileRuleRef RuleID="ID_DENY_D_91_2" />
          <FileRuleRef RuleID="ID_DENY_D_92_2" />
          <FileRuleRef RuleID="ID_DENY_D_93_2" />
          <FileRuleRef RuleID="ID_DENY_D_94_2" />
          <FileRuleRef RuleID="ID_DENY_D_95_2" />
          <FileRuleRef RuleID="ID_DENY_D_96_2" />
          <FileRuleRef RuleID="ID_DENY_D_97_2" />
          <FileRuleRef RuleID="ID_DENY_D_98_2" />
          <FileRuleRef RuleID="ID_DENY_D_99_2" />
          <FileRuleRef RuleID="ID_DENY_D_100_2" />
          <FileRuleRef RuleID="ID_DENY_D_101_2" />
          <FileRuleRef RuleID="ID_DENY_D_102_2" />
          <FileRuleRef RuleID="ID_DENY_D_103_2" />
          <FileRuleRef RuleID="ID_DENY_D_104_2" />
          <FileRuleRef RuleID="ID_DENY_D_105_2" />
          <FileRuleRef RuleID="ID_DENY_D_106_2" />
          <FileRuleRef RuleID="ID_DENY_D_107_2" />
          <FileRuleRef RuleID="ID_DENY_D_108_2" />
          <FileRuleRef RuleID="ID_DENY_D_109_2" />
          <FileRuleRef RuleID="ID_DENY_D_110_2" />
          <FileRuleRef RuleID="ID_DENY_D_111_2" />
          <FileRuleRef RuleID="ID_DENY_D_112_2" />
          <FileRuleRef RuleID="ID_DENY_D_113_2" />
          <FileRuleRef RuleID="ID_DENY_D_114_2" />
          <FileRuleRef RuleID="ID_DENY_D_115_2" />
          <FileRuleRef RuleID="ID_DENY_D_116_2" />
          <FileRuleRef RuleID="ID_DENY_D_117_2" />
          <FileRuleRef RuleID="ID_DENY_D_118_2" />
          <FileRuleRef RuleID="ID_DENY_D_119_2" />
          <FileRuleRef RuleID="ID_DENY_D_120_2" />
          <FileRuleRef RuleID="ID_DENY_D_121_2" />
          <FileRuleRef RuleID="ID_DENY_D_122_2" />
          <FileRuleRef RuleID="ID_DENY_D_123_2" />
          <FileRuleRef RuleID="ID_DENY_D_124_2" />
          <FileRuleRef RuleID="ID_DENY_D_125_2" />
          <FileRuleRef RuleID="ID_DENY_D_126_2" />
          <FileRuleRef RuleID="ID_DENY_D_127_2" />
          <FileRuleRef RuleID="ID_DENY_D_128_2" />
          <FileRuleRef RuleID="ID_DENY_D_129_2" />
          <FileRuleRef RuleID="ID_DENY_D_130_2" />
          <FileRuleRef RuleID="ID_DENY_D_131_2" />
          <FileRuleRef RuleID="ID_DENY_D_132_2" />
          <FileRuleRef RuleID="ID_DENY_D_133_2" />
          <FileRuleRef RuleID="ID_DENY_D_134_2" />
          <FileRuleRef RuleID="ID_DENY_D_135_2" />
          <FileRuleRef RuleID="ID_DENY_D_136_2" />
          <FileRuleRef RuleID="ID_DENY_D_137_2" />
          <FileRuleRef RuleID="ID_DENY_D_138_2" />
          <FileRuleRef RuleID="ID_DENY_D_139_2" />
          <FileRuleRef RuleID="ID_DENY_D_140_2" />
          <FileRuleRef RuleID="ID_DENY_D_141_2" />
          <FileRuleRef RuleID="ID_DENY_D_142_2" />
          <FileRuleRef RuleID="ID_DENY_D_143_2" />
          <FileRuleRef RuleID="ID_DENY_D_144_2" />
          <FileRuleRef RuleID="ID_DENY_D_145_2" />
          <FileRuleRef RuleID="ID_DENY_D_146_2" />
          <FileRuleRef RuleID="ID_DENY_D_147_2" />
          <FileRuleRef RuleID="ID_DENY_D_148_2" />
          <FileRuleRef RuleID="ID_DENY_D_149_2" />
          <FileRuleRef RuleID="ID_DENY_D_150_2" />
          <FileRuleRef RuleID="ID_DENY_D_151_2" />
          <FileRuleRef RuleID="ID_DENY_D_152_2" />
          <FileRuleRef RuleID="ID_DENY_D_153_2" />
          <FileRuleRef RuleID="ID_DENY_D_154_2" />
          <FileRuleRef RuleID="ID_DENY_D_155_2" />
          <FileRuleRef RuleID="ID_DENY_D_156_2" />
          <FileRuleRef RuleID="ID_DENY_D_157_2" />
          <FileRuleRef RuleID="ID_DENY_D_158_2" />
          <FileRuleRef RuleID="ID_DENY_D_159_2" />
          <FileRuleRef RuleID="ID_DENY_D_160_2" />
          <FileRuleRef RuleID="ID_DENY_D_161_2" />
          <FileRuleRef RuleID="ID_DENY_D_162_2" />
          <FileRuleRef RuleID="ID_DENY_D_163_2" />
          <FileRuleRef RuleID="ID_DENY_D_164_2" />
          <FileRuleRef RuleID="ID_DENY_D_165_2" />
          <FileRuleRef RuleID="ID_DENY_D_166_2" />
          <FileRuleRef RuleID="ID_DENY_D_167_2" />
          <FileRuleRef RuleID="ID_DENY_D_168_2" />
          <FileRuleRef RuleID="ID_DENY_D_169_2" />
          <FileRuleRef RuleID="ID_DENY_D_170_2" />
          <FileRuleRef RuleID="ID_DENY_D_171_2" />
          <FileRuleRef RuleID="ID_DENY_D_172_2" />
          <FileRuleRef RuleID="ID_DENY_D_173_2" />
          <FileRuleRef RuleID="ID_DENY_D_174_2" />
          <FileRuleRef RuleID="ID_DENY_D_175_2" />
          <FileRuleRef RuleID="ID_DENY_D_176_2" />
          <FileRuleRef RuleID="ID_DENY_D_177_2" />
          <FileRuleRef RuleID="ID_DENY_D_178_2" />
          <FileRuleRef RuleID="ID_DENY_D_179_2" />
          <FileRuleRef RuleID="ID_DENY_D_180_2" />
          <FileRuleRef RuleID="ID_DENY_D_181_2" />
          <FileRuleRef RuleID="ID_DENY_D_182_2" />
          <FileRuleRef RuleID="ID_DENY_D_183_2" />
          <FileRuleRef RuleID="ID_DENY_D_184_2" />
          <FileRuleRef RuleID="ID_DENY_D_185_2" />
          <FileRuleRef RuleID="ID_DENY_D_186_2" />
          <FileRuleRef RuleID="ID_DENY_D_187_2" />
          <FileRuleRef RuleID="ID_DENY_D_188_2" />
          <FileRuleRef RuleID="ID_DENY_D_189_2" />
          <FileRuleRef RuleID="ID_DENY_D_190_2" />
          <FileRuleRef RuleID="ID_DENY_D_191_2" />
          <FileRuleRef RuleID="ID_DENY_D_192_2" />
          <FileRuleRef RuleID="ID_DENY_D_193_2" />
          <FileRuleRef RuleID="ID_DENY_D_194_2" />
          <FileRuleRef RuleID="ID_DENY_D_195_2" />
          <FileRuleRef RuleID="ID_DENY_D_196_2" />
          <FileRuleRef RuleID="ID_DENY_D_197_2" />
          <FileRuleRef RuleID="ID_DENY_D_198_2" />
          <FileRuleRef RuleID="ID_DENY_D_199_2" />
          <FileRuleRef RuleID="ID_DENY_D_200_2" />
          <FileRuleRef RuleID="ID_DENY_D_201_2" />
          <FileRuleRef RuleID="ID_DENY_D_202_2" />
          <FileRuleRef RuleID="ID_DENY_D_203_2" />
          <FileRuleRef RuleID="ID_DENY_D_204_2" />
          <FileRuleRef RuleID="ID_DENY_D_205_2" />
          <FileRuleRef RuleID="ID_DENY_D_206_2" />
          <FileRuleRef RuleID="ID_DENY_D_207_2" />
          <FileRuleRef RuleID="ID_DENY_D_208_2" />
          <FileRuleRef RuleID="ID_DENY_D_209_2" />
          <FileRuleRef RuleID="ID_DENY_D_210_2" />
          <FileRuleRef RuleID="ID_DENY_D_211_2" />
          <FileRuleRef RuleID="ID_DENY_D_212_2" />
          <FileRuleRef RuleID="ID_DENY_D_213_2" />
          <FileRuleRef RuleID="ID_DENY_D_214_2" />
          <FileRuleRef RuleID="ID_DENY_D_215_2" />
          <FileRuleRef RuleID="ID_DENY_D_216_2" />
          <FileRuleRef RuleID="ID_DENY_D_217_2" />
          <FileRuleRef RuleID="ID_DENY_D_218_2" />
          <FileRuleRef RuleID="ID_DENY_D_219_2" />
          <FileRuleRef RuleID="ID_DENY_D_220_2" />
          <FileRuleRef RuleID="ID_DENY_D_221_2" />
          <FileRuleRef RuleID="ID_DENY_D_222_2" />
          <FileRuleRef RuleID="ID_DENY_D_223_2" />
          <FileRuleRef RuleID="ID_DENY_D_224_2" />
          <FileRuleRef RuleID="ID_DENY_D_225_2" />
          <FileRuleRef RuleID="ID_DENY_D_226_2" />
          <FileRuleRef RuleID="ID_DENY_D_227_2" />
          <FileRuleRef RuleID="ID_DENY_D_228_2" />
          <FileRuleRef RuleID="ID_DENY_D_229_2" />
          <FileRuleRef RuleID="ID_DENY_D_230_2" />
          <FileRuleRef RuleID="ID_DENY_D_231_2" />
          <FileRuleRef RuleID="ID_DENY_D_232_2" />
          <FileRuleRef RuleID="ID_DENY_D_233_2" />
          <FileRuleRef RuleID="ID_DENY_D_234_2" />
          <FileRuleRef RuleID="ID_DENY_D_235_2" />
          <FileRuleRef RuleID="ID_DENY_D_236_2" />
          <FileRuleRef RuleID="ID_DENY_D_237_2" />
          <FileRuleRef RuleID="ID_DENY_D_238_2" />
          <FileRuleRef RuleID="ID_DENY_D_239_2" />
          <FileRuleRef RuleID="ID_DENY_D_240_2" />
          <FileRuleRef RuleID="ID_DENY_D_241_2" />
          <FileRuleRef RuleID="ID_DENY_D_242_2" />
          <FileRuleRef RuleID="ID_DENY_D_243_2" />
          <FileRuleRef RuleID="ID_DENY_D_244_2" />
          <FileRuleRef RuleID="ID_DENY_D_245_2" />
          <FileRuleRef RuleID="ID_DENY_D_246_2" />
          <FileRuleRef RuleID="ID_DENY_D_247_2" />
          <FileRuleRef RuleID="ID_DENY_D_248_2" />
          <FileRuleRef RuleID="ID_DENY_D_249_2" />
          <FileRuleRef RuleID="ID_DENY_D_250_2" />
          <FileRuleRef RuleID="ID_DENY_D_251_2" />
          <FileRuleRef RuleID="ID_DENY_D_252_2" />
          <FileRuleRef RuleID="ID_DENY_D_253_2" />
          <FileRuleRef RuleID="ID_DENY_D_254_2" />
          <FileRuleRef RuleID="ID_DENY_D_255_2" />
          <FileRuleRef RuleID="ID_DENY_D_256_2" />
          <FileRuleRef RuleID="ID_DENY_D_257_2" />
          <FileRuleRef RuleID="ID_DENY_D_258_2" />
          <FileRuleRef RuleID="ID_DENY_D_259_2" />
          <FileRuleRef RuleID="ID_DENY_D_260_2" />
          <FileRuleRef RuleID="ID_DENY_D_263_2" />
          <FileRuleRef RuleID="ID_DENY_D_264_2" />
          <FileRuleRef RuleID="ID_DENY_D_267_2" />
          <FileRuleRef RuleID="ID_DENY_D_268_2" />
          <FileRuleRef RuleID="ID_DENY_D_271_2" />
          <FileRuleRef RuleID="ID_DENY_D_272_2" />
          <FileRuleRef RuleID="ID_DENY_D_275_2" />
          <FileRuleRef RuleID="ID_DENY_D_276_2" />
          <FileRuleRef RuleID="ID_DENY_D_277_2" />
          <FileRuleRef RuleID="ID_DENY_D_278_2" />
          <FileRuleRef RuleID="ID_DENY_D_279_2" />
          <FileRuleRef RuleID="ID_DENY_D_280_2" />
          <FileRuleRef RuleID="ID_DENY_D_281_2" />
          <FileRuleRef RuleID="ID_DENY_D_282_2" />
          <FileRuleRef RuleID="ID_DENY_D_283_2" />
          <FileRuleRef RuleID="ID_DENY_D_284_2" />
          <FileRuleRef RuleID="ID_DENY_D_285_2" />
          <FileRuleRef RuleID="ID_DENY_D_286_2" />
          <FileRuleRef RuleID="ID_DENY_D_287_2" />
          <FileRuleRef RuleID="ID_DENY_D_288_2" />
          <FileRuleRef RuleID="ID_DENY_D_289_2" />
          <FileRuleRef RuleID="ID_DENY_D_290_2" />
          <FileRuleRef RuleID="ID_DENY_D_293_2" />
          <FileRuleRef RuleID="ID_DENY_D_294_2" />
          <FileRuleRef RuleID="ID_DENY_D_295_2" />
          <FileRuleRef RuleID="ID_DENY_D_296_2" />
          <FileRuleRef RuleID="ID_DENY_D_297_2" />
          <FileRuleRef RuleID="ID_DENY_D_298_2" />
          <FileRuleRef RuleID="ID_DENY_D_299_2" />
          <FileRuleRef RuleID="ID_DENY_D_300_2" />
          <FileRuleRef RuleID="ID_DENY_D_301_2" />
          <FileRuleRef RuleID="ID_DENY_D_302_2" />
          <FileRuleRef RuleID="ID_DENY_D_303_2" />
          <FileRuleRef RuleID="ID_DENY_D_304_2" />
          <FileRuleRef RuleID="ID_DENY_D_305_2" />
          <FileRuleRef RuleID="ID_DENY_D_306_2" />
          <FileRuleRef RuleID="ID_DENY_D_307_2" />
          <FileRuleRef RuleID="ID_DENY_D_308_2" />
          <FileRuleRef RuleID="ID_DENY_D_309_2" />
          <FileRuleRef RuleID="ID_DENY_D_310_2" />
          <FileRuleRef RuleID="ID_DENY_D_311_2" />
          <FileRuleRef RuleID="ID_DENY_D_312_2" />
          <FileRuleRef RuleID="ID_DENY_D_313_2" />
          <FileRuleRef RuleID="ID_DENY_D_314_2" />
          <FileRuleRef RuleID="ID_DENY_D_315_2" />
          <FileRuleRef RuleID="ID_DENY_D_316_2" />
          <FileRuleRef RuleID="ID_DENY_D_317_2" />
          <FileRuleRef RuleID="ID_DENY_D_318_2" />
          <FileRuleRef RuleID="ID_DENY_D_319_2" />
          <FileRuleRef RuleID="ID_DENY_D_320_2" />
          <FileRuleRef RuleID="ID_DENY_D_321_2" />
          <FileRuleRef RuleID="ID_DENY_D_322_2" />
          <FileRuleRef RuleID="ID_DENY_D_323_2" />
          <FileRuleRef RuleID="ID_DENY_D_324_2" />
          <FileRuleRef RuleID="ID_DENY_D_325_2" />
          <FileRuleRef RuleID="ID_DENY_D_326_2" />
          <FileRuleRef RuleID="ID_DENY_D_327_2" />
          <FileRuleRef RuleID="ID_DENY_D_328_2" />
          <FileRuleRef RuleID="ID_DENY_D_329_2" />
          <FileRuleRef RuleID="ID_DENY_D_330_2" />
          <FileRuleRef RuleID="ID_DENY_D_331_2" />
          <FileRuleRef RuleID="ID_DENY_D_332_2" />
          <FileRuleRef RuleID="ID_DENY_D_333_2" />
          <FileRuleRef RuleID="ID_DENY_D_334_2" />
          <FileRuleRef RuleID="ID_DENY_D_335_2" />
          <FileRuleRef RuleID="ID_DENY_D_336_2" />
          <FileRuleRef RuleID="ID_DENY_D_337_2" />
          <FileRuleRef RuleID="ID_DENY_D_338_2" />
          <FileRuleRef RuleID="ID_DENY_D_339_2" />
          <FileRuleRef RuleID="ID_DENY_D_340_2" />
          <FileRuleRef RuleID="ID_DENY_D_341_2" />
          <FileRuleRef RuleID="ID_DENY_D_342_2" />
          <FileRuleRef RuleID="ID_DENY_D_343_2" />
          <FileRuleRef RuleID="ID_DENY_D_344_2" />
          <FileRuleRef RuleID="ID_DENY_D_345_2" />
          <FileRuleRef RuleID="ID_DENY_D_346_2" />
          <FileRuleRef RuleID="ID_DENY_D_347_2" />
          <FileRuleRef RuleID="ID_DENY_D_348_2" />
          <FileRuleRef RuleID="ID_DENY_D_349_2" />
          <FileRuleRef RuleID="ID_DENY_D_350_2" />
          <FileRuleRef RuleID="ID_DENY_D_351_2" />
          <FileRuleRef RuleID="ID_DENY_D_352_2" />
          <FileRuleRef RuleID="ID_DENY_D_353_2" />
          <FileRuleRef RuleID="ID_DENY_D_354_2" />
          <FileRuleRef RuleID="ID_DENY_D_355_2" />
          <FileRuleRef RuleID="ID_DENY_D_356_2" />
          <FileRuleRef RuleID="ID_DENY_D_357_2" />
          <FileRuleRef RuleID="ID_DENY_D_358_2" />
          <FileRuleRef RuleID="ID_DENY_D_359_2" />
          <FileRuleRef RuleID="ID_DENY_D_360_2" />
          <FileRuleRef RuleID="ID_DENY_D_361_2" />
          <FileRuleRef RuleID="ID_DENY_D_362_2" />
          <FileRuleRef RuleID="ID_DENY_D_363_2" />
          <FileRuleRef RuleID="ID_DENY_D_364_2" />
          <FileRuleRef RuleID="ID_DENY_D_365_2" />
          <FileRuleRef RuleID="ID_DENY_D_366_2" />
          <FileRuleRef RuleID="ID_DENY_D_367_2" />
          <FileRuleRef RuleID="ID_DENY_D_368_2" />
          <FileRuleRef RuleID="ID_DENY_D_369_2" />
          <FileRuleRef RuleID="ID_DENY_D_370_2" />
          <FileRuleRef RuleID="ID_DENY_D_371_2" />
          <FileRuleRef RuleID="ID_DENY_D_372_2" />
          <FileRuleRef RuleID="ID_DENY_D_373_2" />
          <FileRuleRef RuleID="ID_DENY_D_374_2" />
          <FileRuleRef RuleID="ID_DENY_D_375_2" />
          <FileRuleRef RuleID="ID_DENY_D_376_2" />
          <FileRuleRef RuleID="ID_DENY_D_377_2" />
          <FileRuleRef RuleID="ID_DENY_D_378_2" />
          <FileRuleRef RuleID="ID_DENY_D_379_2" />
          <FileRuleRef RuleID="ID_DENY_D_380_2" />
          <FileRuleRef RuleID="ID_DENY_D_381_2" />
          <FileRuleRef RuleID="ID_DENY_D_382_2" />
          <FileRuleRef RuleID="ID_DENY_D_383_2" />
          <FileRuleRef RuleID="ID_DENY_D_384_2" />
          <FileRuleRef RuleID="ID_DENY_D_385_2" />
          <FileRuleRef RuleID="ID_DENY_D_386_2" />
          <FileRuleRef RuleID="ID_DENY_D_387_2" />
          <FileRuleRef RuleID="ID_DENY_D_388_2" />
          <FileRuleRef RuleID="ID_DENY_D_389_2" />
          <FileRuleRef RuleID="ID_DENY_D_390_2" />
          <FileRuleRef RuleID="ID_DENY_D_391_2" />
          <FileRuleRef RuleID="ID_DENY_D_392_2" />
          <FileRuleRef RuleID="ID_DENY_D_393_2" />
          <FileRuleRef RuleID="ID_DENY_D_394_2" />
          <FileRuleRef RuleID="ID_DENY_D_395_2" />
          <FileRuleRef RuleID="ID_DENY_D_396_2" />
          <FileRuleRef RuleID="ID_DENY_D_397_2" />
          <FileRuleRef RuleID="ID_DENY_D_398_2" />
          <FileRuleRef RuleID="ID_DENY_D_399_2" />
          <FileRuleRef RuleID="ID_DENY_D_400_2" />
          <FileRuleRef RuleID="ID_DENY_D_401_2" />
          <FileRuleRef RuleID="ID_DENY_D_402_2" />
          <FileRuleRef RuleID="ID_DENY_D_403_2" />
          <FileRuleRef RuleID="ID_DENY_D_404_2" />
          <FileRuleRef RuleID="ID_DENY_D_405_2" />
          <FileRuleRef RuleID="ID_DENY_D_406_2" />
          <FileRuleRef RuleID="ID_DENY_D_411_2" />
          <FileRuleRef RuleID="ID_DENY_D_412_2" />
          <FileRuleRef RuleID="ID_DENY_D_427_2" />
          <FileRuleRef RuleID="ID_DENY_D_428_2" />
          <FileRuleRef RuleID="ID_DENY_D_435_2" />
          <FileRuleRef RuleID="ID_DENY_D_436_2" />
          <FileRuleRef RuleID="ID_DENY_D_441_2" />
          <FileRuleRef RuleID="ID_DENY_D_442_2" />
          <FileRuleRef RuleID="ID_DENY_D_457_2" />
          <FileRuleRef RuleID="ID_DENY_D_458_2" />
          <FileRuleRef RuleID="ID_DENY_D_463_2" />
          <FileRuleRef RuleID="ID_DENY_D_464_2" />
          <FileRuleRef RuleID="ID_DENY_D_465_2" />
          <FileRuleRef RuleID="ID_DENY_D_466_2" />
          <FileRuleRef RuleID="ID_DENY_D_467_2" />
          <FileRuleRef RuleID="ID_DENY_D_468_2" />
          <FileRuleRef RuleID="ID_DENY_D_469_2" />
          <FileRuleRef RuleID="ID_DENY_D_470_2" />
          <FileRuleRef RuleID="ID_DENY_D_471_2" />
          <FileRuleRef RuleID="ID_DENY_D_472_2" />
          <FileRuleRef RuleID="ID_DENY_D_475_2" />
          <FileRuleRef RuleID="ID_DENY_D_476_2" />
          <FileRuleRef RuleID="ID_DENY_D_477_2" />
          <FileRuleRef RuleID="ID_DENY_D_478_2" />
          <FileRuleRef RuleID="ID_DENY_D_483_2" />
          <FileRuleRef RuleID="ID_DENY_D_484_2" />
          <FileRuleRef RuleID="ID_DENY_D_493_2" />
          <FileRuleRef RuleID="ID_DENY_D_494_2" />
          <FileRuleRef RuleID="ID_DENY_D_503_2" />
          <FileRuleRef RuleID="ID_DENY_D_504_2" />
          <FileRuleRef RuleID="ID_DENY_D_507_2" />
          <FileRuleRef RuleID="ID_DENY_D_508_2" />
          <FileRuleRef RuleID="ID_DENY_D_509_2" />
          <FileRuleRef RuleID="ID_DENY_D_510_2" />
          <FileRuleRef RuleID="ID_DENY_D_511_2" />
          <FileRuleRef RuleID="ID_DENY_D_512_2" />
          <FileRuleRef RuleID="ID_DENY_D_515_2" />
          <FileRuleRef RuleID="ID_DENY_D_516_2" />
          <FileRuleRef RuleID="ID_DENY_D_519_2" />
          <FileRuleRef RuleID="ID_DENY_D_520_2" />
          <FileRuleRef RuleID="ID_DENY_D_527_2" />
          <FileRuleRef RuleID="ID_DENY_D_528_2" />
          <FileRuleRef RuleID="ID_DENY_D_529_2" />
          <FileRuleRef RuleID="ID_DENY_D_530_2" />
          <FileRuleRef RuleID="ID_DENY_D_537_2" />
          <FileRuleRef RuleID="ID_DENY_D_538_2" />
          <FileRuleRef RuleID="ID_DENY_D_539_2" />
          <FileRuleRef RuleID="ID_DENY_D_540_2" />
          <FileRuleRef RuleID="ID_DENY_D_541_2" />
          <FileRuleRef RuleID="ID_DENY_D_542_2" />
          <FileRuleRef RuleID="ID_DENY_D_543_2" />
          <FileRuleRef RuleID="ID_DENY_D_544_2" />
          <FileRuleRef RuleID="ID_DENY_D_545_2" />
          <FileRuleRef RuleID="ID_DENY_D_546_2" />
          <FileRuleRef RuleID="ID_DENY_D_547_2" />
          <FileRuleRef RuleID="ID_DENY_D_548_2" />
          <FileRuleRef RuleID="ID_DENY_D_549_2" />
          <FileRuleRef RuleID="ID_DENY_D_550_2" />
          <FileRuleRef RuleID="ID_DENY_D_551_2" />
          <FileRuleRef RuleID="ID_DENY_D_552_2" />
          <FileRuleRef RuleID="ID_DENY_D_553_2" />
          <FileRuleRef RuleID="ID_DENY_D_554_2" />
          <FileRuleRef RuleID="ID_DENY_D_555_2" />
          <FileRuleRef RuleID="ID_DENY_D_556_2" />
          <FileRuleRef RuleID="ID_DENY_D_557_2" />
          <FileRuleRef RuleID="ID_DENY_D_558_2" />
          <FileRuleRef RuleID="ID_DENY_D_559_2" />
          <FileRuleRef RuleID="ID_DENY_D_560_2" />
          <FileRuleRef RuleID="ID_DENY_D_561_2" />
          <FileRuleRef RuleID="ID_DENY_D_562_2" />
          <FileRuleRef RuleID="ID_DENY_D_563_2" />
          <FileRuleRef RuleID="ID_DENY_D_564_2" />
          <FileRuleRef RuleID="ID_DENY_D_565_2" />
          <FileRuleRef RuleID="ID_DENY_D_566_2" />
          <FileRuleRef RuleID="ID_DENY_D_567_2" />
          <FileRuleRef RuleID="ID_DENY_D_568_2" />
          <FileRuleRef RuleID="ID_DENY_D_569_2" />
          <FileRuleRef RuleID="ID_DENY_D_570_2" />
          <FileRuleRef RuleID="ID_DENY_D_571_2" />
          <FileRuleRef RuleID="ID_DENY_D_572_2" />
          <FileRuleRef RuleID="ID_DENY_D_573_2" />
          <FileRuleRef RuleID="ID_DENY_D_574_2" />
          <FileRuleRef RuleID="ID_DENY_D_575_2" />
          <FileRuleRef RuleID="ID_DENY_D_576_2" />
          <FileRuleRef RuleID="ID_DENY_D_577_2" />
          <FileRuleRef RuleID="ID_DENY_D_578_2" />
          <FileRuleRef RuleID="ID_DENY_D_579_2" />
          <FileRuleRef RuleID="ID_DENY_D_580_2" />
          <FileRuleRef RuleID="ID_DENY_D_581_2" />
          <FileRuleRef RuleID="ID_DENY_D_582_2" />
          <FileRuleRef RuleID="ID_DENY_D_583_2" />
          <FileRuleRef RuleID="ID_DENY_D_584_2" />
          <FileRuleRef RuleID="ID_DENY_D_585_2" />
          <FileRuleRef RuleID="ID_DENY_D_586_2" />
          <FileRuleRef RuleID="ID_DENY_D_587_2" />
          <FileRuleRef RuleID="ID_DENY_D_588_2" />
          <FileRuleRef RuleID="ID_DENY_D_589_2" />
          <FileRuleRef RuleID="ID_DENY_D_590_2" />
          <FileRuleRef RuleID="ID_DENY_D_591_2" />
          <FileRuleRef RuleID="ID_DENY_D_592_2" />
          <FileRuleRef RuleID="ID_DENY_D_593_2" />
          <FileRuleRef RuleID="ID_DENY_D_594_2" />
          <FileRuleRef RuleID="ID_DENY_D_595_2" />
          <FileRuleRef RuleID="ID_DENY_D_596_2" />
          <FileRuleRef RuleID="ID_DENY_D_597_2" />
          <FileRuleRef RuleID="ID_DENY_D_598_2" />
          <FileRuleRef RuleID="ID_DENY_D_599_2" />
          <FileRuleRef RuleID="ID_DENY_D_600_2" />
          <FileRuleRef RuleID="ID_DENY_D_601_2" />
          <FileRuleRef RuleID="ID_DENY_D_602_2" />
          <FileRuleRef RuleID="ID_DENY_D_603_2" />
          <FileRuleRef RuleID="ID_DENY_D_604_2" />
          <FileRuleRef RuleID="ID_DENY_D_605_2" />
          <FileRuleRef RuleID="ID_DENY_D_606_2" />
        </FileRulesRef>
      </ProductSigners>
    </SigningScenario>
  </SigningScenarios>
  <UpdatePolicySigners />
  <CiSigners>
    <CiSigner SignerId="ID_SIGNER_STORE_0" />
  </CiSigners>
  <HvciOptions>1</HvciOptions>
  <BasePolicyID>{30D8142C-F2FB-4574-8581-642901BDCE71}</BasePolicyID>
  <PolicyID>{30D8142C-F2FB-4574-8581-642901BDCE71}</PolicyID>
  <Settings>
    <Setting Provider="PolicyInfo" Key="Information" ValueName="Name">
      <Value>
        <String>AllowMicrosoft_040121</String>
      </Value>
    </Setting>
    <Setting Provider="PolicyInfo" Key="Information" ValueName="Id">
      <Value>
        <String>040121</String>
      </Value>
    </Setting>
  </Settings>
</SiPolicy>
```

## WDAC Policy - Deployment

The above policy is deployed through Group Policy. The deployment configuration is available within the [Platform Configuration](/blueprint/abac/hybrid-platform.html#application-control) section.
