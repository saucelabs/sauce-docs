---
id: integrations
title: saucectl CI Requirements
sidebar_label: Requirements
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ensure your `saucectl` tests execute as part of your CI pipeline workflow flawlessly by observing some key prerequisites:

* Understand the current automation framework in the stack
* Understand your organization's preferred CI tool
* Ensure you have appropriate administrator permissions
* Successfully run tests with `saucectl` on their own, either in [`docker`](/testrunner-toolkit/configuration#docker), or on [`sauce`](/testrunner-toolkit/configuration#sauce)

Once you have met the prerequisites, follow the instructions for the CI Tool with which you want to integrate your `saucectl` tests.

* [CircleCI](/testrunner-toolkit/integrations/circleci)
* [Jenkins](/testrunner-toolkit/integrations/jenkins)
* [GitHub Actions](/testrunner-toolkit/integrations/github-actions)
* [GitLab](/testrunner-toolkit/integrations/gitlab)
