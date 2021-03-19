---
id: authorization-simple-oauth-etc
title: "Dealing with Authentication (Simple, OAuth, etc.)"
sidebar_label: Dealing with Authentication
keywords:
    - api-testing
    - how-to
    - oauth
    - simple
    - authentication
    - 2 legged
    - 2-leg
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

API Fortress can handle nearly any authorization scheme. Below, we provide some guides on simple ways to work with the most common authorization methods. If it requires usage of a long lasting token, see [here](https://apifortress.com/doc/using-long-lasting-tokens/) for more information.

## Simple Authorization

1. Enter the visual composer
2. Click Add Component
3. Click `POST` (or whatever REST method the authentication server is expecting)
4. Enter details and then click __Add Authentication__
5. Choose __Basic__
6. Enter the __Username__ and __Password__

<img src={useBaseUrl('img/api-fortress/2017/01/basic_auth.gif')} alt="Basic Auth Gif"/>

The header information is automatically encoded and entered for you!

<img src={useBaseUrl('img/api-fortress/2017/01/2.png')} alt="2.png"/>

Next, we parameterize the token that we receive in the response.

1. First, select the Set (variable) component
2. Next, enter the name that you would like to use for the variable as _Var_
3. Enter the value of the token itself as _Value_
4. Add a_Comment_ component with the previously set variable as the _Value_ to see the token logged!

From here, we can use the token in follow-on prompts by referencing its variable name.

<img src={useBaseUrl('img/api-fortress/2017/01/parameterize.gif')} alt="parameterize.gif"/>

### Video Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/5mCuYqkhuKo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Simple Authorization from the HTTP Client

Using the HTTP composer requires encoding the Username and Password yourself.

1. Click on Tools > HTTP Client
2. Click on Tools > Gadgets
3. Choose base64-encode
4. Type in the username and password like this with the semicolon "username:password"
5. Click encode
6. Copy the generated code (our example is VXNlcm5hbWU6UGFzc3dvcmQ=)
7. Now use that generated code in your call. Specifically as a Header, and use the word "Basic" under key, and the generated code (VXNlcm5hbWU6UGFzc3dvcmQ=) for value.

<img src={useBaseUrl('img/api-fortress/2017/01/http.gif')} alt="http.gif"/>

That's it! The call should work now. If not feel free to send us a message at support@apifortress.com!

## OAuth/Token Exchange

1. Enter the visual composer
2. Click Add Component
3. Click POST (or whatever REST method the authentication server is expecting)
4. Enter details and add parameters or POST body
5. In our example its a POST body with username and password  
      
    <img src={useBaseUrl('img/api-fortress/2020/02/post.gif')} alt="post.gif"/>
  

Next, we parameterize the token that we receive in the response.

1. First, select the Set (variable) component
2. Next, enter the name that you would like to use for the variable as _Var_
3. Enter the reference to the token from the previous payload as _Value_
4. Add a _Comment_ component with the previously set variable as the _Value_ to see the token logged!
5. From here, we can use the token in subsequent API calls by referencing its variable name.

<img src={useBaseUrl('img/api-fortress/2020/02/vsnew.gif')} alt="vsnew.gif"/>
