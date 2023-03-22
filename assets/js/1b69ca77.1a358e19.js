"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62730],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35879:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return c},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=n(67294),i=n(3905);const a={id:"standing-order-period",title:"StandingOrderPeriod",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api/enums/standing-order-period",id:"api/enums/standing-order-period",title:"StandingOrderPeriod",description:"No description",source:"@site/docs/api/enums/standing-order-period.mdx",sourceDirName:"api/enums",slug:"/api/enums/standing-order-period",permalink:"/docs/api/enums/standing-order-period",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/standing-order-period.mdx",tags:[],version:"current",frontMatter:{id:"standing-order-period",title:"StandingOrderPeriod",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpendingLimitType",permalink:"/docs/api/enums/spending-limit-type"},next:{title:"StandingOrderStatus",permalink:"/docs/api/enums/standing-order-status"}},c={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>StandingOrderPeriod.<b>Daily</b></code>",id:"code-style-fontweight-normal-standingorderperiodbdailybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StandingOrderPeriod.<b>Weekly</b></code>",id:"code-style-fontweight-normal-standingorderperiodbweeklybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StandingOrderPeriod.<b>Monthly</b></code>",id:"code-style-fontweight-normal-standingorderperiodbmonthlybcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum StandingOrderPeriod {\n  Daily\n  Weekly\n  Monthly\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-standingorderperiodbdailybcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderPeriod.",(0,i.kt)("b",null,"Daily")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-standingorderperiodbweeklybcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderPeriod.",(0,i.kt)("b",null,"Weekly")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-standingorderperiodbmonthlybcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderPeriod.",(0,i.kt)("b",null,"Monthly")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/schedule-standing-order-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderInput")),"  ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/standing-order"},(0,i.kt)("inlineCode",{parentName:"a"},"StandingOrder")),"  ",(0,i.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);