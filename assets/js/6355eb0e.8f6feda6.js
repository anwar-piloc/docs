"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,b=d["".concat(i,".").concat(y)]||d[y]||p[y]||l;return n?a.createElement(b,c(c({ref:t},u),{},{components:n})):a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31959:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(83117),r=n(67294),l=n(3905);const c={id:"cancel-virtual-iban-entry-success-payload",title:"CancelVirtualIbanEntrySuccessPayload",hide_table_of_contents:!1},o=void 0,i={unversionedId:"api-reference/objects/cancel-virtual-iban-entry-success-payload",id:"api-reference/objects/cancel-virtual-iban-entry-success-payload",title:"CancelVirtualIbanEntrySuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/cancel-virtual-iban-entry-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cancel-virtual-iban-entry-success-payload",permalink:"/api-reference/objects/cancel-virtual-iban-entry-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cancel-virtual-iban-entry-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-virtual-iban-entry-success-payload",title:"CancelVirtualIbanEntrySuccessPayload",hide_table_of_contents:!1}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelVirtualIbanEntrySuccessPayload.<b>virtualIbanEntry</b></code><Bullet /><code>VirtualIBANEntry!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cancelvirtualibanentrysuccesspayloadbvirtualibanentrybcodevirtualibanentry--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:u,Bullet:d,SpecifiedBy:p,Badge:y},f="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelVirtualIbanEntrySuccessPayload {\n  virtualIbanEntry: VirtualIBANEntry!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cancelvirtualibanentrysuccesspayloadbvirtualibanentrybcodevirtualibanentry--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CancelVirtualIbanEntrySuccessPayload.",(0,l.kt)("b",null,"virtualIbanEntry"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/virtual-ibanentry"},(0,l.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntry!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-virtual-iban-entry-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntryPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);