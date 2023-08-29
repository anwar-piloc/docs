"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,b=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88330:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(83117),o=n(67294),r=n(3905);const i={id:"membership-info-input",title:"MembershipInfoInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/inputs/membership-info-input",id:"api-reference/inputs/membership-info-input",title:"MembershipInfoInput",description:"No description",source:"@site/docs/api-reference/inputs/membership-info-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/membership-info-input",permalink:"/api-reference/inputs/membership-info-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/membership-info-input.mdx",tags:[],version:"current",frontMatter:{id:"membership-info-input",title:"MembershipInfoInput",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>email</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>restrictedTo</b></code><Bullet /><code>RestrictedToInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-membershipinfoinputbrestrictedtobcoderestrictedtoinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>canViewAccount</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbcanviewaccountbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>canManageBeneficiaries</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbcanmanagebeneficiariesbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>canInitiatePayments</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbcaninitiatepaymentsbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>canManageAccountMembership</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbcanmanageaccountmembershipbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>canManageCards</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbcanmanagecardsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>residencyAddress</b></code><Bullet /><code>ResidencyAddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-membershipinfoinputbresidencyaddressbcoderesidencyaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipInfoInput.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershipinfoinputbtaxidentificationnumberbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:p,SpecifiedBy:m,Badge:u},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input MembershipInfoInput {\n  email: String!\n  restrictedTo: RestrictedToInput!\n  canViewAccount: Boolean!\n  canManageBeneficiaries: Boolean!\n  canInitiatePayments: Boolean!\n  canManageAccountMembership: Boolean!\n  canManageCards: Boolean\n  residencyAddress: ResidencyAddressInput\n  taxIdentificationNumber: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbemailbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"email"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"email")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbrestrictedtobcoderestrictedtoinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"restrictedTo"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/restricted-to-input"},(0,r.kt)("inlineCode",{parentName:"a"},"RestrictedToInput!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"restricted to a user if necessary")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbcanviewaccountbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"canViewAccount"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can view account balances and transactions history")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbcanmanagebeneficiariesbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"canManageBeneficiaries"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can add or canceled beneficiaries")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbcaninitiatepaymentsbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"canInitiatePayments"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can initiate payments")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbcanmanageaccountmembershipbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"canManageAccountMembership"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can invite, update, suspend or resume account membership")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbcanmanagecardsbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"canManageCards"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"COMING SOON\n",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can manage cards for himself or to the memberships he manages")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbresidencyaddressbcoderesidencyaddressinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"residencyAddress"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/residency-address-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput"))," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Residency address of the member to be added")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-membershipinfoinputbtaxidentificationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MembershipInfoInput.",(0,r.kt)("b",null,"taxIdentificationNumber"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tax Identification Number of the user added")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-account-memberships-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipsInput")),"  ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);