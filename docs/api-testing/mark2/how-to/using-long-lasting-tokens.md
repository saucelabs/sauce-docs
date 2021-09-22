---
id: using-long-lasting-tokens
title: Using Long Lasting Tokens
sidebar_label: Using Long Lasting Tokens
keywords:
    - api-testing
    - how-to
    - long-lasting-tokens
---

import useBaseUrl from '@docusaurus/useBaseUrl';

It is common for an authentication system to generate long lasting tokens to perform multiple requests. In API Fortress there are many paths of authenticating that can be taken, but sometimes users prefer the token reuse strategy.


## Goal

In this example we are showing you how to allow a test to store a token for further executions, and refresh it when it’s time. Each test will need to contain this logic, and each token will be bound to the test itself.

Here’s the complete test. Have a quick look at it before proceeding to the steps:

<img src={useBaseUrl('img/api-fortress/2017/01/Screenshot-from-2017-01-12-112555.png')} alt="screenshot.png" />


1. Prepare the input set by adding the _basePath_, _loginPath_, and _dataPath_. Most importantly, add an empty variable for _token_ and _expires_. These items will be updated by the test. 
   
   <img src={useBaseUrl('img/api-fortress/2017/01/1.png')} alt="1.png" />

2. Add an IF component with this logic:
   
   ```js
   !expires || D.nowMillis()>expires.toLong()
   ```
   
   <img src={useBaseUrl('img/api-fortress/2017/01/3.png')} alt="3.png" />

3. Within the IF branch, make the login call. Shown here is a call to the login URL. We are storing the retrieved information in the variable named “_loginPayload_." 
   
   <img src={useBaseUrl('img/api-fortress/2017/01/4.png')} alt="4.png" />

4. Within the IF branch, set the value to _token_ and _expires._ Note that in the value we’re saying: take the current time and add one hour
   
   ```js 
   D.plusHours( D.nowMillis(), 1 )
   ```
   
   <img src={useBaseUrl('img/api-fortress/2017/01/5-1.png')} alt="5-1.png" />

   <img src={useBaseUrl('img/api-fortress/2017/01/6.png')} alt="6.png" />

5. Within the if branch, update the input set. This is a unique feature of API Fortress. By performing this operation, you’re having the test modify itself for the next use by updating the _token_ and the _expires_ variables. By doing so, the token will be available for all tests executions that will happen within an hour, and therefore no login calls will be made. 
   
   <img src={useBaseUrl('img/api-fortress/2017/01/7.png')} alt="7.png" />

   <img src={useBaseUrl('img/api-fortress/2017/01/8.png')} alt="8.png" />

6. After the IF branch, perform the main call. We can reference the previously updated token. 
   
   <img src={useBaseUrl('img/api-fortress/2017/01/call-1.png')} alt="call-1.png" />


## Effects

When running outside the workbench, two subsequent test executions will look like this: 

<img src={useBaseUrl('img/api-fortress/2017/01/9.png')} alt="9.png" />

<img src={useBaseUrl('img/api-fortress/2017/01/10.png')} alt="10.png" />


## Code View

The whole operation might seem a bit annoying to replicate in every test, but the code view and some copy and paste can ease the pain.

:::note 
Keep in mind this is just an example, and the calls are meant to be very simple. 
The following is the code version of the IF branch containing the authentication logic.
:::

```js
<if expression="!expires || D.nowMillis()&gt;expires.toLong()"> 
<comment> <![CDATA[Authentication has to be performed due to expired token]]> </comment> 
<post url="${basePath}${loginPath}" params="[:]" var="loginPayload" mode="json"> 
    <postParam name="username" value="test"/> 
    <postParam name="password" value="test"/> 
</post> 
<set var="token" value="${loginPayload.token}" lang="java"/> 
<set var="expires" value="${D.plusHours(D.nowMillis(),1)}"/> 
<update-input var="token"/> <update-input var="expires"/> 
</if>
```


:::note Additional Notes
Updating input variables won't work when launching a test from within the composer, so the login call will run every time when developing a test. Run the test from outside the composer or schedule the test to see it in action.
:::

## Language Appendix 

* **Negation:** the exclamation mark (`!`) prior to an expression is used as a negation and it means: _when it’s false_, _when it’s empty_, _when it does not exist_. In our example: _!expires_ means when expires is empty. 
* **Logic Or:** the classic double pipe sign ( `||` ). Rarely used in API Fortress except in IF conditions. 
* **`toLong()`:** converts a string to a long number. 
* **`D.<action>()`** an API Fortress language extension that provides date and time manipulation functionalities. Please refer to the [expression language extensions page](/api-testing/mark2/reference/expression-language-extensions) for further details.