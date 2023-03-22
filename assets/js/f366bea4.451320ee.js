"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31032],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31365:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return s},SpecifiedBy:function(){return d},assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=n(67294),c=n(3905);const o={id:"currency",title:"Currency",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/scalars/currency",id:"api/scalars/currency",title:"Currency",description:"currency code alpha 3 (ISO 4217)",source:"@site/docs/api/scalars/currency.mdx",sourceDirName:"api/scalars",slug:"/api/scalars/currency",permalink:"/docs/api/scalars/currency",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/scalars/currency.mdx",tags:[],version:"current",frontMatter:{id:"currency",title:"Currency",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CCA3",permalink:"/docs/api/scalars/cca3"},next:{title:"DateTime",permalink:"/docs/api/scalars/date-time"}},p={},u=[{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:s,SpecifiedBy:d,Badge:m},y="wrapper";function k(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"currency code alpha 3 (ISO 4217)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Currency\n")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/inputs/add-external-account-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/amount"},(0,c.kt)("inlineCode",{parentName:"a"},"Amount")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/inputs/amount-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AmountInput")),"  ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/card"},(0,c.kt)("inlineCode",{parentName:"a"},"Card")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/external-account"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/report-exchange-rate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReportExchangeRate")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);