---
id: real-device-access-api-sauce-hosted-appium
title: Appium Over RDC Access API 
sidebar_label: Sauce Labs Hosted Appium
---

# Faster, Smarter Appium Testing with RDC Access API Sessions

For testers, time is a critical resource. This guide demonstrates how to use the Sauce Labs Access API to use your devices more efficiently
and decrease the runtime of your Appium test suite. This approach enables you to run more tests, get faster feedback, and gain greater
control over your mobile testing workflow.

You can find full code sample [below](sauce-labs-hosted-appium.md#how-it-looks-in-practice):

## The Test-per-Session Model vs. The Suite-per-Session Model

Think about a traditional Appium test run. For every single test, you typically have to:

**Traditional Model (Test-per-Session):**
1. Wait for a device to become available.
2. Wait for the device to be prepared.
3. Wait for the Appium session to start.
4. Run your test.
5. Tear down the session and release the device.
6. Repeat for every test in your suite.

This cycle means a lot of your pipeline's time is spent on repetitive setup and teardown, not on executing tests.

**The OpenAPI Session Model (Suite-per-Session):**

***The OpenAPI session model transforms this workflow.*** Instead of reserving a device for each individual Appium test, you reserve a
device once for the entire suite. You can then run any number of tests on that single, persistent device session.

1. Start a device session
2. Start Appium server once.
3. Run Test 1.
4. Run Test 2.
5. ...Run Test N
6. Tear down the session once.


## Core Value for Testers: Speed, Control, and Efficiency

### Accelerate Your Test Suite Execution
By paying the "startup cost" of getting a device and launching Appium only once, your subsequent tests become faster.

* ***Eliminate Redundant Waits:*** No more waiting for a new device for each test. The device is yours for the duration of
  the test suite.

* ***Instant Test Execution:*** Your second, third, and fourth tests can start immediately after the previous one finishes.
  This drastically shortens the feedback loop, allowing you to find—and verify fixes for—bugs faster than ever before.

### Unprecedented Control: Become a Device Orchestrator
An open session transforms the remote device into your personal workbench. You are no longer just running a test;
you are orchestrating the device's state to create more powerful and realistic test scenarios.

* ***Run Dependent Tests:*** Easily test workflows that span multiple steps, like adding an item to a cart in one test and
  checking out in another, all without restarting the app.

* ***Manipulate Device State:*** Between tests, you have full control. You can programmatically:
    * Push test data, files, or pre-configured settings.
    * Clear app cache or user data to start the next test from a clean slate.
    * Run diagnostic scripts.

* ***Debug with Precision:*** If a test fails, the device and app remain in their failed state. You can keep the session
  open, get the Live View URL, and manually inspect the device to understand exactly what went wrong.

### Centralizing Session Management

Running an entire test suite on a single device session introduces a new lifecycle to manage. A recommended pattern, shown in the example
below, is to centralize the device and Appium setup logic using a suite-level setup method (like JUnit 5's `@BeforeAll`).

This isolates the infrastructure management—reserving the device and starting Appium—from the test logic. As a result,
the individual `@Test` methods can be written to focus purely on application interactions, operating on the assumption
that an active session is already available.

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
   * This method reserves a device via the Sauce Labs  Access API and starts a persistent Appium server for that device.
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
    System.out.println("Executing first test");
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
    System.out.println("Executing second test");
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

***Note on Running the Example:*** For a complete, runnable example that includes all helper methods, please check out our [Java sample.](./samples/java/demo)
To run the tests, navigate to the `samples/java/tests` directory and execute the command `mvn test`.