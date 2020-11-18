---
id: commands-vdc
title: Command Reference for Sauce Runner for Virtual Devices
sidebar_label: Commands
---

Sauce Runner for Virtual Devices lets you run tests using the native testing frameworks like Espresso with virtual devices in the Sauce Labs testing cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

## Command Reference

table

## Exit Status Codes
Sauce Runner for Virtual Devices returns the following status codes based on test execution results.  

| Status Code | Description
| :-------------------------- | :---
| 0 | All the tests passed on all devices.
| 1 | This status code can mean multiple things, it is important to refer to the logs to identify the problem: (1) One or more tests failed during execution; (2) User error like an invalid path to test files or invalid arguments; (3) Sauce Labs infrastructure error while executing the test.

## Example Using All Required Parameters for Espresso

./sauce-runner-virtual \
   -u test_user \
   -k 1234-1235 \
   -f espresso \
   -a ./helloworld.apk \
   -t ./espresso-test-suite.apk \
   -d 'deviceName=Samsung Galaxy S8 HD GoogleAPI Emulator,platformVersion=7.0' \
   -d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.1'

This example tests the application helloworld.apk simultaneously on two emulators, Galaxy S8 and Pixel, using the Espresso test suite espresso-test-suite.apk.

Sauce-Runner-Virtual installs helloworld.apk and espresso-test-suite.apk on Sauce emulators and launches the Espresso test suite on both emulators at the same time. Sauce-Runner-Virtual exits when all the tests have completed. Sauce-Runner-Virtual exits with status code zero if all the tests passed, otherwise it exits with status code 1.
