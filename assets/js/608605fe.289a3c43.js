"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=d(r),f=n,u=s["".concat(p,".").concat(f)]||s[f]||m[f]||c;return r?a.createElement(u,i(i({ref:t},l),{},{components:r})):a.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<c;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25825:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(83117),n=r(67294),c=r(3905);const i={id:"account-number",title:"AccountNumber",hide_table_of_contents:!1},o=void 0,p={unversionedId:"api-reference/scalars/account-number",id:"api-reference/scalars/account-number",title:"AccountNumber",description:"Swan account number",source:"@site/docs/api-reference/scalars/account-number.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/account-number",permalink:"/api-reference/scalars/account-number",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/account-number.mdx",tags:[],version:"current",frontMatter:{id:"account-number",title:"AccountNumber",hide_table_of_contents:!1}},d={},l=[{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:l,Bullet:s,SpecifiedBy:m,Badge:f},k="wrapper";function y(e){let{components:t,...r}=e;return(0,c.kt)(k,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Swan account number"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar AccountNumber\n")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/fee-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/fee-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-in-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeInCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-in-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeInDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-out-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeOutCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-out-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeOutDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/initiate-credit-transfers-input"},(0,c.kt)("inlineCode",{parentName:"a"},"InitiateCreditTransfersInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/initiate-international-credit-transfer-input"},(0,c.kt)("inlineCode",{parentName:"a"},"InitiateInternationalCreditTransferInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-beneficiary"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalBeneficiary")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/internal-credit-transfer-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/internal-credit-transfer-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer-in-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferInCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer-in-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferInDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer-out-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferOutCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer-out-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferOutDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-in-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferInCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-internal-in-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferInternalInDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-internal-out-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferInternalOutCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-out-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferOutDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-in-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitInCreditor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-out-debtor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitOutDebtor")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/swan-account-beneficiary-input"},(0,c.kt)("inlineCode",{parentName:"a"},"SwanAccountBeneficiaryInput")),"  ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);