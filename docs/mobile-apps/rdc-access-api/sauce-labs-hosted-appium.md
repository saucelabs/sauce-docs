---
id: real-device-access-api-sauce-hosted-appium
title: Appium Over RDC Access API
sidebar_label: Sauce Labs Hosted Appium
---

# Faster, Smarter Appium Testing with RDC Access API Sessions

For testers, time is a critical resource. This guide shows how to pair the Sauce Labs Access API with Sauce-hosted Appium so you can reserve a device once, reuse the Appium server, and finish your suites faster while keeping full control over the device lifecycle.

### Quick Start Overview
1. Create an RDC Access API session (`POST /sessions`) and wait until it becomes `ACTIVE`.
2. Start the Sauce Labs hosted Appium server for that session (`POST /sessions/{id}/appiumserver`).
3. Reuse the returned Appium URL across every test in your suite.
4. Run tests back-to-back, performing any device prep you need between them.
5. Close the session once, optionally rebooting the device for the next run.

You can find the full code sample [below](sauce-labs-hosted-appium.md#how-it-looks-in-practice). Endpoint names align with the [Access API spec](https://docs.dev.saucelabs.net/pr-preview/pr-3312/real-device-access-api/) under the `Session Lifecycle` and `Appium Server` tags.

## The Test-per-Session Model vs. The Suite-per-Session Model

Think about a traditional Appium test run. For every single test, you typically have to:

**Traditional Model (Test-per-Session):**
1. Wait for a device to become available.
2. Wait for the device to be prepared.
3. Wait for the Appium session to start.
4. Run your test.
5. Tear down the session and release the device.
6. Repeat for every test in your suite.

This cycle means a lot of your pipeline's time is spent on repetitive setup and teardown, not on running tests.

**The Access API Session Model (Suite-per-Session):**

***The Access API session model transforms this workflow.*** Reserve a device once for the entire suite, keep Appium running, and run every test against that persistent session.

1. Start a device session.
2. Start the Appium server once.
3. Run Test 1.
4. Run Test 2.
5. …Run Test N.
6. End the session when the suite completes.


## Core Value for Testers: Speed, Control, and Efficiency

### Accelerate Your Test Suite Run Time
By paying the “startup cost” of reserving a device and launching Appium only once, the rest of your tests run immediately.

* ***Eliminate redundant waits:*** No more waiting for a new device for each test—the device stays assigned to you.
* ***Instant follow-up tests:*** Subsequent tests start immediately after the previous one, tightening your feedback loop.

### Unprecedented Control: Become a Device Orchestrator
An open session transforms the remote device into your personal workbench. You are no longer just running a test;
you are orchestrating the device's state to create more powerful and realistic test scenarios.

* ***Run dependent tests:*** Chain multi-step workflows—add to cart in one test, check out in the next—without restarting the app.
* ***Manipulate device state:*** Between tests you can:
    * Push test data, files, or preconfigured settings.
    * Clear app cache or data to reset state.
    * Run diagnostics or log collection scripts.
* ***Debug with precision:*** When a test fails, keep the session open, grab the Live View URL, and inspect the exact failure state.

### Centralizing Session Management

Running an entire suite on one device session introduces a lifecycle to manage. The recommended pattern—demonstrated below—is to centralize the session/Appium setup inside a suite-level hook (for example, JUnit 5 `@BeforeAll`).

This isolates infrastructure concerns (reserving the device, starting Appium, cleaning up) from test logic so each `@Test` can assume an existing session.

## How It Looks in Practice
This modern Java and JUnit 5 example shows how elegantly this concept translates to code.

```java
public class DemoAppiumTest {

  private static String sessionId; // The ID for our reserved device session
  private static URL appiumUrl;    // The Appium URL, reused for all tests

  private static String BASE_URL = "https://api.us-west-1.saucelabs.com";
  private static String SAUCE_USERNAME = "username";
  private static String SAUCE_ACCESS_KEY = "access_key";

  private static final HttpClient client = HttpClient.newBuilder()
          .version(HttpClient.Version.HTTP_2)
          .connectTimeout(Duration.ofSeconds(20))
          .build();
  /**
   * This method reserves a device via the Sauce Labs Access API and starts a persistent Appium server for that device.
   *
   * The resulting session ID and Appium URL are stored for all subsequent tests.
   *
   * Runs once before any @Test methods.
   */
  @BeforeAll
  public static void setupSuite() throws Exception  {
    var createSessionRequestBody = """
            { "device": { "os": "android" }  }
            """;

    var createSessionResponse = POST("/rdc/v2/sessions", createSessionRequestBody);
    System.out.println("response: " + createSessionResponse);
    sessionId = createSessionResponse.getString("id");

    waitForSessionToBeActive(sessionId);

    var startAppiumServerRequestBody = """
            { "appiumVersion": "latest" }
            """;
    var startAppiumServerResponse = POST("/rdc/v2/sessions/%s/appiumserver".formatted(sessionId), startAppiumServerRequestBody);
    appiumUrl = new URL(startAppiumServerResponse.getString("url"));
  }

  /**
   * The FINAL cleanup. This releases the device after all tests are done.
   */
  @AfterAll
  public static void tearDownSuite() throws IOException, InterruptedException {
    if (sessionId != null) {
      System.out.println("Releasing Device Session: " + sessionId);
      var closeSessionResponse = DELETE("/rdc/v2/sessions/" + sessionId);
    }
  }

  // --- Rapid-Fire Tests ---
  // Each of these methods runs back-to-back on the SAME device.

  @Test
  public void first_test() {
    System.out.println("Running first test");
    var capabilities = new MutableCapabilities();
    var driver = new AndroidDriver(appiumUrl, capabilities);

    try {
      driver.get("https://www.saucelabs.com");
    } finally {
      // This quits the Appium client connection for this specific test.
      // The underlying device session remains active for the next test.
      driver.quit();
    }
  }

  @Test
  public void second_test() {
    System.out.println("Running second test");
    var capabilities = new MutableCapabilities();
    var driver = new AndroidDriver(appiumUrl, capabilities);

    try {
      driver.get("https://www.youtube.com");
    } finally {
      // This quits the Appium client connection for this specific test.
      // The underlying device session remains active for the next test.
      driver.quit();
    }
  }



  // ... Helper methods
  private static void waitForSessionToBeActive(String sessionId) throws Exception {
    System.out.println("Waiting for session active...");
    for (int i = 0; i < 5; i++) {
      var getSessionResponse = GET("/rdc/v2/sessions/" + sessionId);
      var currentState = getSessionResponse.getString("state");
      System.out.println("Current state: " + currentState + " Session info: " + getSessionResponse);

      if ("ACTIVE".equals(currentState)) {
        System.out.println("Session is now ACTIVE. Exiting loop.");
        return;
      }

      System.out.println("Waiting for 5 seconds...");
      Thread.sleep(5000); // sleep 5 seconds
    }
    throw new Exception("Session did not become active");
  }

  // SEND POST REQUEST
  private static JSONObject POST(String apiUrl, String requestBody) throws IOException, InterruptedException {
    String credentials = SAUCE_USERNAME + ":" + SAUCE_ACCESS_KEY;
    String encodedAuth = Base64.getEncoder().encodeToString(credentials.getBytes());

    var request = HttpRequest.newBuilder()
            .uri(URI.create(BASE_URL + apiUrl))
            .header("Authorization", "Basic " + encodedAuth)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

    String responseBody = response.body();
    return new JSONObject(responseBody);
  }

  // SEND GET REQUEST
  private static JSONObject GET(String apiUrl) throws IOException, InterruptedException {
    // Implementation
  }

  // HTTP DELETE REQUEST
  private static JSONObject DELETE(String apiUrl) throws IOException, InterruptedException {
    // Implementation
  }

}
```

***Note on Running the Example:*** For a complete, runnable example that includes all helper methods, please check out our [Java sample.](https://github.com/saucelabs/real-device-api/tree/main/samples/java/demo)
To run the tests, navigate to the `samples/java/tests` directory and run the command `mvn test`.