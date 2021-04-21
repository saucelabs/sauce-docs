---
id: test-status
title: Setting Test Statuses
sidebar_label: Setting Test Statuses
---
What You'll Learn
How to use the JavaScript Executor to update the status of your test at the end of the session
How to use the Sauce Labs REST API to update the status of your test after it has already completed
What You'll Learn
Update Test Status in Session
Video: Setting Test Status to Pass Fail
Examples
Updating Test Status After Completion
What You'll Need
Update Test Status in Session
You can use the Selenium JavaScript Executor to annotate your test in the @after hook. This is the ideal means of writing your tests to interpret the results as a pass/fail and update the status accordingly.

NOTE: The JavaScript Executer commands can only be run while the test is in session. Once the test is complete, the JavaScript Executor commands are no longer applicable and you must use the REST API to update the test.

Video: Setting Test Status to Pass Fail
Watch this video for a demonstration of using the Selenium JavaScript Executor to annotate your test result with a Passed/Failed status.



Examples
The annotation for calling the JavaScript Executor in your test differs slightly for each framework and language, which are provided in the following code snippet examples. Refer to our Sauce Labs Demonstration Code Repositories on GitHub for further information, and more context, on annotating your tests to record the pass/fail status.

Java
C#
Python
Node.js
Ruby
Full Example: /selenium-examples/testng/src/test/java/com/yourcompany/Tests/TestBase.java

Not found

Could not read the file selenium-examples/testng/src/test/java/com/yourcompany/Tests/TestBase.java

Full Example: /selenium-examples/junit/src/test/java/com/yourcompany/Tests/TestBase.java

Not found

Could not read the file selenium-examples/junit/src/test/java/com/yourcompany/Tests/SauceTestWatcher.java

Full Example: /selenium-examples/cucumber/src/test/java/com/yourcompany/saucecucumberjvm/StepDefinitions.java

Not found

Could not read the file selenium-examples/cucumber/src/test/java/com/yourcompany/saucecucumberjvm/StepDefinitions.java



Updating Test Status After Completion
If you did not use the JavaScript Executor to update the status of your test as an assertion in the test code, you can still use the Sauce Labs REST API to update the test status.

What You'll Need
Your Sauce Labs account credentials

The JOB_ID for the test you wish to update
Call the update_jobs REST API and pass the parameter "passed" with a value of "true" or "false".

Update Test Status
curl PUT -X -u USERNAME:ACCESS_KEY \'https://saucelabs.com/rest/v1/USERNAME/jobs/JOB_ID' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "passed": "true"
    }
}'
You can obtain the JOB_ID either by:

Collecting and storing the web driver SessionId for the test, which Sauce Labs uses as the JOB_ID
Finding the Id value in the test's Metadata tab in the Sauce Labs app, as shown in the following figure
