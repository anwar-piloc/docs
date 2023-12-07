"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[23128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(a),g=r,u=b["".concat(c,".").concat(g)]||b[g]||m[g]||o;return a?n.createElement(u,d(d({ref:t},s),{},{components:a})):n.createElement(u,d({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[b]="string"==typeof e?e:r,d[1]=i;for(var l=2;l<o;l++)d[l]=a[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},82099:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var n=a(87462),r=a(67294),o=a(3905);const d={id:"internal-direct-debit-transaction",title:"InternalDirectDebitTransaction",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/objects/internal-direct-debit-transaction",id:"api-reference/objects/internal-direct-debit-transaction",title:"InternalDirectDebitTransaction",description:"Internal Direct Debit transaction",source:"@site/docs/api-reference/objects/internal-direct-debit-transaction.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-direct-debit-transaction",permalink:"/api-reference/objects/internal-direct-debit-transaction",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-direct-debit-transaction.mdx",tags:[],version:"current",frontMatter:{id:"internal-direct-debit-transaction",title:"InternalDirectDebitTransaction",hide_table_of_contents:!1}},l={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>paymentMethodIdentifier</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentmethodidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>side</b></code><Bullet /><code>TransactionSide!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbsidebcodetransactionside--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>type</b></code><Bullet /><code>TransactionTypeEnum!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbtypebcodetransactiontypeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>label</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>statusInfo</b></code><Bullet /><code>TransactionStatusInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbstatusinfobcodetransactionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>paymentId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>payment</b></code><Bullet /><code>Payment</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentbcodepayment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>counterparty</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbcounterpartybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>bookedBalanceAfter</b></code><Bullet /><code>Amount</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbbookedbalanceafterbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>paymentProduct</b></code><Bullet /><code>PaymentProduct!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentproductbcodepaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>creditor</b></code><Bullet /><code>InternalDirectDebitCreditor!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbcreditorbcodeinternaldirectdebitcreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>debtor</b></code><Bullet /><code>InternalDirectDebitDebtor!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbdebtorbcodeinternaldirectdebitdebtor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>account</b></code><Bullet /><code>Account</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>mandate</b></code><Bullet /><code>InternalDirectDebitMandate</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbmandatebcodeinternaldirectdebitmandate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbexecutiondatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>originTransactionId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionborigintransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>originTransaction</b></code><Bullet /><code>Transaction</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionborigintransactionbcodetransaction-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>reservedAmount</b></code><Bullet /><code>Amount</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbreservedamountbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>reservedAmountReleasedAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbreservedamountreleasedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitTransaction.<b>returnReason</b></code><Bullet /><code>TransactionReasonCode</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-internaldirectdebittransactionbreturnreasonbcodetransactionreasoncode-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="badge badge--secondary" text="interface"/>',id:"transaction-",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:i=!1}=e;const[c,l]=(0,r.useState)(i);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},p={Bullet:s,SpecifiedBy:b,Badge:m,toc:g,Details:u},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Internal Direct Debit transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalDirectDebitTransaction implements Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  creditor: InternalDirectDebitCreditor!\n  debtor: InternalDirectDebitDebtor!\n  account: Account\n  mandate: InternalDirectDebitMandate\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n  reservedAmount: Amount\n  reservedAmountReleasedAt: DateTime\n  returnReason: TransactionReasonCode\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"unique identifier of the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbreferencebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"reference"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentmethodidentifierbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"paymentMethodIdentifier"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment method identifier used for this transaction: accountNumber")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbsidebcodetransactionside--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"side"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-side"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionSide!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"side (Credit or Debit)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbtypebcodetransactiontypeenum--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-type-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionTypeEnum!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"amount")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionblabelbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"label"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"label")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbstatusinfobcodetransactionstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"paymentId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the payment associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentbcodepayment-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"payment"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"Payment"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"updated date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbcounterpartybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"counterparty"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ...")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbbookedbalanceafterbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"bookedBalanceAfter"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"booked balance after this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbpaymentproductbcodepaymentproduct--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"paymentProduct"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/payment-product"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentProduct!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment product used for this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbcreditorbcodeinternaldirectdebitcreditor--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"creditor"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-direct-debit-creditor"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitCreditor!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"creditor information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbdebtorbcodeinternaldirectdebitdebtor--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"debtor"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-direct-debit-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitDebtor!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"debtor information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbaccountbcodeaccount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"account"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"matching account for the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbmandatebcodeinternaldirectdebitmandate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"mandate"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/internal-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitMandate"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"matching Internal mandate for the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbexternalreferencebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"externalReference"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that was defined by you when you created this transaction."),(0,o.kt)("p",{parentName:"blockquote"},"For example, you can define it in the CreditTransferInput mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbexecutiondatebcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"executionDate"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbrequestedexecutionatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"requestedExecutionAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a date that reflects the time at which the user asked the transaction to be executed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionborigintransactionidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"originTransactionId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the origin transaction associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionborigintransactionbcodetransaction-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"originTransaction"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"origin transaction associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbreservedamountbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"reservedAmount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"reserved amount of the transaction computed with the rolling reserve.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbreservedamountreleasedatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"reservedAmountReleasedAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"date on which reserved funds become available.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebittransactionbreturnreasonbcodetransactionreasoncode-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitTransaction.",(0,o.kt)("b",null,"returnReason"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-reason-code"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionReasonCode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"r-transaction reason")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"transaction-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Transaction")))}y.isMDXComponent=!0}}]);