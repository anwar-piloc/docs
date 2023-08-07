"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[13511],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var c=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,c,r=function(e,a){if(null==e)return{};var t,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)t=n[c],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)t=n[c],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=c.createContext({}),i=function(e){var a=c.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=i(e.components);return c.createElement(s.Provider,{value:a},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},u=c.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(t),u=r,f=p["".concat(s,".").concat(u)]||p[u]||y[u]||n;return t?c.createElement(f,l(l({ref:a},d),{},{components:t})):c.createElement(f,l({ref:a},d))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<n;i++)l[i]=t[i];return c.createElement.apply(null,l)}return c.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65849:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var c=t(83117),r=t(67294),n=t(3905);const l={id:"cancel-physical-card-success-payload",title:"CancelPhysicalCardSuccessPayload",hide_table_of_contents:!1},o=void 0,s={unversionedId:"api-reference/objects/cancel-physical-card-success-payload",id:"api-reference/objects/cancel-physical-card-success-payload",title:"CancelPhysicalCardSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/cancel-physical-card-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cancel-physical-card-success-payload",permalink:"/api-reference/objects/cancel-physical-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cancel-physical-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-physical-card-success-payload",title:"CancelPhysicalCardSuccessPayload",hide_table_of_contents:!1}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelPhysicalCardSuccessPayload.<b>physicalCard</b></code><Bullet /><code>PhysicalCard!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cancelphysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:y,Badge:u},m="wrapper";function h(e){let{components:a,...t}=e;return(0,n.kt)(m,(0,c.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelPhysicalCardSuccessPayload {\n  physicalCard: PhysicalCard!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cancelphysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CancelPhysicalCardSuccessPayload.",(0,n.kt)("b",null,"physicalCard"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/physical-card"},(0,n.kt)("inlineCode",{parentName:"a"},"PhysicalCard!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The physicalCard canceled")),(0,n.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-physical-card-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"CancelPhysicalCardPayload")),"  ",(0,n.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);