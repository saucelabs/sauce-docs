---
id: continuous-integration
title: Continuous Integration with Visual E2E Testing
sidebar_label: Continuous Integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Integrate Screener into your Continuous Integration (CI) process, automatically triggering test runs and passing/failing builds based on visual changes detected. In this way, you can be sure your latest code changes do not contain any unexpected regressions.

## Screener CI Script

Screener provides a CI Script that integrates into your CI tool. This script waits for running tests to finish, and then will output the results. If visual regressions are found, it will fail the build. Otherwise, if no regressions are found, it will pass the build.

<<<<<<< HEAD
The CI Script has three required parameters:
=======
<<<<<<< HEAD
The CI Script has three required parameters:
=======
The CI Script has 3 required parameters:
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>API Key</td>
   <td>Your project's API key is available at the bottom of your Project Dashboard:
<img src={useBaseUrl('img/visual/e2e-api-key.png')} alt="API Key"/>
   </td>
  </tr>
  <tr>
   <td>Test Group ID</td>
   <td>Your Test Group ID is available from the Test Group's Dashboard:
<img src={useBaseUrl('img/visual/e2e-group-id.png')} alt="Group ID"/>
   </td>
  </tr>
  <tr>
   <td>Build Number</td>
   <td>The current build number from your CI tool.</td>
  </tr>
</table>

Environment Variables:
We recommend adding the API Key and Test Group ID parameters as environment variables to your CI tool:
* SCREENER_API_KEY
* SCREENER_GROUP_ID

The Build Number should already be available as an environment variable in your CI tool. Please refer to your CI tool documentation for what variable name it may be.


## For WebDriver Tests

Assuming you have already [integrated Screener into your WebDriver tests](/visual/e2e-testing/integrations/selenium-webdriver).

In your WebDriver test, you will need to add the Build Number to your desiredCapabilities object via a "build" property, for the CI script to reference. Here is an example:

```java
capabilities: {
  browserName: 'chrome',
  build: process.env.BUILD_NUMBER,
  screener: {
    ...
  }
}
```

## For Tests Run On Screener (Pages or Recorder)

Running a Screener Test using the CI Script will automatically trigger a test run against the Test Group ID passed into it.

>**NOTE**: If you do not want Screener to fail your build, you can alternatively trigger a Screener test run [via our API](/visual/e2e-testing/rest-api) and receive email notifications when visual changes are found.

## CI Tool Examples

Contact our Support Team if you need help integrating Screener into your CI, or if you would like an example that we do not have listed here.


<Tabs
  defaultValue="CircleCI"
  values={[
    {label: 'CircleCI', value: 'CircleCI'},
    {label: 'Jenkins', value: 'Jenkins'},
    {label: 'Travis CI', value: 'Travis CI'},
    {label: 'Other', value: 'Other'},
  ]}>

<TabItem value="CircleCI">

<<<<<<< HEAD
**circle.yml**

=======
<<<<<<< HEAD
**circle.yml**

```yaml
=======
circle.yml
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87
dependencies:
  override:
    # Install Screener CI Script
    - curl -O https://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.zip
    - unzip -o screener-ci.zip

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87
test:
  override:
    # Run Screener Tests
    - ./screener-ci.sh $SCREENER_API_KEY $SCREENER_GROUP_ID $CIRCLE_BUILD_NUM
<<<<<<< HEAD
=======
<<<<<<< HEAD
```
=======
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87

</TabItem>
<TabItem value="Jenkins">

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87
#### **Linux/macOS Setup Instructions**

1. Create a new job in Jenkins (Freestyle project).
2. Set your Screener Environment Variables in Jenkins by using the [EnvInject plugin](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin)) or replacing the Screener Environment Variables below with actual values.
3. Next, you'll configure your job. Under the **Build** heading, click **Add build step** and select **Execute shell**.
4. Copy the commands below and paste into the "Command" text area.
  ```curl
  # Install Screener CI Script
  curl -O https://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.zip
  unzip -o screener-ci.zip

  # Run Screener CI Script
  ./screener-ci.sh $SCREENER_API_KEY $SCREENER_GROUP_ID $BUILD_NUMBER
  ```
5. Click **Save**.

#### **Windows Setup Instructions**

>**NOTE**: The Windows script depends on cURL being installed, and in the PATH. Or add the curl.exe file into the Jenkins workspace job folder.

1. Create a new job in Jenkins (Freestyle project).
2. Set your Screener Environment Variables in Jenkins by using the [EnvInject plugin](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin)) or replacing the Screener Environment Variables below with actual values.
3. Next, you'll configure your job. Under the **Build** heading, click **Add build step** and select **Execute Windows batch command**.
4. Copy the commands below, and paste into the "Command" text area.
    ```curl
    curl -O http://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.bat
    screener-ci.bat %SCREENER_API_KEY% %SCREENER_GROUP_ID% %BUILD_NUMBER%
    ```
5. Click **Save**.
<<<<<<< HEAD

#### **Linux/macOS Setup Instructions:**
=======
=======
Linux/macOS Setup Instructions:
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87
Create a new job in Jenkins (Freestyle project)
Configure the job:
Under the "Build" heading, click "Add build step" and select "Execute shell"
Copy the commands below, and paste into the "Command" textarea
This step assumes Screener Environment Variables have already been set in Jenkins (can use [EnvInject plugin](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin)). Or replace the Screener Environment Variables below with actual values.
<<<<<<< HEAD
Click "Save".

=======
Click "Save"
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87
# Install Screener CI Script
curl -O https://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.zip
unzip -o screener-ci.zip

Windows Setup Instructions:

>**NOTE**: The Windows script depends on cURL being installed, and in the PATH. Or add the curl.exe file into the Jenkins workspace job folder.

1. Create a new job in Jenkins (Freestyle project)
2. Configure the job:
  * Under the "Build" heading, click "Add build step" and select "Execute Windows batch command"
  * Copy the commands below, and paste into the "Command" text area.
    This step assumes Screener Environment Variables have already been set in Jenkins (can use [EnvInject plugin](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin)). Or replace the Screener Environment Variables below with actual values.
3. Click "Save".

```curl
curl -O http://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.bat
screener-ci.bat %SCREENER_API_KEY% %SCREENER_GROUP_ID% %BUILD_NUMBER%
```
<<<<<<< HEAD
=======
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87

</TabItem>
<TabItem value="Travis CI">

<<<<<<< HEAD
#### **.travis.yml**

=======
<<<<<<< HEAD
#### **.travis.yml**

=======
.travis.yml
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87
```yaml
install:
  # Install Screener CI Script
  - curl -O https://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.zip
  - unzip -o screener-ci.zip

script:
  # Run Screener Tests
  - ./screener-ci.sh $SCREENER_API_KEY $SCREENER_GROUP_ID $TRAVIS_BUILD_NUMBER
```

</TabItem>
<TabItem value="Other">

<<<<<<< HEAD
#### **Linux/macOS Setup Instructions**
=======
<<<<<<< HEAD
#### **Linux/macOS Setup Instructions**
=======
Linux/macOS
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87

```cURL
# Install Screener CI Script
curl -O https://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.zip
unzip -o screener-ci.zip

# Run Screener CI Script
./screener-ci.sh $SCREENER_API_KEY $SCREENER_GROUP_ID $BUILD_NUMBER
```
<<<<<<< HEAD

<br/>

#### **Windows Setup Instructions**

=======
<<<<<<< HEAD
<br/>

#### **Windows Setup Instructions**
=======

Windows
>>>>>>> 5863786b339d00421ee73dedf05fe4cc06c55b3c
>>>>>>> dd7cd7e43086ce671c66316478e1e350d150af87

The Windows script depends on [cURL](https://curl.haxx.se/download.html) being installed, and in the PATH.

```curl
curl -O http://s3-us-west-2.amazonaws.com/screener-files/ci/v2.1/screener-ci.bat
screener-ci.bat %SCREENER_API_KEY% %SCREENER_GROUP_ID% %BUILD_NUMBER%
```

</TabItem>
</Tabs>
