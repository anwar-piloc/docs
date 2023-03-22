"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=a,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25896:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return u},Bullet:function(){return f},SpecifiedBy:function(){return m},assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(67294),o=n(3905);const i={id:"statement-info",title:"StatementInfo",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api/interfaces/statement-info",id:"api/interfaces/statement-info",title:"StatementInfo",description:"Custom information for a certain type of statement",source:"@site/docs/api/interfaces/statement-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/statement-info",permalink:"/docs/api/interfaces/statement-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/statement-info.mdx",tags:[],version:"current",frontMatter:{id:"statement-info",title:"StatementInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StandingOrderStatusInfo",permalink:"/docs/api/interfaces/standing-order-status-info"},next:{title:"SupportingDocumentCollectionStatusInfo",permalink:"/docs/api/interfaces/supporting-document-collection-status-info"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatementInfo.<b>type</b></code><Bullet /><code>StatementType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-statementinfobtypebcodestatementtype-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],f=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),d={toc:p,Bullet:f,SpecifiedBy:m,Badge:u},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Custom information for a certain type of statement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface StatementInfo {\n  type: StatementType\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statementinfobtypebcodestatementtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatementInfo.",(0,o.kt)("b",null,"type"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/statement-type"},(0,o.kt)("inlineCode",{parentName:"a"},"StatementType"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/statement"},(0,o.kt)("inlineCode",{parentName:"a"},"Statement")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/csv-statement"},(0,o.kt)("inlineCode",{parentName:"a"},"CsvStatement")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/pdf-statement"},(0,o.kt)("inlineCode",{parentName:"a"},"PdfStatement")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);