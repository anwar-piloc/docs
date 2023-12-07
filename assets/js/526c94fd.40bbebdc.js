"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?n.createElement(h,d(d({ref:t},c),{},{components:a})):n.createElement(h,d({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<o;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},68622:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>b});var n=a(87462),r=a(67294),o=a(3905);const d={id:"onboard-individual-shareholder-input",title:"OnboardIndividualShareholderInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/inputs/onboard-individual-shareholder-input",id:"api-reference/inputs/onboard-individual-shareholder-input",title:"OnboardIndividualShareholderInput",description:"Information on the shareholder.",source:"@site/docs/api-reference/inputs/onboard-individual-shareholder-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/onboard-individual-shareholder-input",permalink:"/api-reference/inputs/onboard-individual-shareholder-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/onboard-individual-shareholder-input.mdx",tags:[],version:"current",frontMatter:{id:"onboard-individual-shareholder-input",title:"OnboardIndividualShareholderInput",hide_table_of_contents:!1}},s={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualShareholderInput.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualshareholderinputbfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualShareholderInput.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualshareholderinputblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualShareholderInput.<b>birthDate</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualshareholderinputbbirthdatebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualShareholderInput.<b>nationality</b></code><Bullet /><code>CCA3!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardindividualshareholderinputbnationalitybcodecca3--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualShareholderInput.<b>capitalDepositAmount</b></code><Bullet /><code>AmountInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-onboardindividualshareholderinputbcapitaldepositamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualShareholderInput.<b>onboardingInfo</b></code><Bullet /><code>OnboardIndividualAccountHolderInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-onboardindividualshareholderinputbonboardinginfobcodeonboardindividualaccountholderinput--",level:4},{value:"Member Of",id:"member-of",level:3}],h=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[i,s]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},g={Bullet:c,SpecifiedBy:u,Badge:p,toc:b,Details:h},m="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information on the shareholder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input OnboardIndividualShareholderInput {\n  firstName: String!\n  lastName: String!\n  birthDate: String!\n  nationality: CCA3!\n  capitalDepositAmount: AmountInput!\n  onboardingInfo: OnboardIndividualAccountHolderInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualshareholderinputbfirstnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualShareholderInput.",(0,o.kt)("b",null,"firstName"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"First name of the shareholder.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualshareholderinputblastnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualShareholderInput.",(0,o.kt)("b",null,"lastName"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Last name of the shareholder.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualshareholderinputbbirthdatebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualShareholderInput.",(0,o.kt)("b",null,"birthDate"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Birthdate of the shareholder in the YYYY/MM/DD format.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualshareholderinputbnationalitybcodecca3--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualShareholderInput.",(0,o.kt)("b",null,"nationality"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,o.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CCA3 code for the country of nationality of the shareholder.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualshareholderinputbcapitaldepositamountbcodeamountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualShareholderInput.",(0,o.kt)("b",null,"capitalDepositAmount"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Amount the shareholder has to deposit.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualshareholderinputbonboardinginfobcodeonboardindividualaccountholderinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualShareholderInput.",(0,o.kt)("b",null,"onboardingInfo"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/onboard-individual-account-holder-input"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderInput!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Information required for the onboarding of a individual shareholder.")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/create-capital-deposit-case-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateCapitalDepositCaseInput")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);