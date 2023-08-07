"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||i[m]||a;return n?o.createElement(g,c(c({ref:t},s),{},{components:n})):o.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:r,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33550:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>i,assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var o=n(83117),r=n(67294),a=n(3905);const c={id:"supporting-document",title:"SupportingDocument",hide_table_of_contents:!1},p=void 0,u={unversionedId:"api-reference/objects/supporting-document",id:"api-reference/objects/supporting-document",title:"SupportingDocument",description:"Supporting document used for compliance",source:"@site/docs/api-reference/objects/supporting-document.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document",permalink:"/api-reference/objects/supporting-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document",title:"SupportingDocument",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocument.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocument.<b>statusInfo</b></code><Bullet /><code>SupportingDocumentStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-supportingdocumentbstatusinfobcodesupportingdocumentstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocument.<b>supportingDocumentType</b></code><Bullet /><code>SupportingDocumentType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentbsupportingdocumenttypebcodesupportingdocumenttype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocument.<b>supportingDocumentPurpose</b></code><Bullet /><code>SupportingDocumentPurposeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentbsupportingdocumentpurposebcodesupportingdocumentpurposeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocument.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocument.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentbupdatedatbcodedatetime--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:d,SpecifiedBy:i,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supporting document used for compliance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocument {\n  id: String!\n  statusInfo: SupportingDocumentStatusInfo!\n  supportingDocumentType: SupportingDocumentType\n  supportingDocumentPurpose: SupportingDocumentPurposeEnum!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentbidbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocument.",(0,a.kt)("b",null,"id"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unique identifier of the document")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentbstatusinfobcodesupportingdocumentstatusinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocument.",(0,a.kt)("b",null,"statusInfo"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/supporting-document-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Supporting document status information")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentbsupportingdocumenttypebcodesupportingdocumenttype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocument.",(0,a.kt)("b",null,"supportingDocumentType"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-type"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentType"))," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Type of supporting Document")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentbsupportingdocumentpurposebcodesupportingdocumentpurposeenum--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocument.",(0,a.kt)("b",null,"supportingDocumentPurpose"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-purpose-enum"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentPurposeEnum!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Purpose of supporting document")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentbcreatedatbcodedatetime--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocument.",(0,a.kt)("b",null,"createdAt"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Created date")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentbupdatedatbcodedatetime--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocument.",(0,a.kt)("b",null,"updatedAt"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Updated date")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-status-does-not-allow-deletion-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowDeletionRejection")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-status-does-not-allow-update-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowUpdateRejection")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/update-supporting-document-success-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentSuccessPayload")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);