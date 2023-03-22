"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98317],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=l(n),f=r,m=i["".concat(u,".").concat(f)]||i[f]||p[f]||a;return n?o.createElement(m,c(c({ref:t},d),{},{components:n})):o.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[i]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11645:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return i},SpecifiedBy:function(){return p},assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var o=n(83117),r=n(67294),a=n(3905);const c={id:"account-holder-suspended-status-info",title:"AccountHolderSuspendedStatusInfo",hide_table_of_contents:!1},s=void 0,u={unversionedId:"api/objects/account-holder-suspended-status-info",id:"api/objects/account-holder-suspended-status-info",title:"AccountHolderSuspendedStatusInfo",description:"Account Holder Suspended Status Information",source:"@site/docs/api/objects/account-holder-suspended-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/account-holder-suspended-status-info",permalink:"/docs/api/objects/account-holder-suspended-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/account-holder-suspended-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-suspended-status-info",title:"AccountHolderSuspendedStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountHolderNotFoundRejection",permalink:"/docs/api/objects/account-holder-not-found-rejection"},next:{title:"AccountHolderTypeIndividualRejection",permalink:"/docs/api/objects/account-holder-type-individual-rejection"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderSuspendedStatusInfo.<b>status</b></code><Bullet /><code>AccountHolderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholdersuspendedstatusinfobstatusbcodeaccountholderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderSuspendedStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdersuspendedstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountholderstatusinfo-",level:4}],i=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:i,SpecifiedBy:p,Badge:f},y="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Account Holder Suspended Status Information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountHolderSuspendedStatusInfo implements AccountHolderStatusInfo {\n  status: AccountHolderStatus!\n  reason: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountholdersuspendedstatusinfobstatusbcodeaccountholderstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderSuspendedStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/account-holder-status"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolderStatus!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Status of the account holder.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountholdersuspendedstatusinfobreasonbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderSuspendedStatusInfo.",(0,a.kt)("b",null,"reason"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reason why the account holder is suspended.")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"accountholderstatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api/interfaces/account-holder-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolderStatusInfo"))," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Account Holder Status Information")))}h.isMDXComponent=!0}}]);