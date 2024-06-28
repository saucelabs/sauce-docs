---
sidebar_label: C#/.Net
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EnvironmentVariables from '../_partials/_environment-variables.md';
import FullPageLimit from '../_partials/_fullpage-limit.md';
import SelectiveDiffing from '../_partials/_selective-diffing.md';
import SelectiveDiffingGlobal from '../_partials/_selective-diffing-global.md';
import SelectiveDiffingRegion from '../_partials/_selective-diffing-region.md';

# C#/.Net WebDriver Integration

## Introduction

This guide requires an existing C# NUnit / xUnit setup.<br />
You can alternatively take a look to our [example repository](#examples).

Sauce Visual provides a library allowing integration with [WebDriver](https://www.selenium.dev/documentation/webdriver/).

Sauce Visual plugin provides a library exposing a `VisualClient` class that provides actions:

- `VisualCheck`: Takes a screenshot and sends it to Sauce Visual for comparison.
- `VisualResults`: Waits for all diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Visual dependency

Add [Sauce Visual](https://www.nuget.org/packages/SauceLabs.Visual/) dependency to your `.csproj`

<Tabs
defaultValue="windows"
  values={[
    {label: 'Windows NuGet CLI', value: 'windows'},
    {label: 'Linux/macOS/.Net Core', value: 'other'},
  ]}>
<TabItem value="windows">

```powershell
Install-Package SauceLabs.Visual
```

  </TabItem>
  <TabItem value="other">

```sh
dotnet add package SauceLabs.Visual
```

  </TabItem>
</Tabs>


_Note: You can find the latest versions available [here](https://www.nuget.org/packages/SauceLabs.Visual#readme-body-tab)._

### Step 2: Configure Visual Testing integration

Declare a RemoteWebDriver and a VisualClient instance as class properties

```csharp
using OpenQA.Selenium.Remote;
using SauceLabs.Visual;

private RemoteWebDriver Driver { get; set; }
private VisualClient VisualClient { get; set; }
```

Initialize `RemoteWebDriver` and `VisualClient`

<Tabs
defaultValue="NUnit"
  values={[
    {label: 'NUnit', value: 'NUnit'},
    {label: 'xUnit', value: 'xUnit'},
  ]}>
<TabItem value="NUnit">

```csharp
    [OneTimeSetUp]
    public async Task Setup()
    {
      var sauceUsername = "YOUR_USERNAME";
      var sauceAccessKey = "YOUR_ACCESS_KEY";
      var sauceUrl = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub";

      var browserOptions = new ChromeOptions();
      browserOptions.PlatformName = "Windows 11";
      browserOptions.BrowserVersion = "latest";

      var sauceOptions = new Dictionary<string, string>();
      sauceOptions.Add("username", sauceUsername);
      sauceOptions.Add("accessKey", sauceAccessKey);
      browserOptions.AddAdditionalOption("sauce:options", sauceOptions);

      Driver = new RemoteWebDriver(sauceUrl, browserOptions);

      VisualClient = await VisualClient.Create(Driver, Region.UsWest1, new CreateBuildOptions()
      {
          Name = "My Visual Build",
          Project = "csharp-project",
          Branch = "csharp-branch"
      });
      // Enable Dom Capture
      VisualClient.CaptureDom = true;
    }
```

  </TabItem>
  <TabItem value="xUnit">

```csharp
  class MyTestClass : IAsyncLifetime {
    [...]
    public async Task InitializeAsync()
    {
        var browserOptions = Utils.GetBrowserOptions();
        var sauceOptions = Utils.GetSauceOptions();
        browserOptions.AddAdditionalOption("sauce:options", sauceOptions);

        var sauceUrl = Utils.GetOnDemandURL();
        Driver = new RemoteWebDriver(sauceUrl, browserOptions);
        Driver.ExecuteScript("sauce:job-name=xUnit C#/.Net Visual Session");

        VisualClient = await VisualClient.Create(Driver, Region.UsWest1, new CreateBuildOptions()
        {
            Name = "My Visual Build",
            Project = "csharp-project",
            Branch = "csharp-branch"
        });
        // Enable Dom Capture
        VisualClient.CaptureDom = true;
    }
  }
```
  </TabItem>
</Tabs>

To enhance efficiency in managing tests, it's important to provide a specific test name and suite name for each test. This practice allows Sauce Visual to effectively organize snapshots into coherent groups. As a result, it simplifies the review process, saving time and effort in navigating through test results and understanding the context of each snapshot.



Don't forget to quit the WebDriver and Dispose VisualClient.
<Tabs
defaultValue="NUnit"
  values={[
    {label: 'NUnit', value: 'NUnit'},
    {label: 'xUnit', value: 'xUnit'},
  ]}>
<TabItem value="NUnit">

```csharp
    [OneTimeTearDown]
    public async Task Teardown()
    {
        Driver?.Quit();
        await VisualClient.Cleanup();
        VisualClient.Dispose();
    }
```

  </TabItem>
  <TabItem value="xUnit">

```csharp
  public class MyTestClass : IAsyncLifetime
  {
    [...]
    public async Task DisposeAsync()
    {
        Driver?.Quit();
        await VisualClient.Cleanup();
        VisualClient.Dispose();
    }
  }
```

  </TabItem>
</Tabs>

### Step 3: Add visual tests in your tests

Add a check to one of your tests:

<Tabs
defaultValue="NUnit"
  values={[
    {label: 'NUnit', value: 'NUnit'},
    {label: 'xUnit', value: 'xUnit'},
  ]}>
<TabItem value="NUnit">

```csharp

    [Test]
    public async Task SauceDemoHomePage_ShouldRenderLoginCorrectly()
    {
        Driver.Navigate().GoToUrl("https://www.saucedemo.com");
        var wait = new WebDriverWait(Driver, TimeSpan.FromSeconds(15));
        wait.Until(drv => drv.FindElement(usernameLocator));

        await VisualClient.VisualCheck("Sauce Demo Homepage");
    }
```

  </TabItem>
  <TabItem value="xUnit">

```csharp

    [Fact]
    public async Task SauceDemoHomePage_ShouldRenderLoginCorrectly()
    {
        Driver.Navigate().GoToUrl("https://www.saucedemo.com");
        var wait = new WebDriverWait(Driver, TimeSpan.FromSeconds(15));
        wait.Until(drv => drv.FindElement(usernameLocator));

        await VisualClient.VisualCheck("Sauce Demo Homepage");
    }
```

  </TabItem>
</Tabs>

### Step 4: Configure your Sauce Labs credentials

Sauce Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your .Net job.

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

Below are the environment variables available in the Sauce Visual C# plugin. Keep in mind that the variables defined in `CreateBuildOptions` configuration have precedence over these.

<EnvironmentVariables />

### Test results summary

`VisualClient.VisualResults()` returns a summary of test results in `Dictionary<DiffStatus, int>` format where `DiffStatus` is one of the following:

- `DiffStatus.QUEUED`: Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts
- `DiffStatus.EQUAL`: Diffs that have no changes detected
- `DiffStatus.UNAPPROVED`: Diffs that have detected changes and waiting for action
- `DiffStatus.APPROVED`: Diffs that have detected changes and have been approved
- `DiffStatus.REJECTED`: Diffs that have detected changes and have been rejected

Sample usage:

```csharp
var expectedTotalUnapprovedDiffs = 0;

var results = await VisualClient.VisualResults();
Assert.AreEqual(expectedTotalUnapprovedDiffs, results[DiffStatus.Unapproved]);
```

### Build attributes

When creating the service in `VisualClient`, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../../visual-testing.md#baseline-matching))

It needs to be defined through a `CreateBuildOptions` object.

Properties available:
- `string? Name`: The name of the build
- `string? Project`: The name of the project
- `string? Branch`: The name of the branch
- `string? CustomId`: A customId to be able to retrieve the current build
- `string? DefaultBranch`: The name of the default branch

Example:

```csharp
  VisualClient = await VisualClient.Create(Driver, Region.UsWest1, sauceUsername, sauceAccessKey,
      new CreateBuildOptions() { Name = "My Visual Build", Project = "csharp-project", Branch = "feature-branch" });
```

### Ignored regions

#### Component-based ignored region

Sauce Visual provides a way to ignore a list of components.

An ignored component can be a specific element from the page.

Those ignored components are specified when requesting a new snapshot.

Example:

```csharp
var btnAction = Driver.FindElement(By.CssSelector(".app_logo"));

await VisualClient.VisualCheck("C# capture",
    new VisualCheckOptions()
    {
        IgnoreElements = new[] { btnAction }
    });
```

#### User-specified ignored region

Alternatively, ignored regions can be user-specified areas. A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The height of the region to ignore

_Note: all values are pixels_

Example:

```csharp
await VisualClient.VisualCheck("C# capture",
    new VisualCheckOptions()
    {
        IgnoreRegions = new[] { new IgnoreRegion(10, 10, 100, 100) }
    });
```

### Selective Diffing

<SelectiveDiffing />

#### Screenshot-wide configuration

<SelectiveDiffingGlobal />

Example:

Ignoring only one kind:
```csharp
  await VisualClient.VisualCheck("login-page",
      new VisualCheckOptions()
      {
          // Every content change will be ignored
          DiffingOptions = VisualCheckDiffingOptions.DisableOnly(DiffingOption.Content),
      });
```

Ignoring all kinds by one:
```csharp
  await VisualClient.VisualCheck("login-page",
      new VisualCheckOptions()
      {
          DiffingMethod = DiffingMethod.Balanced,
          CaptureDom = true,
          // Only style changes will be considered as a diff
          DiffingOptions = VisualCheckDiffingOptions.EnableOnly(DiffingOption.Style),
      });
```

#### Area-specific configuration

<SelectiveDiffingRegion />

Example:
```csharp
  var usernameElement = Driver.FindElement(By.CssSelector("#user-name"));
  var passwordElement = Driver.FindElement(By.CssSelector("#password"));

  await VisualClient.VisualCheck("login-page",
      new VisualCheckOptions()
      {
          DiffingMethod = DiffingMethod.Balanced,
          CaptureDom = true,
          Regions = new []
          {
              // Ignore all kind of changes for element #user-name
              SelectiveRegion.EnabledFor(usernameElement, DiffingOption.None),
              // Ignore only style changes for element #password
              SelectiveRegion.DisabledFor(passwordElement, DiffingOption.Style),
          },
      });
```

### Capturing the DOM snapshot

Sauce Visual does not capture dom snapshot by default. It can be changed when creating the `VisualClient` object.

Example:
```csharp
VisualClient = VisualClient.Create(Driver, Region.UsWest1, sauceUsername, sauceAccessKey);
VisualClient.CaptureDom = true;
```

### Full page screenshots

By default, only the current viewport is captured when `.VisualCheck` is used. You can opt in to capturing the entire page by using the `FullPage` option. It will capture everything by scrolling and stitching multiple screenshots together.
Additionally, you have the option to configure full page settings using the `FullPageConfig` option.

:::note
It's recommended to use the `HideAfterFirstScroll` option for fixed or sticky position elements such as sticky headers or consent banners.
:::

Options:
- `DelayAfterScrollMs`: Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content.
- `DisableCSSAnimation`: Disable CSS animations and the input caret in the app. The default value is true.
- `HideAfterFirstScroll`: One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc.
- `HideScrollBars`: Hide all scrollbars in the app. The default value is true.
- `ScrollLimit`: Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10.

Examples:

```csharp
await VisualClient.VisualCheck("C# full page",
    new VisualCheckOptions()
    {
        FullPage = true,
    });
```

```csharp
await VisualClient.VisualCheck("C# full page config",
    new VisualCheckOptions()
    {
        FullPage = true,
        FullPageConfig = new FullPageConfig()
            {
                DelayAfterScrollMs = 500,
                DisableCSSAnimation = false,
                HideAfterFirstScroll = new List<string> { ".header" },
                HideScrollBars = false,
                ScrollLimit = 5
            }
    });
```

<FullPageLimit />

## Examples

Two examples are available:

- An example project [using NUnit](https://github.com/saucelabs/visual-examples/tree/main/dotnet-nunit)
- An example project [using xUnit](https://github.com/saucelabs/visual-examples/tree/main/dotnet-xunit)
