"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2423],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=i(n),f=r,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11602:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return l},SpecifiedBy:function(){return d},assets:function(){return i},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(67294),o=n(3905);const s={id:"suspend-account-status-reason",title:"SuspendAccountStatusReason",hide_table_of_contents:!1},c=void 0,u={unversionedId:"api/unions/suspend-account-status-reason",id:"api/unions/suspend-account-status-reason",title:"SuspendAccountStatusReason",description:"SuspendAccountStatusReason",source:"@site/docs/api/unions/suspend-account-status-reason.mdx",sourceDirName:"api/unions",slug:"/api/unions/suspend-account-status-reason",permalink:"/docs/api/unions/suspend-account-status-reason",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/suspend-account-status-reason.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-status-reason",title:"SuspendAccountStatusReason",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SuspendAccountMembershipPayload",permalink:"/docs/api/unions/suspend-account-membership-payload"},next:{title:"SuspendPhysicalCardPayload",permalink:"/docs/api/unions/suspend-physical-card-payload"}},i={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>SuspendAccountReason</code> <Badge class="secondary" text="object"/>',id:"suspendaccountreason-",level:4},{value:"Member of",id:"member-of",level:3}],l=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:l,SpecifiedBy:d,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SuspendAccountStatusReason"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union SuspendAccountStatusReason = SuspendAccountReason\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"suspendaccountreason-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/suspend-account-reason"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendAccountReason"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Define a reason with a message and a specific type for suspend account action")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/account-suspended-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountSuspendedStatus")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);