"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93104],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,f=p["".concat(o,".").concat(y)]||p[y]||u[y]||c;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=y;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},61514:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(83117),r=t(67294),c=t(3905);const l={id:"cancel-physical-card-input",title:"CancelPhysicalCardInput",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/inputs/cancel-physical-card-input",id:"api-reference/inputs/cancel-physical-card-input",title:"CancelPhysicalCardInput",description:"Inputs to cancel a physical card",source:"@site/docs/api-reference/inputs/cancel-physical-card-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/cancel-physical-card-input",permalink:"/api-reference/inputs/cancel-physical-card-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/cancel-physical-card-input.mdx",tags:[],version:"current",frontMatter:{id:"cancel-physical-card-input",title:"CancelPhysicalCardInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelFundingSourceInput",permalink:"/api-reference/inputs/cancel-funding-source-input"},next:{title:"CancelStandingOrderInput",permalink:"/api-reference/inputs/cancel-standing-order-input"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelPhysicalCardInput.<b>cardId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cancelphysicalcardinputbcardidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CancelPhysicalCardInput.<b>reason</b></code><Bullet /><code>CancelPhysicalCardReason!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cancelphysicalcardinputbreasonbcodecancelphysicalcardreason--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:y},m="wrapper";function h(e){let{components:n,...t}=e;return(0,c.kt)(m,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Inputs to cancel a physical card"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input CancelPhysicalCardInput {\n  cardId: ID!\n  reason: CancelPhysicalCardReason!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cancelphysicalcardinputbcardidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CancelPhysicalCardInput.",(0,c.kt)("b",null,"cardId"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Unique identifier of a card")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cancelphysicalcardinputbreasonbcodecancelphysicalcardreason--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CancelPhysicalCardInput.",(0,c.kt)("b",null,"reason"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/cancel-physical-card-reason"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelPhysicalCardReason!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"reason why the physical card is canceled")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/mutations/cancel-physical-card"},(0,c.kt)("inlineCode",{parentName:"a"},"cancelPhysicalCard")),"  ",(0,c.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);