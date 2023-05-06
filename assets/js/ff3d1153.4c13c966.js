"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89951:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(83117),a=n(67294),s=n(3905);const i={id:"partnership-status-info",title:"PartnershipStatusInfo",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/interfaces/partnership-status-info",id:"api-reference/interfaces/partnership-status-info",title:"PartnershipStatusInfo",description:"Partnership Status information",source:"@site/docs/api-reference/interfaces/partnership-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/partnership-status-info",permalink:"/docs/api-reference/interfaces/partnership-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/partnership-status-info.mdx",tags:[],version:"current",frontMatter:{id:"partnership-status-info",title:"PartnershipStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardingStatusInfo",permalink:"/docs/api-reference/interfaces/onboarding-status-info"},next:{title:"PaymentDirectDebitMandate",permalink:"/docs/api-reference/interfaces/payment-direct-debit-mandate"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PartnershipStatusInfo.<b>status</b></code><Bullet /><code>PartnershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-partnershipstatusinfobstatusbcodepartnershipstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],f=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:f,SpecifiedBy:u,Badge:d},h="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Partnership Status information"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"interface PartnershipStatusInfo {\n  status: PartnershipStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-partnershipstatusinfobstatusbcodepartnershipstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PartnershipStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(f,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/partnership-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PartnershipStatus!"))," ",(0,s.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Status of the partnership for this account")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,s.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/partnership-accepted-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PartnershipAcceptedStatusInfo")),"  ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(f,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/partnership-canceled-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PartnershipCanceledStatusInfo")),"  ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(f,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api-reference/objects/partnership-canceling-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PartnershipCancelingStatusInfo")),"  ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);