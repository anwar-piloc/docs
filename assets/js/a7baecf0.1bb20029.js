"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58712],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91537:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return d},Bullet:function(){return u},SpecifiedBy:function(){return m},assets:function(){return l},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(67294),o=n(3905);const i={id:"payment-status-info",title:"PaymentStatusInfo",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api/interfaces/payment-status-info",id:"api/interfaces/payment-status-info",title:"PaymentStatusInfo",description:"Payment Status Information",source:"@site/docs/api/interfaces/payment-status-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/payment-status-info",permalink:"/docs/api/interfaces/payment-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/payment-status-info.mdx",tags:[],version:"current",frontMatter:{id:"payment-status-info",title:"PaymentStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandate",permalink:"/docs/api/interfaces/payment-mandate"},next:{title:"PendingDigitalCardStatusInfo",permalink:"/docs/api/interfaces/pending-digital-card-status-info"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentStatusInfo.<b>status</b></code><Bullet /><code>PaymentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentstatusinfobstatusbcodepaymentstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:m,Badge:d},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payment Status Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface PaymentStatusInfo {\n  status: PaymentStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentstatusinfobstatusbcodepaymentstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/payment-status"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentStatus!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status of the payment")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"Payment")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-consent-pending"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentConsentPending")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-initiated"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentInitiated")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-rejected"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentRejected")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);