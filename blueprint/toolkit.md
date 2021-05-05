---
layout: page
title: Assurance toolkit
---

The DTA has developed the blueprint assurance toolkit to assist entities to implement the Protected Utility blueprint. The toolkit provides entities with guidance on how to conduct Essential Eight maturity assessments – both prior to and following blueprint implementation. Conducting these assessments will support entities in measuring their security uplift, and to identify potential vulnerabilities or areas for improvement. 

The toolkit includes detailed guidance on how to conduct basic assessments against each of the ACSC Essential Eight controls.  

Please note: The assessment steps detailed in this document have been designed for typical Australian Federal government ICT environments (Pre-implementation Assessment Steps) and successful blueprint implementations (Post-implementation Assessment Steps). Entities with unique ICT environments or off-plan blueprint implementations may need to consider how their particular ICT requirements will impact the assessment methodology or results.

[Download the assurance toolkit](#download-the-assurance-toolkit){:.au-btn}

## Essential Eight overview

The Australian Signals Directorate's Australian Cyber Security Centre (ACSC) has developed prioritised mitigation strategies, in the form of the ***Strategies to Mitigate Cyber Security Incidents***, to help organisations to mitigate cyber security incidents caused by various cyber threats. The most effective of these are known as the Essential Eight. 

As the ACSC notes, no single mitigation strategy is guaranteed to prevent cyber security incidents. However, by implementing the Essential Eight, systems and networks become much harder for adversaries to compromise. Furthermore, implementing the Essential Eight proactively can be more cost-effective in terms of time, money and effort than having to respond to a large-scale cyber security incident.

The Essential Eight have been presented in this document in the implementation order recommended by the ACSC. Once all Eight are implemented to an initial level, it is then recommended that organisations focus on improving the maturity of the implementation, such that they eventually reach full alignment with the intention of each mitigation strategy. Where the ACSC believes an organisation requires a maturity level above that of Maturity Level Three, the ACSC advises it can provide tailored advice to meet the specific needs of the organisation. This maturity model is explained on the following page and further detail is provided for each Essential Eight measure in the following section of the toolkit.

The strategies are grouped into categories. The first four strategies are aimed at preventing malware delivery and execution, the next three at limiting the pervasiveness of an incident and the final strategy supports recovery following an incident.

## Essential Eight Maturity Model

To assist organisations in determining the maturity of their implementation of the Essential Eight, the Essential Eight Maturity Model has been developed. The model defines 3 maturity levels for each mitigation strategy. Details of the ACSC maturity model have been included in the toolkit to assist Entities implementing the blueprint with any internal verification they may choose to perform. 

* Maturity Level One: partly aligned with intent of mitigation strategy
* Maturity Level Two: mostly aligned with intent of mitigation strategy
* Maturity Level Three: fully aligned with intent of mitigation strategy

As a baseline, the ACSC recommends organisations aim to reach maturity level 3 for each of the mitigation strategies within the Essential Eight Maturity Model. Some organisations are constantly targeted by highly skilled adversaries, or otherwise operate in a higher risk environment. These organisations may require additional mitigation strategies, which are designed to mitigate specific threat vectors that adversaries are known to be using against them.

Detailed maturity requirements for each control have been provided from the next section of the toolkit.

## Context and scope constraints

The particular mission, work and subsequent risk profile of each entity will affect how the blueprint is and should be implemented. Entities should consider their ICT needs and any unique features of their ICT environment in their approach to conducting this assessment. As such, it should be noted that this toolkit provides generalised advice which is not tailored to any specific entity. Therefore, particular steps may not be applicable to specific entity circumstances.

### Risk management

The Essential Eight is a compliance driven framework and is not a substitute for risk management or Information Security Manual (ISM) implementation. Risk management should still be carried out with regard to an entity's particular priorities and risk profile. To assist, the ACSC also provides a mapping to the specific ISM controls (link provided in [Appendix](#appendix-related-documents-and-publications) of this document). 

### Post-implementation assessment considerations

The following must be completed prior to performing the described post-implementation assessment steps:

* Blueprint has been deployed according to design
* Blueprint technical configuration, policy, settings and values are as per the relevant DTA provided As-Built As-Configured documentation
* Entity has, at a minimum, a Microsoft E3 level enterprise license

Please note:

* Whether an entity follows the Cloud Native or Hybrid implementation model, agencies may deviate from the blueprint on any technology, licensing requirements, security, platform or design decisions. Where a deviation from blueprint design has occurred, the specific steps detailed in this document may not be applicable to an individual agency's particular technical configuration elements. To assist in these cases, this document also provides links to further Microsoft guidance. All links and assessment guidance is correct at time of writing (Feb 2021).
* Guidance provided here is aligned to the Cloud Native blueprint design variant to provide specific and most fit-for-purpose assessment process steps. Entities following a Hybrid model may need to mix and match elements from the Cloud Native post implementation steps provided and the generalized pre-implementation steps provided, as best suits their particular setup.
* The Intune Console is the preferred method to manage all settings regardless of a cloud native or hybrid implementation. Although a combination of the System Center Configuration Manager (SCCM) Console and Group Policy Objects (GPOs) would be able to achieve the same settings in a hybrid environment, this blueprint does not include SCCM and GPO example configurations due to the level of dissimilarities and per agency customisation in existing SCCM and GPOs configurations across Commonwealth entities.

## Document use

For each Essential Eight mitigation strategy, an overview page is provided that details the specific maturity requirements for each level of maturity. It also provides specific information about how the blueprint design achieves an assessed level of maturity.

Note: For Entities that have not met the target level maturity, the ACSC recommends that they should generally begin by addressing maturity indicators rated ‘0' and work to gradually implement uplifts. Priority ratings for this work should be guided by the particular Entity's risk profile.

Following each Essential Eight mitigation strategy overview page, Pre-implementation Assessment Steps are provided. These detail a generalized approach to retrieving the information required to assess a particular aspect of maturity. This is followed by a table which details questions (maturity indicators) and the possible results, as related to each level of maturity. They are modelled on an organization using operating systems such as Windows Server 2012 and 2016.

Post-implementation Assessment Steps are then provided in a similar format. Where applicable, screenshots, references to design documentation, specific navigation steps and links to Microsoft support documents have been provided to aid in performing the assessment. As with Pre-implementation Assessment Steps, a table of maturity indicators and possible results as related to each level of target maturity is provided. 

Note: Assessment against each of the Pre and Post implementation maturity indicators will produce a numerical value, as per the table. This number should be noted and the lowest value taken as the maturity rating for that control. 

## Pre-requisites

### Pre-implementation

To undertake a pre-implementation assessment in a typical Windows based environment, access to the following will be required:

* A Domain Controller
* A domain joined endpoint device (laptop or desktop)

Along with access to these systems, access to the following accounts will be required:

* A Domain Administrator account
* An account with Local Administrator privileges
* A standard user account

### Post-implementation

To undertake a post-implementation assessment, access to the following will be required:

* Azure Portal
* Microsoft Endpoint Manager
* A domain joined endpoint device (laptop or desktop)

Along with access to these systems, access to the following accounts will be required:

* An Azure Active Directory (AD) account with Global Reader permissions
* A standard user account

## Essential EightMaturity VerificationTool

The Essential Eight Maturity Verification Tool (E8MVT) has been created by the ACSC to assist government entities in testing their systems for maturity against the Essential Eight. The tool provides an approximate maturity score against five out of eight of the Essential Eight mitigation strategies, at varying maturity levels (see below table). Future releases are intended introduce additional levels and tests to identify common security misconfigurations.

| Mitigation strategy                       | Levels assessed | Limitation                                                                                                                         |
| ----------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Application Control                       | 1               | Only assesses the toolbox folder. Organisations can also use the Application Control Verification Tool (ACVT) for thorough checks. |
| Configure Microsoft Office Macro Settings | 1,2             | Reports on all Microsoft Office products, but will note when one is not installed                                                  |
| Patch Applications                        | 1,2,3           | Only assesses for Adobe Flash and Acrobat, Google Chrome, and Mozilla Firefox.                                                     |
| Patch Operating Systems                   | 1,2,3           | Assesses based on most recently installed critical patch.                                                                          |
| User Application Hardening                | 1               | Breakdown per browser. Only assesses browsers that are actually installed.                                                         |

### Suggested use

The E8MVT is an ideal tool for organisations to use in conjunction with the toolkit to assess the maturity of their pre-implementation environments. In particular it may assist organisations to validate findings identifying using the toolkit instructions.

DTA has not tested the E8MVT with the Protected Utility blueprint design and is not currently in a position to recommend for or against its use with post-implementation systems.

### Access

The E8MVT is available from the ACSC Portal. Access to the portal is limited to ACSC Partners. Before using the tool, visit the ACSC Portal to ensure you have the latest version. Organisations should ensure that they understand the risks associated with deploying any tools such as the E8MVT or the ACVT and should avoid running them on critical or in production systems.

## Download the Assurance Toolkit

TODO: Link to the toolkit

## Appendix: Related documents and publications

The ***Australian Government Information Security Manual*** (ISM) assists in the protection of information that is processed, stored or communicated by organisations' systems. It can be found at [https://www.cyber.gov.au/acsc/view-all-content/ism](https://www.cyber.gov.au/acsc/view-all-content/ism).

The ***Strategies to Mitigate Cyber Security Incidents*** complements the advice in the ISM. The complete list of strategies can be found at [https://www.cyber.gov.au/acsc/view-all-content/publications/strategies-mitigate-cyber-security-incidents](https://www.cyber.gov.au/acsc/view-all-content/publications/strategies-mitigate-cyber-security-incidents).

The ***Essential Eight Maturity Model*** complements the advice in the ***Strategies to Mitigate Cyber Security Incidents***. It can be found at [https://www.cyber.gov.au/acsc/view-all-content/publications/essential-eight-maturity-model](https://www.cyber.gov.au/acsc/view-all-content/publications/essential-eight-maturity-model).

### Additional Maturity Material

* [Essential 8 maturity model](https://www.cyber.gov.au/publications/essential-eight-maturity-model)
* [Implementing application whitelisting](https://www.cyber.gov.au/publications/implementing-application-whitelisting)
* [Assessing security vulnerabilities and applying patches](https://www.cyber.gov.au/publications/assessing-security-vulnerabilities-and-applying-patches)
* [Microsoft Office Macro Security](https://www.cyber.gov.au/publications/microsoft-office-macro-security)
* [Hardening Microsoft Windows 10, version 1709, Workstations](https://www.cyber.gov.au/publications/hardening-microsoft-windows-10-build-1709)
* [Essential Eight in Linux Environments](https://www.cyber.gov.au/publications/essential-eight-in-linux-environments)
* [Restricting administrative privileges](https://www.cyber.gov.au/publications/restricting-administrative-privileges)
* [Implementing Multi-Factor Authentication](https://www.cyber.gov.au/publications/multi-factor-authentication)
