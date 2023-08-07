"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[65826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72234:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(83117),o=a(67294),r=a(3905);const i={id:"create-capital-deposit-case-input",title:"CreateCapitalDepositCaseInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"api-reference/inputs/create-capital-deposit-case-input",id:"api-reference/inputs/create-capital-deposit-case-input",title:"CreateCapitalDepositCaseInput",description:"Inputs to create a capital deposit case.",source:"@site/docs/api-reference/inputs/create-capital-deposit-case-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/create-capital-deposit-case-input",permalink:"/api-reference/inputs/create-capital-deposit-case-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/create-capital-deposit-case-input.mdx",tags:[],version:"current",frontMatter:{id:"create-capital-deposit-case-input",title:"CreateCapitalDepositCaseInput",hide_table_of_contents:!1}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCapitalDepositCaseInput.<b>companyName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcapitaldepositcaseinputbcompanynamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCapitalDepositCaseInput.<b>companyShareholders</b></code><Bullet /><code>[OnboardCompanyShareholderInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcapitaldepositcaseinputbcompanyshareholdersbcodeonboardcompanyshareholderinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCapitalDepositCaseInput.<b>individualShareholders</b></code><Bullet /><code>[OnboardIndividualShareholderInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcapitaldepositcaseinputbindividualshareholdersbcodeonboardindividualshareholderinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCapitalDepositCaseInput.<b>totalCapitalDepositAmount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcapitaldepositcaseinputbtotalcapitaldepositamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCapitalDepositCaseInput.<b>onboardingCapitalDepositCompany</b></code><Bullet /><code>OnboardCompanyAccountHolderInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcapitaldepositcaseinputbonboardingcapitaldepositcompanybcodeonboardcompanyaccountholderinput--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:d,SpecifiedBy:u,Badge:m},h="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to create a capital deposit case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateCapitalDepositCaseInput {\n  companyName: String!\n  companyShareholders: [OnboardCompanyShareholderInput]!\n  individualShareholders: [OnboardIndividualShareholderInput]!\n  totalCapitalDepositAmount: AmountInput!\n  onboardingCapitalDepositCompany: OnboardCompanyAccountHolderInput!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcapitaldepositcaseinputbcompanynamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCapitalDepositCaseInput.",(0,r.kt)("b",null,"companyName"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Name ("D\xe9nomination sociale") of the company being registered and for which the capital is being deposited.')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcapitaldepositcaseinputbcompanyshareholdersbcodeonboardcompanyshareholderinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCapitalDepositCaseInput.",(0,r.kt)("b",null,"companyShareholders"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/onboard-company-shareholder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[OnboardCompanyShareholderInput]!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Array of shareholders of type company ("personne morale").')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcapitaldepositcaseinputbindividualshareholdersbcodeonboardindividualshareholderinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCapitalDepositCaseInput.",(0,r.kt)("b",null,"individualShareholders"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/onboard-individual-shareholder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[OnboardIndividualShareholderInput]!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Array of shareholders of type individual ("personne physique").')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcapitaldepositcaseinputbtotalcapitaldepositamountbcodeamountinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCapitalDepositCaseInput.",(0,r.kt)("b",null,"totalCapitalDepositAmount"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Amount of the capital deposit.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcapitaldepositcaseinputbonboardingcapitaldepositcompanybcodeonboardcompanyaccountholderinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCapitalDepositCaseInput.",(0,r.kt)("b",null,"onboardingCapitalDepositCompany"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/onboard-company-account-holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information required for the onboarding of a company.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/create-capital-deposit-case"},(0,r.kt)("inlineCode",{parentName:"a"},"createCapitalDepositCase")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);