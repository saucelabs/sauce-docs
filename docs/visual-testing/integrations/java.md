---
sidebar_label: Java
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java WebDriver Integration

This guide requires an existing Java JUnit / TestNG setup.
If you want to start from scratch, [check out our examples](../../visual-testing.md#examples).

## How to add visual testing to your setup

- Add [sauce visual](https://central.sonatype.com/artifact/com.saucelabs.visual/java-client) dependency
  to your pom.xml
  ```xml
  <dependency>
    <groupId>com.saucelabs.visual</groupId>
    <artifactId>java-client</artifactId>
    <version>0.3.7</version>
    <scope>test</scope>
  </dependency>
  ```

- Declare a RemoteWebDriver and a VisualApi instance as class variables
  ```
  private static VisualApi visual;
  private static RemoteWebDriver driver;
  ```

- Initialize WebDriver and VisualApi in @BeforeSuite section
  ```
  @BeforeSuite
  public static void init() {
      driver = new RemoteWebDriver(webDriverUrl, capabilities);
      visual = new VisualApi(driver, Region.US_WEST_1, sauceUsername, sauceAccessKey);
  }
  ```

- Add a check to one of your tests:
  ```
  visual.check("My login page")
  ```

- Don't forget to quit the WebDriver in @AfterSuite section
  ```
  @AfterSuite
      public static void tearDown() {
          if (driver != null) {
              driver.quit();
      }
  }
  ```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings.
  ```sh
  export SAUCE_USERNAME=__YOUR_SAUCE_USERNAME__
  export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
  ```

- Run the test the way you are used to.

## Advanced usage

### Build name

`buildName` can be defined through the `SAUCE_VISUAL_BUILD_NAME` environment variable.

It needs to be defined prior to running your tests.

Example:
```sh
export SAUCE_VISUAL_BUILD_NAME="Sauce Demo Test"
```

### Ignored regions

#### User-specified ignored region

In the case you need to ignore some region when running your tests, Visual Testing provides a way to ignore user-specified areas.

Those ignored regions are specified when requesting a new snapshot.

A region is defined by four elements.
- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The heigh of the region to ignore

*Note: all values are pixels*

Example:
```java
  Options options = new Options();
  IgnoreRegion ignoreRegion = new IgnoreRegion(
    200, // width
    200, // height
    100, // x
    100  // y
  );
  options.setIgnoreRegions(List.of(ignoreRegion));
  visual.check("Before Login", options);
```

#### Component-based ignored region

Alternatively, an ignored region can be a specific element from the page.

Example:
```java
  Options options = new Options();
  options.setIgnoreElements(List.of(
    // AddBackpackToCartButton will be ignored
    inventoryPage.getAddBackpackToCartButton()
  ));
  visual.check("Inventory Page", options);
```

