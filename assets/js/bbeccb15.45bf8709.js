"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41096],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(i),p=a,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||o;return i?n.createElement(m,r(r({ref:t},d),{},{components:i})):n.createElement(m,r({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},15915:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(83117),a=i(67294),o=i(3905);const r={id:"identification-status",title:"IdentificationStatus",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/enums/identification-status",id:"api-reference/enums/identification-status",title:"IdentificationStatus",description:"Identification status",source:"@site/docs/api-reference/enums/identification-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/identification-status",permalink:"/docs/api-reference/enums/identification-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/identification-status.mdx",tags:[],version:"current",frontMatter:{id:"identification-status",title:"IdentificationStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IdentificationLevel",permalink:"/docs/api-reference/enums/identification-level"},next:{title:"IndividualUltimateBeneficialOwnerTypeEnum",permalink:"/docs/api-reference/enums/individual-ultimate-beneficial-owner-type-enum"}},c={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationStatus.<b>Uninitiated</b></code>",id:"code-style-fontweight-normal-identificationstatusbuninitiatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationStatus.<b>Processing</b></code>",id:"code-style-fontweight-normal-identificationstatusbprocessingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationStatus.<b>ReadyToSign</b></code>",id:"code-style-fontweight-normal-identificationstatusbreadytosignbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationStatus.<b>ValidIdentity</b></code>",id:"code-style-fontweight-normal-identificationstatusbvalididentitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationStatus.<b>InsufficientDocumentQuality</b></code>",id:"code-style-fontweight-normal-identificationstatusbinsufficientdocumentqualitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentificationStatus.<b>InvalidIdentity</b></code>",id:"code-style-fontweight-normal-identificationstatusbinvalididentitybcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:f,Badge:p},h="wrapper";function b(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Identification status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IdentificationStatus {\n  Uninitiated\n  Processing\n  ReadyToSign\n  ValidIdentity\n  InsufficientDocumentQuality\n  InvalidIdentity\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationstatusbuninitiatedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationStatus.",(0,o.kt)("b",null,"Uninitiated")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user hasn't started the identity verification process yet.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationstatusbprocessingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationStatus.",(0,o.kt)("b",null,"Processing")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user has gone through the identity verification process, but we are still processing their information.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationstatusbreadytosignbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationStatus.",(0,o.kt)("b",null,"ReadyToSign")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user has gone through the identity verification process, and we have determined that their identity is valid.\nThe user now needs to go through the QES process to complete their identification.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationstatusbvalididentitybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationStatus.",(0,o.kt)("b",null,"ValidIdentity")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user has gone through the identity verification process, and we have determined that their identity is valid.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationstatusbinsufficientdocumentqualitybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationStatus.",(0,o.kt)("b",null,"InsufficientDocumentQuality")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user has gone through the identity verification process, but we were unable to determine if their\nidentity is valid because the quality of the provided documents was insufficient.\nThe user will have to start a new identification, which will update this status to ",(0,o.kt)("inlineCode",{parentName:"p"},"Processing"),".")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationstatusbinvalididentitybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationStatus.",(0,o.kt)("b",null,"InvalidIdentity")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user has gone through the identity verification process, but we have determined that their identity is invalid.\nThe user will have to start a new identification, which will update this status to ",(0,o.kt)("inlineCode",{parentName:"p"},"Processing"),".")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);