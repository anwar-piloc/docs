"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39440:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=n(67294),o=n(3905);const i={id:"merchant-payment-link-status-info",title:"MerchantPaymentLinkStatusInfo",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/interfaces/merchant-payment-link-status-info",id:"api-reference/interfaces/merchant-payment-link-status-info",title:"MerchantPaymentLinkStatusInfo",description:"No description",source:"@site/docs/api-reference/interfaces/merchant-payment-link-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/merchant-payment-link-status-info",permalink:"/api-reference/interfaces/merchant-payment-link-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/merchant-payment-link-status-info.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-link-status-info",title:"MerchantPaymentLinkStatusInfo",hide_table_of_contents:!1}},s={},m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLinkStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentLinkStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[l,s]=(0,r.useState)(c);return(0,o.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},y={Bullet:m,SpecifiedBy:p,Badge:d,toc:u,Details:f},k="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface MerchantPaymentLinkStatusInfo {\n  status: MerchantPaymentLinkStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLinkStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-link-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatus!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/merchant-payment-link"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLink")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/active-merchant-payment-link-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"ActiveMerchantPaymentLinkStatusInfo")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-link-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentLinkStatusInfo")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/completed-merchant-payment-link-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CompletedMerchantPaymentLinkStatusInfo")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/expired-merchant-payment-link-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"ExpiredMerchantPaymentLinkStatusInfo")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);