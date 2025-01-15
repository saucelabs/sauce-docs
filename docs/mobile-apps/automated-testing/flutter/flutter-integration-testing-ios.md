---
id: flutter-integration-testing-ios
title: Flutter iOS
sidebar_label: Flutter iOS
description: Run your Flutter integration tests for iOS
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Unit tests and flutter widget tests validate individual classes, functions, or widgets.
You will not be able to validate how individual pieces work together in whole or capture the performance of an app running on real devices.
To perform these tasks you could use Flutters' integration test solution.

Follow this guide to run [integration tests](https://docs.flutter.dev/cookbook/testing/integration/introduction) for your Flutter app on
iOS.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for
  a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Flutter mobile app. If you don't have one, you could use our Flutter Demo App:
    - [Sauce Labs Flutter Demo App](https://github.com/saucelabs/my-demo-app-flutter)

## Prepare Your Flutter Application For Integration Testing

1. Launch the Xcode Application.
2. On Xcode, open the `ios/Runner.xcworkspace` in your flutter project, inside the ios folder.
3. Create a test target if you do not already have one via `File > New > Target...` and select `Unit Testing Bundle`.
4. Change the `Product Name` to `RunnerTests`.
5. Make sure `Target to be Tested` is set to `Runner` and language is set to `Objective-C`.
6. Make sure that the `iOS Deployment Target` of `RunnerTests` within the `Build Settings` section is the same as `Runner`.
7. In the new target, add a test file called `RunnerTests.m` (or any name of your choice) and replace the file content with the
   following :
    ```objective-c 
    @import XCTest;
    @import integration_test;

    INTEGRATION_TEST_IOS_RUNNER(RunnerTests)
   ```
8. Select your `Team` for both Targets in the `Signing & Capabilities` section.
9. Now you can open the Flutter project in your favorite IDE.
10. Update the `ios/Podfile` file by embedding in the existing Runner target :
   ```ruby
   target 'Runner' do
      # Do not change existing lines.
      ...

      target 'RunnerTests' do
        inherit! :search_paths
      end
   end
   ```
11. Create a directory called `integration_test` in the root of your Flutter project.
12. Create a file called `flutter_integration_test.dart` in the `integration_test` directory.
13. Update your testing dart file `flutter_integration_test.dart` to include the ***tearDownAll***,
    The purpose for this is to make sure we close the connection to the device after the tests have completed.
     ```dart
     import 'package:flutter/material.dart';
     import 'package:flutter_test/flutter_test.dart';
     import 'package:integration_test/integration_test.dart'; // Ensure you have this import
     // Add as app because we want to make sure the app loaded correctly on the device by calling the main function in the main dart file.
     import 'package:my_demo/main.dart' as app;
     void main() {
    
       // Ensure IntegrationTestWidgetsFlutterBinding is initialized
       final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized() as IntegrationTestWidgetsFlutterBinding;
    
    
       group('E2E Test With Flutter', (){
         tearDownAll(() async {
           // Signal that the test is complete
           binding.reportData = <String, dynamic>{
             'completed': true,
           };
         });
    
         testWidgets("First testing scenario increment 5 decrement 3", 
         (tester) async {
           app.main();
           await tester.pumpAndSettle(); // wait for app to be ready. 
          
           ...
         });
       });
     }
    ```
14. To build `integration_test/flutter_integration_test.dart` from the command line, run.
    ```bash title="Terminal Command"
     flutter build ios --config-only integration_test/flutter_integration_test.dart
    ```
15. Execute the following bash script at the root of your Flutter app, this bash script will build the flutter app and generate
    the `xctestrun` file which contains all the necessary configs to successfully trigger the integration test
    ```shell
    output="../build/ios_integration"
    product="build/ios_integ/Build/Products"
    
    flutter clean
    
    # Pass --simulator if building for the simulator.
    flutter build ios integration_test/foo_test.dart --release
    
    # move to the ios folder
    pushd ios
    # run the xcodebuild command to build the app for testing 
    xcodebuild build-for-testing \
    -workspace Runner.xcworkspace \
    -scheme Runner \
    -xcconfig Flutter/Release.xcconfig \
    -configuration Release \
    -derivedDataPath \
    $output -sdk iphoneos
    # go back the flutter application root folder
    popd
    
    # Open the product foler to get the xctestrun file and the application folder 
    pushd $product
    mkdir Payload
    cp -r Release-iphoneos/Runner.app Payload
    zip -r Payload.zip Payload
    zip -r Runner.ipa Payload
    popd
    ```
16. Configure `saucectl` to run the test.
    * Create a folder `saucectl` in your project root directory.
    * Inside this folder create a `flutter_integration_test_ios.yaml` with the following content:
    ```yaml
    apiVersion: v1alpha
    kind: xctest
    sauce:
       concurrency: 1
    xctest:
       app: ...../flutter/my-demo-app-flutter/build/app/outputs/flutter-apk/app-debug.apk
       testApp: ....../flutter/my-demo-app-flutter/build/app/outputs/apk/androidTest/debug/app-debug-androidTest.apk
    suites:
       - name: "Sauce Labs Espresso with flutter integration tests"
         testOptions:
           class:
             - com.example.my_demo_app_flutter.MainActivityTest
         devices:
           - name: "Google Pixel.*"
    artifacts:
       download:
         when: always
         match:
           - junit.xml
         directory: ./
    ```
    * Run the following commands to start the test on Sauce Labs
    ```bash title="Terminal Command"
    saucectl configure -u USERNAME -a ACCESS_KEY
    saucectl run -c sauceconnect/flutter_integration_test.yaml
    ```
    * Check the status of you test on `app.saucelabs.com`
    ``` bash title="saucectl run command output"
    12:24:52 INF Running Espresso in Sauce Labs
                                          (.                          
                                           #.                           
                                           #.                           
                               .####################                    
                             #####////////*******/######                
                           .##///////*****************###/              
                          ,###////*********************###              
                          ####//***********************####             
                           ###/************************###              
                            ######********************###. ##           
                               (########################  ##     ##     
                                       ,######(#*         ##*   (##     
                                   /############*          #####        
                               (########(  #########(    ###            
                             .#######,    */  ############              
                          ,##########  %#### , ########*                
                        *### .#######/  ##  / ########                  
                       ###   .###########//###########                  
                   ######     ########################                  
                 (#(    *#(     #######.    (#######                    
                        ##,    /########    ########                    
                               *########    ########                    
     _____        _    _  _____ ______    _____ _      ____  _    _ _____  
    / ____|  /\  | |  | |/ ____|  ____|  / ____| |    / __ \| |  | |  __ \
    | (___   /  \ | |  | | |    | |__    | |    | |   | |  | | |  | | |  | |
    \___ \ / /\ \| |  | | |    |  __|   | |    | |   | |  | | |  | | |  | |
    ____) / ____ \ |__| | |____| |____  | |____| |___| |__| | |__| | |__| |
    |_____/_/    \_\____/ \_____|______|  \_____|______\____/ \____/|_____/
      
    12:24:52 INF Checking if ...../my-demo-app-flutter/build/app/outputs/flutter-apk/app-debug.apk has already been uploaded previously
    12:24:52 INF Checksum: 1df0b6684973536fef4ae653d89661d6c48d6f699091511515b69735d6a80fbd
    12:27:26 INF Application uploaded. durationMs=153173 storageId=6849a64a-3c51-4423-87f2-b3660c972a36
    12:27:26 INF Checking if ...../build/app/outputs/apk/androidTest/debug/app-debug-androidTest.apk has already been uploaded previously
    12:27:26 INF Checksum: b5b15cb741b78fe7a5df171406c17ec9ea8fd6ac52623abf7a8df519270e281d
    12:27:26 INF Skipping upload, using storage:635a7a46-c1fc-4c43-9a05-60e09a2163b8
    12:27:26 INF Launching workers. concurrency=1
    12:27:26 INF Starting suite. region=us-west-1 suite="Sauce Labs Espresso with flutter integration tests"
    12:27:27 INF Suite started. deviceId= deviceName="Google Pixel.*" platform=Android platformVersion= private=false suite="Sauce Labs Espresso with flutter integration tests" url=https://app.saucelabs.com/tests/4b52d0880d5d41579d669a66fdca2da0
    12:27:36 INF Suites in progress: 1
    12:27:46 INF Suites in progress: 1
    12:27:56 INF Suites in progress: 1
    12:28:06 INF Suites in progress: 1
    12:28:16 INF Suites in progress: 1
    12:28:26 INF Suites in progress: 1
    12:28:27 INF Suite finished. passed=true suite="Sauce Labs Espresso with flutter integration tests" url=https://app.saucelabs.com/tests/4b52d0880d5d41579d669a66fdca2da0
      
    Results:
           Name                                                  Duration    Status    Platform    Device            Attempts  
    ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    ✔    Sauce Labs Espresso with flutter integration tests        1m0s    passed    Android     Google Pixel.*           1  
    ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    ✔    All tests have passed                                     1m1s
      
    Build Link: https://app.saucelabs.com/builds/rdc/159d98f0223246e59dd172bad78573cc
    ```

## Example Implementation

For a practical example of how to set up and run integration tests for Flutter apps, you can refer to
the [Sauce Labs Flutter demo application](https://github.com/saucelabs/my-demo-app-flutter) repository.
The steps outlined in this guide have already been implemented in that repository. You can follow along with the demo app to see how
everything is configured and run your tests accordingly.

## What's Next

:::info Next step

We're excited to share that Sauce Labs is actively working on expanding support for Flutter integration tests on iOS.
Stay tuned for updates as we continue to develop this capability!
:::