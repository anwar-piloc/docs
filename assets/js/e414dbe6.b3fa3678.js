"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,f=p["".concat(d,".").concat(h)]||p[h]||l[h]||o;return a?n.createElement(f,c(c({ref:t},i),{},{components:a})):n.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=h;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[p]="string"==typeof e?e:r,c[1]=m;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51443:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>l,assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var n=a(83117),r=a(67294),o=a(3905);const c={id:"merchant-payment-method-status-info",title:"MerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},m=void 0,d={unversionedId:"api-reference/interfaces/merchant-payment-method-status-info",id:"api-reference/interfaces/merchant-payment-method-status-info",title:"MerchantPaymentMethodStatusInfo",description:"The payment method status information",source:"@site/docs/api-reference/interfaces/merchant-payment-method-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/merchant-payment-method-status-info",permalink:"/api-reference/interfaces/merchant-payment-method-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/merchant-payment-method-status-info.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-method-status-info",title:"MerchantPaymentMethodStatusInfo",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentMethodStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentMethodStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:p,SpecifiedBy:l,Badge:h},y="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The payment method status information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface MerchantPaymentMethodStatusInfo {\n  status: MerchantPaymentMethodStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-method-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatus!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Payment Method Status")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/check-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentMethod")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitB2BMerchantPaymentMethod")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-standard-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitStandardMerchantPaymentMethod")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethod")),"  ",(0,o.kt)(h,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepa-direct-debit-b2-bmerchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"SepaDirectDebitB2BMerchantPaymentMethod")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepa-direct-debit-core-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"SepaDirectDebitCoreMerchantPaymentMethod")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/disabled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);