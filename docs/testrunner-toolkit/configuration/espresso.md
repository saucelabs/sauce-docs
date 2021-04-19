---
id: espresso
title: "Configuration Syntax: Espresso"
sidebar_label: Espresso
---

import Highlight from '../../../src/components/highlight.jsx'

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

__Description__: Path to the application.

__Type__: *string*

__Example__:
```yaml
  app: ./apps/calc.apk
```

### `testApp`

__Description__: Path to the testing application.

__Type__: *string*

__Example__:
```yaml
  testApp: ./apps/calc-success.apk
```

## `devices`

__Description__: Field for defining device details such as the device name, orientation, and 
formVersions.

__Type__: *object*

__Example__:
```yaml
devices:
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
