---
id: delete
title: "Virtual USB CLI: Delete"
sidebar_label: Delete
---

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar deleteSession \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

## Required

### `--sessionId` 

__Description__: provides `server` with the session ID, then reconnects your local machine to your desired device (static allocation).

__Example__:

```java
deleteSession --sessionId 12345
```

### `--username` 

__Description__: provides the `server` with your username credentials, then reconnects your local machine to your desired device (static allocation).

__Example__:
```java
deleteSession --username john.smith
```

### `--accessKey`

__Description__: provides the `server` with your API key for authentication, then reconnects your local machine to your desired device (static allocation).

__Example__:
```java
deleteSession --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
``` 

## Optional

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.
