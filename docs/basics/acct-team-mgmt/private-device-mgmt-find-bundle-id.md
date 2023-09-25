## Retrieving the BundleID for Allow-listing Your Apps

To prevent our cleaning from removing your application after every session, this guide will help you to obtain the bundleID for these applications. 

Follow these steps during live testing:

1. Open a Live Testing session with an iOS Device.
2. Open Device logs in VERBOSE mode.
3. Clean the device logs.
4. Copy-paste this string in the search bar `SBApplicationStateDisplayIDKey`.
5. Open the application you want to be allow-listed.
6. Check the values of `SBApplicationStateDisplayIDKey`, which is the bundleID for any given app that has been launched.

<img src={useBaseUrl('img/mobile-apps/bundle-id.png')} alt="Bundle ID" width="800"/>
