---
id: create-dynamic-dates
title: How to Create Dynamic Dates
sidebar_label: Create Dynamic Dates
description: "How you can create dynamic dates for your tests"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Have you ever needed to pass a future date as part of the request inside of a test? Perhaps as a check-in or check-out date? You could enter it as static value, but that means you would have to periodically update the date as time went on.

Creating a dynamic date is a simple solution for this sort of situation.

## Creating a Future Date

Let's see how to do this:

1. First, open the Composer and add a **SET Component**

2. Enter the following:

    ```text
    Var: futureDate   //the variable name
    Variable mode: String  //the type of the variable
    Values: ${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
    ```

    <img src={useBaseUrl('img/api-fortress/2022/04/how-to-set-dates.png')} alt="SET Component"/>


Let's analyze the string mentioned above:

```js
${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
```

* `D.nowMillis()`: returns the current Unix epoch in milliseconds
* `D.plusDays()`: returns the provided milliseconds, plus the provided number of days (in our example, we have added 35 days to today's date)
* `D.format()`: creates a timestamp with the given format, using the current timezone (in our example `yyyy-MM-DD`)

As result, you will have something like `2022-05-15`.

3. Now, you can invoke the variable wherever you want in your test.

## Creating a Past Date

In the same way, you can obtain a past date, starting from today's date, replacing the previous string with the following:

```js
${D.format(D.minusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
```

* `D.minusDays()`: returns the provided milliseconds, minus the provided number of days (in the example, we have subtracted 35 days to today's date)

As result, you will have something like `2022-02-15`.

## Creating a Date with Timezone

You can also create a date based on a specified time zone:

```js
${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD','America/New_York')}
```

* `D.format()`: creates a timestamp with the given format, based on the provided timezone id (in the example, we have created the same date as before but using New York as timezone). 

## Converting a Timestamp in Millis

Do you get a timestamp from a payload response and wants to convert in millis? Here's how you can do it:

```js
${D.parse(1649094357)}
```

* `D.parse()`: parse the provided timestamp and convert it in milliseconds.


## More Information

* [Expression Language Extensions](/api-testing/composer/logical-components/#expression-language-extensions)
