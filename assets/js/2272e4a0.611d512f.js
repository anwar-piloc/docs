"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},a=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},a),{},{components:n})):r.createElement(f,c({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18607:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var r=n(83117),o=n(67294),i=n(3905);const c={id:"request-supporting-document-collection-review-input",title:"RequestSupportingDocumentCollectionReviewInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api-reference/inputs/request-supporting-document-collection-review-input",id:"api-reference/inputs/request-supporting-document-collection-review-input",title:"RequestSupportingDocumentCollectionReviewInput",description:"No description",source:"@site/docs/api-reference/inputs/request-supporting-document-collection-review-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/request-supporting-document-collection-review-input",permalink:"/api-reference/inputs/request-supporting-document-collection-review-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/request-supporting-document-collection-review-input.mdx",tags:[],version:"current",frontMatter:{id:"request-supporting-document-collection-review-input",title:"RequestSupportingDocumentCollectionReviewInput",hide_table_of_contents:!1}},p={},a=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestSupportingDocumentCollectionReviewInput.<b>supportingDocumentCollectionId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewinputbsupportingdocumentcollectionidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:a,Bullet:s,SpecifiedBy:d,Badge:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input RequestSupportingDocumentCollectionReviewInput {\n  supportingDocumentCollectionId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewinputbsupportingdocumentcollectionidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RequestSupportingDocumentCollectionReviewInput.",(0,i.kt)("b",null,"supportingDocumentCollectionId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Id of the supporting document collection to review.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/request-supporting-document-collection-review"},(0,i.kt)("inlineCode",{parentName:"a"},"requestSupportingDocumentCollectionReview")),"  ",(0,i.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);