---
id: improving-your-metrics
title: Improving Your Metrics
sidebar_label: Improving Your Metrics
keywords:
    - api-testing
    - metrics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The performance of the API can be mission critical in some cases, and cataloging metrics can be as important as collecting them.

The classic approach of creating big tables of HTTP hits with the actual URL being called and its performance is certainly accurate but far from being easy to review because URLs contain IDs and hardly represent what the action was about.

API Fortress, as a default, works in this "classic" (dull?) way, but gives you to possibility to change the "footprint" of requests, based on your organization needs.

To activate this feature you need to add a "config" component to your I/O operation to reconfigure the footprint.

<img src={useBaseUrl('img/api-fortress/2016/02/footprint.png')} alt="footprint"/>

In this example, most of the request remains the same, but the ID value is actually replaced with the static string "\[id\]", therefore making the calls with this pattern equivalent when browsed in the project dashboard.

<img src={useBaseUrl('img/api-fortress/2016/02/metrics.png')} alt="metrics"/>

And this is just one of the approaches. You're virtually free to write the footprints that best fit your needs.
