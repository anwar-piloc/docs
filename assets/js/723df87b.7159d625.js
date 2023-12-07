"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66286:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const l={id:"generate-capital-deposit-document-upload-url",title:"generateCapitalDepositDocumentUploadUrl",hide_table_of_contents:!1},i=void 0,p={unversionedId:"api-reference/mutations/generate-capital-deposit-document-upload-url",id:"api-reference/mutations/generate-capital-deposit-document-upload-url",title:"generateCapitalDepositDocumentUploadUrl",description:"Generate an url allowing the upload of a document which unique identifier is specified in parameters.",source:"@site/docs/api-reference/mutations/generate-capital-deposit-document-upload-url.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/generate-capital-deposit-document-upload-url",permalink:"/api-reference/mutations/generate-capital-deposit-document-upload-url",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/generate-capital-deposit-document-upload-url.mdx",tags:[],version:"current",frontMatter:{id:"generate-capital-deposit-document-upload-url",title:"generateCapitalDepositDocumentUploadUrl",hide_table_of_contents:!1}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>generateCapitalDepositDocumentUploadUrl.<b>input</b></code><Bullet /><code>GenerateCapitalDepositDocumentUploadUrlInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-generatecapitaldepositdocumentuploadurlbinputbcodegeneratecapitaldepositdocumentuploadurlinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GenerateCapitalDepositDocumentUploadUrlPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"generatecapitaldepositdocumentuploadurlpayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[p,c]=(0,r.useState)(i);return(0,o.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&l)},f={Bullet:d,SpecifiedBy:u,Badge:s,toc:m,Details:g},y="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generate an url allowing the upload of a document which unique identifier is specified in parameters."),(0,o.kt)("p",null,"This mutation is restricted to an Project access token (",(0,o.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"generateCapitalDepositDocumentUploadUrl(\n  input: GenerateCapitalDepositDocumentUploadUrlInput!\n): GenerateCapitalDepositDocumentUploadUrlPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatecapitaldepositdocumentuploadurlbinputbcodegeneratecapitaldepositdocumentuploadurlinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"generateCapitalDepositDocumentUploadUrl.",(0,o.kt)("b",null,"input"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/generate-capital-deposit-document-upload-url-input"},(0,o.kt)("inlineCode",{parentName:"a"},"GenerateCapitalDepositDocumentUploadUrlInput!"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"generatecapitaldepositdocumentuploadurlpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/generate-capital-deposit-document-upload-url-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"GenerateCapitalDepositDocumentUploadUrlPayload"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);