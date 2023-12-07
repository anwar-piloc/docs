"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68632],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,y=u["".concat(l,".").concat(g)]||u[g]||p[g]||c;return a?n.createElement(y,s(s({ref:t},i),{},{components:a})):n.createElement(y,s({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<c;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73547:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var n=a(87462),r=a(67294),c=a(3905);const s={id:"physical-card-wrong-status-rejection",title:"PhysicalCardWrongStatusRejection",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/objects/physical-card-wrong-status-rejection",id:"api-reference/objects/physical-card-wrong-status-rejection",title:"PhysicalCardWrongStatusRejection",description:"Rejection returned when the Physical Card is not the expected status",source:"@site/docs/api-reference/objects/physical-card-wrong-status-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/physical-card-wrong-status-rejection",permalink:"/api-reference/objects/physical-card-wrong-status-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/physical-card-wrong-status-rejection.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-wrong-status-rejection",title:"PhysicalCardWrongStatusRejection",hide_table_of_contents:!1}},d={},i=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardWrongStatusRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardWrongStatusRejection.<b>identifier</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardWrongStatusRejection.<b>currentStatus</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbcurrentstatusbcodephysicalcardstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardWrongStatusRejection.<b>expectedStatus</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbexpectedstatusbcodephysicalcardstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:o=!1}=e;const[l,d]=(0,r.useState)(o);return(0,c.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&s)},m={Bullet:i,SpecifiedBy:u,Badge:p,toc:g,Details:y},b="wrapper";function h(e){let{components:t,...a}=e;return(0,c.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Rejection returned when the Physical Card is not the expected status"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PhysicalCardWrongStatusRejection implements Rejection {\n  message: String!\n  identifier: String!\n  currentStatus: PhysicalCardStatus!\n  expectedStatus: PhysicalCardStatus!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardWrongStatusRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbidentifierbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardWrongStatusRejection.",(0,c.kt)("b",null,"identifier"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbcurrentstatusbcodephysicalcardstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardWrongStatusRejection.",(0,c.kt)("b",null,"currentStatus"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/physical-card-status"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardwrongstatusrejectionbexpectedstatusbcodephysicalcardstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardWrongStatusRejection.",(0,c.kt)("b",null,"expectedStatus"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/physical-card-status"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/activate-physical-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"ActivatePhysicalCardPayload")),"  ",(0,c.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"}),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/resume-physical-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardPayload")),"  ",(0,c.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);