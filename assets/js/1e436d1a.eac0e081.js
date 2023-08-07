"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),h=s(a),u=r,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||n;return a?o.createElement(m,l(l({ref:t},i),{},{components:a})):o.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[h]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54344:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>h,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var o=a(83117),r=a(67294),n=a(3905);const l={id:"shareholder",title:"Shareholder",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/objects/shareholder",id:"api-reference/objects/shareholder",title:"Shareholder",description:"Shareholder of a company creating a Capital Deposit Case",source:"@site/docs/api-reference/objects/shareholder.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/shareholder",permalink:"/api-reference/objects/shareholder",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/shareholder.mdx",tags:[],version:"current",frontMatter:{id:"shareholder",title:"Shareholder",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>capitalDepositAmount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbcapitaldepositamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>onboarding</b></code><Bullet /><code>Onboarding</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbonboardingbcodeonboarding-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>accountId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbaccountidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>status</b></code><Bullet /><code>ShareholderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-shareholderbstatusbcodeshareholderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>info</b></code><Bullet /><code>ShareholderInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-shareholderbinfobcodeshareholderinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>documents</b></code><Bullet /><code>[CapitalDepositDocument!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-shareholderbdocumentsbcodecapitaldepositdocument--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Shareholder.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-shareholderbupdatedatbcodedatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],h=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:h,SpecifiedBy:p,Badge:u},f="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Shareholder of a company creating a Capital Deposit Case"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Shareholder {\n  id: ID!\n  capitalDepositAmount: Amount!\n  onboarding: Onboarding\n  accountId: String\n  status: ShareholderStatus!\n  info: ShareholderInfo!\n  documents: [CapitalDepositDocument!]!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"id"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unique identifier of a shareholder.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbcapitaldepositamountbcodeamount--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"capitalDepositAmount"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,n.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amount the shareholder has to deposit.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbonboardingbcodeonboarding-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"onboarding"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/onboarding"},(0,n.kt)("inlineCode",{parentName:"a"},"Onboarding"))," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Onboarding information of the shareholder.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbaccountidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"accountId"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unique identifier of the shareholder account.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbstatusbcodeshareholderstatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"status"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/enums/shareholder-status"},(0,n.kt)("inlineCode",{parentName:"a"},"ShareholderStatus!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Status of the shareholder during the process with Swan.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbinfobcodeshareholderinfo--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"info"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/unions/shareholder-info"},(0,n.kt)("inlineCode",{parentName:"a"},"ShareholderInfo!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Extra information about the shareholder")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbdocumentsbcodecapitaldepositdocument--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"documents"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/capital-deposit-document"},(0,n.kt)("inlineCode",{parentName:"a"},"[CapitalDepositDocument!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Shareholder documents for the capital deposit case")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Created date")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-shareholderbupdatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Shareholder.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Updated date")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/queries/shareholder"},(0,n.kt)("inlineCode",{parentName:"a"},"shareholder")),"  ",(0,n.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case"},(0,n.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);