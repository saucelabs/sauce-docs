---
id: saving-token-kv
title: Saving a Token in a Key/Value Store
sidebar_label: Saving Tokens in K/V Store
description: Saving a Token in a Key/Value Store
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the common scenarios you can face when you are working with APIs is the authentication. Most of the time you call the endpoint that lets you authenticate and then, use the token in the following calls. Sometimes, there may be cases where you can't call the endpoint every time and you need to save the token in a variable and use it more times. If you have only one test, you can reuse the same token easily. What happens if you need it in more tests inside your project or across the whole organization? The Vault is not the solution because it contains static values and you have to manually update the value every time. Here is when the Key/Value store can help.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
