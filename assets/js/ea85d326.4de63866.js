"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59823],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),i=l(n),p=r,y=i["".concat(u,".").concat(p)]||i[p]||m[p]||o;return n?a.createElement(y,c(c({ref:t},s),{},{components:n})):a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[i]="string"==typeof e?e:r,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28476:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return p},Bullet:function(){return i},SpecifiedBy:function(){return m},assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var a=n(83117),r=n(67294),o=n(3905);const c={id:"merchant-payment-product-status",title:"MerchantPaymentProductStatus",hide_table_of_contents:!1},d=void 0,u={unversionedId:"api/enums/merchant-payment-product-status",id:"api/enums/merchant-payment-product-status",title:"MerchantPaymentProductStatus",description:"The different statuses a MerchantPaymentProduct can have",source:"@site/docs/api/enums/merchant-payment-product-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/merchant-payment-product-status",permalink:"/docs/api/enums/merchant-payment-product-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/merchant-payment-product-status.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-product-status",title:"MerchantPaymentProductStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantCategoryDescription",permalink:"/docs/api/enums/merchant-category-description"},next:{title:"MerchantPaymentProductType",permalink:"/docs/api/enums/merchant-payment-product-type"}},l={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Disabled</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbdisabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbsuspendedbcode",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:i,SpecifiedBy:m,Badge:p},f="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The different statuses a MerchantPaymentProduct can have"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MerchantPaymentProductStatus {\n  PendingReview\n  Enabled\n  Rejected\n  Disabled\n  Canceled\n  Suspended\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbpendingreviewbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,o.kt)("b",null,"PendingReview")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbenabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,o.kt)("b",null,"Enabled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,o.kt)("b",null,"Rejected")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbdisabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,o.kt)("b",null,"Disabled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,o.kt)("b",null,"Canceled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbsuspendedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,o.kt)("b",null,"Suspended")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/canceled-merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/disabled-merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/enabled-merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/pending-merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingMerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/rejected-merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/suspended-merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentProductStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);