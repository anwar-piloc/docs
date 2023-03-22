"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59974],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?s.createElement(f,a(a({ref:t},l),{},{components:n})):s.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9404:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return d},SpecifiedBy:function(){return p},assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var s=n(83117),r=n(67294),o=n(3905);const a={id:"account-membership-suspended-status-info",title:"AccountMembershipSuspendedStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/objects/account-membership-suspended-status-info",id:"api/objects/account-membership-suspended-status-info",title:"AccountMembershipSuspendedStatusInfo",description:"when the account membership is suspended",source:"@site/docs/api/objects/account-membership-suspended-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/account-membership-suspended-status-info",permalink:"/docs/api/objects/account-membership-suspended-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/account-membership-suspended-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-suspended-status-info",title:"AccountMembershipSuspendedStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountMembershipNotReadyToBeBoundRejection",permalink:"/docs/api/objects/account-membership-not-ready-to-be-bound-rejection"},next:{title:"AccountMembership",permalink:"/docs/api/objects/account-membership"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipSuspendedStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipSuspendedStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountMembershipStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountmembershipstatusinfo-",level:4}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:d,SpecifiedBy:p,Badge:m},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"when the account membership is suspended"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipSuspendedStatusInfo implements AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n  reason: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobstatusbcodeaccountmembershipstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipSuspendedStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/account-membership-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AccountMembership status (always Suspended for type AccountMembershipSuspendedStatusInfo)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipsuspendedstatusinfobreasonbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipSuspendedStatusInfo.",(0,o.kt)("b",null,"reason"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"reason why the account membership is suspended")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"accountmembershipstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/account-membership-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatusInfo"))," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"here are the different account membership status:")))}h.isMDXComponent=!0}}]);