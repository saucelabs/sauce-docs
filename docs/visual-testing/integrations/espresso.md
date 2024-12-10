---
sidebar_label: Espresso
---

import ClippingDescription from '../_partials/_clipping-description.md';

# Espresso Integration

You can use the Sauce Visual Espresso plugin to set up an integration with the Sauce Labs platform and start comparing the visual snapshots generated during your tests.

## Introduction

This guide requires an existing Android JUnit setup.  

You can alternatively take a look to our [example repository](#examples).

Sauce Visual Espresso plugin provides a library exposing a `VisualClient` object that provides the method 
`sauceVisualCheck()` to take a screenshot and send it to Sauce Visual for comparison.

## Quickstart

### Step 1: Add Sauce Visual dependency

Add [Sauce Visual](https://central.sonatype.com/artifact/com.saucelabs.visual/visual-espresso) dependency to your build.gradle

```groovy
androidTestImplementation 'com.saucelabs.visual:visual-espresso:0.0.1'
```

_Note: You can find the latest versions available [here](https://central.sonatype.com/artifact/com.saucelabs.visual/visual-espresso)._

### Step 2: Configure Visual Testing integration

Declare a VisualClient instance as class variable

```java
import com.saucelabs.visual.VisualClient;

static VisualClient visual = VisualClient.builder(sauceUsername, sauceAccessKey)
        .buildName("Sauce Demo Test")
        .build();
```

To enhance efficiency in managing tests, it's important to provide a specific test name and suite name for each test. This practice allows Sauce Visual to effectively organize snapshots into coherent groups. As a result, it simplifies the review process, saving time and effort in navigating through test results and understanding the context of each snapshot.

Moreover, our Espresso binding offers an automated solution to this process. By integrating the following code snippet into your tests, Sauce Visual can automatically assign appropriate test names and suite names, streamlining your testing workflow.

```java
import com.saucelabs.visual.junit.TestMetaInfoRule;

import org.junit.Rule;

public class MyJunitTestClass {
    
    @Rule
    public TestMetaInfoRule testMetaInfoRule = new TestMetaInfoRule();
}
```

Don't forget to finish the build

```java
import org.junit.AfterClass;

@AfterClass
public static void tearDown() {
    if (visual != null) {
        visual.finish();
    }
}
```

### Step 3: Add visual tests in your tests

Add a check to one of your tests:


```java
import org.junit.Test;

@Test
void checkLogin() {
  
  visual.sauceVisualCheck("Before Login");
}
```

### Step 4: Configure your Sauce Labs credentials

Sauce Visual Espresso expects Sauce Labs username and access key to be passed when initiating the client.  
It's recommended to define and pass your Sauce Labs credentials to `VisualClient` as custom `BuildConfig` fields.  

```groovy
android {
        buildConfigField "String", "SAUCE_USERNAME", "YOUR_SAUCE_USERNAME"
        buildConfigField "String", "SAUCE_ACCESS_KEY", "YOUR_SAUCE_ACCESS_KEY"
    }
```

```java
import com.saucelabs.visual.VisualClient;

static VisualClient visualClient = VisualClient.builder(
                BuildConfig.SAUCE_USERNAME,
                BuildConfig.SAUCE_ACCESS_KEY)
        .buildName("Espresso Basic Sample")
        .build();
```

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.  

### Step 5: Run the test

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.

## Advanced usage

### Customizing Your Build Lifecycle

Following builder methods are available for `VisualClient` if you'd like to manage your build lifecyle externally.

- `buildId(String buildId)`: For advanced users, a user-supplied Sauce Labs Visual build ID. Can be used to create builds in advance using the GraphQL API or CLI tool. This can be used to parallelize tests with multiple browsers, shard, or more. By default, this is not set and we create / finish a build during setup / teardown.
- `customId(String customId)`: For advanced users, a user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID.

### Build attributes

When creating the service in `VisualClient`, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../../visual-testing.md#baseline-matching))

It needs to be defined through the `VisualApi.Builder` object.

Methods available:

- `buildName(String buildName)`: Sets the name of the build
- `projectName(String project)`: Sets the name of the project
- `branchName(String branch)`: Sets the name of the branch
- `defaultBranchName(String defaultBranch)`: Sets the name of the default branch

Example:

```java
import com.saucelabs.visual.VisualClient;

visual = VisualClient.builder(username, accessKey)
          .buildName("Sauce Demo Test")
          .branchName("main")
          .projectName("Java examples")
          .build();
```

### Ignored regions

#### Component-based ignored region

Sauce Visual provides a way to ignore a list of components.

An ignored component can be a specific element from the page.

Those ignored components are specified when requesting a new snapshot.

Example:

```java
import com.saucelabs.visual.VisualCheckOptions;;

visualClient.sauceVisualCheck("Inventory Page",
        VisualCheckOptions.builder()
                .ignore(withId(R.id.changeTextBt))
                .build());
```

#### User-specified ignored region

Alternatively, ignored regions can be user-specified areas. A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The height of the region to ignore

_Note: all values are pixels_

You can also give a name to a region that will be visible in Sauce Visual UI using `name`

Example:

```java

import com.saucelabs.visual.VisualCheckOptions;
import com.saucelabs.visual.model.Region;

visualClient.sauceVisualCheck("Inventory Page",
        VisualCheckOptions.builder()
                .ignore(Region.builder()
                        .name("Demo region")
                        .x(100)
                        .y(100)
                        .width(200)
                        .height(200)
                        .build())
                .build());
```

### Capturing the DOM snapshot

Sauce Visual does not capture DOM snapshots by default. This setting can be changed globally via the build options.

Example:
```java
import com.saucelabs.visual.VisualCheckOptions;

static VisualClient visualClient = VisualClient.builder(
                sauceUsername,
                sauceAccessKey)
        .buildName("Espresso Basic Sample")
        .captureDom(true)
        .build();
```

You can alternatively enable DOM capturing when initating a visual check.

```java
import com.saucelabs.visual.VisualCheckOptions;

visualClient.sauceVisualCheck("Inventory Page",
        VisualCheckOptions.builder()
                .captureDom(true)
                .build());
```

### Clip to an Element

<ClippingDescription />

Example:

```java
import com.saucelabs.visual.VisualCheckOptions;

visualClient.sauceVisualCheck("Visible Sale Banner",
        VisualCheckOptions.builder()
                .clipElement(withId(R.id.changeTextBt))
                .build());
```
### Full page screenshots

Sauce Visual Espresso allows you to capture the entire scrollable area of your application, ensuring thorough visual testing that includes content beyond the visible viewport.

**Key Behaviors:**
- Capture of Scrollable Areas: The tool focuses exclusively on scrollable content within the defined area, providing an accurate representation of your app's primary interface.
- Exclusions: Static elements outside the scrollable area, such as headers, footers, or overlaying menus, are not included in the full-page screenshot.
- Comparison to Web Page Screenshots: Unlike full-page screenshots for web pages—where the page is scrolled and stitched together from multiple screenshots—Sauce Visual Espresso captures only the designated scrollable area in one seamless snapshot.

This tailored approach ensures precise testing and highlights the elements critical to your application’s user experience.

**Note**: Full-page screenshots for Espresso are in beta and may exhibit unexpected behavior, and DOM capture is not available for these screenshots.

Example:

```java
import com.saucelabs.visual.VisualCheckOptions;

visualClient.sauceVisualCheck("Long content page",
        VisualCheckOptions.builder()
                .fullPageScreenshot(withId(R.id.scrollView))
                .build());
```

## Examples

Click [here](https://github.com/saucelabs/visual-examples/tree/main/espresso) to see the example project.
