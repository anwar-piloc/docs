"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35615:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>f,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(83117),a=n(67294),i=n(3905);const o={id:"pending-review-status-info",title:"PendingReviewStatusInfo",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/objects/pending-review-status-info",id:"api-reference/objects/pending-review-status-info",title:"PendingReviewStatusInfo",description:"Pending Verification Information",source:"@site/docs/api-reference/objects/pending-review-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/pending-review-status-info",permalink:"/api-reference/objects/pending-review-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/pending-review-status-info.mdx",tags:[],version:"current",frontMatter:{id:"pending-review-status-info",title:"PendingReviewStatusInfo",hide_table_of_contents:!1}},l={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PendingReviewStatusInfo.<b>status</b></code><Bullet /><code>AccountVerificationStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-pendingreviewstatusinfobstatusbcodeaccountverificationstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountVerificationStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountverificationstatusinfo-",level:4}],f=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:f,SpecifiedBy:d,Badge:p},g="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pending Verification Information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PendingReviewStatusInfo implements AccountVerificationStatusInfo {\n  status: AccountVerificationStatus!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingreviewstatusinfobstatusbcodeaccountverificationstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingReviewStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-verification-status"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatus!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Account verification status (PendingReview)")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"accountverificationstatusinfo-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-verification-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatusInfo"))," ",(0,i.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Account Verification Status Information")))}v.isMDXComponent=!0}}]);