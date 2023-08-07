"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||d;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<d;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45027:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(83117),r=n(67294),d=n(3905);const o={id:"enabled-card-design-not-found-rejection",title:"EnabledCardDesignNotFoundRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/enabled-card-design-not-found-rejection",id:"api-reference/objects/enabled-card-design-not-found-rejection",title:"EnabledCardDesignNotFoundRejection",description:"Rejection returned if the card product don't have a card design enabled",source:"@site/docs/api-reference/objects/enabled-card-design-not-found-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/enabled-card-design-not-found-rejection",permalink:"/api-reference/objects/enabled-card-design-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/enabled-card-design-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"enabled-card-design-not-found-rejection",title:"EnabledCardDesignNotFoundRejection",hide_table_of_contents:!1}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EnabledCardDesignNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-enabledcarddesignnotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,d.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Rejection returned if the card product don't have a card design enabled"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type EnabledCardDesignNotFoundRejection implements Rejection {\n  message: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-enabledcarddesignnotfoundrejectionbmessagebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"EnabledCardDesignNotFoundRejection.",(0,d.kt)("b",null,"message"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"rejection-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,d.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-with-group-delivery-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-digital-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);