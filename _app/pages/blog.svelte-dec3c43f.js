import{S,i as k,s as q,K as C,e as $,c as p,a as d,d as f,b as g,g as _,M as I,N,O as j,q as i,o as u,w as h,x as m,y as v,B as b,l as y,n as D,p as O,Q as V}from"../chunks/vendor-dae407b3.js";import{S as A,B as G}from"../chunks/blog-post-card-0905d0f8.js";import"../chunks/image-f14638ca.js";function K(l){let e,s;const n=l[1].default,t=C(n,l,l[0],null);return{c(){e=$("div"),t&&t.c(),this.h()},l(o){e=p(o,"DIV",{class:!0});var r=d(e);t&&t.l(r),r.forEach(f),this.h()},h(){g(e,"class","grid-container svelte-qnddn2")},m(o,r){_(o,e,r),t&&t.m(e,null),s=!0},p(o,[r]){t&&t.p&&(!s||r&1)&&I(t,n,o,o[0],s?j(n,o[0],r,null):N(o[0]),null)},i(o){s||(i(t,o),s=!0)},o(o){u(t,o),s=!1},d(o){o&&f(e),t&&t.d(o)}}}function M(l,e,s){let{$$slots:n={},$$scope:t}=e;return l.$$set=o=>{"$$scope"in o&&s(0,t=o.$$scope)},[t,n]}class Q extends S{constructor(e){super();k(this,e,M,K,q,{})}}function B(l,e,s){const n=l.slice();return n[1]=e[s],n}function E(l){let e,s;return e=new G({props:{post:l[1]}}),{c(){h(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,t){v(e,n,t),s=!0},p(n,t){const o={};t&1&&(o.post=n[1]),e.$set(o)},i(n){s||(i(e.$$.fragment,n),s=!0)},o(n){u(e.$$.fragment,n),s=!1},d(n){b(e,n)}}}function T(l){let e,s,n=l[0],t=[];for(let r=0;r<n.length;r+=1)t[r]=E(B(l,n,r));const o=r=>u(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=y()},l(r){for(let c=0;c<t.length;c+=1)t[c].l(r);e=y()},m(r,c){for(let a=0;a<t.length;a+=1)t[a].m(r,c);_(r,e,c),s=!0},p(r,c){if(c&1){n=r[0];let a;for(a=0;a<n.length;a+=1){const w=B(r,n,a);t[a]?(t[a].p(w,c),i(t[a],1)):(t[a]=E(w),t[a].c(),i(t[a],1),t[a].m(e.parentNode,e))}for(D(),a=n.length;a<t.length;a+=1)o(a);O()}},i(r){if(!s){for(let c=0;c<n.length;c+=1)i(t[c]);s=!0}},o(r){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)u(t[c]);s=!1},d(r){V(t,r),r&&f(e)}}}function x(l){let e,s,n;return s=new Q({props:{$$slots:{default:[T]},$$scope:{ctx:l}}}),{c(){e=$("div"),h(s.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0});var o=d(e);m(s.$$.fragment,o),o.forEach(f),this.h()},h(){g(e,"class","container")},m(t,o){_(t,e,o),v(s,e,null),n=!0},p(t,o){const r={};o&17&&(r.$$scope={dirty:o,ctx:t}),s.$set(r)},i(t){n||(i(s.$$.fragment,t),n=!0)},o(t){u(s.$$.fragment,t),n=!1},d(t){t&&f(e),b(s)}}}function z(l){let e,s,n;return s=new A({props:{align:"top",title:"All posts",$$slots:{default:[x]},$$scope:{ctx:l}}}),{c(){e=$("section"),h(s.$$.fragment),this.h()},l(t){e=p(t,"SECTION",{id:!0});var o=d(e);m(s.$$.fragment,o),o.forEach(f),this.h()},h(){g(e,"id","blog")},m(t,o){_(t,e,o),v(s,e,null),n=!0},p(t,[o]){const r={};o&17&&(r.$$scope={dirty:o,ctx:t}),s.$set(r)},i(t){n||(i(s.$$.fragment,t),n=!0)},o(t){u(s.$$.fragment,t),n=!1},d(t){t&&f(e),b(s)}}}async function P({fetch:l}){const e="/blog.json",s=await l(e);return s.ok?{props:{posts:await s.json()}}:{status:s.status,error:new Error(`Could not load ${e}`)}}function F(l,e,s){let{posts:n}=e;return l.$$set=t=>{"posts"in t&&s(0,n=t.posts)},[n]}class R extends S{constructor(e){super();k(this,e,F,z,q,{posts:0})}}export{R as default,P as load};
