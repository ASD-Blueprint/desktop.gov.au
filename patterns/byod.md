---
layout: page
title: Bring Your Own Device (BYOD)
excerpt: BYOD allows users to utilise their own consumer devices and access corporate data and applications securely. Polices can assist with protection of corporate data. This pattern provides guidance on how to implement various options within the blueprint but outlines some risks involved on the security posture to PROTECTED while doing this.
---

This pattern provides guidance for blueprint users to allow access to Microsoft 365 services from various personally owned devices, without the need to enroll those devices. This is referred to as "bring your own device" (BYOD), within an enterprise mobility strategy.

BYOD allows users to perform their work in a flexible manner within specific use-cases allowing access to corporate systems from personally owned devices across multiple business personas. BYOD provides a range of benefits including more flexible working arrangements for employees creating greater business agility for the Agency, catering for use cases such as:

* Working remotely from within another government Agency premises,
* Travel or working from home,
* Ad-hoc access to calendar and mail,
* Microsoft Teams collaboration and chat, and
* Accessing multiple tenants from a single device.

The pattern works through various use cases and configuration required on top of the Protected Utility blueprint, taking into account vendor best practice configuration advice on this area from [Microsoft's BYOD blueprint](https://news.microsoft.com/wp-content/uploads/prod/sites/133/2021/03/MEA-Blueprint-for-BYOD-Use-v1.0-Final-Version.pdf).

It is recommended to read the ACSC risk management publication for enterprise mobility. See [Risk Management of Enterprise Mobility Including Bring Your Own Device](https://www.cyber.gov.au/acsc/view-all-content/publications/risk-management-enterprise-mobility-including-bring-your-own-device).

This pattern suggests **two BYOD access options** dependent on the risk appetite of the Agency and provides some known risk and ISM control guidance. 

Agencies adopting BYOD should perform their own risk assessments and follow ACSC guidance in regards to the requirements surrounding the platform and adequate separation between private and corporate data.

It is not recommended to process or store sensitive or classified (OFFICIAL:Sensitive and above) data on non-corporately managed devices. For commonwealth entities, non-sensitive data is marked as OFFICIAL.

This pattern does not discuss Agency policy surrounding the use of personally/privately-owed devices. The following guidance from the ACSC for OFFICIAL and PROTECTED BYOD implementation is:

* Legal advice is sought prior to allowing privately-owned mobile devices to access systems or data (**ISM** control 1297)
* Personnel accessing OFFICIAL and PROTECTED systems or data using a privately-owned mobile device use an ACSC approved platform, a security configuration in accordance with ACSC guidance and have enforced separation of work data from any personal data (**ISM** control 1400) 

The Protected Utility blueprint does not specify any particular BYOD solution, allowing Agencies to implement a solution that best meets their needs.

The technical controls that are described in this document have been grouped into two options that can be implemented together or separately, to provide various BYOD use cases:

**Mobile device access**

* Allows access to some Microsoft 365 applications from personal mobile devices
* Granular control of user policies, session controls using Microsoft Defender for Cloud Apps when protecting browser apps
* Intune Application Protection policies to enforce secure containerisation for company data
* Conditional Access enforced Agency approved apps for Mobile Devices
* Suits personas for ad-hoc access to Teams, SharePoint and Outlook on Android and iOS phone or tablet devices
* Agencies to risk assess for their environment and data classification
* This BYOD option is not recommended for use cases involving access to sensitive or classified information.

**Virtual desktop**

* Azure virtual desktop requires an Azure subscription
* Uses Azure Virtual Desktop (AVD) to provide a desktop experience that closely matches the corporate desktop, including legacy application access
* Supports any client device able to access AVD
* Lower security risk approach compared to mobile device, but offers greater use cases
* More complexity and cost involved to deploy and operate
* Suits personas for enterprise mobility, including cross-Agency working
* Agencies to risk assess for their environment and data classification.

![BYOD options](/assets/images/patterns/byodoptions.png)

## Assumptions

The following represent the assumptions when considering to deploy either BYOD options into an existing blueprint deployment:

* Protected Utility blueprint deployed in a cloud-only or hybrid pattern
* Licensing as per the DTA PROTECTED utility
* Azure Virtual Desktop requires a suitable Azure subscription

## Prerequisites

The following represent the prerequisites before deploying the selection BYOD option.

All deployment types:

* Protected Utility blueprint AVD pattern to be deployed for the virtual desktop pattern, see [Azure Virtual Desktop pattern](https://desktop.gov.au/patterns/avd.html)

Cloud native:

* No cloud-only specific prerequisites

Hybrid:

* No hybrid only specific prerequisites

## BYOD Options

### Options comparison

Options | Use-Cases | Complexity to implement | Risk considerations 
--- | --- | ---| ---
 Mobile device access (Option 1) | Provides ad-hoc access on the road and in the office to email, Teams and SharePoint from personally owned mobile devices such as iOS and Android devices. <br />Use-case provides some offline access if connectivity is limited.<br /><br />Not suitable for OFFICIAL:Sensitve and above (sensitive or classified data). | Easiest             | Inability to enforce device security controls<br /><br />Limited ability to check compliance for zero trust<br /><br />Lost phone, potential inability to remote data wipe as phone is not fully managed 
 Virtual desktop (Option 2) | Provided through the Azure Virtual Desktop service, this provides a full Windows working environment similar to the corporate desktop. Access is available from a user's personal Windows or Mac device to access the virtual desktop.<br /><br />Remote working within another government Agency or partner environment.<br /><br />Legacy or non-cloud corporate applications (hybrid) can operate with this use-case.<br /><br />Use case requires always-on Internet connection. | More difficult | Greater compliance with PROTECTED-level ISM controls and the Essential Eight<br /><br />Screen shot/scraping and physical security (e.g. taking picture of the screen) is a residual risk 

The following process can be followed to determine which pattern option to follow.

![BYO Flow Chart](/assets/images/patterns/flow.png)

### Security Considerations

Introducing BYOD carries some risk for the Agency. While some controls can be addressed through a technical control, others require user training and Agency policy (for example, Standard Operating Procedures (SOPs)) in place to ensure responsibilities are met and understood, and the appropriate mitigations are in place.

The following controls while not exhaustive should be a focus while assessing the risk for BYOD under an enterprise mobility strategy. 

Note, refer to the [System Security Plan](https://desktop.gov.au/blueprint/security/system-security-plan.html) for full traceability against all controls for the Protected Utility blueprint outside of this pattern.

#### ISM Controls

| Control | Description                                                  | Option 1 (mobile device)                                     | Option 2 (AVD)                                               |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1533    | A mobile device management policy is developed and implemented. | Agency to address                                            | Not applicable                                               |
| 1195    | A Mobile Device Management solution is used to ensure mobile device management policy is applied to all mobile devices. | Not implemented                                              | Not applicable                                               |
| 1400    | Personnel accessing official or classified systems or data using a privately-owned mobile device use an ACSC approved platform, a security configuration in accordance with ACSC guidance, and have enforced separation of official and classified data from any personal data. | Partially implemented                                        | Not applicable                                               |
| 1297    | Legal advice is sought prior to allowing privately-owned mobile devices to access official or classified systems or data. | Agency to address                                            | Not applicable                                               |
| 0869    | All data on mobile devices is encrypted using at least an Australian Signals Directorate Approved Cryptographic Algorithm. | Implemented                                                  | Not applicable                                               |
| 1085    | Mobile devices used to communicate sensitive or classified data over public network infrastructure use encryption approved for communicating such data over public network infrastructure. | Implemented                                                  | Not applicable                                               |
| 1202    | The range of Bluetooth communications between mobile devices and other Bluetooth devices is restricted to less than 10 metres by using class 2 or class 3 Bluetooth devices. | Not Implemented                                              | Not applicable                                               |
| 1196    | Mobile devices are configured to remain undiscoverable to other Bluetooth devices except during Bluetooth pairing. | Not implemented                                              | Not applicable                                               |
| 1200    | Bluetooth pairing is performed using Bluetooth version 2.1 or later. | Not implemented                                              | Not applicable                                               |
| 1198    | Bluetooth pairing is performed in a manner such that connections are only made between intended Bluetooth devices. | Not implemented                                              | Not applicable                                               |
| 1199    | Bluetooth pairings are removed from mobile devices when there is no longer a requirement for their use. | Not implemented                                              | Not applicable                                               |
| 0863    | Mobile devices prevent personnel from installing or uninstalling applications once provisioned. | Not implemented                                              | Not applicable                                               |
| 0864    | Mobile devices prevent personnel from disabling or modifying security functions once provisioned. | Not implemented                                              | Not applicable                                               |
| 1365    | Mobile carriers that are able to provide timely security updates for mobile devices are used. | Partially implemented through O/S version control (App Protection policy) | Not applicable                                               |
| 1366    | Mobile devices are able to accept security updates from mobile carriers as soon as they become available. | Partially implemented through O/S version control            | Not applicable                                               |
| 0874    | Web browsing from mobile devices is conducted through an organisation’s internet gateway rather than via a direct connection to the internet. | Not implemented                                              | Not applicable                                               |
| 0705    | When accessing an organisation system via a VPN connection, split tunnelling is disabled. | Not applicable                                               | Not applicable                                               |
| 1082    | A mobile device usage policy is developed and implemented.   | Agency to address                                            | Agency to address                                            |
| 1083    | Personnel are advised of the sensitivity or classification permitted for voice and data communications when using mobile devices. | Agency to address                                            | Agency to address                                            |
| 0240    | Paging, Multimedia Message Service, Short Message Service or instant messaging apps are not used to communicate sensitive or classified data. | Implemented through MAM-WE, cannot share data with native apps | Not applicable                                               |
| 0866    | Sensitive or classified data is not viewed or communicated in public locations unless care is taken to reduce the chance of the screen of a mobile device being observed. | Agency to address                                            | Agency to address                                            |
| 1644    | Sensitive or classified phone calls are not conducted in public locations unless care is taken to reduce the chance of conversations being overheard. | Agency to address                                            | Agency to address                                            |
| 0871    | Mobile devices are kept under continual direct supervision when being actively used. | Agency to address                                            | Agency to address                                            |
| 0870    | Mobile devices are carried or stored in a secured state when not being actively used. | Agency to address<br />Protection via inactivity lockouts is implemented | Agency to address<br />Protection via inactivity lockouts is implemented |
| 1084    | If unable to apply encryption to mobile devices that is suitable for them to be carried through areas not authorised to process the data stored on them, they are physically transferred in a security briefcase or an approved multi-use satchel, pouch or transit bag. | Implemented (data is encrypted in container and protected via credential) | Data not stored outside of AVD session but screenshot to physical device is possible |
| 0701    | A mobile device emergency sanitisation process, and supporting mobile device emergency sanitisation procedures, is developed and implemented. | Agency to develop SOP to selectively wipe container when required. Refer to [How to Selective Wipe](https://docs.microsoft.com/en-us/mem/intune/apps/apps-selective-wipe) | Not applicable, no data on mobile device                     |
| 1298    | Personnel are advised of privacy and security risks when travelling overseas with mobile devices. | Agency to address                                            | Not applicable                                               |
| 1554    | If travelling overseas with mobile devices to high/extreme risk countries, personnel are:<br />issued with newly provisioned accounts and devices from a pool of dedicated travel devices which are - used solely for work-related activities<br />- advised on how to apply and inspect tamper seals to key areas of devices<br />- advised to avoid taking any personal devices, especially if rooted or jailbroken. | Agency to address, MAM policy to prevent jailbreak/rooted    | Not applicable                                               |
| 1555    | Before travelling overseas with mobile devices, personnel take the following actions:<br />- record all details of the devices being taken, such as product types, serial numbers and International Mobile Equipment Identity numbers<br />- update all applications and operating systems<br />- remove all non-essential accounts, applications and data<br />- apply security configuration settings, such as lock screens<br />- configure remote locate and wipe functionality<br />- enable encryption, including for any media used<br />- backup all important data and configuration settings. | Agency to address<br /> Selective wipe available when required<br />O/S version control available<br />Screenlock and mandatory passcodes enforced with MFA | Not applicable                                               |
| 1299    | Personnel take the following precautions when travelling overseas with mobile devices:<br />- never leaving devices or media unattended for any period of time, including by placing them in checked-in luggage or leaving them in hotel safes<br />- never storing credentials with devices that they grant access to, such as in laptop bags <br />- never lending devices to untrusted people, even if briefly <br />- never allowing untrusted people to connect other devices or media to their devices, including for charging<br />- never using designated charging stations, wall outlet charging ports or chargers supplied by untrusted people<br />- avoiding connecting devices to open or untrusted Wi-Fi networks<br />- using an approved Virtual Private Network to encrypt all device communications<br />- using encrypted mobile applications for communications instead of using foreign telecommunication networks<br />- disabling any communications capabilities of devices when not in use, such as cellular data, wireless, Bluetooth and Near Field Communication<br />- avoiding reuse of media once used with other parties’ devices or systems<br />- ensuring any media used for data transfers are thoroughly checked for malicious code before <br />- never using any gifted devices, especially media, when travelling or upon returning from travelling. | Agency to address                                            | Not applicable                                               |
| 1088    | Personnel report the potential compromise of mobile devices, media or credentials to their organisation as soon as possible, especially if they:<br />- provide credentials, decrypt devices or have devices taken out of sight by foreign government officials<br />- have devices or media stolen that are later returned <br />- lose devices or media that are later found<br />- observe unusual behaviour of devices. | Agency to address                                            | Not applicable                                               |
| 1300    | Upon returning from travelling overseas with mobile devices, personnel take the following actions:<br />- sanitise and reset devices, including all media used with them<br />- decommission any physical credentials that left their possession during their travel<br />- report if significant doubt exists as to the integrity of any devices following their travel. | Agency to address                                            | Not applicable                                               |
| 1556    | If returning from travelling overseas with mobile devices to high/extreme risk countries, personnel take the following additional actions:<br />- reset user credentials used with devices, including those used for remote access to their organisation’s systems<br />- monitor accounts for any indicators of compromise, such as failed login attempts. | Agency to address                                            | Not applicable                                               |

### Mobile device access (BYOD Option 1)

The Mobile device access option will leverage:

* Azure Active Directory Multi-Factor Authentication (MFA) and Conditional Access policies

* Defender for Cloud Apps to prevent data leakage and spills

* Intune - Application Protection Policies.


The outcome will allow the end user to: 
* Access email using Outlook on their personal Mobile Device. 
* Access Teams on their personal Mobile Device 
* Access SharePoint Online on their personal Mobile Device 
* Use of Word, Excel, PowerPoint approved mobile apps.

**Mobile devices** in the context of this BYOD option are smart phones or tablets running Apple iOS or Android.

#### Mobile Application Management

Access via Mobile Application Management (MAM)) is provided through approved applications published by Microsoft to the respective app store (Apple AppStore or Google Play Store). 

* Intune app protection policies provide a container policy to the applications to secure corporate data, and prevent download upload, copy and paste actions, and enforce a PIN/appropriate passcode. 
* A MAM model does not require the device to be managed (MDM) or enrolled so will carry additional risk. Intune app protection MAM policies can be applied without enrolment requirement, this is referred to as MAM without enrolment (MAM-WE). Approved applications can be defined through the Conditional Access policies.  Conditional Access policies can be applied based on various attributes such as device state, user group or location.
* With MAM, iOS devices do not require Apple Business Manager or Apple Push Notification Service certificate configuration (the configuration in the blueprint for MDM can be ignored if this pattern is the only method for Mobile Devices for the Agency). Without MDM policies and enrolment, various functions cannot be prevented such as the ability to restrict screenshot for example.
* To protect the data in the event that a device is lost or stolen or if the employee leaves the Agency, Selective Wipe capability can be used to wipe the corporate data in managed apps from the device. Intune app protection policies can help prevent data contamination between non managed apps on a client device.
* Agencies should provide some guidance or user guides to their users on how to install the Office applications on their devices and authenticate to avoid confusion. Note, these actions and out-of-the-box setup are generally automated within a supervised, managed deployment. 

#### Azure AD Identity Protection

Azure AD Identity Protection is an Azure AD feature that protects the identity through:

* automation of detection and remediation of identity-based risks,
* includes additional challenge to user based on risk detection in real time, and
* Provides a portal for identify based investigation.

#### Defender for Cloud Apps

Defender for Cloud Apps (formerly Microsoft Cloud App Security (MCAS)) provides capabilities that can restrict access to only authorised platforms and device types and can minimise the risk of data loss and spills within a supported app or browser. Defender for Cloud App Session Control is enabled through Conditional Access policies (App Control), which enables Defender for Cloud App to act as a Cloud Access Security Broker (CASB)) for the connection from the browser to the data source. Further control through the CASB can:

* Block data upload/download
* Check device characteristics
* Block printing
* Block copy/paste actions

#### Implementation Decisions

The following tables describe the high level implementation decisions

Decision Point | Design Decision | Justification
--- | --- | ---
Mobile device use cases | Authorised applications on iOS and Android devices without MDM enrollment (MAM) | Allowing MAM on these device platforms offers great flexibility but also greater risk than full application access on managed Windows devices. Less risk can be provided by the virtual desktop BYOD option. 
Conditional Access | Conditional Access will be configured with exception group for those trusted for MAM | Provides a Zero Trust method to restrict access to this use case only and allows Protected Utility blueprint baseline configuration for remainder of Agency that do not require BYOD for their persona. 
Defender for Cloud Apps | Cloud App security Session policies will restrict access to data within browser sessions | Provides a Zero Trust method to restrict access to leaking of data. 
Intune app protection policies | App protection polices will be deployed to the MAM identity groups without enrollment required (MAM-WE) | Provides some protection against Agency data within a managed app. Protection will require a passcode within the app, control sharing of data between apps and prevent copy of data to personal locations. This allows separation between corporate and personal data to address the intent of ISM security control 1400. 
Azure AD Identity Protection | Blueprint configuration will remain in place enabling Enable the sign-in risk policy and user risk policy within the Azure AD tenant | Provide reporting of detected suspicious sign-in activity based on defined MFA, sign-in risk and user risk policies for increased security and automated remediation steps such as requiring a password change or MFA challenge when authentication is suspicious. 
Multi Factor Authentication | Multi Factor authentication for this use-case will always be enforced. | As per the blueprint baselines defined within the [platform design](https://desktop.gov.au/blueprint/platform.html). 

#### BYOD Option 1 configuration guide

The configuration options provided here assume that the PROTECTED utility has been implemented.

##### Azure AD Groups

The following updates are required within Azure AD.

`Azure Active Directory > Groups`

| Item                           | Value                                               |
| ------------------------------ | --------------------------------------------------- |
| New Group: rol-Agency-MAMUsers | Type: Security<br />Membership: Statically assigned |

##### App Protection Policies

The following updates are required to existing app protection policies.

`Microsoft Endpoint Manager > Apps > App protection policies > iOS App Protection Policy`

| Item                                            | Value                                           |
| ----------------------------------------------- | ----------------------------------------------- |
| Existing policy name: iOS App Protection Policy | Assignment: Exclude Group - rol-Agency-MAMUsers |

##### Conditional Access Polices

The following updates are required to the following Conditional Access Policies as deployed standard within the blueprint.

`Azure AD Conditional Access > Policies`

| Item                                            | Value                                                        |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Existing policy name: GRANT - iOS Device access | This policy requires iOS device state to be compliant which requires enrollment. The update required to this policy is the exclude the MAM users group.<br /><br />Assignments > Exclude > rol-Agency-MAMUsers |

The following is a new Conditional Access Policy to allow MAM access for BYOD option 2.

| Item                                     | Value                                                        |
| ---------------------------------------- | ------------------------------------------------------------ |
| New policy name: GRANT - MAM BYOD access | Authorised applications on iOS and Android devices  without MDM enrollment (MAM).<br /> |

* Name: `GRANT – MAM BYOD access`
* Assignments
  * Users and groups
    * Include: `rol-Agency-MAMUsers`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `Select apps`
      * `Office 365`
    * Exclude: None
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `Yes`
      * Include: `Select device platforms`
        * `iOS`
        * `Android`
      * Exclude: 
        * `Windows Phone`
        * `Windows`
        * `macOS`
        * `Linux`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `Yes`
      * Browser: `Yes`
      * Mobile apps and desktop clients: `True`
      * Exchange ActiveSync clients: `False`
      * Other clients: `False`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `No`
    * Grant access: `Yes`
    * Require multi-factor authentication: `True`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `True`
    * Require app protection policy: `True`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `Yes`
    * Require one of the selected controls: `No`
* Session
  * Use app enforced restrictions: `True`
  * Use Conditional Access App Control: `True > Custom policy`
  * Sign-in frequency: `8 Hours`
  * Persistent browser session: `False`
* Enable policy: `On`

The following is a new Conditional Access Policy to allow block unapproved apps for MAM users on iOS and Android.

| Item                                              | Value                                                        |
| ------------------------------------------------- | ------------------------------------------------------------ |
| New policy name: BLOCK - MAM BYOD unapproved apps | Block all applications that are not Office 365 on iOS and Android devices. |

* Name: `BLOCK – MAM BYOD unapproved cloud apps`
* Assignments
  * Users and groups
    * Include: `rol-Agency-MAMUsers`
    * Exclude
      * All guest and external users: `False`
      * Directory roles: `False`
      * Users and groups: `True`
        * Excluded users and groups: `grp-Conditional_Access_Exclude`
  * Cloud apps or actions
    * Select what policy this applies to: `Cloud apps`
    * Include: `All cloud apps`
    * Exclude: `Select apps`
      * `Office 365`
      * `Azure Virtual Desktop`
  * Conditions
    * User risk:
      * Configure: `No`
    * Sign-in risk
      * Configure: `No`
    * Device platforms:
      * Configure: `Yes`
      * Include: `Select device platforms`
        * `iOS`
        * `Android`
      * Exclude: 
        * `Windows Phone`
        * `Windows`
        * `macOS`
        * `Linux`
    * Locations:
      * Configure: `No`
    * Client apps
      * Configure: `No`
      * Browser: `False`
      * Mobile apps and desktop clients: `False`
      * Exchange ActiveSync clients: `False`
      * Other clients: `False`
    * Device state:
      * Configure: `No`
* Access controls
  * Grant
    * Block access: `Yes`
    * Grant access: `No`
    * Require multi-factor authentication: `False`
    * Require device to be marked as compliant: `False`
    * Require Hybrid Azure AD joined device: `False`
    * Require approved client app: `False`
    * Require app protection policy: `False`
    * Require password change: `False`
    * Terms of Use: `False`
    * Require all the selected controls: `No`
    * Require one of the selected controls: `No`
* Session
  * Use app enforced restrictions: `False`
  * Use Conditional Access App Control: `False`
  * Sign-in frequency: `False`
  * Persistent browser session: `False`
* Enable policy: `On`

##### Defender for Cloud App Policies

The following policies provide protection while connected over a browser session.

`portal.cloudappsecurity.com > Control > Create Session policies`

Defender for Cloud App session policy for blocking copy/paste

| Setting              | Value                                                        |
| -------------------- | ------------------------------------------------------------ |
| Policy template      | Block cut/copy and paste based on real time content inspection |
| Policy name          | BLOCK - Copy and paste                                       |
| Policy severity      | Low                                                          |
| Category             | DLP                                                          |
| Description          | Defender for Cloud Apps will evaluate the content of items that are cut/copied from and/or pasted to a browser and will block any violations in real-time. |
| Session control type | Block activities                                             |
| Activity source      | Activity type equals Cut/Copy item, Paste item               |
| Action               | Block                                                        |

Defender for Cloud App session policy for block download

| Setting              | Value                                                        |
| -------------------- | ------------------------------------------------------------ |
| Policy template      | Block cut/copy and paste based on real time content inspection |
| Policy name          | BLOCK - Download                                             |
| Policy severity      | Low                                                          |
| Category             | DLP                                                          |
| Description          | Defender for Cloud Apps will evaluate the content of files being downloaded and will block any violations in real-time. |
| Session control type | Control file download (with inspection)                      |
| Activity source      | None                                                         |
| Inspection Method    | None                                                         |
| Action               | Block                                                        |

Defender for Cloud App session policy for block printing

| Setting              | Value                                                        |
| -------------------- | ------------------------------------------------------------ |
| Policy template      | None                                                         |
| Policy name          | BLOCK - Print                                                |
| Policy severity      | Low                                                          |
| Category             | DLP                                                          |
| Description          | Defender for Cloud Apps will evaluate the action of printing and block it |
| Session control type | Block activities                                             |
| Activity source      | None                                                         |
| Inspection Method    | None                                                         |
| Action               | Block                                                        |

Defender for Cloud App session policy for block outdated OS

| Setting              | Value                                                        |
| -------------------- | ------------------------------------------------------------ |
| Policy template      | None                                                         |
| Policy name          | BLOCK - outdated OS                                          |
| Policy severity      | Low                                                          |
| Category             | Access Control                                               |
| Description          | Defender for Cloud Apps will evaluate the outdated OS and block it |
| Session control type | Block activities                                             |
| Activity source      | User agent tag equals Outdated operating system, App equals Office 365, Activity type is set |
| Inspection Method    | None                                                         |
| Action               | Block                                                        |

##### Intune App Protection Polices (MAM-WE)

The following updates are required for managed application on iOS and Android.

`Microsoft Endpoint Manager > Apps > App protection policies `

###### iOS MAM app protection policy without enrollment

| Setting                                                  | Value                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| Name                                                     | iOS MAM App Protection Policy                                |
| Platform                                                 | iOS/iPadOS                                                   |
| **Apps**                                                 |                                                              |
| Target Apps on all device types                          | No (Unmanaged)                                               |
| Target policy to                                         | Selected Apps                                                |
| Public Apps                                              | Microsoft Edge<br/>Microsoft Excel<br/>Microsoft Outlook<br/>Microsoft PowerPoint<br/>Microsoft Word<br/>Microsoft SharePoint<br/>Microsoft Teams<br/>Microsoft OneDrive |
| **Data Protection**                                      |                                                              |
| Backup or data to iTunes and iCloud                      | Block                                                        |
| Send org data to other apps                              | Policy managed apps with Open-In/Share filtering             |
| Save copies of org data                                  | Block                                                        |
| Allow user to save copies to selected services           | One Drive for Business<br />SharePoint                       |
| Transfer telecommunication data to                       | Any dialer app                                               |
| Receive data from other apps                             | Policy managed apps                                          |
| Restrict cut, copy and paste between other apps          | Policy managed apps with paste in                            |
| Cut and copy character limit for any app                 | 0                                                            |
| Third party keyboards                                    | Block                                                        |
| Encrypt Org Data                                         | Require                                                      |
| Sync policy managed app data with native apps or add-ins | Block                                                        |
| Printing org data                                        | Block                                                        |
| Restrict web content transfer with other apps            | Microsoft Edge                                               |
| Org data notifications                                   | Block                                                        |
| **Access requirements**                                  |                                                              |
| PIN for access                                           | Require                                                      |
| PIN type                                                 | Passcode                                                     |
| Simple PIN                                               | Block                                                        |
| Select minimum PIN length                                | 14                                                           |
| Touch ID instead of PIN for access                       | Allow                                                        |
| Override biometrics with PIN after timeout               | Require                                                      |
| Timeout                                                  | 30 minutes                                                   |
| Face ID instead of PIN for access                        | Allow                                                        |
| PIN reset after number of days                           | Yes                                                          |
| Number of days                                           | 365                                                          |
| App PIN when device pin is set                           | Require                                                      |
| Work or school account credentials for access            | Not required                                                 |
| **Conditional Launch**                                   |                                                              |
| Max PIN attempts                                         | 5 (reset pin)                                                |
| Offline grace period                                     | 720 minutes (Block access)                                   |
| Offline grace period                                     | 30 days  (Wipe data)                                         |
| Jailbroken/rooted devices                                | Block access                                                 |
| Min OS version                                           | 15.0 (Block access)<br />Note: define latest version at time of configure |
| Disabled account                                         | Block access                                                 |
| **Assignments**                                          |                                                              |
| Included groups                                          | rol-Agency-MAMUsers                                          |

###### Android MAM app protection policy without enrollment

| Setting                                                  | Value                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| Name                                                     | Android MAM App Protection Policy                            |
| Platform                                                 | Android                                                      |
| **Apps**                                                 |                                                              |
| Target Apps on all device types                          | No (Unmanaged)                                               |
| Target policy to                                         | Selected Apps                                                |
| Public Apps                                              | Microsoft Edge<br/>Microsoft Excel<br/>Microsoft Outlook<br/>Microsoft PowerPoint<br/>Microsoft Word<br/>Microsoft SharePoint<br/>Microsoft Teams<br/>Microsoft OneDrive |
| **Data Protection**                                      |                                                              |
| Backup or data to Android backup services                | Block                                                        |
| Send org data to other apps                              | Policy managed apps with Open-In/Share filtering             |
| Save copies of org data                                  | None                                                         |
| Allow user to save copies to selected services           | One Drive for Business<br />SharePoint                       |
| Transfer telecommunication data to                       | Any dialer app                                               |
| Receive data from other apps                             | Policy managed apps                                          |
| Restrict cut, copy and paste between other apps          | Policy managed apps with paste in                            |
| Screen capture and Google Assistance                     | Block                                                        |
| Cut and copy character limit for any app                 | 0                                                            |
| Approved keyboards                                       | Gboard - the Google Keyboard<br/>SwiftKey Keyboard<br/>Samsung Keyboard<br/>Google Indic Keyboard<br/>Google Pinyin Input<br/>Google Japanese Input<br/>Google Korean Input<br/>Google Handwriting Input<br/>Google voice typing<br/>Samsung voice input<br/>Samsung Keyboard |
| Encrypt Org Data                                         | Require                                                      |
| Sync policy managed app data with native apps or add-ins | Block                                                        |
| Printing org data                                        | Block                                                        |
| Restrict web content transfer with other apps            | Microsoft Edge                                               |
| Org data notifications                                   | Block                                                        |
| **Access requirements**                                  |                                                              |
| PIN for access                                           | Require                                                      |
| PIN type                                                 | Passcode                                                     |
| Simple PIN                                               | Block                                                        |
| Select minimum PIN length                                | 8                                                            |
| Fingerprint instead of PIN for access                    | Allow                                                        |
| Override fingerprint with PIN after timeout              | Require                                                      |
| Timeout                                                  | 30 minutes                                                   |
| Biometrics instead of PIN for access                     | Allow                                                        |
| PIN reset after number of days                           | Yes                                                          |
| Number of days                                           | 365                                                          |
| Select number of pervious PIN values to maintain         | 3                                                            |
| App PIN when device pin is set                           | Require                                                      |
| Work or school account credentials for access            | Not required                                                 |
| Recheck the access requirements after inactivity         | 15 minutes                                                   |
| **Conditional Launch**                                   |                                                              |
| Max PIN attempts                                         | 5 (reset pin)                                                |
| Offline grace period                                     | 720 minutes (Block access)                                   |
| Offline grace period                                     | 30 days  (Wipe data)                                         |
| Jailbroken/rooted devices                                | Block access                                                 |
| Min OS version                                           | 12.0 (Block access)<br />Note: define latest version at time of configure |
| Disabled account                                         | Block access                                                 |
| **Assignments**                                          |                                                              |
| Included groups                                          | rol-Agency-MAMUsers                                          |

### Virtual desktop (BYOD Option 2)

The virtual desktop (Azure Virtual Desktop) device access option will leverage:

* Azure AD MFA and Conditional Access policies
* Secure Azure compute boundary that will provide the environment where data is accessed, creating full separation between the personal device and the corporate desktop.

The outcome will allow the end user to: 

* Access all M365 applications, from within the virtual desktop only
* Access all other corporate applications, from within the virtual desktop only
* Prevent copy, paste, saving of files and printing on the Mobile Device.

The recommendation to implement this option is to utilise the [Azure Virtual Desktop blueprint](https://desktop.gov.au/patterns/avd.html) pattern. The solution requires architectural decisions to be made that are outside the scope of this pattern. This BYOD option is more difficult to implement than the MAM BYOD option 1, but offers a less complex implementation than other virtual desktop solutions.

The pattern recommends the following:

* A suitably configured Azure subscription is available, which may include connectivity to the Agency's IT premises (e.g. data centre) where connectivity to hybrid Active Directory or corporate apps is required.
* Windows Desktop OS multi-session operation system is used to offer greater supportability and cost savings than that of a single instance virtual machines.
* Conditional Access policies are configured to allow access to the AVD application without enrollment or restriction, and to allow access to Microsoft 365 applications inside the virtual desktop. This will allow personal devices to connect to the service without restriction but only the virtual desktop to access the data.
* Copy and paste actions, file copy and print are prevented within RDP client properties and group policy to prevent virtual channels being used to copy data in and out of the PROTECTED boundary (the virtual desktop).
* Multifactor authentication is enforced with session controls to prevent multiple day use of the MFA token.
* Identity Protection is configured to allow detection of risky sign-ins.

**Mobile devices** or **personal devices** in the context of this BYOD option are consumer desktop devices using MacOS or Windows, or devices provided by another government Agency (cross-Agency working use-cases).

#### Data segregation

AVD allows users access to Office 365 applications that are hosted on a Windows virtual desktop, including any hybrid applications provided these are configured appropriately within the Azure environment. The user interacts with the applications within the virtual desktop preventing the user from extracting corporate data to the local physical device.

Virtual desktops provide a greater level of security accessing Agency data over a MAM solution (option 1) as all the data remains within the Azure secure boundary (the Azure enterprise landing zone).

#### Client device access

The mobile device used to access the virtual desktop is not limited to a particular platform, but a Windows client device is recommended. Users can choose from using a HTML5 web browser (e.g. Edge or Chrome), or the official Azure Virtual Desktop client, to access the virtual desktop. 

#### Implementation Decisions

The following tables describe the high level implementation decisions

Decision Point | Design Decision | Justification
--- | --- | ---
 Mobile device use cases | Personal device access to a corporate Windows virtual desktop.| Offers greater level of access to applications and data and less risk exposure than MAM data separation.
 Conditional Access | Conditional Access will be configured with exception group for those trusted for AVD| Provides a Zero Trust method to restrict access to this use case only and allows Protected Utility blueprint baseline configuration for remainder of Agency that don't require virtual desktops for their job role.
 Azure Virtual Desktop design | Protected Utility blueprint Azure Virtual Desktop pattern| The Protected Utility blueprint Azure Virtual Desktop pattern provides advice to deploy a secure enterprise virtual desktop solution on Azure with suitable controls to operate at PROTECTED.<br /><br />Note: Agencies should risk assess their own design or deployment of this pattern to determine suitability to operate in their environment.

#### BYOD Option 2 configuration guide

Further implementation advice is provided in the Protected Utility blueprint [Azure Virtual Desktop pattern](https://desktop.gov.au/patterns/avd.html). This guide is a bolt-on pattern to the Protected Utility blueprint.
