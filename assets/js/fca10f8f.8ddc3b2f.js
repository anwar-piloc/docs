"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),i=u(n),m=r,f=i["".concat(d,".").concat(m)]||i[m]||s[m]||c;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[i]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82722:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(83117),r=n(67294),c=n(3905);const l={id:"add-or-update-external-account-balance-input",title:"AddOrUpdateExternalAccountBalanceInput",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/inputs/add-or-update-external-account-balance-input",id:"api-reference/inputs/add-or-update-external-account-balance-input",title:"AddOrUpdateExternalAccountBalanceInput",description:"No description",source:"@site/docs/api-reference/inputs/add-or-update-external-account-balance-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-or-update-external-account-balance-input",permalink:"/api-reference/inputs/add-or-update-external-account-balance-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-or-update-external-account-balance-input.mdx",tags:[],version:"current",frontMatter:{id:"add-or-update-external-account-balance-input",title:"AddOrUpdateExternalAccountBalanceInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddMerchantProfileInput",permalink:"/api-reference/inputs/add-merchant-profile-input"},next:{title:"AddReceivedInternalDirectDebitB2bMandateInput",permalink:"/api-reference/inputs/add-received-internal-direct-debit-b2-b-mandate-input"}},u={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddOrUpdateExternalAccountBalanceInput.<b>externalAccountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputbexternalaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddOrUpdateExternalAccountBalanceInput.<b>amount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputbamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddOrUpdateExternalAccountBalanceInput.<b>type</b></code><Bullet /><code>ExternalAccountBalanceType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputbtypebcodeexternalaccountbalancetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddOrUpdateExternalAccountBalanceInput.<b>lastChangedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputblastchangedatbcodedatetime--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:i,SpecifiedBy:s,Badge:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddOrUpdateExternalAccountBalanceInput {\n  externalAccountId: ID!\n  amount: AmountInput!\n  type: ExternalAccountBalanceType!\n  lastChangedAt: DateTime!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputbexternalaccountidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddOrUpdateExternalAccountBalanceInput.",(0,c.kt)("b",null,"externalAccountId"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"unique identifier of a given external account")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputbamountbcodeamountinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddOrUpdateExternalAccountBalanceInput.",(0,c.kt)("b",null,"amount"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Amount of the balance")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputbtypebcodeexternalaccountbalancetype--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddOrUpdateExternalAccountBalanceInput.",(0,c.kt)("b",null,"type"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/external-account-balance-type"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalanceType!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Type of the balance")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addorupdateexternalaccountbalanceinputblastchangedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddOrUpdateExternalAccountBalanceInput.",(0,c.kt)("b",null,"lastChangedAt"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Last changed Date")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-or-update-external-account-balance"},(0,c.kt)("inlineCode",{parentName:"a"},"addOrUpdateExternalAccountBalance")),"  ",(0,c.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);