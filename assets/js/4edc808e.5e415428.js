"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905));const r={sidebar_label:"Welcome",slug:"/"},i="Welcome",s={unversionedId:"index",id:"index",title:"Welcome",description:"Welcome to Swan's product, partnership, and developer documentation.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Welcome",slug:"/"},sidebar:"docSidebar",next:{title:"Glossary",permalink:"/glossary"}},l={},p=[{value:"Where to start?",id:"where-to-start",level:2},{value:"Swan snapshot",id:"swan-snapshot",level:2},{value:"About Swan documentation",id:"about-swan-documentation",level:2},{value:"Site anatomy",id:"site-anatomy",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome to Swan's product, partnership, and developer documentation."),(0,o.kt)("h2",{id:"where-to-start"},"Where to start?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Read this page")," to understand more about Swan"),(0,o.kt)("li",{parentName:"ul"},"Check out the ",(0,o.kt)("a",{parentName:"li",href:"/starter-guides/intro"},(0,o.kt)("strong",{parentName:"a"},"starter guides"))," to explore Sandbox, activate your project, and more"),(0,o.kt)("li",{parentName:"ul"},"Find a ",(0,o.kt)("a",{parentName:"li",href:"/use-cases/intro"},(0,o.kt)("strong",{parentName:"a"},"use case"))," that resembles your own and learn how to implement Swan effectively"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browse the navigation")," to find your topic"),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("strong",{parentName:"li"},"global search")," to find what you need")),(0,o.kt)("h2",{id:"swan-snapshot"},"Swan snapshot"),(0,o.kt)("p",null,"Swan is an ",(0,o.kt)("strong",{parentName:"p"},"API-first e-money institution")," that ",(0,o.kt)("strong",{parentName:"p"},"integrates directly into other products"),", providing financial services for partners and their clients.\nUse cases vary widely, from buy-now/pay-later setups to employee benefits cards to rental management."),(0,o.kt)("h2",{id:"about-swan-documentation"},"About Swan documentation"),(0,o.kt)("p",null,"This section of Swan's documentation covers two main themes: ",(0,o.kt)("strong",{parentName:"p"},"concepts"),", or explanatory content, and ",(0,o.kt)("strong",{parentName:"p"},"guides"),", providing steps to complete a task."),(0,o.kt)("h3",{id:"site-anatomy"},"Site anatomy"),(0,o.kt)("p",null,"The anatomy of the Swan documentation site has five main sections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Top navigation"),": Swan's different types of partner documentation, including the main docs (where you are now), information about partnerships with Swan ",(0,o.kt)("em",{parentName:"li"},"(coming soon)"),", and a section just for developers ",(0,o.kt)("em",{parentName:"li"},"(also coming soon)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sidebar navigation"),": links to all content for this top navigation section"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Changelog")," & ",(0,o.kt)("strong",{parentName:"li"},"Search"),": link to Swan's product changelog, plus the invaluable global search that unifies all sections in the top navigation (powered by Algolia)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Page navigation"),": table of contents for this page only, generated using the page's headings"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Content"),": the good stuff!"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Edit link"),": if you find errors or would like to contribute something you've discovered, follow this link to the Swan documentation GitHub repository and start a discussion or create a pull request")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"callouts of homepage",src:n(9141).Z,width:"2351",height:"1289"})))}m.isMDXComponent=!0},9141:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docs-anatomy-5ef35066ae4662a24e2f15768907ebfd.png"}}]);