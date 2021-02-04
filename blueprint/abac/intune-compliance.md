---
layout: page
title: Intune compliance
menu: abac
---

The following Intune applications can be found in the Azure Portal at `Search > Intune > Devices > Compliance policies | Policies`

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

Table 2 describes the iOS Compliance deployment settings within Intune.

Table 2 iOS Compliance

Name | Value
--- | ---
displayName | iOS Compliance policy
passcodeBlockSimple | False
passcodeRequiredType | deviceDefault
osMinimumVersion | 12.0
osMinimumBuildVersion | 16A366
deviceThreatProtectionRequiredSecurityLevel | secured
