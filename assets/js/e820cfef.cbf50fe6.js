"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,g=u["".concat(i,".").concat(f)]||u[f]||m[f]||l;return a?n.createElement(g,c(c({ref:t},d),{},{components:a})):n.createElement(g,c({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,c=new Array(l);c[0]=f;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[u]="string"==typeof e?e:o,c[1]=r;for(var s=2;s<l;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93677:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var n=a(87462),o=a(67294),l=a(3905);const c={id:"legal-document-inactive-status-info",title:"LegalDocumentInactiveStatusInfo",hide_table_of_contents:!1},r=void 0,i={unversionedId:"api-reference/objects/legal-document-inactive-status-info",id:"api-reference/objects/legal-document-inactive-status-info",title:"LegalDocumentInactiveStatusInfo",description:"No description",source:"@site/docs/api-reference/objects/legal-document-inactive-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/legal-document-inactive-status-info",permalink:"/api-reference/objects/legal-document-inactive-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/legal-document-inactive-status-info.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-inactive-status-info",title:"LegalDocumentInactiveStatusInfo",hide_table_of_contents:!1}},s={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentInactiveStatusInfo.<b>status</b></code><Bullet /><code>LegalDocumentStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobstatusbcodelegaldocumentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentInactiveStatusInfo.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentInactiveStatusInfo.<b>activatedAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobactivatedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentInactiveStatusInfo.<b>deactivatedAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobdeactivatedatbcodedatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>LegalDocumentStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"legaldocumentstatusinfo-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:r=!1}=e;const[i,s]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&c)},p={Bullet:d,SpecifiedBy:u,Badge:m,toc:f,Details:g},b="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegalDocumentInactiveStatusInfo implements LegalDocumentStatusInfo {\n  status: LegalDocumentStatus!\n  createdAt: DateTime!\n  activatedAt: DateTime\n  deactivatedAt: DateTime\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobstatusbcodelegaldocumentstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentInactiveStatusInfo.",(0,l.kt)("b",null,"status"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/legal-document-status"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatus!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"LegalDocument status (always Inactive for type LegalDocumentInactiveStatusInfo)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentInactiveStatusInfo.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Creation date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobactivatedatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentInactiveStatusInfo.",(0,l.kt)("b",null,"activatedAt"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Activation date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentinactivestatusinfobdeactivatedatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentInactiveStatusInfo.",(0,l.kt)("b",null,"deactivatedAt"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Deactivation date")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"legaldocumentstatusinfo-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/legal-document-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatusInfo"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}y.isMDXComponent=!0}}]);