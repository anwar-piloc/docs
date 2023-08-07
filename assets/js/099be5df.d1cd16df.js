"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=d(n),u=i,p=f["".concat(c,".").concat(u)]||f[u]||m[u]||l;return n?a.createElement(p,r(r({ref:t},s),{},{components:n})):a.createElement(p,r({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42196:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(83117),i=n(67294),l=n(3905);const r={id:"ultimate-beneficial-direct-owner-individual-info",title:"UltimateBeneficialDirectOwnerIndividualInfo",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/objects/ultimate-beneficial-direct-owner-individual-info",id:"api-reference/objects/ultimate-beneficial-direct-owner-individual-info",title:"UltimateBeneficialDirectOwnerIndividualInfo",description:"Ultimate beneficial Direct Owner individual info.",source:"@site/docs/api-reference/objects/ultimate-beneficial-direct-owner-individual-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/ultimate-beneficial-direct-owner-individual-info",permalink:"/api-reference/objects/ultimate-beneficial-direct-owner-individual-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/ultimate-beneficial-direct-owner-individual-info.mdx",tags:[],version:"current",frontMatter:{id:"ultimate-beneficial-direct-owner-individual-info",title:"UltimateBeneficialDirectOwnerIndividualInfo",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialDirectOwnerIndividualInfo.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialDirectOwnerIndividualInfo.<b>type</b></code><Bullet /><code>UltimateBeneficialOwnerType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobtypebcodeultimatebeneficialownertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialDirectOwnerIndividualInfo.<b>parentCompanyShareRatio</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobparentcompanyshareratiobcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialDirectOwnerIndividualInfo.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialDirectOwnerIndividualInfo.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfoblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialDirectOwnerIndividualInfo.<b>birthDate</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobbirthdatebcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>UltimateBeneficialOwnerInfo</code> <Badge class="secondary" text="interface"/>',id:"ultimatebeneficialownerinfo-",level:4}],f=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:f,SpecifiedBy:m,Badge:u},b="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ultimate beneficial Direct Owner individual info."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type UltimateBeneficialDirectOwnerIndividualInfo implements UltimateBeneficialOwnerInfo {\n  id: ID!\n  type: UltimateBeneficialOwnerType!\n  parentCompanyShareRatio: Float!\n  firstName: String!\n  lastName: String!\n  birthDate: Date!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialDirectOwnerIndividualInfo.",(0,l.kt)("b",null,"id"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ultimate Beneficial Owner Unique Identifier .")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobtypebcodeultimatebeneficialownertype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialDirectOwnerIndividualInfo.",(0,l.kt)("b",null,"type"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/ultimate-beneficial-owner-type"},(0,l.kt)("inlineCode",{parentName:"a"},"UltimateBeneficialOwnerType!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ultimate beneficial Direct owner Individual type .")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobparentcompanyshareratiobcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialDirectOwnerIndividualInfo.",(0,l.kt)("b",null,"parentCompanyShareRatio"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shares ratio of the parent company. Example: 50 if the share ratio is 50%.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobfirstnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialDirectOwnerIndividualInfo.",(0,l.kt)("b",null,"firstName"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"First name.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfoblastnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialDirectOwnerIndividualInfo.",(0,l.kt)("b",null,"lastName"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Last name.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialdirectownerindividualinfobbirthdatebcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialDirectOwnerIndividualInfo.",(0,l.kt)("b",null,"birthDate"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Birth date.")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"ultimatebeneficialownerinfo-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/ultimate-beneficial-owner-info"},(0,l.kt)("inlineCode",{parentName:"a"},"UltimateBeneficialOwnerInfo"))," ",(0,l.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Ultimate Beneficial Owner could be for an Individual or a Company and these can Direct or Indirect")))}y.isMDXComponent=!0}}]);