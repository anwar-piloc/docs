"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24813],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(o),p=n,m=f["".concat(d,".").concat(p)]||f[p]||s[p]||i;return o?r.createElement(m,l(l({ref:t},u),{},{components:o})):r.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[f]="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},16459:function(e,t,o){o.r(t),o.d(t,{Badge:function(){return p},Bullet:function(){return f},SpecifiedBy:function(){return s},assets:function(){return c},contentTitle:function(){return a},default:function(){return v},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=o(83117),n=o(67294),i=o(3905);const l={id:"validation-field-error-code",title:"ValidationFieldErrorCode",hide_table_of_contents:!1},a=void 0,d={unversionedId:"api/enums/validation-field-error-code",id:"api/enums/validation-field-error-code",title:"ValidationFieldErrorCode",description:"No description",source:"@site/docs/api/enums/validation-field-error-code.mdx",sourceDirName:"api/enums",slug:"/api/enums/validation-field-error-code",permalink:"/docs/api/enums/validation-field-error-code",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/validation-field-error-code.mdx",tags:[],version:"current",frontMatter:{id:"validation-field-error-code",title:"ValidationFieldErrorCode",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UltimateBeneficialOwnerType",permalink:"/docs/api/enums/ultimate-beneficial-owner-type"},next:{title:"VerificationFlow",permalink:"/docs/api/enums/verification-flow"}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ValidationFieldErrorCode.<b>InvalidString</b></code>",id:"code-style-fontweight-normal-validationfielderrorcodebinvalidstringbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ValidationFieldErrorCode.<b>InvalidType</b></code>",id:"code-style-fontweight-normal-validationfielderrorcodebinvalidtypebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ValidationFieldErrorCode.<b>TooLong</b></code>",id:"code-style-fontweight-normal-validationfielderrorcodebtoolongbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ValidationFieldErrorCode.<b>TooShort</b></code>",id:"code-style-fontweight-normal-validationfielderrorcodebtooshortbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:f,SpecifiedBy:s,Badge:p},b="wrapper";function v(e){let{components:t,...o}=e;return(0,i.kt)(b,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ValidationFieldErrorCode {\n  InvalidString\n  InvalidType\n  TooLong\n  TooShort\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorcodebinvalidstringbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldErrorCode.",(0,i.kt)("b",null,"InvalidString")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorcodebinvalidtypebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldErrorCode.",(0,i.kt)("b",null,"InvalidType")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorcodebtoolongbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldErrorCode.",(0,i.kt)("b",null,"TooLong")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorcodebtooshortbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldErrorCode.",(0,i.kt)("b",null,"TooShort")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/validation-field-error"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidationFieldError")),"  ",(0,i.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);