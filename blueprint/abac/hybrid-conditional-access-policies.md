---
layout: page
title: Hybrid - Conditional access policies
menu: abac
---

## Conditional access named locations

Conditional Access rules can be assigned according to several variables including named locations. It is common to create a named location with the countries from which users can log in.

`Azure AD Conditional Access > Named locations`

* Name: `Allowed Countries`
  * Location type: `Countries`
  * Countries: `Australia`
* Name: `<Agency> Internal Network`
  * Location type: `IP ranges`
  * Mark as trusted location: `Selected`
  * IP ranges: Agency supplied

## Conditional access terms of use

The Terms of Use document is a pdf document provided by the department and is uploaded to Microsoft Endpoint Manager. This is then presented to users during the logon process.

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

## Conditional access policies

The ABAC settings for the Agency organisation can be found below. The Conditional Access policies are described in the tables below. Please note, if a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

### Block - legacy authentication

This global policy blocks all connections from unsecure legacy protocols like ActiveSync, IMAP, POP3, etc.

* Name: `BLOCK - Legacy Authentication`
* Assignments
  * Users and groups
    * Include
      * Select users and groups: `All users`
    * Exclude
      * Excluded users and groups: `Excluded from CA`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All Cloud Apps`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `No`
    * Locations
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
      * Browser: `False`
      * Mobile apps and desktop clients: `True`
      * Modern authentication clients: `False`
      * Exchange ActiveSync clients: `False`
      * Apply policy only to supported platforms: `False`
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
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `True`
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### Block - allowed countries

The global policy blocks all connections from countries not in the allowed countries whitelist.

* Name: `BLOCK - Countries Not Allowed`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `Excluded from CA`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `No`
    * Locations
      * Configure: `Yes`
      * Include: `Any location`
      * Exclude:
        * Select the locations to exempt from the policy: `Selected locations`
        * Select: `Allowed Countries`
    * Client apps
      * Configure: `No`
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
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### Grant - require MFA for administrators

This global policy requires all administrators to authenticate using multi-factor authentication. 

* Name: `GRANT - Reqiure MFA for Administrators`
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
        * Excluded users and groups: `Excluded from CA`
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
      * Configure: `No`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### Grant - require MFA for Azure management

This global policy requires all azure management to authenticate using multi-factor authentication. 

* Name: `GRANT - Require MFA For Azure Management`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * Excluded users and groups: `Excluded from CA`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * Select: `Microsoft Azure Management`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `No`
    * Locations
      * Configure: `No`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### Grant - require MFA for all users

This global policy requires all users to authenticate using multi-factor authentication. 

* Name: `GRANT - Require MFA For All Users`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * Excluded users and groups: `Excluded from CA`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `No`
    * Locations
      * Configure: `Yes`
      * Include: `Any location`
      * Exclude: `Selected locations`
      * Select: `<Agency Acronym> Internal Network`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### Grant - no MFA for compliant devices in Australia

This global policy prevents multi-factor authentication for devices that are marked as complaint located in Australia.

* Name: `GRANT - No MFA For Compliant Devices in Australia`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude: `Directory roles`
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
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `Yes`
        * Include: `Any Device`
        * Exclude: `Android, iOS, macOS`
    * Locations
      * Configure: `Yes`
      * Include: `Any location`
      * Exclude: `Selected locations`
      * Select: `Allowed Countries`
    * Client apps
      * Configure: `No`
    * Device state
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `False`
    * Require device to be marked as compliant: `True`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `True`
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy
  * Report-only: `On`

### Block - unmanaged mobile devices

Blocks mobile devices that are not enrolled in the Apple Business Manager DEP portal.

* Name: `BLOCK - Unmanaged Mobile Devices`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * Excluded users and groups: `Excluded from CA`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * Office 365 (preview): `True`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `Yes`
      * Include: `Select device platforms`
        * iOS: `True`
        * Android: `True`
        * Windows Phone: `False`
        * Windows: `False`
        * MacOS: `False`
      * Exclude: `None`
    * Locations
      * Configure: `No`
    * Client apps
      * Configure: `No`
    * Device state
      * Configure: `Yes`
      * Include: `All device state`
      * Exclude:
        * Device Hybrid Azure AD Joined: `True`
        * Device marked a complaint: `True`
* Access controls
  * Grant
    * Block access: `Yes`
    * Grant access: `No`
    * Require multi-factor authentication: `False`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `False`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

### Block - native mail clients

Blocks native mail clients from accessing company email.

* Name: `BLOCK - Native Mail Clients`
* Assignments
  * Users and groups
    * Include: `All users`
    * Exclude
      * Excluded users and groups: `Excluded from CA`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * Office 365 Exchange Online: `True`
    * Exclude: `None`
  * Conditions
    * Sign-in risk
      * Configure: `No`
    * Device platforms
      * Configure: `Yes`
      * Include: `Select device platforms`
        * iOS: `True`
        * Android: `True`
        * Windows Phone: `False`
        * Windows: `False`
        * MacOS: `False`
      * Exclude: `None`
    * Locations
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
      * Browser: `False`
      * Mobile apps and desktop clients: `True`
      * Modern authentication clients: `True`
      * Exchange ActiveSync clients: `False`
      * Other clients: `False`
    * Device state
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `False`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `True`
    * Require app protection policy: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `Yes`
  * Session
    * Use app enforced restrictions: `False`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`
