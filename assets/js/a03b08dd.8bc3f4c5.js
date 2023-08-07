"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=c,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:c,l[1]=a;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12558:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(83117),c=n(67294),r=n(3905);const l={id:"supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",hide_table_of_contents:!1},a=void 0,i={unversionedId:"api-reference/objects/supporting-document-collection-connection",id:"api-reference/objects/supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/api-reference/objects/supporting-document-collection-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-collection-connection",permalink:"/api-reference/objects/supporting-document-collection-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-collection-connection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",hide_table_of_contents:!1}},p={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionConnection.<b>edges</b></code><Bullet /><code>[SupportingDocumentCollectionEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbedgesbcodesupportingdocumentcollectionedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(c.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:d,SpecifiedBy:u,Badge:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [SupportingDocumentCollectionEdge!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionconnectionbedgesbcodesupportingdocumentcollectionedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[SupportingDocumentCollectionEdge!]!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SupportingDocumentCollectionEdge list")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"connection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,r.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);