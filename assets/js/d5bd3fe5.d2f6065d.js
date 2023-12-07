"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21524],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(t),f=o,u=h["".concat(d,".").concat(f)]||h[f]||p[f]||a;return t?n.createElement(u,l(l({ref:r},c),{},{components:t})):n.createElement(u,l({ref:r},c))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[h]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43803:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>f});var n=t(87462),o=t(67294),a=t(3905);const l={id:"shareholder-info",title:"ShareholderInfo",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/unions/shareholder-info",id:"api-reference/unions/shareholder-info",title:"ShareholderInfo",description:"Shareholder information.",source:"@site/docs/api-reference/unions/shareholder-info.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/shareholder-info",permalink:"/api-reference/unions/shareholder-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/shareholder-info.mdx",tags:[],version:"current",frontMatter:{id:"shareholder-info",title:"ShareholderInfo",hide_table_of_contents:!1}},s={},c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),f=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ShareholderInfo.<b>IndividualShareholder</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderinfobindividualshareholderbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ShareholderInfo.<b>CompanyShareholder</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderinfobcompanyshareholderbcode-",level:4},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:r,dataClose:t,children:l,startOpen:i=!1}=e;const[d,s]=(0,o.useState)(i);return(0,a.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?r:t),d&&l)},m={Bullet:c,SpecifiedBy:h,Badge:p,toc:f,Details:u},b="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(b,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shareholder information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union ShareholderInfo = IndividualShareholder | CompanyShareholder\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-shareholderinfobindividualshareholderbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/individual-shareholder"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ShareholderInfo.",(0,a.kt)("b",null,"IndividualShareholder")))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Individual shareholder info.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-shareholderinfobcompanyshareholderbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/company-shareholder"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ShareholderInfo.",(0,a.kt)("b",null,"CompanyShareholder")))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Company shareholder info.")),(0,a.kt)("h3",{id:"member-of"},"Member Of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/shareholder"},(0,a.kt)("inlineCode",{parentName:"a"},"Shareholder")),"  ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);