---
id: logging
title: Logging
sidebar_label: Logging
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy gives you the ability to log all your network requests. It gives you an effortless way to monitor your app's network access.

<img src={useBaseUrl('/img/testfairy/sdk/logHttp.png')} alt="example issues"/>

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```js
TestFairy.addNetworkEvent(URI uri, String method, int code, long startTimeMillis, long endTimeMillis, long requestSize, long responseSize, String errorMessage);
```

Example

If you are using `OkHttp` or `Retrofit` all you need to do is add `CustomHttpInterceptor` to your client:

```js
// Be sure to import TestFairy
import com.testfairy.TestFairy;

public class CustomHttpInterceptor implements Interceptor {
    @Override
    public Response intercept(@NonNull Chain chain) throws IOException {

        Request request = chain.request();
        long startTimeMillis = System.currentTimeMillis();
        Long requestSize = request.body() != null ? request.body().contentLength() : 0;
        Response response;
        try {
            response = chain.proceed(request);
        } catch (IOException e) {
            long endTimeMillis = System.currentTimeMillis();
            TestFairy.addNetworkEvent(request.url().uri(), request.method(), -1, startTimeMillis, endTimeMillis, requestSize, -1, e.getMessage());
            throw e;
        }

        long endTimeMillis = System.currentTimeMillis();
        long responseSize = response.body() != null ? response.body().contentLength() : 0;
        TestFairy.addNetworkEvent(request.url().uri(), request.method(), response.code(), startTimeMillis, endTimeMillis, requestSize, responseSize, null);
        return response;
    }
}


OkHttpClient client = new OkHttpClient.Builder()
    .addInterceptor(new CustomHttpInterceptor())
    .build();
```

</TabItem>

<TabItem value="iosC">

```js
[TestFairy addNetwork:(NSURLSessionTask *)task error:(NSError *)error]
```

Example

If you are using `NSURLConnection`, all you need to do is add `callback` to your request at the beginning and end of the request.

:::note

If you have `AFNetworking` added to your project, network requests are automatically captured when enabled in your build settings.

:::

```js
// Be sure to import TestFairy
#import "TestFairy.h"

__block NSURLSessionTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
    // ...
    [TestFairy addNetwork:task error:error];
}];
[TestFairy addNetwork:task error:nil];
[task resume];
```

</TabItem>

<TabItem value="iosS">

```js
TestFairy.addNetwork(<URLSessionTask>, error:<NSError>)
```

Example

If you are using `URLConnection`, all you need to do is add callback to your request at the beginning and end of the request:

```js
var task: URLSessionTask? = nil
task = URLSession.shared.dataTask(with: URL(string:"")!) { (data, response, error) in
    TestFairy.addNetwork(task, error: error)
}
TestFairy.addNetwork(task, error: nil)
task?.resume()
```

With `Alamofire`:

```js
import Alamofire

NotificationCenter.default.addObserver(forName: Request.didResume, object: nil, queue: nil) { (notification) in
    let info = notification.userInfo
    let request = info?["org.alamofire.notification.key.request"] as! Request
    request.tasks.forEach { TestFairy.addNetwork($0, error: nil) }
}

NotificationCenter.default.addObserver(forName: Request.didComplete, object: nil, queue: nil) { (notification) in
    let info = notification.userInfo
    let request = info?["org.alamofire.notification.key.request"] as! Request
    request.tasks.forEach { TestFairy.addNetwork($0, error: nil) }
}
```

</TabItem>

<TabItem value="react">

Example

TestFairy supports network logging for `Fetch API`. Call the following method to start capturing network calls.

```js
// Capture network logs
TestFairy.enableNetworkLogging(window);

// Capture network logs, including http headers and content
TestFairy.enableNetworkLogging(window, { includeHeaders: true, includeBodies: true });

// Disable network logging
TestFairy.disableNetworkLogging(window);
```

</TabItem>
</Tabs>

## Exception Logging

TestFairy allows developers to log up to five exceptions or errors for a session.

:::note

It does not mark the sessions as crashed; it will only log the exception or error to the session.

:::

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
{label: 'Cordova', value: 'cordova'},
{label: 'React Native', value: 'react'},
{label: 'Nativescript', value: 'native'},
]}>

<TabItem value="android">

```js
TestFairy.logThrowable(<throwable exception>);
```

Example

```js
// Be sure to import TestFairy
import com.testfairy.TestFairy;

TestFairy.logThrowable(new Throwable("Some Message"));
```

</TabItem>

<TabItem value="iosC">

```js
[TestFairy logError:<NSError>];
[TestFairy logError:<NSError> stacktrace:<NSArray<NSString>>];
```

Example

```js
// Be sure to import TestFairy
#import "TestFairy.h"

[TestFairy logError:[NSError errorWithDomain:@"com.your.domain" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Some Message"}]];
```

</TabItem>

<TabItem value="iosS">

```js
TestFairy.logError(<NSError>)
TestFairy.logError(<NSError>, stacktrace:<[String]>)
```

Example

```js
let error = NSError(domain: "com.your.domain", code: -1, userInfo: [NSLocalizedDescriptionKey : "Some Message"])
TestFairy.logError(error)
```

</TabItem>

<TabItem value="cordova">

```js
TestFairy.logException(<Error>);
```

Example

```js
const error = new Error("Some Message");
TestFairy.logException(error);
```

We recommend adding a listener to the `window` to capture `error` statements, automatically sending the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:

```js
window.addEventListener("error", function(e) {
    TestFairy.logException(e);
});
```

</TabItem>

<TabItem value="react">

```js
TestFairy.logException(<Error>);
```

Example

```js
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

const error = new Error("Some Message");
TestFairy.logException(error);
```

We recommend replacing the `Global Handler` with a custom method, automatically sending the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:

```js
const ErrorUtils = require('ErrorUtils');

const originalGlobalHandler = ErrorUtils.getGlobalHandler();
ErrorUtils.setGlobalHandler((error, isFatal) => {
    TestFairy.logException(error);
    originalGlobalHandler.handleException(error, isFatal);
});
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.logException(<Error>);
```

Example

```js
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

const error = new Error("Some Message");
TestFairySDK.logException(error);
```

We recommend adding a listener to the window to capture error statements, automatically sending the exception to TestFairy sessions. One suggestion we have is to add a method that looks like this:

```js
window.addEventListener("error", function(e) {
    TestFairy.logException(e);
});
```

</TabItem>

</Tabs>
