"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54781],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=l(a),m=r,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return a?n.createElement(f,c(c({ref:t},d),{},{components:a})):n.createElement(f,c({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78811:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=a(83117),r=a(67294),i=a(3905);const c={id:"iban",title:"IBAN",hide_table_of_contents:!1},o=void 0,p={unversionedId:"api-reference/scalars/iban",id:"api-reference/scalars/iban",title:"IBAN",description:"International Bank Account Number",source:"@site/docs/api-reference/scalars/iban.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/iban",permalink:"/api-reference/scalars/iban",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/iban.mdx",tags:[],version:"current",frontMatter:{id:"iban",title:"IBAN",hide_table_of_contents:!1}},l={},d=[{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:s,SpecifiedBy:u,Badge:m},y="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"International Bank Account Number"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar IBAN\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-direct-debit-funding-source-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AddDirectDebitFundingSourceInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-external-account-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/direct-debit-account-verification"},(0,i.kt)("inlineCode",{parentName:"a"},"DirectDebitAccountVerification")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/direct-debit-funding-source"},(0,i.kt)("inlineCode",{parentName:"a"},"DirectDebitFundingSource")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account"},(0,i.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/iban-validation-input"},(0,i.kt)("inlineCode",{parentName:"a"},"IbanValidationInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-received-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalReceivedDirectDebitMandate")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/invalid-iban"},(0,i.kt)("inlineCode",{parentName:"a"},"InvalidIban")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/sepa-beneficiary-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SepaBeneficiaryInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-mandate-debtor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateDebtor")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/separeceived-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandate")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/valid-iban"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidIban")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/virtual-ibanentry"},(0,i.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntry")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);