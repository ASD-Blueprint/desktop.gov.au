---
layout: page
title: Platform
menu: abac
---

Configuration on this page relates to Enterprise Mobility and Security.

## Identity and access management

### Azure Active Directory

Table 2 describes the Azure Active Directory settings that are configured within the Azure AD tenant.

zzz

### Emergency access admin accounts

Table 3 describes the Emergency Access accounts and settings that are configured within the Azure Active Directory.

zzz

### Azure Active Directory identity protection

Table 4 describes the Azure Active Directory Identity Protection settings that are configured within Azure AD.

zzz

### Azure Active Directory multifactor authentication

Table 5 describes the Azure Active Directory multifactor authentication settings that are configured within Azure AD.

zzz

### Licensing

Table 6 describes the user (`rol-agency-users`) licensing settings that are configured within the tenant available at `Search > Azure Active Directory | Groups | All groups > rol-Agency-Users | Licenses > Microsoft 365 E5`

Item | Configuration
--- | ---
Azure Active Directory Premium P1 | On
Azure Active Directory Premium P2 | On
Azure Advanced Threat Protection | On
Azure Information Protection Premium P1 | On
Azure Information Protection Premium P2 | On
Azure Rights Management | On
Customer Lockbox | On
Exchange Online (Plan 2) | On
Flow for Office 365 | Off
Information Barriers | On
Information Protection for Office 365 - Premium | On
Information Protection for Office 365 - Standard | On
Insights by MyAnalytics | Off
Microsoft 365 Advanced Auditing | On
Microsoft 365 Apps for enterprise | On
Microsoft 365 Audio Conferencing | On
Microsoft 365 Phone System | Off
Microsoft Azure Multi-Factor Authentication | On
Microsoft Cloud App Security | On
Microsoft Communications Compliance | On
Microsoft Communications DLP | On
Microsoft Customer Key | Off
Microsoft Data Investigations | On
Microsoft Defender Advanced Threat Protection | On
Microsoft Forms (Plan E5) | On
Microsoft Information Governance | On
Microsoft Insider Risk Management | On
Microsoft Intune | On
Microsoft Kaizala Pro | Off
Microsoft ML-based classification | On
Microsoft MyAnalytics (Full) | Off
Microsoft Planner | On
Microsoft Records Management | On
Microsoft StaffHub | Off
Microsoft Stream for O365 E5 SKU | On
Microsoft Teams | On
Office 365 Advanced eDiscovery | On
Office 365 Advanced Threat Protection (Plan 2) | On
Office 365 Cloud App Security | On
Office 365 Privileged Access Management | On
Office 365 SafeDocs | On
Office for the web | On
Power BI Pro | On
PowerApps for Office 365 | Off
Premium Encryption in Office 365 | On
SharePoint Online (Plan 2) | On
Skype for Business Online (Plan 2) | Off
Sway | On
To-Do (Plan 3) | On
Whiteboard (Plan 3) | On
Windows 10 Enterprise | On
Yammer Enterprise | Off

Table 7 describes the admin (`rol-agency-administrators`) licensing settings that are configured within the tenant.

`Search > Azure Active Directory | Groups | All groups > rol-Agency-Administrators | Licenses > Microsoft 365 E5`

Item | Configuration
--- | ---
Azure Active Directory Premium P1 | On
Azure Active Directory Premium P2 | On
Azure Advanced Threat Protection | Off
Azure Information Protection Premium P1 | Off
Azure Information Protection Premium P2 | Off
Azure Rights Management | Off
Customer Lockbox | Off
Exchange Online (Plan 2) | Off
Flow for Office 365 | Off
Information Barriers | Off
Information Protection for Office 365 - Premium | Off
Information Protection for Office 365 - Standard | Off
Insights by MyAnalytics | Off
Microsoft 365 Advanced Auditing | Off
Microsoft 365 Apps for enterprise | Off
Microsoft 365 Audio Conferencing | Off
Microsoft 365 Phone System | Off
Microsoft Azure Multi-Factor Authentication | Off
Microsoft Cloud App Security | On
Microsoft Communications Compliance | Off
Microsoft Communications DLP | Off
Microsoft Customer Key | Off
Microsoft Data Investigations | Off
Microsoft Defender Advanced Threat Protection | Off
Microsoft Forms (Plan E5) | Off
Microsoft Information Governance | Off
Microsoft Insider Risk Management | Off
Microsoft Intune | Off
Microsoft Kaizala Pro | Off
Microsoft ML-based classification | Off
Microsoft MyAnalytics (Full) | Off
Microsoft Planner | Off
Microsoft Records Management | Off
Microsoft StaffHub | Off
Microsoft Stream for O365 E5 SKU | Off
Microsoft Teams | Off
Office 365 Advanced eDiscovery | Off
Office 365 Advanced Threat Protection (Plan 2) | Off
Office 365 Cloud App Security | Off
Office 365 Privileged Access Management | Off
Office 365 SafeDocs | Off
Office for the web | Off
Power BI Pro | Off
PowerApps for Office 365 | Off
Premium Encryption in Office 365 | Off
SharePoint Online (Plan 2) | Off
Skype for Business Online (Plan 2) | Off
Sway | Off
To-Do (Plan 3) | Off
Whiteboard (Plan 3) | Off
Windows 10 Enterprise | Off
Yammer Enterprise | Off

## Windows Information Protection

### Application protection policies

Table 8 describes the Windows Information Protection policy settings that are configured within Application Protection policies.

zzz

## Threat protection

### Microsoft Defender Advanced Threat Protection

Table 10 describes the Microsoft Defender Advanced Threat Protection settings that are configured within Intune.

zzz

### Microsoft Cloud App Security

Table 11 describes the Cloud App settings that are configured within Microsoft Cloud App Security.

### Log Analytics

Table 12 describes the Log Analytics settings that are configured within the Log Analytics Workspace.

Item | Configuration
--- | ---
Log Analytics was not implemented for this environment at this time refer to the DTA-Platform Designv1.0 for configuration guidance. ||

## Microsoft Intune configuration

All Windows 10 client configuration is accomplished via Microsoft Intune policies. These Intune configuration policies are detailed in separate documents that are explained in Table 13 below. 

Table 13 Additional Intune Configuration Documents

Section | Description | Document Name
--- | --- | ---
Device enrollment | Automatic Enrolment, Enrolment Status page, Deployment Profiles | DTA – Cloud-Only ABAC - Intune Enrolment
Device compliance | Device compliance policies | DTA – Cloud-Only ABAC - Intune Compliance
Device configuration | Configuration Profiles, PowerShell scripts | DTA – Cloud-Only ABAC - Intune Configuration
Device security | Windows 10 Security Baselines, Microsoft Defender ATP Baselines, Microsoft Edge Baseline | DTA – Cloud-Only ABAC - Intune Security Baselines
Client apps | Win32 Apps, Web links, Windows MSI Line of Business apps, Office 365 installation, Windows Information Protection | DTA – Cloud-Only ABAC - Intune Applications
Conditional Access | Conditional Access policies | DTA – Cloud-Only ABAC - Conditional Access Policies
Software Updates | Windows 10 update rings | DTA – Cloud-Only ABAC – Intune Software Updates

### Printing

Table 14 describes the Printing settings that are configured within Intune.

Item | Configuration
--- | ---
Printer addition restrictions | Can be configured using scripts deployed by Intune.
Unsecure location printing | Configured in Intune Security Baselines.

## Role based access control

### Privileged identity management

Table 15 describes the role settings that are configured within Privileged Identity Management.

Table 15 Privileged Identity Management Role Configuration – Global Administrator settings

zzz

