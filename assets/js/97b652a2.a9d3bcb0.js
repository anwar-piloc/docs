"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(a),u=o,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(k,c(c({ref:t},d),{},{components:a})):n.createElement(k,c({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},45972:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=a(83117),o=a(67294),r=a(3905);const c={id:"transaction",title:"Transaction",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/interfaces/transaction",id:"api-reference/interfaces/transaction",title:"Transaction",description:"Transaction",source:"@site/docs/api-reference/interfaces/transaction.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/transaction",permalink:"/api-reference/interfaces/transaction",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/transaction.mdx",tags:[],version:"current",frontMatter:{id:"transaction",title:"Transaction",hide_table_of_contents:!1}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>paymentMethodIdentifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbpaymentmethodidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>side</b></code><Bullet /><code>TransactionSide!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-transactionbsidebcodetransactionside--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>type</b></code><Bullet /><code>TransactionTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-transactionbtypebcodetransactiontypeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>label</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>statusInfo</b></code><Bullet /><code>TransactionStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-transactionbstatusinfobcodetransactionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>paymentId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbpaymentidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>payment</b></code><Bullet /><code>Payment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbpaymentbcodepayment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>counterparty</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbcounterpartybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>bookedBalanceAfter</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbbookedbalanceafterbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>paymentProduct</b></code><Bullet /><code>PaymentProduct!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-transactionbpaymentproductbcodepaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbexecutiondatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>originTransactionId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionborigintransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>originTransaction</b></code><Bullet /><code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-transactionborigintransactionbcodetransaction-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:m,SpecifiedBy:p,Badge:u},y="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  account: Account\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbreferencebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"external identifier of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbpaymentmethodidentifierbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"paymentMethodIdentifier"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbsidebcodetransactionside--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"side"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-side"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionSide!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"side (Credit or Debit)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbtypebcodetransactiontypeenum--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"type"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-type-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionTypeEnum!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"type")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbamountbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"amount")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionblabelbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"label"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"label")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbstatusinfobcodetransactionstatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"status information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbpaymentidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"paymentId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the payment associated to this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbpaymentbcodepayment-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"payment"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment"},(0,r.kt)("inlineCode",{parentName:"a"},"Payment"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"payment associated to this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"created date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"updated date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbcounterpartybcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"counterparty"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ...")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbbookedbalanceafterbcodeamount-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"bookedBalanceAfter"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"booked balance after this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbpaymentproductbcodepaymentproduct--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"paymentProduct"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/payment-product"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentProduct!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"payment product used for this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbaccountbcodeaccount-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"account"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"matching account for this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbexternalreferencebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"externalReference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that was defined by you when you created this transaction.")),(0,r.kt)("p",null,"For example, you can define it in the CreditTransferInput mutation."),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbexecutiondatebcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"executionDate"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionbrequestedexecutionatbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"requestedExecutionAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a date that reflects the time at which the user asked the transaction to be executed")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionborigintransactionidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"originTransactionId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the origin transaction associated to this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionborigintransactionbcodetransaction-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,r.kt)("b",null,"originTransaction"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"origin transaction associated to this transaction")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/queries/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"transaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/check-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"FeeTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/international-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"InternationalTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/interfaces/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/transaction-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionEdge")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/check-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"FeeTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/international-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"InternationalTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);