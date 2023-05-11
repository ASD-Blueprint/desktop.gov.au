---

---

# Microsoft Endpoint Manager - Intune software updates

<p id="date-and-time">2 minutes to read - 30 March 2023</p>

The following lists the Windows 10 update ring profiles, and iOS update profiles deployed within the Agency tenant. Windows 10 update rings are utilised to maintain a patch level congruent to the standards determined in the blueprint design documents. 

## Update Rings (Windows 10)

`Microsoft Endpoint Manager > Devices > Updates rings for Windows 10 and later`

- Name: `General Availabilty`
- Description: -
- Update ring settings
  - Microsoft product updates: `Allow`
  - Windows drivers: `Allow`
  - Quality update deferral period (days): `0`
  - Feature update deferral period (days): `0`
  - Update Windows 10 devices to Latest Windows 11 release: `No`
  - Set feature update uninstall period (2 - 60 days): `10`
  - Enable pre-release builds: `Not Configured`
- User experience settings
  - Automatic update behavior: `Auto install at maintenance time`
  - Active hours start: `8 AM`
  - Active hours end: `5 PM`
  - Restart checks: `Allow`
  - Option to pause Windows updates: `Disable`
  - Option to check for Windows updates: `Enable`
  - Require user approval to dismiss restart notification: `No`
  - Remind user prior to required auto-restart with dismissible reminder (hours): `--`
  - Remind user prior to required auto-restart with permanent reminder (minutes): `--`
  - Change notification update level: `Use the default Windows Update notifications`
  - Use deadline settings: `Allow`
  - Deadline for feature updates: `2`
  - Deadline for quality updates: `2`
  - Grace period: `0`
  - Auto reboot before deadline: `Yes`
- Scope tags: `Default`
- Assignments
  - Included groups: `All Devices`
  - Excluded groups: -

## Update policies for iOS/iPadOS

`Microsoft Endpoint Manager > Devices > iOS/iPadOS > Update policies for iOS/iPadOS`

- Name: `iOS Update Policy`
- Description: -
- Select version to install: `Latest update`
- Schedule type: `Update at next check-in`
- Assignments
  - Included groups: `All Devices`
  - Excluded groups: -