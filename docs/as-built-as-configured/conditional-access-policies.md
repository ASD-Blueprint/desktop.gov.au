---

---

# Conditional Access policies

<p id="date-and-time">14 minutes to read - 30 March 2023</p>

## Conditional Access - Named locations

Conditional Access rules can be assigned according to several variables including named locations. These are the public internet (IP) addresses that Azure Active Directory sees, this is not the Agency's internal private IP addressing scheme. Named locations are Agency defined and are used to authorise logon from:

- Agency approved countries,
- Agency approved network egress or proxy locations (more used in hybrid implementation types),
- Defining Internet Service Provider (ISP) provider addresses when used with bespoke security use-cases,
- Agency Privileged Access Workstation (PAW) or Jump Server network egress locations for administration policy use cases (e.g. allowed admin roles).

Note, named locations should be avoided for the purposes of suppressing MFA on a corporate LAN setting. Consider the use of `Device state` for this scenario.

`Azure AD Conditional Access > Named locations`

- Name: `Allowed Countries`
  - Location type: `Countries`
  - Countries: `Australia`
- Name: `<Agency> Internal Network`
  - Location type: `IP ranges`
  - Mark as trusted location: `Selected`
  - IP ranges: Agency defined

## Conditional Access - Terms of use

The Terms of Use document is a pdf document provided by the department and is uploaded to Azure Active Directory. This is then presented to users during the first logon process prior to agreeing to the terms of use. 

Note, terms of user does not replace the logon banner warning text.

`Azure AD Conditional Access > Terms of use`

- Name: `Acceptable Use Policy`
- Display Name: `Acceptable Use Policy`
- Require users to expand the terms of use: `On`
- Require users to consent on every device: `Off`
- Expire contents: `On`
- Expire starting on: `01/07/xxxx`
- Frequency: `Annually`
- Duration before re-acceptance required (days): `N/A`
- Languages
  - English: Agency supplied
  - Other languages as required

## Conditional Access - Policies

The following Conditional Access policies can be found in the Azure Portal at `Azure AD Conditional Access | Policies`. The polices here are a baseline and should be customised to the Agencies requirements for both hybrid and cloud-only implementations types.

Agencies should avoid the use of trusted locations for cloud app access and use device state/require enrolment on conditions where possible.

### BLOCK - Countries Not Allowed

The global policy blocks all connections from countries not in the allowed countries allow list.

- Name: `BLOCK – Countries Not Allowed`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `No`
    - Locations:
      - Configure: `Yes`
      - Include: `Any location`
      - Exclude:
        - Select the locations to exempt from the policy: `Selected locations`
        - Select: `Allowed Countries`
    - Client apps
      - Configure: `No`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `Yes`
    - Grant access: `No`
    - Require multi-factor authentication: `False `
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `No`
    - Require one of the selected controls: `Yes`
  - Session
    - Use app enforced restrictions: `N/A`
    - Use Conditional Access App Control: `False`
    - Sign-in frequency: `False`
    - Persistent browser session: `False`
- Enable policy: `On`

### BLOCK - Guest Access

- Name: `BLOCK – Guest Access`
- Assignments
  - Users and groups
    - Include: `All guest and external users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `False`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude
      - `Office 365`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `No`
    - Locations:
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `True`
      - Other clients: `True`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `Yes`
    - Grant access: `No`
    - Require multi-factor authentication: `False`
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `No`
    - Require one of the selected controls: `Yes`
- Session
  - Use app enforced restrictions: `N/A`
  - Use Conditional Access App Control: `False`
  - Sign-in frequency: `False`
  - Persistent browser session: `False`
- Enable policy: `On`

### BLOCK - High Risk Sign-Ins

This global policy blocks all high-risk authentications (requires Azure AD Premium P2).

- Name:	`BLOCK – High Risk Sign-Ins`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `Yes`
      - Select the sign-in risk level this policy will apply to: `High`
    - Device platforms:
      - Configure: `No`
    - Locations:
      - Configure: `No`
    - Client apps:
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `True`
      - Other clients: `True`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `Yes`
    - Grant access: `No`
    - Require multi-factor authentication: `False `
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `No`
    - Require one of the selected controls: `Yes`
  - Session
    - Use app enforced restrictions: `N/A`
    - Use Conditional Access App Control: `False`
    - Sign-in frequency: `False`
    - Persistent browser session: `False`
- Enable policy: `On`

### BLOCK - Legacy Authentication

This global policy blocks all connections from unsecure legacy protocols like ActiveSync, IMAP, POP3, etc.

- Name: `BLOCK - Legacy Authentication`
- Assignments
  - Users and groups
    - Include
      - Select users and groups: `All users`
    - Exclude
      - Excluded users and groups: `None`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All Cloud Apps`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms
      - Configure: `No`
    - Locations
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `False`
      - Mobile apps and desktop clients: `False`
      - Exchange ActiveSync clients: `True`
      - Other clients: `True`
    - Device state
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `Yes`
    - Grant access: `No`
    - Require multi-factor authentication: `False `
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `No`
    - Require one of the selected controls: `Yes`
  - Session
    - Use app enforced restrictions: `N/A`
    - Use Conditional Access App Control: `False`
    - Sign-in frequency: `False`
    - Persistent browser session: `False`
- Enable policy: `On`

### BLOCK - Unapproved Devices

This global policy blocks all connections from device types that are not included in the blueprint.

- Name: `BLOCK - Unapproved Devices`
- Assignments
  - Users and groups
    - Include
      - Select users and groups: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All Cloud Apps`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms
      - Configure: `Yes`
      - Android: `True`
      - iOS: `False`
      - Windows Phone: `True`
      - Windows: `False`
      - macOS: `True`
    - Locations
      - Configure: `No`
    - Client apps
      - Configure: `No`
    - Device state
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `Yes`
    - Grant access: `No`
    - Require multi-factor authentication: `False `
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `No`
    - Require one of the selected controls: `Yes`
  - Session
    - Use app enforced restrictions: `N/A`
    - Use Conditional Access App Control: `False`
    - Sign-in frequency: `False`
    - Persistent browser session: `False`
- Enable policy: `On`

### GRANT - Guest Access

Approved apps that guest users can access (requires MFA).

- Name: `GRANT – Guest Access`
- Assignments
  - Users and groups
    - Include: `All guest and external users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `False`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `Select apps`
      - `Office 365`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `Yes`
      - Android: `False`
      - iOS: `False`
      - Windows Phone: `False`
      - Windows: `True`
      - macOS: `False`
    - Locations:
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `False`
      - Other clients: `False`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `True`
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
- Session
  - Use app enforced restrictions: `N/A`
  - Use Conditional Access App Control: `False`
  - Sign-in frequency: `False`
  - Persistent browser session: `False`
- Enable policy: `On`

### GRANT - Intune Enrolment

Devices are allowed to authenticate to Microsoft Endpoint Manager - Intune (Intune) for enrolment.

- Name: `GRANT – Intune Enrolment`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `Select apps`
      - `Microsoft Intune`
      - `Microsoft Intune Enrolment`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `Yes`
      - Android: `False`
      - iOS: `True`
      - Windows Phone: `False`
      - Windows: `True`
      - macOS: `False`
    - Locations:
      - Configure: `No`
    - Client apps
      - Configure: `No`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `True `
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
- Session
  - Use app enforced restrictions: `N/A`
  - Use Conditional Access App Control: `False`
  - Sign-in frequency: `False`
  - Persistent browser session: `False`
- Enable policy: `On`

### GRANT - iOS Device Access

Grants access to managed iOS devices that are enrolled and compliant in Intune. An approved Microsoft app is required.

- Name: `GRANT – iOS Device Access`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `Select apps`
      - `Office 365`
    - Exclude:  `Select apps`
      -  `Microsoft Intune`
      - `Microsoft Intune Enrolment` 
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `Yes`
      - Include: `Select device platforms`
        - `iOS`
      - Exclude: `None`
    - Locations:
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `False`
      - Other clients: `False`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `True`
    - Require device to be marked as compliant: `True`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `True`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
- Session
  - Use app enforced restrictions: `N/A`
  - Use Conditional Access App Control: `False`
  - Sign-in frequency: `False`
  - Persistent browser session: `False`
- Enable policy: `On`

### GRANT - Terms of use

This global policy forces Terms of Use on all authentications.

- Name: `GRANT – Terms of Use`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude: `None`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `No`
    - Locations:
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `False`
      - Other clients: `False`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `False `
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `True`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
- Session
  - Use app enforced restrictions: `N/A`
  - Use Conditional Access App Control: `False`
  - Sign-in frequency: `False`
  - Persistent browser session: `False`
- Enable policy: `On`

### GRANT - Windows Device Access

Grants access to managed Windows devices that are enrolled and compliant.

- Name: `GRANT – Windows Device Access`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `True`
      - Directory roles: `False`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude: 
      - `Microsoft Intune`
      - `Microsoft Intune Enrollment`
  - Conditions
    - User risk:
      - Configure: `No`
    - Sign-in risk
      - Configure: `No`
    - Device platforms:
      - Configure: `Yes`
      - Include: `Select device platforms`
        - `Windows`
      - Exclude: `None`
    - Locations:
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `False`
      - Other clients: `False`
    - Device state:
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `True`
    - Require device to be marked as compliant: `True`
    - Require Hybrid Azure AD joined device: `True (hybrid implementations only) ` 
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Require password change: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
- Session
  - Use app enforced restrictions: `N/A`
  - Use Conditional Access App Control: `False`
  - Sign-in frequency: `False`
  - Persistent browser session: `False`
- Enable policy: `On`

### SESSION - Admin Sign-in Frequency

Enforces a sign-in frequency to ensure administrators sessions do not remain active for longer than 4 hours. 

- Name: `SESSION - Admin Sign-in Frequency`
- Assignments
  - Users and groups
    - Include: `Select users and groups`
      - Directory roles: `Select all directory roles`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
  - Users and groups: `True`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude: `None`
  - Conditions
    - Sign-in risk
      - Configure: `No`
    - Device platforms
      - Configure: `No`
    - Locations
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `False`
      - Apply policy only to supported platforms: `False`
      - Other clients: `True`
    - Device state
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `True`
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
  - Session
    - Use app enforced restrictions: `N/A`
    - Use Conditional Access App Control: `False`
    - Sign-in frequency: `4 hours`
    - Persistent browser session: `False`
- Enable policy: `On`

### SESSION - User Sign-in Frequency

Enforces a sign-in frequency to ensure non-privileged users are required to complete an MFA prompt daily.

- Name: `SESSION - User Sign-in Frequency`
- Assignments
  - Users and groups
    - Include: `All users`
    - Exclude
      - All guest and external users: `False`
      - Directory roles: `False`
      - Users and groups: `False`
  - Users and groups: `True`
      - Users and groups: `True`
        - Excluded users and groups: `grp-Conditional_Access_Exclude`
  - Cloud apps or actions
    - Select what policy this applies to: `Cloud apps`
    - Include: `All cloud apps`
    - Exclude: `None`
  - Conditions
    - Sign-in risk
      - Configure: `No`
    - Device platforms
      - Configure: `No`
    - Locations
      - Configure: `No`
    - Client apps
      - Configure: `Yes`
      - Browser: `True`
      - Mobile apps and desktop clients: `True`
      - Exchange ActiveSync clients: `False`
      - Apply policy only to supported platforms: `False`
      - Other clients: `True`
    - Device state
      - Configure: `No`
- Access controls
  - Grant
    - Block access: `No`
    - Grant access: `Yes`
    - Require multi-factor authentication: `True`
    - Require device to be marked as compliant: `False`
    - Require Hybrid Azure AD joined device: `False`
    - Require approved client app: `False`
    - Require app protection policy: `False`
    - Terms of Use: `False`
    - Require all the selected controls: `Yes`
    - Require one of the selected controls: `No`
  - Session
    - Use app enforced restrictions: `N/A`
    - Use Conditional Access App Control: `False`
    - Sign-in frequency: `12 hours`
    - Persistent browser session: `False`
- Enable policy: `On`