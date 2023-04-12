"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},f=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?i.createElement(m,r(r({ref:t},f),{},{components:n})):i.createElement(m,r({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80928:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>f});var i=n(83117),a=n(67294),o=n(3905);const r={id:"pending-verification-status-info",title:"PendingVerificationStatusInfo",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api/objects/pending-verification-status-info",id:"api/objects/pending-verification-status-info",title:"PendingVerificationStatusInfo",description:"Pending Verification Information",source:"@site/docs/api/objects/pending-verification-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/pending-verification-status-info",permalink:"/docs/api/objects/pending-verification-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/pending-verification-status-info.mdx",tags:[],version:"current",frontMatter:{id:"pending-verification-status-info",title:"PendingVerificationStatusInfo",hide_table_of_contents:!1}},l={},f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PendingVerificationStatusInfo.<b>status</b></code><Bullet /><code>AccountVerificationStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-pendingverificationstatusinfobstatusbcodeaccountverificationstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountVerificationStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountverificationstatusinfo-",level:4}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:f,Bullet:u,SpecifiedBy:d,Badge:p},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pending Verification Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PendingVerificationStatusInfo implements AccountVerificationStatusInfo {\n  status: AccountVerificationStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pendingverificationstatusinfobstatusbcodeaccountverificationstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PendingVerificationStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/account-verification-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatus!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account verification status (PendingVerification)")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"accountverificationstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/account-verification-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account Verification Status Information")))}y.isMDXComponent=!0}}]);