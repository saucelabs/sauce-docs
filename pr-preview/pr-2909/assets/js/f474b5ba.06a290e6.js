"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94492],{57835:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var t=s(74848),i=s(28453),r=s(11470),a=s(19365);const l={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",description:"The Sauce Labs Documentation Style Guide",keywords:["contributing","style","markdown"]},d=void 0,o={id:"contributing/style-guide",title:"Style Guide",description:"The Sauce Labs Documentation Style Guide",source:"@site/docs/contributing/style-guide.md",sourceDirName:"contributing",slug:"/contributing/style-guide",permalink:"/sauce-docs/pr-preview/pr-2909/contributing/style-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/contributing/style-guide.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",description:"The Sauce Labs Documentation Style Guide",keywords:["contributing","style","markdown"]},sidebar:"docs",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2909/contributing"},next:{title:"Code of Conduct",permalink:"/sauce-docs/pr-preview/pr-2909/contributing/code-of-conduct"}},c={},h=[{value:"Markdown",id:"markdown",level:2},{value:"Frontmatter",id:"frontmatter",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Headers",id:"headers",level:2},{value:"Content",id:"content",level:2},{value:"Images",id:"images",level:2},{value:"Videos",id:"videos",level:2},{value:"Tabs",id:"tabs",level:2},{value:"Inline Code",id:"inline-code",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Code References",id:"code-references",level:2},{value:"Expanding Code Blocks",id:"expanding-code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Context Limited",id:"context-limited",level:2},{value:"Badges",id:"badges",level:3},{value:"Highlighted Text",id:"highlighted-text",level:3},{value:"Cards",id:"cards",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sauce Labs welcomes your contributions to our documentation. This document describes the options available for creating content for the site, along with some guidelines and conventions."}),"\n",(0,t.jsx)(n.h2,{id:"markdown",children:"Markdown"}),"\n",(0,t.jsxs)(n.p,{children:["This site uses Docusaurus version 2. Docusaurus uses the\n",(0,t.jsx)(n.a,{href:"https://github.com/jonschlinkert/remarkable",children:"remarkable Markdown processor"})," to convert\n",(0,t.jsx)(n.a,{href:"https://guides.github.com/features/mastering-markdown/",children:"GitHub Flavored Markdown"})," into HTML.\n",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"Docusaurus Markdown"})," supports\n",(0,t.jsx)(n.a,{href:"https://www.markdownguide.org/basic-syntax",children:"Basic Markdown Syntax"})," and most\n",(0,t.jsx)(n.a,{href:"https://www.markdownguide.org/extended-syntax/",children:"Extended Syntax"}),". You can see which features are supported\n",(0,t.jsx)(n.a,{href:"https://www.markdownguide.org/tools/docusaurus/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"frontmatter",children:"Frontmatter"}),"\n",(0,t.jsx)(n.p,{children:"At the top of each docs page, you need to include these things:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsx)(n.td,{children:"A brief string that uniquely identifies the page within its parent folder. The id and the name of the file should be the same."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"title"})}),(0,t.jsx)(n.td,{children:"The main title of the page. This value will automatically be rendered using the H1 style at the top of the page."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sidebar_label"})}),(0,t.jsx)(n.td,{children:"This is what will appear in the left hand navigation tree for the page."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"description"})," (optional)"]}),(0,t.jsx)(n.td,{children:"This is what appears when the page is referenced in a Google search result."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"keywords"})," (optional)"]}),(0,t.jsx)(n.td,{children:"A list of terms that help categorize the page for SEO purposes."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"It looks like this in the document:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"---\nid: style-guide\ntitle: Style Guide Introduction\nsidebar_label: Style Guide\ndescription: The Sauce Labs Documentation Style Guide\nkeywords:\n- contributing\n- style\n- markdown\n---\n"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The first paragraph of the documentation should set the user's expectations for what they will find on the page.\nDescribe the key benefits to the user, but do not include links."}),"\n",(0,t.jsx)(n.h2,{id:"headers",children:"Headers"}),"\n",(0,t.jsx)(n.p,{children:"For accessibility and SEO reasons, never have an H4 header that isn't under an H3 header,\nor an H3 header that isn't under an H2 header."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"H1 headers should never be used in a document since the title is automatically generated as an H1."}),"\n",(0,t.jsx)(n.li,{children:"H2 headers are used for SEO, so make sure they succinctly represent what a user will find on the page in that section."}),"\n",(0,t.jsx)(n.li,{children:"H3 headers are included in the page's table of contents on the right, so make sure the title describes something\na user might want to directly navigate to."}),"\n",(0,t.jsx)(n.li,{children:"H4 headers are to emphasize things within a subsection of the page; these can be longer than the other headers\nif needed because they aren't included in the Table of Contents."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Markdown Code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"## H2 Header\n\n### H3 Header\n\n#### H4 Header\n"})}),"\n",(0,t.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,t.jsx)(n.p,{children:"All words are rendered in the same paragraph even with line breaks, so long as there isn't an empty line.\nAs such, it is good practice for each line to be less than 120 characters long for readability, when possible."}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Markdown"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"This\nwill\nall\nbe\non\none\nline.\n\nThe empty line above creates a new paragraph.\n\nThis forces a soft return<br />\nrather than creating a new paragraph\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsxs)("td",{children:["This\nwill\nall\nbe\non\none\nline.","The empty line above creates a new paragraph.","This forces a soft return",(0,t.jsx)("br",{}),"\nrather than creating a new paragraph"]})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,t.jsxs)(n.p,{children:["All image files should be included in the ",(0,t.jsx)(n.code,{children:"sauce-docs/static/img"})," directory, in a sub-directory that\ncorresponds to the referencing directory. (e.g., images for a document in the ",(0,t.jsx)(n.code,{children:"sauce-docs/docs/contributing"})," directory\nwould be located in the ",(0,t.jsx)(n.code,{children:"sauce-docs/static/img/contributing"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["To add an image from that directory, you need to import a special method by placing this line\nbelow the ",(0,t.jsx)(n.a,{href:"#frontmatter",children:"Frontmatter"}),", but above the ",(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"import useBaseUrl from '@docusaurus/useBaseUrl';\n"})}),"\n",(0,t.jsx)(n.p,{children:"and then reference the image as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<img src={useBaseUrl(\'img/contributing/my-image.png\')} alt="All images should\nhave alt text" width="250"/>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"videos",children:"Videos"}),"\n",(0,t.jsx)(n.p,{children:"Any referenced videos need to be from a Sauce Labs YouTube account.\nThe suggested iframe code structure is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<iframe\nwidth="560"\nheight="315"\nsrc="https://www.youtube.com/embed/-RDh1ukLN8w"\nframeborder="0"\nallow="accelerometer;\nautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\nallowfullscreen\n></iframe>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"tabs",children:"Tabs"}),"\n",(0,t.jsx)(n.p,{children:"Tabs are a great option when an example is different in different contexts.\nThe primary usage of tabs on this site is to illustrate the same example in multiple languages.\nIdeally, these examples will exist in Java, Node.js, Python, Ruby, and C#, and the tabs should be placed in that order."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When a page includes multiple sets of tabs, use a ",(0,t.jsx)(n.code,{children:"groupId"})," so when the user selects a particular tab,\nall tabs with that ID will switch to the selected tab."]})}),"\n",(0,t.jsxs)(n.p,{children:["To use tabs, you need to import two special methods by placing these lines below the ",(0,t.jsx)(n.a,{href:"#frontmatter",children:"Frontmatter"}),",\nbut above the ",(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n"})}),"\n",(0,t.jsx)(n.p,{children:"and then use the tabs as follows:"}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Markdown"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:'<Tabs groupId="lang-ex">\n  <TabItem value="java" label="Java" default>\n    This would include information or examples for Java\n  </TabItem>\n  <TabItem value="js" label="Node.js">\n    This would include information or examples for Node.js\n  </TabItem>\n</Tabs>\n'})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"lang-ex",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",default:!0,children:"This would include information or examples for Java"}),(0,t.jsx)(a.A,{value:"js",label:"Node.js",children:"This would include information or examples for Node.js"})]})})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"inline-code",children:"Inline Code"}),"\n",(0,t.jsx)(n.p,{children:"To refer to a single class or method name in a sentence, place single backticks around the name."}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Markdown"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"This comment refers to the `RemoteWebDriver` class\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsxs)("td",{children:["This comment refers to the ",(0,t.jsx)(n.code,{children:"RemoteWebDriver"})," class"]})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,t.jsx)(n.p,{children:"The best way to display code is with code blocks. Markdown will highlight each language differently, so it is helpful\nto specify which language you are using, and it's a good idea to include a title with the code block as well."}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Markdown"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Custom Title"',children:"RemoteWebDriver driver = new RemoteWebDriver(url, capabilities);\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Custom Title"',children:"RemoteWebDriver driver = new RemoteWebDriver(url, capabilities);\n"})})})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"code-references",children:"Code References"}),"\n",(0,t.jsxs)(n.p,{children:["The Sauce Labs Open Source Team created a plugin for use with Docusaurus to allow us to reference code on GitHub\nrather than duplicating code in this repo. Ideally all code displayed in the Sauce Labs documentation points to code in\none of the ",(0,t.jsx)(n.code,{children:"demo-<language>"})," repos on\n",(0,t.jsx)(n.a,{href:"https://github.com/saucelabs-training/?q=demo#org-repositories",children:"Sauce Labs Training GitHub Org"}),'.\nWhen referencing code, include the language, "reference" and a title indicating what the sample shows.\nThe URL for the link can be for the entire file, or include specific line numbers at the end.']}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["To ensure that code examples do not go stale and can be easily updated,\nall code references should reference a tag instead of\na branch name or a commit hash. For our ",(0,t.jsx)(n.code,{children:"demo-<language>"})," repos, we are doing semantic versioning with ",(0,t.jsx)(n.code,{children:"docs-<version>"}),".\nSo, we will create and use ",(0,t.jsx)(n.code,{children:"docs-1.0"})," or ",(0,t.jsx)(n.code,{children:"docs-1.1"}),", etc., as needed."]}),(0,t.jsx)(n.p,{children:"To create a new tag in one of the Sauce Labs owned repos:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git tag -a -m 'reference for Sauce Labs documentation' docs-<version>\ngit push origin --tags\n"})})]}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Markdown"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'reference title="Example Test"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SauceBindingsTest.java#L39-L43\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'reference title="Example Test"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SauceBindingsTest.java#L39-L43\n"})})})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"expanding-code-blocks",children:"Expanding Code Blocks"}),"\n",(0,t.jsxs)(n.p,{children:["If you have an especially large code block that you'd like to reference on the page, but do not want\nit to take up too much space on the page by default, we encourage the use of ",(0,t.jsx)(n.code,{children:"details"})," elements."]}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"HTML"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<details>\n<summary>\n<strong>Click here</strong> to see an example of something hidden by default.\n</summary>\nThis is hidden by default.\n</details>\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("strong",{children:"Click here"})," to see an example of something hidden by default."]}),"This is hidden by default."]})})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,t.jsxs)(n.p,{children:["There are four types of ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/admonitions",children:"Docusaurus admonitions"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Note - Relevant information."}),"\n",(0,t.jsx)(n.li,{children:"Tip - A user should do this."}),"\n",(0,t.jsx)(n.li,{children:"Caution - A user should pay attention to this."}),"\n",(0,t.jsx)(n.li,{children:"Warning - A user might do something dangerous."}),"\n"]}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Markdown"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:":::note\n\nRelevant information for you.\n\n:::\n\n:::tip\n\nYou should do this.\n\n:::\n\n:::caution\n\nYou should probably pay attention to this.\n\n:::\n\n:::warning\n\nYou are about to do something dangerous.\n\n:::\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Relevant information for you."})}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You should do this."})}),(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You should probably pay attention to this."})}),(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You are about to do something dangerous."})})]})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"context-limited",children:"Context Limited"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to provide context for users for when special conditions or limitations apply to designated information."}),"\n",(0,t.jsx)(n.h3,{id:"badges",children:"Badges"}),"\n",(0,t.jsx)(n.p,{children:"Badges are color-coded images that apply to entire pages or large sections of documentation."}),"\n",(0,t.jsx)(n.p,{children:"Green badges are used for everything except for deprecated information, which is indicated with a Gold badge."}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"HTML"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<p><span className="sauceGreen">Beta</span></p>\n<p><span className="sauceGreen">Enterprise Only</span></p>\n<p><span className="sauceGreen">iOS Only</span></p>\n<p><span className="sauceGreen">Live Testing Only</span></p>\n<p><span className="sauceGreen">Early Access</span></p>\n<p><span className="sauceGold">Deprecated</span></p>\n'})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Beta"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Enterprise Only"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"iOS Only"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Live Testing Only"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Early Access"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGold",children:"Deprecated"})})]})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"highlighted-text",children:"Highlighted Text"}),"\n",(0,t.jsxs)(n.p,{children:["For information in a subsection or in a table that needs additional context, use a ",(0,t.jsx)(n.code,{children:"span"})," element with\none of the highlight classes. These can also be used to indicate that the content only applies to specific versions of a\ntechnology."]}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"HTML"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<p><span class="highlight cypress">Cypress</span></p>\n<p><span class="highlight playwright">Playwright version >= 1.12</span></p>\n<p><span class="highlight testcafe">TestCafe</span></p>\n'})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("span",{class:"highlight cypress",children:"Cypress"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{class:"highlight playwright",children:"Playwright version >= 1.12"})}),(0,t.jsx)("p",{children:(0,t.jsx)("span",{class:"highlight testcafe",children:"TestCafe"})})]})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"cards",children:"Cards"}),"\n",(0,t.jsx)(n.p,{children:"For overview pages that have four categories, we often use these Boxes. Note that you can't use Markdown inside this HTML."}),"\n",(0,t.jsx)("table",{class:"code",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"HTML"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div className="box-wrapper" markdown="1">\n<div className="box box1 card">\n<div className="container">\n<h2>Box 1</h2>\n<p>Box 1 things.</p>\n<ul>\n<li><a href="">Link 1</a></li>\n<li><a href="">Link 2</a></li>\n</ul>\n</div>\n</div>\n<div className="box box2 card">\n<div className="container">\n<h2>Box 2</h2>\n<p>Box 2 things.</p>\n<ul>\n<li><a href="">Link 1</a></li>\n</ul>\n</div>\n</div>\n<div className="box box3 card">\n<div className="container">\n<h2>Box 3</h2>\n<p>Box 3 things, <a href="">Link 1</a>.</p>\n<ul>\n<li><a href="">Link 2</a></li>\n</ul>\n</div>\n</div>\n<div className="box box4 card">\n<div className="container">\n<h2>Box 4</h2>\n<p>Box 4 things.</p>\n<ul>\n<li><a href="">Link 1</a></li>\n<li><a href="">Link 2</a></li>\n</ul>\n</div>\n</div>\n</div>\n'})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.strong,{children:"Display"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"box-wrapper",markdown:"1",children:[(0,t.jsx)("div",{className:"box box1 card",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{children:"Box 1"}),(0,t.jsx)("p",{children:"Box 1 things."}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Link 1"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Link 2"})})]})]})}),(0,t.jsx)("div",{className:"box box2 card",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{children:"Box 2"}),(0,t.jsx)("p",{children:"Box 2 things."}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Link 1"})})})]})}),(0,t.jsx)("div",{className:"box box3 card",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{children:"Box 3"}),(0,t.jsxs)("p",{children:["Box 3 things, ",(0,t.jsx)("a",{href:"",children:"Link 1"}),"."]}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Link 2"})})})]})}),(0,t.jsx)("div",{className:"box box4 card",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{children:"Box 4"}),(0,t.jsx)("p",{children:"Box 4 things."}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Link 1"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"",children:"Link 2"})})]})]})})]})})]})]})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var t=s(18215);const i={tabItem:"tabItem_Ymn6"};var r=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,a),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),i=s(18215),r=s(23104),a=s(56347),l=s(205),d=s(57485),o=s(31682),c=s(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=u(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,h]=p({queryString:s,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),g=(()=>{const e=o??j;return x({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function f(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const n=e.currentTarget,s=d.indexOf(n),i=l[s].value;i!==t&&(o(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);