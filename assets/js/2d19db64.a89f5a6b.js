"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30699],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},10151:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return f},Bullet:function(){return d},SpecifiedBy:function(){return u},assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var n=a(83117),i=a(67294),o=a(3905);const r={id:"capital-deposit-cases",title:"capitalDepositCases",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api/queries/capital-deposit-cases",id:"api/queries/capital-deposit-cases",title:"capitalDepositCases",description:"Returns the list of capital deposit cases.",source:"@site/docs/api/queries/capital-deposit-cases.mdx",sourceDirName:"api/queries",slug:"/api/queries/capital-deposit-cases",permalink:"/docs/api/queries/capital-deposit-cases",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/queries/capital-deposit-cases.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-cases",title:"capitalDepositCases",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"capitalDepositCase",permalink:"/docs/api/queries/capital-deposit-case"},next:{title:"card",permalink:"/docs/api/queries/card"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasesbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasesbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasesbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>filters</b></code><Bullet /><code>CapitalDepositCaseFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-capitaldepositcasesbfiltersbcodecapitaldepositcasefiltersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>orderBy</b></code><Bullet /><code>CapitalDepositCaseOrderByInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-capitaldepositcasesborderbybcodecapitaldepositcaseorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>CapitalDepositCaseConnection</code> <Badge class="secondary" text="object"/>',id:"capitaldepositcaseconnection-",level:4}],d=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the list of capital deposit cases."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This query is restricted to a Project access token (",(0,o.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"capitalDepositCases(\n  first: Int! = 50\n  before: String\n  after: String\n  filters: CapitalDepositCaseFiltersInput\n  orderBy: CapitalDepositCaseOrderByInput\n): CapitalDepositCaseConnection!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbfirstbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"first"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"before"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbafterbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"after"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbfiltersbcodecapitaldepositcasefiltersinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/capital-deposit-case-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseFiltersInput"))," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesborderbybcodecapitaldepositcaseorderbyinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/capital-deposit-case-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseOrderByInput"))," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"capitaldepositcaseconnection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/capital-deposit-case-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseConnection"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Implements the Relay Connection interface, used to paginate list of elements (",(0,o.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")))}b.isMDXComponent=!0}}]);