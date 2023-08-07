"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[3291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,g=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return n?r.createElement(g,d(d({ref:t},l),{},{components:n})):r.createElement(g,d({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,d[1]=o;for(var u=2;u<a;u++)d[u]=n[u];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36137:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=n(83117),i=n(67294),a=n(3905);const d={id:"add-direct-debit-funding-source",title:"addDirectDebitFundingSource",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/mutations/add-direct-debit-funding-source",id:"api-reference/mutations/add-direct-debit-funding-source",title:"addDirectDebitFundingSource",description:"Add a funding source to an account",source:"@site/docs/api-reference/mutations/add-direct-debit-funding-source.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-direct-debit-funding-source",permalink:"/api-reference/mutations/add-direct-debit-funding-source",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-direct-debit-funding-source.mdx",tags:[],version:"current",frontMatter:{id:"add-direct-debit-funding-source",title:"addDirectDebitFundingSource",hide_table_of_contents:!1}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addDirectDebitFundingSource.<b>input</b></code><Bullet /><code>AddDirectDebitFundingSourceInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcebinputbcodeadddirectdebitfundingsourceinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddDirectDebitFundingSourcePayload</code> <Badge class="secondary" text="union"/>',id:"adddirectdebitfundingsourcepayload-",level:4}],s=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:l,Bullet:s,SpecifiedBy:p,Badge:f},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add a funding source to an account"),(0,a.kt)("p",null,"This mutation is restricted to an User access token (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,a.kt)("p",null,"The user must have an account membership for this account with the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership=true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"addDirectDebitFundingSource(\n  input: AddDirectDebitFundingSourceInput!\n): AddDirectDebitFundingSourcePayload\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcebinputbcodeadddirectdebitfundingsourceinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"addDirectDebitFundingSource.",(0,a.kt)("b",null,"input"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-direct-debit-funding-source-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AddDirectDebitFundingSourceInput!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"adddirectdebitfundingsourcepayload-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-direct-debit-funding-source-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"AddDirectDebitFundingSourcePayload"))," ",(0,a.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add Direct Debit Funding Source Payload")))}b.isMDXComponent=!0}}]);