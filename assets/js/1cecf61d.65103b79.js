"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,u=p["".concat(i,".").concat(y)]||p[y]||m[y]||o;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46568:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=n(87462),r=n(67294),o=n(3905);const l={id:"payments",title:"payments",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/queries/payments",id:"api-reference/queries/payments",title:"payments",description:"Returns the list of payments.",source:"@site/docs/api-reference/queries/payments.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/payments",permalink:"/api-reference/queries/payments",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/payments.mdx",tags:[],version:"current",frontMatter:{id:"payments",title:"payments",hide_table_of_contents:!1}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>payments.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>payments.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>payments.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentsbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>payments.<b>orderBy</b></code><Bullet /><code>PaymentOrderByInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentsborderbybcodepaymentorderbyinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>payments.<b>filters</b></code><Bullet /><code>PaymentFiltersInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentsbfiltersbcodepaymentfiltersinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>PaymentConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"paymentconnection-",level:4}],u=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:s=!1}=e;const[i,c]=(0,r.useState)(s);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},f={Bullet:d,SpecifiedBy:p,Badge:m,toc:y,Details:u},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the list of payments."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For a Project access token, this is all the payments of the project and for an User access token, these are the payments initiated by the user")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"payments(\n  first: Int! = 50\n  after: String\n  before: String\n  orderBy: PaymentOrderByInput\n  filters: PaymentFiltersInput\n): PaymentConnection!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentsbfirstbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"payments.",(0,o.kt)("b",null,"first"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"payments.",(0,o.kt)("b",null,"after"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentsbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"payments.",(0,o.kt)("b",null,"before"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to end before a element")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentsborderbybcodepaymentorderbyinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"payments.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/payment-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentOrderByInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be ordered")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentsbfiltersbcodepaymentfiltersinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"payments.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/payment-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentFiltersInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"paymentconnection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentConnection"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please see the Connection interface")))}g.isMDXComponent=!0}}]);