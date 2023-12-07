"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,b=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(b,c(c({ref:t},p),{},{components:n})):a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44139:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(87462),r=n(67294),o=n(3905);const c={id:"payment-product",title:"PaymentProduct",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/enums/payment-product",id:"api-reference/enums/payment-product",title:"PaymentProduct",description:"Payment product",source:"@site/docs/api-reference/enums/payment-product.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/payment-product",permalink:"/api-reference/enums/payment-product",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/payment-product.mdx",tags:[],version:"current",frontMatter:{id:"payment-product",title:"PaymentProduct",hide_table_of_contents:!1}},d={},p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>InternalCreditTransfer</b></code>",id:"code-style-fontweight-normal-paymentproductbinternalcredittransferbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>SEPACreditTransfer</b></code>",id:"code-style-fontweight-normal-paymentproductbsepacredittransferbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>SEPADirectDebit</b></code>",id:"code-style-fontweight-normal-paymentproductbsepadirectdebitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>Card</b></code>",id:"code-style-fontweight-normal-paymentproductbcardbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>Fees</b></code>",id:"code-style-fontweight-normal-paymentproductbfeesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>InternalDirectDebit</b></code>",id:"code-style-fontweight-normal-paymentproductbinternaldirectdebitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>Check</b></code>",id:"code-style-fontweight-normal-paymentproductbcheckbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentProduct.<b>InternationalCreditTransfer</b></code>",id:"code-style-fontweight-normal-paymentproductbinternationalcredittransferbcode",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,d]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},f={Bullet:p,SpecifiedBy:s,Badge:m,toc:u,Details:b},y="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payment product"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentProduct {\n  InternalCreditTransfer\n  SEPACreditTransfer\n  SEPADirectDebit\n  Card\n  Fees\n  InternalDirectDebit\n  Check\n  InternationalCreditTransfer\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbinternalcredittransferbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"InternalCreditTransfer")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is an Internal Credit Transfer operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbsepacredittransferbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"SEPACreditTransfer")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is a Sepa Credit Transfer operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbsepadirectdebitbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"SEPADirectDebit")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is a Sepa Direct Debit operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbcardbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"Card")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is a Card operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbfeesbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"Fees")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is a Fees operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbinternaldirectdebitbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"InternalDirectDebit")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is an Internal Direct Debit operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbcheckbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"Check")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is a Check operation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentproductbinternationalcredittransferbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentProduct.",(0,o.kt)("b",null,"InternationalCreditTransfer")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the payment is an International Credit Transfer operation")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/check-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"FeeTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/international-credit-transfer-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/transactions-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);