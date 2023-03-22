"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80775],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(a),b=d,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,i=new Array(r);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:d,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},57979:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return b},Bullet:function(){return p},SpecifiedBy:function(){return u},assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var n=a(83117),d=a(67294),r=a(3905);const i={id:"add-received-sepa-direct-debit-b2-b-mandate-input",title:"AddReceivedSepaDirectDebitB2bMandateInput",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api/inputs/add-received-sepa-direct-debit-b2-b-mandate-input",id:"api/inputs/add-received-sepa-direct-debit-b2-b-mandate-input",title:"AddReceivedSepaDirectDebitB2bMandateInput",description:"Inputs to add a received sepa direct debit mandate B2b.",source:"@site/docs/api/inputs/add-received-sepa-direct-debit-b2-b-mandate-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/add-received-sepa-direct-debit-b2-b-mandate-input",permalink:"/docs/api/inputs/add-received-sepa-direct-debit-b2-b-mandate-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/add-received-sepa-direct-debit-b2-b-mandate-input.mdx",tags:[],version:"current",frontMatter:{id:"add-received-sepa-direct-debit-b2-b-mandate-input",title:"AddReceivedSepaDirectDebitB2bMandateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddOrUpdateExternalAccountBalanceInput",permalink:"/docs/api/inputs/add-or-update-external-account-balance-input"},next:{title:"AddSingleUseVirtualCardInput",permalink:"/docs/api/inputs/add-single-use-virtual-card-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>mandateReference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbmandatereferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>creditorIdentifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbcreditoridentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>creditorName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbcreditornamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>iban</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>sequence</b></code><Bullet /><code>SEPAReceivedDirectDebitMandateSequence!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbsequencebcodesepareceiveddirectdebitmandatesequence--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>signatureDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbsignaturedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddReceivedSepaDirectDebitB2bMandateInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:u,Badge:b},f="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to add a received sepa direct debit mandate B2b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddReceivedSepaDirectDebitB2bMandateInput {\n  mandateReference: String!\n  creditorIdentifier: String!\n  creditorName: String!\n  iban: String!\n  name: String\n  sequence: SEPAReceivedDirectDebitMandateSequence!\n  signatureDate: Date\n  consentRedirectUrl: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbmandatereferencebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"mandateReference"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The unique identifier of the received direct debit mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbcreditoridentifierbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"creditorIdentifier"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Sepa Creditor Identifier of the creditor")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbcreditornamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"creditorName"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the creditor")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbibanbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"iban"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Swan Iban of the debtor")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Label that will be displayed along with this received direct debit mandate in the web banking")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbsequencebcodesepareceiveddirectdebitmandatesequence--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"sequence"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/separeceived-direct-debit-mandate-sequence"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandateSequence!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sequence of the mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbsignaturedatebcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"signatureDate"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Date of signature of the mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addreceivedsepadirectdebitb2bmandateinputbconsentredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddReceivedSepaDirectDebitB2bMandateInput.",(0,r.kt)("b",null,"consentRedirectUrl"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/add-received-sepa-direct-debit-b2-b-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"addReceivedSepaDirectDebitB2bMandate")),"  ",(0,r.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);