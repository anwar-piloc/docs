"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54150:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(83117),a=r(67294),c=r(3905);const l={id:"resume-physical-card-input",title:"ResumePhysicalCardInput",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/inputs/resume-physical-card-input",id:"api-reference/inputs/resume-physical-card-input",title:"ResumePhysicalCardInput",description:"Inputs to resume a physical card",source:"@site/docs/api-reference/inputs/resume-physical-card-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/resume-physical-card-input",permalink:"/api-reference/inputs/resume-physical-card-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/resume-physical-card-input.mdx",tags:[],version:"current",frontMatter:{id:"resume-physical-card-input",title:"ResumePhysicalCardInput",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardInput.<b>cardId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-resumephysicalcardinputbcardidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-resumephysicalcardinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function h(e){let{components:t,...r}=e;return(0,c.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Inputs to resume a physical card"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input ResumePhysicalCardInput {\n  cardId: ID!\n  consentRedirectUrl: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardinputbcardidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardInput.",(0,c.kt)("b",null,"cardId"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Unique identifier of a card")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardinputbconsentredirecturlbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardInput.",(0,c.kt)("b",null,"consentRedirectUrl"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/mutations/resume-physical-card"},(0,c.kt)("inlineCode",{parentName:"a"},"resumePhysicalCard")),"  ",(0,c.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);