---
id: project-management
title: Project Management
sidebar_label: Project Management
description: Manage projects.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

On the Project page, you can configure project-specific and default limits, and view individual project usage. Project limits help prevent a sudden spike in one project from affecting the overall instance limit, thus maintaining error data traffic for other projects.

Project limits can cumulatively be above the purchased limit of the entire instance. If a limit is reached, the data will stop being received at either the project or instance level, when applicable. Generally, set the project limits some margin higher than your expected usage to maintain data flow to the project.


<img src={useBaseUrl('img/error-reporting/project-settings/project-settings.png')} alt="Project page." />

Setting a default limit will apply the limit on all projects that do not have a project limit already applied. Setting a limit on an individual project will override the default limit. 

<img src={useBaseUrl('img/error-reporting/project-settings/default-limit.png')} alt="Default limit." />

Setting a limit on individual projects allows for exceptions to the default limit.

<img src={useBaseUrl('img/error-reporting/project-settings/project-limit.png')} alt="Project limit." />