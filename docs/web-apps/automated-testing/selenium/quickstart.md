---
id: quickstart
title: Selenium Quickstart
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get up and running quickly with your first Selenium WebDriver automated test on the Sauce Labs cloud.

* Don't have Selenium tests, but want to try? The Selenium Quickstart Java Project includes a sample project structure, working configuration specifications, and sample Java tests so you can get up and running in less than 10 minutes using the instructions on this page!
* Already have Selenium tests to run? Take advantage of the Sauce Labs cloud to test on thousands of desktop and mobile browser/OS combinations and maximize your digital confidence.

The examples below run Selenium web tests on a Chrome browser, using Java. To view examples that use other browsers and programming languages, see our [Selenium on Sauce Labs](/web-apps/automated-testing/selenium) and [Selenium 4 Documentation](/web-apps/automated-testing/selenium/selenium4/).


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Download [Google Chrome](https://www.google.com/chrome/).
* Have [Git](https://git-scm.com/downloads) and [GitHub](https://docs.github.com/) set up.
* An integrated development environments (IDE). For the exercises below, we recommend [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/) or [Visual Studio Code](https://code.visualstudio.com/download). IDEs incorporate all of the tools needed for developing and running code &#8212; text editor, terminal, debugging console, and more.


## Basic Selenium Test
This is a simple browser test that uses Selenium to navigate to our [Sauce Labs demo site](https://www.saucedemo.com). The Selenium Quickstart Java Project contains all files necessary to execute a web app test.

### Step 1: Clone the Sample Project
This will clone the project to your machine, and set up your test environment and dependencies.

From your terminal, clone the [Selenium Quickstart Demo Project](https://github.com/saucelabs-training/quickstart-selenium-java) repository to your machine's [home directory](https://en.wikipedia.org/wiki/Home_directory).
   ```bash
   git clone https://github.com/saucelabs-training/quickstart-selenium-java.git
   ```

Or, if you're using an IDE, such as Visual Studio Code or IntelliJ, open the **quickstart-selenium-java** project. The test file is called **SauceTest.java**.


### Step 2: Run Test
From your terminal, execute the test by running:
```bash
mvn test
```

Or, if you're using an IDE, open the `quickstart-appium-java` project you cloned in step 1. Your IDE may ask if you want to enable Java annotation; you can accept this. Next, right-click on the test file (**SauceTest.java**) and choose **Run**.


### Step 3: View Test Results on Sauce Labs
The expected response is a session confirmation message and hyperlink that will take you to your test in progress and [results](/test-results/viewing-test-results/) on Sauce Labs.<br/><img src={useBaseUrl('img/selenium/basic-testresults.png')} alt="basic-testresults" />


## Selenium WebDriver Test

In this Selenium test, you'll automate WebDriver to open and close a Chrome browser window.

### Step 1: Clone Project
From your IDE's terminal, clone the [Sauce Labs Selenium Training](https://github.com/saucelabs-training/advanced-selenium) repository to your home directory.
  ```bash
  git clone https://github.com/saucelabs-training/advanced-selenium.git
  ```

### Step 2: Download Dependencies
This quickstart test utilizes the Java Development Kit (JDK) ([download here](https://www.oracle.com/java/technologies/downloads/#java8)), which is required to compile and execute Java code, and Selenium Java bindings ([download here](https://www.selenium.dev/downloads/)), which are required for Selenium-Java compatibility.


### Step 3: Import Dependencies

1. From your IDE, open the **advanced-selenium** project. The test file is located under **src/test/java/com/saucelabs/advancedselenium/SeleniumTest.java**. <br/><img src={useBaseUrl('img/selenium/selenium-test.png')} alt="selenium-test" />
2. If it's your first time ever opening a Java project, your IDE will prompt you to set up your JDK. You'll need to:
   * Click on the prompt.<br/><img src={useBaseUrl('img/selenium/jdk-setup.png')} alt="jdk-setup" width="400"/><br/>
   * Provide the location where you downloaded the JDK. Some IDEs will detect and find the path for you, so all you have to do is select it.<br/><img src={useBaseUrl('img/selenium/jdk-config.png')} alt="jdk-config" width="500"/>

:::tip
If you're new to IDEs, here are some tips:
<details><summary>OpenJDK distributions</summary>
IDEs also give you the option to download open source JDK distributions (e.g., Amazon Corretto, Oracle OpenJDK, and Eclipse Temurin) as an alternative to downloading JDK to your local machine. This works, but will only download it this specific project. If you're setting up a permanent developer environment that will be used beyond this Quickstart, you should download the JDK locally.<br/><img src={useBaseUrl('img/selenium/jdk-config-alt.png')} alt="jdk-config" width="500"/>
</details>

<details><summary>Extensions and plugins</summary>
If your IDE recommends additional extensions and plugins for Java and Maven, such as the ones listed below, you should accept them since they may contain more dependencies needed to run a test.<br/><img src={useBaseUrl('img/selenium/java-webdriver-dependencies.png')} alt="java-webdriver-dependencies" width="350"/>
</details>
:::

### Step 4: Run Test
Right-click on the **SeleniumTest.java** test file and run it.<br/><img src={useBaseUrl('img/selenium/run-selenium.png')} alt="run-selenium" />

### Step 5: View Test Results
You should see a Chrome browser window pop up and then disappear. Your results will show confirmation that ChromeDriver started successfully, along with a confirmation message (`Process finished with exit code 0`):<br/><img src={useBaseUrl('img/selenium/successful-test.png')} alt="Successful test results" />

This concludes the test! If you're feeling ambitious, proceed to the next section to practice using additional common commands.


### Extra Credit (Optional)

In this exercise, you'll be running the same **SeleniumTest.java** test, but with a few more actions this time. You'll automate WebDriver to open a Chrome browser window, navigate to our [demo site](https://www.saucedemo.com), log in with a username and password, maximize the browser window, then close the browser window.

1. Copy and paste the below code into the **SeleniumTest.java** test file, overwriting the previous test.
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
2. Save your changes.
3. Run revised test.

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


## More Information

* [Running Selenium on Sauce Labs](/web-apps/automated-testing/selenium/): learn additional Selenium commands, strategies, and recommended best practices.
* [Sauce School | Selenium Java Course](https://training.saucelabs.com/SeleniumJava/index.html)
* [Sauce Training | W3C Code Examples](https://github.com/saucelabs-training/w3c-examples)
* [Sauce Labs Language Bindings](https://opensource.saucelabs.com/sauce_bindings/)
* [Java SE 8 Documentation](https://docs.oracle.com/javase/8/)
