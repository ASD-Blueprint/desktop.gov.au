---
layout: page
title: Conditional access policies
menu: abac
---

The following conditional access policies can be found in the Azure Portal at `Azure AD Conditional Access | Policies`

## Block - legacy authentication

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
      * Mobile apps and desktop clients: `True`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## High risk sign-ins

This global policy blocks all high-risk authentications (requires Azure AD Premium P2).

* Name:	`BLOCK – High Risk Sign-Ins`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Allowed countries

The global policy blocks all connections from countries not in the allowed countries whitelist.

* Name: `BLOCK – Countries Not Allowed`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Terms of use

This global policy forces Terms of Use on all authentications.

* Name: GRANT – Terms of Use
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Browser access

General browser access policy that grants authentication from a browser on any device with MFA requirement.

* Name: `GRANT – Browser Access`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Session - block unmanaged browser file downloads

Browsers on unmanaged devices can never download files and attachments from SharePoint Online and Exchange Online.

* Name: `SESSION - Block Unmanaged Browser File Downloads`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Grant - Intune enrolment

Devices are allowed to authenticate to Microsoft Endpoint Manager - Intune (Intune) for enrolment.

* Name: `GRANT – Intune Enrolment`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Grant - mobile device access

Grants access to managed mobile devices that are enrolled and compliant in Intune. An approved Microsoft app is required.

* Name: `GRANT – Mobile Device Access`
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
    * Include: `Select apps`
      * `Office 365 Exchange Online`
      * `Office 365 SharePoint Online`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Windows device access

Grants access to managed Windows devices that are Azure AD joined.

* Name: `GRANT – Windows Device Access`
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
        * Browser: `False`
        * Mobile apps and desktop clients: `True`
        * Exchange ActiveSync clients: `True`
        * Other clients: `False`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `True`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `Yes`
    * Require one of the selected controls: `No`
* Session
    * Use app enforced restrictions: `N/A`
    * Use Conditional Access App Control: `False`
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Grant - guest access (B2B)

Approved apps that guest users can access (requires MFA).

* Name: `GRANT – Guest Access`
* Assignments
  * Users and groups
    * Include: `Select guests and external users`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `Excluded from CA`
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
    * Sign-in frequency" `False`
    * Persistent browser session: `False`
* Enable policy: `On`

## Block - guest access (B2B)

* Name: `BLOCK – Guest Access`
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
