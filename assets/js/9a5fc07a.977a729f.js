"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[23613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18024:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>l,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(83117),a=n(67294),o=n(3905);const s={id:"account-membership-status-info",title:"AccountMembershipStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/interfaces/account-membership-status-info",id:"api-reference/interfaces/account-membership-status-info",title:"AccountMembershipStatusInfo",description:"here are the different account membership status:",source:"@site/docs/api-reference/interfaces/account-membership-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/account-membership-status-info",permalink:"/api-reference/interfaces/account-membership-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/account-membership-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-status-info",title:"AccountMembershipStatusInfo",hide_table_of_contents:!1}},p={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],l=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:l,SpecifiedBy:m,Badge:d},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"here are the different account membership status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusinfobstatusbcodeaccountmembershipstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-membership-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AccountMembership status")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-binding-user-error-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipBindingUserErrorStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-consent-pending-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipConsentPendingStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-disabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipDisabledStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-enabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipEnabledStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-invitation-sent-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipInvitationSentStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-suspended-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipSuspendedStatusInfo")),"  ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);