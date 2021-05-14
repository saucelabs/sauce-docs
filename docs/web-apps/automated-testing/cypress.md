---
id: cypress
title: Cypress on Sauce Labs
sidebar_label: Cypress
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) is a JavaScript front end web application testing framework. `saucectl` -- the Sauce Labs test orchestrator CLI allows you to run Cypress tests directly from your existing Cypress project.

* Don't have Cypress yet? `saucectl` can set up your initial project directory and give you a sample test to run.
* Already running Cypress? Let `saucectl` run your tests locally in Docker or in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.  

## What You'll Need

* A [Sauce Labs](https://app.saucelabs.com/) account


## Quick Start

You can run a working Cypress sample test in under ten minutes!

### Install `saucectl`

Begin by installing the `saucectl` CLI in the root directory of your existing Cypress project or your intended directory.

```
npm install -g saucectl
```

### Link Your Sauce Labs Account

`saucectl` requires access to a valid Sauce Labs account.

1. Run the `configure` command:     
    ```
    saucectl configure
    ```
1. Enter your Sauce Labs Username and Access Key at the prompts.
1. Add `credentials.yml` to your `.gitignore` file to protect it from unintended exposure.

### Set up Your Cypress Project

Using `saucectl` to run your Cypress tests and view them in the Sauce Labs app requires a directory structure that includes the Cypress project and the Sauce configuration keys. Follow the steps below to dynamically build the directory.

1. Run the `new` command:
    ```
    saucectl new
    ```
1. At the framework prompt, choose `Cypress`.
1. At the region prompt, choose the Sauce Labs data center applicable to your account.

At this point, `saucectl` generates a project that includes everything required to run a sample Cypress test through `saucectl`.

If it detects a Cypress project already in the directory, `saucectl` will prompt you whether to overwrite any duplicates, such as the `cypress` folder and `cypress.json`. You can choose `No` to these questions to preserve your existing Cypress directory structure and files, and then manually [edit the `saucectl` configuration](/testrunner-toolkit/configuration) to run those tests.

### Run Tests

Use the `run` command to execute the sample test included with the `saucectl` installation or whichever test suites you have defined in the configuration file.

```
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

```
$ saucectl run
Running version 0.40.2
14:30:22 INF Reading config file config=.sauce/config.yml
14:30:22 INF Running Cypress in Sauce Labs

                                        (.                          
                                       #.                           
                                       #.                           
                           .####################                    
                         #####////////*******/######                
                       .##///////*****************###/              
                      ,###////*********************###              
                      ####//***********************####             
                       ###/************************###              
                        ######********************###. ##           
                           (########################  ##     ##     
                                   ,######(#*         ##*   (##     
                               /############*          #####        
                           (########(  #########(    ###            
                         .#######,    */  ############              
                      ,##########  %#### , ########*                
                    *### .#######/  ##  / ########                  
                   ###   .###########//###########                  
               ######     ########################                  
             (#(    *#(     #######.    (#######                    
                    ##,    /########    ########                    
                           *########    ########                    

   _____        _    _  _____ ______    _____ _      ____  _    _ _____  
  / ____|  /\  | |  | |/ ____|  ____|  / ____| |    / __ \| |  | |  __ \
 | (___   /  \ | |  | | |    | |__    | |    | |   | |  | | |  | | |  | |
  \___ \ / /\ \| |  | | |    |  __|   | |    | |   | |  | | |  | | |  | |
  ____) / ____ \ |__| | |____| |____  | |____| |___| |__| | |__| | |__| |
 |_____/_/    \_\____/ \_____|______|  \_____|______\____/ \____/|_____/
14:30:22 INF Project archived. durationMs=3 size=5846
14:30:23 INF Project uploaded. durationMs=1010 storageId=4ecb5962-f291-4e3e-9046-87c4783393c4767609/app.zip
14:30:23 INF Launching workers. concurrency=2
14:30:23 INF Starting suite. region=us-west-1 suite="Firefox in sauce"
14:30:23 INF Starting suite. region=us-west-1 suite="Chrome using global mode setting"
14:30:25 INF Suite started. browser=chrome platform="Windows 10" suite="Chrome using global mode setting" url=https://app.saucelabs.com/tests/d9c150834af0497db4e5097763dbf0bd
14:30:27 INF Suite started. browser=firefox platform="Windows 10" suite="Firefox in sauce" url=https://app.saucelabs.com/tests/66f4be6117ef4d65b6314bb14050d59a
14:30:33 INF Suites in progress: 2
14:30:43 INF Suites in progress: 2
14:30:53 INF Suites in progress: 2
14:31:03 INF Suites in progress: 2
14:31:12 INF Suite finished. passed=true suite="Firefox in sauce" url=https://app.saucelabs.com/tests/66f4be6117ef4d65b6314bb14050d59a
14:31:13 INF Suites in progress: 1
14:31:23 INF Suites in progress: 1
14:31:33 INF Suites in progress: 1
14:31:43 INF Suites in progress: 1
14:31:53 INF Suites in progress: 1
14:32:03 INF Suites in progress: 1
14:32:13 INF Suites in progress: 1
14:32:23 INF Suites in progress: 1
14:32:26 INF Suite finished. passed=true suite="Chrome using global mode setting" url=https://app.saucelabs.com/tests/d9c150834af0497db4e5097763dbf0bd
14:32:26 INF ┌───────────────────────┐
14:32:26 INF  All suites have passed!
14:32:26 INF └───────────────────────
```

The results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc):

   <img src={useBaseUrl('img/cypress/test-results.png')} alt="Cypress Test Results" />

## Advanced Considerations

Running Cypress tests using `saucectl` is easy, fast, and flexible. Once you have your project structure in pace, you can build on it to create and run more complex suites of tests, use Sauce Connect to securely reach the Sauce Labs platform, specify different test suites to run locally or in the Sauce Labs Cloud, test local apps, and more.

### Checkout the Sample Repo

The [saucectl-cypress-example](https://github.com/saucelabs/saucectl-cypress-example) GitHub repo provides an out-of-the box saucectl-Cypress project structure that includes sample tests for both Docker and Sauce modes, Firefox and Chrome browsers, and Cucumber.

### Test a Local App

[Test a Local App](/testrunner-toolkit/running-tests#run-tests-against-a-local-app) for further details.

### Modify the Configuration File

whether you are using `config.yml` or a custom configuration file, `saucectl` supports a wide array of [custom configurations](/testrunner-toolkit/configuration) to ensure your tests are run according to your business needs.

* [Settings Common to all Frameworks](/testrunner-toolkit/configuration/common-syntax)
* [Cypress Specific Settings](/testrunner-toolkit/configuration/cypress)

### Run Tests in CI

Are you using [Jenkins](/testrunner-toolkit/integrations/jenkins) or [GitHub Actions](/testrunner-toolkit/integrations/github-actions) to run your development pipeline? You can integrate your `saucectl` project, too.
