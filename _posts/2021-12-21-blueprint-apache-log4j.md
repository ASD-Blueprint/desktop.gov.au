---
title: The blueprint and Apache Log4j
layout: post
---

The following is an advisory for the recent Apache Log4j vulnerabilities ([CVE-2021-44228](https://logging.apache.org/log4j/2.x/security.html)) identified in December 2021.

## Is the Protected Utility blueprint affected?

No.

The blueprint does not directly make use of Apache Log4j in its implementation of Microsoft 365. It also does not call out any third-party applications that utilise it either.

## Is Microsoft 365 affected?

No.

At this stage, Microsoft 365 has not been identified to be affected. Please visit [Microsoft's response to CVE-2021-44228](https://msrc-blog.microsoft.com/2021/12/11/microsofts-response-to-cve-2021-44228-apache-log4j2/) for a list of affected Microsoft products and services.

## Is there anything we can do to improve our security posture?

Yes!

Defender for Endpoint is part of the blueprint and provides both detection and response capabilities for the Log4j vulnerabilities. This includes both finding vulnerable versions and responding to exploit attempts.

Please follow Microsoft's [guidance on preventing, detecting and hunting for CVE-2021-44228](https://www.microsoft.com/security/blog/2021/12/11/guidance-for-preventing-detecting-and-hunting-for-cve-2021-44228-log4j-2-exploitation/).

Please note Defender for Endpoint requires E5 licensing.

## Deviations from the blueprint

If your implementation of the Protected Utility blueprint differs from our recommendations (eg additional services and applications are used), you will need to assess that your deviations are also not affected by the vulnerabilities.

## Further information

* [ACSC's advisory](https://www.cyber.gov.au/acsc/view-all-content/alerts/critical-remote-code-execution-vulnerability-found-apache-log4j2-library)
