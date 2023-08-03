---
id: access-control
title: Access Control
sidebar_label: Access Control
description: Project Administrators can use Project Settings to restrict access to a given project to a defined set of Users or Teams.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

Project Administrators can use Project Settings to restrict access to a given project to a defined set of Users or Teams.

By default, Projects are available for access by all users of the Backtrace Instance. A Project Administrator can modify access control for a Project to limit which Users or Teams have access to it.

<img src={useBaseUrl('img/error-reporting/project-settings/access-control.webp')} alt="" />

## Adding a Team or User

Project Admins can easily search through the list of existing users or teams to restrict project access to them. One of three roles can be assigned:

- Guest - Read Only access to be able to search and view all errors in the project
- Member - Can interact with the project by assigning, commenting, tagging, linking to Jira tickets, and more
- Admin - Can edit Project Settings.

<img src={useBaseUrl('img/error-reporting/project-settings/access-control-add-user.png')} alt="" />
