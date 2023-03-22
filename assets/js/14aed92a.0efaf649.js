"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22813],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=i,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},44736:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return f},Bullet:function(){return u},SpecifiedBy:function(){return d},assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var n=a(83117),i=a(67294),r=a(3905);const s={id:"capital-deposit-case-filters-input",title:"CapitalDepositCaseFiltersInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api/inputs/capital-deposit-case-filters-input",id:"api/inputs/capital-deposit-case-filters-input",title:"CapitalDepositCaseFiltersInput",description:"Filters that can be applied when listing capital deposit cases",source:"@site/docs/api/inputs/capital-deposit-case-filters-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/capital-deposit-case-filters-input",permalink:"/docs/api/inputs/capital-deposit-case-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/capital-deposit-case-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-filters-input",title:"CapitalDepositCaseFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelVirtualIbanEntryInput",permalink:"/docs/api/inputs/cancel-virtual-iban-entry-input"},next:{title:"CapitalDepositCaseOrderByInput",permalink:"/docs/api/inputs/capital-deposit-case-order-by-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseFiltersInput.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseFiltersInput.<b>status</b></code><Bullet /><code>[CapitalDepositCaseStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbstatusbcodecapitaldepositcasestatus--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:d,Badge:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Filters that can be applied when listing capital deposit cases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input CapitalDepositCaseFiltersInput {\n  search: String\n  status: [CapitalDepositCaseStatus!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbsearchbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseFiltersInput.",(0,r.kt)("b",null,"search"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Searches company shareholder name, individual shareholder first name, last name, and id")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbstatusbcodecapitaldepositcasestatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseFiltersInput.",(0,r.kt)("b",null,"status"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/capital-deposit-case-status"},(0,r.kt)("inlineCode",{parentName:"a"},"[CapitalDepositCaseStatus!]"))," ",(0,r.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status we want to filter on")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/queries/capital-deposit-cases"},(0,r.kt)("inlineCode",{parentName:"a"},"capitalDepositCases")),"  ",(0,r.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);