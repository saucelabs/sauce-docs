---
id: examples
title: Examples
sidebar_label: Examples
description: Examples for both CDP API and BiDi API usage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The (Selenium) examples below are assuming that all prerequisits are met and you have successfully [initiated the webdriver](/web-apps/automated-testing/cdp-bidi/#1-using-selenium).

## CDP API
The CDP API provides automatically generated classes (based on CDP domains) and bindings to respective methods and events.
Below two examples, are listed. The full reference is available on the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) website

:::note
Selenium has stated in their reference that they will eventually move away from CDP, hence they suggest using the agnostic BiDi API, which abstracts away the implementation details of CDP.
:::

### Set Cookie
By setting cookies (e.g. for user preferences), you can test how your website behaves with different configurations.

<Tabs
groupId="lang-ex"
defaultValue="Python"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'WebdriverIO', value: 'WebdriverIO'},
]}>

<TabItem value="Java">

```java
devTools = ((HasDevTools) driver).getDevTools();
devTools.createSession();

devTools.send(
    Network.setCookie(
        "cheese",
        "gouda",
        Optional.empty(),
        Optional.of("www.selenium.dev"),
        Optional.empty(),
        Optional.of(true),
        Optional.empty(),
        Optional.empty(),
        Optional.empty(),
        Optional.empty(),
        Optional.empty(),
        Optional.empty(),
        Optional.empty(),
        Optional.empty()));
```

</TabItem>
<TabItem value="Python">


```py
async with driver.bidi_connection() as connection:
    execution = connection.devtools.network.set_cookie(
        name="cheese",
        value="gouda",
        domain="www.selenium.dev",
        secure=True
    )

    await connection.session.execute(execution)
```

</TabItem>
<TabItem value="WebdriverIO">

```javascript
async function setCookie() {
  await browser.setCookies([
    {
      name: "cheese",
      value: "gouda",
      domain: "www.selenium.dev",
      secure: true,
    },
  ]);
}
```

</TabItem>
</Tabs>

See also [alternative implementations](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/cdp_api/#set-cookie)

### Basic Auth
Basic Auth allows you to test websites that have basic access authentication implemented.
<Tabs
groupId="lang-ex"
defaultValue="Python"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'WebdriverIO', value: 'WebdriverIO'},
]}>

<TabItem value="Java">

```java
devTools = ((HasDevTools) driver).getDevTools();
devTools.createSession();
devTools.send(Network.enable(Optional.of(100000), Optional.of(100000), Optional.of(100000)));

String encodedAuth = Base64.getEncoder().encodeToString("admin:admin".getBytes());
Map<String, Object> headers = ImmutableMap.of("Authorization", "Basic " + encodedAuth);

devTools.send(Network.setExtraHTTPHeaders(new Headers(headers)));
```

</TabItem>
<TabItem value="Python">


```py
async with driver.bidi_connection() as connection:
    await connection.session.execute(connection.devtools.network.enable())

    credentials = base64.b64encode("admin:admin".encode()).decode()
    auth = {'authorization': 'Basic ' + credentials}

    await connection.session.execute(connection.devtools.network.set_extra_http_headers(Headers(auth)))
```

</TabItem>
<TabItem value="WebdriverIO">

```javascript
async function myTest() {
  const encodedAuth = Buffer.from("admin:admin").toString("base64");
  const headers = { Authorization: `Basic ${encodedAuth}` };

  await browser.url("http://localhost:3000/api/endpoint?headers=" + JSON.stringify(headers));
}
```

</TabItem>
</Tabs>

See also [alternative implementations](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/cdp_api/#basic-authentication)


## BiDi API
While the BiDi API is currently implemented with CDP, the same bindings are compatible with the WebDriver-BiDi Protocol, which is being implemented on a feature basis. See the full reference on the [WebDriver-BiDi Protocol](https://w3c.github.io/webdriver-bidi) website

### Console Logs
Listening to console events by type / level allows you to process them further.

<Tabs
groupId="lang-ex"
defaultValue="Python"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'WebdriverIO', value: 'WebdriverIO'},
]}>

<TabItem value="Java">

```java
CopyOnWriteArrayList<String> messages = new CopyOnWriteArrayList<>();
((HasLogEvents) driver).onLogEvent(consoleEvent(e -> messages.add(e.getMessages().get(0))));
```

</TabItem>
<TabItem value="Python">


```py
async with driver.bidi_connection() as session:
        log = Log(driver, session)

        async with log.add_listener(Console.ALL) as messages:
```

</TabItem>
<TabItem value="WebdriverIO">

```javascript
async function captureConsoleLogs() {
  const listenerFunction = function (message) {
    console.log("Console Log:", message);
  };

  await browser.call(() => {
    console.addListener("all", listenerFunction);
  });
}
```

</TabItem>
</Tabs>

See also [alternative implementations](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/bidi_api/#console-logs-and-errors)

### Network Interception
Network events can be intercepted for both requests and responses in order to consume or transform them.

<Tabs
groupId="lang-ex"
defaultValue="Python"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'WebdriverIO', value: 'WebdriverIO'},
]}>

<TabItem value="Java">

```java
CopyOnWriteArrayList<String> contentType = new CopyOnWriteArrayList<>();

try (NetworkInterceptor ignored =
    new NetworkInterceptor(
        driver,
        (Filter)
            next ->
                req -> {
                    HttpResponse res = next.execute(req);
                    contentType.add(res.getHeader("Content-Type"));
                    return res;
                })) {
```

</TabItem>
<TabItem value="Python">


```py
async with driver.bidi_connection() as connection:
    await connection.session.execute(connection.devtools.network.enable())
    listener = connection.session.listen(connection.devtools.network.ResponseReceived)

    content_types = []
    async with listener:
        async for event in listener:
            content_types.append(event.response.headers["content-type"])
            if "text/html; charset=utf-8" in content_types:
                break
```

</TabItem>
<TabItem value="WebdriverIO">

```javascript
async function captureContentTypes() {
  const contentTypes = [];

  const listener = async (event) => {
    if (event.name === 'Network.responseReceived') {
      const contentType = event.params.response.headers['Content-Type'];
      contentTypes.push(contentType);

      if (contentType === 'text/html; charset=utf-8') {
        await browser.removeListener('Network.responseReceived', listener);
      }
    }
  };

  await browser.on('Network.responseReceived', listener);

  console.log('Captured content types:', contentTypes);
}
```

</TabItem>
</Tabs>

See also [alternative implementations](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/bidi_api/#response-information)