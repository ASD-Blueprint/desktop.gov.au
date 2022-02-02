---
layout: page
title: Bring Your Own Device (BYOD)
excerpt: BYOD allows users to utilise their own consumer devices and access corporate data and applications securely. Polices can assist with protection of corporate . This pattern provides guidance on how to implement various options within the blueprint but outlines some risks involved on the security posture to PROTECTED while doing this.
---

This pattern provides guidance to allow blueprint users the ability to allow access Microsoft 365 services from various personally owned devices, without the need to enroll those devices. This is refereed to as "bring your own device", or BYOD, within an enterprise mobility strategy.

BYOD allows users to perform their work in a flexible manner within specific use-cases allowing access to corporate systems from personally owned devices across multiple business personas. BYOD provides a range of benefits including more flexible work and life balance for employees and greater business agility for the agency.

The pattern works through various use cases and configuration required on top of the PROTECTED utility Blueprint, taking into account some best practice on this area from [Microsoft's BYOD blueprint](https://news.microsoft.com/wp-content/uploads/prod/sites/133/2021/03/MEA-Blueprint-for-BYOD-Use-v1.0-Final-Version.pdf).

It is recommened to read the ACSC risk management publication for enterprise mobility. See [Risk Management of Enterprise Mobility Including Bring Your Own Device](https://www.cyber.gov.au/acsc/view-all-content/publications/risk-management-enterprise-mobility-including-bring-your-own-device).

The pattern suggests two BYOD access options dependent on the risk appetite of the Agency and provides some known risk and ISM control guidance. Agencies adopting BYOD should perform their own risk assessments and follow ACSC guidance in regards to the requirements surrounding the platform and adequate separation between private and corporate data. The ACSC recommend that BYOD should not be used to access SECRET or TOP SECRET systems.

The pattern does not discuss agency policy surrounding the use of personally owed devices. The following guidance from the ACSC is:

* Legal advice is sought prior to allowing privately-owned mobile devices to access systems or data (**ISM** security control 1297)
* Personnel accessing OFFICIAL and PROTECTED systems or data using a privately-owned mobile device use an ACSC approved platform, a security configuration in accordance with ACSC guidance and have enforced separation of work data from any personal data (**ISM** security control 1400) 
* Privately-owned mobile devices do not access SECRET and TOP SECRET systems or data (**ISM** security control 0694)

The Protected Utility Blueprint does not define a BYOD method or provide guidance on how to achieve this outside of this pattern. 

The technical controls that are described in this document have been grouped into two option that can be implemented together, to provide various BYOD use cases:

**Mobile device access**

* Allows access to some Microsoft 365 applications from personal mobile devices
* Granular control of user policies, session controls using Microsoft 
  Defender for Cloud Apps (requires E5)
* Conditional Access enforced approved apps for Mobile Devices
* Higher risk than enrolled device in PROTECTED utility 

* Suits PROTECTED utility traveller persona for ad-hoc access to Teams, SharePoint and Outlook.

**Virtual Desktop (AVD)**

* Available for use with Microsoft 365 E3 or E5 
* Utilises Azure Virtual Desktop (WVD) to provide a desktop experience that closely matches the corporate desktop, including legacy application access on any device
* Lowest security risk approach compared to mobile device, but offers greater use cases
* More complexity and cost involved to operate and setup
* Suits all PROTECTED utility personas for enterprise mobility, including cross agency working.

![BYOD options](/assets/images/patterns/byodoptions.png)

## Assumptions

The following represent the assumptions when considering to deploy either BYOD options into an existing blueprint deployment.

* PROTECTED utility deployed in a cloud only or hybrid deployment pattern.
* Mobile device option requires Defender for Cloud Apps, which requires Microsoft 365 E5.
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
 Mobile device | Provides ad-hoc access on the road and in the office to email, teams and SharePoint from personally owned mobile devices such as iOS and Android devices.  <br />Use-case provides some offline access if connectivity is limited. | Easiest             | Enforcing separation of work data from any personal data<br />Limited options for zero trust<br />Lost phone, remote data wipe risks. 
 Virtual desktop | Provided through the Azure Virtual Desktop service, this provides a full Windows working environment similar to the corporate desktop. User use their own personal Windows or Mac devices to access the virtual desktop.<br />Remote working within another government agency or partner environment.<br /><br />Legacy or non-cloud corporate applications (hybrid) can operate with this use-case.<br /><br />Use case requires always-on Internet connection. | More difficult | Meets the intent of PROTECTED level controls and essential 8.<br />Some risks around screen scraping and physical security. 

The following process can be followed to determine which pattern option to follow.

![BYO Flow Chart](/assets/images/patterns/flow.png)

### Mobile device access (BYOD Option 1)

The Mobile device access option will leverage:

* Microsoft Azure Active Directory - Multifactor Authentication (MFA) and Conditional Access policies

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

To protect the data in the event that a device is lost or stolen or if the employee leaves the 
Agency, Selective Wipe capability can be used to wipe the corporate data from the device.

The following tables describe the high level implementation decisions

Decision Point | Design Decision | Justification
--- | --- | ---
Mobile device use cases | Authorised applications on iOS and Android devices  without MDM enrollment (MAM) | Allowing MAM on these device platforms offers great flexiblity but less risk that full browser and application access on Windows Devices. Less risk can be provided for Widows device use case via the Virtual desktop BYOD option. 
Conditional Access | Conditional Access will be configured with exception group for those trusted for MAM | Provides a Zero Trust method to restrict access to this use case only and allows PROTECTED utility baseline configuration for remainder of Agency that don't require BYOD for their job roles. 
Defender for Cloud Apps | Cloud App security Session policies will restrict access to data | Provides a Zero Trust method to restrict access to leaking of data 
Azure AD Identity Protection | Blueprint configuration will remain in place enabling Enable the sign-in risk policy and user risk policy within the Azure AD tenant | Provide reporting of detected suspicious sign-in activity based on defined MFA, sign-in risk and user risk policies for increased security 
Multi Factor Authentication | Multi Factor authentication for this use-case will be enforced. | As per the Blueprint baselines defined within the 


#### Option 1 As-Built guides

*Link to additional guides, or include them here..*

### Virtual desktop (BYOD Option 2)

The Virtual desktop (Azure Virtual Desktop) device access option will leverage:

* Microsoft Azure Active Directory - Multifactor Authentication (MFA) and Conditional Access policies
* Secure Azure compute boundary that will provide the environment where data is accessed, creating full separation between the personal device and the corporate desktop.

The outcome will allow the end user to: 

* Access email using Outlook on their personal Mobile Device. 
* Access Teams on their personal Mobile Device 
* Access SharePoint Online on their personal Mobile Device 
* Use of Word, Excel, PowerPoint

**Mobile devices** in the context of this BYOD option are consumer desktop devices using MacOS or Windows, or devices provided by another government agency (cross agency working use-cases). They access the solution with a HTML5 browser, or through the provided Microsoft application (Azure Virtual Desktop Client).

This option allows users to access to Office 365 applications that are hosted on a 
Windows Virtual Desktop, including any hybrid applications provided these are configured appropriatly within the Azure environment.

The mobile device used to access the virtual desktop is not limited to a particular platform, but a Windows base device is recommended. Users can choose from using a HTML5 web browser (e.g. Edge or Chrome), or the Azure Virtual Desktop client, to access the virtual desktop. 

The Virtual Desktops provides a greater level of security accessing Agency data over a MAM solution (option 1) as all the data remains within the Azure secure boundary (Azure enterprise landing zone).

The Azure Virtual Desktop Blueprint pattern provides a recommendation on how to deploy this and some considerations to follow. The solution requires some architecural decisions to be made that are outside the scope of this pattern, or the AVD pattern. It is more difficult to implement than the MAM BYOD option, but offers a less complex implementation than other virtual desktop solutions.

The pattern recommends the following:

* A suitably configured Azure subscription is available, which may include connectivity to the Agencies IT premises (e.g. data centre) where connectivity to hybrid Active Directory or corporate apps is required
* Windows multi-session operation system is used to offer greater supportability and cost savings than that of a single instance virtual machines
* Conditional Access policies are configured to allow access to the AVD application without enrollment or restriction, and to allow access to Microsoft 365 applications inside the virtual desktop. This will allow personal devices to connect to the service without restriction but only the virtual desktop to access the data.
* Copy and paste actions are prevented within RDP client properties and group policy to prevent virtual channels being used to copy data in and out of the PROTECTED boundary (the virtual desktop).
* Multifactor authentication is enforced with session controls to prevent multiple day use of the MFA token.
* Identity Protection is configured to allow detection of risky sign-ins.

The following tables describe the high level implementation decisions

Decision Point | Design Decision | Justification
--- | --- | ---
 |  | 
 |  | 
 |  | 


​        

#### Option 2 As-Built guides

Further implementation advice is provided in the PROTECTED utility [Azure Virtual Desktop pattern](https://desktop.gov.au/patterns/avd.html).

### Security Considerations

Include area on the SSP/ISM controls and map back to risk assessment.

#### System Security Plan

*ISM controls, updates to SSP required for each option*

#### Security Risk Management Plan

*Risks for each option and assessment based on SRMP* 
