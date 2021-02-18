---
id: easy-monitoring
title: Easy Monitoring
sidebar_label: Easy Monitoring
description: "Quick-start instructions on how to set up easy monitoring with API fortress."
---

We suggest creating comprehensive functional tests, and then scheduling those tests as monitors for two reasons:

* First, this method ensures that your monitors validate functional uptime rather than a simple `200 OK` ping. 
* Second, this approach makes it efficient to reuse existing tests. However, we understand that you may simply be looking for a simple monitor that validates that the 200 OK is returned, and performance is acceptable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-RDh1ukLN8w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Follow these steps to quickly create a basic monitor:

1. Login to API Fortress
2. Click _Create New Test_
3. Name the test
4. Click _Compose_ on the far left of the test interstitial page
5. On the platform, close the tutorial wizard and then click the _HTTP Console_ button on the left
6. Enter the API call and click _Send_
7. Click Generate Test
8. Click OK on the first two options, but click _Skip_ on the third ("Create Assertions")
9. The GET call should have been created for you. Now, click _Code View_ at the top right.
10. Paste this code below the GET call:
    
    <assert-is expression="payload\_response.statusCode=&apos;200&apos;" type="integer"/>
    <assert-less expression="payload\_response.metrics.latency" value="350"/> <assert-less expression="payload\_response.metrics.fetch" value="300"/> <assert-less expression="payload\_response.metrics.overall" value="650"/>
    
11. Confirm that the status code is 200, and make sure the latency, fetch (download), and overall timing is below those numbers (in milliseconds). Those are numbers we suggest, but you should adjust as you see fit.
12. Run the test to confirm it works.
13. _Save and Exit_
14. Click _Publish_
15. Click _Schedule_
16. Schedule as you see fit.

Thank you for learning how to use API Fortress in our Quick Start Guide. Please let us know if you have any questions or comments.