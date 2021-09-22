---
id: jira
title: "Connectors: Jira"
sidebar_label: Jira
keywords:
    - api-testing
    - integrations
    - jira
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

API Fortress can absolutely integrate with your JIRA setup. However, because not all JIRA boards are created equal, if you would like a connector set up for your specific JIRA board please out to [support@apifortress.com](mailto:support@apifortress.com)

We will then gather the appropriate information and build you a custom connector for your JIRA setup.  
  
:::note
This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::

If you are using the SaaS version there is a simple JIRA connector provided, below are the steps to configure it:

1. Go to the settings page  
    <img src={useBaseUrl('img/api-fortress/2020/04/1.-settings.png')} alt="1.-settings.png"/>
2. Click on "Alert Groups"  
    <img src={useBaseUrl('img/api-fortress/2020/04/2.-alert-groups.png')} alt="2.-alert-groups.png"/>
3. Create a new group or add a connector to an existing alert group  
    <img src={useBaseUrl('img/api-fortress/2020/04/3.-add-connector-to-group.png')} alt="3.-add-connector-to-group.png"/>
4. Add a new connector  
    <img src={useBaseUrl('img/api-fortress/2020/04/4.-add-new-connector.png')} alt="4.-add-new-connector.png"/>
5. Choose the JIRA connector  
    <img src={useBaseUrl('img/api-fortress/2020/04/5.-choose-jira.png')} alt="5.-choose-jira.png"/>
6. Configure the connector  
    <img src={useBaseUrl('img/api-fortress/2020/04/6.-configure-jira-connector.png')} alt="6.-configure-jira-connector.png"/>
    
    1. hostname - this is the host url of your JIRA instance  
    2. username - username for your JIRA instance with permissions to create tickets  
    3. password - password for the given username  
    4. project_name - this is the project key of the project to send reports to  
    5. issue_type - identifier of the issue type to be used, i.e. Task, Bug, etc  
      
    
7. Go into project settings for a project you would like JIRA alerts set up for  
    <img src={useBaseUrl('img/api-fortress/2020/04/7.-project-settings.png')} alt="7.-project-settings.png"/> 
    <img src={useBaseUrl('img/api-fortress/2020/04/Settings.png')} alt="Settings.png"/> 

8. Add the alert group that contains your JIRA connector to this project  
    <img src={useBaseUrl('img/api-fortress/2020/04/8.-add-alert-group-to-proj.png')} alt="8.-add-alert-group-to-proj.png"/> 

The resulting ticket in JIRA will look something like this:  
<img src={useBaseUrl('img/api-fortress/2020/04/9.-final-result.png')} alt="9.-final-result.png"/> 

