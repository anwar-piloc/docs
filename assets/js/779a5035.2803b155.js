"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return n?a.createElement(m,c(c({ref:t},d),{},{components:n})):a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3203:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>f});var a=n(87462),o=n(67294),r=n(3905);const c={id:"close-account-reason",title:"CloseAccountReason",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/close-account-reason",id:"api-reference/objects/close-account-reason",title:"CloseAccountReason",description:"Define a reason with a message and a specific type for closing account action",source:"@site/docs/api-reference/objects/close-account-reason.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/close-account-reason",permalink:"/api-reference/objects/close-account-reason",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/close-account-reason.mdx",tags:[],version:"current",frontMatter:{id:"close-account-reason",title:"CloseAccountReason",hide_table_of_contents:!1}},i={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CloseAccountReason.<b>type</b></code><Bullet /><code>CloseAccountReasonType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-closeaccountreasonbtypebcodecloseaccountreasontype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CloseAccountReason.<b>message</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-closeaccountreasonbmessagebcodestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Reason</code> <Badge class="badge badge--secondary" text="interface"/>',id:"reason-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:s=!1}=e;const[l,i]=(0,o.useState)(s);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},y={Bullet:d,SpecifiedBy:u,Badge:p,toc:f,Details:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Define a reason with a message and a specific type for closing account action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CloseAccountReason implements Reason {\n  type: CloseAccountReasonType!\n  message: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-closeaccountreasonbtypebcodecloseaccountreasontype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CloseAccountReason.",(0,r.kt)("b",null,"type"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/close-account-reason-type"},(0,r.kt)("inlineCode",{parentName:"a"},"CloseAccountReasonType!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-closeaccountreasonbmessagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CloseAccountReason.",(0,r.kt)("b",null,"message"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"reason-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/reason"},(0,r.kt)("inlineCode",{parentName:"a"},"Reason"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Define a reason with a message")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/close-account-status-reason"},(0,r.kt)("inlineCode",{parentName:"a"},"CloseAccountStatusReason")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);