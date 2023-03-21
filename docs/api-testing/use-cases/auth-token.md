---
id: auth-token
title: Exchanging Token between API calls
sidebar_label: Exchanging Token
description: How to exchange authentication tokens between API calls
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Token-based Authentication API

Company A has an authentication server. This server, when given the proper user credentials, returns an authentication token. This token is required for all other calls throughout the platform’s API environment. Without this first API call, none of the other API calls can work.

1. To get the token, make a `POST` call to the authorization server.

<img src={useBaseUrl('/img/api-testing/int-getting-token.png')} alt="POST request to authentication server" width="600"/>

The request body is the user ID and password. Given proper credentials, the authentication server will return a user token.

<img src={useBaseUrl('/img/api-testing/int-token.png')} alt="The user token" width="400"/>

Use this token to make further calls to the application.

2. Add a `Set (variable)` component by entering/selecting the following in the Composer:

   - Variable (the variable name) - `access_token`
   - Mode (the variable type) - `String`
   - Value - `${authPayload.access_token}`

   <img src={useBaseUrl('/img/api-testing/int-assign-token.png')} alt="Setting the variable"/>

This step takes the `access_token` variable in the `authPayload` response, and sets it as `access_token`; the response body from the original post call was saved to a variable called `authPayload`. The access key for the token is `access_token`, which can be found by calling `authPayload.access_token`.

:::note
The dollar sign and brackets are necessary when referencing variables so that Sauce Labs API Testing knows to interpret what’s between the brackets instead of using it literally.
:::

Variables are used to store data temporarily for a test, but you can use the Sauce Labs API Testing Vault for permanent variables. For more information, see [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault)).

3. Make follow-up calls.

In the following example, the API has a cart function that requires a user token to add items to a cart or view items currently in the cart. Use a `PUT` request to the cart endpoint to update the cart. Use the access token granted by the authentication server to add items to a cart by setting the `token` header to `${access_token}`.

<img src={useBaseUrl('/img/api-testing/int-set-token-header.png')} alt="Setting the token header"/>

You can also reuse access tokens:

<img src={useBaseUrl('/img/api-testing/int-reuse-tokens.png')} alt="Reusing tokens" width="600"/>

<!-- legacy apif -->

https://apifortress.com/doc/authorization-simple-oauth-etc/

<!-- legacy sl -->

https://docs.saucelabs.com/api-testing/on-prem/how-to/authorization-simple-oauth-etc/
