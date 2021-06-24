---
id: about
title: About Sauce Performance
sidebar_label: About
description: Understand how Performance works, when and why you would use it, benefits you gain from it, requirements and restrictions.
---

Front-end performance testing complements your functional testing strategy by helping you gain insight into how quickly and accurately your app renders and becomes interactive, which has proven to have a statistical correlation to revenue.

## Why Use Sauce Performance?

Sauce Performance is a pre-integrated tool within the Sauce portfolio that is available to all users. When incorporated into existing CI/CD workflows, front end performance testing allows you to continuously measure the speed and reliability of your app, thereby ensuring your customers enjoy an optimal experience every time, in every environment. Some specific advantages to using Sauce Performance include:

* Save time and money by testing your application's function and performance in a single testing platform.
* Leverage existing functional test scripts (that are validated and executing well) as a starting point to implement performance test scripts.
* Measure performance alongside your functional tests to identify related failure patterns.
* Test performance earlier in the development cycle, when it's easier to make adjustments that improve your user's experience.
* Eliminate duplication of effort across multiple 3rd party testing platforms.
* Leverage the Sauce Machine Learning algorithm that was trained on your scripts and pages, and was defined using millions of diverse test executions, to set trends, baselines and alerts to indicate a performance regression when you have many tests running continuously.
* Conduct script execution analysis in the same environment used by other team members, where you can share and contrast data to isolate issues.
* Realize faster root cause analysis by using all the metrics and artifacts offered by the Sauce Performance solution.

## Sauce Performance Requirements and Recommendations

Consider the following guidelines to optimize your performance testing implementation. Also review our [Front End Performance Testing Best Practices](https://saucelabs.com/assets/3we4HgHTuTo2MqfslOTPRo/53e1cb42d6d01478c30f4bb3838299eb/Best_Practices_for_Front-End_Performance_Testing_WP.pdf) white paper for more guidance about your performance test strategy.

### Chrome Browser Required

Sauce Performance works in conjunction with Google Lighthouse and must be run on one of the latest 3 versions of the Chrome desktop browser on Windows or MacOS.

### Separating Performance Scripts from Functional Scripts

Capturing all the individual metrics associated with page rendering is more time consuming than evaluating functional behavior. Therefore, we recommend that you keep your performance test suite separate from your functional test suite so the performance data collection process doesn't compromise the efficiency and accuracy of your functional tests.

### Understanding Your Baselines

Baselines are determined by calculating a confidence interval over multiple runs of the same test name for each URL rendered during the test. The confidence interval is calculated to estimate the range of values which are expected in future runs, based on past observed performance. Results outside of the baseline range are statistically unlikely to be observed in the absence of some fundamental change in the application’s performance and should, therefore, be investigated as to root cause before resetting the baseline.

### Using Explicit Page Transitions

Performance metrics are captured for hard and soft page transitions, such as those that are triggered by a navigate command or a click, but some less explicit page transitions, such as programmatic responses, are not captured. For this reason, write your performance testing scripts to trigger hard or soft page transitions for any URL page for which you wish to capture performance metrics. Please file a support ticket if performance metrics for a specific page load in your test are not captured.
