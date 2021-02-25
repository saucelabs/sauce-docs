---
id: dynamic-dates
title: Dynamic Dates
sidebar_label: Dynamic Dates
keywords:
    - api-testing
    - how-to
    - dynamic-dates
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Have you ever needed to pass a future date as part of the request inside of a test? Perhaps as a check-in or check-out date? You could enter it as static value, but that means you would have to periodically update the date as time went on. 

Creating a dynamic date in API Fortress is a simple solution for this sort of situation.

Here's the procedure:

1. First, open the Composer and add a **Set (variable)** 
   
   <img src={useBaseUrl('img/api-fortress/2018/04/setVar.jpg')} alt="setVar.jpg"/>

2. Then, enter the variable name and leave the mode as _String 
   
   <img src={useBaseUrl('img/api-fortress/2018/04/varComp.jpg')} alt="varComp.jpg"/>

3. Lastly, enter the following string in the **Value** field:
   
   ```js 
   ${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-dd')}
   ```
      
   <img src={useBaseUrl('img/api-fortress/2018/04/valueField.jpg')} alt="valueField.jpg"/>

   Let's analyse what this string means:

   * `D.nowMillis()`: returns the current Unix epoch in milliseconds 
   * `D.plusDays()`: returns the provided milliseconds, plus the provided number of days (in our example, we have added 35 days to today's date)
   * `D.format()`: creates a timestamp with the given format, using the current timezone (in our example `yyyy-MM-dd`)
   
   As result, you will have something like `2018-05-15`

You can obtain a past date, starting from today's date with the following string: 

```js
${D.format(D.minusDays(D.nowMillis(),35), 'yyyy-MM-dd')}
```

You can also create a date based on a specified timezone: 

```js
${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-dd','America/New_York')} 
```

The above string create the same date as our first example using New York (EST) as the timezone.

For more details about you can check our [reference page](https://apifortress.com/doc/expression-language-extensions/)
