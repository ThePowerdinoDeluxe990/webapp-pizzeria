(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function C(){}function G(t){return t()}function H(){return Object.create(null)}function E(t){t.forEach(G)}function K(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function D(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function z(){return V(" ")}function R(){return V("")}function L(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function r(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}let S;function j(t){S=t}const $=[],T=[];let q=[];const U=[],Y=Promise.resolve();let F=!1;function Z(){F||(F=!0,Y.then(J))}function M(t){q.push(t)}const A=new Set;let k=0;function J(){if(k!==0)return;const t=S;do{try{for(;k<$.length;){const e=$[k];k++,j(e),W(e.$$)}}catch(e){throw $.length=0,k=0,e}for(j(null),$.length=0,k=0;T.length;)T.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];A.has(n)||(A.add(n),n())}q.length=0}while($.length);for(;U.length;)U.pop()();F=!1,A.clear(),j(t)}function W(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function ee(t){const e=[],n=[];q.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),q=e}const te=new Set;function ne(t,e){t&&t.i&&(te.delete(t),t.i(e))}function se(t,e,n,s){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,n),s||M(()=>{const o=t.$$.on_mount.map(G).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...o):E(o),t.$$.on_mount=[]}),a.forEach(M)}function ie(t,e){const n=t.$$;n.fragment!==null&&(ee(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function re(t,e){t.$$.dirty[0]===-1&&($.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,s,i,a,o,P=[-1]){const u=S;j(t);const c=t.$$={fragment:null,ctx:[],props:a,update:C,not_equal:i,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:H(),dirty:P,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let g=!1;if(c.ctx=n?n(t,e.props||{},(d,_,...v)=>{const w=v.length?v[0]:_;return c.ctx&&i(c.ctx[d],c.ctx[d]=w)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](w),g&&re(t,d)),_}):[],c.update(),g=!0,E(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=X(e.target);c.fragment&&c.fragment.l(d),d.forEach(m)}else c.fragment&&c.fragment.c();e.intro&&ne(t.$$.fragment),se(t,e.target,e.anchor,e.customElement),J()}j(u)}class ce{$destroy(){ie(this,1),this.$destroy=C}$on(e,n){if(!K(n))return C;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!D(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function le(t){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="text-white">Helado</h1> 
    <h4>Sabores:</h4> 

    <h6 class="text-warning">·Fresa,Vainilla,Chocolate,Café</h6> 
    <img alt="postre" src="https://images.hola.com/imagenes/cocina/noticiaslibros/20230412229842/helados-sabores-originales-recetas/1-233-402/helados-varios-adob-t.jpg" class="svelte-14q2fnw"/> 
 
    <h1 class="text-white">Tiramisú</h1> 
    <img alt="postre" src="https://vdmedia.elpais.com/elpaistop/20183/23/201803232226750_1521841141_asset_still.png" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Brownie</h1> 
    <img alt="postre" src="https://img2.rtve.es/imagenes/aqui-tierra-receta-brownie-jesus-monedero/1585576217689.JPG" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Natillas</h1> 
    <img alt="postre" src="https://img2.rtve.es/i/?w=1600&amp;i=1619780561856.jpg" class="svelte-14q2fnw"/>`,r(e,"class","mx-auto text-center bg-secondary w-50")},m(n,s){b(n,e,s)},d(n){n&&m(e)}}}function oe(t){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="text-white">Caprese</h1> 
    <img alt="entrante" src="https://estag.fimagenes.com/imagenesred/2569414_0.jpg?1" class="svelte-14q2fnw"/> 
 
    <h1 class="text-white">Sticks de mozzarella</h1> 
    <img alt="entrante" src="https://i.ytimg.com/vi/BBwKKFFShII/maxresdefault.jpg" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Panecillos de Ajo</h1> 
    <img alt="entrante" src="https://i.ytimg.com/vi/YHhQLlU-VnQ/maxresdefault.jpg" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Patatas Bravas</h1> 
    <img alt="entrante" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/640px-Patatas_bravas_madrid.jpg" class="svelte-14q2fnw"/>`,r(e,"class","mx-auto text-center bg-secondary w-50")},m(n,s){b(n,e,s)},d(n){n&&m(e)}}}function fe(t){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="text-white">Fanta</h1> 
    <img alt="bebida" src="https://www.pngplay.com/wp-content/uploads/12/Fanta-PNG-Photo-Image.png" class="svelte-14q2fnw"/> 
 
    <h1 class="text-white">Pepsi</h1> 
    <img alt="bebida" src="https://www.pngplay.com/wp-content/uploads/1/Pepsi-PNG-Free-Image.png" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Coca Cola</h1> 
    <img alt="bebida" src="https://www.pngall.com/wp-content/uploads/2016/04/Coca-Cola-PNG-Picture.png" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Nestea</h1> 
    <img alt="bebida" src="https://www.fornoantico.es/35-medium_default/nestea-limon.jpg" class="svelte-14q2fnw"/>`,r(e,"class","mx-auto text-center bg-secondary w-50")},m(n,s){b(n,e,s)},d(n){n&&m(e)}}}function ue(t){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="text-white">Pizza Margarita</h1> 
    <img alt="pizza" src="https://www.annarecetasfaciles.com/files/pizza-margarita-1-scaled.jpg" class="svelte-14q2fnw"/> 
 
    <h1 class="text-white">Pizza Pepperoni</h1> 
    <img alt="pizza" src="https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-m.jpg" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Pizza Carbonara</h1> 
    <img alt="pizza" src="https://cocinaabuenashoras.com/files/pizza-carbonara-1-815.jpeg" class="svelte-14q2fnw"/> 

    <h1 class="text-white">Pizza Calzone</h1> 
    <img alt="pizza" src="https://okdiario.com/img/recetas/2017/07/12/pizza-calzone-3.jpg" class="svelte-14q2fnw"/>`,r(e,"class","mx-auto text-center bg-secondary w-50")},m(n,s){b(n,e,s)},d(n){n&&m(e)}}}function de(t){let e,n,s,i,a,o,P,u,c,g,d,_,v,w,O,B;function I(l,y){if(l[0]===1)return ue;if(l[0]===2)return fe;if(l[0]===3)return oe;if(l[0]===4)return le}let x=I(t),f=x&&x(t);return{c(){e=p("link"),n=z(),s=p("div"),i=p("h1"),i.textContent="Menú Pizzeria",a=z(),o=p("p"),o.textContent="Pizzas",P=z(),u=p("p"),u.textContent="Bebidas",c=z(),g=p("p"),g.textContent="Entrantes",d=z(),_=p("p"),_.textContent="Postres",v=z(),f&&f.c(),w=R(),r(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"),r(e,"rel","stylesheet"),r(e,"integrity","sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"),r(e,"crossorigin","anonymous"),r(i,"id","title"),r(i,"class","svelte-14q2fnw"),r(o,"id","1"),r(o,"class","text-center  svelte-14q2fnw"),r(u,"id","2"),r(u,"class","text-center  svelte-14q2fnw"),r(g,"id","3"),r(g,"class","text-center  svelte-14q2fnw"),r(_,"id","4"),r(_,"class","text-center  svelte-14q2fnw"),r(s,"id","menu"),r(s,"class","bg-dark sticky-top svelte-14q2fnw")},m(l,y){h(document.head,e),b(l,n,y),b(l,s,y),h(s,i),h(s,a),h(s,o),h(s,P),h(s,u),h(s,c),h(s,g),h(s,d),h(s,_),b(l,v,y),f&&f.m(l,y),b(l,w,y),O||(B=[L(o,"click",N(t[1])),L(u,"click",N(t[2])),L(g,"click",N(t[3])),L(_,"click",N(t[4]))],O=!0)},p(l,[y]){x!==(x=I(l))&&(f&&f.d(1),f=x&&x(l),f&&(f.c(),f.m(w.parentNode,w)))},i:C,o:C,d(l){m(e),l&&m(n),l&&m(s),l&&m(v),f&&f.d(l),l&&m(w),O=!1,E(B)}}}function pe(t,e,n){let s=1;return[s,()=>n(0,s=1),()=>n(0,s=2),()=>n(0,s=3),()=>n(0,s=4)]}class he extends ce{constructor(e){super(),ae(this,e,pe,de,Q,{})}}new he({target:document.getElementById("app")});
