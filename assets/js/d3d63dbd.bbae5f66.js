"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[74181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),y=o,k=m["".concat(d,".").concat(y)]||m[y]||u[y]||r;return a?n.createElement(k,c(c({ref:t},i),{},{components:a})):n.createElement(k,c({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},64452:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var n=a(83117),o=a(67294),r=a(3905);const c={id:"card-transaction",title:"CardTransaction",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/card-transaction",id:"api-reference/objects/card-transaction",title:"CardTransaction",description:"Card transaction",source:"@site/docs/api-reference/objects/card-transaction.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/card-transaction",permalink:"/api-reference/objects/card-transaction",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/card-transaction.mdx",tags:[],version:"current",frontMatter:{id:"card-transaction",title:"CardTransaction",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>paymentMethodIdentifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbpaymentmethodidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>side</b></code><Bullet /><code>TransactionSide!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardtransactionbsidebcodetransactionside--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>type</b></code><Bullet /><code>TransactionTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardtransactionbtypebcodetransactiontypeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>label</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>statusInfo</b></code><Bullet /><code>TransactionStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-cardtransactionbstatusinfobcodetransactionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>paymentId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbpaymentidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>payment</b></code><Bullet /><code>Payment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionbpaymentbcodepayment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>counterparty</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbcounterpartybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>bookedBalanceAfter</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionbbookedbalanceafterbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>paymentProduct</b></code><Bullet /><code>PaymentProduct!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardtransactionbpaymentproductbcodepaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>maskedPan</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbmaskedpanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>cardId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbcardidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>card</b></code><Bullet /><code>Card!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionbcardbcodecard--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>terminalId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbterminalidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>originalAmount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionboriginalamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>currencyExchange</b></code><Bullet /><code>[ReportExchangeRate!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionbcurrencyexchangebcodereportexchangerate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>merchantId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbmerchantidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>merchantName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbmerchantnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>merchantCity</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbmerchantcitybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>merchantCountry</b></code><Bullet /><code>CCA3</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbmerchantcountrybcodecca3-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>merchantCategoryCode</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbmerchantcategorycodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>merchantCategoryDescription</b></code><Bullet /><code>MerchantCategoryDescription!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardtransactionbmerchantcategorydescriptionbcodemerchantcategorydescription--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>category</b></code><Bullet /><code>Category!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardtransactionbcategorybcodecategory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>authorizationType</b></code><Bullet /><code>AuthorizationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardtransactionbauthorizationtypebcodeauthorizationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardtransactionbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbexecutiondatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>originTransactionId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardtransactionborigintransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardTransaction.<b>originTransaction</b></code><Bullet /><code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-cardtransactionborigintransactionbcodetransaction-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"transaction-",level:4}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:m,SpecifiedBy:u,Badge:y},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Card transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardTransaction implements Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  maskedPan: String!\n  cardId: String!\n  card: Card!\n  terminalId: String!\n  originalAmount: Amount!\n  currencyExchange: [ReportExchangeRate!]!\n  merchantId: String!\n  merchantName: String!\n  merchantCity: String!\n  merchantCountry: CCA3\n  merchantCategoryCode: String!\n  merchantCategoryDescription: MerchantCategoryDescription!\n  category: Category!\n  authorizationType: AuthorizationType\n  account: Account\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbreferencebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"external identifier of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbpaymentmethodidentifierbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"paymentMethodIdentifier"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbsidebcodetransactionside--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"side"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-side"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionSide!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"side (Credit or Debit)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbtypebcodetransactiontypeenum--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"type"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-type-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionTypeEnum!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"type")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbamountbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"amount")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionblabelbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"label"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"label")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbstatusinfobcodetransactionstatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"status information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbpaymentidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"paymentId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the payment associated to this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbpaymentbcodepayment-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"payment"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment"},(0,r.kt)("inlineCode",{parentName:"a"},"Payment"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"payment associated to this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"created date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"updated date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbcounterpartybcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"counterparty"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ...")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbbookedbalanceafterbcodeamount-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"bookedBalanceAfter"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"booked balance after this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbpaymentproductbcodepaymentproduct--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"paymentProduct"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/payment-product"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentProduct!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"payment product used for this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmaskedpanbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"maskedPan"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"card numbers masked (Primary Account Number)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbcardidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"cardId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of the card")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbcardbcodecard--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"card"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/card"},(0,r.kt)("inlineCode",{parentName:"a"},"Card!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"card used for this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbterminalidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"terminalId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of the terminal")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionboriginalamountbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"originalAmount"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"original amount and currency of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbcurrencyexchangebcodereportexchangerate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"currencyExchange"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/report-exchange-rate"},(0,r.kt)("inlineCode",{parentName:"a"},"[ReportExchangeRate!]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"currency exchange if any")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmerchantidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"merchantId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of the merchant")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmerchantnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"merchantName"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"merchant name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmerchantcitybcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"merchantCity"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"merchant city")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmerchantcountrybcodecca3-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"merchantCountry"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,r.kt)("inlineCode",{parentName:"a"},"CCA3"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"merchant country")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmerchantcategorycodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"merchantCategoryCode"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"merchant category code (MCC)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbmerchantcategorydescriptionbcodemerchantcategorydescription--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"merchantCategoryDescription"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-category-description"},(0,r.kt)("inlineCode",{parentName:"a"},"MerchantCategoryDescription!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"merchant category description\nEnum that explains what the MCC corresponds to in a more readable way")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbcategorybcodecategory--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"category"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/category"},(0,r.kt)("inlineCode",{parentName:"a"},"Category!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"category of the payment flow")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbauthorizationtypebcodeauthorizationtype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"authorizationType"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/authorization-type"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationType"))," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"type of the authorization.\nOnly available for:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"authorization transaction"),(0,r.kt)("li",{parentName:"ul"},"debit transaction linked to a previous authorization transaction"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbaccountbcodeaccount-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"account"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"matching account for the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbexternalreferencebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"externalReference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that was defined by you when you created this transaction.")),(0,r.kt)("p",null,"For example, you can define it in the CreditTransferInput mutation."),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbexecutiondatebcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"executionDate"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionbrequestedexecutionatbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"requestedExecutionAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a date that reflects the time at which the user asked the transaction to be executed")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionborigintransactionidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"originTransactionId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the origin transaction associated to this transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardtransactionborigintransactionbcodetransaction-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardTransaction.",(0,r.kt)("b",null,"originTransaction"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"origin transaction associated to this transaction")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"transaction-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transaction")))}h.isMDXComponent=!0}}]);