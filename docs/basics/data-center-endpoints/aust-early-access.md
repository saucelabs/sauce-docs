---
id: aust-early-access
title: Early Access Australian Data Center
sidebar_label: Australian Data Center
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Thanks to a new virtual cloud data center in Australia (Sydney), your testing teams in APAC will benefit from more performant test runs on Sauce Labs, along with improved security and reliability through our best-in-class cloud technology.

:::note
While the functionality that’s currently available for tests run in this region is limited, you also have access to the US West region as part of this trial license; for details, see [Supported Features](#supported-browsers-and-features).
:::

## Getting Started for New Free Trial Customers
If you’re signing up for a new free trial with Sauce Labs, simply select the Australia region as part of your registration process.

Because free trial customers have access to one region, this will be your only option for running tests during the Alpha program.

## Getting Started for Existing Customers
If you have access to a Customer Success Manager through your Sauce Labs license, you can request access to this region. As part of our Alpha release, you can access this region free of charge for 90 days without impacting your concurrency limits in other regions. In return, we ask you to run real test loads and provide feedback, helping us improve our services for you.

## Network Requirements
To run tests on Sauce Labs, outbound communication from your network must be allowed.

Depending on your network configuration, your network administrator may need to add the following Selenium endpoint to your allow list: `https://ondemand.apac-southeast-1.saucelabs.com`

To allow inbound and outbound connections to Sauce Labs Services using IP addresses, use the following IP range(s): `34.87.251.80/28`

## Running Tests in the APAC Region
1. To verify you have access to the new region, **APAC Southeast**, in Sauce Labs, click the data center dropdown.<br/>
  <img src={useBaseUrl('img/aust-early-access.png')} alt="APAC Southeast availability" width="400"/>

2. To run your automated tests, update your Selenium tests to point to the new region by changing the ondemand url during driver creation to `https://ondemand.apac-southeast-1.saucelabs.com`.<br/>
  <img src={useBaseUrl('img/data-center-selenium.png')} alt="Update your Selenium tests" width="400"/>

3. To verify the results, log in to Sauce Labs and select the **APAC Southeast** region.

:::note
During the transition from the alpha to beta programs, our ability to retain historical data, including test results, is limited.
:::

### Supported Browsers and Features
Currently, Sauce Labs does not support macOS or mobile testing for the APAC region. To access the full functionality, use the US West region.

The APAC region currently supports all popular versions of Chrome, Firefox, and Edge. Support of Safari is TBD, based on the future support of macOS (above).  


## Getting Help and Providing Feedback
We want to be there every step of the way to ensure you are successful in this new region. We also greatly value your feedback on ways we can improve our services for you. By enrolling into this alpha program you will gain direct access to our product and engineering teams to both get help and provide feedback.

To tell us more about features that are most important to improve your experience with Sauce Labs, contact [support@saucelabs.com](mailto:support@saucelabs.com) or your CSM.
