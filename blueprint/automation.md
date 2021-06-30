---
layout: page
title: Automation
---

Microsoft offers programmatic and manual methods to getting and setting configuration within Microsoft Azure and Microsoft 365. This document focuses on the programmatic configuration utilising [Microsoft 365 Desired State Configuration (M365DSC)](https://microsoft365dsc.com/). M365DSC is an open source tool hosted on GitHub and maintained by Microsoft engineers and the community. It is able to configure settings within all major Microsoft 365 workloads such as Exchange Online, Teams, Power Platforms, SharePoint and Security and Compliance. A list of configurable resources within these workloads is available on the [M365DSC website](https://github.com/Microsoft/Microsoft365DSC/wiki/Resources-List). M365DSC leverages Windows PowerShell Desired State Configuration. 

Currently, M365DSC is not able to fully configure a tenant to the specifications outlined in the blueprint. Configurations that cannot be configured via this method may need to be configured either manually or via another method such as non-desired state configuration PowerShell modules or Azure Command Line Interface. Configuration via other scripted methods are not be covered.

## Windows PowerShell Desired State Configuration

Windows PowerShell Desired State Configuration is a feature of PowerShell version 4.0 and later. It leverages a Configuration Script, Resources, and the [Local Configuration Manager](https://docs.microsoft.com/en-us/powershell/scripting/dsc/managing-nodes/metaconfig?view=powershell-7.1) on a Windows machine. 

The Configuration Script is a declarative PowerShell script which defines and configures resource instances. Resources contain the code required to configure and maintain the configuration in a specified state. The Local Configuration Manager is the engine which facilitates the interaction between resources and configurations. 

Windows PowerShell Desired State Configuration can be leveraged to implement and ensure configurations are maintained in their preferred state. The Local Configuration Manager can be configured to poll the configuration on a set time interval and alert or re-enforce if configuration drift has occurred. For details regarding the Local Configuration Manager on a computer, run the following command in a PowerShell console:

```Powershell
Get-DscLocalConfigurationManager
```

## Scope

The following blueprint components are available for automation. We hope to expand this list over time as the options mature. If you would like your script included in the blueprint, please let us know by raising a [ticket in GitHub](https://github.com/govau/desktop.gov.au/issues).

* Identity and access management

## Identity and access management

The following table outlines the subsections of the blueprint and their automation status.

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

## Microsoft 365 Desired State Configuration implementation procedure

The following procedure is to **implement** a configuration using Microsoft 365 Desired State Configuration.

### Prerequisites 

* An account with Global Administrator privileges
* An account with a PowerShell execution policy of unrestricted
* A device with PowerShell Remoting enabled, internet access, and PowerShell 4.0 or greater installed

### Procedure

The process to enforce a Microsoft 365 Desired State Configuration (M365DSC) can be broken down into 3 parts:

1. Configuration file development
2. Certificate creation
3. Configuration deployment

If the certificate creation part is skipped, the configuration file (MOF file) will contain credentials in **clear text**. Also the `CertificateFile` value within `configurationdata.psd1` would require removal.

#### Configuration file development

The configuration files developed in accordance with the blueprint are available below. The configuration data file is required no matter the configuration script used.

##### Configuration data file

The required `configurationdata.psd1` file can be downloaded below:

* [configurationdata.psd1](/assets/files/automation/configurationdata.txt)

##### Blueprint configuration scripts

Blueprint configuration scripts are available below:

* [identity_dsc.ps1](/assets/files/automation/identity_dsc.txt)

#### Certificate creation

The process to create a certificate is as follows:

1. Open a PowerShell console as administrator
2. Install and import the PowerShell module `microsoft365dsc` using the following command:
```Powershell 
install-module microsoft365dsc -allowclobber -force
import-module microsoft365dsc
```
3. In PowerShell navigate to the directory containing the blueprint configuration PS1 file and the `configurationdata.psd1` file
4. Create a Desired State Configuration local configuration manager certificate:
```Powershell 
Set-M365DSCAgentCertificateConfiguration
```
5. Validate that a certificate was created and assigned to the local configuration manager by matching the output of step 4 with `CertificateID` from the following:
```Powershell 
Get-DscLocalConfigurationManager
```
6. Export the certificate into the folder containing the blueprint configuration PS1 file and the `configurationdata.psd1` file
```Powershell
$certificatethumbprint = Get-DscLocalConfigurationManager | select CertificateID
$certpath =  "cert:\localmachine\My\" + $certificatethumbprint.CertificateID
$cert = Get-ChildItem -path $certpath
Export-Certificate -Cert $cert -FilePath .\M365dsc_DER.cer
certutil -encode M365dsc_DER.cer m365dsc.cer
remove-item .\M365dsc_DER.cer
```

#### Configuration deployment

The process to deploy the configuration is as follows:

1. Open a PowerShell console as administrator
2. Install and import the PowerShell module microsoft365dsc using the following command:
```Powershell 
install-module microsoft365dsc -allowclobber -force
import-module microsoft365dsc
```
3. In PowerShell navigate to the directory containing the blueprint configuration PS1 file and the `configurationdata.psd1` file
4. In the PowerShell console, initiate the blueprint configuration PS1 and supply the required values. The required values are located in the parameters section of the `Blueprint Configuration Script file` (i.e. identity_dsc.ps1). The following is an example for the identity configuration. The required values are: Global Admin credentials; agency name; agency prefix; and trusted IPs (in CIDR format).
```Powershell 
$pscredential = get-credential
$agencyname = "Agency Name"
$agencyprefix = "Agency Acronym"
$trustedIPs = @("X.X.X.X/X","X.X.X.X/X") # note - for one CIDR range use @("X.X.X.X/X")
.\identity_dsc.ps1 -globaladminaccount $pscredential -trustedip $trustedIPs -agency $agencyname -agencyprefix $agencyprefix
```
5. **This step will enforce the DSC configuration**. Run the following command within the PowerShell console:
```Powershell 
Start-DSCConfiguration M365TenantConfig -wait -verbose -force
```
6. Validate the successful deployment by viewing changes in Azure Active Directory
7. In the PowerShell console, run the following command to ensure the configuration is no longer enforced via the Desired State Configuration Local Configuration Manager
```Powershell
Remove-DscConfigurationDocument -stage current
```

## Microsoft 365 Desired State Configuration auditing procedure

The following procedure is to **audit** a configuration using Microsoft 365 Desired State Configuration.

### Prerequisites 

* An account with Global Administrator privileges
* A device with PowerShell Remoting enabled, internet access, and PowerShell 4.0 or greater installed
* An account with a PowerShell execution policy of unrestricted

### Procedure

The process to audit a tenant based on the blueprints Microsoft 365 Desired State Configuration (M365DSC) is as follows:

1. Download [baseline.ps1](/assets/files/automation/baseline.txt)
2. Within `baseline.ps1`, update any agency specific items (e.g. all areas where agency name is specified)
3. Open a PowerShell console as administrator and navigate to the directory containing the `baseline.ps1` file
4. Run the following command in the PowerShell console:
```Powershell
$outputlocation = "\Blueprint_Comparison $($(Get-Date).ToString(`"yyyy-MM-dd hhmmss`")).html"
Assert-M365DSCBlueprint -BluePrintUrl .\baseline.ps1 -OutputReportPath $outputlocation
```
5. Review the html report to evaluate the configuration against the blueprint

### Blueprint audit baseline

Blueprint audit baselines are available below:

* [baseline.ps1](/assets/files/automation/baseline.txt)

The above baseline requires updating to include agency specific details prior to use.
