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
- **Teams** - Isolated departments in your organization. Apps belong to teams, and members work in their assigned team.
- **Tester Groups** - Assign groups of testers to specific apps or builds for controlled distribution.
- **Landing Pages** - Each app gets a customizable install page with a unique URL.

## Role Hierarchy

Each higher role inherits all permissions of the roles below it.

| Role | Permissions |
| --- | --- |
| <span className="role-badge role-badge--owner">Account Owner</span> | Full access including billing, organization settings, and SSO configuration. |
| <span className="role-badge role-badge--org-admin">Org Admin</span> | Create and manage teams, invite and manage organization members. |
| <span className="role-badge role-badge--team-admin">Team Admin</span> | Invite members to their team. Assigned per-team by an admin. |
| <span className="role-badge role-badge--member">Member</span> | Create apps, upload builds, create tester groups, and invite testers in their team. |
| <span className="role-badge role-badge--tester">Tester</span> | View and install apps assigned to their groups. Can be shared across teams. |
