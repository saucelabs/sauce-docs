---
id: common-questions
title: Common Questions
sidebar_label: Common Questions
description: Answers commons questions about security and compliance.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## General Questions

### What Data is Ingested into the Backtrace Application and Why?

- Application Debug Symbols - This is required to classify and analyze incoming crash reports & data for the purposes of grouping and rendering them useful to developers.
- Application Crash Data - Backtrace captures crash data, minidumps, and structured error reports, so that engineers and support personnel can query against it and build workflows from that.

### How is Data Protected?

By default data is protected by using TLS protocols to ensure data security during transmission.

Backtrace also offers encryption at rest using 256-bit AES. The private key is not accessible from user-space and the password is never stored in plain-text anywhere. Only key management personnel have access to the password, which is protected with PGP. This is an Enterprise feature.

### What is the Security Review and Approval for the Development Process Prior to Release?

All changes to the Backtrace code are reviewed by several team members and are scrutinized for correctness, performance, and security. These changes then go through regression and integration testing for validation before being published.

### Is a Security Incident Response Plan Formalized?

We are in the process of documenting our internal security incident response plan following the guidelines of [NIST 800-61, Revision 2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf).

### Can Data be Modified to Obscure or Remove Protected Information from Minidumps?

Backtrace provides several facilities for scrubbing data of personally identifiable information (PII). There are mechanisms for both native UNIX core dump formats as well as the minidump format used by Windows, Breakpad and Crashpad.

Data scrubbers provide administrators the ability to remove sensitive data from minidump files submitted to Backtrace before they are committed to disk. Data contained in the dump such as register values, memory and crash attributes is scanned for patterns that may be indicative of personally identifiable information. Note that the data scrubbers will not remove binary data.

`pmodules` allow you to use `ptrace` to develop plug-ins that perform analysis and scrubbing of core dumps client-side before they are submitted to the Backtrace servers.

Administrators can also configure dump and metadata retention policies that will allow data to be removed after a defined period of time.

Data scrubbing, pmodules, and configurable retention policies are Enterprise level features.

### Can SSO or LDAP be Enabled?

Both SSO and LDAP integration are available as Enterprise features.

### Is Backtrace GDPR Compliant?

Per [Article 28 of the GDPR](https://gdpr-info.eu/art-28-gdpr/), Backtrace is a Data Processor. That is, a third party company receiving data from controllers of data, which are on the front lines collecting, managing and housing data.

As a Data Processor, Backtrace ensures end user data collected during the crash reporting process is protected, managed properly and destroyed appropriately throughout the chain of development. Backtrace customers have a host of controls to help ensure compliance with GDPR and corporate data protection policies.

Sauce Labs has provided a [Supplemental EEA+ Privacy Notice](https://saucelabs.com/eea) as part of the [Privacy Policy](https://backtrace.io/privacy-policy) and as an amendment of the [Terms of Service](https://backtrace.io/software-license-agreement). The EEA+ Privacy Notice defines the agreement between Backtrace as the Data Processor and our users or customers as the Data Controller with regard to the processing of personal data.

### Is Backtrace COPPA Compliant?

The [Children’s Online Privacy Protection Act (COPPA)](https://www.ecfr.gov/current/title-16/part-312) is a Federal Trade Commission (FTC) regulation that imposes certain requirements on operators of online services directed to children under 13 years of age.

By default, the Backtrace system does not collect personal information such as names, address, SSN, telephone number, or other contact details. The system may collect data used to identify a specific device that is erroring, however, the data can be scrubbed as needed.

:::note
As a crash and error reporting service, Backtrace provides support for the internal operations of your online service, which allows for the collection of such type of identifier, as per [16 CFR 312.5(c)(7)](<https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312#p-312.5(c)(7)>).
:::

Backtrace provides privacy controls to ensure that you have full control over what data is collected with the crash or error reports, and to ensure that your use of Backtrace is compliant with the COPPA rule. For more information, see [Privacy Control](/error-reporting/security-compliance/privacy-control/).

If you have questions regarding COPPA, see the [Complying with COPPA: Frequently Asked Questions](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions), and consult your legal advisor.

## Questions about Backtrace's Hosted Service

### What Platform Does the Hosted Service Run On?

Hosted services run on Amazon Web Services. The web-based user interface has static assets such as Javascript files and images hosted on the Fastly CDN.

### How Long Does Backtrace Store Data For?

Unless otherwise engaged in a non-standard contract Backtrace will hold crash data (e.g. minidumps) for 90 days and metadata for 365 days.
