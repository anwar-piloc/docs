"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),h=s(a),b=r,u=h["".concat(c,".").concat(b)]||h[b]||p[b]||n;return a?o.createElement(u,d(d({ref:t},i),{},{components:a})):o.createElement(u,d({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,d=new Array(n);d[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<n;s++)d[s]=a[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},54344:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>b});var o=a(87462),r=a(67294),n=a(3905);const d={id:"shareholder",title:"Shareholder",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/shareholder",id:"api-reference/objects/shareholder",title:"Shareholder",description:"Shareholder of a company creating a Capital Deposit Case",source:"@site/docs/api-reference/objects/shareholder.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/shareholder",permalink:"/api-reference/objects/shareholder",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/shareholder.mdx",tags:[],version:"current",frontMatter:{id:"shareholder",title:"Shareholder",hide_table_of_contents:!1}},s={},i=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>capitalDepositAmount</b></code><Bullet /><code>Amount!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbcapitaldepositamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>onboarding</b></code><Bullet /><code>Onboarding</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbonboardingbcodeonboarding-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>accountId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbaccountidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>status</b></code><Bullet /><code>ShareholderStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-shareholderbstatusbcodeshareholderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>info</b></code><Bullet /><code>ShareholderInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="union"/>',id:"code-style-fontweight-normal-shareholderbinfobcodeshareholderinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>documents</b></code><Bullet /><code>[CapitalDepositDocument!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbdocumentsbcodecapitaldepositdocument--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>relatedCapitalDepositCase</b></code><Bullet /><code>CapitalDepositCase!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbrelatedcapitaldepositcasebcodecapitaldepositcase--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[c,s]=(0,r.useState)(l);return(0,n.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},m={Bullet:i,SpecifiedBy:h,Badge:p,toc:b,Details:u},g="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Shareholder of a company creating a Capital Deposit Case"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Shareholder {\n  id: ID!\n  capitalDepositAmount: Amount!\n  onboarding: Onboarding\n  accountId: String\n  status: ShareholderStatus!\n  info: ShareholderInfo!\n  documents: [CapitalDepositDocument!]!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  relatedCapitalDepositCase: CapitalDepositCase!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"id"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unique identifier of a shareholder.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbcapitaldepositamountbcodeamount--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"capitalDepositAmount"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,n.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amount the shareholder has to deposit.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbonboardingbcodeonboarding-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"onboarding"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/onboarding"},(0,n.kt)("inlineCode",{parentName:"a"},"Onboarding"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Onboarding information of the shareholder.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbaccountidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"accountId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unique identifier of the shareholder account.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbstatusbcodeshareholderstatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"status"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/enums/shareholder-status"},(0,n.kt)("inlineCode",{parentName:"a"},"ShareholderStatus!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Status of the shareholder during the process with Swan.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbinfobcodeshareholderinfo--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"info"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/unions/shareholder-info"},(0,n.kt)("inlineCode",{parentName:"a"},"ShareholderInfo!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Extra information about the shareholder")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbdocumentsbcodecapitaldepositdocument--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"documents"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/capital-deposit-document"},(0,n.kt)("inlineCode",{parentName:"a"},"[CapitalDepositDocument!]!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Shareholder documents for the capital deposit case")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Created date")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbupdatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Updated date")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbrelatedcapitaldepositcasebcodecapitaldepositcase--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"relatedCapitalDepositCase"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/capital-deposit-case"},(0,n.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Information about capital deposit case.")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/queries/shareholder"},(0,n.kt)("inlineCode",{parentName:"a"},"shareholder")),"  ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member Of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case"},(0,n.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase")),"  ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document"},(0,n.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocument")),"  ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);