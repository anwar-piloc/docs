"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92293:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(83117),i=r(67294),a=r(3905);const l={id:"merchant-profile-filters-input",title:"MerchantProfileFiltersInput",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/inputs/merchant-profile-filters-input",id:"api-reference/inputs/merchant-profile-filters-input",title:"MerchantProfileFiltersInput",description:"Filters that can be applied when listing Funding Sources",source:"@site/docs/api-reference/inputs/merchant-profile-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/merchant-profile-filters-input",permalink:"/docs/api-reference/inputs/merchant-profile-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/merchant-profile-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile-filters-input",title:"MerchantProfileFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MembershipsFilterInput",permalink:"/docs/api-reference/inputs/memberships-filter-input"},next:{title:"MerchantProfileOrderByInput",permalink:"/docs/api-reference/inputs/merchant-profile-order-by-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfileFiltersInput.<b>status</b></code><Bullet /><code>[MerchantProfileStatus!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantprofilefiltersinputbstatusbcodemerchantprofilestatus--",level:4}],u=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:u,SpecifiedBy:f,Badge:d},h="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Filters that can be applied when listing Funding Sources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input MerchantProfileFiltersInput {\n  status: [MerchantProfileStatus!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilefiltersinputbstatusbcodemerchantprofilestatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileFiltersInput.",(0,a.kt)("b",null,"status"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-profile-status"},(0,a.kt)("inlineCode",{parentName:"a"},"[MerchantProfileStatus!]!"))," ",(0,a.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);