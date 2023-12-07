"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[7096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,g=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90247:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var a=n(87462),r=n(67294),o=n(3905);const l={id:"account-holder-filter-input",title:"AccountHolderFilterInput",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/inputs/account-holder-filter-input",id:"api-reference/inputs/account-holder-filter-input",title:"AccountHolderFilterInput",description:"No description",source:"@site/docs/api-reference/inputs/account-holder-filter-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/account-holder-filter-input",permalink:"/api-reference/inputs/account-holder-filter-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/account-holder-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-filter-input",title:"AccountHolderFilterInput",hide_table_of_contents:!1}},d={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>status</b></code><Bullet /><code>[AccountHolderStatus!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderfilterinputbstatusbcodeaccountholderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>types</b></code><Bullet /><code>[AccountHolderType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderfilterinputbtypesbcodeaccountholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>verificationStatus</b></code><Bullet /><code>[VerificationStatus!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderfilterinputbverificationstatusbcodeverificationstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>search</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderfilterinputbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>firstName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderfilterinputbfirstnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>lastName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderfilterinputblastnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>birthDate</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderfilterinputbbirthdatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderFilterInput.<b>registrationNumber</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderfilterinputbregistrationnumberbcodestring-",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:c=!1}=e;const[i,d]=(0,r.useState)(c);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},m={Bullet:s,SpecifiedBy:u,Badge:p,toc:f,Details:g},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AccountHolderFilterInput {\n  status: [AccountHolderStatus!]\n  types: [AccountHolderType!]\n  verificationStatus: [VerificationStatus!]\n  search: String\n  firstName: String\n  lastName: String\n  birthDate: String\n  registrationNumber: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbstatusbcodeaccountholderstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"status"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-status"},(0,o.kt)("inlineCode",{parentName:"a"},"[AccountHolderStatus!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbtypesbcodeaccountholdertype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"types"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[AccountHolderType!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbverificationstatusbcodeverificationstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"verificationStatus"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/verification-status"},(0,o.kt)("inlineCode",{parentName:"a"},"[VerificationStatus!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbsearchbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"search"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Searches company name, first name, last name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbfirstnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"firstName"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputblastnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"lastName"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbbirthdatebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"birthDate"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountholderfilterinputbregistrationnumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderFilterInput.",(0,o.kt)("b",null,"registrationNumber"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/queries/account-holders"},(0,o.kt)("inlineCode",{parentName:"a"},"accountHolders")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);