---
layout: page
title: Hybrid - Microsoft Endpoint Manager - Intune enrolment for iOS devices
menu: abac
---

## Apple Device Enrolment Program

`Intune > Devices > Enroll devices > Apple enrollment > Enrollment program tokens`

* Name: `<Agency Acronym> iOS DEP enrolment`
* Description: -
* Platform: `iOS`
* Token
  * Token name: `Intune Dev`
  * Program type: `Device Enrollment Program`
  * Apple ID: `<Agency ID>@<Agency>.gov.au`
  * Default iOS Enrollment Profile: `<Agency Acronym> iOS DEP enrolment`
* Management Settings
  * User affinity: `Enroll with User Affinity`
  * Select where users must authenticate: `Company Portal`
  * Install Company Portal with VPP: `No VPP tokens found`
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
  * Enrollment types: `Device enrollment`
* Assignments
  * Included groups:
```
rol-Agency-Users
Dev Admins
rol-Agency-Administrators
Office365_Grant_AzureAD_Join
```
  * Excluded groups: -



