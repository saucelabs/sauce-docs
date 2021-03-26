---
id: virtual-devices
title: Sauce Runner Virtual Devices CLI Reference
sidebar_label: Virtual Devices
---


**Required**

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
  <tr>
   <td><sub><code>-d</code></sub></td>
   <td><sub><code>
   --devices
   </code></sub></td>
   <td><p>The type of device you want to use with your test. You can specify two or more device arguments to run tests on multiple devices in parallel, and each device will execute the full test suite. You specify the type of device to use by setting the required <code>deviceName</code> and <code>platformVersion</code> property.</p><sub>

   <table>
  <tr>
  <td><strong>Property</strong>
  </td>
  <td><strong>Required</strong>
  </td>
  <td><strong>Description</strong>
  </td>
 </tr>
 <tr>
  <td><code>deviceName</code>
  </td>
  <td>Yes
  </td>
  <td>The name of the device to use. You can use the <a href="https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/">Sauce Labs Platform Configurator</a> to look up the Appium <code>deviceName</code> for supported devices.
  </td>
 </tr>
 <tr>
  <td><code>platformVersion</code>
  </td>
  <td>Yes
  </td>
  <td>The operating system version of the device you want to use. Supported values depend on the device.You can use the <a href="https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/">Sauce Labs Platform Configurator</a> to look up the Appium <code>platformVersion</code> for the device.
  </td>
 </tr>
 <tr>
  <td><code>locale</code>
  </td>
  <td>No
  </td>
  <td>Locale of the device.
  </td>
 </tr>
 <tr>
  <td><code>orientation</code>
  </td>
  <td>No
  </td>
  <td>Orientation of the device. Supported values are:
<ul><li><code>portrait</code> (default)</li>
<li><code>landscape</code></li></ul>
  </td>
 </tr>
</table></sub>
<sub><b>Examples</b>

  ```sh
# Test on one device
-d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'

# Test on two devices
--devices='deviceName=LG Nexus 4 GoogleAPI Emulator,platformVersion=4.4' \
--devices='deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'
  ```

</sub>
   </td>
  </tr>
</table>


**Optional**

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
<td>
<sub><p><code>-e</code></p>
     <br/>
    <p><code>-i</code></p>
  </sub></td>
 <td><sub><p><code>--exclude-tests</code></p>
       <code>--include-tests</code></sub></td>
 <td><p>Optional parameter to run a subset of tests. You can provide a test filter to either exclude or include tests. By default, the full test suite is executed.</p><sub>

 <table>
   <tr>
    <td><strong>Filter</strong>
    </td>
    <td><strong>Description</strong>
    </td>
   </tr>
   <tr>
    <td><code>class com.example.MyClass#testLogin</code>
    </td>
    <td>Filter one test method
    </td>
   </tr>
   <tr>
    <td>
    <p><code>class com.example.MyClass#testLogin,</code></p>
    <p><code>com.example.MyClass#testOrder</code></p>
    </td>
    <td>Filter two test methods
    </td>
   </tr>
   <tr>
    <td><code>class com.example.MyClass</code>
    </td>
    <td>Filter a test class
    </td>
   </tr>
   <tr>
    <td><code>package com.example.testPackage</code>
    </td>
    <td>Filter a package
    </td>
   </tr>
   <tr>
    <td><code>size small|medium|large</code>
    </td>
    <td>Filter by size. Tests should be annotated with <code>SmallTest</code>, <code>MediumTest</code> or <code>LargeTest.</code>Cannot be used for exclusion.
    </td>
   </tr>
   <tr>
    <td><code>annotation com.example.MyAnnotation</code>
    </td>
    <td><p>Filter by annotation</p>

    # Run only one test method
      --include-tests='class com.example.MyClass#testLogin'

    # Run all but one test class
      --exclude-tests='class com.example.MyClass'

    # Run only the large tests
      --include-tests='size large'

</td>
</tr>
 </table>
 </sub></td>
</tr>
<tr>
 <td><sub><code>-n</code></sub></td>
 <td><sub><code>
 --tunnel-identifier
 </code></sub></td>
 <td><p>Parameter to specify a <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365718">Sauce Connect Proxy tunnel</a> to use with the tests.</p> <sub>

 ```sh
 -n dev_tunnel
 --tunnel-identifier=dev_tunnel
 ```

 </sub></td>
</tr>
<tr>
 <td></td>
 <td><sub><code>
 --data-center
 </code></sub></td>
 <td><p>Optional parameter to specify a Sauce Labs data center. Options are <code>us-west-1</code> and <code>eu-central-1</code>.</p><sub>

 ```sh
 --data-center eu-central-1
 ```
 </sub></td>
</tr>
<tr>
 <td></td>
 <td><sub><code>
 --skip-download-junit-reports
 </code></sub></td>
 <td><p>Optional parameter to skip the download of the JUnit files at the end of the test suite.</p>
 </td>
</tr>
<tr>
 <td><sub><code>-v</code></sub></td>
 <td><sub><code>
 --verbose
 </code></sub></td>
 <td><p>Optional parameter to set the verbosity of console output. Valid options as <code>DEBUG</code>, <code>INFO</code>, <code>WARN</code> and <code>ERROR</code>.</p>
 </td>
</tr>
<tr>
 <td><sub><code>-h</code></sub></td>
 <td><sub><code>
 --help
 </code></sub></td>
 <td><p>Print this command line reference to the console.</p>
 </td>
</tr>
<tr>
 <td></td>
 <td><sub><code>
 --version
 </code></sub></td>
 <td><p>Version information for Sauce Runner.</p>
 </td>
</tr>
</table>


## Example Scripts

### Espresso

Below is a Sauce Runner for Virtual Devices code example that uses all required parameters. It's testing the application `helloworld.apk` simultaneously on two emulators — Galaxy S8 and Pixel — using the Espresso test suite `espresso-test-suite.apk`.

`Sauce-Runner-Virtual` installs `helloworld.apk` and `espresso-test-suite.apk` on the Sauce emulators and launches the Espresso test suite on both emulators at the same time. `Sauce-Runner-Virtual` exits when all the tests have completed. `Sauce-Runner-Virtual` exits with status code zero if all the tests passed, otherwise it exits with status code 1.

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
