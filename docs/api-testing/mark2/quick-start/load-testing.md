---
id: load-testing
title: Load Testing
sidebar_label: Load Testing
description: "Introduction API Fortress Load Testing is more than stress testing: it’s functional load testing. Rather than simply overburdening a server with requests, API Fortress Load Testing directs properly formatted requests to the appropriate endpoints and records failures at an API endpoint level."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

API Fortress Load Testing is more than stress testing, it’s functional load testing. 

Rather than simply overburdening a server with requests, API Fortress Load Testing directs properly formatted requests to the appropriate endpoints and records failures at an API endpoint level.

## Step 1: Access Load Testing Control Panel

To access Load Testing from the main page. click on the “_Tools_” button, and then “_Load Testing”_.

<img src={useBaseUrl('img/api-fortress/2018/04/toolstolt.gif')} alt="Tools Gif"/>

## Step 2: Create a Task

This is the main Load Testing screen. From here, you can create and run a new task. You can also run, modify or delete a saved task. To create a new task, click “_+New Task_”.

<img src={useBaseUrl('img/api-fortress/2018/04/createTest.gif')} alt="Create Test Gif"/>

The “_Create New Task_” screen allows you to set the parameters for the new test.

- **Name** - The name that you give to the test.
- **Project** \- A drop-down menu of all of the projects available to your current Company (Team).
- **Test** - Allows you to select a test from the selected project.
- **Tags** - Allow you to tag the test for later use.
- **Duration** - How long, in seconds or minutes, the test will last.
- **Ramp Up** - A warm-up period, during which the load test will make requests of the server, but at a much lower rate.
- **Users/Agent** \- Defines how many users will be simulated per load testing agent.
- **Server** - Allows you to select servers from the column on the right to behave as agents for the load test. Click the “_Select_” button to select a server.

Once you have successfully created a test, it will appear in the column on the left side of the screen.

<img src={useBaseUrl('img/api-fortress/2018/04/taskList.png')} alt="Task List"/>

## Step 3: Run the Task

You can run the task by hovering over it and clicking the _“Play”_ button. The test will now run at the top of the queue in the middle of the screen. Once it is complete, it will display a summary of the test performance.

<img src={useBaseUrl('img/api-fortress/2018/04/runTest.gif')} alt="Run Test Gif"/>
