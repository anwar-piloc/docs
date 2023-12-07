"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},79249:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=a(87462),r=a(67294),l=a(3905);const i={id:"complete-digital-card-status-info",title:"CompleteDigitalCardStatusInfo",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/interfaces/complete-digital-card-status-info",id:"api-reference/interfaces/complete-digital-card-status-info",title:"CompleteDigitalCardStatusInfo",description:"Complete Digital Card Status Information",source:"@site/docs/api-reference/interfaces/complete-digital-card-status-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/complete-digital-card-status-info",permalink:"/api-reference/interfaces/complete-digital-card-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/complete-digital-card-status-info.mdx",tags:[],version:"current",frontMatter:{id:"complete-digital-card-status-info",title:"CompleteDigitalCardStatusInfo",hide_table_of_contents:!1}},d={},s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCardStatusInfo.<b>status</b></code><Bullet /><code>CompleteDigitalCardStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-completedigitalcardstatusinfobstatusbcodecompletedigitalcardstatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[c,d]=(0,r.useState)(o);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&i)},g={Bullet:s,SpecifiedBy:p,Badge:u,toc:f,Details:m},b="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Complete Digital Card Status Information"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"interface CompleteDigitalCardStatusInfo {\n  status: CompleteDigitalCardStatus!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusinfobstatusbcodecompletedigitalcardstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatusInfo.",(0,l.kt)("b",null,"status"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/complete-digital-card-status"},(0,l.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCardStatus!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status of the digital card.")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/complete-digital-card"},(0,l.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCard")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-canceled-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"DigitalCardCanceledStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-enabled-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"DigitalCardEnabledStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-suspended-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"DigitalCardSuspendedStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);