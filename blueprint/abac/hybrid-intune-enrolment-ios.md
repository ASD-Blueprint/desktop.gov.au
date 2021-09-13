---
layout: page
title: Hybrid - Microsoft Endpoint Manager - Intune enrolment for iOS devices
menu: abac
---

## Automatic enrolment

`Microsoft Endpoint Manager > Devices > Enroll devices > Automatic Enrollment`

| Item                 | Configuration                                                |
| -------------------- | ------------------------------------------------------------ |
| MDM user scope       | Some - rol-Agency-users                                      |
| Groups               | 1 Group selected                                             |
| MDM terms of use URL | `https://portal.manage.microsoft.com/TermsofUse.aspx`        |
| MDM discovery URL    | `https://enrolment.manage.microsoft.com/enrolmentserver/discovery.svc` |
| MDM Compliance URL   | `https://portal.manage.microsoft.com/?portalAction=Compliance` |
| MAM user scope       | Some                                                         |
| Groups               | rol-Agency-users                                             |
| MAM terms of use URL | Not configured                                               |
| MAM discovery URL    | `https://wip.mam.manage.microsoft.com/Enroll`                |
| MAM compliance URL   | Not configured                                               |

## Apple Device Enrolment Program

`Intune > Devices > Enroll devices > Apple enrollment > Enrollment program tokens`

* Name: `<Agency Acronym> iOS DEP enrolment`
* Description: -
* Platform: `iOS`
* Token
  * Token name: `Agency defined`
  * Program type: `Device Enrollment Program`
  * Apple ID: `<Agency apple ID>@<Agency>.gov.au`
  * Default iOS Enrollment Profile: `<Agency Acronym> iOS DEP enrolment`
* Management Settings
  * User affinity: `Enroll with User Affinity`
  * Select where users must authenticate: `Company Portal`
  * Install Company Portal with VPP: `Yes`
* Management Options
  * Locked enrollment: `Yes`
  * Sync with computers: `Deny All`
* Device Name
  * Apply device name template (supervised only): `Yes`
  * Device Name Template: `<Agency Acronym>-{SERIAL}-{DEVICETYPE}`
* Setup Assistant
  * Department: `<Agency Name>`
  * Department Phone: `<Agency Support Telephone Number>`
* Setup Assistant Screens
  * Passcode: `Show`
  * Location Services: `Show`
  * Restore: `Hide`
  * Apple ID: `Show`
  * Terms and Conditions: `Hide`
  * Touch ID: `Show`
  * Apple Pay: `Show`
  * Zoom: `Show`
  * Siri: `Hide`
  * Diagnostic Data: `Hide`
  * Display Tone: `Show`
  * Privacy: `Hide`
  * Android Migration: `Hide`
  * Home Button: `Show`
  * iMessage & FaceTime: `Show`
  * Onboarding: `Hide`
  * Screen Time: `Hide`
  * SIM Setup: `Show`
  * Software Update: `Show`
  * Watch Migration: `Hide`
  * Appearance: `Show`
  * Express Language: `Show`
  * Preferred Language Order: `Show`
  * Device to Device Migration: `Hide`

## Enrolment types (preview)

`Microsoft Endpoint Manager > Devices > Enroll devices > Apple enrollment > Enrollment types (preview)`

* Name: `iOS DEP Enrolment`
* Description: -
* Settings
  * Enrolment types: `Device enrollment`
* Assignments
  * Included groups:

```
rol-Agency-Users
rol-Agency-Administrators
```

  * Excluded groups: -

## Enrolment restrictions

`Microsoft Endpoint Manager > Devices > Enroll devices > Enrollment restrictions`

* Device type restrictions
  * Name: `Organisation Restrictions`
    * Priority: `3`
    * Assigned: `Yes`
    * Platform settings
      * Type: `Windows (MDM)`
        * Platform: `Allow`
          * Minimum Version: `10.0.19043	`
        * Maximum Version: -
        * Personally owned: `Block`
        * Block manufacturers: `N/A`
      * Type: `iOS/iPadOS`
        * Platform: `Allow`
        * Minimum Version: `14.7`
        * Maximum Version: -
        * Personally owned: `Block`
        * Block manufacturers: `N/A`
      * Type: `Android Enterprise (Work Profiles)`
        * Platform: `Block`
        * Minimum Version: `N/A`
        * Maximum Version: `N/A`
        * Personally owned: `Block`
        * Block manufacturers: `N/A`
      * Type: `Android device administrator`
        * Platform: `Block`
        * Minimum Version: `N/A`
        * Maximum Version: `N/A`
        * Personally owned: `Block`
        * Block manufacturers: `N/A`
      * Type: `macOS`
        * Platform: `Block`
        * Minimum Version: `N/A`
        * Maximum Version: `N/A`
        * Personally owned: `Block`
        * Block manufacturers: `N/A`
    * Scope tags
      * tags: `Default`
    * Assignments
      * Included groups: `All devices`
* Device limit restrictions
  * Name: `All users`
  * Priority: `Default`
  * Device limit: `5`
  * Assignments
    * Included groups: `All devices`
