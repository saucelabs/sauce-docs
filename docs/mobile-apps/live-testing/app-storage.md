---
id: app-storage
title: Application Storage
sidebar_label: Application Storage
---
When testing mobile apps, you have the option to upload your app to our Application Storage. Here are some benefits:

Upload all of your mobile apps to the same location for cross-device Automated and Live testing with both virtual devices and real devices
Share your uploaded apps with your team members
Store apps for up to 60 days

## What You'll Need
* A Sauce Labs account
* A mobile app you wish to test. If you don't have one, you can use the Sauce Labs sample mobile app

## Upload an App to Real Devices with App-Upload
1. Log in to Sauce Labs and select **LIVE** from the options in the left-hand navigation.
2. Select **Mobile-App**.
3. You will see a list of previously uploaded apps.
4. To the right of the page, select **App Upload** to upload a new application.
**NOTE:** App-Upload UI currently supports Live Testing on Real Devices only. Use the REST API to upload apps for use with virtual devices.

live-test-mobile-app.png

5. You can either drag and drop an application, or browse for the file. We support mobile app *.APK and *IPA files up to 4 GB. Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

app-upload.png

6. To use an app you've previously uploaded, select "Check out the old repository" link at the bottom of the page. This will re-direct you to the legacy TestObject App Management UI with all your previously uploaded.

old-repository.png

## Delete Apps with the Delete Button
The **Delete** button will delete a whole application (e.g., a group of builds belonging to the same app package). Files associated with app identifiers (i.e., belong to the same platform and are accessible to the same team) are indicated by the + symbol next to version number. Also, the version number shown is the most recently updated file, not necessarily the "latest" version of the application.

latest-version.png
