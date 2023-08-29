"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return n?a.createElement(b,r(r({ref:t},s),{},{components:n})):a.createElement(b,r({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:o,r[1]=d;for(var i=2;i<c;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61239:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(83117),o=n(67294),c=n(3905);const r={id:"add-account-membership-input",title:"AddAccountMembershipInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/inputs/add-account-membership-input",id:"api-reference/inputs/add-account-membership-input",title:"AddAccountMembershipInput",description:"Inputs to add a new account membership",source:"@site/docs/api-reference/inputs/add-account-membership-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-account-membership-input",permalink:"/api-reference/inputs/add-account-membership-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-account-membership-input.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership-input",title:"AddAccountMembershipInput",hide_table_of_contents:!1}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>email</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>restrictedTo</b></code><Bullet /><code>RestrictedToInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbrestrictedtobcoderestrictedtoinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canViewAccount</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanviewaccountbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canManageBeneficiaries</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanagebeneficiariesbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canInitiatePayments</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcaninitiatepaymentsbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canManageAccountMembership</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanageaccountmembershipbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canManageCards</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanagecardsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>residencyAddress</b></code><Bullet /><code>ResidencyAddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbresidencyaddressbcoderesidencyaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbtaxidentificationnumberbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(h,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Inputs to add a new account membership"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddAccountMembershipInput {\n  accountId: ID!\n  email: String!\n  restrictedTo: RestrictedToInput!\n  canViewAccount: Boolean!\n  canManageBeneficiaries: Boolean!\n  canInitiatePayments: Boolean!\n  canManageAccountMembership: Boolean!\n  canManageCards: Boolean\n  consentRedirectUrl: String!\n  residencyAddress: ResidencyAddressInput\n  taxIdentificationNumber: String\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbaccountidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"accountId"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"unique identifier of a given account")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbemailbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"email"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"email")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbrestrictedtobcoderestrictedtoinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"restrictedTo"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/restricted-to-input"},(0,c.kt)("inlineCode",{parentName:"a"},"RestrictedToInput!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"restricted to a user if necessary")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanviewaccountbcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"canViewAccount"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can view account balances and transactions history")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanagebeneficiariesbcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"canManageBeneficiaries"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can add or canceled beneficiaries")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcaninitiatepaymentsbcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"canInitiatePayments"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can initiate payments")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanageaccountmembershipbcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"canManageAccountMembership"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can invite, update, suspend or resume account membership")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanagecardsbcodeboolean-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"canManageCards"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"COMING SOON\n",(0,c.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can manage cards for himself or to the memberships he manages")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbconsentredirecturlbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"consentRedirectUrl"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbresidencyaddressbcoderesidencyaddressinput-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"residencyAddress"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/residency-address-input"},(0,c.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput"))," ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Residency address of the member to be added")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbtaxidentificationnumberbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,c.kt)("b",null,"taxIdentificationNumber"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Tax Identification Number of the user added")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-account-membership"},(0,c.kt)("inlineCode",{parentName:"a"},"addAccountMembership")),"  ",(0,c.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);