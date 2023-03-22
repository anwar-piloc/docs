"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51022],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,s=u["".concat(l,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(s,o(o({ref:t},c),{},{components:n})):r.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},96010:function(e,t,n){n.r(t),n.d(t,{Badge:function(){return y},Bullet:function(){return u},SpecifiedBy:function(){return m},assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(83117),a=n(67294),i=n(3905);const o={id:"payment-mandate-order-by-input",title:"PaymentMandateOrderByInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api/inputs/payment-mandate-order-by-input",id:"api/inputs/payment-mandate-order-by-input",title:"PaymentMandateOrderByInput",description:"Order that can be applied when listing payment mandate results",source:"@site/docs/api/inputs/payment-mandate-order-by-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/payment-mandate-order-by-input",permalink:"/docs/api/inputs/payment-mandate-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/payment-mandate-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-order-by-input",title:"PaymentMandateOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandateFiltersInput",permalink:"/docs/api/inputs/payment-mandate-filters-input"},next:{title:"PaymentOrderByInput",permalink:"/docs/api/inputs/payment-order-by-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateOrderByInput.<b>field</b></code><Bullet /><code>PaymentMandateOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentmandateorderbyinputbfieldbcodepaymentmandateorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentmandateorderbyinputbdirectionbcodeorderbydirection-",level:4}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),s={toc:c,Bullet:u,SpecifiedBy:m,Badge:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Order that can be applied when listing payment mandate results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PaymentMandateOrderByInput {\n  field: PaymentMandateOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateorderbyinputbfieldbcodepaymentmandateorderbyfieldinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateOrderByInput.",(0,i.kt)("b",null,"field"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/payment-mandate-order-by-field-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PaymentMandateOrderByFieldInput"))," ",(0,i.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateorderbyinputbdirectionbcodeorderbydirection-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateOrderByInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/order-by-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,i.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);