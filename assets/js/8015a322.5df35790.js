"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=s(n),k=r,y=l["".concat(p,".").concat(k)]||l[k]||m[k]||c;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13932:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>l,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(83117),r=n(67294),c=n(3905);const o={id:"int",title:"Int",hide_table_of_contents:!1},i=void 0,p={unversionedId:"api-reference/scalars/int",id:"api-reference/scalars/int",title:"Int",description:"The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",source:"@site/docs/api-reference/scalars/int.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/int",permalink:"/docs/api-reference/scalars/int",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/int.mdx",tags:[],version:"current",frontMatter:{id:"int",title:"Int",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ID",permalink:"/docs/api-reference/scalars/id"},next:{title:"PhoneNumber",permalink:"/docs/api-reference/scalars/phone-number"}},s={},d=[{value:"Member of",id:"member-of",level:3}],l=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:l,SpecifiedBy:m,Badge:k},u="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(u,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Int\n")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolderConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/account-holders"},(0,c.kt)("inlineCode",{parentName:"a"},"accountHolders")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/account-memberships"},(0,c.kt)("inlineCode",{parentName:"a"},"accountMemberships")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/accounts"},(0,c.kt)("inlineCode",{parentName:"a"},"accounts")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/capital-deposit-cases"},(0,c.kt)("inlineCode",{parentName:"a"},"capitalDepositCases")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/card-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/card-product-design"},(0,c.kt)("inlineCode",{parentName:"a"},"CardProductDesign")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/cards"},(0,c.kt)("inlineCode",{parentName:"a"},"cards")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/card-settings"},(0,c.kt)("inlineCode",{parentName:"a"},"CardSettings")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/check-merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentProduct")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/connection"},(0,c.kt)("inlineCode",{parentName:"a"},"Connection")),"  ",(0,c.kt)(k,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/consent-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/consent-id-with-order"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentIdWithOrder")),"  ",(0,c.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/consents"},(0,c.kt)("inlineCode",{parentName:"a"},"consents")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"DigitalCardConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-balance-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalBalanceConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimit")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-source-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingSourceConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitMerchantPaymentProduct")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/invoice-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"InvoiceConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProduct")),"  ",(0,c.kt)(k,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/merchant-profile-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantProfileConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"OnboardingConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/onboardings"},(0,c.kt)("inlineCode",{parentName:"a"},"onboardings")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-mandate-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentMandateConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/payments"},(0,c.kt)("inlineCode",{parentName:"a"},"payments")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/pre-provisioning-suvcard-settings"},(0,c.kt)("inlineCode",{parentName:"a"},"PreProvisioningSUVCardSettings")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/received-direct-debit-mandate-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/rolling-reserve"},(0,c.kt)("inlineCode",{parentName:"a"},"RollingReserve")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrderConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/statement-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"StatementConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/transaction-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/user-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"UserConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/users"},(0,c.kt)("inlineCode",{parentName:"a"},"users")),"  ",(0,c.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/virtual-ibanentry-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntryConnection")),"  ",(0,c.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);