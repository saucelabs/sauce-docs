---
id: espresso-virtual-devices-cli
title: Espresso Commands for Virtual Devices
sidebar_label: Espresso for VDC
---

Sauce Runner for Virtual Devices lets you run tests using the native testing frameworks like Espresso with virtual devices in the Sauce Labs testing cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

## Sauce Runner for Virtual Devices Commands

### Required

#### `-f` `--test-framework`
The name of the test framework to use. Espresso is the only current supported option. Example:

```
-f espresso
--test-framework=espresso
```
<br/>

#### `-u --user`
Your Sauce Labs username. You can also use the environment variable SAUCE_USERNAME to provide your login information. The command line argument will take precedence over the [environment variable](https://wiki.saucelabs.com/display/DOCSDEV/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials). Example:

```sh
-u test_user
--user=test_user
export $SAUCE_USERNAME=test_user
```
<br/>

#### `-k --api-key`
Your Sauce Labs API key, which you can find under User Settings in the Sauce Labs interface. You can also use the environment variable SAUCE_ACCESS_KEY to provide your login information. The command line argument will take precedence over the environment variable. Example:

```sh
-k aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
--api-key=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
export $SAUCE_ACCESS_KEY=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
```
<br/>

#### `-a --app`
The local path or publicly accessible URL to the location of the application you want to test. Example:

```sh
-a ./helloworld.apk
--app='https://the.bestapp.ai/helloworld.apk'
```
<br/>

#### `-t --test-app`
The local path or publicly accessible URL to the location of the test package you want to use. Example:

```sh
-t ./app-debug-AndroidTest.apk
--test-app='https://the.bestapp.ai/app-debug-AndroidTest.apk'
```
<br/>

#### `-d --devices`
The type of device you want to use with your test. You can specify two or more device arguments to run tests on multiple devices in parallel, and each device will execute the full test suite. You specify the type of device to use by setting the required `deviceName` and `platformVersion` property.

| Property  | Required  | Description |        
| :------------- |:-------------  | :-------------  |
| `deviceName` | Yes | The name of the device to use. You can use the Sauce Labs Platform Configurator to look up the Appium deviceName for supported devices.
| `platformVersion` | Yes | The operating system version of the device you want to use. Supported values depend on the device.You can use the Sauce Labs Platform Configurator to look up the Appium platformVersion for the device.
| `locale` | No | Locale of the device.
| `orientation` | No | Orientation of the device. Supported values are: <ul><li>portrait (default)</li><li>landscape</li></ul>

Examples:

```sh
# Test on one device
-d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'

# Test on two devices
--devices='deviceName=LG Nexus 4 GoogleAPI Emulator,platformVersion=4.4' \
--devices='deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'
```


## Optional

#### `-e --exclude-tests` or `-i --include-tests`
Enables you to run a subset of tests by excluding or including some. As an option, you can combine them with test filters to either . By default the full test suite is executed.

| Filter  | Description      
| :------------- |:-------------  
| `class com.example.MyClass#testLogin` | Filters one test method
| `class com.example.MyClass#testLogin, com.example.MyClass#testOrder` | Filters two test methods
| `class com.example.MyClass` | Filters a test class
| `package com.example.testPackage` | Filters a package
| `size small` or `size medium` or `size large` | Filters by size. Tests should be annotated with `SmallTest`, `MediumTest` or `LargeTest`. **Cannot be used for exclusion.**
| `annotation com.example.MyAnnotation` | Filters by annotation

Examples:

```sh
# Run only one test method
--include-tests='class com.example.MyClass#testLogin'

# Run all but one test class
--exclude-tests='class com.example.MyClass'

# Run only the large tests
--include-tests='size large'
```
<br/>

#### `-n --tunnel-identifier`
Parameter to specify a [Sauce Connect Proxy tunnel](https://wiki.saucelabs.com/display/DOCSDEV/Sauce+Connect+Proxy) to use with the tests. Example:

```sh
-n dev_tunnel
--tunnel-identifier=dev_tunnel
```
<br/>

#### `--data-center`
Optional parameter to specify a Sauce Labs datacenter.

Options:
* us-west-1
* eu-central-1

Example:

```sh
--data-center eu-central-1
```
<br/>

#### `--skip-download-junit-reports`
Optional parameter to skip the download of the JUnit files at the end of the test suite.
<br/>

#### `-v --verbose`
Optional parameter to set the verbosity of console output. Valid options as `DEBUG`, `INFO`, `WARN` and `ERROR`.
<br/>

#### `-h --help`
Print this command line reference to the console.
<br/>

#### `--version`
Version information for Sauce Runner.


## Exit Status Codes
Sauce Runner for Virtual Devices returns the following status codes based on test execution results.  

| Status Code        | Description           
| :------------- |:-------------
| 0  | All the tests passed on all devices.
| 1  | This status code can mean multiple things, it is important to refer to the logs to identify the problem: <ul><li>One or more tests failed during execution</li><li>User error like an invalid path to test files or invalid arguments</li><li>Sauce Labs infrastructure error while executing the test</li></ul>            

## Code Example Using All Required Parameters for Espresso

This example tests the application `helloworld.apk` simultaneously on two emulators, Galaxy S8 and Pixel, using the Espresso test suite `espresso-test-suite.apk`.

Sauce-Runner-Virtual installs `helloworld.apk` and `espresso-test-suite.apk` on Sauce emulators and launches the Espresso test suite on both emulators at the same time. `Sauce-Runner-Virtual` exits when all the tests have completed. `Sauce-Runner-Virtual` exits with status code zero if all the tests passed, otherwise it exits with status code 1.


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
