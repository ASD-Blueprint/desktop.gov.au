---
layout: page
title: Conditional access policies
menu: abac
---

## Conditional access named locations

Conditional Access rules can be assigned according to several variables including named locations. These are the public internet (IP) addresses that Azure Active Directory sees, this is not the Agency's internal private IP addressing scheme. Named locations are Agency defined and are used to authorise logon from:

- Agency approved countries,
- Agency approved network egress or proxy locations (more used in hybrid implementation types),
- Defining Internet Service Provider (ISP) provider addresses when used with bespoke security use-cases,
- Agency Privileged Access Workstation (PAW) or Jump Server network egress locations for administration policy use cases (e.g. allowed admin roles).

Note, named locations should be avoided for the purposes of supressing MFA on a corporate LAN setting. Consider the use of `Device state` for this scenario.

`Azure AD Conditional Access > Named locations`

* Name: `Allowed Countries`
  * Location type: `Countries`
  * Countries: `Australia`
* Name: `<Agency> Internal Network`
  * Location type: `IP ranges`
  * Mark as trusted location: `Selected`
  * IP ranges: Agency defined

## Conditional Access terms of use

The Terms of Use document is a pdf document provided by the department and is uploaded to Azure Active Directory. This is then presented to users during the first logon process prior to agreeing to the terms of use. 

Note, terms of user does not replace the logon banner warning text.

`Azure AD Conditional Access > Terms of use`

* Name: `<Agency> Terms of Use`
* Display Name: `<Agency Name> ICT Acceptable Use Policy`
* Require users to expand the terms of use: `Off`
* Require users to consent on every device: `Off`
* Expire contents: `Off`
* Expire starting on: `N/A`
* Frequency: `N/A`
* Duration before re-acceptance required (days): `N/A`
* Languages
  * English: Agency supplied
  * Other languages as required

## Conditional Access policies

The following Conditional Access policies can be found in the Azure Portal at `Azure AD Conditional Access | Policies`. The polices here are a baseline and should be customised to the Agencies requirements for both hybrid and cloud-only implementations types.

Agencies should avoid the use of trusted locations for cloud app access and use device state/require enrolment on conditions where possible.

### BLOCK - Legacy Authentication

This global policy blocks all connections from unsecure legacy protocols like ActiveSync, IMAP, POP3, etc.

* Name: `BLOCK - Legacy Authentication`
* Assignments
  * Users and groups
    * Include
      * Select users and groups: `All users`
    * Exclude
      * Excluded users and groups: `None`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All Cloud Apps`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `No`
    * Locations
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
      * Browser: `False`
      * Mobile apps and desktop clients: `False`
      * Modern authentication clients: `False`
      * Exchange ActiveSync clients: `True`
      * Other clients: `True`
    * Device state
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `Yes`
    * Grant access: `No`
    * Require multi-factor authentication: `False `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## BLOCK – High Risk Sign-Ins

This global policy blocks all high-risk authentications (requires Azure AD Premium P2).

* Name:	`BLOCK – High Risk Sign-Ins`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `Yes`
      * Select the sign-in risk level this policy will apply to: `High`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `No`
    * Client apps:
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `Yes`
    * Grant access: `No`
    * Require multi-factor authentication: `False `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `No`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Block - Countries Not Allowed

The global policy blocks all connections from countries not in the allowed countries allow list.

* Name: `BLOCK – Countries Not Allowed`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `Yes`
      * Include: `Any location`
      * Exclude:
        * Select the locations to exempt from the policy: `Selected locations`
        * Select: `Allowed Countries`
    * Client apps
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `Yes`
    * Grant access: `No`
    * Require multi-factor authentication: `False `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## GRANT - Terms of use

This global policy forces Terms of Use on all authentications.

* Name: `GRANT – Terms of Use`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `False `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `True`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Grant - Browser Access

General browser access policy that grants authentication from a browser on any device with MFA requirement.

* Name: `GRANT – Browser Access`
* Assignments
  * Users and groups
    * Include: `rol-Agency-users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `None`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Office 365`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
        * Browser: `True`
        * Mobile apps and desktop clients: `False`
        * Modern authentication clients: `False`
        * Exchange ActiveSync clients: `False`
        * Other clients: `False`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## SESSION - Block Unmanaged Browser File Downloads

Browsers on unmanaged devices cannot download files and attachments from SharePoint Online and Exchange Online.

* Name: `SESSION - Block Unmanaged Browser File Downloads`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `None`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * `Office 365 Exchange Online`
      * `Office 365 SharePoint Online`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
        * Browser: `True`
        * Mobile apps and desktop clients: `False`
        * Exchange ActiveSync clients: `False`
        * Other clients: `False`
    * Device state:
      * Configure: `Yes`
      * Include: `All device state`
      * Exclude: `Device marked as compliant`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `False `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## GRANT - Intune Enrolment

Devices are allowed to authenticate to Microsoft Endpoint Manager - Intune (Intune) for enrolment.

* Name: `GRANT – Intune Enrolment`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * `Microsoft Intune`
      * `Microsoft Intune Enrolment`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `Yes`
      * Include: `Select device platforms`
        * `iOS`
        * `Windows`
      * Exclude: `None`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `False `
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## GRANT - Mobile Device Access

Grants access to managed mobile devices that are enrolled and compliant in Intune. An approved Microsoft app is required.

* Name: `GRANT – Mobile Device Access`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * `Office 365`
    * Exclude: `Microsoft Intune`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `Yes`
      * Include: `Select device platforms`
        * `iOS`
      * Exclude: `None`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `True`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `Yes`
    * Require one of the selected controls: `No`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Grant - Windows Device Access

Grants access to managed Windows devices that are enrolled and compliant.

* Name: `GRANT – Windows Device Access`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: 
      * `Microsoft Intune`
      * `Microsoft Intune Enrollment`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `Yes`
      * Include: `Select device platforms`
        * `Windows`
      * Exclude: `None`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
        * Browser: `True`
        * Mobile apps and desktop clients: `True`
        * Exchange ActiveSync clients: `False`
        * Other clients: `False`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `True`
    * Require Hybrid Azure AD joined device: `True (hybrid implementations only) ` 
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `Yes`
    * Require one of the selected controls: `No`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Grant - Guest Access (B2B)

Approved apps that guest users can access (requires MFA).

* Name: `GRANT – Guest Access`
* Assignments
  * Users and groups
    * Include: `Select guests and external users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `None`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * `Office 365 SharePoint Online`
      * `Microsoft Planner`
      * `Microsoft Teams`
    * Exclude: `None`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Block - Guest Access (B2B)

* Name: `BLOCK – Guest Access`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `None`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude
      * `Office 365 SharePoint Online`
      * `Microsoft Planner`
      * `Microsoft Teams`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `No`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `No`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `Yes`
    * Grant access: `No`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency: `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### GRANT - Require MFA and PAW for Administrators

This global policy requires all administrators to authenticate using multi-factor authentication and PAW location. 

* Name: `GRANT - Require MFA and PAW for Administrators`
* Assignments
  * Users and groups
    * Include: `Select users and groups`
      * Directory roles

```
Application Administrator
Authentication Administrator
Azure DevOps Administrator
Azure Information Protection Administrator
B2C IEF Keyset Administrator
B2C IEF Policy Administrator
Billing Administrator
Cloud Application Administrator
Cloud Device Administrator
Compliance Administrator
Compliance Data Administrator
Conditional Access Administrator
Desktop Analytics Administrator
Dynamics 365 Administrator
Exchange Administrator
External ID User Flow Administrator
External ID User Flow Attribute Administrator
Global Administrator
Groups Administrator
Helpdesk Administrator
Intune Administrator
Kaizala Administrator
License Administrator
Office Apps Administrator
Password Administrator
Power BI Administrator
Power Platform Administrator
Privileged Authentication Administrator
Privileged Role Administrator
Search Administrator
Security Administrator
Service Support Administrator
SharePoint Administrator
Skype for Business Administrator
Teams Communications Administrator
Teams Communications Engineer
Teams Communications Specialist
Teams Service Administrator
User Administrator
```

    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: 1 x break glass account (all implementation types), On-premises AD sync accounts (hybrid only)

  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `Yes`
      * Include: `Any device`
    * Locations
      * Configure: `PAW Location`
    * Client apps
      * Configure: `Yes`
      * Browser: `True`
      * Mobile apps and desktop clients: `True`
      * Modern authentication clients: `True`
      * Exchange ActiveSync clients: `True`
      * Apply policy only to supported platforms: `False`
      * Other clients: `True`
    * Device state
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `True`
    * Sign-in frequency: `4 hours`
    * Persistent browser session: `False`
* Enable policy: `On`

