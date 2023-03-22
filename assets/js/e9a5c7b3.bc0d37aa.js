"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52010],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,m=p["".concat(d,".").concat(u)]||p[u]||b[u]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69707:function(e,t,r){r.r(t),r.d(t,{Badge:function(){return u},Bullet:function(){return p},SpecifiedBy:function(){return b},assets:function(){return l},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var n=r(83117),a=r(67294),i=r(3905);const o={id:"sepadirect-debit-creditor",title:"SEPADirectDebitCreditor",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/interfaces/sepadirect-debit-creditor",id:"api/interfaces/sepadirect-debit-creditor",title:"SEPADirectDebitCreditor",description:"Sepa Direct Debit Creditor",source:"@site/docs/api/interfaces/sepadirect-debit-creditor.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/sepadirect-debit-creditor",permalink:"/docs/api/interfaces/sepadirect-debit-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/sepadirect-debit-creditor.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-creditor",title:"SEPADirectDebitCreditor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPACreditTransferDebtor",permalink:"/docs/api/interfaces/sepacredit-transfer-debtor"},next:{title:"SEPADirectDebitDebtor",permalink:"/docs/api/interfaces/sepadirect-debit-debtor"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitcreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitCreditor.<b>maskedIBAN</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitcreditorbmaskedibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitCreditor.<b>IBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitcreditorbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitCreditor.<b>BIC</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitcreditorbbicbcodestring-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:b,Badge:u},f="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sepa Direct Debit Creditor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface SEPADirectDebitCreditor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitcreditorbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitCreditor.",(0,i.kt)("b",null,"name"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"full name of the creditor")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitcreditorbmaskedibanbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitCreditor.",(0,i.kt)("b",null,"maskedIBAN"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"maskedIBAN")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitcreditorbibanbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitCreditor.",(0,i.kt)("b",null,"IBAN"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IBAN")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitcreditorbbicbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitCreditor.",(0,i.kt)("b",null,"BIC"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"BIC")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepadirect-debit-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepadirect-debit-in-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitInCreditor")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepadirect-debit-out-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitOutCreditor")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);