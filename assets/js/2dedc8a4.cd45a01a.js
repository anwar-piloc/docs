"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[48541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31090:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(83117),a=n(67294),o=n(3905);const c={id:"account-membership-cannot-be-updated-rejection",title:"AccountMembershipCannotBeUpdatedRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/account-membership-cannot-be-updated-rejection",id:"api-reference/objects/account-membership-cannot-be-updated-rejection",title:"AccountMembershipCannotBeUpdatedRejection",description:"No description",source:"@site/docs/api-reference/objects/account-membership-cannot-be-updated-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-membership-cannot-be-updated-rejection",permalink:"/api-reference/objects/account-membership-cannot-be-updated-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-membership-cannot-be-updated-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-cannot-be-updated-rejection",title:"AccountMembershipCannotBeUpdatedRejection",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipCannotBeUpdatedRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipcannotbeupdatedrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipCannotBeUpdatedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipcannotbeupdatedrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipCannotBeUpdatedRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipcannotbeupdatedrejectionbidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipCannotBeUpdatedRejection.",(0,o.kt)("b",null,"id"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipcannotbeupdatedrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipCannotBeUpdatedRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/update-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountMembershipPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);