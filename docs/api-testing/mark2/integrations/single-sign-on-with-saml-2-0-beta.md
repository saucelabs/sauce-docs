---
id: single-sign-on-with-saml-2-0-beta
title: "Single Sign On with SAML 2.0 (beta)"
sidebar_label: "SSO / SAML 2.0 (beta)"
keywords:
    - api-testing
    - integrations
    - sso
    - saml2.0
    - beta
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning
This feature is self-hosted/on-premises only
:::

If you are using a self-hosted/on-premises deployment and would like to set up single sign-on (SAML 2,.0) follow the below instructions.

## Step 1: Activate It

Whether you’re using a docker-compose or a Kubernetes deployment, introduce the following environment variable:

```js
Name: samlEnabled Value: 'true'
```

## Step 2: Configure It

The provided `saml/saml.properties` file contains all the configuration keys necessary to the SAML functionality.

* `onelogin.saml2.sp.entityid`: identifies the SP
* `onelogin.saml2.sp.assertion_consumer_service.url`: where the response from idp is returned after an authentication request
* `onelogin.saml2.sp.single_logout_service.url`: where the response from idp is returned after logout request   
* `onelogin.saml2.idp.single_sign_on_service.url`: where the SP will send the Authentication Request  
* `onelogin.saml2.idp.single_logout_service.url`: where the SP will send the logout request   
* `onelogin.saml2.idp.x509cert`: public `x509` certificate of the IdP  

Examples:

```
onelogin.saml2.sp.entityid = apifortress
onelogin.saml2.sp.assertion_consumer_service.url = http://apif.example.com:8080/app/web/login/acs
onelogin.saml2.sp.single_logout_service.url = http://apif.example.com:8080/app/web/login/sls   
onelogin.saml2.idp.entityid = https://app.onelogin.com/saml/metadata/7037e41d-4ab4-417a-b0a2-c4e2f580faf2  
onelogin.saml2.idp.single_sign_on_service.url = https://apifortress.onelogin.com/trust/saml2/http-post/sso/917654
onelogin.saml2.idp.single_logout_service.url = https://apifortress.onelogin.com/trust/saml2/http-redirect/slo/917654
onelogin.saml2.idp.x509cert = -----BEGIN CERTIFICATE-----CERTIFICATE HASH-----END CERTIFICATE-----
```

Further changes can be applied to the expected properties:

* `apifortress.firstname=FIRSTNAME`  
* `apifortress.lastname=LASTNAME`
* `apifortress.mail=MAIL`

In IDP one of MANAGER,DEVELOPER,ANALYST: `apifortress.level=LEVEL`


By altering these configuration keys, you change the **name** of the property that’s being sent by the IDP. As a default, the required properties are:  

**FIRSTNAME,**

**LASTNAME,**

**MAIL,** **and** **LEVEL** (which represents the level of the user within API Fortress and can be one of the following values: **MANAGER, DEVELOPER, or ANALYST.** If the field is not provided, **MANAGER** is assumed.  

The **admin** status can only be set via the API Fortress configuration panel.)  


:::note
There may be other configuration keys to be altered based on the IDP requirements.
:::

## Step 3: Mount It

Mount the provided "saml" directory to the location: `/usr/local/tomcat/webapps/app/WEB-INF/saml`  

If Kubernetes is being used, ConfigMaps will achieve the same result.

## Step 4: Restart API Fortress

Restart the API Fortress dashboard(s).

The login screen will now look like this:

<img src={useBaseUrl('img/api-fortress/2019/10/Screen-Shot-2019-10-14-at-10.18.44-AM.png')} alt="screenshot"/>
