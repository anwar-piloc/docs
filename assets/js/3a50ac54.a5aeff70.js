"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50611:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var i=n(87462),r=n(67294),o=n(3905);const l={id:"spending-limit-period-input",title:"SpendingLimitPeriodInput",hide_table_of_contents:!1},a=void 0,p={unversionedId:"api-reference/enums/spending-limit-period-input",id:"api-reference/enums/spending-limit-period-input",title:"SpendingLimitPeriodInput",description:"Available period to compute spending limits",source:"@site/docs/api-reference/enums/spending-limit-period-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/spending-limit-period-input",permalink:"/api-reference/enums/spending-limit-period-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/spending-limit-period-input.mdx",tags:[],version:"current",frontMatter:{id:"spending-limit-period-input",title:"SpendingLimitPeriodInput",hide_table_of_contents:!1}},d={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriodInput.<b>Monthly</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodinputbmonthlybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriodInput.<b>Weekly</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodinputbweeklybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriodInput.<b>Daily</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodinputbdailybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriodInput.<b>Always</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodinputbalwaysbcode",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:a=!1}=e;const[p,d]=(0,r.useState)(a);return(0,o.kt)("details",(0,i.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&l)},g={Bullet:c,SpecifiedBy:s,Badge:u,toc:m,Details:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Available period to compute spending limits"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SpendingLimitPeriodInput {\n  Monthly\n  Weekly\n  Daily\n  Always\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodinputbmonthlybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriodInput.",(0,o.kt)("b",null,"Monthly")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodinputbweeklybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriodInput.",(0,o.kt)("b",null,"Weekly")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodinputbdailybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriodInput.",(0,o.kt)("b",null,"Daily")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodinputbalwaysbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriodInput.",(0,o.kt)("b",null,"Always")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/spending-limit-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SpendingLimitInput")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);