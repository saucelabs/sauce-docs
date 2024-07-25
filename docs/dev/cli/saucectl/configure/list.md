---
id: list
title: saucectl configure list
sidebar_label: list
---

Display the origin of the credentials, which can be collected from environment variables or a configuration file.

## Usage

```bash
$ saucectl configure list
```

## Examples

### Environment Source

```
Currently configured credentials:
	  Username: <user-id>
	Access key: ********-****-****-****-********7af7

Collected from: Environment variables($SAUCE_USERNAME, $SAUCE_ACCESS_KEY)
```

### Configuration Source

```
Currently configured credentials:
	  Username: <user-id>
	Access key: ********-****-****-****-********7af7

Collected from: Configuration file(/Users/<user>/.sauce/credentials.yml)
```
