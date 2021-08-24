---
layout: engagement
title: Client Devices Design – AVD Addendum
---

**July 2021**

## 1. Background

The DTA developed the Protected Utility Blueprint to enable Australian Government agencies to transition to a secure and collaborative Microsoft Office 365 platform. The solution is underpinned by proven technologies from the Microsoft Modern Workplace solution (Microsoft 365 including Office 365, Enterprise Mobility + Security, and Windows 10). The Blueprint design is delivered as three distinct documents:

* **Platform** – Provides technologies that underpin the delivery of the solution,
* **Client Devices** – The client device, which is configured and managed by Microsoft Intune, SCCM or a combination of both. This section also includes Azure Virtual Desktop (AVD) as an addendum to the Client Devices section, and 
* **Office 365** – Microsoft Office 365 productivity applications.

The Blueprints are accompanied by Configuration Guides and Security Documentation adhering to the Australian Cyber Security Centre (ACSC) PROTECTED requirements for Information and Communication Technology (ICT) systems handling and managing Government information. These artefacts provide a standard and proven Microsoft 365 solution aimed to fast track the adoption of the Microsoft Modern Workplace experience.

The following Blueprint documentation contains considerations for best practice deployment advice from the Australian Government Information Security Manual (ISM), relevant Microsoft hardening advice, the ACSC Essential Eight and the ACSC hardening guidelines for Microsoft Windows 10.

## 2. Overview

### 2.1. Purpose

This document provides the design of the platform technology components that will be implemented to support the solution. For technologies and services not covered, refer to the respective design document.

### 2.2. Scope 

The following components are in scope for Azure Virtual Desktop. Those not listed below are not in scope.
* Solution Overview - This section provides an overview of the Azure Virtual Desktop technology and describes how and why agencies would benefit from implementation. It also covers assumptions and prerequisites to be observed before designing and deploying an Azure Virtual Desktop solution.
* Platform Components – Active Directory, Policies, Personalisation and Profile Management, and Resource Tags.
* AVD Components – Control Plane, Host Pool, Session Host, App Groups, Workspaces and Session and Idle Timeouts.
* Access and Connectivity – Gateway Firewall and Client Access.
* Users and Devices – User Personas and Client Devices.
 
For each component within the document there is a brief description of the contents of the section, a commentary on the things that have been considered in determining the decisions and the design decisions themselves.

## 3. Azure Virtual Desktop
### 3.1. Solution overview

Azure Virtual Desktop (AVD) is a PaaS offering managed by Microsoft that allows administrators to configure, deploy, and manage, scalable flexible solutions. AVD enables administrators to publish either full desktops or distinct remote apps from a single host pool or create individual app groupings for different sets of users.

Using the Windows 10 Enterprise multi-session capability exclusively available to Azure Virtual Desktop on Azure services, corporations and departments are able to reduce the number of virtual machines and OS overhead while providing the same resources to users.

AVD provides the following benefits over a traditional Desktop-as-a-Service platform:
* Deliver fully feature-rich and scalable AVDs with Azure Windows 10 multi-session OS.
* Deliver a virtualised and optimised Office 365 experience.
* Bring Your Own Device (BYOD) options to allow for ease of transition.  
* An easy path to modernisation and reduction in data centre expenditure.
* Provide extended support for legacy desktop operating systems or hosting of legacy applications.

The following sections of this document outline design defaults and guidance when deploying an AVD platform and is to be treated as an addendum to the [client devices](https://desktop.gov.au/blueprint/client-devices.html) design.  

**insert image - Figure AVD Architecture**

This diagram shows a typical architectural overview for AVD.
* The user endpoints reside either within an agency’s on-premises network (hybrid) or on the public internet (cloud native). For hybrid deployments, ExpressRoute or a site-to-site VPN extends the on-premises network into Azure. Azure AD Connect integrates the agency’s hybrid identity (Active Directory Domain Services (AD DS)) with Azure Active Directory (Azure AD). Cloud native deployments that do not have a hybrid identity (AD DS) can leverage cloud-native Azure AD Domain Services.
* The AVD control plane handles Web Access, Gateway, Broker, Diagnostics, and extensibility components like REST APIs.
* The agency manages AD DS and Azure AD, Azure subscriptions, virtual networks, Azure Storage, and the AVD host pools and workspaces.
* The agency uses multiple Azure subscriptions in an [enterprise-scale landing zone architecture](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/architecture) as per [Microsoft’s Cloud Adoption Framework for Azure](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/overview).

### 3.2. Assumptions

The following represent the assumptions when considering to deploy Azure Virtual Desktop.
* The agency already has a suitable Azure deployment or is planning an Azure deployment within the Australian Azure regions, with appropriate controls implemented up to Protected.
* Licensing is available for Windows 10 Enterprise multi-session, Windows 10 Enterprise and FSLogix.
    * Microsoft 365 E3, E5
    * Windows E3, E5
* Adequate storage is provisioned for the expected number of users. Recommendation of a minimum of 30GB per-user for the Windows profile hosted with the FSLogix solution.
* The agency has read the [Client devices](https://desktop.gov.au/blueprint/client-devices.html) blueprint and ensures the [ACSC Windows 10 hardening guidelines](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-microsoft-windows-10-version-21h1-workstations) are being adhered to in relation to the AVD Windows 10 session hosts. 

### 3.3. Prerequisites

The following represent the prerequisites before deploying Azure Virtual Desktop.
* Infrastructure with a configured Azure AD tenant and an Active Directory Domain Services (AD DS) that can sync with Azure AD.  Currently, AVD requires session host virtual machines to be domain-joined to an AD DS domain to manage the machines computer object and provide policy and authentication. Depending on the Active Directory architecture chosen – hybrid or cloud native, AVD can be configured to domain-join an existing on-premises AD DS domain (over VPN or ExpressRoute), or a cloud-only Azure AD Domain Services (PaaS) hosted in Azure.

Cloud native:
* Azure AD Connect synced to a cloud-only AD DS IaaS (Infrastructure as a Service) within the Azure deployment, or
* Azure AD DS PaaS configured within the Azure deployment (automatically synchronised to Azure AD) 

Hybrid:
* Azure AD Connect connected to AD DS (on-premises or hosted in Azure)
* An Azure subscription that contains a virtual network that can connect to the AD DS domain.

## 4. Platform Directory
### 4.1. Active Directory

Microsoft Windows Server Active Directory Domain Services (AD DS) and Azure Active Directory (AAD) maintain records of information required to identify services, users and other resources on the network. A domain is a security boundary that exists within AD, and all user accounts are based on domain membership.

Currently, AVD requires session host virtual machines to be domain-joined to an AD DS domain to manage the machines computer object and provide policy and authentication. Depending on the Active Directory architecture chosen – hybrid or cloud native, AVD can be configured to domain-join an existing on-premises AD DS domain (over VPN or ExpressRoute), or a cloud-only Azure AD Domain Services (PaaS) hosted in Azure.

### 4.2. Group policies

The following table outlines the environment specific infrastructure configurations and considerations for Active Directory services for the solution. 

**insert Table 3 Active Directory Design Decisions for the solution**

|---|---|---|
|Decision Point|Design Decision| Justification|
|Active Directory Domain Type|Hybrid:
AD Connect synced to AD DS domain
Cloud Native:
AD Connect synced to cloud-only AD DS IaaS hosted on Azure 
Or
Azure AD DS PaaS configured on the Azure Platform (Automatically synched to Azure AD)|AVD requires session host virtual machines to be joined to an AD DS domain.  
This is to support AVD domain join and to manage the machines computer object and provide policy and authentication.  Depending on the Active Directory architecture – hybrid or cloud native AVD can be configured to sync with an existing on-premises AD DS domain, or a cloud-only AD DS IaaS or Azure AD DS PaaS service hosted in Azure.
Currently, Virtual machines cannot be natively Azure AD-joined only.|
||||

### 4.3. Personalisation and profile management



### 4.4. Resource tags



## 5. Azure Virtual Desktop components
### 5.1. Control plane
### 5.2. Host pool
### 5.3. Session host
### 5.4. App groups
### 5.5. Workspaces
### 5.6. Session and idle timeouts

## 6. Access and connectivity
### 6.1. Gateway firewall
### 6.2. Client access

## 7. Users and devices
### 7.1. User personas
### 7.2. Client devices

## 8. 
### 8.1. Appendix - FSLogix profile redirections