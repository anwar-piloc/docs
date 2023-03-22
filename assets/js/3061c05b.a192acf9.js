"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75801],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||l[m]||c;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<c;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6349:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return u},SpecifiedBy:function(){return l},assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var a=n(83117),r=n(67294),c=n(3905);const o={id:"merchant-payment-product-status-info",title:"MerchantPaymentProductStatusInfo",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api/interfaces/merchant-payment-product-status-info",id:"api/interfaces/merchant-payment-product-status-info",title:"MerchantPaymentProductStatusInfo",description:"The payment product status information",source:"@site/docs/api/interfaces/merchant-payment-product-status-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/merchant-payment-product-status-info",permalink:"/docs/api/interfaces/merchant-payment-product-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/merchant-payment-product-status-info.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-product-status-info",title:"MerchantPaymentProductStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalDirectDebitMandate",permalink:"/docs/api/interfaces/internal-direct-debit-mandate"},next:{title:"MerchantPaymentProduct",permalink:"/docs/api/interfaces/merchant-payment-product"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProductStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentProductStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantpaymentproductstatusinfobstatusbcodemerchantpaymentproductstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:l,Badge:m},y="wrapper";function h(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The payment product status information"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"interface MerchantPaymentProductStatusInfo {\n  status: MerchantPaymentProductStatus!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusinfobstatusbcodemerchantpaymentproductstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatusInfo.",(0,c.kt)("b",null,"status"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/merchant-payment-product-status"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductStatus!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Merchant Payment Product Status")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/check-merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentProduct")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/internal-direct-debit-merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitMerchantPaymentProduct")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/interfaces/merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProduct")),"  ",(0,c.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/canceled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/disabled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/enabled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/pending-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PendingMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/rejected-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/suspended-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);