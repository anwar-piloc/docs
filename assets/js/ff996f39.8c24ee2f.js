"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93755],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,a=new Array(c);a[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:l,a[1]=r;for(var s=2;s<c;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41640:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return d},SpecifiedBy:function(){return p},assets:function(){return s},contentTitle:function(){return r},default:function(){return y},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var o=n(83117),l=n(67294),c=n(3905);const a={id:"supporting-document-collection-status-not-allowed-rejection",title:"SupportingDocumentCollectionStatusNotAllowedRejection",hide_table_of_contents:!1},r=void 0,i={unversionedId:"api/objects/supporting-document-collection-status-not-allowed-rejection",id:"api/objects/supporting-document-collection-status-not-allowed-rejection",title:"SupportingDocumentCollectionStatusNotAllowedRejection",description:"Rejection returned if the status transition is not allowed",source:"@site/docs/api/objects/supporting-document-collection-status-not-allowed-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/supporting-document-collection-status-not-allowed-rejection",permalink:"/docs/api/objects/supporting-document-collection-status-not-allowed-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/supporting-document-collection-status-not-allowed-rejection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-status-not-allowed-rejection",title:"SupportingDocumentCollectionStatusNotAllowedRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection",permalink:"/docs/api/objects/supporting-document-collection-status-does-not-allow-update-rejection"},next:{title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",permalink:"/docs/api/objects/supporting-document-collection-waiting-for-document-status-info"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusNotAllowedRejection.<b>oldStatus</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusnotallowedrejectionboldstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusNotAllowedRejection.<b>newStatus</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusnotallowedrejectionbnewstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusNotAllowedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusnotallowedrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,c.kt)(l.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(l.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(l.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:u,Bullet:d,SpecifiedBy:p,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Rejection returned if the status transition is not allowed"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionStatusNotAllowedRejection implements Rejection {\n  oldStatus: SupportingDocumentCollectionStatus!\n  newStatus: SupportingDocumentCollectionStatus!\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusnotallowedrejectionboldstatusbcodesupportingdocumentcollectionstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusNotAllowedRejection.",(0,c.kt)("b",null,"oldStatus"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/supporting-document-collection-status"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusnotallowedrejectionbnewstatusbcodesupportingdocumentcollectionstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusNotAllowedRejection.",(0,c.kt)("b",null,"newStatus"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/supporting-document-collection-status"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusnotallowedrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusNotAllowedRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/unions/request-supporting-document-collection-review-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"RequestSupportingDocumentCollectionReviewPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);