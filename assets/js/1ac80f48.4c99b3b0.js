"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86706],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>y});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=c,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,o(o({ref:n},i),{},{components:t})):r.createElement(y,o({ref:n},i))}));function y(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:c,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91881:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=t(83117),c=t(67294),a=t(3905);const o={id:"cancel-funding-source-success-payload",title:"CancelFundingSourceSuccessPayload",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api-reference/objects/cancel-funding-source-success-payload",id:"api-reference/objects/cancel-funding-source-success-payload",title:"CancelFundingSourceSuccessPayload",description:"Cancel Funding Source Success Payload",source:"@site/docs/api-reference/objects/cancel-funding-source-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cancel-funding-source-success-payload",permalink:"/api-reference/objects/cancel-funding-source-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cancel-funding-source-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-funding-source-success-payload",title:"CancelFundingSourceSuccessPayload",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelFundingSourceSuccessPayload.<b>fundingSource</b></code><Bullet /><code>FundingSource</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-cancelfundingsourcesuccesspayloadbfundingsourcebcodefundingsource-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(c.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(c.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:d,SpecifiedBy:p,Badge:f},g="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cancel Funding Source Success Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelFundingSourceSuccessPayload {\n  fundingSource: FundingSource\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-cancelfundingsourcesuccesspayloadbfundingsourcebcodefundingsource-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CancelFundingSourceSuccessPayload.",(0,a.kt)("b",null,"fundingSource"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-source"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingSource"))," ",(0,a.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Canceled Funding Source")),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-funding-source-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"CancelFundingSourcePayload")),"  ",(0,a.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);