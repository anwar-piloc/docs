"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[46003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64957:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>s,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=r(67294),i=r(3905);const a={id:"account-membership-order-by-input",title:"AccountMembershipOrderByInput",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/inputs/account-membership-order-by-input",id:"api-reference/inputs/account-membership-order-by-input",title:"AccountMembershipOrderByInput",description:"Order that can be applied when listing account memberships",source:"@site/docs/api-reference/inputs/account-membership-order-by-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/account-membership-order-by-input",permalink:"/api-reference/inputs/account-membership-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/account-membership-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-order-by-input",title:"AccountMembershipOrderByInput",hide_table_of_contents:!1}},d={},p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipOrderByInput.<b>field</b></code><Bullet /><code>AccountMembershipOrderByFieldInput</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershiporderbyinputbfieldbcodeaccountmembershiporderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershiporderbyinputbdirectionbcodeorderbydirection-",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:r,children:a,startOpen:c=!1}=e;const[l,d]=(0,o.useState)(c);return(0,i.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&a)},f={Bullet:p,SpecifiedBy:u,Badge:s,toc:m,Details:b},y="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Order that can be applied when listing account memberships"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AccountMembershipOrderByInput {\n  field: AccountMembershipOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-accountmembershiporderbyinputbfieldbcodeaccountmembershiporderbyfieldinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipOrderByInput.",(0,i.kt)("b",null,"field"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-membership-order-by-field-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountMembershipOrderByFieldInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-accountmembershiporderbyinputbdirectionbcodeorderbydirection-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipOrderByInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/order-by-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/queries/account-memberships"},(0,i.kt)("inlineCode",{parentName:"a"},"accountMemberships")),"  ",(0,i.kt)(s,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);