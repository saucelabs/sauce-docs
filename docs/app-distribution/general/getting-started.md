---
id: getting-started
title: Welcome to Mobile App Distribution
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This platform allows you to distribute mobile apps (iOS and Android) to your team and testers securely.

## Quick Overview

- **Apps** - Each app holds all builds for a specific mobile application.
- **Builds** - Upload `.ipa` (iOS) or `.apk` (Android) files. Each upload creates a new build with version info, release notes, and an install link.
- **Teams** - Isolated departments within your organization. Apps belong to teams, and members work within their assigned team.
- **Tester Groups** - Assign groups of testers to specific apps or builds for controlled distribution.
- **Landing Pages** - Each app gets a customizable install page with a unique URL.

## Role Hierarchy

Each higher role inherits all permissions of the roles below it.

| Role | Permissions |
| --- | --- |
| **Account Owner** | Full access including billing, organization settings, and SSO configuration. |
| **Org Admin** | Create and manage teams, invite and manage organization members. |
| **Team Admin** | Invite members to their team. Assigned per-team by an admin. |
| **Member** | Create apps, upload builds, create tester groups, and invite testers within their team. |
| **Tester** | View and install apps assigned to their groups. Can be shared across teams. |
