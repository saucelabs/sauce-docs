"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4692],{85693:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=a(74848),i=a(28453),s=a(86025);const r={id:"set-variable",title:"Different ways to set a variable",sidebar_label:"Setting up Variables",description:"Different ways to set a variable"},o=void 0,l={id:"api-testing/use-cases/set-variable",title:"Different ways to set a variable",description:"Different ways to set a variable",source:"@site/docs/api-testing/use-cases/set-variable.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/set-variable",permalink:"/sauce-docs/pr-preview/pr-2897/api-testing/use-cases/set-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/set-variable.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"set-variable",title:"Different ways to set a variable",sidebar_label:"Setting up Variables",description:"Different ways to set a variable"},sidebar:"docs",previous:{title:"Saving Token in K/V Store",permalink:"/sauce-docs/pr-preview/pr-2897/api-testing/use-cases/saving-token-kv"},next:{title:"Using a File from Vault Drive",permalink:"/sauce-docs/pr-preview/pr-2897/api-testing/use-cases/use-drive"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Mode: String",id:"mode-string",level:2},{value:"Mode: Data",id:"mode-data",level:2},{value:"Mode: Language",id:"mode-language",level:2},{value:"Lang: Javascript",id:"lang-javascript",level:4},{value:"Lang: Template",id:"lang-template",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SET (Variable)"})," component allows you to create variables from a string to a payload. In this guide, you will learn about the various ways to create a variable."]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Familiarity with the ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mode-string",children:"Mode: String"}),"\n",(0,t.jsx)(n.p,{children:"This mode generates a String variable, which can be a static value or a variable taken from the response payload. If it is a static value you just have to write it and the engine will take it as is."}),"\n",(0,t.jsx)(n.p,{children:"Consider the following example:"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-string.png"),alt:"Set static string"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: product\n  mode: string\n  value: t-shirt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example the variable ",(0,t.jsx)(n.code,{children:"product"})," will always have the value ",(0,t.jsx)(n.code,{children:"t-shirt"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you write it in ${...} brackets, you will make it dynamic and let the engine evaluate the value every time the test will be executed."}),"\n",(0,t.jsxs)(n.p,{children:["Consider the following response payload that has been stored in the ",(0,t.jsx)(n.code,{children:"payload"})," variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "Baseball Cap",\n  "price": 29.99,\n  "category": "1",\n  "description": "This is product 1!",\n  "quantity": 5,\n  "imageURL": "http://image.com",\n  "color": [\n    "blue",\n    "yellow"\n  ],\n  "createdAt": "2021-11-28T21:58:43.461Z",\n  "updatedAt": "2021-11-28T21:58:43.461Z"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you write the following:"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-var-dynamic.png"),alt:"Set dynamic value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: product\n  mode: string\n  value: ${payload.name}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The engine will evaluate the variable value every time the test will be executed. In the above scenario the variable ",(0,t.jsx)(n.code,{children:"product"})," will contain the value ",(0,t.jsx)(n.code,{children:"Baseball Cap"})," but if the response is the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 2,\n  "name": "Long Sleeve Shirt",\n  "price": 39.99,\n  "category": "1",\n  "description": "This is product 2!",\n  "quantity": 7,\n  "imageURL": "http://image.com",\n  "color": [\n    "blue",\n    "yellow",\n    "red"\n  ],\n  "createdAt": "2021-11-28T21:58:43.461Z",\n  "updatedAt": "2021-11-28T21:58:43.461Z"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The value will be ",(0,t.jsx)(n.code,{children:"Long Sleeve Shirt"}),", without changing your test."]}),"\n",(0,t.jsx)(n.h2,{id:"mode-data",children:"Mode: Data"}),"\n",(0,t.jsxs)(n.p,{children:["Using this mode, the variable will be evaluated (as an ",(0,t.jsx)(n.a,{href:"/api-testing/composer/expressions/",children:"Expression"})," field), therefore the variable type can be any type. The variable type will depend on the object being evaluated.\nIn the Data field, you need to enter a single line expression that returns a value."]}),"\n",(0,t.jsx)(n.p,{children:"For example, you can create a new array in this way:"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-data-array.png"),alt:"Set array"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: set\n  var: product\n  mode: object\n  object: \'["Bluetooth Headphones","Long Sleeve Shirt","Baseball Cap"]\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then, you can iterate over it using the ",(0,t.jsx)(n.code,{children:"each"})," component, or you can invoke a specific item using ",(0,t.jsx)(n.code,{children:"${product[1]}"})," where the number inside the square brackets identifies the position of the object you want to call, starting from 0."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, consider the example below where the JSON payload is stored in the ",(0,t.jsx)(n.code,{children:"payload"})," variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "name": "Baseball Cap",\n    "price": 29.99,\n    "category": "1",\n    "description": "This is product 1!",\n    "quantity": 5,\n    "imageURL": "http://image.com",\n    "color": [\n      "blue",\n      "yellow"\n    ],\n    "createdAt": "2021-11-28T21:58:43.461Z",\n    "updatedAt": "2021-11-28T21:58:43.461Z"\n  },\n  {\n    "id": 2,\n    "name": "Long Sleeve Shirt",\n    "price": 39.99,\n    "category": "1",\n    "description": "This is product 2!",\n    "quantity": 7,\n    "imageURL": "http://image.com",\n    "color": [\n      "blue",\n      "yellow",\n      "red"\n    ],\n    "createdAt": "2021-11-28T21:58:43.461Z",\n    "updatedAt": "2021-11-28T21:58:43.461Z"\n  },\n  {\n    "id": 3,\n    "name": "Bluetooth Headphones",\n    "price": 49.99,\n    "category": "1",\n    "description": "This is product 3!",\n    "quantity": 50,\n    "imageURL": "http://image.com",\n    "color": [\n      "green",\n      "yellow"\n    ],\n    "createdAt": "2021-11-28T21:58:43.462Z",\n    "updatedAt": "2021-11-28T21:58:43.462Z"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you write the following:"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-data.png"),alt:"Set data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: product\n  mode: object\n  object: payload.filter(it=>it.name=='Bluetooth Headphones')\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will return the following object:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 3,\n  "name": "Bluetooth Headphones",\n  "price": 49.99,\n  "category": "1",\n  "description": "This is product 3!",\n  "quantity": 50,\n  "imageURL": "http://image.com",\n  "color": [\n    "green",\n    "yellow"\n  ],\n  "createdAt": "2021-11-28T21:58:43.462Z",\n  "updatedAt": "2021-11-28T21:58:43.462Z"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"mode-language",children:"Mode: Language"}),"\n",(0,t.jsxs)(n.p,{children:["This mode is the most advanced way to create your variables. The available options are: ",(0,t.jsx)(n.code,{children:"Javascript"})," and ",(0,t.jsx)(n.code,{children:"Template"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"lang-javascript",children:"Lang: Javascript"}),"\n",(0,t.jsxs)(n.p,{children:["In this mode you can create your variable by writing a JavaScript script in the ",(0,t.jsx)(n.code,{children:"Body"})," field. It can be a complete script with variable declarations or loops."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you have a JSON Web Token (JWT) token stored in the ",(0,t.jsx)(n.code,{children:"token"})," variable and you need to decode it and return the JSON payload it was generated from:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgyMzY1NjgsImV4cCI6MTY4OTc3MjU2OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJOYW1lIjoiSm9obiIsIlN1cm5hbWUiOiJEb2UiLCJFbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.DN7vKPlHkAy1hwYOYpUKDwkV0yD-KS2pdoc76aKPhm8\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To do so, you need to write the following script inside the ",(0,t.jsx)(n.code,{children:"Body"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var pieces = token.split('.')\nvar b64payload = pieces[1]\nvar decoded = Buffer.from(b64payload, 'base64').toString()\nvar json = JSON.parse(decoded)\nreturn json\n"})}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-javascript.png"),alt:"Set javascript"}),"\n",(0,t.jsx)(n.p,{children:"That will produce the following JSON:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "iat": 1658236568,\n  "exp": 1689772568,\n  "aud": "www.example.com",\n  "sub": "john.doe@example.com",\n  "Name": "John",\n  "Surname": "Doe",\n  "Email": "john.doe@example.com",\n  "Role": [\n    "Manager",\n    "Project Administrator"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then, you can retrieve all the keys as ",(0,t.jsx)(n.code,{children:"jsonData.iat"})," where ",(0,t.jsx)(n.code,{children:"jsonData"})," is the variable name you entered in the ",(0,t.jsx)(n.code,{children:"Variable"})," field."]}),"\n",(0,t.jsx)(n.h4,{id:"lang-template",children:"Lang: Template"}),"\n",(0,t.jsx)(n.p,{children:"In this mode, you can create your own template in the same way as it is done for Request Body, the advantage here is that you can print the variable to check if all is correct (Body cannot be printed)."}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you need to add a new product to your database, you can create the body for the (PUT) request and paste it in the ",(0,t.jsx)(n.code,{children:"Body"})," field, and then print it in a ",(0,t.jsx)(n.code,{children:"Comment"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": 4,\n    "name": "T-Shirt",\n    "price": ${price},\n    "category": "1",\n    "description": "This is product ${id}!",\n    "quantity": 5,\n    "imageURL": "http://image.com",\n    "color": ["red", "green"],\n    "createdAt": "${D.format (D.nowMillis(), \'yyyy-MM-DD\')}",\n    "updatedAt": "${D.format (D.nowMillis(), \'yyyy-MM-DD\')}T${D.format(D.nowMillis(), \'HH:mm:ssz\')}"\n}\n'})}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-template.webp"),alt:"Set template"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/set-template-comment.png"),alt:"Comment",width:"750"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);