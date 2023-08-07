"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,y=p["".concat(i,".").concat(f)]||p[f]||s[f]||d;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,o=new Array(d);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<d;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93788:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(83117),a=r(67294),d=r(3905);const o={id:"card-order-by-field-input",title:"CardOrderByFieldInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/enums/card-order-by-field-input",id:"api-reference/enums/card-order-by-field-input",title:"CardOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing cards",source:"@site/docs/api-reference/enums/card-order-by-field-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/card-order-by-field-input",permalink:"/api-reference/enums/card-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/card-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"card-order-by-field-input",title:"CardOrderByFieldInput",hide_table_of_contents:!1}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CardOrderByFieldInput.<b>id</b></code>",id:"code-style-fontweight-normal-cardorderbyfieldinputbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-cardorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-cardorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:s,Badge:f},m="wrapper";function b(e){let{components:t,...r}=e;return(0,d.kt)(m,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Field we can use when ordering that can be applied when listing cards"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CardOrderByFieldInput {\n  id\n  createdAt\n  updatedAt\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-cardorderbyfieldinputbidbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CardOrderByFieldInput.",(0,d.kt)("b",null,"id")))),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-cardorderbyfieldinputbcreatedatbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CardOrderByFieldInput.",(0,d.kt)("b",null,"createdAt")))),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-cardorderbyfieldinputbupdatedatbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CardOrderByFieldInput.",(0,d.kt)("b",null,"updatedAt")))),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/card-order-by-input"},(0,d.kt)("inlineCode",{parentName:"a"},"CardOrderByInput")),"  ",(0,d.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);