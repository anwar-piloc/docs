"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(f,c(c({ref:t},s),{},{components:n})):o.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8675:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=n(87462),a=n(67294),r=n(3905);const c={id:"face-photo-document",title:"FacePhotoDocument",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/face-photo-document",id:"api-reference/objects/face-photo-document",title:"FacePhotoDocument",description:"The document corresponding to a face photo",source:"@site/docs/api-reference/objects/face-photo-document.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/face-photo-document",permalink:"/api-reference/objects/face-photo-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/face-photo-document.mdx",tags:[],version:"current",frontMatter:{id:"face-photo-document",title:"FacePhotoDocument",hide_table_of_contents:!1}},i={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FacePhotoDocument.<b>id</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-facephotodocumentbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FacePhotoDocument.<b>type</b></code><Bullet /><code>DocumentType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-facephotodocumentbtypebcodedocumenttype--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[d,i]=(0,a.useState)(l);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&c)},y={Bullet:s,SpecifiedBy:p,Badge:u,toc:m,Details:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The document corresponding to a face photo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FacePhotoDocument {\n  id: String!\n  type: DocumentType!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-facephotodocumentbidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FacePhotoDocument.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of the face photo document. For privacy reasons, no temporary download url is exposed for this document")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-facephotodocumentbtypebcodedocumenttype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FacePhotoDocument.",(0,r.kt)("b",null,"type"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/document-type"},(0,r.kt)("inlineCode",{parentName:"a"},"DocumentType!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The type of the document")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-document"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationDocument")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);