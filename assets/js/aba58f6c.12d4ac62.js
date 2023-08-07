"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,u=p["".concat(l,".").concat(g)]||p[g]||f[g]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6620:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(83117),r=n(67294),i=n(3905);const o={id:"card-can-not-be-digitalized-rejection",title:"CardCanNotBeDigitalizedRejection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/card-can-not-be-digitalized-rejection",id:"api-reference/objects/card-can-not-be-digitalized-rejection",title:"CardCanNotBeDigitalizedRejection",description:"Rejection returned if the card could not be digitalized",source:"@site/docs/api-reference/objects/card-can-not-be-digitalized-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/card-can-not-be-digitalized-rejection",permalink:"/api-reference/objects/card-can-not-be-digitalized-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/card-can-not-be-digitalized-rejection.mdx",tags:[],version:"current",frontMatter:{id:"card-can-not-be-digitalized-rejection",title:"CardCanNotBeDigitalizedRejection",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardCanNotBeDigitalizedRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardcannotbedigitalizedrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardCanNotBeDigitalizedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardcannotbedigitalizedrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:p,SpecifiedBy:f,Badge:g},m="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rejection returned if the card could not be digitalized"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardCanNotBeDigitalizedRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cardcannotbedigitalizedrejectionbidbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CardCanNotBeDigitalizedRejection.",(0,i.kt)("b",null,"id"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cardcannotbedigitalizedrejectionbmessagebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CardCanNotBeDigitalizedRejection.",(0,i.kt)("b",null,"message"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"rejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,i.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/unions/add-digital-card-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload")),"  ",(0,i.kt)(g,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);