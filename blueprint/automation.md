---
layout: page
title: Automation
---

The purpose of this document is to provide guidance on how the Protected Utility Blueprint (“Blueprint”) developed by the Digital Transformation Agency (DTA) can be implemented in a automated fashion.

Microsoft offers both programmatic and manual methods to both get and set configurations within Microsoft Azure and Microsoft 365. This document will focus on the programmatic configuration utilising [Microsoft 365 Desired State Configuration (M365DSC)](https://microsoft365dsc.com/). M365DSC is an open source tool hosted on GitHub and maintained by Microsoft engineers and the community. It is able to configure settings within all major Microsoft 365 workloads such as Exchange Online, Teams, Power Platforms, SharePoint and Security and Compliance. A list of configurable resources within these workloads is available on the [M365DSC website](https://github.com/Microsoft/Microsoft365DSC/wiki/Resources-List). M365DSC leverages Windows PowerShell Desired State Configuration. 

M365DSC is not able to fully configure a tenant to the specifications outlined in the Blueprint. Configurations that cannot be configured via this method may need to be configured either manually or via another method such as non-desired state configuration PowerShell modules or Azure Command Line Interface. Configuration via these other methods will not be covered. 

## Windows PowerShell Desired State Configuration

Windows PowerShell Desired State Configuration is a feature of PowerShell version 4.0 and later. It leverages a Configuration Script, Resources, and the Local Configuration Manager on a Windows machine. 

The Configuration Script is a declarative PowerShell script which defines and configures instances of resources. Resources contain the code required to configure and keep the configuration in a specified state. The Local Configuration Manager is the engine which facilitates the interaction between resources and configurations. 

Windows PowerShell Desired State Configuration can be leveraged to both implement configurations and ensure they are maintained. The Local Configuration Manager can be configured to poll the configuration on a set time interval and re-enforce a configuration if drift has occurred. For details regarding the Local Configuration Manager on a computer run the following command in a PowerShell console:
```Powershell
Get-DscLocalConfigurationManager
```
## Scope

The following items are the components that are in scope for the automation:
* Identity and Access Management

## Identity and Access Management

The following table outlines the subsections of the Blueprint and their respective automation status.

Component | Automated / Manual
--- | ---
Conditional Access | Automated
Group Naming Policy | Automated
Group Expiration Policy | Automated
Group Creation | Automated
User Settings | Manual
Device Settings | Manual
External Collaboration | Manual
Custom Domains | Manual
Company Branding | Manual
Group Creation Restrictions | Manual
Azure Active Directory Connect (if applicable) | Manual

## Microsoft 365 Desired State Configuration Implementation Procedure

The following procedure is to <b>implement</b> a configuration using Microsoft 365 Desired State Configuration.

### Prerequisites 

The following items are prerequisites for the procedure:
* An account with Global Administrator privileges
* A device with PowerShell Remoting enabled, internet access, and PowerShell 4.0 or greater installed.
* An account with a PowerShell execution policy of unrestricted. 

### Procedure

The process to enforce a Microsoft 365 Desired State Configuration (M365DSC) Blueprint is as follows:
1. Download the ConfigurationData.PSD1 [file](automation.html#blueprint-configuration-scripts).
2. Download the PS1 file for the [target Blueprint configuration](automation.html#blueprint-configuration-scripts).
2. Open a PowerShell console as an administrator.
3. Install and import the PowerShell module microsoft365dsc using the following command:
```Powershell 
install-module microsoft365dsc -allowclobber -force
import-module microsoft365dsc
```
4. In PowerShell navigate to the directory containing the Blueprint configuration PS1 file and the ConfigurationData.PSD1 file.
5. Run the following command to create a Desired State Configuration local configuration manager certificate:
```Powershell 
Set-M365DSCAgentCertificateConfiguration
```
6. Run the following command to validate a certificate was created and assigned to the local configuration manger (The certificate thumbprint will be listed under CertificateID.):
```Powershell 
Get-DscLocalConfigurationManager
```
7. Open Certificates for the Local Computer.
8. Export the certificate `M365DSCEncryptionCert` as `M365.cer` to the folder containing the Blueprint configuration PS1 file and the ConfigurationData.PSD1 file.
5. In the PowerShell console initiate the Blueprint configuration PS1 and supply any request values. The following is an example for the Identity configuration.
```Powershell 
$pscredential = get-credential
$agencyname = "Agency Name"
$agencyprefix = "Agency Acroynm"
$trustedIPs = @("X.X.X.X/X") 
.\identity_dsc.ps1 -globaladminaccount $pscredential -trustedip $trustedIPs -agency $Agencyname -agencyprefix $Agencyprefix
```
6. <b>This step will enforce the DSC configuration</b> Run the following command within the PowerShell console:
```Powershell 
Start-DSCConfiguration M365TenantConfig -wait -verbose -force
```
7. Log into the tenant and validate the successful configuration.

### Blueprint configuration scripts

#### Configuration Data File
The required ConfigurationData.PSD1 file can be downloaded below:
* [ConfigurationData.psd1](/assets/files/automation/configurationdata.txt)

#### Blueprint Configuration Scripts
Blueprint configuration scripts are available below:

* [identity_dsc.ps1](/assets/files/automation/identity_dsc.txt)

## Microsoft 365 Desired State Configuration Auditing Procedure

The following procedure is to <b>audit</b> a configuration using Microsoft 365 Desired State Configuration.

### Prerequisites 

The following items are prerequisites for the procedure:
* An account with Global Administrator privileges
* A device with PowerShell Remoting enabled, internet access, and PowerShell 4.0 or greater installed.
* An account with a PowerShell execution policy of unrestricted. 

### Procedure
The process to audit a tenant based on the Blueprints Microsoft 365 Desired State Configuration (M365DSC) is as follows:
1. Download the Baseline.PS1 [file](automation.html#blueprint-audit-baseline).
2. Within the baseline update any agency specific items (e.g. all areas where agency name is specified)
3. Open a PowerShell console as an administrator and navigate to the directory containing the Baseline.PS1 file.
4. Run the following command in the PowerShell console:
```Powershell
$outputlocation = "\Blueprint_Comparison $($(Get-Date).ToString(`"yyyy-MM-dd hhmmss`")).html"
Assert-M365DSCBlueprint -BluePrintUrl .\baseline.ps1 -OutputReportPath $outputlocation
```
5. Review the html report to evaluate the configuration against the blueprint.

### Blueprint Audit Baseline
Blueprint audit baselines are available below:

* [baseline.ps1](/assets/files/automation/baseline.txt)