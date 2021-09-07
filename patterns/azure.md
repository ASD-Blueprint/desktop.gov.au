---
layout: page
title: Azure Virtual Desktop
---

## Client Devices Design – AVD Addendum

**July 2021**

### 1. Background

The DTA developed the Protected Utility Blueprint to enable Australian Government agencies to transition to a secure and collaborative Microsoft Office 365 platform. The solution is underpinned by proven technologies from the Microsoft Modern Workplace solution (Microsoft 365 including Office 365, Enterprise Mobility + Security, and Windows 10). The Blueprint design is delivered as three distinct documents:
* **Platform** – Provides technologies that underpin the delivery of the solution,
* **Client Devices** – The client device, which is configured and managed by Microsoft Intune, SCCM or a combination of both. This section also includes Azure Virtual Desktop (AVD) as an addendum to the Client Devices section, and 
* **Office 365** – Microsoft Office 365 productivity applications.

The Blueprints are accompanied by Configuration Guides and Security Documentation adhering to the Australian Cyber Security Centre (ACSC) PROTECTED requirements for Information and Communication Technology (ICT) systems handling and managing Government information. These artefacts provide a standard and proven Microsoft 365 solution aimed to fast track the adoption of the Microsoft Modern Workplace experience.

The following Blueprint documentation contains considerations for best practice deployment advice from the Australian Government Information Security Manual (ISM), relevant Microsoft hardening advice, the ACSC Essential Eight and the ACSC hardening guidelines for Microsoft Windows 10.

### 2. Overview

#### 2.1. Purpose

This document provides the design of the platform technology components that will be implemented to support the solution. For technologies and services not covered, refer to the respective design document.

#### 2.2. Scope

The following components are in scope for Azure Virtual Desktop. Those not listed below are not in scope.
* Solution Overview - This section provides an overview of the Azure Virtual Desktop technology and describes how and why agencies would benefit from implementation. It also covers assumptions and prerequisites to be observed before designing and deploying an Azure Virtual Desktop solution.
* Platform Components – Active Directory, Policies, Personalisation and Profile Management, and Resource Tags.
* AVD Components – Control Plane, Host Pool, Session Host, App Groups, Workspaces and Session and Idle Timeouts.
* Access and Connectivity – Gateway Firewall and Client Access.
* Users and Devices – User Personas and Client Devices.

 
For each component within the document there is a brief description of the contents of the section, a commentary on the things that have been considered in determining the decisions and the design decisions themselves.

### 3. Azure Virtual Desktop

#### 3.1. Solution overview

Azure Virtual Desktop (AVD) is a PaaS offering managed by Microsoft that allows administrators to configure, deploy, and manage, scalable flexible solutions. AVD enables administrators to publish either full desktops or distinct remote apps from a single host pool or create individual app groupings for different sets of users.

Using the Windows 10 Enterprise multi-session capability exclusively available to Azure Virtual Desktop on Azure services, corporations and departments are able to reduce the number of virtual machines and OS overhead while providing the same resources to users.

AVD provides the following benefits over a traditional Desktop-as-a-Service platform:
* Deliver fully feature-rich and scalable AVDs with Azure Windows 10 multi-session OS.
* Deliver a virtualised and optimised Office 365 experience.
* Bring Your Own Device (BYOD) options to allow for ease of transition.  
* An easy path to modernisation and reduction in data centre expenditure.
* Provide extended support for legacy desktop operating systems or hosting of legacy applications.

The following sections of this document outline design defaults and guidance when deploying an AVD platform and is to be treated as an addendum to the Client devices design.  

*Figure 2 Typical AVD Architecture* 

![Figure 2 Typical AVD Architecture](/assets/images/figure-2-typical-avd-architechure.png "Figure 2 Typical AVD Architecture")



This diagram shows a typical architectural overview for AVD.
* The user endpoints reside either within an agency’s on-premises network (hybrid) or on the public internet (cloud native). For hybrid deployments, ExpressRoute or a site-to-site VPN extends the on-premises network into Azure. Azure AD Connect integrates the agency’s hybrid identity (Active Directory Domain Services (AD DS)) with Azure Active Directory (Azure AD). Cloud native deployments that do not have a hybrid identity (AD DS) can leverage cloud-native Azure AD Domain Services.
* The AVD control plane handles Web Access, Gateway, Broker, Diagnostics, and extensibility components like REST APIs.
* The agency manages AD DS and Azure AD, Azure subscriptions, virtual networks, Azure Storage, and the AVD host pools and workspaces.
* The agency uses multiple Azure subscriptions in an enterprise-scale landing zone architecture as per Microsoft’s Cloud Adoption Framework for Azure.

#### 3.2. Assumptions

The following represent the assumptions when considering to deploy Azure Virtual Desktop.
* The agency already has a suitable Azure deployment or is planning an Azure deployment within the Australian Azure regions, with appropriate controls implemented up to Protected.
* Licensing is available for Windows 10 Enterprise multi-session, Windows 10 Enterprise and FSLogix.
  * Microsoft 365 E3, E5
  * Windows E3, E5
* Adequate storage is provisioned for the expected number of users. Recommendation of a minimum of 30GB per-user for the Windows profile hosted with the FSLogix solution.
* The agency has read the Client devices blueprint and ensures the ACSC Windows 10 hardening guidelines are being adhered to in relation to the AVD Windows 10 session hosts. 

#### 3.3. Prerequisites

The following represent the prerequisites before deploying Azure Virtual Desktop.
* Infrastructure with a configured Azure AD tenant and an Active Directory Domain Services (AD DS) that can sync with Azure AD.  Currently, AVD requires session host virtual machines to be domain-joined to an AD DS domain to manage the machines computer object and provide policy and authentication. Depending on the Active Directory architecture chosen – hybrid or cloud native, AVD can be configured to domain-join an existing on-premises AD DS domain (over VPN or ExpressRoute), or a cloud-only Azure AD Domain Services (PaaS) hosted in Azure.
Cloud native:
  * Azure AD Connect synced to a cloud-only AD DS IaaS (Infrastructure as a Service) within the Azure deployment, or
  * Azure AD DS PaaS configured within the Azure deployment (automatically synchronised to Azure AD) 
Hybrid:
  * Azure AD Connect connected to AD DS (on-premises or hosted in Azure)
  * An Azure subscription that contains a virtual network that can connect to the AD DS domain.

### 4. Platform components

#### 4.1. Active Directory

##### 4.1.1. Design Considerations

Microsoft Windows Server Active Directory Domain Services (AD DS) and Azure Active Directory (AAD) maintain records of information required to identify services, users and other resources on the network. A domain is a security boundary that exists within AD, and all user accounts are based on domain membership.  
Currently, AVD requires session host virtual machines to be domain-joined to an AD DS domain to manage the machines computer object and provide policy and authentication. Depending on the Active Directory architecture chosen – hybrid or cloud native, AVD can be configured to domain-join an existing on-premises AD DS domain (over VPN or ExpressRoute), or a cloud-only Azure AD Domain Services (PaaS) hosted in Azure.

##### 4.1.2. Design Decisions

The following table outlines the environment specific infrastructure configurations and considerations for Active Directory services for the solution. 

*Table 3 Active Directory Design Decisions for the solution*

* **Decision Point**

    * Active Directory Domain Type

* **Design Decision**

    * Hybrid:
      AD Connect synced to AD DS domain

    * Cloud Native:

    * AD Connect synced to cloud-only AD DS IaaS hosted on Azure 
      Or
    * Azure AD DS PaaS configured on the Azure Platform (Automatically synched to Azure AD)  

* **Justification**

    * AVD requires session host virtual machines to be joined to an AD DS domain.  
    * This is to support AVD domain join and to manage the machines computer object and provide policy and authentication.  Depending on the Active Directory architecture – hybrid or cloud native AVD can be configured to sync with an existing on-premises AD DS domain, or a cloud-only AD DS IaaS or Azure AD DS PaaS service hosted in Azure.

    * Currently, Virtual machines cannot be natively Azure AD-joined only.
  
---

* **Decision Point**

    * Active Directory Domain

* **Design Decision**

    * [Domain Name]

* **Justification**

    * A new or current AD DS domain will be leveraged for the AVD solution.

---

* **Decision Point**

    * Active Directory Domain Functional Level (Hybrid Only)

* **Design Decision**

    * Hybrid:
      Windows Server 2016 functional level

    * Cloud Native:
      N/A

* **Justification**

    * Latest support AD Functional level and supported by the AVD service.

---

* **Decision Point**

    * Single Sign On

* **Design Decision**

    * Optional – AD FS is required and supported with Web Client and Windows Client only.

* **Justification**

    * Active Directory Federation Services (AD FS) is required to support Single Sign On (SSO) from the RD Gateway logon point through to the AVD desktop.

---

* **Decision Point**

    * AD Organisation Units

* **Design Decision**

    * OU=[Agency] Workstations,OU=Windows 10 Virtual,DC=[Domain], DC=GOV, DC=AU

* **Justification**
    * WVD session host computer accounts will reside within a dedicated Windows 10 virtual desktop OU.

---

* **Decision Point**

    * DNS Type

* **Design Decision**

    * Hybrid:
      AD DS integrated DNS infrastructure 

    * Cloud Native:
    AD DS / AAD DS integrated DNS infrastructure

* **Justification**
    * The agency will utilise AD DS integrated DNS infrastructure for name resolution. Communication for hybrid will occur inside the Azure VPN. Communication for Cloud native will be configured within Azure subnets.

---

* **Decision Point**

    * NTLM Requirements (Hybrid Only)

* **Design Decision**

    * Hybrid:
      Add AVD hostnames to security groups

    * Cloud Native:
      N/A

 * **Justification**
 
    * For hybrid environment, the AVD session host names will be added to group policy which is applied to the domain controllers:
        * Network security: Restrict NTLM: Add remote server exceptions for NTLM authentication: <avd hostnames>
        * Network security: Restrict NTLM: Add server exceptions in this domain: <avd hostnames>

---

The following figure outlines a suggested AD DS OU Structure with proposed OUs to accommodate the Virtual Desktop and hybrid joined devices.  

*Figure 3 Suggested AD DS OU Structure*

![Figure 3 Suggested AD DS OU Structure](/assets/images/figure-3-suggested-ad-ds-ou-structure.png "Figure 3 Suggested AD DS OU Structure")

#### 4.2 Group policies

This section outlines the Group Policy design recommendations and considerations. 


##### 4.2.1. Design Considerations

Group policies provide a user experience tailored to the needs and security requirements of an organisation. Policies are created and managed using the Group Policy Management Console (GPMC). Group policy is still required for session hosts when using pooled-random session hosts, which is currently not supported with Intune.

##### 4.2.2. Design Decisions

The following tables describe the Group Policy design decisions for the solution.   

*Table 4 Group Policy Design Decisions for the solution*

---

* **Decision Point**

    * Group Policy template versions (ADMX)

* **Design Decision**

    * Windows:
        * Windows 10 Enterprise (1909 / 20H2 / 21H1)
    * Microsoft Office:
        * Microsoft 365 Apps for enterprise / Office 2016 / 2019 / June 2020
 
         Design Decisions for OS and Office versions, *refer to Client Devices Design.*

* **Justification**
    * ADMXs required to support the current SAC release of Windows 10, Microsoft 365 and Microsoft Defender for Endpoint.

---

* **Decision Point**

    * Group Policy Inheritance

* **Design Decision**

    * Enabled

* **Justification**
    * The session host desktop policies will be linked to a new OU structure. No existing policies will be used.

---

* **Decision Point**

    * Group Policy Loopback Mode

* **Design Decision**

    * Replace Mode

* **Justification**
    * Loopback processing in Replace Mode will be configured to allow finer grained user policies to be linked at the computers OU level.

---

* **Decision Point**

    * ACSC Hardening Guidelines – Hardening Windows 10, Microsoft Office Macro Security and MS Office.

* **Design Decision**

    * Deployed

* **Justification**
        
    * Ensures the ACSC Windows 10 and Office Macro Security hardening recommendations have been assessed and appropriately applied to devices via custom group policies.
    * The Client Devices Design Blueprint advice will be followed to harden the AVD VM’s except where it does not apply (I.e., Any recommendations that only apply to physical desktop machines and not VM’s).  For example, the following outlined hardening recommendations from the guide will not be applied:
        * Early Launch Antimalware
        * Measured Boot
        * Secure Boot
        * BIOS and UEFI passwords
        * Boot devices
        * CD burner access
    * Exact configurations per the ACSC guidelines will be included in the ‘As-Built As-Configured’ documentation. 

---

* **Decision Point**

    * ACSC Group Policy – Override

* **Design Decision**

    * As required

* **Justification**
    * A set of custom group policy settings to override the ACSC group policies can be applied as needed to meet the agencies requirements (i.e., legacy applications configurations, custom organisational settings, etc).  

---

* **Decision Point**

    * Group Policies Configuration

* **Design Decision**

    * To be outlined in As Built Configuration

* **Justification**
    * As required to allow system to function correctly and as per the agencies requirements.



#### 4.3. Personalisation and profile management

This section outlines the Personalisation and Profile Management design recommendations and considerations specific to the virtual desktop solution.

##### 4.3.1. Design Considerations

User profiles and personalisation enable users to configure an application or desktop setting and have that setting retained the next time they login or roam to another computer. This is extremely important when using a virtual desktop, as the local Windows profile is generally always not present for each new virtual desktop login, this can impede the user performance as it can increase user login times and cause issues with applications missing configuration on virtual desktop sessions. 

Each user group, regardless of the required level of personalisation, should have a profile that determines how the user’s settings will or will not persist across sessions. Part of the profile configuration includes folder redirection to better optimise the profile.

Microsoft includes several standard options for user profiles, or personalisation. Alternatively, technologies such as Microsoft UE-V and FSLogix, can be used to address user profile and personalisation requirements. If no user profile is configured, a desktop local profile is used, which is seldom optimal.

Microsoft provide the following profile management solutions:
* Local Profiles – Are created and stored on each workstation the user logs on to.
* Mandatory Profiles – A profile that does not save profile changes.
* Roaming Profiles – A network-based profile that allows user settings to be saved.
* Microsoft UE-V – Provides personalisation that operates at the application layer delivering a user’s personal Windows experience across many devices, regardless of Windows or the applications are deployed physically or virtually. UE-V templates are created to specify which application settings and files are captured and roamed between sessions.
* FSLogix – Provides a full profile solution in addition to addressing issues when deploying Office 365 in a non-persistent VDI/RDS environment. Using the Profile Container and/or Office 365 Container data is cached locally helping avoid disruptions or application instability during brief storage interruptions like network switch resets or storage controller failovers. This cache sits between the user’s desktop and the remote container storage and is configured either to persist between logons or start fresh each time the user logs in.
* Folder Redirection – Enables certain folders, such as Documents and AppData, to be redirected. This enables user data such as documents and email configuration, to not be loaded at login, which can improve performance when loading profiles. However, some applications communicate with the AppData frequently, making the application appear slow when this folder is redirected.

##### 4.3.2. Design Decisions

The following table describes the Profile Management design decisions for the solution.

*Table 5 Personalisation and Profile Management Design Decisions for the solution*

* **Decision Point**

    * Personalisation and Profile Management

* **Design Decision**

    * FSLogix

* **Justification**
    * FSLogix provides the best performance for AVD and supports file shares within Azure.

---

* **Decision Point**

    * FSLogix License Entitlement

* **Design Decision**

    * Microsoft 365 E3/E5
    * Windows 10 Enterprise E3/E5
    * Remote Desktop Services (RDS) Client Access License (CAL)
    * Remote Desktop Services (RDS) Subscriber Access License (SAL)

* **Justification**
    
    * Any of these licensing entitlements will provide access to FSLogix Profile Container, Office 365 Container, Application Masking, and Java Redirection tools.

---

* **Decision Point**

    * Folder Redirection

* **Design Decision**

    * Not required

* **Justification**
    * OneDrive redirection of known folders will be used in preference to Folder Redirection

---

* **Decision Point**

    * Profile Management Configuration

* **Design Decision**

    * Refer to Personalisation and Profile Management Configuration and FSLogix Office 365 Container Configuration tables

---

The following table describes the Profile Management design decisions for the solution. These settings will be configured via ADMX Group Policy.

*Table 6 Personalisation and Profile Management Configuration for the solution.* 

* **Decision Point**

    * Profile Management Version

* **Design Decision**

    * FSLogix Apps 2.9.7654.46150


* **Justification**

    * The latest version at the time of writing. The latest version should be assessed and utilised where appropriate.

---
* **Decision Point**

    * Profile Container

* **Design Decision**

    * Enabled

* **Justification**

    * FSLogix will be used to manage profiles for the solution.

---
* **Decision Point**

    * Profile Container Logging

* **Design Decision**

    * Enabled (All logs enabled)

* **Justification**

    * Logging is to be enabled for FSLogix.

---
* **Decision Point**

    * Profile Type

* **Design Decision**

    * Read write with fallback to read only

* **Justification**

    * Required for multi-session concurrent deployment type.

---
* **Decision Point**

    * Enable Search Roaming

* **Design Decision**

    * Enabled:
      Multi-User Search

* **Justification**

    * Required to support Office 365 Search Database roaming.

---
* **Decision Point**

    * Search Database Configuration

* **Design Decision**

    * Multi-User Search

* **Justification**

    * Required to support Office 365 Search Database roaming.

---
* **Decision Point**

    * Outlook Cached Mode

* **Design Decision**

    * Enabled

* **Justification**

    * Dynamic VHD(X) will be configured to provide storage cost savings where possible.

---
* **Decision Point**

    * Dynamic VHD(X) Allocation

* **Design Decision**

    * Enabled

* **Justification**

    * Each user will have a FSLogix virtual disk stored to an Azure location in Australia with data geo-replicated to a secondary location for DR purposes.

      Depending on required usage, performance and disaster recovery requirements, the agency must decide between Azure Files and Azure NetApp files depending on their requirements.  

      For further information, see https://docs.microsoft.com/en-us/azure/storage/files/storage-files-netapp-comparison. 

---
* **Decision Point**

    * Virtual Disk Type

* **Design Decision**

    * VHDX

* **Justification**

    * VHDX is the latest available disk type and suitable for this solution.

---
* **Decision Point**

    * Concurrent Users Sessions

* **Design Decision**

    * Allowed

* **Justification**

    * Concurrent user sessions must be enabled to allow Citrix hosted shared desktop scenarios.

---
* **Decision Point**

    * Local Cache Persistence

* **Design Decision**

    * Enabled

* **Justification**

    * Local cache folders will be kept on user logout providing a faster experience for re-logons.

---
* **Decision Point**

    * Redirections File Path

* **Design Decision**

    * Azure Storage account

* **Justification**

    * 

---
* **Decision Point**

    * Redirection Exclusions

* **Design Decision**

    * Refer to Redirections.xml
      [TBD-DOMAIN]\NETLOGON\FsLogix\Redirections.xml
      See section Appendix 1 – FSLogix Profile Redirections

* **Justification**

    * Base configurations recommended initially. This configuration will be updated as required during the build and test of the solution.

---
* **Decision Point**

    * Directory Naming Configuration

* **Design Decision**

    * Swapped:
      Username_SIDs

* **Justification**

    * This configuration allows for easier navigation of the user VHDX when troubleshooting and during maintenance.


*Table 7 FSLogix Office 365 Container Configuration for the solution*

* **Decision Point**

    * O365 Virtual Disk Location

* **Design Decision**

    * Network Share:
    [TBD - Network Share to be used for Virtual Disks]

* **Justification**

    * Each user will have a FSLogix virtual disk stored to an Azure location in Australia with data geo-replicated to a secondary location for DR purposes. 

---
* **Decision Point**

    * Virtual Disk Access

* **Design Decision**

    * Unique disk per session

* **Justification**

    * Required for this deployment type.

---
* **Decision Point**

    * Virtual Disk Type

* **Design Decision**

    * VHDX

* **Justification**

    * VHDX is the latest available disk type and suitable for this solution.

---
* **Decision Point**

    * O365 Container Logging

* **Design Decision**

    * Enabled

* **Justification**

    * Logging is to be enabled for FSLogix.

---
* **Decision Point**

    * Concurrent Users Sessions

* **Design Decision**

    * Allowed

* **Justification**

    * Concurrent user sessions must be enabled to allow hosted shared desktop scenarios.

---
* **Decision Point**

    * Office 365 Activation Data

* **Design Decision**

    * Enabled

* **Justification**

    * Office 365 activation data will be stored in the O365 container.

---
* **Decision Point**

    * Office Cache Data 

* **Design Decision**

    * Enabled

* **Justification**

    * Office 365 cache data will be stored in the O365 container.

---
* **Decision Point**

    * OneDrive Data

* **Design Decision**

    * Enabled

* **Justification**

    * OneDrive data will be stored in the O365 container.

---
* **Decision Point**

    * OneNote Data

* **Design Decision**

    * Enabled

* **Justification**

    * OneNote data will be stored in the O365 container.

---
* **Decision Point**

    * Outlook Data

* **Design Decision**

    * Enabled

* **Justification**

    * Outlook data will be stored in the O365 container.

---
* **Decision Point**

    * Outlook Personalisation Data

* **Design Decision**

    * Enabled

* **Justification**

    * Outlook personalisation data will be stored in the O365 container.

---
* **Decision Point**

    * SharePoint Data

* **Design Decision**

    * Enabled

* **Justification**

    * SharePoint data will be stored in the O365 container.

---
* **Decision Point**

    * Teams Data

* **Design Decision**

    * Enabled

* **Justification**

    * Teams data will be stored in the O365 container.

---
* **Decision Point**

    * Outlook Folder Path

* **Design Decision**

    * Configured

* **Justification**

    * %userprofile%\AppData\
    Local\Microsoft\Outlook

---
* **Decision Point**

    * Outlook Container Mode

* **Design Decision**

    * Cached

* **Justification**

    * Outlook cached mode will be enabled on successfully container attach.

---
* **Decision Point**

    * Dynamic VHD(x)

* **Design Decision**

    * Enabled

* **Justification**

    * Dynamic VHD(x) will be utilised to save on required space. Disks will grow only as space is required.

---
* **Decision Point**

    * Search Roaming

* **Design Decision**

    * Enabled

* **Justification**

    * Search roaming will be enabled to support the solution and provide a consistent user experience.

---
* **Decision Point**

    * Search Database

* **Design Decision**

    * Stored in O365 Container

* **Justification**

    * The Search Database will be stored in the O365 container.

---
* **Decision Point**

    * Sync OST to VHD

* **Design Decision**

    * Enabled: 
    Move OST to VHD 

* **Justification**

    * OST’s will be stored in the O365 container.

---
* **Decision Point**

    * Clear Cloud Cache on Logoff

* **Design Decision**

    * Enabled

* **Justification**

    * Users locally stored Cloud Cache will be persisted on logoff.

---
* **Decision Point**

    * Directory Naming Configuration

* **Design Decision**

    * Swapped:
    Username_SID

* **Justification**

    * This configuration allows for easier navigation of the user VHDX when troubleshooting and during maintenance.

---

#### 4.4. Resource tags

This section outlines the design recommendations and considerations for the Azure resource tag configuration.

##### 4.4.1. Design Considerations

Resource Tags can be applied to objects within Azure to organise them into categories. Using Tags, resources can be retrieved from multiple Resource Groups. Tags enable simplified management and Azure billing capability.

A Resource Tag is comprised of a Key and a Value. Both are defined by an administrator.

##### 4.4.2. Design Decisions

The following tables describe the Azure Resource Tags design decisions for the solution. 

*Table 8 Azure Resource Tags Decisions for the solution*

* **Decision Point**

    * Tags

* **Design Decision**

    * Configured

* **Justification**

    * Tagging of resources provides a consistent way to view subscription costs by type.

---
* **Decision Point**

    * Tags Configured

* **Design Decision**

    * Tags configured for:
    Category
    Environment Type
    Description
    Owner

* **Justification**

    * Resource tags will be configured for each host pool to provide details for category, environment type, description, and owner.

---

### 5. Azure Virtual Desktop components

#### 5.1 Control plane

This section outlines the recommended methods used to access the AVD environment.
Design Considerations
Azure AVD is a PaaS offering managed by Microsoft that allows administrators to configure, deploy, and manage, scalable flexible solutions. AVD enables administrators to publish either full desktops or distinct remote apps from a single host pool or create individual app groupings for different sets of users.

Using the Windows 10 Enterprise multi-session capability exclusively available to Azure Virtual Desktop on Azure services, corporations and departments are able to reduce the number of virtual machines and OS overhead while providing the same resources to users.

##### 5.1.1. Design Decisions

The table below describes the AVD Control Plane design decisions for the solution.

*Table 9 AVD Control Plane Design Decisions for the solution* 

* **Decision Point**

    * AVD Control Plane

* **Design Decision**

    * West US

* **Justification**

    * Metadata will be stored in Azure geography associated with West US.

    AVD Control Planes are not currently available in Australia, and therefore a US region has been selected.

Note: *This is not the location where virtual desktops are hosted, this will be within the Azure spoke in the Australia Central regions.*
    
The stored information is encrypted at rest, and geo-redundant mirrors are maintained within the geography. Customer data, such as app settings and user data, resides in the location the customer chooses and isn't managed by the service. For further information, see [Data locations for Azure Virtual Desktop - Azure Microsoft Docs](https://docs.microsoft.com/en-us/azure/virtual-desktop/data-locations).

---
* **Decision Point**

    * Azure License Entitlement

* **Design Decision**

    * Microsoft 365 E3/E5
    Windows 10 Enterprise E3/E5

* **Justification**

    * Any of these licensing entitlements will provide access to AVD.

    Note: *AVD can be accessed from non-Windows Pro endpoints if a Microsoft 365 E3/E5 or Windows 10 VDA per user license is available.*
    
---
* **Decision Point**

    * Windows 10 Enterprise and Windows 10 Enterprise Multi Session License Entitlements

* **Design Decision**

    * Microsoft 365 E3/E5Windows E3/E5

* **Justification**

    * Any of these licensing entitlements will provide access to Windows 10 and Windows 10 Multisession on Azure.
    
---
* **Decision Point**

    * Encryption

* **Design Decision**

    * TLS 1.2

* **Justification**

    * TLS 1.2 is used for all connections initiated from the clients and session hosts to the Azure Virtual Desktop infrastructure components.
    
---
* **Decision Point**

    * Identity and Access Configuration

* **Design Decision**

    * Refer to AVD Control Plane Configuration.

* **Justification**

    * To meet the requirements of this design
    
---
Table 10 AVD Control Plane Configuration for the solution
AVD does not currently support ExpressRoute optimisation, it is recommended that outgoing connections from within the agency to AVD desktops are optimised by bypassing the agency web proxy, but still egressing the agency’s SIG (direct route). Connections outside of the environment will connect using the public internet. 

Note: *at time of writing, [Azure RDP Shortpath](https://docs.microsoft.com/en-us/azure/virtual-desktop/shortpath) is a preview feature which supports direct connection to session hosts in with hybrid connectivity configurations.*
    
---

*Table 10 AVD Control Plane Configuration for the solution*

* **Decision Point**

    * Administrator Access

* **Design Decision**

    * Azure Active Directory

* **Justification**

    * This provides native AD auditing, password policies and account control.

--- 
* **Decision Point**

    * User Access

* **Design Decision**

    * Azure hosted Web URL

* **Justification**

    * Users will access the solution via the Microsoft hosted Remote Desktop Web URL: https://rdweb.wvd.microsoft.com/arm/webclient/index.html

---   

#### 5.2. Host pool

This section outlines the host pool design recommendations and considerations.

##### 5.2.1. Design Considerations

A host pool is a collection of Azure virtual machines that register to AVD as session hosts. All session host virtual machines in a host pool are sourced from the same image providing a consistent user experience.

A host pool can be one of two types:
* **Personal** – Where each session host is assigned to individual users.
* **Pooled** – Where session hosts can accept connections from any user in an authorised app group within the host pool.

Host Pool configuration allows the setting of properties to change load-balancing behaviour, how many sessions each session host can take, and what a user can do to session hosts in the host pool while signed into an AVD session.

Azure Virtual Desktop supports two load-balancing methods. Each method determines which session host will host a user’s session when connected to a resource in a host pool.

The following load-balancing methods are available:
* **Breadth-first** – Allows user sessions to be distributed evenly across the session hosts in a host pool.
* **Depth-first** – Allows user sessions to completely fill a session host in the host pool. Once the first session reaches its session limit threshold, the load balancer directs any new user connections to the next session host in the host pool until it reaches its limit.

##### 5.2.2. Design Decisions

The table below describes the Host Pool design decisions for the solution. 

*Table 11 Host Pool Design Decisions for the solution*

* **Decision Point**

    * Metadata

* **Design Decision**

    * West US

* **Justification**

    * Metadata will be stored in Azure geography associated with (US) West US.  For further information, see Control plane section.

--- 
* **Decision Point**

    * Host Pool Types

* **Design Decision**

    * Pooled

* **Justification**

    * Pooled is the preferred selection to ensure consistency.

--- 
* **Decision Point**

    * Load Balancing Method

* **Design Decision**

    * Breadth-First

* **Justification**

    * User sessions to be distributed evenly across the session hosts in a host pool.

--- 
* **Decision Point**

    * Number of Host Pools

* **Design Decision**

    * Dependant on User Personas

* **Justification**

    * The number of host pools will be aligned to the number and size of the user personas, and the VM-types assigned.

--- 
* **Decision Point**

    * Host Pool Configuration

* **Design Decision**

    * Refer to Host Pool Configuration.

* **Justification**

    * To meet the requirements of this design.

--- 

*Table 12 Host Pool Configuration for the solution*

* **Decision Point**

    * Host Pool Name

* **Design Decision**

    * < agn >-< hp >-< os >-< pooltype >

* **Justification**

    * Host Pool naming will be configured as follows:
      < agn > = Agency Name
      < hp > = Host Pool
      < os > = Windows Version
      < pooltype > = Pool Name

      e.g. agency-hp-win10-fin

--- 
* **Decision Point**

    * Friendly Name

* **Design Decision**

    * Aligned to Host Pool name 

* **Justification**

    * Descriptive text that aligns to the host pool name. 
      e.g. Agency Windows 10

--- 
* **Decision Point**

    * Access

* **Design Decision**

    * Aligned to user groups

* **Justification**

    * The AVD Session Hosts will accept any user connection with access to the host pool.

--- 
* **Decision Point**

    * App Groups

* **Design Decision**

    * < agn >-< hp >-< os >-< pooltype >-< appgroup >

* **Justification**

    * Host Pool naming will be configured as follows:
      < agn > = Agency Name
      < hp > = Host Pool
      < os > = Windows Version
      < pooltype > = Pool Name
      < appgroup > = Application Group

    e.g. agency-hp-win10-fin-accapps

--- 
* **Decision Point**

    * Max Session Limit

* **Design Decision**

    * Dependant on user-types.  

* **Justification**

    * To ensure no more than a defined number of users can connect to a single Windows 10 session. Can restrict number of users to a maximum limit per session host.  For best performance and density estimates, see section Session Host Sizing for further information.

--- 
* **Decision Point**

    * Session Host Members

* **Design Decision**

    * View Client Devices guidelines.

* **Justification**

    * As per the Client device’s blueprint guidelines.

--- 
* **Decision Point**

    * Validation Environment

* **Design Decision**

    * Enabled

* **Justification**

    * Allows to monitor service updates before rolling them out to the Production host pool.

--- 
* **Decision Point**

    * Assignment Method

* **Design Decision**

    * Automatic

* **Justification**

    * Users will be automatically assigned to a session host.

--- 
* **Decision Point**

    * RDP Properties

* **Design Decision**

    * The following to be configured via ADMX Group Policies:
      Multi-monitor mode: Enabled
      Drive redirections: Disabled
      Remote audio mode: Play Locally
      RDP Properties Configuration:
      audiocapturemode:i:1;drivestoredirect:s:;redirectcomports:i:0;camerastoredirect:s:*;devicestoredirect:s:*;redirectclipboard:i:0;redirectprinters:i:0;redirectsmartcards:i:0

* **Justification**

    * To restrict data leaving the environment and to optimise performance and workability.

--- 

#### 5.3. Session host

This section outlines the session host design and configuration recommendations and considerations.

##### 5.3.1. Design Considerations

Each user group will utilise a desktop (Session Host) or RemoteApp based on an underlying image. Most organisations try to consolidate images into as few as possible while still providing a desktop environment that is not bloated with applications most users do not use.

Users are provided access to RemoteApps or desktops based on group memberships permissions and business function.

The Azure VM generation (version) can limit what operating system features are available such as UEFI (Unified Extensible Firmware Interface) support. Generation 2 is now available within Australian regions and should be used for Azure Virtual Desktops. Note the following Windows 10 features are not yet supported as it requires Trusted Launch to be available in Australian Azure regions:
* Secure boot
* vTPM
* Virtualization-based security (VBS).

An AVD session host consists of the following core components:
* **Operating System** – The correct OS is critical to the success of a hosted desktop environment. It forms the foundation of the SOE and provides the launchpad for the applications deployed to it.
* **Applications** – The applications deployed to an AVD image and how each are deployed will affect the end user experience. Choosing the right applications and their configuration is critical to solution success. Applications are able to be delivered to an AVD image in the following ways:
    * Installed – The application is part of the base desktop image. Every user receiving the image also receives the application. Typically, common applications are installed into the base image. FSLogix application masking can be utilised to prevent the user from seeing a particular application within the image, allowing the administrator to maintain a small number of session pools
    * App-V – The application is delivered via the network, to the desktop just-in-time or pre-cached. The application is not traditionally installed within the OS, though executes within a temporary runtime environment. Applications are only visible to users who are granted access or are published globally
    * RemoteApp – The application is hosted on a set of session host servers. Technically challenging applications are often delivered via the RemoteApp model
    * MSIX App Attach – The application is delivered via the network, to the desktop. App Attach enables packaged applications to be stored outside the AVD sessions hosts to be maintained and updated separately to the image. This reduces the need to maintain multiple master images for different applications and/or the ability to package all virtualised apps into a single image.

##### 5.3.2. Design Decisions

The table below describes the Session Host design decisions for the solution.

*Table 13 Session Host Design Decisions for the solution*

* **Decision Point**

    * Azure Region

* **Design Decision**

    * Any Azure Australian region

* **Justification**

    * In-line with government requirements and existing Azure Tenant / Subscription regions for this blueprint.

--- 
* **Decision Point**

    * Number of Session Hosts

* **Design Decision**

    * Dependant on user persona types and the size of the group.

* **Justification**

    * General guidance for Light, Medium, Heavy and Power user configuration is provided below.
      See Session Host Sizing.
      For further information, see [Virtual machine sizing | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/virtual-machine-recs)

--- 
* **Decision Point**

    * Number of Images

* **Design Decision**

    * One per User Persona type

* **Justification**

    * It is recommended that one image will be deployed per User Persona type to allow easier image management. 

--- 
* **Decision Point**

    * Operating System

* **Design Decision**

    * Windows 10 Enterprise Multi-Session, with Microsoft 365 Apps from the Azure Market Place.

* **Justification**

    * Latest stable version of Windows 10 available from the Azure Market Place.

--- 
* **Decision Point**

    * Supported Language Packs

* **Design Decision**

    * EN-AU

* **Justification**

    * The default language is English.

--- 
* **Decision Point**

    * Time Zone

* **Design Decision**

    * Australian Eastern Standard Time (AEST)

* **Justification**

    * The default time zone AEST.

--- 
* **Decision Point**

    * Image Source

* **Design Decision**

    * Azure Market Place

* **Justification**

    * The Windows 10 Enterprise Multi-Session with Microsoft 365 Apps SOE available from the Azure Marketplace will be utilised for the AVD image deployment.

--- 
* **Decision Point**

    * Image Deployment Method

* **Design Decision**

    * Azure Resource Manager

* **Justification**

    * AVD using Azure Resource Manager will be used to deploy pooled random virtual machines.

--- 
* **Decision Point**

    * Deployed Image Update Process

* **Design Decision**

    * Azure Resource Manager (ARM) Redeploy and auto updates.

* **Justification**

    * ARM Redeploy capability with auto updates will be leveraged to provide ‘Security and Feature’ updates to the AVD images.

--- 
* **Decision Point**

    * Encryption

* **Design Decision**

    * Azure Disk Encryption

* **Justification**

    * Session host disks to be encrypted at rest using Azure Disk encryption. Using the Bitlocker feature of Windows, volume encryption for the OS and data disks of Azure virtual machines (VMs) will be configured. Will also be integrated with Azure Key Vault to help control and manage disk encryption keys and secrets.

--- 
* **Decision Point**

    * Graphical Application Support

* **Design Decision**

    * GPU Capable VM’s available in selected Australian Regions

* **Justification**

    * Windows 10 VMs with higher GPU capability are available from Azure if there is a need to run graphical applications.

--- 
* **Decision Point**

    * Session-Host Power Management

* **Design Decision**

    * Azure Automation

* **Justification**

    * Azure Automation will be utilised to scale session host power management.  This will enable shutting down and deallocating session host VMs during off-peak usage hours, and powering on and reallocating as required (during peak hours).

--- 
* **Decision Point**

    * Session Host Configuration

* **Design Decision**

    * Refer to Session Host Configuration table.

* **Justification**

    * Session Host configuration.

--- 
* **Decision Point**

    * Deployed Applications

* **Design Decision**

    * Refer to Enterprise Applications Configuration table.

* **Justification**

    * Applications to be deployed post platform deployment.

--- 
* **Decision Point**

    * OS Optimisations

* **Design Decision**

    * [Virtual Desktop Optimization Tool](https://techcommunity.microsoft.com/t5/azure-virtual-desktop/windows-virtual-desktop-optimization-tool-now-available/m-p/1558614)

* **Justification**

    * Microsoft recommend some optimisation to the OS image to increase performance and scalability and enhance the overall end user experience. 

--- 
* **Decision Point**

    * Antivirus

* **Design Decision**

    * Microsoft Defender of Endpoint

* **Justification**

    * Microsoft Defender for Endpoint will be configured for the AVD platform. 
      For configuration items that apply specifically to an AVD environment, such as a dedicated VDI file share and specific exclusions, refer to  [Deployment guide for Microsoft Defender Antivirus in a virtual desktop infrastructure (VDI) environment](https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/deployment-vdi-microsoft-defender-antivirus?view=o365-worldwide) and for common client device configuration settings, refer to Client Devices Design.

--- 

*Table 14 Session Host Sizing*

| Workload type | Maximum users per vCPU | vCPU/RAM/OS storage minimum | Example Azure instances | Profile container storage minimum |
|---|---|---|---|---|
| light | 6 | 8 vCPUs, 16 GB RAM, 16 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4 | 30 GB |
| Medium | 4 | 8 vCPUs, 16 GB RAM, 32 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4 | 30 GB |
| Heavy | 2 | 8 vCPUs, 16 GB RAM, 32 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4 | 30 GB |
| Power | 1 | 8 vCPUs, 16 GB RAM, 340 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4, NV12, NVv4 | 30 GB |


*Table 15 Session Host Configuration*



* **Decision Point**

    * VM Size 

* **Design Decision**

    * Dependant on user persona type selected.

* **Justification**

    * Dependant on user persona type selected.

--- 
* **Decision Point**

    * Azure VM Generation

* **Design Decision**

    * Generation 2

* **Justification**

    * Generation 2 should be selected to support security features such as UEFI

--- 
* **Decision Point**

    * Trusted Launch

* **Design Decision**

    * Not configured

* **Justification**

    * At time of writing, the trusted launch feature is in Public preview and restricted to regions outside of Australia.

--- 
* **Decision Point**

    * Name Prefix

* **Design Decision**

    * < agn >< os >< shg >< nnn >


* **Justification**

    * To meet the requirements of this design.
    App Group naming will be configured as follows:
    < agn > = Agency Name
    < os > = Windows Version
    < shg > = Session Host Group
    < nnn > = Numerical Iteration

    e.g. agnwin10acc001

--- 
* **Decision Point**

    * Domain

* **Design Decision**

    * Domain

* **Justification**

    * As per agencies domain name.

--- 
* **Decision Point**

    * AAD DS / AD DS 
    Domain Join Account

* **Design Decision**

    * svc_domjoin@[Agency Domain]

* **Justification**

    * Service account in the agencies domain.

--- 
* **Decision Point**

    * Domain Joined type

* **Design Decision**

    * Hybrid-Joined (depending on Agency Active Directory selection)

* **Justification**

    * AVD Session-hosts will be managed through AAD DS / AD DS.

--- 
* **Decision Point**

    * Organisational Unit

* **Design Decision**

    * OU=[Agency] Workstations,OU=Windows 10 Virtual,DC=[Domain], DC=GOV, DC=AU

* **Justification**

    * The guidance is to deploy the session hosts to a dedicated organisation unit for the session hosts. The agency can determine where that location best fits with the deployment.

--- 
* **Decision Point**

    * IP Subnet

* **Design Decision**

    * Customer design decision based on networking standards.

* **Justification**

    * Adequately sized and number of subnets to be configured as required to host the number of session hosts.

--- 
* **Decision Point**

    * Network Security Group

* **Design Decision**

    * < agn >-< env >-< loc >-< vnet >-< host >-< nsg >

* **Justification**

    * Azure Virtual Desktop Subnet Network Security Gateway (NSG) with a default deny rule for all traffic, which can be modified as required for specific workloads. Naming convention as follows:
    < agn > = Agency 
    < env > = Environment (e.g. Prod)
    < loc > = Location (e.g. auc1)
    < vnet > = Virtual Network
    < host > = Workloads the vnet is hosting (I.e. Desktops)
    < nsg > = Network Security Group

--- 
* **Decision Point**

    * Public Inbound Ports

* **Design Decision**

    * Disabled

* **Justification**

    * A default deny rule for all traffic, which can be modified as required for specific workloads. AVD control plane traffic will ingress regardless of the NSG configuration.

--- 
* **Decision Point**

    * Minimum Outbound Ports Allowed

* **Design Decision**

    * 135/TCP (RPC Endpoint Mapper)
    1024-65535/TCP (RPC)
    636/TCP (LDAP SSL)
    3268/TCP	(LDAP GC)
    3269/TCP (LDAP GC SSL)
    53/TCP/UDP (DNS)
    88/TCP/UDP (Kerberos)
    445/TCP (SMB)
    1688/TCP (KMS)
    80 & 443 TCP (Internet)

* **Justification**

    * To meet the minimum requirements of this blueprint for the Virtual Desktop to communicate with Active Directory.  Agency to assess additional egress ports based on requirements. More information around network port requirements are outlined in the Access and connectivity section. 
Note 1: AVD control plane outbound ports are not explicitly configured on the NSG and are controlled per URL on the Azure Firewall egress point.
Note 2: An Internet filtering solution for user traffic is in place outside of the Azure Firewall.

--- 
* **Decision Point**

    * Associated Host Pool 

* **Design Decision**

    * Aligned to Host Pools required.

* **Justification**

    * Session Hosts will align to the host pools created.

--- 
* **Decision Point**

    * Built-In Applications

* **Design Decision**

    * As required

* **Justification**

    * Enterprise Applications installed in the image as required.

--- 

#### 5.4. App groups

This section outlines the application group configuration recommendations and considerations.

##### 5.4.1. Design Considerations

App groups are logical grouping of applications installed on session hosts in the host pool. An app group can be one of two types:
* RemoteApp - Enables a user to access the RemoteApps individually selected and published to the app group. Multiple RemoteApp app groups can be created to accommodate different worker scenarios. Distinct RemoteApp app groups can also contain overlapping RemoteApps.
* Desktop – Allows a user to access the full desktop session host. By default, a desktop app group (named "Desktop Application Group") is automatically created whenever a host pool is deployed. 

To access published resources, users must be assigned to an app group. When assigning users to app groups, consider the following things:

* A user can be assigned to both a desktop app group and a RemoteApp app group in the same host pool. However, users can only launch one type of app group per session.
* A user can be assigned to multiple app groups within the same host pool allowing the app feed to be an accumulation of both app groups. 

##### 5.4.2. Design Decisions

The table below describes the App Group design decisions for the solution. 

*Table 16 App Group Design Decisions for the solution*



* **Decision Point**

    * Azure Region

* **Design Decision**

    * West US

* **Justification**

    * Metadata will be stored in Azure geography associated with (US) West US. For further information, see Control plane section.

--- 
* **Decision Point**

    * Number of App Groups

* **Design Decision**

    * Aligned to unique images required.

* **Justification**

    * App groups will be created as per unique images required.

--- 
* **Decision Point**

    * App Group Type

* **Design Decision**

    * Desktop (one per host pool)
    * RemoteApp (multiple as required per host pool)

* **Justification**

    * Desktop provides the full desktop experience, only one created per host pool.
    * RemoteApp provides published apps, multiple can be created per host pool. 

--- 
* **Decision Point**

    * App Group Configuration

* **Design Decision**

    * Refer to App Group Configuration table

* **Justification**

    * To meet the requirements of this design.

--- 

*Table 17 App Group Configuration*


* **Decision Point**

    * App Group Name

* **Design Decision**

    * < agn >-< hp >-< os >-< loc >-< agn >

* **Justification**

    * To meet the requirements of this design.
    App Group naming will be configured as follows:
    < agn > = Agency Name
    < hp > = Host Pool
    < os > = Windows Version
    < loc > = Location
    < agn > = App Group Name

    e.g. agency-hp-win10-auc-dag

--- 
* **Decision Point**

    * Friendly Name

* **Design Decision**

    * Aligned to App Group Name 

* **Justification**

    * Descriptive text that aligns to the host pool name. 

    e.g. Agency Windows 10 Desktop App Group

--- 
* **Decision Point**

    * Azure Resource Group

* **Design Decision**

    * < rg >-< agn >-< avd >

* **Justification**

    * Host Pool naming will be configured as follows:
    < rg > = Resource Group 
    < agn > = Agency Name
    < avd > = Azure Virtual Desktop

--- 
* **Decision Point**

    * App Group Type

* **Design Decision**

    * Desktop / RemoteApp

* **Justification**

    * Desktop or RemoteApp selected depending on the requirement of a full desktop experience or applications only.

--- 
* **Decision Point**

    * Description

* **Design Decision**

    * Aligned to App Group Name 

* **Justification**

    * Descriptive text that aligns to the app group name. 

--- 
* **Decision Point**

    * Assignments

* **Design Decision**

    * Aligned to User Persona

* **Justification**

    * User assignment will be aligned to groupings aligned to the persona image type required.

--- 
* **Decision Point**

    * Published Applications

* **Design Decision**

    * As required

* **Justification**

    * List published applications required to be launch separately from the desktop.

--- 
* **Decision Point**

    * Host Pool

* **Design Decision**

    * Aligned to the host pool

* **Justification**

    * Each App Group will be aligned to a host pool.

--- 
* **Decision Point**

    * Workspace

* **Design Decision**

    * Aligned to the host pool

* **Justification**

    * Each Workspace will be aligned to a host pool.

--- 

#### 5.5. Workspaces

This section outlines the Workspaces design recommendations and considerations.

##### 5.5.1. Design Considerations

Workspaces are logical grouping of App Groups in Azure Virtual Desktop. Each AVD App Group must be associated with a Workspace for users to see the remote apps and desktops published to them.

##### 5.5.2. Design Decisions

The table below describes the Workspace design decisions for the solution. 

*Table 18 Workspace Design Decisions for the solution*

* **Decision Point**

    * Number of Workspaces

* **Design Decision**

    * Aligned to logical grouping of App Groups.

* **Justification**

    * Workspaces will be created for each logical grouping of App Groups.

--- 
* **Decision Point**

    * Workspace Name

* **Design Decision**

    * I.e. ‘Accounting Workspace’

* **Justification**

    * The workspace name will be descriptive for the App Group collection.

--- 
* **Decision Point**

    * Workspace Configuration 

* **Design Decision**

    * Refer to Workspace Configuration table

* **Justification**

    * Refer to Workspace Configuration table.

--- 

*Table 19 Workspace Configuration for the solution*

* **Decision Point**

    * Workspace Name

* **Design Decision**

    * I.e. ‘Accounting Workspace’

* **Justification**

    * The workspace name will be descriptive for the App Group collection.

--- 
* **Decision Point**

    * Friendly Name

* **Design Decision**

    * Aligned to Workspace Name 

* **Justification**

    * Descriptive text that aligns to the Workspace name. 

    e.g. Agency Windows 10 Desktop Workspace

--- 
* **Decision Point**

    * Azure Resource Group

* **Design Decision**

    * <rg>-<agn>-<avd>

* **Justification**

    * Host Pool naming will be configured as follows:
    <rg> = Resource Group 
    <agn> = Agency Name
    <avd> = Azure Virtual Desktop

--- 
* **Decision Point**

    * Description

* **Design Decision**

    * Aligned to Workspace Name 

* **Justification**

    * Descriptive text that aligns to the workspace name. 

--- 
* **Decision Point**

    * Host Pool

* **Design Decision**

    * Aligned to Host Pool

* **Justification**

    * Each Workspace will be aligned to a host pool.

--- 
* **Decision Point**

    * App Groups

* **Design Decision**

    * List of App Groups

* **Justification**

    * List of App Groups that will form this Workspace.

--- 

#### 5.6. Session and idle timeouts

This section outlines the virtual desktop session timeout design recommendations and considerations.

##### 5.6.1. Design Considerations

Session and Idle timeouts can be configured to assist with security and resource availability. The following types of session timeouts can be configured:
* Disconnected Session Timeout – Defines the period that a disconnected session remains disconnected before automatically being logged off.
* Idle Session Timeout – Defines the number of minutes that a continuously idle session remains active before being disconnected.

##### 5.6.2. Design Decisions

The table below describes the key Session and Idle Timeout design decisions for the solution. 

*Table 20 Session and Idle Timeouts Design Decisions for the solution*




* **Decision Point**

    * Disconnected Session Timeout

* **Design Decision**

    * 8 hours

* **Justification**

    * To let users reconnect to their session during a standard workday.

--- 
* **Decision Point**

    * Idle Session Timeout

* **Design Decision**

    * 15 minutes

* **Justification**

    * Short idle timeout (or Machine inactivity limit) to ensure unattended virtual desktops are disconnected. 
    This is defined as per ACSC Windows 10 Hardening guide.

--- 

### 6. Access and connectivity

#### 6.1. Gateway firewall 

This section outlines the design recommendations and considerations for the Gateway Firewall traffic edge traversal for backend Microsoft traffic pertaining to the Virtual Desktop.

##### 6.1.1. Design Considerations

AVD utilises a number of URLs for its associated services. It is important that firewall rules are configured to enable access to these services to ensure communication flow and that these communication paths are optimised, ideally outside of the chosen Edge Firewall within Azure.

The blocking of these URLs is unsupported and will affect service functionality. These URLs only correspond to Azure Virtual Desktop sites and resources, and do not include URLs for other services like Azure Active Directory.

##### 6.1.2. Design Decisions

The table below describes the key Gateway Firewall design decisions for the solution.

*Table 21 Firewall Design Decisions for the solution* 

* **Decision Point**

    * Gateway Firewall

* **Design Decision**

    * Azure Firewall

* **Justification**

    * Azure Firewall is the recommended firewall solution and does not require a third-party solution.

--- 
* **Decision Point**

    * Required Session Host Allow List

* **Design Decision**

    * *.wvd.microsoft.com 443
      gcs.prod.monitoring.core.windows.net 443
      production.diagnostics.monitoring.core.windows.net 443
      *xt.blob.core.windows.net 443
      *eh.servicebus.windows.net 443
      *xt.table.core.windows.net 443
      *xt.queue.core.windows.net 443
      catalogartifact.azureedge.net 443
      kms.core.windows.net 1688
      mrsglobalsteus2prod.blob.core.windows.net 443
      wvdportalstorageblob.blob.core.windows.net 443
      169.254.169.254 80 (Azure Instance Metadata service endpoint)
      168.63.129.16 80 (Session host health monitoring)  

* **Justification**

    * These URLs are required to provide minimum AVD functionality.

    **Note:** *AVD currently does not have a list of IP address ranges that can be unblocked to allow network traffic. Only the support of unblocking specific URLs is supported at this time.*

    *If using a Next Generation Firewall (NGFW), you will need to use a dynamic list specifically made for Azure IPs to make sure you can connect.*

--- 
* **Decision Point**

    * Recommended Session Host Allow List

* **Design Decision**

    * *.microsoftonline.com 443
      *.events.data.microsoft.com 443
      www.msftconnecttest.com 443
      *.prod.do.dsp.mp.microsoft.com 443
      login.windows.net 443
      *.sfx.ms 443
      *.digicert.com 443
      *.azure-dns.com 443
      *.azure-dns.net 443

* **Justification**

    * These URLs are recommended to provide best user experience and functionality.

--- 
* **Decision Point**

    * Required Remote Desktop Client Allow List

* **Design Decision**

    * *.wvd.microsoft.com 443
      *.servicebus.windows.net 443
      go.microsoft.com 443
      aka.ms 443
      docs.microsoft.com 443
      privacy.microsoft.com 443
      query.prod.cms.rt.microsoft.com 443

* **Justification**

    * These URLs are required to provide minimum Remote Desktop client functionality.

--- 

#### 6.2. Client access

This section defines the recommended methods used to access the AVD environment.

##### 6.2.1. Design Considerations

The following client access methods are available to clients:

* **Windows Remote Desktop Client** – Installed on user devices and provides users with secure, self-service access to company resources including, applications, and desktops from any of the user’s Windows devices.
* **Web Client (HTML5)** – Allows access to Azure Virtual Desktop resources from any HTML5 compatible web browser, without the lengthy installation process on the Windows Desktop client.
* **Android Remote Desktop Client** – Allows users to access Azure Virtual Desktop resources directly from an Android device or a Chromebook that supports the Google Play Store.
* **MacOS Remote Desktop Client** –Allows users to access Azure Virtual Desktop resources from an Apple computer.
* **iOS Remote Desktop Client** – Allows users to access Azure Virtual Desktop resources directly from an iOS device (iPhones and iPads).
* **RDP Shortpath** – Is an Azure Virtual Desktop optimisation feature that allows the client device to establish a direct UDP-based connection between the Remote Desktop Client and the Session host. The feature requires that the client has routing capability into the Azure VNet where the Session hosts reside.

##### 6.2.2. Design Decisions

The table below describes the Client Access design decisions for the solution. 

*Table 22 Client Access Design Decisions for the solution*

* **Decision Point**

    * Primary Client Access

* **Design Decision**

    * Web Client (HTML5)
    Windows Desktop Client

* **Justification**

    * User will primarily access AVD resources using the Web Client (HTML5) and the Windows Desktop Client. 

--- 
* **Decision Point**

    * Browser Support

* **Design Decision**

    * Microsoft Edge
    Apple Safari
    Mozilla Firefox 
    Google Chrome

* **Justification**

    * All current browsers advised by Microsoft which have HTML5 compatibility will be supported.

--- 
* **Decision Point**

    * Conditional Access App Exclusions

* **Design Decision**

    * Exclude from blocking policies:
    Windows Virtual Desktop
    Windows Virtual Desktop Client
    Include in MFA grant policy:
    Windows Virtual Desktop
    Windows Virtual Desktop Client

* **Justification**

    * Exclusion of any “All Cloud Apps” policies that prevent the use of Azure Virtual Desktop should be implemented to allow connectivity from non-agency endpoints.

--- 
* **Decision Point**

    * Conditional Access Session Control

* **Design Decision**

    * Set to 14 hours (when KMSI enabled)

* **Justification**

    * Session Control policy should be implemented to enforce MFA after long periods when KMSI (Keep me Signed In) is implemented.

--- 
* **Decision Point**

    * RDP Shortpath

* **Design Decision**

    * Not configured

* **Justification**

    * At time of writing, this feature is in Public Preview.

--- 

### 7. Users and devices

#### 7.1. User personas

This section describes user persona types and how best to design for the targeted for the solution.

##### 7.1.1. Design Considerations

Personas identify the user types, their requirements and represent the typical user-type for the solution. 

In order to identify how many distinct personas will be required to support all of the users, the following criteria will need to be considered. 
* Personal pools - Do specific groups of users require dedicated virtual desktops, instead of pools? For example, security, compliance, high-performance, or noisy-neighbour requirements might lead to some users running on dedicated desktops that aren't part of a pooling strategy. You'll enter this information by specifying a host pool type of personal during the Azure Virtual Desktop host pool deployment.
* Density - Do specific groups of users require a lower-density desktop experience? For example, heavier density might require two users per virtual central processing unit (vCPU) instead of the light-user assumption of six users per vCPU. You'll enter density information in the pool settings of the Azure Virtual Desktop host pool deployment.
* Performance - Do specific groups of users require a higher-performance desktop experience? For example, some users require more memory per vCPU than the assumed 4 gigabytes (GB) of RAM per vCPU. You'll enter the VM sizing in the virtual machine details of the Azure Virtual Desktop host pool deployment.
* Graphical processing (GPU) - Do specific groups of users have greater graphical requirements? For example, some users require GPU-based VMs in Azure, as demonstrated in the [Configure GPU for Azure Virtual Desktop - Azure](https://docs.microsoft.com/en-us/azure/virtual-desktop/configure-vm-gpu) guide for configuring GPU VMs.
* Azure region: Do specific groups of OS users operate from various geographic regions? . For example, before you configure the host pool, a user from each region should test latency to Azure by using [Azure Virtual Desktop Experience Estimator](https://azure.microsoft.com/en-gb/services/virtual-desktop/assessment/#estimation-tool) tool. The test user should share the lowest-latency Azure region and the latency in milliseconds for the top three Azure regions.
* Business functions - Can the specific groupings of users be bucketed by business unit, charge code, or their business function? This type of grouping will help align corporate costs in later stages of operations.
* User count - How many users will be in each distinct persona?
* Max session counts - Based on geography and hours of operation, how many concurrent users are expected for each persona during maximum load?

Distinctions in each of the preceding questions will start to illustrate user personas by business function, cost centre, geographic region, and technical requirements. The following table can aid in recording responses to populate a completed assessment or design document:

*Table 23 User Personas Example*

|Criteria|Persona Group 1|Persona Group 2|Persona Group 3|
|---|---|---|---|
|Pools|Pooled|Pooled|Dedicated (security concerns)|
|Density|Light (6 users/vCPU)|Heavy (2 users/vCPU)|Dedicated (1 user/vCPU)|
|Performance|Low|High memory|Low|
|GPU|N/A|Required|N/A|
|Azure region|Australian Central|Australian Central|Australian Central|
|User count|1,000|50|20|
|Session count|200|50|10|


##### 7.1.2. Design Decisions

The table below describes the User Personas design decisions for the solution.

*Table 24 User Personas Design Decisions for the solution*

* **Decision Point**

    * Number of User Personas

* **Design Decision**

    * The considerations above will define the number of unique user personas.

* **Justification**

    * The number of user personas needs to be outlined early in the design process as this will align the group distribution and Windows 10 image alignment for each persona.

--- 
* **Decision Point**

    *  Personal and Pooled Images

* **Design Decision**

    * Pooled, where appropriate.

* **Justification**

    * To ensure images are managed centrally, all will be configured as pooled images unless otherwise required.  

--- 
* **Decision Point**

    * Authentication Requirements

* **Design Decision**

    * Username, password and Azure MFA.

* **Justification**

    * All remote users will be configured to utilise Multi-Factor Authentication as per ISM guidelines. Azure MFA will be implemented for this purpose.

--- 
* **Decision Point**

    * User Personas

* **Design Decision**

    * The considerations above will define the user persona types.

* **Justification**

    * Primary persona types that will be accessing the environment.

--- 
* **Decision Point**

    * User Permissions

* **Design Decision**

    * Active Directory Group membership aligned to User Persona

* **Justification**

    * The groups used to provide users access to the AVD production host pool resources.

--- 
* **Decision Point**

    * User Assignments

* **Design Decision**

    * Aligned to User Persona

* **Justification**

    * User assignment will be aligned to groupings aligned to the persona image type required.

--- 

#### 7.2. Client devices

This section provides guidance for the client device-types that may access the environment and the peripherals that may be connected to the virtual desktops for the solution.

##### 7.2.1. Design Considerations

Consideration must be taken to determine the policy and features available to end users when accessing virtual desktops: 
* **Device Types** – Define what type of device users will access these AVD app and desktop resources from. These may include Windows PC, Apple MacOS, and various mobile devices such as iPads, Android tablets and smart phones.
* **Device Ownership** – Dictates the policies that are applied to a session. For example, a BYOD device may receive a restricted set of policies that block copy and paste between their device and the virtual desktop.

##### 7.2.2. Design Decisions

The table below describes the Client Devices design decisions for the solution.

*Table 25 Client Devices Design Decisions for the solution*


* **Decision Point**

    * Device Ownership

* **Design Decision**

    * Corporate Devices (Intune Managed)
    BYOD Device (External AVD Access)

* **Justification**

    * Both corporate and BYOD devices may access the AVD solution.  

--- 
* **Decision Point**

    * Device Types

* **Design Decision**

    * Corporate Devices (Windows)
BYOD Devices (Any Supported AVD Platform)

* **Justification**

    * Government agencies primarily utilise PCs to access the environments and BYOD will need to access via a support platform or a HTML5 capable browser.  

---
* **Decision Point**

    * Supported Client Devices and Web Clients

* **Design Decision**

    * See Supported Client Devices and Web Clients 

* **Justification**

    * Any of the supported client devices or web clients can be used to access the AVD platform.

---
* **Decision Point**

    * Client Device Configuration

* **Design Decision**

    * Refer to Client Device Considerations.

* **Justification**

    * To meet the requirements of this solution.

---


*Table 26 Client Device Considerations for the solution*

* **Decision Point**

    * Windows Desktop Client Version

* **Design Decision**

    * Latest version

* **Justification**

    * To ensure all security enhancements and feature availability.  Corporate devices will be managed centrally.  
For BYOD, users will be expected to install the client manually or use HTML5 client.

---
* **Decision Point**

    * Base Installation Switches, if required

* **Design Decision**

    * RemoteDesktop.msi /qn

* **Justification**

    * Silent Install for Remote Desktop client when using Device Management / AD Software Deployment.

---
* **Decision Point**

    * Auto Discovery

* **Design Decision**

    * Corporate Email

* **Justification**

    * Set with DNS TXT Record for Email Address Discovery.

---
* **Decision Point**

    * User Restrictions

* **Design Decision**

    * ***Corporate Devices - Intune Managed***
    Not Applicable

    * ***BYOD Device – User Managed***
    Drive redirection or mapping prohibited
    Local printing prohibited
    Clipboard prohibited
    USB redirection prohibited

* **Justification**

    * To enforce security requirements for data loss prevention.
    To copy data to environment it is recommend using USB file transfer from Intune PROTECTED devices using approved USB devices. 

---

### 8. Appendices

#### 8.1. Appendix 1 – FSLogix profile redirections

The redirections.xml file is used to control what folders are redirected out of the profile container to the C: drive. It can also, optionally, sync the contents of these folders to and from the profile container at user sign-out and sign in respectively.

The location of the redirections.xml file resides in the profile container in the <ProfileRoot>\AppData\Local\FSLogix folder. The redirections.xml file is not pre-created in this directory path. You must create the file if it does not exist.

The admin can use the built-in distribution capabilities of the FSLogix agent, or any other mechanism, to place the file into the profile container. To use the built-in copy mechanism, use the RedirXMLSourceFolder setting. At user sign-in, the FSLogix agent will copy the redirections.xml file from the specified location (if it exists) and process it immediately. The user must have Read permissions to the file.

##### 8.1.1. Redirections.xml 

The below outlines the recommended base configuration for the FSLogix redirections.xml file for the solution.  It provides base recommendations on what to include and exclude as part of the FXLogix profile redirection.

    <FrxProfileFolderRedirection ExcludeCommonFolders="0">
	    <Excludes>
            <Exclude Copy="0">Citrix</Exclude>
            <Exclude Copy="0">Videos</Exclude>
            <Exclude Copy="0">Saved Games</Exclude>
            <Exclude Copy="0">Contacts</Exclude>
            <Exclude Copy="0">Tracing</Exclude>
            <Exclude Copy="0">Music</Exclude>
            <Exclude Copy="0">Downloads</Exclude>
            <Exclude Copy="0">$Recycle.Bin</Exclude>
            <Exclude Copy="0">AppData\Local\assembly</Exclude>
            <Exclude Copy="0">AppData\Local\Sun</Exclude>
            <Exclude Copy="0">AppData\Local\VirtualStore</Exclude>
            <Exclude Copy="0">AppData\Local\CrashDumps</Exclude>
            <Exclude Copy="0">AppData\Local\Package Cache</Exclude>
            <Exclude Copy="0">AppData\Local\D3DSCache</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\Software Reporter Tool</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\BrowserMetrics</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\CertificateRevocation</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\CertificateTransparency</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Crashpad</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\FileTypePolicies</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\InterventionPolicyDatabase</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\MEIPreload</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\PepperFlash</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\pnacl</Exclude>     
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Safe Browsing</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\ShaderCache</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\SSLErrorAssistant</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Subresource Filter</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\SwReporter</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\Cached Theme Images</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\Cache</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\Code Cache\js</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\JumpListIcons</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\JumpListIconsOld</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\Media Cache</Exclude>
            <Exclude Copy="0">AppData\Local\Google\Chrome\User Data\Default\Service Worker\CacheStorage</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Internet Explorer\DOMStore</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Internet Explorer\Recovery</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Messenger</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\MSOIdentityCRL\Tracing</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Notifications</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Office\16.0\Lync\Tracing</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Terminal Server Client</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\UEV</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\OneNote\16.0\cache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Teams\Packages\SquirrelTemp</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\Application Shortcuts</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\AppCache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\DNTException</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\GameExplorer</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\IECompatCache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\iecompatuaCache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\Mail</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\Notifications</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\PRICache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\PrivacIE</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\SchCache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\Temporary Internet Files</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\WebCache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\WebCache.old</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\WER</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Windows\1031</Exclude>
            <Exclude Copy="0">AppData\Local\OneDrive\cache</Exclude>
            <Exclude Copy="0">AppData\Local\Microsoft\Teams\Packages\SquirrelTemp</Exclude>
            <Exclude Copy="0">AppData\Roaming\Microsoft\Teams\Service Worker\CacheStorage</Exclude>
            <Exclude Copy="0">AppData\Roaming\Microsoft\Teams\Application Cache</Exclude>
            <Exclude Copy="0">AppData\Roaming\Microsoft\Teams\Cache</Exclude>  
            <Exclude Copy="0">AppData\Roaming\Microsoft Teams\Logs</Exclude>
            <Exclude Copy="0">AppData\Roaming\Microsoft\Teams\media-stack</Exclude>
            <Exclude Copy="0">AppData\Roaming\Sun\Java\Deployment\cache</Exclude>
            <Exclude Copy="0">AppData\Roaming\Sun\Java\Deployment\log</Exclude>
            <Exclude Copy="0">AppData\Roaming\Sun\Java\Deployment\tmp</Exclude>
            <Exclude Copy="0">AppData\Roaming\Macromedia\Flash Player\macromedia.com\support\flashplayer\sys</Exclude>
            <Exclude Copy="0">AppData\Roaming\Macromedia\Flash Player\macromedia.com\support\flashplayer\flashplayer\#SharedObjects</Exclude>
        </Excludes>
        <Includes>
            <Include Copy="3">AppData\LocalLow\Sun\Java\Deployment\security</Include>	
        </Includes>
    </FrxProfileFolderRedirection>