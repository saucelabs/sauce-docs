---
id: sessions
title: "Virtual USB CLI: List Sessions"
sidebar_label: List Sessions
---

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar sessions \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```
## Required

### `--username`
__Description__: returns a list of available, active device sessions based on `username`.

__Example__:
```java
sessions --username john.smith
```

### `--accessKey`
__Description__: returns a list of available, active device sessions based on `accessKey`.

__Example__:
```java
sessions --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

## Optional

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.
