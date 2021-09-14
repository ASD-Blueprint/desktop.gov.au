---
layout: page
title: Hybrid - Microsoft Endpoint Manager - Intune compliance for iOS devices
menu: abac
---

The following Microsoft Endpoint Manager - Intune (Intune) compliance settings can be found in the Microsoft Endpoint Manager Portal at `Microsoft Endpoint Manager > Devices > Compliance policies > Policies`

## iOS compliance

* Name: `iOS Compliance Policy`
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
    * Minimum OS version: `14.7`
    * Minimum OS build version: `16G70`
  * System Security: `
    * Require a password to unlock mobile devices.: `Required`
    * Simple passwords: `Block`
    * Minimum password length: `14`
    * Required password type: `Alphanumeric`
    * Maximum minutes after screen lock before password is required: `Immediately`
    * Maximum minutes of inactivity until screen locks: `15 Minutes`
    * Password expiration (days): `365`
    * Number of previous passwords to prevent reuse: `5`
* Actions for noncompliance
  * Action: `Mark device noncompliant`
  * Schedule: `1 Days`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: -

## Compliance policy settings

The following settings configure the way the compliance service treats devices. Each device evaluates these as a "Built-in Device Compliance Policy", which is reflected in device monitoring.

The configuration can be found at `Microsoft Endpoint Manager > Devices > Compliance policies | Compliance policy settings`

* Mark devices with no compliance policy assigned as: `Not Compliant`
* Enhanced jailbreak detection: `enabled`
* Compliance status: `iOS/iPadOS`
* Profile type: `iOS compliance policy`