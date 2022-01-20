---
id: quickstart
title: Selenium Quickstart
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Get up and running quickly with your first Selenium WebDriver automated test on the Sauce Labs cloud.

The examples below run Selenium tests on the [Sauce Labs demo site](https://www.saucedemo.com) with the Chrome browser and Java programming language. To view examples using other browsers and programming languages, see our [Selenium on Sauce Labs](/web-apps/automated-testing/selenium) and [Selenium 4](/web-apps/automated-testing/selenium/selenium4/) documentation.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Download [Google Chrome](https://www.google.com/chrome/).
* Have Git and [GitHub](https://docs.github.com/) set up.
* An integrated development environments (IDE). For the exercises below, we recommend [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/) or [Visual Studio Code](https://code.visualstudio.com/download). IDEs incorporate all of the tools needed for developing and running code &#8212; text editor, terminal, debugging console, and more.
* Download the [Selenium Java bindings](https://www.selenium.dev/downloads/).
* Download the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/#java8).



## Basic Selenium Test

This is a simple browser test that navigates to the [Sauce Labs demo site](https://www.saucedemo.com) on the Sauce Labs cloud. All Selenium tests, regardless of complexity, follow the same high-level steps in bold below.

#### Set Up Environment, Project, and Dependencies
1. From your terminal, clone the [quickstart-selenium-java](https://github.com/saucelabs-training/quickstart-selenium-java) repository to your home directory.
   ```bash
   git clone https://github.com/saucelabs-training/quickstart-selenium-java.git
   ```
2. Open your IDE, then open the **quickstart-selenium-java** project within your IDE.
   * For Visual Studio Code: **File** > **Open Folder** > **advanced-selenium**
   * For IntelliJ: **File** > **Open** > **advanced-selenium**

#### Input Test Script
3. Double-click on the **SauceTest.java** test to take a look at it.

#### Run Test
4. **Run** your test. Your IDE may ask if you want to enable Java annotation; you can accept this.

#### View Test Results on Sauce Labs
5. The expected response contains a session confirmation message and hyperlink that will take you to your test in progress (and [test results](/test-results/viewing-test-results/)) on Sauce Labs.<br/><img src={useBaseUrl('img/selenium/basic-testresults.png')} alt="basic-testresults" />


## Basic Selenium WebDriver Test

In this Selenium test, you'll automate WebDriver to open a browser window, then close it. This test utilizes the JDK (required to compile and execute Java code) and Selenium Java bindings (required for Selenium-Java compatibility), as mentioned in [What You'll Need](#what-youll-need).

#### Set Up Environment, Project, and Dependencies
1. From your terminal, clone the [Sauce Labs Selenium Training](https://github.com/saucelabs-training/advanced-selenium) repository to your home directory.
  ```bash
  git clone https://github.com/saucelabs-training/advanced-selenium.git
  ```
2. Open your IDE.
3. Open the **advanced-selenium** project in your IDE.
4. If it's your first time opening a Java project, your IDE will prompt you to set up your JDK. First you'll need to click on the prompt.<br/><img src={useBaseUrl('img/selenium/jdk-setup.png')} alt="jdk-setup" width="400"/><br/>

  Then, provide the location where you downloaded JDK. Some IDEs will detect and find the path for you, so that all you have to do is select it.<img src={useBaseUrl('img/selenium/jdk-config.png')} alt="jdk-config" width="500"/>

  IDEs also give you the option to download open source OpenJDK distributions (JDK alternatives) within your project, as seen in the above screenshot. If you're setting up a developer environment that will be used in more than just this Quickstart, we recommend downloading the JDK to your system (whether it's [Java SE Development Kit 8](https://www.oracle.com/java/technologies/downloads/#java8) or any OpenJDK distribution like Amazon Corretto and Eclipse Temurin) and linking to it from your IDE.

  :::note
  If your IDE recommends additional extensions and plugins for Java, Maven, and GitHub, you should accept them since they contain more dependencies needed to run a test. Here's an example of Visual Studio Code extensions downloaded.<br/><img src={useBaseUrl('img/selenium/java-webdriver-dependencies.png')} alt="java-webdriver-dependencies" width="350"/>
  :::


#### Input Test Script
4. Double-click on the **SeleniumTest.java** test to take a look at it.<br/><img src={useBaseUrl('img/selenium/selenium-test.png')} alt="selenium-test" />

#### Run Test
5. Run the **SeleniumTest.java** test.<br/><img src={useBaseUrl('img/selenium/run-selenium.png')} alt="run-selenium" />

#### View Test Results
You should see a Chrome browser window pop up and then disappear. Your results will show confirmation that ChromeDriver started successfully, along with a `Process finished with exit code 0` confirmation message:

<img src={useBaseUrl('img/selenium/successful-test.png')} alt="Successful test results" />


Congrats on running your first Selenium WebDriver test! If you're feeling ambitious, proceed to the next section to practice using some other common commands.


### Extra Credit

In this exercise, you'll be running the **SeleniumTest.java** test again, with some additional actions:
  * Logs in using a username/password
  * Maximizes browser window

For more details, see the notes embedded in the code below.
1. Copy code the below.
  ```java
  package com.saucelabs.advancedselenium;

  import org.openqa.selenium.By;
  import org.openqa.selenium.WebDriver;
  import org.openqa.selenium.chrome.ChromeDriver;

  public class Hello {

      public static void main(String[] args) {
          // Lets WebDriverManager handle drivers
          WebDriverManager.chromedriver().setup();
          // Starts session (opens browser)
          RemoteWebDriver driver = new ChromeDriver();

          // Opens browser with desired URL
          driver.get("https://www.saucedemo.com");
          // Inputs standard_user in username field.
          driver.findElement(By.id("user-name")).sendKeys("standard_user");
          // Inputs secret_sauce in password field
          driver.findElement(By.id("password")).sendKeys("secret_sauce");

          // Clicks the Login button
          driver.findElement(By.id("login-button")).click();

          // maximizes browser window
          driver.manage().window().maximize();

          // Closes browser
          driver.quit();
      }
  }
  ```
  See [Finder Methods](/web-apps/automated-testing/selenium/#finder-methods) to learn about locating id names and other webpage elements.
2. Paste code into the **SeleniumTest.java** file from the previous exercise.
3. Save your changes.
4. Run revised test.


<!---

Resource Selenium commands

### Build Selenium WebDriver test from scratch

### Using ChromeDriver

(what's the benefit to using RemoteWebDriver over ChromeDriver?). All examples up until this point instantiate tests on a RemoteWebDriver. Another option is to download [chromedriver](https://chromedriver.chromium.org/downloads) to your local machine, then point your test script to that.

<Tabs
  defaultValue="RemoteWebDriver"
  values={[
    {label: 'RemoteWebDriver', value: 'RemoteWebDriver'},
    {label: 'Local chromedriver', value: 'Local chromedriver'},
  ]}>

<TabItem value="RemoteWebDriver">

```java
package <package-name>;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class <test-name> {

    public static void main(String[] args) {

        // Let WebDriverManager handle drivers
        WebDriverManager.chromedriver().setup();

        // Start session (opens browser)
        RemoteWebDriver driver = new ChromeDriver();

        // Quit session (closes browser)
        driver.quit();
    }
}
```

</TabItem>
<TabItem value="Local chromedriver">

```java
package <package-name>;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class <test-name> {
	public static void main(String[] args) {

	// Sets the driver executable as chromedriver installed on your local machine.
  System.setProperty("webdriver.chrome.driver", "chromedriver");

	// Initiates your chromedriver
  WebDriver driver=new ChromeDriver();

  driver.get("https://www.saucedemo.com");

  driver.close();

	}
}
```

</TabItem>
</Tabs>
--->

## Next Steps

See [Running Selenium on Sauce Labs](/web-apps/automated-testing/selenium/) to learn more Selenium commands, strategies, and recommended best practices.

One of the most commonly used Selenium commands is the `wait` method. An [_implicit wait_](https://www.selenium.dev/documentation/webdriver/waits/#implicit-wait) instructs WebDriver to pause on a certain step for a defined period of time before throwing an error, while an [_explicit waits_](https://www.selenium.dev/documentation/webdriver/waits/#explicit-wait) instruct WebDriver to pause until the condition you pass it resolves a defined period of time before throwing an error. We generally advise against using implicit waits (learn more [here](/web-apps/automated-testing/selenium/#implicit-waits)).

## More Information

* [Sauce School | Selenium Java Course](https://training.saucelabs.com/SeleniumJava/index.html)
* [Sauce Training | W3C Code Examples](https://github.com/saucelabs-training/w3c-examples)
* [Sauce Labs Language Bindings](https://opensource.saucelabs.com/sauce_bindings/)
* [Java SE 8 Documentation](https://docs.oracle.com/javase/8/)
