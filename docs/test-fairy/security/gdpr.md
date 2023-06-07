---
id: gdpr
title: GDPR
sidebar_label: GDPR
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/Security/GDPR.html

https://github.com/testfairy/docs/blob/master/docs/610_Security/500_GDPR.md

The EU General Data Protection Regulation (GDPR) was designed to harmonize data privacy laws across Europe, to protect and empower all EU citizens data privacy and to reshape the way organizations across the region approach data privacy.

Following these regulations, here are some answers to your questions:

### Can TestFairy provide a GDPR Compliant service?

Yes. TestFairy can provide a GDPR compliant service to customers on a Private Cloud or On Premise instalaltions. Please contact us for more details.

### Can TestFairy Provide full Transparency?

Yes. TestFairy end-users are ensured that their personal data is only used by TestFairy for legitimate purposes, meaning for the purpose intended by the developers who use our platform. We do not and will never sell, transfer or otherwise harm your personal data, and make sure it is only used via our services.

### Can TestFairy end-users see their sessions?

Yes. On a Private cloud or on an on-prem installation, it is possible for companies to allow their end-users to see their recorded sessions. This requires the developer to identify the sessions, by using the SDK function [setUserId](https://docs.testfairy.com/SDK/Identifying_Your_Users.html).
Users will only be able see their sessions by logging into TestFairy via their desktop browser. At the moment mobile view is not supportd.

### Can TestFairy Users request to delete their sessions?

Yes. On a Private cloud or on an on-prem installation, it is possible for companies to allow their end end-users to request to the delete their sessions. Deletion request is done by clicking on the delete button at the top right corner of every session.
The deletion request will be sent to the account owner, who will confirm the deletion.
It is important to mention that the deletion of data is done by the account owner and under his responsibility.

![ alt create-bug](../../img/app/delete-btn.png)

### Can TestFairy end-users see a notifiction explaining what is going to be recorded?

TestFairy requires customers to notify users that they are recorded. This can be done in the app TOS that must be easily accesible and easy to read and understand, and also possible to display a visual dialong (pop up) when the app starts, explaining the user that they are recorded for quality assurance purposes and how they can request to delete their data.
In case of a showing a visual disclaimer, this should be done before calling the function TestFairy.begin.

### Can TestFairy data can be automatically deleted after 30 days?

Yes. TestFairy can automatically delete sessions older than 30 days or any other time perioud required by your company. Deletion is permanent and can not be undone.

### Can the service be hosted in Europe?

Yes. In addition to the US, Private Clouds can be also hosted on AWS in the UK, Germany and France.
