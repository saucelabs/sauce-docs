---
id: storage
title: Storage
sidebar_label: Storage
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upload and browse app builds in Sauce Storage.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `upload_file_to_storage` | Upload an app build to Sauce Storage. | "Upload this APK to Sauce Storage." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_files` | List the app builds in Sauce Storage. | "What app builds are in my storage?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_groups` | List the storage groups (apps grouped by identifier). | "List my storage groups." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |