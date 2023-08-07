"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||c;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89248:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(83117),o=n(67294),c=n(3905);const a={id:"card-product-not-found-rejection",title:"CardProductNotFoundRejection",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/objects/card-product-not-found-rejection",id:"api-reference/objects/card-product-not-found-rejection",title:"CardProductNotFoundRejection",description:"No description",source:"@site/docs/api-reference/objects/card-product-not-found-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/card-product-not-found-rejection",permalink:"/api-reference/objects/card-product-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/card-product-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"card-product-not-found-rejection",title:"CardProductNotFoundRejection",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardProductNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductnotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4}],u=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardProductNotFoundRejection implements Rejection {\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cardproductnotfoundrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CardProductNotFoundRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}g.isMDXComponent=!0}}]);