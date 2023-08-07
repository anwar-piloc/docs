"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[7755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[s]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80901:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(83117),r=n(67294),o=n(3905);const l={id:"spending-limit-period",title:"SpendingLimitPeriod",hide_table_of_contents:!1},a=void 0,d={unversionedId:"api-reference/enums/spending-limit-period",id:"api-reference/enums/spending-limit-period",title:"SpendingLimitPeriod",description:"Available period to compute spending limits",source:"@site/docs/api-reference/enums/spending-limit-period.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/spending-limit-period",permalink:"/api-reference/enums/spending-limit-period",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/spending-limit-period.mdx",tags:[],version:"current",frontMatter:{id:"spending-limit-period",title:"SpendingLimitPeriod",hide_table_of_contents:!1}},p={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriod.<b>Monthly</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodbmonthlybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriod.<b>Weekly</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodbweeklybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriod.<b>Daily</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodbdailybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitPeriod.<b>Always</b></code>",id:"code-style-fontweight-normal-spendinglimitperiodbalwaysbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:s,SpecifiedBy:m,Badge:u},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Available period to compute spending limits"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SpendingLimitPeriod {\n  Monthly\n  Weekly\n  Daily\n  Always\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodbmonthlybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriod.",(0,o.kt)("b",null,"Monthly")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodbweeklybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriod.",(0,o.kt)("b",null,"Weekly")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodbdailybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriod.",(0,o.kt)("b",null,"Daily")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimitperiodbalwaysbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitPeriod.",(0,o.kt)("b",null,"Always")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/spending"},(0,o.kt)("inlineCode",{parentName:"a"},"Spending")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/spending-limit"},(0,o.kt)("inlineCode",{parentName:"a"},"SpendingLimit")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);