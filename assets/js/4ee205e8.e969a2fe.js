"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81629:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>f});var n=r(87462),a=r(67294),c=r(3905);const o={id:"bic",title:"BIC",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/scalars/bic",id:"api-reference/scalars/bic",title:"BIC",description:"Bank Identifier Code",source:"@site/docs/api-reference/scalars/bic.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/bic",permalink:"/api-reference/scalars/bic",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/bic.mdx",tags:[],version:"current",frontMatter:{id:"bic",title:"BIC",hide_table_of_contents:!1}},s={},p=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),f=[{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:l=!1}=e;const[i,s]=(0,a.useState)(l);return(0,c.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&o)},b={Bullet:p,SpecifiedBy:d,Badge:u,toc:f,Details:m},y="wrapper";function k(e){let{components:t,...r}=e;return(0,c.kt)(y,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Bank Identifier Code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar BIC\n")),(0,c.kt)("h3",{id:"member-of"},"Member Of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-external-account-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/bank"},(0,c.kt)("inlineCode",{parentName:"a"},"Bank")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/virtual-ibanentry"},(0,c.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntry")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);