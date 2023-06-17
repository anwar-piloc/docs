"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,h=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return n?a.createElement(h,c(c({ref:t},i),{},{components:n})):a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[l]="string"==typeof e?e:r,c[1]=m;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51443:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var a=n(83117),r=n(67294),o=n(3905);const c={id:"merchant-payment-method-status-info",title:"MerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},m=void 0,s={unversionedId:"api-reference/interfaces/merchant-payment-method-status-info",id:"api-reference/interfaces/merchant-payment-method-status-info",title:"MerchantPaymentMethodStatusInfo",description:"The payment method status information",source:"@site/docs/api-reference/interfaces/merchant-payment-method-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/merchant-payment-method-status-info",permalink:"/api-reference/interfaces/merchant-payment-method-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/merchant-payment-method-status-info.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-method-status-info",title:"MerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalDirectDebitMandate",permalink:"/api-reference/interfaces/internal-direct-debit-mandate"},next:{title:"MerchantPaymentMethod",permalink:"/api-reference/interfaces/merchant-payment-method"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentMethodStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentMethodStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],l=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:i,Bullet:l,SpecifiedBy:p,Badge:f},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The payment method status information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface MerchantPaymentMethodStatusInfo {\n  status: MerchantPaymentMethodStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-method-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatus!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Payment Method Status")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/check-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentMethod")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitB2BMerchantPaymentMethod")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-standard-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitStandardMerchantPaymentMethod")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethod")),"  ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/disabled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);