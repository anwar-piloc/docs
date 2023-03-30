"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15730],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(a),u=o,h=k["".concat(i,".").concat(u)]||k[u]||m[u]||c;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,r=new Array(c);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[k]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<c;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16154:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return u},Bullet:function(){return k},SpecifiedBy:function(){return m},assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return d}});var n=a(83117),o=a(67294),c=a(3905);const r={id:"check-transaction",title:"CheckTransaction",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/objects/check-transaction",id:"api/objects/check-transaction",title:"CheckTransaction",description:"Check transaction",source:"@site/docs/api/objects/check-transaction.mdx",sourceDirName:"api/objects",slug:"/api/objects/check-transaction",permalink:"/docs/api/objects/check-transaction",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/check-transaction.mdx",tags:[],version:"current",frontMatter:{id:"check-transaction",title:"CheckTransaction",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CheckMerchantPaymentProduct",permalink:"/docs/api/objects/check-merchant-payment-product"},next:{title:"CloseAccountReason",permalink:"/docs/api/objects/close-account-reason"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>paymentMethodIdentifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbpaymentmethodidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>side</b></code><Bullet /><code>TransactionSide!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-checktransactionbsidebcodetransactionside--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>type</b></code><Bullet /><code>TransactionTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-checktransactionbtypebcodetransactiontypeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checktransactionbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>label</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>statusInfo</b></code><Bullet /><code>TransactionStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-checktransactionbstatusinfobcodetransactionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>paymentId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbpaymentidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>payment</b></code><Bullet /><code>Payment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checktransactionbpaymentbcodepayment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>counterparty</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbcounterpartybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>bookedBalanceAfter</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checktransactionbbookedbalanceafterbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>paymentProduct</b></code><Bullet /><code>PaymentProduct!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-checktransactionbpaymentproductbcodepaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>creditor</b></code><Bullet /><code>InternalDirectDebitCreditor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checktransactionbcreditorbcodeinternaldirectdebitcreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checktransactionbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbexecutiondatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>originTransactionId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checktransactionborigintransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckTransaction.<b>originTransaction</b></code><Bullet /><code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-checktransactionborigintransactionbcodetransaction-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"transaction-",level:4}],k=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:d,Bullet:k,SpecifiedBy:m,Badge:u},p="wrapper";function y(e){let{components:t,...a}=e;return(0,c.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Check transaction"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CheckTransaction implements Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  creditor: InternalDirectDebitCreditor!\n  account: Account\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"id"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"unique identifier of the transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbreferencebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"reference"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain.")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbpaymentmethodidentifierbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"paymentMethodIdentifier"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"payment method identifier used for this transaction: accountNumber")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbsidebcodetransactionside--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"side"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/transaction-side"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionSide!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"side (Credit or Debit)")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbtypebcodetransactiontypeenum--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"type"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/transaction-type-enum"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionTypeEnum!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"type")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbamountbcodeamount--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"amount"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,c.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"amount")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionblabelbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"label"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"label")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbstatusinfobcodetransactionstatusinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"statusInfo"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/transaction-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"status information")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbpaymentidbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"paymentId"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"ID of the payment associated to this transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbpaymentbcodepayment-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"payment"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/payment"},(0,c.kt)("inlineCode",{parentName:"a"},"Payment"))," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"payment associated to this transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbcreatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"createdAt"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"created date")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbupdatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"updatedAt"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"updated date")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbcounterpartybcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"counterparty"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ...")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbbookedbalanceafterbcodeamount-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"bookedBalanceAfter"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,c.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"booked balance after this transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbpaymentproductbcodepaymentproduct--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"paymentProduct"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentProduct!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"payment product used for this transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbcreditorbcodeinternaldirectdebitcreditor--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"creditor"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/internal-direct-debit-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitCreditor!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"creditor information")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbaccountbcodeaccount-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"account"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"matching account for the transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbexternalreferencebcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"externalReference"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that was defined by you when you created this transaction.")),(0,c.kt)("p",null,"For example, you can define it in the CreditTransferInput mutation."),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbexecutiondatebcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"executionDate"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions.")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionbrequestedexecutionatbcodedatetime-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"requestedExecutionAt"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"a date that reflects the time at which the user asked the transaction to be executed")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionborigintransactionidbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"originTransactionId"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"ID of the origin transaction associated to this transaction")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-checktransactionborigintransactionbcodetransaction-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CheckTransaction.",(0,c.kt)("b",null,"originTransaction"))),(0,c.kt)(k,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"origin transaction associated to this transaction")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"transaction-"},(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Transaction")))}y.isMDXComponent=!0}}]);