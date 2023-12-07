"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95497:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=n(67294),r=n(3905);const o={id:"account-verification-status",title:"AccountVerificationStatus",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/enums/account-verification-status",id:"api-reference/enums/account-verification-status",title:"AccountVerificationStatus",description:"Account Verification Status",source:"@site/docs/api-reference/enums/account-verification-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/account-verification-status",permalink:"/api-reference/enums/account-verification-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/account-verification-status.mdx",tags:[],version:"current",frontMatter:{id:"account-verification-status",title:"AccountVerificationStatus",hide_table_of_contents:!1}},s={},u=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>PendingVerification</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbpendingverificationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>Verified</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbverifiedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountVerificationStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-accountverificationstatusbrejectedbcode",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[l,s]=(0,i.useState)(c);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},b={Bullet:u,SpecifiedBy:d,Badge:f,toc:p,Details:m},g="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Account Verification Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountVerificationStatus {\n  PendingVerification\n  PendingReview\n  Verified\n  Rejected\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbpendingverificationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,r.kt)("b",null,"PendingVerification")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We are waiting for the end user to send a credit transfer from his external iban to any Swan owned iban")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbpendingreviewbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,r.kt)("b",null,"PendingReview")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We could not automatically match the external iban based on last received transfer.\nManuel review process is underway")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbverifiedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,r.kt)("b",null,"Verified")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account has been verified")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountverificationstatusbrejectedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountVerificationStatus.",(0,r.kt)("b",null,"Rejected")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account verification has been rejected")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/interfaces/account-verification-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatusInfo")),"  ",(0,r.kt)(f,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-review-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PendingReviewStatusInfo")),"  ",(0,r.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-verification-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PendingVerificationStatusInfo")),"  ",(0,r.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-verification-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"RejectedVerificationStatusInfo")),"  ",(0,r.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/verified-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"VerifiedStatusInfo")),"  ",(0,r.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);