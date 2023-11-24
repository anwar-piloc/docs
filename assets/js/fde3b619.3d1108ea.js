"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return a?i.createElement(m,n(n({ref:t},p),{},{components:a})):i.createElement(m,n({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var c=2;c<r;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},68834:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(83117),o=a(67294),r=a(3905);const n={id:"capital-deposit-case-status",title:"CapitalDepositCaseStatus",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/enums/capital-deposit-case-status",id:"api-reference/enums/capital-deposit-case-status",title:"CapitalDepositCaseStatus",description:"Status of a capital deposit case.",source:"@site/docs/api-reference/enums/capital-deposit-case-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/capital-deposit-case-status",permalink:"/api-reference/enums/capital-deposit-case-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/capital-deposit-case-status.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-status",title:"CapitalDepositCaseStatus",hide_table_of_contents:!1}},c={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseStatus.<b>Initiated</b></code>",id:"code-style-fontweight-normal-capitaldepositcasestatusbinitiatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseStatus.<b>WaitingForRequirements</b></code>",id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingforrequirementsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseStatus.<b>WaitingForShareDepositCertificate</b></code>",id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingforsharedepositcertificatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseStatus.<b>WaitingForRegisterExtract</b></code>",id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingforregisterextractbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseStatus.<b>WaitingForNotaryTransfer</b></code>",id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingfornotarytransferbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseStatus.<b>Completed</b></code>",id:"code-style-fontweight-normal-capitaldepositcasestatusbcompletedbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},b="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Status of a capital deposit case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CapitalDepositCaseStatus {\n  Initiated\n  WaitingForRequirements\n  WaitingForShareDepositCertificate\n  WaitingForRegisterExtract\n  WaitingForNotaryTransfer\n  Completed\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasestatusbinitiatedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseStatus.",(0,r.kt)("b",null,"Initiated")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Technical state when the mutation to create a new capital deposit case is called.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingforrequirementsbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseStatus.",(0,r.kt)("b",null,"WaitingForRequirements")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A new capital deposit case is created and Swan is waiting for the required information to be provided and each shareholder to wire their share of share capital.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingforsharedepositcertificatebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseStatus.",(0,r.kt)("b",null,"WaitingForShareDepositCertificate")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Swan is waiting for the notary to provide the Share Deposit Certificate.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingforregisterextractbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseStatus.",(0,r.kt)("b",null,"WaitingForRegisterExtract")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Swan is waiting for you to provide the Register Extract.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasestatusbwaitingfornotarytransferbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseStatus.",(0,r.kt)("b",null,"WaitingForNotaryTransfer")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Swan is waiting for the notary to wire the share capital on the account of the company being registered.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasestatusbcompletedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseStatus.",(0,r.kt)("b",null,"Completed")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The capital deposit case is completed.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase")),"  ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/capital-deposit-case-filters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseFiltersInput")),"  ",(0,r.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);