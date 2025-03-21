---
id: smtp-gmail
title: SMTP and Gmail
sidebar_label: SMTP and Gmail
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Connect your App Distribution account to your Simple Mail Transfer Protocol (SMTP), G-suite Gmail service, or private Gmail account to increase deliverability and open rates of email messages sent to system users.

This way, your users get emails from a familiar email address and can reply directly to you. In addition, you are able to track outgoing messages by checking your `Sent Items` folder in your email account.

This option is recommended for all users and is _included in all packages_.
<img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/account-settings-4.png')} alt="account settings"/>

To integrate your Gmail or SMTP Email account, follow the below steps.

## SMTP Integration

1. Click **Add integration** next to the **SMTP Email** option.
2. Add the details in the fields and press **Save SMTP settings**.
   <img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/SMTP-1.png')} alt="SMTP screen"/>

## Gmail Integration

1. Click **Add Integration** next to Gmail option.

2. Click **Authorize Google Apps (Gmail API)**:
   <img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/gmail-1.png')} alt="add integration"/>

3. Select the account you want to use:
   <img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/gmail-2.png')} alt="select account"/>

4. **Allow** App Distribution access to the account:
   <img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/gmail-3.png')} alt="allow access"/>

   You get a **confirmation message** instead of the **Authorize Google Apps (Gmail API)** for successful integration.

   Clicking **revoke** disconnects the integration.
   <img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/gmail-4.png')} alt="confirmation message"/>

5. In the main screen, you see the new Gmail integration in the Active Integrations table:
   <img src={useBaseUrl('/img/testfairy/integrations/smtp-gmail/gmail-5.png')} alt="gmail integration"/>
