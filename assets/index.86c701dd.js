const hs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};hs();function $r(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=$r(gs);function Mi(e){return!!e||e===""}function Sn(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?Cs(r):Sn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(ie(e))return e}}const bs=/;(?![^(]*\))/g,ys=/:(.+)/;function Cs(e){const t={};return e.split(bs).forEach(n=>{if(n){const r=n.split(ys);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zr(e){let t="";if(fe(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=zr(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xs=e=>fe(e)?e:e==null?"":D(e)||ie(e)&&(e.toString===Ni||!z(e.toString))?JSON.stringify(e,Ii,2):String(e),Ii=(e,t)=>t&&t.__v_isRef?Ii(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Pi(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!D(t)&&!Hi(t)?String(t):t,K={},Mt=[],Ee=()=>{},ws=()=>!1,_s=/^on[^a-z]/,Nn=e=>_s.test(e),Br=e=>e.startsWith("onUpdate:"),le=Object.assign,Vr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},As=Object.prototype.hasOwnProperty,j=(e,t)=>As.call(e,t),D=Array.isArray,It=e=>Hn(e)==="[object Map]",Pi=e=>Hn(e)==="[object Set]",z=e=>typeof e=="function",fe=e=>typeof e=="string",jr=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Si=e=>ie(e)&&z(e.then)&&z(e.catch),Ni=Object.prototype.toString,Hn=e=>Ni.call(e),ks=e=>Hn(e).slice(8,-1),Hi=e=>Hn(e)==="[object Object]",Ur=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ls=/-(\w)/g,He=Fn(e=>e.replace(Ls,(t,n)=>n?n.toUpperCase():"")),Es=/\B([A-Z])/g,Ft=Fn(e=>e.replace(Es,"-$1").toLowerCase()),Rn=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Fn(e=>e?`on${Rn(e)}`:""),Qt=(e,t)=>!Object.is(e,t),Qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const Ts=()=>La||(La=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Pe;class Os{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Pe&&(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Ms(e,t=Pe){t&&t.active&&t.effects.push(e)}const Wr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ri=e=>(e.w&nt)>0,Di=e=>(e.n&nt)>0,Is=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Ps=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ri(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},cr=new WeakMap;let jt=0,nt=1;const ur=30;let Ae;const pt=Symbol(""),dr=Symbol("");class Yr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ms(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,et=!0,nt=1<<++jt,jt<=ur?Is(this):Ea(this),this.fn()}finally{jt<=ur&&Ps(this),nt=1<<--jt,Ae=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Ea(this),this.onStop&&this.onStop(),this.active=!1)}}function Ea(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const $i=[];function Rt(){$i.push(et),et=!1}function Dt(){const e=$i.pop();et=e===void 0?!0:e}function ve(e,t,n){if(et&&Ae){let r=cr.get(e);r||cr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Wr()),zi(a)}}function zi(e,t){let n=!1;jt<=ur?Di(e)||(e.n|=nt,n=!Ri(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Be(e,t,n,r,a,i){const o=cr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?Ur(n)&&s.push(o.get("length")):(s.push(o.get(pt)),It(e)&&s.push(o.get(dr)));break;case"delete":D(e)||(s.push(o.get(pt)),It(e)&&s.push(o.get(dr)));break;case"set":It(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&mr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);mr(Wr(l))}}function mr(e,t){for(const n of D(e)?e:[...e])(n!==Ae||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ss=$r("__proto__,__v_isRef,__isVue"),Bi=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(jr)),Ns=Zr(),Hs=Zr(!1,!0),Fs=Zr(!0),Ta=Rs();function Rs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=W(this)[t].apply(this,n);return Dt(),r}}),e}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Qs:Yi:t?Wi:Ui).get(r))return r;const o=D(r);if(!e&&o&&j(Ta,a))return Reflect.get(Ta,a,i);const s=Reflect.get(r,a,i);return(jr(a)?Bi.has(a):Ss(a))||(e||ve(r,"get",a),t)?s:ae(s)?!o||!Ur(a)?s.value:s:ie(s)?e?Zi(s):Xr(s):s}}const Ds=Vi(),$s=Vi(!0);function Vi(e=!1){return function(n,r,a,i){let o=n[r];if(en(o)&&ae(o)&&!ae(a))return!1;if(!e&&!en(a)&&(Ki(a)||(a=W(a),o=W(o)),!D(n)&&ae(o)&&!ae(a)))return o.value=a,!0;const s=D(n)&&Ur(r)?Number(r)<n.length:j(n,r),l=Reflect.set(n,r,a,i);return n===W(i)&&(s?Qt(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function zs(e,t){const n=j(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function Bs(e,t){const n=Reflect.has(e,t);return(!jr(t)||!Bi.has(t))&&ve(e,"has",t),n}function Vs(e){return ve(e,"iterate",D(e)?"length":pt),Reflect.ownKeys(e)}const ji={get:Ns,set:Ds,deleteProperty:zs,has:Bs,ownKeys:Vs},js={get:Fs,set(e,t){return!0},deleteProperty(e,t){return!0}},Us=le({},ji,{get:Hs,set:$s}),Kr=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);t!==i&&!n&&ve(a,"get",t),!n&&ve(a,"get",i);const{has:o}=Dn(a),s=r?Kr:n?Jr:tn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return e!==a&&!t&&ve(r,"has",e),!t&&ve(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&ve(W(e),"iterate",pt),Reflect.get(e,"size",e)}function Oa(e){e=W(e);const t=W(this);return Dn(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function Ma(e,t){t=W(t);const n=W(this),{has:r,get:a}=Dn(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Qt(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function Ia(e){const t=W(this),{has:n,get:r}=Dn(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Pa(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=t?Kr:e?Jr:tn;return!e&&ve(s,"iterate",pt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),o=It(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Kr:t?Jr:tn;return!t&&ve(i,"iterate",l?dr:pt),{next(){const{value:m,done:p}=c.next();return p?{value:m,done:p}:{value:s?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Ws(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Oa,set:Ma,delete:Ia,clear:Pa,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Oa,set:Ma,delete:Ia,clear:Pa,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[Ys,Zs,Ks,qs]=Ws();function qr(e,t){const n=t?e?qs:Ks:e?Zs:Ys;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(j(n,a)&&a in r?n:r,a,i)}const Xs={get:qr(!1,!1)},Gs={get:qr(!1,!0)},Js={get:qr(!0,!1)},Ui=new WeakMap,Wi=new WeakMap,Yi=new WeakMap,Qs=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(e){return e.__v_skip||!Object.isExtensible(e)?0:el(ks(e))}function Xr(e){return en(e)?e:Gr(e,!1,ji,Xs,Ui)}function nl(e){return Gr(e,!1,Us,Gs,Wi)}function Zi(e){return Gr(e,!0,js,Js,Yi)}function Gr(e,t,n,r,a){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=tl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Pt(e){return en(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function en(e){return!!(e&&e.__v_isReadonly)}function Ki(e){return!!(e&&e.__v_isShallow)}function qi(e){return Pt(e)||en(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Xi(e){return wn(e,"__v_skip",!0),e}const tn=e=>ie(e)?Xr(e):e,Jr=e=>ie(e)?Zi(e):e;function Gi(e){et&&Ae&&(e=W(e),zi(e.dep||(e.dep=Wr())))}function Ji(e,t){e=W(e),e.dep&&mr(e.dep)}function ae(e){return!!(e&&e.__v_isRef===!0)}function ot(e){return rl(e,!1)}function rl(e,t){return ae(e)?e:new al(e,t)}class al{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:tn(t)}get value(){return Gi(this),this._value}set value(t){t=this.__v_isShallow?t:W(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:tn(t),Ji(this))}}function De(e){return ae(e)?e.value:e}const il={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return Pt(e)?e:new Proxy(e,il)}class ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yr(t,()=>{this._dirty||(this._dirty=!0,Ji(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return Gi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function sl(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new ol(r,a,i||!a,n)}function tt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){$n(i,t,n)}return a}function xe(e,t,n,r){if(z(e)){const i=tt(e,t,n,r);return i&&Si(i)&&i.catch(o=>{$n(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(xe(e[i],t,n,r));return a}function $n(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){tt(l,null,10,[e,o,s]);return}}ll(e,n,a,r)}function ll(e,t,n,r=!0){console.error(e)}let _n=!1,pr=!1;const ge=[];let $e=0;const Zt=[];let Ut=null,kt=0;const Kt=[];let Je=null,Lt=0;const eo=Promise.resolve();let Qr=null,hr=null;function fl(e){const t=Qr||eo;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=$e+1,n=ge.length;for(;t<n;){const r=t+n>>>1;nn(ge[r])<e?t=r+1:n=r}return t}function to(e){(!ge.length||!ge.includes(e,_n&&e.allowRecurse?$e+1:$e))&&e!==hr&&(e.id==null?ge.push(e):ge.splice(cl(e.id),0,e),no())}function no(){!_n&&!pr&&(pr=!0,Qr=eo.then(io))}function ul(e){const t=ge.indexOf(e);t>$e&&ge.splice(t,1)}function ro(e,t,n,r){D(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),no()}function dl(e){ro(e,Ut,Zt,kt)}function ml(e){ro(e,Je,Kt,Lt)}function ea(e,t=null){if(Zt.length){for(hr=t,Ut=[...new Set(Zt)],Zt.length=0,kt=0;kt<Ut.length;kt++)Ut[kt]();Ut=null,kt=0,hr=null,ea(e,t)}}function ao(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>nn(n)-nn(r)),Lt=0;Lt<Je.length;Lt++)Je[Lt]();Je=null,Lt=0}}const nn=e=>e.id==null?1/0:e.id;function io(e){pr=!1,_n=!0,ea(e),ge.sort((n,r)=>nn(n)-nn(r));const t=Ee;try{for($e=0;$e<ge.length;$e++){const n=ge[$e];n&&n.active!==!1&&tt(n,null,14)}}finally{$e=0,ge.length=0,ao(),_n=!1,Qr=null,(ge.length||Zt.length||Kt.length)&&io(e)}}function pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[d]||K;p?a=n.map(b=>b.trim()):m&&(a=n.map(Fi))}let s,l=r[s=Jn(t)]||r[s=Jn(He(t))];!l&&i&&(l=r[s=Jn(Ft(t))]),l&&xe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,xe(c,e,6,a)}}function oo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=c=>{const d=oo(c,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):le(o,i),r.set(e,o),o)}function zn(e,t){return!e||!Nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,Ft(t))||j(e,t))}let ke=null,so=null;function An(e){const t=ke;return ke=e,so=e&&e.type.__scopeId||null,t}function lo(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ja(-1);const i=An(t),o=e(...a);return An(i),r._d&&ja(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function er(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:p,setupState:b,ctx:M,inheritAttrs:T}=e;let I,C;const L=An(e);try{if(n.shapeFlag&4){const $=a||r;I=Se(d.call($,$,m,i,b,p,M)),C=l}else{const $=t;I=Se($.length>1?$(i,{attrs:l,slots:s,emit:c}):$(i,null)),C=t.props?l:hl(l)}}catch($){qt.length=0,$n($,e,1),I=re(Te)}let F=I;if(C&&T!==!1){const $=Object.keys(C),{shapeFlag:V}=F;$.length&&V&7&&(o&&$.some(Br)&&(C=gl(C,o)),F=vt(F,C))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),I=F,An(L),I}const hl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Nn(n))&&((t||(t={}))[n]=e[n]);return t},gl=(e,t)=>{const n={};for(const r in e)(!Br(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const p=d[m];if(o[p]!==r[p]&&!zn(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Sa(r,o,c):!0:!!o;return!1}function Sa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!zn(n,i))return!0}return!1}function bl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const yl=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):ml(e)}function xl(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function tr(e,t,n=!1){const r=oe||ke;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const Na={};function hn(e,t,n){return fo(e,t,n)}function fo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=oe;let l,c=!1,d=!1;if(ae(e)?(l=()=>e.value,c=Ki(e)):Pt(e)?(l=()=>e,r=!0):D(e)?(d=!0,c=e.some(Pt),l=()=>e.map(C=>{if(ae(C))return C.value;if(Pt(C))return Et(C);if(z(C))return tt(C,s,2)})):z(e)?t?l=()=>tt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xe(e,s,3,[p])}:l=Ee,t&&r){const C=l;l=()=>Et(C())}let m,p=C=>{m=I.onStop=()=>{tt(C,s,4)}};if(rn)return p=Ee,t?n&&xe(t,s,3,[l(),d?[]:void 0,p]):l(),Ee;let b=d?[]:Na;const M=()=>{if(!!I.active)if(t){const C=I.run();(r||c||(d?C.some((L,F)=>Qt(L,b[F])):Qt(C,b)))&&(m&&m(),xe(t,s,3,[C,b===Na?void 0:b,p]),b=C)}else I.run()};M.allowRecurse=!!t;let T;a==="sync"?T=M:a==="post"?T=()=>me(M,s&&s.suspense):T=()=>{!s||s.isMounted?dl(M):M()};const I=new Yr(l,T);return t?n?M():b=I.run():a==="post"?me(I.run.bind(I),s&&s.suspense):I.run(),()=>{I.stop(),s&&s.scope&&Vr(s.scope.effects,I)}}function wl(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?co(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=oe;Ht(this);const s=fo(a,i.bind(r),n);return o?Ht(o):gt(),s}function co(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Et(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))Et(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)Et(e[n],t);else if(Pi(e)||It(e))e.forEach(n=>{Et(n,t)});else if(Hi(e))for(const n in e)Et(e[n],t);return e}function _l(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return go(()=>{e.isMounted=!0}),vo(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],Al={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},setup(e,{slots:t}){const n=ff(),r=_l();let a;return()=>{const i=t.default&&po(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Te){o=T;break}}const s=W(e),{mode:l}=s;if(r.isLeaving)return nr(o);const c=Ha(o);if(!c)return nr(o);const d=gr(c,s,r,n);vr(c,d);const m=n.subTree,p=m&&Ha(m);let b=!1;const{getTransitionKey:M}=c.type;if(M){const T=M();a===void 0?a=T:T!==a&&(a=T,b=!0)}if(p&&p.type!==Te&&(!ut(c,p)||b)){const T=gr(p,s,r,n);if(vr(p,T),l==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update()},nr(o);l==="in-out"&&c.type!==Te&&(T.delayLeave=(I,C,L)=>{const F=mo(r,p);F[String(p.key)]=p,I._leaveCb=()=>{C(),I._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=L})}return o}}},uo=Al;function mo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function gr(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:b,onLeaveCancelled:M,onBeforeAppear:T,onAppear:I,onAfterAppear:C,onAppearCancelled:L}=t,F=String(e.key),$=mo(n,e),V=(B,q)=>{B&&xe(B,r,9,q)},te={mode:i,persisted:o,beforeEnter(B){let q=s;if(!n.isMounted)if(a)q=T||s;else return;B._leaveCb&&B._leaveCb(!0);const Y=$[F];Y&&ut(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),V(q,[B])},enter(B){let q=l,Y=c,de=d;if(!n.isMounted)if(a)q=I||l,Y=C||c,de=L||d;else return;let ce=!1;const H=B._enterCb=ne=>{ce||(ce=!0,ne?V(de,[B]):V(Y,[B]),te.delayedLeave&&te.delayedLeave(),B._enterCb=void 0)};q?(q(B,H),q.length<=1&&H()):H()},leave(B,q){const Y=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return q();V(m,[B]);let de=!1;const ce=B._leaveCb=H=>{de||(de=!0,q(),H?V(M,[B]):V(b,[B]),B._leaveCb=void 0,$[Y]===e&&delete $[Y])};$[Y]=e,p?(p(B,ce),p.length<=1&&ce()):ce()},clone(B){return gr(B,t,n,r)}};return te}function nr(e){if(Bn(e))return e=vt(e),e.children=null,e}function Ha(e){return Bn(e)?e.children?e.children[0]:void 0:e}function vr(e,t){e.shapeFlag&6&&e.component?vr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function po(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&a++,r=r.concat(po(o.children,t,s))):(t||o.type!==Te)&&r.push(s!=null?vt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function it(e){return z(e)?{setup:e,name:e.name}:e}const br=e=>!!e.type.__asyncLoader,Bn=e=>e.type.__isKeepAlive;function kl(e,t){ho(e,"a",t)}function Ll(e,t){ho(e,"da",t)}function ho(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Vn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Bn(a.parent.vnode)&&El(r,t,n,a),a=a.parent}}function El(e,t,n,r){const a=Vn(t,e,r,!0);bo(()=>{Vr(r[t],a)},n)}function Vn(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),Ht(n);const s=xe(t,n,e,o);return gt(),Dt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=oe)=>(!rn||e==="sp")&&Vn(e,t,n),Tl=We("bm"),go=We("m"),Ol=We("bu"),Ml=We("u"),vo=We("bum"),bo=We("um"),Il=We("sp"),Pl=We("rtg"),Sl=We("rtc");function Nl(e,t=oe){Vn("ec",e,t)}let yr=!0;function Hl(e){const t=Co(e),n=e.proxy,r=e.ctx;yr=!1,t.beforeCreate&&Fa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:p,beforeUpdate:b,updated:M,activated:T,deactivated:I,beforeDestroy:C,beforeUnmount:L,destroyed:F,unmounted:$,render:V,renderTracked:te,renderTriggered:B,errorCaptured:q,serverPrefetch:Y,expose:de,inheritAttrs:ce,components:H,directives:ne,filters:Oe}=t;if(c&&Fl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const X=o[ee];z(X)&&(r[ee]=X.bind(n))}if(a){const ee=a.call(n,n);ie(ee)&&(e.data=Xr(ee))}if(yr=!0,i)for(const ee in i){const X=i[ee],Fe=z(X)?X.bind(n,n):z(X.get)?X.get.bind(n,n):Ee,qn=!z(X)&&z(X.set)?X.set.bind(n):Ee,zt=Ce({get:Fe,set:qn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>zt.value,set:xt=>zt.value=xt})}if(s)for(const ee in s)yo(s[ee],r,n,ee);if(l){const ee=z(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(X=>{xl(X,ee[X])})}d&&Fa(d,e,"c");function se(ee,X){D(X)?X.forEach(Fe=>ee(Fe.bind(n))):X&&ee(X.bind(n))}if(se(Tl,m),se(go,p),se(Ol,b),se(Ml,M),se(kl,T),se(Ll,I),se(Nl,q),se(Sl,te),se(Pl,B),se(vo,L),se(bo,$),se(Il,Y),D(de))if(de.length){const ee=e.exposed||(e.exposed={});de.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:Fe=>n[X]=Fe})})}else e.exposed||(e.exposed={});V&&e.render===Ee&&(e.render=V),ce!=null&&(e.inheritAttrs=ce),H&&(e.components=H),ne&&(e.directives=ne)}function Fl(e,t,n=Ee,r=!1){D(e)&&(e=Cr(e));for(const a in e){const i=e[a];let o;ie(i)?"default"in i?o=tr(i.from||a,i.default,!0):o=tr(i.from||a):o=tr(i),ae(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Fa(e,t,n){xe(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yo(e,t,n,r){const a=r.includes(".")?co(n,r):()=>n[r];if(fe(e)){const i=t[e];z(i)&&hn(a,i)}else if(z(e))hn(a,e.bind(n));else if(ie(e))if(D(e))e.forEach(i=>yo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&hn(a,i,e)}}function Co(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>kn(l,c,o,!0)),kn(l,t,o)),i.set(t,l),l}function kn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&kn(e,i,n,!0),a&&a.forEach(o=>kn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rl={data:Ra,props:ct,emits:ct,methods:ct,computed:ct,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:ct,directives:ct,watch:$l,provide:Ra,inject:Dl};function Ra(e,t){return t?e?function(){return le(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Dl(e,t){return ct(Cr(e),Cr(t))}function Cr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?le(le(Object.create(null),e),t):t}function $l(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function zl(e,t,n,r=!1){const a={},i={};wn(i,jn,1),e.propsDefaults=Object.create(null),xo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:nl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Bl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=W(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let p=d[m];if(zn(e.emitsOptions,p))continue;const b=t[p];if(l)if(j(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const M=He(p);a[M]=xr(l,s,M,b,e,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{xo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!j(t,m)&&((d=Ft(m))===m||!j(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=xr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!j(t,m)&&!0)&&(delete i[m],c=!0)}c&&Be(e,"set","$attrs")}function xo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(pn(l))continue;const c=t[l];let d;a&&j(a,d=He(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=W(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=xr(a,l,m,c[m],e,!j(c,m))}}return o}function xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=j(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ht(a),r=c[n]=l.call(null,t),gt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function wo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const d=m=>{l=!0;const[p,b]=wo(m,t,!0);le(o,p),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,Mt),Mt;if(D(i))for(let d=0;d<i.length;d++){const m=He(i[d]);Da(m)&&(o[m]=K)}else if(i)for(const d in i){const m=He(d);if(Da(m)){const p=i[d],b=o[m]=D(p)||z(p)?{type:p}:p;if(b){const M=Ba(Boolean,b.type),T=Ba(String,b.type);b[0]=M>-1,b[1]=T<0||M<T,(M>-1||j(b,"default"))&&s.push(m)}}}const c=[o,s];return r.set(e,c),c}function Da(e){return e[0]!=="$"}function $a(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function za(e,t){return $a(e)===$a(t)}function Ba(e,t){return D(t)?t.findIndex(n=>za(n,e)):z(t)&&za(t,e)?0:-1}const _o=e=>e[0]==="_"||e==="$stable",ta=e=>D(e)?e.map(Se):[Se(e)],Vl=(e,t,n)=>{const r=lo((...a)=>ta(t(...a)),n);return r._c=!1,r},Ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_o(a))continue;const i=e[a];if(z(i))t[a]=Vl(a,i,r);else if(i!=null){const o=ta(i);t[a]=()=>o}}},ko=(e,t)=>{const n=ta(t);e.slots.default=()=>n},jl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),wn(t,"_",n)):Ao(t,e.slots={})}else e.slots={},t&&ko(e,t);wn(e.slots,jn,1)},Ul=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ao(t,a)),o=t}else t&&(ko(e,t),o={default:1});if(i)for(const s in a)!_o(s)&&!(s in o)&&delete a[s]};function st(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Rt(),xe(l,n,8,[e.el,s,e,t]),Dt())}}function Lo(){return{app:null,config:{isNativeTag:ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Yl(e,t){return function(r,a=null){z(r)||(r=Object.assign({},r)),a!=null&&!ie(a)&&(a=null);const i=Lo(),o=new Set;let s=!1;const l=i.app={_uid:Wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:gf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...d)):z(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const p=re(r,a);return p.appContext=i,d&&t?t(p,c):e(p,c,m),s=!0,l._container=c,c.__vue_app__=l,aa(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function wr(e,t,n,r,a=!1){if(D(e)){e.forEach((p,b)=>wr(p,t&&(D(t)?t[b]:t),n,r,a));return}if(br(r)&&!a)return;const i=r.shapeFlag&4?aa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(fe(c)?(d[c]=null,j(m,c)&&(m[c]=null)):ae(c)&&(c.value=null)),z(l))tt(l,s,12,[o,d]);else{const p=fe(l),b=ae(l);if(p||b){const M=()=>{if(e.f){const T=p?d[l]:l.value;a?D(T)&&Vr(T,i):D(T)?T.includes(i)||T.push(i):p?(d[l]=[i],j(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=o,j(m,l)&&(m[l]=o)):ae(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,me(M,n)):M()}}}const me=Cl;function Zl(e){return Kl(e)}function Kl(e,t){const n=Ts();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:p,setScopeId:b=Ee,cloneNode:M,insertStaticContent:T}=e,I=(f,u,h,v=null,g=null,w=null,k=!1,x=null,A=!!u.dynamicChildren)=>{if(f===u)return;f&&!ut(f,u)&&(v=sn(f),Ze(f,g,w,!0),f=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:y,ref:P,shapeFlag:O}=u;switch(y){case na:C(f,u,h,v);break;case Te:L(f,u,h,v);break;case gn:f==null&&F(u,h,v,k);break;case _e:ne(f,u,h,v,g,w,k,x,A);break;default:O&1?te(f,u,h,v,g,w,k,x,A):O&6?Oe(f,u,h,v,g,w,k,x,A):(O&64||O&128)&&y.process(f,u,h,v,g,w,k,x,A,wt)}P!=null&&g&&wr(P,f&&f.ref,w,u||f,!u)},C=(f,u,h,v)=>{if(f==null)r(u.el=s(u.children),h,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},L=(f,u,h,v)=>{f==null?r(u.el=l(u.children||""),h,v):u.el=f.el},F=(f,u,h,v)=>{[f.el,f.anchor]=T(f.children,u,h,v,f.el,f.anchor)},$=({el:f,anchor:u},h,v)=>{let g;for(;f&&f!==u;)g=p(f),r(f,h,v),f=g;r(u,h,v)},V=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=p(f),a(f),f=h;a(u)},te=(f,u,h,v,g,w,k,x,A)=>{k=k||u.type==="svg",f==null?B(u,h,v,g,w,k,x,A):de(f,u,g,w,k,x,A)},B=(f,u,h,v,g,w,k,x)=>{let A,y;const{type:P,props:O,shapeFlag:S,transition:R,patchFlag:U,dirs:Q}=f;if(f.el&&M!==void 0&&U===-1)A=f.el=M(f.el);else{if(A=f.el=o(f.type,w,O&&O.is,O),S&8?d(A,f.children):S&16&&Y(f.children,A,null,v,g,w&&P!=="foreignObject",k,x),Q&&st(f,null,v,"created"),O){for(const G in O)G!=="value"&&!pn(G)&&i(A,G,null,O[G],w,f.children,v,g,Re);"value"in O&&i(A,"value",null,O.value),(y=O.onVnodeBeforeMount)&&Ie(y,v,f)}q(A,f,f.scopeId,k,v)}Q&&st(f,null,v,"beforeMount");const Z=(!g||g&&!g.pendingBranch)&&R&&!R.persisted;Z&&R.beforeEnter(A),r(A,u,h),((y=O&&O.onVnodeMounted)||Z||Q)&&me(()=>{y&&Ie(y,v,f),Z&&R.enter(A),Q&&st(f,null,v,"mounted")},g)},q=(f,u,h,v,g)=>{if(h&&b(f,h),v)for(let w=0;w<v.length;w++)b(f,v[w]);if(g){let w=g.subTree;if(u===w){const k=g.vnode;q(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},Y=(f,u,h,v,g,w,k,x,A=0)=>{for(let y=A;y<f.length;y++){const P=f[y]=x?Qe(f[y]):Se(f[y]);I(null,P,u,h,v,g,w,k,x)}},de=(f,u,h,v,g,w,k)=>{const x=u.el=f.el;let{patchFlag:A,dynamicChildren:y,dirs:P}=u;A|=f.patchFlag&16;const O=f.props||K,S=u.props||K;let R;h&&lt(h,!1),(R=S.onVnodeBeforeUpdate)&&Ie(R,h,u,f),P&&st(u,f,h,"beforeUpdate"),h&&lt(h,!0);const U=g&&u.type!=="foreignObject";if(y?ce(f.dynamicChildren,y,x,h,v,U,w):k||Fe(f,u,x,null,h,v,U,w,!1),A>0){if(A&16)H(x,u,O,S,h,v,g);else if(A&2&&O.class!==S.class&&i(x,"class",null,S.class,g),A&4&&i(x,"style",O.style,S.style,g),A&8){const Q=u.dynamicProps;for(let Z=0;Z<Q.length;Z++){const G=Q[Z],we=O[G],_t=S[G];(_t!==we||G==="value")&&i(x,G,we,_t,g,f.children,h,v,Re)}}A&1&&f.children!==u.children&&d(x,u.children)}else!k&&y==null&&H(x,u,O,S,h,v,g);((R=S.onVnodeUpdated)||P)&&me(()=>{R&&Ie(R,h,u,f),P&&st(u,f,h,"updated")},v)},ce=(f,u,h,v,g,w,k)=>{for(let x=0;x<u.length;x++){const A=f[x],y=u[x],P=A.el&&(A.type===_e||!ut(A,y)||A.shapeFlag&70)?m(A.el):h;I(A,y,P,null,v,g,w,k,!0)}},H=(f,u,h,v,g,w,k)=>{if(h!==v){for(const x in v){if(pn(x))continue;const A=v[x],y=h[x];A!==y&&x!=="value"&&i(f,x,y,A,k,u.children,g,w,Re)}if(h!==K)for(const x in h)!pn(x)&&!(x in v)&&i(f,x,h[x],null,k,u.children,g,w,Re);"value"in v&&i(f,"value",h.value,v.value)}},ne=(f,u,h,v,g,w,k,x,A)=>{const y=u.el=f?f.el:s(""),P=u.anchor=f?f.anchor:s("");let{patchFlag:O,dynamicChildren:S,slotScopeIds:R}=u;R&&(x=x?x.concat(R):R),f==null?(r(y,h,v),r(P,h,v),Y(u.children,h,P,g,w,k,x,A)):O>0&&O&64&&S&&f.dynamicChildren?(ce(f.dynamicChildren,S,h,g,w,k,x),(u.key!=null||g&&u===g.subTree)&&Eo(f,u,!0)):Fe(f,u,h,P,g,w,k,x,A)},Oe=(f,u,h,v,g,w,k,x,A)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?g.ctx.activate(u,h,v,k,A):Ct(u,h,v,g,w,k,A):se(f,u,A)},Ct=(f,u,h,v,g,w,k)=>{const x=f.component=lf(f,v,g);if(Bn(f)&&(x.ctx.renderer=wt),cf(x),x.asyncDep){if(g&&g.registerDep(x,ee),!f.el){const A=x.subTree=re(Te);L(null,A,u,h)}return}ee(x,f,u,h,g,w,k)},se=(f,u,h)=>{const v=u.component=f.component;if(vl(f,u,h))if(v.asyncDep&&!v.asyncResolved){X(v,u,h);return}else v.next=u,ul(v.update),v.update();else u.component=f.component,u.el=f.el,v.vnode=u},ee=(f,u,h,v,g,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:O,u:S,parent:R,vnode:U}=f,Q=P,Z;lt(f,!1),P?(P.el=U.el,X(f,P,k)):P=U,O&&Qn(O),(Z=P.props&&P.props.onVnodeBeforeUpdate)&&Ie(Z,R,P,U),lt(f,!0);const G=er(f),we=f.subTree;f.subTree=G,I(we,G,m(we.el),sn(we),f,g,w),P.el=G.el,Q===null&&bl(f,G.el),S&&me(S,g),(Z=P.props&&P.props.onVnodeUpdated)&&me(()=>Ie(Z,R,P,U),g)}else{let P;const{el:O,props:S}=u,{bm:R,m:U,parent:Q}=f,Z=br(u);if(lt(f,!1),R&&Qn(R),!Z&&(P=S&&S.onVnodeBeforeMount)&&Ie(P,Q,u),lt(f,!0),O&&Gn){const G=()=>{f.subTree=er(f),Gn(O,f.subTree,f,g,null)};Z?u.type.__asyncLoader().then(()=>!f.isUnmounted&&G()):G()}else{const G=f.subTree=er(f);I(null,G,h,v,f,g,w),u.el=G.el}if(U&&me(U,g),!Z&&(P=S&&S.onVnodeMounted)){const G=u;me(()=>Ie(P,Q,G),g)}u.shapeFlag&256&&f.a&&me(f.a,g),f.isMounted=!0,u=h=v=null}},A=f.effect=new Yr(x,()=>to(f.update),f.scope),y=f.update=A.run.bind(A);y.id=f.uid,lt(f,!0),y()},X=(f,u,h)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Bl(f,u.props,v,h),Ul(f,u.children,h),Rt(),ea(void 0,f.update),Dt()},Fe=(f,u,h,v,g,w,k,x,A=!1)=>{const y=f&&f.children,P=f?f.shapeFlag:0,O=u.children,{patchFlag:S,shapeFlag:R}=u;if(S>0){if(S&128){zt(y,O,h,v,g,w,k,x,A);return}else if(S&256){qn(y,O,h,v,g,w,k,x,A);return}}R&8?(P&16&&Re(y,g,w),O!==y&&d(h,O)):P&16?R&16?zt(y,O,h,v,g,w,k,x,A):Re(y,g,w,!0):(P&8&&d(h,""),R&16&&Y(O,h,v,g,w,k,x,A))},qn=(f,u,h,v,g,w,k,x,A)=>{f=f||Mt,u=u||Mt;const y=f.length,P=u.length,O=Math.min(y,P);let S;for(S=0;S<O;S++){const R=u[S]=A?Qe(u[S]):Se(u[S]);I(f[S],R,h,null,g,w,k,x,A)}y>P?Re(f,g,w,!0,!1,O):Y(u,h,v,g,w,k,x,A,O)},zt=(f,u,h,v,g,w,k,x,A)=>{let y=0;const P=u.length;let O=f.length-1,S=P-1;for(;y<=O&&y<=S;){const R=f[y],U=u[y]=A?Qe(u[y]):Se(u[y]);if(ut(R,U))I(R,U,h,null,g,w,k,x,A);else break;y++}for(;y<=O&&y<=S;){const R=f[O],U=u[S]=A?Qe(u[S]):Se(u[S]);if(ut(R,U))I(R,U,h,null,g,w,k,x,A);else break;O--,S--}if(y>O){if(y<=S){const R=S+1,U=R<P?u[R].el:v;for(;y<=S;)I(null,u[y]=A?Qe(u[y]):Se(u[y]),h,U,g,w,k,x,A),y++}}else if(y>S)for(;y<=O;)Ze(f[y],g,w,!0),y++;else{const R=y,U=y,Q=new Map;for(y=U;y<=S;y++){const pe=u[y]=A?Qe(u[y]):Se(u[y]);pe.key!=null&&Q.set(pe.key,y)}let Z,G=0;const we=S-U+1;let _t=!1,_a=0;const Bt=new Array(we);for(y=0;y<we;y++)Bt[y]=0;for(y=R;y<=O;y++){const pe=f[y];if(G>=we){Ze(pe,g,w,!0);continue}let Me;if(pe.key!=null)Me=Q.get(pe.key);else for(Z=U;Z<=S;Z++)if(Bt[Z-U]===0&&ut(pe,u[Z])){Me=Z;break}Me===void 0?Ze(pe,g,w,!0):(Bt[Me-U]=y+1,Me>=_a?_a=Me:_t=!0,I(pe,u[Me],h,null,g,w,k,x,A),G++)}const Aa=_t?ql(Bt):Mt;for(Z=Aa.length-1,y=we-1;y>=0;y--){const pe=U+y,Me=u[pe],ka=pe+1<P?u[pe+1].el:v;Bt[y]===0?I(null,Me,h,ka,g,w,k,x,A):_t&&(Z<0||y!==Aa[Z]?xt(Me,h,ka,2):Z--)}}},xt=(f,u,h,v,g=null)=>{const{el:w,type:k,transition:x,children:A,shapeFlag:y}=f;if(y&6){xt(f.component.subTree,u,h,v);return}if(y&128){f.suspense.move(u,h,v);return}if(y&64){k.move(f,u,h,wt);return}if(k===_e){r(w,u,h);for(let O=0;O<A.length;O++)xt(A[O],u,h,v);r(f.anchor,u,h);return}if(k===gn){$(f,u,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(w),r(w,u,h),me(()=>x.enter(w),g);else{const{leave:O,delayLeave:S,afterLeave:R}=x,U=()=>r(w,u,h),Q=()=>{O(w,()=>{U(),R&&R()})};S?S(w,U,Q):Q()}else r(w,u,h)},Ze=(f,u,h,v=!1,g=!1)=>{const{type:w,props:k,ref:x,children:A,dynamicChildren:y,shapeFlag:P,patchFlag:O,dirs:S}=f;if(x!=null&&wr(x,null,h,f,!0),P&256){u.ctx.deactivate(f);return}const R=P&1&&S,U=!br(f);let Q;if(U&&(Q=k&&k.onVnodeBeforeUnmount)&&Ie(Q,u,f),P&6)ps(f.component,h,v);else{if(P&128){f.suspense.unmount(h,v);return}R&&st(f,null,u,"beforeUnmount"),P&64?f.type.remove(f,u,h,g,wt,v):y&&(w!==_e||O>0&&O&64)?Re(y,u,h,!1,!0):(w===_e&&O&384||!g&&P&16)&&Re(A,u,h),v&&xa(f)}(U&&(Q=k&&k.onVnodeUnmounted)||R)&&me(()=>{Q&&Ie(Q,u,f),R&&st(f,null,u,"unmounted")},h)},xa=f=>{const{type:u,el:h,anchor:v,transition:g}=f;if(u===_e){ms(h,v);return}if(u===gn){V(f);return}const w=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:x}=g,A=()=>k(h,w);x?x(f.el,w,A):A()}else w()},ms=(f,u)=>{let h;for(;f!==u;)h=p(f),a(f),f=h;a(u)},ps=(f,u,h)=>{const{bum:v,scope:g,update:w,subTree:k,um:x}=f;v&&Qn(v),g.stop(),w&&(w.active=!1,Ze(k,f,u,h)),x&&me(x,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,h,v=!1,g=!1,w=0)=>{for(let k=w;k<f.length;k++)Ze(f[k],u,h,v,g)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),wa=(f,u,h)=>{f==null?u._vnode&&Ze(u._vnode,null,null,!0):I(u._vnode||null,f,u,null,null,null,h),ao(),u._vnode=f},wt={p:I,um:Ze,m:xt,r:xa,mt:Ct,mc:Y,pc:Fe,pbc:ce,n:sn,o:e};let Xn,Gn;return t&&([Xn,Gn]=t(wt)),{render:wa,hydrate:Xn,createApp:Yl(wa,Xn)}}function lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Eo(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Eo(o,s))}}function ql(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Xl=e=>e.__isTeleport,To="components";function Gl(e,t){return Ql(To,e,!0,t)||e}const Jl=Symbol();function Ql(e,t,n=!0,r=!1){const a=ke||oe;if(a){const i=a.type;if(e===To){const s=pf(i);if(s&&(s===t||s===He(t)||s===Rn(He(t))))return i}const o=Va(a[e]||i[e],t)||Va(a.appContext[e],t);return!o&&r?i:o}}function Va(e,t){return e&&(e[t]||e[He(t)]||e[Rn(He(t))])}const _e=Symbol(void 0),na=Symbol(void 0),Te=Symbol(void 0),gn=Symbol(void 0),qt=[];let ht=null;function he(e=!1){qt.push(ht=e?null:[])}function ef(){qt.pop(),ht=qt[qt.length-1]||null}let Ln=1;function ja(e){Ln+=e}function Oo(e){return e.dynamicChildren=Ln>0?ht||Mt:null,ef(),Ln>0&&ht&&ht.push(e),e}function ze(e,t,n,r,a,i){return Oo(_(e,t,n,r,a,i,!0))}function vn(e,t,n,r,a){return Oo(re(e,t,n,r,a,!0))}function _r(e){return e?e.__v_isVNode===!0:!1}function ut(e,t){return e.type===t.type&&e.key===t.key}const jn="__vInternal",Mo=({key:e})=>e!=null?e:null,bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||ae(e)||z(e)?{i:ke,r:e,k:t,f:!!n}:e:null;function _(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mo(t),ref:t&&bn(t),scopeId:so,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ra(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),Ln>0&&!o&&ht&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ht.push(l),l}const re=tf;function tf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=Te),_r(e)){const s=vt(e,t,!0);return n&&ra(s,n),s}if(hf(e)&&(e=e.__vccOpts),t){t=nf(t);let{class:s,style:l}=t;s&&!fe(s)&&(t.class=zr(s)),ie(l)&&(qi(l)&&!D(l)&&(l=le({},l)),t.style=Sn(l))}const o=fe(e)?1:yl(e)?128:Xl(e)?64:ie(e)?4:z(e)?2:0;return _(e,t,n,r,a,o,i,!0)}function nf(e){return e?qi(e)||jn in e?le({},e):e:null}function vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Mo(s),ref:t&&t.ref?n&&a?D(a)?a.concat(bn(t)):[a,bn(t)]:bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),el:e.el,anchor:e.anchor}}function Nt(e=" ",t=0){return re(na,null,e,t)}function Io(e,t){const n=re(gn,null,e);return n.staticCount=t,n}function Ua(e="",t=!1){return t?(he(),vn(Te,null,e)):re(Te,null,e)}function Se(e){return e==null||typeof e=="boolean"?re(Te):D(e)?re(_e,null,e.slice()):typeof e=="object"?Qe(e):re(na,null,String(e))}function Qe(e){return e.el===null||e.memo?e:vt(e)}function ra(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ra(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(jn in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[Nt(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=zr([t.class,r.class]));else if(a==="style")t.style=Sn([t.style,r.style]);else if(Nn(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){xe(e,t,7,[n,r])}const Ar=e=>e?Po(e)?aa(e)||e.proxy:Ar(e.parent):null,En=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ar(e.parent),$root:e=>Ar(e.root),$emit:e=>e.emit,$options:e=>Co(e),$forceUpdate:e=>()=>to(e.update),$nextTick:e=>fl.bind(e.proxy),$watch:e=>wl.bind(e)}),af={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&j(r,t))return o[t]=1,r[t];if(a!==K&&j(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&j(c,t))return o[t]=3,i[t];if(n!==K&&j(n,t))return o[t]=4,n[t];yr&&(o[t]=0)}}const d=En[t];let m,p;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&j(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,j(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&j(a,t)?(a[t]=n,!0):r!==K&&j(r,t)?(r[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&j(e,o)||t!==K&&j(t,o)||(s=i[0])&&j(s,o)||j(r,o)||j(En,o)||j(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},of=Lo();let sf=0;function lf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||of,i={uid:sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(r,a),emitsOptions:oo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=pl.bind(null,i),e.ce&&e.ce(i),i}let oe=null;const ff=()=>oe||ke,Ht=e=>{oe=e,e.scope.on()},gt=()=>{oe&&oe.scope.off(),oe=null};function Po(e){return e.vnode.shapeFlag&4}let rn=!1;function cf(e,t=!1){rn=t;const{props:n,children:r}=e.vnode,a=Po(e);zl(e,n,a,t),jl(e,r);const i=a?uf(e,t):void 0;return rn=!1,i}function uf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xi(new Proxy(e.ctx,af));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?mf(e):null;Ht(e),Rt();const i=tt(r,e,0,[e.props,a]);if(Dt(),gt(),Si(i)){if(i.then(gt,gt),t)return i.then(o=>{Wa(e,o,t)}).catch(o=>{$n(o,e,0)});e.asyncDep=i}else Wa(e,i,t)}else So(e,t)}function Wa(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Qi(t)),So(e,n)}let Ya;function So(e,t,n){const r=e.type;if(!e.render){if(!t&&Ya&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=Ya(a,c)}}e.render=r.render||Ee}Ht(e),Rt(),Hl(e),Dt(),gt()}function df(e){return new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}})}function mf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=df(e))},slots:e.slots,emit:e.emit,expose:t}}function aa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in En)return En[n](e)}}))}function pf(e){return z(e)&&e.displayName||e.name}function hf(e){return z(e)&&"__vccOpts"in e}const Ce=(e,t)=>sl(e,t,rn);function ia(e,t,n){const r=arguments.length;return r===2?ie(t)&&!D(t)?_r(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_r(n)&&(n=[n]),re(e,t,n))}const gf="3.2.33",vf="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,Za=dt&&dt.createElement("template"),bf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(vf,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Za.innerHTML=r?`<svg>${e}</svg>`:e;const s=Za.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Cf(e,t,n){const r=e.style,a=fe(n);if(n&&!a){for(const i in n)kr(r,i,n[i]);if(t&&!fe(t))for(const i in t)n[i]==null&&kr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ka=/\s*!important$/;function kr(e,t,n){if(D(n))n.forEach(r=>kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=xf(e,t);Ka.test(n)?e.setProperty(Ft(r),n.replace(Ka,""),"important"):e[r]=n}}const qa=["Webkit","Moz","ms"],rr={};function xf(e,t){const n=rr[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return rr[t]=r;r=Rn(r);for(let a=0;a<qa.length;a++){const i=qa[a]+r;if(i in e)return rr[t]=i}return t}const Xa="http://www.w3.org/1999/xlink";function wf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Xa,t.slice(6,t.length)):e.setAttributeNS(Xa,t,n);else{const i=vs(t);n==null||i&&!Mi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Mi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[No,Af]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Lr=0;const kf=Promise.resolve(),Lf=()=>{Lr=0},Ef=()=>Lr||(kf.then(Lf),Lr=No());function Tf(e,t,n,r){e.addEventListener(t,n,r)}function Of(e,t,n,r){e.removeEventListener(t,n,r)}function Mf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=If(t);if(r){const c=i[t]=Pf(r,a);Tf(e,s,c,l)}else o&&(Of(e,s,o,l),i[t]=void 0)}}const Ga=/(?:Once|Passive|Capture)$/;function If(e){let t;if(Ga.test(e)){t={};let n;for(;n=e.match(Ga);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ft(e.slice(2)),t]}function Pf(e,t){const n=r=>{const a=r.timeStamp||No();(Af||a>=n.attached-1)&&xe(Sf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Sf(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ja=/^on[a-z]/,Nf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?yf(e,r,a):t==="style"?Cf(e,n,r):Nn(t)?Br(t)||Mf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hf(e,t,r,a))?_f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wf(e,t,r,a))};function Hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ja.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ja.test(t)&&fe(n)?!1:t in e}const qe="transition",Vt="animation",oa=(e,{slots:t})=>ia(uo,Ff(e),t);oa.displayName="Transition";const Ho={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};oa.props=le({},uo.props,Ho);const ft=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Qa=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Ff(e){const t={};for(const H in e)H in Ho||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:d=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,M=Rf(a),T=M&&M[0],I=M&&M[1],{onBeforeEnter:C,onEnter:L,onEnterCancelled:F,onLeave:$,onLeaveCancelled:V,onBeforeAppear:te=C,onAppear:B=L,onAppearCancelled:q=F}=t,Y=(H,ne,Oe)=>{At(H,ne?d:s),At(H,ne?c:o),Oe&&Oe()},de=(H,ne)=>{At(H,b),At(H,p),ne&&ne()},ce=H=>(ne,Oe)=>{const Ct=H?B:L,se=()=>Y(ne,H,Oe);ft(Ct,[ne,se]),ei(()=>{At(ne,H?l:i),Xe(ne,H?d:s),Qa(Ct)||ti(ne,r,T,se)})};return le(t,{onBeforeEnter(H){ft(C,[H]),Xe(H,i),Xe(H,o)},onBeforeAppear(H){ft(te,[H]),Xe(H,l),Xe(H,c)},onEnter:ce(!1),onAppear:ce(!0),onLeave(H,ne){const Oe=()=>de(H,ne);Xe(H,m),zf(),Xe(H,p),ei(()=>{At(H,m),Xe(H,b),Qa($)||ti(H,r,I,Oe)}),ft($,[H,Oe])},onEnterCancelled(H){Y(H,!1),ft(F,[H])},onAppearCancelled(H){Y(H,!0),ft(q,[H])},onLeaveCancelled(H){de(H),ft(V,[H])}})}function Rf(e){if(e==null)return null;if(ie(e))return[ar(e.enter),ar(e.leave)];{const t=ar(e);return[t,t]}}function ar(e){return Fi(e)}function Xe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function At(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ei(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Df=0;function ti(e,t,n,r){const a=e._endId=++Df,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=$f(e,t);if(!o)return r();const c=o+"end";let d=0;const m=()=>{e.removeEventListener(c,p),i()},p=b=>{b.target===e&&++d>=l&&m()};setTimeout(()=>{d<l&&m()},s+1),e.addEventListener(c,p)}function $f(e,t){const n=window.getComputedStyle(e),r=M=>(n[M]||"").split(", "),a=r(qe+"Delay"),i=r(qe+"Duration"),o=ni(a,i),s=r(Vt+"Delay"),l=r(Vt+"Duration"),c=ni(s,l);let d=null,m=0,p=0;t===qe?o>0&&(d=qe,m=o,p=i.length):t===Vt?c>0&&(d=Vt,m=c,p=l.length):(m=Math.max(o,c),d=m>0?o>c?qe:Vt:null,p=d?d===qe?i.length:l.length:0);const b=d===qe&&/\b(transform|all)(,|$)/.test(n[qe+"Property"]);return{type:d,timeout:m,propCount:p,hasTransform:b}}function ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ri(n)+ri(e[r])))}function ri(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function zf(){return document.body.offsetHeight}const Bf=le({patchProp:Nf},bf);let ai;function Vf(){return ai||(ai=Zl(Bf))}const jf=(...e)=>{const t=Vf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uf(e){return fe(e)?document.querySelector(e):e}const Wf={class:"bg-gray-800 w-80 rounded-2xl shadow-2xl"},Yf={class:"h-10 relative text-center grid place-items-center"},Zf=_("div",{class:"absolute left-2 flex flex-row"},[_("div",{class:"bg-red-500 h-3 w-3 rounded-full m-1"}),_("div",{class:"bg-yellow-500 h-3 w-3 rounded-full m-1"}),_("div",{class:"bg-green-500 h-3 w-3 rounded-full m-1"})],-1),Kf=["innerHTML"],ir=it({props:{code:{type:String,required:!0},title:{type:String,required:!1,default:""}},setup(e){const t=e;return(n,r)=>(he(),ze("div",Wf,[_("div",Yf,[Zf,_("span",null,xs(t.title),1)]),_("div",{class:"font-['Consolas'] font-['Monaco'] text-left p-5 whitespace-pre-line",innerHTML:t.code},null,8,Kf)]))}}),qf={class:"bg-gray-900 w- text-white"},Xf={class:"bg-[#44C577] bg-gradient-to-t from-[#44C577] to-cyan-600"},Gf={class:"flex lg:mt-0 mt-2 flex-col lg:flex-row justify-center items-center"},Jf=_("div",{class:"lg:w-[30rem]"},[_("h1",null,"UI Development made easy"),_("p",null,"Tank is a C# based programming language with an implemented GtkSharp-based UI Framework, making UI Development as easy as possible.")],-1),Qf=_("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[_("path",{d:"M0 112L16.7 118C33.3 124 66.7 136 100 140.8C133.3 145.7 166.7 143.3 200 142.2C233.3 141 266.7 141 300 141C333.3 141 366.7 141 400 143.2C433.3 145.3 466.7 149.7 500 150.5C533.3 151.3 566.7 148.7 600 143.7C633.3 138.7 666.7 131.3 700 130.8C733.3 130.3 766.7 136.7 800 138.7C833.3 140.7 866.7 138.3 883.3 137.2L900 136L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#006f57"}),_("path",{d:"M0 79L16.7 81.8C33.3 84.7 66.7 90.3 100 96.7C133.3 103 166.7 110 200 111C233.3 112 266.7 107 300 102.7C333.3 98.3 366.7 94.7 400 92.5C433.3 90.3 466.7 89.7 500 91.5C533.3 93.3 566.7 97.7 600 98.3C633.3 99 666.7 96 700 92.8C733.3 89.7 766.7 86.3 800 88C833.3 89.7 866.7 96.3 883.3 99.7L900 103L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#0c8b64"}),_("path",{d:"M0 70L16.7 72.7C33.3 75.3 66.7 80.7 100 82.7C133.3 84.7 166.7 83.3 200 81.3C233.3 79.3 266.7 76.7 300 76.3C333.3 76 366.7 78 400 74.5C433.3 71 466.7 62 500 63.2C533.3 64.3 566.7 75.7 600 79.2C633.3 82.7 666.7 78.3 700 76.3C733.3 74.3 766.7 74.7 800 70.5C833.3 66.3 866.7 57.7 883.3 53.3L900 49L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#27a86f"}),_("path",{d:"M0 39L16.7 41.2C33.3 43.3 66.7 47.7 100 44.7C133.3 41.7 166.7 31.3 200 28.7C233.3 26 266.7 31 300 33C333.3 35 366.7 34 400 36.5C433.3 39 466.7 45 500 45.7C533.3 46.3 566.7 41.7 600 37.7C633.3 33.7 666.7 30.3 700 28.7C733.3 27 766.7 27 800 30.5C833.3 34 866.7 41 883.3 44.5L900 48L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#44c577"})],-1),ec={class:"flex flex-row justify-center items-center"},tc={class:"flex flex-col lg:flex-row justify-center items-center"},nc=_("div",{class:"lg:w-[30rem]"},[_("h1",null,"Missing something? No problem."),_("p",null,"Tank has an import statement, allowing to import modules to add whatever you need")],-1),rc=_("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[_("path",{d:"M0 60L21.5 62.3C43 64.7 86 69.3 128.8 71.3C171.7 73.3 214.3 72.7 257.2 75.7C300 78.7 343 85.3 385.8 82.7C428.7 80 471.3 68 514.2 69.7C557 71.3 600 86.7 642.8 88.3C685.7 90 728.3 78 771.2 75.2C814 72.3 857 78.7 878.5 81.8L900 85L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#fa7268"}),_("path",{d:"M0 77L21.5 80.5C43 84 86 91 128.8 98.2C171.7 105.3 214.3 112.7 257.2 111.2C300 109.7 343 99.3 385.8 91.7C428.7 84 471.3 79 514.2 82.3C557 85.7 600 97.3 642.8 98.3C685.7 99.3 728.3 89.7 771.2 88.8C814 88 857 96 878.5 100L900 104L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#ef5f67"}),_("path",{d:"M0 114L21.5 116.7C43 119.3 86 124.7 128.8 122.2C171.7 119.7 214.3 109.3 257.2 109.8C300 110.3 343 121.7 385.8 129.2C428.7 136.7 471.3 140.3 514.2 136.8C557 133.3 600 122.7 642.8 116.2C685.7 109.7 728.3 107.3 771.2 105C814 102.7 857 100.3 878.5 99.2L900 98L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#e34c67"}),_("path",{d:"M0 133L21.5 136.3C43 139.7 86 146.3 128.8 150.5C171.7 154.7 214.3 156.3 257.2 156.2C300 156 343 154 385.8 151C428.7 148 471.3 144 514.2 145.5C557 147 600 154 642.8 151.7C685.7 149.3 728.3 137.7 771.2 134.3C814 131 857 136 878.5 138.5L900 141L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#d53867"}),_("path",{d:"M0 173L21.5 172.8C43 172.7 86 172.3 128.8 171.8C171.7 171.3 214.3 170.7 257.2 171.8C300 173 343 176 385.8 178.5C428.7 181 471.3 183 514.2 181.2C557 179.3 600 173.7 642.8 170C685.7 166.3 728.3 164.7 771.2 165.2C814 165.7 857 168.3 878.5 169.7L900 171L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#c62368"})],-1),ac={class:"bg-[#C62368] bg-gradient-to-b from-[#C62368] to-[#FA7268] flex flex-row justify-center items-center"},ic={class:"flex flex-col lg:flex-row justify-center items-center"},oc=_("div",{class:"lg:w-[30rem]"},[_("h1",null,"Minimal, structured syntax"),_("p",null,"Tank is reduced to the bare minimum of required syntax to make your code both readable and easy to write")],-1),sc=_("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[_("path",{d:"M0 170L18.8 170.2C37.7 170.3 75.3 170.7 112.8 171.5C150.3 172.3 187.7 173.7 225.2 175.2C262.7 176.7 300.3 178.3 337.8 173C375.3 167.7 412.7 155.3 450.2 155.5C487.7 155.7 525.3 168.3 562.8 166.7C600.3 165 637.7 149 675.2 145.3C712.7 141.7 750.3 150.3 787.8 158.2C825.3 166 862.7 173 881.3 176.5L900 180L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#c62368"}),_("path",{d:"M0 132L18.8 134.7C37.7 137.3 75.3 142.7 112.8 143.7C150.3 144.7 187.7 141.3 225.2 135.5C262.7 129.7 300.3 121.3 337.8 116.2C375.3 111 412.7 109 450.2 113.3C487.7 117.7 525.3 128.3 562.8 132.3C600.3 136.3 637.7 133.7 675.2 135C712.7 136.3 750.3 141.7 787.8 134.2C825.3 126.7 862.7 106.3 881.3 96.2L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#da3f67"}),_("path",{d:"M0 84L18.8 87.3C37.7 90.7 75.3 97.3 112.8 94.8C150.3 92.3 187.7 80.7 225.2 75C262.7 69.3 300.3 69.7 337.8 75.3C375.3 81 412.7 92 450.2 87.7C487.7 83.3 525.3 63.7 562.8 63.5C600.3 63.3 637.7 82.7 675.2 90.8C712.7 99 750.3 96 787.8 92.3C825.3 88.7 862.7 84.3 881.3 82.2L900 80L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#eb5967"}),_("path",{d:"M0 23L18.8 26.3C37.7 29.7 75.3 36.3 112.8 36.7C150.3 37 187.7 31 225.2 34.5C262.7 38 300.3 51 337.8 53.3C375.3 55.7 412.7 47.3 450.2 45.7C487.7 44 525.3 49 562.8 44C600.3 39 637.7 24 675.2 20.8C712.7 17.7 750.3 26.3 787.8 35.5C825.3 44.7 862.7 54.3 881.3 59.2L900 64L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#fa7268"})],-1),lc=_("h1",null,"Got you hooked?",-1),fc=Nt(" Dou you want to try tank?"),cc=_("br",null,null,-1),uc=_("span",{class:"underline+ transition-all duration-500"},"Go to Download Page",-1),dc=[uc],mc=it({setup(e){return(t,n)=>(he(),ze("div",null,[_("div",qf,[_("section",Xf,[_("div",Gf,[Jf,re(ir,{class:"w-80 m-4 lg:ml-20",code:`<span class='text-pink-600'>win</span> = Window.<span class='text-blue-400'>Create</span>(\r
  <span class='text-indigo-500'>\xA0\xA0\xA0800</span>,\r
  <span class='text-indigo-500'>\xA0\xA0\xA0600</span>,\r
  <span class='text-indigo-500'>\xA0\xA0\xA0"My Window"</span>,\r
  <span class='text-indigo-500'>\xA0\xA0\xA0"\r
    \xA0\xA0\xA0\u276Eapp\u276F\r
    \xA0\xA0\xA0\xA0\xA0\xA0\u276Ebutton\u276F\r
    \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Click me!\r
    \xA0\xA0\xA0\xA0\xA0\xA0\u276E/button\u276F\r
    \xA0\xA0\xA0\u276E/app\u276F\r
    \xA0\xA0\xA0"</span>\r
  )\r
  Window.<span class='text-blue-400'>Show</span>(<span class='text-pink-600'>win</span>)`,title:"tank UI"})])]),Qf,_("section",ec,[_("div",tc,[re(ir,{class:"w-80 m-4 lg:mr-20",code:`<span class='text-indigo-500'>import</span> <span class='text-green-500'>"module.tank"</span>\r
  \r
  <span class='text-pink-600'>module</span>.<span class='text-blue-400'>DoSomething</span>()`,title:"tank Imports"}),nc])]),rc,_("section",ac,[_("div",ic,[oc,re(ir,{class:"w-80 m-4 lg:ml-20",code:`<span class='text-pink-600'>class</span> Pig : Animal {\r
\xA0\xA0\xA0<span class='text-pink-600'>func</span> MakeSound() {\r
\xA0\xA0\xA0\xA0\xA0\xA0println(<span class='text-indigo-500'>"Oink!"</span>)\r
\xA0\xA0\xA0}\r
}\r
<span class='text-pink-600'>pig</span> = new Pig()\r
<span class='text-pink-600'>pig</span>.<span class='text-blue-400'>MakeSound</span>()`,title:"tank Syntax"})])]),sc,_("section",null,[lc,_("p",null,[fc,cc,_("button",{onClick:n[0]||(n[0]=r=>t.$emit("navigateToDownload")),class:"text-white group m-auto mt-3 bg-blue-700 text-3xl p-4 rounded-3xl"},dc)])])])]))}});var pc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const hc={},gc={width:"436",height:"256",viewBox:"0 0 436 256",fill:"none",xmlns:"http://www.w3.org/2000/svg"},vc=Io('<g id="Frame 10"><g id="RightChain"><rect id="Rectangle 11" x="89" y="189" width="200" height="65" rx="32.5" fill="#4B4B4B"></rect><rect id="Rectangle 10" x="124" y="189" width="200" height="65" rx="32.5" fill="#484848"></rect></g><g id="TankBody2" clip-path="url(#clip0_105_2)"><rect id="Rectangle 12" x="212" y="165" width="224" height="79" rx="20" fill="#3A3A3A"></rect></g><g id="LeftChain"><rect id="Rectangle 11_2" x="191" y="189" width="200" height="65" rx="32.5" fill="#808080"></rect><rect id="Rectangle 10_2" x="226" y="189" width="200" height="65" rx="32.5" fill="#656565"></rect></g><g id="TankBody"><path id="Vector 9" d="M84.5 226V168L51 226H84.5Z" fill="#5B5B5B"></path><g id="Turret" clip-path="url(#clip1_105_2)"><path id="Vector 7" d="M251.999 168H171.999L192.499 114H272.499L251.999 168Z" fill="#717171"></path><ellipse id="Ellipse 7" cx="183.499" cy="139" rx="8.5" ry="16" fill="#8F8F8F"></ellipse><rect id="Rectangle 8" x="183.686" y="123.039" width="80" height="32" fill="#8F8F8F"></rect><ellipse id="Ellipse 6" cx="263.499" cy="139.039" rx="8.5" ry="16" fill="#818181"></ellipse><g id="Barrel"><g clip-path="url(#clip2_105_2)"><rect id="Rectangle 7" x="34.5413" y="111.529" width="181" height="23" transform="rotate(5 34.5413 111.529)" fill="#717171"></rect><ellipse id="Ellipse 5" cx="29.5978" cy="122.139" rx="8" ry="17" transform="rotate(5 29.5978 122.139)" fill="#717171"></ellipse><g id="Frame 11"><g clip-path="url(#clip3_105_2)"><g id="Ellipse 3" filter="url(#filter0_d_105_2)"><ellipse cx="29.5978" cy="122.139" rx="8" ry="17" transform="rotate(5 29.5978 122.139)" fill="#717171"></ellipse></g></g></g><ellipse id="Ellipse 4" cx="213.352" cy="138.717" rx="5.5" ry="11.5" transform="rotate(5 213.352 138.717)" fill="#717171"></ellipse><rect id="Rectangle 6" x="11.1555" y="103.46" width="20" height="34" transform="rotate(5 11.1555 103.46)" fill="#717171"></rect><ellipse id="Ellipse 2" cx="9.1757" cy="120.352" rx="8.5" ry="17" transform="rotate(5 9.1757 120.352)" fill="#414141"></ellipse></g></g><path id="Vector 5" d="M272.499 114L251.999 168H354.999V114H272.499Z" fill="#676767"></path><path id="Tank" d="M298.75 131.027L299.348 131.227V131.625H298.75L299.148 132.223C298.859 132.887 297.797 133.219 295.961 133.219L294.566 133.418L294.367 134.016H294.566C294.168 134.961 293.371 139.211 292.176 146.766L292.773 149.355H292.574C292.277 149.355 292.012 148.691 291.777 147.363L291.977 145.371V145.172H291.777V145.57C291.379 145.57 291.18 145.703 291.18 145.969V146.168L291.578 149.355V149.555H291.18L290.383 148.957L290.184 149.156H289.984C289.453 148.008 289.188 147.012 289.188 146.168L289.387 146.367H289.586L289.188 144.973L289.785 144.773V143.777H289.387V143.578C289.785 143.578 289.984 143.445 289.984 143.18V142.98H289.586C289.586 141.918 289.785 141.387 290.184 141.387V138.797C290.395 138.609 290.66 137.215 290.98 134.613L289.586 134.812L286.797 134.613V134.414L287.793 134.215V134.414L287.992 134.215H290.98V133.617L287.793 134.016L287.594 133.816H287.395L286.199 134.016L285.602 133.617L285.801 132.621L285.602 132.422C285.602 131.758 286.398 131.426 287.992 131.426L298.75 131.027ZM297.555 131.625V131.824H298.352V131.625H297.555ZM290.184 142.781L289.785 147.164H290.184L289.984 146.168V145.77L290.383 145.172H290.184L290.383 144.973V144.773L290.184 144.574V144.375L290.582 143.578L290.383 142.781H290.184ZM305.301 130.477C305.387 130.875 305.918 131.074 306.895 131.074L308.488 138.047H309.883V138.246L308.688 138.445V138.645C309.086 138.645 309.285 138.777 309.285 139.043H310.879V139.242C310.879 139.539 310.215 139.805 308.887 140.039L309.285 141.234L309.086 141.832L309.285 143.027L309.086 143.227H309.285L309.086 143.426L309.285 145.816V147.012L309.086 146.812H308.887L309.484 149.801H309.086C309.086 149.402 308.953 149.203 308.688 149.203V149.402L308.887 150H308.688L308.488 149.801H308.289C308.289 150.199 308.156 150.398 307.891 150.398L306.895 147.012H306.695V147.809H306.496L306.098 145.418L306.695 145.816V145.617C306.586 144.422 306.387 143.824 306.098 143.824L306.297 143.625V143.027H305.898V143.625H305.699V142.828L305.898 142.629H305.699L305.5 142.828V142.031H305.699L305.898 142.23H306.098L305.898 142.031V140.836L301.516 141.832V142.23L302.91 141.832L303.707 142.031L304.703 141.832V142.23C301.914 142.73 300.52 143.395 300.52 144.223C300.168 145.684 299.77 146.613 299.324 147.012V147.41H298.727L298.527 147.211H298.328V147.41L297.73 147.012L298.129 145.816H297.93C297.531 145.816 297.332 146.348 297.332 147.41L296.934 147.012L297.133 145.816L296.535 145.219L299.922 137.051H300.121C300.121 137.449 300.254 137.648 300.52 137.648L300.719 136.652L300.52 136.852H300.32V136.055L300.52 135.059L300.719 135.258H300.918L300.719 135.059V134.859L301.117 134.062H301.316L301.516 134.262H301.715V134.062C301.715 133.797 301.516 133.664 301.117 133.664L302.113 130.875H302.91L302.711 131.074V131.273C303.633 130.742 304.496 130.477 305.301 130.477ZM304.105 135.059L302.512 139.242H302.91C304.238 139.242 304.969 138.844 305.102 138.047L304.305 135.059H304.105ZM302.312 136.254L301.914 137.648L301.715 137.449H301.516L301.715 138.246H301.914L302.512 136.453V136.254H302.312ZM300.121 138.047L299.922 138.246V138.645H300.121L300.32 138.047H300.121ZM301.316 138.844L301.117 139.641H301.316L301.516 139.441V138.844H301.316ZM299.523 139.043L299.324 139.84H299.523L299.922 139.043H299.523ZM302.91 139.641V139.84H303.309C304.504 139.707 305.102 139.508 305.102 139.242H304.902L302.91 139.641ZM305.699 144.023H306.098V145.219H305.898L305.699 144.023ZM308.488 145.418V145.816L308.688 146.613H308.887V146.215L308.688 145.418H308.488ZM306.496 146.016V146.414L307.094 146.215V145.816L306.496 146.016ZM315.484 131.484L316.879 132.68C316.879 132.281 317.012 132.082 317.277 132.082H317.477L320.266 139.254V139.652H320.066L319.668 138.457H319.469V138.855L320.863 142.242H321.062C321.594 138.789 322.359 135.184 323.359 131.426L323.957 131.824L324.555 131.625L325.75 132.223V132.422C325.352 132.422 325.152 132.688 325.152 133.219H325.352L325.551 133.418H325.75L325.949 132.422H326.348V132.621L326.148 132.82L326.348 133.02V133.219C325.348 136.289 324.449 140.691 323.652 146.426H323.254L323.652 143.238C323.387 143.238 322.988 144.5 322.457 147.023C321.965 147.422 321.5 147.621 321.062 147.621V148.02H320.863C320.863 147.754 320.598 147.621 320.066 147.621V146.227C320.066 145.625 318.738 142.305 316.082 136.266H315.883C315.352 138.633 314.887 141.82 314.488 145.828L314.289 145.629C313.492 145.863 313.094 146.195 313.094 146.625H312.695C312.43 146.125 312.297 145.262 312.297 144.035H312.098V145.828H311.699L311.5 144.832C311.5 141.223 312.297 136.84 313.891 131.684L315.484 131.484ZM312.695 136.465V136.664L312.895 136.863L312.695 137.062V137.461H312.895L313.094 136.664L312.895 136.465H312.695ZM320.266 139.652C320.609 139.652 320.875 140.184 321.062 141.246V141.445H320.863L320.266 139.652ZM338.066 130.758L338.266 130.957V131.156L338.066 131.355L337.867 131.156H337.668L335.875 132.352H335.676C335.676 132 336.473 131.469 338.066 130.758ZM330.297 131.156L330.496 132.949C330.762 132.949 330.961 132.551 331.094 131.754H331.293L331.492 132.551L330.895 135.738L333.086 134.145H333.285L330.895 136.336V136.535L335.477 133.148L335.676 133.348C337.465 131.887 338.66 131.156 339.262 131.156H339.461L339.66 131.953L338.066 133.547H338.266C338.531 133.016 338.93 132.75 339.461 132.75L339.66 132.949V132.75L339.461 132.551L339.66 132.352H340.258L340.457 132.949C339.457 133.418 337.133 135.145 333.484 138.129C334.383 140.09 335.977 142.746 338.266 146.098V146.496L338.066 147.891L337.867 147.691H337.668L337.469 148.488H336.672V148.09H336.473V148.488H336.074C336.074 148.02 334.613 145.562 331.691 141.117L331.293 139.922L330.297 140.121C330.125 143.316 329.707 145.309 329.043 146.098V146.297L327.051 146.098V145.5L327.25 144.105C326.852 144.105 326.652 143.707 326.652 142.91C326.871 141.582 327.09 140.918 327.309 140.918L327.109 140.719C327.508 137.062 327.906 134.871 328.305 134.145L328.105 133.547L328.703 131.953V131.754L328.504 131.555V131.355H328.902V132.75H329.102L329.301 132.152L329.102 131.953V131.754C329.234 131.355 329.633 131.156 330.297 131.156ZM335.477 132.352H335.676L334.879 133.148H334.68L335.477 132.352ZM328.703 133.348L328.504 134.543V135.34H328.703L328.902 133.547V133.348H328.703ZM334.48 133.148H334.68L333.484 134.145H333.285L334.48 133.148ZM337.07 133.945L336.273 134.543L336.074 134.742V134.941H336.273L337.07 134.344L337.27 134.145V133.945H337.07ZM333.684 145.301H333.883L334.48 145.898H334.281L333.684 145.301ZM334.48 145.898C334.816 145.898 335.148 146.562 335.477 147.891V148.09H335.277L334.48 145.898Z" fill="white"></path></g><path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M216 168L182.5 226H216H220V204C220 192.954 228.954 184 240 184H408C419.046 184 428 192.954 428 204V226H436V168H216Z" fill="#5B5B5B"></path><path id="Vector 10" d="M84.5 168H216L182.5 226H51L84.5 168Z" fill="#727272"></path></g></g><defs><filter id="filter0_d_105_2" x="17.4902" y="105.189" width="24.2151" height="41.8998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2" result="shape"></feBlend></filter><clipPath id="clip0_105_2"><rect width="216" height="51" fill="white" transform="translate(220 175)"></rect></clipPath><clipPath id="clip1_105_2"><rect width="353" height="131" fill="white" transform="translate(0 37)"></rect></clipPath><clipPath id="clip2_105_2"><rect x="1.31372" y="97.6194" width="440" height="45" transform="rotate(5 1.31372 97.6194)" fill="white"></rect></clipPath><clipPath id="clip3_105_2"><rect x="23.583" y="110.571" width="20" height="23" transform="rotate(5 23.583 110.571)" fill="white"></rect></clipPath></defs>',2),bc=[vc];function yc(e,t){return he(),ze("svg",gc,bc)}var Cc=pc(hc,[["render",yc]]);const xc=Io('<svg class="corner absolute bottom-0 left-0" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0C30.9 2.4 61.8 4.7 91.8 14.5C121.8 24.4 150.9 41.6 167.5 66.4C184.1 91.2 188.1 123.5 207.1 146.5C226.1 169.5 260.2 183.2 277.7 206.8C295.2 230.3 296.1 263.6 297 297H0V0Z" fill="#1C2134"></path><path d="M0 37.1C27 39.2 54 41.3 80.3 49.8C106.6 58.4 132.1 73.6 146.6 95.3C161.1 116.9 164.6 145.2 181.2 165.3C197.9 185.5 227.7 197.5 243 218C258.3 238.6 259.1 267.8 259.9 297H0V37.1Z" fill="#3F3050"></path><path d="M0 74.3C23.2 76 46.3 77.8 68.8 85.2C91.3 92.5 113.2 105.5 125.6 124.1C138.1 142.7 141.1 166.9 155.3 184.1C169.6 201.4 195.2 211.7 208.3 229.3C221.4 247 222.1 272 222.8 297H0V74.3Z" fill="#6C3D64"></path><path d="M0 111.4C19.3 112.8 38.6 114.3 57.4 120.5C76.1 126.6 94.3 137.4 104.7 152.9C115.1 168.4 117.5 188.6 129.4 203C141.3 217.3 162.6 225.9 173.6 240.6C184.5 255.3 185.1 276.2 185.6 297H0V111.4Z" fill="#9C486B"></path><path d="M0 148.5C15.4 149.7 30.9 150.9 45.9 155.8C60.9 160.7 75.5 169.3 83.8 181.7C92 194.1 94 210.3 103.6 221.8C113.1 233.3 130.1 240.1 138.9 251.9C147.6 263.6 148 280.3 148.5 297H0V148.5Z" fill="#C85967"></path><path d="M0 185.6C11.6 186.5 23.2 187.4 34.4 191.1C45.7 194.8 56.6 201.2 62.8 210.5C69 219.8 70.5 231.9 77.7 240.6C84.8 249.2 97.6 254.3 104.1 263.2C110.7 272 111 284.5 111.4 297H0V185.6Z" fill="#E97458"></path><path d="M0 222.8C7.7 223.3 15.4 223.9 22.9 226.4C30.4 228.8 37.7 233.2 41.9 239.4C46 245.6 47 253.6 51.8 259.4C56.5 265.1 65.1 268.6 69.4 274.4C73.8 280.3 74 288.7 74.3 297H0V222.8Z" fill="#F99945"></path><path d="M0 259.9C3.9 260.2 7.7 260.5 11.5 261.7C15.2 262.9 18.9 265.1 20.9 268.2C23 271.3 23.5 275.3 25.9 278.2C28.3 281.1 32.5 282.8 34.7 285.7C36.9 288.7 37 292.8 37.1 297H0V259.9Z" fill="#FBAE3C"></path></svg><svg class="corner absolute top-0 right-0" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M297 297C263.5 298.2 229.9 299.4 205.2 282.5C180.5 265.6 164.6 230.5 147.1 206.3C129.6 182.1 110.6 168.6 88.3 151.6C65.9 134.7 40.3 114.2 25 88.4C9.7 62.5 4.9 31.3 0 0H297V297Z" fill="#1C2134"></path><path d="M297 259.9C267.7 260.9 238.3 262 216.7 247.2C195.1 232.4 181.1 201.7 165.9 180.5C150.6 159.3 133.9 147.5 114.4 132.7C94.8 117.9 72.4 100 59 77.3C45.6 54.7 41.4 27.4 37.1 0H297V259.9Z" fill="#3F3050"></path><path d="M297 222.8C271.9 223.6 246.7 224.5 228.2 211.8C209.6 199.2 197.7 172.9 184.6 154.7C171.5 136.5 157.2 126.5 140.5 113.7C123.7 101 104.4 85.7 93 66.3C81.5 46.9 77.9 23.4 74.3 0H297V222.8Z" fill="#6C3D64"></path><path d="M297 185.6C276 186.4 255.1 187.1 239.6 176.5C224.2 166 214.2 144.1 203.3 128.9C192.4 113.8 180.5 105.4 166.5 94.8C152.6 84.2 136.5 71.4 127 55.2C117.5 39.1 114.4 19.5 111.4 0H297V185.6Z" fill="#9C486B"></path><path d="M297 148.5C280.2 149.1 263.5 149.7 251.1 141.2C238.8 132.8 230.8 115.3 222.1 103.1C213.3 91 203.8 84.3 192.6 75.8C181.5 67.3 168.6 57.1 161 44.2C153.4 31.3 150.9 15.6 148.5 0H297V148.5Z" fill="#C85967"></path><path d="M297 111.4C284.4 111.8 271.9 112.3 262.6 105.9C253.3 99.6 247.3 86.5 240.8 77.4C234.2 68.3 227.1 63.2 218.7 56.9C210.3 50.5 200.7 42.8 195 33.1C189.3 23.4 187.4 11.7 185.6 0H297V111.4Z" fill="#E97458"></path><path d="M297 74.3C288.6 74.5 280.2 74.8 274.1 70.6C267.9 66.4 263.9 57.6 259.5 51.6C255.2 45.5 250.4 42.2 244.8 37.9C239.2 33.7 232.8 28.6 229 22.1C225.2 15.6 224 7.8 222.8 0H297V74.3Z" fill="#F99945"></path><path d="M297 37.1C292.8 37.3 288.6 37.4 285.5 35.3C282.4 33.2 280.4 28.8 278.3 25.8C276.1 22.8 273.7 21.1 270.9 19C268.1 16.8 264.9 14.3 263 11C261.1 7.8 260.5 3.9 259.9 0H297V37.1Z" fill="#FBAE3C"></path></svg>',2),wc={class:"h-screen bg-gray-900 bg-no-repeat bg-cover bg-center grid place-items-center"},_c={class:"grid z-10 justify-center"},Ac=_("span",{class:"underline+ transition-all duration-500"},[Nt("Get "),_("span",{class:"font-edosz"},"TANK"),Nt(" here")],-1),kc=[Ac],Lc=_("br",null,null,-1),Ec=_("p",null,"(Older releases and pre-releases available on GitHub)",-1),Tc=it({setup(e){function t(n){alert(n)}return(n,r)=>(he(),ze("div",null,[xc,_("div",wc,[_("div",_c,[re(Cc,{class:"mb-10"}),_("button",{onClick:r[0]||(r[0]=a=>t("Whoops! You've found a Dead End. But as an apology, you'll receive a hug. Take it before it leaves! (\u3065\uFFE3 \xB3\uFFE3)\u3065")),class:"text-white group m-auto bg-blue-700 text-3xl p-4 rounded-3xl"},kc),Lc,Ec])])]))}}),Oc={class:"flex flex-row"},Mc=_("div",{class:"w-1/4 bg-gray-800 fixed z-10 h-screen shadow-2xl flex justify-center pt-20"},null,-1),Ic=_("div",{class:"w-3/4 ml-[25%] bg-gray-900 text-center grid place-items-center min-h-screen pt-20"},[_("h1",null,"\xAF\\_(\u30C4)_/\xAF nothing here yet... consider coming back later")],-1),Pc=[Mc,Ic],Sc=it({setup(e){return(t,n)=>(he(),ze("div",Oc,Pc))}});const Nc={key:0,class:"flex flex-row justify-center items-center fixed z-[9999] w-full bg-blue-600"},Hc=Nt(" This website is currently Work-In-Progress and not complete. there is no guarantee that all functionality of this website is implemented. \xA0"),Fc=Nt("\xA0 "),Rc={class:"bg-gray-900 w-full overflow-x-hidden"},Dc={class:"fixed top-0 left-0 right-0 h-20 bg-[rgba(30,41,59,0.7)] z-50"},$c=_("div",{class:"w-1/3 float-left flex items-center h-20"},[_("span",{class:"mx-2 font-edosz leading-20 text-6xl"}," tank ")],-1),zc=_("div",{class:"w-1/3 float-left"},null,-1),Bc={class:"w-1/3 float-right"},Vc={key:0,class:"flex items-center justify-end h-20"},jc=_("span",{class:"underline+"},"Home",-1),Uc=[jc],Wc=_("span",{class:"underline+"},"Documentation",-1),Yc=[Wc],Zc=_("span",{class:"underline+"},"Download",-1),Kc=[Zc],qc={key:1,class:"flex items-center justify-end h-20"},Xc=_("span",null,"Home",-1),Gc=[Xc],Jc=_("span",null,"Documentation",-1),Qc=[Jc],eu=_("span",null,"Download",-1),tu=[eu],nu={class:"w-screen h-full relative"},ru=_("div",{class:"grid place-items-center z-50 absolute h-56 w-full bg-blue-600"}," BlackBird 2022 ",-1),au=it({setup(e){ot(0);let t=ot(0),n=ot(!0),r=ot(window.innerWidth),a=ot(!1);const i=ot(null),o=ot(null);function s(p){t.value=p}function l(){window.scrollTo(0,0)}function c(p){console.log(o.value!=p.target),a.value=!1,window.removeEventListener("click",c),window.removeEventListener("touchend",c),d=!1}let d=!1;function m(){d?(d=!1,window.removeEventListener("click",c),window.removeEventListener("touchend",c)):(d=!0,setTimeout(()=>{window.addEventListener("click",c),window.addEventListener("touchend",c)},1))}return window.onresize=()=>{r.value=window.innerWidth,console.log(window.innerWidth)},(p,b)=>{const M=Gl("icon");return he(),ze(_e,null,[De(n)?(he(),ze("div",Nc,[Hc,_("a",{onClick:b[0]||(b[0]=T=>{ae(n)?n.value=!1:n=!1}),class:"underline cursor-pointer"},"I\xA0Understand"),Fc])):Ua("",!0),_("div",Rc,[_("div",Dc,[$c,zc,_("div",Bc,[De(r)>450?(he(),ze("div",Vc,[_("a",{onClick:b[1]||(b[1]=T=>s(0)),class:"mx-2 group cursor-pointer leading-20"},Uc),_("a",{onClick:b[2]||(b[2]=T=>s(1)),class:"mx-2 group cursor-pointer leading-20"},Yc),_("a",{onClick:b[3]||(b[3]=T=>s(2)),class:"mx-2 group cursor-pointer leading-20"},Kc)])):(he(),ze("div",qc,[_("a",{ref_key:"dropdownBtn",ref:o,onClick:b[4]||(b[4]=T=>{ae(a)?a.value=!De(a):a=!De(a),m()}),class:"float-right text-3xl m-5 cursor-pointer"},[re(M,{icon:"bars"})],512)]))])]),_("div",{ref_key:"dropdown",ref:i,style:Sn({height:De(a)?"7.5rem":"0"}),class:"transition-all duration-500 overflow-hidden top-20 fixed w-full z-50 bg-gray-900 flex flex-col"},[_("a",{onClick:b[5]||(b[5]=T=>s(0)),class:"group cursor-pointer m-2 text-base h-6"},Gc),_("a",{onClick:b[6]||(b[6]=T=>s(1)),class:"group cursor-pointer m-2 text-base h-6"},Qc),_("a",{onClick:b[7]||(b[7]=T=>s(2)),class:"group cursor-pointer m-2 text-base h-6"},tu)],4),_("div",nu,[re(oa,{onAfterLeave:b[9]||(b[9]=T=>l()),duration:300,mode:"out-in",name:"fadeSlide"},{default:lo(()=>[De(t)===0?(he(),vn(mc,{key:0,class:"transition-all z-10 w-full",onNavigateToDownload:b[8]||(b[8]=T=>s(2))})):De(t)===1?(he(),vn(Sc,{key:1,class:"transition-all z-10 w-full"})):De(t)===2?(he(),vn(Tc,{key:2,class:"transition-all z-10 w-full"})):Ua("",!0)]),_:1})]),ru])],64)}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ii(Object(n),!0).forEach(function(r){su(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function iu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ou(e,t,n){return t&&oi(e.prototype,t),n&&oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function su(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sa(e,t){return fu(e)||uu(e,t)||Fo(e,t)||mu()}function Un(e){return lu(e)||cu(e)||Fo(e)||du()}function lu(e){if(Array.isArray(e))return Er(e)}function fu(e){if(Array.isArray(e))return e}function cu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Fo(e,t){if(!!e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function du(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},la={},Ro={},Do=null,$o={mark:si,measure:si};try{typeof window!="undefined"&&(la=window),typeof document!="undefined"&&(Ro=document),typeof MutationObserver!="undefined"&&(Do=MutationObserver),typeof performance!="undefined"&&($o=performance)}catch{}var pu=la.navigator||{},li=pu.userAgent,fi=li===void 0?"":li,rt=la,J=Ro,ci=Do,mn=$o;rt.document;var Ye=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",zo=~fi.indexOf("MSIE")||~fi.indexOf("Trident/"),Ve="___FONT_AWESOME___",Tr=16,Bo="fa",Vo="svg-inline--fa",bt="data-fa-i2svg",Or="data-fa-pseudo-element",hu="data-fa-pseudo-element-pending",fa="data-prefix",ca="data-icon",ui="fontawesome-i2svg",gu="async",vu=["HTML","HEAD","STYLE","SCRIPT"],jo=function(){try{return!0}catch{return!1}}(),ua={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},On={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Uo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},bu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},yu=/fa[srltdbk\-\ ]/,Wo="fa-layers-text",Cu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,xu={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Yo=[1,2,3,4,5,6,7,8,9,10],wu=Yo.concat([11,12,13,14,15,16,17,18,19,20]),_u=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Au=[].concat(Un(Object.keys(On)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY]).concat(Yo.map(function(e){return"".concat(e,"x")})).concat(wu.map(function(e){return"w-".concat(e)})),Zo=rt.FontAwesomeConfig||{};function ku(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Lu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Eu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Eu.forEach(function(e){var t=sa(e,2),n=t[0],r=t[1],a=Lu(ku(n));a!=null&&(Zo[r]=a)})}var Tu={familyPrefix:Bo,styleDefault:"solid",replacementClass:Vo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xt=E(E({},Tu),Zo);Xt.autoReplaceSvg||(Xt.observeMutations=!1);var N={};Object.keys(Xt).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Xt[e]=n,yn.forEach(function(r){return r(N)})},get:function(){return Xt[e]}})});rt.FontAwesomeConfig=N;var yn=[];function Ou(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var Ge=Tr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mu(e){if(!(!e||!Ye)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Iu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var e=12,t="";e-- >0;)t+=Iu[Math.random()*62|0];return t}function $t(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function da(e){return e.classList?$t(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ko(e[n]),'" ')},"").trim()}function Wn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ma(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Su(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Nu(e){var t=e.transform,n=e.width,r=n===void 0?Tr:n,a=e.height,i=a===void 0?Tr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&zo?l+="translate(".concat(t.x/Ge-r/2,"em, ").concat(t.y/Ge-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ge,"em), calc(-50% + ").concat(t.y/Ge,"em)) "):l+="translate(".concat(t.x/Ge,"em, ").concat(t.y/Ge,"em) "),l+="scale(".concat(t.size/Ge*(t.flipX?-1:1),", ").concat(t.size/Ge*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Hu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qo(){var e=Bo,t=Vo,n=N.familyPrefix,r=N.replacementClass,a=Hu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var di=!1;function or(){N.autoAddCss&&!di&&(Mu(qo()),di=!0)}var Fu={mixout:function(){return{dom:{css:qo,insertCss:or}}},hooks:function(){return{beforeDOMElementCreation:function(){or()},beforeI2svg:function(){or()}}}},je=rt||{};je[Ve]||(je[Ve]={});je[Ve].styles||(je[Ve].styles={});je[Ve].hooks||(je[Ve].hooks={});je[Ve].shims||(je[Ve].shims=[]);var Le=je[Ve],Xo=[],Ru=function e(){J.removeEventListener("DOMContentLoaded",e),Mn=1,Xo.map(function(t){return t()})},Mn=!1;Ye&&(Mn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Mn||J.addEventListener("DOMContentLoaded",Ru));function Du(e){!Ye||(Mn?setTimeout(e,0):Xo.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ko(e):"<".concat(t," ").concat(Pu(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $u=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},sr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?$u(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function zu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Mr(e){var t=zu(e);return t.length===1?t[0].toString(16):null}function Bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ir(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=pi(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,pi(t)):Le.styles[e]=E(E({},Le.styles[e]||{}),i),e==="fas"&&Ir("fa",t)}var Gt=Le.styles,Vu=Le.shims,ju=Object.values(Uo),pa=null,Go={},Jo={},Qo={},es={},ts={},Uu=Object.keys(ua);function Wu(e){return~Au.indexOf(e)}function Yu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Wu(a)?a:null}var ns=function(){var t=function(i){return sr(Gt,function(o,s,l){return o[l]=sr(s,i,{}),o},{})};Go=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ts=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Gt||N.autoFetchSvg,r=sr(Vu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Qo=r.names,es=r.unicodes,pa=Yn(N.styleDefault)};Ou(function(e){pa=Yn(e.styleDefault)});ns();function ha(e,t){return(Go[e]||{})[t]}function Zu(e,t){return(Jo[e]||{})[t]}function Tt(e,t){return(ts[e]||{})[t]}function rs(e){return Qo[e]||{prefix:null,iconName:null}}function Ku(e){var t=es[e],n=ha("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return pa}var ga=function(){return{prefix:null,iconName:null,rest:[]}};function Yn(e){var t=ua[e],n=On[e]||On[t],r=e in Le.styles?e:null;return n||r||null}function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Yu(N.familyPrefix,s);if(Gt[s]?(s=ju.includes(s)?bu[s]:s,a=s,o.prefix=s):Uu.indexOf(s)>-1?(a=s,o.prefix=Yn(s)):l?o.iconName=l:s!==N.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?rs(o.iconName):{},d=Tt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||d||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Gt.far&&Gt.fas&&!N.autoFetchSvg&&(o.prefix="fas")}return o},ga());return(i.prefix==="fa"||a==="fa")&&(i.prefix=at()||"fas"),i}var qu=function(){function e(){iu(this,e),this.definitions={}}return ou(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Ir(s,o[s]);var l=Uo[s];l&&Ir(l,o[s]),ns()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),hi=[],Ot={},St={},Xu=Object.keys(St);function Gu(e,t){var n=t.mixoutsTo;return hi=e,Ot={},Object.keys(St).forEach(function(r){Xu.indexOf(r)===-1&&delete St[r]}),hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Tn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ot[o]||(Ot[o]=[]),Ot[o].push(i[o])})}r.provides&&r.provides(St)}),n}function Pr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ot[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ot[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return St[e]?St[e].apply(null,t):void 0}function Sr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(!!t)return t=Tt(n,t)||t,mi(as.definitions,n,t)||mi(Le.styles,n,t)}var as=new qu,Ju=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,yt("noAuto")},Qu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(yt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Du(function(){t1({autoReplaceSvgRoot:n}),yt("watch",t)})}},e1={icon:function(t){if(t===null)return null;if(Tn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yn(t[0]);return{prefix:r,iconName:Tt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(yu))){var a=Zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||at(),iconName:Tt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=at();return{prefix:i,iconName:Tt(i,t)||t}}}},be={noAuto:Ju,config:N,dom:Qu,parse:e1,library:as,findIconDefinition:Sr,toHtml:on},t1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Le.styles).length>0||N.autoFetchSvg)&&Ye&&N.autoReplaceSvg&&be.dom.i2svg({node:r})};function Kn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ye){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function n1(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ma(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Wn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function r1(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,p=e.watchable,b=p===void 0?!1:p,M=r.found?r:n,T=M.width,I=M.height,C=a==="fak",L=[N.replacementClass,i?"".concat(N.familyPrefix,"-").concat(i):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:L,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(I)})},$=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/I*16*.0625,"em")}:{};b&&(F.attributes[bt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||an())},children:[l]}),delete F.attributes.title);var V=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},$),m.styles)}),te=r.found&&n.found?Ue("generateAbstractMask",V)||{children:[],attributes:{}}:Ue("generateAbstractIcon",V)||{children:[],attributes:{}},B=te.children,q=te.attributes;return V.children=B,V.attributes=q,s?r1(V):n1(V)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[bt]="");var d=E({},o.styles);ma(a)&&(d.transform=Nu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Wn(d);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function a1(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Wn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var lr=Le.styles;function Nr(e){var t=e[0],n=e[1],r=e.slice(4),a=sa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var i1={found:!1,width:512,height:512};function o1(e,t){!jo&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hr(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=at()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=rs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&lr[t]&&lr[t][e]){var o=lr[t][e];return r(Nr(o))}o1(e,t),r(E(E({},i1),{},{icon:N.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var vi=function(){},Fr=N.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:vi,measure:vi},Wt='FA "6.1.1"',s1=function(t){return Fr.mark("".concat(Wt," ").concat(t," begins")),function(){return is(t)}},is=function(t){Fr.mark("".concat(Wt," ").concat(t," ends")),Fr.measure("".concat(Wt," ").concat(t),"".concat(Wt," ").concat(t," begins"),"".concat(Wt," ").concat(t," ends"))},ba={begin:s1,end:is},Cn=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(bt):null;return typeof t=="string"}function l1(e){var t=e.getAttribute?e.getAttribute(fa):null,n=e.getAttribute?e.getAttribute(ca):null;return t&&n}function f1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function c1(){if(N.autoReplaceSvg===!0)return xn.replace;var e=xn[N.autoReplaceSvg];return e||xn.replace}function u1(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function d1(e){return J.createElement(e)}function os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?u1:d1:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(os(o,{ceFn:r}))}),a}function m1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(os(a),n)}),n.getAttribute(bt)===null&&N.keepOriginalSource){var r=J.createComment(m1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~da(n).indexOf(N.replacementClass))return xn.replace(t);var a=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(bt,""),n.innerHTML=o}};function yi(e){e()}function ss(e,t){var n=typeof t=="function"?t:Cn;if(e.length===0)n();else{var r=yi;N.mutateApproach===gu&&(r=rt.requestAnimationFrame||yi),r(function(){var a=c1(),i=ba.begin("mutate");e.map(a),i(),n()})}}var ya=!1;function ls(){ya=!0}function Rr(){ya=!1}var In=null;function Ci(e){if(!!ci&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?Cn:t,r=e.nodeCallback,a=r===void 0?Cn:r,i=e.pseudoElementsCallback,o=i===void 0?Cn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;In=new ci(function(c){if(!ya){var d=at();$t(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~_u.indexOf(m.attributeName))if(m.attributeName==="class"&&l1(m.target)){var p=Zn(da(m.target)),b=p.prefix,M=p.iconName;m.target.setAttribute(fa,b||d),M&&m.target.setAttribute(ca,M)}else f1(m.target)&&a(m.target)})}}),Ye&&In.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function p1(){!In||In.disconnect()}function h1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function g1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Zn(da(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Zu(a.prefix,e.innerText)||ha(a.prefix,Mr(e.innerText))),a}function v1(e){var t=$t(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||an()):(t["aria-hidden"]="true",t.focusable="false")),t}function b1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=g1(e),r=n.iconName,a=n.prefix,i=n.rest,o=v1(e),s=Pr("parseNodeAttributes",{},e),l=t.styleParser?h1(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var y1=Le.styles;function fs(e){var t=N.autoReplaceSvg==="nest"?xi(e,{styleParser:!1}):xi(e);return~t.extra.classes.indexOf(Wo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(ui,"-").concat(m))},a=function(m){return n.remove("".concat(ui,"-").concat(m))},i=N.autoFetchSvg?Object.keys(ua):Object.keys(y1),o=[".".concat(Wo,":not([").concat(bt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(bt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=$t(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ba.begin("onTree"),c=s.reduce(function(d,m){try{var p=fs(m);p&&d.push(p)}catch(b){jo||b.name==="MissingIcon"&&console.error(b)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(p){ss(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(p){l(),m(p)})})}function C1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fs(e).then(function(n){n&&ss([n],t)})}function x1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Sr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Sr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var w1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,p=m===void 0?null:m,b=n.titleId,M=b===void 0?null:b,T=n.classes,I=T===void 0?[]:T,C=n.attributes,L=C===void 0?{}:C,F=n.styles,$=F===void 0?{}:F;if(!!t){var V=t.prefix,te=t.iconName,B=t.icon;return Kn(E({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?L["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(M||an()):(L["aria-hidden"]="true",L.focusable="false")),va({icons:{main:Nr(B),mask:l?Nr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:te,transform:E(E({},Ne),a),symbol:o,title:p,maskId:d,titleId:M,extra:{attributes:L,styles:$,classes:I}})})}},_1={mixout:function(){return{icon:x1(w1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wi,n.nodeCallback=C1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return wi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,p=r.extra;return new Promise(function(b,M){Promise.all([Hr(a,s),d.iconName?Hr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var I=sa(T,2),C=I[0],L=I[1];b([n,va({icons:{main:C,mask:L},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Wn(s);l.length>0&&(a.style=l);var c;return ma(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},A1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Kn({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(Un(i)).join(" ")},children:o}]})}}}},k1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Kn({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),a1({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(Un(s))}})})}}}},L1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,p=r.styles,b=p===void 0?{}:p;return Kn({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(N.familyPrefix,"-layers-text")].concat(Un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(zo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},E1=new RegExp('"',"ug"),_i=[1105920,1112319];function T1(e){var t=e.replace(E1,""),n=Bu(t,0),r=n>=_i[0]&&n<=_i[1],a=t.length===2?t[0]===t[1]:!1;return{value:Mr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(hu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=$t(e.children),o=i.filter(function(te){return te.getAttribute(Or)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cu),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?On[l[2].toLowerCase()]:xu[c],b=T1(m),M=b.value,T=b.isSecondary,I=l[0].startsWith("FontAwesome"),C=ha(p,M),L=C;if(I){var F=Ku(M);F.iconName&&F.prefix&&(C=F.iconName,p=F.prefix)}if(C&&!T&&(!o||o.getAttribute(fa)!==p||o.getAttribute(ca)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var $=b1(),V=$.extra;V.attributes[Or]=t,Hr(C,p).then(function(te){var B=va(E(E({},$),{},{icons:{main:te,mask:ga()},prefix:p,iconName:L,extra:V,watchable:!0})),q=J.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=B.map(function(Y){return on(Y)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function O1(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function M1(e){return e.parentNode!==document.head&&!~vu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Or)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ki(e){if(!!Ye)return new Promise(function(t,n){var r=$t(e.querySelectorAll("*")).filter(M1).map(O1),a=ba.begin("searchPseudoElements");ls(),Promise.all(r).then(function(){a(),Rr(),t()}).catch(function(){a(),Rr(),n()})})}var I1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ki,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;N.searchPseudoElements&&ki(a)}}},Li=!1,P1={mixout:function(){return{dom:{unwatch:function(){ls(),Li=!0}}}},hooks:function(){return{bootstrap:function(){Ci(Pr("mutationObserverCallbacks",{}))},noAuto:function(){p1()},watch:function(n){var r=n.observeMutationsRoot;Li?Rr():Ci(Pr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ei=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},S1={mixout:function(){return{parse:{transform:function(n){return Ei(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ei(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:E({},b.outer),children:[{tag:"g",attributes:E({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),b.path)}]}]}}}},fr={x:0,y:0,width:"100%",height:"100%"};function Ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function N1(e){return e.tag==="g"?e.children:[e]}var H1={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Zn(a.split(" ").map(function(o){return o.trim()})):ga();return i.prefix||(i.prefix=at()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,p=o.icon,b=Su({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:E(E({},fr),{},{fill:"white"})},T=d.children?{children:d.children.map(Ti)}:{},I={tag:"g",attributes:E({},b.inner),children:[Ti(E({tag:d.tag,attributes:E(E({},d.attributes),b.path)},T))]},C={tag:"g",attributes:E({},b.outer),children:[I]},L="mask-".concat(s||an()),F="clip-".concat(s||an()),$={tag:"mask",attributes:E(E({},fr),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,C]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:N1(p)},$]};return r.push(V,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(L,")")},fr)}),{children:r,attributes:a}}}},F1={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},R1={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},D1=[Fu,_1,A1,k1,L1,I1,P1,S1,H1,F1,R1];Gu(D1,{mixoutsTo:be});be.noAuto;var cs=be.config,$1=be.library;be.dom;var us=be.parse;be.findIconDefinition;be.toHtml;var z1=be.icon;be.layer;var B1=be.text;be.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var V1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},j1=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function U1(e,t){return t={exports:{}},e(t,t.exports),t.exports}var W1=U1(function(e){(function(t){var n=function(C,L,F){if(!c(L)||m(L)||p(L)||b(L)||l(L))return L;var $,V=0,te=0;if(d(L))for($=[],te=L.length;V<te;V++)$.push(n(C,L[V],F));else{$={};for(var B in L)Object.prototype.hasOwnProperty.call(L,B)&&($[C(B,F)]=n(C,L[B],F))}return $},r=function(C,L){L=L||{};var F=L.separator||"_",$=L.split||/(?=[A-Z])/;return C.split($).join(F)},a=function(C){return M(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(L,F){return F?F.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},i=function(C){var L=a(C);return L.substr(0,1).toUpperCase()+L.substr(1)},o=function(C,L){return r(C,L).toLowerCase()},s=Object.prototype.toString,l=function(C){return typeof C=="function"},c=function(C){return C===Object(C)},d=function(C){return s.call(C)=="[object Array]"},m=function(C){return s.call(C)=="[object Date]"},p=function(C){return s.call(C)=="[object RegExp]"},b=function(C){return s.call(C)=="[object Boolean]"},M=function(C){return C=C-0,C===C},T=function(C,L){var F=L&&"process"in L?L.process:L;return typeof F!="function"?C:function($,V){return F($,C,V)}},I={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(C,L){return n(T(a,L),C)},decamelizeKeys:function(C,L){return n(T(o,L),C,L)},pascalizeKeys:function(C,L){return n(T(i,L),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(j1)}),Y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Pn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z1=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Dr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function K1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=W1.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function q1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ca(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=q1(d);break;case"style":l.style=K1(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Z1(n,["class","style"]);return ia(e.tag,Pn({},t,{class:a.class,style:Pn({},a.style,o)},a.attrs,s),r)}var ds=!1;try{ds=!0}catch{}function X1(){if(!ds&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Yt({},e,t):{}}function G1(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Yt(t,"fa-"+e.size,e.size!==null),Yt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Yt(t,"fa-pull-"+e.pull,e.pull!==null),Yt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Y1(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var J1=it({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ce(function(){return Oi(t.icon)}),i=Ce(function(){return Jt("classes",G1(t))}),o=Ce(function(){return Jt("transform",typeof t.transform=="string"?us.transform(t.transform):t.transform)}),s=Ce(function(){return Jt("mask",Oi(t.mask))}),l=Ce(function(){return z1(a.value,Pn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});hn(l,function(d){if(!d)return X1("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Ce(function(){return l.value?Ca(l.value.abstract[0],{},r):null});return function(){return c.value}}});it({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=cs.familyPrefix,i=Ce(function(){return[a+"-layers"].concat(Dr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return ia("div",{class:i.value},r.default?r.default():[])}}});it({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=cs.familyPrefix,i=Ce(function(){return Jt("classes",[].concat(Dr(t.counter?[a+"-layers-counter"]:[]),Dr(t.position?[a+"-layers-"+t.position]:[])))}),o=Ce(function(){return Jt("transform",typeof t.transform=="string"?us.transform(t.transform):t.transform)}),s=Ce(function(){var c=B1(t.value.toString(),Pn({},o.value,i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=Ce(function(){return Ca(s.value,{},r)});return function(){return l.value}}});$1.add(V1);jf(au).component("icon",J1).mount("#app");
