---
layout: page
title: Microsoft Endpoint Manager - Intune compliance
menu: abac
---

The following Microsoft Endpoint Manager - Intune (Intune) applications can be found in the Azure Portal at `Microsoft Endpoint Manager > Devices > Compliance policies | Policies`

## Windows 10 compliance

Table 1 describes the Windows 10 Compliance deployment settings within Intune.

Table 1 Windows 10 Compliance

Name | Value
--- | ---
displayName | Windows 10 Compliance policy
passwordBlockSimple | False
passwordMinutesOfInactivityBeforeLock | 5
passwordExpirationDays | 365
passwordRequiredType | Alphanumeric
passwordPreviousPasswordBlockCount | 5
requireHealthyDeviceReport | False
osMinimumVersion | 10.0.18362.10000
mobileOsMinimumVersion | 10.0.18362.10000
earlyLaunchAntiMalwareDriverEnabled | False
deviceThreatProtectionRequiredSecurityLevel | medium
configurationManagerComplianceRequired | False

## Microsoft Defender ATP compliance

* Name: `MS Defender ATP Compliance`
* Platform: `Windows 10 and later`
* Profile type: `Windows 10 compliance policy`
* Compliance settings
  * Device Health
    * Require BitLocker: `Require`
    * Require Secure Boot to be enabled on the device: `Require`
    * Require code integrity: `Require`
  * Device Properties
    * Minimum OS version: `10.0.18362.10000`
  * System Security
    * Require a password to unlock mobile devices: `Not configured`
    * Encryption of data storage on device: `Not configured`
    * Firewall: `Require`
    * Trusted Platform Module (TPM): `Require`
    * Microsoft Defender Antimalware: `Require`
    * Microsoft Defender Antimalware minimum version: `Not configured`
    * Microsoft Defender Antimalware security intelligence up-to-date: `Require`

## iOS compliance

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
    * Minimum OS version: `14.0`
    * Minimum OS build version: `18A373`
  * System Security: `
    * Require a password to unlock mobile devices.: `Required`
    * Simple passwords: `Block`
    * Minimum password length: `14`
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