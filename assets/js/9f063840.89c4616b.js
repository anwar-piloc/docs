"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(87462),o=n(67294),a=n(86010),i=n(12466),l=n(16550),u=n(91980),c=n(67392),s=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,c]=b({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,s.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=u??d;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var f=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==l&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},i,{className:(0,a.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(y,(0,r.Z)({},e,t)))}function I(e){const t=(0,f.Z)();return o.createElement(k,(0,r.Z)({key:String(t)},e))}},52027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));n(74866),n(85162);const a={title:"Retrieve information about a collection or document"},i="Retrieve information about a collection or document",l={unversionedId:"topics/onboarding/documents/guide-retrieve-info",id:"topics/onboarding/documents/guide-retrieve-info",title:"Retrieve information about a collection or document",description:"There are two methods you can use to get information about a collection or a document.",source:"@site/docs/topics/onboarding/documents/guide-retrieve-info.mdx",sourceDirName:"topics/onboarding/documents",slug:"/topics/onboarding/documents/guide-retrieve-info",permalink:"/topics/onboarding/documents/guide-retrieve-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/onboarding/documents/guide-retrieve-info.mdx",tags:[],version:"current",frontMatter:{title:"Retrieve information about a collection or document"},sidebar:"docSidebar",previous:{title:"Upload a document",permalink:"/topics/onboarding/documents/guide-upload-document"},next:{title:"Request a collection review",permalink:"/topics/onboarding/documents/guide-request-collection-review"}},u={},c=[{value:"API guide",id:"api-guide",level:2},{value:"Query",id:"query",level:3},{value:"Payload",id:"payload",level:3},{value:"Dashboard",id:"dashboard",level:2}],s={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"retrieve-information-about-a-collection-or-document"},"Retrieve information about a collection or document"),(0,o.kt)("p",null,"There are two methods you can use to get information about a collection or a document."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Run an API query")," to get information about collections and documents."),(0,o.kt)("li",{parentName:"ol"},"Get information about individual documents from your ",(0,o.kt)("strong",{parentName:"li"},"Dashboard"),".")),(0,o.kt)("h2",{id:"api-guide"},"API guide"),(0,o.kt)("p",null,"You can use either the user's ",(0,o.kt)("strong",{parentName:"p"},"onboarding ID")," or, if their onboarding is ",(0,o.kt)("inlineCode",{parentName:"p"},"Finalized"),", their ",(0,o.kt)("strong",{parentName:"p"},"account holder ID"),", to get information about a supporting document collection or an individual document."),(0,o.kt)("admonition",{title:"Onboarding or account holder ID",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide uses the onboarding ID.\nIf the onboarding is ",(0,o.kt)("inlineCode",{parentName:"p"},"Finalized"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"accountHolder")," query with the account holder ID instead.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, ",(0,o.kt)("a",{parentName:"li",href:"/topics/onboarding/overview/guide-get-onboarding-info"},"retrieve the required onboarding ID"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"onboarding")," query."),(0,o.kt)("li",{parentName:"ol"},"Enter the onboarding ID retrieved in step 1."),(0,o.kt)("li",{parentName:"ol"},"Choose to query either collection (line 3) or document (line 5) information, or keep both."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u25b6 Run")," your query.")),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"\ud83d\udd0e ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=cXVlcnkgRG9jdW1lbnRDb2xsZWN0aW9uSW5mbyB7CiAgb25ib2FyZGluZyhpZDogIiRVU0VSX09OQk9BUkRJTkdfSUQiKSB7CiAgICBzdXBwb3J0aW5nRG9jdW1lbnRDb2xsZWN0aW9uIHsKICAgICAgaWQKICAgICAgc3VwcG9ydGluZ0RvY3VtZW50cyB7CiAgICAgICAgaWQKICAgICAgICBzdXBwb3J0aW5nRG9jdW1lbnRQdXJwb3NlCiAgICAgICAgc3VwcG9ydGluZ0RvY3VtZW50VHlwZQogICAgICB9CiAgICB9CiAgfQp9Cg%3D%3D&tab=api"},"Open the query in API Explorer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2,3,5} showLineNumbers","{2,3,5}":!0,showLineNumbers:!0},'query DocumentCollectionInfo {\n  onboarding(id: "$USER_ONBOARDING_ID") {\n    supportingDocumentCollection {\n      id\n      supportingDocuments {\n        id\n        supportingDocumentPurpose\n        supportingDocumentType\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"The API Explorer returns the collection or document ID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{5,8} showLineNumbers","{5,8}":!0,showLineNumbers:!0},'{\n  "data": {\n    "onboarding": {\n      "supportingDocumentCollection": {\n        "id": "b52c51b4-8a23-45a2-b77a-e6d691f4578c",\n        "supportingDocuments": [\n          {\n            "id": "03a5601d-f9cc-448d-ad26-02aa04e5688a",\n            "supportingDocumentPurpose": "ProofOfIndividualAddress",\n            "supportingDocumentType": "HomeInsurance"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"Use the Dashboard to get a document ID."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Data")," > ",(0,o.kt)("strong",{parentName:"li"},"Onboardings")," > ",(0,o.kt)("strong",{parentName:"li"},"Supporting documents"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll horizontally to locate the document ID, then click to copy. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get a document ID from the Dashboard",src:n(3001).Z,width:"1447",height:"452"})))}p.isMDXComponent=!0},3001:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/get-document-id-29f46300d496d8630a7b07a4d18dd1f0.png"}}]);