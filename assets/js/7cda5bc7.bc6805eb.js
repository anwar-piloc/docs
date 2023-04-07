"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50795],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(b,c(c({ref:t},u),{},{components:n})):o.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70800:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return p},SpecifiedBy:function(){return d},assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var o=n(83117),a=n(67294),r=n(3905);const c={id:"suspend-account-membership-payload",title:"SuspendAccountMembershipPayload",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api/unions/suspend-account-membership-payload",id:"api/unions/suspend-account-membership-payload",title:"SuspendAccountMembershipPayload",description:"No description",source:"@site/docs/api/unions/suspend-account-membership-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/suspend-account-membership-payload",permalink:"/docs/api/unions/suspend-account-membership-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/suspend-account-membership-payload.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-membership-payload",title:"SuspendAccountMembershipPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ShareholderInfo",permalink:"/docs/api/unions/shareholder-info"},next:{title:"SuspendAccountStatusReason",permalink:"/docs/api/unions/suspend-account-status-reason"}},l={},u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>SuspendAccountMembershipSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"suspendaccountmembershipsuccesspayload-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>LegalRepresentativeAccountMembershipCannotBeSuspendedRejection</code> <Badge class="secondary" text="object"/>',id:"legalrepresentativeaccountmembershipcannotbesuspendedrejection-",level:4},{value:'<code>UserNotAllowedToManageAccountMembershipRejection</code> <Badge class="secondary" text="object"/>',id:"usernotallowedtomanageaccountmembershiprejection-",level:4},{value:'<code>UserNotAllowedToSuspendItsOwnAccountMembershipRejection</code> <Badge class="secondary" text="object"/>',id:"usernotallowedtosuspenditsownaccountmembershiprejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:u,Bullet:p,SpecifiedBy:d,Badge:m},y="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union SuspendAccountMembershipPayload = SuspendAccountMembershipSuccessPayload | InternalErrorRejection | LegalRepresentativeAccountMembershipCannotBeSuspendedRejection | UserNotAllowedToManageAccountMembershipRejection | UserNotAllowedToSuspendItsOwnAccountMembershipRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"suspendaccountmembershipsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/suspend-account-membership-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"SuspendAccountMembershipSuccessPayload"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"internalerrorrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/internal-error-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,r.kt)("h4",{id:"legalrepresentativeaccountmembershipcannotbesuspendedrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/legal-representative-account-membership-cannot-be-suspended-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"LegalRepresentativeAccountMembershipCannotBeSuspendedRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"usernotallowedtomanageaccountmembershiprejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/user-not-allowed-to-manage-account-membership-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToManageAccountMembershipRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if a identity does not have enough permission to manage account membership")),(0,r.kt)("h4",{id:"usernotallowedtosuspenditsownaccountmembershiprejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/user-not-allowed-to-suspend-its-own-account-membership-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToSuspendItsOwnAccountMembershipRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/suspend-account-membership"},(0,r.kt)("inlineCode",{parentName:"a"},"suspendAccountMembership")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);