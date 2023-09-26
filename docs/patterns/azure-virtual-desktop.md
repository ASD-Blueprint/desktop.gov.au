---

---

# Azure Virtual Desktop

Azure Virtual Desktop (AVD) is a PaaS offering managed by Microsoft that allows administrators to configure, deploy, and manage, a scalable and flexible virtual desktop solution. AVD enables administrators to publish full virtual desktops or remote applications from a single host pool or create individual applications groupings for different sets of users.

Using the Windows 10 Enterprise multi-session capability exclusively available to Azure Virtual Desktop on Azure services, agencies are able to reduce the number of virtual machines and OS overhead while providing the same resources to users.

AVD provides the following benefits over a traditional Desktop-as-a-Service platform:

- Deliver fully feature-rich and scalable AVDs with Azure Windows 10 multi-session OS.
- Deliver a virtualised and optimised Office 365 experience.
- Bring Your Own Device (BYOD) options to allow for ease of transition.  
- An easy path to modernisation and reduction in data centre expenditure.
- Provide extended support for legacy desktop operating systems or hosting of legacy applications.
- Provide a rich work from home or alternate office solution, that is simple to use.

The following sections of this document outline design defaults and guidance when deploying an AVD platform and is to be treated as an addendum to the [client devices](../../blueprint/client-devices) design.  

[![Typical AVD Architecture](../img/patterns/avd-typical-avd-architecture.png#center)](../img/patterns/avd-typical-avd-architecture.png#center)

This diagram shows a typical architectural overview for AVD.

- The user endpoints reside either within an agency's on-premises network (hybrid) or on the public internet (cloud native). For hybrid deployments, ExpressRoute or a site-to-site VPN extends the on-premises network into Azure. Azure AD Connect integrates the agency's hybrid identity (Active Directory Domain Services (AD DS)) with Azure Active Directory (Azure AD). Cloud native deployments that do not have a hybrid identity (AD DS) can leverage cloud-native Azure AD Domain Services or use native Azure AD join with Intune management.
- The AVD control plane handles Web Access, Gateway, Broker, Diagnostics, and extensibility components like REST APIs.
- The agency manages AD DS and Azure AD, Azure subscriptions, virtual networks, Azure Storage, and the AVD host pools and workspaces.
- The agency uses multiple Azure subscriptions in an [enterprise-scale landing zone architecture](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/architecture) as per [Microsoft's Cloud Adoption Framework](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/overview) for Azure.

## Assumptions

The following represent the assumptions when considering to deploy Azure Virtual Desktop.

- The agency already has a suitable Azure deployment or is planning an Azure deployment within the Australian Azure regions, with appropriate controls implemented up to Protected.
- Licensing is available for Windows 10 Enterprise multi-session, Windows 10 Enterprise and FSLogix.
  - Microsoft 365 E3, E5
  - Windows E3, E5
- Adequate storage is provisioned for the expected number of users. Recommendation of a minimum of 30GB per-user for the Windows profile hosted with the FSLogix solution.
- The agency has read the [client devices](https://desktop.gov.au/blueprint/client-devices.html) blueprint and ensures the [ACSC Windows 10 hardening guidelines](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations) are being adhered to in relation to the AVD Windows 10 session hosts.

## Prerequisites

The following represent the prerequisites before deploying Azure Virtual Desktop.

- **Optional but recommended for this pattern -** Infrastructure with a configured Azure AD tenant and an Active Directory Domain Services (AD DS) that can sync with Azure AD.  AVD previously required session host virtual machines to be domain-joined to an AD DS domain to manage the machines computer object and provide policy and authentication. Depending on the Active Directory architecture chosen – hybrid or cloud native, AVD can be configured to domain-join an existing on-premises AD DS domain (over VPN or ExpressRoute), or a cloud-only Azure AD Domain Services (PaaS) hosted in Azure.

Cloud native:

- Azure AD Connect synced to a cloud-only AD DS IaaS (Infrastructure as a Service) within the Azure deployment, or
- Azure AD DS PaaS configured within the Azure deployment (automatically synchronised to Azure AD), or
- Agencies can choose to opt out of a AD DS infrastructure and use native Azure AD join with Intune management, but there are caveats that need to be assessed (see Active Directory below).

Hybrid:

- Azure AD Connect connected to AD DS (on-premises or hosted in Azure)
- An Azure subscription that contains a virtual network that can connect to the AD DS domain.

## Platform components

### Active Directory

Microsoft Windows Server Active Directory Domain Services (AD DS) and Azure Active Directory (AAD) maintain records of information required to identify services, users and other resources on the network. A domain is a security boundary that exists within AD, and all user accounts are based on domain membership.  

Previously, AVD required session host virtual machines (the virtual desktops) to be domain-joined to an AD DS domain to manage the machines computer object and provide policy and authentication. AVD session hosts can now be joined to Azure Active Directory natively (without AD DS hybrid join) and can be managed by Intune, this includes delivery of security policy. Note that with this option, Intune policy support is limited to policies targeted to the O/S scope and not the user scope with multi-session AVD session hosts, and only local profiles are available. Due to current limitations, the pattern currently recommends deploying AVD with Active Directory Domain services to ensure there is full security policy scope for users and the operating system itself, and the user experience is not impacted. See [Using Azure Virtual Desktop multi-session with Microsoft Endpoint Manager](https://docs.microsoft.com/en-us/mem/intune/fundamentals/azure-virtual-desktop-multi-session).

Depending on the Active Directory architecture chosen – hybrid or cloud native, AVD can be configured to domain-join an existing on-premises AD DS domain (over VPN or ExpressRoute), or a cloud-only Azure AD Domain Services (PaaS) that is hosted in Azure.

The following table outlines the environment specific infrastructure configurations and considerations for Active Directory services for the solution. 

Active Directory Design Decisions for the solution

Decision Point | Design Decision | Justification
--- | --- | ---
Active Directory Domain Type | **Hybrid**: AD Connect synced to AD DS domain<br><br>**Cloud Native**: AD Connect synced to cloud-only AD DS IaaS hosted on Azure OR Azure AD DS PaaS configured on the Azure Platform (automatically synced to Azure AD) | This pattern requires session host virtual machines to be joined to an AD DS domain to support user policy delivery as well as roaming profile support with FSLogix.<br><br>Depending on the Active Directory architecture – hybrid or cloud native AVD can be configured to sync with an existing on-premises AD DS domain, or a cloud-only AD DS IaaS or Azure AD DS PaaS service hosted in Azure. 
Active Directory Domain | [Domain Name] | A new or current AD DS domain will be leveraged for the AVD solution.
Active Directory Domain Functional Level (Hybrid Only) | Windows Server 2016 functional level | Latest support AD Functional level and supported by the AVD service.
Single Sign On | Optional – AD FS is required and supported with Web Client and Windows Client only. | Active Directory Federation Services (AD FS) is required to [support Single Sign On](https://docs.microsoft.com/en-us/azure/virtual-desktop/configure-adfs-sso) (SSO) from the RD Gateway logon point through to the AVD desktop.
AD Organisation Units | `OU=[Agency] Workstations,OU=Windows 10 Virtual,DC=[Domain], DC=GOV, DC=AU` | AVD session host computer accounts will reside within a dedicated Windows 10 virtual desktop OU.
DNS Type | **Hybrid**: AD DS integrated DNS infrastructure<br><br>**Cloud Native**: AD DS / AAD DS integrated DNS infrastructure | The agency will utilise AD DS integrated DNS infrastructure for name resolution. Communication for hybrid will occur inside the Azure VPN. Communication for Cloud native will be configured within Azure subnets.
NTLM Requirements (Hybrid Only) | Add AVD hostnames to security groups | For hybrid environment, the AVD session host names will be added to group policy which is applied to the domain controllers: <br><br>* Network security: Restrict NTLM: Add remote server exceptions for NTLM authentication: `<avd hostnames>`<br>* Network security: Restrict NTLM: Add server exceptions in this domain: `<avd hostnames>`

The following figure outlines a suggested AD DS OU Structure with proposed OUs to accommodate the Virtual Desktop and hybrid joined devices.

![Suggested AD DS OU Structure](../img/patterns/avd-suggested-ad-ds-ou-structure.png#center)

### Group policies

Group policies provide a user experience tailored to the needs and security requirements of an organisation. Policies are created and managed using the Group Policy Management Console (GPMC). Group policy is still required for session hosts when using pooled-random multi-session hosts, which is currently not supported with Intune.

The following tables describe the Group Policy design decisions for the solution.   

Decision Point | Design Decision | Justification
--- | --- | ---
Group Policy template versions (ADMX) | **Windows**: Windows 10 Enterprise ( 21H1)<br>**Microsoft Office**: Microsoft 365 Apps for enterprise / Office 2016 / 2019<br><br>Design Decisions for OS and Office versions, refer to [client devices design](https://desktop.gov.au/blueprint/client-devices.html). | ADMXs required to support the current SAC release of Windows 10, Microsoft 365 and Microsoft Defender for Endpoint.
Group Policy Inheritance | Enabled | The session host desktop policies will be linked to a new OU structure. No existing policies will be used.
Group Policy Loopback Mode | Replace Mode | Loopback processing in Replace Mode will be configured to allow finer grained user policies to be linked at the computers OU level.
ACSC Hardening Guidelines – [Hardening Windows 10](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations), [Microsoft Office Macro Security](https://www.cyber.gov.au/acsc/view-all-content/publications/microsoft-office-macro-security) and [MS Office](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-office-365-proplus-office-2019-and-office-2016). | Deployed | Ensures the ACSC Windows 10 and Office Macro Security hardening recommendations have been assessed and appropriately applied to devices via custom group policies.<br><br>The Client Devices Design Blueprint advice will be followed to harden the AVD VM's except where it does not apply (I.e., Any recommendations that only apply to physical desktop machines and not VM's).  For example, the following outlined hardening recommendations from the guide will not be applied:<br><br>* Early Launch Antimalware<br>* Measured Boot<br>* Secure Boot<br>* BIOS and UEFI passwords<br>* Boot devices<br>* CD burner access<br><br>Exact configurations per the ACSC guidelines will be included in the ‘As-Built As-Configured' documentation. 
ACSC Group Policy – Override | As required | A set of custom group policy settings to override the ACSC group policies can be applied as needed to meet the agencies requirements (i.e., legacy applications configurations, custom organisational settings, etc).
Group Policies Configuration | To be outlined in As Built Configuration | As required to allow system to function correctly and as per the agencies requirements.

### Personalisation and profile management

User profiles and personalisation enable users to configure an application or desktop setting and have that setting retained the next time they login or roam to another computer. This is extremely important when using a virtual desktop, as the local Windows profile is generally always not present for each new virtual desktop login, this can impede the user performance as it can increase user login times and cause issues with applications missing configuration on virtual desktop sessions. 

Each user group, regardless of the required level of personalisation, should have a profile that determines how the user's settings will or will not persist across sessions. Part of the profile configuration includes folder redirection to better optimise the profile.

Microsoft includes several standard options for user profiles, or personalisation. Alternatively, technologies such as Microsoft UE-V and FSLogix, can be used to address user profile and personalisation requirements. If no user profile is configured, a desktop local profile is used, which is seldom optimal.

Microsoft provide the following profile management solutions:

- Local Profiles – Are created and stored on each workstation the user logs on to.
- Mandatory Profiles – A profile that does not save profile changes.
- Roaming Profiles – A network-based profile that allows user settings to be saved.
- Microsoft UE-V – Provides personalisation that operates at the application layer delivering a user's personal Windows experience across many devices, regardless of Windows or the applications are deployed physically or virtually. UE-V templates are created to specify which application settings and files are captured and roamed between sessions.
- FSLogix – Provides a full profile solution in addition to addressing issues when deploying Office 365 in a non-persistent VDI/RDS environment. Using the Profile Container and/or Office 365 Container data is cached locally helping avoid disruptions or application instability during brief storage interruptions like network switch resets or storage controller failovers. This cache sits between the user's desktop and the remote container storage (SMB file share or cloud cache functionality) and is configured either to persist between logons or start fresh each time the user logs in.
- Folder Redirection – Enables certain folders, such as Documents and AppData, to be redirected. This enables user data such as documents and email configuration, to not be loaded at login, which can improve performance when loading profiles. However, some applications communicate with the AppData frequently, making the application appear slow when this folder is redirected.

#### FSLogix considerations

FSLogix provides various functionality and advanced profile configurations that can further optimise the virtual desktop experience:

- Simplification of gold image versioning via the use of application masking. This feature allows the base image to include most optional applications to be installed inside the gold image, while only presenting these applications to authorised users. This simplifies gold image management and application delivery and is relatively simple to setup. For further guidance on this this configuration see [Implement Application Masking Tutorial](https://docs.microsoft.com/en-us/fslogix/implement-application-masking-tutorial).
- Management of Java versioning used for various URLs and applications, for those agencies running multiple java runtimes within the desktop.
- Use of **redirections.xml** with profile management provides the ability to control which portions of the profile (in the C: drive) are redirected out to the remote profile and kept in sync. Exclusions can optimise the desktop environment and are sometimes used to make an application work within a virtual environment. Microsoft recommend using this feature with caution and to only include exclusions where they are fully understood.  
  - This pattern recommends to utilise the crowdsourced **redirections.xml** as a base. **redirections.xml** is maintained by the virtual desktop user community and can be found at [crowdsourced redirections.xml - github](https://github.com/aaronparker/fslogix/blob/main/Redirections/Redirections.csv). At minimum, Microsoft recommend excluding certain Microsoft Teams data, this guidance can be found in the [FSLogix Azure Architecture Guide](https://docs.microsoft.com/en-us/azure/architecture/example-scenario/wvd/windows-virtual-desktop-fslogix#teams-exclusions).
- Cloud Cache is a configuration option that provides greater resilience for the user profile outside of the standard *VHDLocations* configuration which only provides a mounted remote location for the users profile, this can be subject to availability constraints. The use of Cloud Cache in previous versions of FSLogix introduced a 'logon tax' meaning logon times were slower than using *VHDLocations*, at the expense of resilience and availability. Cloud Cache performance has not yet been validated within this pattern. Agencies are encouraged to assess this feature - which can greatly improve resilience if resilience and availability is a concern. For more information on this architecture, see [Cloud Cache for resiliency and availability.](https://docs.microsoft.com/en-us/fslogix/cloud-cache-resiliency-availability-cncpt)

The following table describes the Profile Management design decisions for the solution.

Decision Point | Design Decision | Justification
--- | --- | ---
Personalisation and Profile Management | FSLogix | FSLogix provides the best performance for AVD compared to alternative methods, and supports file shares within Azure. 
FSLogix License Entitlement | Microsoft 365 E3/E5<br>Windows 10 Enterprise E3/E5<br>Remote Desktop Services (RDS) Client Access License (CAL)<br>Remote Desktop Services (RDS) Subscriber Access License (SAL) | Any of these licensing entitlements will provide access to FSLogix Profile Container, Office 365 Container, Application Masking, and Java Redirection tools.
Folder Redirection | Not required | OneDrive redirection of known folders will be used in preference to Folder Redirection, with folders remaining local to the profile. 
Profile Management Configuration | Refer to Personalisation and Profile Management Configuration and FSLogix Office 365 Container Configuration tables below |

The following table describes Personalisation and Profile Management design decisions for the solution. These settings will be configured via ADMX Group Policy. 

Note, settings not specifically called out assume the default configuration.

Decision Point | Design Decision | Justification
--- | --- | ---
Profile Management Version | FSLogix Apps 2.9.7838.44263 | The latest version at the time of writing. The latest version should be assessed and utilised where appropriate. This agent is installed within the Azure marketplace image. The latest version available at time of deployment should be utilised. 
Profile Container | Enabled | FSLogix will be used to manage profiles for the solution.
Office Container | Enabled (optional) | The Office container stores just the Microsoft Office portion of the profile and is utilised to spread storage load over various storage locations.<br />Note, Microsoft Office data is stored in the profile container when the Office container is not utilised, this can simplify the deployment. See [Profile Container vs. Office Container](https://docs.microsoft.com/en-us/fslogix/manage-profile-content-cncpt). 
Cloud Cache | Not configured | VHDLocations will be used in preference of Cloud Cache (CCDLocations) in this pattern due to the resilience and performance using NetApp Files or Azure files seen when appropriately configured for the size of the user base. <br />Agencies are encouraged to test CCDLocations if resilience and availability is a problem. 
Profile Container Logging | Enabled (All logs enabled) | Logging is to be enabled for FSLogix.
Enable Search Roaming | Disabled | FSLogix search functionality is not compatible with Server 2019, Windows 10 multi-session and should be disabled, and subsequent multi-session operating systems with enhanced native search capabilities. 
Search Database Configuration | Not applicable | FSLogix search functionality is not compatible with Server 2019, Windows 10 multi-session. 
Outlook Cached Mode | Enabled | FSLogix Outlook Cached mode will be configured to provide the best user experience.
Dynamic VHD(X) Allocation | Enabled | Dynamic VHD(X) will be configured to provide storage cost savings where possible.
Profile Virtual Disk Location | Agency decision point: Azure Files or Azure NetApp Files for Storage Account.<br><br>Storage Account Name/s: TBD - Share that will be used for profiles | Each user will have a FSLogix virtual disk stored to an Azure location in Australia with data geo-replicated to a secondary location for DR purposes. <br><br>Depending on required usage, performance and disaster recovery requirements, the agency must decide between Azure Files and Azure NetApp files depending on their requirements or consider the Cloud Cache option (out of scope for this blueprint). <br><br>For further information, see [Azure Files and Azure NetApp Files comparison](https://docs.microsoft.com/en-us/azure/storage/files/storage-files-netapp-comparison).
Virtual Disk Type | VHDX | VHDX is the latest available disk type and suitable for this solution.
Allow concurrent users sessions | Enabled | Concurrent user sessions must be enabled to allow multi-session desktop scenarios. 
Delete local profile when FSLogix Profile should apply | Enabled | To provide the use a clean desktop session on each desktop launch, it is recommended to enable this setting. 
Redirections File Path | Azure Storage account or other domain share | The redirections configuration XML will be hosted on a common share, to be determined by the agency.<br /> 
Redirection Exclusions | Copy `Redirections.xml` file to `[TBD-DOMAIN]\NETLOGON\FsLogix\`<br><br>See recommended [crowd sourced redirections.xml](https://github.com/aaronparker/fslogix/blob/main/Redirections/Redirections.csv) for base inclusions.<br />For structure and creation of the file see [Structure of redirections.xml file](https://docs.microsoft.com/en-us/fslogix/manage-profile-content-cncpt#structure-of-redirectionsxml-file). | It is recommended to use the redirections file with caution. Base configuration recommended initially.<br>Note, the folder path to the redirections.xml path is set through Group Policy and points to the folder where the file exists, not the full path of the file itself. 
Swap directory name components | Enabled: Swap directory name components | This configuration allows for easier navigation of the user VHDX folders when troubleshooting and during maintenance. 

The following table includes FSLogix Office 365 Container Configuration.

Decision Point | Design Decision | Justification
--- | --- | ---
O365 Virtual Disk Location | Network Share: [TBD - Network Share to be used for Virtual Disks] | Each user will have a FSLogix virtual disk stored to an Azure location in Australia with data geo-replicated to a secondary location for DR purposes. 
Virtual Disk Access type | Unique disk per session | Required for this deployment type and provides support for OST and OneDrive. 
Virtual Disk Type | VHDX | VHDX is the latest available disk type and suitable for this solution.
O365 Container Logging | Enabled | Logging is to be enabled for FSLogix.
Concurrent Users Sessions | Allowed | Concurrent user sessions must be enabled to allow multi-session desktop scenarios. 
Office 365 Activation Data | Enabled | Office 365 activation data will be stored in the O365 container.
Office Cache Data | Enabled | Office 365 cache data will be stored in the O365 container.
OneDrive Data | Enabled | OneDrive data will be stored in the O365 container.
OneNote Data | Enabled | OneNote data will be stored in the O365 container.
Outlook Data | Enabled Outlook data will be stored in the O365 container.|Outlook data will be stored in the O365 container.
Outlook Personalisation Data | Enabled | Outlook personalisation data will be stored in the O365 container.
SharePoint Data | Not configured | Not configured 
Teams Data | Disabled | Teams data will not stored in the O365 container. This allows optimisation of the profile size in the Profile container to avoid profile bloat. 
Outlook Container Mode | Cached | Outlook cached mode will be enabled on successfully container attach.
Dynamic VHD(x) | Enabled | Dynamic VHD(x) will be utilised to save on required space. Disks will grow only as space is required.
Search Roaming | Disabled | FSLogix search functionality is not compatible with Server 2019, Windows 10 multi-session and should be disabled, and subsequent multi-session operating systems with enhanced native search capabilities. 
Search Database | Not applicable | FSLogix search functionality is not compatible with Server 2019, Windows 10 multi-session. 
Sync OST to VHD | Enabled: Move OST to VHD | Existing OST's are syncd to VHD/X when new VHD/X is created. 
 Swap directory name components | Enabled: Swap directory name components | This configuration allows for easier navigation of the user VHDX folders when troubleshooting and during maintenance. 

### Resource tags

Resource Tags can be applied to objects within Azure to organise them into categories. Using Tags, resources can be retrieved from multiple Resource Groups. Tags enable simplified management and Azure billing capability.

A Resource Tag is comprised of a Key and a Value. Both are defined by an administrator.

The following tables describe the Azure Resource Tags design decisions for the solution. 

Decision Point | Design Decision | Justification
--- | --- | ---
Tags | Configured | Tagging of resources provides a consistent way to view subscription costs by type.
Tags Configured | Tags configured for:<br><br>Category<br>Environment Type<br>Description<br>Owner | Resource tags will be configured for each host pool to provide details for category, environment type, description, and owner.

## Azure Virtual Desktop components

### Control plane

Azure AVD is a PaaS offering managed by Microsoft that allows administrators to configure, deploy, and manage, scalable flexible solutions. AVD enables administrators to publish either full desktops or distinct remote apps from a single host pool or create individual app groupings for different sets of users.

Using the Windows 10 Enterprise multi-session capability exclusively available to Azure Virtual Desktop on Azure services, corporations and departments are able to reduce the number of virtual machines and OS overhead while providing the same resources to users.

The table below describes the AVD Control Plane design decisions for the solution.

Decision Point | Design Decision | Justification
--- | --- | ---
AVD Control Plane | Australia East | Metadata will be stored in Azure geography located in Australia. <br><br>Note, at time of writing the Australia East location for AVD metadata is in public preview. <br><br>Note: This is not the location where virtual desktops are hosted, this will be within the Azure landing zone in the Australian regions selected when creating the desktops. <br><br>The stored information is encrypted at rest, and geo-redundant mirrors are maintained within the geography. Customer data, such as app settings and user data, resides in the location the customer chooses and isn't managed by the service. For further information, see [Data locations for Azure Virtual Desktop - Azure Microsoft Docs](https://docs.microsoft.com/en-us/azure/virtual-desktop/data-locations).
Azure License Entitlement | Microsoft 365 E3/E5 <br>Windows 10 Enterprise E3/E5 | Any of these licensing entitlements will provide access to AVD. <br><br>Note: AVD can be accessed from non-Windows Pro endpoints if a Microsoft 365 E3/E5 or Windows 10 VDA per user license is available.
Windows 10 Enterprise and Windows 10 Enterprise Multi Session License Entitlements | Microsoft 365 E3/E5 <br>Windows E3/E5 | Any of these licensing entitlements will provide access to Windows 10 and Windows 10 Multisession on Azure.
Encryption | TLS 1.2 | [TLS 1.2 is used for all connections](https://docs.microsoft.com/en-us/azure/virtual-desktop/network-connectivity) initiated from the clients and session hosts to the Azure Virtual Desktop infrastructure components.
Identity and Access Configuration | Refer to AVD Control Plane Configuration table | To meet the requirements of this design
Connectivity | Agency decision point: <br />Optimised through SIG public internet or RDP Shortpath | AVD does not currently support [ExpressRoute](https://docs.microsoft.com/en-us/azure/expressroute/expressroute-faqs) optimisation with Microsoft peering. It is recommended that outgoing connections from within the agency to AVD desktops are optimised by either bypassing the agency web proxy, but still egressing the agency's SIG (direct route) or utilising [Azure RDP Shortpath](https://docs.microsoft.com/en-us/azure/virtual-desktop/shortpath) if there is direct line of sight to the Azure Landing zone inside the organisation.<br><br />RDP Shortpath is the recommended approach where it is available the agency. 

AVD Control Plane Configuration table:

Decision Point | Design Decision | Justification
--- | --- | ---
Administrator Access | Azure Active Directory | This provides native AD auditing, password policies and account control.
User Access | Azure hosted Web URL | Users will access the solution via the Microsoft hosted Remote Desktop Web URL: `https://rdweb.wvd.microsoft.com/arm/webclient/`

### Host pool

A host pool is a collection of Azure virtual machines that register to AVD as session hosts. All session host virtual machines in a host pool are sourced from the same image providing a consistent user experience.

A host pool can be one of two types:

- **Personal** – Where each session host is assigned to individual users.
- **Pooled** – Where session hosts can accept connections from any user in an authorised app group within the host pool.

Host Pool configuration allows the setting of properties to change load-balancing behaviour, how many sessions each session host can take, and what a user can do to session hosts in the host pool while signed into an AVD session.

Azure Virtual Desktop supports two load-balancing methods. Each method determines which session host will host a user's session when connected to a resource in a host pool.

The following load-balancing methods are available:

- **Breadth-first** – Allows user sessions to be distributed evenly across the session hosts in a host pool.
- **Depth-first** – Allows user sessions to completely fill a session host in the host pool. Once the first session reaches its session limit threshold, the load balancer directs any new user connections to the next session host in the host pool until it reaches its limit.

The table below describes the Host Pool design decisions for the solution. 

Decision Point | Design Decision | Justification
--- | --- | ---
Metadata | Australia East | Metadata will be stored in Azure geography associated in Australia East. For further information, see [Control plane](#control-plane) section.
Host Pool Types | Pooled | Pooled is the preferred selection to ensure consistency.
Load Balancing Method | Breadth-First | User sessions to be distributed evenly across the session hosts in a host pool.
Number of Host Pools | Dependant on User Personas | The number of host pools will be aligned to the number and size of the user personas, and the VM-types assigned.
Host Pool Configuration | Refer to Host Pool Configuration table | To meet the requirements of this design.

Host Pool Configuration table:

Decision Point | Design Decision | Justification
--- | --- | ---
Host Pool Name | `<agn>-<hp>-<os>-<pooltype>` | Host Pool naming will be configured as follows:<br><br>`<agn>` = Agency Name<br>`<hp>` = Host Pool<br>`<os>` = Windows Version<br>`<pooltype>` = Pool Name<br><br>e.g. agency-hp-win10-fin
Friendly Name | Aligned to Host Pool name | Descriptive text that aligns to the host pool name.<br><br>e.g. Agency Windows 10
Access | Aligned to user groups | The AVD Session Hosts will accept any user connection with access to the host pool.
Azure Resource Group | `<rg>-<agn>-<avd>` | Host Pool naming will be configured as follows:<br><br>`<rg>` = Resource Group <br>`<agn>` = Agency Name<br>`<avd>` = Azure Virtual Desktop
App Groups | `<agn>-<hp>-<os>-<pooltype>-<appgroup>` | Host Pool naming will be configured as follows:<br><br>`<agn>` = Agency Name<br>`<hp>` = Host Pool<br>`<os>` = Windows Version<br>`<pooltype>` = Pool Name<br>`<appgroup>` = Application Group<br><br>e.g. agency-hp-win10-fin-accapps
Max Session Limit | Dependant on user-types | To ensure no more than a defined number of users can connect to a single Windows 10 session. Can restrict number of users to a maximum limit per session host.  For best performance and density estimates, see section Session Host Sizing in the next section for further information.
Session Host Members | View Client Devices guidelines | As per the Client device's blueprint guidelines.
Validation Environment | Enabled | Allows to monitor service updates before rolling them out to the Production host pool.
Assignment Method | Automatic | Users will be automatically assigned to a session host.
RDP Properties | The following to be configured via ADMX Group Policies:<br><br>Multi-monitor mode: Enabled<br>Drive redirections: Disabled<br>Remote audio mode: Play Locally<br>RDP Properties Configuration: `audiocapturemode:i:1;drivestoredirect:s:;redirectcomports:i:0;camerastoredirect:s:*;devicestoredirect:s:*;redirectclipboard:i:0;redirectprinters:i:0;redirectsmartcards:i:0` | To restrict data leaving the environment and to optimise performance and workability.

### Session host

Each user group will utilise a desktop (Session Host) or RemoteApp based on an underlying image. Most organisations try to consolidate images into as few as possible while still providing a desktop environment that is not bloated with applications most users do not use.

Users are provided access to RemoteApps or desktops based on group memberships permissions and business function.

The Azure VM generation (version) can limit what operating system features are available such as UEFI (Unified Extensible Firmware Interface) support. Generation 2 is now available within Australian regions and should be used for Azure Virtual Desktops. The following Windows 10 features are supported with [Trusted Launch](https://docs.microsoft.com/en-us/azure/virtual-machines/trusted-launch):

- Secure boot
- vTPM
- Virtualization-based security (VBS).

An AVD session host consists of the following core components:

- **Operating System** – The correct OS is critical to the success of a hosted desktop environment. It forms the foundation of the SOE and provides the launchpad for the applications deployed to it.
- **Applications** – The applications deployed to an AVD image and how each are deployed will affect the end user experience. Choosing the right applications and their configuration is critical to solution success. Applications are able to be delivered to an AVD image in the following ways:
  - Installed – The application is part of the base desktop image. Every user receiving the image also receives the application. Typically, common applications are installed into the base image. FSLogix application masking can be utilised to prevent the user from seeing a particular application within the image, allowing the administrator to maintain a small number of session pools
  - App-V – The application is delivered via the network, to the desktop just-in-time or pre-cached. The application is not traditionally installed within the OS, though executes within a temporary runtime environment. Applications are only visible to users who are granted access or are published globally
  - RemoteApp – The application is hosted on a set of session host servers. Technically challenging applications are often delivered via the RemoteApp model
  - MSIX App Attach – The application is delivered via the network, to the desktop. App Attach enables packaged applications to be stored outside the AVD sessions hosts to be maintained and updated separately to the image. This reduces the need to maintain multiple master images for different applications and/or the ability to package all virtualised apps into a single image.

The table below describes the Session Host design decisions for the solution.

Decision Point | Design Decision | Justification
--- | --- | ---
Azure Region | Any Azure Australian region | In-line with government requirements and existing Azure Tenant / Subscription regions for this blueprint.
Number of Session Hosts | Dependant on user persona types and the size of the group. | General guidance for Light, Medium, Heavy and Power user configuration is provided below.<br><br>See Session Host Sizing table.<br><br>For further information, see [virtual machine sizing](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/virtual-machine-recs).
Number of Images | One per User Persona type | It is recommended that one image will be deployed per User Persona type to allow easier image management. 
Operating System | Windows 10 Enterprise Multi-Session, with Microsoft 365 Apps from the Azure Marketplace | Latest stable version of Windows 10 available from the Azure Marketplace.
Supported Language Packs | EN-AU | The default language is English.
Time Zone | Australian Eastern Standard Time (AEST) | The default time zone AEST.
Image Source | Azure Marketplace | The Windows 10 Enterprise Multi-Session with Microsoft 365 Apps SOE available from the Azure Marketplace will be utilised for the AVD image deployment.
Image Deployment Method | Azure Resource Manager | AVD using Azure Resource Manager will be used to deploy pooled random virtual machines.
Deployed Image Update Process | Azure Resource Manager (ARM) Redeploy and auto updates | ARM Redeploy capability with auto updates will be leveraged to provide ‘Security and Feature' updates to the AVD images.
Encryption | Azure Disk Encryption | Session host disks to be encrypted at rest using Azure Disk encryption. Using the Bitlocker feature of Windows, volume encryption for the OS and data disks of Azure virtual machines (VMs) will be configured. Will also be integrated with Azure Key Vault to help control and manage disk encryption keys and secrets.
Graphical Application Support | [GPU Capable VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-gpu) available in selected Australian Regions | Windows 10 VMs with higher GPU capability are available from Azure if there is a need to run graphical applications.
Session Host Power Management | [Azure Automation](https://docs.microsoft.com/en-us/azure/virtual-desktop/set-up-scaling-script) | Azure Automation will be utilised to scale session host power management. This will enable shutting down and deallocating session host VMs during off-peak usage hours, and powering on and reallocating as required (during peak hours).
Session Host Configuration | Refer to Session Host Configuration table | Session Host configuration.
Deployed Applications | Agency defined | Applications to be deployed post platform deployment.
OS Optimisations | [Virtual Desktop Optimization Tool](https://techcommunity.microsoft.com/t5/azure-virtual-desktop/windows-virtual-desktop-optimization-tool-now-available/m-p/1558614) | Microsoft recommend some optimisation to the OS image to increase performance and scalability and enhance the overall end user experience. 
Antivirus | Microsoft Defender for Endpoint | Microsoft Defender for Endpoint will be configured for the AVD platform. <br><br>For configuration items that apply specifically to an AVD environment, such as a dedicated VDI file share and specific exclusions, refer to [Deployment guide for Microsoft Defender Antivirus in a virtual desktop infrastructure (VDI) environment](https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/deployment-vdi-microsoft-defender-antivirus?view=o365-worldwide) and for common client device configuration settings, refer to [client devices design](../../blueprint/client-devices).

Session Host Sizing table:

Workload type | Maximum users per vCPU | vCPU/RAM/OS storage minimum | Example Azure instances | Profile container storage minimum
--- | --- | --- | --- | ---
Light | 6 | 8 vCPUs, 16 GB RAM, 16 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4 | 30 GB
Medium | 4 | 8 vCPUs, 16 GB RAM, 32 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4 | 30 GB
Heavy | 2 | 8 vCPUs, 16 GB RAM, 32 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4 | 30 GB
Power | 1 | 8 vCPUs, 16 GB RAM, 340 GB storage | D8s_v4, F8s_v2, D8as_v4, D16s_v4, F16s_v2, D16as_v4, NV12, NVv4 | 30 GB

Session Host Configuration table:

Decision Point | Design Decision | Justification
--- | --- | ---
VM Size | Dependant on user persona type selected | Dependant on user persona type selected.
Azure VM Generation | Generation 2 | Generation 2 should be selected to support security features such as UEFI.
Trusted Launch | Configured | To increase the security posture of the virtual machine.
Name Prefix | `<agn><os><shg><nnn>` | To meet the requirements of this design. App Group naming will be configured as follows:<br><br>`<agn>` = Agency Name<br>`<os>` = Windows Version<br>`<shg>` = Session Host Group<br>`<nnn>` = Numerical Iteration<br><br>e.g. agnwin10acc001
Domain | [Agency Domain] | As per agencies domain name.
AAD DS / AD DS Domain Join Account | svc_domjoin@[Agency Domain] | Service account in the agencies domain.
Domain Joined type | Hybrid-Joined (depending on Agency Active Directory selection) | AVD Session-hosts will be managed through AAD DS / AD DS.
Organisational Unit | `OU=[Agency] Workstations,OU=Windows 10 Virtual,DC=[Domain], DC=GOV, DC=AU` | The guidance is to deploy the session hosts to a dedicated organisation unit for the session hosts. The agency can determine where that location best fits with the deployment.
IP Subnet | Customer design decision based on networking standards | Adequately sized and number of subnets to be configured as required to host the number of session hosts.
Network Security Group | `<agn>-<env>-<loc>-<vnet>-<host>-<nsg>` | Azure Virtual Desktop Subnet Network Security Gateway (NSG) with a default deny rule for all traffic, which can be modified as required for specific workloads. Naming convention as follows:<br><br>`<agn>` = Agency <br>`<env>` = Environment (e.g. Prod)<br>`<loc>` = Location (e.g. auc1)<br>`<vnet>` = Virtual Network<br>`<host>` = Workloads the vnet is hosting (I.e. Desktops)<br>`<nsg>` = Network Security Group
Public Inbound Ports | Disabled | A default deny rule for all traffic, which can be modified as required for specific workloads. AVD control plane traffic will ingress regardless of the NSG configuration.
Minimum Outbound Ports Allowed | 135/TCP (RPC Endpoint Mapper)<br>1024-65535/TCP (RPC)<br>636/TCP (LDAP SSL)<br>3268/TCP (LDAP GC)<br>3269/TCP (LDAP GC SSL)<br>53/TCP/UDP (DNS)<br>88/TCP/UDP (Kerberos)<br>445/TCP (SMB)<br>1688/TCP (KMS)<br>80 & 443 TCP (internet) | To meet the minimum requirements of this blueprint for the Virtual Desktop to communicate with Active Directory.  Agency to assess additional egress ports based on requirements. More information around network port requirements are outlined in the Access and connectivity section.<br><br>Note 1: AVD control plane outbound ports are not explicitly configured on the NSG and are controlled per URL on the Azure Firewall egress point.<br><br>Note 2: An internet filtering solution for user traffic is in place outside of the Azure Firewall.
Associated Host Pool | Aligned to Host Pools required | Session Hosts will align to the host pools created.
Built-In Applications | As required | Enterprise applications installed in the image as required.

### App groups

App groups are logical grouping of applications installed on session hosts in the host pool. An app group can be one of two types:

- RemoteApp - Enables a user to access the RemoteApps individually selected and published to the app group. Multiple RemoteApp app groups can be created to accommodate different worker scenarios. Distinct RemoteApp app groups can also contain overlapping RemoteApps.
- Desktop – Allows a user to access the full desktop session host. By default, a desktop app group (named "Desktop Application Group") is automatically created whenever a host pool is deployed. 

To access published resources, users must be assigned to an app group. When assigning users to app groups, consider the following things:

- A user can be assigned to both a desktop app group and a RemoteApp app group in the same host pool. However, users can only launch one type of app group per session.
- A user can be assigned to multiple app groups within the same host pool allowing the app feed to be an accumulation of both app groups. 

The table below describes the App Group design decisions for the solution. 

Decision Point | Design Decision | Justification
--- | --- | ---
Azure Region | Australia East | Metadata will be stored in Azure geography associated with Australia East. For further information, see [Control plane](#control-plane) section.
Number of App Groups | Aligned to unique images required | App groups will be created as per unique images required.
App Group Type | Desktop (one per host pool) <br>RemoteApp (multiple as required per host pool) | Desktop provides the full desktop experience, only one created per host pool. RemoteApp provides published apps, multiple can be created per host pool.
App Group Configuration | Refer to App Group Configuration table | To meet the requirements of this design.

App Group Configuration table:

Decision Point | Design Decision | Justification
--- | --- | ---
App Group Name | `<agn>-<hp>-<os>-<loc>-<agn>` | To meet the requirements of this design. App Group naming will be configured as follows:<br><br>`<agn>` = Agency Name<br>`<hp>` = Host Pool<br>`<os>` = Windows Version<br>`<loc>` = Location<br>`<agn>` = App Group Name<br><br>e.g. agency-hp-win10-auc-dag
Friendly Name | Aligned to App Group Name | Descriptive text that aligns to the host pool name.<br><br>e.g. Agency Windows 10 Desktop App Group
Azure Resource Group | `<rg>-<agn>-<avd>` | Host Pool naming will be configured as follows:<br><br>`<rg>` = Resource Group <br>`<agn>` = Agency Name <br>`<avd>` = Azure Virtual Desktop
App Group Type | Desktop / RemoteApp | Desktop or RemoteApp selected depending on the requirement of a full desktop experience or applications only.
Description | Aligned to App Group Name | Descriptive text that aligns to the app group name. 
Assignments | Aligned to User Persona | User assignment will be aligned to groupings aligned to the persona image type required.
Published Applications | As required | List published applications required to be launch separately from the desktop.
Host Pool | Aligned to the host pool | Each App Group will be aligned to a host pool.
Workspace | Aligned to the host pool | Each Workspace will be aligned to a host pool.

---

### Workspaces

Workspaces are logical grouping of App Groups in Azure Virtual Desktop. Each AVD App Group must be associated with a Workspace for users to see the remote apps and desktops published to them.

The table below describes the Workspace design decisions for the solution. 

Decision Point | Design Decision | Justification
--- | --- | ---
Number of Workspaces | Aligned to logical grouping of App Groups | Workspaces will be created for each logical grouping of App Groups.
Workspace Name | I.e. ‘Accounting Workspace' | The workspace name will be descriptive for the App Group collection.
Workspace Configuration | Refer to Workspace Configuration table | Refer to Workspace Configuration table.

Workspace Configuration table:

Decision Point | Design Decision | Justification
--- | --- | ---
Workspace Name | I.e. ‘Accounting Workspace' | The workspace name will be descriptive for the App Group collection.
Friendly Name | Aligned to Workspace Name | Descriptive text that aligns to the Workspace name.<br><br>e.g. Agency Windows 10 Desktop Workspace
Azure Resource Group | `<rg>-<agn>-<avd>` | Host Pool naming will be configured as follows:<br><br>`<rg>` = Resource Group <br>`<agn>` = Agency Name<br>`<avd>` = Azure Virtual Desktop
Description | Aligned to Workspace Name | Descriptive text that aligns to the workspace name. 
Host Pool | Aligned to Host Pool | Each Workspace will be aligned to a host pool.
App Groups | List of App Groups | List of App Groups that will form this Workspace.

### Session and idle timeouts

Session and Idle timeouts can be configured to assist with security and resource availability. The following types of session timeouts can be configured:

- Disconnected Session Timeout – Defines the period that a disconnected session remains disconnected before automatically being logged off.
- Idle Session Timeout – Defines the number of minutes that a continuously idle session remains active before being disconnected.

The table below describes the key Session and Idle Timeout design decisions for the solution. 

Decision Point | Design Decision | Justification
--- | --- | ---
Disconnected Session Timeout | 8 hours | To let users reconnect to their session during a standard workday.
Idle Session Timeout | 15 minutes | Short idle timeout (or Machine inactivity limit) to ensure unattended virtual desktops are disconnected.  This is defined as per [ACSC Windows 10 Hardening guide](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations).

## Access and connectivity

### Gateway firewall 

AVD utilises a number of URLs for its associated services. It is important that firewall rules are configured to enable access to these services to ensure communication flow and that these communication paths are optimised, ideally outside of the chosen Edge Firewall within Azure.

The blocking of these URLs is unsupported and will affect service functionality. These URLs only correspond to Azure Virtual Desktop sites and resources, and do not include URLs for other services like Azure Active Directory.

The table below describes the key Gateway Firewall design decisions for the solution.

Decision Point | Design Decision | Justification
--- | --- | ---
Gateway Firewall | Azure Firewall | Azure Firewall is the recommended firewall solution and does not require a third-party solution.

- [Required Session Host Allow List](https://docs.microsoft.com/en-us/azure/virtual-desktop/safe-url-list#virtual-machines)
  - These URLs are required to provide minimum AVD functionality.
  - **Note:** AVD currently does not have a list of IP address ranges that can be unblocked to allow network traffic. Only the support of unblocking specific URLs is supported at this time.
  - If using a Next Generation Firewall (NGFW), you will need to use a dynamic list specifically made for Azure IPs to make sure you can connect.
    ```
    *.wvd.microsoft.com 443
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
    ```
- [Recommended Session Host Allow List](https://docs.microsoft.com/en-us/azure/virtual-desktop/safe-url-list)
  - These URLs are recommended to provide best user experience and functionality.
    ```
    *.microsoftonline.com 443
    *.events.data.microsoft.com 443
    www.msftconnecttest.com 443
    *.prod.do.dsp.mp.microsoft.com 443
    login.windows.net 443
    *.sfx.ms 443
    *.digicert.com 443
    *.azure-dns.com 443
    *.azure-dns.net 443
    ```
- [Required Remote Desktop Client Allow List](https://docs.microsoft.com/en-us/azure/virtual-desktop/safe-url-list#remote-desktop-clients)
  - These URLs are required to provide minimum Remote Desktop client functionality.
    ```
    *.wvd.microsoft.com 443
    *.servicebus.windows.net 443
    go.microsoft.com 443
    aka.ms 443
    docs.microsoft.com 443
    privacy.microsoft.com 443
    query.prod.cms.rt.microsoft.com 443
    ```

### Client access

The following client access methods are available to clients:

- **Windows Remote Desktop Client** – Installed on user devices and provides users with secure, self-service access to company resources including, applications, and desktops from any of the user's Windows devices.
- **Web Client (HTML5)** – Allows access to Azure Virtual Desktop resources from any HTML5 compatible web browser, without the lengthy installation process on the Windows Desktop client.
- **Android Remote Desktop Client** – Allows users to access Azure Virtual Desktop resources directly from an Android device or a Chromebook that supports the Google Play Store.
- **MacOS Remote Desktop Client** –Allows users to access Azure Virtual Desktop resources from an Apple computer.
- **iOS Remote Desktop Client** – Allows users to access Azure Virtual Desktop resources directly from an iOS device (iPhones and iPads).
- **RDP Shortpath** – Is an Azure Virtual Desktop optimisation feature that allows the client device to establish a direct UDP-based connection between the Remote Desktop Client and the Session host. The feature requires that the client has routing capability into the Azure VNet where the Session hosts reside. This connection method offers a secure reliable and low latency connection directly to Azure for agencies that meet the requirements.

The table below describes the Client Access design decisions for the solution. 

Decision Point | Design Decision | Justification
--- | --- | ---
Primary Client Access | Web Client (HTML5)<br>Windows Desktop Client | User will primarily access AVD resources using the [Web Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-web) (HTML5) and the Windows Desktop Client.<br /><br />The Windows Desktop client installed on a Windows Desktop client is the recommend client access method as it provides support for RDP Shortpath. 
Browser Support | Microsoft Edge<br>Apple Safari<br>Mozilla Firefox<br>Google Chrome | All current browsers advised by Microsoft which have HTML5 compatibility will be supported.
Conditional Access App Exclusions | Exclude from blocking policies:<br>Windows Virtual Desktop<br>Windows Virtual Desktop Client<br>Include in MFA grant policy:<br>Windows Virtual Desktop<br>Windows Virtual Desktop Client | Exclusion of any “All Cloud Apps” policies that prevent the use of Azure Virtual Desktop should be implemented to allow connectivity from non-agency endpoints.
Conditional Access Session Control | Set to 14 hours (when KMSI enabled) | Session Control policy should be implemented to enforce MFA after long periods when KMSI (Keep me Signed In) is implemented.
RDP Shortpath | Configured | RDP Shortpath should be enabled if there is line of sight to the Azure Landing Zone, as it offers better reliability and consistent latency when compared to an Internet connection. 

## Users and devices

### User personas

Personas identify the user types, their requirements and represent the typical user-type for the solution. 

In order to identify how many distinct personas will be required to support all of the users, the following criteria will need to be considered.

- Personal pools - Do specific groups of users require dedicated virtual desktops, instead of pools? For example, security, compliance, high-performance, or noisy-neighbour requirements might lead to some users running on dedicated desktops that aren't part of a pooling strategy. You'll enter this information by specifying a host pool type of personal during the Azure Virtual Desktop host pool deployment.
- Density - Do specific groups of users require a lower-density desktop experience? For example, heavier density might require two users per virtual central processing unit (vCPU) instead of the light-user assumption of six users per vCPU. You'll enter density information in the pool settings of the Azure Virtual Desktop host pool deployment.
- Performance - Do specific groups of users require a higher-performance desktop experience? For example, some users require more memory per vCPU than the assumed 4 gigabytes (GB) of RAM per vCPU. You'll enter the VM sizing in the virtual machine details of the Azure Virtual Desktop host pool deployment.
- Graphical processing (GPU) - Do specific groups of users have greater graphical requirements? For example, some users require GPU-based VMs in Azure, as demonstrated in the [Configure GPU for Azure Virtual Desktop - Azure](https://docs.microsoft.com/en-us/azure/virtual-desktop/configure-vm-gpu) guide for configuring GPU VMs.
- Azure region: Do specific groups of OS users operate from various geographic regions? . For example, before you configure the host pool, a user from each region should test latency to Azure by using [Azure Virtual Desktop Experience Estimator](https://azure.microsoft.com/en-gb/services/virtual-desktop/assessment/#estimation-tool) tool. The test user should share the lowest-latency Azure region and the latency in milliseconds for the top three Azure regions.
- Business functions - Can the specific groupings of users be bucketed by business unit, charge code, or their business function? This type of grouping will help align corporate costs in later stages of operations.
- User count - How many users will be in each distinct persona?
- Max session counts - Based on geography and hours of operation, how many concurrent users are expected for each persona during maximum load?

Distinctions in each of the preceding questions will start to illustrate user personas by business function, cost centre, geographic region, and technical requirements. The following table can aid in recording responses to populate a completed assessment or design document:

Criteria | Persona Group 1 | Persona Group 2 | Persona Group 3
--- | --- | --- | ---
Pools | Pooled | Pooled | Dedicated (security concerns)
Density | Light (6 users/vCPU) | Heavy (2 users/vCPU) | Dedicated (1 user/vCPU)
Performance | Low | High memory | Low
GPU | N/A | Required | N/A
Azure region | Australian Central | Australian Central | Australian Central
User count | 1,000 | 50 | 20
Session count | 200 | 50 | 10

The table below describes the User Personas design decisions for the solution.

Decision Point | Design Decision | Justification
--- | --- | ---
Number of User Personas | The considerations above will define the number of unique user personas. | The number of user personas needs to be outlined early in the design process as this will align the group distribution and Windows 10 image alignment for each persona.
Personal and Pooled Images | Pooled, where appropriate | To ensure images are managed centrally, all will be configured as pooled images unless otherwise required.  
Authentication Requirements | Username, password and Azure MFA | All remote users will be configured to utilise Multi-Factor Authentication as per ISM guidelines. Azure MFA will be implemented for this purpose.
User Personas | The considerations above will define the user persona types | Primary persona types that will be accessing the environment.
User Permissions | Active Directory Group membership aligned to User Persona | The groups used to provide users access to the AVD production host pool resources.
User Assignments | Aligned to User Persona | User assignment will be aligned to groupings aligned to the persona image type required.

### Client devices

This section provides guidance for the client device-types that may access the environment and the peripherals that may be connected to the virtual desktops for the solution.

Consideration must be taken to determine the policy and features available to end users when accessing virtual desktops: 

- **Device Types** – Define what type of device users will access these AVD app and desktop resources from. These may include Windows PC, Apple MacOS, and various mobile devices such as iPads, Android tablets and smart phones.
- **Device Ownership** – Dictates the policies that are applied to a session. For example, a BYOD device may receive a restricted set of policies that block copy and paste between their device and the virtual desktop.

The table below describes the Client Devices design decisions for the solution.

Decision Point | Design Decision | Justification
--- | --- | ---
Device Ownership | Corporate Devices (Intune Managed)<br>BYOD Device (External AVD Access) | Both corporate and BYOD devices may access the AVD solution.  
Device Types | Corporate Devices (Windows)<br>BYOD Devices (Any Supported AVD Platform) | Government agencies primarily utilise PCs to access the environments and BYOD will need to access via a support platform or a HTML5 capable browser.<br />A Windows Client desktop is the preferred method for supportability. 
Supported Client Devices and Web Clients | See Supported [Client Devices](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) and [Web Clients](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-web) | Any of the supported client devices or web clients can be used to access the AVD platform. 
Client Device Configuration | Refer to Client Device Considerations table | To meet the requirements of this solution.

Client Device Considerations table:

Decision Point | Design Decision | Justification
--- | --- | ---
Windows Desktop Client Version | Latest version | To ensure all security enhancements and feature availability.  Corporate devices will be managed centrally.<br><br>For BYOD, users will be expected to install the client manually or use HTML5 client. The full desktop client is recommended. 
Base Installation Switches, if required | `RemoteDesktop.msi /qn` | Silent install for Remote Desktop client when using Device Management / AD Software Deployment.
Auto Discovery | Corporate Email | Set up DNS TXT Record for [Email Address Discovery](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-email-discovery).
User Restrictions | **Corporate Devices - Intune Managed**<br>Not Applicable<br><br>**BYOD Device – User Managed**<br>Drive redirection or mapping prohibited<br>Local printing prohibited<br>Clipboard prohibited<br>USB redirection prohibited | To enforce security requirements for data loss prevention.<br><br>To copy data to environment it is recommend using USB file transfer from Intune PROTECTED devices using approved USB devices. 
