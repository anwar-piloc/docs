"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33718],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),i=u(n),m=c,y=i["".concat(d,".").concat(m)]||i[m]||p[m]||o;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[i]="string"==typeof e?e:c,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14324:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return m},Bullet:function(){return i},SpecifiedBy:function(){return p},assets:function(){return u},contentTitle:function(){return r},default:function(){return x},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(83117),c=n(67294),o=n(3905);const l={id:"add-external-account-input",title:"AddExternalAccountInput",hide_table_of_contents:!1},r=void 0,d={unversionedId:"api/inputs/add-external-account-input",id:"api/inputs/add-external-account-input",title:"AddExternalAccountInput",description:"No description",source:"@site/docs/api/inputs/add-external-account-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/add-external-account-input",permalink:"/docs/api/inputs/add-external-account-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/add-external-account-input.mdx",tags:[],version:"current",frontMatter:{id:"add-external-account-input",title:"AddExternalAccountInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddExternalAccountBalanceInput",permalink:"/docs/api/inputs/add-external-account-balance-input"},next:{title:"AddFundingLimitSettingsChangeRequestInput",permalink:"/docs/api/inputs/add-funding-limit-settings-change-request-input"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>accountHolderId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbaccountholderidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>externalId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbexternalidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>cashAccountType</b></code><Bullet /><code>CashAccountType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-addexternalaccountinputbcashaccounttypebcodecashaccounttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>BIC</b></code><Bullet /><code>BIC!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbbicbcodebic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>IBAN</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>currency</b></code><Bullet /><code>Currency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbcurrencybcodecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>holderName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbholdernamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>country</b></code><Bullet /><code>CCA3!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbcountrybcodecca3--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>originalCreatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputboriginalcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>usage</b></code><Bullet /><code>ExternalAccountUsage!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-addexternalaccountinputbusagebcodeexternalaccountusage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>source</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addexternalaccountinputbsourcebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountInput.<b>balances</b></code><Bullet /><code>[ExternalAccountBalanceInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addexternalaccountinputbbalancesbcodeexternalaccountbalanceinput--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(c.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:i,SpecifiedBy:p,Badge:m},k="wrapper";function x(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddExternalAccountInput {\n  accountHolderId: ID!\n  externalId: String!\n  name: String\n  cashAccountType: CashAccountType!\n  BIC: BIC!\n  IBAN: IBAN!\n  currency: Currency!\n  holderName: String!\n  country: CCA3!\n  originalCreatedAt: DateTime!\n  usage: ExternalAccountUsage!\n  source: String!\n  balances: [ExternalAccountBalanceInput!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbaccountholderidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"accountHolderId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier of a given account holder")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbexternalidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"externalId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"External account identifier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Name of the account")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbcashaccounttypebcodecashaccounttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"cashAccountType"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/cash-account-type"},(0,o.kt)("inlineCode",{parentName:"a"},"CashAccountType!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of account")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbbicbcodebic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"BIC"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/bic"},(0,o.kt)("inlineCode",{parentName:"a"},"BIC!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bank Identifier Code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbibanbcodeiban--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"IBAN"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/iban"},(0,o.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"International Bank Account Number")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbcurrencybcodecurrency--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"currency"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,o.kt)("inlineCode",{parentName:"a"},"Currency!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currency")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbholdernamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"holderName"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account Holder name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbcountrybcodecca3--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"country"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/cca3"},(0,o.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Country")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputboriginalcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"originalCreatedAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Original Created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbusagebcodeexternalaccountusage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"usage"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/external-account-usage"},(0,o.kt)("inlineCode",{parentName:"a"},"ExternalAccountUsage!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usage information of the account")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbsourcebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"source"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source of the account information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountinputbbalancesbcodeexternalaccountbalanceinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountInput.",(0,o.kt)("b",null,"balances"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/external-account-balance-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[ExternalAccountBalanceInput!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Balances")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/add-external-account"},(0,o.kt)("inlineCode",{parentName:"a"},"addExternalAccount")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);