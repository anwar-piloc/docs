"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[60899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,m=p["".concat(i,".").concat(u)]||p[u]||g[u]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22032:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(83117),o=r(67294),a=r(3905);const c={id:"project-card-settings",title:"ProjectCardSettings",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/objects/project-card-settings",id:"api-reference/objects/project-card-settings",title:"ProjectCardSettings",description:"No description",source:"@site/docs/api-reference/objects/project-card-settings.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/project-card-settings",permalink:"/api-reference/objects/project-card-settings",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/project-card-settings.mdx",tags:[],version:"current",frontMatter:{id:"project-card-settings",title:"ProjectCardSettings",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProjectCardDesigns",permalink:"/api-reference/objects/project-card-designs"},next:{title:"ProjectForbiddenRejection",permalink:"/api-reference/objects/project-forbidden-rejection"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardSettings.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcardsettingsbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardSettings.<b>issuingProcessorVisualId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcardsettingsbissuingprocessorvisualidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardSettings.<b>specificCardProductCodeForCompanies</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcardsettingsbspecificcardproductcodeforcompaniesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardSettings.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcardsettingsbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardSettings.<b>cardSettings</b></code><Bullet /><code>[CardSettings!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-projectcardsettingsbcardsettingsbcodecardsettings--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardSettings.<b>preProvisioningSUVCardSettings</b></code><Bullet /><code>PreProvisioningSUVCardSettings</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-projectcardsettingsbpreprovisioningsuvcardsettingsbcodepreprovisioningsuvcardsettings-",level:4}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:p,SpecifiedBy:g,Badge:u},f="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProjectCardSettings {\n  id: ID!\n  issuingProcessorVisualId: String\n  specificCardProductCodeForCompanies: String\n  name: String\n  cardSettings: [CardSettings!]!\n  preProvisioningSUVCardSettings: PreProvisioningSUVCardSettings\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectcardsettingsbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardSettings.",(0,a.kt)("b",null,"id"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unique identifier of a project")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectcardsettingsbissuingprocessorvisualidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardSettings.",(0,a.kt)("b",null,"issuingProcessorVisualId"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Visual Id from the issuing card processor (Monext)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectcardsettingsbspecificcardproductcodeforcompaniesbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardSettings.",(0,a.kt)("b",null,"specificCardProductCodeForCompanies"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Specific card product for companies")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectcardsettingsbnamebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardSettings.",(0,a.kt)("b",null,"name"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Project name")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectcardsettingsbcardsettingsbcodecardsettings--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardSettings.",(0,a.kt)("b",null,"cardSettings"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-settings"},(0,a.kt)("inlineCode",{parentName:"a"},"[CardSettings!]!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Project's card settings")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectcardsettingsbpreprovisioningsuvcardsettingsbcodepreprovisioningsuvcardsettings-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardSettings.",(0,a.kt)("b",null,"preProvisioningSUVCardSettings"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/pre-provisioning-suvcard-settings"},(0,a.kt)("inlineCode",{parentName:"a"},"PreProvisioningSUVCardSettings"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Project's pre provisioning suv card settings")))}b.isMDXComponent=!0}}]);