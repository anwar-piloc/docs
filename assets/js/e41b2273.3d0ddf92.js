"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(m,c(c({ref:t},s),{},{components:n})):a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79463:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var a=n(83117),o=n(67294),r=n(3905);const c={id:"account-not-found-rejection",title:"AccountNotFoundRejection",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/objects/account-not-found-rejection",id:"api-reference/objects/account-not-found-rejection",title:"AccountNotFoundRejection",description:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists",source:"@site/docs/api-reference/objects/account-not-found-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-not-found-rejection",permalink:"/api-reference/objects/account-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-not-found-rejection",title:"AccountNotFoundRejection",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountNotFoundRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountnotfoundrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountnotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountnotfoundrejectionbidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountNotFoundRejection.",(0,r.kt)("b",null,"id"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountnotfoundrejectionbmessagebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountNotFoundRejection.",(0,r.kt)("b",null,"message"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"rejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,r.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/add-merchant-profile-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddMerchantProfilePayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/add-received-sepa-direct-debit-b2-b-mandate-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddReceivedSepaDirectDebitB2bMandatePayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/add-virtual-iban-entry-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddVirtualIbanEntryPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/allow-sdd-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AllowSddPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-virtual-iban-entry-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntryPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/close-account-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CloseAccountPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/deny-sdd-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"DenySddPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/initiate-credit-transfers-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"InitiateCreditTransfersPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/request-merchant-profile-update-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestMerchantProfileUpdatePayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/update-account-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateAccountPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/update-card-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCardPayload")),"  ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);