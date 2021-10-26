---
id: apif-auto-and-github
title: "Jenkins: APIF-Auto and GitHub"
sidebar_label: APIF-Auto with GitHub
keywords:
    - cicd
    - jenkins
    - apif-auto
    - github
    - api-fortress
---

APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a Jenkins workflow.  

The pipeline script below serves as a template for creating stages in your Jenkins Pipeline for testing your APIs with API Fortress' tests that are stored in Github. If you’d like to take a look at the documentation for APIF-Auto, click [here](https://apifortress.com/doc/command-line-tools/).

> __NOTE__: It’s important to note that this is an **example** of a `Jenkinsfile` (Jenkins Pipeline). Experienced Jenkins users are free to configure their workflow as best suits their needs.

```bash
node {  
   def mvnHome  
   stage('Preparation') {  
      git 'https://github.com/theirish81/temp.git'  
   }  
   stage('Build') {  
        
   }  
   stage('API Fortress'){  
       sh 'python /var/jenkins\_home/apif-auto/apif-push.py jenkins\_project -r -p testing/apifortress'  
       sh 'mkdir -p target/apifortress'  
       sh 'python /var/jenkins\_home/apif-auto/apif-run.py run-all jenkins\_project -S -f junit -o target/apifortress/junit.xml'  
   }  
   stage('Results') {  
      junit '\*\*/target/apifortress/junit.xml'  
   }  
}
```

Let's break down what's happening in the script above:

- First, we have the "Preparation" stage, this is where we will define the Github repository where we have the tests stored.
- Next, we have the "API Fortress" stage, where a few things are happening:
    - `sh 'python /var/jenkins_home/apif-auto/apif-push.py jenkins_project -r -p testing/apifortress'` This is the command that will pull the tests from the Github repository we defined in the first step and push them into the API Fortress project "jenkins\_project" using the `apif-push.py` tool.
    - `sh 'mkdir -p target/apifortress'` This is the command that will create a directory to store the results from our API Fortress test executions. Remember the **`-p`** flag! It’ll keep the pipeline from overwriting the directory if it already exists in the future.
    - `sh 'python /var/jenkins_home/apif-auto/apif-run.py run-all jenkins_project -S -f junit -o target/apifortress/junit.xml'` This is the command that will execute all the tests we pushed into the `"jenkins_project"` using the `apif-run.py` tool and store the returned junit test results into the directory we created in the previous step.
- Finally, we have the `"Results"` stage, where we evaluate the junit results to see if the test passed or failed.

By using the above workflow, we have a modular method of running API Fortress tests stored in Github in authenticated mode in our Jenkins pipeline.