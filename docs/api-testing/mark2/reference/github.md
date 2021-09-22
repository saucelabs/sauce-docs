---
id: github
title: "GitHub: Use a File as a Datasource"
sidebar_label: "GitHub: Use a File as a Datasource"
keywords:
    - api
    - api-fortress
    - github
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This Github component is meant to simplify the process of retrieving a file from Github and use it as a data source. Some examples of files to use would be CSV or JSON files.

[Here is a tutorial](/api-testing/mark2/how-to/github-for-datasets) on how to use it as part of a test.

The GitHub component has the following fields:

<img src={useBaseUrl('img/api-fortress/2018/04/4.png')} alt="4.png"/>

- **Account** is your GitHub username
- **Repository** is the name of the repository that your data file is pushed to.
- **Branch** is the repository branch that the desired version of the data file is in.
- **Token** is the token described above, generated in the GitHub platform.
- **Variable** is the variable that the payload will be stored under.
- **Path** is the name of the file in the repository.
- **Mode** is the filetype of the file in the repository.
