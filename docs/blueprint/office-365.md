---

---

# Office 365

<p id="date-and-time">105 minutes to read - 30 March 2023</p>

This document covers the following topics.

Section | Description
--- | ---
Office 365 Organisation | Office 365 allows for the configuration of organisation wide settings through the use of a centralised management portal.
Office 365 Connectivity | Office 365 is a globally distributed service. The user experience with Office 365 involves connectivity through highly distributed service connection points that are scaled over many Microsoft locations worldwide.
Exchange Online | Exchange Online is a cloud hosted email solution that has the capabilities of on-premises Exchange Services.
SharePoint Online | SharePoint online is an online collaboration and file storage solution. SharePoint integrates heavily with Teams and OneDrive.
OneDrive for Business | OneDrive is a file hosting and file synchronisation solution.
Microsoft Teams | Teams is a cloud hosted unified communications platform. It provides chat, meetings, file storage, and application integrations.
Power Platform | The Power Platform includes PowerApps, Power BI, and Microsoft Power Automate. 
Security and Compliance | Office 365 provides Security and Compliance tools which can be utilised to implement an organisation's Information Management Policy and to assist with information governance.
Exchange Online Protection | Exchange Online protection is a cloud hosted email security service (Mail Gateway) that acts to filter spam and scan for viruses on email entering and leaving Exchange Online.
Microsoft Defender for Office 365 | Microsoft Defender for Office 365 is a cloud-based mail threat protection service. The service provides protection against unknown malware and viruses through the use of robust zero-day protection and inclusion of features to safeguard an organisation from harmful links in real time.
Microsoft Whiteboard | Microsoft Whiteboard is a digital whiteboard that facilitates collaboration between users. It has integrations with the Office 365 suite and physical endpoints such as the Microsoft Surface hub.
Microsoft Forms | Microsoft Forms is an online survey and form tool.
Microsoft Planner | Microsoft Planner is a planning application with integrations into other components of the Office 365 suite.
Viva Learning | Viva Learning provides various content sources for user training.

For each component within the document there is a brief description of the contents of the section, a commentary on the items that have been considered in determining the decisions and the design decisions themselves.

## Assumptions

- Where data for any Microsoft service does not reside in Australia this has been explicitly called out.
- Agencies can provide collateral for custom branding.

## Office 365 Organisation

### Residency 

Office 365 is a global service which is offered in many different physical regions. Choosing a region to store data is required to ensure that the data of the organisation does not get transferred or stored offshore.

Office 365 tenant residency is critical when setting up the organisation's Office 365 tenant. The region where the Office 365 tenant is set up determines where the data is store. Details of Office 365 data residency can be found from [Microsoft's site](https://products.office.com/en-au/where-is-your-data-located).

Office 365 tenant data residency consideration is required to ensure the organisation's Office 365 tenant is created and data is stored in Australia.

Office 365 Region Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Office 365 Region | Australia | Aligns with ACSC guidance of utilising cloud services located in Australia.

### Licence

Microsoft licences access to Office 365 and its security offerings through user-based licensing.

Microsoft offers several enterprise licencing options for Office 365, Enterprise Mobility and Security (EMS), and Windows.

These licencing options are summarised below:

- Microsoft 365 E5 (recommended for this blueprint). Microsoft 365 E5 includes everything inside Microsoft 365 E3 plus additional features and services (largely security and compliance related). In the case of Office 365 E5, the capabilities in Microsoft Defender for Office 365 suite as well as other services such as Office 365 Advanced Compliance are increased.
- Microsoft 365 E3. Microsoft 365 E3 provides access to core products with enhanced features and security features. In the case of Office 365 E3, the Office client suite is included, and the service limits are increased.

To grant access to the services a licence is assigned to an individual user account. A licence can be assigned by an administrator at the time of the user account is created or through Azure AD group-based licensing. Azure AD group-based licensing allows an Administrator to associate a licence to a group. Any members within the group will be assigned that licence automatically. When a user is removed from the group the licence is removed.

Licensing Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Products Licenced | Microsoft 365 E5 | Microsoft 365 E5 licences combines Office 365 E5, EMS E5, and Windows 10 E5 are required to ensure that Office 365 tenant can be rated up to Protected. 
Licence Allocation Method | Automated | Dynamic Security Groups in Azure AD will be used to automatically assign licences and reduce the management overhead associated with licensing. 

Licensing Configuration for all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Admin Licence Group | `rol-OrganisationName-Administrator` | This is the group that the organisation administrators belong to.
User Licence Groups | `rol-OrganisationName-Users` | This is the group that the organisation non-administrator users belong to.

### Self service purchase

Self-Service purchase add-ins for Office 365 allows users of Office 365 to purchase 3rd party add-ins to be added into Office 365 tenancy.

Self-service purchase of applications from the Microsoft Power Platform products was introduced in January 2020. By default, this is enabled for all users within the tenant and paid by credit card.

These processing of data for these add-ins does not sit within Office 365 tenancy. This might cause the data to flow outside and/or stored outside of Australia.

Self-Service Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Global self-service purchase | Disabled | Only administrators are permitted to purchase applications. 
Power BI self Service purchase | Disabled | Only administrators are permitted to purchase applications. 
Power Apps self-service purchase | Disabled | Only administrators are permitted to purchase applications. 
Power Automate self-service purchase  | Disabled | Only administrators are permitted to purchase applications. 

### Themes

Office 365 Themes provide a method to customise the portal's look and feel for users.

The logo of the organisation can be added to the top navigation panel. Themes assist users with familiarisation and adoption of the new system.

Theme Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Custom Portal Theme | Configured | Customising the Theme setting assists user to identify that they are in the correct portal.

Note: Themes will be the responsibility of the organisation and this table contains recommendations and restrictions for the themes.

Theme Configuration for all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Logo Image | Organisation logo is recommended | Under 10 KB, 200 x 30 pixels in JPG, PNG, GIF, or SVG format. SVG is the preferred format.
Background Image | Organisation logo is recommended | 15 KB or less, 1366 x 50 pixels in JPG, PNG, or GIF format. This is in line with Microsoft best practice.
Prevent users from overriding their theme | Yes | Flip this toggle to prevent users from choosing their own theme from the Microsoft theme gallery. This is enabled to maintain cadence between potential personal tenancies and the 'corporate' environment.
Navigation bar colour | Default | Based on organisation branding standards. To maintain cadence with corporate standards.
Text and icon colour | Default | Based on organisation branding standards.
Accent Colour | Default | Based on organisation branding standards.
Show the users name on the top navigation bar when the user is signed in | Yes | The users name will be shown to identify who is signed in.

### Office 365 services and add-ins

Office 365 centrally manages Office services and add-ins. Office services and add-ins can enhance both the way information is accessed and the way business is conducted. Enabling Services and Add-ins also comes with risks, such as the risk of data being shared with other Microsoft services outside of the tenant boundary, or shared outside of Australian data centre locations. Out of the box, several services and add-ins are configured within the portal.

The design will take into consideration the services and add-ins that are part of Office 365. The design decision is based on the requirement provided by the organisation and application that is hosted on.

Services and Add-ins Design Decisions for all agencies and implementation types.

Decision Point        | Design Decision | Justification
---                   | ---             | ---
Azure Speech Services | Enabled        | Enabling the organization-wide language model allows Azure Speech service to gather data from emails and other locations to improve M365 applications that use Azure Speech services. The Azure Speech service has been IRAP assessed as part of Azure and enables greater accessibility features as part of the Blueprint. 
Bookings              | Disabled        | Exposes a public web page that provides access to user calendars for 3rd parties. There is no requirement to enable the feature as other methods of collaboration are in use. 
‎Briefing‎ email from ‎Microsoft Viva‎	| Enabled | Enabled by default to improve productivity, individual users can unsubscribe if desired.
Calendar              | Disabled        | External sharing is disabled to prevent potential data spills.
Cortana               | Disabled        | To align with ACSC Windows 10 hardening guidance to disable Windows web results and Cortana, to limit the risk of accidental disclosure of sensitive information. 
‎Microsoft‎ communication to users	| Disabled | To prevent communication from Microsoft directly rather than via the organisation's IT team.
Microsoft Graph Data Connect | Disabled | API connectivity with Azure Data Factory is not currently in scope of the blueprint. 
Microsoft Search in Bing | Disabled | Microsoft Search integrates with bing.com for Search. Office 365 data is indexed to provide bing.com search functionality and is therefore not desirable for this design.
Microsoft Teams      | Enabled         | To enable both internal and external collaboration.
Microsoft To Do      | Disabled        | To reduce the risk of user entering sensitive data into external lists.
‎Microsoft Viva Insights (formerly MyAnalytics)‎ | Enabled | Provides users with details about their usage of Office 365. 
Microsoft 365 Group  | Enabled | External collaboration will be conducted in Microsoft Teams and SharePoint Online, which relies on Microsoft 365 groups. Agencies should only select agencies that they trust to collaborate with after completing a risk assessment. 
Modern Authentication | Enabled | Modern authentication is a group of technologies that combines authentication, authorisation and conditional access policies to secure an Office 365 tenant. Enabling of Modern Authentication provides ability to use Multi Factor Authentication.
News                 | Disabled        | To prevent the display of Office 365 content and external news articles together in Edge.
‎Office‎ installation options | Enabled  | To manage the update and deployment of Office updates and components.
Office on the web    | Third-party storage services: Disabled        | Do not allow users to open files in third-party storage services in Office on the web as this may introduce risk of information disclosure or malicious content. 
Office Scripts       | Disabled        | To prevent the execution of unapproved code.
Reports              | Disabled        | Disable data reporting to Microsoft on Office 365 usage.
SharePoint           | Enabled         | New and Existing guests must sign in or provide a verification code when accessing SharePoint data.
Sway                 | Disabled        | External collaboration will be conducted in Teams or SharePoint online. 
User consent to apps | Disabled        | Require administrators to provide consent.
User owned apps and services | Disabled | Applications will be delivered via the Business Store, there is no need to have the Official Store enabled.

### Role based access control

Role Based Access Control (RBAC) defines what a user or administrator has access to (data or user actions) based on the user's job function (role) within the organisation. In relation to system administration, RBAC provides various roles each of which can only perform certain tasks. For example, help desk staff may be able to only view certain resources, whereas system administrators could view, create, and delete those resources. Office 365 provides a subset of administrative roles available in Microsoft Azure.

Privileged Identity Management (PIM) can be leveraged to enhance the RBAC model for Azure Active Directory role-based management access, and parts of other Microsoft services like Office 365 and Microsoft Endpoint Manager. PIM requests are made through the Azure portal for elevated access only when they are required, and access is expired after a specified period.

The following Office 365 roles can be assigned via PIM:

- Exchange administrator.
- Exchange recipient administrator.
- SharePoint administrator.
- Teams administrator.
- Teams Communications administrator.
- Teams Communications support engineer.
- Teams Communications support specialist.
- Power BI Administrator.
- Power Platform administrator.
- Customer Lockbox Administrator.
- Intune administrator.
- Office Apps administrator.
- Message Center Privacy Reader.
- Message Center Reader.
- Security administrator.
- Security reader.

Note, using PIM for the SharePoint administrator role, the Device administrator role, and roles trying to access the Microsoft Security and Compliance Center might experience delays of up to a few hours after activating the role, see [PIM Roles](https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-roles) for further information.

Role Based and Access Control Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
PIM | Configured | PIM provides time-based and approval-based role activation to mitigate the risks of excessive, unnecessary, or misused access permissions on resources that you care about.
Office 365 administrative sub-roles | Not Configured | Office 365 administrative sub-roles will not be configured in favour of PIM. This ensures Azure is the location to manage Role Base Access Control permission for the organisation tenant.

### Customer Lockbox

Customer lockbox provides a time-boxed, secure mechanism for Microsoft Support Engineers to assist in customers support query in Office 365. Microsoft Support engineers will have to request authorisation from the organisation to access the underlying data in Office 365 tenant.

Customer Lockbox address situations where Microsoft Engineers require access to client data within Office 365 to resolve an incident. All access requests are recorded for auditing purpose.

Customer Lockbox Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Customer Lockbox | Enable | This is to ensure that Microsoft support engineers cannot access the organisation's content to perform a service operation without the organisation's explicit approval. 

## Office 365 Connectivity

Office 365 is a publicly facing SaaS offering and firewall ports are required to be opened to allow communication between infrastructure and desktops and Office 365. These ports configurations are updated frequently and are available online from [Microsoft](https://docs.microsoft.com/en-au/office365/enterprise/urls-and-ip-address-ranges).

It is important to note the traffic between the clients and the Office 365 offering is TLS 1.2 encrypted.

Configuration will occur on the proxy and external gateway of the organisation as required.

Further details on the firewall configuration for the solution can be found in the Network Configuration ABAC.

### Mail flow and gateway

Mail flow is the path taken by an email from the sender to a receiver. A Mail Gateway acts as the central egress and ingress point for mail traffic into an organisation.

For agencies implementing a PROTECTED environment, DTA recommends the use of a separate mail gateway to interface with [GovLink](https://www.finance.gov.au/government/whole-government-information-communications-technology-services/govlink) for the following functions:

- Encryption.
- Message rules.
- Header modification.

This will achieve the closest alignment to whole of government policy for [Secure Internet Gateways](https://www.cyber.gov.au/acsc/view-all-content/programs/irap/asd-certified-gateways), guidance of the [Information Security Manual](https://www.cyber.gov.au/acsc/view-all-content/guidance/email-gateways-and-servers) and the [Protective Security Policy Framework](https://www.protectivesecurity.gov.au/sites/default/files/2019-11/policy-8-annex-g-email-protective-marking-standard.pdf).

GovLink enables secure communication between Commonwealth entities across public infrastructure and is required for PROTECTED mail to be securely transferred between government organisations. When a GovLink mail gateway is required, Agencies can either use an existing gateway or a new gateway.

It is not possible to configure Exchange Online to directly send email via GovLink. Exchange Online must resolve to a public facing IP address, which is not possible across the GovLink network. In this instance a Mail Relay would be required with a public facing interface and a second interface that is able to connect to GovLink. 

DTA is currently working with Microsoft and the Department of Finance to simplify an organisation's ability to achieve this, however at the time of writing there is no native solution to allow a direct interface between the Office365/Exchange Online environment and GovLink.

The following image shows the high-level mail flow for agencies implementing without on-premises infrastructure.

![Mail Flow for a cloud native implementation](../img/o365-mail-flow.png#center)

The figure below shows the high-level mail flow for agencies leveraging on-premises infrastructure in a hybrid configuration. 

![Mail flow for a hybrid implementation](../img/o365-mail-flow-hybrid.png#center)

Design Decisions summary for all agencies and implementation types.

Implementation Type | Mail Gateway | Mail Connectors | Mail Ingress | Mail Egress | Sensitivity Labels
--- | --- | --- | --- | --- | ---
Cloud  | Exchange Online Protection (EOP) | Not required | EOP | EOP | Required
Hybrid | Existing mail gateway | EOL <-> Mail gateway | Mail gateway | Mail gateway | Required

Note that Exchange Online Protection, a mail gateway may be required to interface with GovLink.

### Optimisation

Office 365 is a globally distributed service. The user experience with Office 365 involves connectivity through highly distributed service connection points that are scaled over many Microsoft locations worldwide. This section outlines two sets of design decisions, representing advice to achieve the highest level of maturity and adherence to existing Whole of Government policies and advice to maximise optimisation outside and user experience. The below information is to inform agencies, including on how best to maximise optimisation and user experience, however consideration should be given for the risk implications of implementing in such a way. While this approach of optimisation represents the current [best practice published by Microsoft](https://docs.microsoft.com/en-us/office365/enterprise/network-planning-and-performance) it is inconsistent with the previously referenced guidance of the ISM and PSPF relating to Secure Internet Gateways. We have provided configuration controls for both scenarios below.

To minimise latency, a customer network can route user requests to the closest Office 365 service entry point, rather than connecting to Office 365 through an egress point in a central location or region.

The following achieves optimal Office 365 connectivity and performance:

- Local DNS resolution and Internet egress - Provision local DNS servers in each location and ensure that Office 365 connections egress to the internet as close as possible to the user's location. This configuration minimises latency and improves connectivity to the closest Office 365 entry point.
- Add regional egress points - If the organisation network has multiple locations but only one egress point, add regional egress points to enable users to connect to the closest Office 365 entry point. This configuration minimises latency and improves connectivity to the closest Office 365 entry point.
- Bypass proxies and inspection devices - Configure browsers to send Office 365 traffic directly to egress points and bypass proxies. Configure edge routers and firewalls to permit Office 365 traffic without inspection. This configuration minimises latency and reduces the load on network devices.
- Enable split tunnelling connection for VPN users - If a VPN solution is required Always on VPN should be integrated into the organisation infrastructure. For VPN users, enable Office 365 connections to connect directly from the user's network rather than over the VPN tunnel by implementing split tunnelling. This configuration minimises latency and improves connectivity to the closest Office 365 entry point.

Optimisation design considerations and decisions apply to all agencies and implementation types.

Office 365 Connectivity Optimisation Design Decisions for an increased security posture.

Decision Point | Design Decision | Justification
--- | --- | ---
Workstation Connectivity | VPN with central internet gateway | Provides the highest level of auditing and monitoring.
Local DNS resolution and Internet egress | Not Configured |  All traffic will egress centrally through an internet gateway.
Add regional egress points | Not Configured | All traffic will egress centrally through an internet gateway.
Bypass proxies and inspection devices | Configured | Proxies and internet gateway will be configured following Microsoft best practice guidance to allow services to function correctly.
Enable split tunnelling connection for VPN users | Not Configured | All traffic will always traverse the VPN and egress through the internet gateway.

Office 365 Connectivity Optimisation Design Decisions for an enhanced User Experience.

Decision Point | Design Decision | Justification
--- | --- | ---
Workstation Connectivity | Direct connection to the internet | Provides the best performance for users. 
Local DNS resolution and Internet egress | Configured if required | DNS will be resolved to the gateway of their internet device.
Add regional egress points | Configured if required | Regional Egress Points are not configured in this solution due to the workstations being directly connected to the internet.
Bypass proxies and inspection devices | Configured | Proxies are not configured in this solution due to the workstations being directly connected to the internet.
Enable split tunnelling connection for VPN users | Configured | Split tunnelling is configured in this solution to enable workstations to directly connect to Microsoft services. If a VPN solution is required Always on VPN should be integrated into the organisation infrastructure. 

### Exchange hybrid

This section is only relevant for agencies implementing a hybrid solution that leverages an on-premises Exchange Server(s).

Exchange Online can be used standalone (cloud only) or integrated with an on-premises Exchange Server(s) and Active Directory Domain Services, extending the organisation's messaging farm in a hybrid configuration.

A Hybrid configuration provides administrators with added flexibility to transition users to the Cloud without isolating them from the on-premises resources. A Hybrid configuration can also assist with transport routing for compliance reasons (e.g. Govlink) when "centralized mail transport" is enabled. The [Edge Transport](https://docs.microsoft.com/en-us/exchange/edge-transport-servers) service may be deployed in scenarios where the organisation does not wish to expose Hybrid mail servers directly to Exchange Online Protection.

Agencies wishing to synchronise their existing on-premises Active Directory Domain Services for identity (hybrid identity) must maintain an on-premises Exchange server for recipient management purposes, this is because most of the user attributes cannot be managed from Exchange online due to directory synchronisation rules, for more information see [decommissioning on-premises Exchange servers](https://docs.microsoft.com/en-us/exchange/decommission-on-premises-exchange).

Establishing a hybrid deployment requires an Exchange hybrid server that is supported with your existing on-premises Exchange Server. Microsoft recommends the deployment of the newest Exchange Hybrid server for your environment to ensure the best compatibility with Exchange Online. 

Exchange 2010 has reached [end of support](https://docs.microsoft.com/en-us/microsoft-365/enterprise/exchange-2010-end-of-support?view=o365-worldwide), agencies that wish to use retain a Hybrid configuration after the Hybrid migration method should migrate those Exchange server roles to a supported version of Exchange. Microsoft also recommend that agencies still on Exchange 2010 that have not started or completed their Hybrid migration, upgrade from 2010 to 2016 before commencing the hybrid configuration. 

Exchange Hybrid Server Supported Configurations.

On-premises environment | Exchange 2019 Hybrid Deployment | Exchange 2016 Hybrid Deployment | Exchange 2013 Hybrid Deployment | Exchange 2010 Hybrid Deployment
--- | --- | --- | --- | ---
Exchange 2019 | Supported | Not supported | Not supported | Not supported
Exchange 2016 | Supported | Supported | Not supported | Not supported
Exchange 2013 | Supported | Supported | Supported | Not supported
Exchange 2010 | Not supported | Supported | Supported | Supported

The following table outlines the Exchange server roles required to be installed based on on-premises Exchange environment version. The roles mentioned for Exchange 2013 and 2010 can be installed separately or on one server, Microsoft strongly recommend installing all roles on one server.

On-premises environment | Mailbox server | Client Access server | Hub Transport
--- | --- | --- | ---
Exchange 2016 and newer | At least one instance | Not required | Not required
Exchange 2013 | At least one instance | At least one instance | Not required
Exchange 2010 | At least one instance | At least one instance | At least one instance

Exchange Hybrid design considerations and decisions only apply to agencies leveraging a hybrid implementation.

Decision Point | Design Decision | Justification
--- | --- | ---
Exchange Hybrid Deployment | Exchange 2016-based | The organisation will use their existing Exchange 2016 server to establish the hybrid connection. 
Edge Transport Server for hybrid mail transport | Organisation decision | The organisation can choose to leverage an Edge Transport server to prevent the exposure of internal Exchange servers directly to the internet, depending on their risk appetite and gateway environment. 

### Mail Exchange records

Mail Exchange (MX) records specify the mail server responsible for accepting mail on behalf of the domain.

The record is a resource in the Domain Name System (DNS), and it is possible for a single domain to have multiple MX records. Multiple records are largely configured for availability, redundancy, and load balancing reasons.

Mail Exchange Records Design Decisions for cloud native implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Authoritative DNS MX Record | `<Mail Gateway>` | This is the ingress point for the mail for the organisation, the mx records will point to the organisation gateway. 
Mail Exchanger/s | `<Mail Gateway>` | This is the ingress point for the mail for the organisation, the mx records will point to the organisation gateway. 

Mail Exchange Records Design Decisions for hybrid implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Authoritative DNS MX Record | Configured | If the organisation hosts mail for more than one domain a MX record for each is required. These records are listed.
Mail Exchanger/s | Configured | If the organisation requires its on-premises mail gateways to continue to be used, the Virtual IP (VIP) of the gateways is used.

### Mail connectors

Mail connectors use TLS to secure communication and can customise the way mail flows into and out of the organisation.

Generally mail connectors are required. An exception may be where an organisation does not use a mail gateway and relies on Exchange Online Protection. 

When the organisation intends to operate at the PROTECTED level, the blueprint assumes that all agencies are implementing the configuration with a Mail Gateway and as such, provides detailed configurations on implementing mail connectors via the relevant gateway.

Mail Connector design considerations and decisions apply to all agencies and implementation.

Decision Point | Design Decision | Justification
--- | --- | ---
Mail Connectors | Configured | Mail connectors are required for all Exchange and Exchange Online implementations. Specific connectors are configured when implementing Exchange hybrid.

Mail Connector Configuration for all agencies and implementation types for environments intended to be used at the PROTECTED level

Configuration | Value | Description
--- | --- | ---
Certificate details | Configured | Certificate to be issued from the gateway hosting the GovLink connection.
Virtual IP address (VIP) | Configured | Virtual IP Address details will be provided by the gateway provider.
**Exchange Online Receive Connector** | | 
Name | `Inbound-connector-from-<GATEWAY>` | Describes the source and directionality of mail.
Retain internal mail headers | Unchecked | Internal Mail headers are stripped off messages.
On-premises server identification method and value | Identify by Senders Domain. Reject email messages if they are not sent over TLS. Require subject name matching `<DOMAIN>` | Ensures mail is being sent over an encrypted connection to a known domain.
**Exchange Online Send Connector** | | 
Name | `outbound-connector-to-<GATEWAY>` | Describes the source and directionality of mail.
Retain internal mail headers | Checked | When reporting spam that slips past the filters, it is essential that we receive the full message headers from a message. 
When to use the connector | \\* (All Mail) | All mail should use the connector. 
Message routing | Route through these smart hosts. | This should be used route mail to the gateway.
Connector Authentication settings | Always use TLS issued by a trusted Certificate Authority with a SAN matching `<DOMAIN>` | Ensures mail is being sent over an encrypted connection to a known domain.

### Autodiscover

Autodiscover is a mechanism for the configuration of a user's email client with minimal user input. The required input from the user is their email address and password.

Autodiscover for a cloud environment varies from the process utilised when on-premises Exchange is leveraged. With a cloud environment, an Autodiscover Endpoint representing the domain is not available. Instead, DNS redirection and Hypertext Transfer Protocol Secure (HTTPS) redirection is leveraged to direct the Autodiscover client to a trusted Autodiscover Endpoint. The high-level process is:

- The Autodiscover endpoint looks for a host named autodiscover.{DomainName}.com
- DNS provides the Internet Protocol (IP) address of the host autodiscover.outlook.com
- The Autodiscover client attempts communication utilising HTTPS (This fails)
- The Autodiscover client requests redirection over Hypertext Transfer Protocol (HTTP) (This directs the client to autodiscover-s.outlook.com)
- The Autodiscover client attempts communication utilising HTTPS. The communication is successful. However, the new Autodiscover endpoint does not have a server certificate for the requested hostname. This communication is then redirected using HTTPS redirection to an additional Autodiscover endpoint which can provide the required Autodiscover information.
- The Autodiscover client completes the Autodiscover process with the new Autodiscover endpoint.

To ensure this process functions as described above, appropriate DNS records are required.

Autodiscover Design Decisions for all agencies and implementation types. 

Decision Point | Design Decision | Justification
--- | --- | ---
DNS Records (CNAME) | Autodiscover: autodiscover.outlook.com | A DNS record that points clients to the Autodiscover service.

Autodiscover Design Decisions for cloud native implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Autodiscover | CNAME autodiscover autodiscover.outlook.com | Autodiscover will improve the user experience and is required to configure a user's Outlook profile and inbox.

Autodiscover Design Decisions for the hybird solution.

Decision Point | Design Decision | Justification
--- | --- | ---
Autodiscover internally | Configured - Service Connection Point  | Autodiscover will continue to point to the internal Exchange Servers until all mailboxes have been migrated to Office 365 to ensure functionality.
Autodiscover externally | Configured – DNS record | To ensure autodiscover functions externally to the organisation. 

### SPF, DMARC and DKIM

Sender Policy Framework (SPF), Domain Key Identified Mail (DKIM), and Domain-based Message Authentication, Reporting and Conformance (DMARC) are tools for email authentication. These tools can coexist to provide enhanced capabilities.

These tools can coexist to provide enhanced capabilities.

- SPF - SPF is a DNS entry which lists the servers which can send emails from a specific domain. It allows recipients to verify the identity of incoming mail.
- DKIM - DKIM, unlike SPF is a tool to verify whether the content of the message is trustworthy. This is completed using a public/private key signing process.
- DMARC - DMARC enables both SPF and DKIM using policy. A DMARC policy sets out how to handle messages which do not align to what the receiver knows about the sender. This can include rejecting the message; suggesting the message is quarantined; or allowing the message.

While DKIM within Office 365 can sign messages, the organisation gateway may also be configured to do this which may cause issues with DMARC verification.

Note, agencies that enable DKIM signing within Office 365 that also add additional business logic to email at the egress mail gateway, such as adding a default organisation email disclaimer, would fail DKIM authentication as the contents of the email had changed after the email had been sent from Exchange Online. In this scenario consider migrating the business logic from the mail gateway to native Exchange Online transport rules.

SPF, DKIM, & DMARC Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
SPF | Configured | Configuration of SPF record(s) are required as a baseline for the deployment and are configured to "hard fail" as per ACSC recommendations. The SPF record(s) are configured for all such authorised senders for that domain, including the Office 365 SPF sender address (spf.protection.outlook.com) if applicable to ensure mail sent from Exchange Online passes SPF. SPF record(s) are to be configured by the DNS provider that that organisation consumes. 
DKIM | Configured | DKIM is a public/private key signing process used to verify the content of an email. DKIM signing is enabled on emails originating from an organisation's domains as per ACSC recommendations. DKIM is either enabled on the organisation mail gateway solution (hybrid) or within Office 365 (cloud native).
DMARC | Configured | One DMARC policy is to be configured per organisation domain as per ACSC recommendations. This is to be configured at the gateway that the organisation consumes. DMARC records are configured for all domains such that emails are rejected if they fail SPF or DKIM checks. 

### Accepted domains

Accepted Domains are SMTP namespaces configured within Exchange Online. Only emails addressed to users within the nominated domains are accepted.

Accepted Domains consist of the following types:

- Authoritative Domains - Authoritative Domains are domains where the Exchange Organisation accepts messages addressed to recipients and is responsible for generating non-delivery reports. On creation of an Exchange Online organisation the tenant domain Fully Qualified Domain Name (FQDN) and the `<tenantname>.mail.onmicrosoft.com` FQDN are automatically populated as an Authoritative Domains; and
- Relay Domains - Relay Domains are often called Non-Authoritative Domains. The Exchange Organisation will accept the messages addressed to the recipients; however, it is not responsible for generating non-delivery reports. Hybrid Exchange leverages Relay Domains and mail connectors to relay messages between both on-premises infrastructure and Exchange Online.

Accepted Domain Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configure Additional Accepted Domains | Configured | Required to integrate with additional agencies. Any additional Agencies that require access to the system are to be included.
Authoritative Domains | Configured | The `<tenantname>.onmicrosoft.com` authoritative domain is created during the enablement of Office 365 and represents the Exchange Online Organisations SMTP address space. The additional authoritative domains are required as each organisation will have a corresponding authoritative domain.

Additional Accepted Domain Design Decisions for hybrid implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Relay Domains | Configured | This setting is required to be configured in a Hybrid Exchange scenario.

### Remote domains
Remote Domains allow administrators to control the type of replies and format of messages users send to the destination domain.

Administrators can configure Exchange to allow (or block) the following:

- Out of Office messages.
- Automatic replies and forwards.
- Read or delivery receipts.
- Non-delivery report to a specified domain.

The default remote domain will apply the same settings to all messages; however, administrators can configure specific settings for specific domains.

Remote Domain Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configure Remote Domains | Default configuration applied | The default configuration within Exchange Online will be leveraged.

Remote Domain Configuration for all agencies and implementation types

Policy Setting | Configuration | Description
--- | --- | ---
Name | `Default` | Name of the remote domain.
Remote Domain | `*` | Note `*` means all external agencies.
Out of Office automatic reply types | Allow only external Out of Office replies - Selected | Allows the limiting of the type of client automatic replies.
Automatic replies | Allow automatic replies – Unchecked<br>Allow automatic forwarding - Unchecked | Allows the limiting of automatic replies and automatic forwards.
Message reporting | Allow delivery reports - Ticked<br>Allow non-delivery reports – Ticked<br>Allow meeting forward notifications - Unchecked | Allows the limiting of delivery reports, no-delivery reports, and meeting forward notifications. 
Use rich text format | Follow user settings - Selected | Allows the control over message format. 
Supported Character Set | None | Allows the control over the character set. 

### Certificates

There are additional specific certificate requirements when configuring Exchange Hybrid that only apply to agencies implementing a hybrid configuration as Exchange Online encrypts all traffic to the on-premises environment. Agencies implementing cloud only environments that do not leverage an on-premises Exchange Server do not need require these configurations.

The following certificates are associated with an Exchange Hybrid deployment:

- Azure Active Directory Connect (Azure AD Connect) with Active Directory Federation Services (AD FS) – a third party certificate from a Trusted Authority (CA) is required to establish a trust between web clients and federations server proxies used to sign and decrypt security tokens.
- Exchange Federation – a self-signed certificate is used to create a secure connection between the on-premises Exchange server and Azure Active Directory authentication
- Exchange Services – a third party certificated from a Trusted Authority (CA) is required to secure the TLS communication between Exchange servers and clients. These include Outlook on the web, Exchange ActiveSync, Outlook Anywhere and secure message transport
- Existing Exchange Servers – might use self-signed or certificates issued by a Trusted Authority (CA) depending on Exchange server certificates. These certificates may need updating for Exchange Hybrid

Suggested FQDNs for hybrid deployment

Service | Suggested FQDN | Field
--- | --- | ---
Primary shared Simple Mail Transfer Protocol (SMTP) domain | organisation.com.au | Subject name
Autodiscover | To be determined by the organisation. <br>Label that matches the external Autodiscover FQDN on the Exchange Client Access server, such as Autodiscover.contoso.com | Subject alternative name
Transport | To be determined by the organisation. <br>Label that matches the external FQDN of the Edge Transport servers, such as edge.contoso.com | Subject alternative name

Additional Certificate Design Decisions for hybrid implementations

Decision Point | Design Decision | Justification
--- | --- | ---
Hybrid Server Certificate | New certificate to be purchased | As the only new service which is being configured is the Exchange Hybrid Server, that is the only certificate which requires validation and updates as required.

## Exchange Online

Microsoft Exchange Online is a cloud-hosted messaging solution that has the capabilities of on-premises Exchange services. Exchange Online provides email, calendar, contacts, and tasks. Exchange Online supports mailbox delegation, where a delegate can have send-on-behalf and management rights over other mailboxes. Shared mailboxes can be assigned to and administered by many users. Application mail sending is supported where the application can authenticate against the Simple Mail Transport Protocol (SMTP) message submission to users inside the managed environment or authenticated SMTP message relay to addresses outside the managed environment.

Agencies should also refer to [Mail Flow and Gateway](#mail-flow-and-gateway) for more information on mail flows, mail gateways and the use of GovLink.

### Mail migration

The implementation of Exchange Online can be coupled with a migration from the existing on-premises Exchange infrastructure. If a migration is not required, the deployment is referred to as a greenfield deployment of Exchange Online.

There are three migration options:

- Hybrid Migration – Often referred to as a staged migration, is where the on-premises Exchange environment is extended to Office 365 through departmental relationships or federation. During migration user mailboxes will be spread between the online and on-premises environments, this necessitates planning to ensure free/busy, calendar and mailbox sharing all continue to work.
- Cutover Migration – A cutover migration is only recommended for organisations with less than 150 mailboxes and occurs over one or a few days. During this period email access may be unavailable. Prior to the migration event, a connection between the on-premises Exchange organisation and Exchange Online needs to be established.
- PST Migration – A Personal Storage Table (PST) migration is where PST files with a mapping file are either shipped to or uploaded into Office 365. The Exchange Online instance is a greenfield deployment with no configuration required on the on-premises Exchange environment.

Mail Migration Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Office 365 Tenant | Single tenant | Exchange Online services will be hosted within the organisation's secure Office 365 tenant.

Additional Mail Migration Design Decisions for cloud native implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Deployment Type | Exchange Online only | Exchange Online is suitable for agencies that are not leveraging any on- premises equipment.

Additional Mail Migration Design Decisions for hybrid implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Deployment Type | Hybrid Migration | User mailboxes should be migrated from the on-premises Exchange environment.

### User mailbox configuration

User Mailboxes are Exchange Mailboxes that are associated with a user account. Usually one mailbox is associated to one user account.

User mailboxes can be configured to:

- Allow or disallow Internet Message Access Protocol (IMAP) and Post Office Protocol (POP) connections to them.
- Prevent mail from deletion.
- Control ActiveSync connections to them.
- Control mail size limits.
- Control the use of mail archives.

The above configuration can be completed on all new mailboxes using a Client Access Services (CAS) Mailbox Plan. A CAS Mailbox Plan is used to configure settings when a licence is assigned to a new user. If the licence is changed, the CAS Mailbox plan linked to that new licence is applied. CAS Mailbox plans will be inherited from the existing organisation plans.

In addition to the above mailbox configuration, by default, standard user accounts have access to Exchange Online via Exchange Online PowerShell . ACSC guidance to disable unneeded features requires that this feature be disabled.

User Mailbox Configuration Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Disable IMAP | Configured | IMAP will be disabled to meet ACSC guidance to disable unneeded features.
Disable POP | Configured | POP will be disabled to meet ACSC guidance to disable unneeded features.
Exchange Mailbox Size | 100GB per user | Maximum mailbox size available. 
Language | English | The default language is English, users will have the ability to adjust this if required.
Default time zone | GMT +10 | The default time zone is GMT +10 however this will be adjusted based on user location.
Exchange Message Size Limits | Up to 90MB | Default setting. Note that message limits may be smaller when sending messages to external mail recipients (can be as low as 10MB).
Custom Primary SMTP Addressing | first.last@organisation.com.au<br>Usernames are recommended to follow the Universal Principal Name (UPN) format of the user, which is `first.last@<organisation>.com.au` | The primary SMTP address will be changed from `first.last@<tenant>.onmicrosoft.com` to ensure email continues to function in the same manner. 
Exchange Online PowerShell | Disabled for standard users | Standard users have no need to access Exchange Online via PowerShell. 

### Authentication policies

Authentication policies control the authentication methods which can be used to access Exchange Mailboxes.

Authentication policies can be leveraged to protect the organisation from brute force and password spray attacks. To protect against this, Basic Authentication can be blocked. Basic authentication is where a username and a password are leveraged for client access requests.

Blocking Basic Authentication forces clients to use Modern Authentication. Blocking Basic Authentication can cause issues when clients within the environment do not support Modern Authentication. If this occurs, it is recommended to investigate whether the client can be upgraded to support Modern Authentication. If it can, then it is recommended that the client be upgraded. If it cannot then a separate authentication policy can be leveraged enabling Basic Authentication for that client only.

Authentication Policy Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Basic Authentication | Disabled | Basic Authentication has known exploits, Modern Authentication is preferred.
Authentication Policy Configuration | Configured | Authentication Policy will be deployed to meet the security requirements of the organisation and be deployed in conjunction with the organisation security requirements.

### Outlook on the Web policies

Formerly known as Outlook Web App or Outlook Web Access, Outlook on the Web (OWA) policies, are used to control the availability of features and settings in Outlook on the Web. There are no security concerns with enabling OWA however agencies may wish to consider internal organisation policies to inform decisions. A decision to disable OWA will not alter an organisation's cyber security posture.

A mailbox can only be assigned one OWA policy and every mailbox must have a policy assigned.

Features and settings which can be controlled by an OWA policy include:

- Third party file provider integration.
- Office 365 group creation from within OWA.
- Microsoft Satisfaction survey prompts.

OWA Policy Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Outlook on the Web | Enabled | OWA will be enabled to allow users to access their email in a flexible manner. 
Third party file provider integration | Disabled | Only Microsoft file providers are approved for integration, no third-party file providers will be configured. This decreases security risk associated with third-party tools.
Office 365 group creation by users | Disabled | Groups can only be created by administrators, not users. This will ensure that the GAL is the most up to date and that there is a consistent naming convention utilised.

### Mailbox archive

Office 365 Mailbox Archives provide an unlimited email storage space for users. A mailbox archive is an additional mailbox storage space.

This archive can be accessed through the web portal or the Outlook client. Users can move or copy mail between their primary and archive mailboxes. Administrators can enable archive and deletion policies. These policies automatically move mail to the archive and, if required, delete mail from the archive when the set criteria are met. Mailbox archives are also subject to retention policies.

Mailbox Archive Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Mailbox Archive | Enabled | The archive mailbox is required to control primary mailbox cache sizes.
Mailbox Archive Policy  | Enabled | The use of automated archive mailbox policies improves the user experience and ensures that primary mailbox sizes are controlled.

### Mailbox auditing

Mailbox Auditing provides visibility into the access and modification of user mailboxes by owners, delegates, and administrators.

Once enabled on a user's mailbox, the activities subject to audit appear within the Office 365 audit log. This information is then available for security to review and run analysis. It is recommended that this audit log be exported to a centralised logging service. The Microsoft Purview Audit (Premium) service requires the "Microsoft 365 Advanced Auditing" license allocated to each user in the tenant.

Mailbox Auditing Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Mailbox Auditing | Configured | An event log auditing process, and supporting event log auditing procedures, is developed and implemented covering the scope and schedule of audits, what constitutes a violation of security policy, and actions to be taken when violations are detected, including reporting requirements.
Centralised Logging Facility | Not Configured | Agencies should consider their operational and security requirements around the use of a SIEM separately to the implementation of the blueprint. <br>This design will implement Microsoft Purview Audit (Premium) which can retain Exchange, SharePoint and Azure Active Directory audit records for up to ten years with audit log retention. These technologies also send alert emails to Global Administrators and selected Office 365 administrators.

Mailbox Auditing configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
**User Mailbox and Shared Mailbox Audit Configuration** | | |
Admin Audited Actions  | ApplyRecord<br>Copy<br>Create<br>FolderBind<br>HardDelete<br>MessageBind<br>Move<br>MoveToDeletedItems<br>RecordDelete<br>SendAs<br>SendOnBehalf<br>SoftDelete<br>Update<br>UpdateCalendarDelegation<br>UpdateFolderPermissions<br>UpdateInboxRules | All available audit actions will be selected in order to provide the required visibility of changes made to a mailbox. 
Delegate Audited Actions  | ApplyRecord<br>Create<br>FolderBind<br>HardDelete<br>Move<br>MoveToDeletedItems<br>RecordDelete<br>SendAs<br>SendOnBehalf<br>SoftDelete<br>Update<br>UpdateFolderPermissions<br>UpdateInboxRules | All available audit actions will be selected in order to provide the required visibility of changes made to a mailbox. 
Owner Audited Actions | ApplyRecord<br>Create<br>HardDelete<br>MailboxLogin<br>Move<br>MoveToDeletedItems<br>RecordDelete<br>SoftDelete<br>Update<br>UpdateCalendarDelegation<br>UpdateFolderPermissions<br>UpdateInboxRules | All available audit actions will be selected in order to provide the required visibility of changes made to a mailbox. 
**Office 365 Group Mailbox Audit Configuration** | | |
Admin Audited Actions  | Create<br>HardDelete<br>MoveToDeletedItems<br>SendAs<br>SendOnBehalf<br>SoftDelete<br>Update | All available audit actions will be selected in order to provide the required visibility of changes made to a mailbox. 
Delegate Audited Actions  | Create<br>HardDelete<br>MoveToDeletedItems<br>SendAs<br>SendOnBehalf<br>SoftDelete<br>Update | All available audit actions will be selected in order to provide the required visibility of changes made to a mailbox. 
Owner Audited Actions | HardDelete<br>MoveToDeletedItems<br>SoftDelete<br>Update | All available audit actions will be selected in order to provide the required visibility of changes made to a mailbox. 

### Journaling

Journaling within Exchange is the recording of email communications as part of an organisation's retention strategy.

Journaling can assist with achieving compliance with government regulations. A Journal rule can be scoped to:

- Internal messages only.
- External messages only.
- All messages.
- Specific recipients.

Office 365 supports the use of journaling with the caveat that an Exchange Online mailbox cannot be used as a journaling mailbox. When configuring a mailbox for journaling, it must reside on an Exchange server. Journal reports can be delivered to a separate system to the Exchange Online instance. 

Within Office 365, additional options are available to be leveraged in an organisation's retention strategy. These include:

- Retention Policies.
- Litigation hold.

Retention Policies can also be leveraged across the Office 365 organisation, whereas litigation hold is configured on a per-mailbox basis. These options reduce the complexity and management overhead involved with recording email and backing up to separate systems.

Journaling Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configure Journaling | Not Configured | In place of Journaling, Litigation hold and retention policies in conjunction with eDiscovery will be leveraged by the organisation to meet investigation requirements. 

### Litigation hold

Litigation hold preserves a mailbox and its contents from being modified or removed for e-Discovery purposes. A user can continue to send and receive email whilst litigation hold is enabled, even delete an item from the mailbox, and Office 365 will retain the items for discovery purposes.

Litigation hold is not enabled by default, and legal teams will need to proactively enable the feature to avoid users potentially deleting any critical data elements. You can also specify the duration for the hold, this is calculated from the date a mailbox item is received or created. If a duration is not set, items are held indefinitely or until the hold is removed.

Litigation hold is not an alternative to backups. While it is true that it keeps a copy of your data elements it is not saved in a separate location and cannot be restored to its original location.

Litigation Hold Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Litigation hold | Configured as required on selected users | Litigation hold requirements are unique to each organisation and user.

### Shared mailboxes

A Shared Mailbox is a mailbox which allows one or more users read and send messages. Shared Mailboxes also allow the sharing of a calendar between multiple people.

Within Office 365 shared mailboxes do not require a licence to be assigned to them unless the mailbox has over 50GBs of data.

Unlike user mailboxes, within AD, these mailboxes are represented by a disabled user account. These accounts can be enabled however this poses a security risk as the mailbox account is not related to a single user.

User access to the mailbox is provided using mailbox delegation rights (Full Access, Send As, Send on Behalf). These rights can be assigned either directly or using a mail enabled security group.

Shared Mailbox Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Shared mailbox delegation (Full Access, Send As, Send on Behalf) | Configured via mail-enabled Security groups which are hidden from the Global Address book | Mail-enabled security groups limit the management overhead associated with mailbox delegation when compared to direct delegations. A security group is required to be mail-enabled to appear within Office 365.
Naming standard for security groups | Configured | To distinguish between a security groups managing a shared mailbox a naming standard will be followed.<br>e.g. `GMSG_<mailboxname>`
Shared Mailbox user account | Disabled | Default configuration. Accounts will remain disabled to reduce system attack surface.

### Resource mailboxes

A Resource Mailbox is a mailbox which is assigned to a resource as opposed to a user.

Resource Mailboxes have two types:

- Room mailboxes – Used for meeting rooms.
- Equipment mailboxes – Used for non-location specific resources such as computers, projectors, microphones, or cars.

Users book these resources using meeting requests. Resource Mailboxes can be configured to accept or decline the request based on their availability.

Room Mailboxes can be sorted into lists using Room Lists. Room Lists are leveraged to simplify the booking process by grouping all rooms that meet a certain requirement together (Room lists are usually configured by location). When a user books a meeting, they can select the appropriate room list and then see the available rooms for that time.

Resource Mailbox Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Room Mailboxes | Configured | There is a requirement for booking rooms within the solution. Rooms will be configured with a mailbox so that users can book them through their calendars.
Equipment Mailboxes  | Configured | There is a requirement for booking equipment within the solution. Equipment will be configured with a mailbox so that users can book them through their calendars.
Room Lists | Configured | There is a requirement for booking rooms within the solution. Room Assets will be configured with a list so that users can book them through their calendars.
Naming standards for Resource mailboxes | Configured<br>e.g. `RES_<location>` | To distinguish between resource mailboxes a naming standard will be followed for each resource mailbox.

### Distribution lists

A distribution list is a grouping of mail recipients that is addressed as a single recipient. Distribution lists are used to send e-mail to groups of people without having to enter each recipient's individual address. Distributions lists can be established to receive and distribute internal, external, or internal and external email.

This saves the sender from needing to enter each individual email address when emailing a group. These groups/lists are generally leveraged for emailing an entire team or project. Only internal organisation employees can send emails to the "Organisation-all" distribution list.

Distribution lists are created in different ways depending on the Exchange architecture:

- Cloud Deployments - For cloud only deployments, distribution lists are created within Office 365.
- Hybrid Deployments - For hybrid deployments, distribution lists can be created both within Office 365 and on-premises. On-premises lists are then synchronised to Office 365. The on-premises method has the benefit of living with the user identity source of truth however it does create complexity when it is not managed in the same location as Exchange.

Hybrid distribution lists cannot be managed directly in the outlook client by the user, if this functionality is required by the organisation then it is recommended to re-create those address lists in Exchange Online.

Management of Distribution lists can be streamlined through the enforcement of a Naming Policy. A Distribution list Naming Policy allows the enforcement of a consistent naming strategy across Microsoft 365 groups. It consists of two parts:

- Prefix-Suffix Naming Policy – Setting of prefixes or suffixes for groups names. The prefixes/suffixes can be either fixed strings or user attributes.
- Custom Blocked Words – Blocking of words in the name based on a custom list.

Distribution List Design Decisions for cloud native implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Distribution Groups creation | Cloud Created | Management activities for Exchange Online will occur within the portal. The use of cloud created distribution groups also allows for the groups to be upgraded to Microsoft 365 groups at a later stage.
Distribution Naming Policy | Configured<br>The naming convention will be `OrganisationName-PolicyName` | Naming policies streamline the management of Distribution lists and allow for groups to be easily sorted. 

Distribution List Design Decisions for hybrid implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
Distribution Groups creation | Hybrid Created | Management activities for Exchange Online will occur on the on-premises Exchange server, unless self service updates are required. 
Distribution Naming Policy | Configured | Naming policies streamline the management of Distribution lists and allow for groups to be easily sorted. 

### Address book / address list

The Outlook Address Lists, Global Address List (GAL), and Offline Address Book (OAB) are collections of mail-enabled objects.

They are leveraged for recipient lookup operations (i.e. When a user leverages either the Address book or Check names tools in Outlook). The types of mail-enabled object collections are as follows:

- GAL – The GAL is automatically created by Exchange and lists all mail-enabled objects. (The GAL is available by default to all users).
- OAB – The OAB is an offline version of the GAL leveraged by clients in Cached Mode.
- Outlook Address List - An Outlook Address List is a subset of the mail-enabled objects. By default, a number of Address Lists are created, however, additional Address Lists can be created as required.

Address Book and Address List Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Custom Address Lists | Configured | Custom address lists can be configured by organisation administrators, however one initial custom list, `OrganisationName-All`, should be manually created.
GAL and OAB | Generated | These will be generated so that users can send emails within the organisation in accordance with Microsoft best practice.

### Email Transport Security

Message Transfer Agent - Strict Transport Security (MTA-STS) enables the configuration of domain policies that define whether the receiving domain supports TLS. If the domain doesn't support TLS then the policy can be configured to prevent transmission. Outbound mail flow in Exchange Online supports MTA-STS. Configuration of MTA-STS requires a DNS TXT record and the hosting a of the policy file.

Opportunistic TLS enables email traffic to be encrypted when both the sender and receiver domains support TLS without the need for an additional port for encrypted traffic. By default, Exchange Online always attempts to encrypt mail traffic using opportunistic TLS. Microsoft always uses TLS 1.2 when transferring mail between [Exchange Online customers](https://docs.microsoft.com/en-au/microsoft-365/compliance/exchange-online-uses-tls-to-secure-email-connections?view=o365-worldwide#how-exchange-online-uses-tls-between-exchange-online-customers). 

Email Transport Security Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configuration of MTA-STS | Recommended | Agencies should configure the required DNS record and policy to require TLS support.
Opportunistic TLS | Enabled (default) | To encrypt email traffic where supported by the external email domain.

## SharePoint Online

### SharePoint sites

SharePoint Online provides the ability to create Intranet sites and Team Sites for groups or agencies to collaborate and manage their documents. A SharePoint site allows members of a team or  from other teams to contribute content on a single platform. The information is limited to the members of the team or project.

The creation and storage sizing of SharePoint online sites can be controlled. Out of the box, users can create SharePoint sites and these sites have no storage limits applied. Without restriction there is potentially a large management overhead so we have set a 200GB default which agencies can override.

Administrators can put controls in place which restricts who can create a SharePoint site and set the size requirements.

SharePoint Site Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
SharePoint site naming convention | Avoid spaces and special characters in site collection naming | Spaces and special characters can cause problems with indexing and extend the length of the path. Short names are easier to remember. 
Configure Site Storage limits | Configured | Larger storage can increase management. This can be manually set by SharePoint Administrator. Suggest 200GB. 
Block access from unmanaged devices | Configured | Allow limited web only access. Default settings.
Enable Idle Session sign outs | Sign out users after 1 hr<br>Give users this much notice before signing out: 5 minutes | Default settings. 
Only allow access from specific IP address locations | Not configured | Access to be controlled via Conditional Access policies.
Only allow access from apps that use modern authentication | Enabled | Default settings. 

### SharePoint hybrid

In a hybrid configuration SharePoint Online integrates with an existing on-premises SharePoint Servers, extending the functionality and access between the two environments. Enhanced search results and site redirection provides administrators the control on which location a user access information.

SharePoint hybrid offers the following options for a hybrid configuration:

- Hybrid Federated Search – In a Federated Search configuration, the index for documents remains in the same system as the data. A SharePoint server can display results from SharePoint Online by making a remote SharePoint query, and users can also search SharePoint on-premises directly from SharePoint Online.
- Hybrid Cloud Search – In Cloud Search, the index of the SharePoint Server is pushed and merged with the SharePoint Online index. All the Content Processing and Analytics are done in Office 365, where the index is stored.
- Hybrid Site following – Hybrid site following can be configured to send users from the on-premises SharePoint Server to the equivalent service in Office 365.

SharePoint Hybrid Design Decisions for hybrid implementations.

Decision Point | Design Decision | Justification
--- | --- | ---
SharePoint Hybrid | SharePoint Hybrid Search will be configured. | To allow searching capabilities between SharePoint on-premises and SharePoint Online. 

### Application management

Application management allows the organisation to control who can purchase third party applications for SharePoint Online. These apps can be purchased from [Microsoft App Store](https://appsource.microsoft.com/en-us/marketplace/apps?product=sharepoint) and used within SharePoint Online itself.

SharePoint default methods of displaying and sharing of sharing data are available. Third party applications may circumvent controls or auditing and provide other methods of displaying or sharing of SharePoint data. Any third-party applications will need to be validated for compliance.

The blueprint requires the Office 365 tenant to be rated up to Protected. The organisation must ensure information stays within the tenant to control the follow of information between its devices and Office 365 tenancy.

Application Management Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Users to have the ability to get apps from marketplace | Not Configured | Only administrators are approved to assign or purchase application.
Allow third party apps from the store be open office documents in the browser | Not Configured | This setting increases the security of the solution by ensuring documents in the browser cannot start third party apps for Office.

### Web parts

SharePoint Online provides spaces for users to customise their SharePoint page to include web parts into the page. Web Parts are additional functional parts that can be added into SharePoint pages to enhance productivity and usability for the site.

Web Parts are client-side applications that can be added into SharePoint Online. The document considers these two out of the box sets of webparts that needs to be considered as a part of the design decisions:

- Microsoft published webpart.
- Third party published webpart.

Web Part Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Microsoft published webpart | Enabled | Microsoft published webparts cannot be disabled in SharePoint. 
Third Party published webpart | Disabled | Third party web parts will be disabled due to potential unsecure data flow outside of Office 365. If a third party published webpart is identified for use in future, the organisation will undertake a risk assessment before implementation. 

### Sharing and access controls

Sharing and Access controls provide granular control over external sharing and access to SharePoint Online. Sharing and Access control is essential for securing SharePoint Online document and information sharing.

Access to SharePoint Sites can be controlled through a variety of means to ensure that the data of the sites is protected. This includes the configuration of:

- Only allowing access from specific IP address locations.
- Only allowing access from apps that use modern authentication.
- Blocking access from devices which are not managed by the organisation through Microsoft Endpoint Manager.
- Sites can be further secured through the implementation of Idle session timeouts. Idle session timeouts essentially act to log a user out of SharePoint after a period of inactivity.

Access Controls provides an administrative tool to restrict access contents in SharePoint.

Sharing and Access Control Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Sharing Controls | Configured | Sharing to external users will be disabled. Documents within SharePoint Online can only be shared with internal users. Collaboration and sharing will be achieved using Teams.
Access Controls | Configured | Access to SharePoint Online will be controlled on a device level to ensure data is being accessed from approved devices.

Sharing Configuration applicable to agencies leveraging a cloud native implementation.

Configuration | Value | Description
--- | --- | ---
**External Sharing** | | 
SharePoint | New and existing guests | Guest access is available in accordance with Collaboration in the DTA – Platform Design document. 
More external sharing settings | Limit external sharing by domain: Checked <br>Add domains that are allowed: Checked | Guests must sign in using the same account to which the sharing invitations are sent.
OneDrive | Only people in your organisation | No external sharing allowed.
**File and folder links** | | 
Choose the type of link that is created by default when users get links | Specific people | Internal link which can only be sent to people in your organisation.
**Other settings** | | 
Show owners the names of people who viewed their files in OneDrive | Checked | This is to ensure owners are aware of external users who have access to the document.
Let site owners choose to display the names of people who viewed files or pages in SharePoint | Checked | Permits display of activity on SharePoint sites to foster collaboration.
Use shorter links when sharing files and folders | Checked | Ensure URL are short and concise.
Default link permission | Edit | Users will have edit permissions by default to increase usability. If view permissions are required, this is also available.

Sharing Configuration applicable to agencies leveraging a hybrid implementation.

Configuration | Value | Description
--- | --- | ---
**External Sharing** | | |
SharePoint | Only people in your organisation | No external sharing allowed.
OneDrive | Only people in your organisation | No external sharing allowed.
**File and folder links** | | |
Choose the type of link that is created by default when users get links | Only people in your organisation | Internal link which can only be sent to people in your organisation.
**Other settings** | | |
Show owners the names of people who viewed their files in OneDrive | Checked | This is to ensure owners are aware of external users who have access to the document.
Let site owners choose to display the names of people who viewed files or pages in SharePoint | Checked | Permits display of activity on SharePoint sites to foster collaboration.
Use shorter links when sharing files and folders | Checked | Ensure URL are short and concise.
Default link permission | Edit | Users will have edit permissions by default to increase usability. If view permissions are required, this is also available.

Access Control Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
**Unmanaged Devices** | | |
Unmanaged Devices | Allow limited, web only access | Provide restricted access to devices that are not Microsoft Endpoint Manager compliant.
**Idle session time-out** | | |
Sign out inactive users automatically | On | Controls idle time on users logged onto a device.
Sign out users after: | 1 hour | Ensure users are logged out after an idle time.
Give users this much notice: | 5 minutes | Ensure users are notified before they are signed out.
**Network Location** | | |
Allow access only from a specific IP address range | Off | Define a trusted network boundary by specifying one or more authorized IP address ranges.
**Apps that do not use modern Authentication** | | |
Apps that do not use modern Authentication | Block access | Some third-party apps and previous versions of Office cannot enforce device-based restrictions. Use this setting to block all access from these apps.

### Legacy features

Legacy features allow for backwards compatibility for legacy capabilities from SharePoint on-premises to SharePoint Online. Legacy features are enabled only when there is a reason to do so, as they restrict the features available in SharePoint Online.

SharePoint Online provides legacy features by default to ensure backwards compatibility with legacy SharePoint on-premises solution.

Legacy Features Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
InfoPath | Not configured | InfoPath is going to be deprecated and it is recommended that InfoPath forms to be redeveloped into PowerApps in Office 365. 
Records Management | Not configured | Records Management administrative screen provides configuration settings to route files from a SharePoint Document Library to a centralised SharePoint Records Management site. This is to support the traditional Centralised records management system in SharePoint.<br>Note, this is a separate feature from [records management in Microsoft 365](https://docs.microsoft.com/en-au/microsoft-365/compliance/records-management).
Secure Store Settings | Not Configured | Secure Store in SharePoint Online provides a key vault to store all sensitive information in SharePoint. This is primarily used by InfoPath to store sensitive keys and passwords. It is recommended to use Azure Key Vault to store sensitive information. 
Business Connectivity Settings | Not configured | Business Connectivity Settings provides SharePoint on-premises ability to consume information from third party OData Information store.<br>It is recommended to use Power BI to consume third party data and publish it to SharePoint Online.
Search | Not configured | Search provides legacy support on crawled properties, managed properties and custom configuration required. 
Term Store | To be configured based on organisation existing term store to support existing taxonomy if required. | Term store is configured for the solution if required by the organisation. Term store provides a consistent taxonomy and ontology for the organisation. This enables ease of search for information within SharePoint.
User Profile | Not configured | User Profiles provide legacy support of custom properties for users and complied audience.
Hybrid Picker | Not configured | This is to ensure hybrid term stores are synchronised between SharePoint Online and on-premises.

## OneDrive for Business

OneDrive for Business is a cloud-based, secure, personal document store. It allows storage and access of files from any approved device, allows offline editing, simple organisational collaboration, search tools, and advanced encryption and security features. The sharing of these documents can be controlled to allow or disallow sharing with external parties.

OneDrive data can be configured to automatically synchronise data, ensuring the user does not need to download files every time they wish to access them.

On deletion of a user's account content can be deleted or retained for a specified period.

### Sharing

The OneDrive sharing administration screen provides granular configuration. Controlling OneDrive sharing ensures that data is shared internally and externally in a secure manner.

OneDrive provides end users the ability to securely store their personal data in Office 365. The design considers that OneDrive is used for personal storage and sharing within the organisation.

OneDrive for Business Sharing Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
External Sharing | Disabled  | Sharing to external users will be disabled. Collaboration and sharing will be achieved using Teams.

OneDrive sharing configuration applicable to all agencies and implementation types

Configuration | Value | Description
--- | --- | ---
**Links** | | 
Default Link Type | Internal: Only people in your organisation | No sharing is permitted outside the organisation.
**External Sharing** | | 
SharePoint | Only people in your organisation | No external sharing allowed.
OneDrive | Only people in your organisation | No external sharing allowed.
**Advanced settings for external sharing** | | 
Allow or block sharing with people on specific domains | Unchecked | Specific domains are not defined, meaning that content is permitted to be shared with all users within the directory (internal).
External users must accept sharing invitation using the same account that the invitations were sent to | Checked | Required to ensure users are authenticated before accepting sharing invitation. 
Let external users share items they don't own | Unchecked | Restricts external users (guests) from re-sharing content.
**Other settings** | | 
Display to owner the names of people who viewed their files | Checked | Ensure owner is are aware of who it has been shared with. 

### Storage and synchronisation

OneDrive and SharePoint can synchronise content locally through the OneDrive for Business client.

Content can be "pinned" for offline use, ensuring that specific content is available offline, and changes are merged later.

The Sync Administration screen provides control Synchronising of File in OneDrive and SharePoint.

The sync client is required to provide the ability for end users to work offline from Office 365.

Storage and Synchronisation Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Synchronisation client | Configured | The organisation must use the OneDrive sync client to provide an offline file capability.
Storage Limitations | Configured | To assist the organisation in managing user data specific storage and retention limitations will be configured.

Storage and Synchronisation Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Show the Sync button on the OneDrive Website | Checked | The synchronise button allows OneDrive files to be synced locally through the OneDrive for Business client.
Allow syncing only on PC joined to specific domains | Checked | Access to OneDrive content and synchronisation is controlled via Conditional Access, so this setting is not configured. Domain GUIDs to be provided by the Domain.
Block syncing of specific file type | Unchecked | File type synchronisation is not restricted. Microsoft Defender for Office 365 provides additional protection against malicious files.
Days to retain files after user account is marked for deletion | 365 days | Must align with the organisation internal record keeping policies.
Limit OneDrive user Capacity | 1024GB | Default setting.

### Notifications

Notifications provide OneDrive users with information about how OneDrive is operating. The notification administration screen provides notification control to OneDrive owners.

The design considers notification and alerting of users for all shared documents in the organisation to ensure users are aware of the status of shared documents.

Users can be notified by email when:

- Other users invite additional users.
- External users accept invitations.
- An anonymous access link is created or changed.

OneDrive for Business Notification Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
User notifications | Configured | Notifications will be configured to provide users with relevant information.

OneDrive for Business Notification Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Display device notification to users when OneDrive files are shared with them | Checked | OneDrive will notify users when new files are shared with them. 
**E-mail OneDrive owners when** | | 
Other users invite additional external users to shared files | Checked | OneDrive will notify users when a user re-shares a document to an external user (guest). 
External users accept invitations to access files | Checked | OneDrive will notify users when external users accept an invitation to access files. 
An anonymous access link is created  | Checked | OneDrive will notify users when an anonymous access link is created. 

### Content migration

The implementation of OneDrive for Business can be coupled with a migration from an existing on-premises SharePoint farm infrastructure.

This migration can take the form of one of the following:

- OneDrive (SharePoint 2010/2013) – Administrators can move an existing OneDrive site hosted to SharePoint Online. Administrators can also leverage the capability of a Hybrid configuration to automatically redirect users to their OneDrive for Business post migration.
- Network and local file shares – Most users will have a personal drive or a designated location on the network to save work which may not have a function assigned. To free up network storage and extend the ability to access files in the cloud, administrators can move files from a specific network path to the user's OneDrive for Business site.

If a migration is not required, the deployment is referred to as a greenfield deployment.

Access to OneDrive can be controlled to ensure organisation data is protected. This includes the configuration of:

- Only allowing access from specific IP address locations.
- Only allowing access from applications that use modern authentication.
- Only syncing to PCs joined to a specific domain.

On deletion of a user's account content will be deleted. The deletion period can be customised however it is recommended that the data be archived in an external system or migrated to a SharePoint Site.

Content Migration Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Deployment Type | Migration of data is out of scope for the blueprint however Microsoft provides vendor guidance  on possible migration paths for the organisation | Migration method is dependent on the outcome of an assessment of quantity and type of data to be migrated.

## Microsoft Teams

A Team in Microsoft Teams is a grouping of users who are working together to achieve an outcome. It allows users to communicate together through chat and meeting functions as well as collaborate on documents. Within the Team, Channels can be used to breakdown the work into smaller more specific items. These channels can be extended using Bots, Tabs, and connectors.

Microsoft Teams leverages most of the functionality of the Office 365 components. When a Team is created the following artefacts are created out of the box:

- SharePoint Site - A new SharePoint site with the URL format of `/sites/<SiteTitle>`, with the `SiteTitle`'s spaces are stripped out.
- Office 365 Group - A new Office 365 Group, which is added into the Azure AD tenant. This is created with the site title as the Group Name.
- Teams email – A new email address per channel can be created. The email inbox is managed centrally by the Microsoft Team services. At the time of writing this document, the email address will have a domain of `<custom email inbox>@apac.teams.ms`. 

Note: This email is not part of Microsoft Exchange Online.

### Access

Access to a team is controlled using Microsoft 365 groups located in Azure AD.

When a Team is created, an Office 365 group will be created. Owners of the group are delegated to perform administrative actions across the team, while members can participate in the team but not undertake any administrative actions.

The design considers permissions, roles and responsibility to administer, manage team owners and members within the team.

Microsoft Teams Access Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Team creation permission | `rol-OrganisationName-o365groupcreators` via restriction of 365 Group creation | Teams will be created by select administrators or users (via group) to ensure that Teams are created using a documented approval workflow, avoiding Team proliferation.<br>This setting is required as Azure AD group creation is restricted to delegated individuals which only allows administrators or delegated users to create 365 groups, and hence Teams. 
Administrative action over Teams after creation | Team Owners | Team Owners will either be selected administrators (for Teams such as branches with many users) or managers and their delegates (such as in a section with relatively small user counts). Team owners will be assigned logically at creation time and updated as required.
Team membership allocation | Manual by administrators or Team Owners | Team membership will be allocated manually initially with dynamic group allocation investigated in a future project phase when the logic for group membership is developed.

### Dynamic security group

Dynamic Security Groups are Azure AD security groups that are populated based on device and/or user attributes.

Dynamic Security groups can be leveraged to control access to locations, services, and features.

The membership of a Dynamic Security group is updated whenever an attribute of a device or user is modified. If the user/device no longer matches the group rule, then that user/device is removed. Conversely if a user/device now matches the group rule they are added. When a user is added the group can be configured so that the added user receives an email notifying them of the addition.

Naming of Dynamic Security groups can be streamlined using a Naming Policy. The Naming Policy ensures that the groups within the environment conform to a standard and their purpose can be easily identified.

Dynamic Security Groups Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Naming Policy | `grp-<Organisation>-<GroupName>` | Assists in MOGs and standardisation of organisation configuration.
Welcome Email | Disabled | The welcome email will be disabled to reduce the amount of generic correspondence being sent to users. 

### Organisation wide configuration

Microsoft Teams is a collaboration platform that enable the organisation to work collaboratively with external agencies. This allows organisation users to collaborate internally, with trusted guest users and set up meetings with external users. 

The design will consider the following configurations:

- External Access - configures allowable domains to connect to the organisation instance of Microsoft Teams. This also configures Skype for Business integration.
- Guest Access – is when an external user is invited to be a member of the team. Once a team owner has granted someone guest access, they can access that team's resources, share files, and join a group chat with other team members.
- Teams Settings – configures the default behaviour of all users in the Teams application.

Organisation Wide Configuration Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
External Access | Configured:<br>(Example) Allow dta.gov.au | Allow only dta.gov.au and deny sharing to external users. This will prevent users from setting up meetings with users that are not setup as a Guest of the organisation.
Guest Access | Configured:<br>Guest Access: Enabled | Allows people outside of the organisation to access teams and channels.
Teams Setting | Configured<br>Disable all third-party file storage | This is to ensure departmental users do not save file outside of the Microsoft 365 tenant. 

### Policies & settings

Microsoft Teams provides ability to create policies around messaging, meetings, calling, video, and guest access. These settings can be configured in policies and assigned to individual users within the organisation.

The list below highlights the policies that can be configured with in teams:

- Teams Policies – Teams policies defines the policy for users to discover private teams and create private channels.
- Meeting Policies – Meeting policies define creations of meetings, audio and video, content sharing, and participant and guest permissions to meetings in Teams.
- Live events Policies – Live events policies is used to globally broadcast departmental meeting via teams.
- Messaging Policies – Messaging policies defines behaviour of messages in Teams. The policy defines user capability in sending, editing, deleting, voice messages, and using giphy, stickers, URL preview and translator.
- Teams App – Teams apps policy defines the list of apps that can be used in Teams. Microsoft Teams provides Microsoft published apps and third-party apps that can be used in Microsoft Teams. The organisation can control creation of custom apps in Teams.

Policies and Settings Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Team Policy | Configured<br>Enable private channels | Team policy will be left as default settings.<br>Discovered private teams.<br>Create private channels. 
Meeting Policies | Configured<br>Global policy:<br>Automatically admit people – Everyone in your organisation<br>Cloud Recording – Enabled with automatic deletion | Meeting policy dictates how audio, videos and applications that are used in a team meeting.<br>Require external participants to be admitted to a meeting to prevent unauthorised entrance.<br>Enables meetings to be recorded while reducing storage consumption.
Live events Policies | Configured<br>Who can join live events:<br>Everyone in Organisation | Live events is configured to prevent users outside of the organisation (guest and external users) cannot attend these meeting.
Messaging Policy | Configured | Messaging policy dictates how messaging is used in Teams. These includes usage of Giphy, Memes and stickers in messages.
Teams apps | Configured<br>Global Policy:<br>Allow all Microsoft apps<br>Block all third-party apps<br>Block all custom apps | All third-party apps are blocked by the blueprint by default. The use of third-party apps should be risk assessed by Agencies individually.<br>Custom apps are custom developed applications created by the organisation. These should be enabled as required. 

### Unified communication

Teams provides a Unified Communication (UC) capability which allows users to participate in audio-visual conferencing in meetings and on-demand.

Teams can integrate with third-party UC products and provide configurable levels of functionality when integrated. Third party UC products will be the responsibility of the organisation.

Microsoft Teams can natively provide the following UC features:

- Individual and group voice calls.
- Individual and group video calls.
- Individual and group chat.

Unified Collaboration Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Individual and group voice calls | Configured | Default functionality. 
Individual and group video calls | Configured | Default functionality. 
Individual and group chat | Configured | Default functionality. 

### Voice calling

Enables agencies to make calls to landlines or mobiles within Microsoft Teams.

Voice calling can be configured in a number of ways depending on the requirements of the organisation, and whether a telephony system is already in place:

- VoIP calling: Available within Teams by default without any configuration required. Users can make voice or video calls to each other and collaborate over the internet outside of the PSTN (Public Switched Telephone Network) system. PSTN users outside of Teams can dial in using the provided PSTN dial in conference number to VoIP meetings where this is enabled.
- Operator Connect: Operator Connect enables a simple PSTN connection method which enables Agencies to connect to a PSTN provider of their choice if they participate in the Operator Connect program. The PSTN integration is managed as a service by the chosen operator.
- Calling Plan via Telstra Calling for Office 365: Telstra Calling avoids the complexity of separate collaboration systems and can be enabled within Teams. Similar to Operator Connect, this method provides a fully managed service by Telstra for Teams calling to PSTN systems.
- Direct Routing: Direct Routing enables hybrid Agencies to connect their on-premises telephony infrastructure to Microsoft Teams through a series of supported on-premises Session Border Controllers (SBC). This method provides the organisation a self-managed service for Teams calling to PSTN systems.

The following image describes how connectivity is achieved between Microsoft Teams and Telstra, for the Telstra calling for Office 365 service.

![Telstra Calling for Office 365](../img/o365-voice.png#center)

Voice Calling Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Voice Calling solution | Organisation decision | The organisation should assess their requirements for calling in order to select the right calling solution for Teams. 
Security Assessment | Organisation to risk assess | As the calling options are hosted outside of the M365 system boundary by third party providers they should be risk assessed to determine suitability. 

## Power platform

Power Platform combines the power of PowerApps, Power BI, and Power Automate (formerly Microsoft Flow) into one business application platform. This enables quick and easy app building and data insights.

### Power Apps and Power Automate

Power App and Power Automate are Office 365 tools to develop and create cross platform applications with minimal amount of coding. These tools enable an organisation to create forms, capture information, automate business process and present it in a report to the organisation.

Power Apps and Power Automate is built with an underlying connector that allows application to consume to be displayed and business process to act on this information. These connectors provide ability to consume or leverage on existing business tools. Power Apps and Power Automate connectors can be categorised as:

- Office 365 Connectors – Office 365 Connectors provides data access to Office 365 applications (e.g. SharePoint, Teams).
- Azure Services Connectors – Azure services connector provides Power Apps and Power Automate access to consume Azure Services (e.g. Azure Cosmos DB, Azure Computer Vision).
- Third Party Connectors – Third Party Connectors allows external vendors to provide a service to Power Apps and Power Automate (e.g. Adobe Reader Sign).
- On-premises data connectors – On-premises data connectors allows Power Apps and Power Automate to consume data from a variety of sources.

The following image shows consideration required for authentication process and requirements for each generalised group of connectors. The cloud services connector is required to be registered in Azure platform before it can be consumed in Power App and Power Automate. On-premises data access requires a service account for network access and a database service account access for Power Apps and Power Automate to consume its data.

![Power Apps and Power Automate authentication flow](../img/o365-power-authentication.png#center)

Power Apps and Power Automate Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Data Policies for Power Automate and Power Apps | Configured<br>Access only to SharePoint, OneDrive for Business, Office 365 Users, Planner, Outlook for 365, and Teams | Data Lost Prevention configures the connectors that can be used in Power Apps and Power Automate. <br>The organisation should evaluate the connectors to ensure it fits to the organisation's requirement. 
Environment Administrator | Configured<br>Access to Environment Administrator is assigned to a security group for Power App and Power Automate | Security group should be used to be assigned as Environment Administrator for PowerApps and Power Automate.<br>Environment Administrator will be allowed to create additional environment and configure the connector policies.

### Power BI

Power BI is a data visualisation tool which can be leveraged to provide interactive dashboards and reports. It integrates with a variety of data sources to enable the creation of dashboards and reports.

Power BI consists of five components:

- Power BI Desktop - Power BI desktop is a Windows desktop application which allows for the manipulation of data and the creation of reports and dashboards.
- Power BI Service - The Power BI service is a SaaS offering which allows the creation, modification, and sharing of reports and dashboards.
- Power BI Mobile - Power BI mobile is a mobile application which allows for the consumption of reports and dashboards.
- Power BI Report Server - The Power BI report server is an on-premises tool which enables reports to be distributed as required.
- Power BI Embedded – Power BI embedded allows organisation to publish Power BI report to be consumed in a public website.

Inside the Power BI Service, the creation of workspaces, content packs, custom visualisations, and data flows can be controlled both on an enterprise level and a group level. This simplifies management of the service.

Power BI also allows administrators to control the sharing of datasets, content, report publishing, and template apps. This ensures that the sharing of the organisation information is controlled.

Power BI Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Power BI Information Protection | Enabled | Power BI Information Protection leverages sensitive labels to label Power BI Reports. 
External Sharing  | Disabled | External Sharing is disabled to reduce the risk of data spills. 
Data Export | Disabled | Export of data is disabled to prevent unauthorised access to the underlying report information.
Third Party integration | Disable | Disable third party integration, such as ArcGIS. This should be evaluated by the organisation to ensure that the data stays within Australia.

## Security and Compliance

Office 365 provides Security and Compliance tools which can be utilised to implement an organisation's Information Management Policy and to assist with information governance. The Office 365 Security and Compliance tools provides the ability to govern and monitor the following components:

- SharePoint Online.
- OneDrive for Business.
- Teams.
- Exchange Online.

### Alerts

Office 365 contains various out-of-the-box Alert Policies, some of which are dependent on the available Office 365 licence. Alert Policies can be configured to track administrative activities, malware threats, user actions and/or data loss incidents.

Each alert can be configured with the following settings:

- Tracked Activity - The activity that will cause the alert to be generated. For example, sharing a file with an external user, assigning access permissions, or creating an anonymous link.
- Activity Conditions - When a tracked activity triggers, additional conditions can be applied to filter out unnecessary alerts. For example, an alert can be triggered only if a certain user performs a task.
- When to Trigger - When the above conditions are met, further filtering can be applied to only alert when a certain threshold is met. For example, an alert is only raised if the activity has been performed more than five times.
- Alert Category - An alert category is assigned to assist with tracking and managing the alerts generated.
- Alert Severity - An alert severity is assigned to assist with tracking and managing the alerts generated. The severity is displayed in the subject line of the alert email.
- Alert Notification - An alert can be configured with a list of email addresses that should receive the alert notifications. Daily notification limits can also be configured to ensure an alert receiver is not bombarded with alert emails for the same event. Triggered alerts can also be viewed in the Security & Compliance Center.

Alert Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Alert Policies Status | Default Alert Policies enabled | Custom alert policies are not required for the initial phase. Custom alert policies will be considered in a future project phase.

### Classification labels

Classification labels which is located under the Microsoft 365 Security & Compliance Center offers the ability to both control the data flow of sensitive information and control the retention of data. Classifications labels consists of the following:

- Sensitivity labels – Allow label specific protection policy settings to be enforced.
- Retention labels – Allow label specific retention policy settings to be enforced.

Sensitivity labels can be applied in the supported Office applications either in Microsoft 365 Apps for enterprise, Office for the Web or using the Microsoft Information Protection unified labelling client.

Classification labels are published to users using Label Policies. Label Policies define the users who can utilise the label and the locations within Office 365 where it can be used. Classification labels can be applied in the following ways:

- Manually - The label is applied manually by the end-user.
- Automatically applied based on the location of the document - Labels can be configured to automatically apply based on the location of the document. For example, SharePoint.
- Automatically applied based on detected Sensitive Information Type - Labels can be configured to automatically apply based on the type of sensitive information found. For example, documents containing Australian drivers licence numbers.

At the time of writing, sensitivity labels cannot be configured to satisfy all of the requirements listed in the Protective Security Policy Framework (PSPF). Some of these limitations are:

- Sensitivity labels, Exchange Transport rules or DLP, cannot set the `X-Protective-Marking` header *Origin- parameter prescribed in the PSPF.
- When using DLP or Auto Labeling policies to set a  `X-Protective-Marking` header:
  - certain characters prescribed in the PSPF are not supported (such as `:` and `,`) 
  - a character limit of 64 characters is the maximum
  - Exchange Transport rules do not have these character limitations
- When downgrading a sensitivity label, the downgrade cannot be prevented, only forcing the user to justify the downgrade. 
- Sensitivity labels are not available within calendar invites.

The following MIP methods can be used to assist with PSPF compliance:

- For calendar invites, advise users to add the classification to the body, and use transport rules or DLP to add the required subject and header values.
- Update the `X-Protective-Marking` header associated with the MIP label at the email gateway with the `ORIGIN=user@organisation.com.au` property. Note, internal emails inside the organisation wouldn't be tagged using this method.

Example email gateway rules that work with MIP are available in the [Network Configuration ABAC document](../../as-built-as-configured/hybrid-network-configuration#office-365--email-protective-markings-with-aip-technology). These rules are based on regular expressions and are easily adaptable to vendor specific email gateways.

Classification Label Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Sensitivity Labels | Enabled | Labels will be applied in accordance with the latest guidance from the PSPF.
Retention Labels | Enabled | Labels are recommended to be applied to automate retention configuration and compliance, but the development of specific retention labels is out of scope for this project. 
Labelling Policy | Enabled | Users will apply labels manually initially. 
Subject line modification | Configured | DLP policies are available to modify the subject line in accordance with PSPF guidance based on matching sensitivity labels. 
Auto-labeling | Configured | Automatic Label (auto-labeling) polices will be configured to add the correct sensitivity label to inbound emails when an email is configured with a classification outside of the organisation's tenant or through a 3rd party marking tool. 
Protected Marking Header | Organisation Decision | Agencies can best determine the method to set the `x-protective-marking` header based on their requirements. As of February 2022, the most effective method natively is using Exchange Transport rules in conjunction with the gateway rules (for hybrid or PROTECTED deployments) due to character limitations. 

### Retention policies

Business information is required to be managed in order to comply with industry and government regulations and internal policies that require data to be retained for a certain period.

Office 365 retention policies assist with meeting these requirements by providing the following features:

- Configure policies to proactively decide whether to retain content, delete content, or both retain and then delete the content.
- Apply a single policy to the entire organisation or just to specific locations or users.
- Apply a policy to all content or just content meeting certain conditions, such as content containing specific keywords or specific types of sensitive information.

When information is subject to a retention policy, end-users can continue to edit and work with the content as if nothing has changed because the content is retained in place, in its original location. But if someone edits or deletes content that is subject to the policy, a copy is saved to a secure location where it's retained while the policy is in effect.

The use of Office 365 retention policies (including litigation or preservation holds) does not replace the need for regular backups and the ability to recover that important data. Agencies should determine their own requirements for backup and recovery in accordance with their business continuity requirements.

Retention policy Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Retention Policies | Configured | To ensure that legislative data retention requirements are met. This is to ensure that the organisation holds the data for fraud detection.

Retention Policies configuration applicable to agencies leveraging a cloud native implementation.

Configuration | Value | Description
--- | --- | ---
**Name: Exchange Indefinite Hold** | | |
Retention configuration | Retain the data "Forever" | How long the data is to be held by the policy.
Location | Exchange email – All users included | The Office 365 location where the policy applies.
**Name: SharePoint Indefinite Hold** | | |
Retention configuration | Retain the data "Forever" | How long the data is to be held by the policy.
Location | SharePoint Sites – All Sites | The Office 365 location where the policy applies.
**Name: OneDrive Indefinite Hold** | | |
Retention configuration | Retain the data "Forever" | How long the data is to be held by the policy.
Location | OneDrive Accounts – All Accounts | The Office 365 location where the policy applies.
**Name: Microsoft 365 groups Indefinite Hold** | | |
Retention configuration | Retain the data "Forever" | How long the data is to be held by the policy.
Location | Microsoft 365 groups – All Groups | The Office 365 location where the policy applies.
**Name: Teams Channel Messages Indefinite Hold** | | |
Retention configuration | Retain the data "Forever" | How long the data is to be held by the policy.
Location | Teams channel messages – All teams included | The Office 365 location where the policy applies.
**Name: Teams chats Indefinite Hold** | | |
Retention configuration | Retain the data "Forever" | How long the data is to be held by the policy.
Location | Teams chats messages – All users included | The Office 365 location where the policy applies.

Retention Policy Configuration applicable to agencies leveraging a hybrid implementation

Configuration | Value | Description
--- | --- | ---
**Name: Exchange 3 Years Hold** | | |
Retention configuration | Retain the data for 3 years | How long the data is to be held by the policy.
Location | Exchange email – All users included | The Office 365 location where the policy applies.
**Name: SharePoint 3 Years Hold** | | |
Retention configuration | Retain the data for 3 years | How long the data is to be held by the policy.
Location | SharePoint Sites – All Sites | The Office 365 location where the policy applies.
**Name: OneDrive 3 Years Hold** | | |
Retention configuration | Retain the data for 3 years | How long the data is to be held by the policy.
Location | OneDrive Accounts – All Accounts | The Office 365 location where the policy applies.
**Name: Microsoft 365 groups 3 Years Hold** | | |
Retention configuration | Retain the data for 3 years | How long the data is to be held by the policy.
Location | Microsoft 365 groups – All Groups | The Office 365 location where the policy applies.
**Name: Teams Channel Messages 3 Years Hold** | | |
Retention configuration | Retain the data for 3 years | How long the data is to be held by the policy.
Location | Teams channel messages – All teams included | The Office 365 location where the policy applies.
**Name: Teams chats 3 Years Hold** | | |
Retention configuration | Retain the data for 3 years. | How long the data is to be held by the policy.
Location | Teams chats messages – All users included | The Office 365 location where the policy applies.

### Data Loss Prevention

Data Loss Prevention (DLP) policies enable an organisation to identify, monitor, and automatically protect sensitive information across Office 365 and endpoint devices. DLP policies can be targeted to one or more products within the Office 365 suite.

A DLP policy can be configured to:

- Identify sensitive information (Sensitive information types), documents in a specific site (for SharePoint only) or specific labels (sensitivity labels) contained in Exchange Online, SharePoint Online, locally on devices (endpoint DLP) and OneDrive for Business.
- Prevent end-users from accidentally sharing sensitive information.
- Prevent end-users from accidentally deleting a document.
- Update documents or emails based on sensitivity labels or data matching, used in conjunction with auto-labling feature can assist with PSPF compliance
- Educate end-users by presenting messages them on how to stay compliant when relevant. This is done without interrupting their workflow.

At the time of writing Office 365 has over 200 prebuilt sensitive information types (Australian Passport Numbers etc.). In addition to the prebuilt sensitive information types custom types can be created. These custom types look for strings, patterns, or key words.

Note, endpoint DLP requires onboarding of those devices into Microsoft Defender for Endpoint. Agencies should consider the use of Endpoint DLP as part of a unified DLP strategy.

Data Loss Prevention Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Data Lost Prevention Policies | Configured  | To provide insights into the movement of potentially sensitive information, and for PSPF compliance (x-protected header and subject field marking). 

Data Loss Prevention Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
**Name: Australian Privacy Act** | |
Locations | Protect content in Exchange email, Teams chats, channel messages, OneDrive and SharePoint documents.  | The locations where the policy will apply.
Content type | Australian Driver's Licence number<br>Australian Passport number | The types of sensitive information being detected. 
Sharing detection | With people outside my organisation | When the policy is applied.
Notify users | Enabled | Users are notified when the policy is triggered. They are also provided policy tips for managing sensitive information. 
Amount of instances | 5 | The amount of sensitive information required to trigger the policy (10 is the default).
Send incident reports | Enabled  | User and nominated administrator are notified when the policy is triggered.
Restrict access or encrypt the content | Disabled | Access to the content that triggers the policy can be encrypted or and access limited. 
**Name: Australian Personally Identifiable Information (PII) data** | |
Locations | Protect content in Exchange email, Teams chats, channel messages, OneDrive and SharePoint documents.  | The locations where the policy will apply.
Content type | Australia Tax File Number <br>Australia Driver's Licence Number | The types of sensitive information being detected. 
Sharing detection | With people outside my organisation | When the policy is applied.
Notify users | Enabled | Users are notified when the policy is triggered. They are also provided policy tips for managing sensitive information. 
Amount of instances | 5 | The amount of sensitive information required to trigger the policy (10 is the default).
Send incident reports | Enabled  | User and nominated administrator are notified when the policy is triggered.
Restrict access or encrypt the content | Disabled | Access to the content that triggers the policy can be encrypted or and access limited. 
**Name: Australian Health Records Act (HRIP Act)** | |
Locations | Protect content in Exchange email, Teams chats, channel messages, OneDrive and SharePoint documents.  | The locations where the policy will apply.
Content type | Australia Tax File Number <br>Australia Medical Account Number | The types of sensitive information being detected. 
Sharing detection | With people outside my organisation | When the policy is applied.
Notify users | Enabled | Users are notified when the policy is triggered. They are also provided policy tips for managing sensitive information. 
Amount of instances | 5 | The amount of sensitive information required to trigger the policy (10 is the default).
Send incident reports | Enabled  | User and nominated administrator are notified when the policy is triggered.
Restrict access or encrypt the content | Disabled | Access to the content that triggers the policy can be encrypted or and access limited. 
**Name: Australian Financial Data** | |
Locations | Protect content in Exchange email, Teams chats, channel messages, OneDrive and SharePoint documents.  | The locations where the policy will apply.
Content type | SWIFT Code <br>Australia Tax File Number <br>Australia Bank Account Number <br>Credit Card Number | The types of sensitive information being detected. 
Sharing detection | With people outside my organisation | When the policy is applied.
Notify users | Enabled | Users are notified when the policy is triggered. They are also provided policy tips for managing sensitive information. 
Number of instances | 10 | The amount of sensitive information required to trigger the policy (10 is the default).
Send incident reports | Enabled  | User and nominated administrator are notified when the policy is triggered.
Restrict access or encrypt the content | Disabled | Access to the content that triggers the policy can be encrypted or and access limited. 
**Name: PROTECTED Data*** |  |
Locations | Protect content in OneDrive and SharePoint documents. | The locations where the policy will apply. 
Content type | All published PROTECTED sensitivity labels (Any of these) | The types of sensitive information being detected. 
Sharing detection | With people outside my organisation | When the policy is applied. 
Notify users | Enabled | Users are notified when the policy is triggered. They are also provided policy tips for managing sensitive information. 
Amount of instances | 1 | The amount of sensitive information required to trigger the policy (10 is the default). 
Send incident reports | Enabled | User and nominated administrator are notified when the policy is triggered. 
Restrict access or encrypt the content | Disabled | Access to the content that triggers the policy can be encrypted or and access limited. 
**Name: *Classification* Append Subject** | Note: each sensitivity label published requires a separate  'Append Subject' policy |
Content type | *Classification* sensitivity labels (Any of these) | The types of sensitive information being detected. 
 Advanced DLP Rules                                           | Content Contains: Sensitivity labels (select classification for policy)<br />Action: Modify subject<br />Remove text that matches this patten `\[SEC=.*?\]`<br />Insert this replacement text: `[SEC=Classification and DLM]` | Classification the policy is target for Subject line modification, e.g. `[SEC=OFFICIAL:Sensitive]` 
 Notify users                                                 | Disabled                                                     | Users are not notified when the policy is triggered.         

The Microsoft 365 Compliance Center provides the ability to monitor and review user and administrator activities across the Microsoft 365 applications from the past 90 days.

Audit logs are kept by default for 90 days but are configurable up to 10 years using an Audit retention policy with Microsoft Purview Audit (Premium).

When an event occurs for the respective application it will take anywhere from 30 minutes up to 24 hours before it can be viewed in the audit log search.

The Microsoft 365 Management Activity API enables third-party applications to consume audit logs from Microsoft 365. If audit logging is disabled, third-party applications can still consume audit logs from the Microsoft 365 Management Activity API.

A list of Office 365 applications, their auditing capabilities and duration wait time once an event occurs.

Application | User Activity | Admin Activity | Duration wait time
--- | --- | --- | ---
Exchange Online | x | x | 30 minutes
OneDrive for Business | x |  | 30 minutes
SharePoint Online | x | x | 30 minutes
Sway | x | x | 24 hours
Power Bi | x | x | 30 minutes
Workplace Analytics |  | x | 30 minutes
Dynamics 365 | x | x | 24 hours
Yammer | x | x | 24 hours
Microsoft Power Apps | x | x | 24 hours
Microsoft Power Automate | x | x | 24 hours
Microsoft Steam | x | x | 30 minutes
Microsoft Teams | x | x | 30 minutes
Microsoft Forms | x | x | 30 minutes
Azure Active Directory |  | x | 24 hours
eDiscovery activities in Office 365 Security & Compliance Center | x | x | 30 minutes

Audit logging is not enabled by default and must be turned on first in Microsoft Purview (formerly Microsoft 365 Compliance Center) before user or administrator activities can be audited.

Auditing and Logging Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Microsoft Purview Audit (Premium) | Enabled<br>10-year retention | To provide visibility into the actions being undertaken within the Microsoft 365 environment.

## Exchange Online Protection

Exchange Online Protection (EOP) is a series of filtering services within Exchange Online that protects the organisation against spam, malware, and other email threats.

### Connection filtering

Connection filtering within Exchange Online Protection provides Exchange Online with a list of known safe IP (IP allow list) addresses to assist with mail filtering. It can also be used to reject messages from various known malicious sources (IP block list). Microsoft provide a dynamic allow list that identifies various sources (safe list) that are considered safe from 3rd-party lists.

Exchange Online Protection Connection Filtering is always enabled however it can, to a degree, be configured. A connection filter can be implemented to always allow or always block traffic based upon an IP list.

Connection Filtering Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configure Connection Filter | Configured | Agencies are to provide IP addresses considered as safe.

Connection Filter Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Connection filter policy name | Default | This policy is the default policy configured when Exchange Online is enabled and is consistent with best practice. 
Scoped to | All Domains | This is the default setting configured when Exchange Online is enabled.
IP Allow list | Not Configured | This is the default setting configured when Exchange Online is enabled. Agencies should determine their allow list specific to their environment. 
IP Block list | Not Configured | This is the default setting configured when Exchange Online is enabled. 
Safe list | Disabled | This is the default setting configured when Exchange Online is enabled. 

### Anti-malware

Anti-malware within Exchange Online Protection refers to the default anti-malware scanning which is completed on all emails routing through the service.

In addition to the default scanning, anti-malware policies can be configured. These policies allow for the customisation of a response if malware is detected and the restriction of attachment file types.

Anti-malware Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configure Anti-malware Policy | Configured | Configuring the anti-malware policy to allow for the customisation of a response if malware is detected and the restriction of attachment file types.

Anti-malware Policy Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Anti-malware policy name | Default | Editing the default policy ensures it applies to all incoming and outgoing mail and is consistent with best practice.
Malware detection response  | Notify recipients that the message has been quarantined with the default notification text | This will send a notification to recipients when a message is quarantined.
Sender notifications | Notify internal senders | This will send notification to senders when their message is quarantined.
Administrator notifications | Notify administrators about undelivered messages from internal senders
Notify administrators about undelivered messages from external senders | Administrators will be notified when messages are undelivered.
Allowed File type filtering | Disabled | This is the default setting configured when Exchange Online is enabled and is Microsoft best practice. This ensures that all file types are inspected for malware with no exceptions.

### Policy filtering

Policy filtering within Office 365 Exchange Online Protection refers to the enforcement of Transport Rules.

Transport Rules are a set of rules enforced on mail transiting through the Exchange Organisation. Transport rules can be leveraged by Administrators to complete a number of actions on all mail or a subsection of the mail transiting through the Exchange Organisation. These items include:

- Block mail with certain headers.
- Apply disclaimers to emails.
- Apply Office 365 message encryption.

Transport Rules follow the following basic structure:

- Conditions – Conditions identify which mail the transport rule applies to. These conditions largely target either information gained from message headers (e.g. the 'to', 'from' or 'CC' fields) or message properties (e.g., size, attachments, subject, body, message classification). A single rule can have multiple conditions apply.
- Exceptions – Exceptions are an optional component of a Transport Rule and define the mail exempt from the rule.
- Actions – Actions are used to define what actions to undertake on the messages matching the conditions and which do not match any exemption. These actions include rejecting, deleting, redirecting the emails, and adding recipients, prefixes, and disclaimers. A single rule can have multiple actions applied however some actions are incompatible with others.
- Properties – Properties are used to define anything which do not fall into another category. This includes enforcing or testing the rule.

Policy Filtering Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Mail flow rules | Configured | Mail flow rules within the environment are required to enforce business rules and process.

### Content filtering

Content Filtering within Exchange Online Protection refers to SPAM management and SPAM policies.

Content Filtering policies allow for:

- The customisation of response on SPAM detection.
- Marking emails as SPAM based on language detected.
- Marking emails as SPAM based on the sender or sender's domain.
- Increasing the SPAM score if certain content is present in the email.
- Marking emails as SPAM if certain content is present in the email.

The use of these policies allows greater management control over SPAM emails.

Content Filtering Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Configure SPAM policy | Default configuration | Exchange Online Protection will complete SPAM evaluation.

## Microsoft Defender for Office 365

Microsoft Defender for Office 365 extends the native security features in Office 365. The protections provided by Microsoft Defender for Office 365 are designed to defend against attacks from multiple threat vectors including email, websites and documents stored in online libraries, such as SharePoint Online. Each of the Microsoft Defender for Office 365 capabilities is enabled and managed via policies configured from the Office 365 Security and Compliance Center.

Microsoft Defender for Office 365 provides the following capabilities:

- Safe Links - Microsoft Defender for Office 365 Safe Links provides inspection of links included in emails and Office 365 documents to determine if it is malicious, redirecting the user if it is.
- Safe Attachments - Microsoft Defender for Office 365 Safe Attachments provides sandbox execution of attachments to detect and delete malicious content.
- Anti-Phishing - Microsoft Defender for Office 365 Anti-Phishing provides machine learning capabilities to detect advanced phishing campaigns.

### Safe Links

Microsoft Defender for Office 365 Safe Links can help protect an organisation by providing time-of-click verification of web addresses (URLs) in email messages, Teams messages, and Office documents. Protection is defined through Safe Links policies that are configured by an organisation.

Administrators can redirect URLs in order to avoid being sent to the original link. In addition, administrators can obfuscate the original link preventing users from copying and pasting the link into a web browser.

Real-time scanning of URLs provides an additional layer of protection by scanning links during transit and hold an email message from being delivered until the links have been scanned and considered safe.

Safe Links can be configured at an organisation level or on a per recipient basis. These policies then be applied to either Exchange Online, Office 365 applications or both.

Safe Links protection works as outlined below for URLs in emails that are hosted in Office 365:

- All incoming email goes through Exchange Online Protection, where IP and envelope filters, signature-based malware protection, anti-spam and anti-malware filters are applied.
- An end-user signs into Office 365 and accesses their Exchange Online mailbox.
- An end-user opens an email message containing a URL, and then clicks on the URL in the email message.
- The Safe Links feature immediately checks the URL before opening the website. The URL is identified as blocked, malicious, or safe.
- If the URL sends an end-user to a website that is included in a custom "Do not rewrite" URLs list for a policy that applies to the user, the website opens.
- If the URL sends an end-user to a website that is included in the organisation's custom blocked URLs list, a warning page opens
- If the URL sends an end-user to a website that has been determined to be malicious, a warning page opens.
- If the URL goes to a downloadable file and the Safe Links policies are configured to scan such content, the downloadable file is checked.
- If the URL is considered safe, the end-user is taken to the website.

Safe Links protection works as outlined below for URLs in Office 365 ProPlus applications:

- A user opens a Word, Excel, PowerPoint, or Visio, and is signed in using their Office 365 security credentials. The document contains URLs.
- When a user clicks on a URL in the document, the link is checked by the Safe Links service.
- If the URL sends an end-user to a website that is included in a custom "Do not rewrite" URLs list for a policy that applies to the user, that user is taken to the website.
- If the URL sends an end-user to a website that is included in the organisation's custom blocked URLs list, the user is taken to a warning page.
- If the URL sends an end-user to a website that has been determined to be malicious, the user is taken to a warning page.
- If the URL goes to a downloadable file and the Safe Links policies are configured to scan such downloads, the downloadable file is checked.
- If the URL is considered safe, the end-user is taken to the website.

Safe Links Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Microsoft Defender for Office 365 Safe Links | Configured | Configured to align with ACSC's Malicious Email Mitigation Strategies and Microsoft guidance.

Safe Links Configuration applicable to all agencies and implementation types.

Configuration | Value | Description
--- | --- | ---
Action for unknown potentially malicious URLs in messages | URLs will be rewritten and checked against a list of known malicious links when user clicks on the link | Configured to align with ACSC's Malicious Email Mitigation Strategies and Microsoft guidance.
Action for unknown or potentially malicious URLs within Microsoft Teams | Microsoft Teams will check against a list of known malicious links when user clicks on the link; URLs will not be rewritten | Configured to align with ACSC's Malicious Email Mitigation Strategies and Microsoft guidance.
Do not track when users click safe links | Unchecked | Information about when end-users click safe links in the Office 365 documents will be tracked.
Do not let users click through safe links to original URL  | Checked | If end-users click on safe links in Office 365 documents, then they will be directed to a warning page and will not be presented with an option to continue to the original link.

### Safe Attachments

The Safe Attachments feature checks email attachments after the email is received but before it is delivered to the user mailbox.

When an Safe Attachments policy is in place and an end-user who is covered by that policy views their email in Office 365, their email attachments are checked, and appropriate actions are taken, based on the configured policies.

Safe Attachments Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Microsoft Defender for Office 365 Safe Attachments | Configured | Configured to align with ACSC's Malicious Email Mitigation Strategies and Microsoft guidance.

Safe Attachments Configuration applicable to all agencies and implementation types

Configuration | Value | Description
--- | --- | ---
Turn on Safe Documents for Office clients | Ticked | Before a user is allowed to trust a file opened in Office 365 ProPlus, the file will be verified by Microsoft Defender Advanced Threat Protection.
Safe Attachments unknown malware response  | Block | The Block action ensures that emails containing malware do not enter the users mailbox.
Redirect attachment on detection. Send the blocked, monitored or replaced attachment to an email address  | Enable Redirect - Ticked | This will send blocked or replaced email messages with an attachment that is identified as malicious to a selected email address.
Apply the above selection of malware scanning for attachments times out or error occurs | Ticked | Will redirect an end-user's email messages to a selected email address even if a time out or error occurs when malware scanning an attachment. This allows legitimate emails to be recovered and malware to be investigated. 
Applied to | Configured | All organisation domains (e.g., dta.gov.au).

### Anti-phishing

Anti-phishing protects users by checking incoming messages for indicators that the message may be spoofed by impersonator or part of a phishing campaign. Most phishing emails involves a malicious actor disguising oneself (spoofing) as an individual who is known to the recipient. The messaged is crafted in a such a way which can trick the user into clicking a link, downloading malware, or stealing user credentials.

Anti-phishing uses mailbox intelligence to build a profile of communication habits between each user and maps out these relationship patterns. In an event of a phishing campaign it will analyse the message behaviour against the user profiles to determine if the sender is legitimate or an impersonator.

Anti-spoof specifically analyses the senders address to determine if it is legitimate or forged. Administrators can allow our block specific users from spoofing an internal domain. i.e. An external organisation to send out advertising or products on behalf of the organisation.

Anti-phishing Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Microsoft Defender for Office 365 Anti-Phishing | Configured | Configured to align with ACSC's Malicious Email Mitigation Strategies and Microsoft guidance.

Anti-Phishing Configuration applicable to all agencies and implementation types

Configuration | Value | Description
--- | --- | ---
**Impersonation Policy** | | |
Add users to protect | On | Impersonation of high profile organisation representatives (such as executives) can pose a large organisation risk. 
Add domains to protect | Automatically include the domains I own: On<br>Include custom domains: Off | Specify domains which you want to protect from being impersonated by attackers.
Actions | If email is sent by an impersonated user: Quarantine the message<br>If email is sent by an impersonated domain: Quarantine the message | Specify an action in an event an attacker impersonates the users or domains you have specified.
Mailbox Intelligence | Enable mailbox intelligence: On<br>Enable mailbox intelligence based on impersonated protection: On<br>If an email is sent by an impersonate user: Quarantine the message | This feature uses machine learning to determine a user's email patterns with their contacts. With this information, the artificial intelligence can better distinguish between genuine and phishing emails.<br>Impersonated protection allows Office 365 to customize user impersonation detection and better handle false positives. When user impersonation is detected, based on mailbox intelligence, you can define what action to take on the message.
Add trust senders and domains | Not configured | When users interact with domains or users that trigger impersonation but are considered to be safe. i.e. if a partner has the same/similar display name or domain name as a user defined on the list.
**Spoofing Policy** | | |
Spoofing filter settings | Enable antispoofing protection: On | Allows the organisation to filter email from senders who are spoofing domains.
Enable Unauthenticated Sender Feature | Enable Unauthenticated Sender: On | Displays a notification to users in Outlook when a sender fails authentication checks.
Actions | If email is sent by someone who's not allowed to spoof your domain: Quarantine the message | Specify an action in an event an unauthorised user spoofs a domain.

## Microsoft Whiteboard
Microsoft Whiteboard is a hosted whiteboarding tool used for collaboration. It integrates with Microsoft 365 services such as Teams and functions on devices such as the Microsoft Surface hub, Windows and iOS. Access to use the tool can be controlled globally.

Microsoft leverages diagnostic data to both address issues and continually improve the Microsoft Whiteboard tool. The level of data provided to Microsoft from clients utilising the Whiteboard application can be controlled. The diagnostic data configuration options are:
- Required – The minimum amount of data necessary to keep Whiteboard secure, up-to-date, and performing as expected on devices.
- Optional – Additional data to help make product improvements and provides enhanced information to help detect, diagnose, and fix issues. All data under the required setting is also included.
- Neither - No diagnostic data about the Whiteboard client software running on the devices is sent to Microsoft. 

The Whiteboard tool also offers optional connected experiences. These experiences are offered directly to users by Microsoft and include items such as Bing image search, Word or PowerPoint document insertion, and Ink beautification. When the connected services are leveraged, the required service data is provided to Microsoft. This data is separate from any diagnostic data provided.

The Whiteboard tool can be used with the Microsoft Surface hub appliance. When using the tool easy sharing can be configured. Easy sharing allows sharing of Whiteboard sessions without logging into the Surface Hub appliance. 

Microsoft Whiteboard Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Whiteboard for everyone in the organisation | Enabled | Allowing the use of Whiteboard within the organisation. 
Level of diagnostic data | Neither | Restricts the amount of data provided to Microsoft for diagnostic and product improvements.
Connected experience in Whiteboard | Disabled | Restricts the availability of unapproved optional experience to be presented to users. 
Easy sharing of Whiteboard from Surface hub | Organisation Decision | Depending on the location and configuration of the Surface Hub/s within the organisation this setting may be configured.   

## Microsoft Forms
Microsoft Forms is a form and survey tool. It offers a variety of external sharing and collaboration options including:
- Sharing links - Sharing the link to external party for form population.
- Collaboration of layout and structure - Collaboration on the design of a form.
- Sharing templates - Sharing a form as a template for external parties to leverage.
- Sharing results - Sharing the results of a form with external parties.
It can also be configured to allow images from Bing and videos from YouTube to be embedded.

Microsoft Forms is capable of capturing the names of the organisational users who complete a form or survey. This functionality can also be configured globally or on a form by form basis.  

Surveys and forms can be leveraged for potentially malicious purposes. Phishing protection for Microsoft Forms scans forms for common phishing questions. If they are detect, the form is prevented from being distributed or shared. Phishing protection only protects internal organisation forms.

At time of writing, Microsoft Forms processes and stores data for Australian tenants within the [United States](https://docs.microsoft.com/en-au/microsoft-365/enterprise/o365-data-locations?view=o365-worldwide#australia), it is recommended to not process sensitive information using Microsoft Forms.

Microsoft Forms Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
External Sharing -  Sharing of link and collection of responses | Enabled | Sharing of form links will be enabled, it is up to the organisation which forms they wish to publish.
External Sharing -  Collaboration on the layout and structure | Enabled | Collaboration on the layout and structure of forms will be enabled, it is up to the organisation which forms they wish to collaborate on.
External Sharing -  Sharing of form as a template | Enabled | Sharing forms as a template will be enabled, it is up to the organisation which forms they wish to publish.
External Sharing -  Sharing of result summary | Disabled | Prevents potential data spills from result exposure. 
Record names by default | Disabled | Prevents the recording of user names where not required. 
Bing search and YouTube video embedding | Disabled | Prevents the use of Bing images and YouTube images within Forms. 
Phishing protection | Enabled | Blocks forms from being shared or distributed if they contain common phishing questions.

## Microsoft Planner
Microsoft Planner is a task planning and assignment tool which can integrate with other Microsoft 365 services such as Microsoft Teams. Planner leverages iCalendar publishing to allow planner users to add tasks into their calendar. When tasks are published via iCalendar, they are available to all users with the iCalendar URL. The users can be both internal and external to the organisation.

Microsoft Planner Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Publishing through iCalendar feed | Disabled | To prevent users from sharing sensitive information via iCalendar feeds.

## Viva Learning
Viva Learning is a Microsoft Teams app which aims to assist users to find and access training from multiple content providers. Viva Learning content can be enabled from LinkedIn Learning, Microsoft Learn, and Microsoft 365 Training. Administrators can also configure a SharePoint site to host addition content, which can be done without enabling content from other providers.

Note, Viva Learning content is subject to terms other than the Microsoft Product Terms, including third-party content provider’s terms, which have not been reviewed as part of the Office 365 IRAP assessment. It is recommended that Agencies review these terms as part of any risk assessment relating to the use of this content.

Viva Learning Design Decisions for all agencies and implementation types.

Decision Point | Design Decision | Justification
--- | --- | ---
Diagnostic data | Disabled | Prevent data from being provided to Microsoft for diagnostic and product improvements.
LinkedIn Learning | Disabled | LinkedIn Learning content is subject to third-party content provider’s terms that have not been reviewed as part of the Office 365 IRAP assessment.
Microsoft Learn | Disabled | Microsoft Learn content is subject to terms other than the Microsoft Product Terms and have not been reviewed as part of the Office 365 IRAP assessment.
Microsoft 365 Training | Disabled | Microsoft 365 Training content is subject to terms other than the Microsoft Product Terms and have not been reviewed as part of the Office 365 IRAP assessment.
SharePoint | Disabled | The blueprint does not provide training content. Agencies with existing content may enable a SharePoint site to host Viva Learning content, subject to internal assessment.