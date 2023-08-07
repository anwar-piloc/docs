"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},257:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(83117),r=a(67294),i=a(3905);const s={id:"capital-deposit-case-filters-input",title:"CapitalDepositCaseFiltersInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/inputs/capital-deposit-case-filters-input",id:"api-reference/inputs/capital-deposit-case-filters-input",title:"CapitalDepositCaseFiltersInput",description:"Filters that can be applied when listing capital deposit cases",source:"@site/docs/api-reference/inputs/capital-deposit-case-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/capital-deposit-case-filters-input",permalink:"/api-reference/inputs/capital-deposit-case-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/capital-deposit-case-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-filters-input",title:"CapitalDepositCaseFiltersInput",hide_table_of_contents:!1}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseFiltersInput.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseFiltersInput.<b>status</b></code><Bullet /><code>[CapitalDepositCaseStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbstatusbcodecapitaldepositcasestatus--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:d,SpecifiedBy:u,Badge:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filters that can be applied when listing capital deposit cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CapitalDepositCaseFiltersInput {\n  search: String\n  status: [CapitalDepositCaseStatus!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbsearchbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseFiltersInput.",(0,i.kt)("b",null,"search"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Searches company shareholder name, individual shareholder first name, last name, and id")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasefiltersinputbstatusbcodecapitaldepositcasestatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseFiltersInput.",(0,i.kt)("b",null,"status"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/capital-deposit-case-status"},(0,i.kt)("inlineCode",{parentName:"a"},"[CapitalDepositCaseStatus!]"))," ",(0,i.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Status we want to filter on")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/queries/capital-deposit-cases"},(0,i.kt)("inlineCode",{parentName:"a"},"capitalDepositCases")),"  ",(0,i.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);