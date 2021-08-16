(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),i=(t(0),t(294)),o={id:"staking-ssn-upgrading",title:"SSN Upgrading (WIP)",keywords:["staking","ssn","resync node","upgrading node","zilliqa"],description:"SSN Upgrading"},c={id:"staking/phase1/ssn-operator/staking-ssn-upgrading",isDocsHomePage:!1,title:"SSN Upgrading (WIP)",description:"SSN Upgrading",source:"@site/docs/staking/phase1/ssn-operator/staking-ssn-upgrading.md",permalink:"/docs/staking/phase1/ssn-operator/staking-ssn-upgrading",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/staking/phase1/ssn-operator/staking-ssn-upgrading.md",sidebar:"StakingSidebar",previous:{title:"SSN Maintenance (WIP)",permalink:"/docs/staking/phase1/ssn-operator/staking-ssn-maintenance"},next:{title:"Smart Contract Error Codes",permalink:"/docs/staking/phase1/staking-error-codes"}},s=[{value:"Upgrading the Seed Node",id:"upgrading-the-seed-node",children:[{value:"Docker",id:"docker",children:[]},{value:"Native Build",id:"native-build",children:[]}]}],p={rightToc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"upgrading-the-seed-node"},"Upgrading the Seed Node"),Object(i.b)("h3",{id:"docker"},"Docker"),Object(i.b)("p",null,"Please refer to the section  ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"staking-ssn-setup#launching-the-node-using-docker"}),"Preparing the node for docker build"),"."),Object(i.b)("h3",{id:"native-build"},"Native Build"),Object(i.b)("p",null,"Please refer to the section  ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"staking-ssn-setup#launching-the-node-using-docker"}),"Preparing the node for native build"),"."))}d.isMDXComponent=!0},294:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,b=u["".concat(o,".").concat(g)]||u[g]||l[g]||i;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);