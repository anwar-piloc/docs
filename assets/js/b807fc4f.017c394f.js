"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,y=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52785:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(83117),r=n(67294),i=n(3905);const o={id:"international-credit-transfer-transaction-details-dynamic-form",title:"internationalCreditTransferTransactionDetailsDynamicForm",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/queries/international-credit-transfer-transaction-details-dynamic-form",id:"api-reference/queries/international-credit-transfer-transaction-details-dynamic-form",title:"internationalCreditTransferTransactionDetailsDynamicForm",description:"Returns an international credit transfer dynamic form.",source:"@site/docs/api-reference/queries/international-credit-transfer-transaction-details-dynamic-form.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/international-credit-transfer-transaction-details-dynamic-form",permalink:"/api-reference/queries/international-credit-transfer-transaction-details-dynamic-form",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/international-credit-transfer-transaction-details-dynamic-form.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-transaction-details-dynamic-form",title:"internationalCreditTransferTransactionDetailsDynamicForm",hide_table_of_contents:!1}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferTransactionDetailsDynamicForm.<b>targetAmount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformbtargetamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferTransactionDetailsDynamicForm.<b>language</b></code><Bullet /><code>InternationalCreditTransferDisplayLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformblanguagebcodeinternationalcredittransferdisplaylanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferTransactionDetailsDynamicForm.<b>internationalBeneficiary</b></code><Bullet /><code>InternationalBeneficiary!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformbinternationalbeneficiarybcodeinternationalbeneficiary--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferTransactionDetailsDynamicForm.<b>refreshableFields</b></code><Bullet /><code>[InternationalCreditTransferDetails!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformbrefreshablefieldsbcodeinternationalcredittransferdetails--",level:4},{value:"Type",id:"type",level:3},{value:'<code>InternationalCreditTransferDynamicForm</code> <Badge class="secondary" text="object"/>',id:"internationalcredittransferdynamicform-",level:4}],m=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:m,SpecifiedBy:f,Badge:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns an international credit transfer dynamic form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"internationalCreditTransferTransactionDetailsDynamicForm(\n  targetAmount: AmountInput!\n  language: InternationalCreditTransferDisplayLanguage\n  internationalBeneficiary: InternationalBeneficiary!\n  refreshableFields: [InternationalCreditTransferDetails!]\n): InternationalCreditTransferDynamicForm\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformbtargetamountbcodeamountinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferTransactionDetailsDynamicForm.",(0,i.kt)("b",null,"targetAmount"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformblanguagebcodeinternationalcredittransferdisplaylanguage-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferTransactionDetailsDynamicForm.",(0,i.kt)("b",null,"language"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/international-credit-transfer-display-language"},(0,i.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferDisplayLanguage"))," ",(0,i.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformbinternationalbeneficiarybcodeinternationalbeneficiary--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferTransactionDetailsDynamicForm.",(0,i.kt)("b",null,"internationalBeneficiary"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/international-beneficiary"},(0,i.kt)("inlineCode",{parentName:"a"},"InternationalBeneficiary!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactiondetailsdynamicformbrefreshablefieldsbcodeinternationalcredittransferdetails--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferTransactionDetailsDynamicForm.",(0,i.kt)("b",null,"refreshableFields"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/international-credit-transfer-details"},(0,i.kt)("inlineCode",{parentName:"a"},"[InternationalCreditTransferDetails!]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"internationalcredittransferdynamicform-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/international-credit-transfer-dynamic-form"},(0,i.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferDynamicForm"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"COMING SOON"),"\nInternational Credit Transfer Dynamic Form")))}g.isMDXComponent=!0}}]);