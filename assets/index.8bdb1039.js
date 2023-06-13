(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function v(){}function ue(t){return t()}function se(){return Object.create(null)}function W(t){t.forEach(ue)}function ae(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function q(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function ge(t){return Object.keys(t).length===0}function he(t,...e){if(t==null)return v;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function be(t,e,r){t.$$.on_destroy.push(he(e,r))}function ze(t,e,r){return t.set(r),e}function a(t,e){t.appendChild(e)}function O(t,e,r){t.insertBefore(e,r||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function Me(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function g(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function V(){return B(" ")}function Ve(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function ye(t){return function(e){return e.preventDefault(),t.call(this,e)}}function l(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ve(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function C(t){$=t}const j=[],ie=[],I=[],le=[],qe=Promise.resolve();let X=!1;function _e(){X||(X=!0,qe.then(fe))}function R(t){I.push(t)}const U=new Set;let G=0;function fe(){const t=$;do{for(;G<j.length;){const e=j[G];G++,C(e),Ze(e.$$)}for(C(null),j.length=0,G=0;ie.length;)ie.pop()();for(let e=0;e<I.length;e+=1){const r=I[e];U.has(r)||(U.add(r),r())}I.length=0}while(j.length);for(;le.length;)le.pop()();X=!1,U.clear(),C(t)}function Ze(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const T=new Set;let D;function we(){D={r:0,c:[],p:D}}function xe(){D.r||W(D.c),D=D.p}function P(t,e){t&&t.i&&(T.delete(t),t.i(e))}function F(t,e,r,n){if(t&&t.o){if(T.has(t))return;T.add(t),D.c.push(()=>{T.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function He(t){t&&t.c()}function me(t,e,r,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,r),n||R(()=>{const f=t.$$.on_mount.map(ue).filter(ae);t.$$.on_destroy?t.$$.on_destroy.push(...f):W(f),t.$$.on_mount=[]}),o.forEach(R)}function Ae(t,e){const r=t.$$;r.fragment!==null&&(W(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function De(t,e){t.$$.dirty[0]===-1&&(j.push(t),_e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,r,n,s,o,f,p=[-1]){const m=$;C(t);const i=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:s,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:se(),dirty:p,skip_bound:!1,root:e.target||m.$$.root};f&&f(i.root);let M=!1;if(i.ctx=r?r(t,e.props||{},(d,z,...c)=>{const Z=c.length?c[0]:z;return i.ctx&&s(i.ctx[d],i.ctx[d]=Z)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](Z),M&&De(t,d)),z}):[],i.update(),M=!0,W(i.before_update),i.fragment=n?n(i.ctx):!1,e.target){if(e.hydrate){const d=ve(e.target);i.fragment&&i.fragment.l(d),d.forEach(_)}else i.fragment&&i.fragment.c();e.intro&&P(t.$$.fragment),me(t,e.target,e.anchor,e.customElement),fe()}C(m)}class pe{$destroy(){Ae(this,1),this.$destroy=v}$on(e,r){if(!ae(r))return v;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const s=n.indexOf(r);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!ge(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const N=[];function Oe(t,e=v){let r;const n=new Set;function s(p){if(Q(t,p)&&(t=p,r)){const m=!N.length;for(const i of n)i[1](),N.push(i,t);if(m){for(let i=0;i<N.length;i+=2)N[i][0](N[i+1]);N.length=0}}}function o(p){s(p(t))}function f(p,m=v){const i=[p,m];return n.add(i),n.size===1&&(r=e(s)||v),p(t),()=>{n.delete(i),n.size===0&&(r(),r=null)}}return{set:s,update:o,subscribe:f}}const Ne="/assets/Licence.dc7cb3e9.jpg";function je(t){let e,r,n;return{c(){e=g("div"),r=g("img"),l(r,"class","rounded-xl"),q(r.src,n=Ne)||l(r,"src",n),l(r,"alt",""),l(e,"class","")},m(s,o){O(s,e,o),a(e,r)},p:v,i:v,o:v,d(s){s&&_(e)}}}class Ce extends pe{constructor(e){super(),de(this,e,null,je,Q,{})}}const Pe="data:image/jpeg;base64,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";function oe(t,e,r){const n=t.slice();return n[3]=e[r],n}function We(t){let e,r;return{c(){e=g("img"),q(e.src,r="https://randomuser.me/api/portraits/women/"+t[3].pictureNumber+".jpg")||l(e,"src",r),l(e,"alt",""),l(e,"class","svelte-1rijmsy")},m(n,s){O(n,e,s)},p(n,s){s&1&&!q(e.src,r="https://randomuser.me/api/portraits/women/"+n[3].pictureNumber+".jpg")&&l(e,"src",r)},d(n){n&&_(e)}}}function ke(t){let e,r;return{c(){e=g("img"),q(e.src,r="https://randomuser.me/api/portraits/men/"+t[3].pictureNumber+".jpg")||l(e,"src",r),l(e,"alt",""),l(e,"class","svelte-1rijmsy")},m(n,s){O(n,e,s)},p(n,s){s&1&&!q(e.src,r="https://randomuser.me/api/portraits/men/"+n[3].pictureNumber+".jpg")&&l(e,"src",r)},d(n){n&&_(e)}}}function Ee(t){let e,r;return{c(){e=g("img"),q(e.src,r="https://randomuser.me/api/portraits/women/"+t[3].pictureNumber+".jpg")||l(e,"src",r),l(e,"alt",""),l(e,"class","svelte-1rijmsy")},m(n,s){O(n,e,s)},p(n,s){s&1&&!q(e.src,r="https://randomuser.me/api/portraits/women/"+n[3].pictureNumber+".jpg")&&l(e,"src",r)},d(n){n&&_(e)}}}function Ye(t){let e,r;return{c(){e=g("img"),q(e.src,r="https://randomuser.me/api/portraits/men/"+t[3].pictureNumber+".jpg")||l(e,"src",r),l(e,"alt",""),l(e,"class","svelte-1rijmsy")},m(n,s){O(n,e,s)},p(n,s){s&1&&!q(e.src,r="https://randomuser.me/api/portraits/men/"+n[3].pictureNumber+".jpg")&&l(e,"src",r)},d(n){n&&_(e)}}}function ce(t){let e,r,n,s,o,f,p,m,i,M,d,z=t[3].name+"",c,Z,u=t[3].surname+"",b,A,w,ee,k,te,E,Y=t[3].gender.substring(0,1)+"",J,re,x;r=new Ce({});function ne(h,H){return h[3].gender=="Male"?Ye:h[3].gender=="Female"?Ee:(o==null&&(o=!!Math.floor(Math.random()*2)),o?ke:We)}let K=ne(t),y=K(t);return{c(){e=g("div"),He(r.$$.fragment),n=V(),s=g("figure"),y.c(),f=V(),p=g("figure"),m=g("img"),M=V(),d=g("p"),c=B(z),Z=V(),b=B(u),A=V(),w=g("p"),w.textContent="892 MOMONA ST",ee=V(),k=g("p"),k.textContent="HONOLULU, HI 96820",te=V(),E=g("p"),J=B(Y),re=V(),l(s,"class","absolute left-2 top-2 w-32 aspect-[1/1.13] svelte-1rijmsy"),q(m.src,i=Pe)||l(m,"src",i),l(m,"alt",""),l(m,"class","svelte-1rijmsy"),l(p,"class","w-32 absolute top-[10rem] left-2 h-[1.4rem] svelte-1rijmsy"),l(d,"class","absolute bottom-8 left-2"),l(w,"class","absolute bottom-5 left-2"),l(k,"class","absolute bottom-2 left-2"),l(E,"class","absolute top-[6.8rem] right-[3.75rem] text-xs font-bold"),l(e,"class","relative text-black text-xs font-bold")},m(h,H){O(h,e,H),me(r,e,null),a(e,n),a(e,s),y.m(s,null),a(e,f),a(e,p),a(p,m),a(e,M),a(e,d),a(d,c),a(d,Z),a(d,b),a(e,A),a(e,w),a(e,ee),a(e,k),a(e,te),a(e,E),a(E,J),a(e,re),x=!0},p(h,H){K===(K=ne(h))&&y?y.p(h,H):(y.d(1),y=K(h),y&&(y.c(),y.m(s,null))),(!x||H&1)&&z!==(z=h[3].name+"")&&S(c,z),(!x||H&1)&&u!==(u=h[3].surname+"")&&S(b,u),(!x||H&1)&&Y!==(Y=h[3].gender.substring(0,1)+"")&&S(J,Y)},i(h){x||(P(r.$$.fragment,h),x=!0)},o(h){F(r.$$.fragment,h),x=!1},d(h){h&&_(e),Ae(r),y.d()}}}function Ke(t){let e,r,n,s,o,f,p,m,i,M,d,z=t[0],c=[];for(let u=0;u<z.length;u+=1)c[u]=ce(oe(t,z,u));const Z=u=>F(c[u],1,1,()=>{c[u]=null});return{c(){e=g("div"),r=g("h1"),r.textContent="McLOVIN Generator",n=V(),s=g("hr"),o=V(),f=g("form"),f.innerHTML=`<div class="justify-center"><div class="w-full"><input type="number" name="ammount" class="border-2 border-black rounded-md p-2 w-fit text-black" placeholder="Ammount"/> 
        <button class="bg-black text-white rounded-md p-2 ml-2">Generate</button></div></div>`,p=V(),m=g("div");for(let u=0;u<c.length;u+=1)c[u].c();l(r,"class","text-5xl text-center font-bold"),l(s,"class","border-8 my-8 border-y-black border-x-transparent"),l(f,"action",""),l(f,"class","w-fit mx-auto flex flex-wrap"),l(m,"class","grid lg:grid-cols-4 gap-1"),l(e,"class","bg-neutral-500 h-screen text-white")},m(u,b){O(u,e,b),a(e,r),a(e,n),a(e,s),a(e,o),a(e,f),a(e,p),a(e,m);for(let A=0;A<c.length;A+=1)c[A].m(m,null);i=!0,M||(d=Ve(f,"submit",ye(t[2])),M=!0)},p(u,[b]){if(b&1){z=u[0];let A;for(A=0;A<z.length;A+=1){const w=oe(u,z,A);c[A]?(c[A].p(w,b),P(c[A],1)):(c[A]=ce(w),c[A].c(),P(c[A],1),c[A].m(m,null))}for(we(),A=z.length;A<c.length;A+=1)Z(A);xe()}},i(u){if(!i){for(let b=0;b<z.length;b+=1)P(c[b]);i=!0}},o(u){c=c.filter(Boolean);for(let b=0;b<c.length;b+=1)F(c[b]);i=!1},d(u){u&&_(e),Me(c,u),M=!1,d()}}}function Le(t,e,r){let n;const s=Oe([]);be(t,s,f=>r(0,n=f));async function o(f){s.set([]);const p=f.target;for(let m=0;m<p.ammount.value;m++){const i=await fetch("https://random-data-api.com/api/v2/users").then(d=>d.json()),M={name:i.first_name,surname:i.last_name,gender:i.gender,email:i.email,phone:i.phone_number,address:i.address.street_address,street:i.address.street_name,city:i.address.city,state:i.address.state,country:i.address.country,zip:i.address.zip_code,pictureNumber:Math.floor(Math.random()*100)};ze(s,n=[...n,M],n)}}return[n,s,o]}class Ge extends pe{constructor(e){super(),de(this,e,Le,Ke,Q,{})}}new Ge({target:document.getElementById("app")});
