---
layout: page
title: Solution overview
---

This overview covers the blueprint's purpose, its components, and design considerations and decisions. It also maps blueprint solutions to Essential Eight security strategies.

## Purpose of the blueprint

The Protected Utility blueprint empowers agencies to provide their workforce with secure, flexible, and mobile solutions. The blueprint is designed with a security focus. It uses native Microsoft technologies that are integrated and provide a quality end-user experience.

## Where to start

This overview is suitable for all users as a starting point.

The blueprint is made up of another 3 main artefacts:

* **Platform design** – All supporting components for the Windows 10, iOS and Office 365 (including Intune)
* **Client devices design** – Windows 10 and iOS components only
* **Office 365 design** – Exchange Online, SharePoint Online, OneDrive for Business and Teams.

For each component in the solution, the blueprint artefacts provide:

* a brief description of the component 
* decision points 
* the decision itself 
* a justification for that decision.

Example as-built-as-configured (ABAC) documents detail specific technical configurations, wich include the settings and values of an environment based on the blueprint. 

The use of placeholders like 'agency.gov.au' and 'tenant-name' are used in the ABAC documents where appropriate. The ABAC documents do not provide justification for individual settings. Two sets of ABAC documents cover the differences between configuring cloud and hybrid solutions.

## Blueprint components

The blueprint provides the information, rationale and configuration settings to allow an agency to implement the following components:

* **Cloud identity** – Azure Active Directory configuration, including Multi-Factor Authentication (MFA) and conditional access, allows log in from anywhere and appropriate security policies to be applied
* **Office 365** – Configuration of Exchange Online, SharePoint Online, Microsoft Teams and OneDrive for Business allowing cloud-based file storage
* **Device management** – Management of security and configuration profiles for enrolled devices (includes testing against security baselines and confirmation of security compliance)
* **Applications** – Delivery and configuration of applications appropriate to the user
* **Security stack** – Security configuration of Office 365 and endpoint devices to implement Essential Eight strategies
* **Autopilot deployment** – Configuration of Autopilot allows for automated deployment (and redeployment when required) of devices with no user interaction
* **Support** – A flexible support model with system administration and role-based access control, whether the support is carried out by in-house staff, third party contractors or a managed service provider.

An agency can choose to deviate from the Blueprint on any technology, licensing requirement, security aspect, platform or design decision. Deviations may affect the agency's security posture and will affect the blueprint's security documentation. 

## Design considerations

### Implementation type

The blueprint includes guidance for cloud native and hybrid deployments (implementation types). It can also be for staged deployments to leverage hybrid configurations as a transition step to cloud native transformation. DTA can assist agencies in developing strategic roadmaps for transition.

Considerations for implementation often include whether an agency has or requires:

* Microsoft Exchange servers on premises.
* an on-premises SharePoint instance.
* an on-premises identity management system.
* multiple active directories 
* significant investment in on-premises infrastructure with serviceable life.

A hybrid implementation can use Microsoft System Center Configuration Manager (SCCM) or Intune for client management, depending on the agency's cloud maturity. 

Blueprint aretfacts provide guidance on integration between SCCM and Intune for hybrid deployments. Agencies with existing infrastructure can migrate device management from SCCM to Intune with no impact to the agency's existing cyber security posture.

### Agency classification

The Blueprint is based on a principle of 'engineered to Protected' to enhance the cyber security postures of adopting agencies. It is suitable for agencies aiming for Protected and below.

Agencies that implement the Blueprint at a Protected level will need to configure some some components differently to enable connectivity to supporting systems. 

Components that transfer Protected information outside of an agency's environment include:

* a GovLink mail gateway
* Information management and protection
* collaboration components

### GovLink

GovLink enables secure communication between Commonwealth entities across public infrastructure. GovLink provides secure, encrypted and trusted communication across the internet. This allows the Commonwealth to transmit and receive information up to the security classification of Protected. More information is available at [GovLink](https://www.finance.gov.au/government/whole-government-information-communications-technology-services/govlink).

Protected email email must be sent and received over GovLink. There is no native solution to allow a direct interface between the Office 365/Exchange Online environment and GovLink.

DTA can provide further advice to agencies and reference sites of how other Commonwealth entities have achieved this connection.

### Information management

Each agency determines information management approaches specific to its operational requirements. 

The following information management tools are available within the Blueprint:

* **OneDrive** is for data relevant to the individual user, automatically synchronised to the cloud so it is available anywhere and backed up. This data can be personal data that is not relevant or required to be shared with other team members.
* **Microsoft Teams** is for data to be shared in a read-write format with work colleagues and/or external guests. Every team member has read-write access. People who are not members of the team do not need access. Besides document collaboration team members can chat, use voice and video call, share screens, and attend online meetings.
* **SharePoint Online** is for data that needs to be published internally. Users may need to access the data in a read-only manner. At this point the data should be moved to SharePoint. SharePoint by default allows for document owners (full control), contributors (read-write) and visitors (read-only). Internal staff and external guests may be added to any of these groups according to the permission they need. 

### Information protection

Information protection covers the application of labels to documents and emails according to the classification of the content.

Within the Blueprint there are 2 options for labelling documents and emails. These are:

* Azure Information Protection (AIP) and Microsoft sensitivity labels (Microsoft products that form part of the broader Microsoft Information Protection capabilities available under E5 licensing) 
* a third-party application.

AIP and Microsoft sensitivity labels can both be used for labelling documents and emails.

Sensitivity labels create a protective marking within the message header. When combined with Exchange mail flow rules, the subject can be modified to prepend text in the subject according to the sensitivity.

AIP labelling does not offer a method to format email headers in a manner consistent with the requirements of the Protective Security Policy Framework (PSPF). This means it needs additional configuration.

Email gateway rules are available in the network configuration ABAC artefact. 

For organisations that send Protected emails through a GovLink mail gateway, the labelling product, and the gateway itself, must support the inspection of the email headers.

For organisations that do not need to send Protected emails (and do not need to send emails through GovLink), the blueprint recommends Microsoft sensitivity labels. However, agencies should decide for themselves on an approach that:

* meets the requirements of the Protective Security Policy Framework (PSPF)
* best suits operational requirements. 

The blueprint provides guidance about applying Microsoft sensitivity labels. The unified labelling client that underpins Microsoft sensitivity labels is built into Office 365. The sensitivity labels are available for use in:

* emails (thick client and Outlook Web Access)
* documents (all office documents, including the web versions of the applications).

It’s not possible to force some clients to apply sensitivity labels to documents, even if this option is selected in the policy. This is a known issue and current workarounds include:

* assigning a default label (users must then select the correct label)
* using a third-party product to provide labelling and classifications in line with the PSPF
* undergoing a business change and user training program to ensure that classifications are applied. 

Future releases of the blueprint will capture developments on this issue.

Labelling for Microsoft Teams has recently been released for general availability and will be covered in the next release of the blueprint. This will ensure that labels can be applied to Microsoft Teams, Office 365 Groups and SharePoint sites.

### Collaboration

The blueprint enables cross-agency collaboration between 2 consenting agencies using Teams, SharePoint Online and Planner.

The Teams application provides the following collaboration functionality using several Microsoft supporting products:

* individual and group chat/instant messaging
* individual and group voice call
* individual and group video call
* voicemail
* document collaboration
* screen and application sharing
* online meetings
* email-enabled channels
* organisation chart
* planning.

Collaboration between organisations assessed and operating at the same security level is straightforward. Collaboration between organisations operating on networks that have been assessed at different security levels presents extra considerations and risk. 

The extra risks and considerations include:

* personnel clearances
* physical security requirements and the secure creation, storage and destruction of physical artefacts. 

Considerations need to be assessed for security risk on a case-by-case basis.

Collaboration is initially controlled by lists of allowed domains. Individual users from those allowed external domains can then be invited individually to participate into Microsoft Teams as guests. Details about configuration are covered in the Platform design and in the Office 365 as-built-as-configured artefact.

### Secure internet gateway

This blueprint does not include design information for a Secure Internet Gateway (SIG). A SIG is listed as a requirement in the Protective Security Policy Framework (PSPF) [Robust ICT Systems](https://www.protectivesecurity.gov.au/information/robust-ict-systems/Pages/default.aspx). 

## Security

The blueprint's security artefacts enable an agency to conduct a security assessment. Relevant documentation an agency can develop from the artefacts include:

* a system security plan
* a system security plan annex (previously referred to as the Statement of Applicability - SOA)
* a security risk management plan
* an incident response plan
* standard operating pocedures.

## Design decisions

The blueprint is developed against a set of high-level design decisions to enable a secure user experience. 

The following tables describe the design decisions applicable to all agencies and implementation types, and any additional design decisions specific to cloud native or hybrid implementations.

Design Decisions for all agencies and implementation types.

Decision point | Design decision | Justification
--- | --- | ---
Azure AD Identity Protection | Configured | Azure AD Identity Protection is a tool that allows organisations to accomplish 3 key tasks:<br><br>* automate the detection and remediation of identity-based risks.<br>* investigate risks using data in the portal.<br>* export risk detection data to a utility for further analysis.
Azure AD Multi-Factor Authentication (MFA) | Configured | Azure AD MFA will be enabled to meet ACSC hardening and Essential Eight compliance. This is discussed in the Platform design artefact.
Enterprise collaboration | Teams and SharePoint Online | Teams and SharePoint Online will be used for enterprise collaboration.
Enterprise email | Exchange Online | Exchange Online and Microsoft Outlook will be deployed for the enterprise email solution.
Enterprise file storage | SharePoint Online / OneDrive | SharePoint Online and OneDrive will be deployed for enterprise file storage.
Conditional access policies | Configured | Conditional access allows control of the devices and apps that allow connection to email and company resources depending on location.
Workstation | Government-issued device | Only government-issued devices will be configured.
Remote access | Limited access depending on the device | Conditional access policies will limit what users can do while logging in remotely from an unmanaged (non-government issued) device - such as view and edit in the browser without an ability to download or print
Mail gateway | Preferred | For agencies connecting to GovLink, a mail gateway is the preferred method. For agencies that do not require email connectivity to GovLink a mail gateway is still the preferred method for mail transmission but may not be required.
Internet connectivity | Direct internet connectivity or VPN with internet gateway | A forced tunnel VPN with central internet gateway provides the highest level of audit security for internet traffic. For agencies who do not require centralised auditing and logging of internet traffic, direct internet connectivity is suitable.

Addition design decisions for cloud native implementations.

Decision point | Design decision | Justification
--- | --- | ---
Identity | Azure Active Directory (Azure AD) | Azure AD will be the identity source. No on-premises active directory exists.
Device standard operating environment deployment | Configured | Device configuration will be deployed using Microsoft Autopilot and ongoing configuration will be controlled using Intune.
Workstation policy management | Configured | Workstation policy will be deployed and managed using Microsoft Intune.
Windows updates and patches | Configured | Configuration of Windows and third-party updates will be managed using Microsoft Intune.
Internet connectivity | Direct internet connectivity or VPN with internet gateway | An internet gateway is the preferred method for agencies to access the internet. A forced tunnel VPN with central internet gateway provides the highest level of audit security for internet traffic. For agencies who do not require centralised auditing and logging of internet traffic, direct internet connectivity may be considered.

Addition design decisions for hybrid implementations

Decision point | Design decision | Justification
--- | --- | ---
Identity | Active directory | Active directory is the identity source.
Azure AD Connect | Configured | Azure AD Connect is required for hybrid implementations of the solution.
Device standard operating environment deployment | Configured | Device configuration will be deployed, and ongoing configuration will be controlled using Intune or SCCM.
Workstation policy management | Configured | Workstation policy will be deployed and managed using Microsoft Intune or SCCM.
Windows updates and patches | Configured | Configuration of Windows and third-party updates will be managed using Microsoft Intune or SCCM.

## Essential eight maturity

The Essential Eight represents security guidance from the ACSC. It prioritises mitigation strategies to assist organisations in protecting their systems against a range of cyber threats.

This section summarises the blueprint's maturity level against the Essential Eight. It is important to note that any modifications outside of the blueprint will require a gap analysis to determine the security implications.

The following table describes how the blueprint addresses each strategy identified by ACSC, and the maturity level attainable by implementing this blueprint.

Essential Eight design decisions

ACSC strategy | Solution | Jusitification | Maturity level
--- | --- | --- | ---
Application control | [Windows Defender Application Control](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/windows-defender-application-control) (WDAC) managed by Intune. | Application control will prevent all non-approved applications (including malicious code) from executing.<br><br>WDAC provides all the features of AppLocker with additional functionality and simpler management from within Intune. It is also possible to implement the latest recommended block rules from Microsoft. | 3
Patch applications | Intune or SCCM used to patch applications on a regular basis. | As direct internet connectivity has been stipulated, applications will be set to auto update.<br><br>Firmware can be updated if an executable file is packaged and deployed via Intune.<br><br>Note: 0.1 Full Time Equivalent (FTE) minimum is estimated to cover the work required. | 3
Patch operating systems | Windows Update for Business and Intune or SCCM to be used for patching desktop operating systems. | Multiple software update rings provide a staged approach to updates.<br><br>Reporting is included.<br><br>Firmware can be update if it is an executable file, deployed via Intune.<br><br>Note: 0.1 FTE minimum is estimated to cover the work required. | 3
Configure Microsoft Office macro settings | Hardening to be implemented as per the ACSC via Intune. | Only signed macros will be enabled via Intune policies. | 3
User application hardening | Hardening to be implemented as per the ACSC via Intune. | Web advertisements that are java or Flash based will be blocked. 'Other' web adverts will not be controlled.<br><br>Web browsers are configured to block or disable support for Flash content for Internet Explorer and Edge.<br><br>Web browsers are configured to block Java from the Internet for Internet Explorer and Edge. | 2
Restrict administrative privileges | Intune, Azure AD and Privileged Identity Manager (PIM) controls. | Restriction of administrative privileges for admin accounts will prevent adversaries using these accounts to gain full access to information and systems.<br><br>Windows Defender Application Control policies are applied to admin users to prevent the ability to run email and web browsers.<br><br>Admin users will log on with their normal accounts and then authenticate to the Office 365 tenant for management using their privileged account to administer the system. | 3
Multi-factor authentication | Multi-factor authentication solution is provided by Azure MFA for all remote users and administrators. | Stronger user authentication makes it harder for adversaries to access sensitive information and systems.<br><br>MFA is enabled for all with a soft token.<br><br>Hard tokens would require an Infrastructure-as-a-Service (IaaS) server in Azure and will not be implemented. | 2
Daily backups | Data redundancy and availability configured with native tools. | Configuration settings of Office 365 and Intune are backed up through the ABACs.<br><br>Documents, Desktops and Pictures are redirected to OneDrive using Windows Known Folders providing a backup of data to the cloud.<br><br>Office 365 data is replicated by Microsoft to at least two geographically dispersed data centres.<br><br>Exchange Online has a recover deleted items from server option.<br><br>Cloud based files have Recycle bin and Restore options in addition to retention policies.<br><br>Retention policies are created that ensure that data is retained forever for:<br><br>* Exchange<br>* SharePoint<br>* OneDrive<br>* Office 365 Groups<br>* Skype for Business<br>* Exchange Public Folders<br>* Teams channel messages<br>* Teams chats<br><br>Workstation configuration is stored in Intune (AutoPilot rebuild) or SCCM task sequence. | 2
