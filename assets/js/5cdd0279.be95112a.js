"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(m,c(c({ref:t},i),{},{components:r})):a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var d=2;d<o;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9994:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>f});var a=r(87462),n=r(67294),o=r(3905);const c={id:"request-merchant-profile-update-success-payload",title:"RequestMerchantProfileUpdateSuccessPayload",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/request-merchant-profile-update-success-payload",id:"api-reference/objects/request-merchant-profile-update-success-payload",title:"RequestMerchantProfileUpdateSuccessPayload",description:"Add Merchant Profile Success Payload",source:"@site/docs/api-reference/objects/request-merchant-profile-update-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/request-merchant-profile-update-success-payload",permalink:"/api-reference/objects/request-merchant-profile-update-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/request-merchant-profile-update-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-profile-update-success-payload",title:"RequestMerchantProfileUpdateSuccessPayload",hide_table_of_contents:!1}},d={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateSuccessPayload.<b>requestMerchantProfileUpdate</b></code><Bullet /><code>RequestMerchantProfileUpdate!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdatesuccesspayloadbrequestmerchantprofileupdatebcoderequestmerchantprofileupdate--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:r,children:c,startOpen:l=!1}=e;const[s,d]=(0,n.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&c)},y={Bullet:i,SpecifiedBy:p,Badge:u,toc:f,Details:m},b="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add Merchant Profile Success Payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RequestMerchantProfileUpdateSuccessPayload {\n  requestMerchantProfileUpdate: RequestMerchantProfileUpdate!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdatesuccesspayloadbrequestmerchantprofileupdatebcoderequestmerchantprofileupdate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateSuccessPayload.",(0,o.kt)("b",null,"requestMerchantProfileUpdate"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/request-merchant-profile-update"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantProfileUpdate!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Request Update Merchant Profile")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/request-merchant-profile-update-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantProfileUpdatePayload")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);