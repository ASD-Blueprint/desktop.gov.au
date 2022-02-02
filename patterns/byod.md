---
layout: page
title: Bring Your Own Device (BYOD)
excerpt: BYOD allows users to utilise their own consumer devices and access corporate data and applications securely. Polices can assist with protection of corporate . This pattern provides guidance on how to implement various options within the blueprint but outlines some risks involved on the security posture to PROTECTED while doing this.
---

This pattern provides guidance to allow blueprint users the ability to allow access Microsoft 365 services from various personally owned devices, without the need to enroll those devices. This is refereed to as "bring your own device", or BYOD, within an enterprise mobility strategy.

BYOD allows users to perform their work in a flexible manner within specific use-cases allowing access to corporate systems from personally owned devices across multiple business personas. BYOD provides a range of benefits including more flexible work and life balance for employees and greater business agility for the agency.

The pattern works through various use cases and configuration required on top of the PROTECTED utility Blueprint, taking into account some best practice configuration advice on this area from [Microsoft's BYOD blueprint](https://news.microsoft.com/wp-content/uploads/prod/sites/133/2021/03/MEA-Blueprint-for-BYOD-Use-v1.0-Final-Version.pdf).

It is recommened to read the ACSC risk management publication for enterprise mobility. See [Risk Management of Enterprise Mobility Including Bring Your Own Device](https://www.cyber.gov.au/acsc/view-all-content/publications/risk-management-enterprise-mobility-including-bring-your-own-device).

The pattern suggests **two BYOD access options** dependent on the risk appetite of the Agency and provides some known risk and ISM control guidance. Agencies adopting BYOD should perform their own risk assessments and follow ACSC guidance in regards to the requirements surrounding the platform and adequate separation between private and corporate data. The ACSC recommend that BYOD should not be used to access SECRET or TOP SECRET systems.

The pattern does not discuss agency policy surrounding the use of personally owed devices. The following guidance from the ACSC is:

* Legal advice is sought prior to allowing privately-owned mobile devices to access systems or data (**ISM** security control 1297)
* Personnel accessing OFFICIAL and PROTECTED systems or data using a privately-owned mobile device use an ACSC approved platform, a security configuration in accordance with ACSC guidance and have enforced separation of work data from any personal data (**ISM** security control 1400) 
* Privately-owned mobile devices do not access SECRET and TOP SECRET systems or data (**ISM** security control 0694)

The Protected Utility Blueprint does not define a BYOD method as standard, or provide guidance on how to achieve this outside of this pattern. 

The technical controls that are described in this document have been grouped into two options that can be implemented together or by themselves, to provide various BYOD use cases:

**Mobile device access**

* Allows access to some Microsoft 365 applications from personal mobile devices
* Granular control of user policies, session controls using Microsoft 
  Defender for Cloud Apps (requires E5)
* Conditional Access enforced approved apps for Mobile Devices
* Higher risk than enrolled device in PROTECTED utility 

* Suits PROTECTED utility traveller persona for ad-hoc access to Teams, SharePoint and Outlook.

**Virtual Desktop (AVD)**

* Available for use with Microsoft 365 E3 or E5 
* Utilises Azure Virtual Desktop (AVD) to provide a desktop experience that closely matches the corporate desktop, including legacy application access on any device
* Lowest security risk approach compared to mobile device, but offers greater use cases
* More complexity and cost involved to operate and setup
* Suits all PROTECTED utility personas for enterprise mobility, including cross agency working.

![BYOD options](/assets/images/patterns/byodoptions.png)

## Assumptions

The following represent the assumptions when considering to deploy either BYOD options into an existing blueprint deployment:

* PROTECTED utility deployed in a cloud only or hybrid deployment pattern.
* For enhanced security, the Mobile device option requires Defender for Cloud Apps, which requires Microsoft 365 E5.
* Licensing is available for Windows 10 Enterprise multi-session, Windows 10 Enterprise and FSLogix.
  * Microsoft 365 E3, E5
  * Windows E3, E5

## Prerequisites

The following represent the prerequisites before deploying the selection BYOD option .

All deployment types:

* DTA PROTECTED utility AVD pattern to be deployed for the Virtual desktop pattern, see [Azure Virtual Desktop pattern](https://desktop.gov.au/patterns/avd.html)

Cloud native:

* No cloud only specific prerequisites

Hybrid:

* No hybrid only specific prerequisites

## BYOD Options

### Options comparison

Options | Use-Cases | Effort to implement | Risk considerations 
--- | --- | ---| ---
 Mobile device access | Provides ad-hoc access on the road and in the office to email, teams and SharePoint from personally owned mobile devices such as iOS and Android devices.  <br />Use-case provides some offline access if connectivity is limited. | Easiest             | Enforcing separation of work data from any personal data.<br /><br />Limited options for zero trust.<br /><br />Lost phone, remote data wipe risks. 
 Virtual desktop | Provided through the Azure Virtual Desktop service, this provides a full Windows working environment similar to the corporate desktop. User use their own personal Windows or Mac devices to access the virtual desktop.<br />Remote working within another government agency or partner environment.<br /><br />Legacy or non-cloud corporate applications (hybrid) can operate with this use-case.<br /><br />Use case requires always-on Internet connection. | More difficult | Meets the intent of PROTECTED level controls and essential 8.<br /><br />Some risks around screen scraping and physical security. 

The following process can be followed to determine which pattern option to follow.

![BYO Flow Chart](/assets/images/patterns/flow.png)

### Mobile device access (BYOD Option 1)

The Mobile device access option will leverage:

* Azure Active Directory Multifactor Authentication (MFA) and Conditional Access policies

* Defender for Cloud Apps to prevent data leakage and spills

* Intune - Application Protection Policies 


The outcome will allow the end user to: 
* Access email using Outlook on their personal Mobile Device. 
* Access Teams on their personal Mobile Device 
* Access SharePoint Online on their personal Mobile Device 
* Use of Word, Excel, PowerPoint

**Mobile devices** in the context of this BYOD option are smart phones or tablets running Apple iOS or Android.

All access will be from within approved applications published by Microsoft to the respective app store (Apple AppStore or Google Play Store). 

This BYOD option will enforce a policy on the applications to secure corporate data, and prevent download updload, copy and paste actions, and enforce a PIN/appropriate passcode. 

The device will not be managed by the Agency (MDM) or enrolled. Only the approved applications will be managed by the agency (through the Conditional Access policy). 

iOS devices do not require Apple Business Manager or Apple Push Notification Service certificate configuration or for MAM only, this configuration in the Blueprint for MDM can be ignored if this pattern is the only method for Mobile Devices for the Agency.

As the devices are not managed, Agencies should provide some guidance or user guides to their users on how to install the Office applications on their devices and authenticate to avoid confusion. 

To protect the data in the event that a device is lost or stolen or if the employee leaves the Agency, Selective Wipe capability can be used to wipe the corporate data in managed apps from the device. Intune app protection policies can help prevent data contamination between non managed apps on a client device.

Defender for Cloud Apps (formerly MCAS) provides capabilities that ca restrict access to only authorised platforms and device types and can minimise the risk of data loss and spills within a supported app or browser.  Defender for Cloud App Session Control is enabled through Conditional Access policies (App Control), which enables Defender for Cloud App to act as a CASB (Cloud Access Security Broker) for the connection from the browser to the data source. Further control through the CASB can:

* Block data upload/download
* Check device characteristics
* Block printing
* Block copy/paste actions

The following tables describe the high level implementation decisions

Decision Point | Design Decision | Justification
--- | --- | ---
Mobile device use cases | Authorised applications on iOS and Android devices  without MDM enrollment (MAM) | Allowing MAM on these device platforms offers great flexiblity but less risk that full browser and application access on Windows Devices. Less risk can be provided for Widows device use case via the Virtual desktop BYOD option. 
Conditional Access | Conditional Access will be configured with exception group for those trusted for MAM | Provides a Zero Trust method to restrict access to this use case only and allows PROTECTED utility baseline configuration for remainder of Agency that don't require BYOD for their job roles. 
Defender for Cloud Apps | Cloud App security Session policies will restrict access to data within browser sessions | Provides a Zero Trust method to restrict access to leaking of data. 
Intune app protection policies | App protection polices will be deployed to the MAM identity groups without enrollment required (MAM-WE) | Provides some protection against Agency data within a managed app. Protection will require a passcode within the app, control sharing of data between apps and prevent copy of data to personal locations. This allows separation between corporate and personal data to address the intent of ISM security control 1400. 
Azure AD Identity Protection | Blueprint configuration will remain in place enabling Enable the sign-in risk policy and user risk policy within the Azure AD tenant | Provide reporting of detected suspicious sign-in activity based on defined MFA, sign-in risk and user risk policies for increased security. 
Multi Factor Authentication | Multi Factor authentication for this use-case will be enforced. | As per the Blueprint baselines defined within the [platform design](https://desktop.gov.au/blueprint/platform.html). 


#### BYOD Option 1 configuration guide

##### Azure AD Groups

The following updates are required within Azure AD.

`Azure Active Directory > Groups`

| Azure AD Group                 | Membership                                          |
| ------------------------------ | --------------------------------------------------- |
| New Group: rol-Agency-MAMUsers | Type: Security<br />Membership: Statically assigned |

##### App Protection Policies

The following updates are required to existing app protection policies.

`Microsoft Endpoint Manager > Apps > App protection policies > iOS App Protection Policy`

| App Protection Policy     | Membership                                      |
| ------------------------- | ----------------------------------------------- |
| iOS App Protection Policy | Assignment: Exclude Group - rol-Agency-MAMUsers |

##### Conditional Access Polices

The following updates are required to the following Conditional Access Policies as deployed standard within the Blueprint.

`Azure AD Conditional Access > Policies`

| Existing Conditional Access Policy | Update                                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| GRANT - iOS Device access          | This policy requires iOS device state to be compliant which requires enrollment. The update required to this policy is the exclude the MAM users group.<br /><br />Assignments > Exclude > rol-Agency-MAMUsers |

The following is a new Conditional Access Policy to allow MAM access for BYOD option 2.

| New Conditional Access Policy name | Policy Summary                                               |
| ---------------------------------- | ------------------------------------------------------------ |
| GRANT - MAM BYOD access            | Authorised applications on iOS and Android devices  without MDM enrollment (MAM). |

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

| New Conditional Access Policy name | Policy Summary                                               |
| ---------------------------------- | ------------------------------------------------------------ |
| BLOCK - MAM BYOD unapproved apps   | Block all applications that are not Office 365 on iOS and Android devices. |

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

The following polcies provide protection while connected over a browser session.

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
| Description          | Defender for Cloud Apps will evaluate the an outdated OS and block it |
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
| Platform                                                 | iOS/iPasOS                                                   |
| **Apps**                                                 |                                                              |
| Target Apps on all device types                          | No (Unmanaged)                                               |
| Target policy to                                         | Selected Apps                                                |
| Public Apps                                              | Microsoft Edge<br/>Microsoft Excel<br/>Microsoft Outlook<br/>Microsoft PowerPoint<br/>Microsoft Word<br/>Microsoft Office<br/>Microsoft OneNote<br/>Microsoft Planner<br/>Microsoft Power BI<br/>Microsoft SharePoint<br/>Microsoft Teams<br/>Microsoft Visio Viewer<br/>Microsoft Power Apps<br/>Microsoft OneDrive |
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
| Select minimum PIN length                                | 8                                                            |
| Touch ID instead of PIN for access                       | Allow                                                        |
| Override biometrics with PIN after timeout               | Require                                                      |
| Timeout                                                  | 30 minutes                                                   |
| Face ID instead of PIN for access                        | Allow                                                        |
| PIN reset after number of days                           | Yes                                                          |
| Number of days                                           | 365                                                          |
| App PIN when device pin is set                           | Require                                                      |
| Work or school account credentials for access            | Not required                                                 |
| **Conditional Launch**                                   |                                                              |
| Max PIN attempts                                         | 3 (reset pin)                                                |
| Offline grace period                                     | 720 minutes (Block access)                                   |
| Offline grace period                                     | 30 days  (Wipe data)                                         |
| Jailbroken/rooted devices                                | Block access                                                 |
| Min OS version                                           | 14.0 (Block access)                                          |
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
| Public Apps                                              | Microsoft Edge<br/>Microsoft Excel<br/>Microsoft Outlook<br/>Microsoft PowerPoint<br/>Microsoft Word<br/>Microsoft Office<br/>Microsoft OneNote<br/>Microsoft Planner<br/>Microsoft Power BI<br/>Microsoft SharePoint<br/>Microsoft Teams<br/>Microsoft Visio Viewer<br/>Microsoft Power Apps<br/>Microsoft OneDrive |
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
| Max PIN attempts                                         | 3 (reset pin)                                                |
| Offline grace period                                     | 720 minutes (Block access)                                   |
| Offline grace period                                     | 30 days  (Wipe data)                                         |
| Jailbroken/rooted devices                                | Block access                                                 |
| Min OS version                                           | 12.0 (Block access)                                          |
| Disabled account                                         | Block access                                                 |
| **Assignments**                                          |                                                              |
| Included groups                                          | rol-Agency-MAMUsers                                          |

### Virtual desktop (BYOD Option 2)

The Virtual desktop (Azure Virtual Desktop) device access option will leverage:

* Azure Active Directory Multifactor Authentication (MFA) and Conditional Access policies
* Secure Azure compute boundary that will provide the environment where data is accessed, creating full separation between the personal device and the corporate desktop.

The outcome will allow the end user to: 

* Access email using Outlook on their personal Mobile Device, from within the virtual desktop only
* Access Teams on their personal Mobile Device, from within the virtual desktop only 
* Access SharePoint Online on their personal Mobile Device, from the virtual desktop only
* Prevent copy, paste, saving of files and printing on the Mobile Device.

**Mobile devices** or **personal devices** in the context of this BYOD option are consumer desktop devices using MacOS or Windows, or devices provided by another government agency (cross agency working use-cases). They access the solution with a HTML5 browser, or through the provided Microsoft application (Azure Virtual Desktop Client).

This option allows users to access to Office 365 applications that are hosted on a 
Windows Virtual Desktop, including any hybrid applications provided these are configured appropriately within the Azure environment.

The mobile device used to access the virtual desktop is not limited to a particular platform, but a Windows base device is recommended. Users can choose from using a HTML5 web browser (e.g. Edge or Chrome), or the Azure Virtual Desktop client, to access the virtual desktop. 

The Virtual Desktops provides a greater level of security accessing Agency data over a MAM solution (option 1) as all the data remains within the Azure secure boundary (Azure enterprise landing zone).

The Azure Virtual Desktop Blueprint pattern provides a recommendation on how to deploy this and some considerations to follow. The solution requires some architectural decisions to be made that are outside the scope of this pattern, or the AVD pattern. It is more difficult to implement than the MAM BYOD option, but offers a less complex implementation than other virtual desktop solutions.

The pattern recommends the following:

* A suitably configured Azure subscription is available, which may include connectivity to the Agencies IT premises (e.g. data centre) where connectivity to hybrid Active Directory or corporate apps is required.
* Windows Desktop OS multi-session operation system is used to offer greater supportability and cost savings than that of a single instance virtual machines.
* Conditional Access policies are configured to allow access to the AVD application without enrollment or restriction, and to allow access to Microsoft 365 applications inside the virtual desktop. This will allow personal devices to connect to the service without restriction but only the virtual desktop to access the data.
* Copy and paste actions, file copy and print are prevented within RDP client properties and group policy to prevent virtual channels being used to copy data in and out of the PROTECTED boundary (the virtual desktop).
* Multifactor authentication is enforced with session controls to prevent multiple day use of the MFA token.
* Identity Protection is configured to allow detection of risky sign-ins.

The following tables describe the high level implementation decisions

Decision Point | Design Decision | Justification
--- | --- | ---
 Mobile device use cases |Personal device access to a corporate Windows virtual desktop.|Offers more greater level of access to applications and data and less risk exposure than MAM data separation.
 Conditional Access |Conditional Access will be configured with exception group for those trusted for MAM|Provides a Zero Trust method to restrict access to this use case only and allows PROTECTED utility baseline configuration for remainder of Agency that don't require Virtual Desktops for their job role.
 Azure Virtual Desktop design |PROTECTED utility Azure Virtual Desktop pattern|The PROTECTED utility Azure Virtual Desktop pattern provides advice to deploy a secure enterprise virtual desktop solution on Azure with suitable controls to operate at PROTECTED.<br /><br />Note: Agencies should risk assess their own design or deployment of this pattern to determine suitability to operate in their environment.

#### BYOD Option 2 configuration guide

Further implementation advice is provided in the PROTECTED utility [Azure Virtual Desktop pattern](https://desktop.gov.au/patterns/avd.html). This guide is a bolt-on pattern to the PROTECTED utility blueprint.

### Security Considerations

Include area on the SSP/ISM controls and map back to risk assessment.

#### System Security Plan

*ISM controls, updates to SSP required for each option*

#### Security Risk Management Plan

*Risks for each option and assessment based on SRMP* 
