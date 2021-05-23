---
layout: page
title: Microsoft Endpoint Manager - Intune software updates
menu: abac
---

The following lists the Windows 10 update ring profiles, and iOS update profiles deployed within the Agency tenant. Windows 10 update rings are utilised to maintain a patch level congruent to the standards determined in the Blueprint design documents.

## Semi Annual Channel Ring

* Name: `Semi Annual Channel Ring`
* Description: -
* Update ring settings
  * Servicing channel: `Semi-Annual Channel`
  * Microsoft product updates: `Allow`
  * Windows drivers: `Allow`
  * Quality update deferral period (days): `0`
  * Feature update deferral period (days): `0`
  * Set feature update uninstall period (2 - 60 days): `10`
* User experience settings
  * Automatic update behavior: `Auto install at maintenance time`
  * Active hours start: `8 AM`
  * Active hours end: `5 PM`
  * Restart checks: `Allow`
  * Option to pause Windows updates: `Disable`
  * Option to check for Windows updates: `Enable`
  * Require user approval to dismiss restart notification: `No`
  * Remind user prior to required auto-restart with dismissible reminder (hours): `--`
  * Remind user prior to required auto-restart with permanent reminder (minutes): `--`
  * Change notification update level: `Use the default Windows Update notifications`
  * Use deadline settings: `Not configured`
* Scope tags: `Default`
* Assignments
  * Included groups: `rol-Agency-Administrators`, `rol-Agency-Users`
  * Excluded groups: -

## iOS update policy

`Microsoft Endpoint Manager > Devices > iOS/iPadOS > Update policies for iOS/iPadOS`

* Name: `iOS Update Policy`
* Description: -
* Select version to install: `latest update`
* Schedule type: `Update at next check-in`
* Assignments
  * Included groups: `All Devices`
  * Excluded groups: -