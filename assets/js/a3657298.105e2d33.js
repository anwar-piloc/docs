"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),i=d(n),f=s,m=i["".concat(u,".").concat(f)]||i[f]||p[f]||o;return n?a.createElement(m,c(c({ref:t},l),{},{components:n})):a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,c=new Array(o);c[0]=f;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[i]="string"==typeof e?e:s,c[1]=r;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53316:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>i,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var a=n(83117),s=n(67294),o=n(3905);const c={id:"account-suspended-status",title:"AccountSuspendedStatus",hide_table_of_contents:!1},r=void 0,u={unversionedId:"api-reference/objects/account-suspended-status",id:"api-reference/objects/account-suspended-status",title:"AccountSuspendedStatus",description:"Account Suspended status information",source:"@site/docs/api-reference/objects/account-suspended-status.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-suspended-status",permalink:"/api-reference/objects/account-suspended-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-suspended-status.mdx",tags:[],version:"current",frontMatter:{id:"account-suspended-status",title:"AccountSuspendedStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountOpenedStatus",permalink:"/api-reference/objects/account-opened-status"},next:{title:"AccountVerificationAlreadyRejectedRejection",permalink:"/api-reference/objects/account-verification-already-rejected-rejection"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountSuspendedStatus.<b>status</b></code><Bullet /><code>AccountStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountsuspendedstatusbstatusbcodeaccountstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountSuspendedStatus.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountsuspendedstatusbreasonbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountSuspendedStatus.<b>reasonInfo</b></code><Bullet /><code>SuspendAccountStatusReason!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-accountsuspendedstatusbreasoninfobcodesuspendaccountstatusreason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountstatusinfo-",level:4}],i=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:i,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Account Suspended status information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountSuspendedStatus implements AccountStatusInfo {\n  status: AccountStatus!\n  reason: String!\n  reasonInfo: SuspendAccountStatusReason!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountsuspendedstatusbstatusbcodeaccountstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountSuspendedStatus.",(0,o.kt)("b",null,"status"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountStatus!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account status (always Suspended for type AccountSuspendedStatus)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountsuspendedstatusbreasonbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountSuspendedStatus.",(0,o.kt)("b",null,"reason"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reason why the account is suspended\n@Deprecated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountsuspendedstatusbreasoninfobcodesuspendaccountstatusreason--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountSuspendedStatus.",(0,o.kt)("b",null,"reasonInfo"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/suspend-account-status-reason"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendAccountStatusReason!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reason why the account is currently suspend")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"accountstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountStatusInfo"))," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);