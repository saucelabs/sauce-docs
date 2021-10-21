---
id: apf-local-engine
title: "Using the Local Engine (APIF-Local)"
sidebar_label: Using the Local Engine
keywords:
    - api-testing
    - how-to
    - local-engine
    - apif
---

The `apif-local-Local` is the API Fortress local engine.

The objective of this program is to allow developers to run API Fortress tests on their computers, and to validate the tests being developed locally.

## What You'll Need

- A modern Linux/Mac/Windows computer
- Make sure Java 8 is installed and is present in the command line path
- Unzip the file provided by our team in a location that is convenient to you

## Configuration

The only essential key in the configuration is the license. Everything else can be provided on the command line. We do, however, suggest you configure the tool properly once you get accustomed to it and start using it regularly.

__Example__:

```yaml
license: "abcabcabc"
hooks:
  - key: examples
    url: https://mastiff.apifortress.com/app/api/rest/v3/abcabc-123-123-123
    credentials:
      username: info@example.com
      password: password1

  - key: local
    url: http://mydeployment.com:8080/app/api/rest/v3/abcabcabc-123-123-123
    credentials:
      username: john@doe.com
      password: password1

```

In this example, we configured two different hooks, related to two different API Fortress instances. The value of the “key” can be used to reference a profile without the need to explicitly introduce the hook URL and credentials every time in the command line.

The configuration file can be placed in multiple locations, based on your preferences.

The priority check is the following:

1. A path provided in the command line
2. The current working directory
3. The directory where apif-local.jar resides
4. A .apifortress sub-directory in the user’s home directory

## `apif-local` - Download

```java
java -jar apif-local.jar download [hook] <options>
```

This mode allows you to download full projects, or, selectively, tests, vault and environments, from an API Fortress platform instance. 

:::tip Use the Help feature
Use the following command to access details about the possible switches:

```java
java -jar apif-local.jar help
```

:::

__Examples__:

```java
java -jar apif-local.jar download examples -l /tmp/stuff
```

_Will download the full project represented by they key “examples” in the directory /tmp/stuff._

```java
java -jar apif-local.jar download examples -l /tmp/stuff -v
```

_Will download just the project’s vault._

## `apif-local` - Run

```java
java -jar apif-local.jar run [path] <options>
```

Runs an API Fortress test, located in the local file system. See apif-local.jar help for details about the possible switches.

The expected file system should look like the following:

```bash
\\any_directory
  \\api_fortress_tests
    \\simple_test_1
        | unit.xml
        | input.xml
    \\advanced_test_2
        | unit.xml
        | input.xml
```

Every test is represented by a directory, containing an `input.xml` and a `unit.xml` file. This exact format is also followed by `apif-local` - Download.

__Examples__:

```java
java -jar apif-local.jar run any_directory/api_fortress_tests/simple_test_1
```

Will run the test `simple_test_1`.

```java
java -jar apif-local.jar run any_directory/api_fortress_tests -r
```

Will run all the tests contained in the `api_fortress_tests` directory.
