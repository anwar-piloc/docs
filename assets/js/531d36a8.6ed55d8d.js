"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=d(r),p=n,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||o;return r?a.createElement(m,c(c({ref:t},s),{},{components:r})):a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[b]="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45931:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=r(83117),n=r(67294),o=r(3905);const c={id:"sepadirect-debit-out-debtor",title:"SEPADirectDebitOutDebtor",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/sepadirect-debit-out-debtor",id:"api-reference/objects/sepadirect-debit-out-debtor",title:"SEPADirectDebitOutDebtor",description:"Sepa Direct Debtor for Outgoing transaction",source:"@site/docs/api-reference/objects/sepadirect-debit-out-debtor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/sepadirect-debit-out-debtor",permalink:"/api-reference/objects/sepadirect-debit-out-debtor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/sepadirect-debit-out-debtor.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-out-debtor",title:"SEPADirectDebitOutDebtor",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutDebtor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutDebtor.<b>maskedIBAN</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbmaskedibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutDebtor.<b>IBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutDebtor.<b>BIC</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbbicbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutDebtor.<b>virtualIBANEntryId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbvirtualibanentryidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutDebtor.<b>accountNumber</b></code><Bullet /><code>AccountNumber!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbaccountnumberbcodeaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPADirectDebitDebtor</code> <Badge class="secondary" text="interface"/>',id:"sepadirectdebitdebtor-",level:4}],b=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:b,SpecifiedBy:u,Badge:p},f="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sepa Direct Debtor for Outgoing transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPADirectDebitOutDebtor implements SEPADirectDebitDebtor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n  virtualIBANEntryId: ID\n  accountNumber: AccountNumber!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutDebtor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"full name of the debtor")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbmaskedibanbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutDebtor.",(0,o.kt)("b",null,"maskedIBAN"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"maskedIBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbibanbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutDebtor.",(0,o.kt)("b",null,"IBAN"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbbicbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutDebtor.",(0,o.kt)("b",null,"BIC"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BIC")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbvirtualibanentryidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutDebtor.",(0,o.kt)("b",null,"virtualIBANEntryId"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"identifier of a Virtual IBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutdebtorbaccountnumberbcodeaccountnumber--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutDebtor.",(0,o.kt)("b",null,"accountNumber"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/account-number"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountNumber!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"account number")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"sepadirectdebitdebtor-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/sepadirect-debit-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitDebtor"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sepa Direct Debit Debtor")))}k.isMDXComponent=!0}}]);