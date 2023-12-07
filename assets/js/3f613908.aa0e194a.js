"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,b=s["".concat(i,".").concat(m)]||s[m]||p[m]||r;return n?a.createElement(b,d(d({ref:t},u),{},{components:n})):a.createElement(b,d({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,d=new Array(r);d[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,d[1]=l;for(var c=2;c<r;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52891:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>i,toc:()=>m});var a=n(87462),o=n(67294),r=n(3905);const d={id:"onboard-individual-account-holder-input",title:"OnboardIndividualAccountHolderInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/inputs/onboard-individual-account-holder-input",id:"api-reference/inputs/onboard-individual-account-holder-input",title:"OnboardIndividualAccountHolderInput",description:"Inputs to onboard a new individual account holder",source:"@site/docs/api-reference/inputs/onboard-individual-account-holder-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/onboard-individual-account-holder-input",permalink:"/api-reference/inputs/onboard-individual-account-holder-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/onboard-individual-account-holder-input.mdx",tags:[],version:"current",frontMatter:{id:"onboard-individual-account-holder-input",title:"OnboardIndividualAccountHolderInput",hide_table_of_contents:!1}},c={},u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>accountName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbaccountnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>accountCountry</b></code><Bullet /><code>AccountCountry</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbaccountcountrybcodeaccountcountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>employmentStatus</b></code><Bullet /><code>EmploymentStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbemploymentstatusbcodeemploymentstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>monthlyIncome</b></code><Bullet /><code>MonthlyIncome</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbmonthlyincomebcodemonthlyincome-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>residencyAddress</b></code><Bullet /><code>ResidencyAddressInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbresidencyaddressbcoderesidencyaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>email</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>language</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>redirectUrl</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbredirecturlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>oAuthRedirectParameters</b></code><Bullet /><code>OAuthRedirectParametersInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputboauthredirectparametersbcodeoauthredirectparametersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderInput.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualaccountholderinputbtaxidentificationnumberbcodestring-",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:l=!1}=e;const[i,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&d)},h={Bullet:u,SpecifiedBy:s,Badge:p,toc:m,Details:b},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to onboard a new individual account holder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input OnboardIndividualAccountHolderInput {\n  accountName: String\n  accountCountry: AccountCountry\n  employmentStatus: EmploymentStatus\n  monthlyIncome: MonthlyIncome\n  residencyAddress: ResidencyAddressInput\n  email: String\n  language: String\n  redirectUrl: String\n  oAuthRedirectParameters: OAuthRedirectParametersInput\n  taxIdentificationNumber: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbaccountnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"accountName"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account name of the individual account holder. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbaccountcountrybcodeaccountcountry-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"accountCountry"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-country"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountCountry"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Country of the account that will be created at the end of the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbemploymentstatusbcodeemploymentstatus-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"employmentStatus"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/employment-status"},(0,r.kt)("inlineCode",{parentName:"a"},"EmploymentStatus"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Employment status of the individual account holder")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbmonthlyincomebcodemonthlyincome-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"monthlyIncome"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/monthly-income"},(0,r.kt)("inlineCode",{parentName:"a"},"MonthlyIncome"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Monthly income of the individual account holder")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbresidencyaddressbcoderesidencyaddressinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"residencyAddress"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/residency-address-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Residency address of the individual account holder (must be in a European country)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbemailbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"email"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Email. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputblanguagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Language of the onboarding process. Must be compliant with RFC 5646")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbredirecturlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"redirectUrl"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL used to redirect the user at the end of the onboarding process. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," the user is redirected to the white label web banking. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputboauthredirectparametersbcodeoauthredirectparametersinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"oAuthRedirectParameters"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/oauth-redirect-parameters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OAuthRedirectParametersInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extra parameters provided by partner")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholderinputbtaxidentificationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderInput.",(0,r.kt)("b",null,"taxIdentificationNumber"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tax Identification Number")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/onboard-individual-account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"onboardIndividualAccountHolder")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-individual-shareholder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardIndividualShareholderInput")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);