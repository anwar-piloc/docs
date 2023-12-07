"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),i=u(n),f=o,b=i["".concat(l,".").concat(f)]||i[f]||p[f]||c;return n?a.createElement(b,s(s({ref:t},d),{},{components:n})):a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[i]="string"==typeof e?e:o,s[1]=r;for(var u=2;u<c;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39171:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>i,assets:()=>u,contentTitle:()=>r,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var a=n(87462),o=n(67294),c=n(3905);const s={id:"account-closed-status",title:"AccountClosedStatus",hide_table_of_contents:!1},r=void 0,l={unversionedId:"api-reference/objects/account-closed-status",id:"api-reference/objects/account-closed-status",title:"AccountClosedStatus",description:"Account Closed status information",source:"@site/docs/api-reference/objects/account-closed-status.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-closed-status",permalink:"/api-reference/objects/account-closed-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-closed-status.mdx",tags:[],version:"current",frontMatter:{id:"account-closed-status",title:"AccountClosedStatus",hide_table_of_contents:!1}},u={},d=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountClosedStatus.<b>status</b></code><Bullet /><code>AccountStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountclosedstatusbstatusbcodeaccountstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountClosedStatus.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountclosedstatusbreasonbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountClosedStatus.<b>reasonInfo</b></code><Bullet /><code>CloseAccountStatusReason!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="union"/>',id:"code-style-fontweight-normal-accountclosedstatusbreasoninfobcodecloseaccountstatusreason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"accountstatusinfo-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:r=!1}=e;const[l,u]=(0,o.useState)(r);return(0,c.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&s)},g={Bullet:d,SpecifiedBy:i,Badge:p,toc:f,Details:b},m="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Account Closed status information"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountClosedStatus implements AccountStatusInfo {\n  status: AccountStatus!\n  reason: String!\n  reasonInfo: CloseAccountStatusReason!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountclosedstatusbstatusbcodeaccountstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountClosedStatus.",(0,c.kt)("b",null,"status"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountStatus!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Account status (always Closed for type AccountClosedStatus)")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountclosedstatusbreasonbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountClosedStatus.",(0,c.kt)("b",null,"reason"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Reason why the account is suspended\n@Deprecated")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountclosedstatusbreasoninfobcodecloseaccountstatusreason--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountClosedStatus.",(0,c.kt)("b",null,"reasonInfo"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/unions/close-account-status-reason"},(0,c.kt)("inlineCode",{parentName:"a"},"CloseAccountStatusReason!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Reason why the account is currently closed")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"accountstatusinfo-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountStatusInfo"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}y.isMDXComponent=!0}}]);