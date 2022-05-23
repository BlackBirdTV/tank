const vo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};vo();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const bo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xo=Br(bo);function Si(e){return!!e||e===""}function Nn(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?wo(r):Nn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(se(e))return e}}const yo=/;(?![^(]*\))/g,Co=/:(.+)/;function wo(e){const t={};return e.split(yo).forEach(n=>{if(n){const r=n.split(Co);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Vr(e){let t="";if(fe(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Vr(e[n]);r&&(t+=r+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ni=e=>fe(e)?e:e==null?"":R(e)||se(e)&&(e.toString===Ri||!D(e.toString))?JSON.stringify(e,Hi,2):String(e),Hi=(e,t)=>t&&t.__v_isRef?Hi(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!R(t)&&!$i(t)?String(t):t,q={},It=[],Te=()=>{},_o=()=>!1,Ao=/^on[^a-z]/,Hn=e=>Ao.test(e),jr=e=>e.startsWith("onUpdate:"),ce=Object.assign,Ur=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ko=Object.prototype.hasOwnProperty,j=(e,t)=>ko.call(e,t),R=Array.isArray,St=e=>Fn(e)==="[object Map]",Fi=e=>Fn(e)==="[object Set]",D=e=>typeof e=="function",fe=e=>typeof e=="string",Wr=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",zi=e=>se(e)&&D(e.then)&&D(e.catch),Ri=Object.prototype.toString,Fn=e=>Ri.call(e),Lo=e=>Fn(e).slice(8,-1),$i=e=>Fn(e)==="[object Object]",Yr=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Eo=/-(\w)/g,Re=zn(e=>e.replace(Eo,(t,n)=>n?n.toUpperCase():"")),To=/\B([A-Z])/g,zt=zn(e=>e.replace(To,"-$1").toLowerCase()),Rn=zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),er=zn(e=>e?`on${Rn(e)}`:""),en=(e,t)=>!Object.is(e,t),tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Di=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const Oo=()=>Oa||(Oa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ne;class Mo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ne&&(this.parent=Ne,this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Po(e,t=Ne){t&&t.active&&t.effects.push(e)}const Zr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bi=e=>(e.w&it)>0,Vi=e=>(e.n&it)>0,Io=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},So=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Bi(a)&&!Vi(a)?a.delete(e):t[n++]=a,a.w&=~it,a.n&=~it}t.length=n}},dr=new WeakMap;let Ut=0,it=1;const pr=30;let ke;const ht=Symbol(""),mr=Symbol("");class Kr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Po(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,rt=!0,it=1<<++Ut,Ut<=pr?Io(this):Ma(this),this.fn()}finally{Ut<=pr&&So(this),it=1<<--Ut,ke=this.parent,rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const ji=[];function Rt(){ji.push(rt),rt=!1}function $t(){const e=ji.pop();rt=e===void 0?!0:e}function be(e,t,n){if(rt&&ke){let r=dr.get(e);r||dr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Zr()),Ui(a)}}function Ui(e,t){let n=!1;Ut<=pr?Vi(e)||(e.n|=it,n=!Bi(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function je(e,t,n,r,a,i){const s=dr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e))s.forEach((l,f)=>{(f==="length"||f>=r)&&o.push(l)});else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?Yr(n)&&o.push(s.get("length")):(o.push(s.get(ht)),St(e)&&o.push(s.get(mr)));break;case"delete":R(e)||(o.push(s.get(ht)),St(e)&&o.push(s.get(mr)));break;case"set":St(e)&&o.push(s.get(ht));break}if(o.length===1)o[0]&&hr(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);hr(Zr(l))}}function hr(e,t){for(const n of R(e)?e:[...e])(n!==ke||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const No=Br("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Wr)),Ho=qr(),Fo=qr(!1,!0),zo=qr(!0),Pa=Ro();function Ro(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,s=this.length;i<s;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=W(this)[t].apply(this,n);return $t(),r}}),e}function qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?el:Xi:t?qi:Ki).get(r))return r;const s=R(r);if(!e&&s&&j(Pa,a))return Reflect.get(Pa,a,i);const o=Reflect.get(r,a,i);return(Wr(a)?Wi.has(a):No(a))||(e||be(r,"get",a),t)?o:ie(o)?!s||!Yr(a)?o.value:o:se(o)?e?Gi(o):Jr(o):o}}const $o=Yi(),Do=Yi(!0);function Yi(e=!1){return function(n,r,a,i){let s=n[r];if(tn(s)&&ie(s)&&!ie(a))return!1;if(!e&&!tn(a)&&(Ji(a)||(a=W(a),s=W(s)),!R(n)&&ie(s)&&!ie(a)))return s.value=a,!0;const o=R(n)&&Yr(r)?Number(r)<n.length:j(n,r),l=Reflect.set(n,r,a,i);return n===W(i)&&(o?en(a,s)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function Bo(e,t){const n=j(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function Vo(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!Wi.has(t))&&be(e,"has",t),n}function jo(e){return be(e,"iterate",R(e)?"length":ht),Reflect.ownKeys(e)}const Zi={get:Ho,set:$o,deleteProperty:Bo,has:Vo,ownKeys:jo},Uo={get:zo,set(e,t){return!0},deleteProperty(e,t){return!0}},Wo=ce({},Zi,{get:Fo,set:Do}),Xr=e=>e,$n=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);t!==i&&!n&&be(a,"get",t),!n&&be(a,"get",i);const{has:s}=$n(a),o=r?Xr:n?ea:nn;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return e!==a&&!t&&be(r,"has",e),!t&&be(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&be(W(e),"iterate",ht),Reflect.get(e,"size",e)}function Ia(e){e=W(e);const t=W(this);return $n(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function Sa(e,t){t=W(t);const n=W(this),{has:r,get:a}=$n(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?en(t,s)&&je(n,"set",e,t):je(n,"add",e,t),this}function Na(e){const t=W(this),{has:n,get:r}=$n(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function Ha(){const e=W(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=W(s),l=t?Xr:e?ea:nn;return!e&&be(o,"iterate",ht),s.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),s=St(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,f=a[e](...r),d=n?Xr:t?ea:nn;return!t&&be(i,"iterate",l?mr:ht),{next(){const{value:p,done:m}=f.next();return m?{value:p,done:m}:{value:o?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:this}}function Yo(){const e={get(i){return cn(this,i)},get size(){return un(this)},has:fn,add:Ia,set:Sa,delete:Na,clear:Ha,forEach:dn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return un(this)},has:fn,add:Ia,set:Sa,delete:Na,clear:Ha,forEach:dn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return un(this,!0)},has(i){return fn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:dn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return fn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[Zo,Ko,qo,Xo]=Yo();function Gr(e,t){const n=t?e?Xo:qo:e?Ko:Zo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(j(n,a)&&a in r?n:r,a,i)}const Go={get:Gr(!1,!1)},Jo={get:Gr(!1,!0)},Qo={get:Gr(!0,!1)},Ki=new WeakMap,qi=new WeakMap,Xi=new WeakMap,el=new WeakMap;function tl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(e){return e.__v_skip||!Object.isExtensible(e)?0:tl(Lo(e))}function Jr(e){return tn(e)?e:Qr(e,!1,Zi,Go,Ki)}function rl(e){return Qr(e,!1,Wo,Jo,qi)}function Gi(e){return Qr(e,!0,Uo,Qo,Xi)}function Qr(e,t,n,r,a){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=nl(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Nt(e){return tn(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function Ji(e){return!!(e&&e.__v_isShallow)}function Qi(e){return Nt(e)||tn(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function es(e){return _n(e,"__v_skip",!0),e}const nn=e=>se(e)?Jr(e):e,ea=e=>se(e)?Gi(e):e;function ts(e){rt&&ke&&(e=W(e),Ui(e.dep||(e.dep=Zr())))}function ns(e,t){e=W(e),e.dep&&hr(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function kt(e){return al(e,!1)}function al(e,t){return ie(e)?e:new il(e,t)}class il{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:nn(t)}get value(){return ts(this),this._value}set value(t){t=this.__v_isShallow?t:W(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:nn(t),ns(this))}}function Be(e){return ie(e)?e.value:e}const sl={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function rs(e){return Nt(e)?e:new Proxy(e,sl)}class ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Kr(t,()=>{this._dirty||(this._dirty=!0,ns(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return ts(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ll(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new ol(r,a,i||!a,n)}function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Dn(i,t,n)}return a}function _e(e,t,n,r){if(D(e)){const i=at(e,t,n,r);return i&&zi(i)&&i.catch(s=>{Dn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(_e(e[i],t,n,r));return a}function Dn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,s,o]);return}}cl(e,n,a,r)}function cl(e,t,n,r=!0){console.error(e)}let An=!1,gr=!1;const ve=[];let Ve=0;const Kt=[];let Wt=null,Et=0;const qt=[];let tt=null,Tt=0;const as=Promise.resolve();let ta=null,vr=null;function fl(e){const t=ta||as;return e?t.then(this?e.bind(this):e):t}function ul(e){let t=Ve+1,n=ve.length;for(;t<n;){const r=t+n>>>1;rn(ve[r])<e?t=r+1:n=r}return t}function is(e){(!ve.length||!ve.includes(e,An&&e.allowRecurse?Ve+1:Ve))&&e!==vr&&(e.id==null?ve.push(e):ve.splice(ul(e.id),0,e),ss())}function ss(){!An&&!gr&&(gr=!0,ta=as.then(cs))}function dl(e){const t=ve.indexOf(e);t>Ve&&ve.splice(t,1)}function os(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ss()}function pl(e){os(e,Wt,Kt,Et)}function ml(e){os(e,tt,qt,Tt)}function na(e,t=null){if(Kt.length){for(vr=t,Wt=[...new Set(Kt)],Kt.length=0,Et=0;Et<Wt.length;Et++)Wt[Et]();Wt=null,Et=0,vr=null,na(e,t)}}function ls(e){if(qt.length){const t=[...new Set(qt)];if(qt.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((n,r)=>rn(n)-rn(r)),Tt=0;Tt<tt.length;Tt++)tt[Tt]();tt=null,Tt=0}}const rn=e=>e.id==null?1/0:e.id;function cs(e){gr=!1,An=!0,na(e),ve.sort((n,r)=>rn(n)-rn(r));const t=Te;try{for(Ve=0;Ve<ve.length;Ve++){const n=ve[Ve];n&&n.active!==!1&&at(n,null,14)}}finally{Ve=0,ve.length=0,ls(),An=!1,ta=null,(ve.length||Kt.length||qt.length)&&cs(e)}}function hl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:m}=r[d]||q;m?a=n.map(b=>b.trim()):p&&(a=n.map(Di))}let o,l=r[o=er(t)]||r[o=er(Re(t))];!l&&i&&(l=r[o=er(zt(t))]),l&&_e(l,e,6,a);const f=r[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,_e(f,e,6,a)}}function fs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!D(e)){const l=f=>{const d=fs(f,t,!0);d&&(o=!0,ce(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(r.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):ce(s,i),r.set(e,s),s)}function Bn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,zt(t))||j(e,t))}let Le=null,us=null;function kn(e){const t=Le;return Le=e,us=e&&e.type.__scopeId||null,t}function ds(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ya(-1);const i=kn(t),s=e(...a);return kn(i),r._d&&Ya(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function nr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:f,render:d,renderCache:p,data:m,setupState:b,ctx:M,inheritAttrs:T}=e;let P,C;const L=kn(e);try{if(n.shapeFlag&4){const $=a||r;P=He(d.call($,$,p,i,b,m,M)),C=l}else{const $=t;P=He($.length>1?$(i,{attrs:l,slots:o,emit:f}):$(i,null)),C=t.props?l:gl(l)}}catch($){Xt.length=0,Dn($,e,1),P=Z(Oe)}let F=P;if(C&&T!==!1){const $=Object.keys(C),{shapeFlag:V}=F;$.length&&V&7&&(s&&$.some(jr)&&(C=vl(C,s)),F=bt(F,C))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),P=F,kn(L),P}const gl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},vl=(e,t)=>{const n={};for(const r in e)(!jr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Fa(r,s,f):!!s;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(s[m]!==r[m]&&!Bn(f,m))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Fa(r,s,f):!0:!!s;return!1}function Fa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Bn(n,i))return!0}return!1}function xl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const yl=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):ml(e)}function wl(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function rr(e,t,n=!1){const r=oe||Le;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r.proxy):t}}const za={};function gn(e,t,n){return ps(e,t,n)}function ps(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){const o=oe;let l,f=!1,d=!1;if(ie(e)?(l=()=>e.value,f=Ji(e)):Nt(e)?(l=()=>e,r=!0):R(e)?(d=!0,f=e.some(Nt),l=()=>e.map(C=>{if(ie(C))return C.value;if(Nt(C))return Ot(C);if(D(C))return at(C,o,2)})):D(e)?t?l=()=>at(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return p&&p(),_e(e,o,3,[m])}:l=Te,t&&r){const C=l;l=()=>Ot(C())}let p,m=C=>{p=P.onStop=()=>{at(C,o,4)}};if(an)return m=Te,t?n&&_e(t,o,3,[l(),d?[]:void 0,m]):l(),Te;let b=d?[]:za;const M=()=>{if(!!P.active)if(t){const C=P.run();(r||f||(d?C.some((L,F)=>en(L,b[F])):en(C,b)))&&(p&&p(),_e(t,o,3,[C,b===za?void 0:b,m]),b=C)}else P.run()};M.allowRecurse=!!t;let T;a==="sync"?T=M:a==="post"?T=()=>me(M,o&&o.suspense):T=()=>{!o||o.isMounted?pl(M):M()};const P=new Kr(l,T);return t?n?M():b=P.run():a==="post"?me(P.run.bind(P),o&&o.suspense):P.run(),()=>{P.stop(),o&&o.scope&&Ur(o.scope.effects,P)}}function _l(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?ms(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const s=oe;Ft(this);const o=ps(a,i.bind(r),n);return s?Ft(s):vt(),o}function ms(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ot(e,t){if(!se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))Ot(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)Ot(e[n],t);else if(Fi(e)||St(e))e.forEach(n=>{Ot(n,t)});else if($i(e))for(const n in e)Ot(e[n],t);return e}function Al(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ra(()=>{e.isMounted=!0}),xs(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],kl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},setup(e,{slots:t}){const n=cc(),r=Al();let a;return()=>{const i=t.default&&vs(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const T of i)if(T.type!==Oe){s=T;break}}const o=W(e),{mode:l}=o;if(r.isLeaving)return ar(s);const f=Ra(s);if(!f)return ar(s);const d=br(f,o,r,n);xr(f,d);const p=n.subTree,m=p&&Ra(p);let b=!1;const{getTransitionKey:M}=f.type;if(M){const T=M();a===void 0?a=T:T!==a&&(a=T,b=!0)}if(m&&m.type!==Oe&&(!dt(f,m)||b)){const T=br(m,o,r,n);if(xr(m,T),l==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update()},ar(s);l==="in-out"&&f.type!==Oe&&(T.delayLeave=(P,C,L)=>{const F=gs(r,m);F[String(m.key)]=m,P._leaveCb=()=>{C(),P._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=L})}return s}}},hs=kl;function gs(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function br(e,t,n,r){const{appear:a,mode:i,persisted:s=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:b,onLeaveCancelled:M,onBeforeAppear:T,onAppear:P,onAfterAppear:C,onAppearCancelled:L}=t,F=String(e.key),$=gs(n,e),V=(B,X)=>{B&&_e(B,r,9,X)},re={mode:i,persisted:s,beforeEnter(B){let X=o;if(!n.isMounted)if(a)X=T||o;else return;B._leaveCb&&B._leaveCb(!0);const Y=$[F];Y&&dt(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),V(X,[B])},enter(B){let X=l,Y=f,pe=d;if(!n.isMounted)if(a)X=P||l,Y=C||f,pe=L||d;else return;let ue=!1;const H=B._enterCb=ae=>{ue||(ue=!0,ae?V(pe,[B]):V(Y,[B]),re.delayedLeave&&re.delayedLeave(),B._enterCb=void 0)};X?(X(B,H),X.length<=1&&H()):H()},leave(B,X){const Y=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return X();V(p,[B]);let pe=!1;const ue=B._leaveCb=H=>{pe||(pe=!0,X(),H?V(M,[B]):V(b,[B]),B._leaveCb=void 0,$[Y]===e&&delete $[Y])};$[Y]=e,m?(m(B,ue),m.length<=1&&ue()):ue()},clone(B){return br(B,t,n,r)}};return re}function ar(e){if(Vn(e))return e=bt(e),e.children=null,e}function Ra(e){return Vn(e)?e.children?e.children[0]:void 0:e}function xr(e,t){e.shapeFlag&6&&e.component?xr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vs(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let s=e[i];const o=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===Ce?(s.patchFlag&128&&a++,r=r.concat(vs(s.children,t,o))):(t||s.type!==Oe)&&r.push(o!=null?bt(s,{key:o}):s)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ze(e){return D(e)?{setup:e,name:e.name}:e}const yr=e=>!!e.type.__asyncLoader,Vn=e=>e.type.__isKeepAlive;function Ll(e,t){bs(e,"a",t)}function El(e,t){bs(e,"da",t)}function bs(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(jn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Vn(a.parent.vnode)&&Tl(r,t,n,a),a=a.parent}}function Tl(e,t,n,r){const a=jn(t,e,r,!0);ys(()=>{Ur(r[t],a)},n)}function jn(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Rt(),Ft(n);const o=_e(t,n,e,s);return vt(),$t(),o});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=oe)=>(!an||e==="sp")&&jn(e,t,n),Ol=Ke("bm"),ra=Ke("m"),Ml=Ke("bu"),Pl=Ke("u"),xs=Ke("bum"),ys=Ke("um"),Il=Ke("sp"),Sl=Ke("rtg"),Nl=Ke("rtc");function Hl(e,t=oe){jn("ec",e,t)}let Cr=!0;function Fl(e){const t=ws(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:f,created:d,beforeMount:p,mounted:m,beforeUpdate:b,updated:M,activated:T,deactivated:P,beforeDestroy:C,beforeUnmount:L,destroyed:F,unmounted:$,render:V,renderTracked:re,renderTriggered:B,errorCaptured:X,serverPrefetch:Y,expose:pe,inheritAttrs:ue,components:H,directives:ae,filters:Me}=t;if(f&&zl(f,r,null,e.appContext.config.unwrapInjectedRef),s)for(const te in s){const G=s[te];D(G)&&(r[te]=G.bind(n))}if(a){const te=a.call(n,n);se(te)&&(e.data=Jr(te))}if(Cr=!0,i)for(const te in i){const G=i[te],$e=D(G)?G.bind(n,n):D(G.get)?G.get.bind(n,n):Te,Gn=!D(G)&&D(G.set)?G.set.bind(n):Te,Bt=we({get:$e,set:Gn});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:wt=>Bt.value=wt})}if(o)for(const te in o)Cs(o[te],r,n,te);if(l){const te=D(l)?l.call(n):l;Reflect.ownKeys(te).forEach(G=>{wl(G,te[G])})}d&&$a(d,e,"c");function le(te,G){R(G)?G.forEach($e=>te($e.bind(n))):G&&te(G.bind(n))}if(le(Ol,p),le(ra,m),le(Ml,b),le(Pl,M),le(Ll,T),le(El,P),le(Hl,X),le(Nl,re),le(Sl,B),le(xs,L),le(ys,$),le(Il,Y),R(pe))if(pe.length){const te=e.exposed||(e.exposed={});pe.forEach(G=>{Object.defineProperty(te,G,{get:()=>n[G],set:$e=>n[G]=$e})})}else e.exposed||(e.exposed={});V&&e.render===Te&&(e.render=V),ue!=null&&(e.inheritAttrs=ue),H&&(e.components=H),ae&&(e.directives=ae)}function zl(e,t,n=Te,r=!1){R(e)&&(e=wr(e));for(const a in e){const i=e[a];let s;se(i)?"default"in i?s=rr(i.from||a,i.default,!0):s=rr(i.from||a):s=rr(i),ie(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function $a(e,t,n){_e(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cs(e,t,n,r){const a=r.includes(".")?ms(n,r):()=>n[r];if(fe(e)){const i=t[e];D(i)&&gn(a,i)}else if(D(e))gn(a,e.bind(n));else if(se(e))if(R(e))e.forEach(i=>Cs(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&gn(a,i,e)}}function ws(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Ln(l,f,s,!0)),Ln(l,t,s)),i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(s=>Ln(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Rl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Rl={data:Da,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ut,directives:ut,watch:Dl,provide:Da,inject:$l};function Da(e,t){return t?e?function(){return ce(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function $l(e,t){return ut(wr(e),wr(t))}function wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?ce(ce(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function Bl(e,t,n,r=!1){const a={},i={};_n(i,Un,1),e.propsDefaults=Object.create(null),_s(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:rl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Vl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=W(a),[l]=e.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Bn(e.emitsOptions,m))continue;const b=t[m];if(l)if(j(i,m))b!==i[m]&&(i[m]=b,f=!0);else{const M=Re(m);a[M]=_r(l,o,M,b,e,!1)}else b!==i[m]&&(i[m]=b,f=!0)}}}else{_s(e,t,a,i)&&(f=!0);let d;for(const p in o)(!t||!j(t,p)&&((d=zt(p))===p||!j(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(a[p]=_r(l,o,p,void 0,e,!0)):delete a[p]);if(i!==o)for(const p in i)(!t||!j(t,p)&&!0)&&(delete i[p],f=!0)}f&&je(e,"set","$attrs")}function _s(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(hn(l))continue;const f=t[l];let d;a&&j(a,d=Re(l))?!i||!i.includes(d)?n[d]=f:(o||(o={}))[d]=f:Bn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(i){const l=W(n),f=o||q;for(let d=0;d<i.length;d++){const p=i[d];n[p]=_r(a,l,p,f[p],e,!j(f,p))}}return s}function _r(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=j(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&D(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ft(a),r=f[n]=l.call(null,t),vt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function As(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!D(e)){const d=p=>{l=!0;const[m,b]=As(p,t,!0);ce(s,m),b&&o.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,It),It;if(R(i))for(let d=0;d<i.length;d++){const p=Re(i[d]);Ba(p)&&(s[p]=q)}else if(i)for(const d in i){const p=Re(d);if(Ba(p)){const m=i[d],b=s[p]=R(m)||D(m)?{type:m}:m;if(b){const M=Ua(Boolean,b.type),T=Ua(String,b.type);b[0]=M>-1,b[1]=T<0||M<T,(M>-1||j(b,"default"))&&o.push(p)}}}const f=[s,o];return r.set(e,f),f}function Ba(e){return e[0]!=="$"}function Va(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ja(e,t){return Va(e)===Va(t)}function Ua(e,t){return R(t)?t.findIndex(n=>ja(n,e)):D(t)&&ja(t,e)?0:-1}const ks=e=>e[0]==="_"||e==="$stable",aa=e=>R(e)?e.map(He):[He(e)],jl=(e,t,n)=>{const r=ds((...a)=>aa(t(...a)),n);return r._c=!1,r},Ls=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ks(a))continue;const i=e[a];if(D(i))t[a]=jl(a,i,r);else if(i!=null){const s=aa(i);t[a]=()=>s}}},Es=(e,t)=>{const n=aa(t);e.slots.default=()=>n},Ul=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),_n(t,"_",n)):Ls(t,e.slots={})}else e.slots={},t&&Es(e,t);_n(e.slots,Un,1)},Wl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ce(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Ls(t,a)),s=t}else t&&(Es(e,t),s={default:1});if(i)for(const o in a)!ks(o)&&!(o in s)&&delete a[o]};function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Rt(),_e(l,n,8,[e.el,o,e,t]),$t())}}function Ts(){return{app:null,config:{isNativeTag:_o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Zl(e,t){return function(r,a=null){D(r)||(r=Object.assign({},r)),a!=null&&!se(a)&&(a=null);const i=Ts(),s=new Set;let o=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:gc,get config(){return i.config},set config(f){},use(f,...d){return s.has(f)||(f&&D(f.install)?(s.add(f),f.install(l,...d)):D(f)&&(s.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,p){if(!o){const m=Z(r,a);return m.appContext=i,d&&t?t(m,f):e(m,f,p),o=!0,l._container=f,f.__vue_app__=l,oa(m.component)||m.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l}};return l}}function Ar(e,t,n,r,a=!1){if(R(e)){e.forEach((m,b)=>Ar(m,t&&(R(t)?t[b]:t),n,r,a));return}if(yr(r)&&!a)return;const i=r.shapeFlag&4?oa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,f=t&&t.r,d=o.refs===q?o.refs={}:o.refs,p=o.setupState;if(f!=null&&f!==l&&(fe(f)?(d[f]=null,j(p,f)&&(p[f]=null)):ie(f)&&(f.value=null)),D(l))at(l,o,12,[s,d]);else{const m=fe(l),b=ie(l);if(m||b){const M=()=>{if(e.f){const T=m?d[l]:l.value;a?R(T)&&Ur(T,i):R(T)?T.includes(i)||T.push(i):m?(d[l]=[i],j(p,l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else m?(d[l]=s,j(p,l)&&(p[l]=s)):ie(l)&&(l.value=s,e.k&&(d[e.k]=s))};s?(M.id=-1,me(M,n)):M()}}}const me=Cl;function Kl(e){return ql(e)}function ql(e,t){const n=Oo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:f,setElementText:d,parentNode:p,nextSibling:m,setScopeId:b=Te,cloneNode:M,insertStaticContent:T}=e,P=(c,u,h,x=null,v=null,_=null,k=!1,w=null,A=!!u.dynamicChildren)=>{if(c===u)return;c&&!dt(c,u)&&(x=ln(c),Xe(c,v,_,!0),c=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:y,ref:I,shapeFlag:O}=u;switch(y){case ia:C(c,u,h,x);break;case Oe:L(c,u,h,x);break;case vn:c==null&&F(u,h,x,k);break;case Ce:ae(c,u,h,x,v,_,k,w,A);break;default:O&1?re(c,u,h,x,v,_,k,w,A):O&6?Me(c,u,h,x,v,_,k,w,A):(O&64||O&128)&&y.process(c,u,h,x,v,_,k,w,A,_t)}I!=null&&v&&Ar(I,c&&c.ref,_,u||c,!u)},C=(c,u,h,x)=>{if(c==null)r(u.el=o(u.children),h,x);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},L=(c,u,h,x)=>{c==null?r(u.el=l(u.children||""),h,x):u.el=c.el},F=(c,u,h,x)=>{[c.el,c.anchor]=T(c.children,u,h,x,c.el,c.anchor)},$=({el:c,anchor:u},h,x)=>{let v;for(;c&&c!==u;)v=m(c),r(c,h,x),c=v;r(u,h,x)},V=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=m(c),a(c),c=h;a(u)},re=(c,u,h,x,v,_,k,w,A)=>{k=k||u.type==="svg",c==null?B(u,h,x,v,_,k,w,A):pe(c,u,v,_,k,w,A)},B=(c,u,h,x,v,_,k,w)=>{let A,y;const{type:I,props:O,shapeFlag:S,transition:z,patchFlag:U,dirs:ee}=c;if(c.el&&M!==void 0&&U===-1)A=c.el=M(c.el);else{if(A=c.el=s(c.type,_,O&&O.is,O),S&8?d(A,c.children):S&16&&Y(c.children,A,null,x,v,_&&I!=="foreignObject",k,w),ee&&lt(c,null,x,"created"),O){for(const J in O)J!=="value"&&!hn(J)&&i(A,J,null,O[J],_,c.children,x,v,De);"value"in O&&i(A,"value",null,O.value),(y=O.onVnodeBeforeMount)&&Ie(y,x,c)}X(A,c,c.scopeId,k,x)}ee&&lt(c,null,x,"beforeMount");const K=(!v||v&&!v.pendingBranch)&&z&&!z.persisted;K&&z.beforeEnter(A),r(A,u,h),((y=O&&O.onVnodeMounted)||K||ee)&&me(()=>{y&&Ie(y,x,c),K&&z.enter(A),ee&&lt(c,null,x,"mounted")},v)},X=(c,u,h,x,v)=>{if(h&&b(c,h),x)for(let _=0;_<x.length;_++)b(c,x[_]);if(v){let _=v.subTree;if(u===_){const k=v.vnode;X(c,k,k.scopeId,k.slotScopeIds,v.parent)}}},Y=(c,u,h,x,v,_,k,w,A=0)=>{for(let y=A;y<c.length;y++){const I=c[y]=w?nt(c[y]):He(c[y]);P(null,I,u,h,x,v,_,k,w)}},pe=(c,u,h,x,v,_,k)=>{const w=u.el=c.el;let{patchFlag:A,dynamicChildren:y,dirs:I}=u;A|=c.patchFlag&16;const O=c.props||q,S=u.props||q;let z;h&&ct(h,!1),(z=S.onVnodeBeforeUpdate)&&Ie(z,h,u,c),I&&lt(u,c,h,"beforeUpdate"),h&&ct(h,!0);const U=v&&u.type!=="foreignObject";if(y?ue(c.dynamicChildren,y,w,h,x,U,_):k||$e(c,u,w,null,h,x,U,_,!1),A>0){if(A&16)H(w,u,O,S,h,x,v);else if(A&2&&O.class!==S.class&&i(w,"class",null,S.class,v),A&4&&i(w,"style",O.style,S.style,v),A&8){const ee=u.dynamicProps;for(let K=0;K<ee.length;K++){const J=ee[K],Ae=O[J],At=S[J];(At!==Ae||J==="value")&&i(w,J,Ae,At,v,c.children,h,x,De)}}A&1&&c.children!==u.children&&d(w,u.children)}else!k&&y==null&&H(w,u,O,S,h,x,v);((z=S.onVnodeUpdated)||I)&&me(()=>{z&&Ie(z,h,u,c),I&&lt(u,c,h,"updated")},x)},ue=(c,u,h,x,v,_,k)=>{for(let w=0;w<u.length;w++){const A=c[w],y=u[w],I=A.el&&(A.type===Ce||!dt(A,y)||A.shapeFlag&70)?p(A.el):h;P(A,y,I,null,x,v,_,k,!0)}},H=(c,u,h,x,v,_,k)=>{if(h!==x){for(const w in x){if(hn(w))continue;const A=x[w],y=h[w];A!==y&&w!=="value"&&i(c,w,y,A,k,u.children,v,_,De)}if(h!==q)for(const w in h)!hn(w)&&!(w in x)&&i(c,w,h[w],null,k,u.children,v,_,De);"value"in x&&i(c,"value",h.value,x.value)}},ae=(c,u,h,x,v,_,k,w,A)=>{const y=u.el=c?c.el:o(""),I=u.anchor=c?c.anchor:o("");let{patchFlag:O,dynamicChildren:S,slotScopeIds:z}=u;z&&(w=w?w.concat(z):z),c==null?(r(y,h,x),r(I,h,x),Y(u.children,h,I,v,_,k,w,A)):O>0&&O&64&&S&&c.dynamicChildren?(ue(c.dynamicChildren,S,h,v,_,k,w),(u.key!=null||v&&u===v.subTree)&&Os(c,u,!0)):$e(c,u,h,I,v,_,k,w,A)},Me=(c,u,h,x,v,_,k,w,A)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?v.ctx.activate(u,h,x,k,A):Ct(u,h,x,v,_,k,A):le(c,u,A)},Ct=(c,u,h,x,v,_,k)=>{const w=c.component=lc(c,x,v);if(Vn(c)&&(w.ctx.renderer=_t),fc(w),w.asyncDep){if(v&&v.registerDep(w,te),!c.el){const A=w.subTree=Z(Oe);L(null,A,u,h)}return}te(w,c,u,h,v,_,k)},le=(c,u,h)=>{const x=u.component=c.component;if(bl(c,u,h))if(x.asyncDep&&!x.asyncResolved){G(x,u,h);return}else x.next=u,dl(x.update),x.update();else u.component=c.component,u.el=c.el,x.vnode=u},te=(c,u,h,x,v,_,k)=>{const w=()=>{if(c.isMounted){let{next:I,bu:O,u:S,parent:z,vnode:U}=c,ee=I,K;ct(c,!1),I?(I.el=U.el,G(c,I,k)):I=U,O&&tr(O),(K=I.props&&I.props.onVnodeBeforeUpdate)&&Ie(K,z,I,U),ct(c,!0);const J=nr(c),Ae=c.subTree;c.subTree=J,P(Ae,J,p(Ae.el),ln(Ae),c,v,_),I.el=J.el,ee===null&&xl(c,J.el),S&&me(S,v),(K=I.props&&I.props.onVnodeUpdated)&&me(()=>Ie(K,z,I,U),v)}else{let I;const{el:O,props:S}=u,{bm:z,m:U,parent:ee}=c,K=yr(u);if(ct(c,!1),z&&tr(z),!K&&(I=S&&S.onVnodeBeforeMount)&&Ie(I,ee,u),ct(c,!0),O&&Qn){const J=()=>{c.subTree=nr(c),Qn(O,c.subTree,c,v,null)};K?u.type.__asyncLoader().then(()=>!c.isUnmounted&&J()):J()}else{const J=c.subTree=nr(c);P(null,J,h,x,c,v,_),u.el=J.el}if(U&&me(U,v),!K&&(I=S&&S.onVnodeMounted)){const J=u;me(()=>Ie(I,ee,J),v)}u.shapeFlag&256&&c.a&&me(c.a,v),c.isMounted=!0,u=h=x=null}},A=c.effect=new Kr(w,()=>is(c.update),c.scope),y=c.update=A.run.bind(A);y.id=c.uid,ct(c,!0),y()},G=(c,u,h)=>{u.component=c;const x=c.vnode.props;c.vnode=u,c.next=null,Vl(c,u.props,x,h),Wl(c,u.children,h),Rt(),na(void 0,c.update),$t()},$e=(c,u,h,x,v,_,k,w,A=!1)=>{const y=c&&c.children,I=c?c.shapeFlag:0,O=u.children,{patchFlag:S,shapeFlag:z}=u;if(S>0){if(S&128){Bt(y,O,h,x,v,_,k,w,A);return}else if(S&256){Gn(y,O,h,x,v,_,k,w,A);return}}z&8?(I&16&&De(y,v,_),O!==y&&d(h,O)):I&16?z&16?Bt(y,O,h,x,v,_,k,w,A):De(y,v,_,!0):(I&8&&d(h,""),z&16&&Y(O,h,x,v,_,k,w,A))},Gn=(c,u,h,x,v,_,k,w,A)=>{c=c||It,u=u||It;const y=c.length,I=u.length,O=Math.min(y,I);let S;for(S=0;S<O;S++){const z=u[S]=A?nt(u[S]):He(u[S]);P(c[S],z,h,null,v,_,k,w,A)}y>I?De(c,v,_,!0,!1,O):Y(u,h,x,v,_,k,w,A,O)},Bt=(c,u,h,x,v,_,k,w,A)=>{let y=0;const I=u.length;let O=c.length-1,S=I-1;for(;y<=O&&y<=S;){const z=c[y],U=u[y]=A?nt(u[y]):He(u[y]);if(dt(z,U))P(z,U,h,null,v,_,k,w,A);else break;y++}for(;y<=O&&y<=S;){const z=c[O],U=u[S]=A?nt(u[S]):He(u[S]);if(dt(z,U))P(z,U,h,null,v,_,k,w,A);else break;O--,S--}if(y>O){if(y<=S){const z=S+1,U=z<I?u[z].el:x;for(;y<=S;)P(null,u[y]=A?nt(u[y]):He(u[y]),h,U,v,_,k,w,A),y++}}else if(y>S)for(;y<=O;)Xe(c[y],v,_,!0),y++;else{const z=y,U=y,ee=new Map;for(y=U;y<=S;y++){const ge=u[y]=A?nt(u[y]):He(u[y]);ge.key!=null&&ee.set(ge.key,y)}let K,J=0;const Ae=S-U+1;let At=!1,La=0;const Vt=new Array(Ae);for(y=0;y<Ae;y++)Vt[y]=0;for(y=z;y<=O;y++){const ge=c[y];if(J>=Ae){Xe(ge,v,_,!0);continue}let Pe;if(ge.key!=null)Pe=ee.get(ge.key);else for(K=U;K<=S;K++)if(Vt[K-U]===0&&dt(ge,u[K])){Pe=K;break}Pe===void 0?Xe(ge,v,_,!0):(Vt[Pe-U]=y+1,Pe>=La?La=Pe:At=!0,P(ge,u[Pe],h,null,v,_,k,w,A),J++)}const Ea=At?Xl(Vt):It;for(K=Ea.length-1,y=Ae-1;y>=0;y--){const ge=U+y,Pe=u[ge],Ta=ge+1<I?u[ge+1].el:x;Vt[y]===0?P(null,Pe,h,Ta,v,_,k,w,A):At&&(K<0||y!==Ea[K]?wt(Pe,h,Ta,2):K--)}}},wt=(c,u,h,x,v=null)=>{const{el:_,type:k,transition:w,children:A,shapeFlag:y}=c;if(y&6){wt(c.component.subTree,u,h,x);return}if(y&128){c.suspense.move(u,h,x);return}if(y&64){k.move(c,u,h,_t);return}if(k===Ce){r(_,u,h);for(let O=0;O<A.length;O++)wt(A[O],u,h,x);r(c.anchor,u,h);return}if(k===vn){$(c,u,h);return}if(x!==2&&y&1&&w)if(x===0)w.beforeEnter(_),r(_,u,h),me(()=>w.enter(_),v);else{const{leave:O,delayLeave:S,afterLeave:z}=w,U=()=>r(_,u,h),ee=()=>{O(_,()=>{U(),z&&z()})};S?S(_,U,ee):ee()}else r(_,u,h)},Xe=(c,u,h,x=!1,v=!1)=>{const{type:_,props:k,ref:w,children:A,dynamicChildren:y,shapeFlag:I,patchFlag:O,dirs:S}=c;if(w!=null&&Ar(w,null,h,c,!0),I&256){u.ctx.deactivate(c);return}const z=I&1&&S,U=!yr(c);let ee;if(U&&(ee=k&&k.onVnodeBeforeUnmount)&&Ie(ee,u,c),I&6)go(c.component,h,x);else{if(I&128){c.suspense.unmount(h,x);return}z&&lt(c,null,u,"beforeUnmount"),I&64?c.type.remove(c,u,h,v,_t,x):y&&(_!==Ce||O>0&&O&64)?De(y,u,h,!1,!0):(_===Ce&&O&384||!v&&I&16)&&De(A,u,h),x&&Aa(c)}(U&&(ee=k&&k.onVnodeUnmounted)||z)&&me(()=>{ee&&Ie(ee,u,c),z&&lt(c,null,u,"unmounted")},h)},Aa=c=>{const{type:u,el:h,anchor:x,transition:v}=c;if(u===Ce){ho(h,x);return}if(u===vn){V(c);return}const _=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:w}=v,A=()=>k(h,_);w?w(c.el,_,A):A()}else _()},ho=(c,u)=>{let h;for(;c!==u;)h=m(c),a(c),c=h;a(u)},go=(c,u,h)=>{const{bum:x,scope:v,update:_,subTree:k,um:w}=c;x&&tr(x),v.stop(),_&&(_.active=!1,Xe(k,c,u,h)),w&&me(w,u),me(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},De=(c,u,h,x=!1,v=!1,_=0)=>{for(let k=_;k<c.length;k++)Xe(c[k],u,h,x,v)},ln=c=>c.shapeFlag&6?ln(c.component.subTree):c.shapeFlag&128?c.suspense.next():m(c.anchor||c.el),ka=(c,u,h)=>{c==null?u._vnode&&Xe(u._vnode,null,null,!0):P(u._vnode||null,c,u,null,null,null,h),ls(),u._vnode=c},_t={p:P,um:Xe,m:wt,r:Aa,mt:Ct,mc:Y,pc:$e,pbc:ue,n:ln,o:e};let Jn,Qn;return t&&([Jn,Qn]=t(_t)),{render:ka,hydrate:Jn,createApp:Zl(ka,Jn)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Os(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=nt(a[i]),o.el=s.el),n||Os(s,o))}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<f?i=o+1:s=o;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Gl=e=>e.__isTeleport,Ms="components";function Jl(e,t){return ec(Ms,e,!0,t)||e}const Ql=Symbol();function ec(e,t,n=!0,r=!1){const a=Le||oe;if(a){const i=a.type;if(e===Ms){const o=mc(i);if(o&&(o===t||o===Re(t)||o===Rn(Re(t))))return i}const s=Wa(a[e]||i[e],t)||Wa(a.appContext[e],t);return!s&&r?i:s}}function Wa(e,t){return e&&(e[t]||e[Re(t)]||e[Rn(Re(t))])}const Ce=Symbol(void 0),ia=Symbol(void 0),Oe=Symbol(void 0),vn=Symbol(void 0),Xt=[];let gt=null;function he(e=!1){Xt.push(gt=e?null:[])}function tc(){Xt.pop(),gt=Xt[Xt.length-1]||null}let En=1;function Ya(e){En+=e}function Ps(e){return e.dynamicChildren=En>0?gt||It:null,tc(),En>0&&gt&&gt.push(e),e}function Fe(e,t,n,r,a,i){return Ps(g(e,t,n,r,a,i,!0))}function bn(e,t,n,r,a){return Ps(Z(e,t,n,r,a,!0))}function kr(e){return e?e.__v_isVNode===!0:!1}function dt(e,t){return e.type===t.type&&e.key===t.key}const Un="__vInternal",Is=({key:e})=>e!=null?e:null,xn=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||ie(e)||D(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function g(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Is(t),ref:t&&xn(t),scopeId:us,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return o?(sa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),En>0&&!s&&gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&gt.push(l),l}const Z=nc;function nc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ql)&&(e=Oe),kr(e)){const o=bt(e,t,!0);return n&&sa(o,n),o}if(hc(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:o,style:l}=t;o&&!fe(o)&&(t.class=Vr(o)),se(l)&&(Qi(l)&&!R(l)&&(l=ce({},l)),t.style=Nn(l))}const s=fe(e)?1:yl(e)?128:Gl(e)?64:se(e)?4:D(e)?2:0;return g(e,t,n,r,a,s,i,!0)}function rc(e){return e?Qi(e)||Un in e?ce({},e):e:null}function bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?ac(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Is(o),ref:t&&t.ref?n&&a?R(a)?a.concat(xn(t)):[a,xn(t)]:xn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bt(e.ssContent),ssFallback:e.ssFallback&&bt(e.ssFallback),el:e.el,anchor:e.anchor}}function ne(e=" ",t=0){return Z(ia,null,e,t)}function Wn(e,t){const n=Z(vn,null,e);return n.staticCount=t,n}function Za(e="",t=!1){return t?(he(),bn(Oe,null,e)):Z(Oe,null,e)}function He(e){return e==null||typeof e=="boolean"?Z(Oe):R(e)?Z(Ce,null,e.slice()):typeof e=="object"?nt(e):Z(ia,null,String(e))}function nt(e){return e.el===null||e.memo?e:bt(e)}function sa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),sa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Un in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[ne(t)]):n=8);e.children=t,e.shapeFlag|=n}function ac(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Vr([t.class,r.class]));else if(a==="style")t.style=Nn([t.style,r.style]);else if(Hn(a)){const i=t[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){_e(e,t,7,[n,r])}const Lr=e=>e?Ss(e)?oa(e)||e.proxy:Lr(e.parent):null,Tn=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$emit:e=>e.emit,$options:e=>ws(e),$forceUpdate:e=>()=>is(e.update),$nextTick:e=>fl.bind(e.proxy),$watch:e=>_l.bind(e)}),ic={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let f;if(t[0]!=="$"){const b=s[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==q&&j(r,t))return s[t]=1,r[t];if(a!==q&&j(a,t))return s[t]=2,a[t];if((f=e.propsOptions[0])&&j(f,t))return s[t]=3,i[t];if(n!==q&&j(n,t))return s[t]=4,n[t];Cr&&(s[t]=0)}}const d=Tn[t];let p,m;if(d)return t==="$attrs"&&be(e,"get",t),d(e);if((p=o.__cssModules)&&(p=p[t]))return p;if(n!==q&&j(n,t))return s[t]=4,n[t];if(m=l.config.globalProperties,j(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==q&&j(a,t)?(a[t]=n,!0):r!==q&&j(r,t)?(r[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&j(e,s)||t!==q&&j(t,s)||(o=i[0])&&j(o,s)||j(r,s)||j(Tn,s)||j(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},sc=Ts();let oc=0;function lc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||sc,i={uid:oc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:As(r,a),emitsOptions:fs(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hl.bind(null,i),e.ce&&e.ce(i),i}let oe=null;const cc=()=>oe||Le,Ft=e=>{oe=e,e.scope.on()},vt=()=>{oe&&oe.scope.off(),oe=null};function Ss(e){return e.vnode.shapeFlag&4}let an=!1;function fc(e,t=!1){an=t;const{props:n,children:r}=e.vnode,a=Ss(e);Bl(e,n,a,t),Ul(e,r);const i=a?uc(e,t):void 0;return an=!1,i}function uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=es(new Proxy(e.ctx,ic));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pc(e):null;Ft(e),Rt();const i=at(r,e,0,[e.props,a]);if($t(),vt(),zi(i)){if(i.then(vt,vt),t)return i.then(s=>{Ka(e,s,t)}).catch(s=>{Dn(s,e,0)});e.asyncDep=i}else Ka(e,i,t)}else Ns(e,t)}function Ka(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=rs(t)),Ns(e,n)}let qa;function Ns(e,t,n){const r=e.type;if(!e.render){if(!t&&qa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,f=ce(ce({isCustomElement:i,delimiters:o},s),l);r.render=qa(a,f)}}e.render=r.render||Te}Ft(e),Rt(),Fl(e),$t(),vt()}function dc(e){return new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}})}function pc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=dc(e))},slots:e.slots,emit:e.emit,expose:t}}function oa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rs(es(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tn)return Tn[n](e)}}))}function mc(e){return D(e)&&e.displayName||e.name}function hc(e){return D(e)&&"__vccOpts"in e}const we=(e,t)=>ll(e,t,an);function la(e,t,n){const r=arguments.length;return r===2?se(t)&&!R(t)?kr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kr(n)&&(n=[n]),Z(e,t,n))}const gc="3.2.33",vc="http://www.w3.org/2000/svg",pt=typeof document!="undefined"?document:null,Xa=pt&&pt.createElement("template"),bc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?pt.createElementNS(vc,e):pt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Xa.innerHTML=r?`<svg>${e}</svg>`:e;const o=Xa.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function yc(e,t,n){const r=e.style,a=fe(n);if(n&&!a){for(const i in n)Er(r,i,n[i]);if(t&&!fe(t))for(const i in t)n[i]==null&&Er(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ga=/\s*!important$/;function Er(e,t,n){if(R(n))n.forEach(r=>Er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cc(e,t);Ga.test(n)?e.setProperty(zt(r),n.replace(Ga,""),"important"):e[r]=n}}const Ja=["Webkit","Moz","ms"],ir={};function Cc(e,t){const n=ir[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return ir[t]=r;r=Rn(r);for(let a=0;a<Ja.length;a++){const i=Ja[a]+r;if(i in e)return ir[t]=i}return t}const Qa="http://www.w3.org/1999/xlink";function wc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qa,t.slice(6,t.length)):e.setAttributeNS(Qa,t,n);else{const i=xo(t);n==null||i&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _c(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Si(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}const[Hs,Ac]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Tr=0;const kc=Promise.resolve(),Lc=()=>{Tr=0},Ec=()=>Tr||(kc.then(Lc),Tr=Hs());function Tc(e,t,n,r){e.addEventListener(t,n,r)}function Oc(e,t,n,r){e.removeEventListener(t,n,r)}function Mc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Pc(t);if(r){const f=i[t]=Ic(r,a);Tc(e,o,f,l)}else s&&(Oc(e,o,s,l),i[t]=void 0)}}const ei=/(?:Once|Passive|Capture)$/;function Pc(e){let t;if(ei.test(e)){t={};let n;for(;n=e.match(ei);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[zt(e.slice(2)),t]}function Ic(e,t){const n=r=>{const a=r.timeStamp||Hs();(Ac||a>=n.attached-1)&&_e(Sc(r,n.value),t,5,[r])};return n.value=e,n.attached=Ec(),n}function Sc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ti=/^on[a-z]/,Nc=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?xc(e,r,a):t==="style"?yc(e,n,r):Hn(t)?jr(t)||Mc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,r,a))?_c(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wc(e,t,r,a))};function Hc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ti.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ti.test(t)&&fe(n)?!1:t in e}const Je="transition",jt="animation",ca=(e,{slots:t})=>la(hs,Fc(e),t);ca.displayName="Transition";const Fs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ca.props=ce({},hs.props,Fs);const ft=(e,t=[])=>{R(e)?e.forEach(n=>n(...t)):e&&e(...t)},ni=e=>e?R(e)?e.some(t=>t.length>1):e.length>1:!1;function Fc(e){const t={};for(const H in e)H in Fs||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=s,appearToClass:d=o,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,M=zc(a),T=M&&M[0],P=M&&M[1],{onBeforeEnter:C,onEnter:L,onEnterCancelled:F,onLeave:$,onLeaveCancelled:V,onBeforeAppear:re=C,onAppear:B=L,onAppearCancelled:X=F}=t,Y=(H,ae,Me)=>{Lt(H,ae?d:o),Lt(H,ae?f:s),Me&&Me()},pe=(H,ae)=>{Lt(H,b),Lt(H,m),ae&&ae()},ue=H=>(ae,Me)=>{const Ct=H?B:L,le=()=>Y(ae,H,Me);ft(Ct,[ae,le]),ri(()=>{Lt(ae,H?l:i),Qe(ae,H?d:o),ni(Ct)||ai(ae,r,T,le)})};return ce(t,{onBeforeEnter(H){ft(C,[H]),Qe(H,i),Qe(H,s)},onBeforeAppear(H){ft(re,[H]),Qe(H,l),Qe(H,f)},onEnter:ue(!1),onAppear:ue(!0),onLeave(H,ae){const Me=()=>pe(H,ae);Qe(H,p),Dc(),Qe(H,m),ri(()=>{Lt(H,p),Qe(H,b),ni($)||ai(H,r,P,Me)}),ft($,[H,Me])},onEnterCancelled(H){Y(H,!1),ft(F,[H])},onAppearCancelled(H){Y(H,!0),ft(X,[H])},onLeaveCancelled(H){pe(H),ft(V,[H])}})}function zc(e){if(e==null)return null;if(se(e))return[sr(e.enter),sr(e.leave)];{const t=sr(e);return[t,t]}}function sr(e){return Di(e)}function Qe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Lt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ri(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rc=0;function ai(e,t,n,r){const a=e._endId=++Rc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:o,propCount:l}=$c(e,t);if(!s)return r();const f=s+"end";let d=0;const p=()=>{e.removeEventListener(f,m),i()},m=b=>{b.target===e&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},o+1),e.addEventListener(f,m)}function $c(e,t){const n=window.getComputedStyle(e),r=M=>(n[M]||"").split(", "),a=r(Je+"Delay"),i=r(Je+"Duration"),s=ii(a,i),o=r(jt+"Delay"),l=r(jt+"Duration"),f=ii(o,l);let d=null,p=0,m=0;t===Je?s>0&&(d=Je,p=s,m=i.length):t===jt?f>0&&(d=jt,p=f,m=l.length):(p=Math.max(s,f),d=p>0?s>f?Je:jt:null,m=d?d===Je?i.length:l.length:0);const b=d===Je&&/\b(transform|all)(,|$)/.test(n[Je+"Property"]);return{type:d,timeout:p,propCount:m,hasTransform:b}}function ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>si(n)+si(e[r])))}function si(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Dc(){return document.body.offsetHeight}const Bc=ce({patchProp:Nc},bc);let oi;function Vc(){return oi||(oi=Kl(Bc))}const jc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uc(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Uc(e){return fe(e)?document.querySelector(e):e}const Wc={class:"bg-gray-800 w-80 rounded-2xl shadow-2xl"},Yc={class:"h-10 relative text-center grid place-items-center"},Zc=g("div",{class:"absolute left-2 flex flex-row"},[g("div",{class:"bg-red-500 h-3 w-3 rounded-full m-1"}),g("div",{class:"bg-yellow-500 h-3 w-3 rounded-full m-1"}),g("div",{class:"bg-green-500 h-3 w-3 rounded-full m-1"})],-1),Kc=["innerHTML"],or=Ze({props:{code:{type:String,required:!0},title:{type:String,required:!1,default:""}},setup(e){const t=e;return(n,r)=>(he(),Fe("div",Wc,[g("div",Yc,[Zc,g("span",null,Ni(t.title),1)]),g("div",{class:"font-[Consolas,Monaco] text-left p-5 whitespace-pre-line",innerHTML:t.code},null,8,Kc)]))}}),qc={class:"bg-gray-900 w- text-white"},Xc={class:"bg-[#44C577] bg-gradient-to-t from-[#44C577] to-cyan-600"},Gc={class:"flex lg:mt-0 mt-2 flex-col lg:flex-row justify-center items-center"},Jc=g("div",{class:"lg:w-[30rem]"},[g("h1",null,"Application Development made easy"),g("p",null,"Tank is a C# based programming language using the ANTLr Language Toolkit with well thought through syntax, making applcation development as easy as possible")],-1),Qc=g("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[g("path",{d:"M0 112L16.7 118C33.3 124 66.7 136 100 140.8C133.3 145.7 166.7 143.3 200 142.2C233.3 141 266.7 141 300 141C333.3 141 366.7 141 400 143.2C433.3 145.3 466.7 149.7 500 150.5C533.3 151.3 566.7 148.7 600 143.7C633.3 138.7 666.7 131.3 700 130.8C733.3 130.3 766.7 136.7 800 138.7C833.3 140.7 866.7 138.3 883.3 137.2L900 136L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#006f57"}),g("path",{d:"M0 79L16.7 81.8C33.3 84.7 66.7 90.3 100 96.7C133.3 103 166.7 110 200 111C233.3 112 266.7 107 300 102.7C333.3 98.3 366.7 94.7 400 92.5C433.3 90.3 466.7 89.7 500 91.5C533.3 93.3 566.7 97.7 600 98.3C633.3 99 666.7 96 700 92.8C733.3 89.7 766.7 86.3 800 88C833.3 89.7 866.7 96.3 883.3 99.7L900 103L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#0c8b64"}),g("path",{d:"M0 70L16.7 72.7C33.3 75.3 66.7 80.7 100 82.7C133.3 84.7 166.7 83.3 200 81.3C233.3 79.3 266.7 76.7 300 76.3C333.3 76 366.7 78 400 74.5C433.3 71 466.7 62 500 63.2C533.3 64.3 566.7 75.7 600 79.2C633.3 82.7 666.7 78.3 700 76.3C733.3 74.3 766.7 74.7 800 70.5C833.3 66.3 866.7 57.7 883.3 53.3L900 49L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#27a86f"}),g("path",{d:"M0 39L16.7 41.2C33.3 43.3 66.7 47.7 100 44.7C133.3 41.7 166.7 31.3 200 28.7C233.3 26 266.7 31 300 33C333.3 35 366.7 34 400 36.5C433.3 39 466.7 45 500 45.7C533.3 46.3 566.7 41.7 600 37.7C633.3 33.7 666.7 30.3 700 28.7C733.3 27 766.7 27 800 30.5C833.3 34 866.7 41 883.3 44.5L900 48L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z",fill:"#44c577"})],-1),ef={class:"flex flex-row justify-center items-center"},tf={class:"flex flex-col lg:flex-row justify-center items-center"},nf=g("div",{class:"lg:w-[30rem]"},[g("h1",null,"Missing something? No problem."),g("p",null,"Tank has an import statement, allowing to import modules to add whatever you need")],-1),rf=g("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[g("path",{d:"M0 60L21.5 62.3C43 64.7 86 69.3 128.8 71.3C171.7 73.3 214.3 72.7 257.2 75.7C300 78.7 343 85.3 385.8 82.7C428.7 80 471.3 68 514.2 69.7C557 71.3 600 86.7 642.8 88.3C685.7 90 728.3 78 771.2 75.2C814 72.3 857 78.7 878.5 81.8L900 85L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#fa7268"}),g("path",{d:"M0 77L21.5 80.5C43 84 86 91 128.8 98.2C171.7 105.3 214.3 112.7 257.2 111.2C300 109.7 343 99.3 385.8 91.7C428.7 84 471.3 79 514.2 82.3C557 85.7 600 97.3 642.8 98.3C685.7 99.3 728.3 89.7 771.2 88.8C814 88 857 96 878.5 100L900 104L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#ef5f67"}),g("path",{d:"M0 114L21.5 116.7C43 119.3 86 124.7 128.8 122.2C171.7 119.7 214.3 109.3 257.2 109.8C300 110.3 343 121.7 385.8 129.2C428.7 136.7 471.3 140.3 514.2 136.8C557 133.3 600 122.7 642.8 116.2C685.7 109.7 728.3 107.3 771.2 105C814 102.7 857 100.3 878.5 99.2L900 98L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#e34c67"}),g("path",{d:"M0 133L21.5 136.3C43 139.7 86 146.3 128.8 150.5C171.7 154.7 214.3 156.3 257.2 156.2C300 156 343 154 385.8 151C428.7 148 471.3 144 514.2 145.5C557 147 600 154 642.8 151.7C685.7 149.3 728.3 137.7 771.2 134.3C814 131 857 136 878.5 138.5L900 141L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#d53867"}),g("path",{d:"M0 173L21.5 172.8C43 172.7 86 172.3 128.8 171.8C171.7 171.3 214.3 170.7 257.2 171.8C300 173 343 176 385.8 178.5C428.7 181 471.3 183 514.2 181.2C557 179.3 600 173.7 642.8 170C685.7 166.3 728.3 164.7 771.2 165.2C814 165.7 857 168.3 878.5 169.7L900 171L900 201L878.5 201C857 201 814 201 771.2 201C728.3 201 685.7 201 642.8 201C600 201 557 201 514.2 201C471.3 201 428.7 201 385.8 201C343 201 300 201 257.2 201C214.3 201 171.7 201 128.8 201C86 201 43 201 21.5 201L0 201Z",fill:"#c62368"})],-1),af={class:"bg-[#C62368] bg-gradient-to-b from-[#C62368] to-[#FA7268] flex flex-row justify-center items-center"},sf={class:"flex flex-col lg:flex-row justify-center items-center"},of=g("div",{class:"lg:w-[29.5rem]"},[g("h1",null,"(Planned) UI Development that works"),g("p",null,[ne("Tank will have an offical UI Framework that allows your apps to have User Interfaces that just work. (Help is appreciated, message me over Discord on my "),g("a",{class:"underline decoration-transparent duration-500 text-blue-500 hover:decoration-blue-500 transition-all w-5",href:"https://blackbirdtv.github.io"},"About page"),ne(")")])],-1),lf=g("svg",{id:"visual",class:"spacer",preserveAspectRatio:"none",viewBox:"0 0 900 200",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[g("path",{d:"M0 170L18.8 170.2C37.7 170.3 75.3 170.7 112.8 171.5C150.3 172.3 187.7 173.7 225.2 175.2C262.7 176.7 300.3 178.3 337.8 173C375.3 167.7 412.7 155.3 450.2 155.5C487.7 155.7 525.3 168.3 562.8 166.7C600.3 165 637.7 149 675.2 145.3C712.7 141.7 750.3 150.3 787.8 158.2C825.3 166 862.7 173 881.3 176.5L900 180L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#c62368"}),g("path",{d:"M0 132L18.8 134.7C37.7 137.3 75.3 142.7 112.8 143.7C150.3 144.7 187.7 141.3 225.2 135.5C262.7 129.7 300.3 121.3 337.8 116.2C375.3 111 412.7 109 450.2 113.3C487.7 117.7 525.3 128.3 562.8 132.3C600.3 136.3 637.7 133.7 675.2 135C712.7 136.3 750.3 141.7 787.8 134.2C825.3 126.7 862.7 106.3 881.3 96.2L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#da3f67"}),g("path",{d:"M0 84L18.8 87.3C37.7 90.7 75.3 97.3 112.8 94.8C150.3 92.3 187.7 80.7 225.2 75C262.7 69.3 300.3 69.7 337.8 75.3C375.3 81 412.7 92 450.2 87.7C487.7 83.3 525.3 63.7 562.8 63.5C600.3 63.3 637.7 82.7 675.2 90.8C712.7 99 750.3 96 787.8 92.3C825.3 88.7 862.7 84.3 881.3 82.2L900 80L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#eb5967"}),g("path",{d:"M0 23L18.8 26.3C37.7 29.7 75.3 36.3 112.8 36.7C150.3 37 187.7 31 225.2 34.5C262.7 38 300.3 51 337.8 53.3C375.3 55.7 412.7 47.3 450.2 45.7C487.7 44 525.3 49 562.8 44C600.3 39 637.7 24 675.2 20.8C712.7 17.7 750.3 26.3 787.8 35.5C825.3 44.7 862.7 54.3 881.3 59.2L900 64L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z",fill:"#fa7268"})],-1),cf=g("h1",null,"Got you hooked?",-1),ff=ne(" Have we woked your interest in tank?"),uf=g("br",null,null,-1),df=g("span",{class:"underline+ transition-all duration-500"},"Go to Download Page",-1),pf=[df],mf=Ze({setup(e){return(t,n)=>(he(),Fe("div",null,[g("div",qc,[g("section",Xc,[g("div",Gc,[Jc,Z(or,{class:"w-[22rem] m-4 lg:ml-20",code:`<span class='text-pink-600'>for</span> <span class='text-purple-600'>i</span> = <span class='text-indigo-500'>0</span>; <span class='text-purple-600'>i</span> <= <span class='text-indigo-500'>100</span>; <span class='text-purple-600'>i</span>++\r
    \xA0\xA0\xA0<span class='text-pink-600'>if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>5</span> == <span class='text-indigo-500'>0</span> and <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>3</span> == <span class='text-indigo-500'>0</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'FizzBuzz'</span>)\r
    \xA0\xA0\xA0<span class='text-pink-600'>else if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>3</span> == <span class='text-indigo-500'>0</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'Fizz'</span>)\r
    \xA0\xA0\xA0<span class='text-pink-600'>else if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>5</span> == <span class='text-indigo-500'>0</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'Buzz'</span>)\r
    \xA0\xA0\xA0<span class='text-pink-600'>else</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(i)\r
    `,title:"tank FizzBuzz"})])]),Qc,g("section",ef,[g("div",tf,[Z(or,{class:"w-80 m-4 lg:mr-20",code:`<span class='text-indigo-500'>import</span> <span class='text-green-500'>"module.tank"</span>\r
  \r
  <span class='text-purple-600'>module</span>.<span class='text-blue-400'>DoSomething</span>()`,title:"tank Imports"}),nf])]),rf,g("section",af,[g("div",sf,[of,Z(or,{class:"w-80 m-4 lg:ml-20",code:`<span class='text-pink-600'>class</span> Pig : Animal {\r
\xA0\xA0\xA0<span class='text-pink-600'>func</span> MakeSound() {\r
\xA0\xA0\xA0\xA0\xA0\xA0println(<span class='text-indigo-500'>"Oink!"</span>)\r
\xA0\xA0\xA0}\r
}\r
<span class='text-purple-600'>pig</span> = new Pig()\r
<span class='text-purple-600'>pig</span>.<span class='text-blue-400'>MakeSound</span>()`,title:"tank Syntax"})])]),lf,g("section",null,[cf,g("p",null,[ff,uf,g("button",{onClick:n[0]||(n[0]=r=>t.$emit("navigateToDownload")),class:"text-white group m-auto mt-3 bg-blue-700 text-3xl p-4 rounded-3xl"},pf)])])])]))}});var hf="/tank/assets/linux.6a6e51a6.svg",gf="/tank/assets/macos.192fcbaa.svg";var vf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const bf={},xf={width:"436",height:"256",viewBox:"0 0 436 256",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yf=Wn('<g id="Frame 10"><g id="RightChain"><rect id="Rectangle 11" x="89" y="189" width="200" height="65" rx="32.5" fill="#4B4B4B"></rect><rect id="Rectangle 10" x="124" y="189" width="200" height="65" rx="32.5" fill="#484848"></rect></g><g id="TankBody2" clip-path="url(#clip0_105_2)"><rect id="Rectangle 12" x="212" y="165" width="224" height="79" rx="20" fill="#3A3A3A"></rect></g><g id="LeftChain"><rect id="Rectangle 11_2" x="191" y="189" width="200" height="65" rx="32.5" fill="#808080"></rect><rect id="Rectangle 10_2" x="226" y="189" width="200" height="65" rx="32.5" fill="#656565"></rect></g><g id="TankBody"><path id="Vector 9" d="M84.5 226V168L51 226H84.5Z" fill="#5B5B5B"></path><g id="Turret" clip-path="url(#clip1_105_2)"><path id="Vector 7" d="M251.999 168H171.999L192.499 114H272.499L251.999 168Z" fill="#717171"></path><ellipse id="Ellipse 7" cx="183.499" cy="139" rx="8.5" ry="16" fill="#8F8F8F"></ellipse><rect id="Rectangle 8" x="183.686" y="123.039" width="80" height="32" fill="#8F8F8F"></rect><ellipse id="Ellipse 6" cx="263.499" cy="139.039" rx="8.5" ry="16" fill="#818181"></ellipse><g id="Barrel"><g clip-path="url(#clip2_105_2)"><rect id="Rectangle 7" x="34.5413" y="111.529" width="181" height="23" transform="rotate(5 34.5413 111.529)" fill="#717171"></rect><ellipse id="Ellipse 5" cx="29.5978" cy="122.139" rx="8" ry="17" transform="rotate(5 29.5978 122.139)" fill="#717171"></ellipse><g id="Frame 11"><g clip-path="url(#clip3_105_2)"><g id="Ellipse 3" filter="url(#filter0_d_105_2)"><ellipse cx="29.5978" cy="122.139" rx="8" ry="17" transform="rotate(5 29.5978 122.139)" fill="#717171"></ellipse></g></g></g><ellipse id="Ellipse 4" cx="213.352" cy="138.717" rx="5.5" ry="11.5" transform="rotate(5 213.352 138.717)" fill="#717171"></ellipse><rect id="Rectangle 6" x="11.1555" y="103.46" width="20" height="34" transform="rotate(5 11.1555 103.46)" fill="#717171"></rect><ellipse id="Ellipse 2" cx="9.1757" cy="120.352" rx="8.5" ry="17" transform="rotate(5 9.1757 120.352)" fill="#414141"></ellipse></g></g><path id="Vector 5" d="M272.499 114L251.999 168H354.999V114H272.499Z" fill="#676767"></path><path id="Tank" d="M298.75 131.027L299.348 131.227V131.625H298.75L299.148 132.223C298.859 132.887 297.797 133.219 295.961 133.219L294.566 133.418L294.367 134.016H294.566C294.168 134.961 293.371 139.211 292.176 146.766L292.773 149.355H292.574C292.277 149.355 292.012 148.691 291.777 147.363L291.977 145.371V145.172H291.777V145.57C291.379 145.57 291.18 145.703 291.18 145.969V146.168L291.578 149.355V149.555H291.18L290.383 148.957L290.184 149.156H289.984C289.453 148.008 289.188 147.012 289.188 146.168L289.387 146.367H289.586L289.188 144.973L289.785 144.773V143.777H289.387V143.578C289.785 143.578 289.984 143.445 289.984 143.18V142.98H289.586C289.586 141.918 289.785 141.387 290.184 141.387V138.797C290.395 138.609 290.66 137.215 290.98 134.613L289.586 134.812L286.797 134.613V134.414L287.793 134.215V134.414L287.992 134.215H290.98V133.617L287.793 134.016L287.594 133.816H287.395L286.199 134.016L285.602 133.617L285.801 132.621L285.602 132.422C285.602 131.758 286.398 131.426 287.992 131.426L298.75 131.027ZM297.555 131.625V131.824H298.352V131.625H297.555ZM290.184 142.781L289.785 147.164H290.184L289.984 146.168V145.77L290.383 145.172H290.184L290.383 144.973V144.773L290.184 144.574V144.375L290.582 143.578L290.383 142.781H290.184ZM305.301 130.477C305.387 130.875 305.918 131.074 306.895 131.074L308.488 138.047H309.883V138.246L308.688 138.445V138.645C309.086 138.645 309.285 138.777 309.285 139.043H310.879V139.242C310.879 139.539 310.215 139.805 308.887 140.039L309.285 141.234L309.086 141.832L309.285 143.027L309.086 143.227H309.285L309.086 143.426L309.285 145.816V147.012L309.086 146.812H308.887L309.484 149.801H309.086C309.086 149.402 308.953 149.203 308.688 149.203V149.402L308.887 150H308.688L308.488 149.801H308.289C308.289 150.199 308.156 150.398 307.891 150.398L306.895 147.012H306.695V147.809H306.496L306.098 145.418L306.695 145.816V145.617C306.586 144.422 306.387 143.824 306.098 143.824L306.297 143.625V143.027H305.898V143.625H305.699V142.828L305.898 142.629H305.699L305.5 142.828V142.031H305.699L305.898 142.23H306.098L305.898 142.031V140.836L301.516 141.832V142.23L302.91 141.832L303.707 142.031L304.703 141.832V142.23C301.914 142.73 300.52 143.395 300.52 144.223C300.168 145.684 299.77 146.613 299.324 147.012V147.41H298.727L298.527 147.211H298.328V147.41L297.73 147.012L298.129 145.816H297.93C297.531 145.816 297.332 146.348 297.332 147.41L296.934 147.012L297.133 145.816L296.535 145.219L299.922 137.051H300.121C300.121 137.449 300.254 137.648 300.52 137.648L300.719 136.652L300.52 136.852H300.32V136.055L300.52 135.059L300.719 135.258H300.918L300.719 135.059V134.859L301.117 134.062H301.316L301.516 134.262H301.715V134.062C301.715 133.797 301.516 133.664 301.117 133.664L302.113 130.875H302.91L302.711 131.074V131.273C303.633 130.742 304.496 130.477 305.301 130.477ZM304.105 135.059L302.512 139.242H302.91C304.238 139.242 304.969 138.844 305.102 138.047L304.305 135.059H304.105ZM302.312 136.254L301.914 137.648L301.715 137.449H301.516L301.715 138.246H301.914L302.512 136.453V136.254H302.312ZM300.121 138.047L299.922 138.246V138.645H300.121L300.32 138.047H300.121ZM301.316 138.844L301.117 139.641H301.316L301.516 139.441V138.844H301.316ZM299.523 139.043L299.324 139.84H299.523L299.922 139.043H299.523ZM302.91 139.641V139.84H303.309C304.504 139.707 305.102 139.508 305.102 139.242H304.902L302.91 139.641ZM305.699 144.023H306.098V145.219H305.898L305.699 144.023ZM308.488 145.418V145.816L308.688 146.613H308.887V146.215L308.688 145.418H308.488ZM306.496 146.016V146.414L307.094 146.215V145.816L306.496 146.016ZM315.484 131.484L316.879 132.68C316.879 132.281 317.012 132.082 317.277 132.082H317.477L320.266 139.254V139.652H320.066L319.668 138.457H319.469V138.855L320.863 142.242H321.062C321.594 138.789 322.359 135.184 323.359 131.426L323.957 131.824L324.555 131.625L325.75 132.223V132.422C325.352 132.422 325.152 132.688 325.152 133.219H325.352L325.551 133.418H325.75L325.949 132.422H326.348V132.621L326.148 132.82L326.348 133.02V133.219C325.348 136.289 324.449 140.691 323.652 146.426H323.254L323.652 143.238C323.387 143.238 322.988 144.5 322.457 147.023C321.965 147.422 321.5 147.621 321.062 147.621V148.02H320.863C320.863 147.754 320.598 147.621 320.066 147.621V146.227C320.066 145.625 318.738 142.305 316.082 136.266H315.883C315.352 138.633 314.887 141.82 314.488 145.828L314.289 145.629C313.492 145.863 313.094 146.195 313.094 146.625H312.695C312.43 146.125 312.297 145.262 312.297 144.035H312.098V145.828H311.699L311.5 144.832C311.5 141.223 312.297 136.84 313.891 131.684L315.484 131.484ZM312.695 136.465V136.664L312.895 136.863L312.695 137.062V137.461H312.895L313.094 136.664L312.895 136.465H312.695ZM320.266 139.652C320.609 139.652 320.875 140.184 321.062 141.246V141.445H320.863L320.266 139.652ZM338.066 130.758L338.266 130.957V131.156L338.066 131.355L337.867 131.156H337.668L335.875 132.352H335.676C335.676 132 336.473 131.469 338.066 130.758ZM330.297 131.156L330.496 132.949C330.762 132.949 330.961 132.551 331.094 131.754H331.293L331.492 132.551L330.895 135.738L333.086 134.145H333.285L330.895 136.336V136.535L335.477 133.148L335.676 133.348C337.465 131.887 338.66 131.156 339.262 131.156H339.461L339.66 131.953L338.066 133.547H338.266C338.531 133.016 338.93 132.75 339.461 132.75L339.66 132.949V132.75L339.461 132.551L339.66 132.352H340.258L340.457 132.949C339.457 133.418 337.133 135.145 333.484 138.129C334.383 140.09 335.977 142.746 338.266 146.098V146.496L338.066 147.891L337.867 147.691H337.668L337.469 148.488H336.672V148.09H336.473V148.488H336.074C336.074 148.02 334.613 145.562 331.691 141.117L331.293 139.922L330.297 140.121C330.125 143.316 329.707 145.309 329.043 146.098V146.297L327.051 146.098V145.5L327.25 144.105C326.852 144.105 326.652 143.707 326.652 142.91C326.871 141.582 327.09 140.918 327.309 140.918L327.109 140.719C327.508 137.062 327.906 134.871 328.305 134.145L328.105 133.547L328.703 131.953V131.754L328.504 131.555V131.355H328.902V132.75H329.102L329.301 132.152L329.102 131.953V131.754C329.234 131.355 329.633 131.156 330.297 131.156ZM335.477 132.352H335.676L334.879 133.148H334.68L335.477 132.352ZM328.703 133.348L328.504 134.543V135.34H328.703L328.902 133.547V133.348H328.703ZM334.48 133.148H334.68L333.484 134.145H333.285L334.48 133.148ZM337.07 133.945L336.273 134.543L336.074 134.742V134.941H336.273L337.07 134.344L337.27 134.145V133.945H337.07ZM333.684 145.301H333.883L334.48 145.898H334.281L333.684 145.301ZM334.48 145.898C334.816 145.898 335.148 146.562 335.477 147.891V148.09H335.277L334.48 145.898Z" fill="white"></path></g><path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M216 168L182.5 226H216H220V204C220 192.954 228.954 184 240 184H408C419.046 184 428 192.954 428 204V226H436V168H216Z" fill="#5B5B5B"></path><path id="Vector 10" d="M84.5 168H216L182.5 226H51L84.5 168Z" fill="#727272"></path></g></g><defs><filter id="filter0_d_105_2" x="17.4902" y="105.189" width="24.2151" height="41.8998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2" result="shape"></feBlend></filter><clipPath id="clip0_105_2"><rect width="216" height="51" fill="white" transform="translate(220 175)"></rect></clipPath><clipPath id="clip1_105_2"><rect width="353" height="131" fill="white" transform="translate(0 37)"></rect></clipPath><clipPath id="clip2_105_2"><rect x="1.31372" y="97.6194" width="440" height="45" transform="rotate(5 1.31372 97.6194)" fill="white"></rect></clipPath><clipPath id="clip3_105_2"><rect x="23.583" y="110.571" width="20" height="23" transform="rotate(5 23.583 110.571)" fill="white"></rect></clipPath></defs>',2),Cf=[yf];function wf(e,t){return he(),Fe("svg",xf,Cf)}var _f=vf(bf,[["render",wf]]);const Af=Wn('<svg class="corner absolute bottom-0 left-0" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0C30.9 2.4 61.8 4.7 91.8 14.5C121.8 24.4 150.9 41.6 167.5 66.4C184.1 91.2 188.1 123.5 207.1 146.5C226.1 169.5 260.2 183.2 277.7 206.8C295.2 230.3 296.1 263.6 297 297H0V0Z" fill="#1C2134"></path><path d="M0 37.1C27 39.2 54 41.3 80.3 49.8C106.6 58.4 132.1 73.6 146.6 95.3C161.1 116.9 164.6 145.2 181.2 165.3C197.9 185.5 227.7 197.5 243 218C258.3 238.6 259.1 267.8 259.9 297H0V37.1Z" fill="#3F3050"></path><path d="M0 74.3C23.2 76 46.3 77.8 68.8 85.2C91.3 92.5 113.2 105.5 125.6 124.1C138.1 142.7 141.1 166.9 155.3 184.1C169.6 201.4 195.2 211.7 208.3 229.3C221.4 247 222.1 272 222.8 297H0V74.3Z" fill="#6C3D64"></path><path d="M0 111.4C19.3 112.8 38.6 114.3 57.4 120.5C76.1 126.6 94.3 137.4 104.7 152.9C115.1 168.4 117.5 188.6 129.4 203C141.3 217.3 162.6 225.9 173.6 240.6C184.5 255.3 185.1 276.2 185.6 297H0V111.4Z" fill="#9C486B"></path><path d="M0 148.5C15.4 149.7 30.9 150.9 45.9 155.8C60.9 160.7 75.5 169.3 83.8 181.7C92 194.1 94 210.3 103.6 221.8C113.1 233.3 130.1 240.1 138.9 251.9C147.6 263.6 148 280.3 148.5 297H0V148.5Z" fill="#C85967"></path><path d="M0 185.6C11.6 186.5 23.2 187.4 34.4 191.1C45.7 194.8 56.6 201.2 62.8 210.5C69 219.8 70.5 231.9 77.7 240.6C84.8 249.2 97.6 254.3 104.1 263.2C110.7 272 111 284.5 111.4 297H0V185.6Z" fill="#E97458"></path><path d="M0 222.8C7.7 223.3 15.4 223.9 22.9 226.4C30.4 228.8 37.7 233.2 41.9 239.4C46 245.6 47 253.6 51.8 259.4C56.5 265.1 65.1 268.6 69.4 274.4C73.8 280.3 74 288.7 74.3 297H0V222.8Z" fill="#F99945"></path><path d="M0 259.9C3.9 260.2 7.7 260.5 11.5 261.7C15.2 262.9 18.9 265.1 20.9 268.2C23 271.3 23.5 275.3 25.9 278.2C28.3 281.1 32.5 282.8 34.7 285.7C36.9 288.7 37 292.8 37.1 297H0V259.9Z" fill="#FBAE3C"></path></svg><svg class="corner absolute top-0 right-0" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M297 297C263.5 298.2 229.9 299.4 205.2 282.5C180.5 265.6 164.6 230.5 147.1 206.3C129.6 182.1 110.6 168.6 88.3 151.6C65.9 134.7 40.3 114.2 25 88.4C9.7 62.5 4.9 31.3 0 0H297V297Z" fill="#1C2134"></path><path d="M297 259.9C267.7 260.9 238.3 262 216.7 247.2C195.1 232.4 181.1 201.7 165.9 180.5C150.6 159.3 133.9 147.5 114.4 132.7C94.8 117.9 72.4 100 59 77.3C45.6 54.7 41.4 27.4 37.1 0H297V259.9Z" fill="#3F3050"></path><path d="M297 222.8C271.9 223.6 246.7 224.5 228.2 211.8C209.6 199.2 197.7 172.9 184.6 154.7C171.5 136.5 157.2 126.5 140.5 113.7C123.7 101 104.4 85.7 93 66.3C81.5 46.9 77.9 23.4 74.3 0H297V222.8Z" fill="#6C3D64"></path><path d="M297 185.6C276 186.4 255.1 187.1 239.6 176.5C224.2 166 214.2 144.1 203.3 128.9C192.4 113.8 180.5 105.4 166.5 94.8C152.6 84.2 136.5 71.4 127 55.2C117.5 39.1 114.4 19.5 111.4 0H297V185.6Z" fill="#9C486B"></path><path d="M297 148.5C280.2 149.1 263.5 149.7 251.1 141.2C238.8 132.8 230.8 115.3 222.1 103.1C213.3 91 203.8 84.3 192.6 75.8C181.5 67.3 168.6 57.1 161 44.2C153.4 31.3 150.9 15.6 148.5 0H297V148.5Z" fill="#C85967"></path><path d="M297 111.4C284.4 111.8 271.9 112.3 262.6 105.9C253.3 99.6 247.3 86.5 240.8 77.4C234.2 68.3 227.1 63.2 218.7 56.9C210.3 50.5 200.7 42.8 195 33.1C189.3 23.4 187.4 11.7 185.6 0H297V111.4Z" fill="#E97458"></path><path d="M297 74.3C288.6 74.5 280.2 74.8 274.1 70.6C267.9 66.4 263.9 57.6 259.5 51.6C255.2 45.5 250.4 42.2 244.8 37.9C239.2 33.7 232.8 28.6 229 22.1C225.2 15.6 224 7.8 222.8 0H297V74.3Z" fill="#F99945"></path><path d="M297 37.1C292.8 37.3 288.6 37.4 285.5 35.3C282.4 33.2 280.4 28.8 278.3 25.8C276.1 22.8 273.7 21.1 270.9 19C268.1 16.8 264.9 14.3 263 11C261.1 7.8 260.5 3.9 259.9 0H297V37.1Z" fill="#FBAE3C"></path></svg>',2),kf={class:"h-screen bg-gray-900 bg-no-repeat bg-cover bg-center grid place-items-center"},Lf={class:"grid z-10 place-items-center"},Ef=g("p",null,[ne("Convinced you? We hope you like it."),g("br"),g("br")],-1),Tf=g("span",{class:"underline+ transition-all duration-500"},[ne("Get "),g("span",{class:"font-edosz"},"TANK"),ne(" here")],-1),Of=[Tf],Mf=g("span",{class:"text-gray-700"},[g("br"),ne("Other Platforms:")],-1),Pf={class:"flex flex-row"},If=g("p",{class:"text-gray-700 absolute bottom-2"},[g("br"),ne("(Older releases and pre-releases available on GitHub)")],-1),Sf=Ze({setup(e){function t(r){alert(r)}function n(r){window.location.href=r}return(r,a)=>(he(),Fe("div",null,[Af,g("div",kf,[g("div",Lf,[Z(_f,{class:"mb-10 w-[80vw]"}),Ef,g("button",{onClick:a[0]||(a[0]=i=>t("Whoops! You've found a Dead End. But as an apology, you'll receive a hug. Take it before it leaves! (\u3065\uFFE3 \xB3\uFFE3)\u3065")),class:"text-white group m-auto bg-blue-700 text-3xl p-4 rounded-3xl"},Of),Mf,g("div",Pf,[g("img",{class:"aspect-sqare w-12 p-2 cursor-pointer",onClick:a[1]||(a[1]=i=>n("")),src:hf}),g("img",{class:"aspect-sqare w-12 p-2 cursor-pointer",onClick:a[2]||(a[2]=i=>n("")),src:gf})])]),If])]))}}),Nf={class:"rounded-t-xl h-8 text-sm text-left p-2 w-[calc(100%-2.5rem)] mx-5 mt-5 bg-gray-700"},Hf=g("hr",{class:"border-gray-400 w-[calc(100%-2.5rem)] mx-5 m-0"},null,-1),Ff=["innerHTML"],Se=Ze({props:{lang:{type:String,required:!0},code:{type:String,required:!0}},setup(e){const t=e;return(n,r)=>(he(),Fe(Ce,null,[g("div",Nf,Ni(t.lang),1),Hf,g("div",{class:"whitespace-pre-line font-[Consolas,Monaco] text-left p-2 w-[calc(100%-2.5rem)] mx-5 min-h-min mb-5 bg-gray-700 rounded-b-xl",innerHTML:t.code},null,8,Ff)],64))}});const zf={class:"flex flex-row"},Rf=g("div",{class:"w-1/4 bg-gray-800 fixed z-10 h-screen shadow-2xl flex flex-col items-center pt-20"},[g("a",{href:"#quickstart",class:"group"},[g("span",{class:"underline+"},"Quick Start")])],-1),$f={class:"w-3/4 ml-[25%] bg-gray-900 text-center min-h-screen pt-0 p-10"},Df=g("h1",{id:"quickstart"},"Quick Start",-1),Bf=g("p",null,"First of all, you'll have to install tank. Therefore, head to the Download Page and press the Download Button.",-1),Vf=g("p",null,[ne("Next, create a file called "),g("b",null,"main.tank"),ne(" and open it in your favourite IDE.")],-1),jf=g("p",null,"Let's start out with a basic program that gets the user's name and greets them.",-1),Uf=Wn('<p>Let&#39;s analyse this code.</p><p>In the first line, we read input from the user using the <i class="code">read()</i> function and assign it to a constant called <b>name</b> using <i>const name</i>. </p><p>If you plan on mutating it&#39;s value later on, use either the <i>var</i> keyword or no keyword at all (Same effect.)</p><p>Now, as every gentleman does, we greet them by using the <i>println</i> function.</p><p> To don&#39;t end the line, use the <i>print</i> function.</p><p>You know FizzBuzz? The kids game? If not, <a href="https://en.wikipedia.org/wiki/Fizz_buzz" class="underline decoration-transparent duration-500 text-blue-500 hover:decoration-blue-500 transition-all w-5">here</a>&#39;s an explanation.</p><p>Let&#39;s code that in tank:</p>',7),Wf=Wn("<p>First we&#39;ll go over the code, then we&#39;re gonna simplify it.</p><p>Using a <i>for</i>-loop, we go to every number from 0 to 100 represented by the variable <i>i</i>. For each loop, we increase <i>i</i> by one using the <i>++</i> increasement operator</p><p>Then, we determine if the current number is a multiple of 5 by looking if the remainder of said number divided by five is 0. Now, we do the same thing for 3.</p><p>If those checks are sucessful, we print out &quot;FizzBuzz&quot;.</p><p>Now we look, if our number is a multiple of 3 the same way we did before and if so, print out &quot;Fizz&quot;, followed by the same check for 5, resulting in &quot;Buzz&quot;.</p><p>After all that, we know that it&#39;s neither a multiple of five nor a multiple of 3 nor both, so we can finally print out i.</p><p>Now, to be honest, this code doesn&#39;t look all that pretty. But of course, we can simplify it.</p><p>In tank, you can remove the curly brackets of a code block if it&#39;s only one line long. Fortunately for us, and if statement and following else statements count as one line. So, in our example, we can remove all curly brackets. How convenient!</p>",8),Yf=g("p",null,[ne("Now if you want, you can also replace the "),g("i",null,"&&"),ne(" with an "),g("i",null,"and"),ne(", but in this case, it doesn't really make a difference. Performance is not different, it's just syntactic sugar.")],-1),Zf=g("p",null,"To show you how arrays work, we'll now make a program that calculates the first 50 fibonacci numbers for us.",-1),Kf=g("p",null,[ne("Now to the explanation. First of all, we define a tuple called "),g("i",null,"fib"),ne(" with the value 1 in it twice (the first two fibonacci numbers, required to calculate the rest).")],-1),qf=g("p",null,"After we printed out those two, we'll start a loop. to have the first 50, we have to start at two (our two 1) and loop till we are at 50.",-1),Xf=g("p",null,"Everytime we loop, we add a new entry to the tuple whose value is the sum of the last two. Then, so we see our fibonacci numbers, we print them out. Simple right?",-1),Gf=g("p",null,[ne("If you want to pack a bunch of code into one function, use the "),g("i",null,"func"),ne(" Keyword.")],-1),Jf=g("p",null,"You can also get arguments by defining them between the brackets, followed by a colon and the type:",-1),Qf=g("p",null,"Another important part of application development are classes. Classes are objects, that can contain all kinds of other variables.",-1),eu=g("p",null,[ne("To make classes in tank, simply use the "),g("i",null,"class"),ne(" keyword:")],-1),tu=g("p",null,"Classes can also inherit from an unlimited amout of other classes:",-1),nu=g("p",null,"Classes allow for constructors, functions that are ran when the Class gets instantiated:",-1),ru=Ze({setup(e){return(t,n)=>(he(),Fe("div",zf,[Rf,g("div",$f,[Df,Bf,Vf,jf,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>const</span> name = <span class='text-blue-400'>read</span>()\r
<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'I wish you a pleasent evening, '</span> + name)`}),Uf,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>for</span> <span class='text-purple-600'>i</span> = <span class='text-indigo-500'>0</span>; <span class='text-purple-600'>i</span> <= <span class='text-indigo-500'>100</span>; <span class='text-purple-600'>i</span>++ {\r
    \xA0\xA0\xA0<span class='text-pink-600'>if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>5</span> == <span class='text-indigo-500'>0</span> && <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>3</span> == <span class='text-indigo-500'>0</span> {\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'FizzBuzz'</span>)\r
	\xA0\xA0\xA0}\r
    \xA0\xA0\xA0<span class='text-pink-600'>else if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>3</span> == <span class='text-indigo-500'>0</span> {\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'Fizz'</span>)\r
	\xA0\xA0\xA0}\r
    \xA0\xA0\xA0<span class='text-pink-600'>else if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>5</span> == <span class='text-indigo-500'>0</span> {\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'Buzz'</span>)\r
	\xA0\xA0\xA0}\r
    \xA0\xA0\xA0<span class='text-pink-600'>else</span> {\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(i)\r
	\xA0\xA0\xA0}\r
    }`}),Wf,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>for</span> <span class='text-purple-600'>i</span> = <span class='text-indigo-500'>0</span>; <span class='text-purple-600'>i</span> <= <span class='text-indigo-500'>100</span>; <span class='text-purple-600'>i</span>++\r
    \xA0\xA0\xA0<span class='text-pink-600'>if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>5</span> == <span class='text-indigo-500'>0</span> && <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>3</span> == <span class='text-indigo-500'>0</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'FizzBuzz'</span>)\r
    \xA0\xA0\xA0<span class='text-pink-600'>else if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>3</span> == <span class='text-indigo-500'>0</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'Fizz'</span>)\r
    \xA0\xA0\xA0<span class='text-pink-600'>else if</span> <span class='text-purple-600'>i</span> % <span class='text-indigo-500'>5</span> == <span class='text-indigo-500'>0</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>'Buzz'</span>)\r
    \xA0\xA0\xA0<span class='text-pink-600'>else</span>\r
    \xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(i)`}),Yf,Zf,Z(Se,{lang:"tank",code:`<span class='text-purple-600'>fib</span> = [<span class='text-indigo-500'>1</span>, <span class='text-indigo-500'>1</span>]\r
	<span class='text-blue-400'>println</span>(<span class='text-purple-600'>fib</span>[<span class='text-indigo-500'>0</span>])\r
	<span class='text-blue-400'>println</span>(<span class='text-purple-600'>fib</span>[<span class='text-indigo-500'>1</span>])\r
<span class='text-pink-600'>for</span> <span class='text-purple-600'>i</span> = <span class='text-indigo-500'>2</span>; <span class='text-purple-600'>i</span> <= <span class='text-indigo-500'>50</span>; <span class='text-purple-600'>i</span>++ {\r
	\xA0\xA0\xA0<span class='text-purple-600'>fib</span> += <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>-<span class='text-indigo-500'>1</span>] + <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>-<span class='text-indigo-500'>2</span>];\r
	\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>])\r
}\r
`}),Kf,qf,Xf,Gf,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>func</span> fibonacci() {\r
\xA0\xA0\xA0<span class='text-purple-600'>fib</span> = [<span class='text-indigo-500'>1</span>, <span class='text-indigo-500'>1</span>]\r
\xA0\xA0\xA0<span class='text-pink-600'>for</span> <span class='text-purple-600'>i</span> = <span class='text-indigo-500'>2</span>; <span class='text-purple-600'>i</span> <= <span class='text-indigo-500'>50</span>; <span class='text-purple-600'>i</span>++\r
\xA0\xA0\xA0\xA0\xA0\xA0<span class='text-purple-600'>fib</span> += <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>-<span class='text-indigo-500'>1</span>] + <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>-<span class='text-indigo-500'>2</span>];\r
\xA0\xA0\xA0<span class='text-pink-600'>return</span> <span class='text-purple-600'>fib</span>\r
}`}),Jf,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>func</span> fibonacci(<span class='text-purple-600'>n</span>: number) {\r
\xA0\xA0\xA0<span class='text-purple-600'>fib</span> = [<span class='text-indigo-500'>1</span>, <span class='text-indigo-500'>1</span>]\r
\xA0\xA0\xA0<span class='text-pink-600'>for</span> <span class='text-purple-600'>i</span> = <span class='text-indigo-500'>2</span>; <span class='text-purple-600'>i</span> <= <span class='text-purple-600'>n</span>; <span class='text-purple-600'>i</span>++\r
\xA0\xA0\xA0\xA0\xA0\xA0<span class='text-purple-600'>fib</span> += <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>-<span class='text-indigo-500'>1</span>] + <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>i</span>-<span class='text-indigo-500'>2</span>];\r
\xA0\xA0\xA0<span class='text-pink-600'>return</span> <span class='text-purple-600'>fib</span>[<span class='text-purple-600'>n</span>]\r
}`}),Qf,eu,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>class</span> Animal {\r
\xA0\xA0\xA0<span class='text-purple-600'>legs</span> = <span class='text-indigo-500'>0</span>\r
\xA0\xA0\xA0<span class='text-pink-600'>func</span> MakeSound() {\r
\xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>""</span>)\r
\xA0\xA0\xA0}\r
}`}),tu,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>class</span> Zombie {\r
\xA0\xA0\xA0<span class='text-purple-600'>drop</span> = <span class='text-indigo-500'>""</span>\r
}`}),Z(Se,{lang:"tank",code:`<span class='text-pink-600'>class</span> ZombiePig : Animal : Zombie {\r
\xA0\xA0\xA0<span class='text-purple-600'>legs</span> = <span class='text-indigo-500'>4</span>\r
\xA0\xA0\xA0<span class='text-purple-600'>drop</span> = <span class='text-indigo-500'>"Poisoned bacon"</span>\r
\xA0\xA0\xA0<span class='text-pink-600'>func</span> MakeSound() {\r
\xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>"Oink!"</span>)\r
\xA0\xA0\xA0}\r
}`}),nu,Z(Se,{lang:"tank",code:`<span class='text-pink-600'>class</span> ZombiePig : Animal : Zombie {\r
\xA0\xA0\xA0<span class='text-purple-600'>legs</span> = <span class='text-indigo-500'>4</span>\r
\xA0\xA0\xA0<span class='text-purple-600'>drop</span> = <span class='text-indigo-500'>"Poisoned bacon"</span>\r
\xA0\xA0\xA0<span class='text-pink-600'>func</span> MakeSound() {\r
\xA0\xA0\xA0\xA0\xA0\xA0<span class='text-blue-400'>println</span>(<span class='text-indigo-500'>"Oink!"</span>)\r
\xA0\xA0\xA0}\r
\r
\xA0\xA0\xA0<span class='text-pink-600'>constructor</span>(<span class='text-purple-600'>legs</span>: number) {\r
\xA0\xA0\xA0\xA0\xA0\xA0<span class='text-purple-600'>this.legs</span> = <span class='text-purple-600'>legs</span>;\r
\xA0\xA0\xA0}\r
}\r
\r
<span class='text-purple-600'>zombiePig</span> = <span class='text-purple-600'><span class='text-pink-600'>new</span> ZombiePig</span>(<span class='text-indigo-500'>4</span>)\r
<span class='text-blue-400'>println</span>(<span class='text-purple-600'>zombiePig.legs</span>) <i class='text-gray-500'>// 4</i>`})])]))}});const au={key:0,class:"flex flex-row justify-center items-center fixed z-[9999] w-full bg-blue-600"},iu=ne(" This website is currently Work-In-Progress and not complete. there is no guarantee that all functionality of this website is implemented. \xA0"),su=ne("\xA0 "),ou={class:"bg-gray-900 w-full overflow-x-hidden"},lu={class:"fixed top-0 left-0 right-0 h-20 bg-[rgba(30,41,59,0.7)] z-50"},cu=g("div",{class:"w-1/3 float-left flex items-center h-20"},[g("span",{class:"mx-2 font-edosz leading-20 text-6xl"}," tank ")],-1),fu=g("div",{class:"w-1/3 float-left"},null,-1),uu={class:"w-1/3 float-right"},du={key:0,class:"flex items-center justify-end h-20"},pu=g("span",{class:"underline+"},"Home",-1),mu=[pu],hu=g("span",{class:"underline+"},"Documentation",-1),gu=[hu],vu=g("span",{class:"underline+"},"Download",-1),bu=[vu],xu={key:1,class:"flex items-center justify-end h-20"},yu=g("span",null,"Home",-1),Cu=[yu],wu=g("span",null,"Documentation",-1),_u=[wu],Au=g("span",null,"Download",-1),ku=[Au],Lu={class:"w-screen h-full relative"},Eu=g("div",{class:"grid place-items-center z-50 absolute h-56 w-full bg-blue-600"}," BlackBird 2022 ",-1),Tu=Ze({setup(e){let t=kt(0),n=kt(!0),r=kt(window.innerWidth),a=kt(!1);const i=kt(null),s=kt(null);function o(m){t.value=m}function l(){window.scrollTo(0,0)}function f(m){console.log(s.value!=m.target),a.value=!1,window.removeEventListener("click",f),window.removeEventListener("touchend",f),d=!1}let d=!1;function p(){d?(d=!1,window.removeEventListener("click",f),window.removeEventListener("touchend",f)):(d=!0,setTimeout(()=>{window.addEventListener("click",f),window.addEventListener("touchend",f)},1))}return window.onresize=()=>{r.value=window.innerWidth},ra(()=>{let b=+new Proxy(new URLSearchParams(window.location.search),{get:(M,T)=>M.get(T.toString())}).p;o(b||0),console.log(t.value)}),(m,b)=>{const M=Jl("icon");return he(),Fe(Ce,null,[Be(n)?(he(),Fe("div",au,[iu,g("a",{onClick:b[0]||(b[0]=T=>{ie(n)?n.value=!1:n=!1}),class:"underline cursor-pointer"},"I\xA0Understand"),su])):Za("",!0),g("div",ou,[g("div",lu,[cu,fu,g("div",uu,[Be(r)>450?(he(),Fe("div",du,[g("a",{onClick:b[1]||(b[1]=T=>o(0)),class:"mx-2 group cursor-pointer leading-20"},mu),g("a",{onClick:b[2]||(b[2]=T=>o(1)),class:"mx-2 group cursor-pointer leading-20"},gu),g("a",{onClick:b[3]||(b[3]=T=>o(2)),class:"mx-2 group cursor-pointer leading-20"},bu)])):(he(),Fe("div",xu,[g("a",{ref_key:"dropdownBtn",ref:s,onClick:b[4]||(b[4]=T=>{ie(a)?a.value=!Be(a):a=!Be(a),p()}),class:"float-right text-3xl m-5 cursor-pointer"},[Z(M,{icon:"bars"})],512)]))])]),g("div",{ref_key:"dropdown",ref:i,style:Nn({height:Be(a)?"7.5rem":"0"}),class:"transition-all duration-500 overflow-hidden top-20 fixed w-full z-50 bg-gray-900 flex flex-col"},[g("a",{onClick:b[5]||(b[5]=T=>o(0)),class:"group cursor-pointer m-2 text-base h-6"},Cu),g("a",{onClick:b[6]||(b[6]=T=>o(1)),class:"group cursor-pointer m-2 text-base h-6"},_u),g("a",{onClick:b[7]||(b[7]=T=>o(2)),class:"group cursor-pointer m-2 text-base h-6"},ku)],4),g("div",Lu,[Z(ca,{onAfterLeave:b[9]||(b[9]=T=>l()),duration:300,mode:"out-in",name:"fadeSlide"},{default:ds(()=>[Be(t)===0?(he(),bn(mf,{key:0,class:"transition-all z-10 w-full",onNavigateToDownload:b[8]||(b[8]=T=>o(2))})):Be(t)===1?(he(),bn(ru,{key:1,class:"transition-all z-10 w-full"})):Be(t)===2?(he(),bn(Sf,{key:2,class:"transition-all z-10 w-full"})):Za("",!0)]),_:1})]),Eu])],64)}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){Pu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function Ou(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mu(e,t,n){return t&&ci(e.prototype,t),n&&ci(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fa(e,t){return Su(e)||Hu(e,t)||zs(e,t)||zu()}function Yn(e){return Iu(e)||Nu(e)||zs(e)||Fu()}function Iu(e){if(Array.isArray(e))return Or(e)}function Su(e){if(Array.isArray(e))return e}function Nu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function zs(e,t){if(!!e){if(typeof e=="string")return Or(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Or(e,t)}}function Or(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fi=function(){},ua={},Rs={},$s=null,Ds={mark:fi,measure:fi};try{typeof window!="undefined"&&(ua=window),typeof document!="undefined"&&(Rs=document),typeof MutationObserver!="undefined"&&($s=MutationObserver),typeof performance!="undefined"&&(Ds=performance)}catch{}var Ru=ua.navigator||{},ui=Ru.userAgent,di=ui===void 0?"":ui,st=ua,Q=Rs,pi=$s,mn=Ds;st.document;var qe=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Bs=~di.indexOf("MSIE")||~di.indexOf("Trident/"),Ue="___FONT_AWESOME___",Mr=16,Vs="fa",js="svg-inline--fa",xt="data-fa-i2svg",Pr="data-fa-pseudo-element",$u="data-fa-pseudo-element-pending",da="data-prefix",pa="data-icon",mi="fontawesome-i2svg",Du="async",Bu=["HTML","HEAD","STYLE","SCRIPT"],Us=function(){try{return!0}catch{return!1}}(),ma={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Mn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Ws={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Vu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ju=/fa[srltdbk\-\ ]/,Ys="fa-layers-text",Uu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Wu={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Zs=[1,2,3,4,5,6,7,8,9,10],Yu=Zs.concat([11,12,13,14,15,16,17,18,19,20]),Zu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ku=[].concat(Yn(Object.keys(Mn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY]).concat(Zs.map(function(e){return"".concat(e,"x")})).concat(Yu.map(function(e){return"w-".concat(e)})),Ks=st.FontAwesomeConfig||{};function qu(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var Gu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gu.forEach(function(e){var t=fa(e,2),n=t[0],r=t[1],a=Xu(qu(n));a!=null&&(Ks[r]=a)})}var Ju={familyPrefix:Vs,styleDefault:"solid",replacementClass:js,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Gt=E(E({},Ju),Ks);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var N={};Object.keys(Gt).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Gt[e]=n,yn.forEach(function(r){return r(N)})},get:function(){return Gt[e]}})});st.FontAwesomeConfig=N;var yn=[];function Qu(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var et=Mr,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function e0(e){if(!(!e||!qe)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return Q.head.insertBefore(t,r),e}}var t0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var e=12,t="";e-- >0;)t+=t0[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ha(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n0(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qs(e[n]),'" ')},"").trim()}function Zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ga(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function r0(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function a0(e){var t=e.transform,n=e.width,r=n===void 0?Mr:n,a=e.height,i=a===void 0?Mr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Bs?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var i0=`:root, :host {
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
}`;function Xs(){var e=Vs,t=js,n=N.familyPrefix,r=N.replacementClass,a=i0;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var hi=!1;function lr(){N.autoAddCss&&!hi&&(e0(Xs()),hi=!0)}var s0={mixout:function(){return{dom:{css:Xs,insertCss:lr}}},hooks:function(){return{beforeDOMElementCreation:function(){lr()},beforeI2svg:function(){lr()}}}},We=st||{};We[Ue]||(We[Ue]={});We[Ue].styles||(We[Ue].styles={});We[Ue].hooks||(We[Ue].hooks={});We[Ue].shims||(We[Ue].shims=[]);var Ee=We[Ue],Gs=[],o0=function e(){Q.removeEventListener("DOMContentLoaded",e),Pn=1,Gs.map(function(t){return t()})},Pn=!1;qe&&(Pn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Pn||Q.addEventListener("DOMContentLoaded",o0));function l0(e){!qe||(Pn?setTimeout(e,0):Gs.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?qs(e):"<".concat(t," ").concat(n0(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var c0=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},cr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?c0(n,a):n,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)f=i[l],d=o(d,t[f],f,t);return d};function f0(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){var t=f0(e);return t.length===1?t[0].toString(16):null}function u0(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Sr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,vi(t)):Ee.styles[e]=E(E({},Ee.styles[e]||{}),i),e==="fas"&&Sr("fa",t)}var Jt=Ee.styles,d0=Ee.shims,p0=Object.values(Ws),va=null,Js={},Qs={},eo={},to={},no={},m0=Object.keys(ma);function h0(e){return~Ku.indexOf(e)}function g0(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!h0(a)?a:null}var ro=function(){var t=function(i){return cr(Jt,function(s,o,l){return s[l]=cr(o,i,{}),s},{})};Js=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Qs=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),no=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Jt||N.autoFetchSvg,r=cr(d0,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});eo=r.names,to=r.unicodes,va=Kn(N.styleDefault)};Qu(function(e){va=Kn(e.styleDefault)});ro();function ba(e,t){return(Js[e]||{})[t]}function v0(e,t){return(Qs[e]||{})[t]}function Mt(e,t){return(no[e]||{})[t]}function ao(e){return eo[e]||{prefix:null,iconName:null}}function b0(e){var t=to[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ot(){return va}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Kn(e){var t=ma[e],n=Mn[e]||Mn[t],r=e in Ee.styles?e:null;return n||r||null}function qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(s,o){var l=g0(N.familyPrefix,o);if(Jt[o]?(o=p0.includes(o)?Vu[o]:o,a=o,s.prefix=o):m0.indexOf(o)>-1?(a=o,s.prefix=Kn(o)):l?s.iconName=l:o!==N.replacementClass&&s.rest.push(o),!r&&s.prefix&&s.iconName){var f=a==="fa"?ao(s.iconName):{},d=Mt(s.prefix,s.iconName);f.prefix&&(a=null),s.iconName=f.iconName||d||s.iconName,s.prefix=f.prefix||s.prefix,s.prefix==="far"&&!Jt.far&&Jt.fas&&!N.autoFetchSvg&&(s.prefix="fas")}return s},xa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ot()||"fas"),i}var x0=function(){function e(){Ou(this,e),this.definitions={}}return Mu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Sr(o,s[o]);var l=Ws[o];l&&Sr(l,s[o]),ro()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,d=f[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[o][p]=f)}),n[o][l]=f}),n}}]),e}(),bi=[],Pt={},Ht={},y0=Object.keys(Ht);function C0(e,t){var n=t.mixoutsTo;return bi=e,Pt={},Object.keys(Ht).forEach(function(r){y0.indexOf(r)===-1&&delete Ht[r]}),bi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),On(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Pt[s]||(Pt[s]=[]),Pt[s].push(i[s])})}r.provides&&r.provides(Ht)}),n}function Nr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Pt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Pt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ht[e]?Ht[e].apply(null,t):void 0}function Hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ot();if(!!t)return t=Mt(n,t)||t,gi(io.definitions,n,t)||gi(Ee.styles,n,t)}var io=new x0,w0=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,yt("noAuto")},_0={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(yt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,l0(function(){k0({autoReplaceSvgRoot:n}),yt("watch",t)})}},A0={icon:function(t){if(t===null)return null;if(On(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kn(t[0]);return{prefix:r,iconName:Mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(ju))){var a=qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ot(),iconName:Mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ot();return{prefix:i,iconName:Mt(i,t)||t}}}},xe={noAuto:w0,config:N,dom:_0,parse:A0,library:io,findIconDefinition:Hr,toHtml:on},k0=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Ee.styles).length>0||N.autoFetchSvg)&&qe&&N.autoReplaceSvg&&xe.dom.i2svg({node:r})};function Xn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!qe){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function L0(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ga(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=Zn(E(E({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function E0(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function ya(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,f=e.maskId,d=e.titleId,p=e.extra,m=e.watchable,b=m===void 0?!1:m,M=r.found?r:n,T=M.width,P=M.height,C=a==="fak",L=[N.replacementClass,i?"".concat(N.familyPrefix,"-").concat(i):""].filter(function(Y){return p.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(p.classes).join(" "),F={children:[],attributes:E(E({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:L,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(P)})},$=C&&!~p.classes.indexOf("fa-fw")?{width:"".concat(T/P*16*.0625,"em")}:{};b&&(F.attributes[xt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||sn())},children:[l]}),delete F.attributes.title);var V=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:E(E({},$),p.styles)}),re=r.found&&n.found?Ye("generateAbstractMask",V)||{children:[],attributes:{}}:Ye("generateAbstractIcon",V)||{children:[],attributes:{}},B=re.children,X=re.attributes;return V.children=B,V.attributes=X,o?E0(V):L0(V)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,f=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[xt]="");var d=E({},s.styles);ga(a)&&(d.transform=a0({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=Zn(d);p.length>0&&(f.style=p);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function T0(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Zn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var fr=Ee.styles;function Fr(e){var t=e[0],n=e[1],r=e.slice(4),a=fa(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var O0={found:!1,width:512,height:512};function M0(e,t){!Us&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=ot()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=ao(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&fr[t]&&fr[t][e]){var s=fr[t][e];return r(Fr(s))}M0(e,t),r(E(E({},O0),{},{icon:N.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var yi=function(){},Rr=N.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:yi,measure:yi},Yt='FA "6.1.1"',P0=function(t){return Rr.mark("".concat(Yt," ").concat(t," begins")),function(){return so(t)}},so=function(t){Rr.mark("".concat(Yt," ").concat(t," ends")),Rr.measure("".concat(Yt," ").concat(t),"".concat(Yt," ").concat(t," begins"),"".concat(Yt," ").concat(t," ends"))},Ca={begin:P0,end:so},Cn=function(){};function Ci(e){var t=e.getAttribute?e.getAttribute(xt):null;return typeof t=="string"}function I0(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function S0(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function N0(){if(N.autoReplaceSvg===!0)return wn.replace;var e=wn[N.autoReplaceSvg];return e||wn.replace}function H0(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function F0(e){return Q.createElement(e)}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?H0:F0:n;if(typeof e=="string")return Q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(oo(s,{ceFn:r}))}),a}function z0(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var wn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(oo(a),n)}),n.getAttribute(xt)===null&&N.keepOriginalSource){var r=Q.createComment(z0(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ha(n).indexOf(N.replacementClass))return wn.replace(t);var a=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===N.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return on(o)}).join(`
`);n.setAttribute(xt,""),n.innerHTML=s}};function wi(e){e()}function lo(e,t){var n=typeof t=="function"?t:Cn;if(e.length===0)n();else{var r=wi;N.mutateApproach===Du&&(r=st.requestAnimationFrame||wi),r(function(){var a=N0(),i=Ca.begin("mutate");e.map(a),i(),n()})}}var wa=!1;function co(){wa=!0}function $r(){wa=!1}var In=null;function _i(e){if(!!pi&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?Cn:t,r=e.nodeCallback,a=r===void 0?Cn:r,i=e.pseudoElementsCallback,s=i===void 0?Cn:i,o=e.observeMutationsRoot,l=o===void 0?Q:o;In=new pi(function(f){if(!wa){var d=ot();Dt(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Ci(p.addedNodes[0])&&(N.searchPseudoElements&&s(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&N.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&Ci(p.target)&&~Zu.indexOf(p.attributeName))if(p.attributeName==="class"&&I0(p.target)){var m=qn(ha(p.target)),b=m.prefix,M=m.iconName;p.target.setAttribute(da,b||d),M&&p.target.setAttribute(pa,M)}else S0(p.target)&&a(p.target)})}}),qe&&In.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function R0(){!In||In.disconnect()}function $0(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function D0(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=qn(ha(e));return a.prefix||(a.prefix=ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=v0(a.prefix,e.innerText)||ba(a.prefix,Ir(e.innerText))),a}function B0(e){var t=Dt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function V0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=D0(e),r=n.iconName,a=n.prefix,i=n.rest,s=B0(e),o=Nr("parseNodeAttributes",{},e),l=t.styleParser?$0(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var j0=Ee.styles;function fo(e){var t=N.autoReplaceSvg==="nest"?Ai(e,{styleParser:!1}):Ai(e);return~t.extra.classes.indexOf(Ys)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=Q.documentElement.classList,r=function(p){return n.add("".concat(mi,"-").concat(p))},a=function(p){return n.remove("".concat(mi,"-").concat(p))},i=N.autoFetchSvg?Object.keys(ma):Object.keys(j0),s=[".".concat(Ys,":not([").concat(xt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(xt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Dt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),f=o.reduce(function(d,p){try{var m=fo(p);m&&d.push(m)}catch(b){Us||b.name==="MissingIcon"&&console.error(b)}return d},[]);return new Promise(function(d,p){Promise.all(f).then(function(m){lo(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(m){l(),p(m)})})}function U0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fo(e).then(function(n){n&&lo([n],t)})}function W0(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Y0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ze:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,d=f===void 0?null:f,p=n.title,m=p===void 0?null:p,b=n.titleId,M=b===void 0?null:b,T=n.classes,P=T===void 0?[]:T,C=n.attributes,L=C===void 0?{}:C,F=n.styles,$=F===void 0?{}:F;if(!!t){var V=t.prefix,re=t.iconName,B=t.icon;return Xn(E({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(m?L["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(M||sn()):(L["aria-hidden"]="true",L.focusable="false")),ya({icons:{main:Fr(B),mask:l?Fr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:re,transform:E(E({},ze),a),symbol:s,title:m,maskId:d,titleId:M,extra:{attributes:L,styles:$,classes:P}})})}},Z0={mixout:function(){return{icon:W0(Y0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ki,n.nodeCallback=U0,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,s=i===void 0?function(){}:i;return ki(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,d=r.mask,p=r.maskId,m=r.extra;return new Promise(function(b,M){Promise.all([zr(a,o),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var P=fa(T,2),C=P[0],L=P[1];b([n,ya({icons:{main:C,mask:L},prefix:o,iconName:a,transform:l,symbol:f,maskId:p,title:i,titleId:s,extra:m,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Zn(o);l.length>0&&(a.style=l);var f;return ga(s)&&(f=Ye("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},K0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Xn({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(Yn(i)).join(" ")},children:s}]})}}}},q0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,d=r.styles,p=d===void 0?{}:d;return Xn({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),T0({content:n.toString(),title:i,extra:{attributes:f,styles:p,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(Yn(o))}})})}}}},X0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ze:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,d=r.attributes,p=d===void 0?{}:d,m=r.styles,b=m===void 0?{}:m;return Xn({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:E(E({},ze),i),title:o,extra:{attributes:p,styles:b,classes:["".concat(N.familyPrefix,"-layers-text")].concat(Yn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Bs){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/f,l=d.height/f}return N.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},G0=new RegExp('"',"ug"),Li=[1105920,1112319];function J0(e){var t=e.replace(G0,""),n=u0(t,0),r=n>=Li[0]&&n<=Li[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function Ei(e,t){var n="".concat($u).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Dt(e.children),s=i.filter(function(re){return re.getAttribute(Pr)===t})[0],o=st.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Uu),f=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var p=o.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Mn[l[2].toLowerCase()]:Wu[f],b=J0(p),M=b.value,T=b.isSecondary,P=l[0].startsWith("FontAwesome"),C=ba(m,M),L=C;if(P){var F=b0(M);F.iconName&&F.prefix&&(C=F.iconName,m=F.prefix)}if(C&&!T&&(!s||s.getAttribute(da)!==m||s.getAttribute(pa)!==L)){e.setAttribute(n,L),s&&e.removeChild(s);var $=V0(),V=$.extra;V.attributes[Pr]=t,zr(C,m).then(function(re){var B=ya(E(E({},$),{},{icons:{main:re,mask:xa()},prefix:m,iconName:L,extra:V,watchable:!0})),X=Q.createElement("svg");t==="::before"?e.insertBefore(X,e.firstChild):e.appendChild(X),X.outerHTML=B.map(function(Y){return on(Y)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Q0(e){return Promise.all([Ei(e,"::before"),Ei(e,"::after")])}function e1(e){return e.parentNode!==document.head&&!~Bu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ti(e){if(!!qe)return new Promise(function(t,n){var r=Dt(e.querySelectorAll("*")).filter(e1).map(Q0),a=Ca.begin("searchPseudoElements");co(),Promise.all(r).then(function(){a(),$r(),t()}).catch(function(){a(),$r(),n()})})}var t1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;N.searchPseudoElements&&Ti(a)}}},Oi=!1,n1={mixout:function(){return{dom:{unwatch:function(){co(),Oi=!0}}}},hooks:function(){return{bootstrap:function(){_i(Nr("mutationObserverCallbacks",{}))},noAuto:function(){R0()},watch:function(n){var r=n.observeMutationsRoot;Oi?$r():_i(Nr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},r1={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(f," ").concat(d)},m={transform:"translate(".concat(s/2*-1," -256)")},b={outer:o,inner:p,path:m};return{tag:"g",attributes:E({},b.outer),children:[{tag:"g",attributes:E({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),b.path)}]}]}}}},ur={x:0,y:0,width:"100%",height:"100%"};function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function a1(e){return e.tag==="g"?e.children:[e]}var i1={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?qn(a.split(" ").map(function(s){return s.trim()})):xa();return i.prefix||(i.prefix=ot()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,d=i.icon,p=s.width,m=s.icon,b=r0({transform:l,containerWidth:p,iconWidth:f}),M={tag:"rect",attributes:E(E({},ur),{},{fill:"white"})},T=d.children?{children:d.children.map(Pi)}:{},P={tag:"g",attributes:E({},b.inner),children:[Pi(E({tag:d.tag,attributes:E(E({},d.attributes),b.path)},T))]},C={tag:"g",attributes:E({},b.outer),children:[P]},L="mask-".concat(o||sn()),F="clip-".concat(o||sn()),$={tag:"mask",attributes:E(E({},ur),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,C]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:a1(m)},$]};return r.push(V,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(L,")")},ur)}),{children:r,attributes:a}}}},s1={provides:function(t){var n=!1;st.matchMedia&&(n=st.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},o1={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},l1=[s0,Z0,K0,q0,X0,t1,n1,r1,i1,s1,o1];C0(l1,{mixoutsTo:xe});xe.noAuto;var uo=xe.config,c1=xe.library;xe.dom;var po=xe.parse;xe.findIconDefinition;xe.toHtml;var f1=xe.icon;xe.layer;var u1=xe.text;xe.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var d1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},p1=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function m1(e,t){return t={exports:{}},e(t,t.exports),t.exports}var h1=m1(function(e){(function(t){var n=function(C,L,F){if(!f(L)||p(L)||m(L)||b(L)||l(L))return L;var $,V=0,re=0;if(d(L))for($=[],re=L.length;V<re;V++)$.push(n(C,L[V],F));else{$={};for(var B in L)Object.prototype.hasOwnProperty.call(L,B)&&($[C(B,F)]=n(C,L[B],F))}return $},r=function(C,L){L=L||{};var F=L.separator||"_",$=L.split||/(?=[A-Z])/;return C.split($).join(F)},a=function(C){return M(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(L,F){return F?F.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},i=function(C){var L=a(C);return L.substr(0,1).toUpperCase()+L.substr(1)},s=function(C,L){return r(C,L).toLowerCase()},o=Object.prototype.toString,l=function(C){return typeof C=="function"},f=function(C){return C===Object(C)},d=function(C){return o.call(C)=="[object Array]"},p=function(C){return o.call(C)=="[object Date]"},m=function(C){return o.call(C)=="[object RegExp]"},b=function(C){return o.call(C)=="[object Boolean]"},M=function(C){return C=C-0,C===C},T=function(C,L){var F=L&&"process"in L?L.process:L;return typeof F!="function"?C:function($,V){return F($,C,V)}},P={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(C,L){return n(T(a,L),C)},decamelizeKeys:function(C,L){return n(T(s,L),C,L)},pascalizeKeys:function(C,L){return n(T(i,L),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(p1)}),g1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Sn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v1=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Dr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function b1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=h1.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function x1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return _a(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=x1(d);break;case"style":l.style=b1(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=v1(n,["class","style"]);return la(e.tag,Sn({},t,{class:a.class,style:Sn({},a.style,s)},a.attrs,o),r)}var mo=!1;try{mo=!0}catch{}function y1(){if(!mo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Zt({},e,t):{}}function C1(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Zt(t,"fa-"+e.size,e.size!==null),Zt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Zt(t,"fa-pull-"+e.pull,e.pull!==null),Zt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ii(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":g1(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var w1=Ze({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=we(function(){return Ii(t.icon)}),i=we(function(){return Qt("classes",C1(t))}),s=we(function(){return Qt("transform",typeof t.transform=="string"?po.transform(t.transform):t.transform)}),o=we(function(){return Qt("mask",Ii(t.mask))}),l=we(function(){return f1(a.value,Sn({},i.value,s.value,o.value,{symbol:t.symbol,title:t.title}))});gn(l,function(d){if(!d)return y1("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=we(function(){return l.value?_a(l.value.abstract[0],{},r):null});return function(){return f.value}}});Ze({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=uo.familyPrefix,i=we(function(){return[a+"-layers"].concat(Dr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return la("div",{class:i.value},r.default?r.default():[])}}});Ze({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=uo.familyPrefix,i=we(function(){return Qt("classes",[].concat(Dr(t.counter?[a+"-layers-counter"]:[]),Dr(t.position?[a+"-layers-"+t.position]:[])))}),s=we(function(){return Qt("transform",typeof t.transform=="string"?po.transform(t.transform):t.transform)}),o=we(function(){var f=u1(t.value.toString(),Sn({},s.value,i.value)),d=f.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=we(function(){return _a(o.value,{},r)});return function(){return l.value}}});c1.add(d1);jc(Tu).component("icon",w1).mount("#app");
