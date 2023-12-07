"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95170],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=i(a),p=c,f=b["".concat(s,".").concat(p)]||b[p]||u[p]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:c,o[1]=l;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},55140:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),c=a(67294),r=a(3905);const o={id:"balance",title:"Balance",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/balance",id:"api-reference/objects/balance",title:"Balance",description:"Balance Information",source:"@site/docs/api-reference/objects/balance.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/balance",permalink:"/api-reference/objects/balance",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/balance.mdx",tags:[],version:"current",frontMatter:{id:"balance",title:"Balance",hide_table_of_contents:!1}},i={},d=()=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(c.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>account</b></code><Bullet /><code>Account!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-balancebaccountbcodeaccount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>balances</b></code><Bullet /><code>AccountBalances</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-balancebbalancesbcodeaccountbalances-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>lastSctOut</b></code><Bullet /><code>SEPACreditTransferTransaction</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-balanceblastsctoutbcodesepacredittransfertransaction-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>lastSctIn</b></code><Bullet /><code>SEPACreditTransferTransaction</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-balanceblastsctinbcodesepacredittransfertransaction-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[s,i]=(0,c.useState)(l);return(0,r.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},m={Bullet:d,SpecifiedBy:b,Badge:u,toc:p,Details:f},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Balance Information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Balance {\n  account: Account!\n  balances: AccountBalances\n  lastSctOut: SEPACreditTransferTransaction\n  lastSctIn: SEPACreditTransferTransaction\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-balancebaccountbcodeaccount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,r.kt)("b",null,"account"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Matching account for this balance")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-balancebbalancesbcodeaccountbalances-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,r.kt)("b",null,"balances"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-balances"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountBalances"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A list of balances regarding an account.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-balanceblastsctoutbcodesepacredittransfertransaction-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,r.kt)("b",null,"lastSctOut"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last SCT OUT transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-balanceblastsctinbcodesepacredittransfertransaction-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,r.kt)("b",null,"lastSctIn"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last SCT IN transaction")))}y.isMDXComponent=!0}}]);