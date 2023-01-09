---
id: quickstart
title: Selenium Quickstart
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get up and running quickly with your first Selenium WebDriver automated test on the Sauce Labs cloud.

- Don't have Selenium tests, but want to try? Our examples below include sample project structures, Java tests, and working configuration specifications, so you can get up and running in less than 10 minutes using the instructions on this page!
- Already have Selenium tests to run? Take advantage of the Sauce Labs cloud to test on thousands of desktop and mobile browser/OS combinations and maximize your digital confidence.

The examples below are written in Java and run Selenium web tests on a Chrome browser. You can use a CLI terminal or an IDE, such as [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/) or [Visual Studio Code](https://code.visualstudio.com/download). IDEs incorporate all of the tools needed for developing and running code &#8212; text editor, terminal, debugging console, and more.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
- Download [Google Chrome](https://www.google.com/chrome/).
- Have [Git](https://git-scm.com/downloads) and [GitHub](https://docs.github.com/) set up.

## Basic Selenium Test

This is a simple browser test that uses Selenium to navigate to our [Sauce Labs demo site](https://www.saucedemo.com). The Selenium Quickstart Java Project contains all files and dependencies needed to execute a web app test.

### Step 1: Clone Sample Project

<Tabs
  defaultValue="CLI"
  values={[
  {label: 'CLI', value: 'CLI'},
  {label: 'VS Code', value: 'VS Code'},
{label: 'IntelliJ', value: 'IntelliJ'},
  ]}>

<TabItem value="CLI">

1. Go to your machine's home directory.

```bash
cd ~
```

2. Clone the Selenium Quickstart Java Project.

```bash
git clone https://github.com/saucelabs-training/quickstart-selenium-java.git
```

3. Go to the project.

```bash
cd quickstart-selenium-java
```

</TabItem>
<TabItem value="VS Code">

1. Open VS Code and click **Clone Git Repository**.<br/><img src={useBaseUrl('img/selenium/vscode-setup1.png')} alt="Run test with IntelliJ" width="300" />
2. Enter the Selenium Quickstart Java Project URL (https://github.com/saucelabs-training/quickstart-selenium-java.git) and click **Clone from URL**.<br/><img src={useBaseUrl('img/selenium/vscode-setup2.png')} alt="Run test with IntelliJ" />

</TabItem>
<TabItem value="IntelliJ">

1. Open IntelliJ and click **Get from VCS**.<br/><img src={useBaseUrl('img/selenium/intellij-setup1.png')} alt="Run test with IntelliJ" />
2. Enter the Selenium Quickstart Java Project URL (https://github.com/saucelabs-training/quickstart-selenium-java.git) and click **Clone**.<br/><img src={useBaseUrl('img/selenium/intellij-setup2.png')} alt="Run test with IntelliJ" />

</TabItem>
</Tabs>

### Step 2: Run Test

<Tabs
  defaultValue="CLI"
  values={[
  {label: 'CLI', value: 'CLI'},
  {label: 'VS Code', value: 'VS Code'},
{label: 'IntelliJ', value: 'IntelliJ'},
  ]}>

<TabItem value="CLI">

Run the following code to execute your test.

```bash
mvn test
```

</TabItem>
<TabItem value="VS Code">

Right-click on the test file (**SauceTest.java**) and click **Run Java**.<br/><img src={useBaseUrl('img/selenium/vscode-run.png')} alt="Run test with VS Code" />

</TabItem>
<TabItem value="IntelliJ">

Right-click on the test file (**SauceTest.java**) and click **Run 'SauceTest'**.<br/><img src={useBaseUrl('img/selenium/intellij-run.png')} alt="Run test with IntelliJ" />

</TabItem>
</Tabs>

### Step 3: View Test Results

<Tabs
  defaultValue="CLI"
  values={[
  {label: 'CLI', value: 'CLI'},
  {label: 'VS Code', value: 'VS Code'},
{label: 'IntelliJ', value: 'IntelliJ'},
  ]}>

<TabItem value="CLI">

You should see a session confirmation message like this. Copy and paste the **Test Job Link** into your browser to see your test results on Sauce Labs.<br/><img src={useBaseUrl('img/selenium/basic-testresults.png')} alt="basic-testresults" />

Once you get to the **Test Results** page, click on your test to view its details.<br/><img src={useBaseUrl('img/selenium/test-results-vdc.png')} alt="basic-testresults" />

</TabItem>
<TabItem value="VS Code">

You should see a session confirmation message like this. Click on the **Test Job Link** to see your test results on Sauce Labs.<br/><img src={useBaseUrl('img/selenium/vscode-results.png')} alt="basic-testresults" />

Once you get to the **Test Results** page, click on your test to view its details.<br/><img src={useBaseUrl('img/selenium/test-results-vdc.png')} alt="vscode-results" />

</TabItem>
<TabItem value="IntelliJ">

You should see a session confirmation message like this. Click on the **Test Job Link** to go to your test results on Sauce Labs.<br/><img src={useBaseUrl('img/selenium/intellij-results.png')} alt="basic-testresults" />

Once you get to the **Test Results** page, click on your test to view its details.<br/><img src={useBaseUrl('img/selenium/test-results-vdc.png')} alt="basic-testresults" />

</TabItem>
</Tabs>

## Selenium WebDriver Tests

In this Selenium test, you'll automate WebDriver to open and close a Chrome browser window. For this section, you'll need an IDE, such as IntelliJ or Visual Studio Code.

### Step 1: Clone Project

<Tabs
  defaultValue="VS Code"
  values={[
  {label: 'VS Code', value: 'VS Code'},
{label: 'IntelliJ', value: 'IntelliJ'},
  ]}>

<TabItem value="VS Code">

1. Open VS Code and click **Clone Git Repository**.
2. Enter the Sauce Labs Advanced Selenium Training Project URL (https://github.com/saucelabs-training/advanced-selenium.git) and click **Clone from URL**.

</TabItem>
<TabItem value="IntelliJ">

1. Open IntelliJ and click **Get from VCS**.
2. Enter the Sauce Labs Advanced Selenium Training Project URL (https://github.com/saucelabs-training/advanced-selenium.git) and click **Clone**.

</TabItem>
</Tabs>

### Step 2: Download Dependencies

This quickstart test utilizes the Java Development Kit (JDK) ([download here](https://www.oracle.com/java/technologies/downloads/#java8)), which is required to compile and execute Java code, and Selenium Java bindings ([download here](https://www.selenium.dev/downloads/)), which are required for Selenium-Java compatibility.

### Step 3: Import Dependencies

If it's your first time ever opening a Java project, follow the steps below; if not, you can skip this.

1. Your IDE will prompt you to set up your JDK. You'll need to click on the prompt.<br/><img src={useBaseUrl('img/selenium/jdk-setup.png')} alt="jdk-setup" width="400"/><br/>
2. Provide the location where you downloaded the JDK. Some IDEs will detect and find the path for you, so all you have to do is select it.<br/><img src={useBaseUrl('img/selenium/jdk-config.png')} alt="jdk-config" width="500"/>

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

Right-click and run the test file, **SeleniumTest.java**.<br/><img src={useBaseUrl('img/selenium/run-selenium.png')} alt="run-selenium" />

### Step 5: View Test Results

You should see a Chrome browser window pop up and then quickly close. Your results will show a confirmation that ChromeDriver started successfully.<br/><img src={useBaseUrl('img/selenium/successful-test.png')} alt="Successful test results" />

This concludes the test! If you're feeling ambitious, proceed to the next section to try out some additional common Selenium commands.

### Extra Credit (Optional)

In this exercise, you'll be running the same **SeleniumTest.java** test, but with a few more actions this time. You'll automate WebDriver to open a Chrome browser window, navigate to our [demo site](https://www.saucedemo.com), log in with a username and password, maximize the browser window, then close the browser window.

1. Copy and paste the below code into the **SeleniumTest.java** test file, overwriting the previous test.

```java
package com.saucelabs.advancedselenium.saucedemo.tests;

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

See [Finder Methods](/web-apps/automated-testing/selenium/#finder-methods) to learn about locating id names and other webpage elements. 2. Save your changes. 3. Run revised test.

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

- [Running Selenium on Sauce Labs](/web-apps/automated-testing/selenium/): learn additional Selenium commands, strategies, and recommended best practices.
- [Selenium on Sauce Labs](/web-apps/automated-testing/selenium): view Selenium snippets that use other browsers and programming languages
- [Using Selenium 4 with Sauce Labs](/web-apps/automated-testing/selenium/selenium4/)
- [Viewing Your Test Results](/test-results/viewing-test-results/)
- [Sauce School | Selenium Java Course](https://training.saucelabs.com/SeleniumJava/index.html)
- [Sauce Training | W3C Code Examples](https://github.com/saucelabs-training/w3c-examples)
- [Sauce Labs Language Bindings](https://opensource.saucelabs.com/sauce_bindings/)
- [Java SE 8 Documentation](https://docs.oracle.com/javase/8/)
