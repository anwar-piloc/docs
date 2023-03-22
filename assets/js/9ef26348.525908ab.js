"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50599],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16755:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return f},Bullet:function(){return d},SpecifiedBy:function(){return u},assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),i=n(67294),a=n(3905);const o={id:"capital-deposit-case-order-by-input",title:"CapitalDepositCaseOrderByInput",hide_table_of_contents:!1},p=void 0,l={unversionedId:"api/inputs/capital-deposit-case-order-by-input",id:"api/inputs/capital-deposit-case-order-by-input",title:"CapitalDepositCaseOrderByInput",description:"Order that can be applied when listing capital deposit cases",source:"@site/docs/api/inputs/capital-deposit-case-order-by-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/capital-deposit-case-order-by-input",permalink:"/docs/api/inputs/capital-deposit-case-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/capital-deposit-case-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-order-by-input",title:"CapitalDepositCaseOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CapitalDepositCaseFiltersInput",permalink:"/docs/api/inputs/capital-deposit-case-filters-input"},next:{title:"CardConfigInput",permalink:"/docs/api/inputs/card-config-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseOrderByInput.<b>field</b></code><Bullet /><code>CapitalDepositCaseOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbfieldbcodecapitaldepositcaseorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbdirectionbcodeorderbydirection-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:d,SpecifiedBy:u,Badge:f},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Order that can be applied when listing capital deposit cases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CapitalDepositCaseOrderByInput {\n  field: CapitalDepositCaseOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbfieldbcodecapitaldepositcaseorderbyfieldinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByInput.",(0,a.kt)("b",null,"field"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/capital-deposit-case-order-by-field-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseOrderByFieldInput"))," ",(0,a.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbdirectionbcodeorderbydirection-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByInput.",(0,a.kt)("b",null,"direction"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/order-by-direction"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,a.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/queries/capital-deposit-cases"},(0,a.kt)("inlineCode",{parentName:"a"},"capitalDepositCases")),"  ",(0,a.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);