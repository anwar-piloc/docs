"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),l=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(r.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,m=f["".concat(r,".").concat(u)]||f[u]||p[u]||o;return n?i.createElement(m,c(c({ref:t},s),{},{components:n})):i.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[f]="string"==typeof e?e:a,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34176:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var i=n(83117),a=n(67294),o=n(3905);const c={id:"identification",title:"Identification",hide_table_of_contents:!1},d=void 0,r={unversionedId:"api-reference/objects/identification",id:"api-reference/objects/identification",title:"Identification",description:"The identification represents an ongoing identification process or its result",source:"@site/docs/api-reference/objects/identification.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/identification",permalink:"/api-reference/objects/identification",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/identification.mdx",tags:[],version:"current",frontMatter:{id:"identification",title:"Identification",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-identificationbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-identificationbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-identificationbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>process</b></code><Bullet /><code>IdentificationProcessInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-identificationbprocessbcodeidentificationprocessinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>levels</b></code><Bullet /><code>IdentificationLevelStatusesInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-identificationblevelsbcodeidentificationlevelstatusesinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>documents</b></code><Bullet /><code>[IdentificationDocument!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-identificationbdocumentsbcodeidentificationdocument--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Identification.<b>identityDocumentType</b></code><Bullet /><code>IdentityDocumentType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationbidentitydocumenttypebcodeidentitydocumenttype-",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:f,SpecifiedBy:p,Badge:u},y="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The identification represents an ongoing identification process or its result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Identification {\n  id: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  process: IdentificationProcessInfo!\n  levels: IdentificationLevelStatusesInfo!\n  documents: [IdentificationDocument!]\n  identityDocumentType: IdentityDocumentType\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationbidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"id"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier of the identification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creation date of the identification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Last update date of the identification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationbprocessbcodeidentificationprocessinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"process"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/identification-process-info"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationProcessInfo!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The process that was used for this identification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationblevelsbcodeidentificationlevelstatusesinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"levels"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-level-statuses-info"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationLevelStatusesInfo!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The status and results associated to the available identification processes")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationbdocumentsbcodeidentificationdocument--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"documents"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/identification-document"},(0,o.kt)("inlineCode",{parentName:"a"},"[IdentificationDocument!]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The available documents related to the identification (id doc, selfie, report...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationbidentitydocumenttypebcodeidentitydocumenttype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Identification.",(0,o.kt)("b",null,"identityDocumentType"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/identity-document-type"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentityDocumentType"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The identity document type used for the current identification (passport, id card ...)")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/identification-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationEdge")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);