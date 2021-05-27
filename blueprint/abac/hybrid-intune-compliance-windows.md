---
layout: page
title: Hybrid - Microsoft Endpoint Manager - Intune compliance for Windows devices
menu: abac
---

`Microsoft Endpoint Manager > Devices > Compliance policies > Policies`

## Windows 10 compliance

* Name: `Windows 10 Compliance policy`
* Description: -
* Platform: `Windows 10 and later`
* Profile type: `Windows 10 compliance policy`
* Compliance settings
  * Device Health
    * Require BitLocker: `Required`
    * Require Secure Boot to be enabled on the device: `Required`
    * Require code integrity: `Required`
  * Device Properties
    * Minimum OS version: `10.0.18362.10000`
    * Minimum OS version for mobile devices: `10.0.18362.10000`
  * System Security 
    * Require a password to unlock mobile devices.: `Required`
    * Encryption of data storage on device.: `Required`
    * Firewall: `Required`
    * Trusted Platform Module (TPM): `Required`
    * Antivirus: `Required`
    * Antispyware: `Required`
    * Microsoft Defender Antimalware: `Required`
    * Password Type: `numeric`
    * Maximum minutes of inactivity before password is required: `5 minutes`
    * Password Expiration (days): `365`
    * Number of previous passwords to prevent reuse: `5`
    * Require password when device returns from idle state (Mobile and Holographic): `Required`
    * Microsoft Defender Antimalware security intelligence up-to-date: `Required`
    * Real-time protection: `Required`
  * Microsoft Defender ATP
    * Require the device to be at or under the machine risk score: `medium`
* Actions for noncompliance
  * Action: `Mark device noncompliant`
  * Scedule: `Immediately`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: -
