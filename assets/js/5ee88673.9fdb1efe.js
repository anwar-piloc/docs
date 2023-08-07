"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||o;return n?i.createElement(m,c(c({ref:t},l),{},{components:n})):i.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68987:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=n(83117),r=n(67294),o=n(3905);const c={id:"identification-process",title:"IdentificationProcess",hide_table_of_contents:!1},a=void 0,s={unversionedId:"api-reference/unions/identification-process",id:"api-reference/unions/identification-process",title:"IdentificationProcess",description:"No description",source:"@site/docs/api-reference/unions/identification-process.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/identification-process",permalink:"/api-reference/unions/identification-process",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/identification-process.mdx",tags:[],version:"current",frontMatter:{id:"identification-process",title:"IdentificationProcess",hide_table_of_contents:!1}},p={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>IdentificationProcessExpert</code> <Badge class="secondary" text="object"/>',id:"identificationprocessexpert-",level:4},{value:'<code>IdentificationProcessExpertWithQES</code> <Badge class="secondary" text="object"/>',id:"identificationprocessexpertwithqes-",level:4},{value:'<code>IdentificationProcessPVID</code> <Badge class="secondary" text="object"/>',id:"identificationprocesspvid-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:d,SpecifiedBy:f,Badge:u},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union IdentificationProcess = IdentificationProcessExpert | IdentificationProcessExpertWithQES | IdentificationProcessPVID\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"identificationprocessexpert-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-process-expert"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationProcessExpert"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"identificationprocessexpertwithqes-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-process-expert-with-qes"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationProcessExpertWithQES"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"identificationprocesspvid-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-process-pvid"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationProcessPVID"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/identification"},(0,o.kt)("inlineCode",{parentName:"a"},"Identification")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);