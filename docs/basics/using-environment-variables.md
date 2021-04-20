---
id: using-environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Using Environment Variables for Authentication Credentials
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, which can then be referenced from within your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that will authenticate against a single account.

## What You'll Need
* The **SAUCE_USERNAME** and **SAUCE_ACCESS_KEY** specific to your Sauce Labs account. To find them, log in to Sauce Labs, click **Account**, and then click **User settings**.

## Setting Up Environment Variables on Mac OSX/Linux Systems
1. In a Terminal window, enter **vi ~/.bash_profile**, and then press **return**.
2. Enter **i** to insert text into your profile file.
3. Enter the following code:

```
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your sauce access key"
```
4. Press **esc**.
5. Hold down the **shift** key and press **Z** twice (**[shift]+Z+Z**) to save your file and quit vi.
6. In the Terminal window, enter **source ~/.bash_profile**.

## Setting Up Environment Variables on Windows Systems
1. Click **Start** and then enter **environment variables** in the search field.
3. Click **Edit the system environment variables**.
4. In the **System Properties** box, on the **Advanced** tab, click **Environment Variables**.
5. In the **User variables** section, click **New**.
6. In the **Variable name** field, enter **SAUCE_USERNAME**.
7. In the **Variable value** field, enter your **Sauce username**.
8. Click **OK**.
9. Repeat steps 5-8 to set up the **SAUCE_ACCESS_KEY** variable.

## Referencing Environment Variables in Test Scripts
Once you've set up the environment variables for your credentials, you need to reference them within the test scripts that you want to run on Sauce. You can find examples of test scripts that use environment variables for authentication in the demo directory for each language in the [Sauce Labs Training repo](https://github.com/saucelabs-training) on GitHub.

Below are examples of how to set environment variables in a given language/framework:

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'Python', value: 'python'},
  ]}>

<TabItem value="java">

```js
String sauceUserName = System.getenv("SAUCE_USERNAME");
String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");
```

### JUnit

```js
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

import static org.junit.jupiter.api.Assertions.*;

public class Module2JunitTest {
    private WebDriver driver;

    @Test
    public void shouldOpenSafari() throws MalformedURLException {
        /** Here we set environment variables from your local machine, or IntelliJ run configuration,
         *  and store these values in the variables below. Doing this is a best practice in terms of test execution
         *  and security. If you're not sure how to use env variables, refer to this guide -
         * https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
         * or check junit5-README.md */
        String sauceUserName = System.getenv("SAUCE_USERNAME");
        String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");
        String sauceURL = "https://ondemand.saucelabs.com/wd/hub";

        /**
         * In this section, we will configure our test to run on some specific
         * browser/os combination in Sauce Labs.*/
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("username", sauceUserName);
        capabilities.setCapability("accessKey", sauceAccessKey);
        capabilities.setCapability("browserName", "Safari");
        capabilities.setCapability("platform", "macOS 10.13");
        capabilities.setCapability("version", "11.1");
        capabilities.setCapability("build", "Onboarding Sample App - Java-Junit5");
        capabilities.setCapability("name", "2-user-site");

        /**
         * In this section, we set the Remote WebDriver to run on Sauce Labs, and pass the capabilities.
         * Then we perform some actions on an application.
         * For this script, enter in your application's URL in place of 'https://www.saucedemo.com'. */

        /** If you're accessing the EU data center, use the following endpoint:.
         * https://ondemand.eu-central-1.saucelabs.com/wd/hub
         * */
        driver = new RemoteWebDriver(new URL(sauceURL), capabilities);
        driver.navigate().to("https://www.saucedemo.com");
        //assertTrue(true);
    }

    /**
     * Below we are performing 2 critical actions. Quitting the driver and passing
     * the test result to Sauce Labs user interface.
     */
    @AfterEach
    public void cleanUpAfterTestMethod () {
        ((JavascriptExecutor) driver).executeScript("sauce:job-result=" + ("passed"));
        driver.quit();
    }
}
```

### TestNG

```js
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;

import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.net.URL;

public class Module2TestNGTest {

    private WebDriver driver;

    @Test
    public void shouldOpenSafari() throws MalformedURLException {
        /** Here we set environment variables from your local machine, or IntelliJ run configuration,
         *  and store these values in the variables below. Doing this is a best practice in terms of test execution
         *  and security. If you're not sure how to use env variables, refer to this guide -
         * https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
         * or check testng-README.md */

        String sauceUserName = System.getenv("SAUCE_USERNAME");
        String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");
        String sauceURL = "https://ondemand.saucelabs.com/wd/hub";

        /**
         * In this section, we will configure our test to run on some specific
         * browser/os combination in Sauce Labs.*/
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("username", sauceUserName);
        capabilities.setCapability("accessKey", sauceAccessKey);
        capabilities.setCapability("browserName", "Safari");
        capabilities.setCapability("platform", "macOS 10.13");
        capabilities.setCapability("version", "11.1");
        capabilities.setCapability("build", "Onboarding Sample App - Java-TestNG");
        capabilities.setCapability("name", "2-user-site");

        /**
         * In this section, we set the Remote WebDriver to run on Sauce Labs, and pass the capabilities.
         * Then we perform some actions on an application.
         * For this script, enter in your application's URL in place of 'https://www.saucedemo.com'. */

        /** If you're accessing the EU data center, use the following endpoint:.
         * https://ondemand.eu-central-1.saucelabs.com/wd/hub
         * */
        driver = new RemoteWebDriver(new URL(sauceURL), capabilities);
        driver.navigate().to("https://www.saucedemo.com");
        Assert.assertTrue(true);


    }
    /**
     * Below we are performing 2 critical actions. Quitting the driver and passing
     * the test result to Sauce Labs user interface. */
    @AfterMethod
    public void cleanUpAfterTestMethod(ITestResult result) {
        ((JavascriptExecutor)driver).executeScript("sauce:job-result=" + (result.isSuccess() ? "passed" : "failed"));
        driver.quit();
    }
}
```

</TabItem>

<TabItem value="python">

```js
sauce_username = os.environ["SAUCE_USERNAME"]
sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]
```

### PyTest

```js
import pytest
from selenium import webdriver
import os
from _pytest.runner import runtestprotocol


@pytest.fixture
def driver(request):
    sauce_username = os.environ["SAUCE_USERNAME"]
    sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]
    remote_url = "https://ondemand.saucelabs.com:443/wd/hub"

    desired_cap = {
        'platform': 'Mac OS X 10.13',
        'browserName': 'safari',
        'version': '11.1',
        'build': 'Onboarding Sample App - Python + Pytest',
        'name': '2-user-site',
        'username': sauce_username,
        'accessKey': sauce_access_key
    }

    browser = webdriver.Remote(command_executor=remote_url, desired_capabilities=desired_cap)
    yield browser
    browser.quit()


# Here is our actual test code. In this test we open the saucedemo app in chrome and assert that the title is correct.
def test_should_open_chrome(driver):
    # Substitute 'http://www.saucedemo.com' for your own application URL
    driver.get("https://www.saucedemo.com")
    actual_title = driver.title
    expected_title = "Swag Labs"
    assert expected_title == actual_title
```

### unittest

```js
import unittest
import os
from selenium import webdriver

sauce_username = os.environ["SAUCE_USERNAME"]
sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]
remote_url = "https://ondemand.saucelabs.com:443/wd/hub"

class Module2Test(unittest.TestCase):

    def setUp(self):
        desired_cap = {
            'platform': 'Mac OS X 10.13',
            'browserName': 'safari',
            'version': "11.1",
            'build': 'Onboarding Sample App - Python + UnitTest',
            'name': '2-user-test',
            'username': sauce_username,
            'accessKey': sauce_access_key
        }
        self.driver = webdriver.Remote(command_executor=remote_url, desired_capabilities=desired_cap)

    def test_should_open_chrome(self):
        # Substitute 'http://www.saucedemo.com' for your own application URL
        self.driver.get("https://www.saucedemo.com")
        assert ("Swag Labs" in self.driver.title)

    def tearDown(self):
        if self.driver.title == 'Swag Labs':
            self.driver.execute_script('sauce:job-result=passed')
        else:
            self.driver.execute_script('sauce:job-result=failed')
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
```

</TabItem>
</Tabs>
