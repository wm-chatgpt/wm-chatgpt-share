import{l as e,o as t,r as n,k as r,n as o,u as i}from"./@vue.reactivity-54707199.js";import{t as u,p as a,i as s,e as l,n as c,q as f}from"./@vue.runtime-core-6173334e.js";var v,p=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function j(e,t){var n;const i=r();var a,s;return u((()=>{i.value=e()}),(a=((e,t)=>{for(var n in t||(t={}))O.call(t,n)&&d(e,n,t[n]);if(b)for(var n of b(t))w.call(t,n)&&d(e,n,t[n]);return e})({},t),s={flush:null!=(n=null==t?void 0:t.flush)?n:"sync"},m(a,y(s)))),o(i)}const P="undefined"!=typeof window,g=e=>void 0!==e,h=e=>"boolean"==typeof e,T=e=>"function"==typeof e,F=e=>"number"==typeof e,x=e=>"string"==typeof e,A=()=>{};function D(e){return"function"==typeof e?e():i(e)}function E(e,t){return function(...n){return new Promise(((r,o)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(r).catch(o)}))}}P&&(null==(v=null==window?void 0:window.navigator)?void 0:v.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const I=e=>e();function S(e){return e}function k(n){return!!e()&&(t(n),!0)}function q(e,t=200,n={}){return E(function(e,t={}){let n,r,o=A;const i=e=>{clearTimeout(e),o(),o=A};return u=>{const a=D(e),s=D(t.maxWait);return n&&i(n),a<=0||void 0!==s&&s<=0?(r&&(i(r),r=null),Promise.resolve(u())):new Promise(((e,l)=>{o=t.rejectOnCancel?l:e,s&&!r&&(r=setTimeout((()=>{n&&i(n),r=null,e(u())}),s)),n=setTimeout((()=>{r&&i(r),r=null,e(u())}),a)}))}}(t,n),e)}function C(e,t=200,r={}){const o=n(e.value),i=q((()=>{o.value=e.value}),t,r);return a(e,(()=>i())),o}function W(e,t=200,n=!1,r=!0,o=!1){return E(function(e,t=!0,n=!0,r=!1){let o,i,u=0,a=!0,s=A;const l=()=>{o&&(clearTimeout(o),o=void 0,s(),s=A)};return c=>{const f=D(e),v=Date.now()-u,p=()=>i=c();if(l(),f<=0)return u=Date.now(),p();if(v>f&&(n||!a))u=Date.now(),p();else if(t)return new Promise(((e,t)=>{s=r?t:e,o=setTimeout((()=>{u=Date.now(),a=!0,e(p()),l()}),f-v)}));return n||o||(o=setTimeout((()=>a=!0),f)),a=!1,i}}(t,n,r,o),e)}function z(e){return"function"==typeof e?f(e):n(e)}function B(e,t=!0){s()?l(e):t?e():c(e)}function G(e,t,r={}){const{immediate:o=!0}=r,i=n(!1);let u=null;function a(){u&&(clearTimeout(u),u=null)}function s(){i.value=!1,a()}function l(...n){a(),i.value=!0,u=setTimeout((()=>{i.value=!1,u=null,e(...n)}),D(t))}return o&&(i.value=!0,P&&l()),k(s),{isPending:i,start:l,stop:s}}var H=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;function L(e,t,n={}){const r=n,{eventFilter:o=I}=r,i=((e,t)=>{var n={};for(var r in e)J.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&H)for(var r of H(e))t.indexOf(r)<0&&K.call(e,r)&&(n[r]=e[r]);return n})(r,["eventFilter"]);return a(e,E(o,t),i)}var M=Object.defineProperty,N=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Y(e,t,r={}){const o=r,{eventFilter:i}=o,u=((e,t)=>{var n={};for(var r in e)U.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&R)for(var r of R(e))t.indexOf(r)<0&&V.call(e,r)&&(n[r]=e[r]);return n})(o,["eventFilter"]),{eventFilter:a,pause:s,resume:l,isActive:c}=function(e=I){const t=n(!0);return{isActive:t,pause:function(){t.value=!1},resume:function(){t.value=!0},eventFilter:(...n)=>{t.value&&e(...n)}}}(i),f=L(e,t,(v=((e,t)=>{for(var n in t||(t={}))U.call(t,n)&&X(e,n,t[n]);if(R)for(var n of R(t))V.call(t,n)&&X(e,n,t[n]);return e})({},u),N(v,Q({eventFilter:a}))));var v;return{stop:f,pause:s,resume:l,isActive:c}}export{x as a,S as b,B as c,z as d,T as e,g as f,F as g,h,P as i,W as j,C as k,j as l,A as n,D as r,k as t,G as u,Y as w};