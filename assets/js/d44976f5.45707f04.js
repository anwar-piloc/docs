"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[65433],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},796:function(e,t,r){r.r(t),r.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(83117),a=r(67294),o=r(3905);const i={id:"view-physical-card-numbers-payload",title:"ViewPhysicalCardNumbersPayload",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api/unions/view-physical-card-numbers-payload",id:"api/unions/view-physical-card-numbers-payload",title:"ViewPhysicalCardNumbersPayload",description:"No description",source:"@site/docs/api/unions/view-physical-card-numbers-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/view-physical-card-numbers-payload",permalink:"/docs/api/unions/view-physical-card-numbers-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/view-physical-card-numbers-payload.mdx",tags:[],version:"current",frontMatter:{id:"view-physical-card-numbers-payload",title:"ViewPhysicalCardNumbersPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ViewCardNumbersPayload",permalink:"/docs/api/unions/view-card-numbers-payload"},next:{title:"ViewPhysicalCardPinPayload",permalink:"/docs/api/unions/view-physical-card-pin-payload"}},l={},d=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>ViewPhysicalCardNumbersSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"viewphysicalcardnumberssuccesspayload-",level:4},{value:'<code>UserNotCardHolderRejection</code> <Badge class="secondary" text="object"/>',id:"usernotcardholderrejection-",level:4},{value:'<code>CardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"cardnotfoundrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union ViewPhysicalCardNumbersPayload = ViewPhysicalCardNumbersSuccessPayload | UserNotCardHolderRejection | CardNotFoundRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"viewphysicalcardnumberssuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/view-physical-card-numbers-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardNumbersSuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"usernotcardholderrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/user-not-card-holder-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"UserNotCardHolderRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the User is not the Card Holder")),(0,o.kt)("h4",{id:"cardnotfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/card-not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"CardNotFoundRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/view-physical-card-numbers"},(0,o.kt)("inlineCode",{parentName:"a"},"viewPhysicalCardNumbers")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);