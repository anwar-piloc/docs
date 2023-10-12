"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33624:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(83117),r=n(67294),i=n(3905);const o={id:"initiate-international-credit-transfer-input",title:"InitiateInternationalCreditTransferInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/inputs/initiate-international-credit-transfer-input",id:"api-reference/inputs/initiate-international-credit-transfer-input",title:"InitiateInternationalCreditTransferInput",description:"COMING SOON",source:"@site/docs/api-reference/inputs/initiate-international-credit-transfer-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/initiate-international-credit-transfer-input",permalink:"/api-reference/inputs/initiate-international-credit-transfer-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/initiate-international-credit-transfer-input.mdx",tags:[],version:"current",frontMatter:{id:"initiate-international-credit-transfer-input",title:"InitiateInternationalCreditTransferInput",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>accountId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbaccountidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>accountNumber</b></code><Bullet /><code>AccountNumber</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbaccountnumberbcodeaccountnumber-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>targetAmount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbtargetamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>internationalBeneficiary</b></code><Bullet /><code>InternationalBeneficiaryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbinternationalbeneficiarybcodeinternationalbeneficiaryinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>internationalCreditTransferDetails</b></code><Bullet /><code>[InternationalCreditTransferDetailsInput!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbinternationalcredittransferdetailsbcodeinternationalcredittransferdetailsinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateInternationalCreditTransferInput.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbexternalreferencebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"COMING SOON"),"\nInput to create a quote and an international beneficiary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input InitiateInternationalCreditTransferInput {\n  accountId: ID\n  accountNumber: AccountNumber\n  targetAmount: AmountInput!\n  internationalBeneficiary: InternationalBeneficiaryInput!\n  internationalCreditTransferDetails: [InternationalCreditTransferDetailsInput!]!\n  consentRedirectUrl: String!\n  externalReference: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbaccountidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"accountId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Account ID of the originator of the international credit transfer")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbaccountnumberbcodeaccountnumber-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"accountNumber"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/account-number"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountNumber"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Account number if the beneficiary is a swan account")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbtargetamountbcodeamountinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"targetAmount"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Target amount of the international credit transfer")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbinternationalbeneficiarybcodeinternationalbeneficiaryinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"internationalBeneficiary"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/international-beneficiary-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InternationalBeneficiaryInput!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Beneficiary of the international credit transfer")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbinternationalcredittransferdetailsbcodeinternationalcredittransferdetailsinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"internationalCreditTransferDetails"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/international-credit-transfer-details-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[InternationalCreditTransferDetailsInput!]!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Transfer details")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbconsentredirecturlbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"consentRedirectUrl"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the consent flow is finished the user is redirected to this URL")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiateinternationalcredittransferinputbexternalreferencebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InitiateInternationalCreditTransferInput.",(0,i.kt)("b",null,"externalReference"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"External reference")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/initiate-international-credit-transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"initiateInternationalCreditTransfer")),"  ",(0,i.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);