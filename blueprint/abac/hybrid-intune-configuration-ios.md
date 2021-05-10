---
layout: page
title: Hybrid - Intune configuration for iOS devices
menu: abac
---

The ABAC settings for the Agency profiles can be found below. This includes iOS Device Restrictions and iOS Device Feature Policy settings. If a setting is not mentioned in the below, it should be assumed to have been left at its default setting.

The following can be found at `Microsoft Endpoint Manager > Devices > Configuration profiles`

## iOS device restrictions

* Name: `iOS Device Restrictions`
* Description: -
* Type: `iOS/iPadOS`
* Profile Type: `Device restrictions`
* Configuration settings
  * General
    * Share usage data: `Block`
    * Screen Capture: `Block`
    * Untrusted TLS certificates: `Block`
    * Limit ad tracking: `Limit`
    * Enterprise app trust: `Block`
    * Device name modification: `Block`
    * Wallpaper modifications: `Block`
    * Configuration profile changes: `Block`
    * Activation Lock: `Allow`
    * Block VPN creation: `Block`
    * Modifying eSIM settings: `Block`
  * Password
    * Password: `Require`
    * Simple passwords: `Block`
    * Required password type: `Alphanumeric`
    * Minimum password length: `12`
    * Number of sign-in failures: `4`
    * Maximum minutes after screen lock before password is required: `Immediately`
    * Maximum minutes of inactivity until screen locks: `2`
    * Password expiration (days): `41`
    * Prevent reuse of previous passwords: `5`
    * Block Touch ID and Face ID unlock: `Yes`
  * Automated device enrollment
    * Passcode modification: `Not configured`
    * Touch and Face ID modifications: `Not configured`
    * Block password AutoFill: `Block`
    * Block password proximity requests: `Block`
    * Block password sharing: `Block`
    * Require Touch ID and Face ID authentication for password or credit card information AutoFill: `Require`
  * Lock Screen Experience
    * Control Center access while device locked: `Not configured`
    * Notification Center access while device locked: `Not configured`
    * Today view while device locked: `Not configured`
    * Wallet notifications while device locked: `Block`
  * App Store, Doc Viewing, Gaming
    * Block viewing corporate documents in unmanaged apps: `Yes`
    * Allow unmanaged apps to read from managed contacts accounts: `Not configured`
    * Treat AirDrop as an unmanaged destination: `Yes`
    * Viewing non-corporate documents in corporate apps: `Block`
    * Require iTunes Store password for all purchases: `Not configured`
    * In-app purchases: `Not configured`
    * Block download of explicit sexual content in Apple Books: `Yes`
    * Allow managed apps to write contacts to unmanaged contacts accounts: `Not configured`
    * Rating Region: `No region configured`
    * Block App store: `Not configured`
    * Block installing apps using App Store: `Not configured`
    * Block automatic app downloads: `Not configured`
    * Explicit iTunes music, podcast, or news content: `Block`
    * Adding Game Center friends: `Block`
    * Game Center: `Block`
    * Multiplayer gaming: `Block`
    * Access to network drive in Files app: `Disable`
  * Built-in Apps
    * Siri: `Block`
    * Siri while device is locked: `N/A`
    * Safar fraud warnings: `Require`
    * Spotlight search to return results from internet: `Block`
    * Safari cookies: `Block all cookies`
    * Safari JavaScript: `Not configured`
    * Safari Pop-ups: `Block`
    * Camera: `Not configured`
    * FaceTime: `Not configured`
    * Siri proximity filter: `N/A`
    * Siri to query user-generated content from the internet: `N/A`
    * Apple News: `Not configured`
    * iBook store: `Block`
    * Messages app on the device: `Not configured`
    * Podcasts: `Block`
    * Music service: `Block`
    * iTunes Radio service: `Block`
    * iTunes Store: `Block`
    * Find My iPhone: `Not configured`
    * Find My Friends: `Block`
    * Changes to the Find My Friends app from device: `Block`
    * Safari: `Block`
    * Safari Autofill: `Block`
  * Restricted Apps
    * Type of restricted app list: `Not configured`
  * Show or Hide Apps: ``
    * Type of app list: `Not configured`
  * Wireless
    * Data roaming: `Not configured`
    * Global background fetch while roaming: `Not configured`
    * Voice dialing: `Not configured`
    * Voice roaming: `Not configured`
    * Personal Hotspot: `Not configured`
    * Block use of cellular data: `Not configured`
    * Block use of cellular data when roaming: `Not configured`
    * Changes to app cellular data usage settings: `Not configured`
    * Changes to cellular plan settings: `Not configured`
    * User modification of Personal Hotspot: `Not configured`
    * Join Wi-Fi networks only using configuration profiles: `Not configured`
    * Wi-Fi always turned on: `Not configured`
  * Connected Devices
    * Wrist detection for paired Apple Watch: `Not configured`
    * Require AirPlay outgoing requests pairing password: `Require`
    * AirDrop: `Block`
    * Apple Watch pairing: `Block`
    * Bluetooth modification: `Not configured`
    * Host pairing to control the devices an iOS device can pair with: `Not configured`
    * Block AirPrint: `Block`
    * Block storage of AirPrint credentials in Keychain: `N/A`
    * Require a trusted TLS certificate for AirPrint: `N/A`
    * Block iBeacon discovery of AirPrint printers: `N/A`
    * Block setting up new nearby devices: `Block`
    * Access to files on USB drive: `Disable`
  * Keyboard and Dictionary
    * Word definition lookup: `Not configured`
    * Predictive keyboards: `Not configured`
    * Auto-correction: `Not configured`
    * Keyboard spell-check: `Not configured`
    * Keyboard shortcuts: `Not configured`
    * Dictation: `Not configured`
    * QuickPath: `Not configured`
  * Cloud and Storage
    * Encrypted backup: `Require`
    * Managed apps sync to cloud: `Block`
    * Block Enterprise Book Backup: `Block`
    * Block enterprise book metadata sync (notes and highlights): `Block`
    * Photo stream syncing to iCloud: `Block`
    * iCloud Photo Library: `Block`
    * Shared photo stream: `Block`
    * Handoff: `Block`
    * Backup to iCloud: `Block`
    * Block iCloud Document sync: `Block`
    * Block iCloud Keychain sync: `Block`
  * Autonomous Single App Mode
    * App name: `Not configured`
    * App Bundle ID: `Not configured`
  * Kiosk
    * App to run in kiosk mode: `Not configured`
  * Domains
    * Unmarked email domains: `Not configured`
    * Managed web domains: `Not configured`
    * Safari password auto fill domains: `Not configured`
* Scope tags: `Default`
* Assignments
  * Included groups: 
```
Office365_AssignLicense_StandardUsers
Dev Admins
Office365_AssignLicense_Administrators
Office365_Grant_AzureAD_Join 
```
  * Excluded groups: -

## iOS device feature policy

* Name: `iOS Device Feature Policy`
* Description: -
* Type: `iOS/iPadOS`
* Profile Type: `Device Features`
* Configuration settings
  * Lock Screen Message	
    * "If Lost, Return to..." Message: `If lost return to the <Agency Name>`
  * Single Sign On
    * Renewal certificate: `None selected`
  * Wallpaper
    * Wallpaper Display Location: `Lock Screen and Home Screen`
    * Wallpaper Image: `Agency wallpaper`
* Scope tags: `Default`
* Assignments
  * Included groups: 
```
Office365_AssignLicense_StandardUsers
Dev Admins
Office365_AssignLicense_Administrators
Office365_Grant_AzureAD_Join 
```
  * Excluded groups: -
