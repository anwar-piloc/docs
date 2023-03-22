"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||i;return n?o.createElement(f,u(u({ref:t},p),{},{components:n})):o.createElement(f,u({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[s]="string"==typeof e?e:r,u[1]=c;for(var l=2;l<i;l++)u[l]=n[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19480:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return d},Bullet:function(){return s},SpecifiedBy:function(){return m},assets:function(){return l},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return p}});var o=n(83117),r=n(67294),i=n(3905);const u={id:"request-supporting-document-collection-review",title:"requestSupportingDocumentCollectionReview",hide_table_of_contents:!1},c=void 0,a={unversionedId:"api/mutations/request-supporting-document-collection-review",id:"api/mutations/request-supporting-document-collection-review",title:"requestSupportingDocumentCollectionReview",description:"Ask for Swan's compliance team to review given supporting document collection.",source:"@site/docs/api/mutations/request-supporting-document-collection-review.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/request-supporting-document-collection-review",permalink:"/docs/api/mutations/request-supporting-document-collection-review",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/request-supporting-document-collection-review.mdx",tags:[],version:"current",frontMatter:{id:"request-supporting-document-collection-review",title:"requestSupportingDocumentCollectionReview",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"requestMerchantPaymentProducts",permalink:"/docs/api/mutations/request-merchant-payment-products"},next:{title:"resumeAccountMembership",permalink:"/docs/api/mutations/resume-account-membership"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>requestSupportingDocumentCollectionReview.<b>input</b></code><Bullet /><code>RequestSupportingDocumentCollectionReviewInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewbinputbcoderequestsupportingdocumentcollectionreviewinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>RequestSupportingDocumentCollectionReviewPayload</code> <Badge class="secondary" text="union"/>',id:"requestsupportingdocumentcollectionreviewpayload-",level:4}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:s,SpecifiedBy:m,Badge:d},g="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ask for Swan's compliance team to review given supporting document collection."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This mutation is restricted to a Project access token (",(0,i.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"requestSupportingDocumentCollectionReview(\n  input: RequestSupportingDocumentCollectionReviewInput\n): RequestSupportingDocumentCollectionReviewPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewbinputbcoderequestsupportingdocumentcollectionreviewinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"requestSupportingDocumentCollectionReview.",(0,i.kt)("b",null,"input"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/request-supporting-document-collection-review-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestSupportingDocumentCollectionReviewInput"))," ",(0,i.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"requestsupportingdocumentcollectionreviewpayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api/unions/request-supporting-document-collection-review-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestSupportingDocumentCollectionReviewPayload"))," ",(0,i.kt)(d,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}v.isMDXComponent=!0}}]);