"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=l(a),y=n,f=p["".concat(s,".").concat(y)]||p[y]||u[y]||d;return a?r.createElement(f,c(c({ref:t},i),{},{components:a})):r.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,c=new Array(d);c[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var l=2;l<d;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},59891:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>y});var r=a(87462),n=a(67294),d=a(3905);const c={id:"add-cards-success-payload",title:"AddCardsSuccessPayload",hide_table_of_contents:!1},o=void 0,s={unversionedId:"api-reference/objects/add-cards-success-payload",id:"api-reference/objects/add-cards-success-payload",title:"AddCardsSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/add-cards-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/add-cards-success-payload",permalink:"/api-reference/objects/add-cards-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/add-cards-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-cards-success-payload",title:"AddCardsSuccessPayload",hide_table_of_contents:!1}},l={},i=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsSuccessPayload.<b>cards</b></code><Bullet /><code>[Card!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardssuccesspayloadbcardsbcodecard--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:o=!1}=e;const[s,l]=(0,n.useState)(o);return(0,d.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&c)},m={Bullet:i,SpecifiedBy:p,Badge:u,toc:y,Details:f},b="wrapper";function g(e){let{components:t,...a}=e;return(0,d.kt)(b,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddCardsSuccessPayload {\n  cards: [Card!]!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardssuccesspayloadbcardsbcodecard--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddCardsSuccessPayload.",(0,d.kt)("b",null,"cards"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/objects/card"},(0,d.kt)("inlineCode",{parentName:"a"},"[Card!]!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The newly created cards")),(0,d.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);