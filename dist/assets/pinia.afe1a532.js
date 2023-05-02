import{ag as H,r as z,af as L,g as Y,z as Z,w as G,K as $,i as k,ar as B,ah as A,d as T,e as tt,n as et,L as st,h as nt}from"./@vue.c38ebe97.js";var ct=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let D;const R=t=>D=t,J=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function it(){const t=H(!0),c=t.run(()=>z({}));let s=[],e=[];const r=L({install(u){R(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ct?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const K=()=>{};function V(t,c,s,e=K){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function p(t,...c){t.slice().forEach(s=>{s(...c)})}function x(t,c){t instanceof Map&&c instanceof Map&&c.forEach((s,e)=>t.set(e,s)),t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];C(r)&&C(e)&&t.hasOwnProperty(s)&&!k(e)&&!B(e)?t[s]=x(r,e):t[s]=e}return t}const ot=Symbol();function rt(t){return!C(t)||!t.hasOwnProperty(ot)}const{assign:v}=Object;function ut(t){return!!(k(t)&&t.effect)}function at(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let j;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=L(nt(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return j=N(t,b,c,s,e,!0),j}function N(t,c,s={},e,r,u){let f;const a=v({actions:{}},s),j={deep:!0};let b,y,d=L([]),m=L([]),_;const g=e.state.value[t];!u&&!g&&(e.state.value[t]={}),z({});let O;function F(o){let n;b=y=!1,typeof o=="function"?(o(e.state.value[t]),n={type:I.patchFunction,storeId:t,events:_}):(x(e.state.value[t],o),n={type:I.patchObject,payload:o,storeId:t,events:_});const h=O=Symbol();et().then(()=>{O===h&&(b=!0)}),y=!0,p(d,n,e.state.value[t])}const W=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:K;function q(){f.stop(),d=[],m=[],e._s.delete(t)}function M(o,n){return function(){R(e);const h=Array.from(arguments),S=[],w=[];function U(i){S.push(i)}function X(i){w.push(i)}p(m,{args:h,name:o,store:l,after:U,onError:X});let E;try{E=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return E instanceof Promise?E.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,E),E)}}const Q={_p:e,$id:t,$onAction:V.bind(null,m),$patch:F,$reset:W,$subscribe(o,n={}){const h=V(d,o,n.detached,()=>S()),S=f.run(()=>G(()=>e.state.value[t],w=>{(n.flush==="sync"?y:b)&&o({storeId:t,type:I.direct,events:_},w)},v({},j,n)));return h},$dispose:q},l=$(Q);e._s.set(t,l);const P=e._e.run(()=>(f=H(),f.run(()=>c())));for(const o in P){const n=P[o];if(k(n)&&!ut(n)||B(n))u||(g&&rt(n)&&(k(n)?n.value=g[o]:x(n,g[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const h=M(o,n);P[o]=h,a.actions[o]=n}}return v(l,P),v(A(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:o=>{F(n=>{v(n,o)})}}),e._p.forEach(o=>{v(l,f.run(()=>o({store:l,app:e._a,pinia:e,options:a})))}),g&&u&&s.hydrate&&s.hydrate(l.$state,g),b=!0,y=!0,l}function lt(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function f(a,j){const b=Y();return a=a||b&&Z(J,null),a&&R(a),a=D,a._s.has(e)||(u?N(e,c,r,a):at(e,r,a)),a._s.get(e)}return f.$id=e,f}export{it as c,lt as d};