"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||d;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<d;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39733:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),d=a(3905);const o={id:"add-card",title:"addCard",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/mutations/add-card",id:"api-reference/mutations/add-card",title:"addCard",description:"Add a new card to an account membership.",source:"@site/docs/api-reference/mutations/add-card.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-card",permalink:"/api-reference/mutations/add-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-card.mdx",tags:[],version:"current",frontMatter:{id:"add-card",title:"addCard",hide_table_of_contents:!1}},l={},s=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addCard.<b>input</b></code><Bullet /><code>AddCardInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addcardbinputbcodeaddcardinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddCardPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"addcardpayload-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[i,l]=(0,r.useState)(c);return(0,d.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},y={Bullet:s,SpecifiedBy:u,Badge:p,toc:m,Details:f},b="wrapper";function g(e){let{components:t,...a}=e;return(0,d.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Add a new card to an account membership."),(0,d.kt)("p",null,"This mutation is restricted to an User access token (",(0,d.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,d.kt)("p",null,"The user must have an account membership for this account with the attribute ",(0,d.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership=true"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"addCard(\n  input: AddCardInput!\n): AddCardPayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardbinputbcodeaddcardinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"addCard.",(0,d.kt)("b",null,"input"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-card-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardInput!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"addcardpayload-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardPayload"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null))}g.isMDXComponent=!0}}]);