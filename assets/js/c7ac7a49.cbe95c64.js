"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41014],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6992:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return s},SpecifiedBy:function(){return d},assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(67294),a=n(3905);const i={id:"env-type",title:"EnvType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/enums/env-type",id:"api/enums/env-type",title:"EnvType",description:"No description",source:"@site/docs/api/enums/env-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/env-type",permalink:"/docs/api/enums/env-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/env-type.mdx",tags:[],version:"current",frontMatter:{id:"env-type",title:"EnvType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"EmploymentStatus",permalink:"/docs/api/enums/employment-status"},next:{title:"ExternalAccountBalanceType",permalink:"/docs/api/enums/external-account-balance-type"}},u={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>EnvType.<b>Live</b></code>",id:"code-style-fontweight-normal-envtypeblivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>EnvType.<b>Sandbox</b></code>",id:"code-style-fontweight-normal-envtypebsandboxbcode",level:4}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:s,SpecifiedBy:d,Badge:f},y="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum EnvType {\n  Live\n  Sandbox\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-envtypeblivebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EnvType.",(0,a.kt)("b",null,"Live")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-envtypebsandboxbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EnvType.",(0,a.kt)("b",null,"Sandbox")))),(0,a.kt)("blockquote",null))}v.isMDXComponent=!0}}]);