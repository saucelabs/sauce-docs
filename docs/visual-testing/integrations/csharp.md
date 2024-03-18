---
sidebar_label: C#/.Net
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# C#/.Net WebDriver Integration

:::note Important
Access to this feature is currently limited to Enterprise customers as part of our commitment to providing tailored solutions. We are excited to announce that self-service access is under development and will be released shortly. Stay tuned!
:::

## Introduction

This guide requires an existing C# NUnit / xUnit setup.<br />
You can alternatively take a look to our [example repository](#examples).

Sauce Visual provides an library allowing integration with [WebDriver](https://www.selenium.dev/documentation/webdriver/).

Sauce Visual plugin provides a library exposing a `VisualClient` class that provides actions:

- `VisualCheck`: Takes a screenshot and sends it to Sauce Visual for comparison.
- `VisualResults`: Waits for all diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Visual dependecy

Add [Sauce Visual](https://www.nuget.org/packages/SauceLabs.Visual/) dependency to your `.csproj`
```xml
  <!-- FIXME USE Example Repo Reference -->
  <ItemGroup>
    ...
    <PackageReference Include="SauceLabs.Visual" Version="0.0.1" />
    ...
  </ItemGroup>
```

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
    public void Setup()
    {
      var sauceUsername = "YOUR_USERNAME";
      var sauceAccessKey = "YOUR_ACCESS_KEY";
      var sauceUrl = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub";

      var browserOptions = new ChromeOptions();
      browserOptions.PlatformName = "Windows 11";
      browserOptions.BrowserVersion = "latest";

      var sauceOptions = new Dictionary<string, object>();
      sauceOptions.Add("username", sauceUsername);
      sauceOptions.Add("accessKey", sauceAccessKey);
      browserOptions.AddAdditionalOption("sauce:options", sauceOptions);

      Driver = new RemoteWebDriver(sauceUrl, browserOptions);

      VisualClient = new VisualClient(Driver, Region.UsWest1, sauceUsername, sauceAccessKey,
          new CreateBuildOptions() { Name = "My Visual Build", Project = "csharp-project", Branch = "csharp-branch" });
      VisualClient.CaptureDom = true;
    }
```

  </TabItem>
  <TabItem value="xUnit">

```csharp
    public MyTestClass()
    {
      var sauceUsername = "YOUR_USERNAME";
      var sauceAccessKey = "YOUR_ACCESS_KEY";
      var sauceUrl = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub";

      var browserOptions = new ChromeOptions();
      browserOptions.PlatformName = "Windows 11";
      browserOptions.BrowserVersion = "latest";

      var sauceOptions = new Dictionary<string, object>();
      sauceOptions.Add("username", sauceUsername);
      sauceOptions.Add("accessKey", sauceAccessKey);
      browserOptions.AddAdditionalOption("sauce:options", sauceOptions);

      Driver = new RemoteWebDriver(sauceUrl, browserOptions);

      VisualClient = new VisualClient(Driver, Region.UsWest1, sauceUsername, sauceAccessKey,
          new CreateBuildOptions() { Name = "My Visual Build", Project = "csharp-project", Branch = "csharp-branch" });
      VisualClient.CaptureDom = true;
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
    public void Teardown()
    {
        Driver?.Quit();
        VisualClient.Cleanup().Wait();
        VisualClient.Dispose();
    }
```

  </TabItem>
  <TabItem value="xUnit">

```csharp
  public void Dispose()
  {
      Driver?.Quit();
      VisualClient.Cleanup().Wait();
      VisualClient.Dispose();
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
    public async Task SauceDemoHomePage()
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
    public async void SauceDemoHomePage()
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

### Test results summary

`VisualClient.VisualResults()` returns a summary of test results in `dictionnary<DiffStatus, int>` format where `DiffStatus` is one of the following:

- `DiffStatus.QUEUED`: Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts
- `DiffStatus.EQUAL`: Diffs that have no changes detected
- `DiffStatus.UNAPPROVED`: Diffs that have detected changes and waiting for action
- `DiffStatus.APPROVED`: Diffs that have detected changes and have been approved
- `DiffStatus.REJECTED`: Diffs that have detected changes and have been rejected

Sample usage:

```csharp
var expectedTotalUnapprovedDiffs = 0;

var results = await VisualClient.VisualResults();
Assert.AreEqual(expectedTotalUnapprovedDiffs, results?[DiffStatus.Unapproved]);
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
  VisualClient = new VisualClient(Driver, Region.UsWest1, sauceUsername, sauceAccessKey,
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

### Capturing the DOM snapshot

Sauce Visual does not capture dom snapshot by default. It can be changed when creating the `VisualClient` object.

Example:
```csharp
VisualClient = new VisualClient(Driver, Region.UsWest1, sauceUsername, sauceAccessKey);
VisualClient.CaptureDom = true;
```

## Examples

Two examples are available:

- An example project [using NUnit](https://github.com/saucelabs/visual-examples/tree/main/dotnet-nunit)
- An example project [using xUnit](https://github.com/saucelabs/visual-examples/tree/main/dotnet-xunit)
