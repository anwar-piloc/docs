"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=c,m=s["".concat(i,".").concat(g)]||s[g]||u[g]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:c,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12558:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var o=n(87462),c=n(67294),a=n(3905);const r={id:"supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/supporting-document-collection-connection",id:"api-reference/objects/supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/api-reference/objects/supporting-document-collection-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-collection-connection",permalink:"/api-reference/objects/supporting-document-collection-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-collection-connection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",hide_table_of_contents:!1}},d={},p=()=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(c.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionConnection.<b>edges</b></code><Bullet /><code>[SupportingDocumentCollectionEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbedgesbcodesupportingdocumentcollectionedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[i,d]=(0,c.useState)(l);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},f={Bullet:p,SpecifiedBy:s,Badge:u,toc:g,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of element (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [SupportingDocumentCollectionEdge!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbtotalcountbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionConnection.",(0,a.kt)("b",null,"totalCount"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbpageinfobcodepageinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbedgesbcodesupportingdocumentcollectionedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[SupportingDocumentCollectionEdge!]!"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SupportingDocumentCollectionEdge list")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"connection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,a.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,a.kt)("h3",{id:"member-of"},"Member Of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);