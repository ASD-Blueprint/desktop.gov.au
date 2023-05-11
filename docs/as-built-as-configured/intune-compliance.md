---

---

# Microsoft Endpoint Manager - Intune compliance

<p id="date-and-time">3 minutes to read - 30 March 2023</p>

The following Microsoft Endpoint Manager - Intune (Intune) compliance settings can be found in the Microsoft Endpoint Manager Portal at `Microsoft Endpoint Manager > Devices > Compliance policies > Policies`

## Windows 10 compliance

- Name: `Windows 10 Compliance Policy`
- Platform: `Windows 10 and later`
- Profile type: `Windows 10/11 compliance policy`
- Compliance settings
  - Device Health
    - Require BitLocker: `Require`
    - Require Secure Boot to be enabled on the device: `Require`
    - Require code integrity: `Require`
  - Device Properties
    - Minimum OS version: `10.0.19043.10000`
    - Minimum OS version for mobile devices: `10.0.19043.10000`
  - System Security
    - Require a password to unlock mobile devices: `Require`
    - Simple passwords: `Block`
    - Password type: `Alphanumeric`
    - Password Complexity: `Require digits, lowercase and uppercase letters`
    - Minimum password length: `14`
    - Maximum minutes of inactivity before password is required: `15 Minutes`
    - Password expiration (days): `365`
    - Number of previous passwords to prevent reuse: `5`
    - Require password when device returns from idle state (Mobile and Holographic): `Require`
    - Require encryption of data storage on device: `Require`
    - Firewall: `Require`
    - Trusted Platform Module (TPM): `Require`
    - Antivirus: `Require`
    - Antispyware: `Require`
    - Microsoft Defender Antimalware: `Require`
    - Microsoft Defender Antimalware minimum version: `4.18.0.0`
    - Microsoft Defender Antimalware security intelligence up-to-date: `Require`
    - Real-time protection: `Require`
  - Microsoft Defender for Endpoint
    - Require the device to be at or under the machine risk score: `Medium`

- Actions for noncompliance
  - Action: `Mark device noncompliant`
  - Schedule: `1 Day`
- Scope tags: `Default`
- Assignments: 
  - Included groups: `rol-Agency-Administrators, rol-Agency-Users`
  - Excluded groups: -

## iOS compliance

- Name: `iOS Compliance Policy`
- Description: -
- Platform: `iOS/iPadOS`
- Profile type: `iOS compliance policy`
- Compliance settings
  - Device Health
    - Jailbroken devices: `Block`
    - Require the device to be at or under the Device Threat Level: `Medium`
  - Device Properties
    - Minimum OS version: `14.8.1`
    - Minimum OS build version: `18H107`
  - Microsoft Defender for Endpoint
    - Require the device to be at or under the machine risk score: `Medium`
  - System Security:
    - Require a password to unlock mobile devices.: `Required`
    - Simple passwords: `Block`
    - Minimum password length: `14`
    - Required password type: `Alphanumeric`
    - Number of non-alphanumeric characters in password: `1`
    - Maximum minutes after screen lock before password is required: `Immediately`
    - Maximum minutes of inactivity until screen locks: `15 Minutes`
    - Password expiration (days): `365`
    - Number of previous passwords to prevent reuse: `5`
- Actions for noncompliance
  - Action: `Mark device noncompliant`
  - Schedule: `1 Days`
- Scope tags: `Default`
- Assignments
  - Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  - Excluded groups: -

## Compliance policy settings

The following settings configure the way the compliance service treats devices. Each device evaluates these as a "Built-in Device Compliance Policy", which is reflected in device monitoring.

The configuration can be found at `Microsoft Endpoint Manager > Devices > Compliance policies | Compliance policy settings`

- Mark devices with no compliance policy assigned as: `Not Compliant`
- Enhanced jailbreak detection: `Enabled`
- Compliance status validity period (days): `30`