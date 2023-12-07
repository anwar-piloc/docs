"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[188],{3905:(e,n,t)=>{t.d(n,{Zo:()=>A,kt:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},g=Object.keys(e);for(a=0;a<g.length;a++)t=g[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)t=g[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):C(C({},n),e)),t},A=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},r="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,g=e.originalType,o=e.parentName,A=I(e,["components","mdxType","originalType","parentName"]),r=l(t),s=i,p=r["".concat(o,".").concat(s)]||r[s]||d[s]||g;return t?a.createElement(p,C(C({ref:n},A),{},{components:t})):a.createElement(p,C({ref:n},A))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var g=t.length,C=new Array(g);C[0]=s;var I={};for(var o in n)hasOwnProperty.call(n,o)&&(I[o]=n[o]);I.originalType=e,I[r]="string"==typeof e?e:i,C[1]=I;for(var l=2;l<g;l++)C[l]=t[l];return a.createElement.apply(null,C)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},73515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>C,default:()=>d,frontMatter:()=>g,metadata:()=>I,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const g={title:"Create capital deposit case"},C="Create your capital deposit case",I={unversionedId:"topics/capital-deposits/france/guide-create-case",id:"topics/capital-deposits/france/guide-create-case",title:"Create capital deposit case",description:"Use the createCapitalDepositCase mutation to create your capital deposit case.",source:"@site/docs/topics/capital-deposits/france/guide-create-case.mdx",sourceDirName:"topics/capital-deposits/france",slug:"/topics/capital-deposits/france/guide-create-case",permalink:"/topics/capital-deposits/france/guide-create-case",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/capital-deposits/france/guide-create-case.mdx",tags:[],version:"current",frontMatter:{title:"Create capital deposit case"},sidebar:"docSidebar",previous:{title:"Deposit capital in France",permalink:"/topics/capital-deposits/france/guide"},next:{title:"Upload required documents",permalink:"/topics/capital-deposits/france/guide-upload-documents"}},o={},l=[{value:"Guide",id:"steps",level:2},{value:"API mutation",id:"mutation",level:2},{value:"Payload",id:"payload",level:2}],A={toc:l},r="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(r,(0,a.Z)({},A,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-your-capital-deposit-case"},"Create your capital deposit case"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://api-reference.swan.io/#mutation-createCapitalDepositCase"},(0,i.kt)("inlineCode",{parentName:"a"},"createCapitalDepositCase"))," mutation to create your capital deposit case."),(0,i.kt)("admonition",{title:"Multi-step process",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This page explains step 1 of a ",(0,i.kt)("strong",{parentName:"p"},"multi-step process"),".\nRefer to the ",(0,i.kt)("a",{parentName:"p",href:"/topics/capital-deposits/france/guide"},"France guide")," for the whole process.")),(0,i.kt)("h2",{id:"steps"},"Guide"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"createCapitalDepositCase")," mutation.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default, objects are added to the API Explorer in the following order:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"companyName")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"companyShareholders")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"individualShareholders")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"totalCapitalDepositAmount")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"onboardingCapitalDepositCompany")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"companyName")),": Enter the name of the future company (line 4)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"companyShareholders")),": Add required information about company shareholders (starts on line 5).",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"onboardingInfo")," object to prefill onboarding information for ",(0,i.kt)("inlineCode",{parentName:"li"},"individualUltimateBeneficialOwners")," (starts on line 8)."),(0,i.kt)("li",{parentName:"ol"},"You can also prefill information about the company (starts on line 33)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"individualShareholders")),": Add required information about individual shareholders (starts on line 50)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"totalCapitalDepositAmount")),": Add the combined capital deposit amount from all company and individual shareholders (line 69)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"onboardingCapitalDepositCompany")),": Add the company onboarding object to start creating the future company account (starts on line 70).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"individualUltimateBeneficialOwners")," and company information should match the information entered in step 3."))),(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateCapitalDepositCaseSuccessPayload")," (starts on line 107). Consider adding several pieces of important information, such as:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"companyOnboarding")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"documents")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"status"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"shareholders")," information, including ",(0,i.kt)("inlineCode",{parentName:"li"},"onboarding")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."))),(0,i.kt)("li",{parentName:"ol"},"Add rejections in case the mutation doesn't succeed (starts on line 154)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u25b6 Run")," your mutation.")),(0,i.kt)("h2",{id:"mutation"},"API mutation"),(0,i.kt)("p",null,"\ud83d\udd0e ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=bXV0YXRpb24gY3JlYXRlQ2FzZSB7CiAgY3JlYXRlQ2FwaXRhbERlcG9zaXRDYXNlKAogICAgaW5wdXQ6IHsKICAgICAgY29tcGFueU5hbWU6ICJNeUJyYW5kIgogICAgICBjb21wYW55U2hhcmVob2xkZXJzOiB7CiAgICAgICAgY2FwaXRhbERlcG9zaXRBbW91bnQ6IHsgdmFsdWU6ICIxMDAwMCIsIGN1cnJlbmN5OiAiRVVSIiB9CiAgICAgICAgbmFtZTogIkNvbXBhbnkgc2hhcmVob2xkZXIiCiAgICAgICAgb25ib2FyZGluZ0luZm86IHsKICAgICAgICAgIGluZGl2aWR1YWxVbHRpbWF0ZUJlbmVmaWNpYWxPd25lcnM6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgIHR5cGU6IExlZ2FsUmVwcmVzZW50YXRpdmUKICAgICAgICAgICAgICBiaXJ0aENpdHk6ICJQYXJpcyIKICAgICAgICAgICAgICBiaXJ0aENpdHlQb3N0YWxDb2RlOiAiNzUwMDAiCiAgICAgICAgICAgICAgYmlydGhDb3VudHJ5Q29kZTogIkZSQSIKICAgICAgICAgICAgICBiaXJ0aERhdGU6ICIwMi8wMi8xOTg4IgogICAgICAgICAgICAgIGRpcmVjdDogZmFsc2UKICAgICAgICAgICAgICBmaXJzdE5hbWU6ICJKdWxlcyIKICAgICAgICAgICAgICBsYXN0TmFtZTogIkZsZXVyeSIKICAgICAgICAgICAgICB0b3RhbENhcGl0YWxQZXJjZW50YWdlOiA1MQogICAgICAgICAgICB9CiAgICAgICAgICAgIHsKICAgICAgICAgICAgICB0eXBlOiBIYXNDYXBpdGFsCiAgICAgICAgICAgICAgYmlydGhDaXR5OiAiUGFyaXMiCiAgICAgICAgICAgICAgYmlydGhDaXR5UG9zdGFsQ29kZTogIjc1MDAwIgogICAgICAgICAgICAgIGJpcnRoQ291bnRyeUNvZGU6ICJGUkEiCiAgICAgICAgICAgICAgYmlydGhEYXRlOiAiMDkvMDEvMTk4OSIKICAgICAgICAgICAgICBkaXJlY3Q6IGZhbHNlCiAgICAgICAgICAgICAgZmlyc3ROYW1lOiAiTWFsaWthIgogICAgICAgICAgICAgIGxhc3ROYW1lOiAiTmdvbWEiCiAgICAgICAgICAgICAgdG90YWxDYXBpdGFsUGVyY2VudGFnZTogMjYKICAgICAgICAgICAgfQogICAgICAgICAgXQogICAgICAgICAgYWNjb3VudE5hbWU6ICJNeUJyYW5kIGNvbXBhbnkgYWNjb3VudCIKICAgICAgICAgIGJ1c2luZXNzQWN0aXZpdHk6IEFydHMKICAgICAgICAgIGJ1c2luZXNzQWN0aXZpdHlEZXNjcmlwdGlvbjogIkRlc2NyaXB0aW9uIHJlcXVpcmVkIgogICAgICAgICAgY29tcGFueVR5cGU6IENvbXBhbnkKICAgICAgICAgIGVtYWlsOiAiYm9uam91ckBteWJyYW5kLmZyIgogICAgICAgICAgaXNSZWdpc3RlcmVkOiBmYWxzZQogICAgICAgICAgbGFuZ3VhZ2U6ICJmciIKICAgICAgICAgIG1vbnRobHlQYXltZW50Vm9sdW1lOiBCZXR3ZWVuNTAwMDBBbmQxMDAwMDAKICAgICAgICAgIG5hbWU6ICJDb21wYW55IHNoYXJlaG9sZGVyIgogICAgICAgICAgcmVzaWRlbmN5QWRkcmVzczogewogICAgICAgICAgICBhZGRyZXNzTGluZTE6ICIxMjMgYXZlbnVlIGRlIFBhcmlzIgogICAgICAgICAgICBjaXR5OiAiUGFyaXMiCiAgICAgICAgICAgIGNvdW50cnk6ICJGUkEiCiAgICAgICAgICAgIHBvc3RhbENvZGU6ICI3NTAwMCIKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgICAgaW5kaXZpZHVhbFNoYXJlaG9sZGVyczogewogICAgICAgIGZpcnN0TmFtZTogIkhlbnJpIgogICAgICAgIGxhc3ROYW1lOiAiRHVwb250IgogICAgICAgIGJpcnRoRGF0ZTogIjAxLzExLzE5OTIiCiAgICAgICAgbmF0aW9uYWxpdHk6ICJGUkEiCiAgICAgICAgY2FwaXRhbERlcG9zaXRBbW91bnQ6IHsgdmFsdWU6ICI1MDAiLCBjdXJyZW5jeTogIkVVUiIgfQogICAgICAgIG9uYm9hcmRpbmdJbmZvOiB7CiAgICAgICAgICBlbWFpbDogImhlbnJpLmR1cG9udEBteWJyYW5kLmZyIgogICAgICAgICAgbGFuZ3VhZ2U6ICJmciIKICAgICAgICAgIGVtcGxveW1lbnRTdGF0dXM6IEVtcGxveWVlCiAgICAgICAgICBtb250aGx5SW5jb21lOiBCZXR3ZWVuMTUwMEFuZDMwMDAKICAgICAgICAgIHJlc2lkZW5jeUFkZHJlc3M6IHsKICAgICAgICAgICAgYWRkcmVzc0xpbmUxOiAiMSBydWUgZGUgbGEgUGFpeCIKICAgICAgICAgICAgY2l0eTogIlBhcmlzIgogICAgICAgICAgICBjb3VudHJ5OiAiRlJBIgogICAgICAgICAgICBwb3N0YWxDb2RlOiAiNzUwMDAiCiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICAgIHRvdGFsQ2FwaXRhbERlcG9zaXRBbW91bnQ6IHsgdmFsdWU6ICIxMDUwMCIsIGN1cnJlbmN5OiAiRVVSIiB9CiAgICAgIG9uYm9hcmRpbmdDYXBpdGFsRGVwb3NpdENvbXBhbnk6IHsKICAgICAgICBpbmRpdmlkdWFsVWx0aW1hdGVCZW5lZmljaWFsT3duZXJzOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHR5cGU6IExlZ2FsUmVwcmVzZW50YXRpdmUKICAgICAgICAgICAgYmlydGhDaXR5OiAiUGFyaXMiCiAgICAgICAgICAgIGJpcnRoQ2l0eVBvc3RhbENvZGU6ICI3NTAwMCIKICAgICAgICAgICAgYmlydGhDb3VudHJ5Q29kZTogIkZSQSIKICAgICAgICAgICAgYmlydGhEYXRlOiAiMDIvMDIvMTk4OCIKICAgICAgICAgICAgZGlyZWN0OiBmYWxzZQogICAgICAgICAgICBmaXJzdE5hbWU6ICJKdWxlcyIKICAgICAgICAgICAgbGFzdE5hbWU6ICJGbGV1cnkiCiAgICAgICAgICAgIHRvdGFsQ2FwaXRhbFBlcmNlbnRhZ2U6IDUxCiAgICAgICAgICB9CiAgICAgICAgICB7CiAgICAgICAgICAgIHR5cGU6IEhhc0NhcGl0YWwKICAgICAgICAgICAgYmlydGhDaXR5OiAiUGFyaXMiCiAgICAgICAgICAgIGJpcnRoQ2l0eVBvc3RhbENvZGU6ICI3NTAwMCIKICAgICAgICAgICAgYmlydGhDb3VudHJ5Q29kZTogIkZSQSIKICAgICAgICAgICAgYmlydGhEYXRlOiAiMDkvMDEvMTk4OSIKICAgICAgICAgICAgZGlyZWN0OiBmYWxzZQogICAgICAgICAgICBmaXJzdE5hbWU6ICJNYWxpa2EiCiAgICAgICAgICAgIGxhc3ROYW1lOiAiTmdvbWEiCiAgICAgICAgICAgIHRvdGFsQ2FwaXRhbFBlcmNlbnRhZ2U6IDI2CiAgICAgICAgICB9CiAgICAgICAgXQogICAgICAgIGFjY291bnROYW1lOiAiTXlCcmFuZCBjb21wYW55IGFjY291bnQiCiAgICAgICAgYWNjb3VudENvdW50cnk6IEZSQQogICAgICAgIGJ1c2luZXNzQWN0aXZpdHk6IEFydHMKICAgICAgICBidXNpbmVzc0FjdGl2aXR5RGVzY3JpcHRpb246ICJEZXNjcmlwdGlvbiByZXF1aXJlZCIKICAgICAgICBjb21wYW55VHlwZTogQ29tcGFueQogICAgICAgIGVtYWlsOiAiYm9uam91ckBteWJyYW5kLmZyIgogICAgICAgIGlzUmVnaXN0ZXJlZDogZmFsc2UKICAgICAgICBsYW5ndWFnZTogImZyIgogICAgICAgIG1vbnRobHlQYXltZW50Vm9sdW1lOiBCZXR3ZWVuMTAwMDBBbmQ1MDAwMAogICAgICB9CiAgICB9CiAgKSB7CiAgICAuLi4gb24gQ3JlYXRlQ2FwaXRhbERlcG9zaXRDYXNlU3VjY2Vzc1BheWxvYWQgewogICAgICBjYXBpdGFsRGVwb3NpdENhc2UgewogICAgICAgIGNvbXBhbnlOYW1lCiAgICAgICAgaWQKICAgICAgICBjb21wYW55T25ib2FyZGluZyB7CiAgICAgICAgICBpZAogICAgICAgICAgY3JlYXRlZEF0CiAgICAgICAgICBpbmZvIHsKICAgICAgICAgICAgdHlwZQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBkb2N1bWVudHMgewogICAgICAgICAgdHlwZQogICAgICAgICAgc3RhdHVzCiAgICAgICAgICBpZAogICAgICAgIH0KICAgICAgICBzaGFyZWhvbGRlcnMgewogICAgICAgICAgaW5mbyB7CiAgICAgICAgICAgIC4uLiBvbiBJbmRpdmlkdWFsU2hhcmVob2xkZXIgewogICAgICAgICAgICAgIF9fdHlwZW5hbWUKICAgICAgICAgICAgICBmaXJzdE5hbWUKICAgICAgICAgICAgICBsYXN0TmFtZQogICAgICAgICAgICB9CiAgICAgICAgICAgIC4uLiBvbiBDb21wYW55U2hhcmVob2xkZXIgewogICAgICAgICAgICAgIF9fdHlwZW5hbWUKICAgICAgICAgICAgICBuYW1lCiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICAgIHN0YXR1cwogICAgICAgICAgaWQKICAgICAgICAgIG9uYm9hcmRpbmcgewogICAgICAgICAgICBpZAogICAgICAgICAgfQogICAgICAgICAgZG9jdW1lbnRzIHsKICAgICAgICAgICAgdHlwZQogICAgICAgICAgICBzdGF0dXMKICAgICAgICAgICAgaWQKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgc3RhdHVzCiAgICAgICAgdG90YWxDYXBpdGFsRGVwb3NpdEFtb3VudCB7CiAgICAgICAgICBjdXJyZW5jeQogICAgICAgICAgdmFsdWUKICAgICAgICB9CiAgICAgICAgdXBkYXRlZEF0CiAgICAgIH0KICAgIH0KICAgIC4uLiBvbiBGb3JiaWRkZW5SZWplY3Rpb24gewogICAgICBfX3R5cGVuYW1lCiAgICAgIG1lc3NhZ2UKICAgIH0KICAgIC4uLiBvbiBCYWRSZXF1ZXN0UmVqZWN0aW9uIHsKICAgICAgX190eXBlbmFtZQogICAgICBtZXNzYWdlCiAgICB9CiAgICAuLi4gb24gSW50ZXJuYWxFcnJvclJlamVjdGlvbiB7CiAgICAgIF9fdHlwZW5hbWUKICAgICAgbWVzc2FnZQogICAgfQogIH0KfQo%3D&tab=api"},"Open the mutation in API Explorer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{4-5,8,33,50,69,70,107,154} showLineNumbers","{4-5,8,33,50,69,70,107,154}":!0,showLineNumbers:!0},'mutation createCase {\n  createCapitalDepositCase(\n    input: {\n      companyName: "MyBrand"\n      companyShareholders: {\n        capitalDepositAmount: { value: "10000", currency: "EUR" }\n        name: "Company shareholder"\n        onboardingInfo: {\n          individualUltimateBeneficialOwners: [\n            {\n              type: LegalRepresentative\n              birthCity: "Paris"\n              birthCityPostalCode: "75000"\n              birthCountryCode: "FRA"\n              birthDate: "02/02/1988"\n              direct: false\n              firstName: "Jules"\n              lastName: "Fleury"\n              totalCapitalPercentage: 51\n            }\n            {\n              type: HasCapital\n              birthCity: "Paris"\n              birthCityPostalCode: "75000"\n              birthCountryCode: "FRA"\n              birthDate: "09/01/1989"\n              direct: false\n              firstName: "Malika"\n              lastName: "Ngoma"\n              totalCapitalPercentage: 26\n            }\n          ]\n          accountName: "MyBrand company account"\n          businessActivity: Arts\n          businessActivityDescription: "Description required"\n          companyType: Company\n          email: "bonjour@mybrand.fr"\n          isRegistered: false\n          language: "fr"\n          monthlyPaymentVolume: Between50000And100000\n          name: "Company shareholder"\n          residencyAddress: {\n            addressLine1: "123 avenue de Paris"\n            city: "Paris"\n            country: "FRA"\n            postalCode: "75000"\n          }\n        }\n      }\n      individualShareholders: {\n        firstName: "Henri"\n        lastName: "Dupont"\n        birthDate: "01/11/1992"\n        nationality: "FRA"\n        capitalDepositAmount: { value: "500", currency: "EUR" }\n        onboardingInfo: {\n          email: "henri.dupont@mybrand.fr"\n          language: "fr"\n          employmentStatus: Employee\n          monthlyIncome: Between1500And3000\n          residencyAddress: {\n            addressLine1: "1 rue de la Paix"\n            city: "Paris"\n            country: "FRA"\n            postalCode: "75000"\n          }\n        }\n      }\n      totalCapitalDepositAmount: { value: "10500", currency: "EUR" }\n      onboardingCapitalDepositCompany: {\n        individualUltimateBeneficialOwners: [\n          {\n            type: LegalRepresentative\n            birthCity: "Paris"\n            birthCityPostalCode: "75000"\n            birthCountryCode: "FRA"\n            birthDate: "02/02/1988"\n            direct: false\n            firstName: "Jules"\n            lastName: "Fleury"\n            totalCapitalPercentage: 51\n          }\n          {\n            type: HasCapital\n            birthCity: "Paris"\n            birthCityPostalCode: "75000"\n            birthCountryCode: "FRA"\n            birthDate: "09/01/1989"\n            direct: false\n            firstName: "Malika"\n            lastName: "Ngoma"\n            totalCapitalPercentage: 26\n          }\n        ]\n        accountName: "MyBrand company account"\n        accountCountry: FRA\n        businessActivity: Arts\n        businessActivityDescription: "Description required"\n        companyType: Company\n        email: "bonjour@mybrand.fr"\n        isRegistered: false\n        language: "fr"\n        monthlyPaymentVolume: Between10000And50000\n      }\n    }\n  ) {\n    ... on CreateCapitalDepositCaseSuccessPayload {\n      capitalDepositCase {\n        companyName\n        id\n        companyOnboarding {\n          id\n          createdAt\n          info {\n            type\n          }\n        }\n        documents {\n          type\n          status\n          id\n        }\n        shareholders {\n          info {\n            ... on IndividualShareholder {\n              __typename\n              firstName\n              lastName\n            }\n            ... on CompanyShareholder {\n              __typename\n              name\n            }\n          }\n          status\n          id\n          onboarding {\n            id\n          }\n          documents {\n            type\n            status\n            id\n          }\n        }\n        status\n        totalCapitalDepositAmount {\n          currency\n          value\n        }\n        updatedAt\n      }\n    }\n    ... on ForbiddenRejection {\n      __typename\n      message\n    }\n    ... on BadRequestRejection {\n      __typename\n      message\n    }\n    ... on InternalErrorRejection {\n      __typename\n      message\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"payload"},"Payload"),(0,i.kt)("p",null,"The options selected in the mutation example produce the following success payload.\nNote several pieces of key information:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your capital deposit case ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (line 6)."),(0,i.kt)("li",{parentName:"ol"},"Your company onboarding ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (line 8)."),(0,i.kt)("li",{parentName:"ol"},"Information about required documents, including the ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"status"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (starts on line 14)."),(0,i.kt)("li",{parentName:"ol"},"Information about all shareholders (starts on line 41), including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Onboarding ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (example line 51)"),(0,i.kt)("li",{parentName:"ul"},"Document ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (example line 57)"))),(0,i.kt)("li",{parentName:"ol"},"Status of the entire capital deposit case (line 100).")),(0,i.kt)("admonition",{title:"Queries",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This information will help you complete your capital deposit."),(0,i.kt)("p",{parentName:"admonition"},"If needed, use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"capitalDepositCase")," query")," to get information about an individual case, or the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"capitalDepositCases")," query")," for information about all ongoing capital deposit cases.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{6,8,14,41,51,57,100} showLineNumbers","{6,8,14,41,51,57,100}":!0,showLineNumbers:!0},'{\n  "data": {\n    "createCapitalDepositCase": {\n      "capitalDepositCase": {\n        "companyName": "MyBrand",\n        "id": "4ca1be36-1760-4966-8303-6f1fcaa3fc6c",\n        "companyOnboarding": {\n          "id": "e29fcd1b-8a94-48d5-93fb-fb58ed667a60",\n          "createdAt": "2023-11-02T10:15:42.093Z",\n          "info": {\n            "type": "Company"\n          }\n        },\n        "documents": [\n          {\n            "type": "ArticlesOfIncorporation",\n            "status": "Pending",\n            "id": "9390583f-f63d-43eb-b1ad-95aa786a76f4"\n          },\n          {\n            "type": "CompanyLeaseAgreement",\n            "status": "Pending",\n            "id": "97c71862-48d2-4f77-b3f7-3f1461cb8bb2"\n          },\n          {\n            "type": "PowerOfAttorney",\n            "status": "Pending",\n            "id": "d75b910b-21c2-45d6-ade6-2fc9af00a0a2"\n          },\n          {\n            "type": "CapitalShareDepositCertificate",\n            "status": "Pending",\n            "id": "3e7c08dd-7d3e-484a-ab93-416bd5337fde"\n          },\n          {\n            "type": "RegisterExtract",\n            "status": "Pending",\n            "id": "f8be85b9-23b6-4722-a179-c23bf3c28842"\n          }\n        ],\n        "shareholders": [\n          {\n            "info": {\n              "__typename": "IndividualShareholder",\n              "firstName": "Henri",\n              "lastName": "Dupont"\n            },\n            "status": "PendingOnboarding",\n            "id": "ba874dca-0c09-482b-beba-ceea3e3fa39d",\n            "onboarding": {\n              "id": "0a5349ba-709d-4e6e-84eb-be19eca2cd0b"\n            },\n            "documents": [\n              {\n                "type": "ProofOfIndividualAddress",\n                "status": "Pending",\n                "id": "4e2581ae-5a31-4499-8f20-fd5ecd5c75f0"\n              },\n              {\n                "type": "ProofOfIdentity",\n                "status": "Pending",\n                "id": "7ceb8a22-8912-4486-9797-f253f9e0ff28"\n              }\n            ]\n          },\n          {\n            "info": {\n              "__typename": "CompanyShareholder",\n              "name": "Company shareholder"\n            },\n            "status": "PendingOnboarding",\n            "id": "ca588da0-bc7a-481d-857f-c3f537a16cf4",\n            "onboarding": {\n              "id": "3737eed1-ba78-484c-8126-3ccb1042730f"\n            },\n            "documents": [\n              {\n                "type": "RegisterExtract",\n                "status": "Pending",\n                "id": "91517975-65dc-4f00-ac0b-9fe601d38ede"\n              },\n              {\n                "type": "ArticlesOfIncorporation",\n                "status": "Pending",\n                "id": "4617c161-b33b-42fc-ac77-4f40d12da7ff"\n              },\n              {\n                "type": "CorporateIncomeTaxReturn",\n                "status": "Pending",\n                "id": "06bfa933-ac8c-4e00-8b3e-492a620807b1"\n              },\n              {\n                "type": "ProofOfIdentity",\n                "status": "Pending",\n                "id": "50b665be-5ff7-43ac-a8a0-451759f5b261"\n              }\n            ]\n          }\n        ],\n        "status": "WaitingForRequirements",\n        "totalCapitalDepositAmount": {\n          "currency": "EUR",\n          "value": "10500"\n        },\n        "updatedAt": "2023-11-02T10:15:42.159Z"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);