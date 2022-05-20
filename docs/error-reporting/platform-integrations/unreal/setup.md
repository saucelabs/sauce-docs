---
id: setup
title: Setting Up Backtrace for Unreal Engine
sidebar_label: Setup
description: Add Backtrace to your Unreal Engine project.
---
Add Backtrace to your Unreal Engine project to automatically detect and report native crashes that occur in your apps and games.

Backtrace supports Unreal Engine's Crash Reporter, therefore installation of a Backtrace SDK is not required to capture crashes in your Unreal Engine apps or games.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Features
The Backtrace Unreal plugin reports on the following types of errors:

* Crashes - An end to the game play experience, where the game crashes or restarts.
* Hangs (mobile only) - Errors that occur when a game or an app is non-responsive.
* Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions.

## Supported Platforms
|Supported Platforms|Supported Systems|
|---------|---------|
|Mobile|Android, iOS|
|PC|Windows, MacOS, Linux|
|Game Consoles|PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Xbox Series S, Nintendo Switch|

:::note
For on-premise (self-hosted) users, the integration for Unreal Engine requires specific packages. For more information, contact support.
:::

## What You'll Need
* A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
* Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
* A Backtrace project and a submission token.

:::tip Generate a Submission Token
   1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
   1. Select **+**.
:::

### System Requirements
* Unreal Engine version 4.16 to 5.0


## Enable the Crash Reporter
1. In the Unreal Editor, go to **Edit > Project Settings**.
1. In the Project Settings, search for "crash reporter".
1. Under **Packaging**, enable **Include Crash Reporter**.
  <img src={useBaseUrl('img/error-reporting/unreal-enable-crashreporter.png')} alt="Enable the Crash Reporter in the Unreal Editor." />

:::note
If you're building from the command line, add the `-crashreporter` flag.
:::


## Initialize the Backtrace Client
<Tabs
  groupId="platforms"
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
    {label: 'Game Consoles', value: 'GameConsoles'},
  ]}>

<TabItem value="windows">

#### For Crashes in the Editor
1. In the root directory for your Unreal Engine project, open the Config folder.
1. Copy the `DefaultEngine.ini` file and paste it into the Engine > Config folder.
:::note
If the Engine folder doesn't exist at the root directory for your Unreal Engine project, create a new folder and name it Engine. Then in the Engine folder, create another folder and name it Config.
:::
1. Rename the file to `UserEngine.ini`.
1. Open the `UserEngine.ini` file and add the following lines:
  ```
  [CrashReportClient]
  CrashReportClientVersion=1.0
  DataRouterUrl="https://unreal.backtrace.io/post/{subdomain}/{submission-token}"
  ```
1. For the `DataRouterUrl`, provide the name of your [subdomain and a submission token](/error-reporting/platform-integrations/unreal/setup/#what-youll-need).

When your app or game crashes in the Unreal Editor, the Unreal Engine Crash Reporter dialog will appear and allow you to send the crash report to your Backtrace instance.


#### For Crashes in Packaged Builds
You can configure the crash reporter to be the default for all packaged builds or for a single packaged build.

To configure the crash reporter as the default for all packaged builds:
  1. In the root directory for your Unreal Engine project, open the Config folder.
  1. Copy the `DefaultEngine.ini` file and paste it into the following directory:
    `[UNREAL_ENGINE]/UnrealEngine/Engine/Programs/CrashReportClient/Config`
  :::note
  The directory could also be under `C:/Program Files/Epic Games/UE_[version]`. You can also search your system for 'CrashReportClient' to find it.
  :::
  1. Open the `DefaultEngine.ini` file and add the following lines:
    ```
    [CrashReportClient]
    CrashReportClientVersion=1.0
    DataRouterUrl="https://unreal.backtrace.io/post/{subdomain}/{submission-token}"
    ```
  1. For the `DataRouterUrl`, provide the name of your [subdomain and a submission token](/error-reporting/platform-integrations/unreal/setup/#what-youll-need).

To configure the crash reporter for a packaged build:
  1. In the root directory for your Unreal Engine project, open the Config folder.
  1. Copy the `DefaultEngine.ini` file and paste it into the following directory:
      - For Unreal Engine 4.25 and earlier:
    `[BUILD_DIRECTORY]/WindowsNoEditor/Engine/Programs/CrashReportClient/Config/NoRedist`
      - For Unreal Engine 4.26 and higher:
    `[BUILD_DIRECTORY]/WindowsNoEditor/Engine/Restricted/NoRedist/Programs/CrashReportClient/Config`
    :::note
    Create the subdirectories if they do not exist.
    :::
  1. Open the `DefaultEngine.ini` file and add the following lines:
    ```
    [CrashReportClient]
    CrashReportClientVersion=1.0
    DataRouterUrl="https://unreal.backtrace.io/post/{subdomain}/{submission-token}"
    ```
  1. For the `DataRouterUrl`, provide the name of your [subdomain and a submission token](/error-reporting/platform-integrations/unreal/setup/#what-youll-need).

</TabItem>
<TabItem value="android">

Integrate the [backtrace-android](https://github.com/backtrace-labs/backtrace-android) error reporting library with your Unreal Engine apps and games written in Java or Kotlin.

1. Download [BacktraceAndroid_UPL.xml](https://support.backtrace.io/hc/article_attachments/360092643371/BacktraceAndroid_UPL.xml).
1. In the `BacktraceAndroid_UPL.xml` file, provide the name of your [subdomain and a submission token](/error-reporting/platform-integrations/unreal/setup/#what-youll-need) for `BacktraceCredentials`.
    - Java:
      ```java
      BacktraceCredentials credentials = new BacktraceCredentials("https://submit.backtrace.io/{subdomain}/{submission-token}/json");  
      ```
    - Kotlin:
      ```java
      val backtraceCredentials = BacktraceCredentials("https://submit.backtrace.io/{subdomain}/{submission-token}/json")
      ```
1. In the directory for your Unreal Engine project, locate your app or game's `Build.cs` file.
1. Place the `BacktraceAndroid_UPL.xml` file in the same directory with the `Build.cs` file.
1. In the `Build.cs` file, add the following lines at the end of the `ModuleRules` class constructor:
  ```
  if (Target.Platform == UnrealTargetPlatform.Android)
  {
  	string PluginPath = Utils.MakePathRelativeTo(ModuleDirectory, Target.RelativeEnginePath);
  	AdditionalPropertiesForReceipt.Add("AndroidPlugin", System.IO.Path.Combine(PluginPath, "BacktraceAndroid_UPL.xml"));
  }
  ```
1. Download the [BacktraceWrapper.h](https://support.backtrace.io/hc/article_attachments/360090055151/BacktraceWrapper.h) header file and add it to your GameInstance.
1. To initialize the Backtrace client, use `BacktraceIO::FInitializeBacktraceClient`.
:::note
It's recommended to initialize the client from the `GameInstance::OnStart()` method. However, if the method is not available, you can initialize the client with any method you use to start your app or game process.
:::
:::note
Optionally, you can specify custom attributes and file attachment paths to submit with your error reports. If you choose to specify file attachment paths, they must be specified as Android paths. For example, to specify a file attachment path for your `ProjectSavedDir()`, use:
  ```
  if (Target.Platform == UnrealTargetPlatform.Android)
  #include "Misc/App.h"
  #if PLATFORM_ANDROID
  extern FString GFilePathBase;
  FString FileAttachmentPath = GFilePathBase + FString("/UE4Game/") + FApp::GetName() + TEXT("/") + FApp::GetName() + TEXT("/Saved") + TEXT("MyFileName.txt");
  #endif
  ```
For more details on how to convert your Unreal Engine paths to Android paths, see the conversion functions for `FAndroidPlatformFile::PathToAndroidPaths` in the `AndroidPlatformFile.cpp` file.
:::

To change the default configuration settings for the Backtrace client, you can change the settings in the `BacktraceAndroid_UPL.xml` file. For more information, see the [README](https://github.com/backtrace-labs/backtrace-android#readme) for the backtrace-android library.

</TabItem>
<TabItem value="ios">

Integrate the [backtrace-cocoa](https://github.com/backtrace-labs/backtrace-cocoa) error reporting library with your Unreal Engine apps and games for iOS written in Swift or Objective-C.

1. From [Assets](https://github.com/backtrace-labs/backtrace-cocoa/releases/tag/1.7.0), download and extract the `Backtrace.framework.zip` and the `Backtrace_PLCrashReporter.framework.zip` files.
1. Copy and paste the `Backtrace.framework.zip` and the `Backtrace_PLCrashReporter.framework.zip` folders into the directory for your Unreal Engine project.
1. Locate your app or game's `Build.cs` file.
1. In the `Build.cs` file, add the following lines at the end of the `ModuleRules` class constructor:

  ```
  if (Target.Platform == UnrealTargetPlatform.IOS)
  {
    PublicAdditionalFrameworks.AddRange(
      new Framework[]
    {
      new Framework("Backtrace", "/Library/Frameworks/Backtrace.framework", "", true),
      new Framework("Backtrace_PLCrashReporter", "/Library/Frameworks/Backtrace_PLCrashReporter.framework", "", true)
    }
      );
  }
  ```
  :::note
  Make sure to reflect the path to where you've placed both frameworks within your game project.
  :::
1. To initialize the Backtrace client, use the following to import `Backtrace-Swift.h` from `Backtrace.framework/Headers`:

  ```
  #if PLATFORM_IOS
  #import <Backtrace/Backtrace-Swift.h>
  #endif

  void UYourGameInstanceBase::OnStart()
  {
  #if PLATFORM_IOS

  BacktraceCredentials *credentials = [[BacktraceCredentials alloc]
          initWithSubmissionUrl: [NSURL URLWithString: @"https://submit.backtrace.io/{subdomain}/{submission-token}/plcrash"]];
  BacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]
                                                    initWithCredentials: credentials
                                                    dbSettings: [[BacktraceDatabaseSettings alloc] init]
                                                    reportsPerMin: 3
                                                    allowsAttachingDebugger: NO
                                                    detectOOM: TRUE];
  BacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];
  #endif
  }
  ```
1. For the `initWithSubmissionUrl`, provide the name of your [subdomain and a submission token](/error-reporting/platform-integrations/unreal/setup/#what-youll-need).

For information on how to change the default configuration settings for the Backtrace client, see the [README](https://github.com/backtrace-labs/backtrace-cocoa#readme) for the backtrace-cocoa library.

</TabItem>
<TabItem value="macos">

To integrate error reporting in your Unreal Engine apps and games for macOS, see [PLCrashReporter](https://support.backtrace.io/hc/en-us/articles/360040105092).

</TabItem>
<TabItem value="linux">

To integrate error reporting in your Unreal Engine apps and games for Linux, see the [Crashpad Integration Guide](https://support.backtrace.io/hc/en-us/articles/360040516131-Crashpad-Integration-Guide#InitialIntegration).

</TabItem>
<TabItem value="GameConsoles">

To integrate error reporting in your Unreal Engine apps and games for game consoles, see the [Console Integration Guides](https://support.backtrace.io/hc/en-us/sections/360007642051-Video-Game-Technologies).

</TabItem>
</Tabs>

## Upload Debug Symbols
You must now ensure your build environment has been configured to generate debug symbols, which can then be uploaded to your Backtrace instance, a connected Symbol Server, an Amazon S3 bucket, or a Google Cloud storage bucket.

For information on how to generate symbols, see [Symbolication](/error-reporting/project-setup/symbolication/).

## Verify the Setup
At this point, you've installed and setup the Backtrace client to automatically capture crashes in your Unreal Engine game or app.

To test the integration, send a crash report to your Backtrace instance.

<Tabs
  groupId="platforms"
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
    {label: 'Game Consoles', value: 'GameConsoles'},
  ]}>

<TabItem value="windows">

To crash your game when it starts, create a class called MyActor and reference a blueprint. The blueprint can be attached to the BeginPlay event.

The header file (which has the .h extension) contains the class definitions and functions, while the implementation of the class is defined by the .cpp file. For example:
- `MyActor.h`:
    ```cpp
    // Fill out your copyright notice in the Description page of Project Settings.
    ​
    #pragma once
    ​
    #include "CoreMinimal.h"
    #include "GameFramework/Actor.h"
    #include "GenericPlatform/GenericPlatformCrashContext.h"
    #include "MyActor.generated.h"
    ​
    UCLASS()
    class BACKTRACE_API AMyActor : public AActor
    {
    	GENERATED_BODY()

    public:
    	// Sets default values for this actor's properties
    	AMyActor();
    ​
    protected:
    	// Called when the game starts or when spawned
    	virtual void BeginPlay() override;
    ​
    public:
    	// Called every frame
    	virtual void Tick(float DeltaTime) override;
    ​
    	UFUNCTION(BlueprintCallable, Category = "Backtrace Tools")
    		void DoCrashMe();
    ​
    };
    ```

- `MyActor.cpp`:
    ```cpp
    // Fill out your copyright notice in the Description page of Project Settings.
    ​
    ​
    #include "MyActor.h"
    ​
    // Sets default values
    AMyActor::AMyActor()
    {
     	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
    	PrimaryActorTick.bCanEverTick = true;
    ​
    }
    ​
    // Called when the game starts or when spawned
    void AMyActor::BeginPlay()
    {
    	Super::BeginPlay();
    	{
    ​
    			FGenericCrashContext::SetGameData(TEXT("BluePrintCallStack"), TEXT("BluePrintCallStackValue"));
    	}

    }
    ​
    // Called every frame
    void AMyActor::Tick(float DeltaTime)
    {
    	Super::Tick(DeltaTime);
    ​
    }
    ​
    void AMyActor::DoCrashMe()
    {
    ​
    	UE_LOG(LogTemp, Fatal, TEXT("I crash and burn. Bye bye now"));
    ​
    }
  ```  

</TabItem>
<TabItem value="android">

- Java:
  ```java
  try {
    // throw exception here
  }
  catch (Exception exception) {
    backtraceClient.send(new BacktraceReport(e));
  }  
  ```
- Kotlin:
  ```java
  try {
    // throw exception here
  }
  catch (e: Exception) {
    backtraceClient.send(BacktraceReport(e))
  }
  ```

</TabItem>
<TabItem value="ios">

- Swift:
  ```objc
  import UIKit
  import Backtrace

  @UIApplicationMain
  class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!,
                                                        token: "token")
        BacktraceClient.shared = try? BacktraceClient(credentials: backtraceCredentials)

        do {
            try throwingFunc()
        } catch {
            BacktraceClient.shared?.send { (result) in
                print(result)
            }
        }

        return true
    }
  }
  ```
- Objective-C:
  ```objc
  #import "AppDelegate.h"
  @import Backtrace;

  @interface AppDelegate ()

  @end

  @implementation AppDelegate

  - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    BacktraceCredentials *credentials = [[BacktraceCredentials alloc]
                                         initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]
                                         token: @"token"];
    BacktraceClient.shared = [[BacktraceClient alloc] initWithCredentials: credentials error: nil];

    // sending NSException
    @try {
        NSArray *array = @[];
        NSObject *object = array[1]; // will throw exception
    } @catch (NSException *exception) {
        [[BacktraceClient shared] sendWithException: exception completion:^(BacktraceResult * _Nonnull result) {
            NSLog(@"%@", result);
        }];
    } @finally {

    }

    return YES;
  }

  @end
  ```

</TabItem>
<TabItem value="macos">

To send a crash report to your Backtrace instance for macOS, see [PLCrashReporter](https://support.backtrace.io/hc/en-us/articles/360040105092).

</TabItem>
<TabItem value="linux">

To send a crash report to your Backtrace instance for Linux, see the [Crashpad Integration Guide](https://support.backtrace.io/hc/en-us/articles/360040516131-Crashpad-Integration-Guide#Sendcrashreports).

</TabItem>
<TabItem value="GameConsoles">

To send a crash report to your Backtrace instance for game consoles, see the [Console Integration Guides](https://support.backtrace.io/hc/en-us/sections/360007642051-Video-Game-Technologies).

</TabItem>
</Tabs>
