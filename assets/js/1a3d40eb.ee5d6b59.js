"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=s,f=l["".concat(i,".").concat(m)]||l[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:s,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87332:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>l,assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(87462),s=n(67294),r=n(3905);const o={id:"account-membership-suspended-status-info",title:"AccountMembershipSuspendedStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/account-membership-suspended-status-info",id:"api-reference/objects/account-membership-suspended-status-info",title:"AccountMembershipSuspendedStatusInfo",description:"when the account membership is suspended",source:"@site/docs/api-reference/objects/account-membership-suspended-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-membership-suspended-status-info",permalink:"/api-reference/objects/account-membership-suspended-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-membership-suspended-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-suspended-status-info",title:"AccountMembershipSuspendedStatusInfo",hide_table_of_contents:!1}},u={},d=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipSuspendedStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipSuspendedStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountMembershipStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"accountmembershipstatusinfo-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[i,u]=(0,s.useState)(c);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},b={Bullet:d,SpecifiedBy:l,Badge:p,toc:m,Details:f},h="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"when the account membership is suspended"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipSuspendedStatusInfo implements AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n  reason: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobstatusbcodeaccountmembershipstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipSuspendedStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-membership-status"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"AccountMembership status (always Suspended for type AccountMembershipSuspendedStatusInfo)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobreasonbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipSuspendedStatusInfo.",(0,r.kt)("b",null,"reason"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"reason why the account membership is suspended")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"accountmembershipstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-membership-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatusInfo"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"here are the different account membership status:")))}g.isMDXComponent=!0}}]);