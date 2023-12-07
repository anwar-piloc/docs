"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),p=i,b=s["".concat(c,".").concat(p)]||s[p]||f[p]||r;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17433:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>m,Details:()=>b,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),i=n(67294),r=n(3905);const o={id:"ultimate-beneficial-indirect-owner-company-info",title:"UltimateBeneficialIndirectOwnerCompanyInfo",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/ultimate-beneficial-indirect-owner-company-info",id:"api-reference/objects/ultimate-beneficial-indirect-owner-company-info",title:"UltimateBeneficialIndirectOwnerCompanyInfo",description:"Ultimate beneficial owner company info.",source:"@site/docs/api-reference/objects/ultimate-beneficial-indirect-owner-company-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/ultimate-beneficial-indirect-owner-company-info",permalink:"/api-reference/objects/ultimate-beneficial-indirect-owner-company-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/ultimate-beneficial-indirect-owner-company-info.mdx",tags:[],version:"current",frontMatter:{id:"ultimate-beneficial-indirect-owner-company-info",title:"UltimateBeneficialIndirectOwnerCompanyInfo",hide_table_of_contents:!1}},d={},m=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialIndirectOwnerCompanyInfo.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialIndirectOwnerCompanyInfo.<b>type</b></code><Bullet /><code>UltimateBeneficialOwnerType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobtypebcodeultimatebeneficialownertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialIndirectOwnerCompanyInfo.<b>parentCompanyReference</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobparentcompanyreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialIndirectOwnerCompanyInfo.<b>parentCompanyShareRatio</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobparentcompanyshareratiobcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialIndirectOwnerCompanyInfo.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UltimateBeneficialIndirectOwnerCompanyInfo.<b>registrationNumber</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobregistrationnumberbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>UltimateBeneficialOwnerInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"ultimatebeneficialownerinfo-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[c,d]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},y={Bullet:m,SpecifiedBy:s,Badge:f,toc:p,Details:b},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ultimate beneficial owner company info."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UltimateBeneficialIndirectOwnerCompanyInfo implements UltimateBeneficialOwnerInfo {\n  id: ID!\n  type: UltimateBeneficialOwnerType!\n  parentCompanyReference: String!\n  parentCompanyShareRatio: Float!\n  name: String!\n  registrationNumber: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialIndirectOwnerCompanyInfo.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ultimate Beneficial Owner Unique Identifier .")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobtypebcodeultimatebeneficialownertype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialIndirectOwnerCompanyInfo.",(0,r.kt)("b",null,"type"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/ultimate-beneficial-owner-type"},(0,r.kt)("inlineCode",{parentName:"a"},"UltimateBeneficialOwnerType!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ultimate beneficial Indirect Owner Company type.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobparentcompanyreferencebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialIndirectOwnerCompanyInfo.",(0,r.kt)("b",null,"parentCompanyReference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique Reference of the Parent Company.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobparentcompanyshareratiobcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialIndirectOwnerCompanyInfo.",(0,r.kt)("b",null,"parentCompanyShareRatio"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Shares ratio of the parent company. Example: 50 if the share ratio is 50%.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialIndirectOwnerCompanyInfo.",(0,r.kt)("b",null,"name"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Name of the company.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-ultimatebeneficialindirectownercompanyinfobregistrationnumberbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UltimateBeneficialIndirectOwnerCompanyInfo.",(0,r.kt)("b",null,"registrationNumber"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Registration number.")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"ultimatebeneficialownerinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/ultimate-beneficial-owner-info"},(0,r.kt)("inlineCode",{parentName:"a"},"UltimateBeneficialOwnerInfo"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Ultimate Beneficial Owner could be for an Individual or a Company and these can Direct or Indirect")))}g.isMDXComponent=!0}}]);