---
id: ci-cd-integration
title: Sauce Connect Proxy CI/CD Integration
sidebar_label: CI/CD Integration
---

## GitHub Actions

[GitHub Actions](https://docs.github.com/en/actions) allow to automate, customize, and execute your software development workflows right in your GitHub repository.

[Sauce Connect Proxy GitHub Action](https://github.com/marketplace/actions/sauce-connect-proxy-action) allows to launch Sauce Connect Proxy for GitHub CI workflow.

## Jenkins Configuration

Jenkins is an open-source automation server and continuous integration software tool for testing and reporting on isolated changes in a larger code base in real time.

The Jenkins plugin for Sauce Labs will automatically install Sauce Connect Proxy on your Jenkins server for integration. Once installed, you'll need to configure your project to use Sauce Connect Proxy. You can change the location where the plugin extracts Sauce Connect for specific projects or globally for all projects.

## Additional Resources

For instructions on running your Jenkins build with Sauce Connect Proxy enabled, see [Sauce Labs with Jenkins](/basics/integrations/jenkins).
