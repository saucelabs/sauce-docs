---
id: flutter-integration-testing-android
title: Flutter Android
sidebar_label: Flutter Android
description: Run your Flutter integration tests for Android
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Unit tests and flutter widget tests validate individual classes, functions, or widgets.
You will not be able to validate how individual pieces work together in whole or capture the performance of an app running on real devices.
To perform these tasks you could use Flutters' integration test solution.

Follow this guide to run [integration tests](https://docs.flutter.dev/cookbook/testing/integration/introduction) for your Flutter app on Android.


## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Flutter mobile app. If you don't have one, you could use our Flutter Demo App:
    - [Sauce Labs Flutter Demo App](https://github.com/saucelabs/my-demo-app-flutter)

## Prepare Your Flutter Application For Integration Testing

1. Open your Flutter project in your favorite IDE.
2. In your Flutter app's `pubspec.yaml`, add the following dependencies:

   ```yaml
   dev_dependencies:
      integration_test:
         sdk: flutter
      flutter_test:
         sdk: flutter
   ```
3. Create an instrumentation test file in your application’s `android/app/src/androidTest/java/com/example/myapp` directory. Replace `com, example,` and `myApp` with the values from your app’s package name.

   Then, name this test file as `MainActivityTest.java` or another name of your choice.
    ```java
    package com.example.myApp;
    
    import androidx.test.rule.ActivityTestRule;
    import dev.flutter.plugins.integration_test.FlutterTestRunner;
    import org.junit.Rule;
    import org.junit.runner.RunWith;
    import com.example.myApp.MainActivity;
    
    @RunWith(FlutterTestRunner.class)
    public class MainActivityTest {
        @Rule
        public ActivityTestRule<MainActivity> rule = new ActivityTestRule<>(MainActivity.class, true, false);
    }
    ```

4. Update your application’s `myapp/android/app/build.gradle` file to ensure it uses androidx’s version of `AndroidJUnitRunner` and includes androidx libraries as a dependency.
   ```gradle
    android {
      ...
      defaultConfig {
        ...
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
      }
    }
    dependencies {
      testImplementation 'junit:junit:4.12'
      androidTestImplementation 'androidx.test:runner:1.2.0'
      androidTestImplementation 'androidx.test.espresso:espresso-core:3.2.0'
    }
   ```
5. Create a directory called `integration_test` in the root of your Flutter project.
6. Create a file called `flutter_integration_test.dart` in the `integration_test` directory.
7. Update your testing dart file `flutter_integration_test.dart` to include the ***tearDownAll***, 
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
8. Use the following `Gradle` commands to build an instrumentation test `.apk` file(test suite) using the `MainActivityTest.java` created in the `androidTest` directory as mentioned in step 3.
   ```bash title="Terminal Command"
    # Go to the android folder which contains the "gradlew" script used for building Android apps from the terminal
    pushd android
    # Build an Android test APK (uses the MainActivityTest.java file created in step 1)
    ./gradlew app:assembleAndroidTest

    # Build a debug APK by passing the integration test file
    ./gradlew app:assembleDebug -Ptarget="..../integration_test/flutter_integration_test.dart"
    # Go back to the root of the project
    popd
   ```

9. Configure `saucectl` to run the test.
   * Create a folder `saucectl` in your project root directory. 
   * Inside this folder create a `flutter_integration_test_android.yaml` with the following content:
   ```yaml
   apiVersion: v1alpha
   kind: espresso
   sauce:
      concurrency: 1
   espresso:
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

For a practical example of how to set up and run integration tests for Flutter apps, you can refer to the [Sauce Labs Flutter demo application](https://github.com/saucelabs/my-demo-app-flutter) repository. 
The steps outlined in this guide have already been implemented in that repository. You can follow along with the demo app to see how everything is configured and run your tests accordingly.

## What's Next

:::info Next step

We're excited to share that Sauce Labs is actively working on expanding support for Flutter integration tests on iOS.
Stay tuned for updates as we continue to develop this capability!
:::