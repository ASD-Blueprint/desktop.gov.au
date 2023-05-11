---

---

# WDAC policy creation

<p id="date-and-time">9 minutes to read - 30 March 2023</p>

The following guide includes instructions on how to generate the Windows Defender Application Control (WDAC) configuration for all implementation types. 

Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

## Application control

WDAC utilises one or more policies to define what drivers and files are whitelisted to run on a Windows 10 devices. Multiple policies can only be leveraged when the policies are deployed utilising Microsoft Endpoint Manager and the Application Control Configuration Service Provider (CSP). Multiple policies will not work on machines pre 1903. When multiple policy files are leveraged they fall into one of the following scenarios:

- **Enforce and Audit Side-by-side** - A base policy configured to enforce and a second base policy configured to audit. This is used to test a new base policy prior to enforcement.
- **Multiple Base Policies Enforced** - Two or more base policies configured in enforce mode. For applications to run they must be whitelisted in both.
- **Supplementary Policies** - A base policy and one or more supplementary policies in enforce mode. For applications to run they must only be whitelisted in one of the policies.  

These WDAC policies can be signed to ensure that they cannot be tampered with. Details on signing policy can be found in the [WDAC policy - policy signing](#wdac-policy---policy-signing) section.

Once implemented, the procedure to remove one or more WDAC policies can be found in the [WDAC policy - removal](#wdac-policy---removal) section.

### WDAC policy - baseline

The base policy contains the whitelist for the operating system, base applications, and drivers. It can be generated based upon an existing image (i.e a gold image) or leveraging a predefined Microsoft baseline.  

![WDAC base policy](../img/WDAC_base.svg#center "WDAC Base Policy creation should utilise a gold image where available else a Microsoft baseline. The Managed Installer function should also be leveraged where a managed installer is in use in the environment")

#### Gold image base

A base policy generated from a gold image machine should only be utilised where all Windows 10 machines in the environment utilise the same image. The procedure to generate the policy is as follows:

1. Deploy the image to a standard organisational Windows 10 device.
2. Ensure all standard software is installed (e.g. Microsoft Office).
3. Verify all drivers are signed (This can be completed utilising sigverif)
4. Using an administrative PowerShell session run
```powershell
$PolicyPath=$env:userprofile+"\Desktop\"
$PolicyName="GoldImagePolicy"
$WDACPolicy=$PolicyPath+$PolicyName+".xml"
New-CIPolicy -Level Publisher -FilePath $WDACPolicy -UserPEs 3> CIPolicyLog.txt -Fallback hash
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
Set-RuleOption -FilePath $WDACPolicy -Option 17 # Enable Allow Supplemental
Set-RuleOption -FilePath $WDACPolicy -Option 19 # Enable Dynamic Code Security
```
7. Deploy the file locally in audit mode and validate no additional files require whitelisting
```powershell
$WDACPolicyCIP=$PolicyPath+"{<Policy GUID>}.cip"
ConvertFrom-CIPolicy $WDACPolicy $WDACPolicyCIP
Copy-Item $WDACPolicyCIP "<OS Volume>\Windows\System32\CodeIntegrity\CIPolicies\Active\{<Policy GUID>}.cip"
```
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
$WDACPolicy = {path to policy file}
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
8. [Deploy the file globally](#wdac-policy---deployment) 

### WDAC policy - supplementary policy

Supplementary policies expand on the base policy and allow for whitelisting to be targeted to users and/or groups. Supplementary policies can contain both allow and deny rules. A supplementary policy is a base policy until it is linked as a supplementary policy to another base policy. 

Supplementary policies will not work on machines pre 1903. If you are deploying to pre 1903 machines they must be merged into the base policy. [Merge policy](#merging-with-the-base-policy) instructions are available further below.

#### Whitelisting an application

Whitelisting of an application utilising WDAC can be completed utilising a number of methods including Hash (ACSC recommended), file path, and certificate based. Depending on the application, the chosen method of whitelisting may change. Hash whitelisting offers the highest degree of security however it increases the management overhead associated with whitelisting. 

If the managed installer option within the base policy is enabled, whitelisting of applications deployed via the managed installer is not required. 

![WDAC whitelisting application policy](../img/WDAC_Intune.svg#center "Where additional applications are required they should leverage the hash of the files or the publisher file name and version. Once whitelisted they must be linked to the base policy and deployed as a supplementary policy")

Post identification of the appropriate whitelisting method, the following procedure is used to whitelist the application:

1.  Within an administrative PowerShell session navigate to the install directory of the application
2.  Run the following command
```powershell
$whitelistlevel = {the chosen method of whitelist e.g. hash}
$Outputlocation = {the path to output the policy file}
$fallbacklevel = {the backup method of whitelist e.g. publisher}
$directory = {the path to be scanned}
New-CIPolicy -Level $whitelistlevel -FilePath $Outputlocation -Fallback $fallbacklevel  -ScanPath $directory -UserPEs
```
3. Convert the new base policy to a supplementary policy.

#### Whitelisting errors in the event log

Applications which are not whitelisted will be logged in the code integrity event log on execution. These applications can be whitelisted using the following procedure:

1.  Within an administrative PowerShell session run the following command
```powershell
$whitelistlevel = {the chosen method of whitelist e.g. hash}
$Outputlocation = {the path to output the policy file}
$fallbacklevel = {the backup method of whitelist e.g. publisher}
New-CIPolicy -Level $whitelistlevel -FilePath $Outputlocation -Fallback $fallbacklevel  -audit -UserPEs
```
2. Convert the new base policy to a supplementary policy.

#### Linking to the base policy

To convert a base policy to a supplementary policy of another base policy they must be linked. Upon linking the policyID of the supplementary policy will be set to a new GUID. This new guid is required when deploying the supplementary policy via Microsoft Endpoint Manager. 

The procedure to link the policies is as follows:

- Using an administrative PowerShell session run
```powershell
$SupWDACPolicy = {path to the supplementary policy file}
$SupWDACPolicyName = {Name of the supplementary policy}
$WDACPolicy = {path to the policy file}
$WDACPolicyID = {base policy id available within the base policy PolicyID tags}
Set-CIPolicyIdInfo -FilePath $SupWDACPolicy -PolicyName $SupWDACPolicyName -SupplementsBasePolicyID $WDACPolicyID -BasePolicyToSupplementPath $WDACPolicy
```

#### Merging with the base policy

To merge base policies together the following procedure is used:

- Using an administrative PowerShell session run
```powershell
$InitialCIPolicy= {Path to the first base policy}
$AuditCIPolicy= {Path to the new base policy}
$MergedCIPolicy= {location to output the policy}
Merge-CIPolicy -PolicyPaths $InitialCIPolicy,$AuditCIPolicy -OutputFilePath $MergedCIPolicy
```

### WDAC policy - policy signing

Prior to deployment of the WDAC policy it can be signed using an internal Certificate Authority code signing certificate or a purchased code signing certificate.

The procedure to sign the policy is as follows:

- Using an administrative PowerShell session run
```powershell
Add-SignerRule -FilePath {Path to the XML policy file} -CertificatePath {Path to exported .cer certificate} -Kernel -User -Update
ConvertFrom-CIPolicy -XmlFilePath {Path to the XML policy file} -BinaryFilePath `Binary output location`
{Path to signtool.exe} sign -v /n {Certificate Subject name} -p7 . -p7co 1.3.6.1.4.1.311.79.1 -fd sha256 {Binary policy location}
```

### WDAC policy - deployment

The above policies are deployed through Microsoft Endpoint Manager - Intune (Intune). The deployment configuration is available within the [Intune Configuration](../../as-built-as-configured/intune-configuration#agency-wdacbasepolicy) section.

### WDAC policy - removal

#### Signed policies

The procedure to remove signed policies is as follows:
1. Create a new signed policy with `6 Enabled: Unsigned System Integrity Policy` enabled.
2. Deploy the policy and remove the previous policy from deployment.
3. Reboot the machine.
4. Disable the WDAC deployment method.
5. On the machine verify the following files have been deleted (if they have not then delete them)
  - `OS Volume\Windows\System32\CodeIntegrity\{Policy GUID}.cip`
  - `EFI System Partition\Microsoft\Boot\{Policy GUID}.cip`
6. Reboot the machine.

#### Unsigned policies

The procedure to remove unsigned policies is as follows:
1. Disable the WDAC deployment method. 
2. On the machine verify the following files have been deleted (if they have not then delete them)
  - `OS Volume\Windows\System32\CodeIntegrity\{Policy GUID}.cip`
  - `EFI System Partition\Microsoft\Boot\{Policy GUID}.cip`
3. Reboot the machine.

### Appendix 1: Sample supplementary policies

- [Example Microsoft Recommended Block Rules Supplemental Policy](../files/abac/wdac-msft-rec-block-sup.xml)
- [Example Git whitelisting supplementary policy based on publisher and falling back to hash](../files/abac/wdac-allow-git-sup.xml)
