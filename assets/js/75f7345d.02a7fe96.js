"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[57045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),g=l,f=p["".concat(d,".").concat(g)]||p[g]||u[g]||n;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},13628:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=a(83117),l=a(67294),n=a(3905);const i={id:"digital-card-filters-input",title:"DigitalCardFiltersInput",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/inputs/digital-card-filters-input",id:"api-reference/inputs/digital-card-filters-input",title:"DigitalCardFiltersInput",description:"Filters that can be applied when listing digitalCards",source:"@site/docs/api-reference/inputs/digital-card-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/digital-card-filters-input",permalink:"/api-reference/inputs/digital-card-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/digital-card-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-filters-input",title:"DigitalCardFiltersInput",hide_table_of_contents:!1}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>id</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>status</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbstatusbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>SEID</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbseidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>cardMaskedNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbcardmaskednumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>walletProviderId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbwalletprovideridbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>walletProviderName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbwalletprovidernamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardFiltersInput.<b>walletId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardfiltersinputbwalletidbcodestring-",level:4}],p=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:u,Badge:g},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Filters that can be applied when listing digitalCards"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input DigitalCardFiltersInput {\n  id: String\n  status: String\n  SEID: String\n  cardMaskedNumber: String\n  walletProviderId: String\n  walletProviderName: String\n  walletId: String\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"id"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the digitalCard")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbstatusbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"status"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The status of the digital card. It can be a CompleteDigitalCardStatus or a PendingDigitalCardStatus")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbseidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"SEID"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Secure Element ID\nMostly present on APple Devices")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbcardmaskednumberbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"cardMaskedNumber"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The digital card masker number")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbwalletprovideridbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"walletProviderId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ID of the wallet provider in the scheme system")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbwalletprovidernamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"walletProviderName"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Either ApplePay, GooglePay or Merchant")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-digitalcardfiltersinputbwalletidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardFiltersInput.",(0,n.kt)("b",null,"walletId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The wallet application ID in the user phone")))}k.isMDXComponent=!0}}]);