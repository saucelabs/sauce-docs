---
sidebar_label: Java
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java WebDriver Integration

## Introduction

This guide requires an existing Java JUnit / TestNG setup.<br />
You can alternatively take a look to our [example repository](#examples).

Sauce Labs Visual provides an library allowing integration with [WebDriver](https://www.selenium.dev/documentation/webdriver/).

Sauce Labs Visual plugin provides a library exposing a `VisualApi` object that provides actions:
- `visual.check()`: Takes a screenshot and send it to Sauce Labs Visual for comparison.
- `visual.checkResults()`: Waits for all diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Labs Visual dependecy

Add [Sauce Visual](https://central.sonatype.com/artifact/com.saucelabs.visual/java-client) dependency to your pom.xml
  ```xml
  <dependency>
    <groupId>com.saucelabs.visual</groupId>
    <artifactId>java-client</artifactId>
    <version>LATEST</version>
    <scope>test</scope>
  </dependency>
  ```

*Note: You can find the latest versions available [here](https://central.sonatype.com/search?q=com.saucelabs.visual).*

### Step 2: Configure Visual Testing integration

Declare a RemoteWebDriver and a VisualApi instance as class variables
```java
  private static VisualApi visual;
  private static RemoteWebDriver driver;
```

Initialize `RemoteWebDriver` and `VisualApi` in `@BeforeAll` section, or `@BeforeSuite` if you're using TestNG 
```java
  @BeforeAll // JUnit
  public static void init() {
      driver = new RemoteWebDriver(webDriverUrl, capabilities);
      visual = new Builder(driver, sauceUsername, sauceAccessKey, DataCenter.US_WEST_1).build();
  }
```
```java
  @BeforeSuite // TestNG
  public static void init() {
      driver = new RemoteWebDriver(webDriverUrl, capabilities);
      visual = new Builder(driver, sauceUsername, sauceAccessKey, DataCenter.US_WEST_1).build();
  }
```

Don't forget to quit the WebDriver in `@AfterAll` section, or `@AfterSuite` if you're using TestNG 
```java
  @AfterAll // JUnit
      public static void tearDown() {
          if (driver != null) {
              driver.quit();
      }
  }
```
```java
  @AfterSuite // TestNG
      public static void tearDown() {
          if (driver != null) {
              driver.quit();
      }
  }
```


### Step 3: Add visual tests in your tests

Add a check to one of your tests:
```java
    @Test
    void checkLoginLooksTheSame() {
        var loginPage = new LoginPage(driver);
        loginPage.open();

        visual.check("Before Login");
    }
```

### Step 4: Configure your Sauce Labs credentials

Sauce Labs Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your WebdriverIO job.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5: Run the test

Everything is now configured, your tests can be run as any other WebDriver test.

Builds will appear on Sauce Labs platform as soon as they have been created by the running tests: https://app.saucelabs.com/visual/builds.

## Advanced usage

### Test results summary

`VisualApi#checkResults` returns a summary of test results in `Map<DiffStatus, Integer>` format where `DiffStatus` is one of the following:
- `DiffStatus.QUEUED`: Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts
- `DiffStatus.EQUAL`: Diffs that have no changes detected
- `DiffStatus.UNAPPROVED`: Diffs that have detected changes and waiting for action
- `DiffStatus.APPROVED`: Diffs that have detected changes and have been approved
- `DiffStatus.REJECTED`: Diffs that have detected changes and have been rejected  

Sample usage:
```java
    assertEquals(visual.checkResults().get(DiffStatus.UNAPPROVED), EXPECTED_TOTAL_UNAPPROVED_DIFFS);
```

### Build attributes

When creating the service in `VisualApi`, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../sauce-visual.md#baseline-matching))

It needs to be defined through the `VisualApi.Builder` object.

Methods available:
- `withBuild(String build)`: Sets the name of the build
- `withProject(String project)`: Sets the name of the project
- `withBranch(String branch)`: Sets the name of the branch

Example:
```java
    visual = new Builder(driver, username, accessKey, DataCenter.US_WEST_1)
              .withBuild("Sauce Demo Test")
              .withBranch("main")
              .withProject("Java examples")
              .build();
```

### Ignored regions

#### Component-based ignored region

In case you need to ignore some components when running your tests, Sauce Labs Visual provides a way to ignore a list of components.

An ignored component can be a specific element from the page.

Those ignored components are specified when requesting a new snapshot.

Example:
```java
  Options options = new Options();
  options.setIgnoreElements(List.of(
    // AddBackpackToCartButton will be ignored
    inventoryPage.getAddBackpackToCartButton()
  ));
  visual.check("Inventory Page", options);
```

#### User-specified ignored region

Alternatively, ignored regions can be user-specified areas. A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The heigh of the region to ignore

*Note: all values are pixels*

Example:
```java
  Options options = new Options();
  IgnoreRegion ignoreRegion = new IgnoreRegion(
    100, // x
    100  // y
    200, // width
    200, // height
  );
  options.setIgnoreRegions(List.of(ignoreRegion));
  visual.check("Before Login", options);
```

## Examples

Two examples are available:
- An example project [using Junit](https://github.com/saucelabs/visual-examples/tree/main/wd-java)
- An example project [using TestNG](https://github.com/saucelabs/visual-examples/tree/main/wd-java-testng)
