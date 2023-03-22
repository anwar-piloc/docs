"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92335],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(a),y=r,m=u["".concat(l,".").concat(y)]||u[y]||p[y]||c;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<c;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},9751:function(e,t,a){a.r(t),a.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return p},assets:function(){return i},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(83117),r=a(67294),c=a(3905);const s={id:"resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api/objects/resume-physical-card-success-payload",id:"api/objects/resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",description:"No description",source:"@site/docs/api/objects/resume-physical-card-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/resume-physical-card-success-payload",permalink:"/docs/api/objects/resume-physical-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/resume-physical-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ResumeAccountMembershipSuccessPayload",permalink:"/docs/api/objects/resume-account-membership-success-payload"},next:{title:"RollingReserve",permalink:"/docs/api/objects/rolling-reserve"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardSuccessPayload.<b>physicalCard</b></code><Bullet /><code>PhysicalCard!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function h(e){let{components:t,...a}=e;return(0,c.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResumePhysicalCardSuccessPayload {\n  physicalCard: PhysicalCard!\n  consent: Consent!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardSuccessPayload.",(0,c.kt)("b",null,"physicalCard"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/physical-card"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCard!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The physicalCard to resume")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbconsentbcodeconsent--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardSuccessPayload.",(0,c.kt)("b",null,"consent"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/consent"},(0,c.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The consent required to resume a physical card")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/unions/resume-physical-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardPayload")),"  ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);