---
id: jenkins
title: saucectl with Jenkins
sidebar_label: Jenkins
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These examples can apply to virtually any Jenkins deployment, provided that you already have some existing automated tests, have access to the Jenkins instance, and are either the maintainer or an admin of the target repository.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* [Jenkins Server](https://www.jenkins.io/doc/book/installing/)
* The following permissions in Jenkins:
    * Ability to create and manage credentials
    * Ability to create and manage new pipelines

### Configure Jenkins Credentials

The first step of the integration is to ensure you've added your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as a secret file/text in your Jenkins server.

The easiest way to add credentials to Jenkins is with the UI:

1. Log in to Jenkins.
2. Under **Manage Jenkins**, click **Manage Credentials**.
3. Next to **(global)**, click **Add credentials**.

    <img src={useBaseUrl('img/stt/add_credentials.png')} alt="Add Jenkins Credentials" width="500" />

4. For **Kind**, select **Secret Text**.
5. Enter the following information:
    * Scope: Global
    * Secret: `your-sauce-username`
    * ID: `sauce-username`
    * Description: Sauce Labs Username
6. Repeat the above steps for your Sauce Labs Access Key.

    <img src={useBaseUrl('img/stt/secrets.png')} alt="Jenkins Secrets" width="500" />

    :::note
    For further information on how to store your Sauce Labs credentials in Jenkins, see [Handling credentials](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials).
    :::

### Configure the Jenkins Pipeline

Add the `Jenkinsfile` at the root of your project directory so that Jenkins can detect changes and run `saucectl` accordingly. In the examples below, the `environment` variables are the GitHub secrets configured in Jenkins:

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'Espresso', value: 'espresso'},
    {label: 'XCUITest', value: 'xcuitest'},
  ]}>

<TabItem value="cypress">

```bash reference
https://github.com/saucelabs/saucectl-cypress-example/blob/main/v1/Jenkinsfile
```

</TabItem>
<TabItem value="playwright">

```sh reference
https://github.com/saucelabs/saucectl-playwright-example/blob/main/Jenkinsfile
```

</TabItem>
<TabItem value="testcafe">

```bash reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/main/Jenkinsfile
```

</TabItem>
<TabItem value="puppeteer">

```bash reference
https://github.com/saucelabs/saucectl-puppeteer-example/blob/main/Jenkinsfile
```

</TabItem>
<TabItem value="espresso">

```bash reference
https://github.com/saucelabs/saucectl-espresso-example/blob/main/Jenkinsfile
```

</TabItem>
<TabItem value="xcuitest">

```bash reference
https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/Jenkinsfile
```
</TabItem>
</Tabs>

### Run the Pipeline Tests

Now you can commit these files and Jenkins will detect the new pipeline and launch `saucectl` to run your tests.

For example, if you're using the [Blue Ocean plugin](https://plugins.jenkins.io/blueocean/), your output may look something like this:

<img src={useBaseUrl('img/stt/blue-ocean.png')} alt="GitHub Settings" />
