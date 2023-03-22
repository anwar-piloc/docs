"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44384],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),b=o,f=p["".concat(l,".").concat(b)]||p[b]||s[b]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5950:function(e,n,t){t.r(n),t.d(n,{Badge:function(){return b},Bullet:function(){return p},SpecifiedBy:function(){return s},assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(83117),o=t(67294),i=t(3905);const a={id:"onboarding-order-by-input",title:"OnboardingOrderByInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api/inputs/onboarding-order-by-input",id:"api/inputs/onboarding-order-by-input",title:"OnboardingOrderByInput",description:"Order that can be applied when listing onboardings",source:"@site/docs/api/inputs/onboarding-order-by-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/onboarding-order-by-input",permalink:"/docs/api/inputs/onboarding-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/onboarding-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-order-by-input",title:"OnboardingOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardingFiltersInput",permalink:"/docs/api/inputs/onboarding-filters-input"},next:{title:"PartnerCloseAccountReasonInput",permalink:"/docs/api/inputs/partner-close-account-reason-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingOrderByInput.<b>field</b></code><Bullet /><code>OnboardingOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingorderbyinputbfieldbcodeonboardingorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingorderbyinputbdirectionbcodeorderbydirection-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:s,Badge:b},y="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(y,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Order that can be applied when listing onboardings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input OnboardingOrderByInput {\n  field: OnboardingOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyinputbfieldbcodeonboardingorderbyfieldinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByInput.",(0,i.kt)("b",null,"field"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/onboarding-order-by-field-input"},(0,i.kt)("inlineCode",{parentName:"a"},"OnboardingOrderByFieldInput"))," ",(0,i.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyinputbdirectionbcodeorderbydirection-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/order-by-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,i.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/queries/onboardings"},(0,i.kt)("inlineCode",{parentName:"a"},"onboardings")),"  ",(0,i.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);