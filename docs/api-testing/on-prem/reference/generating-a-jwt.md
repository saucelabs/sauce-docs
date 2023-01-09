---
id: generating-a-jwt
title: Generating a JSON Web Token
sidebar_label: Generating a JSON Web Token
keywords:
- api
- api-fortress
- jwt
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

In some occasions, you may be required to generate a JSON Web Token. While API Fortress does not currently have a specific component for it, this result can be achieved by using an helper class.

## Creating a JWT

1. Create a SET component, with "Language" a variable mode.
2. Introduce the following code Groovy in the component

   ```js
   def claims = ['foo':'bar','dot':'com']

   def subject = 'my subject'

   def secret = '52535d535c515d55555'

   return io.jsonwebtoken.Jwts.builder().setClaims(claims).setSubject(subject).signWith(io.jsonwebtoken.SignatureAlgorithm.HS512,secret).compact()
   ```

3. The SET variable will now contain a valid JWT, built with the provided data

## Additional Notes

- In this example we declare the claim, the subject and the secret right within the script. This is for demonstration purposes, all the three items may come from the scope of the test, the data sets or the vault.
- The scripts uses HS512 as signature algorithm. All the possible options are: NONE, HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512, PS256, PS384, PS512
