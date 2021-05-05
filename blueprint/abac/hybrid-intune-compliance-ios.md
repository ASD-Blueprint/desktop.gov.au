---
layout: page
title: Hybrid - Intune compliance for iOS devices
menu: abac
---

## iOS compliance

`Intune > Devices > Compliance policies > Policies`

* Name: `iOS Compliance policy`
* Description: -
* Platform: `iOS/iPadOS`
* Profile type: `iOS compliance policy`
* Compliance settings
  * Email
    * Unable to set up email on the device: `Not Required`
  * Device Health
    * Jailbroken devices: `Block`
    * Require the device to be at or under the Device Threat Level: `Medium`
  * Device Properties
    * Minimum OS version: `13.0`
    * Minimum OS build version: `17A577`
  * System Security: `
    * Require a password to unlock mobile devices.: `Required`
    * Simple passwords: `Block`
    * Minimum password length: `12`
    * Required password type: `Alphanumeric`
    * Maximum minutes after screen lock before password is required: `Immediately`
    * Maximum minutes of inactivity until screen locks: `2 Minutes`
    * Password expiration (days): `365`
    * Number of previous passwords to prevent reuse: `5`
* Actions for noncompliance
  * Action: `Mark device noncompliant`
  * Scedule: `Immediately`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: -

## Compliance policy settings

`Intune > Devices > Compliance policies > Compliance policy settings`

* Mark devices with no compliance policy assigned as: `Not Compliant`
* Enhanced jailbreak detection: `Enabled`
* Compliance status validity period (days): `14`
