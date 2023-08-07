"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30649:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var r=n(83117),a=n(67294),o=n(3905);const c={id:"account-holder-status-info",title:"AccountHolderStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/interfaces/account-holder-status-info",id:"api-reference/interfaces/account-holder-status-info",title:"AccountHolderStatusInfo",description:"Account Holder Status Information",source:"@site/docs/api-reference/interfaces/account-holder-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/account-holder-status-info",permalink:"/api-reference/interfaces/account-holder-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/account-holder-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-status-info",title:"AccountHolderStatusInfo",hide_table_of_contents:!1}},u={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderStatusInfo.<b>status</b></code><Bullet /><code>AccountHolderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderstatusinfobstatusbcodeaccountholderstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:d,SpecifiedBy:f,Badge:p},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Account Holder Status Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AccountHolderStatusInfo {\n  status: AccountHolderStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderstatusinfobstatusbcodeaccountholderstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolderStatus!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the account holder.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-canceled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolderCanceledStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-enabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolderEnabledStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-suspended-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolderSuspendedStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);