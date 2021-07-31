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

* [Jenkins Server](https://www.jenkins.io/doc/book/installing/)
* [Sauce Labs Account](https://saucelabs.com/sign-up)
* The following permissions in Jenkins:
    * ability to create and manage credentials
    * ability to create and manage new pipelines

### Configure Jenkins Credentials

The first step of the integration is to ensure you've added your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as a secret file/text in your Jenkins server (Not sure where to find these? They're [here](https://app.saucelabs.com/user-settings)).

The easiest way to add credentials to Jenkins is with the UI:

* Log in to Jenkins
* Go to __Manage Jenkins > Manage Credentials__
* Next to (Global), select __Add credentials__

    <img src={useBaseUrl('img/stt/add_credentials.png')} alt="Add Jenkins Credentials" width="500" />

* For __Kind__, select __Secret Text__
* Enter the following information:
    * Scope: Global
    * Secret: 'your-sauce-username'
    * ID: 'sauce-username'
    * Description: Sauce Labs Username
* Repeat the above steps for your Sauce Labs Access Key

    <img src={useBaseUrl('img/stt/secrets.png')} alt="Jenkins Secrets" width="500" />

    :::note
    For further information on how to store your Sauce Labs credentials in Jenkins, visit [the Jenkinsfile documentation](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials).
    :::

### Configure the Jenkins Pipeline

Add the `Jenkinsfile` at the root of your project directory so that Jenkins can detect changes and run `saucectl` accordingly.
In the examples below, the `environment` variables are the GitHub secrets configured in Jenkins:

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
https://github.com/saucelabs/saucectl-cypress-example/blob/master/Jenkinsfile
```

</TabItem>
<TabItem value="playwright">

```sh reference
https://github.com/saucelabs/saucectl-playwright-example/blob/master/Jenkinsfile
```

</TabItem>
<TabItem value="testcafe">

```bash reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/Jenkinsfile
```

</TabItem>
<TabItem value="puppeteer">

```bash reference
https://github.com/saucelabs/saucectl-puppeteer-example/blob/master/Jenkinsfile
```

</TabItem>
<TabItem value="espresso">

```bash reference
https://github.com/saucelabs/saucectl-espresso-example/blob/master/Jenkinsfile
```

</TabItem>
<TabItem value="xcuitest">

```bash reference
https://github.com/saucelabs/saucectl-xcuitest-example/blob/master/Jenkinsfile
```
</TabItem>
</Tabs>

### Run the Pipeline Tests

Now you can commit these files and Jenkins will detect the new pipeline and launch `saucetl` to run your tests.

For example if you're using the [Blue Ocean plugin](https://plugins.jenkins.io/blueocean/), your output may look something like this:

<img src={useBaseUrl('img/stt/blue-ocean.png')} alt="GitHub Settings" />
