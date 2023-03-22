"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38996],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(n),y=r,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||c;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},10741:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return i},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(83117),r=n(67294),c=n(3905);const o={id:"cancel-transaction-success-payload",title:"CancelTransactionSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api/objects/cancel-transaction-success-payload",id:"api/objects/cancel-transaction-success-payload",title:"CancelTransactionSuccessPayload",description:"No description",source:"@site/docs/api/objects/cancel-transaction-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/cancel-transaction-success-payload",permalink:"/docs/api/objects/cancel-transaction-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/cancel-transaction-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-transaction-success-payload",title:"CancelTransactionSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelStandingOrderSuccessPayload",permalink:"/docs/api/objects/cancel-standing-order-success-payload"},next:{title:"CancelVirtualIbanEntrySuccessPayload",permalink:"/docs/api/objects/cancel-virtual-iban-entry-success-payload"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelTransactionSuccessPayload.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceltransactionsuccesspayloadbmessagebcodestring--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelTransactionSuccessPayload {\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceltransactionsuccesspayloadbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CancelTransactionSuccessPayload.",(0,c.kt)("b",null,"message"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/unions/cancel-transaction-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelTransactionPayload")),"  ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);