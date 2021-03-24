---
id: build-from-mashery
title: Build from Mashery
sidebar_label: Build from Mashery
keywords:
    - api-testing
    - integrations
    - mashery
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can now generate a draft an API test from the I/O Docs in your Mashery account!

On the test interstitial page there is a "Build from Mashery" button. Click it, enter the Username, Password and Area ID from your Mashery account.

Area ID can be found when you login to your Mashery account. In the top right under Customer name.

<img src={useBaseUrl('img/api-fortress/2017/03/Screen-Shot-2017-04-06-at-7.00.07-AM.png')} alt="screenshot"/>

<img src={useBaseUrl('img/api-fortress/2017/03/Screen-Shot-2017-04-06-at-7.00.16-AM.png')} alt="screenshot"/>

Choose the I/O Doc you want to use, and then click the lightning bolt.

You can also have API Fortress generate some assertions for you by using the 'magic' tool. From the composer, click the "import the request into the console" button from the top navigation. The HTTP console will open. From there insert the required values and make the call. Finally, click the Magic Wand icon (skip the global/input set generation step) and that's it. An API test is created for you!

From here you can  add more intelligence to the test. Maybe make it an integration test with more calls, or add an IF statement. A lot of options are at your disposal.

<img src={useBaseUrl('img/api-fortress/2017/03/ezgif.com-video-to-gif.gif')} alt="gif"/>
