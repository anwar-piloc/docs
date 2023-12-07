"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=l(a),u=r,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||d;return a?n.createElement(f,i(i({ref:t},o),{},{components:a})):n.createElement(f,i({ref:t},o))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<d;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27426:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(67294),d=a(3905);const i={id:"cca3",title:"CCA3",hide_table_of_contents:!1},p=void 0,c={unversionedId:"api-reference/scalars/cca3",id:"api-reference/scalars/cca3",title:"CCA3",description:"Country code alpha 3 (ISO 3166)",source:"@site/docs/api-reference/scalars/cca3.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/cca3",permalink:"/api-reference/scalars/cca3",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/cca3.mdx",tags:[],version:"current",frontMatter:{id:"cca3",title:"CCA3",hide_table_of_contents:!1}},l={},o=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),u=[{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:p=!1}=e;const[c,l]=(0,r.useState)(p);return(0,d.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&i)},y={Bullet:o,SpecifiedBy:s,Badge:m,toc:u,Details:f},b="wrapper";function k(e){let{components:t,...a}=e;return(0,d.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Country code alpha 3 (ISO 3166)"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar CCA3\n")),(0,d.kt)("h3",{id:"member-of"},"Member Of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-external-account-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/address"},(0,d.kt)("inlineCode",{parentName:"a"},"Address")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/address-info"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInfo")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/address-information"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInformation")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/address-information-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInformationInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/address-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/card"},(0,d.kt)("inlineCode",{parentName:"a"},"Card")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,d.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/complete-address-input"},(0,d.kt)("inlineCode",{parentName:"a"},"CompleteAddressInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/complete-address-with-contact-input"},(0,d.kt)("inlineCode",{parentName:"a"},"CompleteAddressWithContactInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account"},(0,d.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/financial-institution"},(0,d.kt)("inlineCode",{parentName:"a"},"FinancialInstitution")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/individual-shareholder"},(0,d.kt)("inlineCode",{parentName:"a"},"IndividualShareholder")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/individual-ultimate-beneficial-owner"},(0,d.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwner")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/individual-ultimate-beneficial-owner-input"},(0,d.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-payment-mandate-debtor"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateDebtor")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-individual-shareholder-input"},(0,d.kt)("inlineCode",{parentName:"a"},"OnboardIndividualShareholderInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/interfaces/payment-mandate-debtor"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentMandateDebtor")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/residency-address-input"},(0,d.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-mandate-debtor"},(0,d.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateDebtor")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(o,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/user-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);