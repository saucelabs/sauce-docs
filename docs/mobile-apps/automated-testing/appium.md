---
id: appium
title: Using Appium for Automated Mobile App Testing
sidebar_label: Using Appium
---

This page is intended to provide you with a quick overview of how Appium works to get started with mobile application testing. For full documentation of Appium, with more examples in popular scripting languages, check out the Appium.io website.


## Overview
Appium was originally developed by Dan Cueller as a way to take advantage of the UIAutomation framework for Apple iOS to run tests against native mobile applications. Using the same syntax as Selenium, it shares similarities with Selenium's ability to automate interaction with a website through a mobile browser. Although Appium can test websites on a mobile device, it is more commonly used for testing native and hybrid mobile applications for both iOS and Android.

Appium Architecture
Appium has a client-server architecture.

Appium Client
includes a set of client libraries for various scripting languages in which you write your test scripts based on the Selenium WebDriver API.
Appium Server
includes a server component, based on node.js, which exposes the WebDriver API. In fact it exposes a superset of the WebDriver API known as the Mobile JSON Wire Protocol.
includes a desktop application, available for both OS X and Windows, that includes everything you need to run Appium bundled in a single package, as well as the ability to inspect elements in running applications.

Appium Desktop Support

The Appium Desktop is currently unsupported by the Appium core team.

The Seven Basic Steps of Testing with Appium
There are seven basic steps in creating an Appium test script for your application under test (AUT):

Set the location of the application (e.g. Sauce Storage, AWS, GitHub, etc.)
Create an Appium driver instance which points to a running Appium server (e.g. the servers on Sauce Labs).
Locate an element within the application (e.g. a login button or link).
Perform an action on the element (e.g. tap the login button).
Anticipate the application response to the action (e.g. successfully logged in)
Run tests and record test results. (e.g. log whether test passed, failed, or returned an error)
Conclude the test (e.g. shut down connection to Sauce Labs)



# Insert Giant table

Full Example with All Steps
The following example includes code for all steps. The example also defines a Java test class Example, and its main method, so that the code can be run.

Java Example

```java
package com.yourcompany;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.appium.java_client.android.AndroidDriver;
import java.net.MalformedURLException;
import java.net.URL;
import junit.framework.Assert;
public class SampleSauceTest {

    public static void  main() throws MalformedURLException {
        desiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("deviceName", "Android GoogleAPI Emulator");
        capabilities.setCapability("platformVersion", "10.0");
        capabilities.setCapability("app", "storage:filename=swag-labs.apk");
        capabilities.setCapability("browserName", "");
        capabilities.setCapability("deviceOrientation", "portrait");
        capabilities.setCapability("appiumVersion", "1.16.0");
        WebDriver driver = new AndroidDriver<WebElement>( new URL("http://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);

        WebElement emailInput = driver.findElement(By.id("fbemail"));
        emailInput.sendKeys("SauceIsAwesome@email.com");
        assertEquals(emailInput.getText(), "SauceIsAwesome@email.com");

        driver.quit();
    }
}

```


## Additional Resources

There are many additional resources available if you want to dive into more detail with Appium and mobile application testing.

Appium Bootcamp by Dave Haeffner and Matthew Edwards
http://appium.io
The official Appium website and documentation
https://youtu.be/1J0aXDbjiUE?list=PLSIUOFhnxEiCODb8XQB-RUQ0RGNZ2yW7d
An introduction to Appium presented by Jonathan Lipps of Sauce Labs and the Appium project given at the 2013 Google Test Automation Conference
https://confengine.com/selenium-conf-2015/proposal/1319/the-mobile-json-wire-protocol
A talk on the mobile JSON wire protocol presented by Jonathan Lipps at the 2015 Selenium Conference
http://stackshare.io/sauce-labs/mobile-automation-with-appium-and-sauce-labs
An in-depth tutorial by Jonathan Lipps covering Appium basics using Ruby and Sauce Labs
