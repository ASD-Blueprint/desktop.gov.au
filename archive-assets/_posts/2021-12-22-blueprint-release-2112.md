---
title: Blueprint release 2112
layout: post
---

We are excited to announce the next release of the Protected Utility blueprint (version 2112). Some noteworthy changes from the previous June release include:

* Incorporated the September Information Security Manual (ISM) updates.
* Incorporated October ACSC reference updates (eg Apple iOS, Microsoft Office Hardening, Windows Hardening and more).
* The [Continuous Monitoring Plan](/blueprint/security/continuous-monitoring-plan.html) is more blueprint specific.
* Replaced security baselines to better comply with ACSC hardening guidance.
* [Browser based web advertisement blocking](/blueprint/client-devices.html#web-advertisement-blocking) makes an appearance.
* 2018.4 PSPF labelling update.
* Continued scripting to include sensitivity labels and parts of Exchange Online.
* Consolidated the number of As-Built-As-Configured documents down from 24 to 11 documents.
* Plenty of other changes.

A full list of changes can be found in the release notes on [Github](https://github.com/govau/desktop.gov.au/releases/tag/2112) where you can also [compare with the previous release](https://github.com/govau/desktop.gov.au/compare/2106...2112).

## Essential Eight (E8)

A large part of the release was related to the Essential Eight. After incorporating the July 2021 E8 updates, we turned our focus to expanding the detail and rationale. In this process, we were also able to increase the maturity of ***user application hardening*** from 2 to 3. Additionally, we no longer provide a score for ***regular backups*** as we recognise the need for agencies to implement this based on their unique business continuity requirements.

For full details, head on over to the now standalone [Essential Eight page](/blueprint/essential-eight-maturity.html).

## Patterns

Expanded the website to include a [Patterns](/patterns/) area to house solutions that complement a blueprint Microsoft 365 environment. These patterns are not included in the blueprint's security documentation suite. Patterns do not need to be hosted on our site, we can instead provide a link.

The first pattern provides remote access using Azure Virtual Desktop (AVD). AVD is a PaaS offering that allows administrators to configure, deploy, and manage, scalable flexible solutions. AVD enables administrators to publish full desktops or remote apps. Corporations and departments are able to reduce the number of virtual machines and OS overhead while providing the same resources to users.

## Transition to BAU

As the Program component of Protected Utility completed in June 2021, we have adjusted our website content to reflect this change.

## Feedback

How did we do? Did we forget something important? Help us improve the blueprint by raising a [Github issue](https://github.com/govau/desktop.gov.au/issues).
