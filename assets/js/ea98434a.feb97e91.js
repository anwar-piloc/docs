"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(f,c(c({ref:t},i),{},{components:a})):n.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},48502:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905);const c={id:"canceled-merchant-payment-method-status-info",title:"CanceledMerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/canceled-merchant-payment-method-status-info",id:"api-reference/objects/canceled-merchant-payment-method-status-info",title:"CanceledMerchantPaymentMethodStatusInfo",description:"CanceledMerchantPaymentMethodStatusInfo",source:"@site/docs/api-reference/objects/canceled-merchant-payment-method-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/canceled-merchant-payment-method-status-info",permalink:"/api-reference/objects/canceled-merchant-payment-method-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/canceled-merchant-payment-method-status-info.mdx",tags:[],version:"current",frontMatter:{id:"canceled-merchant-payment-method-status-info",title:"CanceledMerchantPaymentMethodStatusInfo",hide_table_of_contents:!1}},s={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantPaymentMethodStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentMethodStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-canceledmerchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantPaymentMethodStatusInfo.<b>canceledAt</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceledmerchantpaymentmethodstatusinfobcanceledatbcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethodStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"merchantpaymentmethodstatusinfo-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[d,s]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&c)},h={Bullet:i,SpecifiedBy:m,Badge:u,toc:p,Details:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CanceledMerchantPaymentMethodStatusInfo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CanceledMerchantPaymentMethodStatusInfo implements MerchantPaymentMethodStatusInfo {\n  status: MerchantPaymentMethodStatus!\n  canceledAt: Date!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-method-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatus!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantpaymentmethodstatusinfobcanceledatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"canceledAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Payment Method canceled date")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantpaymentmethodstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatusInfo"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The payment method status information")))}b.isMDXComponent=!0}}]);