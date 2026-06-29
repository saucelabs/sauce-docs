---
id: privacy-safety-and-trust
title: Privacy, Safety, and Trust
sidebar_label: Privacy, Safety, and Trust
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Data protection, security, and privacy are central to this product and to Sauce Labs as a whole. Our AI for Insights product is designed to minimize queries on your data by only sending the relevant portions of data required to answer a given question, not entire datasets. 

While the model may receive raw data, we avoid sending personally identifiable information (PII) whenver possible. Currently, the only user-related data sent to the LLM are user IDs and usernames.

Users utilizing Sauce AI for Insights will have the same data access as they have all other places in the platform. If a user only has access to certain team’s tests in another area of the platform, that access will be mirrored by Sauce AI for Insights. User authentication remains consistent with Sauce Labs’ existing security model; each query respects user credentials and permission boundaries. 

Data processing is performed within secure and controlled cloud environments utilizing a powerful, compliant large language model.

> Please see our [Responsible use of AI guidelines](https://trust.saucelabs.com/resources?s=tcd1vcgj9ya80ahtrhj65&name=responsible-usage-of-ai-at-sauce-labs) in our [Trust Center](https://trust.saucelabs.com/) for more information.

**No customer data is used in the training of the LLMs used in Sauce AI for Insights.**