---
id: dynamic-dates
title: Generating Dynamic Dates in Your Tests
sidebar_label: Generating Dynamic Dates
description: How to generate dynamic dates in your test
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You might need to create past or future dates inside your tests, like when you are testing a check-in or check-out date.
Instead of entering dates as static values, which may need to be updated periodically, you can create dynamic dates.

Creating a dynamic date in API Testing is a simple solution for this sort of situation.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Create a Future Date

1. Open the Composer and add a **Set** component.

2. Enter/select the following:

   - Variable (the variable name) - for example `futureDate`
   - Mode (the variable type) - for example `String`
   - Value - for example `${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}`

     <img src={useBaseUrl('/img/api-testing/create-future-date-variable.png')} alt="The SET Variable window"/>

   Here's the meaning of the expression written in the Value field:

   ```js
   ${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
   ```

   - `D.nowMillis()` - Returns the current Unix epoch in milliseconds.
   - `D.plusDays()` - Returns the provided milliseconds, plus the provided number of days (in the example, 35 days were added to today's date).
   - `D.format()` - Creates a timestamp with the given format, using the current timezone (in the example, `yyyy-MM-DD`).

3. Now, you can invoke the variable in your test.

## Create a Past Date

In the same way, you can also create a Past Date (starting from today's date). Follow the steps for [Create a Future Date](#create-a-future-date), but replace the string `D.plusDays()` with `D.minusDays()`:

```js
${D.format(D.minusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
```

- `D.minusDays()` - Returns the provided milliseconds, minus the provided number of days (in the example, 35 days were subtracted from today's date).

## Create a Date with a Time Zone

If you need to create a date based on a specified time zone:

```js
${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD','America/New_York')}
```

- `D.format()` - Creates a timestamp with the given format, based on the provided time zone ID (the example uses the same date as before, but uses `New York` as the time zone).

## Convert a Timestamp in Unix Time in Milliseconds

To convert a timestamp from a payload response to milliseconds:

```js
${D.parse(1649094357)}
```

- `D.parse()` - Parses the provided timestamp and converts it to milliseconds.

For more information about how to play with dates, see the [D Extension](/api-testing/composer/expressions/#d) and [Expression Language Extensions](/api-testing/composer/expressions/#expression-language-extensions) to see the whole extension library.
