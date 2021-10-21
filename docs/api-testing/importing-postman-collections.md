---
id: importing-postman-collections
title: Importing Postman Collections
sidebar_label: Importing Postman Collections
description: "Note: The import Postman collection only supports exports in V2 and beyond. V1 has been deprecated by Postman and is not supported by API Fortress."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you maintain a [Postman API Collection](https://www.postman.com/collection/), you can import it directly into API Fortress.

:::warning V1 Import Feature Not Supported
The import Postman collection only supports exports in V2 and higher. V1 has been deprecated by Postman and is not supported by API Fortress.
:::

## Importing a Collection

To import a Postman Collection:

1. First, open the __HTTP Client__ via the __Tools__ menu.
1. Click the arrow icon <img src={useBaseUrl('img/api-fortress/2021/04/arrow.png')} alt="arrow icon"/>next to __Snapshots__ on the left-hand side
  <img src={useBaseUrl('img/api-fortress/2021/02/snapshotAdd.png')} alt="Add collection file"/>

1. Select your Collection file in the popup window.
  <img src={useBaseUrl('img/api-fortress/2021/04/chooseCollection.png')} alt="Choose collection"/>

1. Click __Open__.
1. The routes from your collection are now available in the list of saved requests.
  <img src={useBaseUrl('img/api-fortress/2021/04/routesRendered.png')} alt="Routes Rendered"/>

## Importing Postman Environments

<img src={useBaseUrl('img/api-fortress/2021/04/projectVault.png')} alt="Project Vault"/>

Importing a Postman environment is the same process as importing a variable file.

1. Navigate to the __Vault__ tab in your project.
1. Select Variables.
1. Select Import.
1. Select your `.postman_environment.json` file.
1. Select __Open__.
1. Your environmental variables are now available in the __Variables__ section of your project.

## Importing Postman Variables

<img src={useBaseUrl('img/api-fortress/2021/04/companyVault.png')} alt="Company Vault"/>

The process for importing global variables from Postman is the same process as [importing an environment](#importing-postman-environments), except from where the import is executed.

1. Navigate to the __Company Vault__ tab in your project.
1. Select Variables.
1. Select Import.
1. Select your `.postman_environment.json` file.
1. Select __Open__.
1. Your environmental variables are now available across all your projects.
