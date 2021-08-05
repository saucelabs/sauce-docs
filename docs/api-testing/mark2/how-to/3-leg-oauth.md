---
id: 3-leg-oauth
title: "Automating 3-Legged OAuth"
sidebar_label: "Automating 3-Legged OAuth"
keywords:
    - 3-legged-oauth
    - automation
    - api-testing
    - how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Does your API require 3-leg authentication? With the help of a small helper container you can achieve automation of 3-leg using the API Fortress platform. 

Thanks to the helper, your local machine can help in the automation of your tests logging in using 3-leg auths such as Facebook, Twitter, and Google.

<img src={useBaseUrl('img/api-fortress/2019/07/3LegOAuth_Vertical_v5.png')} alt="3 Legged OAuth"/>

## Overview

1. First let's deploy the helper container, which can be found at the below link: https://github.com/apifortress/3loa

2. Once you have the 3loa folder downloaded, navigate to that folder within a terminal window. Then run the following command to start the 3loa container: "sudo docker-compose up -d"

The 3-leg helper is now live and can be access from API Fortress using the following URL: `http://3loa.apifortress:3000/oauth`

### Example Video

Now that we have that up and running, watch the short video below to learn how to use this in API Fortress to automate your 3-leg OAuth:

<iframe src="https://www.youtube.com/embed/mcghU8KRSfI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

In the example used in the video above, we show how to call the 3loa API with details to execute the authentication and return the access token. Below are some callouts from that example:

## `POST` Body Output
The post body of the API call will need the following details:

* `"username"`: `username` for logging in 
* `"password"`: `password` for logging in 
* `"usernameField"`: `x-path` selector for username field 
* `"passwordField"`: `x-path` selector for password field 
* `"loginButton"`: `x-path` selector for the login button 
* `"authorizeButton"`: `x-path` selector for the authorize button 
* `"authorizationURL"`: `URL` to authorize site
* `"tokenURL"`: `URL` used to get access token

> __NOTE__: The `x-path` selectors will need to match the site used for authorization.

Please note that this is an open source tool if your authorization flow differs from the example provided, you can download the source code of the tool and modify it to achieve the flow needed for your specific flow.
