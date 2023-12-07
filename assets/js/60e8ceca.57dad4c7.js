"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,d(d({ref:t},c),{},{components:n})):a.createElement(h,d({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Add virtual cards"},d="Add virtual cards",o={unversionedId:"topics/cards/virtual/guide-add",id:"topics/cards/virtual/guide-add",title:"Add virtual cards",description:"You can add one or multiple virtual cards, as well as single-use virtual cards.",source:"@site/docs/topics/cards/virtual/guide-add.mdx",sourceDirName:"topics/cards/virtual",slug:"/topics/cards/virtual/guide-add",permalink:"/topics/cards/virtual/guide-add",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/cards/virtual/guide-add.mdx",tags:[],version:"current",frontMatter:{title:"Add virtual cards"},sidebar:"docSidebar",previous:{title:"Virtual cards",permalink:"/topics/cards/virtual/"},next:{title:"View sensitive information",permalink:"/topics/cards/virtual/guide-view-info"}},s={},l=[{value:"Add a virtual card",id:"add-one",level:2},{value:"Mutation",id:"mutation",level:3},{value:"Payload",id:"payload",level:3},{value:"Add multiple virtual cards",id:"add-multiple",level:2},{value:"Print physical cards when adding virtual cards",id:"print-with-virtual",level:2},{value:"Add single-use virtual cards",id:"add-suv",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-virtual-cards"},"Add virtual cards"),(0,r.kt)("p",null,"You can add one or multiple virtual cards, as well as single-use virtual cards.\nAfter adding a virtual card, you can update that card, view sensitive card information, and cancel or deactivate the card."),(0,r.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You need to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/guide/give-access-to-your-account"},"add account memberships")," before creating cards.")),(0,r.kt)("h2",{id:"add-one"},"Add a virtual card"),(0,r.kt)("p",null,"Add a new card for an existing account member by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCard")," mutation.\nThis mutation can only be called on behalf of an account member with the ",(0,r.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership")," rights.\nWhen you do this, make sure you are authenticated with a user access token in the name of the account member."),(0,r.kt)("p",null,"The new card is thus created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentPending")," status.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"consentUrl")," is returned which invites the user to start Strong Customer Authentication with Swan.\nAfter the user completes the Strong Customer Authentication process, the new card changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"Activated")," status."),(0,r.kt)("p",null,"In the mutation, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cardProductId")," field (optional) to choose which card design the user will receive.\nIf don't use this field, they'll receive your default card product design."),(0,r.kt)("admonition",{title:"Users can add virtual cards",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Users with ",(0,r.kt)("inlineCode",{parentName:"p"},"CanManageCards")," permission can add their own virtual card directly from Swan's Web Banking interface, and they can use the virtual card immediately.")),(0,r.kt)("h3",{id:"mutation"},"Mutation"),(0,r.kt)("p",null,"\ud83d\udd0e ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=bXV0YXRpb24gQWRkVmlydHVhbENhcmQgewogIGFkZENhcmQoCiAgICBpbnB1dDogewogICAgICBhY2NvdW50TWVtYmVyc2hpcElkOiAiJFlPVVJfQUNDT1VOVF9NRU1CRVJTSElQX0lEIgogICAgICB3aXRoZHJhd2FsOiB0cnVlCiAgICAgIGludGVybmF0aW9uYWw6IHRydWUKICAgICAgbm9uTWFpbkN1cnJlbmN5VHJhbnNhY3Rpb25zOiB0cnVlCiAgICAgIGVDb21tZXJjZTogdHJ1ZQogICAgICBjb25zZW50UmVkaXJlY3RVcmw6ICIkWU9VUl9SRURJUkVDVF9VUkwiCiAgICAgIG5hbWU6ICJNeSBGaXJzdCBTd2FuIENhcmQiCiAgICB9CiAgKSB7CiAgICAuLi4gb24gQWRkQ2FyZFN1Y2Nlc3NQYXlsb2FkIHsKICAgICAgX190eXBlbmFtZQogICAgICBjYXJkIHsKICAgICAgICBzdGF0dXNJbmZvIHsKICAgICAgICAgIC4uLiBvbiBDYXJkQ29uc2VudFBlbmRpbmdTdGF0dXNJbmZvIHsKICAgICAgICAgICAgX190eXBlbmFtZQogICAgICAgICAgICBjb25zZW50IHsKICAgICAgICAgICAgICBjb25zZW50VXJsCiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaWQKICAgICAgfQogICAgfQogIH0KfQo%3D&tab=api"},"Open the mutation in API Explorer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{4,9} showLineNumbers","{4,9}":!0,showLineNumbers:!0},'mutation AddVirtualCard {\n  addCard(\n    input: {\n      accountMembershipId: "$YOUR_ACCOUNT_MEMBERSHIP_ID"\n      withdrawal: true\n      international: true\n      nonMainCurrencyTransactions: true\n      eCommerce: true\n      consentRedirectUrl: "$REDIRECT_URL"\n      name: "My First Swan Card"\n    }\n  ) {\n    ... on AddCardSuccessPayload {\n      __typename\n      card {\n        statusInfo {\n          ... on CardConsentPendingStatusInfo {\n            __typename\n            consent {\n              consentUrl\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{9,12} showLineNumbers","{9,12}":!0,showLineNumbers:!0},'{\n  "data": {\n    "addCard": {\n      "__typename": "AddCardSuccessPayload",\n      "card": {\n        "statusInfo": {\n          "__typename": "CardConsentPendingStatusInfo",\n          "consent": {\n            "consentUrl": "$YOUR_CONSENT_URL"\n          }\n        },\n        "id": "$YOUR_CARD_ID"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"add-multiple"},"Add multiple virtual cards"),(0,r.kt)("p",null,"Add multiple cards to different existing account members by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCards")," mutation.\nIt works nearly the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"addCard")," with two additional features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the physical card at the same time you add the virtual card by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"physicalCard")," field in the ",(0,r.kt)("inlineCode",{parentName:"li"},"addCards")," mutation, plus entering a delivery address."),(0,r.kt)("li",{parentName:"ol"},"Configure the spending limit when adding the card with the ",(0,r.kt)("inlineCode",{parentName:"li"},"spendingLimit")," field in the ",(0,r.kt)("inlineCode",{parentName:"li"},"addCards")," mutation.")),(0,r.kt)("p",null,"The new card is thus created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentPending")," status.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"consentUrl")," is returned which invites the user to start Strong Customer Authentication with Swan.\nAfter the user completes the Strong Customer Authentication process, the new card changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"Processing")," status."),(0,r.kt)("p",null,"The cards are created asynchronously and then change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled")," status."),(0,r.kt)("p",null,"Depending on how many cards you're creating, it can take up to several minutes to complete the process.\nFor performance reasons, you can create up to ",(0,r.kt)("strong",{parentName:"p"},"250 cards")," per API call."),(0,r.kt)("h2",{id:"print-with-virtual"},"Print physical cards when adding virtual cards"),(0,r.kt)("p",null,"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCards")," mutation.\nTo add the physical card at the same time you add the virtual card, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"physicalCard")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCards")," mutation and enter a delivery address."),(0,r.kt)("p",null,"You can also take advantage of ",(0,r.kt)("a",{parentName:"p",href:"/topics/cards/physical/guide-print#print-group"},"group delivery")," when adding and printing multiple cards."),(0,r.kt)("h2",{id:"add-suv"},"Add single-use virtual cards"),(0,r.kt)("p",null,"Add new single-use virtual cards to an existing account member by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"addSingleUseVirtualCard")," mutation."),(0,r.kt)("p",null,"This mutation can be called on behalf of any account member with the permission ",(0,r.kt)("inlineCode",{parentName:"p"},"canManageCards"),".\nThe permission ",(0,r.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership")," is optional.\nLearn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/concept/account-membership#adding-and-viewing-cards"},"permissions and card management"),"."),(0,r.kt)("p",null,"When you do this, make sure you are authenticated with a user access token using the name of the card's account member.\nThe new card is thus created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentPending")," status and a ",(0,r.kt)("inlineCode",{parentName:"p"},"consentUrl")," is returned which invites the user to start the Strong Customer Authentication with Swan.\nAfter the user completes the Strong Customer Authentication process, the new card changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled")," status."),(0,r.kt)("p",null,"The Single Use Virtual Card is never renewed.\nIt cannot be physically printed, and it can't be added to digital Wallets (Apple or Google)."),(0,r.kt)("admonition",{title:"Single-use virtual cards & server-to-server consent",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you wish to issue single-use virtual cards without having human interaction to consent and reveal card numbers, this is only possible for an account of which you are the holder (not available for your end customer for security and compliance reason) using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/consent/server-to-server-consent"},"server-to-server consent"),"."),(0,r.kt)("p",{parentName:"admonition"},"For both the single-use virtual card mutations (",(0,r.kt)("inlineCode",{parentName:"p"},"addSingleUseVirtualCard")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"addSingleUseVirtualCards"),"), the ",(0,r.kt)("inlineCode",{parentName:"p"},"SuccessForProjectOwnerPayload")," will return a card in ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsentPending")," status.\nThe status changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled")," after the consent is validated.\nIt's recommended to verify the card status before using it.")))}p.isMDXComponent=!0}}]);