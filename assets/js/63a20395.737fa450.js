"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=i(a),p=r,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},76893:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905);const l={id:"canceled-merchant-profile-status-info",title:"CanceledMerchantProfileStatusInfo",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/objects/canceled-merchant-profile-status-info",id:"api-reference/objects/canceled-merchant-profile-status-info",title:"CanceledMerchantProfileStatusInfo",description:"CanceledMerchantProfileStatusInfo",source:"@site/docs/api-reference/objects/canceled-merchant-profile-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/canceled-merchant-profile-status-info",permalink:"/api-reference/objects/canceled-merchant-profile-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/canceled-merchant-profile-status-info.mdx",tags:[],version:"current",frontMatter:{id:"canceled-merchant-profile-status-info",title:"CanceledMerchantProfileStatusInfo",hide_table_of_contents:!1}},i={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantProfileStatusInfo.<b>status</b></code><Bullet /><code>MerchantProfileStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-canceledmerchantprofilestatusinfobstatusbcodemerchantprofilestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantProfileStatusInfo.<b>canceledAt</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceledmerchantprofilestatusinfobcanceledatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantProfileStatusInfo.<b>enabledAt</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceledmerchantprofilestatusinfobenabledatbcodedate-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantProfileStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"merchantprofilestatusinfo-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[s,i]=(0,r.useState)(c);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},b={Bullet:d,SpecifiedBy:f,Badge:u,toc:p,Details:m},h="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CanceledMerchantProfileStatusInfo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CanceledMerchantProfileStatusInfo implements MerchantProfileStatusInfo {\n  status: MerchantProfileStatus!\n  canceledAt: Date!\n  enabledAt: Date\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantprofilestatusinfobstatusbcodemerchantprofilestatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantProfileStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-profile-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatus!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantprofilestatusinfobcanceledatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantProfileStatusInfo.",(0,o.kt)("b",null,"canceledAt"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantprofilestatusinfobenabledatbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantProfileStatusInfo.",(0,o.kt)("b",null,"enabledAt"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantprofilestatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatusInfo"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Profile Status Information")))}g.isMDXComponent=!0}}]);