"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43978],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),y=n,f=p["".concat(l,".").concat(y)]||p[y]||u[y]||o;return r?a.createElement(f,c(c({ref:t},s),{},{components:r})):a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},12273:function(e,t,r){r.r(t),r.d(t,{Badge:function(){return y},Bullet:function(){return p},SpecifiedBy:function(){return u},assets:function(){return d},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var a=r(83117),n=r(67294),o=r(3905);const c={id:"card-product-not-applicable-to-physical-cards-rejection",title:"CardProductNotApplicableToPhysicalCardsRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/objects/card-product-not-applicable-to-physical-cards-rejection",id:"api/objects/card-product-not-applicable-to-physical-cards-rejection",title:"CardProductNotApplicableToPhysicalCardsRejection",description:"Rejection returned if the card product is not applicable to physical card.",source:"@site/docs/api/objects/card-product-not-applicable-to-physical-cards-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/card-product-not-applicable-to-physical-cards-rejection",permalink:"/docs/api/objects/card-product-not-applicable-to-physical-cards-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/card-product-not-applicable-to-physical-cards-rejection.mdx",tags:[],version:"current",frontMatter:{id:"card-product-not-applicable-to-physical-cards-rejection",title:"CardProductNotApplicableToPhysicalCardsRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardProductDisabledRejection",permalink:"/docs/api/objects/card-product-disabled-rejection"},next:{title:"CardProductNotFoundRejection",permalink:"/docs/api/objects/card-product-not-found-rejection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardProductNotApplicableToPhysicalCardsRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductnotapplicabletophysicalcardsrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:y},m="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rejection returned if the card product is not applicable to physical card."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardProductNotApplicableToPhysicalCardsRejection implements Rejection {\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardproductnotapplicabletophysicalcardsrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardProductNotApplicableToPhysicalCardsRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/unions/add-cards-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/unions/add-cards-with-group-delivery-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/unions/print-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"PrintPhysicalCardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);