"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},f),{},{components:n})):a.createElement(m,o({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54036:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>f,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(67294),i=n(3905);const o={id:"account-verification-status-info",title:"AccountVerificationStatusInfo",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/interfaces/account-verification-status-info",id:"api-reference/interfaces/account-verification-status-info",title:"AccountVerificationStatusInfo",description:"Account Verification Status Information",source:"@site/docs/api-reference/interfaces/account-verification-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/account-verification-status-info",permalink:"/api-reference/interfaces/account-verification-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/account-verification-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-verification-status-info",title:"AccountVerificationStatusInfo",hide_table_of_contents:!1}},l={},f=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountVerificationStatusInfo.<b>status</b></code><Bullet /><code>AccountVerificationStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountverificationstatusinfobstatusbcodeaccountverificationstatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[s,l]=(0,r.useState)(c);return(0,i.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&o)},b={Bullet:f,SpecifiedBy:u,Badge:d,toc:p,Details:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Account Verification Status Information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AccountVerificationStatusInfo {\n  status: AccountVerificationStatus!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusinfobstatusbcodeaccountverificationstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-verification-status"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatus!"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Account verification status")),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/interfaces/account-verification"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountVerification")),"  ",(0,i.kt)(d,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/direct-debit-account-verification"},(0,i.kt)("inlineCode",{parentName:"a"},"DirectDebitAccountVerification")),"  ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-review-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingReviewStatusInfo")),"  ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-verification-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingVerificationStatusInfo")),"  ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-verification-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"RejectedVerificationStatusInfo")),"  ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/verified-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"VerifiedStatusInfo")),"  ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);