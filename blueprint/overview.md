---
layout: page
title: Solution overview
---

This overview covers the blueprint's purpose, its components, and design considerations and decisions.

## Purpose of the blueprint

The Protected Utility blueprint empowers agencies to provide their workforce with secure, flexible, and mobile solutions. The blueprint is designed with a security focus. It uses native Microsoft technologies that are integrated and provide a quality end-user experience.

## Where to start

This overview is suitable for all users as a starting point.

The blueprint is made up of another 3 main artefacts:

* **Platform design** – All supporting components for the Windows 10, iOS and Microsoft 365 (including Microsoft Endpoint Manager)
* **Client devices design** – Windows 10 and iOS components only
* **Microsoft 365 design** – Exchange Online, SharePoint Online, OneDrive for Business and Teams.

For each component in the solution, the blueprint artefacts provide:

* a brief description of the component 
* decision points 
* the decision itself 
* a justification for that decision.

Example as-built-as-configured (ABAC) documents detail specific technical configurations, which include the settings and values of an environment based on the blueprint. 

The use of placeholders like 'agency.gov.au' and 'tenant-name' are used in the ABAC documents where appropriate. The ABAC documents do not provide justification for individual settings. Two sets of ABAC documents cover the differences between configuring cloud and hybrid solutions.

## Blueprint components

The blueprint provides the information, rationale and configuration settings to allow an agency to implement the following components:

* **Cloud identity** – Azure Active Directory configuration, including Multi-Factor Authentication (MFA) and conditional access, allows log in from anywhere and appropriate security policies to be applied
* **Microsoft 365** – Configuration of Exchange Online, SharePoint Online, Microsoft Teams, Whiteboard, Forms and OneDrive for Business allowing cloud-based file storage
* **Device management** – Management of security and configuration profiles for enrolled devices (includes testing against security baselines and confirmation of security compliance)
* **Applications** – Delivery and configuration of applications appropriate to the user
* **Security stack** – Security configuration of Office 365 and endpoint devices to implement Essential Eight strategies
* **Autopilot deployment** – Configuration of Autopilot allows for automated deployment (and redeployment when required) of devices with no user interaction
* **Support** – A flexible support model with system administration and role-based access control, whether the support is carried out by in-house staff, third party contractors or a managed service provider.

An agency can choose to deviate from the blueprint on any technology, licensing requirement, security aspect, platform or design decision. Deviations may affect the agency's security posture and will affect the blueprint's security documentation. 

## Design considerations

### Implementation type

The blueprint includes guidance for cloud native and hybrid deployments (implementation types). It can also be for staged deployments to leverage hybrid configurations as a transition step to cloud native transformation. DTA can assist agencies in developing strategic roadmaps for transition.

Considerations for implementation often include whether an agency has or requires:

* Microsoft Exchange servers on premises.
* an on-premises SharePoint instance.
* an on-premises identity management system.
* multiple active directories 
* significant investment in on-premises infrastructure with serviceable life.

A hybrid implementation can use Microsoft Endpoint Configuration Manager (MECM) or Microsoft Endpoint Manager - Intune (Intune) for client management, depending on the agency's cloud maturity. 

Blueprint artefacts provide guidance on integration between MECM and Intune for hybrid deployments. Agencies with existing infrastructure can migrate device management from MECM to Intune with no impact to the agency's existing cyber security posture.

### Agency classification

The blueprint is based on a principle of 'engineered to Protected' to enhance the cyber security postures of adopting agencies. It is suitable for agencies aiming for Protected and below.

The blueprint design and configuration at Protected assumes the agency has available the licencing level of Microsoft 365 E5, or the equivalent Microsoft 365 E3 with Microsoft 365 E5 security and compliance add-ons.

The VSA 4 Common Cloud Commitment consists of:

* Windows 10 E3.
* Office 365 E3.
* Enterprise Mobility and Security E3.
* Productivity server licences (Exchange Server, SharePoint Server, Lync/Skype Server).
* Office Device licences.

At a minimum, Microsoft recommends the following licensing in addition to the VSA 4 Common Cloud Commitment to satisfy Protected level requirements:

* Microsoft 365 E5 Security.
* Microsoft 365 E5 Compliance.

Agencies that implement the blueprint at a Protected level will need to configure some components differently to enable connectivity to supporting systems. 

Components that transfer Protected information outside of an agency's environment include:

* a GovLink mail gateway
* Information management and protection
* collaboration components

### GovLink

GovLink enables secure communication between Commonwealth entities across public infrastructure. GovLink provides secure, encrypted and trusted communication across the internet. This allows the Commonwealth to transmit and receive information up to the security classification of Protected. More information is available at [GovLink](https://www.finance.gov.au/government/whole-government-information-communications-technology-services/govlink).

Protected email must be sent and received over GovLink. There is no native solution to allow a direct interface between the Office 365/Exchange Online environment and GovLink.

DTA can provide further advice to agencies and reference sites of how other Commonwealth entities have achieved this connection.

### Information management

Each agency determines information management approaches specific to its operational requirements. 

The following information management tools are available within the blueprint:

* **OneDrive** is for data relevant to the individual user, automatically synchronised to the cloud so it is available anywhere and backed up. This data can be personal data that is not relevant or required to be shared with other team members.
* **Microsoft Teams** is for data to be shared in a read-write format with work colleagues and/or external guests. Every team member has read-write access. People who are not members of the team do not need access. Besides document collaboration team members can chat, use voice and video call, share screens, and attend online meetings.
* **SharePoint Online** is for data that needs to be published internally. Users may need to access the data in a read-only manner. At this point the data should be moved to SharePoint. SharePoint by default allows for document owners (full control), contributors (read-write) and visitors (read-only). Internal staff and external guests may be added to any of these groups according to the permission they need. 

### Information protection

Information protection covers the application of labels to documents and emails according to the classification of the content.

Within the blueprint there are two options for labelling documents and emails. These are:

* Microsoft Information Protection (including Azure Information Protection (AIP) capabilities that form part of the broader Microsoft Information Protection capabilities)
* a third-party application.

Microsoft sensitivity labels can be used for labelling documents and emails.

Sensitivity labels create a protective marking within the message header. When combined with Exchange mail flow rules, the subject can be modified to prepend text in the subject according to the sensitivity.

AIP (with the unified labelling client) can offer labelling capabilities outside of the native Microsoft 365 products. The blueprint favours using native M365 labelling capabilities where possible. Labels created in Microsoft Information Protection can be utilised with AIP.

Microsoft Information Protection labelling does not offer a method to format email headers in a manner that is fully compliant with the requirements of the Protective Security Policy Framework (PSPF):

* Sensitivity labels, Exchange Transport rules or DLP, cannot set the `X-Protective-Marking` header *Origin* parameter prescribed in the PSPF.
* When using DLP or Auto Labeling policies to set a  `X-Protective-Marking` header:
  * certain characters prescribed in the PSPF are not supported (such as `:` and `,`) 
  * a character limit of 64 characters is the maximum
  * Exchange Transport rules do not have these character limitations
* When downgrading a sensitivity label, the downgrade cannot be prevented, only forcing the user to justify the downgrade. 
* Sensitivity labels are not available within calendar invites.

Future releases of the blueprint will capture developments on these limitations.

The blueprint provides guidance about applying Microsoft sensitivity labels. The unified labelling client that underpins Microsoft sensitivity labels is built into Office 365. The sensitivity labels are available for use in:

* emails (thick client and Outlook Web Access and mobile platforms)
* documents (all office documents, including the web versions of the applications).

Labelling for Microsoft Teams has recently been released for general availability and will be covered in the next release of the blueprint. This will ensure that labels can be applied to Microsoft Teams, Microsoft 365 groups and SharePoint sites.

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

### Secure system administration

Most hybrid agencies should already have a secure administration model with set of policies and procedures. For example, this may include privileged access workstations (PAW) and jump host (sometimes referred to as bastion host, jump box or jump server) environments that provide a secure and resilient boundary for the administration of critical assets.

Cloud native environments usually do not have a jump host environment or PAW. However, such a solution could be hosted within M365/Azure utilising components of the blueprint to provide a secure administration environment for the agency.

PAW and jump host solutions for cloud native may comprise of:

* **Separate credentials** are provided for non-privileged and privileged duties
* **Hardened PAW** (Windows operating system) enrolled into Intune and coupled with conditional access polices to provide a zero trust entry point into the associated cloud apps to administer. Local administrative privileges should be restricted on the PAW, it is used to access the jump server solution or direct access to cloud admin portals
* **Web filtering system** to restrict privileged accounts to the set of agency approved admin portals only. This product could be a risk assessed cloud platform or built as an infrastructure as a service server. The web filtering solution should be mandatory on the jump host or PAWs. [Tenant restrictions](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/tenant-restrictions) should be implemented to prevent misuse or data exfiltration to other Microsoft tenancies
* **Virtual jump host** solution may be built leveraging Azure Virtual Desktop (AVD) session hosts, which seamlessly provides Multifactor Authentication (MFA) through Conditional Access policies. This jump host may be the trusted location where admin portals are used, as well as a secure place to administer other hybrid assets. Network security groups can be used to restrict management traffic flows to these jump hosts only
* **Restriction of management traffic flows** limited to only critical assets should be implemented where possible. This could be achieved by utilising the Windows Defender native firewall functionality, web filtering, network security groups on cloud hosted jump hosts, and Conditional Access policies.

Review the Australian Government Information Security Manual [(ISM) controls for systems management](https://www.cyber.gov.au/acsc/view-all-content/publications/secure-administration) to assist with implementing a secure administration model.

### Zero Trust security model

"Zero Trust" is an IT security concept where the organisation does not automatically trust the user, the device they're on, or the network location they're connecting from.

Implementing Zero Trust lowers the agency's risk profile and increases business agility as new devices and applications can be adopted faster.

The blueprint supports the Zero Trust concept through M365 features like requiring device enrolment with conditional access and enforcing Azure Active Directory Identity Protection. Agencies should take a risk based approach when utilising features such as trusted IP locations, use these as a last resort when implementing a trust model.

For more information, review [Microsoft's Zero Trust Security Model and Framework](https://www.microsoft.com/en-au/security/business/zero-trust).

### Virtual private network

If you are considering the use of Apple iOS devices such as iPhones or iPads, [ACSC's Security Configuration Guide for Apple iOS 14 Devices](https://www.cyber.gov.au/acsc/view-all-content/publications/security-configuration-guide-apple-ios-14-devices) requires the use of a virtual private network to protect in transit communication. The blueprint includes [suggested per app VPN configuration](/blueprint/abac/intune-configuration.html#ios-per-app-vpn), however the selection and configuration of a VPN server is the responsibility of the agency. Please ensure you leverage a risk based approach in the selection and configuration of a VPN server.

## Security

The blueprint's security artefacts enable an agency to conduct a security assessment. Relevant documentation an agency can develop from the artefacts include:

* a system security plan
* a system security plan annex (previously referred to as the Statement of Applicability - SOA)
* a security risk management plan
* an incident response plan
* standard operating procedures.

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
Device standard operating environment deployment | Configured | Device configuration will be deployed, and ongoing configuration will be controlled using Intune or Microsoft Endpoint Configuration Manager (MECM).
Workstation policy management | Configured | Workstation policy will be deployed and managed using Microsoft Intune or MECM.
Windows updates and patches | Configured | Configuration of Windows and third-party updates will be managed using Microsoft Intune or MECM.
