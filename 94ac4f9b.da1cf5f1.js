(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(294)),o={id:"staking-overview",title:"Overview",keywords:["staking","overview","ssn","seed node","zilliqa"],description:"Zilliqa Seed Node Staking Overview"},s={id:"staking/staking-overview",isDocsHomePage:!1,title:"Overview",description:"Zilliqa Seed Node Staking Overview",source:"@site/docs/staking/overview.md",permalink:"/docs/staking/staking-overview",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/staking/overview.md",sidebar:"StakingSidebar",next:{title:"Disclaimer",permalink:"/docs/staking/staking-disclaimer"}},c=[{value:"Phase 0",id:"phase-0",children:[]},{value:"Phase 1",id:"phase-1",children:[]},{value:"Phase 1.1",id:"phase-11",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to the seed node staking section. Staking in Zilliqa has been implemented in several phases."),Object(i.b)("h2",{id:"phase-0"},"Phase 0"),Object(i.b)("p",null,"Phase 0 is the initial, past phase of the seed node staking program. Phase 0 is formally described in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-3.md"}),"ZIP-3"),"."),Object(i.b)("p",null,"The goals of phase 0 are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open up the seed nodes network to more operators"),Object(i.b)("li",{parentName:"ul"},"Introduce staking at the seed node operation level")),Object(i.b)("p",null,"A seed node within the staking program is referred to as a ",Object(i.b)("strong",{parentName:"p"},"Staked Seed Node")," or ",Object(i.b)("strong",{parentName:"p"},"SSN"),"."),Object(i.b)("h2",{id:"phase-1"},"Phase 1"),Object(i.b)("p",null,"Phase 1 is the past phase of SSN staking. Phase 1 is formally described in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-11.md"}),"ZIP-11"),"."),Object(i.b)("p",null,"Phase 1 introduces:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A mechanism for stake delegation, which removes the need to deposit $ZIL with an intermediary custodian"),Object(i.b)("li",{parentName:"ul"},"Uncapped staking"),Object(i.b)("li",{parentName:"ul"},"Stake rewards in the form of gZIL token, a ZRC-2 compliant governance token"),Object(i.b)("li",{parentName:"ul"},"Bonding of stake amount")),Object(i.b)("h2",{id:"phase-11"},"Phase 1.1"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"phase1/staking-phase1-overview"}),"Phase 1.1")," is the current phase of SSN staking. It build on top of phase 1 staking and is formally described in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-19.md"}),"ZIP-19"),"."),Object(i.b)("p",null,"Phase 1.1 consists of all features from phase 1 and further introduces"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"transfer stake deposit between accounts"),Object(i.b)("li",{parentName:"ul"},"remove of custom ADT in ",Object(i.b)("inlineCode",{parentName:"li"},"AssignStakeRewards")," transition"),Object(i.b)("li",{parentName:"ul"},"proper removal of empty map entries"),Object(i.b)("li",{parentName:"ul"},"changes to staking parameters in conjuction with changes in Zilliqa ",Object(i.b)("inlineCode",{parentName:"li"},"v8.0.0"))))}p.isMDXComponent=!0},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);