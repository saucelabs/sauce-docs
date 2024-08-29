---
sidebar_label: Java
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ClippingDescription from '../_partials/_clipping-description.md';
import ClippingElement from '../_partials/_clipping-element.md';
import FullPageLimit from '../_partials/_fullpage-limit.md';
import EnvironmentVariables from '../_partials/_environment-variables.md';
import SelectiveDiffing from '../_partials/_selective-diffing.md';
import SelectiveDiffingGlobal from '../_partials/_selective-diffing-global.md';
import SelectiveDiffingRegion from '../_partials/_selective-diffing-region.md';

# Java WebDriver Integration

## Introduction

This guide requires an existing Java JUnit / TestNG setup.<br />
You can alternatively take a look to our [example repository](#examples).

Sauce Visual provides a library allowing integration with [WebDriver](https://www.selenium.dev/documentation/webdriver/).

Sauce Visual plugin provides a library exposing a `VisualApi` object that provides actions:

- `visual.sauceVisualCheck()`: Takes a screenshot and send it to Sauce Visual for comparison.
- `visual.sauceVisualResults()`: Waits for all diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Visual dependency

Add [Sauce Visual](https://central.sonatype.com/artifact/com.saucelabs.visual/java-client) dependency to your pom.xml

```xml reference
https://github.com/saucelabs/visual-examples/blob/main/wd-java-testng/pom.xml#L18-L23
```

_Note: You can find the latest versions available [here](https://central.sonatype.com/search?q=com.saucelabs.visual)._

### Step 2: Configure Visual Testing integration

Declare a RemoteWebDriver and a VisualApi instance as class variables

```java
import org.openqa.selenium.remote.RemoteWebDriver;
import com.saucelabs.visual.VisualApi;

private static VisualApi visual;
private static RemoteWebDriver driver;
```

Initialize `RemoteWebDriver` and `VisualApi`

<Tabs
defaultValue="JUnit"
  values={[
    {label: 'JUnit', value: 'JUnit'},
    {label: 'TestNG', value: 'TestNG'},
  ]}>
<TabItem value="JUnit">

```java
import org.junit.jupiter.api.BeforeAll;

@BeforeAll
public static void init() {
    driver = new RemoteWebDriver(webDriverUrl, capabilities);
    visual = new VisualApi.Builder(driver, sauceUsername, sauceAccessKey, DataCenter.US_WEST_1).build();
}
```

  </TabItem>
  <TabItem value="TestNG">

```java
import org.testng.annotations.BeforeSuite;

@BeforeSuite
public static void init() {
    driver = new RemoteWebDriver(webDriverUrl, capabilities);
    visual = new VisualApi.Builder(driver, sauceUsername, sauceAccessKey, DataCenter.US_WEST_1).build();
}
```

  </TabItem>
</Tabs>

To enhance efficiency in managing tests, it's important to provide a specific test name and suite name for each test. This practice allows Sauce Visual to effectively organize snapshots into coherent groups. As a result, it simplifies the review process, saving time and effort in navigating through test results and understanding the context of each snapshot.

Moreover, our Java Binding offers an automated solution to this process. By integrating the following code snippets into your tests, the Java Binding can automatically assign appropriate test names and suite names, streamlining your testing workflow.

<Tabs
defaultValue="JUnit"
  values={[
    {label: 'JUnit', value: 'JUnit'},
    {label: 'TestNG', value: 'TestNG'},
  ]}>
<TabItem value="JUnit">

```java
import com.saucelabs.visual.junit5.TestMetaInfoExtension;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith({TestMetaInfoExtension.class})
public class MyJunitTestClass {
    ...
}
```

  </TabItem>
  <TabItem value="TestNG">

```java
import com.saucelabs.visual.testng.TestMetaInfoListener;
import org.testng.annotations.Listeners;

@Listeners({TestMetaInfoListener.class})
public class MyTestNGTestClass {
    ...
}
```

  </TabItem>
</Tabs>

Don't forget to quit the WebDriver
<Tabs
defaultValue="JUnit"
  values={[
    {label: 'JUnit', value: 'JUnit'},
    {label: 'TestNG', value: 'TestNG'},
  ]}>
<TabItem value="JUnit">

```java
import org.junit.jupiter.api.AfterAll;

@AfterAll
public static void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
```

  </TabItem>
  <TabItem value="TestNG">

```java
import org.testng.annotations.AfterSuite;

@AfterSuite
public static void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
```

  </TabItem>
</Tabs>

### Step 3: Add visual tests in your tests

Add a check to one of your tests:

<Tabs
defaultValue="JUnit"
  values={[
    {label: 'JUnit', value: 'JUnit'},
    {label: 'TestNG', value: 'TestNG'},
  ]}>
<TabItem value="JUnit">

```java
import org.junit.jupiter.api.Test;

@Test
void checkLoginLooksTheSame() {
    var loginPage = new LoginPage(driver);
    loginPage.open();

    visual.sauceVisualCheck("Before Login");
}
```

  </TabItem>
  <TabItem value="TestNG">

```java
import org.testng.annotations.Test;

@Test
void checkLoginLooksTheSame() {
    var loginPage = new LoginPage(driver);
    loginPage.open();

    visual.sauceVisualCheck("Before Login");
}
```

  </TabItem>
</Tabs>

### Step 4: Configure your Sauce Labs credentials

Sauce Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your Java job.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5: Run the test

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent WebDriver tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.

## Advanced usage

### Customizing Your Builds (Environment Variables)

Below are the environment variables available in the Sauce Visual Java plugin. Keep in mind that the variables defined in `CheckOptions` configuration have precedence over these.

<EnvironmentVariables />

### Test results summary

`VisualApi#sauceVisualResults()` returns a summary of test results in `Map<DiffStatus, Integer>` format where `DiffStatus` is one of the following:

- `DiffStatus.QUEUED`: Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts
- `DiffStatus.EQUAL`: Diffs that have no changes detected
- `DiffStatus.UNAPPROVED`: Diffs that have detected changes and waiting for action
- `DiffStatus.APPROVED`: Diffs that have detected changes and have been approved
- `DiffStatus.REJECTED`: Diffs that have detected changes and have been rejected

Sample usage:

```java
var EXPECTED_TOTAL_UNAPPROVED_DIFFS = 0;

assertEquals(visual.sauceVisualResults().get(DiffStatus.UNAPPROVED), EXPECTED_TOTAL_UNAPPROVED_DIFFS);
```

### Build attributes

When creating the service in `VisualApi`, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../../visual-testing.md#baseline-matching))

It needs to be defined through the `VisualApi.Builder` object.

Methods available:

- `withBuild(String build)`: Sets the name of the build
- `withProject(String project)`: Sets the name of the project
- `withBranch(String branch)`: Sets the name of the branch
- `withDefaultBranch(String defaultBranch)`: Sets the name of the default branch

Example:

```java
import com.saucelabs.visual.VisualApi;
import com.saucelabs.visual.DataCenter;

visual = new VisualApi.Builder(driver, username, accessKey, DataCenter.US_WEST_1)
          .withBuild("Sauce Demo Test")
          .withBranch("main")
          .withProject("Java examples")
          .build();
```

### Ignored regions

#### Component-based ignored region

Sauce Visual provides a way to ignore a list of components.

An ignored component can be a specific element from the page.

Those ignored components are specified when requesting a new snapshot.

Example:

```java
import com.saucelabs.visual.CheckOptions;

CheckOptions options = new CheckOptions();
options.setIgnoreElements(List.of(
  // AddBackpackToCartButton will be ignored
  inventoryPage.getAddBackpackToCartButton()
));
visual.sauceVisualCheck("Inventory Page", options);
```

#### User-specified ignored region

Alternatively, ignored regions can be user-specified areas. A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The height of the region to ignore

_Note: all values are pixels_

Example:

```java
import com.saucelabs.visual.CheckOptions;
import com.saucelabs.visual.model.IgnoreRegion;

CheckOptions options = new CheckOptions();
IgnoreRegion ignoreRegion = new IgnoreRegion(
  100, // x
  100,  // y
  200, // width
  200, // height
);
options.setIgnoreRegions(List.of(ignoreRegion));
visual.sauceVisualCheck("Before Login", options);
```

### Selective Diffing

<SelectiveDiffing />

#### Screenshot-wide configuration

<SelectiveDiffingGlobal />

Example:

Ignoring only one kind:
```java
    visual.sauceVisualCheck(
        "login-page",
        new CheckOptions.Builder()
            .withDiffingMethod(DiffingMethod.BALANCED)
            .withCaptureDom(true)
            // Every content change will be ignored
            .disableOnly(EnumSet.of(DiffingFlag.Content))
            .build());
```

Ignoring all kinds except one:
```java
    visual.sauceVisualCheck(
        "login-page",
        new CheckOptions.Builder()
            .withDiffingMethod(DiffingMethod.BALANCED)
            .withCaptureDom(true)
            // Only style changes will be considered as a diff
            .enableOnly(EnumSet.of(DiffingFlag.Style))
            .build());
```

#### Area-specific configuration

<SelectiveDiffingRegion />

Example:
```java
  WebElement usernameInput = driver.findElement(By.id("user-name"));
  WebElement passwordInput = driver.findElement(By.id("password"));

  visual.sauceVisualCheck(
      "login-page",
      new CheckOptions.Builder()
          .withDiffingMethod(DiffingMethod.BALANCED)
          .withCaptureDom(true)
          // Ignore all kind of changes for element #user-name
          .enableOnly(EnumSet.noneOf(DiffingFlag.class), usernameInput)
          // Ignore only style changes for element #password
          .enableOnly(EnumSet.of(DiffingFlag.Style), passwordInput)
          .build());
```

### Capturing the DOM snapshot

Sauce Visual does not capture dom snapshot by default. It can be changed in options.

Example:
```java
import com.saucelabs.visual.CheckOptions;

CheckOptions options = new CheckOptions();
options.setCaptureDom(true);
visual.sauceVisualCheck("Inventory Page", options);
```

### Full page screenshots

By default, only the current viewport is captured when `.sauceVisualCheck` is used. You can opt in to capturing the entire page by using the `enableFullPageScreenshots` option. It will capture everything by scrolling and stitching multiple screenshots together.

:::note
It's recommended to use the `withHideAfterFirstScroll` method for fixed or sticky position elements such as sticky headers or consent banners.
:::

Configuration should be specified using the `FullPageScreenshotConfig.Builder` object.

Methods available:

- `withDelayAfterScrollMs(int delayAfterScrollMs)`: Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content.
- `withDisableCSSAnimation(Boolean disableCSSAnimation)`: Disable CSS animations and the input caret in the app. The default value is true.
- `withHideAfterFirstScroll(String... hideAfterFirstScroll)`: One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc.
- `withHideScrollBars(Boolean hideScrollBars)`: Hide all scrollbars in the app. The default value is true.
- `withScrollLimit(int scrollLimit)`: Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10.

Examples:

```java
import com.saucelabs.visual.CheckOptions;

CheckOptions options = new CheckOptions();
options.enableFullPageScreenshots();
visual.sauceVisualCheck("Long content page", options);
```

```java
import com.saucelabs.visual.CheckOptions;
import com.saucelabs.visual.model.FullPageScreenshotConfig;

CheckOptions options = new CheckOptions();
FullPageScreenshotConfig config = new FullPageScreenshotConfig.Builder()
        .withDelayAfterScrollMs(500)
        .withDisableCSSAnimation(false)
        .withHideAfterFirstScroll("#header")
        .withHideScrollBars(false)
        .withScrollLimit(5)
        .build();
options.enableFullPageScreenshots(config);
visual.sauceVisualCheck("Long content page", options);
```

<FullPageLimit />

### Clip to an element

<ClippingDescription />

Example:

```java
import com.saucelabs.visual.CheckOptions;

CheckOptions options = new CheckOptions();
options.setClipSelector(".your-css-selector");
visual.sauceVisualCheck("Visible Sale Banner", options);
```

<ClippingElement />

Example:

```java
import com.saucelabs.visual.CheckOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

RemoteWebDriver driver;
...

CheckOptions options = new CheckOptions();
WebElement element = driver.findElement(By.cssSelector(".your-css-selector"));
options.setClipElement(element);
visual.sauceVisualCheck("Visible Sale Banner", options);
```

## Examples

Two examples are available:

- An example project [using Junit](https://github.com/saucelabs/visual-examples/tree/main/wd-java)
- An example project [using TestNG](https://github.com/saucelabs/visual-examples/tree/main/wd-java-testng)
