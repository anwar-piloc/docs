"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"View sensitive information"},o="View sensitive information",s={unversionedId:"topics/cards/physical/guide-view-info",id:"topics/cards/physical/guide-view-info",title:"View sensitive information",description:"The cardUrl available in the card query leads to website that displays the card with its design and its sensitive hidden information.",source:"@site/docs/topics/cards/physical/guide-view-info.mdx",sourceDirName:"topics/cards/physical",slug:"/topics/cards/physical/guide-view-info",permalink:"/topics/cards/physical/guide-view-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/cards/physical/guide-view-info.mdx",tags:[],version:"current",frontMatter:{title:"View sensitive information"},sidebar:"docSidebar",previous:{title:"Activate physical cards",permalink:"/topics/cards/physical/guide-activate"},next:{title:"Block & unblock physical cards",permalink:"/topics/cards/physical/guide-block-unblock"}},c={},l=[{value:"View physical card numbers",id:"view-number",level:2},{value:"View PIN",id:"view-pin",level:2},{value:"Mutation",id:"mutation",level:3},{value:"Payload",id:"payload",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"view-sensitive-information"},"View sensitive information"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cardUrl")," available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"card")," query leads to website that displays the card with its design and its sensitive hidden information."),(0,a.kt)("p",null,"Consider integrating it into your product with an iframe or a webview.\nThis URL is available for one hour after you query it.\nAfter one hour, renew the query to get another ",(0,a.kt)("inlineCode",{parentName:"p"},"cardUrl"),"."),(0,a.kt)("admonition",{title:"Information not visible",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If information fails to become visible despite having the appropriate permissions, it may remain hidden due to regulatory restrictions based on your location.")),(0,a.kt)("h2",{id:"view-number"},"View physical card numbers"),(0,a.kt)("p",null,"View the physical card numbers, which is different from the virtual card numbers, by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewPhysicalCardNumbers")," mutation which returns a consent.\nWhen you do this, make sure you are authenticated with a user access token using the name of the card's account member.\nThen a ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl")," is returned, inviting the user to start the Strong Customer Authentication with Swan."),(0,a.kt)("p",null,"After the consent is accepted, the card's sensitive information is ",(0,a.kt)("strong",{parentName:"p"},"displayed for five minutes"),".\nThe client can click to copy any of the sensitive information to their clipboard.\nAfter they're done with the card info, they can click OK to be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectUrl")," set up during the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewCardNumbers")," mutation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swan card with information masked and revealed",src:n(53692).Z,width:"1194",height:"452"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Store ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"consentId")),(0,a.kt)("p",{parentName:"admonition"},"To avoid repeating the Strong Customer Authentication each time the client wants to reveal the card numbers, the same ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl")," can be called anytime for five minutes after the consent.\nWe advise you to store the ",(0,a.kt)("inlineCode",{parentName:"p"},"consentId")," on your side and run a consent query to check the consent status is ",(0,a.kt)("inlineCode",{parentName:"p"},"Accepted")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateAt")," is less than five minutes, before reusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl")," only works in the cardholder's browser where the consent was completed.")),(0,a.kt)("h2",{id:"view-pin"},"View PIN"),(0,a.kt)("p",null,"You can display the physical card's PIN by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewPhysicalCardPinmutation")," which returns a consent.\nWhen you do this, make sure you are authenticated with a user access token using the name of the card's account member.\nThen a ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl")," is returned which invites the user to start the Strong Customer Authentication with Swan."),(0,a.kt)("p",null,"If your card was created before 17:00 CET/CEST, you can call the mutation starting from 17:30 the same day.\nOtherwise, you'll have to wait until the next day at 17:30 to start calling the mutation."),(0,a.kt)("p",null,"You can check the ",(0,a.kt)("inlineCode",{parentName:"p"},"isPINReady")," boolean (true/false) in the physical card's ",(0,a.kt)("inlineCode",{parentName:"p"},"statusInfo"),", with ",(0,a.kt)("inlineCode",{parentName:"p"},"ToActivate")," status.\nIt will be true when the PIN is available."),(0,a.kt)("h3",{id:"mutation"},"Mutation"),(0,a.kt)("p",null,"\ud83d\udd0e ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=bXV0YXRpb24gTXlNdXRhdGlvbiB7CiAgdmlld1BoeXNpY2FsQ2FyZFBpbigKICAgIGlucHV0OiB7CiAgICAgIGNhcmRJZDogIjNhMjVjZGI0LTgyZDktNDk4YS1hODA1LTRlMGU4NTQ1ZmYyYiIKICAgICAgY29uc2VudFJlZGlyZWN0VXJsOiAiaHR0cHM6Ly9kb2NzLnN3YW4uaW8vIgogICAgfQogICkgewogICAgLi4uIG9uIFZpZXdQaHlzaWNhbENhcmRQaW5TdWNjZXNzUGF5bG9hZCB7CiAgICAgIF9fdHlwZW5hbWUKICAgICAgY29uc2VudCB7CiAgICAgICAgY29uc2VudFVybAogICAgICB9CiAgICB9CiAgICAuLi4gb24gUElOTm90UmVhZHlSZWplY3Rpb24gewogICAgICBfX3R5cGVuYW1lCiAgICAgIG1lc3NhZ2UKICAgICAgcGh5c2ljYWxDYXJkSWRlbnRpZmllcgogICAgfQogIH0KfQo%3D&tab=api"},"Open the mutation in API Explorer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{4-5} showLineNumbers","{4-5}":!0,showLineNumbers:!0},'mutation viewPin {\n  viewPhysicalCardPin(\n    input: {\n      cardId: "$YOUR_CARD_ID"\n      consentRedirectUrl: "$YOUR_REDIRECT_URL"\n    }\n  ) {\n    ... on ViewPhysicalCardPinSuccessPayload {\n      __typename\n      consent {\n        consentUrl\n      }\n    }\n    ... on PINNotReadyRejection {\n      __typename\n      message\n      physicalCardIdentifier\n    }\n  }\n}\n\n')),(0,a.kt)("h3",{id:"payload"},"Payload"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"consentUrl")," returned by the mutation to provide consent, then view the PIN."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6} showLineNumbers","{6}":!0,showLineNumbers:!0},'{\n  "data": {\n    "viewPhysicalCardPin": {\n      "__typename": "ViewPhysicalCardPinSuccessPayload",\n      "consent": {\n        "consentUrl": "$CONSENT_URL"\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0},53692:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cards-view-info-ed2a01984db5049f0f2af9f10163ef71.png"}}]);