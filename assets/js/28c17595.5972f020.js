"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,y=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19550:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(83117),r=n(67294),i=n(3905);const s={id:"view-physical-card-numbers",title:"viewPhysicalCardNumbers",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api/mutations/view-physical-card-numbers",id:"api/mutations/view-physical-card-numbers",title:"viewPhysicalCardNumbers",description:"Reveal the physical card numbers in the consent page once consent has been given by the cardholder",source:"@site/docs/api/mutations/view-physical-card-numbers.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/view-physical-card-numbers",permalink:"/docs/api/mutations/view-physical-card-numbers",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/view-physical-card-numbers.mdx",tags:[],version:"current",frontMatter:{id:"view-physical-card-numbers",title:"viewPhysicalCardNumbers",hide_table_of_contents:!1}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>viewPhysicalCardNumbers.<b>input</b></code><Bullet /><code>ViewPhysicalCardNumbersInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-viewphysicalcardnumbersbinputbcodeviewphysicalcardnumbersinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ViewPhysicalCardNumbersPayload</code> <Badge class="secondary" text="union"/>',id:"viewphysicalcardnumberspayload-",level:4}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:d,Badge:m},h="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reveal the physical card numbers in the consent page once consent has been given by the cardholder"),(0,i.kt)("p",null,"This mutation is restricted to an User access token (",(0,i.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,i.kt)("p",null,"The user must have the account membership for this card"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"viewPhysicalCardNumbers(\n  input: ViewPhysicalCardNumbersInput!\n): ViewPhysicalCardNumbersPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-viewphysicalcardnumbersbinputbcodeviewphysicalcardnumbersinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"viewPhysicalCardNumbers.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/view-physical-card-numbers-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardNumbersInput!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"viewphysicalcardnumberspayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api/unions/view-physical-card-numbers-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewPhysicalCardNumbersPayload"))," ",(0,i.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);