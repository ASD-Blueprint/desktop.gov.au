---

---

# Windows Firewall rules import

<p id="date-and-time">3 minutes to read - 30 March 2023</p>

The following guide provides instructions to automate the import of Windows Firewall rules directly into Intune Windows Firewall rule policies from a reference computer.

The following is guidance from the Australian Cyber Security Centre (ACSC) for software firewalls:

- A software firewall is implemented on workstations and servers to limit both inbound and outbound network connections (**ISM** security control 1416)

Simply enabling and enforcing the Windows Firewall through policy does not cover the full intent of the ISM control. It is recommended that a reference computer is used to capture the required rules to allow normal Windows desktop function, and also include any additional Windows Firewall rules (inbound and outbound) that may be required for agency specific applications and services.

This process uses the [Endpoint security firewall rule migration tool for Microsoft Intune](https://docs.microsoft.com/en-us/mem/intune/protect/endpoint-security-firewall-rule-tool) which is a PowerShell script provided by Microsoft.

{:.no_toc}
## Rule import

The import process requires a clean Windows desktop which will be used as reference computer to export the firewall rules. The Windows build version should be the same as the target operating system. This reference machine is ideally a virtual machine, however if it is physical please ensure it is clear of any OEM or third-party software. The reference machine should not be Intune enrolled or Azure AD joined. 

The administrator performing this technical instruction requires the `Intune Administrator` Azure AD role.

1. Login to the device with local administrator privileges.
2. Download the [migration tool](https://docs.microsoft.com/en-us/mem/intune/protect/endpoint-security-firewall-rule-tool) and extract the contents to a local directory.
3. Open a PowerShell console as an administrator, navigate to the directory where the migration tool was extracted to and execute the following:
   ```powershell
   .\Export-FirewallRules.ps1 -includeLocalRules
   ```
   - Note, if the ruleset is being migrated from an existing group policy applied to a hybrid device, omit the `-includeLocalRules` parameter on the script which will only import rules found that are applied by group policy.
4. The script will prompt for a profile name. Provide a profile name, this will be the name of the Windows Firewall policy.
   - Note, as the total limit of individual rules allowed per policy is 150, the rules will be spread over a number of policies (e.g. policy-0, policy-1)
5. The script will prompt for Azure AD credentials. Provide the appropriate credentials and grant permission when prompted.
6. Navigate to `Microsoft Endpoint Manager > Firewall` and review the policies created. Review the rules and remove any unwanted or duplicates.
7. Assign the policy to a test group of machines prior to assigning to all devices.
