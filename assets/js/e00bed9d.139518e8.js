"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17796],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20475:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return u},SpecifiedBy:function(){return d},assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=n(67294),i=n(3905);const o={id:"payment-mandate-filters-input",title:"PaymentMandateFiltersInput",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api/inputs/payment-mandate-filters-input",id:"api/inputs/payment-mandate-filters-input",title:"PaymentMandateFiltersInput",description:"Filter that can be passed to get the payment mandate in a specific data range",source:"@site/docs/api/inputs/payment-mandate-filters-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/payment-mandate-filters-input",permalink:"/docs/api/inputs/payment-mandate-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/payment-mandate-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-filters-input",title:"PaymentMandateFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentFiltersInput",permalink:"/docs/api/inputs/payment-filters-input"},next:{title:"PaymentMandateOrderByInput",permalink:"/docs/api/inputs/payment-mandate-order-by-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateFiltersInput.<b>status</b></code><Bullet /><code>[PaymentMandateStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentmandatefiltersinputbstatusbcodepaymentmandatestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateFiltersInput.<b>scheme</b></code><Bullet /><code>[PaymentMandateScheme!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentmandatefiltersinputbschemebcodepaymentmandatescheme--",level:4}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:u,SpecifiedBy:d,Badge:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter that can be passed to get the payment mandate in a specific data range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PaymentMandateFiltersInput {\n  status: [PaymentMandateStatus!]\n  scheme: [PaymentMandateScheme!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatefiltersinputbstatusbcodepaymentmandatestatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateFiltersInput.",(0,i.kt)("b",null,"status"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/payment-mandate-status"},(0,i.kt)("inlineCode",{parentName:"a"},"[PaymentMandateStatus!]"))," ",(0,i.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To filter on status values")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatefiltersinputbschemebcodepaymentmandatescheme--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateFiltersInput.",(0,i.kt)("b",null,"scheme"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/payment-mandate-scheme"},(0,i.kt)("inlineCode",{parentName:"a"},"[PaymentMandateScheme!]"))," ",(0,i.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To filter on scheme values")))}b.isMDXComponent=!0}}]);