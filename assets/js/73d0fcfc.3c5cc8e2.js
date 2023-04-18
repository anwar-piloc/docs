"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[78800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,y=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(y,l(l({ref:t},i),{},{components:n})):a.createElement(y,l({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40890:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=n(83117),r=n(67294),o=n(3905);const l={id:"payment-mandate-canceled-reason",title:"PaymentMandateCanceledReason",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/enums/payment-mandate-canceled-reason",id:"api/enums/payment-mandate-canceled-reason",title:"PaymentMandateCanceledReason",description:"No description",source:"@site/docs/api/enums/payment-mandate-canceled-reason.mdx",sourceDirName:"api/enums",slug:"/api/enums/payment-mandate-canceled-reason",permalink:"/docs/api/enums/payment-mandate-canceled-reason",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/payment-mandate-canceled-reason.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-canceled-reason",title:"PaymentMandateCanceledReason",hide_table_of_contents:!1}},s={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateCanceledReason.<b>RequestedByUser</b></code>",id:"code-style-fontweight-normal-paymentmandatecanceledreasonbrequestedbyuserbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateCanceledReason.<b>MandateExpired</b></code>",id:"code-style-fontweight-normal-paymentmandatecanceledreasonbmandateexpiredbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:m,SpecifiedBy:p,Badge:u},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentMandateCanceledReason {\n  RequestedByUser\n  MandateExpired\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatecanceledreasonbrequestedbyuserbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateCanceledReason.",(0,o.kt)("b",null,"RequestedByUser")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user requested to cancel the Payment Mandate")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatecanceledreasonbmandateexpiredbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateCanceledReason.",(0,o.kt)("b",null,"MandateExpired")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the Payment Mandate is expired")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-mandate-canceled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateCanceledStatusInfo")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);