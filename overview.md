---
layout: page
title: Solution Overview
---

The Digital Transformation Agency (DTA) developed the Protected Utility Blueprint to enable Australian Government Agencies to transition to a secure and collaborative Microsoft 365 platform. The solution is underpinned by proven technologies from the Microsoft Modern Workplace solution (Microsoft 365 including Office 365, Enterprise Mobility + Security, and Windows 10). The Blueprint design is delivered as three distinct documents:

* **Platform Design** – All supporting components for the Windows 10, iOS and Office 365 components of the design including Intune.
* **Client Devices Design** – Windows 10 and iOS components only.
* **Office 365 Design** – Exchange Online, SharePoint Online, OneDrive for Business and Teams.

The Blueprint is accompanied by Configuration Guides and Security Documentation designed to the Australian Cyber Security Centre (ACSC) PROTECTED requirements for Information and Communication Technology (ICT) systems handling and managing Government information. These artefacts provide a standard and proven approach for Microsoft 365, aimed to fast track the adoption of the Microsoft Modern Workplace experience.

The Blueprint contains guidance for best practice deployment incorporating advice from the Australian Government Information Security Manual (ISM), Microsoft, the ACSC Essential Eight and the ACSC hardening guidelines for Microsoft Windows 10 and iOS. There are two types of deployment method covered in this Blueprint:

* **Cloud Native** – Where an agency assumes an architecture that is based on consuming the Microsoft 365 offerings as a service, with no additional investment in on-premises infrastructure, and
* **Hybrid** – Where an agency adopts the Microsoft 365 offerings while continuing to leverage some new or existing on-premises infrastructure in a ‘hybrid’ configuration. In many cases, design decisions are common across both deployment methods. Where specific elements differ for cloud and hybrid deployments, this Blueprint provides the common components applicable to all deployments and then offer further guidance for each deployment types.

DTA manages a community of practice for adoptors, practitioners, and other interested parties. The community provides a direct channel to DTA as well as fosters discussion between community members. To keep up to date with Blueprint development and discussion, please visit [desktop.gov.au](https://desktop.gov.au/).

## Document Structure

The Solution Overview document is the first in the Blueprint series and is designed for non-technical audiences who have a general understanding of what they want to achieve from their IT system. This document provides a high-level overview, some of the key design decisions and Essential Eight compliance and maturity level.

A summary of this document can be found in Table 2.

Heading | Description
--- | ---
Purpose of the Blueprint | This section describes how the Blueprint can accelerate the implementation of a secure Microsoft Modern Workplace solution
Where to Start | This section describes how an organisation should consume the Blueprint
Design Considerations | Factors affecting the design decisions, particularly the intended security level of the environment and understanding reliance on existing infrastructure (hybrid) or moving to a cloud native architecture
Security | This section provides an overview of the security documentation that is provided
Design Decisions | This section describes high-level design decisions underpinning the Blueprint
Essential 8 Maturity | This section describes the Blueprint’s Essential Eight compliance and rationale

Where appropriate, guidance has been split into separate documents targeting either Cloud Native or Hybrid implementations.

The complete Blueprint series includes:

* Solution Overview
* Platform Design
* Office 365 Design
* Client Devices Design
* As Built As Configured documents for both Coud Native and Hybrid environments
  * Client Devices
  * Conditional Access Policies
  * Office 365
  * Platform
* As Built As Configured documents for Cloud Native environments
  * Intune Applications
  * Intune Compliance
  * Intune Configuration
  * Intune Enrolment
  * Intune Security Baselines
  * Intune Software Updates
* As Built As Configured documents for Hybrid environments
  * Intune Applications for iOS Devices
  * Intune Applications for Windows Devices
  * Intune Compliance for iOS Devices
  * Intune Compliance for Windows Devices
  * Intune Configuration for iOS Devices
  * Intune Configuration for Windows Devices
  * Intune Enrolment for iOS Devices
  * Intune Enrolment for Windows Devices
  * Intune Security Baselines for Windows Devices
  * Network Configuration
* Security documents
  * Incident Response Plan
  * Security Risk Management Plan
  * System Security Plan
  * System Security Plan (Annex)
* Standard operating procedures

## Purpose of the Blueprint

The Blueprint empowers agencies to provide their workforce with secure, flexible, and mobile solutions by pairing the Blueprint with mobile devices (laptops and iPhones) and onsite printing capabilities.

The Blueprint is designed with a security focus and employs native Microsoft technologies that provide seamless integration and improved end-user experience. Third-party software recommendations are provided where appropriate for Government use.

## Where to start

The Solution Overview (this document) provides a general overview and is suitable for all audiences.

To fully understand the Blueprint, the following design documents are provided:

* **Platform Design** – All supporting components for the Windows 10, iOS and Office 365 components of the design including Intune.
* **Client Devices Design** – Windows 10 and iOS components only.
* **Office 365 Design** – Exchange Online, SharePoint Online, OneDrive for Business and Teams.

For each component in the solution, these design documents provide:

* a brief description of the components, 
* the decision points that are required, 
* the decision itself and 
* the justification for that decision.

Example As-Built As-Configured (ABAC) documents are also provided, which detail the specific technical configurations, including the settings and values, of an environment based on the Blueprint. The use of place holders like ‘agency.gov.au’ and ‘tenant-name’ are used in the ABAC documents where appropriate. The ABAC documents do not provide justification for individual settings. Due to differences in configuration between the cloud and hybrid solutions, two sets of ABAC documents are provided. The list of ABAC documents is covered above in Section 1.2 Document Structure.

## Blueprint Components

The Blueprint is designed to be deployed by inhouse agency IT staff, third-party integrators, or a managed service provider as a new deployment, with minimal requirement for further design decisions or design documentation. The Blueprint provides the information, rationale and configuration settings to allow an agency to implement the below components to achieve a secure desktop.

* **Cloud Identity** – Azure Active Directory configuration including Multi-Factor Authentication (MFA) and Conditional Access allowing log in from anywhere and appropriate security policies to be applied
* **Office 365** – Configuration of Exchange Online, SharePoint Online, Microsoft Teams and OneDrive for Business allowing cloud-based file storage
* **Device Management** – Management of security and configuration profiles for enrolled devices including the testing against security baselines and confirmation of security compliance. Some endpoint management of iOS devices due to the limitations of not utilising supervisor mode in addition to Windows 10 devices
* **Applications** – Delivery and configuration of applications appropriate to the user
* **Security Stack** – Security configuration of Office 365 and endpoint devices to achieve the Essential Eight compliance shown at the end of this document
* **Autopilot deployment** – Configuration of Autopilot to allow for automated deployment (and redeployment when required) of devices with no user interaction
* **Support** – A flexible support model where system administration and Role Based Access Control is provided regardless of whether the support is carried out by in house staff, third party contractors or a managed service provider

An agency may deviate from the Blueprint on any technology, licencing requirements, security, platform or design decisions noting that this may affect the security posture and will affect the security documentation set that complements this Blueprint. 

## Design Considerations

### Implementation Type

The Blueprint includes guidance for cloud native and hybrid deployments, which can also be for staged deployments to leverage hybrid configurations as a transition step to cloud native transformation. DTA can assist agencies in developing strategic roadmaps for transition, however high-level considerations for cloud and hybrid deployments often include decisions of whether an agency:

* requires Microsoft Exchange servers on premises.
* requires an on-premises SharePoint instance.
* requires an on-premises identity management system.
* has multiple active directories 
* has significant investment in on-premises infrastructure with serviceable life.

A hybrid implementation can choose to enable SCCM or Intune for client management depending on the cloud maturity level of the agency. This Blueprint provides guidance on integration between SCCM and Intune for hybrid deployments however agencies with existing infrastructure may decide to migrate device management from SCCM to Intune with no impact to an agency’s existing cyber security posture.

### Agency Classification

The Blueprint is based on a principle of ‘engineered to PROTECTED’ to enhance the cyber security postures of adopting agencies. It is suitable for agencies aiming for PROTECTED and below.

For agencies that wish to implement the Blueprint at a PROTECTED level, some components are required to be configured differently to enable connectivity to supporting systems. These components are required for the transfer of PROTECTED information outside of an agency’s environment, however their absence does not diminish the cyber security postures of agencies implementing this Blueprint below a PROTECTED level, and include:

* GovLink mail gateway
* Information Protection
* Collaboration components

### GovLink
GovLink enables secure communication between Commonwealth entities across public infrastructure. GovLink (formerly FedLink) provides secure, encrypted and trusted communication across the internet. This allows the Commonwealth to transmit and receive information up to the security classification of PROTECTED. More information is available at [finance.gov.au/government/whole-government-information-communications-technology-services/govlink](https://www.finance.gov.au/government/whole-government-information-communications-technology-services/govlink)

PROTECTED email must be sent and received over GovLink. DTA is currently working with Microsoft and the Department of Finance to simplify an agency's ability to achieve this, however at the time of writing there is no native solution to allow a direct interface between the Office 365/Exchange Online environment and GovLink. 

DTA can provide further advice to agencies and reference sites of how other Commonwealth entities have achieved this functionality. You can also keep up to date on GovLink and general Blueprint matters at our community at [desktop.gov.au](https://desktop.gov.au/).

### Information Management

Information Management approaches will be determined by each agency depending on their specific operational requirements. The following information management tools are available within the Blueprint, with a description of how each could be used in an agency implementation:

* **OneDrive** – Used for data that is relevant to the individual, automatically synchronised to the cloud so it is available anywhere and backed up. This data is likely broadly personal data which is not relevant or required to be shared with other team members.
* **Microsoft Teams** – Data which is relevant to be shared in a Read/Write format with work colleagues and potentially external guests should be stored in Microsoft Teams. Everyone that is a team member has read write access. People that do not need access are not a member of the team. In addition to document collaboration team members are able to chat, voice and video call, share screens and attend online meetings.
* **SharePoint Online** – Optionally if data is required to be published internally, users may need to access the data in a Read Only manner. At this point the data should be moved to SharePoint. SharePoint by default allows for document owners (full control), contributors (read write) and visitors (read only). Internal staff and external guests may be added to any of these groups according to the permission they require. 

### Information Protection

Information protection covers the application of labels to documents and emails according to the classification of the content of the document or email.

Within the Blueprint there are two options for labelling documents and emails. These are:

* Azure Information Protection (AIP) and Microsoft Sensitivity Labels, Microsoft products which form part of the broader Microsoft Information Protection capabilities available under E5 licensing; or 
* A third-party application

For organisations that send PROTECTED emails through a GovLink mail gateway, the labelling product, as well as the gateway itself, must support the inspection of the email headers. At the time of writing, Microsoft AIP labelling does not natively offer a method to format email headers in a manner consistent with the requirements of the PSPF and as such, additional configuration is needed.

DTA is currently working with Microsoft to investigate this further. DTA can provide further advice to agencies and reference sites of how other Commonwealth entities have developed solutions to enable formatting consistent with the requirements of the PSPF. Future iterations of this Blueprint will provide more detail.

AIP and Microsoft Sensitivity Labels are used for labelling documents and emails. Sensitivity labels create a protective marking within the message header and when combined with Exchange mail flow rules, the subject can be modified to prepend text in the subject according to the sensitivity.

Email gateway rules are available in the Network Configuration ABAC documents. These rules are based on regular expressions and are easily adaptable to vendor specific email gateways.

For organisations that do not need to send PROTECTED emails (and do not need to send emails through GovLink), the use of Microsoft sensitivity labels is recommended however agencies should understand the level to which this approach meets the requirements of the PSPF, and make a decision on the approach that best suits operational requirements. This Blueprint provides guidance on the application of Microsoft sensitivity labels. The unified labelling client that underpins Microsoft sensitivity labels is built into Office 365 and the sensitivity labels are available for use in:

* **Emails** - thick client and Outlook Web Access (OWA).
* **Documents** - all office documents including the web versions of the applications.
* **Teams** - Labelling for Teams has recently been released for general availability and will be covered in the next release of the Blueprint. This will ensure that labels can be applied to Microsoft Teams, Office 365 Groups and SharePoint sites.

**Note**: At the time of writing (June 2020) there is a [known issue](https://support.office.com/en-us/article/known-issues-with-sensitivity-labels-in-office-b169d687-2bbd-4e21-a440-7da1b2743edc) where with some tenants it is not possible to force clients to label documents even though this option is selected in the policy. Current work arounds include assigning a default label (users must then select the correct label), using a third party product to provide labelling and classifications in line with the PSPF or undergoing a business change and user training program to ensure that classifications are applied. Developments in this space will be monitored and updated as required.

### Collaboration

The Blueprint enables cross agency collaboration between two consenting agencies using Microsoft Teams, SharePoint Online and Planner.

Collaboration between organisations assessed and operating at the same security level is relatively straightforward, while collaboration between organisations operating on networks that have been assessed at different security levels presents additional considerations and risk. The additional risks and considerations are similar to those that already exist for organisations today, with activities such as personnel clearances, physical security requirements and the secure creation, storage and destruction of physical artefacts. These considerations will need to be security risk assessed on a case by case basis.

Collaboration is initially controlled by whitelisting allowed domains. Individual users from those whitelisted external domains can then be invited individually to participate into Teams as guests. Details of how this should be configured is covered in the DTA - Platform Design document and again in the Office 365 ABAC document.

The Microsoft Teams application provides the following configurable collaboration functionality using several Microsoft supporting products, which can be configured to support cross-agency collaboration between two or more consenting agencies.

* Individual and Group Chat / Instant Messaging
* Individual and Group Voice Call
* Individual and Group Video Call
* Voicemail
* Document collaboration both within Teams and also via SharePoint Online
* Screen and Application Sharing
* Online Meetings
* Email enabled Channels
* Organization Chart
* Planner

### Secure Internet Gateway

This Blueprint does not include design information for a Secure Internet Gateway (SIG). A SIG is listed as a requirement in the PSPF (Protective Security Policy Framework), Section 11, Part C.4 for all Non-Corporate Commonwealth Entities (NCCEs) and best practice for all Commonwealth Corporate Entities (CCEs). At the time of writing, agencies must follow existing policies relating to SIG services. More information is available at [https://www.cyber.gov.au/irap/asd-certified-gateways](https://www.cyber.gov.au/irap/asd-certified-gateways)

## Security

Accompanying the Blueprint is a set of security documentation to enable an agency to conduct a security assessment. These include:

* System Security Plan (SSP)
* Statement of Applicability  (SoA)
* Security Risk Management Plan (SRMP)
* Incident Response Plan (IRP)
* Standard Operating Procedures (SOPs)

## Design Decisions

The Blueprint is developed against a set of high-level design decisions to enable a secure Microsoft Modern Workplace user experience. 

The tables below describe the design decisions applicable to all agencies and implementation types, as well as any additional design decisions specific to cloud native or hybrid implementations.

Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Azure AD Identity Protection | Configured | Azure AD Identity Protection is a tool that allows organisations to accomplish three key tasks: {::nomarkdown}<ul><li>{:/}Automate the detection and remediation of identity-based risks.{::nomarkdown}</li><li>{:/}Investigate risks using data in the portal.{::nomarkdown}</li><li>{:/}Export risk detection data to a utility for further analysis.{::nomarkdown}</li></ul>{:/}
Azure AD Multi-Factor Authentication (MFA) | Configured | Azure AD MFA will be enabled to meet ACSC hardening and Essential Eight compliance. This is discussed in the Platform Design document.
Enterprise Collaboration | Microsoft Teams and SharePoint Online | Microsoft Teams and SharePoint Online will be utilised for Enterprise Collaboration.
Enterprise Email | Exchange Online | Exchange Online and Microsoft Outlook will be deployed for the Enterprise Email solution.
Enterprise File Storage | SharePoint Online / OneDrive | SharePoint Online and OneDrive will be deployed for Enterprise File Storage.
Conditional Access Policies | Configured | Conditional Access allows control of the devices and apps that allow connection to email and company resources depending on location.
Workstation | Government issued device | Only government issued devices will be configured.
Remote Access | Limited access depending on the device | Conditional Access policies will limit what users can do while logging in remotely from an unmanaged (non-government issued) device, such as view and edit in the browser without an ability to download or print
Mail Gateway | Preferred | For agencies connecting to GovLink, a mail gateway is the preferred method. For agencies that do not require email connectivity to GovLink a mail gateway is still the preferred method for mail transmission, but may not be required.
Internet Connectivity | Direct Internet Connectivity or VPN with Internet Gateway | A forced tunnel VPN with central internet gateway provides the highest level of audit security for internet traffic. For agencies who do not require centralised auditing and logging of internet traffic, direct internet connectivity is suitable.

Addition Design Decisions for cloud native implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Identity | Azure Active Directory (Azure AD) | Azure AD will be the identity source. No on-premises Active Directory exists.
Device Standard Operating Environment (SOE) Deployment | Configured | Device configuration will be deployed using Microsoft Autopilot and ongoing configuration will be controlled using Intune.
Workstation Policy Management | Configured | Workstation policy will be deployed and managed using Microsoft Intune.
Windows Updates and Patches | Configured | Configuration of Windows and third-party updates will be managed using Microsoft Intune.
Internet Connectivity | Direct Internet Connectivity or VPN with Internet Gateway | An internet gateway is the preferred method for agencies to access the internet. A forced tunnel VPN with central internet gateway provides the highest level of audit security for internet traffic. For agencies who do not require centralised auditing and logging of internet traffic, direct internet connectivity may be considered.

Addition Design Decisions for hybrid implementations

Decision Point | Design Decision | Justification
--- | --- | ---
Identity | Active Directory | Active Directory is the identity source.
Azure AD Connect | Configured | Azure AD Connect is required for hybrid implementations of the solution.
Device Standard Operating Environment (SOE) Deployment | Configured | Device configuration will be deployed and ongoing configuration will be controlled using Intune or SCCM.
Workstation Policy Management | Configured | Workstation policy will be deployed and managed using Microsoft Intune or SCCM.
Windows Updates and Patches | Configured | Configuration of Windows and third-party updates will be managed using Microsoft Intune or SCCM.

## Essential 8 Maturity

The Essential Eight represents security guidance from the ACSC that prioritises a list of mitigation strategies to assist organisations in protecting their systems against a range of cyber threats.

This section summarises the Blueprint’s maturity level against the Essential Eight. It is important to note that any modifications outside of the Blueprint will require a gap analysis to determine the security implications.

Table 8 describes how the Blueprint addresses each strategy identified by ACSC, and the maturity level attainable by implementing this Blueprint. 

Essential Eight Design Decisions

ACSC Strategy | Solution | Jusitification | Maturity Level
--- | --- | --- | ---
Application Whitelisting | [Windows Defender Application Control](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/windows-defender-application-control) (WDAC) managed by Intune. | Application whitelisting will prevent all non-approved applications (including malicious code) from executing. WDAC provides all the features of AppLocker with additional functionality and simpler management from within Intune. It is also possible to implement the latest recommended block rules from Microsoft. | 3
Patch Applications | Intune or SCCM used to patch applications on a regular basis. | As direct internet connectivity has been stipulated, applications will be set to auto update. Firmware can be update if an executable file is packaged and deployed via Intune. Note: 0.1 Full Time Equivalent (FTE) minimum is estimated to cover the work required. | 3
Configure Microsoft Office Macro Settings | Hardening to be implemented as per the ACSC via Intune. | Only signed macros will be enabled via Intune policies. | 3
User Application Hardening | Hardening to be implemented as per the ACSC via Intune. | Web advertisements that are java or flash based will be blocked. ‘Other’ web adverts will not be controlled. Web browsers are configured to block or disable support for Flash content for Internet Explorer and Edge. Web browsers are configured to block Java from the Internet for Internet Explorer and Edge. Office 365 applications block flash content by default. Object Linking and Embedding will be disabled by Intune policy. | 2
Restrict Administrative Privileges | Intune, Azure AD and Privileged Identity Manager (PIM) controls. | Restriction of administrative privileges for admin accounts will prevent adversaries using these accounts to gain full access to information and systems. WDAC policies are applied to admin users to prevent the ability to run email and web browsers. Admin users will log on with their normal accounts and then authenticate to the Office 365 tenant for management using their privileged account to administer the system. | 3
Multi-factor Authentication | Multi-factor authentication solution is provided by Azure MFA for all remote users and administrators. | Stronger user authentication makes it harder for adversaries to access sensitive information and systems. MFA is enabled for all with a soft token. Hard tokens would require an IaaS server in Azure and will not be implemented. | 2
Daily Backups | Data redundancy and availability configured with native tools. | Configuration settings of Office 365 and Intune are backed up through the ABAC’s. Documents, Desktops and Pictures are redirected to OneDrive using Windows Known Folders providing a backup of data to the cloud. Office 365 data is replicated by Microsoft to at least two geographically dispersed data centres. Exchange Online has a recover deleted items from server option. Cloud based files have Recycle bin and Restore options in addition to retention policies. Retention policies are created that ensure that data is retained forever for: {::nomarkdown}<ul><li>{:/}Exchange{::nomarkdown}</li><li>{:/}SharePoint{::nomarkdown}</li><li>{:/}OneDrive{::nomarkdown}</li><li>{:/}Office 365 Groups{::nomarkdown}</li><li>{:/}Skype for Business{::nomarkdown}</li><li>{:/}Exchange Public Folders{::nomarkdown}</li><li>{:/}Teams channel messages{::nomarkdown}</li><li>{:/}Teams chats{::nomarkdown}</li></ul>{:/}Workstation configuration is stored in Intune (AutoPilot rebuild) or SCCM task sequence.
