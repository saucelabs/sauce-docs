---
id: docker-authenticated-pulls
title: Hosted Orchestration Authenticated Pulls
sidebar_label: Docker Authenticated Pulls
---

This document describes how to authenticate with your Docker registry provider to pull images.

Authenticated pulls allow access to private Docker images. We support the following private registries:

- DockerHub
- Quay
- Google Container Registry
- Amazon Container Registry
- Github
- Gitlab

## Authenticated Pulls

For your Hosted Orchestration request, specify a username and access token and Sauce Labs will attempt to access your image. If we are unable to access your image you will receive an error response 