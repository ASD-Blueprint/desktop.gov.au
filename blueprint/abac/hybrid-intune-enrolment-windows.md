---
layout: page
title: Hybrid - Microsoft Endpoint Manager - Intune enrolment for Windows devices
menu: abac
---

## IntuneEnrollerDevices

`Microsoft Endpoint Manager > Devices > Enroll devices > Deployment Profiles`

* Name: `IntuneEnrollerDevices`
* Description: `Devices enrolled in Intune via autopilot`
* Convert all targeted devices to Autopilot: `No`
* Device type: `Windows PC`
* Out-of-box experience (OOBE)
  * Deployment mode: `User-Driven`
  * Join to Azure AD as: `Azure AD Joined`
  * Language (Region): `English (Australia)`
  * Automatically configure keyboard: `Yes`
  * Microsoft Software License Terms: `Hide`
  * Privacy settings: `Hide`
  * Hide change account options: `Hide`
  * User account type: `Standard`
  * Allow White Glove OOBE: `Yes`
  * Apply device name template: `Yes`
  * Enter a name: `<Agency Acronym>-%SERIAL%`
* Assignments
  * Included groups: `grp-Security-Baselines`
  * Excluded groups: -
* Scope tags: `Default`
