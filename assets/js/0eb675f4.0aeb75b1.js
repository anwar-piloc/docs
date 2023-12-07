"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const r={title:"Request a collection review"},a="Request a collection review",l={unversionedId:"topics/onboarding/documents/guide-request-collection-review",id:"topics/onboarding/documents/guide-request-collection-review",title:"Request a collection review",description:"After all required supporting documents are uploaded, you can ask Swan to review your collection using the API or on your Dashboard.",source:"@site/docs/topics/onboarding/documents/guide-request-collection-review.mdx",sourceDirName:"topics/onboarding/documents",slug:"/topics/onboarding/documents/guide-request-collection-review",permalink:"/topics/onboarding/documents/guide-request-collection-review",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/onboarding/documents/guide-request-collection-review.mdx",tags:[],version:"current",frontMatter:{title:"Request a collection review"},sidebar:"docSidebar",previous:{title:"Retrieve information about a collection or document",permalink:"/topics/onboarding/documents/guide-retrieve-info"},next:{title:"Delete a document",permalink:"/topics/onboarding/documents/guide-delete-document"}},c={},u=[{value:"API guide",id:"api-guide",level:2},{value:"Mutation",id:"mutation",level:3},{value:"Payload",id:"payload",level:3},{value:"Dashboard",id:"dashboard",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"request-a-collection-review"},"Request a collection review"),(0,i.kt)("p",null,"After all required supporting documents are uploaded, you can ask Swan to review your collection ",(0,i.kt)("strong",{parentName:"p"},"using the API")," or on your ",(0,i.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,i.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/topics/onboarding/documents/#collection-statuses"},"collection must have the status")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Waiting for document"),", and there must be at least one document in the collection with the status ",(0,i.kt)("inlineCode",{parentName:"p"},"Uploaded"),".")),(0,i.kt)("h2",{id:"api-guide"},"API guide"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, ",(0,i.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-retrieve-info"},"retrieve the collection ID")," (",(0,i.kt)("inlineCode",{parentName:"li"},"supportingDocumentCollectionId"),")."),(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"requestSupportingDocumentCollectionReview")," mutation."),(0,i.kt)("li",{parentName:"ol"},"Enter the collection ID retrieved in step 1."),(0,i.kt)("li",{parentName:"ol"},"Add optional messages to the payload, either for validation or in case of rejection."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u25b6 Run")," your mutation.")),(0,i.kt)("h3",{id:"mutation"},"Mutation"),(0,i.kt)("p",null,"\ud83d\udd0e ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=bXV0YXRpb24gUmVxdWVzdENvbGxlY3Rpb25SZXZpZXcgewogIHJlcXVlc3RTdXBwb3J0aW5nRG9jdW1lbnRDb2xsZWN0aW9uUmV2aWV3KAogICAgaW5wdXQ6IHsKICAgICAgc3VwcG9ydGluZ0RvY3VtZW50Q29sbGVjdGlvbklkOiAiJENPTExFQ1RJT05fSUQiCiAgICB9CiAgKSB7CiAgICAuLi4gb24gUmVxdWVzdFN1cHBvcnRpbmdEb2N1bWVudENvbGxlY3Rpb25SZXZpZXdTdWNjZXNzUGF5bG9hZCB7CiAgICAgIF9fdHlwZW5hbWUKICAgICAgc3VwcG9ydGluZ0RvY3VtZW50Q29sbGVjdGlvbiB7CiAgICAgICAgaWQKICAgICAgICBzdGF0dXNJbmZvIHsKICAgICAgICAgIHN0YXR1cwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLi4uIG9uIEZvcmJpZGRlblJlamVjdGlvbiB7CiAgICAgIF9fdHlwZW5hbWUKICAgICAgbWVzc2FnZQogICAgfQogICAgLi4uIG9uIFN1cHBvcnRpbmdEb2N1bWVudENvbGxlY3Rpb25Ob3RGb3VuZFJlamVjdGlvbiB7CiAgICAgIGlkCiAgICAgIG1lc3NhZ2UKICAgIH0KICAgIC4uLiBvbiBTdXBwb3J0aW5nRG9jdW1lbnRDb2xsZWN0aW9uU3RhdHVzTm90QWxsb3dlZFJlamVjdGlvbiB7CiAgICAgIF9fdHlwZW5hbWUKICAgICAgbWVzc2FnZQogICAgICBuZXdTdGF0dXMKICAgICAgb2xkU3RhdHVzCiAgICB9CiAgfQp9Cg%3D%3D&tab=api"},"Open the mutation in API Explorer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{3,5-10} showLineNumbers","{3,5-10}":!0,showLineNumbers:!0},'mutation RequestCollectionReview {\n  requestSupportingDocumentCollectionReview(\n    input: { supportingDocumentCollectionId: "$COLLECTION_ID" }\n  ) {\n    ... on RequestSupportingDocumentCollectionReviewSuccessPayload {\n      __typename\n      supportingDocumentCollection {\n        id\n        statusInfo {\n          status\n        }\n      }\n    }\n    ... on ForbiddenRejection {\n      __typename\n      message\n    }\n    ... on SupportingDocumentCollectionNotFoundRejection {\n      id\n      message\n    }\n    ... on SupportingDocumentCollectionStatusNotAllowedRejection {\n      __typename\n      message\n      newStatus\n      oldStatus\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"payload"},"Payload"),(0,i.kt)("p",null,"Notice the status ",(0,i.kt)("inlineCode",{parentName:"p"},"PendingReview"),".\nYou can also confirm this on your Dashboard\u2014there should be an infobox in the supporting documents tab for this onboarding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6,8} showLineNumbers","{6,8}":!0,showLineNumbers:!0},'{\n  "data": {\n    "requestSupportingDocumentCollectionReview": {\n      "__typename": "RequestSupportingDocumentCollectionReviewSuccessPayload",\n      "supportingDocumentCollection": {\n        "id": "b52c51b4-8a23-45a2-b77a-e6d691f4578c",\n        "statusInfo": {\n          "status": "PendingReview"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,"Use the Dashboard to request a review of your supporting document collection."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On your Dashboard, go to ",(0,i.kt)("strong",{parentName:"li"},"Data")," > ",(0,i.kt)("strong",{parentName:"li"},"Onboardings"),"."),(0,i.kt)("li",{parentName:"ol"},"Open the onboarding for which you'd like to request a collection review."),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"Supporting documents")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Request document review")," to begin the review process."),(0,i.kt)("li",{parentName:"ol"},"A confirmation modal will appear. Click ",(0,i.kt)("strong",{parentName:"li"},"Confirm")," to finalize your request.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Request a collection review from the Dashboard",src:n(22618).Z,width:"1447",height:"454"})),(0,i.kt)("admonition",{title:"No updates while pending review",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As soon as you click ",(0,i.kt)("strong",{parentName:"p"},"Confirm"),", you can no longer upload additional documents or change uploaded documents until the review is complete.")))}p.isMDXComponent=!0},22618:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/request-collection-review-d7d9aea6f1b4c1d49191f4b0e175d686.png"}}]);