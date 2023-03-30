"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[87597],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,f=p["".concat(d,".").concat(y)]||p[y]||u[y]||r;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},65157:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return p},SpecifiedBy:function(){return u},assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=n(83117),o=n(67294),r=n(3905);const i={id:"view-physical-card-pin-payload",title:"ViewPhysicalCardPinPayload",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/unions/view-physical-card-pin-payload",id:"api/unions/view-physical-card-pin-payload",title:"ViewPhysicalCardPinPayload",description:"No description",source:"@site/docs/api/unions/view-physical-card-pin-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/view-physical-card-pin-payload",permalink:"/docs/api/unions/view-physical-card-pin-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/view-physical-card-pin-payload.mdx",tags:[],version:"current",frontMatter:{id:"view-physical-card-pin-payload",title:"ViewPhysicalCardPinPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ViewPhysicalCardNumbersPayload",permalink:"/docs/api/unions/view-physical-card-numbers-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>ViewPhysicalCardPinSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"viewphysicalcardpinsuccesspayload-",level:4},{value:'<code>CardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"cardnotfoundrejection-",level:4},{value:'<code>PhysicalCardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"physicalcardnotfoundrejection-",level:4},{value:'<code>PINNotReadyRejection</code> <Badge class="secondary" text="object"/>',id:"pinnotreadyrejection-",level:4},{value:'<code>UserNotCardHolderRejection</code> <Badge class="secondary" text="object"/>',id:"usernotcardholderrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:y},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union ViewPhysicalCardPinPayload = ViewPhysicalCardPinSuccessPayload | CardNotFoundRejection | PhysicalCardNotFoundRejection | PINNotReadyRejection | UserNotCardHolderRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"viewphysicalcardpinsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/view-physical-card-pin-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardPinSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"cardnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/card-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"CardNotFoundRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,r.kt)("h4",{id:"physicalcardnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/physical-card-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"PhysicalCardNotFoundRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Physical Card does not exist")),(0,r.kt)("h4",{id:"pinnotreadyrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/pinnot-ready-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"PINNotReadyRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"usernotcardholderrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/user-not-card-holder-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotCardHolderRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the User is not the Card Holder")),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/view-physical-card-pin"},(0,r.kt)("inlineCode",{parentName:"a"},"viewPhysicalCardPin")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);