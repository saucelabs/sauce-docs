---
id: java-best-Practices
title: Java Testing Best Practices
sidebar_label: Java Testing Best Practices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Flaky Java Tests
Most testers experience having to deal with flaky tests whether or not they realize it. Learn how to deal with flaky Java tests to improve your testing.

In the world of user interface (UI) testing we all have come across tests and UI behavior that is not 100% repeatable. In other words, sometimes tests are “flaky.” The challenge with these tests is in trying to determine what causes this flakiness, and finding ways to resolve it, so that we are able to test the UI in a reliable fashion without raising false alarms and creating test gaps.

### Failure Modes
The two most common situations that lead to flakiness are external factors over which one has no control, and the application or website you are testing not being in the expected state when you test it. Among the external factors, network conditions, different client types, and test infrastructure limitations are among the most common causes of flakiness.The way to diagnose these factors usually boils down to comparing the physical testing environment of the flaky test with the non-flaky one.

More challenging are those flaky tests that concern the application or website under test not being in the expected state when the test is run. This can be caused, for example, by someone having made a change in the source code between the first time a test suite as run, and the next time. In these situations, you will typically see errors like `ElementNotFoundException`, `ElementNotVisibleException`, `TimeoutException`, `InvalidElementStateException`, etc. The [Selenium 2.0 documentation](https://selenium.googlecode.com/svn/trunk/docs/api/py/common/selenium.common.exceptions.html) includes a full list of the exceptions that can be thrown when running a test, along with a description of the conditions that can cause them. Unlike the physical factors that can lead to flakiness, these “unexpected state” factors are easily diagnosed by inspecting the stack trace and isolating the specific components that led to the exception.

### Dealing with Flakiness
There are a couple ways to approach flaky behavior.

#### Use Timeouts
If you get a `TimeoutException`, which can be caused by external factors such as network latency, you can increase the amount of time for implicit timeouts and see if this improves the test behavior. However, keep in mind that this comes with the cost of increasing overall test run time,  and should not be considered as a permanent solution. If using an implicit time out helps resolve the flakiness, then within your test you should  use explicit waits or fluent waits, or a combination of the two, to make your tests more efficient and adaptive to changing test conditions.

**Explicit Waits**
An “explicit wait” waits for a single component to fulfill a condition, such as an element appearing on a page, for an explicit amount of time. In this code example, timeOut would be set to the amount of time in which the condition should be fulfilled.

```
WebDriverWait wait = new WebDriverWait(driver, timeOut );
wait.until(ExpectedConditions. visibilityOf (By. id ("My Button")));
```
**Fluent Waits**
A `FluentWait` “fluently” waits for a single component to fulfill a condition, checking every 5 seconds and ignoring the resulting exception or exceptions for a total duration of 30 seconds. In this example, the total maximum wait time is 30 seconds and the minimum wait time is 0 seconds, in case the element is present and visible after the first try. The exceptions to be ignored can also be defined for targeted handling of exceptions for the duration.

```
Wait<WebDriver> wait = new FluentWait(driver)
              .withTimeout(30, TimeUnit.SECONDS)
              .pollingEvery(5, TimeUnit.SECONDS)
              .ignoring(ElementNotFoundException.class)
              .ignoring(ElementNotVisibleException.class);
   wait.until(ExpectedConditions. visibilityOf (By. id ("My Button")));
   ```
#### Use Retry Rules
If waiting patiently doesn’t resolve your test flakiness, as a last resort you can use the JUnit test framework `TestRule` class, or the TestNG test framework `RetryAnalyzer` class. These classes will rerun tests that have failed without interrupting your test flow. However, you should use these only as a last resort, and very carefully, as rerunning failed tests can mask both flaky tests and flaky product features.

**JUnit Example**
This example shows how to use a test rule, along with a custom annotation, `@Retry`, to mark individual tests to retry.

```
public class RetryRule implements TestRule {

   private AtomicInteger retryCount;

   public RetryRule(int retries){
       super();
       this.retryCount = new AtomicInteger(retries);
   }
   @Override
   public Statement apply(final Statement base, final Description description) {
   return new Statement() {
           @Override
           public void evaluate() throws Throwable {
               Throwable caughtThrowable = null;

               while (retryCount.getAndDecrement() > 0) {
                   try {
                       base.evaluate();
                       return;
                   } catch (Throwable t) {
                       if (retryCount.get() > 0 &&                
                           description.getAnnotation(Retry.class)!= null) {
                           caughtThrowable = t;
                           System.err.println(
                                   description.getDisplayName() +
                                   ": Failed, " +
                                   retryCount.toString() +
                                   "retries remain");
                       } else {
                           throw caughtThrowable;
                       }
                   }
               }
           }
       };
   }
}
```

This annotation is used to mark the tests to retry.

```
//Retry.java
@Retention(RetentionPolicy.RUNTIME)
public @interface Retry {}
```

This is the usage within the test class.

```
//Snippet from test class member declaration
...
@Rule public RetryRule rule = new RetryRule(3);
...
//Snippet from test class test definition
@Test
@Retry
public void sampleTest(){...}
```

**TestNg**
You can use this analyzer class to retry failed tests, and reference it in the `TestNg @Test` annotation.

Sample TestNg RetryAnalyzer class

```
//RetryAnalyzer.java
public class RetryAnalyzer implements IRetryAnalyzer {
   private AtomicInteger count = new AtomicInteger(3);
   @Override
   public boolean retry(ITestResult result) {
       if (0 < count.getAndDecrement()) {
           return true;
       }
       return false;
   }
}
```

Usage within the test class

```
//Snippet from test class test definition
@Test(retryAnalyzer = RetryAnalyzer.class)
public void sampleTest(){...}
```

## Parallel Testing in Java with Maven and TestNG
This topic provides an example of parallel testing in Java using Maven Surefire to get the most out of the power and capacity available from your Selenium grid. The principles of multithreaded and object-oriented programming should apply to your language of choice.

Today, even a conventional laptop has 2 to 4 processor cores, on which a single task or test would use only a fraction of the available computing resources. You'll likely want to set up tests to run on multiple browsers at the same time, or even distribute all your tests across all available browsers.

### Terminology
There are essentially two types of tasks that your processor runs, each of which utilizes virtual memory in a different way:

* Heap: Virtual memory space designated for a process in memory.
* Process: A task running on a processor that owns its own private heap. This provides better data protection, but effectively has more overhead due to heap space not being shared. Build tools or libraries that refer to the parallel test instances as processes and forks would spawn processes for these tests.
* Thread: A task running within the confines of a process, which shares the heap space of the parent process and may share parts of the heap with other threads. This has poor data protection, but has less overhead. Build tools and libraries refer to threads simply as threads.

As these descriptions show, both processes and threads have their advantages and disadvantages relative to data security and virtual memory consumption. Depending on your test framework, test organization, and the build tools you’re using, you may want to use a combination of both types of tasks. In some cases, build tools or test frameworks will be using both types of tasks behind the scenes to help you with your build and test efforts.

### Toolchain
These are the basic components of a testing toolchain in Java:

* Language:  Java (v7+)
* Test Runner: TestNg (v6.9.+)
* Build Tool:  Maven (v3.+)
* Plugins: Maven Surefire Plugin (v2.18+)

### Preparing Tests for Parallel Execution
There are a few key points to pay attention to when designing tests for parallel execution, and best practices for any type of testing setup.

Your tests should be:
* Independent: The test should not depend on anything other than the defined setup and teardown methods, nor the order of execution
* Concise: Test one feature at time ,and have your tests fail with intelligible error messages, so you can isolate failing components or features correctly
* Repeatable: Your test should return the same result on the same version of the target application or website, using the same set of test parameters. In other words, your tests should not be susceptible to issues due to network delays or server performance.
* Reproducible: Your test should return the same result on the same version of the target application or website using a different set of test parameters. For example, changing the browser, browser version, or host operating system should not produce different test results.

These best practices are often very challenging to follow, as they place a great burden on the test framework to set up concise tests that are repeatable, reproducible and independent. The Sauce Labs documentation wiki includes examples of how to set up tests that follow these best practices, along with additional tips.

### Configuring Maven Surefire for Parallel Test Runs
In an effort to keep our discussion of parallel testing concise and generally applicable, we will be limiting it to the usage of Maven as our build system and the Surefire plugin as our test executions agent.

**Base pom.xml File**

```
<!--- Snippet from pom.xml file of your maven project -->
<project>
 ...
 <build>
   <!-- To define the plugin version in your parent POM -->
   <pluginManagement>
     <plugins>
       <plugin>
         <groupId>org.apache.maven.plugins</groupId>
         <artifactId>maven-surefire-plugin</artifactId>
         <version>2.19.1</version>
       </plugin>
       ...
     </plugins>
   </pluginManagement>
   <!-- To use the plugin goals in your POM or parent POM -->
  </plugins>
   [...]
     <plugin>
       <groupId>org.apache.maven.plugins</groupId>
       <artifactId>maven-surefire-plugin</artifactId>
       <version>2.19.1</version>
        <configuration>
         [...]
       </configuration>
     </plugin>
   [...]
</plugins>
 </build>

 ...
</project>
<!--- Snippet from pom.xml file of your maven project -->
```

#### Option 1: Using Configuration Properties in the pom.xml File
In the base pom.xml file example, the <configuration> section is highlighted. This is the section we will use to set up Surefire for parallelization of threads.

In this example of setting the <configuration> options, the maximum total thread count is set at 18. This is the the dataproviderthreadcount (6) multiplied by  the number of allowable threads per test method, which is set by the threadCount property (3). If you don’t provide a value for dataproviderthreadcount, it assumed to be 1.

This configuration will execute tests defined in the default testng.xml test suite in parallel.

**Example of Configuration Properties for Setting Thread Count for Parallel Tests**
```
<configuration>
 <properties>
   <property>
     <name>parallel</name>
     <value>methods</value>
   </property>
   <property>
     <name>threadCount</name>
     <value>3</value>
   </property>
   <property>
     <name>dataproviderthreadcount</name>
     <value>6</value>
   </property>
 </properties>
</configuration>
```

#### Option 2: Setting Configuration Properties to Use a Test Suite Configuration File
In this example, the configuration properties aren’t set individually, but refer to a test suite configuration file in which the properties are set.

The properties being set are the same, but any properties that are set in the configuration file will be overridden by their values in the suite definition file. For this reason, it’s best to either define all your configuration properties in the pom.xml file, or in the test suite file, but not in both places.

**Example of Setting Configuration Properties to Use a Configuration File**
```
<configuration>
 <suiteXmlFiles>
   <suiteXmlFile>testSuite.xml</suiteXmlFile>
   <suiteXmlFile>testSuite2.xml</suiteXmlFile>
</suiteXmlFiles>
</configuration>
```

Using a test suite configuration file in conjunction with the configuration properties will produce the exact same operational behavior as option 1, but gives you the increased flexibility to customize settings suite by suite.

In the configuration file, the parallel option gives you the option to parallelize by individual test methods, by tests defined in the test name attribute, and by suites defined by the “ suite name ” attribute. For more information on using the “ parallel ” property, check out the [Maven Surefire documentation](https://maven.apache.org/surefire/maven-surefire-plugin/examples/testng.html).

Example of a Test Configuration File

```
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite  name="Suite"   parallel = "methods" thread-count="3" data-provider-thread-count="6">
   <test name="test1">
       <packages>
           <package name="com.yourcompany.yourapp"></package>
       </packages>
   </test> <!-- Test -->
</suite> <!-- Suite -->
```

#### Option 3: Using Maven Surefire Forked Test Execution
The <forkCount> property shown in this example lets you to run each of your test classes in a separate process. An important point to keep in mind using this option is that the JVM processes in use will have higher overhead than the thread based parallelization options that run in a single JVM. On the other hand, this option provides complete isolation of tests as far as memory resources are concerned, and is generally less problematic in situations where hardware resources are not a concern, for example a small number of parallel tests running on a single host computer. Check out the [Surefire documentation](https://maven.apache.org/surefire/maven-surefire-plugin/examples/fork-options-and-parallel-execution.html) for more information.

**Example of Using <forkCount> as a Configuration Option

```
<configuration>
   <forkCount>3</forkCount>
</configuration>
```
Any of these options can be used in conjunction with each other to configure Surefire for parallel testing.

### Configuring Test Code for Parallel Test Runs
#### Making your Test Classes Thread Safe
When you parallelize your test runs by test method, you will need to make sure that shared resources within your test classes are isolated within each thread. You can do this by initializing and keeping all related resources within the test method, or by simply utilizing readily available Java libraries, which is the better solution, and will help keep your test suites clean and organized. Keeping all your resources within the test method,  while functional, will make your code a lot harder to read and maintain, and will make code reuse near impossible.

**Webdriver Generation Snippet from Test Class**

```
...
private ThreadLocal<WebDriver> webDriver = new ThreadLocal<WebDriver>();
...
protected void createDriver(String browser, String version, String os, String methodName)
           throws MalformedURLException, UnexpectedException {
        ...
       this.webDriver.set(new RemoteWebDriver(
               new URL("http://" + authentication.getUsername() + ":" + authentication.getAccessKey() +
                        seleniumURI +"/wd/hub"), capabilities));
        ...
   }
...
```

In addition to keeping test specific resources thread-local, another best practice to keep in mind is reviewing all of your static class members, and only keeping the ones that are truly intended to be static members. This applies to all of your classes, including the test classes, page objects, and anything else that may be loaded during the test execution.

#### Configuring Your Data Provider for Parallel Runs
**Data Provider Definition from Test Class**

```
@DataProvider(name = "hardCodedBrowsers", parallel = true )
   public static Object[][] sauceBrowserDataProvider(Method testMethod) {
       return new Object[][]{
               new Object[]{"internet explorer", "11", "Windows 8.1"},
               new Object[]{"chrome", "41", "Windows XP"},
               new Object[]{"safari", "7", "OS X 10.9"},
               new Object[]{"firefox", "35", "Windows 7"},
               new Object[]{"opera", "12.12", "Windows 7"},
               ...
       };
   }
```

By passing `parallel = true` to the  to the @DataProvider annotation, you enable the parallel execution of tests using the data provider. Combined with the Maven Surefire property dataproviderthreadcount this parameter lets you run your test methods in parallel using items from the data provider list.

### What Happens at Runtime?
With these configurations in place your test would run in parallel in batches of 18 tests at a time, scheduling a new batch each time one completes. All you would need to do is to invoke the Maven test goal using the command line `mvn test`.

At this point what you should run a few experiments. Monitor your resource usage and test performance to ensure your tests can scale to the degree of parallelism you aim for, and make best use of your testing resources.

See our [sample project](https://github.com/sauce-archives/Java-TestNG-Selenium) demonstrating the steps explained in this article.

## Troubleshooting Parallel Testing in Java
### Flaky Tests with Random Failures
**Symptoms**
* Tests “randomly” pass and fail each run, or throw transient exceptions
* The number of unexpected failures is related to the number of concurrent threads running
* When run in a single thread (not parallel), the tests pass or show expected behavior

**Possible Causes**
* Use of static shared members in test classes
* Use of static members in PageObject classes
* General resource contention on remote site due to issues with local test classes

**Debugging**
Depending on your specific framework and test structure, you may want to try these steps in a different order.

* Run your tests in a serial fashion and get a baseline
* Repeat the process with increasing parallelism (increasing the number of concurrent threads) until you see consistent failures
* Do a thorough review of static components in your classes and avoid using the static keyword where possible, and use ThreadLocal class members when needed
* Look for resource contention and race conditions by printing resource references to standard output along with thread ID’s. In Java you can use this method to get the ID of the current thread: Thread.currentThread().getId();
* Separate test framework from test content by reducing tests to simple actions with randomized data, and check for test thread isolation. For example,run a Selenium test where you enter randomized text input into a field, delay, and read back to confirm. If there’s interference from other tests the test will fail.
* Add exception handling code around critical sections that present the errors. Going through your stack trace will greatly help with this. A sample exception handling wrapper would look like this in Java:

```
try {
   // Selenium or other test action here.
} catch (Exception e) {
   e.printStackTrace();
}
```

### Variable Test Performance and Performance-Related Failures
**Symptoms**
* Test execution times vary drastically from test run to test run
* Unexpected failures are observed, followed by poor test performance
* Performance improves with reduced thread counts
* Tests failures due to timeouts
* Test runner freezes and becomes unresponsive

**Possible Causes**
* Resource issues on test host
* Resource/capacity issues on test target
* Network infrastructure issues limiting the required bandwidth

**Debugging**

* Turn on debugging features of your test runner. For example:
`. mvn -X <your build command>`

* Run tests with increasing parallelism (increasing the number of concurrent threads) and monitor resources like memory, CPU utilization, network utilization, and disk space (if applicable) on the test host. If any of these resources reach critical levels, adjust test volume accordingly or add resources.

  * For your thread count, you can start with “1.5 x # number of CPU cores” as a starting point, and experiment to find the number that would work for your setup. A modern computer would have at least 4 cores per CPU.
  * Augment memory allocation for your build process, depending on your needs. For example:
  `mvn -Xms256m -Xmx1024m <your build command>`

* Monitor resources like memory, CPU utilization, network utilization, and disk space (if applicable) on the test target to make sure the machine can support the traffic, and scale as needed.
* Do a thorough review of static components in your classes and avoid using the static keyword where possible. These are not garbage collected, and consume significant amounts of memory even when not in use.
