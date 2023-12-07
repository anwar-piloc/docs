"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(a),f=r,y=u["".concat(o,".").concat(f)]||u[f]||p[f]||c;return a?n.createElement(y,s(s({ref:t},i),{},{components:a})):n.createElement(y,s({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<c;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},13503:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var n=a(87462),r=a(67294),c=a(3905);const s={id:"physical-card-canceled-status-info",title:"PhysicalCardCanceledStatusInfo",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/objects/physical-card-canceled-status-info",id:"api-reference/objects/physical-card-canceled-status-info",title:"PhysicalCardCanceledStatusInfo",description:"Physical Card Canceled Status Information",source:"@site/docs/api-reference/objects/physical-card-canceled-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/physical-card-canceled-status-info",permalink:"/api-reference/objects/physical-card-canceled-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/physical-card-canceled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-canceled-status-info",title:"PhysicalCardCanceledStatusInfo",hide_table_of_contents:!1}},d={},i=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardCanceledStatusInfo.<b>status</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardcanceledstatusinfobstatusbcodephysicalcardstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardCanceledStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardcanceledstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PhysicalCardStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"physicalcardstatusinfo-",level:4}],y=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:l=!1}=e;const[o,d]=(0,r.useState)(l);return(0,c.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&s)},m={Bullet:i,SpecifiedBy:u,Badge:p,toc:f,Details:y},h="wrapper";function b(e){let{components:t,...a}=e;return(0,c.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Physical Card Canceled Status Information"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PhysicalCardCanceledStatusInfo implements PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n  reason: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardcanceledstatusinfobstatusbcodephysicalcardstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardCanceledStatusInfo.",(0,c.kt)("b",null,"status"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/physical-card-status"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Physical Card status (always Canceled for type PhysicalCardCanceledStatusInfo).")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardcanceledstatusinfobreasonbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardCanceledStatusInfo.",(0,c.kt)("b",null,"reason"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Reason why the card is canceled.")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"physicalcardstatusinfo-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/physical-card-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatusInfo"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Physical Card Status Information")))}b.isMDXComponent=!0}}]);