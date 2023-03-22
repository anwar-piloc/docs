"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90547],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),p=a,m=s["".concat(i,".").concat(p)]||s[p]||f[p]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var d=2;d<o;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39618:function(e,n,t){t.r(n),t.d(n,{Badge:function(){return p},Bullet:function(){return s},SpecifiedBy:function(){return f},assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=t(83117),a=t(67294),o=t(3905);const c={id:"canceled-funding-source-reason",title:"CanceledFundingSourceReason",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/enums/canceled-funding-source-reason",id:"api/enums/canceled-funding-source-reason",title:"CanceledFundingSourceReason",description:"Funding Source Canceled Reason",source:"@site/docs/api/enums/canceled-funding-source-reason.mdx",sourceDirName:"api/enums",slug:"/api/enums/canceled-funding-source-reason",permalink:"/docs/api/enums/canceled-funding-source-reason",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/canceled-funding-source-reason.mdx",tags:[],version:"current",frontMatter:{id:"canceled-funding-source-reason",title:"CanceledFundingSourceReason",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelPhysicalCardReason",permalink:"/docs/api/enums/cancel-physical-card-reason"},next:{title:"CapitalDepositCaseOrderByFieldInput",permalink:"/docs/api/enums/capital-deposit-case-order-by-field-input"}},d={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CanceledFundingSourceReason.<b>UserCanceled</b></code>",id:"code-style-fontweight-normal-canceledfundingsourcereasonbusercanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CanceledFundingSourceReason.<b>MandateExpired</b></code>",id:"code-style-fontweight-normal-canceledfundingsourcereasonbmandateexpiredbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CanceledFundingSourceReason.<b>MandateCanceled</b></code>",id:"code-style-fontweight-normal-canceledfundingsourcereasonbmandatecanceledbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:s,SpecifiedBy:f,Badge:p},g="wrapper";function b(e){let{components:n,...t}=e;return(0,o.kt)(g,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Funding Source Canceled Reason"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CanceledFundingSourceReason {\n  UserCanceled\n  MandateExpired\n  MandateCanceled\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcereasonbusercanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceReason.",(0,o.kt)("b",null,"UserCanceled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User has canceled his funding source")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcereasonbmandateexpiredbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceReason.",(0,o.kt)("b",null,"MandateExpired")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Underlying mandate has expired")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcereasonbmandatecanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceReason.",(0,o.kt)("b",null,"MandateCanceled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Underlying mandate has been canceled")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/canceled-funding-source-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledFundingSourceStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);