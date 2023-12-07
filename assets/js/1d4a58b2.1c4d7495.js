"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(r),u=a,f=b["".concat(l,".").concat(u)]||b[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54880:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(67294),o=r(3905);const i={id:"internal-direct-debit-debtor",title:"InternalDirectDebitDebtor",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/internal-direct-debit-debtor",id:"api-reference/objects/internal-direct-debit-debtor",title:"InternalDirectDebitDebtor",description:"Internal Direct Debit Debtor",source:"@site/docs/api-reference/objects/internal-direct-debit-debtor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-direct-debit-debtor",permalink:"/api-reference/objects/internal-direct-debit-debtor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-direct-debit-debtor.mdx",tags:[],version:"current",frontMatter:{id:"internal-direct-debit-debtor",title:"InternalDirectDebitDebtor",hide_table_of_contents:!1}},d={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitDebtor.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitdebtorbaccountidbcodeid--",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:c=!1}=e;const[l,d]=(0,a.useState)(c);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&i)},m={Bullet:s,SpecifiedBy:b,Badge:p,toc:u,Details:f},y="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Internal Direct Debit Debtor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalDirectDebitDebtor {\n  accountId: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitdebtorbaccountidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitDebtor.",(0,o.kt)("b",null,"accountId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"unique identifier of the debtor account")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);