"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7486:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),a=n(67294),i=n(3905);const o={id:"statement-filters-input",title:"StatementFiltersInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/inputs/statement-filters-input",id:"api-reference/inputs/statement-filters-input",title:"StatementFiltersInput",description:"Filter that can be given to give the statement in a specific data range",source:"@site/docs/api-reference/inputs/statement-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/statement-filters-input",permalink:"/api-reference/inputs/statement-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/statement-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"statement-filters-input",title:"StatementFiltersInput",hide_table_of_contents:!1}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatementFiltersInput.<b>isAfterUpdatedAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementfiltersinputbisafterupdatedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatementFiltersInput.<b>isBeforeUpdatedAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statementfiltersinputbisbeforeupdatedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatementFiltersInput.<b>period</b></code><Bullet /><code>StatementPeriod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-statementfiltersinputbperiodbcodestatementperiod-",level:4}],d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter that can be given to give the statement in a specific data range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input StatementFiltersInput {\n  isAfterUpdatedAt: DateTime\n  isBeforeUpdatedAt: DateTime\n  period: StatementPeriod\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-statementfiltersinputbisafterupdatedatbcodedatetime-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StatementFiltersInput.",(0,i.kt)("b",null,"isAfterUpdatedAt"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To filter after an updatedAt value")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-statementfiltersinputbisbeforeupdatedatbcodedatetime-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StatementFiltersInput.",(0,i.kt)("b",null,"isBeforeUpdatedAt"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To filter before an updatedAt value")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-statementfiltersinputbperiodbcodestatementperiod-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StatementFiltersInput.",(0,i.kt)("b",null,"period"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/statement-period"},(0,i.kt)("inlineCode",{parentName:"a"},"StatementPeriod"))," ",(0,i.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To filter on a specific period of statement (either custom or monthly)")))}b.isMDXComponent=!0}}]);