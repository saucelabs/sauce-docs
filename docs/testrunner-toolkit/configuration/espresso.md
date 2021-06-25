---
id: espresso
title: "Configuration Syntax: Espresso"
sidebar_label: Espresso
---


Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration/common-syntax)for information regarding fields such as `apiVersion`, `kind`, `suites`, `sauce`, etc.

## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-espresso-example/blob/master/.sauce/config.yml
```

## `espresso`

__Description__: Details specific to the `espresso` configuration.

__Type__: *object*

__Example__:
```yaml
espresso:
  app: ./apps/calc.apk
  testApp: ./apps/calc-success.apk
```

### `app`

__Description__: Path to the application. It supports expanded enviornment variable.

__Type__: *string*

__Examples__:
```yaml
  app: ./apps/calc.apk
```

```yaml
  app: $APP
```

### `testApp`

__Description__: Path to the testing application. It supports expanded enviornment variable.

__Type__: *string*

__Examples__:
```yaml
  testApp: ./apps/calc-success.apk
```

```yaml
  testApp: $TEST_APP
```

## `emulators`

__Description__: Field for defining emulator details such as the name, orientation, and
platformVersions.

__Type__: *object*

__Example__:
```yaml
emulators:
  - name: "Android GoogleApi Emulator"
    orientation: portrait
    platformVersions:
      - "11.0"
      - "10.0"
```

### `name`

__Description__: Name of the device. All supported devices can be found by following this [link](https://app.saucelabs.com/live/web-testing/virtual)

__Type__: *string*

__Example__:
```yaml
  - name: "Android GoogleApi Emulator"
```

### `orientation`

__Description__: Screen orientation.

__Type__: *enum*

__Values__: *portrait*, *landscape*

__Example__:
```yaml
  orientation: portrait
```

### `platformVersions`

__Description__: Platform version. All supported platform versions can be found by following this [link](https://app.saucelabs.com/live/web-testing/virtual)

__Type__:  *array*

__Example__:

```yaml
  platformVersions:
    - "11.0"
    - "10.0"
```

## `devices`

__Description__: Field for requesting real devices for the test.

You can request a specific device using its ID, or you can specify a set of criteria to choose the first available device that matches the specifications.

When an ID is specified, it supersedes the other settings.

__Type__: *[]object*

__Example__:
```yaml
devices:
  - name: "Google Pixel.*"
    platformVersion: 8.1
  - id: Google_Pixel_2_real_us
```

### `id`

__Description__: Request a specific device by its id. You can look up device IDs in the Sauce Labs app or using our [Get Devices API request](https://docs.saucelabs.com/dev/api/rdc#get-devices).

__Type__:  *string*

__Example__:

```yaml
        id: Google_Pixel_2_real_us
```

### `name`

__Description__:  Request a device by its name.

__Type__:  *string*

__Example__:

Using complete name:
```yaml
      - name: Google Pixel 4 XL
```

Using pattern matching:
```yaml
        name: Google Pixel.*
```

### `platformVersion`

__Description__: Request that the device matches a specific platform version. You can use the `*` wildcard to denote flexibility.

__Type__:  *string*

__Example__:

```yaml
        platformVersion: 8.*
```

### `options`

__Description__:  Further specify certain device attributes within the pool of devices that match the `name` and `version` criteria.

__Type__: *object*

#### `carrierConnectivity`

__Description__: Request that the matching device is also connected to a cellular network.

__Type__:  *bool*

__Example__:

```yaml
       carrierConnectivity: true

```

#### `deviceType`

__Description__:  Request that the matching device is a specific type of device. Values:  `ANY`, `TABLET`, or `PHONE`.

__Type__:  *string*

__Example__:

```yaml
        deviceTypecarrierConnectivity: TABLET
```

#### `private`

__Description__: Request that the matching device is from your organization's private pool.

__Type__:  *bool*

__Example__:

```yaml
        private: true
```


## `testOptions`

__Description__: A set of parameters allowing you to select tests for the suite based on matching attributes.

__Type__: *object*

__Example__:
```yaml
testOptions:
  class:
    - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
  notClass:
    - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
  size: small
  package: com.example.android.testing.androidjunitrunnersample
  annotation: com.android.buzz.MyAnnotation
  numShards: 4
  clearPackageData: true
```

### `class`

__Description__: Instructs `saucectl` to only run the specified classes for this test suite.

__Type__: *array*

__Example__:
```yaml
  class:
    - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
```

### `notClass`

__Description__: Instructs `saucectl` to run all classes for the suite *except* those specified here.

__Type__: *array*

__Example__:
```yaml
  notClass:
    - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
```

### `size`

__Description__: Instructs `saucectl` to run only tests that are annotated with the matching size value.

__Type__: *enum*

__Values__: *small*, *medium*, *large*

__Example__:
```yaml
  size: small
```

### `package`

__Description__: Instructs `saucectl` to run only tests in the specified package.

__Type__: *string*

__Example__:
```yaml
  package: com.example.android.testing.androidjunitrunnersample
```

### `annotation`

__Description__: Instructs `saucectl` to run only tests that match a custom annotation that you have set.

__Type__: *string*

__Example__:
```yaml
  annotation: com.android.buzz.MyAnnotation
```

### `numShards`

__Description__: Sets the number of separate shards to create. Read more about shard tests on the [Android developer site](https://developer.android.com/training/testing/junit-runner#sharding-tests).

When `numShards` is greater than 1, `saucectl` will create the create the sharded jobs automatically.

e.g. for this configuration:
```yaml
suites:
  - name: Sharded suite
    testOptions:
      numShards: 2
    emulators:
      - name: Android GoogleAPI Emulator
        platformVersions:
          - "11.0"
```

`saucectl` will automatically create two suites, each suite running a separate sharded set of tests.


__Type__: *int*

__Example__:
```yaml
  numShards: 4
```

### `clearPackageData`

__Description__: Removes all shared states from the testing device's CPU and memory at the completion of each test.

__Type__: *bool*

__Example__:
```yaml
  clearPackageData: true
```
