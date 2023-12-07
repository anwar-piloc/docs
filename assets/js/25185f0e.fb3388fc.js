"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74138:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(87462),l=n(67294),a=n(3905);const o={id:"legal-documents-filter-input",title:"LegalDocumentsFilterInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/inputs/legal-documents-filter-input",id:"api-reference/inputs/legal-documents-filter-input",title:"LegalDocumentsFilterInput",description:"No description",source:"@site/docs/api-reference/inputs/legal-documents-filter-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/legal-documents-filter-input",permalink:"/api-reference/inputs/legal-documents-filter-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/legal-documents-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"legal-documents-filter-input",title:"LegalDocumentsFilterInput",hide_table_of_contents:!1}},u={},s=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentsFilterInput.<b>status</b></code><Bullet /><code>LegalDocumentStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentsfilterinputbstatusbcodelegaldocumentstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentsFilterInput.<b>type</b></code><Bullet /><code>LegalDocumentType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentsfilterinputbtypebcodelegaldocumenttype-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,u]=(0,l.useState)(i);return(0,a.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},g={Bullet:s,SpecifiedBy:p,Badge:d,toc:m,Details:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input LegalDocumentsFilterInput {\n  status: LegalDocumentStatus\n  type: LegalDocumentType\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentsfilterinputbstatusbcodelegaldocumentstatus-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentsFilterInput.",(0,a.kt)("b",null,"status"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/legal-document-status"},(0,a.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatus"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentsfilterinputbtypebcodelegaldocumenttype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentsFilterInput.",(0,a.kt)("b",null,"type"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/legal-document-type"},(0,a.kt)("inlineCode",{parentName:"a"},"LegalDocumentType"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}b.isMDXComponent=!0}}]);