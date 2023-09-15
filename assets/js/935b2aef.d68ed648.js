"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||c;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10639:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(83117),a=n(67294),c=n(3905);const o={id:"residence-permit-document",title:"ResidencePermitDocument",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/residence-permit-document",id:"api-reference/objects/residence-permit-document",title:"ResidencePermitDocument",description:"No description",source:"@site/docs/api-reference/objects/residence-permit-document.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/residence-permit-document",permalink:"/api-reference/objects/residence-permit-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/residence-permit-document.mdx",tags:[],version:"current",frontMatter:{id:"residence-permit-document",title:"ResidencePermitDocument",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencePermitDocument.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencepermitdocumentbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencePermitDocument.<b>issueDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencepermitdocumentbissuedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencePermitDocument.<b>expiryDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencepermitdocumentbexpirydatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencePermitDocument.<b>mrz</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencepermitdocumentbmrzbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencePermitDocument.<b>number</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencepermitdocumentbnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencePermitDocument.<b>files</b></code><Bullet /><code>[ResidencePermitDocumentFile]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-residencepermitdocumentbfilesbcoderesidencepermitdocumentfile--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:m,SpecifiedBy:u,Badge:p},y="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResidencePermitDocument {\n  id: String!\n  issueDate: Date\n  expiryDate: Date\n  mrz: String\n  number: String\n  files: [ResidencePermitDocumentFile]\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-residencepermitdocumentbidbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResidencePermitDocument.",(0,c.kt)("b",null,"id"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-residencepermitdocumentbissuedatebcodedate-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResidencePermitDocument.",(0,c.kt)("b",null,"issueDate"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-residencepermitdocumentbexpirydatebcodedate-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResidencePermitDocument.",(0,c.kt)("b",null,"expiryDate"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-residencepermitdocumentbmrzbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResidencePermitDocument.",(0,c.kt)("b",null,"mrz"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-residencepermitdocumentbnumberbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResidencePermitDocument.",(0,c.kt)("b",null,"number"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-residencepermitdocumentbfilesbcoderesidencepermitdocumentfile--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResidencePermitDocument.",(0,c.kt)("b",null,"files"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/residence-permit-document-file"},(0,c.kt)("inlineCode",{parentName:"a"},"[ResidencePermitDocumentFile]"))," ",(0,c.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-document"},(0,c.kt)("inlineCode",{parentName:"a"},"IdentificationDocument")),"  ",(0,c.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);