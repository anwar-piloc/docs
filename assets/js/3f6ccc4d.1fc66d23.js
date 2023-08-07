"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[81701],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),u=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=u(n.components);return a.createElement(l.Provider,{value:e},n.children)},g="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,p=d(n,["components","mdxType","originalType","parentName"]),g=u(t),s=i,m=g["".concat(l,".").concat(s)]||g[s]||c[s]||o;return t?a.createElement(m,r(r({ref:e},p),{},{components:t})):a.createElement(m,r({ref:e},p))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=s;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=n,d[g]="string"==typeof n?n:i,r[1]=d;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},19556:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(83117),i=(t(67294),t(3905)),o=t(18881);const r={title:"Update an individual onboarding"},d="Update an individual onboarding",l={unversionedId:"topics/onboarding/individual/guide-update-onboarding",id:"topics/onboarding/individual/guide-update-onboarding",title:"Update an individual onboarding",description:"Update individual onboardings using the API.",source:"@site/docs/topics/onboarding/individual/guide-update-onboarding.mdx",sourceDirName:"topics/onboarding/individual",slug:"/topics/onboarding/individual/guide-update-onboarding",permalink:"/topics/onboarding/individual/guide-update-onboarding",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/onboarding/individual/guide-update-onboarding.mdx",tags:[],version:"current",frontMatter:{title:"Update an individual onboarding"},sidebar:"docSidebar",previous:{title:"Create an individual onboarding link",permalink:"/topics/onboarding/individual/guide-create-onboarding"},next:{title:"Company account onboarding",permalink:"/topics/onboarding/company/about"}},u={},p=[{value:"Guide",id:"guide",level:2},{value:"API mutation",id:"api-mutation",level:2},{value:"Payload",id:"payload",level:2}],g={toc:p},c="wrapper";function s(n){let{components:e,...t}=n;return(0,i.kt)(c,(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update-an-individual-onboarding"},"Update an individual onboarding"),(0,i.kt)("p",null,"Update individual onboardings using the API."),(0,i.kt)(o.ZP,{mdxType:"UpdateOnboardingPrereqs"}),(0,i.kt)("h2",{id:"guide"},"Guide"),(0,i.kt)("p",null,"To test updating an individual onboarding, ",(0,i.kt)("strong",{parentName:"p"},"add an account name"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, ",(0,i.kt)("a",{parentName:"li",href:"../overview/guide-retrieve-onboarding-id"},"retrieve the ID")," for the onboarding you need to update."),(0,i.kt)("li",{parentName:"ol"},"In the API Explorer, add the ",(0,i.kt)("inlineCode",{parentName:"li"},"updateIndividualOnboarding")," mutation."),(0,i.kt)("li",{parentName:"ol"},"Enter the onboarding ID retrieved in step 1."),(0,i.kt)("li",{parentName:"ol"},"Check the box for ",(0,i.kt)("inlineCode",{parentName:"li"},"accountName"),", then add an account name (example: MyBrand)."),(0,i.kt)("li",{parentName:"ol"},"Add desired messages to the success payload, either for validation or in case of rejection.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommendation"),": Inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdateIndividualOnboardingSuccessPayload")," option, add ",(0,i.kt)("inlineCode",{parentName:"li"},"onboardingState")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"statusInfo")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," to confirm the onboarding is still ongoing and valid after making the update."))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u25b6 Run"),".")),(0,i.kt)("h2",{id:"api-mutation"},"API mutation"),(0,i.kt)("p",null,"\ud83d\udd0e ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=bXV0YXRpb24gVXBkYXRlSW5kaXZpZHVhbE9uYm9hcmRpbmcgewogIHVwZGF0ZUluZGl2aWR1YWxPbmJvYXJkaW5nKAogICAgaW5wdXQ6IHsKICAgICAgb25ib2FyZGluZ0lkOiAiYWUwNmZhZjYtMTNiMi00ZTllLTg5MWItZTc4ZWNkNWNhMGU0IgogICAgICBhY2NvdW50TmFtZTogIk15QnJhbmQiCiAgICB9CiAgKSB7CiAgICAuLi4gb24gRm9yYmlkZGVuUmVqZWN0aW9uIHsKICAgICAgX190eXBlbmFtZQogICAgICBtZXNzYWdlCiAgICB9CiAgICAuLi4gb24gSW50ZXJuYWxFcnJvclJlamVjdGlvbiB7CiAgICAgIF9fdHlwZW5hbWUKICAgICAgbWVzc2FnZQogICAgfQogICAgLi4uIG9uIFVwZGF0ZUluZGl2aWR1YWxPbmJvYXJkaW5nU3VjY2Vzc1BheWxvYWQgewogICAgICBfX3R5cGVuYW1lCiAgICAgIG9uYm9hcmRpbmcgewogICAgICAgIGFjY291bnROYW1lCiAgICAgICAgb25ib2FyZGluZ1N0YXRlCiAgICAgICAgc3RhdHVzSW5mbyB7CiAgICAgICAgICBzdGF0dXMKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC4uLiBvbiBWYWxpZGF0aW9uUmVqZWN0aW9uIHsKICAgICAgX190eXBlbmFtZQogICAgICBtZXNzYWdlCiAgICAgIGZpZWxkcyB7CiAgICAgICAgbWVzc2FnZQogICAgICB9CiAgICB9CiAgfQp9Cg%3D%3D&tab=api"},"Open the mutation in API Explorer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{4-5,19-22} showLineNumbers","{4-5,19-22}":!0,showLineNumbers:!0},'mutation UpdateIndividualOnboarding {\n  updateIndividualOnboarding(\n    input: {\n      onboardingId: "ae06faf6-13b2-4e9e-891b-e78ecd5ca0e4"\n      accountName: "MyBrand"\n    }\n  ) {\n    ... on ForbiddenRejection {\n      __typename\n      message\n    }\n    ... on InternalErrorRejection {\n      __typename\n      message\n    }\n    ... on UpdateIndividualOnboardingSuccessPayload {\n      __typename\n      onboarding {\n        accountName\n        onboardingState\n        statusInfo {\n          status\n        }\n      }\n    }\n    ... on ValidationRejection {\n      __typename\n      message\n      fields {\n        message\n      }\n    }\n  }\n}\n\n')),(0,i.kt)("h2",{id:"payload"},"Payload"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6-9} showLineNumbers","{6-9}":!0,showLineNumbers:!0},'{\n  "data": {\n    "updateIndividualOnboarding": {\n      "__typename": "UpdateIndividualOnboardingSuccessPayload",\n      "onboarding": {\n        "accountName": "MyBrand",\n        "onboardingState": "Ongoing",\n        "statusInfo": {\n          "status": "Valid"\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0},18881:(n,e,t)=>{t.d(e,{ZP:()=>d});var a=t(83117),i=(t(67294),t(3905));const o={toc:[]},r="wrapper";function d(n){let{components:e,...t}=n;return(0,i.kt)(r,(0,a.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To update an onboarding:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You must have a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.swan.io/api/authentication/project-access-token"},"project access token"),"."),(0,i.kt)("li",{parentName:"ul"},"The onboarding status must be ",(0,i.kt)("inlineCode",{parentName:"li"},"Ongoing")," (valid or invalid)."))))}d.isMDXComponent=!0}}]);