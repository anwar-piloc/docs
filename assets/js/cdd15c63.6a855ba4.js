"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),g=l(t),f=o,b=g["".concat(i,".").concat(f)]||g[f]||p[f]||r;return t?a.createElement(b,c(c({ref:n},s),{},{components:t})):a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=f;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[g]="string"==typeof e?e:o,c[1]=d;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10167:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var a=t(87462),o=t(67294),r=t(3905);const c={id:"standing-order-connection",title:"StandingOrderConnection",hide_table_of_contents:!1},d=void 0,i={unversionedId:"api-reference/objects/standing-order-connection",id:"api-reference/objects/standing-order-connection",title:"StandingOrderConnection",description:"Please see the Connection interface",source:"@site/docs/api-reference/objects/standing-order-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/standing-order-connection",permalink:"/api-reference/objects/standing-order-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/standing-order-connection.mdx",tags:[],version:"current",frontMatter:{id:"standing-order-connection",title:"StandingOrderConnection",hide_table_of_contents:!1}},l={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrderConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrderConnection.<b>edges</b></code><Bullet /><code>[StandingOrderEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderconnectionbedgesbcodestandingorderedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrderConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderconnectionbtotalcountbcodeint--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:n,dataClose:t,children:c,startOpen:d=!1}=e;const[i,l]=(0,o.useState)(d);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?n:t),i&&c)},u={Bullet:s,SpecifiedBy:g,Badge:p,toc:f,Details:b},m="wrapper";function y(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please see the Connection interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type StandingOrderConnection implements Connection {\n  pageInfo: PageInfo!\n  edges: [StandingOrderEdge!]!\n  totalCount: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-standingorderconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-standingorderconnectionbedgesbcodestandingorderedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/standing-order-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[StandingOrderEdge!]!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-standingorderconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"connection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,r.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);