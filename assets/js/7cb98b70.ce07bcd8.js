"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29687],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91081:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return p},SpecifiedBy:function(){return d},assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var o=n(83117),a=n(67294),r=n(3905);const i={id:"account-membership-invitation-sent-status-info",title:"AccountMembershipInvitationSentStatusInfo",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api/objects/account-membership-invitation-sent-status-info",id:"api/objects/account-membership-invitation-sent-status-info",title:"AccountMembershipInvitationSentStatusInfo",description:"when a new account membership is invited and there is no user binded yet",source:"@site/docs/api/objects/account-membership-invitation-sent-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/account-membership-invitation-sent-status-info",permalink:"/docs/api/objects/account-membership-invitation-sent-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/account-membership-invitation-sent-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-invitation-sent-status-info",title:"AccountMembershipInvitationSentStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountMembershipEnabledStatusInfo",permalink:"/docs/api/objects/account-membership-enabled-status-info"},next:{title:"AccountMembershipNotAllowedRejection",permalink:"/docs/api/objects/account-membership-not-allowed-rejection"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipInvitationSentStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipinvitationsentstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipInvitationSentStatusInfo.<b>restrictedTo</b></code><Bullet /><code>RestrictedTo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-accountmembershipinvitationsentstatusinfobrestrictedtobcoderestrictedto--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountMembershipStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountmembershipstatusinfo-",level:4}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:p,SpecifiedBy:d,Badge:m},b="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"when a new account membership is invited and there is no user binded yet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipInvitationSentStatusInfo implements AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n  restrictedTo: RestrictedTo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipinvitationsentstatusinfobstatusbcodeaccountmembershipstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipInvitationSentStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/account-membership-status"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"AccountMembership status (always InvitationSent for type AccountMembershipInvitationSentStatusInfo)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipinvitationsentstatusinfobrestrictedtobcoderestrictedto--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipInvitationSentStatusInfo.",(0,r.kt)("b",null,"restrictedTo"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/restricted-to"},(0,r.kt)("inlineCode",{parentName:"a"},"RestrictedTo!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"restricted to a user")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"accountmembershipstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/account-membership-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatusInfo"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"here are the different account membership status:")))}h.isMDXComponent=!0}}]);