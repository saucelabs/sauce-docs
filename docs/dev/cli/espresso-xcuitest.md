---
id: espresso-xcuitest
title: Espresso and XCUITest CLI Reference
sidebar_label: Espresso and XCUITest
---

## Sauce Runner for Real Devices Command Line Options

This topic describes the options you can use with [Sauce Runner for Real Devices](/mobile-apps/automated-testing/espresso-xcuitest/real-device-testing.md) to run automated tests on Sauce Labs real devices using Espresso and XCUITest.

* Run tests in parallel across multiple devices
* Run subsets of tests against specific devices
* Set the options as environment variables that can be referenced in your testing scripts, or pass them as command line parameters, which will take precedence over options set as environment variables
* Create a [runner configuration file](/mobile-apps/automated-testing/espresso-xcuitest/real-device-testing.md) with the options and commands for running your tests

### What You'll Need

:::danger Sauce Runner for Real Devices is only available on TestObject, our legacy real device platform, which you can access via **Sauce Apps** > **Legacy RDC**. For more information, see [TestObject Resources](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721177) and [Real Device Testing in Sauce Labs Feature Preview](https://wiki.saucelabs.com/display/DOCS/Real+Device+Testing+in+Sauce+Labs+Feature+Preview).
:::

* Your [Sauce Labs Account](https://app.saucelabs.com) credentials
* Your native mobile app file (both debug and non-debug app) and test file
* Have [Sauce Runner for Real Devices downloaded and installed](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414342)

### General Usage

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar  <command> <command options>
```

### Required
These options are required for use with the `xcuitest` or `espresso` commands. They are not compatible with the YAML file `config` command.

<table>
  <tr>
   <td><strong>Flag</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><sub><code>
   --apikey
   </code></sub></td>
   <td>The API key for your Sauce Labs real device cloud account.
   </td>
  </tr>
  <tr>
   <td><sub><code>
   --app
   </code></sub></td>
   <td>
   The path to the *.ipa or *.apk file of the app under test, or the ID number of an already uploaded app. In your command line, refer to the location where you have downloaded the <code>runner.jar</code> file or run the command from the folder from where you downloaded the runner. </td>
  </tr>
  <tr>
   <td><sub><code>
   --test
   </code></sub></td>
   <td>
   The path to the *.ipa or *.apk file of the test.</td>
  </tr>
  <tr>
   <td><sub><code>
   --datacenter
   </code></sub></td>
   <td>
    Specify the data center (either <code>US</code> or <code>EU</code>) to use in your tests. If you don't specify a device or devices for your test, one will be assigned to your tests based on the type of application you're testing against.</td>
  </tr>
</table>

### Optional

<table>
  <tr>
   <td><strong>Flag</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><sub><code>
   --device
   </code></sub></td>
   <td>For static allocation of a device, provide the ID for the type of device to use in your tests, such as <code>iPhone_5_real</code>. To find device ID numbers, go to <strong>Live</strong> > <strong>Mobile-App</strong> > <strong>Choose device</strong> > Search for the device you want to use > Click <strong>Details</strong> in the device description. For more information, see the examples under <code>--devices</code>.
   </td>
  </tr>
  <tr>
   <td><sub><code>
   --devices
   </code></sub></td>
   <td>
   The list of devices, allocated dynamically or through static description of the device ID, to use in your tests.

   With the `--devices` option, you can configure Sauce Runner for Real Devices to run tests in parallel across multiple devices using both static and dynamic allocation. Below are some examples of the various configuration options. As an option, you can run a select set of tests against a specific device using the `--testsToRun` command.

   <sub>

   ```sh
   # Define a list of devices on which the
   # tests should be executed.
     devices:

   # Device 1 example: Minimal Configuration
   # Only specify a DC (either EU or US).
   - datacenter: EU

   # Device 2 example: Static Allocation
   - datacenter: US
    # Specify a device descriptor for static allocation.
    device: iPhone_8_real_us

# Device 3 example: Dynamic Allocation.
   - datacenter: US
    # Specify a device name or regex for dynamic
    # allocation (e.g.,'iPhone 5', 'iPad.*').
    deviceNameQuery: iPhone 5
    # Platform Version for a dynamic device query
    # (e.g., '9' for all Devices) with major version 9
    # and arbitrary minor versions or '9.3.3' for a more
    # specific version.
    platformVersion: 11.4
    # Optional parameters, set to true to enable.
    # phoneOnly: false
    # tabletOnly: false
    # privateDevicesOnly: false

   # Device 4 example: Running subset of tests.
     # Data center to run tests in (either EU or US).
   - datacenter: EU
     # Provide a list of test cases or test classes.
     # If you want to run all tests of a class,
     # provide only the class name. If you want
     # to run a specific method of a class,
     # provide the class name and method name.
     testsToRun:
     - testClass: SampleTestCase
     - testClass: SampleTestCase2
       testMethod: testItWorks

   ```

   </sub></td>
  </tr>
  <tr>
   <td><sub><code>
   --testname
   </code></sub></td>
   <td>Set a custom test name to appear on the UI. Default is <code>Test</code>.
   </td>
  </tr>
  <tr>
   <td><sub><code>
   --tunnelIdentifier
   </code></sub></td>
   <td>
   If you are using Sauce Connect Proxy, provide the identifier of the tunnel you want to use.</td>
  </tr>
  <tr>
   <td><sub><code>
   --checkFrequency
   </code></sub></td>
   <td>
   Interval in seconds to check test results. Default is <code>30</code>.</td>
  </tr>
  <tr>
   <td><sub><code>
   --timeout
   </code></sub></td>
   <td>
   Test timeout in minutes.  Test duration cannot exceed 60 minutes. Default is <code>60</code>.</td>
  </tr>
  <tr>
   <td><sub><code>
   --xmlFolder
   </code></sub></td>
   <td>
   The folder for the JUnit XML output.</td>
  </tr>
  <tr>
   <td><sub><code>
   --url
   </code></sub></td>
   <td>
   Provide the URL of an alternative REST endpoint to use. For a list of endpoints, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068">Data Center Endpoints</a>.</td>
  </tr>
  <tr>
   <td><sub><code>
   --platformVersion
   </code></sub></td>
   <td>
   For dynamic allocation of a device, provide an operating system version to use. For example, use < code>9</code> to allocate a device running major version 9 and arbitrary versions of the OS, or <code>9.3.3</code> for a specific version. For more information, see the examples under <a href="/dev/cli/espresso-xcuitest#--devices"><code>--devices</code></a>.</td>
  </tr>
  <tr>
   <td><sub><code>
   --privateDevicesOnly
   </code></sub></td>
   <td>
   If set, only private devices will be queried.</td>
  </tr>
  <tr>
   <td><sub><code>
   --phoneOnly
   </code></sub></td>
   <td>
   If set, only phones will be queried.</td>
  </tr>
  <tr>
   <td><sub><code>
   --tabletOnly
   </code></sub></td>
   <td>
   If set, only tablets will be queried.</td>
  </tr>
  <tr>
   <td><sub><code>
   --deviceNameQuery
   </code></sub></td>
   <td>
   For dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use <code>iPhone.*Plus</code> to allocate any iPhone Plus device. For more information, see the examples under <a href="/dev/cli/espresso-xcuitest#--devices"><code>--devices</code></a>.</td>
  </tr>
  <tr>
   <td><sub><code>
   --testsToRun
   </code></sub></td>
   <td>
   <p><button class="badge-green">XCUITest Only</button></p>
   <p>For dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use <code>iPhone.*Plus</code> to allocate any iPhone Plus device. For more information, see the examples under <a href="/dev/cli/espresso-xcuitest#--devices"><code>--devices</code></a>. Example: Execute all tests in <code>ClassA</code> and only <code>methodC</code> of <code>ClassB</code>:</p>

   <p><sub>

    --testsToRun ClassA,ClassB/methodC

   </sub></p>

   </td>
  </tr>
  <tr>
   <td><sub><code>
   --e
   </code></sub></td>
   <td>
   <p><button class="badge-green">Espresso Only</button></p>
   <p>Provide a list of test options to Espresso. The key-value pairs supported by Espresso are documented here: <a href="https://developer.android.com/studio/test/command-line#AMOptionsSyntax">Android Developers: <code>am instrument</code> options</a>.</p>

   <p>Example: Execute all tests in class TestClassA</p>

   <p><sub>

    --e class com.example.android.TestClass

   </sub></p>

   <p>Example: Execute a specific test in class TestClassB</p>

   <p><sub>

    --e class com.example.android.TestClassB#methodName

  </sub></p>
  </td>
  </tr>
  <tr>
   <td><sub><code>
   --useTestOrchestrator
   </code></sub></td>
   <td>
   <p><button class="badge-green">Espresso Only</button></p>
   <p>If set, the instrumentation will start with Test Orchestrator version 1.1.1 in use.</p>

   **NOTE**: With Test Orchestrator, it is in most cases recommended to also add the `--e clearPackageData true` parameter to remove all shared state from your device's CPU and memory after each test.

   </td>
  </tr>
</table>


### Code Examples

The code examples below contain all required Sauce Runner for Real Devices parameters, with the Data Center option set to US.

<table>
  <tr>
   <td><p><strong>XCUITest</strong></p>

    java -jar runner.jar xcuitest --test DummyTestingApp-Runner.ipa
    --app DummyTestingApp.ipa --apikey <apikey> --datacenter US
  </td>   
  </tr>

  <tr>
  <td><strong>Espresso</strong>

    java -jar runner.jar espresso --test DummyTestingApp-Runner.apk
    --app DummyTestingApp.apk --apikey <apikey> --datacenter US

  </td>
  </tr>
</table>

### Using Sauce Connect Proxy
If you need Sauce Runner to connect to the internet through a proxy server, use the <code>-D</code> command to specify a direct domain connection to your proxy server and port. The parameters <code>http.proxyUser</code> and <code>http.proxyPassword</code> are optional and they can be used if the proxy needs authentication:

```java
-Dhttp.proxyHost=<your proxy server>
-Dhttp.proxyPort=<the port to use>
-Dhttp.proxyUser=<the username to use>
-Dhttp.proxyPassword=<the password to use>
```


<br/>

## Sauce Runner for Virtual Devices Command Line Options

Sauce Runner for Virtual Devices lets you run tests using the native testing frameworks like Espresso with virtual devices in the Sauce Labs testing cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

### Required

<table>
  <tr>
   <td><strong>Flag (Short)</strong>
   </td>
   <td><strong>Flag (Long)</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>-f</code>
   </td>
   <td><sub><code>
   --test-framework
   </code></sub></td>
   <td><p>Specifies the name of the test framework you want to use. At the moment, Espresso is the only supported option.</p><sub>

    -f espresso
    --test-framework=espresso

   </sub></td>
  </tr>
  <tr>
   <td><sub><code>-u</code></sub></td>
   <td><sub><code>
   --user
   </code></sub></td>
   <td><p>Your Sauce Labs username. You can also use the environment variable <code>SAUCE_USERNAME</code> to provide your login information. The command line argument will take precedence over the <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921">environment variable</a>. Example:</p><sub>

    -u test_user
    --user=test_user
    export $SAUCE_USERNAME=test_user

   </sub></td>
  </tr>
  <tr>
   <td><code>-k</code>
   </td>
   <td><sub><code>
   --api-key
   </code></sub></td>
   <td><p>Your Sauce Labs API key, which you can find under User Settings in the Sauce Labs interface. You can also use the environment variable <code>SAUCE_ACCESS_KEY</code> to provide your login information. The command line argument will take precedence over the environment variable. Example:</p><sub>

    -k aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
    --api-key=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
    export $SAUCE_ACCESS_KEY=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee

   </sub></td>
  </tr>
  <tr>
   <td><sub><code>-a</code></sub></td>
   <td><sub><code>
   --app
   </code></sub></td>
   <td><p>The local path or publicly accessible URL to the location of the application you want to test.</p><sub>

    -a ./helloworld.apk
    --app='https://the.bestapp.ai/helloworld.apk'

   </sub></td>
  </tr>
  <tr>
   <td><sub><code>-t</code></sub></td>
   <td><sub><code>
   --test-app
   </code></sub></td>
   <td><p>The local path or publicly accessible URL to the location of the test package you want to use.</p><sub>

    -t ./app-debug-AndroidTest.apk
    --test-app='https://the.bestapp.ai/app-debug-AndroidTest.apk'

   </sub></td>
  </tr>
</table>


#### `-d --devices`
The type of device you want to use with your test. You can specify two or more device arguments to run tests on multiple devices in parallel, and each device will execute the full test suite. You specify the type of device to use by setting the required `deviceName` and `platformVersion` property.

| Property  | Required  | Description |        
| :------------- |:-------------  | :-------------  |
| `deviceName` | Yes | The name of the device to use. You can use the Sauce Labs Platform Configurator to look up the Appium deviceName for supported devices.
| `platformVersion` | Yes | The operating system version of the device you want to use. Supported values depend on the device.You can use the Sauce Labs Platform Configurator to look up the Appium platformVersion for the device.
| `locale` | No | Locale of the device.
| `orientation` | No | Orientation of the device. Supported values are: <ul><li>portrait (default)</li><li>landscape</li></ul>

**Examples**

```sh
# Test on one device
-d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'

# Test on two devices
--devices='deviceName=LG Nexus 4 GoogleAPI Emulator,platformVersion=4.4' \
--devices='deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'
```

### Optional

#### `-e --exclude-tests` or `-i --include-tests`
Optional parameter to run a subset of tests. You can provide a test filter to either exclude or include tests. By default, the full test suite is executed.

| Filter  | Description      
| :------------- |:-------------  
| `class com.example.MyClass#testLogin` | Filters one test method
| `class com.example.MyClass#testLogin, com.example.MyClass#testOrder` | Filters two test methods
| `class com.example.MyClass` | Filters a test class
| `package com.example.testPackage` | Filters a package
| `size small` or `size medium` or `size large` | Filters by size. Tests should be annotated with `SmallTest`, `MediumTest` or `LargeTest`. **Cannot be used for exclusion.**
| `annotation com.example.MyAnnotation` | Filters by annotation

**Examples**

```sh
# Run only one test method
--include-tests='class com.example.MyClass#testLogin'

# Run all but one test class
--exclude-tests='class com.example.MyClass'

# Run only the large tests
--include-tests='size large'
```

#### `-n --tunnel-identifier`
Parameter to specify a [Sauce Connect Proxy tunnel](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365718) to use with the tests.

**Examples**

```sh
-n dev_tunnel
--tunnel-identifier=dev_tunnel
```

#### `--data-center`
Optional parameter to specify a Sauce Labs data center. Options are `us-west-1` and `eu-central-1`.

**Example**

```sh
--data-center eu-central-1
```

#### `--skip-download-junit-reports`
Optional parameter to skip the download of the JUnit files at the end of the test suite.

#### `-v --verbose`
Optional parameter to set the verbosity of console output. Valid options as `DEBUG`, `INFO`, `WARN` and `ERROR`.

#### `-h --help`
Print this command line reference to the console.

#### `--version`
Version information for Sauce Runner.

### Code Examples

#### Espresso

<p>Below is a Sauce Runner for Virtual Devices code example that uses all required parameters. It's testing the application `helloworld.apk` simultaneously on two emulators — Galaxy S8 and Pixel — using the Espresso test suite `espresso-test-suite.apk`.</p>

<p>`Sauce-Runner-Virtual` installs `helloworld.apk` and `espresso-test-suite.apk` on the Sauce emulators and launches the Espresso test suite on both emulators at the same time. `Sauce-Runner-Virtual` exits when all the tests have completed. `Sauce-Runner-Virtual` exits with status code zero if all the tests passed, otherwise it exits with status code 1.</p><p><sub>

```sh
./sauce-runner-virtual \
   -u test_user \
   -k 1234-1235 \
   -f espresso \
   -a ./helloworld.apk \
   -t ./espresso-test-suite.apk \
   -d 'deviceName=Samsung Galaxy S8 HD GoogleAPI Emulator,platformVersion=7.0' \
   -d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.1'
   ```

</sub></p>
