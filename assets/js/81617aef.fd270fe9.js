"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=i(n),f=a,p=s["".concat(c,".").concat(f)]||s[f]||m[f]||l;return n?o.createElement(p,d(d({ref:t},u),{},{components:n})):o.createElement(p,d({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,d[1]=r;for(var i=2;i<l;i++)d[i]=n[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26598:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,Details:()=>p,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var o=n(87462),a=n(67294),l=n(3905);const d={id:"account-holder-individual-info",title:"AccountHolderIndividualInfo",hide_table_of_contents:!1},r=void 0,c={unversionedId:"api-reference/objects/account-holder-individual-info",id:"api-reference/objects/account-holder-individual-info",title:"AccountHolderIndividualInfo",description:"Individual account holder.",source:"@site/docs/api-reference/objects/account-holder-individual-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-holder-individual-info",permalink:"/api-reference/objects/account-holder-individual-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-holder-individual-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-individual-info",title:"AccountHolderIndividualInfo",hide_table_of_contents:!1}},i={},u=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderIndividualInfo.<b>type</b></code><Bullet /><code>AccountHolderType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderindividualinfobtypebcodeaccountholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderIndividualInfo.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderindividualinfobnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderIndividualInfo.<b>employmentStatus</b></code><Bullet /><code>EmploymentStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderindividualinfobemploymentstatusbcodeemploymentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderIndividualInfo.<b>monthlyIncome</b></code><Bullet /><code>MonthlyIncome!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderindividualinfobmonthlyincomebcodemonthlyincome--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderIndividualInfo.<b>user</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accountholderindividualinfobuserbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderIndividualInfo.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderindividualinfobtaxidentificationnumberbcodestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"accountholderinfo-",level:4}],p=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:r=!1}=e;const[c,i]=(0,a.useState)(r);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&d)},b={Bullet:u,SpecifiedBy:s,Badge:m,toc:f,Details:p},y="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Individual account holder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountHolderIndividualInfo implements AccountHolderInfo {\n  type: AccountHolderType!\n  name: String!\n  employmentStatus: EmploymentStatus!\n  monthlyIncome: MonthlyIncome!\n  user: User!\n  taxIdentificationNumber: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholderindividualinfobtypebcodeaccountholdertype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderIndividualInfo.",(0,l.kt)("b",null,"type"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-type"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolderType!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account holder type (always Individual for type AccountHolderIndividualInfo).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholderindividualinfobnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderIndividualInfo.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account Holder's first name and last name.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholderindividualinfobemploymentstatusbcodeemploymentstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderIndividualInfo.",(0,l.kt)("b",null,"employmentStatus"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/employment-status"},(0,l.kt)("inlineCode",{parentName:"a"},"EmploymentStatus!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Employment status of the account holder (regulatory questions).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholderindividualinfobmonthlyincomebcodemonthlyincome--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderIndividualInfo.",(0,l.kt)("b",null,"monthlyIncome"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/monthly-income"},(0,l.kt)("inlineCode",{parentName:"a"},"MonthlyIncome!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Monthly income of the account holder (regulatory questions).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholderindividualinfobuserbcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderIndividualInfo.",(0,l.kt)("b",null,"user"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"User of the individual account holder.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholderindividualinfobtaxidentificationnumberbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderIndividualInfo.",(0,l.kt)("b",null,"taxIdentificationNumber"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tax Identification Number")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"accountholderinfo-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-holder-info"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolderInfo"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account holder types.")))}g.isMDXComponent=!0}}]);