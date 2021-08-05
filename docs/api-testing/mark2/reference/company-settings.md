---
id: company-settings
title: Company Settings
sidebar_label: Company Settings
keywords:
    - api
    - api-fortress
    - company-settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Company settings page allows the manager(s) of a company to alter global settings such as the users that can access the company, who will receive the notifications etc.

The page can be reached by clicking on the top right icon (gear).

<img src={useBaseUrl('img/api-fortress/2020/13/settings.jpg')} alt="settings.jpg"/>

The page is composed by different sections: Company, Account, Users, Notifications, Alerts Group, API Keys, API Hooks, Big Screen, Shareable. In the **Company** page, you can set the Company Name, the Description and the Time Zone.

<img src={useBaseUrl('img/api-fortress/2020/13/Company.jpg')} alt="Company.jpg"/>

## Time Zone

The **Time Zone** is important because it will be used when you schedule a test: if you schedule a test at 9am and Time Zone is 'America/New York', test will run at 9am New York time, that is different from 9am 'Europe/London'.

At the top of the page, the '**Save changes**' button will make your changes effective.

## Account

In the **Account** page, you can see information about the company:

<img src={useBaseUrl('img/api-fortress/2020/13/newAccount.jpg')} alt="newAccount.jpg"/>


* **Contract**: the contract type of your account. 
* **Monthly Events**: the number of executions so far for the current month. 
* **Monthly API Downloads**: how many times tests downloaded a web service. 
* **Overall documents**: the number of documents generated and still available for consultation.

## Users

The **Users** page allows you to add and remove users to the company account.

<img src={useBaseUrl('img/api-fortress/2020/13/users.jpg')} alt="users.jpg"/>

By clicking '**+ User**' you will be presented a popup:

<img src={useBaseUrl('img/api-fortress/2020/13/newadduser.jpg')} alt="newadduser.jpg"/>

* **e-mail**: the email address of the user you want to add. 
* **Full Name**: the name of the user. 
* **Time Zone**: the Time Zone of the user. 
* **Level**: the permission level of the user: as 'Manager' the user will have access to company settings, tests and analytics. As 'Developer' the user will have access to tests and analytics. As 'analyst' only analytics will be made available.

## Notification

In the **Notification** page, you can add and administer who receives alerts and reports. You can add either an user that has access to the company or an user that does not have access to the company.

### Alert Groups

The **Alerts Groups** section is the higher granularity notification system that includes integration with other software and platforms.

<img src={useBaseUrl('img/api-fortress/2020/13/newdistro.jpg')} alt="newdistro.jpg"/>

## API Keys

The **API Keys** page is useful if you want to use the API. You just need to click the + API Key button to generate a key/secret pair.

<img src={useBaseUrl('img/api-fortress/2020/13/apikey.jpg')} alt="apikey.jpg"/>

<img src={useBaseUrl('img/api-fortress/2020/13/newaddkey.jpg')} alt="newaddkey.jpg"/>

### API Hooks

In the **API Hooks** section you can create the project hook for the v3 API. 

To get started:
 
1. first you need to create a hook for the project you want to interact with by clicking **+ API Hook** button, 
2. then choose the **project** the hook will refer to,
3. then choose a **privileged user** for this hook
4. copy the hook in your **clipboard**. The generated URL will give you the ability to query some resources of the connected project without needing any further authentication, so **mind who you will share it with**. If you feel the url has been **improperly shared**, you can **revoke it** from the page you used to create it.

For all the **update endpoints**, a **JWT token** is required as part of the authorization process and the **authenticating user** has to match the **user selected** while creating the hook.

For details about all the endpoints, please see the documentation here:

[http://docs.apifortressv3.apiary.io/](http://docs.apifortressv3.apiary.io/)

Lastly, two sections allow users to see status page. **Big screens** provides a URL to a real-time status page specifically designed for large screens that refreshes automatically made for internal users (it requires a valid username and password). The **Shareable** section allows you to create a URL for any purpose, such as being embedded in other pages.

For more details about how to Generate a Status Page see [here](/api-testing/mark2/how-to/generate-a-status-page).
