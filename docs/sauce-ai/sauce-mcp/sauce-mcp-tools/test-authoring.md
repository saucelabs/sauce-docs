---
id: test-authoring
title: Test Authoring
sidebar_label: Test Authoring
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The following tools are powered by [Sauce AI for Test Authoring](/sauce-ai/ai-authoring), a paid add-on for Enterprise accounts. They let your agent generate test cases from natural-language intent, manage and run them, organize them into suites, and schedule recurring runs — all without writing code. All tools in this section require the Test Authoring add-on.

### Test cases

Generate test cases from natural-language intent and manage your saved test cases. You describe what to test, and a test case is generated, saved, and made runnable.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `generate_test_case` | Generate a test case from a natural-language intent against a web URL or a mobile app in Sauce Storage. | "Generate a test case using the latest Chrome version on Linux that logs into saucedemo.com and adds an item to the cart." | <span className="mcp-tag">Test Authoring</span> |
| `Get_test_case_generation_status` | Check the status of an asynchronous generation task and get the resulting test case ID when it completes. | "Is my test case done generating yet?" | <span className="mcp-tag">Test Authoring</span> |
| `List_test_cases` | List and search your saved test cases, with filters for search term, date range, user, team, and suite. | "List my test cases that mention checkout." | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_case` | Retrieve the full details and steps of a single test case. | "Show me the steps in the login test case." | <span className="mcp-tag">Test Authoring</span> |
| `Rename_a_test_case` | Rename an existing test case. | "Rename that test case to 'Checkout - happy path'." | <span className="mcp-tag">Test Authoring</span> |
| `Delete_a_test_case` | Delete a test case. | "Delete the old smoke-test test case." | <span className="mcp-tag">Test Authoring</span> |

### Code generation

Export an authored test case as runnable source code in the language and framework of your choice.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `List_valid_code_generation_targets_for_a_test_case` | List the language/framework targets available for a given test case (depends on its platform). | "What languages can I export this test case to?" | <span className="mcp-tag">Test Authoring</span> |
| `Generate_source_code_for_a_test_case` | Generate source code for the latest revision of a test case in a chosen target (e.g. `javascript_webdriverio`). | "Give me this test case as Python Selenium code." | <span className="mcp-tag">Test Authoring</span> |

### Running test cases

Run authored test cases on Sauce Labs and inspect the results.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `Run_a_test_case` | Start a run of a test case against one or more browser/device targets, optionally under a build name and Sauce Connect tunnel. | "Run the login test case on Chrome and Safari." | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_case_run` | Retrieve the status and result of a specific test case run. | "Did my last test case run pass?" | <span className="mcp-tag">Test Authoring</span> |
| `List_test_case_runs` | List the runs for a test case. | "Show the run history for this test case." | <span className="mcp-tag">Test Authoring</span> |
| `Get_artifact_file` | Retrieve an artifact file (such as a screenshot or log) produced by a test case run. | "Download the screenshot from that run." | <span className="mcp-tag">Test Authoring</span> |

### Test suites

Group test cases into suites and run them together for broader regression coverage.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `Create_a_test_suite` | Create a test suite, optionally with a name, tags, and an initial set of test cases. | "Create a 'Checkout regression' suite from these three test cases." | <span className="mcp-tag">Test Authoring</span> |
| `List_test_suites` | List your test suites. | "What test suites do I have?" | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_suite` | Retrieve the details of a single test suite, including its test cases. | "What's in the checkout regression suite?" | <span className="mcp-tag">Test Authoring</span> |
| `Update_a_test_suite` | Update a suite — rename it, change tags, or add and remove test cases. | "Add the guest-checkout test to the regression suite." | <span className="mcp-tag">Test Authoring</span> |
| `Delete_a_test_suite` | Delete a test suite. | "Delete the old regression suite." | <span className="mcp-tag">Test Authoring</span> |
| `Run_all_test_cases_in_a_suite` | Queue runs for every test case in a suite, optionally under a shared build name. | "Run all tests in the checkout regression suite." | <span className="mcp-tag">Test Authoring</span> |

### Test schedules

Schedule test suites to run automatically on a recurring cadence.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `Create_a_test_schedule` | Create a schedule that runs one or more suites on a cron cadence in a given timezone, with optional start/end dates and a max run count. | "Schedule the regression suite to run every weekday at 6am Eastern." | <span className="mcp-tag">Test Authoring</span> |
| `List_test_schedules` | List your test schedules. | "What schedules do I have set up?" | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_schedule` | Retrieve the details of a single schedule. | "Show the settings for my nightly schedule." | <span className="mcp-tag">Test Authoring</span> |
| `Update_a_test_schedule` | Update a schedule — change its cadence, suites, run owner, or enable/pause it. | "Pause the nightly schedule." | <span className="mcp-tag">Test Authoring</span> |
| `Delete_a_test_schedule` | Delete a schedule. | "Delete the nightly schedule." | <span className="mcp-tag">Test Authoring</span> |
