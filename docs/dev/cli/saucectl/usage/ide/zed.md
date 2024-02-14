---
id: zed
title: saucectl with Zed
sidebar_label: Zed
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Zed can help you edit the `saucectl` configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE.

## What You'll Need

- [Zed](https://zed.dev/)

## JSON Schema Validation

Our JSON schema is published to the [JSON Schema Store](https://www.schemastore.org/json/), which is made available to Zed.

If your `saucectl` config YAML is stored in a `.sauce/` folder, Zed will automatically apply the schema to all YAML files contained in that folder and no further action is required.

You should now be able to see the docs for various attributes:<br/><img src={useBaseUrl('img/stt/zed-yaml-docs.png')} alt="Zed YAML Attribute Description" />

and have autocompletion ready at your fingertips!<br/><img src={useBaseUrl('img/stt/zed-yaml-autocomplete.png')} alt="Zed YAML Attribute Autocompletion" />
