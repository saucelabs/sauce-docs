---
id: jobs-builds-assets
title: Jobs, Builds & Assets
sidebar_label: Jobs, Builds & Assets
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Inspect jobs and builds, and retrieve the assets they produce, such as logs, screenshots, video, and network captures.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_recent_jobs` | List your most recent jobs. | "Show my most recent jobs." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_job_details` | Retrieve the details and result of a specific job. | "Why did my last job fail?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_real_device_jobs` | List real-device jobs. | "List my real-device jobs." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_specific_real_device_job` | Retrieve the details of a specific real-device job. | "Show the details of job 1a2b3c." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_test_assets` | List the assets attached to a job. | "What assets does that job have?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_artifact_file` | Retrieve a specific artifact file from a job. | "Download the logcat from that job." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_network_har_file` | Retrieve a job's captured network traffic as a HAR file. | "Get the HAR file from that job." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `filter_har_data` | Filter a HAR capture down to the entries you care about. | "Show only the failed requests in that HAR." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `lookup_builds` | Search your builds. | "List my recent builds." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_build` | Retrieve the details of a specific build. | "Show the details of my latest build." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |