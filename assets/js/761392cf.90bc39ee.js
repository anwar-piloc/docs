"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[27678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,y=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93211:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(83117),a=r(67294),i=r(3905);const c={id:"view-physical-card-numbers",title:"viewPhysicalCardNumbers",hide_table_of_contents:!1},s=void 0,o={unversionedId:"api-reference/mutations/view-physical-card-numbers",id:"api-reference/mutations/view-physical-card-numbers",title:"viewPhysicalCardNumbers",description:"Reveal the physical card numbers in the consent page once consent has been given by the cardholder",source:"@site/docs/api-reference/mutations/view-physical-card-numbers.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/view-physical-card-numbers",permalink:"/api-reference/mutations/view-physical-card-numbers",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/view-physical-card-numbers.mdx",tags:[],version:"current",frontMatter:{id:"view-physical-card-numbers",title:"viewPhysicalCardNumbers",hide_table_of_contents:!1}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>viewPhysicalCardNumbers.<b>input</b></code><Bullet /><code>ViewPhysicalCardNumbersInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-viewphysicalcardnumbersbinputbcodeviewphysicalcardnumbersinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ViewPhysicalCardNumbersPayload</code> <Badge class="secondary" text="union"/>',id:"viewphysicalcardnumberspayload-",level:4}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:d,Badge:m},h="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reveal the physical card numbers in the consent page once consent has been given by the cardholder"),(0,i.kt)("p",null,"This mutation is restricted to an User access token (",(0,i.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,i.kt)("p",null,"The user must have the account membership for this card"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"viewPhysicalCardNumbers(\n  input: ViewPhysicalCardNumbersInput!\n): ViewPhysicalCardNumbersPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-viewphysicalcardnumbersbinputbcodeviewphysicalcardnumbersinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"viewPhysicalCardNumbers.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/view-physical-card-numbers-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardNumbersInput!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"viewphysicalcardnumberspayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/view-physical-card-numbers-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardNumbersPayload"))," ",(0,i.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);