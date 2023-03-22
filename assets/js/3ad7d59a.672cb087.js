"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[96247],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,u=p["".concat(l,".").concat(y)]||p[y]||f[y]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},78566:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return p},SpecifiedBy:function(){return f},assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(83117),r=n(67294),i=n(3905);const o={id:"sepabeneficiary",title:"SEPABeneficiary",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api/objects/sepabeneficiary",id:"api/objects/sepabeneficiary",title:"SEPABeneficiary",description:"External Beneficiary type SEPA",source:"@site/docs/api/objects/sepabeneficiary.mdx",sourceDirName:"api/objects",slug:"/api/objects/sepabeneficiary",permalink:"/docs/api/objects/sepabeneficiary",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/sepabeneficiary.mdx",tags:[],version:"current",frontMatter:{id:"sepabeneficiary",title:"SEPABeneficiary",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SchemeWrongRejection",permalink:"/docs/api/objects/scheme-wrong-rejection"},next:{title:"SEPACreditTransferInCreditor",permalink:"/docs/api/objects/sepacredit-transfer-in-creditor"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPABeneficiary.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepabeneficiarybidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPABeneficiary.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepabeneficiarybnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPABeneficiary.<b>isMyOwnIban</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepabeneficiarybismyownibanbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPABeneficiary.<b>address</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepabeneficiarybaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPABeneficiary.<b>maskedIBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepabeneficiarybmaskedibanbcodestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Beneficiary</code> <Badge class="secondary" text="interface"/>',id:"beneficiary-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:p,SpecifiedBy:f,Badge:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"External Beneficiary type SEPA"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPABeneficiary implements Beneficiary {\n  id: ID\n  name: String!\n  isMyOwnIban: Boolean!\n  address: Address\n  maskedIBAN: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepabeneficiarybidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPABeneficiary.",(0,i.kt)("b",null,"id"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"unique identifier of a beneficiary")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepabeneficiarybnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPABeneficiary.",(0,i.kt)("b",null,"name"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"full name of the beneficiary")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepabeneficiarybismyownibanbcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPABeneficiary.",(0,i.kt)("b",null,"isMyOwnIban"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"true")," if this new beneficiary is the account holder himself in an other financial institution.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepabeneficiarybaddressbcodeaddress-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPABeneficiary.",(0,i.kt)("b",null,"address"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/address"},(0,i.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"beneficiary address")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepabeneficiarybmaskedibanbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPABeneficiary.",(0,i.kt)("b",null,"maskedIBAN"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"maskedIBAN if the beneficiary is a an account in an other financial institution")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"beneficiary-"},(0,i.kt)("a",{parentName:"h4",href:"/api/interfaces/beneficiary"},(0,i.kt)("inlineCode",{parentName:"a"},"Beneficiary"))," ",(0,i.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"SOON TO BE DEPRECATED"),"\nBeneficiary")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepacredit-transfer-out-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferOutCreditor")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepadirect-debit-in-debtor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitInDebtor")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepadirect-debit-out-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitOutCreditor")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/standing-order"},(0,i.kt)("inlineCode",{parentName:"a"},"StandingOrder")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);