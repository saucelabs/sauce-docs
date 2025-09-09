---
id: project-management
title: Project Management
sidebar_label: Project Management
description: Manage projects.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

On the Project page, you can view individual project usage and configure default and project-specific limits. Project limits help prevent a sudden spike in one project from affecting the overall instance limit, while maintaining error data for other projects.

The combined project limits can exceed the total purchased quota for the instance. If a project or instance limit is reached, incoming data will be rejected at the corresponding level. As a best practice, set project limits higher than expected usage to avoid interruptions in data collection.
<img src={useBaseUrl('img/error-reporting/project-settings/project-settings.png')} alt="Project page." />

Setting a default limit will apply the limit on all projects that do not have a project limit already applied. Setting a limit on an individual project will override the default limit.
<img src={useBaseUrl('img/error-reporting/project-settings/default-limit.png')} alt="Default limit." />

Use project-specific limits to override the default limit when unique thresholds are needed.
<img src={useBaseUrl('img/error-reporting/project-settings/project-limit.png')} alt="Project limit." />