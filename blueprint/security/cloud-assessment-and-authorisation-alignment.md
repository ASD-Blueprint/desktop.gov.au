---
layout: page
title: Cloud assessment and authorisation alignment
menu: security
download: true
---

The purpose of this document is to provide guidance on how the Protected Utility blueprint developed by the Digital Transformation Agency (DTA) aligns with the [Cloud Security Guidance](https://www.cyber.gov.au/acsc/government/cloud-security-guidance) issued by the Australian Cyber Security Centre (ACSC).

The ACSC's Cloud Security Guidance suite of documents provides advice to organisations, including Government agencies, on how to perform an assessment of a Cloud Service Provider and its cloud services. The guidance aims to enable organisations to make risk-informed decisions on cloud solutions and their suitability to safely handle the organisations data.

This document explains how the three key phases of Cloud Assessment and Authorisation would apply to agencies using the blueprint to introduce a new desktop environment. 

![Figure 1: Three Cloud Assessment and Authorisation phases](/assets/images/security/caa-phases.png)

## Anatomy of a cloud assessment and authorisation

The [Protective Security Policy Framework (PSPF)](https://www.protectivesecurity.gov.au/information/robust-ict-systems/Pages/default.aspx) requires applicable Federal and State Government agencies to secure their ICT systems by applying the controls within the Information Security Manual (ISM). It also requires that a formal risk assessment and authorisation (process occur when an ICT system is being introduced into service.

This authorisation process is articulated in the Anatomy of a [Cloud Assessment and Authorisation](https://www.cyber.gov.au/acsc/view-all-content/publications/anatomy-cloud-assessment-and-authorisation) document issued by the ACSC, which describes the three (3) phases Cloud Consumers (i.e., the organisation or agency who will be deploying the blueprint), should take to assess and accept a cloud service and solution into service. In the context of the blueprint, Microsoft is the Cloud Service Provider (CSP), with Cloud Services being Microsoft products such as Microsoft 365 and Azure.

Whilst the DTA has designed the blueprint to meet the ISM requirements for the classification level of PROTECTED, agencies must still assess for themselves whether the blueprint design meets their own particular security needs and requirements.

![Figure 2: Overview of Cloud System Assessment & Authorisation Process](/assets/images/security/caa-process.png)

### Phase 1: CSP security fundamentals and cloud services assessment

The purpose of Phase 1 is to ensure that security of the CSP and their cloud services are appropriately assessed, and that Cloud Consumers review these assessments to determine if the CSP is appropriate for their security needs and risk tolerances. 

Microsoft and its services used within the blueprint has undergone assessment by an ASD endorsed IRAP assessor. The findings of this assessment are captured within the [Cloud Security Assessment and IRAP Reports](https://servicetrust.microsoft.com/ViewPage/Australia) for Microsoft 365 and Azure available from Microsoft.

Organisations intending to deploy the blueprint are responsible for reviewing these reports to confirm that Microsoft's products and services provide the required level of security. An organisations Authorising Officer (i.e. the individual with the authority to decide if a system can be used within the agency) should formally document this review and eventual decision.

![Figure 3: Phase 1 - Overview of CSP Security Fundamentals and Cloud Service Assessment](/assets/images/security/cca-phase1.png)

### Phase 2: cloud consumer systems assessment authorisation 

During Phase 2, the Cloud Consumer assesses how it has implemented and configured the cloud services assessed in Phase 1 to ensure that it meets the cloud consumer's own security requirements and risk tolerance. 

Phase 2 is when organisations deploying the blueprint must assess whether the design and implementation of the blueprint is acceptable to them. While the blueprint delivers a pre-existing design and supporting documentation which can be leveraged by an agency to efficiently deliver a solution, it is still up to individual organisations to assess and accept that any risks associated with the operation of the blueprint is acceptable.

Organisations are free to develop their own policy on how assessment and authorisation is to take place. It is recommended that organisations capture the findings from Phase 1 and Phase 2a in a Cloud Authorisation Package which includes:

* The Microsoft cloud security assessment reports;
* Any supplementary, new or updated cloud services report (if required); and
* Cloud systems assessments and other documentation developed for the agency's implementation of the blueprint.

The conclusion of Phase 2 is formal approval by the Authorising Officer or their delegate, to operate the system that has been built using the blueprint. 

![Figure 4: Phase 2 - Overview of Cloud Consumer Systems Assessment and Authorisation](/assets/images/security/cca-phase1.png)

### Phase 3: continuous monitoring and assurance

Continuous monitoring provides ongoing situational awareness of evolving information security risks, vulnerabilities, threats, security controls and incidents to provide assessment and assurance of the Cloud Consumer's cloud security posture. This is a responsibility shared between the CSP and cloud consumer.

The blueprint assumes that organisations using it will take on the following responsibilities, including:

* Performing assurance over any changes that could impact the cloud consumer's systems and data to evaluate any additional or changed risks;
* Processing of Microsoft security advisories and how they relate to the ongoing authorisation processes;
* Monitoring of organisation systems and data for indicators of compromise; and
* Re-evaluating and accepting the cloud service when needed.

The blueprint provides an example [Continuous Monitoring Plan](/blueprint/security/continuous-monitoring-plan.html), which contains guidance on how organisations can approach conducting continuous monitoring in partnership with Microsoft. It details a number of technology options embedded within the blueprint design that may help facilitate ongoing monitoring.

![Figure 5: Phase 3 - Overview of Continuous Monitoring and Assurance](/assets/images/security/cca-phase3.png)

