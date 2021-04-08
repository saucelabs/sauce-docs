---
id: connect
title: "Virtual USB CLI: Connect"
sidebar_label: Connect
---

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar connect \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

## Required

### `--sessionId` 

__Description__: provides `server` with the session ID, then connects the device to your local machine.

__Example__:

```java
connect --sessionId 12345
```

### `--username` 

__Description__: provides the `server` with your username credentials. then connects the device to your local machine.

__Example__:
```java
connect --username john.smith
```

### `--accessKey`

__Description__: provides the `server` with your API key for authentication, then connects the device to your local machine.

__Example__:
```java
connect --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```        

### `--serverHost`
__Description__: Virtual USB server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default: `33657`.
