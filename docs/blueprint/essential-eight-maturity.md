---

---

# Essential Eight maturity

<p id="date-and-time">14 minutes to read - 30 March 2023</p>

The Essential Eight represents security guidance from the ACSC. It prioritises mitigation strategies to assist organisations in protecting their systems against a range of cyber threats.

This section summarises the blueprint's maturity level against the Essential Eight. It is important to note that any modifications outside of the blueprint will require a gap analysis to determine the security implications.

The previous Essential Eight assessment for the DTA Protected Utility blueprint was performed in June 2020 against that version of the maturity model. This was documented in the [Solution Overview (June-2020)](https://github.com/govau/desktop.gov.au/blob/187a2f71f36578c2abc92d2072bda3119dafca43/blueprint/overview.md#essential-8-maturity).

Since then, both the blueprint and Essential Eight have been updated by the DTA and the ACSC respectively. Additional functionality and capabilities have been added to the blueprint, and additional controls to the maturity model. Maturity level 0 has also been re-introduced to the Essential Eight.

The assessments presented in this document includes Windows 10 and the supporting Microsoft 365 (M365) services as described in the blueprint. These assessments do not include iOS or any server infrastructure used by agencies to support the blueprint (e.g. in a hybrid deployment). The exclusion of iOS from this assessment is due to the following:

> "The Essential Eight are designed to protect Microsoft Windows-based internet-connected networks. While the Essential Eight may be applied to cloud services and enterprise mobility... it was not primarily designed for such ... In such cases, organisations should consider alternative guidance provided by the ACSC" - [Essential Eight Maturity Model (Oct-2021)](https://www.cyber.gov.au/acsc/view-all-content/publications/essential-eight-maturity-model).

The ACSC has provided an assessment of iOS devices against the Essential Eight in the [Security Configuration Guide - Apple iOS 14 Devices (Oct-2021)](https://www.cyber.gov.au/acsc/view-all-content/publications/security-configuration-guide-apple-ios-14-devices). 

Server infrastructure used by agencies to support hybrid deployments of the blueprint are not included in this assessment as they are bespoke to those agencies. It is recommended that agencies operating a hybrid deployment of the blueprint perform their own Essential Eight assessments of supporting server infrastructure.

| Mitigation Strategy                                                                         | Maturity Level |
| :------------------------------------------------------------------------------------------ | :------------: |
| [Application control](#application-control)                                                 | 3              |
| [Patch applications](#patch-applications)                                                   | 3              |
| [Configure Microsoft Office macro settings](#configure-microsoft-office-macro-settings)     | 3              |
| [User application hardening](#user-application-hardening)                                   | 3              |
| [Restrict administrative privileges](#restrict-administrative-privileges)                   | 3              |
| [Patch operating systems](#patch-operating-systems)                                         | 3              |
| [Multi-factor authentication](#multi-factor-authentication)                                 | 2              |
| [Regular backups](#regular-backups)                                                         | N/A            |

Each of the individual assessments against the Essential Eight are described in detail in the following sections. These sections detail the rationale for each maturity level assessment, agency responsibilities, and recommendations to achieving greater maturity levels where applicable.

## Application control

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">3</span>
</div>

Windows Defender Application Control (WDAC) is used for application control on Windows 10 devices within the blueprint. WDAC restricts the execution of executables, software libraries, scripts, drivers, and applications to an approved set, including code which runs in the system core (kernel). WDAC is managed via Microsoft Endpoint Manager (MEM) or via Group Policies, allowing applications deployed via MEM to also be added to the allowed list automatically.

WDAC cannot manage control panel applets. Restricting control panel applets to an approved set is achieved in the blueprint through MEM configuration profiles or Group Policy.

WDAC can also implement Microsoft's latest [recommended block rules](https://docs.microsoft.com/en-au/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules) and [driver block rules](https://docs.microsoft.com/en-au/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-driver-block-rules).

WDAC policies are also configured to enforce Constrained Language Mode (CLM) for Windows PowerShell, enforce the use of drivers signed by Windows Hardware Quality Labs (WHQL) and produced by partners who have an Extended Verification certificate, and block unsigned and unapproved scripts, MSIs, Universal Windows Store Applications, and .NET applications.

Defender for Endpoint (which is enabled as part of the blueprint) can be used to centrally query WDAC events on all connected devices. Microsoft provides sample queries to assist with monitoring and alerting based on [WDAC events](https://docs.microsoft.com/en-au/windows/security/threat-protection/windows-defender-application-control/querying-application-control-events-centrally-using-advanced-hunting).

For additional information on WDAC within the blueprint, see [Windows Defender Application Control](../client-devices#windows-defender-application-control).

As all required technical controls are implemented by the blueprint, the maturity level has been assessed at 3. Note, this assessment assumes agencies undertake the recommendations below.

### Recommendations

To achieve and maintain maturity level 3 it is recommended agencies validate their WDAC rule sets at least annually. In addition, agencies are expected to review application control events via either Defender for Endpoint or a third-party centralised logging platform to detect and action cyber security events.

## Patch applications

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">3</span>
</div>

Microsoft (first party) application updates are automatically deployed and installed on blueprint devices via MEM. This includes the Edge internet browser and Microsoft Office productivity suite. By default, the blueprint does not include any third-party applications. If required, MEM can also be used to deploy third-party application packages, including manually packaged patches.

Microsoft Defender for Endpoint provides an [automated vulnerability management capability](https://docs.microsoft.com/en-au/microsoft-365/security/defender-endpoint/next-gen-threat-and-vuln-mgt?view=o365-worldwide). Application vulnerabilities, such as missing patches, are reported to the Microsoft 365 Defender portal and email alerts can be configured to notify cyber security personnel of newly detected vulnerabilities.

The blueprint does not include any unsupported or legacy applications.

As all required technical controls are implemented by the blueprint, the maturity level has been assessed at 3*. Note, this assessment assumes agencies undertake the recommendations presented below.

\* If agencies do not license and configure Defender for Endpoint as recommended by the blueprint, their maturity will be reduced to 0 unless alternative third-party vulnerability scanner is used.

### Recommendations

It is recommended that agencies monitor the success of application patching, via either MEM or Defender for Endpoint, to ensure patches are applied within the target deployment timeframe (e.g., within 48 hours for exploitable vulnerabilities).

If agencies deploy third-party applications to blueprint devices, they are responsible for ensuring patches are deployed within the required timeframes to maintain maturity level 3. Agencies should consider enabling automatic update features for applications or deploy an automated third-party application patching solution.

## Configure Microsoft Office macro settings

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">3</span>
</div>

The blueprint restricts macro execution to only those signed by a trusted digital certificate in accordance with the [ACSC Microsoft Office Macro Security](https://www.cyber.gov.au/acsc/view-all-content/publications/microsoft-office-macro-security) guidance. This includes blocking Microsoft Office macros originating from the internet and preventing standard users from modifying macro security settings in all Microsoft Office applications. The blueprint does not provide any recommendations for the use of trusted locations.

Microsoft Defender Antivirus and Defender for Endpoint provide antivirus scanning of all Microsoft Office file types, including embedded macros. This leverages the [Antimalware Scan Interface](https://www.microsoft.com/security/blog/2018/09/12/office-vba-amsi-parting-the-veil-on-malicious-macros/) (AMSI) to enable inspecting macros at runtime. In addition, the [Safe Documents](https://docs.microsoft.com/en-au/microsoft-365/security/office-365-security/safe-docs) feature of Defender for Office 365 is also enabled as part of the blueprint to scan documents that are opened in Protected View.

Microsoft Office macros are blocked from making Win32 API calls using Attack Surface Reduction (ASR) rules as per the ACSC [Windows 10](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations) and [Microsoft Office](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-office-365-proplus-office-2019-and-office-2016) hardening guides.

Defender for Endpoint centrally stores Endpoint Detection & Response (EDR) logs for all Windows 10 blueprint devices, which includes the execution of macro-enabled documents and resulting behaviours (such as attempts to make Win32 API calls).

As all required technical controls are implemented by the blueprint, the maturity level has been assessed at 3*. Note, this assessment assumes agencies undertake the recommendations presented below.

\* If agencies do not license and configure Defender for Endpoint as recommended by the blueprint, their maturity will be reduced to 2 unless a central logging facility is implemented to retrieve macro execution logs from the registry.

### Recommendations

If users do not have a valid business requirement, it is recommended that macros are disabled for them. The blueprint provides an additional MEM policy that blocks macros for all Microsoft Office applications that agencies can deploy for those users that do not require macros.

It is recommended that agencies review their list of trusted publishers at least annually. Agencies should also review macro execution events for any indications of malicious activity.

## User application hardening

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">3</span>
</div>

The blueprint does not include the deployment of Java, so cannot process Java from the internet.

Microsoft Edge provides limited web advertisement blocking from the internet, which is configured by MEM. However, this functionality is very limited and is not considered an effective control. To compensate for this, the blueprint provides guidance on the deployment of third-party web advertisement blocking add-ons for Edge via MEM.

Internet Explorer 11 is removed from the Windows 10 blueprint SOE.

The ASR rules are configured as per the ACSC [Windows 10](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations) and [Microsoft Office](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-office-365-proplus-office-2019-and-office-2016) hardening guides to prevent Microsoft Office from creating child processes, creating executable content, injecting code into other processes, and activating Object Linking and Embedding (OLE) packages.

No third-party PDF software is included in the blueprint. Microsoft Edge is configured as the default PDF reader and hardened as per ACSC guidance.

Standard users are not able to change security-related settings in Microsoft Office or Edge as these are configured by MEM.

.NET Framework 3.5 (and all previous) versions are not included in the Windows 10 blueprint SOE. PowerShell version 2.0 is also removed from the SOE.

WDAC is configured so that PowerShell runs in Constrained Language Mode (CLM).

PowerShell script block logging is enabled via MEM in accordance with the ACSC [Windows 10](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations) hardening guide. Defender for Endpoint also centrally stores EDR logs for all Windows 10 blueprint devices, which includes PowerShell script execution and resultant events.

As all required technical controls are implemented by the blueprint, the maturity level has been assessed at 3*. Note, this assessment assumes agencies undertake the recommendations presented below.

\* If agencies do not license and configure Defender for Endpoint as recommended by the blueprint, their maturity will be reduced to 2 unless a central logging facility is implemented to retrieve PowerShell logs from Windows 10 devices.

### Recommendations

Agencies should review Defender for Endpoint alerts and logs to detect unauthorised PowerShell execution attempts.

## Restrict administrative privileges

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">3</span>
</div>

The blueprint includes two types of users, standard and privileged users. Standard users are assigned mailboxes and can access the internet from Windows 10 devices, but do not have elevated privileges on those devices. Privileged users are not assigned an Office 365 license and therefore do not have mailboxes assigned to their accounts. AppLocker is configured by MEM to prevent privileged users from launching web browsers or mail clients from blueprint devices.

The local administrator account is disabled as per the ACSC Windows 10 hardening guide. The local administrator account is renamed, the password set randomly, and the account disabled. The local administrator group is enabled and contains the Azure Active Directory (Azure AD) Global Admins and Device Admins roles. These roles are configured for Azure AD Privileged Identity Management (PIM), providing Just-in-Time (JIT) administration.

Azure AD PIM Access Reviews provide automation to assist in the revalidation of privileged accounts and membership of Azure AD privileged roles. Azure AD does not provide a native capability to disable account after a period of inactivity. The blueprint provides a [technical guide](../../as-built-as-configured/admin-disable-inactive-users) to implement this capability via the Graph API and Azure AD PowerShell modules. Note, at the time of writing the Graph API to query an account property is still in [beta](https://docs.microsoft.com/en-au/azure/active-directory/reports-monitoring/howto-manage-inactive-user-accounts).

All logins to blueprint devices are recorded and centralised to Defender for Identity. All privileged actions performed in the Microsoft 365 and Azure portals are also logged to the Audit Log, including changes to privileged accounts and groups. User activities for the Office 365 apps are also recorded in the [Audit Log](https://docs.microsoft.com/en-au/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide).

Windows Defender Credential Guard is enabled in the Windows 10 blueprint SOE (on supported devices).

Although not within the specific design scope of the blueprint, it provides general guidance for [secure system administration](../solution-overview#secure-system-administration) for agencies leveraging the blueprint. This includes recommendations for the use of separate credentials for privileged and non-privileged users, deployment of hardened Privileged Access Workstations (PAWs) and jump boxes, use of a web filtering system, and the restriction of management traffic flows.

As all required technical controls that are in scope of the blueprint are implemented, the maturity level has been assessed at 3*. Note, this assessment assumes agencies have implemented a compliant secure system administration solution and undertake the recommendations presented below.

\* If agencies have not deployed a separate privileged operating environment in accordance with the recommendations of the blueprint, then the maturity is capped at 0.

### Recommendations

Agencies should ensure that only the specific privileges required for a role are assigned to privileged accounts, leveraging Azure AD PIM where possible. Agencies are expected to review changes to privileged accounts and groups via either Defender for Identity or a third-party centralised logging platform to detect and action cyber security events.

## Patch operating systems

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">3</span>
</div>

Windows 10 operating system updates are automatically deployed and installed on blueprint devices using Windows Update for Business which is configured via MEM. For hybrid deployments, patches may be deployed to blueprint devices via Microsoft Endpoint Configuration Manager (MECM) or Windows Server Update Services (WSUS) rather than downloaded from the internet directly.

Microsoft Defender for Endpoint provides an automated [vulnerability management capability](https://docs.microsoft.com/en-au/microsoft-365/security/defender-endpoint/next-gen-threat-and-vuln-mgt?view=o365-worldwide). Operating system vulnerabilities, such as missing patches, are reported to the Microsoft 365 Defender portal and email alerts can be configured to notify cyber security personnel of newly detected vulnerabilities.

The Windows 10 blueprint SOE is built using the 21H2 General Availability release of Windows 10.

The blueprint does not include any unsupported or legacy operating systems.

As all required technical controls are implemented by the blueprint, the maturity level has been assessed at 3*. Note, this assessment assumes agencies undertake the recommendations presented below.

\* If agencies do not license and configure Defender for Endpoint as recommended by the blueprint, their maturity will be reduced to 0 unless a third-party vulnerability scanner is deployed.

### Recommendations

It is recommended that agencies monitor the success of operating system patching, via either MEM or Defender for Endpoint, to ensure patches are applied within the target deployment timeframe (e.g., within 48 hours for exploitable vulnerabilities).

## Multi-factor authentication

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">2</span>
</div>

M365 products are considered as third-party internet-facing services that process and store both sensitive and non-sensitive data for agencies using the blueprint.

Access to all M365 products for blueprint users requires an Azure Multi-Factor Authentication (Azure MFA) prompt to be completed using the Microsoft Authenticator app (something users have) along with their Azure AD password (something users know). The Azure MFA prompt can be completed by either responding to a push notification within the app, or by entering a six-digit code presented by the app.

Privileged users are also required to complete an Azure MFA prompt when authenticating at either a web portal (e.g. Microsoft 365 admin center or Microsoft Azure) or when connecting to a service via PowerShell.

The Microsoft Authenticator app authenticating to Azure AD is not considered verifier impersonation resistant. Microsoft recommend using a FIDO2 security key, smart card, or Windows Hello for Business with hardware Trusted Platform Model (TPM) to implement [verifier impersonation resistant authentication](https://docs.microsoft.com/en-au/azure/active-directory/standards/nist-authenticator-assurance-level-3).

All authentication attempts to M365 services, including Azure MFA status, are logged within the Azure AD sign-in log. Defender for Identity and Microsoft Cloud App Security (MCAS) provide additional capabilities for agencies using the blueprint to detect unauthorised authentication attempts.

As the blueprint's implementation of MFA is not considered verifier impersonation resistant, the maturity level is 2.

### Recommendations

It is recommended agencies review Azure AD sign-in logs and MCAS alerts to detect potentially malicious authentication attempts.

Agencies seeking to reach maturity level 3 should consider alternative authentication methods not currently included in the blueprint.

## Regular backups

<div class="maturity">
    <span class="maturity-label">Maturity level: </span>
    <span class="maturity-rating">N/A</span>
</div>

The assessment of regular backups against the blueprint has been descoped and is now reported as Not Assessed. This is a result of the blueprint not including agency backup capabilities, and to reflect the need for agencies to implement their own backup strategy tailored to their unique business continuity requirements.

Microsoft provide the [Shared Responsibility Model](https://docs.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) to assist customers understand what responsibilities are held by Microsoft as the provider of cloud services, and which remain the responsibility of the agency using these services. Responsibility for '*Information and data*' is described as '*always retained by the customer*'. Therefore, agencies are responsible for the protection of data including backup and restoration.