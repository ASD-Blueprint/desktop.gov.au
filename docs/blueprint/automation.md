---

---

# Automation

<p id="date-and-time">9 minutes to read - 30 March 2023</p>

Microsoft offers programmatic and manual methods to getting and setting configuration within Microsoft Azure and Microsoft 365. This document focuses on the programmatic configuration utilising [Microsoft 365 Desired State Configuration (M365DSC)](https://microsoft365dsc.com/). M365DSC is an open source tool hosted on GitHub and maintained by Microsoft engineers and the community. It is able to configure settings within all major Microsoft 365 workloads such as Exchange Online, Teams, Power Platforms, SharePoint and Security and Compliance. A list of configurable resources within these workloads is available on the [M365DSC website](https://github.com/Microsoft/Microsoft365DSC/wiki/Resources-List). M365DSC leverages Windows PowerShell Desired State Configuration. 

Currently, M365DSC is not able to fully configure a tenant to the specifications outlined in the blueprint. Configurations that cannot be configured via this method may need to be configured either manually or via another method such as the native M365 configuration PowerShell modules outside of DSC or Azure Command Line Interface.

## Windows PowerShell Desired State Configuration

Windows PowerShell Desired State Configuration is a feature of PowerShell version 4.0 and later. It leverages a Configuration Script, Resources, and the [Local Configuration Manager](https://docs.microsoft.com/en-us/powershell/scripting/dsc/managing-nodes/metaconfig?view=powershell-7.1) on a Windows machine. 

The Configuration Script is a declarative PowerShell script which defines and configures resource instances. Resources contain the code required to configure and maintain the configuration in a specified state. The Local Configuration Manager is the engine which facilitates the interaction between resources and configurations. 

Windows PowerShell Desired State Configuration can be leveraged to implement and ensure configurations are maintained in their preferred state. The Local Configuration Manager can be configured to poll the configuration on a set time interval and alert or re-enforce if configuration drift has occurred. For details regarding the Local Configuration Manager on a computer, run the following command in a PowerShell console:

```powershell
Get-DscLocalConfigurationManager
```

## Scope

The following blueprint components are available for automation. We hope to expand this list over time as the options mature. If you would like your script included in the blueprint, please let us know by raising a [ticket in GitHub](https://github.com/govau/desktop.gov.au/issues).

- Identity and access management
- Exchange Online

## Identity and access management

The following table outlines the subsections of the blueprint and their automation status for identity and access management.

Component | Automated / Manual
--- | ---
Conditional Access | Automated
Group Naming Policy | Automated 
Groups Settings | Automated 
Group Lifecycle Policy | Automated
Group Creation | Automated
Sensitivity labels | Automated (separate DSC script) 
Directory Contact Details | Automated 
User Settings | Manual
Device Settings | Manual
External Collaboration | Manual
Custom Domains | Manual
Company Branding | Manual
Group Creation Restrictions | [Platform ABAC - delegate 365 group creation script](../../as-built-as-configured/platform#delegate-office-365-group-creation) 
Azure Active Directory Connect (if applicable) | Manual

## Exchange Online

The following table outlines the subsections of the blueprint and their automation status for Exchange Online. Configuration of Exchange Online is completed after identity and access management.

| Component                       | Automated / Manual                                           |
| ------------------------------- | ------------------------------------------------------------ |
| Connectors                      | Manual                                                       |
| DKIM                            | Manual                                                       |
| Accepted domains                | Manual                                                       |
| Remote domains (Default)        | Automated                                                    |
| CAS mailbox plan                | Automated                                                    |
| Per mailbox attributes          | Manual                                                       |
| Authentication policy           | [Office 365 ABAC - authentication policy](../../as-built-as-configured/office-365#authentication-policy) |
| Outlook Web Access policy       | Automated                                                    |
| Mailbox archive                 | Manual                                                       |
| Mailbox auditing                | Manual                                                       |
| Mailflow rules                  | Manual                                                       |
| Anti-spam connection filter     | Automated                                                    |
| Anti-spam policies              | Automated                                                    |
| Anti-malware policies           | Automated                                                    |
| Anti-phishing policies          | Automated                                                    |
| Safe-links and Safe attachments | Automated                                                    |
| Hybrid configuration            | Manual                                                       |

## Microsoft 365 Desired State Configuration implementation procedure

The following procedure is to **implement** a configuration using Microsoft 365 Desired State Configuration.

### Prerequisites 

- An account with Global Administrator privileges
- Pre-creation of the break glass/emergency admin accounts
- An account with a PowerShell execution policy of unrestricted
- A device with PowerShell Remoting enabled, internet access, and PowerShell 4.0 or greater installed
- Microsoft Graph for PowerShell app registration is available in the Azure AD tenant
- Device with WinRM configured with a HTTPS listener

### Procedure

The process to enforce a Microsoft 365 Desired State Configuration (M365DSC) can be broken down into 3 parts:

1. Configuration file development
2. Certificate creation
3. Configuration deployment

If the certificate creation part is skipped, the configuration file (MOF file) will contain credentials in **clear text**. Also the `CertificateFile` value within `configurationdata.psd1` would require removal.

#### Configuration file development

The configuration files developed in accordance with the blueprint are available below. The configuration data file is required no matter the configuration script used.

##### Configuration data file

The required `configurationdata.psd1` file for the M365DSC methods can be downloaded below:

- [configurationdata.psd1](../files/automation/configurationdata.txt)

##### Blueprint configuration scripts

Blueprint configuration scripts are available in the table below.

Note, each DSC script can be ran independently.

Script | Configuration items | Method | Script parameters
--- | --- | --- | ---
[identity_dsc.ps1](../files/automation/identity_dsc.txt) | Conditional Access<br>Group Naming Policy<br>Named Locations<br>Group Lifecycle Policy<br>Group Creation<br>Groups Settings<br>Directory Contact Details | M365DSC | -trustedip<br>-organisation <br>-organisationprefix<br>-globaladminaccount<br>-technicalcontactemail<br>-technicalcontactphone<br> 
[sensitivity-labels_dsc.ps1](../files/automation/sensitivity-labels_dsc.txt) | Sensitivity labels | M365DSC | -globaladminaccount
[exo_dsc.ps1](../files/automation/exo_dsc.txt) | Anti-spam policies<br/>Anti-malware policies<br/>Anti-phishing policies<br/>Safe-links and Safe attachments<br/>Outlook Web Access policy<br/>CAS mailbox plan | M365DSC | -gatewayip<br/>-organisation <br/>-globaladminaccount<br/>-technicalcontactemail 

#### Certificate creation

The process to create a certificate is as follows:

1. Open a PowerShell console as administrator
2. Install and import the PowerShell module `microsoft365dsc` using the following command:
```powershell 
install-module microsoft365dsc -allowclobber -force
import-module microsoft365dsc
```
3. In PowerShell navigate to the directory containing the blueprint configuration PS1 file and the `configurationdata.psd1` file
4. Create a Desired State Configuration local configuration manager certificate:
```powershell 
Set-M365DSCAgentCertificateConfiguration
```
5. Validate that a certificate was created and assigned to the local configuration manager by matching the output of step 4 with `CertificateID` from the following:
```powershell 
Get-DscLocalConfigurationManager
```
6. Export the certificate into the folder containing the blueprint configuration PS1 file and the `configurationdata.psd1` file
```powershell
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
```powershell
Set-WSManQuickConfig
install-module microsoft365dsc -allowclobber -force
import-module microsoft365dsc
```
3. In PowerShell navigate to the directory containing the blueprint configuration PS1 file and the `configurationdata.psd1` file. This `configurationdata.psd1`  file is the same for all other DSC scripts supplied
4. In the PowerShell console, initiate the desired blueprint configuration PS1 and supply the required values, this will create the MOF file for the local configuration manager. If the script requires parameters, the required values are located in the `param` section of the DSC script to be ran. Some DSC scripts may not require parameters, refer to the `Blueprint configuration scripts` table for an overview. The following is an example for the identity configuration DSC script `identity_dsc.ps1`. In this example, the required values are: Global Admin credentials; organisation name; organisation prefix; and trusted IPs (in CIDR format).
```powershell 
$pscredential = get-credential
$organisationname = "OrganisationName" # note - organisation internet domain name
$organisationprefix = "OrganisationAcronym"
$technicalcontactemail = "Organisation.Helpdesk"  # note - recipient part of address
$technicalcontactphone ="+612111222"
$trustedIPs = @("X.X.X.X/X","X.X.X.X/X") # note - for one CIDR range use @("X.X.X.X/X")
.\identity_dsc.ps1 -globaladminaccount $pscredential -trustedip $trustedIPs -organisation $organisationname -organisationprefix $organisationprefix -technicalcontactemail $technicalcontactemail -technicalcontactphone $technicalcontactphone 
```
5. **This step will enforce the DSC configuration**. Run the following command within the PowerShell console:
```powershell 
Start-DSCConfiguration M365TenantConfig -wait -verbose -force
```
6. Validate the successful deployment by viewing changes in the appropriate Admin console (e.g Azure Active Directory or M365 compliance)
7. In the PowerShell console, run the following command to ensure the configuration is no longer enforced via the Desired State Configuration Local Configuration Manager
```powershell
Remove-DscConfigurationDocument -stage current
```
8. Repeat the process for other DSC scripts, each can be ran without overlapping configuration

### Deployment troubleshooting

The following provides some common errors that might be encountered using the M365DSC and suggested remedy steps.

Additional guidance and troubleshooting information can be found in the M365DSC [wiki](https://github.com/Microsoft/Microsoft365DSC/wiki).

**Issue 1 - error:** *Undefined DSC resource 'M365DSCResource'. Use Import-DSCResource to import the resource. Resource 'break.glass_priv1@domain does not exist or one of its  queried reference-property objects are not present.*

**Issue 1 - remedy:** Ensure that  the emergency access admin account (break glass) identities exist prior to running the DSC script

- Check or create each emergency access admin account manually as per the the [Platform - ABAC ](../../as-built-as-configured/platform#emergency-access-admin-accounts)

**Issue 2 - error:** *Undefined DSC resource 'M365DSCResource'. Use Import-DSCResource to import the resource.*

**Issue 2 - remedy:** Confirm the M365DSC module versioning installed on the system and load the desired module

- The module version defined in the DSC script does not match the version installed on the system. Either remove the `-version` parameter on the `Import-DscResource` command or change the version to match the version installed. 
- If there are multiple versions of the M365DSC, import the required version
  ```powershell
  Get-Module -Name Microsoft365DSC -ListAvailable |Select Version #list available versions
  Import-Module -FullyQualifiedName @{ModuleName = "Microsoft365DSC"; ModuleVersion = "version"} #import desired version
  ```

**Issue 3 - error:** *Running the Get-Command command in a remote session reported the following error: Processing data for a remote command failed with the following error message: The SSL connection cannot be established*

**Issue 3 - remedy:** Ensure the local WinRM agent is configured and listening on HTTPS

- Confirm WinRM is setup for HTTPS. For further information, see [How to configure WINRM for HTTPS - Microsoft Docs](https://docs.microsoft.com/en-us/troubleshoot/windows-client/system-management-components/configure-winrm-for-https)
- Confirm inbound Firewall port is open on 5586
  ```powershell
  $port=5986
  netsh advfirewall firewall add rule name="Windows Remote Management (HTTPS-In)" dir=in action=allow protocol=TCP localport=$port
  ```

**Issue 4 - error:** *You cannot perform the requested operation, required scopes are missing in the token*

**Issue 4 - remedy:** Ensure that the required API permissions for the Microsoft Graph for PowerShell are granted admin consent

- Connect with the Microsoft Graph API and grant admin consent when prompted
  ```powershell
  Connect-MgGraph -TenantId "Azure AD tenant id guid" -Scopes "Application.Read.All,Group.Read.All,Directory.Read.All,Policy.Read.All,Policy.Read.ConditionalAccess,Policy.ReadWrite.ConditionalAccess,RoleManagement.Read.All,RoleManagement.Read.Directory,User.Read.All"
  ```

## Microsoft 365 Desired State Configuration auditing procedure

The following procedure is to **audit** a configuration using Microsoft 365 Desired State Configuration.

### Prerequisites 

- An account with Global Administrator privileges
- A device with PowerShell Remoting enabled, internet access, and PowerShell 4.0 or greater installed
- An account with a PowerShell execution policy of unrestricted

### Procedure

The process to audit a tenant based on the blueprints Microsoft 365 Desired State Configuration (M365DSC) is as follows:

1. Download [baseline.ps1](../files/automation/baseline.txt)
2. Within `baseline.ps1`, update any organisation specific items (e.g. all areas where organisation name is specified)
3. Open a PowerShell console as administrator and navigate to the directory containing the `baseline.ps1` file
4. Run the following command in the PowerShell console:
```powershell
$outputlocation = "\Blueprint_Comparison $($(Get-Date).ToString(`"yyyy-MM-dd hhmmss`")).html"
Assert-M365DSCBlueprint -BluePrintUrl .\baseline.ps1 -OutputReportPath $outputlocation
```
5. Review the html report to evaluate the configuration against the blueprint

### Blueprint audit baseline

Blueprint audit baselines are available below:

- [baseline.ps1](../files/automation/baseline.txt)

The above baseline requires updating to include organisation specific details prior to use.