---
id: automation-getting-started
title: Getting Started with Automated Testing on Sauce Labs
sidebar_label: Getting Started
---

If you have existing tests and want to execute them on the Sauce Labs Cloud, you might only be a few steps away. 

First and foremost, create an account on [Sauce Labs](https://saucelabs.com/sign-up) if you haven't already.

## Selenium or Appium Tests

### Instantiate WebDriver

1. Add the following snippet in your base test code:

```java
public  WebDriver driver = new WebDriver();

private void createSauceDriver(MutableCapabilities capabilities, String methodName) {
    
    //Create a map of capabilities called "sauce:options", which contain the info necessary to run on Sauce
    // Labs, using the credentials stored in the environment variables. Also runs using the new W3C standard.
    MutableCapabilities sauceOpts = new MutableCapabilities();
        sauceOpts.setCapability("username", System.getenv("SAUCE_USERNAME");
        sauceOpts.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY");
        sauceOpts.setCapability("seleniumVersion", "3.141.59");
        sauceOpts.setCapability("name", methodName);
        sauceOpts.setCapability("build", "my-build-name");

    //Assign the Sauce Options to the base capabilities
    capabilities.setCapability("browserName" , System.getenv("BROWSER_NAME");
    capabilities.setCapability("browserVersion" , System.getenv("BROWSER_VERSION");
    capabilities.setCapability("platformName" , System.getenv("PLATFORM_NAME");
    capabilities.setCapability("sauce:options", sauceOptions);

    //Create a new RemoteWebDriver, which will initialize the test execution on Sauce Labs servers
    String SAUCE_REMOTE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    //For EU Data Center use: "https://ondemand.eu-central-1.saucelabs.com/wd/hub";

    //Set driver remote with all capabilities, and also set the sauce session ID
    driver.set(new RemoteWebDriver(new URL(SAUCE_REMOTE_URL, capabilities));
    sessionId.set(((RemoteWebDriver)webDriver.get()).getSessionId().toString());
    String id = ((RemoteWebDriver) driver).getSessionId().toString();
    sessionId.set(id);
}
```

2. Reference the new `driver` in your test code. For example:

```java
public void exampleTest () {
    this.createSauceDriver();
    ...
}
```

### Report the Test Results

Configuring test results to Sauce Labs will depend greatly on the test runner and general test framework you employ. Below are some general steps on how to set your report your test results to Sauce Labs.

```java
public void tearDown (ITestResult result) {
    ((JavascriptExecutor) driver).executeScript("sauce:job-result=" + (result.isSuccess() ? "passed" : "failed"));
    driver.quit();
}
```