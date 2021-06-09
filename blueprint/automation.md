---
layout: page
title: Automation
---

The purpose of this document is to provide guidance on how the Protected Utility Blueprint (“Blueprint”) developed by the Digital Transformation Agency (DTA) can be implemented in a automated fashion.

Microsoft offers both programmatic and manual methods to both get and set configurations within Microsoft Azure and Microsoft 365. This document will focus on the programmatic configuration utilising [Microsoft 365 Desired State Configuration (M365DSC)](https://microsoft365dsc.com/). M365DSC is an open source tool hosted on GitHub and maintained by Microsoft engineers and the community. It is able to configure settings within all major Microsoft 365 workloads such as Exchange Online, Teams, Power Platforms, SharePoint and Security and Compliance. A list of configurable resources within these workloads is available on the [M365DSC website](https://github.com/Microsoft/Microsoft365DSC/wiki/Resources-List).

M365DSC is not able to fully configure a tenant to the specifications outlined in the Blueprint. Configurations that cannot be configured via this method may need to be configured either manually or via another method such as non-desired state configuration PowerShell modules or Azure Command Line Interface. Configuration via these other methods will not be covered. 

## Scope

The following items are the components that are in scope for the automation:
* Identity and Access Management

## Identity and Access Management

The following table outlines the subsections of the Blueprint and their respective automation status.

Component | Automated / Manual
--- | ---
Conditional Access | Automated
Group Naming Policy | Automated
Group Expiration Policy | Automated
Group Creation | Automated
User Settings | Manual
Device Settings | Manual
External Collaboration | Manual
Custom Domains | Manual
Company Branding | Manual
Group Creation Restrictions | Manual
Azure Active Directory Connect (if applicable) | Manual

## Microsoft 365 Desired State Configuration Procedure

The process to leverage a Microsoft 365 Desired State Configuration (M365DSC) Blueprint scripts is as follows:
1. Download the PS1 file for the target Blueprint configuration.
2. Install and import the PowerShell module microsoft365dsc
3. Validate that PSremoting is enabled. If not run Enable-PSRemoting as an administrator.
4. In PowerShell navigate to the directory containing the Blueprint configuration PS1 file
5. Initiate the Blueprint configuration PS1 and supply any request values (note, a global administrator account is required). The requested values will be listed as parameters within the Blueprint configuration PS1. E.g.
```Powershell 
$pscredential = get-credential
$agencyname = "Agency Name"
$agencyprefix = "Agency Acroynm"
.\identity_dsc.ps1 -globaladminaccount $pscredential -trustedip @("X.X.X.X/X") -agency $Agencyname -agencyprefix $Agencyprefix
```
6. Run the following command
```Powershell 
Start-DSCConfiguration M365TenantConfig -wait -verbose -force
```
7. In file explorer remove or sanitise the .mof file within the new directory M365TenantConfig as the credentials provided are stored in clear text. 


### Blueprint configuration scripts

Blueprint configuration scripts are available below:

* [identity_dsc.ps1](/assets/files/automation/identity_dsc.txt)