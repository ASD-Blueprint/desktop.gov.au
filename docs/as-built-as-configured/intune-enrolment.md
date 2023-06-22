---

---

# Microsoft Endpoint Manager - Intune enrolment

<p id="date-and-time">4 minutes to read - 30 March 2023</p>

## Automatic enrolment

`Microsoft Endpoint Manager > Devices > Enroll devices > Automatic Enrollment`

Item | Configuration
--- | ---
MDM user scope | Some - rol-Agency-users 
Groups | 1 Group selected
MDM terms of use URL | `https://portal.manage.microsoft.com/TermsofUse.aspx`
MDM discovery URL | `https://enrolment.manage.microsoft.com/enrolmentserver/discovery.svc`
MDM Compliance URL | `https://portal.manage.microsoft.com/?portalAction=Compliance`
MAM user scope | Some
Groups | rol-Agency-users 
MAM terms of use URL | Not configured
MAM discovery URL | `https://wip.mam.manage.microsoft.com/Enroll`
MAM compliance URL | Not configured 

## Enrolment status page

`Microsoft Endpoint Manager > Devices > Enroll devices > Enrollment Status Page`

- Name: `All users and all devices`
- Description: `This is the default enrolment status screen configuration applied with the lowest priority to all users and all devices regardless of group membership`
- Settings
  - Show app and profile configuration progress: `Yes`
  - Show an error when installation takes longer than specified number of minutes: `60`
  - Show custom message when time limit error occurs: `Yes`
  - Error message: `Installation exceeded the time limit set by your organisation. Please try again or contact IT support for help.`
  - Turn on log collection and diagnostics page for end users: `No` 
  - Only show page to devices provisioned by out-of-box experience (OOBE): `Yes`
  - Block device use until all apps and profiles are installed: `Yes`
  - Allow users to reset device if installation error occurs: `Yes`
  - Allow users to use device if installation error occurs: `No`
  - Block device use until these required apps are installed if they are assigned to the user/device: `All`
- Assignments
  - Included groups: `All devices`

## Deployment profiles

`Microsoft Endpoint Manager > Devices > Enroll devices > Deployment Profiles`

- Name: `Autopilot Deployment Profile`
- Description: `Devices enrolled via Autopilot`
- Convert all targeted devices to Autopilot: `No`
- Device type: `Windows PC`
- Out-of-box experience (OOBE)
  - Deployment mode: `User-Driven`
  - Join to Azure AD as: `Azure AD Joined`
  - Language (Region): `English (Australia)`
  - Automatically configure keyboard: `Yes`
  - Microsoft Software License Terms: `Hide`
  - Privacy settings: `Hide`
  - Hide change account options: `Hide`
  - User account type: `Standard`
  - Allow White Glove OOBE: `Yes`
  - Language (Region): `English (Australia)`
  - Automatically configure the keyboard: `Yes`
  - Apply device name template: `Yes`
  - Enter a name: `<Agency 3 characters>-%SERIAL%`
- Scope tags: `Default`
- Assignments
  - Included groups: `All devices`
  - Excluded groups: -

## Windows Hello for Business

`Microsoft Endpoint Manager > Devices > Enroll devices > Windows Hello for Business`

Item | Configuration
--- | ---
Assigned to | All users
Name | All users and all devices
Description | This is the default Windows Hello for Business configuration applied with the lowest priority to all users regardless of group membership.
Configure Windows Hello for Business | Not configured 
Use security keys for sign-in | Not configured

## Apple Device Enrolment Program

`Intune > Devices > Enroll devices > Apple enrollment > Enrollment program tokens`

- Name: `Apple Business Manager Enrollment `
- Description: `Automatic Configuration and Enrollment for corporately owned iOS devices`
- Platform: `iOS/iPadOS`
- User Affinity & Authentication Method
  - User affinity: `Yes`
  - Select where users must authenticate: `Company Portal`
  - Install Company Portal with VPP: `Use Token`  
  - Run Company Portal in Single App Mode until authentication: `No`  
- Management Options
  - Supervised: `Yes`
  - Locked enrollment: `Yes`
  - Shared iPad: `No`
  - Sync with computers: `Deny All`
- Device Name
  - Apply device name template (supervised only): `Yes`
  - Device Name Template: `{SERIAL}-{DEVICETYPE}`
- Setup Assistant
  - Department: `<Agency Name>`
  - Department Phone: `<Agency Support Telephone Number>`
- Setup Assistant Screens
  - Passcode: `Hide`
  - Location Services: `Hide`
  - Restore: `Hide`
  - Android Migration: `Hide`
  - Apple ID: `Hide`
  - Terms and Conditions: `Hide`
  - Touch ID: `Hide`
  - Apple Pay: `Hide`
  - Zoom: `Hide`
  - Siri: `Hide`
  - Diagnostics Data: `Hide`
  - Display Tone: `Hide`
  - Home Button: `Hide`
  - Privacy: `Hide`
  - iMessage & FaceTime: `Hide`
  - Onboarding: `Hide`
  - Screen Time: `Hide`
  - SIM Setup: `Hide`
  - Software Update: `Hide`
  - Watch Migration: `Hide`
  - Appearance: `Hide`
  - Device to Device Migration: `Hide`
  - Restore Completed: `Hide`
  - Software Update Completed: `Hide`

## Enrolment types (preview)

`Microsoft Endpoint Manager > Devices > Enroll devices > Apple enrollment > Enrollment types (preview)`

- Name: `iOS DEP Enrolment`
- Description: -
- Settings
  - Enrolment types: `Device enrollment`
- Assignments
  - Included groups:
  ```
  rol-Agency-Users
  rol-Agency-Administrators
  ```
  - Excluded groups: -

## Enrolment restrictions

`Microsoft Endpoint Manager > Devices > Enroll devices > Enrollment restrictions`

- Device type restrictions
  - Name: `Organisation Restrictions`
    - Priority: `3`
    - Assigned: `Yes`
    - Platform settings
      - Type: `Windows (MDM)`
        - Platform: `Allow`
          - Minimum Version: `10.0.19043	`
        - Maximum Version: -
        - Personally owned: `Block`
        - Block manufacturers: `N/A`
      - Type: `iOS/iPadOS`
        - Platform: `Allow`
        - Minimum Version: `14.7`
        - Maximum Version: -
        - Personally owned: `Block`
        - Block manufacturers: `N/A`
      - Type: `Android Enterprise (Work Profiles)`
        - Platform: `Block`
        - Minimum Version: `N/A`
        - Maximum Version: `N/A`
        - Personally owned: `Block`
        - Block manufacturers: `N/A`
      - Type: `Android device administrator`
        - Platform: `Block`
        - Minimum Version: `N/A`
        - Maximum Version: `N/A`
        - Personally owned: `Block`
        - Block manufacturers: `N/A`
      - Type: `macOS`
        - Platform: `Block`
        - Minimum Version: `N/A`
        - Maximum Version: `N/A`
        - Personally owned: `Block`
        - Block manufacturers: `N/A`
    - Scope tags
      - tags: `Default`
    - Assignments
      - Included groups: `All devices`
- Device limit restrictions
  - Name: `All users`
  - Priority: `Default`
  - Device limit: `5`
  - Assignments
    - Included groups: `All devices`

