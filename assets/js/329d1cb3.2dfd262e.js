"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41299:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(83117),o=a(67294),r=a(3905);const l={id:"user",title:"User",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/objects/user",id:"api-reference/objects/user",title:"User",description:"The User is the unique user, natural person, of the Swan app.",source:"@site/docs/api-reference/objects/user.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/user",permalink:"/api-reference/objects/user",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>accountMemberships</b></code><Bullet /><code>AccountMembershipConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbaccountmembershipsbcodeaccountmembershipconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.accountMemberships.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useraccountmembershipsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.accountMemberships.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useraccountmembershipsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.accountMemberships.<b>filters</b></code><Bullet /><code>AccountMembershipsFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-useraccountmembershipsbfiltersbcodeaccountmembershipsfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>mobilePhoneNumber</b></code><Bullet /><code>PhoneNumber</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbmobilephonenumberbcodephonenumber-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>firstName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbfirstnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>lastName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userblastnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>allFirstNames</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userballfirstnamesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>birthDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbbirthdatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>nationalityCCA3</b></code><Bullet /><code>CCA3</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbnationalitycca3bcodecca3-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>idVerified</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidverifiedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>authenticators</b></code><Bullet /><code>[Authenticator!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbauthenticatorsbcodeauthenticator--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>identificationStatus</b></code><Bullet /><code>IdentificationStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userbidentificationstatusbcodeidentificationstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>identificationLevels</b></code><Bullet /><code>IdentificationLevels</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbidentificationlevelsbcodeidentificationlevels-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>preferredNotificationChannel</b></code><Bullet /><code>PreferredNotificationChannel</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userbpreferrednotificationchannelbcodepreferrednotificationchannel-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>joinedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbjoinedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>identifications</b></code><Bullet /><code>IdentificationConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbidentificationsbcodeidentificationconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.identifications.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useridentificationsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.identifications.<b>filters</b></code><Bullet /><code>IdentificationFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-useridentificationsbfiltersbcodeidentificationfilterinput-",level:5},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:m,Badge:p},h="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The User is the unique user, natural person, of the Swan app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: ID!\n  accountMemberships(\n  first: Int! = 50\n  before: String\n  after: String\n  filters: AccountMembershipsFilterInput\n): AccountMembershipConnection!\n  mobilePhoneNumber: PhoneNumber\n  firstName: String\n  lastName: String\n  allFirstNames: [String!]\n  birthDate: Date\n  nationalityCCA3: CCA3\n  idVerified: Boolean!\n  authenticators: [Authenticator!]\n  identificationStatus: IdentificationStatus\n  identificationLevels: IdentificationLevels\n  preferredNotificationChannel: PreferredNotificationChannel\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  joinedAt: DateTime!\n  identifications(\n  first: Int! = 50\n  after: String\n  filters: IdentificationFilterInput\n): IdentificationConnection\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"id"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"unique identifier of the user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbaccountmembershipsbcodeaccountmembershipconnection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"accountMemberships"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipConnection!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The list of account memberships"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-useraccountmembershipsbfirstbcodeint--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.accountMemberships.",(0,r.kt)("b",null,"first"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h5",{id:"code-style-fontweight-normal-useraccountmembershipsbbeforebcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.accountMemberships.",(0,r.kt)("b",null,"before"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h5",{id:"code-style-fontweight-normal-useraccountmembershipsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.accountMemberships.",(0,r.kt)("b",null,"after"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h5",{id:"code-style-fontweight-normal-useraccountmembershipsbfiltersbcodeaccountmembershipsfilterinput-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.accountMemberships.",(0,r.kt)("b",null,"filters"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/inputs/account-memberships-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipsFilterInput"))," ",(0,r.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbmobilephonenumberbcodephonenumber-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"mobilePhoneNumber"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/phone-number"},(0,r.kt)("inlineCode",{parentName:"a"},"PhoneNumber"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"mobile phone number with the international format (Example: +33689788967)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbfirstnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"firstName"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"first name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userblastnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"lastName"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"last name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userballfirstnamesbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"allFirstNames"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,r.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"list of first names")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbbirthdatebcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"birthDate"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"birth date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbnationalitycca3bcodecca3-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"nationalityCCA3"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,r.kt)("inlineCode",{parentName:"a"},"CCA3"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"nationality")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbidverifiedbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"idVerified"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if Swan has verified the user's identity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbauthenticatorsbcodeauthenticator--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"authenticators"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/authenticator"},(0,r.kt)("inlineCode",{parentName:"a"},"[Authenticator!]"))," ",(0,r.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the methods used to authenticate this user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbidentificationstatusbcodeidentificationstatus-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"identificationStatus"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-status"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationStatus"))," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Identification status")),(0,r.kt)("p",null,"Each attempt to go through our identity verification process will update this value."),(0,r.kt)("p",null,"This field is only available for the current user."),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbidentificationlevelsbcodeidentificationlevels-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"identificationLevels"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-levels"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationLevels"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of identification levels available for the user.")),(0,r.kt)("p",null,"Whenever TRUE, it means the identification was successful for the associated level."),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbpreferrednotificationchannelbcodepreferrednotificationchannel-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"preferredNotificationChannel"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/preferred-notification-channel"},(0,r.kt)("inlineCode",{parentName:"a"},"PreferredNotificationChannel"))," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Preferred notification channel")),(0,r.kt)("p",null,'When it is "null" it means that the preferences have not been updated. Default SMS in use'),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Creation date of the user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last update date of the user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbjoinedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"joinedAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Date on which the user joined the project. Joining the project is done after the first accepted OAuth login.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbidentificationsbcodeidentificationconnection-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"identifications"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationConnection"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DO NOT USE.")),(0,r.kt)("p",null,"This feature is currently in development, it probably doesn't work and we will make breaking changes without warning."),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-useridentificationsbfirstbcodeint--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.identifications.",(0,r.kt)("b",null,"first"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h5",{id:"code-style-fontweight-normal-useridentificationsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.identifications.",(0,r.kt)("b",null,"after"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h5",{id:"code-style-fontweight-normal-useridentificationsbfiltersbcodeidentificationfilterinput-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.identifications.",(0,r.kt)("b",null,"filters"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api-reference/inputs/identification-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationFilterInput"))," ",(0,r.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/queries/user"},(0,r.kt)("inlineCode",{parentName:"a"},"user")),"  ",(0,r.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-individual-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderIndividualInfo")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembership")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/consent"},(0,r.kt)("inlineCode",{parentName:"a"},"Consent")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order"},(0,r.kt)("inlineCode",{parentName:"a"},"StandingOrder")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/user-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"UserEdge")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);