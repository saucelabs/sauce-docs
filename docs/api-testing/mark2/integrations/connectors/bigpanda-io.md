---
id: bigpanda-io
title: "Connectors: Big Panda"
sidebar_label: Big Panda
keywords:
    - api-testing
    - integrations
    - bigpanda-io
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

We love making life easier for our customers. That often means helping them unify their tools. [BigPanda](http://bigpanda.io) is one of those great tools that can help with that process, so we made sure to create included them as one of our connectors! To see this doc on their site [click here](https://www.bigpanda.io/docs/display/FAQS/Integrating+with+API+Fortress).  

:::tip Import a Connector
To learn how to import a connector [click here](/api-testing/mark2/integrations/add-new-connector) 
:::

1. Login to your BigPanda account, and click on the Integrations tab, and then on New Integration.
   <img src={useBaseUrl('img/api-fortress/2016/08/step-1.png')} alt="step-1.png"/>
2. Click on Monitoring and then Alerts REST API. 
   <img src={useBaseUrl('img/api-fortress/2016/08/step-2.png')} alt="step-2.png"/>
3. Next enter a name and click on Generate App Key. 
   <img src={useBaseUrl('img/api-fortress/2016/08/step-3.png')} alt="step-3.png"/>
4. Finally, keep the App Key and Authorization code handy for later. 
   <img src={useBaseUrl('img/api-fortress/2016/08/step-4.png')} alt="step-4.png"/>
5. Login to API Fortress and click the gear icon. Then click on Alert Groups. This is where all the connectors are located. 
   <img src={useBaseUrl('img/api-fortress/2016/08/apif-step-1.png')} alt="apif-step-1.png"/>
6. Type in a label (name).
7. Click on the Edit Connectors button, and then on +Connector to this Group. 
   <img src={useBaseUrl('img/api-fortress/2016/08/apif-step-3.png')} alt="apif-step-3.png"/>
8. Scroll down to BigPanda.io. 
   <img src={useBaseUrl('img/api-fortress/2016/08/apif-step-4.png')} alt="apif-step-4.png"/>
9. Remember that App Key and Authorization? Copy and paste them here! 
   <img src={useBaseUrl('img/api-fortress/2016/08/apif-step-5.png')} alt="apif-step-5.png"/>

10. Click the <img src={useBaseUrl('img/api-fortress/2016/08/checkmark.png')} alt="checkmark.png"/> and you are done! All alerts from scheduled events are now being sent to BigPanda.
