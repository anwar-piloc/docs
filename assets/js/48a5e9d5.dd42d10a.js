"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50988],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10091:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return u},SpecifiedBy:function(){return s},assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var r=n(83117),i=n(67294),o=n(3905);const a={id:"spending-limit-type",title:"SpendingLimitType",hide_table_of_contents:!1},l=void 0,p={unversionedId:"api/enums/spending-limit-type",id:"api/enums/spending-limit-type",title:"SpendingLimitType",description:"Available type of spending limits",source:"@site/docs/api/enums/spending-limit-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/spending-limit-type",permalink:"/docs/api/enums/spending-limit-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/spending-limit-type.mdx",tags:[],version:"current",frontMatter:{id:"spending-limit-type",title:"SpendingLimitType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpendingLimitPeriod",permalink:"/docs/api/enums/spending-limit-period"},next:{title:"StandingOrderPeriod",permalink:"/docs/api/enums/standing-order-period"}},c={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitType.<b>AccountHolder</b></code>",id:"code-style-fontweight-normal-spendinglimittypebaccountholderbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SpendingLimitType.<b>Partner</b></code>",id:"code-style-fontweight-normal-spendinglimittypebpartnerbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:s,Badge:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Available type of spending limits"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SpendingLimitType {\n  AccountHolder\n  Partner\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimittypebaccountholderbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitType.",(0,o.kt)("b",null,"AccountHolder")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"for the account holder - defined by the partner")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-spendinglimittypebpartnerbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpendingLimitType.",(0,o.kt)("b",null,"Partner")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"for the partner - defined by Swan")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/spending-limit"},(0,o.kt)("inlineCode",{parentName:"a"},"SpendingLimit")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);