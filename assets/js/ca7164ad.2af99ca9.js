"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[60311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,g=u["".concat(l,".").concat(p)]||u[p]||f[p]||c;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79037:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(83117),o=n(67294),c=n(3905);const a={id:"screening-not-found-rejection",title:"ScreeningNotFoundRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/screening-not-found-rejection",id:"api-reference/objects/screening-not-found-rejection",title:"ScreeningNotFoundRejection",description:"No description",source:"@site/docs/api-reference/objects/screening-not-found-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/screening-not-found-rejection",permalink:"/api-reference/objects/screening-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/screening-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"screening-not-found-rejection",title:"ScreeningNotFoundRejection",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ScreeningNotFoundRejection.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-screeningnotfoundrejectionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ScreeningNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-screeningnotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4}],u=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:u,SpecifiedBy:f,Badge:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ScreeningNotFoundRejection implements Rejection {\n  id: ID!\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-screeningnotfoundrejectionbidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ScreeningNotFoundRejection.",(0,c.kt)("b",null,"id"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-screeningnotfoundrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ScreeningNotFoundRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}y.isMDXComponent=!0}}]);