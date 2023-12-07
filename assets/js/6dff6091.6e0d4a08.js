"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,p=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?a.createElement(p,l(l({ref:t},s),{},{components:n})):a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45208:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const l={id:"international-credit-transfer-quote",title:"InternationalCreditTransferQuote",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/objects/international-credit-transfer-quote",id:"api-reference/objects/international-credit-transfer-quote",title:"InternationalCreditTransferQuote",description:"COMING SOON",source:"@site/docs/api-reference/objects/international-credit-transfer-quote.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/international-credit-transfer-quote",permalink:"/api-reference/objects/international-credit-transfer-quote",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/international-credit-transfer-quote.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-quote",title:"InternationalCreditTransferQuote",hide_table_of_contents:!1}},d={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferQuote.<b>exchangeRate</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransferquotebexchangeratebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferQuote.<b>sourceAmount</b></code><Bullet /><code>Amount!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransferquotebsourceamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferQuote.<b>targetAmount</b></code><Bullet /><code>Amount!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransferquotebtargetamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferQuote.<b>feesAmount</b></code><Bullet /><code>Amount!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransferquotebfeesamountbcodeamount--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,d]=(0,r.useState)(i);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},b={Bullet:s,SpecifiedBy:u,Badge:f,toc:m,Details:p},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"COMING SOON"),"\nInternational Quote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternationalCreditTransferQuote {\n  exchangeRate: String!\n  sourceAmount: Amount!\n  targetAmount: Amount!\n  feesAmount: Amount!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquotebexchangeratebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferQuote.",(0,o.kt)("b",null,"exchangeRate"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rate of the quote")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquotebsourceamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferQuote.",(0,o.kt)("b",null,"sourceAmount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source amount of the quote")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquotebtargetamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferQuote.",(0,o.kt)("b",null,"targetAmount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"target amount of the quote")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquotebfeesamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferQuote.",(0,o.kt)("b",null,"feesAmount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Fees")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/queries/international-credit-transfer-quote"},(0,o.kt)("inlineCode",{parentName:"a"},"internationalCreditTransferQuote")),"  ",(0,o.kt)(f,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/initiate-international-credit-transfer-response-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateInternationalCreditTransferResponseSuccessPayload")),"  ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);