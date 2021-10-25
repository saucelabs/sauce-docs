---
id: update-input
title: Update Input
sidebar_label: Update Input
keywords:
    - api-testing
    - how-to
    - update-input
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The  _update input_ component allows you to persist a variable defined inside of the test so that the value will be accessible outside the current scope of the test.

<img src={useBaseUrl('img/api-fortress/2020/10/updateComponent.jpg')} alt="updateComponent.jpg" />

<img src={useBaseUrl('img/api-fortress/2020/10/updateInput.jpg')} alt="updateInput.jpg" />

Usually, the component is used in conjunction with the _set variable_ component. First, we set a variable. Then, we make it available outside of the current test with the _update input_ component.

We pass the _update input_ component the name of the variable that we need to persist outside of the test. The component will first try to update a variable of the same name in the current input set. If that doesn't exist, it will search for a global variable of the same name. If there is no global variable of the same name, it will check the vault. If the variable doesn't exist there, it will create one with the same name.

:::caution **IMPORTANT!**: 
The _update input_ component works only _outside_ of the composer. That is to say, it will only function when a test is executed from the Test List, the Scheduler, or via the API.
:::

<img src={useBaseUrl('img/api-fortress/2020/10/setUpdate.jpg')} alt="setUpdate.jpg" />

In the image above, after calling the login endpoint, we have created a variable called _access_token_ with the _set var_ component. Then, we have updated the value with the _update input_ component. In doing so, the value of the variable will persist throughout and the value can be used in follow-on tests.
