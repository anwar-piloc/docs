"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[8196],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var l=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,d=function(e,t){if(null==e)return{};var a,l,d={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var i=l.createContext({}),c=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,d=e.mdxType,o=e.originalType,i=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=d,b=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return a?l.createElement(b,n(n({ref:t},s),{},{components:a})):l.createElement(b,n({ref:t},s))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var o=a.length,n=new Array(o);n[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:d,n[1]=r;for(var c=2;c<o;c++)n[c]=a[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98303:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=a(87462),d=a(67294),o=a(3905);const n={id:"complete-digital-card",title:"CompleteDigitalCard",hide_table_of_contents:!1},r=void 0,i={unversionedId:"api-reference/objects/complete-digital-card",id:"api-reference/objects/complete-digital-card",title:"CompleteDigitalCard",description:"Complete Digital Card used for ApplePay or GooglePay",source:"@site/docs/api-reference/objects/complete-digital-card.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/complete-digital-card",permalink:"/api-reference/objects/complete-digital-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/complete-digital-card.mdx",tags:[],version:"current",frontMatter:{id:"complete-digital-card",title:"CompleteDigitalCard",hide_table_of_contents:!1}},c={},s=()=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(d.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-completedigitalcardbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>type</b></code><Bullet /><code>DigitalizationType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-completedigitalcardbtypebcodedigitalizationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-completedigitalcardbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-completedigitalcardbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>walletProvider</b></code><Bullet /><code>WalletProvider!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-completedigitalcardbwalletproviderbcodewalletprovider--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>device</b></code><Bullet /><code>Device!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-completedigitalcardbdevicebcodedevice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>walletId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-completedigitalcardbwalletidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>cardMaskedNumber</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-completedigitalcardbcardmaskednumberbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteDigitalCard.<b>statusInfo</b></code><Bullet /><code>CompleteDigitalCardStatusInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-completedigitalcardbstatusinfobcodecompletedigitalcardstatusinfo--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>DigitalCard</code> <Badge class="badge badge--secondary" text="interface"/>',id:"digitalcard-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:r=!1}=e;const[i,c]=(0,d.useState)(r);return(0,o.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&n)},u={Bullet:s,SpecifiedBy:p,Badge:g,toc:m,Details:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Complete Digital Card used for ApplePay or GooglePay"),(0,o.kt)("p",null,"Once the pending phase is over, more data will be available in the response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CompleteDigitalCard implements DigitalCard {\n  id: ID!\n  type: DigitalizationType!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  walletProvider: WalletProvider!\n  device: Device!\n  walletId: String\n  cardMaskedNumber: String!\n  statusInfo: CompleteDigitalCardStatusInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier of a digital card")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbtypebcodedigitalizationtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/digitalization-type"},(0,o.kt)("inlineCode",{parentName:"a"},"DigitalizationType!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of digitalization that created this digital card.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Updated date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbwalletproviderbcodewalletprovider--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"walletProvider"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/wallet-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"WalletProvider!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Wallet Provider (ApplePay, GooglePay ...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbdevicebcodedevice--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"device"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/device"},(0,o.kt)("inlineCode",{parentName:"a"},"Device!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Device\nIn case of a wallet application, some information about the device will be provided")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbwalletidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"walletId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Id of the wallet application.\nWill not be present for Merchant")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbcardmaskednumberbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"cardMaskedNumber"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Masked DPAN with the last four digits visible"),(0,o.kt)("p",{parentName:"blockquote"},"This value is present in the user wallet application")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardbstatusinfobcodecompletedigitalcardstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCard.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/complete-digital-card-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCardStatusInfo!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Digital Card status information"),(0,o.kt)("p",{parentName:"blockquote"},"In this type the status will be either ConsentPending or Pending")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"digitalcard-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/digital-card"},(0,o.kt)("inlineCode",{parentName:"a"},"DigitalCard"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Digital Card used for ApplePay or GooglePay")))}y.isMDXComponent=!0}}]);