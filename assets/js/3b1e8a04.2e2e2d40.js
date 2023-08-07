"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[26],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=u(n),g=l,p=i["".concat(d,".").concat(g)]||i[g]||m[g]||o;return n?a.createElement(p,r(r({ref:t},s),{},{components:n})):a.createElement(p,r({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=g;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[i]="string"==typeof e?e:l,r[1]=c;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64229:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>i,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(83117),l=n(67294),o=n(3905);const r={id:"legal-document",title:"LegalDocument",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api-reference/objects/legal-document",id:"api-reference/objects/legal-document",title:"LegalDocument",description:"No description",source:"@site/docs/api-reference/objects/legal-document.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/legal-document",permalink:"/api-reference/objects/legal-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/legal-document.mdx",tags:[],version:"current",frontMatter:{id:"legal-document",title:"LegalDocument",hide_table_of_contents:!1}},u={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>type</b></code><Bullet /><code>LegalDocumentType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentbtypebcodelegaldocumenttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>statusInfo</b></code><Bullet /><code>LegalDocumentStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-legaldocumentbstatusinfobcodelegaldocumentstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>language</b></code><Bullet /><code>AccountLanguage!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentblanguagebcodeaccountlanguage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>url</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentburlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:i,SpecifiedBy:m,Badge:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegalDocument {\n  id: ID!\n  type: LegalDocumentType!\n  statusInfo: LegalDocumentStatusInfo!\n  language: AccountLanguage!\n  url: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the legal document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentbtypebcodelegaldocumenttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"type"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/legal-document-type"},(0,o.kt)("inlineCode",{parentName:"a"},"LegalDocumentType!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of the legal document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentbstatusinfobcodelegaldocumentstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/legal-document-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatusInfo!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the Legal Document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentblanguagebcodeaccountlanguage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"language"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-language"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountLanguage!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Language of the Legal Document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentburlbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"url"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Url to download the Document")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/legal-document-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"LegalDocumentEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);