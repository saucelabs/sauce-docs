---
id: intellij
title: saucectl with intellij
sidebar_label: IntelliJ IDEA
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What You'll Need

* [IntelliJ](https://www.jetbrains.com/idea/)

## JSON Schema Validation

IntelliJ can help you edit the `saucectl` configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE.
Our JSON schema is published to the [JSON Schema Store](https://www.schemastore.org/json/), which is made available to IntelliJ.
To proceed, open your `saucectl` config yaml in IntelliJ and select the `SauceCTL Configuration` schema [per the IDEA instructions](https://www.jetbrains.com/help/idea/json.html#ws_json_using_schemas).

<img src={useBaseUrl('img/stt/intellij-saucectl-schema-dropdown.png')} alt="IntelliJ Schema Dropdown" />

You should now be able to see the docs for various attributes:
<img src={useBaseUrl('img/stt/intellij-yaml-docs.png')} alt="IntelliJ YAML Attribute Description" />

and have autocompletion ready at your fingertips!
<img src={useBaseUrl('img/stt/intellij-yaml-autocomplete.png')} alt="IntelliJ YAML Attribute Autocompletion" />

:::caution Known Limitations
At the time of writing, IntelliJ's autocompletion has a bug when dealing with complex JSON schemas. While the validation takes place correctly, the suggestion/autocompletion feature may not work as intended. Until this behavior is fully addressed by JetBrains, you may want to check out our [Visual Studio Code Integration](vscode.md) in the meantime.
:::
