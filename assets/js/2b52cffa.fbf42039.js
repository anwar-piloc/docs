"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64126:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=n(67294),o=n(3905);const i={id:"payment-method-not-compatible-rejection",title:"PaymentMethodNotCompatibleRejection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/payment-method-not-compatible-rejection",id:"api-reference/objects/payment-method-not-compatible-rejection",title:"PaymentMethodNotCompatibleRejection",description:"Rejection returned when a payment method is not compatible for the requested mutation",source:"@site/docs/api-reference/objects/payment-method-not-compatible-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/payment-method-not-compatible-rejection",permalink:"/api-reference/objects/payment-method-not-compatible-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/payment-method-not-compatible-rejection.mdx",tags:[],version:"current",frontMatter:{id:"payment-method-not-compatible-rejection",title:"PaymentMethodNotCompatibleRejection",hide_table_of_contents:!1}},d={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMethodNotCompatibleRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentmethodnotcompatiblerejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[l,d]=(0,r.useState)(c);return(0,o.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},f={Bullet:s,SpecifiedBy:p,Badge:m,toc:u,Details:y},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rejection returned when a payment method is not compatible for the requested mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentMethodNotCompatibleRejection implements Rejection {\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmethodnotcompatiblerejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMethodNotCompatibleRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-sepa-direct-debit-payment-mandate-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandatePayload")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/create-merchant-payment-link-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateMerchantPaymentLinkPayload")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);