(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))f(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const v of y.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function o(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function f(d){if(d.ep)return;d.ep=!0;const y=o(d);fetch(d.href,y)}})();var Tc={exports:{}},Ba={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Ah(){if(qd)return Ba;qd=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(f,d,y){var v=null;if(y!==void 0&&(v=""+y),d.key!==void 0&&(v=""+d.key),"key"in d){y={};for(var g in d)g!=="key"&&(y[g]=d[g])}else y=d;return d=y.ref,{$$typeof:a,type:f,key:v,ref:d!==void 0?d:null,props:y}}return Ba.Fragment=i,Ba.jsx=o,Ba.jsxs=o,Ba}var Gd;function Eh(){return Gd||(Gd=1,Tc.exports=Ah()),Tc.exports}var L=Eh(),xc={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Th(){if(wd)return le;wd=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),v=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),N=Symbol.iterator;function U(p){return p===null||typeof p!="object"?null:(p=N&&p[N]||p["@@iterator"],typeof p=="function"?p:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,$={};function ne(p,z,j){this.props=p,this.context=z,this.refs=$,this.updater=j||B}ne.prototype.isReactComponent={},ne.prototype.setState=function(p,z){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,z,"setState")},ne.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function J(){}J.prototype=ne.prototype;function V(p,z,j){this.props=p,this.context=z,this.refs=$,this.updater=j||B}var I=V.prototype=new J;I.constructor=V,G(I,ne.prototype),I.isPureReactComponent=!0;var _e=Array.isArray,te={H:null,A:null,T:null,S:null,V:null},w=Object.prototype.hasOwnProperty;function P(p,z,j,Y,K,oe){return j=oe.ref,{$$typeof:a,type:p,key:z,ref:j!==void 0?j:null,props:oe}}function fe(p,z){return P(p.type,z,void 0,void 0,void 0,p.props)}function Se(p){return typeof p=="object"&&p!==null&&p.$$typeof===a}function Ie(p){var z={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(j){return z[j]})}var Pe=/\/+/g;function De(p,z){return typeof p=="object"&&p!==null&&p.key!=null?Ie(""+p.key):z.toString(36)}function rn(){}function jn(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(rn,rn):(p.status="pending",p.then(function(z){p.status==="pending"&&(p.status="fulfilled",p.value=z)},function(z){p.status==="pending"&&(p.status="rejected",p.reason=z)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Be(p,z,j,Y,K){var oe=typeof p;(oe==="undefined"||oe==="boolean")&&(p=null);var ee=!1;if(p===null)ee=!0;else switch(oe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(p.$$typeof){case a:case i:ee=!0;break;case O:return ee=p._init,Be(ee(p._payload),z,j,Y,K)}}if(ee)return K=K(p),ee=Y===""?"."+De(p,0):Y,_e(K)?(j="",ee!=null&&(j=ee.replace(Pe,"$&/")+"/"),Be(K,z,j,"",function(nl){return nl})):K!=null&&(Se(K)&&(K=fe(K,j+(K.key==null||p&&p.key===K.key?"":(""+K.key).replace(Pe,"$&/")+"/")+ee)),z.push(K)),1;ee=0;var cn=Y===""?".":Y+":";if(_e(p))for(var Ee=0;Ee<p.length;Ee++)Y=p[Ee],oe=cn+De(Y,Ee),ee+=Be(Y,z,j,oe,K);else if(Ee=U(p),typeof Ee=="function")for(p=Ee.call(p),Ee=0;!(Y=p.next()).done;)Y=Y.value,oe=cn+De(Y,Ee++),ee+=Be(Y,z,j,oe,K);else if(oe==="object"){if(typeof p.then=="function")return Be(jn(p),z,j,Y,K);throw z=String(p),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ee}function _(p,z,j){if(p==null)return p;var Y=[],K=0;return Be(p,Y,"","",function(oe){return z.call(j,oe,K++)}),Y}function H(p){if(p._status===-1){var z=p._result;z=z(),z.then(function(j){(p._status===0||p._status===-1)&&(p._status=1,p._result=j)},function(j){(p._status===0||p._status===-1)&&(p._status=2,p._result=j)}),p._status===-1&&(p._status=0,p._result=z)}if(p._status===1)return p._result.default;throw p._result}var Z=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function ve(){}return le.Children={map:_,forEach:function(p,z,j){_(p,function(){z.apply(this,arguments)},j)},count:function(p){var z=0;return _(p,function(){z++}),z},toArray:function(p){return _(p,function(z){return z})||[]},only:function(p){if(!Se(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},le.Component=ne,le.Fragment=o,le.Profiler=d,le.PureComponent=V,le.StrictMode=f,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,le.__COMPILER_RUNTIME={__proto__:null,c:function(p){return te.H.useMemoCache(p)}},le.cache=function(p){return function(){return p.apply(null,arguments)}},le.cloneElement=function(p,z,j){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var Y=G({},p.props),K=p.key,oe=void 0;if(z!=null)for(ee in z.ref!==void 0&&(oe=void 0),z.key!==void 0&&(K=""+z.key),z)!w.call(z,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&z.ref===void 0||(Y[ee]=z[ee]);var ee=arguments.length-2;if(ee===1)Y.children=j;else if(1<ee){for(var cn=Array(ee),Ee=0;Ee<ee;Ee++)cn[Ee]=arguments[Ee+2];Y.children=cn}return P(p.type,K,void 0,void 0,oe,Y)},le.createContext=function(p){return p={$$typeof:v,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:y,_context:p},p},le.createElement=function(p,z,j){var Y,K={},oe=null;if(z!=null)for(Y in z.key!==void 0&&(oe=""+z.key),z)w.call(z,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(K[Y]=z[Y]);var ee=arguments.length-2;if(ee===1)K.children=j;else if(1<ee){for(var cn=Array(ee),Ee=0;Ee<ee;Ee++)cn[Ee]=arguments[Ee+2];K.children=cn}if(p&&p.defaultProps)for(Y in ee=p.defaultProps,ee)K[Y]===void 0&&(K[Y]=ee[Y]);return P(p,oe,void 0,void 0,null,K)},le.createRef=function(){return{current:null}},le.forwardRef=function(p){return{$$typeof:g,render:p}},le.isValidElement=Se,le.lazy=function(p){return{$$typeof:O,_payload:{_status:-1,_result:p},_init:H}},le.memo=function(p,z){return{$$typeof:b,type:p,compare:z===void 0?null:z}},le.startTransition=function(p){var z=te.T,j={};te.T=j;try{var Y=p(),K=te.S;K!==null&&K(j,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ve,Z)}catch(oe){Z(oe)}finally{te.T=z}},le.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},le.use=function(p){return te.H.use(p)},le.useActionState=function(p,z,j){return te.H.useActionState(p,z,j)},le.useCallback=function(p,z){return te.H.useCallback(p,z)},le.useContext=function(p){return te.H.useContext(p)},le.useDebugValue=function(){},le.useDeferredValue=function(p,z){return te.H.useDeferredValue(p,z)},le.useEffect=function(p,z,j){var Y=te.H;if(typeof j=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(p,z)},le.useId=function(){return te.H.useId()},le.useImperativeHandle=function(p,z,j){return te.H.useImperativeHandle(p,z,j)},le.useInsertionEffect=function(p,z){return te.H.useInsertionEffect(p,z)},le.useLayoutEffect=function(p,z){return te.H.useLayoutEffect(p,z)},le.useMemo=function(p,z){return te.H.useMemo(p,z)},le.useOptimistic=function(p,z){return te.H.useOptimistic(p,z)},le.useReducer=function(p,z,j){return te.H.useReducer(p,z,j)},le.useRef=function(p){return te.H.useRef(p)},le.useState=function(p){return te.H.useState(p)},le.useSyncExternalStore=function(p,z,j){return te.H.useSyncExternalStore(p,z,j)},le.useTransition=function(){return te.H.useTransition()},le.version="19.1.1",le}var Qd;function Lc(){return Qd||(Qd=1,xc.exports=Th()),xc.exports}var Nn=Lc(),Mc={exports:{}},Ha={},Oc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function xh(){return Xd||(Xd=1,(function(a){function i(_,H){var Z=_.length;_.push(H);e:for(;0<Z;){var ve=Z-1>>>1,p=_[ve];if(0<d(p,H))_[ve]=H,_[Z]=p,Z=ve;else break e}}function o(_){return _.length===0?null:_[0]}function f(_){if(_.length===0)return null;var H=_[0],Z=_.pop();if(Z!==H){_[0]=Z;e:for(var ve=0,p=_.length,z=p>>>1;ve<z;){var j=2*(ve+1)-1,Y=_[j],K=j+1,oe=_[K];if(0>d(Y,Z))K<p&&0>d(oe,Y)?(_[ve]=oe,_[K]=Z,ve=K):(_[ve]=Y,_[j]=Z,ve=j);else if(K<p&&0>d(oe,Z))_[ve]=oe,_[K]=Z,ve=K;else break e}}return H}function d(_,H){var Z=_.sortIndex-H.sortIndex;return Z!==0?Z:_.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var v=Date,g=v.now();a.unstable_now=function(){return v.now()-g}}var m=[],b=[],O=1,N=null,U=3,B=!1,G=!1,$=!1,ne=!1,J=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function _e(_){for(var H=o(b);H!==null;){if(H.callback===null)f(b);else if(H.startTime<=_)f(b),H.sortIndex=H.expirationTime,i(m,H);else break;H=o(b)}}function te(_){if($=!1,_e(_),!G)if(o(m)!==null)G=!0,w||(w=!0,De());else{var H=o(b);H!==null&&Be(te,H.startTime-_)}}var w=!1,P=-1,fe=5,Se=-1;function Ie(){return ne?!0:!(a.unstable_now()-Se<fe)}function Pe(){if(ne=!1,w){var _=a.unstable_now();Se=_;var H=!0;try{e:{G=!1,$&&($=!1,V(P),P=-1),B=!0;var Z=U;try{n:{for(_e(_),N=o(m);N!==null&&!(N.expirationTime>_&&Ie());){var ve=N.callback;if(typeof ve=="function"){N.callback=null,U=N.priorityLevel;var p=ve(N.expirationTime<=_);if(_=a.unstable_now(),typeof p=="function"){N.callback=p,_e(_),H=!0;break n}N===o(m)&&f(m),_e(_)}else f(m);N=o(m)}if(N!==null)H=!0;else{var z=o(b);z!==null&&Be(te,z.startTime-_),H=!1}}break e}finally{N=null,U=Z,B=!1}H=void 0}}finally{H?De():w=!1}}}var De;if(typeof I=="function")De=function(){I(Pe)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,jn=rn.port2;rn.port1.onmessage=Pe,De=function(){jn.postMessage(null)}}else De=function(){J(Pe,0)};function Be(_,H){P=J(function(){_(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return U},a.unstable_next=function(_){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var Z=U;U=H;try{return _()}finally{U=Z}},a.unstable_requestPaint=function(){ne=!0},a.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var Z=U;U=_;try{return H()}finally{U=Z}},a.unstable_scheduleCallback=function(_,H,Z){var ve=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,_){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=Z+p,_={id:O++,callback:H,priorityLevel:_,startTime:Z,expirationTime:p,sortIndex:-1},Z>ve?(_.sortIndex=Z,i(b,_),o(m)===null&&_===o(b)&&($?(V(P),P=-1):$=!0,Be(te,Z-ve))):(_.sortIndex=p,i(m,_),G||B||(G=!0,w||(w=!0,De()))),_},a.unstable_shouldYield=Ie,a.unstable_wrapCallback=function(_){var H=U;return function(){var Z=U;U=H;try{return _.apply(this,arguments)}finally{U=Z}}}})(_c)),_c}var Jd;function Mh(){return Jd||(Jd=1,Oc.exports=xh()),Oc.exports}var Dc={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Oh(){if(Zd)return ke;Zd=1;var a=Lc();function i(m){var b="https://react.dev/errors/"+m;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)b+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+m+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var f={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function y(m,b,O){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:N==null?null:""+N,children:m,containerInfo:b,implementation:O}}var v=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,b){if(m==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ke.createPortal=function(m,b){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return y(m,b,null,O)},ke.flushSync=function(m){var b=v.T,O=f.p;try{if(v.T=null,f.p=2,m)return m()}finally{v.T=b,f.p=O,f.d.f()}},ke.preconnect=function(m,b){typeof m=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,f.d.C(m,b))},ke.prefetchDNS=function(m){typeof m=="string"&&f.d.D(m)},ke.preinit=function(m,b){if(typeof m=="string"&&b&&typeof b.as=="string"){var O=b.as,N=g(O,b.crossOrigin),U=typeof b.integrity=="string"?b.integrity:void 0,B=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;O==="style"?f.d.S(m,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:N,integrity:U,fetchPriority:B}):O==="script"&&f.d.X(m,{crossOrigin:N,integrity:U,fetchPriority:B,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ke.preinitModule=function(m,b){if(typeof m=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var O=g(b.as,b.crossOrigin);f.d.M(m,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&f.d.M(m)},ke.preload=function(m,b){if(typeof m=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var O=b.as,N=g(O,b.crossOrigin);f.d.L(m,O,{crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ke.preloadModule=function(m,b){if(typeof m=="string")if(b){var O=g(b.as,b.crossOrigin);f.d.m(m,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else f.d.m(m)},ke.requestFormReset=function(m){f.d.r(m)},ke.unstable_batchedUpdates=function(m,b){return m(b)},ke.useFormState=function(m,b,O){return v.H.useFormState(m,b,O)},ke.useFormStatus=function(){return v.H.useHostTransitionStatus()},ke.version="19.1.1",ke}var Vd;function _h(){if(Vd)return Dc.exports;Vd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Dc.exports=Oh(),Dc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Dh(){if(Kd)return Ha;Kd=1;var a=Mh(),i=Lc(),o=_h();function f(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function v(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(y(e)!==e)throw Error(f(188))}function m(e){var n=e.alternate;if(!n){if(n=y(e),n===null)throw Error(f(188));return n!==e?null:e}for(var l=e,t=n;;){var u=l.return;if(u===null)break;var r=u.alternate;if(r===null){if(t=u.return,t!==null){l=t;continue}break}if(u.child===r.child){for(r=u.child;r;){if(r===l)return g(u),e;if(r===t)return g(u),n;r=r.sibling}throw Error(f(188))}if(l.return!==t.return)l=u,t=r;else{for(var c=!1,s=u.child;s;){if(s===l){c=!0,l=u,t=r;break}if(s===t){c=!0,t=u,l=r;break}s=s.sibling}if(!c){for(s=r.child;s;){if(s===l){c=!0,l=r,t=u;break}if(s===t){c=!0,t=r,l=u;break}s=s.sibling}if(!c)throw Error(f(189))}}if(l.alternate!==t)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var O=Object.assign,N=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),I=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var rn=Symbol.for("react.client.reference");function jn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case ne:return"Profiler";case $:return"StrictMode";case te:return"Suspense";case w:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case I:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case _e:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:jn(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return jn(e(n))}catch{}}return null}var Be=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ve=[],p=-1;function z(e){return{current:e}}function j(e){0>p||(e.current=ve[p],ve[p]=null,p--)}function Y(e,n){p++,ve[p]=e.current,e.current=n}var K=z(null),oe=z(null),ee=z(null),cn=z(null);function Ee(e,n){switch(Y(ee,n),Y(oe,e),Y(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vd(n),e=hd(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(K),Y(K,e)}function nl(){j(K),j(oe),j(ee)}function cr(e){e.memoizedState!==null&&Y(cn,e);var n=K.current,l=hd(n,e.type);n!==l&&(Y(oe,e),Y(K,l))}function wa(e){oe.current===e&&(j(K),j(oe)),cn.current===e&&(j(cn),Ca._currentValue=Z)}var fr=Object.prototype.hasOwnProperty,or=a.unstable_scheduleCallback,sr=a.unstable_cancelCallback,P0=a.unstable_shouldYield,e1=a.unstable_requestPaint,Rn=a.unstable_now,n1=a.unstable_getCurrentPriorityLevel,Zc=a.unstable_ImmediatePriority,Vc=a.unstable_UserBlockingPriority,Qa=a.unstable_NormalPriority,l1=a.unstable_LowPriority,Kc=a.unstable_IdlePriority,t1=a.log,a1=a.unstable_setDisableYieldValue,Lt=null,fn=null;function ll(e){if(typeof t1=="function"&&a1(e),fn&&typeof fn.setStrictMode=="function")try{fn.setStrictMode(Lt,e)}catch{}}var on=Math.clz32?Math.clz32:i1,u1=Math.log,r1=Math.LN2;function i1(e){return e>>>=0,e===0?32:31-(u1(e)/r1|0)|0}var Xa=256,Ja=4194304;function Dl(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Za(e,n,l){var t=e.pendingLanes;if(t===0)return 0;var u=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=t&134217727;return s!==0?(t=s&~r,t!==0?u=Dl(t):(c&=s,c!==0?u=Dl(c):l||(l=s&~e,l!==0&&(u=Dl(l))))):(s=t&~r,s!==0?u=Dl(s):c!==0?u=Dl(c):l||(l=t&~e,l!==0&&(u=Dl(l)))),u===0?0:n!==0&&n!==u&&(n&r)===0&&(r=u&-u,l=n&-n,r>=l||r===32&&(l&4194048)!==0)?n:u}function jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function c1(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kc(){var e=Xa;return Xa<<=1,(Xa&4194048)===0&&(Xa=256),e}function Fc(){var e=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),e}function dr(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function qt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function f1(e,n,l,t,u,r){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,T=e.hiddenUpdates;for(l=c&~l;0<l;){var D=31-on(l),R=1<<D;s[D]=0,h[D]=-1;var x=T[D];if(x!==null)for(T[D]=null,D=0;D<x.length;D++){var M=x[D];M!==null&&(M.lane&=-536870913)}l&=~R}t!==0&&Wc(e,t,0),r!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~n))}function Wc(e,n,l){e.pendingLanes|=n,e.suspendedLanes&=~n;var t=31-on(n);e.entangledLanes|=n,e.entanglements[t]=e.entanglements[t]|1073741824|l&4194090}function $c(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var t=31-on(l),u=1<<t;u&n|e[t]&n&&(e[t]|=n),l&=~u}}function vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ic(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Ud(e.type))}function o1(e,n){var l=H.p;try{return H.p=e,n()}finally{H.p=l}}var tl=Math.random().toString(36).slice(2),Ve="__reactFiber$"+tl,en="__reactProps$"+tl,Kl="__reactContainer$"+tl,yr="__reactEvents$"+tl,s1="__reactListeners$"+tl,d1="__reactHandles$"+tl,Pc="__reactResources$"+tl,Gt="__reactMarker$"+tl;function mr(e){delete e[Ve],delete e[en],delete e[yr],delete e[s1],delete e[d1]}function kl(e){var n=e[Ve];if(n)return n;for(var l=e.parentNode;l;){if(n=l[Kl]||l[Ve]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=gd(e);e!==null;){if(l=e[Ve])return l;e=gd(e)}return n}e=l,l=e.parentNode}return null}function Fl(e){if(e=e[Ve]||e[Kl]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function wt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(f(33))}function Wl(e){var n=e[Pc];return n||(n=e[Pc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function je(e){e[Gt]=!0}var ef=new Set,nf={};function Cl(e,n){$l(e,n),$l(e+"Capture",n)}function $l(e,n){for(nf[e]=n,e=0;e<n.length;e++)ef.add(n[e])}var v1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lf={},tf={};function h1(e){return fr.call(tf,e)?!0:fr.call(lf,e)?!1:v1.test(e)?tf[e]=!0:(lf[e]=!0,!1)}function Va(e,n,l){if(h1(n))if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var t=n.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+l)}}function Ka(e,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+l)}}function qn(e,n,l,t){if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(n,l,""+t)}}var pr,af;function Il(e){if(pr===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);pr=n&&n[1]||"",af=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pr+e+af}var gr=!1;function Sr(e,n){if(!e||gr)return"";gr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(n){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(M){var x=M}Reflect.construct(e,[],R)}else{try{R.call()}catch(M){x=M}e.call(R.prototype)}}else{try{throw Error()}catch(M){x=M}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(M){if(M&&x&&typeof M.stack=="string")return[M.stack,x.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=t.DetermineComponentFrameRoot(),c=r[0],s=r[1];if(c&&s){var h=c.split(`
`),T=s.split(`
`);for(u=t=0;t<h.length&&!h[t].includes("DetermineComponentFrameRoot");)t++;for(;u<T.length&&!T[u].includes("DetermineComponentFrameRoot");)u++;if(t===h.length||u===T.length)for(t=h.length-1,u=T.length-1;1<=t&&0<=u&&h[t]!==T[u];)u--;for(;1<=t&&0<=u;t--,u--)if(h[t]!==T[u]){if(t!==1||u!==1)do if(t--,u--,0>u||h[t]!==T[u]){var D=`
`+h[t].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=t&&0<=u);break}}}finally{gr=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Il(l):""}function y1(e){switch(e.tag){case 26:case 27:case 5:return Il(e.type);case 16:return Il("Lazy");case 13:return Il("Suspense");case 19:return Il("SuspenseList");case 0:case 15:return Sr(e.type,!1);case 11:return Sr(e.type.render,!1);case 1:return Sr(e.type,!0);case 31:return Il("Activity");default:return""}}function uf(e){try{var n="";do n+=y1(e),e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function m1(e){var n=rf(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,r=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(c){t=""+c,r.call(this,c)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ka(e){e._valueTracker||(e._valueTracker=m1(e))}function cf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),t="";return e&&(t=rf(e)?e.checked?"true":"false":e.value),e=t,e!==l?(n.setValue(e),!0):!1}function Fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var p1=/[\n"\\]/g;function Sn(e){return e.replace(p1,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function br(e,n,l,t,u,r,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+gn(n)):e.value!==""+gn(n)&&(e.value=""+gn(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?Ar(e,c,gn(n)):l!=null?Ar(e,c,gn(l)):t!=null&&e.removeAttribute("value"),u==null&&r!=null&&(e.defaultChecked=!!r),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+gn(s):e.removeAttribute("name")}function ff(e,n,l,t,u,r,c,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||l!=null){if(!(r!=="submit"&&r!=="reset"||n!=null))return;l=l!=null?""+gn(l):"",n=n!=null?""+gn(n):l,s||n===e.value||(e.value=n),e.defaultValue=n}t=t??u,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=s?e.checked:!!t,e.defaultChecked=!!t,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Ar(e,n,l){n==="number"&&Fa(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Pl(e,n,l,t){if(e=e.options,n){n={};for(var u=0;u<l.length;u++)n["$"+l[u]]=!0;for(l=0;l<e.length;l++)u=n.hasOwnProperty("$"+e[l].value),e[l].selected!==u&&(e[l].selected=u),u&&t&&(e[l].defaultSelected=!0)}else{for(l=""+gn(l),n=null,u=0;u<e.length;u++){if(e[u].value===l){e[u].selected=!0,t&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function of(e,n,l){if(n!=null&&(n=""+gn(n),n!==e.value&&(e.value=n),l==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=l!=null?""+gn(l):""}function sf(e,n,l,t){if(n==null){if(t!=null){if(l!=null)throw Error(f(92));if(Be(t)){if(1<t.length)throw Error(f(93));t=t[0]}l=t}l==null&&(l=""),n=l}l=gn(n),e.defaultValue=l,t=e.textContent,t===l&&t!==""&&t!==null&&(e.value=t)}function et(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var g1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,n,l){var t=n.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?t?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":t?e.setProperty(n,l):typeof l!="number"||l===0||g1.has(n)?n==="float"?e.cssFloat=l:e[n]=(""+l).trim():e[n]=l+"px"}function vf(e,n,l){if(n!=null&&typeof n!="object")throw Error(f(62));if(e=e.style,l!=null){for(var t in l)!l.hasOwnProperty(t)||n!=null&&n.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var u in n)t=n[u],n.hasOwnProperty(u)&&l[u]!==t&&df(e,u,t)}else for(var r in n)n.hasOwnProperty(r)&&df(e,r,n[r])}function Er(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wa(e){return b1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tr=null;function xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nt=null,lt=null;function hf(e){var n=Fl(e);if(n&&(e=n.stateNode)){var l=e[en]||null;e:switch(e=n.stateNode,n.type){case"input":if(br(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<l.length;n++){var t=l[n];if(t!==e&&t.form===e.form){var u=t[en]||null;if(!u)throw Error(f(90));br(t,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<l.length;n++)t=l[n],t.form===e.form&&cf(t)}break e;case"textarea":of(e,l.value,l.defaultValue);break e;case"select":n=l.value,n!=null&&Pl(e,!!l.multiple,n,!1)}}}var Mr=!1;function yf(e,n,l){if(Mr)return e(n,l);Mr=!0;try{var t=e(n);return t}finally{if(Mr=!1,(nt!==null||lt!==null)&&(Hu(),nt&&(n=nt,e=lt,lt=nt=null,hf(n),e)))for(n=0;n<e.length;n++)hf(e[n])}}function Qt(e,n){var l=e.stateNode;if(l===null)return null;var t=l[en]||null;if(t===null)return null;l=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(f(231,n,typeof l));return l}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Or=!1;if(Gn)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){Or=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{Or=!1}var al=null,_r=null,$a=null;function mf(){if($a)return $a;var e,n=_r,l=n.length,t,u="value"in al?al.value:al.textContent,r=u.length;for(e=0;e<l&&n[e]===u[e];e++);var c=l-e;for(t=1;t<=c&&n[l-t]===u[r-t];t++);return $a=u.slice(e,1<t?1-t:void 0)}function Ia(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pa(){return!0}function pf(){return!1}function nn(e){function n(l,t,u,r,c){this._reactName=l,this._targetInst=u,this.type=t,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pa:pf,this.isPropagationStopped=pf,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),n}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=nn(Nl),Jt=O({},Nl,{view:0,detail:0}),A1=nn(Jt),Dr,Cr,Zt,nu=O({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&e.type==="mousemove"?(Dr=e.screenX-Zt.screenX,Cr=e.screenY-Zt.screenY):Cr=Dr=0,Zt=e),Dr)},movementY:function(e){return"movementY"in e?e.movementY:Cr}}),gf=nn(nu),E1=O({},nu,{dataTransfer:0}),T1=nn(E1),x1=O({},Jt,{relatedTarget:0}),Nr=nn(x1),M1=O({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=nn(M1),_1=O({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D1=nn(_1),C1=O({},Nl,{data:0}),Sf=nn(C1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=z1[e])?!!n[e]:!1}function Rr(){return U1}var B1=O({},Jt,{key:function(e){if(e.key){var n=N1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rr,charCode:function(e){return e.type==="keypress"?Ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H1=nn(B1),Y1=O({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=nn(Y1),L1=O({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rr}),j1=nn(L1),q1=O({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),G1=nn(q1),w1=O({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q1=nn(w1),X1=O({},Nl,{newState:0,oldState:0}),J1=nn(X1),Z1=[9,13,27,32],zr=Gn&&"CompositionEvent"in window,Vt=null;Gn&&"documentMode"in document&&(Vt=document.documentMode);var V1=Gn&&"TextEvent"in window&&!Vt,Af=Gn&&(!zr||Vt&&8<Vt&&11>=Vt),Ef=" ",Tf=!1;function xf(e,n){switch(e){case"keyup":return Z1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function K1(e,n){switch(e){case"compositionend":return Mf(n);case"keypress":return n.which!==32?null:(Tf=!0,Ef);case"textInput":return e=n.data,e===Ef&&Tf?null:e;default:return null}}function k1(e,n){if(tt)return e==="compositionend"||!zr&&xf(e,n)?(e=mf(),$a=_r=al=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Af&&n.locale!=="ko"?null:n.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!F1[e.type]:n==="textarea"}function _f(e,n,l,t){nt?lt?lt.push(t):lt=[t]:nt=t,n=wu(n,"onChange"),0<n.length&&(l=new eu("onChange","change",null,l,t),e.push({event:l,listeners:n}))}var Kt=null,kt=null;function W1(e){cd(e,0)}function lu(e){var n=wt(e);if(cf(n))return e}function Df(e,n){if(e==="change")return n}var Cf=!1;if(Gn){var Ur;if(Gn){var Br="oninput"in document;if(!Br){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Br=typeof Nf.oninput=="function"}Ur=Br}else Ur=!1;Cf=Ur&&(!document.documentMode||9<document.documentMode)}function Rf(){Kt&&(Kt.detachEvent("onpropertychange",zf),kt=Kt=null)}function zf(e){if(e.propertyName==="value"&&lu(kt)){var n=[];_f(n,kt,e,xr(e)),yf(W1,n)}}function $1(e,n,l){e==="focusin"?(Rf(),Kt=n,kt=l,Kt.attachEvent("onpropertychange",zf)):e==="focusout"&&Rf()}function I1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lu(kt)}function P1(e,n){if(e==="click")return lu(n)}function ev(e,n){if(e==="input"||e==="change")return lu(n)}function nv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:nv;function Ft(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),t=Object.keys(n);if(l.length!==t.length)return!1;for(t=0;t<l.length;t++){var u=l[t];if(!fr.call(n,u)||!sn(e[u],n[u]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bf(e,n){var l=Uf(e);e=0;for(var t;l;){if(l.nodeType===3){if(t=e+l.textContent.length,e<=n&&t>=n)return{node:l,offset:n-e};e=t}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Uf(l)}}function Hf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Fa(e.document);n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=Fa(e.document)}return n}function Hr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lv=Gn&&"documentMode"in document&&11>=document.documentMode,at=null,Yr=null,Wt=null,Lr=!1;function Lf(e,n,l){var t=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Lr||at==null||at!==Fa(t)||(t=at,"selectionStart"in t&&Hr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Wt&&Ft(Wt,t)||(Wt=t,t=wu(Yr,"onSelect"),0<t.length&&(n=new eu("onSelect","select",null,n,l),e.push({event:n,listeners:t}),n.target=at)))}function Rl(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var ut={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionrun:Rl("Transition","TransitionRun"),transitionstart:Rl("Transition","TransitionStart"),transitioncancel:Rl("Transition","TransitionCancel"),transitionend:Rl("Transition","TransitionEnd")},jr={},jf={};Gn&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete ut.animationend.animation,delete ut.animationiteration.animation,delete ut.animationstart.animation),"TransitionEvent"in window||delete ut.transitionend.transition);function zl(e){if(jr[e])return jr[e];if(!ut[e])return e;var n=ut[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in jf)return jr[e]=n[l];return e}var qf=zl("animationend"),Gf=zl("animationiteration"),wf=zl("animationstart"),tv=zl("transitionrun"),av=zl("transitionstart"),uv=zl("transitioncancel"),Qf=zl("transitionend"),Xf=new Map,qr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qr.push("scrollEnd");function _n(e,n){Xf.set(e,n),Cl(n,[e])}var Jf=new WeakMap;function bn(e,n){if(typeof e=="object"&&e!==null){var l=Jf.get(e);return l!==void 0?l:(n={value:e,source:n,stack:uf(n)},Jf.set(e,n),n)}return{value:e,source:n,stack:uf(n)}}var An=[],rt=0,Gr=0;function tu(){for(var e=rt,n=Gr=rt=0;n<e;){var l=An[n];An[n++]=null;var t=An[n];An[n++]=null;var u=An[n];An[n++]=null;var r=An[n];if(An[n++]=null,t!==null&&u!==null){var c=t.pending;c===null?u.next=u:(u.next=c.next,c.next=u),t.pending=u}r!==0&&Zf(l,u,r)}}function au(e,n,l,t){An[rt++]=e,An[rt++]=n,An[rt++]=l,An[rt++]=t,Gr|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function wr(e,n,l,t){return au(e,n,l,t),uu(e)}function it(e,n){return au(e,null,null,n),uu(e)}function Zf(e,n,l){e.lanes|=l;var t=e.alternate;t!==null&&(t.lanes|=l);for(var u=!1,r=e.return;r!==null;)r.childLanes|=l,t=r.alternate,t!==null&&(t.childLanes|=l),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(u=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,u&&n!==null&&(u=31-on(l),e=r.hiddenUpdates,t=e[u],t===null?e[u]=[n]:t.push(n),n.lane=l|536870912),r):null}function uu(e){if(50<Aa)throw Aa=0,Ki=null,Error(f(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ct={};function rv(e,n,l,t){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,l,t){return new rv(e,n,l,t)}function Qr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wn(e,n){var l=e.alternate;return l===null?(l=dn(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Vf(e,n){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,n=l.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ru(e,n,l,t,u,r){var c=0;if(t=e,typeof e=="function")Qr(e)&&(c=1);else if(typeof e=="string")c=ch(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=dn(31,l,n,u),e.elementType=Se,e.lanes=r,e;case G:return Ul(l.children,u,r,n);case $:c=8,u|=24;break;case ne:return e=dn(12,l,n,u|2),e.elementType=ne,e.lanes=r,e;case te:return e=dn(13,l,n,u),e.elementType=te,e.lanes=r,e;case w:return e=dn(19,l,n,u),e.elementType=w,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:case I:c=10;break e;case V:c=9;break e;case _e:c=11;break e;case P:c=14;break e;case fe:c=16,t=null;break e}c=29,l=Error(f(130,e===null?"null":typeof e,"")),t=null}return n=dn(c,l,n,u),n.elementType=e,n.type=t,n.lanes=r,n}function Ul(e,n,l,t){return e=dn(7,e,t,n),e.lanes=l,e}function Xr(e,n,l){return e=dn(6,e,null,n),e.lanes=l,e}function Jr(e,n,l){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ft=[],ot=0,iu=null,cu=0,En=[],Tn=0,Bl=null,Qn=1,Xn="";function Hl(e,n){ft[ot++]=cu,ft[ot++]=iu,iu=e,cu=n}function Kf(e,n,l){En[Tn++]=Qn,En[Tn++]=Xn,En[Tn++]=Bl,Bl=e;var t=Qn;e=Xn;var u=32-on(t)-1;t&=~(1<<u),l+=1;var r=32-on(n)+u;if(30<r){var c=u-u%5;r=(t&(1<<c)-1).toString(32),t>>=c,u-=c,Qn=1<<32-on(n)+u|l<<u|t,Xn=r+e}else Qn=1<<r|l<<u|t,Xn=e}function Zr(e){e.return!==null&&(Hl(e,1),Kf(e,1,0))}function Vr(e){for(;e===iu;)iu=ft[--ot],ft[ot]=null,cu=ft[--ot],ft[ot]=null;for(;e===Bl;)Bl=En[--Tn],En[Tn]=null,Xn=En[--Tn],En[Tn]=null,Qn=En[--Tn],En[Tn]=null}var We=null,Me=null,de=!1,Yl=null,zn=!1,Kr=Error(f(519));function Ll(e){var n=Error(f(418,""));throw Pt(bn(n,e)),Kr}function kf(e){var n=e.stateNode,l=e.type,t=e.memoizedProps;switch(n[Ve]=e,n[en]=t,l){case"dialog":ie("cancel",n),ie("close",n);break;case"iframe":case"object":case"embed":ie("load",n);break;case"video":case"audio":for(l=0;l<Ta.length;l++)ie(Ta[l],n);break;case"source":ie("error",n);break;case"img":case"image":case"link":ie("error",n),ie("load",n);break;case"details":ie("toggle",n);break;case"input":ie("invalid",n),ff(n,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),ka(n);break;case"select":ie("invalid",n);break;case"textarea":ie("invalid",n),sf(n,t.value,t.defaultValue,t.children),ka(n)}l=t.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||n.textContent===""+l||t.suppressHydrationWarning===!0||dd(n.textContent,l)?(t.popover!=null&&(ie("beforetoggle",n),ie("toggle",n)),t.onScroll!=null&&ie("scroll",n),t.onScrollEnd!=null&&ie("scrollend",n),t.onClick!=null&&(n.onclick=Qu),n=!0):n=!1,n||Ll(e)}function Ff(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:zn=!1;return;case 27:case 3:zn=!0;return;default:We=We.return}}function $t(e){if(e!==We)return!1;if(!de)return Ff(e),de=!0,!1;var n=e.tag,l;if((l=n!==3&&n!==27)&&((l=n===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||fc(e.type,e.memoizedProps)),l=!l),l&&Me&&Ll(e),Ff(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(n===0){Me=Cn(e.nextSibling);break e}n--}else l!=="$"&&l!=="$!"&&l!=="$?"||n++;e=e.nextSibling}Me=null}}else n===27?(n=Me,bl(e.type)?(e=vc,vc=null,Me=e):Me=n):Me=We?Cn(e.stateNode.nextSibling):null;return!0}function It(){Me=We=null,de=!1}function Wf(){var e=Yl;return e!==null&&(an===null?an=e:an.push.apply(an,e),Yl=null),e}function Pt(e){Yl===null?Yl=[e]:Yl.push(e)}var kr=z(null),jl=null,Jn=null;function ul(e,n,l){Y(kr,n._currentValue),n._currentValue=l}function Zn(e){e._currentValue=kr.current,j(kr)}function Fr(e,n,l){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===l)break;e=e.return}}function Wr(e,n,l,t){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var r=u.dependencies;if(r!==null){var c=u.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=u;for(var h=0;h<n.length;h++)if(s.context===n[h]){r.lanes|=l,s=r.alternate,s!==null&&(s.lanes|=l),Fr(r.return,l,e),t||(c=null);break e}r=s.next}}else if(u.tag===18){if(c=u.return,c===null)throw Error(f(341));c.lanes|=l,r=c.alternate,r!==null&&(r.lanes|=l),Fr(c,l,e),c=null}else c=u.child;if(c!==null)c.return=u;else for(c=u;c!==null;){if(c===e){c=null;break}if(u=c.sibling,u!==null){u.return=c.return,c=u;break}c=c.return}u=c}}function ea(e,n,l,t){e=null;for(var u=n,r=!1;u!==null;){if(!r){if((u.flags&524288)!==0)r=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var c=u.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var s=u.type;sn(u.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(u===cn.current){if(c=u.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ca):e=[Ca])}u=u.return}e!==null&&Wr(n,e,l,t),n.flags|=262144}function fu(e){for(e=e.firstContext;e!==null;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ql(e){jl=e,Jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return $f(jl,e)}function ou(e,n){return jl===null&&ql(e),$f(e,n)}function $f(e,n){var l=n._currentValue;if(n={context:n,memoizedValue:l,next:null},Jn===null){if(e===null)throw Error(f(308));Jn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Jn=Jn.next=n;return l}var iv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(l,t){e.push(t)}};this.abort=function(){n.aborted=!0,e.forEach(function(l){return l()})}},cv=a.unstable_scheduleCallback,fv=a.unstable_NormalPriority,He={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $r(){return{controller:new iv,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&cv(fv,function(){e.controller.abort()})}var la=null,Ir=0,st=0,dt=null;function ov(e,n){if(la===null){var l=la=[];Ir=0,st=ec(),dt={status:"pending",value:void 0,then:function(t){l.push(t)}}}return Ir++,n.then(If,If),n}function If(){if(--Ir===0&&la!==null){dt!==null&&(dt.status="fulfilled");var e=la;la=null,st=0,dt=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sv(e,n){var l=[],t={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return e.then(function(){t.status="fulfilled",t.value=n;for(var u=0;u<l.length;u++)(0,l[u])(n)},function(u){for(t.status="rejected",t.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),t}var Pf=_.S;_.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ov(e,n),Pf!==null&&Pf(e,n)};var Gl=z(null);function Pr(){var e=Gl.current;return e!==null?e:Ae.pooledCache}function su(e,n){n===null?Y(Gl,Gl.current):Y(Gl,n.pool)}function eo(){var e=Pr();return e===null?null:{parent:He._currentValue,pool:e}}var ta=Error(f(460)),no=Error(f(474)),du=Error(f(542)),ei={then:function(){}};function lo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vu(){}function to(e,n,l){switch(l=e[l],l===void 0?e.push(n):l!==n&&(n.then(vu,vu),n=l),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,uo(e),e;default:if(typeof n.status=="string")n.then(vu,vu);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=n,e.status="pending",e.then(function(t){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=t}},function(t){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=t}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,uo(e),e}throw aa=n,ta}}var aa=null;function ao(){if(aa===null)throw Error(f(459));var e=aa;return aa=null,e}function uo(e){if(e===ta||e===du)throw Error(f(483))}var rl=!1;function ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function li(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function il(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,n,l){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(he&2)!==0){var u=t.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),t.pending=n,n=uu(e),Zf(e,null,l),n}return au(e,t,n,l),uu(e)}function ua(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194048)!==0)){var t=n.lanes;t&=e.pendingLanes,l|=t,n.lanes=l,$c(e,l)}}function ti(e,n){var l=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,l===t)){var u=null,r=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};r===null?u=r=c:r=r.next=c,l=l.next}while(l!==null);r===null?u=r=n:r=r.next=n}else u=r=n;l={baseState:t.baseState,firstBaseUpdate:u,lastBaseUpdate:r,shared:t.shared,callbacks:t.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}var ai=!1;function ra(){if(ai){var e=dt;if(e!==null)throw e}}function ia(e,n,l,t){ai=!1;var u=e.updateQueue;rl=!1;var r=u.firstBaseUpdate,c=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,T=h.next;h.next=null,c===null?r=T:c.next=T,c=h;var D=e.alternate;D!==null&&(D=D.updateQueue,s=D.lastBaseUpdate,s!==c&&(s===null?D.firstBaseUpdate=T:s.next=T,D.lastBaseUpdate=h))}if(r!==null){var R=u.baseState;c=0,D=T=h=null,s=r;do{var x=s.lane&-536870913,M=x!==s.lane;if(M?(ce&x)===x:(t&x)===x){x!==0&&x===st&&(ai=!0),D!==null&&(D=D.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var W=e,k=s;x=n;var ge=l;switch(k.tag){case 1:if(W=k.payload,typeof W=="function"){R=W.call(ge,R,x);break e}R=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=k.payload,x=typeof W=="function"?W.call(ge,R,x):W,x==null)break e;R=O({},R,x);break e;case 2:rl=!0}}x=s.callback,x!==null&&(e.flags|=64,M&&(e.flags|=8192),M=u.callbacks,M===null?u.callbacks=[x]:M.push(x))}else M={lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},D===null?(T=D=M,h=R):D=D.next=M,c|=x;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;M=s,s=M.next,M.next=null,u.lastBaseUpdate=M,u.shared.pending=null}}while(!0);D===null&&(h=R),u.baseState=h,u.firstBaseUpdate=T,u.lastBaseUpdate=D,r===null&&(u.shared.lanes=0),ml|=c,e.lanes=c,e.memoizedState=R}}function ro(e,n){if(typeof e!="function")throw Error(f(191,e));e.call(n)}function io(e,n){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)ro(l[e],n)}var vt=z(null),hu=z(0);function co(e,n){e=In,Y(hu,e),Y(vt,n),In=e|n.baseLanes}function ui(){Y(hu,In),Y(vt,vt.current)}function ri(){In=hu.current,j(vt),j(hu)}var fl=0,ae=null,me=null,Re=null,yu=!1,ht=!1,wl=!1,mu=0,ca=0,yt=null,dv=0;function Ce(){throw Error(f(321))}function ii(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!sn(e[l],n[l]))return!1;return!0}function ci(e,n,l,t,u,r){return fl=r,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_.H=e===null||e.memoizedState===null?Vo:Ko,wl=!1,r=l(t,u),wl=!1,ht&&(r=oo(n,l,t,u)),fo(e),r}function fo(e){_.H=Eu;var n=me!==null&&me.next!==null;if(fl=0,Re=me=ae=null,yu=!1,ca=0,yt=null,n)throw Error(f(300));e===null||qe||(e=e.dependencies,e!==null&&fu(e)&&(qe=!0))}function oo(e,n,l,t){ae=e;var u=0;do{if(ht&&(yt=null),ca=0,ht=!1,25<=u)throw Error(f(301));if(u+=1,Re=me=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=Sv,r=n(l,t)}while(ht);return r}function vv(){var e=_.H,n=e.useState()[0];return n=typeof n.then=="function"?fa(n):n,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ae.flags|=1024),n}function fi(){var e=mu!==0;return mu=0,e}function oi(e,n,l){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l}function si(e){if(yu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yu=!1}fl=0,Re=me=ae=null,ht=!1,ca=mu=0,yt=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ae.memoizedState=Re=e:Re=Re.next=e,Re}function ze(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var n=Re===null?ae.memoizedState:Re.next;if(n!==null)Re=n,me=e;else{if(e===null)throw ae.alternate===null?Error(f(467)):Error(f(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Re===null?ae.memoizedState=Re=e:Re=Re.next=e}return Re}function di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fa(e){var n=ca;return ca+=1,yt===null&&(yt=[]),e=to(yt,e,n),n=ae,(Re===null?n.memoizedState:Re.next)===null&&(n=n.alternate,_.H=n===null||n.memoizedState===null?Vo:Ko),e}function pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fa(e);if(e.$$typeof===I)return Ke(e)}throw Error(f(438,String(e)))}function vi(e){var n=null,l=ae.updateQueue;if(l!==null&&(n=l.memoCache),n==null){var t=ae.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(n={data:t.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),l===null&&(l=di(),ae.updateQueue=l),l.memoCache=n,l=n.data[n.index],l===void 0)for(l=n.data[n.index]=Array(e),t=0;t<e;t++)l[t]=Ie;return n.index++,l}function Vn(e,n){return typeof n=="function"?n(e):n}function gu(e){var n=ze();return hi(n,me,e)}function hi(e,n,l){var t=e.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=l;var u=e.baseQueue,r=t.pending;if(r!==null){if(u!==null){var c=u.next;u.next=r.next,r.next=c}n.baseQueue=u=r,t.pending=null}if(r=e.baseState,u===null)e.memoizedState=r;else{n=u.next;var s=c=null,h=null,T=n,D=!1;do{var R=T.lane&-536870913;if(R!==T.lane?(ce&R)===R:(fl&R)===R){var x=T.revertLane;if(x===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),R===st&&(D=!0);else if((fl&x)===x){T=T.next,x===st&&(D=!0);continue}else R={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},h===null?(s=h=R,c=r):h=h.next=R,ae.lanes|=x,ml|=x;R=T.action,wl&&l(r,R),r=T.hasEagerState?T.eagerState:l(r,R)}else x={lane:R,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},h===null?(s=h=x,c=r):h=h.next=x,ae.lanes|=R,ml|=R;T=T.next}while(T!==null&&T!==n);if(h===null?c=r:h.next=s,!sn(r,e.memoizedState)&&(qe=!0,D&&(l=dt,l!==null)))throw l;e.memoizedState=r,e.baseState=c,e.baseQueue=h,t.lastRenderedState=r}return u===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function yi(e){var n=ze(),l=n.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=e;var t=l.dispatch,u=l.pending,r=n.memoizedState;if(u!==null){l.pending=null;var c=u=u.next;do r=e(r,c.action),c=c.next;while(c!==u);sn(r,n.memoizedState)||(qe=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),l.lastRenderedState=r}return[r,t]}function so(e,n,l){var t=ae,u=ze(),r=de;if(r){if(l===void 0)throw Error(f(407));l=l()}else l=n();var c=!sn((me||u).memoizedState,l);c&&(u.memoizedState=l,qe=!0),u=u.queue;var s=yo.bind(null,t,u,e);if(oa(2048,8,s,[e]),u.getSnapshot!==n||c||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,mt(9,Su(),ho.bind(null,t,u,l,n),null),Ae===null)throw Error(f(349));r||(fl&124)!==0||vo(t,n,l)}return l}function vo(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=ae.updateQueue,n===null?(n=di(),ae.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function ho(e,n,l,t){n.value=l,n.getSnapshot=t,mo(n)&&po(e)}function yo(e,n,l){return l(function(){mo(n)&&po(e)})}function mo(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!sn(e,l)}catch{return!0}}function po(e){var n=it(e,2);n!==null&&pn(n,e,2)}function mi(e){var n=ln();if(typeof e=="function"){var l=e;if(e=l(),wl){ll(!0);try{l()}finally{ll(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},n}function go(e,n,l,t){return e.baseState=l,hi(e,me,typeof t=="function"?t:Vn)}function hv(e,n,l,t,u){if(Au(e))throw Error(f(485));if(e=n.action,e!==null){var r={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};_.T!==null?l(!0):r.isTransition=!1,t(r),l=n.pending,l===null?(r.next=n.pending=r,So(n,r)):(r.next=l.next,n.pending=l.next=r)}}function So(e,n){var l=n.action,t=n.payload,u=e.state;if(n.isTransition){var r=_.T,c={};_.T=c;try{var s=l(u,t),h=_.S;h!==null&&h(c,s),bo(e,n,s)}catch(T){pi(e,n,T)}finally{_.T=r}}else try{r=l(u,t),bo(e,n,r)}catch(T){pi(e,n,T)}}function bo(e,n,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(t){Ao(e,n,t)},function(t){return pi(e,n,t)}):Ao(e,n,l)}function Ao(e,n,l){n.status="fulfilled",n.value=l,Eo(n),e.state=l,n=e.pending,n!==null&&(l=n.next,l===n?e.pending=null:(l=l.next,n.next=l,So(e,l)))}function pi(e,n,l){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do n.status="rejected",n.reason=l,Eo(n),n=n.next;while(n!==t)}e.action=null}function Eo(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function To(e,n){return n}function xo(e,n){if(de){var l=Ae.formState;if(l!==null){e:{var t=ae;if(de){if(Me){n:{for(var u=Me,r=zn;u.nodeType!==8;){if(!r){u=null;break n}if(u=Cn(u.nextSibling),u===null){u=null;break n}}r=u.data,u=r==="F!"||r==="F"?u:null}if(u){Me=Cn(u.nextSibling),t=u.data==="F!";break e}}Ll(t)}t=!1}t&&(n=l[0])}}return l=ln(),l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},l.queue=t,l=Xo.bind(null,ae,t),t.dispatch=l,t=mi(!1),r=Ei.bind(null,ae,!1,t.queue),t=ln(),u={state:n,dispatch:null,action:e,pending:null},t.queue=u,l=hv.bind(null,ae,u,r,l),u.dispatch=l,t.memoizedState=e,[n,l,!1]}function Mo(e){var n=ze();return Oo(n,me,e)}function Oo(e,n,l){if(n=hi(e,n,To)[0],e=gu(Vn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var t=fa(n)}catch(c){throw c===ta?du:c}else t=n;n=ze();var u=n.queue,r=u.dispatch;return l!==n.memoizedState&&(ae.flags|=2048,mt(9,Su(),yv.bind(null,u,l),null)),[t,r,e]}function yv(e,n){e.action=n}function _o(e){var n=ze(),l=me;if(l!==null)return Oo(n,l,e);ze(),n=n.memoizedState,l=ze();var t=l.queue.dispatch;return l.memoizedState=e,[n,t,!1]}function mt(e,n,l,t){return e={tag:e,create:l,deps:t,inst:n,next:null},n=ae.updateQueue,n===null&&(n=di(),ae.updateQueue=n),l=n.lastEffect,l===null?n.lastEffect=e.next=e:(t=l.next,l.next=e,e.next=t,n.lastEffect=e),e}function Su(){return{destroy:void 0,resource:void 0}}function Do(){return ze().memoizedState}function bu(e,n,l,t){var u=ln();t=t===void 0?null:t,ae.flags|=e,u.memoizedState=mt(1|n,Su(),l,t)}function oa(e,n,l,t){var u=ze();t=t===void 0?null:t;var r=u.memoizedState.inst;me!==null&&t!==null&&ii(t,me.memoizedState.deps)?u.memoizedState=mt(n,r,l,t):(ae.flags|=e,u.memoizedState=mt(1|n,r,l,t))}function Co(e,n){bu(8390656,8,e,n)}function No(e,n){oa(2048,8,e,n)}function Ro(e,n){return oa(4,2,e,n)}function zo(e,n){return oa(4,4,e,n)}function Uo(e,n){if(typeof n=="function"){e=e();var l=n(e);return function(){typeof l=="function"?l():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bo(e,n,l){l=l!=null?l.concat([e]):null,oa(4,4,Uo.bind(null,n,e),l)}function gi(){}function Ho(e,n){var l=ze();n=n===void 0?null:n;var t=l.memoizedState;return n!==null&&ii(n,t[1])?t[0]:(l.memoizedState=[e,n],e)}function Yo(e,n){var l=ze();n=n===void 0?null:n;var t=l.memoizedState;if(n!==null&&ii(n,t[1]))return t[0];if(t=e(),wl){ll(!0);try{e()}finally{ll(!1)}}return l.memoizedState=[t,n],t}function Si(e,n,l){return l===void 0||(fl&1073741824)!==0?e.memoizedState=n:(e.memoizedState=l,e=qs(),ae.lanes|=e,ml|=e,l)}function Lo(e,n,l,t){return sn(l,n)?l:vt.current!==null?(e=Si(e,l,t),sn(e,n)||(qe=!0),e):(fl&42)===0?(qe=!0,e.memoizedState=l):(e=qs(),ae.lanes|=e,ml|=e,n)}function jo(e,n,l,t,u){var r=H.p;H.p=r!==0&&8>r?r:8;var c=_.T,s={};_.T=s,Ei(e,!1,n,l);try{var h=u(),T=_.S;if(T!==null&&T(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var D=sv(h,t);sa(e,n,D,mn(e))}else sa(e,n,t,mn(e))}catch(R){sa(e,n,{then:function(){},status:"rejected",reason:R},mn())}finally{H.p=r,_.T=c}}function mv(){}function bi(e,n,l,t){if(e.tag!==5)throw Error(f(476));var u=qo(e).queue;jo(e,u,n,Z,l===null?mv:function(){return Go(e),l(t)})}function qo(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:Z},next:null};var l={};return n.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:l},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Go(e){var n=qo(e).next.queue;sa(e,n,{},mn())}function Ai(){return Ke(Ca)}function wo(){return ze().memoizedState}function Qo(){return ze().memoizedState}function pv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var l=mn();e=il(l);var t=cl(n,e,l);t!==null&&(pn(t,n,l),ua(t,n,l)),n={cache:$r()},e.payload=n;return}n=n.return}}function gv(e,n,l){var t=mn();l={lane:t,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Au(e)?Jo(n,l):(l=wr(e,n,l,t),l!==null&&(pn(l,e,t),Zo(l,n,t)))}function Xo(e,n,l){var t=mn();sa(e,n,l,t)}function sa(e,n,l,t){var u={lane:t,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Jo(n,u);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var c=n.lastRenderedState,s=r(c,l);if(u.hasEagerState=!0,u.eagerState=s,sn(s,c))return au(e,n,u,0),Ae===null&&tu(),!1}catch{}finally{}if(l=wr(e,n,u,t),l!==null)return pn(l,e,t),Zo(l,n,t),!0}return!1}function Ei(e,n,l,t){if(t={lane:2,revertLane:ec(),action:t,hasEagerState:!1,eagerState:null,next:null},Au(e)){if(n)throw Error(f(479))}else n=wr(e,l,t,2),n!==null&&pn(n,e,2)}function Au(e){var n=e.alternate;return e===ae||n!==null&&n===ae}function Jo(e,n){ht=yu=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function Zo(e,n,l){if((l&4194048)!==0){var t=n.lanes;t&=e.pendingLanes,l|=t,n.lanes=l,$c(e,l)}}var Eu={readContext:Ke,use:pu,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce},Vo={readContext:Ke,use:pu,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:Ke,useEffect:Co,useImperativeHandle:function(e,n,l){l=l!=null?l.concat([e]):null,bu(4194308,4,Uo.bind(null,n,e),l)},useLayoutEffect:function(e,n){return bu(4194308,4,e,n)},useInsertionEffect:function(e,n){bu(4,2,e,n)},useMemo:function(e,n){var l=ln();n=n===void 0?null:n;var t=e();if(wl){ll(!0);try{e()}finally{ll(!1)}}return l.memoizedState=[t,n],t},useReducer:function(e,n,l){var t=ln();if(l!==void 0){var u=l(n);if(wl){ll(!0);try{l(n)}finally{ll(!1)}}}else u=n;return t.memoizedState=t.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},t.queue=e,e=e.dispatch=gv.bind(null,ae,e),[t.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:function(e){e=mi(e);var n=e.queue,l=Xo.bind(null,ae,n);return n.dispatch=l,[e.memoizedState,l]},useDebugValue:gi,useDeferredValue:function(e,n){var l=ln();return Si(l,e,n)},useTransition:function(){var e=mi(!1);return e=jo.bind(null,ae,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,l){var t=ae,u=ln();if(de){if(l===void 0)throw Error(f(407));l=l()}else{if(l=n(),Ae===null)throw Error(f(349));(ce&124)!==0||vo(t,n,l)}u.memoizedState=l;var r={value:l,getSnapshot:n};return u.queue=r,Co(yo.bind(null,t,r,e),[e]),t.flags|=2048,mt(9,Su(),ho.bind(null,t,r,l,n),null),l},useId:function(){var e=ln(),n=Ae.identifierPrefix;if(de){var l=Xn,t=Qn;l=(t&~(1<<32-on(t)-1)).toString(32)+l,n="«"+n+"R"+l,l=mu++,0<l&&(n+="H"+l.toString(32)),n+="»"}else l=dv++,n="«"+n+"r"+l.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ai,useFormState:xo,useActionState:xo,useOptimistic:function(e){var n=ln();n.memoizedState=n.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=l,n=Ei.bind(null,ae,!0,l),l.dispatch=n,[e,n]},useMemoCache:vi,useCacheRefresh:function(){return ln().memoizedState=pv.bind(null,ae)}},Ko={readContext:Ke,use:pu,useCallback:Ho,useContext:Ke,useEffect:No,useImperativeHandle:Bo,useInsertionEffect:Ro,useLayoutEffect:zo,useMemo:Yo,useReducer:gu,useRef:Do,useState:function(){return gu(Vn)},useDebugValue:gi,useDeferredValue:function(e,n){var l=ze();return Lo(l,me.memoizedState,e,n)},useTransition:function(){var e=gu(Vn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:fa(e),n]},useSyncExternalStore:so,useId:wo,useHostTransitionStatus:Ai,useFormState:Mo,useActionState:Mo,useOptimistic:function(e,n){var l=ze();return go(l,me,e,n)},useMemoCache:vi,useCacheRefresh:Qo},Sv={readContext:Ke,use:pu,useCallback:Ho,useContext:Ke,useEffect:No,useImperativeHandle:Bo,useInsertionEffect:Ro,useLayoutEffect:zo,useMemo:Yo,useReducer:yi,useRef:Do,useState:function(){return yi(Vn)},useDebugValue:gi,useDeferredValue:function(e,n){var l=ze();return me===null?Si(l,e,n):Lo(l,me.memoizedState,e,n)},useTransition:function(){var e=yi(Vn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:fa(e),n]},useSyncExternalStore:so,useId:wo,useHostTransitionStatus:Ai,useFormState:_o,useActionState:_o,useOptimistic:function(e,n){var l=ze();return me!==null?go(l,me,e,n):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:vi,useCacheRefresh:Qo},pt=null,da=0;function Tu(e){var n=da;return da+=1,pt===null&&(pt=[]),to(pt,e,n)}function va(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xu(e,n){throw n.$$typeof===N?Error(f(525)):(e=Object.prototype.toString.call(n),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ko(e){var n=e._init;return n(e._payload)}function Fo(e){function n(A,S){if(e){var E=A.deletions;E===null?(A.deletions=[S],A.flags|=16):E.push(S)}}function l(A,S){if(!e)return null;for(;S!==null;)n(A,S),S=S.sibling;return null}function t(A){for(var S=new Map;A!==null;)A.key!==null?S.set(A.key,A):S.set(A.index,A),A=A.sibling;return S}function u(A,S){return A=wn(A,S),A.index=0,A.sibling=null,A}function r(A,S,E){return A.index=E,e?(E=A.alternate,E!==null?(E=E.index,E<S?(A.flags|=67108866,S):E):(A.flags|=67108866,S)):(A.flags|=1048576,S)}function c(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function s(A,S,E,C){return S===null||S.tag!==6?(S=Xr(E,A.mode,C),S.return=A,S):(S=u(S,E),S.return=A,S)}function h(A,S,E,C){var q=E.type;return q===G?D(A,S,E.props.children,C,E.key):S!==null&&(S.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===fe&&ko(q)===S.type)?(S=u(S,E.props),va(S,E),S.return=A,S):(S=ru(E.type,E.key,E.props,null,A.mode,C),va(S,E),S.return=A,S)}function T(A,S,E,C){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=Jr(E,A.mode,C),S.return=A,S):(S=u(S,E.children||[]),S.return=A,S)}function D(A,S,E,C,q){return S===null||S.tag!==7?(S=Ul(E,A.mode,C,q),S.return=A,S):(S=u(S,E),S.return=A,S)}function R(A,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Xr(""+S,A.mode,E),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return E=ru(S.type,S.key,S.props,null,A.mode,E),va(E,S),E.return=A,E;case B:return S=Jr(S,A.mode,E),S.return=A,S;case fe:var C=S._init;return S=C(S._payload),R(A,S,E)}if(Be(S)||De(S))return S=Ul(S,A.mode,E,null),S.return=A,S;if(typeof S.then=="function")return R(A,Tu(S),E);if(S.$$typeof===I)return R(A,ou(A,S),E);xu(A,S)}return null}function x(A,S,E,C){var q=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return q!==null?null:s(A,S,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case U:return E.key===q?h(A,S,E,C):null;case B:return E.key===q?T(A,S,E,C):null;case fe:return q=E._init,E=q(E._payload),x(A,S,E,C)}if(Be(E)||De(E))return q!==null?null:D(A,S,E,C,null);if(typeof E.then=="function")return x(A,S,Tu(E),C);if(E.$$typeof===I)return x(A,S,ou(A,E),C);xu(A,E)}return null}function M(A,S,E,C,q){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return A=A.get(E)||null,s(S,A,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return A=A.get(C.key===null?E:C.key)||null,h(S,A,C,q);case B:return A=A.get(C.key===null?E:C.key)||null,T(S,A,C,q);case fe:var ue=C._init;return C=ue(C._payload),M(A,S,E,C,q)}if(Be(C)||De(C))return A=A.get(E)||null,D(S,A,C,q,null);if(typeof C.then=="function")return M(A,S,E,Tu(C),q);if(C.$$typeof===I)return M(A,S,E,ou(S,C),q);xu(S,C)}return null}function W(A,S,E,C){for(var q=null,ue=null,Q=S,F=S=0,we=null;Q!==null&&F<E.length;F++){Q.index>F?(we=Q,Q=null):we=Q.sibling;var se=x(A,Q,E[F],C);if(se===null){Q===null&&(Q=we);break}e&&Q&&se.alternate===null&&n(A,Q),S=r(se,S,F),ue===null?q=se:ue.sibling=se,ue=se,Q=we}if(F===E.length)return l(A,Q),de&&Hl(A,F),q;if(Q===null){for(;F<E.length;F++)Q=R(A,E[F],C),Q!==null&&(S=r(Q,S,F),ue===null?q=Q:ue.sibling=Q,ue=Q);return de&&Hl(A,F),q}for(Q=t(Q);F<E.length;F++)we=M(Q,A,F,E[F],C),we!==null&&(e&&we.alternate!==null&&Q.delete(we.key===null?F:we.key),S=r(we,S,F),ue===null?q=we:ue.sibling=we,ue=we);return e&&Q.forEach(function(Ml){return n(A,Ml)}),de&&Hl(A,F),q}function k(A,S,E,C){if(E==null)throw Error(f(151));for(var q=null,ue=null,Q=S,F=S=0,we=null,se=E.next();Q!==null&&!se.done;F++,se=E.next()){Q.index>F?(we=Q,Q=null):we=Q.sibling;var Ml=x(A,Q,se.value,C);if(Ml===null){Q===null&&(Q=we);break}e&&Q&&Ml.alternate===null&&n(A,Q),S=r(Ml,S,F),ue===null?q=Ml:ue.sibling=Ml,ue=Ml,Q=we}if(se.done)return l(A,Q),de&&Hl(A,F),q;if(Q===null){for(;!se.done;F++,se=E.next())se=R(A,se.value,C),se!==null&&(S=r(se,S,F),ue===null?q=se:ue.sibling=se,ue=se);return de&&Hl(A,F),q}for(Q=t(Q);!se.done;F++,se=E.next())se=M(Q,A,F,se.value,C),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?F:se.key),S=r(se,S,F),ue===null?q=se:ue.sibling=se,ue=se);return e&&Q.forEach(function(bh){return n(A,bh)}),de&&Hl(A,F),q}function ge(A,S,E,C){if(typeof E=="object"&&E!==null&&E.type===G&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case U:e:{for(var q=E.key;S!==null;){if(S.key===q){if(q=E.type,q===G){if(S.tag===7){l(A,S.sibling),C=u(S,E.props.children),C.return=A,A=C;break e}}else if(S.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===fe&&ko(q)===S.type){l(A,S.sibling),C=u(S,E.props),va(C,E),C.return=A,A=C;break e}l(A,S);break}else n(A,S);S=S.sibling}E.type===G?(C=Ul(E.props.children,A.mode,C,E.key),C.return=A,A=C):(C=ru(E.type,E.key,E.props,null,A.mode,C),va(C,E),C.return=A,A=C)}return c(A);case B:e:{for(q=E.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){l(A,S.sibling),C=u(S,E.children||[]),C.return=A,A=C;break e}else{l(A,S);break}else n(A,S);S=S.sibling}C=Jr(E,A.mode,C),C.return=A,A=C}return c(A);case fe:return q=E._init,E=q(E._payload),ge(A,S,E,C)}if(Be(E))return W(A,S,E,C);if(De(E)){if(q=De(E),typeof q!="function")throw Error(f(150));return E=q.call(E),k(A,S,E,C)}if(typeof E.then=="function")return ge(A,S,Tu(E),C);if(E.$$typeof===I)return ge(A,S,ou(A,E),C);xu(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(l(A,S.sibling),C=u(S,E),C.return=A,A=C):(l(A,S),C=Xr(E,A.mode,C),C.return=A,A=C),c(A)):l(A,S)}return function(A,S,E,C){try{da=0;var q=ge(A,S,E,C);return pt=null,q}catch(Q){if(Q===ta||Q===du)throw Q;var ue=dn(29,Q,null,A.mode);return ue.lanes=C,ue.return=A,ue}finally{}}}var gt=Fo(!0),Wo=Fo(!1),xn=z(null),Un=null;function ol(e){var n=e.alternate;Y(Ye,Ye.current&1),Y(xn,e),Un===null&&(n===null||vt.current!==null||n.memoizedState!==null)&&(Un=e)}function $o(e){if(e.tag===22){if(Y(Ye,Ye.current),Y(xn,e),Un===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Un=e)}}else sl()}function sl(){Y(Ye,Ye.current),Y(xn,xn.current)}function Kn(e){j(xn),Un===e&&(Un=null),j(Ye)}var Ye=z(0);function Mu(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||dc(l)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ti(e,n,l,t){n=e.memoizedState,l=l(t,n),l=l==null?n:O({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var xi={enqueueSetState:function(e,n,l){e=e._reactInternals;var t=mn(),u=il(t);u.payload=n,l!=null&&(u.callback=l),n=cl(e,u,t),n!==null&&(pn(n,e,t),ua(n,e,t))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var t=mn(),u=il(t);u.tag=1,u.payload=n,l!=null&&(u.callback=l),n=cl(e,u,t),n!==null&&(pn(n,e,t),ua(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=mn(),t=il(l);t.tag=2,n!=null&&(t.callback=n),n=cl(e,t,l),n!==null&&(pn(n,e,l),ua(n,e,l))}};function Io(e,n,l,t,u,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,r,c):n.prototype&&n.prototype.isPureReactComponent?!Ft(l,t)||!Ft(u,r):!0}function Po(e,n,l,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,t),n.state!==e&&xi.enqueueReplaceState(n,n.state,null)}function Ql(e,n){var l=n;if("ref"in n){l={};for(var t in n)t!=="ref"&&(l[t]=n[t])}if(e=e.defaultProps){l===n&&(l=O({},l));for(var u in e)l[u]===void 0&&(l[u]=e[u])}return l}var Ou=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function es(e){Ou(e)}function ns(e){console.error(e)}function ls(e){Ou(e)}function _u(e,n){try{var l=e.onUncaughtError;l(n.value,{componentStack:n.stack})}catch(t){setTimeout(function(){throw t})}}function ts(e,n,l){try{var t=e.onCaughtError;t(l.value,{componentStack:l.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mi(e,n,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){_u(e,n)},l}function as(e){return e=il(e),e.tag=3,e}function us(e,n,l,t){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var r=t.value;e.payload=function(){return u(r)},e.callback=function(){ts(n,l,t)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){ts(n,l,t),typeof u!="function"&&(pl===null?pl=new Set([this]):pl.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})})}function bv(e,n,l,t,u){if(l.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(n=l.alternate,n!==null&&ea(n,l,u,!0),l=xn.current,l!==null){switch(l.tag){case 13:return Un===null?Fi():l.alternate===null&&Oe===0&&(Oe=3),l.flags&=-257,l.flags|=65536,l.lanes=u,t===ei?l.flags|=16384:(n=l.updateQueue,n===null?l.updateQueue=new Set([t]):n.add(t),$i(e,t,u)),!1;case 22:return l.flags|=65536,t===ei?l.flags|=16384:(n=l.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([t])},l.updateQueue=n):(l=n.retryQueue,l===null?n.retryQueue=new Set([t]):l.add(t)),$i(e,t,u)),!1}throw Error(f(435,l.tag))}return $i(e,t,u),Fi(),!1}if(de)return n=xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,t!==Kr&&(e=Error(f(422),{cause:t}),Pt(bn(e,l)))):(t!==Kr&&(n=Error(f(423),{cause:t}),Pt(bn(n,l))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,t=bn(t,l),u=Mi(e.stateNode,t,u),ti(e,u),Oe!==4&&(Oe=2)),!1;var r=Error(f(520),{cause:t});if(r=bn(r,l),ba===null?ba=[r]:ba.push(r),Oe!==4&&(Oe=2),n===null)return!0;t=bn(t,l),l=n;do{switch(l.tag){case 3:return l.flags|=65536,e=u&-u,l.lanes|=e,e=Mi(l.stateNode,t,e),ti(l,e),!1;case 1:if(n=l.type,r=l.stateNode,(l.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(pl===null||!pl.has(r))))return l.flags|=65536,u&=-u,l.lanes|=u,u=as(u),us(u,e,l,t),ti(l,u),!1}l=l.return}while(l!==null);return!1}var rs=Error(f(461)),qe=!1;function Qe(e,n,l,t){n.child=e===null?Wo(n,null,l,t):gt(n,e.child,l,t)}function is(e,n,l,t,u){l=l.render;var r=n.ref;if("ref"in t){var c={};for(var s in t)s!=="ref"&&(c[s]=t[s])}else c=t;return ql(n),t=ci(e,n,l,c,r,u),s=fi(),e!==null&&!qe?(oi(e,n,u),kn(e,n,u)):(de&&s&&Zr(n),n.flags|=1,Qe(e,n,t,u),n.child)}function cs(e,n,l,t,u){if(e===null){var r=l.type;return typeof r=="function"&&!Qr(r)&&r.defaultProps===void 0&&l.compare===null?(n.tag=15,n.type=r,fs(e,n,r,t,u)):(e=ru(l.type,null,t,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!Ui(e,u)){var c=r.memoizedProps;if(l=l.compare,l=l!==null?l:Ft,l(c,t)&&e.ref===n.ref)return kn(e,n,u)}return n.flags|=1,e=wn(r,t),e.ref=n.ref,e.return=n,n.child=e}function fs(e,n,l,t,u){if(e!==null){var r=e.memoizedProps;if(Ft(r,t)&&e.ref===n.ref)if(qe=!1,n.pendingProps=t=r,Ui(e,u))(e.flags&131072)!==0&&(qe=!0);else return n.lanes=e.lanes,kn(e,n,u)}return Oi(e,n,l,t,u)}function os(e,n,l){var t=n.pendingProps,u=t.children,r=e!==null?e.memoizedState:null;if(t.mode==="hidden"){if((n.flags&128)!==0){if(t=r!==null?r.baseLanes|l:l,e!==null){for(u=n.child=e.child,r=0;u!==null;)r=r|u.lanes|u.childLanes,u=u.sibling;n.childLanes=r&~t}else n.childLanes=0,n.child=null;return ss(e,n,t,l)}if((l&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&su(n,r!==null?r.cachePool:null),r!==null?co(n,r):ui(),$o(n);else return n.lanes=n.childLanes=536870912,ss(e,n,r!==null?r.baseLanes|l:l,l)}else r!==null?(su(n,r.cachePool),co(n,r),sl(),n.memoizedState=null):(e!==null&&su(n,null),ui(),sl());return Qe(e,n,u,l),n.child}function ss(e,n,l,t){var u=Pr();return u=u===null?null:{parent:He._currentValue,pool:u},n.memoizedState={baseLanes:l,cachePool:u},e!==null&&su(n,null),ui(),$o(n),e!==null&&ea(e,n,t,!0),null}function Du(e,n){var l=n.ref;if(l===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(e===null||e.ref!==l)&&(n.flags|=4194816)}}function Oi(e,n,l,t,u){return ql(n),l=ci(e,n,l,t,void 0,u),t=fi(),e!==null&&!qe?(oi(e,n,u),kn(e,n,u)):(de&&t&&Zr(n),n.flags|=1,Qe(e,n,l,u),n.child)}function ds(e,n,l,t,u,r){return ql(n),n.updateQueue=null,l=oo(n,t,l,u),fo(e),t=fi(),e!==null&&!qe?(oi(e,n,r),kn(e,n,r)):(de&&t&&Zr(n),n.flags|=1,Qe(e,n,l,r),n.child)}function vs(e,n,l,t,u){if(ql(n),n.stateNode===null){var r=ct,c=l.contextType;typeof c=="object"&&c!==null&&(r=Ke(c)),r=new l(t,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xi,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=t,r.state=n.memoizedState,r.refs={},ni(n),c=l.contextType,r.context=typeof c=="object"&&c!==null?Ke(c):ct,r.state=n.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Ti(n,l,c,t),r.state=n.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&xi.enqueueReplaceState(r,r.state,null),ia(n,t,r,u),ra(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),t=!0}else if(e===null){r=n.stateNode;var s=n.memoizedProps,h=Ql(l,s);r.props=h;var T=r.context,D=l.contextType;c=ct,typeof D=="object"&&D!==null&&(c=Ke(D));var R=l.getDerivedStateFromProps;D=typeof R=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=n.pendingProps!==s,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||T!==c)&&Po(n,r,t,c),rl=!1;var x=n.memoizedState;r.state=x,ia(n,t,r,u),ra(),T=n.memoizedState,s||x!==T||rl?(typeof R=="function"&&(Ti(n,l,R,t),T=n.memoizedState),(h=rl||Io(n,l,h,t,x,T,c))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=T),r.props=t,r.state=T,r.context=c,t=h):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{r=n.stateNode,li(e,n),c=n.memoizedProps,D=Ql(l,c),r.props=D,R=n.pendingProps,x=r.context,T=l.contextType,h=ct,typeof T=="object"&&T!==null&&(h=Ke(T)),s=l.getDerivedStateFromProps,(T=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==R||x!==h)&&Po(n,r,t,h),rl=!1,x=n.memoizedState,r.state=x,ia(n,t,r,u),ra();var M=n.memoizedState;c!==R||x!==M||rl||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof s=="function"&&(Ti(n,l,s,t),M=n.memoizedState),(D=rl||Io(n,l,D,t,x,M,h)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,M,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,M,h)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=M),r.props=t,r.state=M,r.context=h,t=D):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),t=!1)}return r=t,Du(e,n),t=(n.flags&128)!==0,r||t?(r=n.stateNode,l=t&&typeof l.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&t?(n.child=gt(n,e.child,null,u),n.child=gt(n,null,l,u)):Qe(e,n,l,u),n.memoizedState=r.state,e=n.child):e=kn(e,n,u),e}function hs(e,n,l,t){return It(),n.flags|=256,Qe(e,n,l,t),n.child}var _i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Di(e){return{baseLanes:e,cachePool:eo()}}function Ci(e,n,l){return e=e!==null?e.childLanes&~l:0,n&&(e|=Mn),e}function ys(e,n,l){var t=n.pendingProps,u=!1,r=(n.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),c&&(u=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(de){if(u?ol(n):sl(),de){var s=Me,h;if(h=s){e:{for(h=s,s=zn;h.nodeType!==8;){if(!s){s=null;break e}if(h=Cn(h.nextSibling),h===null){s=null;break e}}s=h}s!==null?(n.memoizedState={dehydrated:s,treeContext:Bl!==null?{id:Qn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},h=dn(18,null,null,0),h.stateNode=s,h.return=n,n.child=h,We=n,Me=null,h=!0):h=!1}h||Ll(n)}if(s=n.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return dc(s)?n.lanes=32:n.lanes=536870912,null;Kn(n)}return s=t.children,t=t.fallback,u?(sl(),u=n.mode,s=Cu({mode:"hidden",children:s},u),t=Ul(t,u,l,null),s.return=n,t.return=n,s.sibling=t,n.child=s,u=n.child,u.memoizedState=Di(l),u.childLanes=Ci(e,c,l),n.memoizedState=_i,t):(ol(n),Ni(n,s))}if(h=e.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(r)n.flags&256?(ol(n),n.flags&=-257,n=Ri(e,n,l)):n.memoizedState!==null?(sl(),n.child=e.child,n.flags|=128,n=null):(sl(),u=t.fallback,s=n.mode,t=Cu({mode:"visible",children:t.children},s),u=Ul(u,s,l,null),u.flags|=2,t.return=n,u.return=n,t.sibling=u,n.child=t,gt(n,e.child,null,l),t=n.child,t.memoizedState=Di(l),t.childLanes=Ci(e,c,l),n.memoizedState=_i,n=u);else if(ol(n),dc(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var T=c.dgst;c=T,t=Error(f(419)),t.stack="",t.digest=c,Pt({value:t,source:null,stack:null}),n=Ri(e,n,l)}else if(qe||ea(e,n,l,!1),c=(l&e.childLanes)!==0,qe||c){if(c=Ae,c!==null&&(t=l&-l,t=(t&42)!==0?1:vr(t),t=(t&(c.suspendedLanes|l))!==0?0:t,t!==0&&t!==h.retryLane))throw h.retryLane=t,it(e,t),pn(c,e,t),rs;s.data==="$?"||Fi(),n=Ri(e,n,l)}else s.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=h.treeContext,Me=Cn(s.nextSibling),We=n,de=!0,Yl=null,zn=!1,e!==null&&(En[Tn++]=Qn,En[Tn++]=Xn,En[Tn++]=Bl,Qn=e.id,Xn=e.overflow,Bl=n),n=Ni(n,t.children),n.flags|=4096);return n}return u?(sl(),u=t.fallback,s=n.mode,h=e.child,T=h.sibling,t=wn(h,{mode:"hidden",children:t.children}),t.subtreeFlags=h.subtreeFlags&65011712,T!==null?u=wn(T,u):(u=Ul(u,s,l,null),u.flags|=2),u.return=n,t.return=n,t.sibling=u,n.child=t,t=u,u=n.child,s=e.child.memoizedState,s===null?s=Di(l):(h=s.cachePool,h!==null?(T=He._currentValue,h=h.parent!==T?{parent:T,pool:T}:h):h=eo(),s={baseLanes:s.baseLanes|l,cachePool:h}),u.memoizedState=s,u.childLanes=Ci(e,c,l),n.memoizedState=_i,t):(ol(n),l=e.child,e=l.sibling,l=wn(l,{mode:"visible",children:t.children}),l.return=n,l.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=l,n.memoizedState=null,l)}function Ni(e,n){return n=Cu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cu(e,n){return e=dn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ri(e,n,l){return gt(n,e.child,null,l),e=Ni(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ms(e,n,l){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Fr(e.return,n,l)}function zi(e,n,l,t,u){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:l,tailMode:u}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=t,r.tail=l,r.tailMode=u)}function ps(e,n,l){var t=n.pendingProps,u=t.revealOrder,r=t.tail;if(Qe(e,n,t.children,l),t=Ye.current,(t&2)!==0)t=t&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ms(e,l,n);else if(e.tag===19)ms(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}switch(Y(Ye,t),u){case"forwards":for(l=n.child,u=null;l!==null;)e=l.alternate,e!==null&&Mu(e)===null&&(u=l),l=l.sibling;l=u,l===null?(u=n.child,n.child=null):(u=l.sibling,l.sibling=null),zi(n,!1,u,l,r);break;case"backwards":for(l=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Mu(e)===null){n.child=u;break}e=u.sibling,u.sibling=l,l=u,u=e}zi(n,!0,l,null,r);break;case"together":zi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function kn(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),ml|=n.lanes,(l&n.childLanes)===0)if(e!==null){if(ea(e,n,l,!1),(l&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(f(153));if(n.child!==null){for(e=n.child,l=wn(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=wn(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function Ui(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function Av(e,n,l){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),ul(n,He,e.memoizedState.cache),It();break;case 27:case 5:cr(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:ul(n,n.type,n.memoizedProps.value);break;case 13:var t=n.memoizedState;if(t!==null)return t.dehydrated!==null?(ol(n),n.flags|=128,null):(l&n.child.childLanes)!==0?ys(e,n,l):(ol(n),e=kn(e,n,l),e!==null?e.sibling:null);ol(n);break;case 19:var u=(e.flags&128)!==0;if(t=(l&n.childLanes)!==0,t||(ea(e,n,l,!1),t=(l&n.childLanes)!==0),u){if(t)return ps(e,n,l);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Y(Ye,Ye.current),t)break;return null;case 22:case 23:return n.lanes=0,os(e,n,l);case 24:ul(n,He,e.memoizedState.cache)}return kn(e,n,l)}function gs(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps)qe=!0;else{if(!Ui(e,l)&&(n.flags&128)===0)return qe=!1,Av(e,n,l);qe=(e.flags&131072)!==0}else qe=!1,de&&(n.flags&1048576)!==0&&Kf(n,cu,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var t=n.elementType,u=t._init;if(t=u(t._payload),n.type=t,typeof t=="function")Qr(t)?(e=Ql(t,e),n.tag=1,n=vs(null,n,t,e,l)):(n.tag=0,n=Oi(null,n,t,e,l));else{if(t!=null){if(u=t.$$typeof,u===_e){n.tag=11,n=is(null,n,t,e,l);break e}else if(u===P){n.tag=14,n=cs(null,n,t,e,l);break e}}throw n=jn(t)||t,Error(f(306,n,""))}}return n;case 0:return Oi(e,n,n.type,n.pendingProps,l);case 1:return t=n.type,u=Ql(t,n.pendingProps),vs(e,n,t,u,l);case 3:e:{if(Ee(n,n.stateNode.containerInfo),e===null)throw Error(f(387));t=n.pendingProps;var r=n.memoizedState;u=r.element,li(e,n),ia(n,t,null,l);var c=n.memoizedState;if(t=c.cache,ul(n,He,t),t!==r.cache&&Wr(n,[He],l,!0),ra(),t=c.element,r.isDehydrated)if(r={element:t,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=hs(e,n,t,l);break e}else if(t!==u){u=bn(Error(f(424)),n),Pt(u),n=hs(e,n,t,l);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Cn(e.firstChild),We=n,de=!0,Yl=null,zn=!0,l=Wo(n,null,t,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(It(),t===u){n=kn(e,n,l);break e}Qe(e,n,t,l)}n=n.child}return n;case 26:return Du(e,n),e===null?(l=Ed(n.type,null,n.pendingProps,null))?n.memoizedState=l:de||(l=n.type,e=n.pendingProps,t=Xu(ee.current).createElement(l),t[Ve]=n,t[en]=e,Je(t,l,e),je(t),n.stateNode=t):n.memoizedState=Ed(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return cr(n),e===null&&de&&(t=n.stateNode=Sd(n.type,n.pendingProps,ee.current),We=n,zn=!0,u=Me,bl(n.type)?(vc=u,Me=Cn(t.firstChild)):Me=u),Qe(e,n,n.pendingProps.children,l),Du(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&de&&((u=t=Me)&&(t=Fv(t,n.type,n.pendingProps,zn),t!==null?(n.stateNode=t,We=n,Me=Cn(t.firstChild),zn=!1,u=!0):u=!1),u||Ll(n)),cr(n),u=n.type,r=n.pendingProps,c=e!==null?e.memoizedProps:null,t=r.children,fc(u,r)?t=null:c!==null&&fc(u,c)&&(n.flags|=32),n.memoizedState!==null&&(u=ci(e,n,vv,null,null,l),Ca._currentValue=u),Du(e,n),Qe(e,n,t,l),n.child;case 6:return e===null&&de&&((e=l=Me)&&(l=Wv(l,n.pendingProps,zn),l!==null?(n.stateNode=l,We=n,Me=null,e=!0):e=!1),e||Ll(n)),null;case 13:return ys(e,n,l);case 4:return Ee(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=gt(n,null,t,l):Qe(e,n,t,l),n.child;case 11:return is(e,n,n.type,n.pendingProps,l);case 7:return Qe(e,n,n.pendingProps,l),n.child;case 8:return Qe(e,n,n.pendingProps.children,l),n.child;case 12:return Qe(e,n,n.pendingProps.children,l),n.child;case 10:return t=n.pendingProps,ul(n,n.type,t.value),Qe(e,n,t.children,l),n.child;case 9:return u=n.type._context,t=n.pendingProps.children,ql(n),u=Ke(u),t=t(u),n.flags|=1,Qe(e,n,t,l),n.child;case 14:return cs(e,n,n.type,n.pendingProps,l);case 15:return fs(e,n,n.type,n.pendingProps,l);case 19:return ps(e,n,l);case 31:return t=n.pendingProps,l=n.mode,t={mode:t.mode,children:t.children},e===null?(l=Cu(t,l),l.ref=n.ref,n.child=l,l.return=n,n=l):(l=wn(e.child,t),l.ref=n.ref,n.child=l,l.return=n,n=l),n;case 22:return os(e,n,l);case 24:return ql(n),t=Ke(He),e===null?(u=Pr(),u===null&&(u=Ae,r=$r(),u.pooledCache=r,r.refCount++,r!==null&&(u.pooledCacheLanes|=l),u=r),n.memoizedState={parent:t,cache:u},ni(n),ul(n,He,u)):((e.lanes&l)!==0&&(li(e,n),ia(n,null,null,l),ra()),u=e.memoizedState,r=n.memoizedState,u.parent!==t?(u={parent:t,cache:t},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ul(n,He,t)):(t=r.cache,ul(n,He,t),t!==u.cache&&Wr(n,[He],l,!0))),Qe(e,n,n.pendingProps.children,l),n.child;case 29:throw n.pendingProps}throw Error(f(156,n.tag))}function Fn(e){e.flags|=4}function Ss(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_d(n)){if(n=xn.current,n!==null&&((ce&4194048)===ce?Un!==null:(ce&62914560)!==ce&&(ce&536870912)===0||n!==Un))throw aa=ei,no;e.flags|=8192}}function Nu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fc():536870912,e.lanes|=n,Et|=n)}function ha(e,n){if(!de)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,t=0;if(n)for(var u=e.child;u!==null;)l|=u.lanes|u.childLanes,t|=u.subtreeFlags&65011712,t|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)l|=u.lanes|u.childLanes,t|=u.subtreeFlags,t|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=t,e.childLanes=l,n}function Ev(e,n,l){var t=n.pendingProps;switch(Vr(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(n),null;case 1:return xe(n),null;case 3:return l=n.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Zn(He),nl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&($t(n)?Fn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wf())),xe(n),null;case 26:return l=n.memoizedState,e===null?(Fn(n),l!==null?(xe(n),Ss(n,l)):(xe(n),n.flags&=-16777217)):l?l!==e.memoizedState?(Fn(n),xe(n),Ss(n,l)):(xe(n),n.flags&=-16777217):(e.memoizedProps!==t&&Fn(n),xe(n),n.flags&=-16777217),null;case 27:wa(n),l=ee.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==t&&Fn(n);else{if(!t){if(n.stateNode===null)throw Error(f(166));return xe(n),null}e=K.current,$t(n)?kf(n):(e=Sd(u,t,l),n.stateNode=e,Fn(n))}return xe(n),null;case 5:if(wa(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==t&&Fn(n);else{if(!t){if(n.stateNode===null)throw Error(f(166));return xe(n),null}if(e=K.current,$t(n))kf(n);else{switch(u=Xu(ee.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof t.is=="string"?u.createElement("select",{is:t.is}):u.createElement("select"),t.multiple?e.multiple=!0:t.size&&(e.size=t.size);break;default:e=typeof t.is=="string"?u.createElement(l,{is:t.is}):u.createElement(l)}}e[Ve]=n,e[en]=t;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(Je(e,l,t),l){case"button":case"input":case"select":case"textarea":e=!!t.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Fn(n)}}return xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==t&&Fn(n);else{if(typeof t!="string"&&n.stateNode===null)throw Error(f(166));if(e=ee.current,$t(n)){if(e=n.stateNode,l=n.memoizedProps,t=null,u=We,u!==null)switch(u.tag){case 27:case 5:t=u.memoizedProps}e[Ve]=n,e=!!(e.nodeValue===l||t!==null&&t.suppressHydrationWarning===!0||dd(e.nodeValue,l)),e||Ll(n)}else e=Xu(e).createTextNode(t),e[Ve]=n,n.stateNode=e}return xe(n),null;case 13:if(t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$t(n),t!==null&&t.dehydrated!==null){if(e===null){if(!u)throw Error(f(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(f(317));u[Ve]=n}else It(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xe(n),u=!1}else u=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}if(Kn(n),(n.flags&128)!==0)return n.lanes=l,n;if(l=t!==null,e=e!==null&&e.memoizedState!==null,l){t=n.child,u=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(u=t.alternate.memoizedState.cachePool.pool);var r=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==u&&(t.flags|=2048)}return l!==e&&l&&(n.child.flags|=8192),Nu(n,n.updateQueue),xe(n),null;case 4:return nl(),e===null&&ac(n.stateNode.containerInfo),xe(n),null;case 10:return Zn(n.type),xe(n),null;case 19:if(j(Ye),u=n.memoizedState,u===null)return xe(n),null;if(t=(n.flags&128)!==0,r=u.rendering,r===null)if(t)ha(u,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Mu(e),r!==null){for(n.flags|=128,ha(u,!1),e=r.updateQueue,n.updateQueue=e,Nu(n,e),n.subtreeFlags=0,e=l,l=n.child;l!==null;)Vf(l,e),l=l.sibling;return Y(Ye,Ye.current&1|2),n.child}e=e.sibling}u.tail!==null&&Rn()>Uu&&(n.flags|=128,t=!0,ha(u,!1),n.lanes=4194304)}else{if(!t)if(e=Mu(r),e!==null){if(n.flags|=128,t=!0,e=e.updateQueue,n.updateQueue=e,Nu(n,e),ha(u,!0),u.tail===null&&u.tailMode==="hidden"&&!r.alternate&&!de)return xe(n),null}else 2*Rn()-u.renderingStartTime>Uu&&l!==536870912&&(n.flags|=128,t=!0,ha(u,!1),n.lanes=4194304);u.isBackwards?(r.sibling=n.child,n.child=r):(e=u.last,e!==null?e.sibling=r:n.child=r,u.last=r)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Rn(),n.sibling=null,e=Ye.current,Y(Ye,t?e&1|2:e&1),n):(xe(n),null);case 22:case 23:return Kn(n),ri(),t=n.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(n.flags|=8192):t&&(n.flags|=8192),t?(l&536870912)!==0&&(n.flags&128)===0&&(xe(n),n.subtreeFlags&6&&(n.flags|=8192)):xe(n),l=n.updateQueue,l!==null&&Nu(n,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==l&&(n.flags|=2048),e!==null&&j(Gl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Zn(He),xe(n),null;case 25:return null;case 30:return null}throw Error(f(156,n.tag))}function Tv(e,n){switch(Vr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zn(He),nl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return wa(n),null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(f(340));It()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(Ye),null;case 4:return nl(),null;case 10:return Zn(n.type),null;case 22:case 23:return Kn(n),ri(),e!==null&&j(Gl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zn(He),null;case 25:return null;default:return null}}function bs(e,n){switch(Vr(n),n.tag){case 3:Zn(He),nl();break;case 26:case 27:case 5:wa(n);break;case 4:nl();break;case 13:Kn(n);break;case 19:j(Ye);break;case 10:Zn(n.type);break;case 22:case 23:Kn(n),ri(),e!==null&&j(Gl);break;case 24:Zn(He)}}function ya(e,n){try{var l=n.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var u=t.next;l=u;do{if((l.tag&e)===e){t=void 0;var r=l.create,c=l.inst;t=r(),c.destroy=t}l=l.next}while(l!==u)}}catch(s){be(n,n.return,s)}}function dl(e,n,l){try{var t=n.updateQueue,u=t!==null?t.lastEffect:null;if(u!==null){var r=u.next;t=r;do{if((t.tag&e)===e){var c=t.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,u=n;var h=l,T=s;try{T()}catch(D){be(u,h,D)}}}t=t.next}while(t!==r)}}catch(D){be(n,n.return,D)}}function As(e){var n=e.updateQueue;if(n!==null){var l=e.stateNode;try{io(n,l)}catch(t){be(e,e.return,t)}}}function Es(e,n,l){l.props=Ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(t){be(e,n,t)}}function ma(e,n){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof l=="function"?e.refCleanup=l(t):l.current=t}}catch(u){be(e,n,u)}}function Bn(e,n){var l=e.ref,t=e.refCleanup;if(l!==null)if(typeof t=="function")try{t()}catch(u){be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){be(e,n,u)}else l.current=null}function Ts(e){var n=e.type,l=e.memoizedProps,t=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break e;case"img":l.src?t.src=l.src:l.srcSet&&(t.srcset=l.srcSet)}}catch(u){be(e,e.return,u)}}function Bi(e,n,l){try{var t=e.stateNode;Jv(t,e.type,l,n),t[en]=n}catch(u){be(e,e.return,u)}}function xs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bl(e.type)||e.tag===4}function Hi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,n,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,n):(n=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,n.appendChild(e),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=Qu));else if(t!==4&&(t===27&&bl(e.type)&&(l=e.stateNode,n=null),e=e.child,e!==null))for(Yi(e,n,l),e=e.sibling;e!==null;)Yi(e,n,l),e=e.sibling}function Ru(e,n,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(t!==4&&(t===27&&bl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ru(e,n,l),e=e.sibling;e!==null;)Ru(e,n,l),e=e.sibling}function Ms(e){var n=e.stateNode,l=e.memoizedProps;try{for(var t=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Je(n,t,l),n[Ve]=e,n[en]=l}catch(r){be(e,e.return,r)}}var Wn=!1,Ne=!1,Li=!1,Os=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function xv(e,n){if(e=e.containerInfo,ic=Fu,e=Yf(e),Hr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var u=t.anchorOffset,r=t.focusNode;t=t.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var c=0,s=-1,h=-1,T=0,D=0,R=e,x=null;n:for(;;){for(var M;R!==l||u!==0&&R.nodeType!==3||(s=c+u),R!==r||t!==0&&R.nodeType!==3||(h=c+t),R.nodeType===3&&(c+=R.nodeValue.length),(M=R.firstChild)!==null;)x=R,R=M;for(;;){if(R===e)break n;if(x===l&&++T===u&&(s=c),x===r&&++D===t&&(h=c),(M=R.nextSibling)!==null)break;R=x,x=R.parentNode}R=M}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(cc={focusedElem:e,selectionRange:l},Fu=!1,Ge=n;Ge!==null;)if(n=Ge,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ge=e;else for(;Ge!==null;){switch(n=Ge,r=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,l=n,u=r.memoizedProps,r=r.memoizedState,t=l.stateNode;try{var W=Ql(l.type,u,l.elementType===l.type);e=t.getSnapshotBeforeUpdate(W,r),t.__reactInternalSnapshotBeforeUpdate=e}catch(k){be(l,l.return,k)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,l=e.nodeType,l===9)sc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=n.sibling,e!==null){e.return=n.return,Ge=e;break}Ge=n.return}}function _s(e,n,l){var t=l.flags;switch(l.tag){case 0:case 11:case 15:vl(e,l),t&4&&ya(5,l);break;case 1:if(vl(e,l),t&4)if(e=l.stateNode,n===null)try{e.componentDidMount()}catch(c){be(l,l.return,c)}else{var u=Ql(l.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){be(l,l.return,c)}}t&64&&As(l),t&512&&ma(l,l.return);break;case 3:if(vl(e,l),t&64&&(e=l.updateQueue,e!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{io(e,n)}catch(c){be(l,l.return,c)}}break;case 27:n===null&&t&4&&Ms(l);case 26:case 5:vl(e,l),n===null&&t&4&&Ts(l),t&512&&ma(l,l.return);break;case 12:vl(e,l);break;case 13:vl(e,l),t&4&&Ns(e,l),t&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Uv.bind(null,l),$v(e,l))));break;case 22:if(t=l.memoizedState!==null||Wn,!t){n=n!==null&&n.memoizedState!==null||Ne,u=Wn;var r=Ne;Wn=t,(Ne=n)&&!r?hl(e,l,(l.subtreeFlags&8772)!==0):vl(e,l),Wn=u,Ne=r}break;case 30:break;default:vl(e,l)}}function Ds(e){var n=e.alternate;n!==null&&(e.alternate=null,Ds(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&mr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,tn=!1;function $n(e,n,l){for(l=l.child;l!==null;)Cs(e,n,l),l=l.sibling}function Cs(e,n,l){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Lt,l)}catch{}switch(l.tag){case 26:Ne||Bn(l,n),$n(e,n,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ne||Bn(l,n);var t=Te,u=tn;bl(l.type)&&(Te=l.stateNode,tn=!1),$n(e,n,l),Ma(l.stateNode),Te=t,tn=u;break;case 5:Ne||Bn(l,n);case 6:if(t=Te,u=tn,Te=null,$n(e,n,l),Te=t,tn=u,Te!==null)if(tn)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(l.stateNode)}catch(r){be(l,n,r)}else try{Te.removeChild(l.stateNode)}catch(r){be(l,n,r)}break;case 18:Te!==null&&(tn?(e=Te,pd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ua(e)):pd(Te,l.stateNode));break;case 4:t=Te,u=tn,Te=l.stateNode.containerInfo,tn=!0,$n(e,n,l),Te=t,tn=u;break;case 0:case 11:case 14:case 15:Ne||dl(2,l,n),Ne||dl(4,l,n),$n(e,n,l);break;case 1:Ne||(Bn(l,n),t=l.stateNode,typeof t.componentWillUnmount=="function"&&Es(l,n,t)),$n(e,n,l);break;case 21:$n(e,n,l);break;case 22:Ne=(t=Ne)||l.memoizedState!==null,$n(e,n,l),Ne=t;break;default:$n(e,n,l)}}function Ns(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ua(e)}catch(l){be(n,n.return,l)}}function Mv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Os),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Os),n;default:throw Error(f(435,e.tag))}}function ji(e,n){var l=Mv(e);n.forEach(function(t){var u=Bv.bind(null,e,t);l.has(t)||(l.add(t),t.then(u,u))})}function vn(e,n){var l=n.deletions;if(l!==null)for(var t=0;t<l.length;t++){var u=l[t],r=e,c=n,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(bl(s.type)){Te=s.stateNode,tn=!1;break e}break;case 5:Te=s.stateNode,tn=!1;break e;case 3:case 4:Te=s.stateNode.containerInfo,tn=!0;break e}s=s.return}if(Te===null)throw Error(f(160));Cs(r,c,u),Te=null,tn=!1,r=u.alternate,r!==null&&(r.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Rs(n,e),n=n.sibling}var Dn=null;function Rs(e,n){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(n,e),hn(e),t&4&&(dl(3,e,e.return),ya(3,e),dl(5,e,e.return));break;case 1:vn(n,e),hn(e),t&512&&(Ne||l===null||Bn(l,l.return)),t&64&&Wn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?t:l.concat(t))));break;case 26:var u=Dn;if(vn(n,e),hn(e),t&512&&(Ne||l===null||Bn(l,l.return)),t&4){var r=l!==null?l.memoizedState:null;if(t=e.memoizedState,l===null)if(t===null)if(e.stateNode===null){e:{t=e.type,l=e.memoizedProps,u=u.ownerDocument||u;n:switch(t){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Gt]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(t),u.head.insertBefore(r,u.querySelector("head > title"))),Je(r,t,l),r[Ve]=e,je(r),t=r;break e;case"link":var c=Md("link","href",u).get(t+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(r=c[s],r.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&r.getAttribute("rel")===(l.rel==null?null:l.rel)&&r.getAttribute("title")===(l.title==null?null:l.title)&&r.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break n}}r=u.createElement(t),Je(r,t,l),u.head.appendChild(r);break;case"meta":if(c=Md("meta","content",u).get(t+(l.content||""))){for(s=0;s<c.length;s++)if(r=c[s],r.getAttribute("content")===(l.content==null?null:""+l.content)&&r.getAttribute("name")===(l.name==null?null:l.name)&&r.getAttribute("property")===(l.property==null?null:l.property)&&r.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&r.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break n}}r=u.createElement(t),Je(r,t,l),u.head.appendChild(r);break;default:throw Error(f(468,t))}r[Ve]=e,je(r),t=r}e.stateNode=t}else Od(u,e.type,e.stateNode);else e.stateNode=xd(u,t,e.memoizedProps);else r!==t?(r===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):r.count--,t===null?Od(u,e.type,e.stateNode):xd(u,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Bi(e,e.memoizedProps,l.memoizedProps)}break;case 27:vn(n,e),hn(e),t&512&&(Ne||l===null||Bn(l,l.return)),l!==null&&t&4&&Bi(e,e.memoizedProps,l.memoizedProps);break;case 5:if(vn(n,e),hn(e),t&512&&(Ne||l===null||Bn(l,l.return)),e.flags&32){u=e.stateNode;try{et(u,"")}catch(M){be(e,e.return,M)}}t&4&&e.stateNode!=null&&(u=e.memoizedProps,Bi(e,u,l!==null?l.memoizedProps:u)),t&1024&&(Li=!0);break;case 6:if(vn(n,e),hn(e),t&4){if(e.stateNode===null)throw Error(f(162));t=e.memoizedProps,l=e.stateNode;try{l.nodeValue=t}catch(M){be(e,e.return,M)}}break;case 3:if(Vu=null,u=Dn,Dn=Ju(n.containerInfo),vn(n,e),Dn=u,hn(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{Ua(n.containerInfo)}catch(M){be(e,e.return,M)}Li&&(Li=!1,zs(e));break;case 4:t=Dn,Dn=Ju(e.stateNode.containerInfo),vn(n,e),hn(e),Dn=t;break;case 12:vn(n,e),hn(e);break;case 13:vn(n,e),hn(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ji=Rn()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ji(e,t)));break;case 22:u=e.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,T=Wn,D=Ne;if(Wn=T||u,Ne=D||h,vn(n,e),Ne=D,Wn=T,hn(e),t&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(l===null||h||Wn||Ne||Xl(e)),l=null,n=e;;){if(n.tag===5||n.tag===26){if(l===null){h=l=n;try{if(r=h.stateNode,u)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=h.stateNode;var R=h.memoizedProps.style,x=R!=null&&R.hasOwnProperty("display")?R.display:null;s.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(M){be(h,h.return,M)}}}else if(n.tag===6){if(l===null){h=n;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(M){be(h,h.return,M)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;l===n&&(l=null),n=n.return}l===n&&(l=null),n.sibling.return=n.return,n=n.sibling}t&4&&(t=e.updateQueue,t!==null&&(l=t.retryQueue,l!==null&&(t.retryQueue=null,ji(e,l))));break;case 19:vn(n,e),hn(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ji(e,t)));break;case 30:break;case 21:break;default:vn(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{for(var l,t=e.return;t!==null;){if(xs(t)){l=t;break}t=t.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var u=l.stateNode,r=Hi(e);Ru(e,r,u);break;case 5:var c=l.stateNode;l.flags&32&&(et(c,""),l.flags&=-33);var s=Hi(e);Ru(e,s,c);break;case 3:case 4:var h=l.stateNode.containerInfo,T=Hi(e);Yi(e,T,h);break;default:throw Error(f(161))}}catch(D){be(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zs(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zs(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function vl(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_s(e,n.alternate,n),n=n.sibling}function Xl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dl(4,n,n.return),Xl(n);break;case 1:Bn(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Es(n,n.return,l),Xl(n);break;case 27:Ma(n.stateNode);case 26:case 5:Bn(n,n.return),Xl(n);break;case 22:n.memoizedState===null&&Xl(n);break;case 30:Xl(n);break;default:Xl(n)}e=e.sibling}}function hl(e,n,l){for(l=l&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var t=n.alternate,u=e,r=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:hl(u,r,l),ya(4,r);break;case 1:if(hl(u,r,l),t=r,u=t.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(T){be(t,t.return,T)}if(t=r,u=t.updateQueue,u!==null){var s=t.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)ro(h[u],s)}catch(T){be(t,t.return,T)}}l&&c&64&&As(r),ma(r,r.return);break;case 27:Ms(r);case 26:case 5:hl(u,r,l),l&&t===null&&c&4&&Ts(r),ma(r,r.return);break;case 12:hl(u,r,l);break;case 13:hl(u,r,l),l&&c&4&&Ns(u,r);break;case 22:r.memoizedState===null&&hl(u,r,l),ma(r,r.return);break;case 30:break;default:hl(u,r,l)}n=n.sibling}}function qi(e,n){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&na(l))}function Gi(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&na(e))}function Hn(e,n,l,t){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Us(e,n,l,t),n=n.sibling}function Us(e,n,l,t){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n,l,t),u&2048&&ya(9,n);break;case 1:Hn(e,n,l,t);break;case 3:Hn(e,n,l,t),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&na(e)));break;case 12:if(u&2048){Hn(e,n,l,t),e=n.stateNode;try{var r=n.memoizedProps,c=r.id,s=r.onPostCommit;typeof s=="function"&&s(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){be(n,n.return,h)}}else Hn(e,n,l,t);break;case 13:Hn(e,n,l,t);break;case 23:break;case 22:r=n.stateNode,c=n.alternate,n.memoizedState!==null?r._visibility&2?Hn(e,n,l,t):pa(e,n):r._visibility&2?Hn(e,n,l,t):(r._visibility|=2,St(e,n,l,t,(n.subtreeFlags&10256)!==0)),u&2048&&qi(c,n);break;case 24:Hn(e,n,l,t),u&2048&&Gi(n.alternate,n);break;default:Hn(e,n,l,t)}}function St(e,n,l,t,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var r=e,c=n,s=l,h=t,T=c.flags;switch(c.tag){case 0:case 11:case 15:St(r,c,s,h,u),ya(8,c);break;case 23:break;case 22:var D=c.stateNode;c.memoizedState!==null?D._visibility&2?St(r,c,s,h,u):pa(r,c):(D._visibility|=2,St(r,c,s,h,u)),u&&T&2048&&qi(c.alternate,c);break;case 24:St(r,c,s,h,u),u&&T&2048&&Gi(c.alternate,c);break;default:St(r,c,s,h,u)}n=n.sibling}}function pa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var l=e,t=n,u=t.flags;switch(t.tag){case 22:pa(l,t),u&2048&&qi(t.alternate,t);break;case 24:pa(l,t),u&2048&&Gi(t.alternate,t);break;default:pa(l,t)}n=n.sibling}}var ga=8192;function bt(e){if(e.subtreeFlags&ga)for(e=e.child;e!==null;)Bs(e),e=e.sibling}function Bs(e){switch(e.tag){case 26:bt(e),e.flags&ga&&e.memoizedState!==null&&oh(Dn,e.memoizedState,e.memoizedProps);break;case 5:bt(e);break;case 3:case 4:var n=Dn;Dn=Ju(e.stateNode.containerInfo),bt(e),Dn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ga,ga=16777216,bt(e),ga=n):bt(e));break;default:bt(e)}}function Hs(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Sa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];Ge=t,Ls(t,e)}Hs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ys(e),e=e.sibling}function Ys(e){switch(e.tag){case 0:case 11:case 15:Sa(e),e.flags&2048&&dl(9,e,e.return);break;case 3:Sa(e);break;case 12:Sa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zu(e)):Sa(e);break;default:Sa(e)}}function zu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];Ge=t,Ls(t,e)}Hs(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dl(8,n,n.return),zu(n);break;case 22:l=n.stateNode,l._visibility&2&&(l._visibility&=-3,zu(n));break;default:zu(n)}e=e.sibling}}function Ls(e,n){for(;Ge!==null;){var l=Ge;switch(l.tag){case 0:case 11:case 15:dl(8,l,n);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var t=l.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:na(l.memoizedState.cache)}if(t=l.child,t!==null)t.return=l,Ge=t;else e:for(l=e;Ge!==null;){t=Ge;var u=t.sibling,r=t.return;if(Ds(t),t===l){Ge=null;break e}if(u!==null){u.return=r,Ge=u;break e}Ge=r}}}var Ov={getCacheForType:function(e){var n=Ke(He),l=n.data.get(e);return l===void 0&&(l=e(),n.data.set(e,l)),l}},_v=typeof WeakMap=="function"?WeakMap:Map,he=0,Ae=null,re=null,ce=0,ye=0,yn=null,yl=!1,At=!1,wi=!1,In=0,Oe=0,ml=0,Jl=0,Qi=0,Mn=0,Et=0,ba=null,an=null,Xi=!1,Ji=0,Uu=1/0,Bu=null,pl=null,Xe=0,gl=null,Tt=null,xt=0,Zi=0,Vi=null,js=null,Aa=0,Ki=null;function mn(){if((he&2)!==0&&ce!==0)return ce&-ce;if(_.T!==null){var e=st;return e!==0?e:ec()}return Ic()}function qs(){Mn===0&&(Mn=(ce&536870912)===0||de?kc():536870912);var e=xn.current;return e!==null&&(e.flags|=32),Mn}function pn(e,n,l){(e===Ae&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Mt(e,0),Sl(e,ce,Mn,!1)),qt(e,l),((he&2)===0||e!==Ae)&&(e===Ae&&((he&2)===0&&(Jl|=l),Oe===4&&Sl(e,ce,Mn,!1)),Yn(e))}function Gs(e,n,l){if((he&6)!==0)throw Error(f(327));var t=!l&&(n&124)===0&&(n&e.expiredLanes)===0||jt(e,n),u=t?Nv(e,n):Wi(e,n,!0),r=t;do{if(u===0){At&&!t&&Sl(e,n,0,!1);break}else{if(l=e.current.alternate,r&&!Dv(l)){u=Wi(e,n,!1),r=!1;continue}if(u===2){if(r=n,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var s=e;u=ba;var h=s.current.memoizedState.isDehydrated;if(h&&(Mt(s,c).flags|=256),c=Wi(s,c,!1),c!==2){if(wi&&!h){s.errorRecoveryDisabledLanes|=r,Jl|=r,u=4;break e}r=an,an=u,r!==null&&(an===null?an=r:an.push.apply(an,r))}u=c}if(r=!1,u!==2)continue}}if(u===1){Mt(e,0),Sl(e,n,0,!0);break}e:{switch(t=e,r=u,r){case 0:case 1:throw Error(f(345));case 4:if((n&4194048)!==n)break;case 6:Sl(t,n,Mn,!yl);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(f(329))}if((n&62914560)===n&&(u=Ji+300-Rn(),10<u)){if(Sl(t,n,Mn,!yl),Za(t,0,!0)!==0)break e;t.timeoutHandle=yd(ws.bind(null,t,l,an,Bu,Xi,n,Mn,Jl,Et,yl,r,2,-0,0),u);break e}ws(t,l,an,Bu,Xi,n,Mn,Jl,Et,yl,r,0,-0,0)}}break}while(!0);Yn(e)}function ws(e,n,l,t,u,r,c,s,h,T,D,R,x,M){if(e.timeoutHandle=-1,R=n.subtreeFlags,(R&8192||(R&16785408)===16785408)&&(Da={stylesheets:null,count:0,unsuspend:fh},Bs(n),R=sh(),R!==null)){e.cancelPendingCommit=R(ks.bind(null,e,n,r,l,t,u,c,s,h,D,1,x,M)),Sl(e,r,c,!T);return}ks(e,n,r,l,t,u,c,s,h)}function Dv(e){for(var n=e;;){var l=n.tag;if((l===0||l===11||l===15)&&n.flags&16384&&(l=n.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var t=0;t<l.length;t++){var u=l[t],r=u.getSnapshot;u=u.value;try{if(!sn(r(),u))return!1}catch{return!1}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sl(e,n,l,t){n&=~Qi,n&=~Jl,e.suspendedLanes|=n,e.pingedLanes&=~n,t&&(e.warmLanes|=n),t=e.expirationTimes;for(var u=n;0<u;){var r=31-on(u),c=1<<r;t[r]=-1,u&=~c}l!==0&&Wc(e,l,n)}function Hu(){return(he&6)===0?(Ea(0),!1):!0}function ki(){if(re!==null){if(ye===0)var e=re.return;else e=re,Jn=jl=null,si(e),pt=null,da=0,e=re;for(;e!==null;)bs(e.alternate,e),e=e.return;re=null}}function Mt(e,n){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Vv(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ki(),Ae=e,re=l=wn(e.current,null),ce=n,ye=0,yn=null,yl=!1,At=jt(e,n),wi=!1,Et=Mn=Qi=Jl=ml=Oe=0,an=ba=null,Xi=!1,(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var u=31-on(t),r=1<<u;n|=e[u],t&=~r}return In=n,tu(),l}function Qs(e,n){ae=null,_.H=Eu,n===ta||n===du?(n=ao(),ye=3):n===no?(n=ao(),ye=4):ye=n===rs?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yn=n,re===null&&(Oe=1,_u(e,bn(n,e.current)))}function Xs(){var e=_.H;return _.H=Eu,e===null?Eu:e}function Js(){var e=_.A;return _.A=Ov,e}function Fi(){Oe=4,yl||(ce&4194048)!==ce&&xn.current!==null||(At=!0),(ml&134217727)===0&&(Jl&134217727)===0||Ae===null||Sl(Ae,ce,Mn,!1)}function Wi(e,n,l){var t=he;he|=2;var u=Xs(),r=Js();(Ae!==e||ce!==n)&&(Bu=null,Mt(e,n)),n=!1;var c=Oe;e:do try{if(ye!==0&&re!==null){var s=re,h=yn;switch(ye){case 8:ki(),c=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(n=!0);var T=ye;if(ye=0,yn=null,Ot(e,s,h,T),l&&At){c=0;break e}break;default:T=ye,ye=0,yn=null,Ot(e,s,h,T)}}Cv(),c=Oe;break}catch(D){Qs(e,D)}while(!0);return n&&e.shellSuspendCounter++,Jn=jl=null,he=t,_.H=u,_.A=r,re===null&&(Ae=null,ce=0,tu()),c}function Cv(){for(;re!==null;)Zs(re)}function Nv(e,n){var l=he;he|=2;var t=Xs(),u=Js();Ae!==e||ce!==n?(Bu=null,Uu=Rn()+500,Mt(e,n)):At=jt(e,n);e:do try{if(ye!==0&&re!==null){n=re;var r=yn;n:switch(ye){case 1:ye=0,yn=null,Ot(e,n,r,1);break;case 2:case 9:if(lo(r)){ye=0,yn=null,Vs(n);break}n=function(){ye!==2&&ye!==9||Ae!==e||(ye=7),Yn(e)},r.then(n,n);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:lo(r)?(ye=0,yn=null,Vs(n)):(ye=0,yn=null,Ot(e,n,r,7));break;case 5:var c=null;switch(re.tag){case 26:c=re.memoizedState;case 5:case 27:var s=re;if(!c||_d(c)){ye=0,yn=null;var h=s.sibling;if(h!==null)re=h;else{var T=s.return;T!==null?(re=T,Yu(T)):re=null}break n}}ye=0,yn=null,Ot(e,n,r,5);break;case 6:ye=0,yn=null,Ot(e,n,r,6);break;case 8:ki(),Oe=6;break e;default:throw Error(f(462))}}Rv();break}catch(D){Qs(e,D)}while(!0);return Jn=jl=null,_.H=t,_.A=u,he=l,re!==null?0:(Ae=null,ce=0,tu(),Oe)}function Rv(){for(;re!==null&&!P0();)Zs(re)}function Zs(e){var n=gs(e.alternate,e,In);e.memoizedProps=e.pendingProps,n===null?Yu(e):re=n}function Vs(e){var n=e,l=n.alternate;switch(n.tag){case 15:case 0:n=ds(l,n,n.pendingProps,n.type,void 0,ce);break;case 11:n=ds(l,n,n.pendingProps,n.type.render,n.ref,ce);break;case 5:si(n);default:bs(l,n),n=re=Vf(n,In),n=gs(l,n,In)}e.memoizedProps=e.pendingProps,n===null?Yu(e):re=n}function Ot(e,n,l,t){Jn=jl=null,si(n),pt=null,da=0;var u=n.return;try{if(bv(e,u,n,l,ce)){Oe=1,_u(e,bn(l,e.current)),re=null;return}}catch(r){if(u!==null)throw re=u,r;Oe=1,_u(e,bn(l,e.current)),re=null;return}n.flags&32768?(de||t===1?e=!0:At||(ce&536870912)!==0?e=!1:(yl=e=!0,(t===2||t===9||t===3||t===6)&&(t=xn.current,t!==null&&t.tag===13&&(t.flags|=16384))),Ks(n,e)):Yu(n)}function Yu(e){var n=e;do{if((n.flags&32768)!==0){Ks(n,yl);return}e=n.return;var l=Ev(n.alternate,n,In);if(l!==null){re=l;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);Oe===0&&(Oe=5)}function Ks(e,n){do{var l=Tv(e.alternate,e);if(l!==null){l.flags&=32767,re=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!n&&(e=e.sibling,e!==null)){re=e;return}re=e=l}while(e!==null);Oe=6,re=null}function ks(e,n,l,t,u,r,c,s,h){e.cancelPendingCommit=null;do Lu();while(Xe!==0);if((he&6)!==0)throw Error(f(327));if(n!==null){if(n===e.current)throw Error(f(177));if(r=n.lanes|n.childLanes,r|=Gr,f1(e,l,r,c,s,h),e===Ae&&(re=Ae=null,ce=0),Tt=n,gl=e,xt=l,Zi=r,Vi=u,js=t,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hv(Qa,function(){return Ps(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||t){t=_.T,_.T=null,u=H.p,H.p=2,c=he,he|=4;try{xv(e,n,l)}finally{he=c,H.p=u,_.T=t}}Xe=1,Fs(),Ws(),$s()}}function Fs(){if(Xe===1){Xe=0;var e=gl,n=Tt,l=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||l){l=_.T,_.T=null;var t=H.p;H.p=2;var u=he;he|=4;try{Rs(n,e);var r=cc,c=Yf(e.containerInfo),s=r.focusedElem,h=r.selectionRange;if(c!==s&&s&&s.ownerDocument&&Hf(s.ownerDocument.documentElement,s)){if(h!==null&&Hr(s)){var T=h.start,D=h.end;if(D===void 0&&(D=T),"selectionStart"in s)s.selectionStart=T,s.selectionEnd=Math.min(D,s.value.length);else{var R=s.ownerDocument||document,x=R&&R.defaultView||window;if(x.getSelection){var M=x.getSelection(),W=s.textContent.length,k=Math.min(h.start,W),ge=h.end===void 0?k:Math.min(h.end,W);!M.extend&&k>ge&&(c=ge,ge=k,k=c);var A=Bf(s,k),S=Bf(s,ge);if(A&&S&&(M.rangeCount!==1||M.anchorNode!==A.node||M.anchorOffset!==A.offset||M.focusNode!==S.node||M.focusOffset!==S.offset)){var E=R.createRange();E.setStart(A.node,A.offset),M.removeAllRanges(),k>ge?(M.addRange(E),M.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),M.addRange(E))}}}}for(R=[],M=s;M=M.parentNode;)M.nodeType===1&&R.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<R.length;s++){var C=R[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Fu=!!ic,cc=ic=null}finally{he=u,H.p=t,_.T=l}}e.current=n,Xe=2}}function Ws(){if(Xe===2){Xe=0;var e=gl,n=Tt,l=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||l){l=_.T,_.T=null;var t=H.p;H.p=2;var u=he;he|=4;try{_s(e,n.alternate,n)}finally{he=u,H.p=t,_.T=l}}Xe=3}}function $s(){if(Xe===4||Xe===3){Xe=0,e1();var e=gl,n=Tt,l=xt,t=js;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xe=5:(Xe=0,Tt=gl=null,Is(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(pl=null),hr(l),n=n.stateNode,fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Lt,n,void 0,(n.current.flags&128)===128)}catch{}if(t!==null){n=_.T,u=H.p,H.p=2,_.T=null;try{for(var r=e.onRecoverableError,c=0;c<t.length;c++){var s=t[c];r(s.value,{componentStack:s.stack})}}finally{_.T=n,H.p=u}}(xt&3)!==0&&Lu(),Yn(e),u=e.pendingLanes,(l&4194090)!==0&&(u&42)!==0?e===Ki?Aa++:(Aa=0,Ki=e):Aa=0,Ea(0)}}function Is(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,na(n)))}function Lu(e){return Fs(),Ws(),$s(),Ps()}function Ps(){if(Xe!==5)return!1;var e=gl,n=Zi;Zi=0;var l=hr(xt),t=_.T,u=H.p;try{H.p=32>l?32:l,_.T=null,l=Vi,Vi=null;var r=gl,c=xt;if(Xe=0,Tt=gl=null,xt=0,(he&6)!==0)throw Error(f(331));var s=he;if(he|=4,Ys(r.current),Us(r,r.current,c,l),he=s,Ea(0,!1),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Lt,r)}catch{}return!0}finally{H.p=u,_.T=t,Is(e,n)}}function ed(e,n,l){n=bn(l,n),n=Mi(e.stateNode,n,2),e=cl(e,n,2),e!==null&&(qt(e,2),Yn(e))}function be(e,n,l){if(e.tag===3)ed(e,e,l);else for(;n!==null;){if(n.tag===3){ed(n,e,l);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(pl===null||!pl.has(t))){e=bn(l,e),l=as(2),t=cl(n,l,2),t!==null&&(us(l,t,n,e),qt(t,2),Yn(t));break}}n=n.return}}function $i(e,n,l){var t=e.pingCache;if(t===null){t=e.pingCache=new _v;var u=new Set;t.set(n,u)}else u=t.get(n),u===void 0&&(u=new Set,t.set(n,u));u.has(l)||(wi=!0,u.add(l),e=zv.bind(null,e,n,l),n.then(e,e))}function zv(e,n,l){var t=e.pingCache;t!==null&&t.delete(n),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ae===e&&(ce&l)===l&&(Oe===4||Oe===3&&(ce&62914560)===ce&&300>Rn()-Ji?(he&2)===0&&Mt(e,0):Qi|=l,Et===ce&&(Et=0)),Yn(e)}function nd(e,n){n===0&&(n=Fc()),e=it(e,n),e!==null&&(qt(e,n),Yn(e))}function Uv(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),nd(e,l)}function Bv(e,n){var l=0;switch(e.tag){case 13:var t=e.stateNode,u=e.memoizedState;u!==null&&(l=u.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(f(314))}t!==null&&t.delete(n),nd(e,l)}function Hv(e,n){return or(e,n)}var ju=null,_t=null,Ii=!1,qu=!1,Pi=!1,Zl=0;function Yn(e){e!==_t&&e.next===null&&(_t===null?ju=_t=e:_t=_t.next=e),qu=!0,Ii||(Ii=!0,Lv())}function Ea(e,n){if(!Pi&&qu){Pi=!0;do for(var l=!1,t=ju;t!==null;){if(e!==0){var u=t.pendingLanes;if(u===0)var r=0;else{var c=t.suspendedLanes,s=t.pingedLanes;r=(1<<31-on(42|e)+1)-1,r&=u&~(c&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(l=!0,ud(t,r))}else r=ce,r=Za(t,t===Ae?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(r&3)===0||jt(t,r)||(l=!0,ud(t,r));t=t.next}while(l);Pi=!1}}function Yv(){ld()}function ld(){qu=Ii=!1;var e=0;Zl!==0&&(Zv()&&(e=Zl),Zl=0);for(var n=Rn(),l=null,t=ju;t!==null;){var u=t.next,r=td(t,n);r===0?(t.next=null,l===null?ju=u:l.next=u,u===null&&(_t=l)):(l=t,(e!==0||(r&3)!==0)&&(qu=!0)),t=u}Ea(e)}function td(e,n){for(var l=e.suspendedLanes,t=e.pingedLanes,u=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-on(r),s=1<<c,h=u[c];h===-1?((s&l)===0||(s&t)!==0)&&(u[c]=c1(s,n)):h<=n&&(e.expiredLanes|=s),r&=~s}if(n=Ae,l=ce,l=Za(e,e===n?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,l===0||e===n&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&sr(t),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||jt(e,l)){if(n=l&-l,n===e.callbackPriority)return n;switch(t!==null&&sr(t),hr(l)){case 2:case 8:l=Vc;break;case 32:l=Qa;break;case 268435456:l=Kc;break;default:l=Qa}return t=ad.bind(null,e),l=or(l,t),e.callbackPriority=n,e.callbackNode=l,n}return t!==null&&t!==null&&sr(t),e.callbackPriority=2,e.callbackNode=null,2}function ad(e,n){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Lu()&&e.callbackNode!==l)return null;var t=ce;return t=Za(e,e===Ae?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Gs(e,t,n),td(e,Rn()),e.callbackNode!=null&&e.callbackNode===l?ad.bind(null,e):null)}function ud(e,n){if(Lu())return null;Gs(e,n,!0)}function Lv(){Kv(function(){(he&6)!==0?or(Zc,Yv):ld()})}function ec(){return Zl===0&&(Zl=kc()),Zl}function rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wa(""+e)}function id(e,n){var l=n.ownerDocument.createElement("input");return l.name=n.name,l.value=n.value,e.id&&l.setAttribute("form",e.id),n.parentNode.insertBefore(l,n),e=new FormData(e),l.parentNode.removeChild(l),e}function jv(e,n,l,t,u){if(n==="submit"&&l&&l.stateNode===u){var r=rd((u[en]||null).action),c=t.submitter;c&&(n=(n=c[en]||null)?rd(n.formAction):c.getAttribute("formAction"),n!==null&&(r=n,c=null));var s=new eu("action","action",null,t,u);e.push({event:s,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Zl!==0){var h=c?id(u,c):new FormData(u);bi(l,{pending:!0,data:h,method:u.method,action:r},null,h)}}else typeof r=="function"&&(s.preventDefault(),h=c?id(u,c):new FormData(u),bi(l,{pending:!0,data:h,method:u.method,action:r},r,h))},currentTarget:u}]})}}for(var nc=0;nc<qr.length;nc++){var lc=qr[nc],qv=lc.toLowerCase(),Gv=lc[0].toUpperCase()+lc.slice(1);_n(qv,"on"+Gv)}_n(qf,"onAnimationEnd"),_n(Gf,"onAnimationIteration"),_n(wf,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(tv,"onTransitionRun"),_n(av,"onTransitionStart"),_n(uv,"onTransitionCancel"),_n(Qf,"onTransitionEnd"),$l("onMouseEnter",["mouseout","mouseover"]),$l("onMouseLeave",["mouseout","mouseover"]),$l("onPointerEnter",["pointerout","pointerover"]),$l("onPointerLeave",["pointerout","pointerover"]),Cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ta));function cd(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var t=e[l],u=t.event;t=t.listeners;e:{var r=void 0;if(n)for(var c=t.length-1;0<=c;c--){var s=t[c],h=s.instance,T=s.currentTarget;if(s=s.listener,h!==r&&u.isPropagationStopped())break e;r=s,u.currentTarget=T;try{r(u)}catch(D){Ou(D)}u.currentTarget=null,r=h}else for(c=0;c<t.length;c++){if(s=t[c],h=s.instance,T=s.currentTarget,s=s.listener,h!==r&&u.isPropagationStopped())break e;r=s,u.currentTarget=T;try{r(u)}catch(D){Ou(D)}u.currentTarget=null,r=h}}}}function ie(e,n){var l=n[yr];l===void 0&&(l=n[yr]=new Set);var t=e+"__bubble";l.has(t)||(fd(n,e,2,!1),l.add(t))}function tc(e,n,l){var t=0;n&&(t|=4),fd(l,e,t,n)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function ac(e){if(!e[Gu]){e[Gu]=!0,ef.forEach(function(l){l!=="selectionchange"&&(wv.has(l)||tc(l,!1,e),tc(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gu]||(n[Gu]=!0,tc("selectionchange",!1,n))}}function fd(e,n,l,t){switch(Ud(n)){case 2:var u=hh;break;case 8:u=yh;break;default:u=gc}l=u.bind(null,n,l,e),u=void 0,!Or||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),t?u!==void 0?e.addEventListener(n,l,{capture:!0,passive:u}):e.addEventListener(n,l,!0):u!==void 0?e.addEventListener(n,l,{passive:u}):e.addEventListener(n,l,!1)}function uc(e,n,l,t,u){var r=t;if((n&1)===0&&(n&2)===0&&t!==null)e:for(;;){if(t===null)return;var c=t.tag;if(c===3||c===4){var s=t.stateNode.containerInfo;if(s===u)break;if(c===4)for(c=t.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===u)return;c=c.return}for(;s!==null;){if(c=kl(s),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){t=r=c;continue e}s=s.parentNode}}t=t.return}yf(function(){var T=r,D=xr(l),R=[];e:{var x=Xf.get(e);if(x!==void 0){var M=eu,W=e;switch(e){case"keypress":if(Ia(l)===0)break e;case"keydown":case"keyup":M=H1;break;case"focusin":W="focus",M=Nr;break;case"focusout":W="blur",M=Nr;break;case"beforeblur":case"afterblur":M=Nr;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=j1;break;case qf:case Gf:case wf:M=O1;break;case Qf:M=G1;break;case"scroll":case"scrollend":M=A1;break;case"wheel":M=Q1;break;case"copy":case"cut":case"paste":M=D1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=bf;break;case"toggle":case"beforetoggle":M=J1}var k=(n&4)!==0,ge=!k&&(e==="scroll"||e==="scrollend"),A=k?x!==null?x+"Capture":null:x;k=[];for(var S=T,E;S!==null;){var C=S;if(E=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||E===null||A===null||(C=Qt(S,A),C!=null&&k.push(xa(S,C,E))),ge)break;S=S.return}0<k.length&&(x=new M(x,W,null,l,D),R.push({event:x,listeners:k}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",x&&l!==Tr&&(W=l.relatedTarget||l.fromElement)&&(kl(W)||W[Kl]))break e;if((M||x)&&(x=D.window===D?D:(x=D.ownerDocument)?x.defaultView||x.parentWindow:window,M?(W=l.relatedTarget||l.toElement,M=T,W=W?kl(W):null,W!==null&&(ge=y(W),k=W.tag,W!==ge||k!==5&&k!==27&&k!==6)&&(W=null)):(M=null,W=T),M!==W)){if(k=gf,C="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(k=bf,C="onPointerLeave",A="onPointerEnter",S="pointer"),ge=M==null?x:wt(M),E=W==null?x:wt(W),x=new k(C,S+"leave",M,l,D),x.target=ge,x.relatedTarget=E,C=null,kl(D)===T&&(k=new k(A,S+"enter",W,l,D),k.target=E,k.relatedTarget=ge,C=k),ge=C,M&&W)n:{for(k=M,A=W,S=0,E=k;E;E=Dt(E))S++;for(E=0,C=A;C;C=Dt(C))E++;for(;0<S-E;)k=Dt(k),S--;for(;0<E-S;)A=Dt(A),E--;for(;S--;){if(k===A||A!==null&&k===A.alternate)break n;k=Dt(k),A=Dt(A)}k=null}else k=null;M!==null&&od(R,x,M,k,!1),W!==null&&ge!==null&&od(R,ge,W,k,!0)}}e:{if(x=T?wt(T):window,M=x.nodeName&&x.nodeName.toLowerCase(),M==="select"||M==="input"&&x.type==="file")var q=Df;else if(Of(x))if(Cf)q=ev;else{q=I1;var ue=$1}else M=x.nodeName,!M||M.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?T&&Er(T.elementType)&&(q=Df):q=P1;if(q&&(q=q(e,T))){_f(R,q,l,D);break e}ue&&ue(e,x,T),e==="focusout"&&T&&x.type==="number"&&T.memoizedProps.value!=null&&Ar(x,"number",x.value)}switch(ue=T?wt(T):window,e){case"focusin":(Of(ue)||ue.contentEditable==="true")&&(at=ue,Yr=T,Wt=null);break;case"focusout":Wt=Yr=at=null;break;case"mousedown":Lr=!0;break;case"contextmenu":case"mouseup":case"dragend":Lr=!1,Lf(R,l,D);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Lf(R,l,D)}var Q;if(zr)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else tt?xf(e,l)&&(F="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(F="onCompositionStart");F&&(Af&&l.locale!=="ko"&&(tt||F!=="onCompositionStart"?F==="onCompositionEnd"&&tt&&(Q=mf()):(al=D,_r="value"in al?al.value:al.textContent,tt=!0)),ue=wu(T,F),0<ue.length&&(F=new Sf(F,e,null,l,D),R.push({event:F,listeners:ue}),Q?F.data=Q:(Q=Mf(l),Q!==null&&(F.data=Q)))),(Q=V1?K1(e,l):k1(e,l))&&(F=wu(T,"onBeforeInput"),0<F.length&&(ue=new Sf("onBeforeInput","beforeinput",null,l,D),R.push({event:ue,listeners:F}),ue.data=Q)),jv(R,e,T,l,D)}cd(R,n)})}function xa(e,n,l){return{instance:e,listener:n,currentTarget:l}}function wu(e,n){for(var l=n+"Capture",t=[];e!==null;){var u=e,r=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||r===null||(u=Qt(e,l),u!=null&&t.unshift(xa(e,u,r)),u=Qt(e,n),u!=null&&t.push(xa(e,u,r))),e.tag===3)return t;e=e.return}return[]}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function od(e,n,l,t,u){for(var r=n._reactName,c=[];l!==null&&l!==t;){var s=l,h=s.alternate,T=s.stateNode;if(s=s.tag,h!==null&&h===t)break;s!==5&&s!==26&&s!==27||T===null||(h=T,u?(T=Qt(l,r),T!=null&&c.unshift(xa(l,T,h))):u||(T=Qt(l,r),T!=null&&c.push(xa(l,T,h)))),l=l.return}c.length!==0&&e.push({event:n,listeners:c})}var Qv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Qv,`
`).replace(Xv,"")}function dd(e,n){return n=sd(n),sd(e)===n}function Qu(){}function pe(e,n,l,t,u,r){switch(l){case"children":typeof t=="string"?n==="body"||n==="textarea"&&t===""||et(e,t):(typeof t=="number"||typeof t=="bigint")&&n!=="body"&&et(e,""+t);break;case"className":Ka(e,"class",t);break;case"tabIndex":Ka(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ka(e,l,t);break;case"style":vf(e,t,r);break;case"data":if(n!=="object"){Ka(e,"data",t);break}case"src":case"href":if(t===""&&(n!=="a"||l!=="href")){e.removeAttribute(l);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(l);break}t=Wa(""+t),e.setAttribute(l,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(l==="formAction"?(n!=="input"&&pe(e,n,"name",u.name,u,null),pe(e,n,"formEncType",u.formEncType,u,null),pe(e,n,"formMethod",u.formMethod,u,null),pe(e,n,"formTarget",u.formTarget,u,null)):(pe(e,n,"encType",u.encType,u,null),pe(e,n,"method",u.method,u,null),pe(e,n,"target",u.target,u,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(l);break}t=Wa(""+t),e.setAttribute(l,t);break;case"onClick":t!=null&&(e.onclick=Qu);break;case"onScroll":t!=null&&ie("scroll",e);break;case"onScrollEnd":t!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(f(61));if(l=t.__html,l!=null){if(u.children!=null)throw Error(f(60));e.innerHTML=l}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}l=Wa(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,""+t):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":t===!0?e.setAttribute(l,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,t):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(l,t):e.removeAttribute(l);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(l):e.setAttribute(l,t);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Va(e,"popover",t);break;case"xlinkActuate":qn(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":qn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":qn(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":qn(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":qn(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":qn(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":qn(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":qn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":qn(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Va(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=S1.get(l)||l,Va(e,l,t))}}function rc(e,n,l,t,u,r){switch(l){case"style":vf(e,t,r);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(f(61));if(l=t.__html,l!=null){if(u.children!=null)throw Error(f(60));e.innerHTML=l}}break;case"children":typeof t=="string"?et(e,t):(typeof t=="number"||typeof t=="bigint")&&et(e,""+t);break;case"onScroll":t!=null&&ie("scroll",e);break;case"onScrollEnd":t!=null&&ie("scrollend",e);break;case"onClick":t!=null&&(e.onclick=Qu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),n=l.slice(2,u?l.length-7:void 0),r=e[en]||null,r=r!=null?r[l]:null,typeof r=="function"&&e.removeEventListener(n,r,u),typeof t=="function")){typeof r!="function"&&r!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(n,t,u);break e}l in e?e[l]=t:t===!0?e.setAttribute(l,""):Va(e,l,t)}}}function Je(e,n,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var t=!1,u=!1,r;for(r in l)if(l.hasOwnProperty(r)){var c=l[r];if(c!=null)switch(r){case"src":t=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:pe(e,n,r,c,l,null)}}u&&pe(e,n,"srcSet",l.srcSet,l,null),t&&pe(e,n,"src",l.src,l,null);return;case"input":ie("invalid",e);var s=r=c=u=null,h=null,T=null;for(t in l)if(l.hasOwnProperty(t)){var D=l[t];if(D!=null)switch(t){case"name":u=D;break;case"type":c=D;break;case"checked":h=D;break;case"defaultChecked":T=D;break;case"value":r=D;break;case"defaultValue":s=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(f(137,n));break;default:pe(e,n,t,D,l,null)}}ff(e,r,s,h,T,c,u,!1),ka(e);return;case"select":ie("invalid",e),t=c=r=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":r=s;break;case"defaultValue":c=s;break;case"multiple":t=s;default:pe(e,n,u,s,l,null)}n=r,l=c,e.multiple=!!t,n!=null?Pl(e,!!t,n,!1):l!=null&&Pl(e,!!t,l,!0);return;case"textarea":ie("invalid",e),r=u=t=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":t=s;break;case"defaultValue":u=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:pe(e,n,c,s,l,null)}sf(e,t,u,r),ka(e);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(t=l[h],t!=null))switch(h){case"selected":e.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:pe(e,n,h,t,l,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(t=0;t<Ta.length;t++)ie(Ta[t],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in l)if(l.hasOwnProperty(T)&&(t=l[T],t!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:pe(e,n,T,t,l,null)}return;default:if(Er(n)){for(D in l)l.hasOwnProperty(D)&&(t=l[D],t!==void 0&&rc(e,n,D,t,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(t=l[s],t!=null&&pe(e,n,s,t,l,null))}function Jv(e,n,l,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,r=null,c=null,s=null,h=null,T=null,D=null;for(M in l){var R=l[M];if(l.hasOwnProperty(M)&&R!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":h=R;default:t.hasOwnProperty(M)||pe(e,n,M,null,t,R)}}for(var x in t){var M=t[x];if(R=l[x],t.hasOwnProperty(x)&&(M!=null||R!=null))switch(x){case"type":r=M;break;case"name":u=M;break;case"checked":T=M;break;case"defaultChecked":D=M;break;case"value":c=M;break;case"defaultValue":s=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(f(137,n));break;default:M!==R&&pe(e,n,x,M,t,R)}}br(e,c,s,h,T,D,r,u);return;case"select":M=c=s=x=null;for(r in l)if(h=l[r],l.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":M=h;default:t.hasOwnProperty(r)||pe(e,n,r,null,t,h)}for(u in t)if(r=t[u],h=l[u],t.hasOwnProperty(u)&&(r!=null||h!=null))switch(u){case"value":x=r;break;case"defaultValue":s=r;break;case"multiple":c=r;default:r!==h&&pe(e,n,u,r,t,h)}n=s,l=c,t=M,x!=null?Pl(e,!!l,x,!1):!!t!=!!l&&(n!=null?Pl(e,!!l,n,!0):Pl(e,!!l,l?[]:"",!1));return;case"textarea":M=x=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!t.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:pe(e,n,s,null,t,u)}for(c in t)if(u=t[c],r=l[c],t.hasOwnProperty(c)&&(u!=null||r!=null))switch(c){case"value":x=u;break;case"defaultValue":M=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:u!==r&&pe(e,n,c,u,t,r)}of(e,x,M);return;case"option":for(var W in l)if(x=l[W],l.hasOwnProperty(W)&&x!=null&&!t.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:pe(e,n,W,null,t,x)}for(h in t)if(x=t[h],M=l[h],t.hasOwnProperty(h)&&x!==M&&(x!=null||M!=null))switch(h){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:pe(e,n,h,x,t,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in l)x=l[k],l.hasOwnProperty(k)&&x!=null&&!t.hasOwnProperty(k)&&pe(e,n,k,null,t,x);for(T in t)if(x=t[T],M=l[T],t.hasOwnProperty(T)&&x!==M&&(x!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,n));break;default:pe(e,n,T,x,t,M)}return;default:if(Er(n)){for(var ge in l)x=l[ge],l.hasOwnProperty(ge)&&x!==void 0&&!t.hasOwnProperty(ge)&&rc(e,n,ge,void 0,t,x);for(D in t)x=t[D],M=l[D],!t.hasOwnProperty(D)||x===M||x===void 0&&M===void 0||rc(e,n,D,x,t,M);return}}for(var A in l)x=l[A],l.hasOwnProperty(A)&&x!=null&&!t.hasOwnProperty(A)&&pe(e,n,A,null,t,x);for(R in t)x=t[R],M=l[R],!t.hasOwnProperty(R)||x===M||x==null&&M==null||pe(e,n,R,x,t,M)}var ic=null,cc=null;function Xu(e){return e.nodeType===9?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hd(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function fc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oc=null;function Zv(){var e=window.event;return e&&e.type==="popstate"?e===oc?!1:(oc=e,!0):(oc=null,!1)}var yd=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(kv)}:yd;function kv(e){setTimeout(function(){throw e})}function bl(e){return e==="head"}function pd(e,n){var l=n,t=0,u=0;do{var r=l.nextSibling;if(e.removeChild(l),r&&r.nodeType===8)if(l=r.data,l==="/$"){if(0<t&&8>t){l=t;var c=e.ownerDocument;if(l&1&&Ma(c.documentElement),l&2&&Ma(c.body),l&4)for(l=c.head,Ma(l),c=l.firstChild;c;){var s=c.nextSibling,h=c.nodeName;c[Gt]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=s}}if(u===0){e.removeChild(r),Ua(n);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:t=l.charCodeAt(0)-48;else t=0;l=r}while(l);Ua(n)}function sc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var l=n;switch(n=n.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":sc(l),mr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Fv(e,n,l,t){for(;e.nodeType===1;){var u=l;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[Gt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Cn(e.nextSibling),e===null)break}return null}function Wv(e,n,l){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Cn(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $v(e,n){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")n();else{var t=function(){n(),l.removeEventListener("DOMContentLoaded",t)};l.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var vc=null;function gd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(n===0)return e;n--}else l==="/$"&&n++}e=e.previousSibling}return null}function Sd(e,n,l){switch(n=Xu(l),e){case"html":if(e=n.documentElement,!e)throw Error(f(452));return e;case"head":if(e=n.head,!e)throw Error(f(453));return e;case"body":if(e=n.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function Ma(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);mr(e)}var On=new Map,bd=new Set;function Ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pn=H.d;H.d={f:Iv,r:Pv,D:eh,C:nh,L:lh,m:th,X:uh,S:ah,M:rh};function Iv(){var e=Pn.f(),n=Hu();return e||n}function Pv(e){var n=Fl(e);n!==null&&n.tag===5&&n.type==="form"?Go(n):Pn.r(e)}var Ct=typeof document>"u"?null:document;function Ad(e,n,l){var t=Ct;if(t&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),bd.has(u)||(bd.add(u),e={rel:e,crossOrigin:l,href:n},t.querySelector(u)===null&&(n=t.createElement("link"),Je(n,"link",e),je(n),t.head.appendChild(n)))}}function eh(e){Pn.D(e),Ad("dns-prefetch",e,null)}function nh(e,n){Pn.C(e,n),Ad("preconnect",e,n)}function lh(e,n,l){Pn.L(e,n,l);var t=Ct;if(t&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Sn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Sn(l.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var r=u;switch(n){case"style":r=Nt(e);break;case"script":r=Rt(e)}On.has(r)||(e=O({rel:"preload",href:n==="image"&&l&&l.imageSrcSet?void 0:e,as:n},l),On.set(r,e),t.querySelector(u)!==null||n==="style"&&t.querySelector(Oa(r))||n==="script"&&t.querySelector(_a(r))||(n=t.createElement("link"),Je(n,"link",e),je(n),t.head.appendChild(n)))}}function th(e,n){Pn.m(e,n);var l=Ct;if(l&&e){var t=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(t)+'"][href="'+Sn(e)+'"]',r=u;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Rt(e)}if(!On.has(r)&&(e=O({rel:"modulepreload",href:e},n),On.set(r,e),l.querySelector(u)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(_a(r)))return}t=l.createElement("link"),Je(t,"link",e),je(t),l.head.appendChild(t)}}}function ah(e,n,l){Pn.S(e,n,l);var t=Ct;if(t&&e){var u=Wl(t).hoistableStyles,r=Nt(e);n=n||"default";var c=u.get(r);if(!c){var s={loading:0,preload:null};if(c=t.querySelector(Oa(r)))s.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":n},l),(l=On.get(r))&&hc(e,l);var h=c=t.createElement("link");je(h),Je(h,"link",e),h._p=new Promise(function(T,D){h.onload=T,h.onerror=D}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Zu(c,n,t)}c={type:"stylesheet",instance:c,count:1,state:s},u.set(r,c)}}}function uh(e,n){Pn.X(e,n);var l=Ct;if(l&&e){var t=Wl(l).hoistableScripts,u=Rt(e),r=t.get(u);r||(r=l.querySelector(_a(u)),r||(e=O({src:e,async:!0},n),(n=On.get(u))&&yc(e,n),r=l.createElement("script"),je(r),Je(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},t.set(u,r))}}function rh(e,n){Pn.M(e,n);var l=Ct;if(l&&e){var t=Wl(l).hoistableScripts,u=Rt(e),r=t.get(u);r||(r=l.querySelector(_a(u)),r||(e=O({src:e,async:!0,type:"module"},n),(n=On.get(u))&&yc(e,n),r=l.createElement("script"),je(r),Je(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},t.set(u,r))}}function Ed(e,n,l,t){var u=(u=ee.current)?Ju(u):null;if(!u)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(n=Nt(l.href),l=Wl(u).hoistableStyles,t=l.get(n),t||(t={type:"style",instance:null,count:0,state:null},l.set(n,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Nt(l.href);var r=Wl(u).hoistableStyles,c=r.get(e);if(c||(u=u.ownerDocument||u,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=u.querySelector(Oa(e)))&&!r._p&&(c.instance=r,c.state.loading=5),On.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},On.set(e,l),r||ih(u,e,l,c.state))),n&&t===null)throw Error(f(528,""));return c}if(n&&t!==null)throw Error(f(529,""));return null;case"script":return n=l.async,l=l.src,typeof l=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rt(l),l=Wl(u).hoistableScripts,t=l.get(n),t||(t={type:"script",instance:null,count:0,state:null},l.set(n,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Nt(e){return'href="'+Sn(e)+'"'}function Oa(e){return'link[rel="stylesheet"]['+e+"]"}function Td(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function ih(e,n,l,t){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?t.loading=1:(n=e.createElement("link"),t.preload=n,n.addEventListener("load",function(){return t.loading|=1}),n.addEventListener("error",function(){return t.loading|=2}),Je(n,"link",l),je(n),e.head.appendChild(n))}function Rt(e){return'[src="'+Sn(e)+'"]'}function _a(e){return"script[async]"+e}function xd(e,n,l){if(n.count++,n.instance===null)switch(n.type){case"style":var t=e.querySelector('style[data-href~="'+Sn(l.href)+'"]');if(t)return n.instance=t,je(t),t;var u=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),je(t),Je(t,"style",u),Zu(t,l.precedence,e),n.instance=t;case"stylesheet":u=Nt(l.href);var r=e.querySelector(Oa(u));if(r)return n.state.loading|=4,n.instance=r,je(r),r;t=Td(l),(u=On.get(u))&&hc(t,u),r=(e.ownerDocument||e).createElement("link"),je(r);var c=r;return c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Je(r,"link",t),n.state.loading|=4,Zu(r,l.precedence,e),n.instance=r;case"script":return r=Rt(l.src),(u=e.querySelector(_a(r)))?(n.instance=u,je(u),u):(t=l,(u=On.get(r))&&(t=O({},l),yc(t,u)),e=e.ownerDocument||e,u=e.createElement("script"),je(u),Je(u,"link",t),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(f(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(t=n.instance,n.state.loading|=4,Zu(t,l.precedence,e));return n.instance}function Zu(e,n,l){for(var t=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=t.length?t[t.length-1]:null,r=u,c=0;c<t.length;c++){var s=t[c];if(s.dataset.precedence===n)r=s;else if(r!==u)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=l.nodeType===9?l.head:l,n.insertBefore(e,n.firstChild))}function hc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function yc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vu=null;function Md(e,n,l){if(Vu===null){var t=new Map,u=Vu=new Map;u.set(l,t)}else u=Vu,t=u.get(l),t||(t=new Map,u.set(l,t));if(t.has(e))return t;for(t.set(e,null),l=l.getElementsByTagName(e),u=0;u<l.length;u++){var r=l[u];if(!(r[Gt]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(n)||"";c=e+c;var s=t.get(c);s?s.push(r):t.set(c,[r])}}return t}function Od(e,n,l){e=e.ownerDocument||e,e.head.insertBefore(l,n==="title"?e.querySelector("head > title"):null)}function ch(e,n,l){if(l===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Da=null;function fh(){}function oh(e,n,l){if(Da===null)throw Error(f(475));var t=Da;if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Nt(l.href),r=e.querySelector(Oa(u));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ku.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,je(r);return}r=e.ownerDocument||e,l=Td(l),(u=On.get(u))&&hc(l,u),r=r.createElement("link"),je(r);var c=r;c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Je(r,"link",l),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ku.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}function sh(){if(Da===null)throw Error(f(475));var e=Da;return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count?function(n){var l=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Ku(){if(this.count--,this.count===0){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ku=null;function mc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ku=new Map,n.forEach(dh,e),ku=null,Ku.call(e))}function dh(e,n){if(!(n.state.loading&4)){var l=ku.get(e);if(l)var t=l.get(null);else{l=new Map,ku.set(e,l);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<u.length;r++){var c=u[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),t=c)}t&&l.set(null,t)}u=n.instance,c=u.getAttribute("data-precedence"),r=l.get(c)||t,r===t&&l.set(null,u),l.set(c,u),this.count++,t=Ku.bind(this),u.addEventListener("load",t),u.addEventListener("error",t),r?r.parentNode.insertBefore(u,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ca={$$typeof:I,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function vh(e,n,l,t,u,r,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.hiddenUpdates=dr(null),this.identifierPrefix=t,this.onUncaughtError=u,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Dd(e,n,l,t,u,r,c,s,h,T,D,R){return e=new vh(e,n,l,c,s,h,T,R),n=1,r===!0&&(n|=24),r=dn(3,null,null,n),e.current=r,r.stateNode=e,n=$r(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:t,isDehydrated:l,cache:n},ni(r),e}function Cd(e){return e?(e=ct,e):ct}function Nd(e,n,l,t,u,r){u=Cd(u),t.context===null?t.context=u:t.pendingContext=u,t=il(n),t.payload={element:l},r=r===void 0?null:r,r!==null&&(t.callback=r),l=cl(e,t,n),l!==null&&(pn(l,e,n),ua(l,e,n))}function Rd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function pc(e,n){Rd(e,n),(e=e.alternate)&&Rd(e,n)}function zd(e){if(e.tag===13){var n=it(e,67108864);n!==null&&pn(n,e,67108864),pc(e,67108864)}}var Fu=!0;function hh(e,n,l,t){var u=_.T;_.T=null;var r=H.p;try{H.p=2,gc(e,n,l,t)}finally{H.p=r,_.T=u}}function yh(e,n,l,t){var u=_.T;_.T=null;var r=H.p;try{H.p=8,gc(e,n,l,t)}finally{H.p=r,_.T=u}}function gc(e,n,l,t){if(Fu){var u=Sc(t);if(u===null)uc(e,n,t,Wu,l),Bd(e,t);else if(ph(u,e,n,l,t))t.stopPropagation();else if(Bd(e,t),n&4&&-1<mh.indexOf(e)){for(;u!==null;){var r=Fl(u);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Dl(r.pendingLanes);if(c!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var h=1<<31-on(c);s.entanglements[1]|=h,c&=~h}Yn(r),(he&6)===0&&(Uu=Rn()+500,Ea(0))}}break;case 13:s=it(r,2),s!==null&&pn(s,r,2),Hu(),pc(r,2)}if(r=Sc(t),r===null&&uc(e,n,t,Wu,l),r===u)break;u=r}u!==null&&t.stopPropagation()}else uc(e,n,t,null,l)}}function Sc(e){return e=xr(e),bc(e)}var Wu=null;function bc(e){if(Wu=null,e=kl(e),e!==null){var n=y(e);if(n===null)e=null;else{var l=n.tag;if(l===13){if(e=v(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Wu=e,null}function Ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(n1()){case Zc:return 2;case Vc:return 8;case Qa:case l1:return 32;case Kc:return 268435456;default:return 32}default:return 32}}var Ac=!1,Al=null,El=null,Tl=null,Na=new Map,Ra=new Map,xl=[],mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bd(e,n){switch(e){case"focusin":case"focusout":Al=null;break;case"dragenter":case"dragleave":El=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":Na.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(n.pointerId)}}function za(e,n,l,t,u,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:l,eventSystemFlags:t,nativeEvent:r,targetContainers:[u]},n!==null&&(n=Fl(n),n!==null&&zd(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ph(e,n,l,t,u){switch(n){case"focusin":return Al=za(Al,e,n,l,t,u),!0;case"dragenter":return El=za(El,e,n,l,t,u),!0;case"mouseover":return Tl=za(Tl,e,n,l,t,u),!0;case"pointerover":var r=u.pointerId;return Na.set(r,za(Na.get(r)||null,e,n,l,t,u)),!0;case"gotpointercapture":return r=u.pointerId,Ra.set(r,za(Ra.get(r)||null,e,n,l,t,u)),!0}return!1}function Hd(e){var n=kl(e.target);if(n!==null){var l=y(n);if(l!==null){if(n=l.tag,n===13){if(n=v(l),n!==null){e.blockedOn=n,o1(e.priority,function(){if(l.tag===13){var t=mn();t=vr(t);var u=it(l,t);u!==null&&pn(u,l,t),pc(l,t)}});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=Sc(e.nativeEvent);if(l===null){l=e.nativeEvent;var t=new l.constructor(l.type,l);Tr=t,l.target.dispatchEvent(t),Tr=null}else return n=Fl(l),n!==null&&zd(n),e.blockedOn=l,!1;n.shift()}return!0}function Yd(e,n,l){$u(e)&&l.delete(n)}function gh(){Ac=!1,Al!==null&&$u(Al)&&(Al=null),El!==null&&$u(El)&&(El=null),Tl!==null&&$u(Tl)&&(Tl=null),Na.forEach(Yd),Ra.forEach(Yd)}function Iu(e,n){e.blockedOn===n&&(e.blockedOn=null,Ac||(Ac=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,gh)))}var Pu=null;function Ld(e){Pu!==e&&(Pu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var n=0;n<e.length;n+=3){var l=e[n],t=e[n+1],u=e[n+2];if(typeof t!="function"){if(bc(t||l)===null)continue;break}var r=Fl(l);r!==null&&(e.splice(n,3),n-=3,bi(r,{pending:!0,data:u,method:l.method,action:t},t,u))}}))}function Ua(e){function n(h){return Iu(h,e)}Al!==null&&Iu(Al,e),El!==null&&Iu(El,e),Tl!==null&&Iu(Tl,e),Na.forEach(n),Ra.forEach(n);for(var l=0;l<xl.length;l++){var t=xl[l];t.blockedOn===e&&(t.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)Hd(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(t=0;t<l.length;t+=3){var u=l[t],r=l[t+1],c=u[en]||null;if(typeof r=="function")c||Ld(l);else if(c){var s=null;if(r&&r.hasAttribute("formAction")){if(u=r,c=r[en]||null)s=c.formAction;else if(bc(u)!==null)continue}else s=c.action;typeof s=="function"?l[t+1]=s:(l.splice(t,3),t-=3),Ld(l)}}}function Ec(e){this._internalRoot=e}er.prototype.render=Ec.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(f(409));var l=n.current,t=mn();Nd(l,t,e,n,null,null)},er.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nd(e.current,2,null,e,null,null),Hu(),n[Kl]=null}};function er(e){this._internalRoot=e}er.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ic();e={blockedOn:null,target:e,priority:n};for(var l=0;l<xl.length&&n!==0&&n<xl[l].priority;l++);xl.splice(l,0,e),l===0&&Hd(e)}};var jd=i.version;if(jd!=="19.1.1")throw Error(f(527,jd,"19.1.1"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=m(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Sh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{Lt=nr.inject(Sh),fn=nr}catch{}}return Ha.createRoot=function(e,n){if(!d(e))throw Error(f(299));var l=!1,t="",u=es,r=ns,c=ls,s=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(s=n.unstable_transitionCallbacks)),n=Dd(e,1,!1,null,null,l,t,u,r,c,s,null),e[Kl]=n.current,ac(e),new Ec(n)},Ha.hydrateRoot=function(e,n,l){if(!d(e))throw Error(f(299));var t=!1,u="",r=es,c=ns,s=ls,h=null,T=null;return l!=null&&(l.unstable_strictMode===!0&&(t=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(r=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(T=l.formState)),n=Dd(e,1,!0,n,l??null,t,u,r,c,s,h,T),n.context=Cd(null),l=n.current,t=mn(),t=vr(t),u=il(t),u.callback=null,cl(l,u,t),l=t,n.current.lanes=l,qt(n,l),Yn(n),e[Kl]=n.current,ac(e),new er(n)},Ha.version="19.1.1",Ha}var kd;function Ch(){if(kd)return Mc.exports;kd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Mc.exports=Dh(),Mc.exports}var Nh=Ch();function Rh({dates:a}){const[i,o]=Nn.useState(1),[f,d]=Nn.useState("forward"),y=50,g=(()=>{if(f==="unsorted")return a;const J=I=>{if(!I.includes(","))return I.includes("BCE")?-parseInt(I.replace("BCE","").trim()):parseInt(I.replace("CE","").trim());const _e=I.split(",");if(_e.length>=2){const w=_e[_e.length-1].trim();return w.includes("BCE")?-parseInt(w.replace("BCE","").trim()):parseInt(w.replace("CE","").trim())}const te=I.match(/-?\d+/);return te?parseInt(te[0]):0},V=[...a].sort((I,_e)=>{const te=J(I.date),w=J(_e.date);return te-w});return f==="reverse"?V.reverse():V})(),m=Math.ceil(g.length/y),b=(i-1)*y,O=b+y,N=g.slice(b,O),U=J=>{o(J),document.querySelector(".dates-list")?.scrollIntoView({behavior:"smooth"})},B=J=>{d(J),o(1)},G=()=>{i>1&&U(i-1)},$=()=>{i<m&&U(i+1)},ne=()=>{const J=[];if(m<=5)for(let I=1;I<=m;I++)J.push(I);else if(i<=3){for(let I=1;I<=4;I++)J.push(I);J.push("..."),J.push(m)}else if(i>=m-2){J.push(1),J.push("...");for(let I=m-3;I<=m;I++)J.push(I)}else{J.push(1),J.push("...");for(let I=i-1;I<=i+1;I++)J.push(I);J.push("..."),J.push(m)}return J};return L.jsxs("div",{className:"dates-list",children:[L.jsxs("div",{className:"table-header",children:[L.jsx("h2",{children:"Historical Dates"}),L.jsxs("div",{className:"table-info",children:[L.jsxs("span",{children:["Total: ",g.length," events"]}),L.jsxs("span",{children:["Page ",i," of ",m]})]})]}),L.jsxs("div",{className:"sort-controls",children:[L.jsx("span",{className:"sort-label",children:"Sort by:"}),L.jsx("button",{className:`sort-btn ${f==="forward"?"active":""}`,onClick:()=>B("forward"),children:"Chronological (BCE → CE)"}),L.jsx("button",{className:`sort-btn ${f==="reverse"?"active":""}`,onClick:()=>B("reverse"),children:"Reverse (CE → BCE)"}),L.jsx("button",{className:`sort-btn ${f==="unsorted"?"active":""}`,onClick:()=>B("unsorted"),children:"Original Order"})]}),L.jsx("div",{className:"table-container",children:L.jsxs("table",{className:"dates-table",children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Date"}),L.jsx("th",{children:"Event Description"})]})}),L.jsx("tbody",{children:N.map((J,V)=>L.jsxs("tr",{className:"date-row",children:[L.jsx("td",{className:"date-cell",children:J.date}),L.jsx("td",{className:"description-cell",children:J.description})]},b+V))})]})}),m>1&&L.jsxs("div",{className:"pagination",children:[L.jsx("button",{className:"pagination-btn",onClick:G,disabled:i===1,children:"Previous"}),L.jsx("div",{className:"pagination-numbers",children:ne().map((J,V)=>J==="..."?L.jsx("span",{className:"pagination-ellipsis",children:"..."},V):L.jsx("button",{className:`pagination-number ${i===J?"active":""}`,onClick:()=>U(J),children:J},J))}),L.jsx("button",{className:"pagination-btn",onClick:$,disabled:i===m,children:"Next"})]})]})}function zh({dates:a}){const[i,o]=Nn.useState(null),[f,d]=Nn.useState({x:0,y:0}),[y,v]=Nn.useState(new Set),g={};a.forEach(w=>{const P=w.date;let fe;if(P.includes("BCE")){const Se=P.match(/(\d+)BCE/);Se&&(fe=-parseInt(Se[1]))}else{const Se=P.match(/(\d{1,4})$/);Se&&(fe=parseInt(Se[1]))}fe&&(g[fe]||(g[fe]=[]),g[fe].push(w.description))});const m=Object.keys(g).map(w=>parseInt(w)).filter(w=>!isNaN(w)),b=Math.min(...m),O=Math.max(...m),N=Math.floor(b/100),U=Math.floor(O/100),B=[];for(let w=N;w<=U;w++)B.push(w);const G=new Set;Object.keys(g).forEach(w=>{const P=parseInt(w),fe=Math.floor(P/100);G.add(fe)});const[$,ne]=Nn.useState(!1);if(!$){const w=new Set;B.forEach(P=>{G.has(P)||w.add(P)}),v(w),ne(!0)}const J=w=>{const P=new Set(y);P.has(w)?P.delete(w):P.add(w),v(P)},V=(w,P)=>{g[w]&&(o(w),d({x:P.clientX,y:P.clientY}))},I=()=>{o(null)},_e=w=>{if(w<0){const P=Math.abs(w),fe=Math.abs(w)*100,Se=fe-99;let Ie="th";return P===1?Ie="st":P===2?Ie="nd":P===3&&(Ie="rd"),`${P}${Ie} Century BCE (${fe} - ${Se} BCE)`}else{if(w===0)return"1st Century CE (1 - 100)";{const P=w+1,fe=w*100;let Se="th";return P===1?Se="st":P===2?Se="nd":P===3?Se="rd":P===21&&(Se="st"),`${P}${Se} Century (${fe}s)`}}},te=w=>{const P=w*100,fe=y.has(w),Se=G.has(w),Ie=[];if(!fe)for(let Pe=0;Pe<10;Pe++)for(let De=0;De<10;De++){const rn=P+Pe*10+De,jn=g[rn],Be=rn===0,_=w===-1&&Pe===9&&De===9,H=Be||_;let Z=rn.toString();Be?Z="Year 0 (does not exist)":_&&(Z="1 BCE (transitions to 1 CE)"),Ie.push(L.jsx("div",{className:`century-cell ${jn?"has-events":""} ${H?"year-zero":""}`,title:Z,onMouseEnter:H?void 0:ve=>V(rn,ve),onMouseLeave:H?void 0:I},rn))}return L.jsxs("div",{className:`century-container ${fe?"collapsed":""}`,children:[L.jsxs("div",{className:"century-header",onClick:()=>J(w),children:[L.jsx("div",{className:"century-label",children:_e(w)}),L.jsxs("div",{className:`century-toggle ${Se?"has-events":"no-events"}`,children:[L.jsx("span",{className:"toggle-icon",children:fe?"▶":"▼"}),Se&&L.jsx("span",{className:"event-indicator",children:"●"})]})]}),!fe&&L.jsx("div",{className:"century-grid",children:Ie})]},w)};return L.jsxs("div",{className:"century-grid-component",children:[L.jsx("h2",{children:"Historical Timeline"}),L.jsx("p",{className:"grid-description",children:"Each grid represents a century. Colored cells indicate years with recorded events."}),L.jsx("div",{className:"centuries-container",children:B.map(te)}),i&&g[i]&&L.jsxs("div",{className:"tooltip",style:{left:f.x+10,top:f.y-10,position:"fixed",zIndex:1e3},children:[L.jsx("div",{className:"tooltip-year",children:i}),L.jsx("ul",{className:"tooltip-events",children:g[i].map((w,P)=>L.jsx("li",{children:w},P))})]})]})}const Uh="modulepreload",Bh=function(a){return"/history-srs/"+a},Fd={},Hh=function(i,o,f){let d=Promise.resolve();if(o&&o.length>0){let b=function(O){return Promise.all(O.map(N=>Promise.resolve(N).then(U=>({status:"fulfilled",value:U}),U=>({status:"rejected",reason:U}))))};var v=b;document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),m=g?.nonce||g?.getAttribute("nonce");d=b(o.map(O=>{if(O=Bh(O),O in Fd)return;Fd[O]=!0;const N=O.endsWith(".css"),U=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${O}"]${U}`))return;const B=document.createElement("link");if(B.rel=N?"stylesheet":Uh,N||(B.as="script"),B.crossOrigin="",B.href=O,m&&B.setAttribute("nonce",m),document.head.appendChild(B),N)return new Promise((G,$)=>{B.addEventListener("load",G),B.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${O}`)))})}))}function y(g){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=g,window.dispatchEvent(m),!m.defaultPrevented)throw g}return d.then(g=>{for(const m of g||[])m.status==="rejected"&&y(m.reason);return i().catch(y)})};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function s0(a){return typeof a>"u"||a===null}function Yh(a){return typeof a=="object"&&a!==null}function Lh(a){return Array.isArray(a)?a:s0(a)?[]:[a]}function jh(a,i){var o,f,d,y;if(i)for(y=Object.keys(i),o=0,f=y.length;o<f;o+=1)d=y[o],a[d]=i[d];return a}function qh(a,i){var o="",f;for(f=0;f<i;f+=1)o+=a;return o}function Gh(a){return a===0&&Number.NEGATIVE_INFINITY===1/a}var wh=s0,Qh=Yh,Xh=Lh,Jh=qh,Zh=Gh,Vh=jh,Le={isNothing:wh,isObject:Qh,toArray:Xh,repeat:Jh,isNegativeZero:Zh,extend:Vh};function d0(a,i){var o="",f=a.reason||"(unknown reason)";return a.mark?(a.mark.name&&(o+='in "'+a.mark.name+'" '),o+="("+(a.mark.line+1)+":"+(a.mark.column+1)+")",!i&&a.mark.snippet&&(o+=`

`+a.mark.snippet),f+" "+o):f}function La(a,i){Error.call(this),this.name="YAMLException",this.reason=a,this.mark=i,this.message=d0(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}La.prototype=Object.create(Error.prototype);La.prototype.constructor=La;La.prototype.toString=function(i){return this.name+": "+d0(this,i)};var $e=La;function Cc(a,i,o,f,d){var y="",v="",g=Math.floor(d/2)-1;return f-i>g&&(y=" ... ",i=f-g+y.length),o-f>g&&(v=" ...",o=f+g-v.length),{str:y+a.slice(i,o).replace(/\t/g,"→")+v,pos:f-i+y.length}}function Nc(a,i){return Le.repeat(" ",i-a.length)+a}function Kh(a,i){if(i=Object.create(i||null),!a.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);for(var o=/\r?\n|\r|\0/g,f=[0],d=[],y,v=-1;y=o.exec(a.buffer);)d.push(y.index),f.push(y.index+y[0].length),a.position<=y.index&&v<0&&(v=f.length-2);v<0&&(v=f.length-1);var g="",m,b,O=Math.min(a.line+i.linesAfter,d.length).toString().length,N=i.maxLength-(i.indent+O+3);for(m=1;m<=i.linesBefore&&!(v-m<0);m++)b=Cc(a.buffer,f[v-m],d[v-m],a.position-(f[v]-f[v-m]),N),g=Le.repeat(" ",i.indent)+Nc((a.line-m+1).toString(),O)+" | "+b.str+`
`+g;for(b=Cc(a.buffer,f[v],d[v],a.position,N),g+=Le.repeat(" ",i.indent)+Nc((a.line+1).toString(),O)+" | "+b.str+`
`,g+=Le.repeat("-",i.indent+O+3+b.pos)+`^
`,m=1;m<=i.linesAfter&&!(v+m>=d.length);m++)b=Cc(a.buffer,f[v+m],d[v+m],a.position-(f[v]-f[v+m]),N),g+=Le.repeat(" ",i.indent)+Nc((a.line+m+1).toString(),O)+" | "+b.str+`
`;return g.replace(/\n$/,"")}var kh=Kh,Fh=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Wh=["scalar","sequence","mapping"];function $h(a){var i={};return a!==null&&Object.keys(a).forEach(function(o){a[o].forEach(function(f){i[String(f)]=o})}),i}function Ih(a,i){if(i=i||{},Object.keys(i).forEach(function(o){if(Fh.indexOf(o)===-1)throw new $e('Unknown option "'+o+'" is met in definition of "'+a+'" YAML type.')}),this.options=i,this.tag=a,this.kind=i.kind||null,this.resolve=i.resolve||function(){return!0},this.construct=i.construct||function(o){return o},this.instanceOf=i.instanceOf||null,this.predicate=i.predicate||null,this.represent=i.represent||null,this.representName=i.representName||null,this.defaultStyle=i.defaultStyle||null,this.multi=i.multi||!1,this.styleAliases=$h(i.styleAliases||null),Wh.indexOf(this.kind)===-1)throw new $e('Unknown kind "'+this.kind+'" is specified for "'+a+'" YAML type.')}var Ze=Ih;function Wd(a,i){var o=[];return a[i].forEach(function(f){var d=o.length;o.forEach(function(y,v){y.tag===f.tag&&y.kind===f.kind&&y.multi===f.multi&&(d=v)}),o[d]=f}),o}function Ph(){var a={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},i,o;function f(d){d.multi?(a.multi[d.kind].push(d),a.multi.fallback.push(d)):a[d.kind][d.tag]=a.fallback[d.tag]=d}for(i=0,o=arguments.length;i<o;i+=1)arguments[i].forEach(f);return a}function zc(a){return this.extend(a)}zc.prototype.extend=function(i){var o=[],f=[];if(i instanceof Ze)f.push(i);else if(Array.isArray(i))f=f.concat(i);else if(i&&(Array.isArray(i.implicit)||Array.isArray(i.explicit)))i.implicit&&(o=o.concat(i.implicit)),i.explicit&&(f=f.concat(i.explicit));else throw new $e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(y){if(!(y instanceof Ze))throw new $e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(y.loadKind&&y.loadKind!=="scalar")throw new $e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(y.multi)throw new $e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),f.forEach(function(y){if(!(y instanceof Ze))throw new $e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var d=Object.create(zc.prototype);return d.implicit=(this.implicit||[]).concat(o),d.explicit=(this.explicit||[]).concat(f),d.compiledImplicit=Wd(d,"implicit"),d.compiledExplicit=Wd(d,"explicit"),d.compiledTypeMap=Ph(d.compiledImplicit,d.compiledExplicit),d};var v0=zc,h0=new Ze("tag:yaml.org,2002:str",{kind:"scalar",construct:function(a){return a!==null?a:""}}),y0=new Ze("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(a){return a!==null?a:[]}}),m0=new Ze("tag:yaml.org,2002:map",{kind:"mapping",construct:function(a){return a!==null?a:{}}}),p0=new v0({explicit:[h0,y0,m0]});function ey(a){if(a===null)return!0;var i=a.length;return i===1&&a==="~"||i===4&&(a==="null"||a==="Null"||a==="NULL")}function ny(){return null}function ly(a){return a===null}var g0=new Ze("tag:yaml.org,2002:null",{kind:"scalar",resolve:ey,construct:ny,predicate:ly,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function ty(a){if(a===null)return!1;var i=a.length;return i===4&&(a==="true"||a==="True"||a==="TRUE")||i===5&&(a==="false"||a==="False"||a==="FALSE")}function ay(a){return a==="true"||a==="True"||a==="TRUE"}function uy(a){return Object.prototype.toString.call(a)==="[object Boolean]"}var S0=new Ze("tag:yaml.org,2002:bool",{kind:"scalar",resolve:ty,construct:ay,predicate:uy,represent:{lowercase:function(a){return a?"true":"false"},uppercase:function(a){return a?"TRUE":"FALSE"},camelcase:function(a){return a?"True":"False"}},defaultStyle:"lowercase"});function ry(a){return 48<=a&&a<=57||65<=a&&a<=70||97<=a&&a<=102}function iy(a){return 48<=a&&a<=55}function cy(a){return 48<=a&&a<=57}function fy(a){if(a===null)return!1;var i=a.length,o=0,f=!1,d;if(!i)return!1;if(d=a[o],(d==="-"||d==="+")&&(d=a[++o]),d==="0"){if(o+1===i)return!0;if(d=a[++o],d==="b"){for(o++;o<i;o++)if(d=a[o],d!=="_"){if(d!=="0"&&d!=="1")return!1;f=!0}return f&&d!=="_"}if(d==="x"){for(o++;o<i;o++)if(d=a[o],d!=="_"){if(!ry(a.charCodeAt(o)))return!1;f=!0}return f&&d!=="_"}if(d==="o"){for(o++;o<i;o++)if(d=a[o],d!=="_"){if(!iy(a.charCodeAt(o)))return!1;f=!0}return f&&d!=="_"}}if(d==="_")return!1;for(;o<i;o++)if(d=a[o],d!=="_"){if(!cy(a.charCodeAt(o)))return!1;f=!0}return!(!f||d==="_")}function oy(a){var i=a,o=1,f;if(i.indexOf("_")!==-1&&(i=i.replace(/_/g,"")),f=i[0],(f==="-"||f==="+")&&(f==="-"&&(o=-1),i=i.slice(1),f=i[0]),i==="0")return 0;if(f==="0"){if(i[1]==="b")return o*parseInt(i.slice(2),2);if(i[1]==="x")return o*parseInt(i.slice(2),16);if(i[1]==="o")return o*parseInt(i.slice(2),8)}return o*parseInt(i,10)}function sy(a){return Object.prototype.toString.call(a)==="[object Number]"&&a%1===0&&!Le.isNegativeZero(a)}var b0=new Ze("tag:yaml.org,2002:int",{kind:"scalar",resolve:fy,construct:oy,predicate:sy,represent:{binary:function(a){return a>=0?"0b"+a.toString(2):"-0b"+a.toString(2).slice(1)},octal:function(a){return a>=0?"0o"+a.toString(8):"-0o"+a.toString(8).slice(1)},decimal:function(a){return a.toString(10)},hexadecimal:function(a){return a>=0?"0x"+a.toString(16).toUpperCase():"-0x"+a.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),dy=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vy(a){return!(a===null||!dy.test(a)||a[a.length-1]==="_")}function hy(a){var i,o;return i=a.replace(/_/g,"").toLowerCase(),o=i[0]==="-"?-1:1,"+-".indexOf(i[0])>=0&&(i=i.slice(1)),i===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:i===".nan"?NaN:o*parseFloat(i,10)}var yy=/^[-+]?[0-9]+e/;function my(a,i){var o;if(isNaN(a))switch(i){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===a)switch(i){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===a)switch(i){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Le.isNegativeZero(a))return"-0.0";return o=a.toString(10),yy.test(o)?o.replace("e",".e"):o}function py(a){return Object.prototype.toString.call(a)==="[object Number]"&&(a%1!==0||Le.isNegativeZero(a))}var A0=new Ze("tag:yaml.org,2002:float",{kind:"scalar",resolve:vy,construct:hy,predicate:py,represent:my,defaultStyle:"lowercase"}),E0=p0.extend({implicit:[g0,S0,b0,A0]}),T0=E0,x0=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),M0=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function gy(a){return a===null?!1:x0.exec(a)!==null||M0.exec(a)!==null}function Sy(a){var i,o,f,d,y,v,g,m=0,b=null,O,N,U;if(i=x0.exec(a),i===null&&(i=M0.exec(a)),i===null)throw new Error("Date resolve error");if(o=+i[1],f=+i[2]-1,d=+i[3],!i[4])return new Date(Date.UTC(o,f,d));if(y=+i[4],v=+i[5],g=+i[6],i[7]){for(m=i[7].slice(0,3);m.length<3;)m+="0";m=+m}return i[9]&&(O=+i[10],N=+(i[11]||0),b=(O*60+N)*6e4,i[9]==="-"&&(b=-b)),U=new Date(Date.UTC(o,f,d,y,v,g,m)),b&&U.setTime(U.getTime()-b),U}function by(a){return a.toISOString()}var O0=new Ze("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:gy,construct:Sy,instanceOf:Date,represent:by});function Ay(a){return a==="<<"||a===null}var _0=new Ze("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ay}),jc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ey(a){if(a===null)return!1;var i,o,f=0,d=a.length,y=jc;for(o=0;o<d;o++)if(i=y.indexOf(a.charAt(o)),!(i>64)){if(i<0)return!1;f+=6}return f%8===0}function Ty(a){var i,o,f=a.replace(/[\r\n=]/g,""),d=f.length,y=jc,v=0,g=[];for(i=0;i<d;i++)i%4===0&&i&&(g.push(v>>16&255),g.push(v>>8&255),g.push(v&255)),v=v<<6|y.indexOf(f.charAt(i));return o=d%4*6,o===0?(g.push(v>>16&255),g.push(v>>8&255),g.push(v&255)):o===18?(g.push(v>>10&255),g.push(v>>2&255)):o===12&&g.push(v>>4&255),new Uint8Array(g)}function xy(a){var i="",o=0,f,d,y=a.length,v=jc;for(f=0;f<y;f++)f%3===0&&f&&(i+=v[o>>18&63],i+=v[o>>12&63],i+=v[o>>6&63],i+=v[o&63]),o=(o<<8)+a[f];return d=y%3,d===0?(i+=v[o>>18&63],i+=v[o>>12&63],i+=v[o>>6&63],i+=v[o&63]):d===2?(i+=v[o>>10&63],i+=v[o>>4&63],i+=v[o<<2&63],i+=v[64]):d===1&&(i+=v[o>>2&63],i+=v[o<<4&63],i+=v[64],i+=v[64]),i}function My(a){return Object.prototype.toString.call(a)==="[object Uint8Array]"}var D0=new Ze("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ey,construct:Ty,predicate:My,represent:xy}),Oy=Object.prototype.hasOwnProperty,_y=Object.prototype.toString;function Dy(a){if(a===null)return!0;var i=[],o,f,d,y,v,g=a;for(o=0,f=g.length;o<f;o+=1){if(d=g[o],v=!1,_y.call(d)!=="[object Object]")return!1;for(y in d)if(Oy.call(d,y))if(!v)v=!0;else return!1;if(!v)return!1;if(i.indexOf(y)===-1)i.push(y);else return!1}return!0}function Cy(a){return a!==null?a:[]}var C0=new Ze("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Dy,construct:Cy}),Ny=Object.prototype.toString;function Ry(a){if(a===null)return!0;var i,o,f,d,y,v=a;for(y=new Array(v.length),i=0,o=v.length;i<o;i+=1){if(f=v[i],Ny.call(f)!=="[object Object]"||(d=Object.keys(f),d.length!==1))return!1;y[i]=[d[0],f[d[0]]]}return!0}function zy(a){if(a===null)return[];var i,o,f,d,y,v=a;for(y=new Array(v.length),i=0,o=v.length;i<o;i+=1)f=v[i],d=Object.keys(f),y[i]=[d[0],f[d[0]]];return y}var N0=new Ze("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ry,construct:zy}),Uy=Object.prototype.hasOwnProperty;function By(a){if(a===null)return!0;var i,o=a;for(i in o)if(Uy.call(o,i)&&o[i]!==null)return!1;return!0}function Hy(a){return a!==null?a:{}}var R0=new Ze("tag:yaml.org,2002:set",{kind:"mapping",resolve:By,construct:Hy}),qc=T0.extend({implicit:[O0,_0],explicit:[D0,C0,N0,R0]}),_l=Object.prototype.hasOwnProperty,lr=1,z0=2,U0=3,tr=4,Rc=1,Yy=2,$d=3,Ly=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,jy=/[\x85\u2028\u2029]/,qy=/[,\[\]\{\}]/,B0=/^(?:!|!!|![a-z\-]+!)$/i,H0=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Id(a){return Object.prototype.toString.call(a)}function Ln(a){return a===10||a===13}function Vl(a){return a===9||a===32}function un(a){return a===9||a===32||a===10||a===13}function Bt(a){return a===44||a===91||a===93||a===123||a===125}function Gy(a){var i;return 48<=a&&a<=57?a-48:(i=a|32,97<=i&&i<=102?i-97+10:-1)}function wy(a){return a===120?2:a===117?4:a===85?8:0}function Qy(a){return 48<=a&&a<=57?a-48:-1}function Pd(a){return a===48?"\0":a===97?"\x07":a===98?"\b":a===116||a===9?"	":a===110?`
`:a===118?"\v":a===102?"\f":a===114?"\r":a===101?"\x1B":a===32?" ":a===34?'"':a===47?"/":a===92?"\\":a===78?"":a===95?" ":a===76?"\u2028":a===80?"\u2029":""}function Xy(a){return a<=65535?String.fromCharCode(a):String.fromCharCode((a-65536>>10)+55296,(a-65536&1023)+56320)}var Y0=new Array(256),L0=new Array(256);for(var zt=0;zt<256;zt++)Y0[zt]=Pd(zt)?1:0,L0[zt]=Pd(zt);function Jy(a,i){this.input=a,this.filename=i.filename||null,this.schema=i.schema||qc,this.onWarning=i.onWarning||null,this.legacy=i.legacy||!1,this.json=i.json||!1,this.listener=i.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=a.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function j0(a,i){var o={name:a.filename,buffer:a.input.slice(0,-1),position:a.position,line:a.line,column:a.position-a.lineStart};return o.snippet=kh(o),new $e(i,o)}function X(a,i){throw j0(a,i)}function ar(a,i){a.onWarning&&a.onWarning.call(null,j0(a,i))}var e0={YAML:function(i,o,f){var d,y,v;i.version!==null&&X(i,"duplication of %YAML directive"),f.length!==1&&X(i,"YAML directive accepts exactly one argument"),d=/^([0-9]+)\.([0-9]+)$/.exec(f[0]),d===null&&X(i,"ill-formed argument of the YAML directive"),y=parseInt(d[1],10),v=parseInt(d[2],10),y!==1&&X(i,"unacceptable YAML version of the document"),i.version=f[0],i.checkLineBreaks=v<2,v!==1&&v!==2&&ar(i,"unsupported YAML version of the document")},TAG:function(i,o,f){var d,y;f.length!==2&&X(i,"TAG directive accepts exactly two arguments"),d=f[0],y=f[1],B0.test(d)||X(i,"ill-formed tag handle (first argument) of the TAG directive"),_l.call(i.tagMap,d)&&X(i,'there is a previously declared suffix for "'+d+'" tag handle'),H0.test(y)||X(i,"ill-formed tag prefix (second argument) of the TAG directive");try{y=decodeURIComponent(y)}catch{X(i,"tag prefix is malformed: "+y)}i.tagMap[d]=y}};function Ol(a,i,o,f){var d,y,v,g;if(i<o){if(g=a.input.slice(i,o),f)for(d=0,y=g.length;d<y;d+=1)v=g.charCodeAt(d),v===9||32<=v&&v<=1114111||X(a,"expected valid JSON character");else Ly.test(g)&&X(a,"the stream contains non-printable characters");a.result+=g}}function n0(a,i,o,f){var d,y,v,g;for(Le.isObject(o)||X(a,"cannot merge mappings; the provided source object is unacceptable"),d=Object.keys(o),v=0,g=d.length;v<g;v+=1)y=d[v],_l.call(i,y)||(i[y]=o[y],f[y]=!0)}function Ht(a,i,o,f,d,y,v,g,m){var b,O;if(Array.isArray(d))for(d=Array.prototype.slice.call(d),b=0,O=d.length;b<O;b+=1)Array.isArray(d[b])&&X(a,"nested arrays are not supported inside keys"),typeof d=="object"&&Id(d[b])==="[object Object]"&&(d[b]="[object Object]");if(typeof d=="object"&&Id(d)==="[object Object]"&&(d="[object Object]"),d=String(d),i===null&&(i={}),f==="tag:yaml.org,2002:merge")if(Array.isArray(y))for(b=0,O=y.length;b<O;b+=1)n0(a,i,y[b],o);else n0(a,i,y,o);else!a.json&&!_l.call(o,d)&&_l.call(i,d)&&(a.line=v||a.line,a.lineStart=g||a.lineStart,a.position=m||a.position,X(a,"duplicated mapping key")),d==="__proto__"?Object.defineProperty(i,d,{configurable:!0,enumerable:!0,writable:!0,value:y}):i[d]=y,delete o[d];return i}function Gc(a){var i;i=a.input.charCodeAt(a.position),i===10?a.position++:i===13?(a.position++,a.input.charCodeAt(a.position)===10&&a.position++):X(a,"a line break is expected"),a.line+=1,a.lineStart=a.position,a.firstTabInLine=-1}function Ue(a,i,o){for(var f=0,d=a.input.charCodeAt(a.position);d!==0;){for(;Vl(d);)d===9&&a.firstTabInLine===-1&&(a.firstTabInLine=a.position),d=a.input.charCodeAt(++a.position);if(i&&d===35)do d=a.input.charCodeAt(++a.position);while(d!==10&&d!==13&&d!==0);if(Ln(d))for(Gc(a),d=a.input.charCodeAt(a.position),f++,a.lineIndent=0;d===32;)a.lineIndent++,d=a.input.charCodeAt(++a.position);else break}return o!==-1&&f!==0&&a.lineIndent<o&&ar(a,"deficient indentation"),f}function ir(a){var i=a.position,o;return o=a.input.charCodeAt(i),!!((o===45||o===46)&&o===a.input.charCodeAt(i+1)&&o===a.input.charCodeAt(i+2)&&(i+=3,o=a.input.charCodeAt(i),o===0||un(o)))}function wc(a,i){i===1?a.result+=" ":i>1&&(a.result+=Le.repeat(`
`,i-1))}function Zy(a,i,o){var f,d,y,v,g,m,b,O,N=a.kind,U=a.result,B;if(B=a.input.charCodeAt(a.position),un(B)||Bt(B)||B===35||B===38||B===42||B===33||B===124||B===62||B===39||B===34||B===37||B===64||B===96||(B===63||B===45)&&(d=a.input.charCodeAt(a.position+1),un(d)||o&&Bt(d)))return!1;for(a.kind="scalar",a.result="",y=v=a.position,g=!1;B!==0;){if(B===58){if(d=a.input.charCodeAt(a.position+1),un(d)||o&&Bt(d))break}else if(B===35){if(f=a.input.charCodeAt(a.position-1),un(f))break}else{if(a.position===a.lineStart&&ir(a)||o&&Bt(B))break;if(Ln(B))if(m=a.line,b=a.lineStart,O=a.lineIndent,Ue(a,!1,-1),a.lineIndent>=i){g=!0,B=a.input.charCodeAt(a.position);continue}else{a.position=v,a.line=m,a.lineStart=b,a.lineIndent=O;break}}g&&(Ol(a,y,v,!1),wc(a,a.line-m),y=v=a.position,g=!1),Vl(B)||(v=a.position+1),B=a.input.charCodeAt(++a.position)}return Ol(a,y,v,!1),a.result?!0:(a.kind=N,a.result=U,!1)}function Vy(a,i){var o,f,d;if(o=a.input.charCodeAt(a.position),o!==39)return!1;for(a.kind="scalar",a.result="",a.position++,f=d=a.position;(o=a.input.charCodeAt(a.position))!==0;)if(o===39)if(Ol(a,f,a.position,!0),o=a.input.charCodeAt(++a.position),o===39)f=a.position,a.position++,d=a.position;else return!0;else Ln(o)?(Ol(a,f,d,!0),wc(a,Ue(a,!1,i)),f=d=a.position):a.position===a.lineStart&&ir(a)?X(a,"unexpected end of the document within a single quoted scalar"):(a.position++,d=a.position);X(a,"unexpected end of the stream within a single quoted scalar")}function Ky(a,i){var o,f,d,y,v,g;if(g=a.input.charCodeAt(a.position),g!==34)return!1;for(a.kind="scalar",a.result="",a.position++,o=f=a.position;(g=a.input.charCodeAt(a.position))!==0;){if(g===34)return Ol(a,o,a.position,!0),a.position++,!0;if(g===92){if(Ol(a,o,a.position,!0),g=a.input.charCodeAt(++a.position),Ln(g))Ue(a,!1,i);else if(g<256&&Y0[g])a.result+=L0[g],a.position++;else if((v=wy(g))>0){for(d=v,y=0;d>0;d--)g=a.input.charCodeAt(++a.position),(v=Gy(g))>=0?y=(y<<4)+v:X(a,"expected hexadecimal character");a.result+=Xy(y),a.position++}else X(a,"unknown escape sequence");o=f=a.position}else Ln(g)?(Ol(a,o,f,!0),wc(a,Ue(a,!1,i)),o=f=a.position):a.position===a.lineStart&&ir(a)?X(a,"unexpected end of the document within a double quoted scalar"):(a.position++,f=a.position)}X(a,"unexpected end of the stream within a double quoted scalar")}function ky(a,i){var o=!0,f,d,y,v=a.tag,g,m=a.anchor,b,O,N,U,B,G=Object.create(null),$,ne,J,V;if(V=a.input.charCodeAt(a.position),V===91)O=93,B=!1,g=[];else if(V===123)O=125,B=!0,g={};else return!1;for(a.anchor!==null&&(a.anchorMap[a.anchor]=g),V=a.input.charCodeAt(++a.position);V!==0;){if(Ue(a,!0,i),V=a.input.charCodeAt(a.position),V===O)return a.position++,a.tag=v,a.anchor=m,a.kind=B?"mapping":"sequence",a.result=g,!0;o?V===44&&X(a,"expected the node content, but found ','"):X(a,"missed comma between flow collection entries"),ne=$=J=null,N=U=!1,V===63&&(b=a.input.charCodeAt(a.position+1),un(b)&&(N=U=!0,a.position++,Ue(a,!0,i))),f=a.line,d=a.lineStart,y=a.position,Yt(a,i,lr,!1,!0),ne=a.tag,$=a.result,Ue(a,!0,i),V=a.input.charCodeAt(a.position),(U||a.line===f)&&V===58&&(N=!0,V=a.input.charCodeAt(++a.position),Ue(a,!0,i),Yt(a,i,lr,!1,!0),J=a.result),B?Ht(a,g,G,ne,$,J,f,d,y):N?g.push(Ht(a,null,G,ne,$,J,f,d,y)):g.push($),Ue(a,!0,i),V=a.input.charCodeAt(a.position),V===44?(o=!0,V=a.input.charCodeAt(++a.position)):o=!1}X(a,"unexpected end of the stream within a flow collection")}function Fy(a,i){var o,f,d=Rc,y=!1,v=!1,g=i,m=0,b=!1,O,N;if(N=a.input.charCodeAt(a.position),N===124)f=!1;else if(N===62)f=!0;else return!1;for(a.kind="scalar",a.result="";N!==0;)if(N=a.input.charCodeAt(++a.position),N===43||N===45)Rc===d?d=N===43?$d:Yy:X(a,"repeat of a chomping mode identifier");else if((O=Qy(N))>=0)O===0?X(a,"bad explicit indentation width of a block scalar; it cannot be less than one"):v?X(a,"repeat of an indentation width identifier"):(g=i+O-1,v=!0);else break;if(Vl(N)){do N=a.input.charCodeAt(++a.position);while(Vl(N));if(N===35)do N=a.input.charCodeAt(++a.position);while(!Ln(N)&&N!==0)}for(;N!==0;){for(Gc(a),a.lineIndent=0,N=a.input.charCodeAt(a.position);(!v||a.lineIndent<g)&&N===32;)a.lineIndent++,N=a.input.charCodeAt(++a.position);if(!v&&a.lineIndent>g&&(g=a.lineIndent),Ln(N)){m++;continue}if(a.lineIndent<g){d===$d?a.result+=Le.repeat(`
`,y?1+m:m):d===Rc&&y&&(a.result+=`
`);break}for(f?Vl(N)?(b=!0,a.result+=Le.repeat(`
`,y?1+m:m)):b?(b=!1,a.result+=Le.repeat(`
`,m+1)):m===0?y&&(a.result+=" "):a.result+=Le.repeat(`
`,m):a.result+=Le.repeat(`
`,y?1+m:m),y=!0,v=!0,m=0,o=a.position;!Ln(N)&&N!==0;)N=a.input.charCodeAt(++a.position);Ol(a,o,a.position,!1)}return!0}function l0(a,i){var o,f=a.tag,d=a.anchor,y=[],v,g=!1,m;if(a.firstTabInLine!==-1)return!1;for(a.anchor!==null&&(a.anchorMap[a.anchor]=y),m=a.input.charCodeAt(a.position);m!==0&&(a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,X(a,"tab characters must not be used in indentation")),!(m!==45||(v=a.input.charCodeAt(a.position+1),!un(v))));){if(g=!0,a.position++,Ue(a,!0,-1)&&a.lineIndent<=i){y.push(null),m=a.input.charCodeAt(a.position);continue}if(o=a.line,Yt(a,i,U0,!1,!0),y.push(a.result),Ue(a,!0,-1),m=a.input.charCodeAt(a.position),(a.line===o||a.lineIndent>i)&&m!==0)X(a,"bad indentation of a sequence entry");else if(a.lineIndent<i)break}return g?(a.tag=f,a.anchor=d,a.kind="sequence",a.result=y,!0):!1}function Wy(a,i,o){var f,d,y,v,g,m,b=a.tag,O=a.anchor,N={},U=Object.create(null),B=null,G=null,$=null,ne=!1,J=!1,V;if(a.firstTabInLine!==-1)return!1;for(a.anchor!==null&&(a.anchorMap[a.anchor]=N),V=a.input.charCodeAt(a.position);V!==0;){if(!ne&&a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,X(a,"tab characters must not be used in indentation")),f=a.input.charCodeAt(a.position+1),y=a.line,(V===63||V===58)&&un(f))V===63?(ne&&(Ht(a,N,U,B,G,null,v,g,m),B=G=$=null),J=!0,ne=!0,d=!0):ne?(ne=!1,d=!0):X(a,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),a.position+=1,V=f;else{if(v=a.line,g=a.lineStart,m=a.position,!Yt(a,o,z0,!1,!0))break;if(a.line===y){for(V=a.input.charCodeAt(a.position);Vl(V);)V=a.input.charCodeAt(++a.position);if(V===58)V=a.input.charCodeAt(++a.position),un(V)||X(a,"a whitespace character is expected after the key-value separator within a block mapping"),ne&&(Ht(a,N,U,B,G,null,v,g,m),B=G=$=null),J=!0,ne=!1,d=!1,B=a.tag,G=a.result;else if(J)X(a,"can not read an implicit mapping pair; a colon is missed");else return a.tag=b,a.anchor=O,!0}else if(J)X(a,"can not read a block mapping entry; a multiline key may not be an implicit key");else return a.tag=b,a.anchor=O,!0}if((a.line===y||a.lineIndent>i)&&(ne&&(v=a.line,g=a.lineStart,m=a.position),Yt(a,i,tr,!0,d)&&(ne?G=a.result:$=a.result),ne||(Ht(a,N,U,B,G,$,v,g,m),B=G=$=null),Ue(a,!0,-1),V=a.input.charCodeAt(a.position)),(a.line===y||a.lineIndent>i)&&V!==0)X(a,"bad indentation of a mapping entry");else if(a.lineIndent<i)break}return ne&&Ht(a,N,U,B,G,null,v,g,m),J&&(a.tag=b,a.anchor=O,a.kind="mapping",a.result=N),J}function $y(a){var i,o=!1,f=!1,d,y,v;if(v=a.input.charCodeAt(a.position),v!==33)return!1;if(a.tag!==null&&X(a,"duplication of a tag property"),v=a.input.charCodeAt(++a.position),v===60?(o=!0,v=a.input.charCodeAt(++a.position)):v===33?(f=!0,d="!!",v=a.input.charCodeAt(++a.position)):d="!",i=a.position,o){do v=a.input.charCodeAt(++a.position);while(v!==0&&v!==62);a.position<a.length?(y=a.input.slice(i,a.position),v=a.input.charCodeAt(++a.position)):X(a,"unexpected end of the stream within a verbatim tag")}else{for(;v!==0&&!un(v);)v===33&&(f?X(a,"tag suffix cannot contain exclamation marks"):(d=a.input.slice(i-1,a.position+1),B0.test(d)||X(a,"named tag handle cannot contain such characters"),f=!0,i=a.position+1)),v=a.input.charCodeAt(++a.position);y=a.input.slice(i,a.position),qy.test(y)&&X(a,"tag suffix cannot contain flow indicator characters")}y&&!H0.test(y)&&X(a,"tag name cannot contain such characters: "+y);try{y=decodeURIComponent(y)}catch{X(a,"tag name is malformed: "+y)}return o?a.tag=y:_l.call(a.tagMap,d)?a.tag=a.tagMap[d]+y:d==="!"?a.tag="!"+y:d==="!!"?a.tag="tag:yaml.org,2002:"+y:X(a,'undeclared tag handle "'+d+'"'),!0}function Iy(a){var i,o;if(o=a.input.charCodeAt(a.position),o!==38)return!1;for(a.anchor!==null&&X(a,"duplication of an anchor property"),o=a.input.charCodeAt(++a.position),i=a.position;o!==0&&!un(o)&&!Bt(o);)o=a.input.charCodeAt(++a.position);return a.position===i&&X(a,"name of an anchor node must contain at least one character"),a.anchor=a.input.slice(i,a.position),!0}function Py(a){var i,o,f;if(f=a.input.charCodeAt(a.position),f!==42)return!1;for(f=a.input.charCodeAt(++a.position),i=a.position;f!==0&&!un(f)&&!Bt(f);)f=a.input.charCodeAt(++a.position);return a.position===i&&X(a,"name of an alias node must contain at least one character"),o=a.input.slice(i,a.position),_l.call(a.anchorMap,o)||X(a,'unidentified alias "'+o+'"'),a.result=a.anchorMap[o],Ue(a,!0,-1),!0}function Yt(a,i,o,f,d){var y,v,g,m=1,b=!1,O=!1,N,U,B,G,$,ne;if(a.listener!==null&&a.listener("open",a),a.tag=null,a.anchor=null,a.kind=null,a.result=null,y=v=g=tr===o||U0===o,f&&Ue(a,!0,-1)&&(b=!0,a.lineIndent>i?m=1:a.lineIndent===i?m=0:a.lineIndent<i&&(m=-1)),m===1)for(;$y(a)||Iy(a);)Ue(a,!0,-1)?(b=!0,g=y,a.lineIndent>i?m=1:a.lineIndent===i?m=0:a.lineIndent<i&&(m=-1)):g=!1;if(g&&(g=b||d),(m===1||tr===o)&&(lr===o||z0===o?$=i:$=i+1,ne=a.position-a.lineStart,m===1?g&&(l0(a,ne)||Wy(a,ne,$))||ky(a,$)?O=!0:(v&&Fy(a,$)||Vy(a,$)||Ky(a,$)?O=!0:Py(a)?(O=!0,(a.tag!==null||a.anchor!==null)&&X(a,"alias node should not have any properties")):Zy(a,$,lr===o)&&(O=!0,a.tag===null&&(a.tag="?")),a.anchor!==null&&(a.anchorMap[a.anchor]=a.result)):m===0&&(O=g&&l0(a,ne))),a.tag===null)a.anchor!==null&&(a.anchorMap[a.anchor]=a.result);else if(a.tag==="?"){for(a.result!==null&&a.kind!=="scalar"&&X(a,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+a.kind+'"'),N=0,U=a.implicitTypes.length;N<U;N+=1)if(G=a.implicitTypes[N],G.resolve(a.result)){a.result=G.construct(a.result),a.tag=G.tag,a.anchor!==null&&(a.anchorMap[a.anchor]=a.result);break}}else if(a.tag!=="!"){if(_l.call(a.typeMap[a.kind||"fallback"],a.tag))G=a.typeMap[a.kind||"fallback"][a.tag];else for(G=null,B=a.typeMap.multi[a.kind||"fallback"],N=0,U=B.length;N<U;N+=1)if(a.tag.slice(0,B[N].tag.length)===B[N].tag){G=B[N];break}G||X(a,"unknown tag !<"+a.tag+">"),a.result!==null&&G.kind!==a.kind&&X(a,"unacceptable node kind for !<"+a.tag+'> tag; it should be "'+G.kind+'", not "'+a.kind+'"'),G.resolve(a.result,a.tag)?(a.result=G.construct(a.result,a.tag),a.anchor!==null&&(a.anchorMap[a.anchor]=a.result)):X(a,"cannot resolve a node with !<"+a.tag+"> explicit tag")}return a.listener!==null&&a.listener("close",a),a.tag!==null||a.anchor!==null||O}function em(a){var i=a.position,o,f,d,y=!1,v;for(a.version=null,a.checkLineBreaks=a.legacy,a.tagMap=Object.create(null),a.anchorMap=Object.create(null);(v=a.input.charCodeAt(a.position))!==0&&(Ue(a,!0,-1),v=a.input.charCodeAt(a.position),!(a.lineIndent>0||v!==37));){for(y=!0,v=a.input.charCodeAt(++a.position),o=a.position;v!==0&&!un(v);)v=a.input.charCodeAt(++a.position);for(f=a.input.slice(o,a.position),d=[],f.length<1&&X(a,"directive name must not be less than one character in length");v!==0;){for(;Vl(v);)v=a.input.charCodeAt(++a.position);if(v===35){do v=a.input.charCodeAt(++a.position);while(v!==0&&!Ln(v));break}if(Ln(v))break;for(o=a.position;v!==0&&!un(v);)v=a.input.charCodeAt(++a.position);d.push(a.input.slice(o,a.position))}v!==0&&Gc(a),_l.call(e0,f)?e0[f](a,f,d):ar(a,'unknown document directive "'+f+'"')}if(Ue(a,!0,-1),a.lineIndent===0&&a.input.charCodeAt(a.position)===45&&a.input.charCodeAt(a.position+1)===45&&a.input.charCodeAt(a.position+2)===45?(a.position+=3,Ue(a,!0,-1)):y&&X(a,"directives end mark is expected"),Yt(a,a.lineIndent-1,tr,!1,!0),Ue(a,!0,-1),a.checkLineBreaks&&jy.test(a.input.slice(i,a.position))&&ar(a,"non-ASCII line breaks are interpreted as content"),a.documents.push(a.result),a.position===a.lineStart&&ir(a)){a.input.charCodeAt(a.position)===46&&(a.position+=3,Ue(a,!0,-1));return}if(a.position<a.length-1)X(a,"end of the stream or a document separator is expected");else return}function q0(a,i){a=String(a),i=i||{},a.length!==0&&(a.charCodeAt(a.length-1)!==10&&a.charCodeAt(a.length-1)!==13&&(a+=`
`),a.charCodeAt(0)===65279&&(a=a.slice(1)));var o=new Jy(a,i),f=a.indexOf("\0");for(f!==-1&&(o.position=f,X(o,"null byte is not allowed in input")),o.input+="\0";o.input.charCodeAt(o.position)===32;)o.lineIndent+=1,o.position+=1;for(;o.position<o.length-1;)em(o);return o.documents}function nm(a,i,o){i!==null&&typeof i=="object"&&typeof o>"u"&&(o=i,i=null);var f=q0(a,o);if(typeof i!="function")return f;for(var d=0,y=f.length;d<y;d+=1)i(f[d])}function lm(a,i){var o=q0(a,i);if(o.length!==0){if(o.length===1)return o[0];throw new $e("expected a single document in the stream, but found more")}}var tm=nm,am=lm,G0={loadAll:tm,load:am},w0=Object.prototype.toString,Q0=Object.prototype.hasOwnProperty,Qc=65279,um=9,ja=10,rm=13,im=32,cm=33,fm=34,Uc=35,om=37,sm=38,dm=39,vm=42,X0=44,hm=45,ur=58,ym=61,mm=62,pm=63,gm=64,J0=91,Z0=93,Sm=96,V0=123,bm=124,K0=125,Fe={};Fe[0]="\\0";Fe[7]="\\a";Fe[8]="\\b";Fe[9]="\\t";Fe[10]="\\n";Fe[11]="\\v";Fe[12]="\\f";Fe[13]="\\r";Fe[27]="\\e";Fe[34]='\\"';Fe[92]="\\\\";Fe[133]="\\N";Fe[160]="\\_";Fe[8232]="\\L";Fe[8233]="\\P";var Am=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Em=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Tm(a,i){var o,f,d,y,v,g,m;if(i===null)return{};for(o={},f=Object.keys(i),d=0,y=f.length;d<y;d+=1)v=f[d],g=String(i[v]),v.slice(0,2)==="!!"&&(v="tag:yaml.org,2002:"+v.slice(2)),m=a.compiledTypeMap.fallback[v],m&&Q0.call(m.styleAliases,g)&&(g=m.styleAliases[g]),o[v]=g;return o}function xm(a){var i,o,f;if(i=a.toString(16).toUpperCase(),a<=255)o="x",f=2;else if(a<=65535)o="u",f=4;else if(a<=4294967295)o="U",f=8;else throw new $e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+o+Le.repeat("0",f-i.length)+i}var Mm=1,qa=2;function Om(a){this.schema=a.schema||qc,this.indent=Math.max(1,a.indent||2),this.noArrayIndent=a.noArrayIndent||!1,this.skipInvalid=a.skipInvalid||!1,this.flowLevel=Le.isNothing(a.flowLevel)?-1:a.flowLevel,this.styleMap=Tm(this.schema,a.styles||null),this.sortKeys=a.sortKeys||!1,this.lineWidth=a.lineWidth||80,this.noRefs=a.noRefs||!1,this.noCompatMode=a.noCompatMode||!1,this.condenseFlow=a.condenseFlow||!1,this.quotingType=a.quotingType==='"'?qa:Mm,this.forceQuotes=a.forceQuotes||!1,this.replacer=typeof a.replacer=="function"?a.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function t0(a,i){for(var o=Le.repeat(" ",i),f=0,d=-1,y="",v,g=a.length;f<g;)d=a.indexOf(`
`,f),d===-1?(v=a.slice(f),f=g):(v=a.slice(f,d+1),f=d+1),v.length&&v!==`
`&&(y+=o),y+=v;return y}function Bc(a,i){return`
`+Le.repeat(" ",a.indent*i)}function _m(a,i){var o,f,d;for(o=0,f=a.implicitTypes.length;o<f;o+=1)if(d=a.implicitTypes[o],d.resolve(i))return!0;return!1}function rr(a){return a===im||a===um}function Ga(a){return 32<=a&&a<=126||161<=a&&a<=55295&&a!==8232&&a!==8233||57344<=a&&a<=65533&&a!==Qc||65536<=a&&a<=1114111}function a0(a){return Ga(a)&&a!==Qc&&a!==rm&&a!==ja}function u0(a,i,o){var f=a0(a),d=f&&!rr(a);return(o?f:f&&a!==X0&&a!==J0&&a!==Z0&&a!==V0&&a!==K0)&&a!==Uc&&!(i===ur&&!d)||a0(i)&&!rr(i)&&a===Uc||i===ur&&d}function Dm(a){return Ga(a)&&a!==Qc&&!rr(a)&&a!==hm&&a!==pm&&a!==ur&&a!==X0&&a!==J0&&a!==Z0&&a!==V0&&a!==K0&&a!==Uc&&a!==sm&&a!==vm&&a!==cm&&a!==bm&&a!==ym&&a!==mm&&a!==dm&&a!==fm&&a!==om&&a!==gm&&a!==Sm}function Cm(a){return!rr(a)&&a!==ur}function Ya(a,i){var o=a.charCodeAt(i),f;return o>=55296&&o<=56319&&i+1<a.length&&(f=a.charCodeAt(i+1),f>=56320&&f<=57343)?(o-55296)*1024+f-56320+65536:o}function k0(a){var i=/^\n* /;return i.test(a)}var F0=1,Hc=2,W0=3,$0=4,Ut=5;function Nm(a,i,o,f,d,y,v,g){var m,b=0,O=null,N=!1,U=!1,B=f!==-1,G=-1,$=Dm(Ya(a,0))&&Cm(Ya(a,a.length-1));if(i||v)for(m=0;m<a.length;b>=65536?m+=2:m++){if(b=Ya(a,m),!Ga(b))return Ut;$=$&&u0(b,O,g),O=b}else{for(m=0;m<a.length;b>=65536?m+=2:m++){if(b=Ya(a,m),b===ja)N=!0,B&&(U=U||m-G-1>f&&a[G+1]!==" ",G=m);else if(!Ga(b))return Ut;$=$&&u0(b,O,g),O=b}U=U||B&&m-G-1>f&&a[G+1]!==" "}return!N&&!U?$&&!v&&!d(a)?F0:y===qa?Ut:Hc:o>9&&k0(a)?Ut:v?y===qa?Ut:Hc:U?$0:W0}function Rm(a,i,o,f,d){a.dump=(function(){if(i.length===0)return a.quotingType===qa?'""':"''";if(!a.noCompatMode&&(Am.indexOf(i)!==-1||Em.test(i)))return a.quotingType===qa?'"'+i+'"':"'"+i+"'";var y=a.indent*Math.max(1,o),v=a.lineWidth===-1?-1:Math.max(Math.min(a.lineWidth,40),a.lineWidth-y),g=f||a.flowLevel>-1&&o>=a.flowLevel;function m(b){return _m(a,b)}switch(Nm(i,g,a.indent,v,m,a.quotingType,a.forceQuotes&&!f,d)){case F0:return i;case Hc:return"'"+i.replace(/'/g,"''")+"'";case W0:return"|"+r0(i,a.indent)+i0(t0(i,y));case $0:return">"+r0(i,a.indent)+i0(t0(zm(i,v),y));case Ut:return'"'+Um(i)+'"';default:throw new $e("impossible error: invalid scalar style")}})()}function r0(a,i){var o=k0(a)?String(i):"",f=a[a.length-1]===`
`,d=f&&(a[a.length-2]===`
`||a===`
`),y=d?"+":f?"":"-";return o+y+`
`}function i0(a){return a[a.length-1]===`
`?a.slice(0,-1):a}function zm(a,i){for(var o=/(\n+)([^\n]*)/g,f=(function(){var b=a.indexOf(`
`);return b=b!==-1?b:a.length,o.lastIndex=b,c0(a.slice(0,b),i)})(),d=a[0]===`
`||a[0]===" ",y,v;v=o.exec(a);){var g=v[1],m=v[2];y=m[0]===" ",f+=g+(!d&&!y&&m!==""?`
`:"")+c0(m,i),d=y}return f}function c0(a,i){if(a===""||a[0]===" ")return a;for(var o=/ [^ ]/g,f,d=0,y,v=0,g=0,m="";f=o.exec(a);)g=f.index,g-d>i&&(y=v>d?v:g,m+=`
`+a.slice(d,y),d=y+1),v=g;return m+=`
`,a.length-d>i&&v>d?m+=a.slice(d,v)+`
`+a.slice(v+1):m+=a.slice(d),m.slice(1)}function Um(a){for(var i="",o=0,f,d=0;d<a.length;o>=65536?d+=2:d++)o=Ya(a,d),f=Fe[o],!f&&Ga(o)?(i+=a[d],o>=65536&&(i+=a[d+1])):i+=f||xm(o);return i}function Bm(a,i,o){var f="",d=a.tag,y,v,g;for(y=0,v=o.length;y<v;y+=1)g=o[y],a.replacer&&(g=a.replacer.call(o,String(y),g)),(el(a,i,g,!1,!1)||typeof g>"u"&&el(a,i,null,!1,!1))&&(f!==""&&(f+=","+(a.condenseFlow?"":" ")),f+=a.dump);a.tag=d,a.dump="["+f+"]"}function f0(a,i,o,f){var d="",y=a.tag,v,g,m;for(v=0,g=o.length;v<g;v+=1)m=o[v],a.replacer&&(m=a.replacer.call(o,String(v),m)),(el(a,i+1,m,!0,!0,!1,!0)||typeof m>"u"&&el(a,i+1,null,!0,!0,!1,!0))&&((!f||d!=="")&&(d+=Bc(a,i)),a.dump&&ja===a.dump.charCodeAt(0)?d+="-":d+="- ",d+=a.dump);a.tag=y,a.dump=d||"[]"}function Hm(a,i,o){var f="",d=a.tag,y=Object.keys(o),v,g,m,b,O;for(v=0,g=y.length;v<g;v+=1)O="",f!==""&&(O+=", "),a.condenseFlow&&(O+='"'),m=y[v],b=o[m],a.replacer&&(b=a.replacer.call(o,m,b)),el(a,i,m,!1,!1)&&(a.dump.length>1024&&(O+="? "),O+=a.dump+(a.condenseFlow?'"':"")+":"+(a.condenseFlow?"":" "),el(a,i,b,!1,!1)&&(O+=a.dump,f+=O));a.tag=d,a.dump="{"+f+"}"}function Ym(a,i,o,f){var d="",y=a.tag,v=Object.keys(o),g,m,b,O,N,U;if(a.sortKeys===!0)v.sort();else if(typeof a.sortKeys=="function")v.sort(a.sortKeys);else if(a.sortKeys)throw new $e("sortKeys must be a boolean or a function");for(g=0,m=v.length;g<m;g+=1)U="",(!f||d!=="")&&(U+=Bc(a,i)),b=v[g],O=o[b],a.replacer&&(O=a.replacer.call(o,b,O)),el(a,i+1,b,!0,!0,!0)&&(N=a.tag!==null&&a.tag!=="?"||a.dump&&a.dump.length>1024,N&&(a.dump&&ja===a.dump.charCodeAt(0)?U+="?":U+="? "),U+=a.dump,N&&(U+=Bc(a,i)),el(a,i+1,O,!0,N)&&(a.dump&&ja===a.dump.charCodeAt(0)?U+=":":U+=": ",U+=a.dump,d+=U));a.tag=y,a.dump=d||"{}"}function o0(a,i,o){var f,d,y,v,g,m;for(d=o?a.explicitTypes:a.implicitTypes,y=0,v=d.length;y<v;y+=1)if(g=d[y],(g.instanceOf||g.predicate)&&(!g.instanceOf||typeof i=="object"&&i instanceof g.instanceOf)&&(!g.predicate||g.predicate(i))){if(o?g.multi&&g.representName?a.tag=g.representName(i):a.tag=g.tag:a.tag="?",g.represent){if(m=a.styleMap[g.tag]||g.defaultStyle,w0.call(g.represent)==="[object Function]")f=g.represent(i,m);else if(Q0.call(g.represent,m))f=g.represent[m](i,m);else throw new $e("!<"+g.tag+'> tag resolver accepts not "'+m+'" style');a.dump=f}return!0}return!1}function el(a,i,o,f,d,y,v){a.tag=null,a.dump=o,o0(a,o,!1)||o0(a,o,!0);var g=w0.call(a.dump),m=f,b;f&&(f=a.flowLevel<0||a.flowLevel>i);var O=g==="[object Object]"||g==="[object Array]",N,U;if(O&&(N=a.duplicates.indexOf(o),U=N!==-1),(a.tag!==null&&a.tag!=="?"||U||a.indent!==2&&i>0)&&(d=!1),U&&a.usedDuplicates[N])a.dump="*ref_"+N;else{if(O&&U&&!a.usedDuplicates[N]&&(a.usedDuplicates[N]=!0),g==="[object Object]")f&&Object.keys(a.dump).length!==0?(Ym(a,i,a.dump,d),U&&(a.dump="&ref_"+N+a.dump)):(Hm(a,i,a.dump),U&&(a.dump="&ref_"+N+" "+a.dump));else if(g==="[object Array]")f&&a.dump.length!==0?(a.noArrayIndent&&!v&&i>0?f0(a,i-1,a.dump,d):f0(a,i,a.dump,d),U&&(a.dump="&ref_"+N+a.dump)):(Bm(a,i,a.dump),U&&(a.dump="&ref_"+N+" "+a.dump));else if(g==="[object String]")a.tag!=="?"&&Rm(a,a.dump,i,y,m);else{if(g==="[object Undefined]")return!1;if(a.skipInvalid)return!1;throw new $e("unacceptable kind of an object to dump "+g)}a.tag!==null&&a.tag!=="?"&&(b=encodeURI(a.tag[0]==="!"?a.tag.slice(1):a.tag).replace(/!/g,"%21"),a.tag[0]==="!"?b="!"+b:b.slice(0,18)==="tag:yaml.org,2002:"?b="!!"+b.slice(18):b="!<"+b+">",a.dump=b+" "+a.dump)}return!0}function Lm(a,i){var o=[],f=[],d,y;for(Yc(a,o,f),d=0,y=f.length;d<y;d+=1)i.duplicates.push(o[f[d]]);i.usedDuplicates=new Array(y)}function Yc(a,i,o){var f,d,y;if(a!==null&&typeof a=="object")if(d=i.indexOf(a),d!==-1)o.indexOf(d)===-1&&o.push(d);else if(i.push(a),Array.isArray(a))for(d=0,y=a.length;d<y;d+=1)Yc(a[d],i,o);else for(f=Object.keys(a),d=0,y=f.length;d<y;d+=1)Yc(a[f[d]],i,o)}function jm(a,i){i=i||{};var o=new Om(i);o.noRefs||Lm(a,o);var f=a;return o.replacer&&(f=o.replacer.call({"":f},"",f)),el(o,0,f,!0,!0)?o.dump+`
`:""}var qm=jm,Gm={dump:qm};function Xc(a,i){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+i+" instead, which is now safe by default.")}}var wm=Ze,Qm=v0,Xm=p0,Jm=E0,Zm=T0,Vm=qc,Km=G0.load,km=G0.loadAll,Fm=Gm.dump,Wm=$e,$m={binary:D0,float:A0,map:m0,null:g0,pairs:N0,set:R0,timestamp:O0,bool:S0,int:b0,merge:_0,omap:C0,seq:y0,str:h0},Im=Xc("safeLoad","load"),Pm=Xc("safeLoadAll","loadAll"),ep=Xc("safeDump","dump"),np={Type:wm,Schema:Qm,FAILSAFE_SCHEMA:Xm,JSON_SCHEMA:Jm,CORE_SCHEMA:Zm,DEFAULT_SCHEMA:Vm,load:Km,loadAll:km,dump:Fm,YAMLException:Wm,types:$m,safeLoad:Im,safeLoadAll:Pm,safeDump:ep};const lp=`dates:\r
  "Jul 28":\r
    - year: 1914\r
      event: "Aust-Hung->Serbia"\r
    - year: 1868\r
      event: "14th Amendment"\r
  \r
  "Jul 29":\r
    - year: 1836\r
      event: "Arc of Triumph"\r
    - year: 1921\r
      event: "Hitler heads Nat Socialists"\r
    - year: 1954\r
      event: "LotR first book published"\r
    - year: 1957\r
      event: "Pres. Eisenhower signs legislation creating NASA"\r
  \r
  "Jul 30":\r
    - year: 1619\r
      event: "Burgesses"\r
    - year: 1966\r
      event: "Beatles last tour"\r
    - year: 1830\r
      event: "Henry Ford born in Dearborn, MI"\r
  \r
  "Jul 31":\r
    - year: 1498\r
      event: "Trinidad discovered"\r
    - year: 1703\r
      event: "Defoe pillared"\r
  \r
  "Aug 1":\r
    - year: 1798\r
      event: "Battle of the Nile"\r
    - year: 1834\r
      event: "British abolish slavery"\r
    - year: 1914\r
      event: "Germany -> Russia"\r
    - year: 1291\r
      event: "Republic of Switerland founded, the oldest republic still existing"\r
  \r
  "Aug 2":\r
    - year: 1700\r
      event: "1st Census?"\r
    - year: 1945\r
      event: "Potsdam end"\r
    - year: 1990\r
      event: "Iraq invades Kuwait, Emir flees to Saudi Arabia"\r
  \r
  "Aug 3":\r
    - year: 1492\r
      event: "Christopher Columbus sets sail from Spain"\r
    - year: 1914\r
      event: "Germany -> France"\r
    - year: 1958\r
      event: "Nautilus"\r
    - year: 1923\r
      event: "Coolidge"\r
    - year: 1981\r
      event: "PATCO"\r
  \r
  "Aug 4":\r
    - year: 1790\r
      event: "Coast guard formed"\r
    - year: 1944\r
      event: "Anne Frank arrested"\r
    - year: 1914\r
      event: "England declares war on Germany; U.S. declares neutrality"\r
  \r
  "Aug 5":\r
    - year: 1861\r
      event: "1st income tax (3%)"\r
    - year: 1962\r
      event: "Marilyn Monroe found dead"\r
    - year: 1914\r
      event: "1st traffic light"\r
    - year: 1936\r
      event: "Jesse Owens wins his third gold medal at Berlin Olympics"\r
  \r
  "Aug 6":\r
    - year: 1945\r
      event: "Hiroshima"\r
    - year: 1890\r
      event: "1st electric chair"\r
    - year: 1965\r
      event: "Voting rights act"\r
    - year: 1991\r
      event: "Tim Berners-Lee?"\r
    - year: 1926\r
      event: "Warner Bros. Studios premieres first talking pictures"\r
  \r
  "Aug 7":\r
    - year: 1461\r
      event: "(Ming D) Cao Qin coup"\r
    - year: 1714\r
      event: "Battle of Gangot"\r
    - year: 1782\r
      event: "Pre purple heart"\r
    - year: 1990\r
      event: "Desert shield"\r
    - year: 1942\r
      event: "Battle of Guadalcanal"\r
  \r
  "Aug 8":\r
    - year: 1609\r
      event: "Galileo presents telescope"\r
    - year: 1786\r
      event: "Dollar chosen"\r
    - year: 1945\r
      event: "Soviets->Japan"\r
    - year: 1988\r
      event: "Iran/Iraq ceasefire (8 years)"\r
  \r
  "Aug 9":\r
    - year: "48BCE"\r
      event: "Caesar beats Pompey the Great"\r
    - year: 1945\r
      event: "2nd A-bomb"\r
    - year: 1974\r
      event: "Nixon->Ford"\r
  \r
  "Aug 10":\r
    - year: 610\r
      event: "Laylat al-Qadr"\r
    - year: 1846\r
      event: "Smithsonian est."\r
    - year: 1628\r
      event: "Vasa sinks"\r
  \r
  "Aug 11":\r
    - year: 1988\r
      event: "Al-Qaeda"\r
    - year: 1989\r
      event: "Voyager 2->Neptune's rings"\r
    - year: 2015\r
      event: "Greek bailout"\r
  \r
  "Aug 12":\r
    - year: 1492\r
      event: "Columbus->Canary"\r
    - year: 1553\r
      event: "Julius burns Talmud"\r
    - year: 1851\r
      event: "Sewing machine patent"\r
    - year: 1865\r
      event: "Lister->anticeptics (carbolic spray)"\r
    - year: 1877\r
      event: "Edison records Little lamb"\r
    - year: 1898\r
      event: "Spanish-American War ends"\r
  \r
  "Aug 13":\r
    - year: 1521\r
      event: "Spanish conqerors take Tenochtitlan (now Mexico City) from the Aztecs"\r
    - year: 1942\r
      event: "Manhattan Project"\r
    - year: 1642\r
      event: "Huygen->Mars polar caps"\r
    - year: 1792\r
      event: "Antoinette->prison"\r
  \r
  "Aug 14":\r
    - year: 1281\r
      event: "Kublai Khan 2nd invasion of Japan (ships lost)"\r
    - year: 1842\r
      event: "2nd Seminole War"\r
    - year: 1945\r
      event: "V-J Day"\r
    - year: 1947\r
      event: "Pakistan independence (UK)"\r
    - year: 1935\r
      event: "Social Security Law is established"\r
    - year: 1969\r
      event: "Operation Banner"\r
  \r
  "Aug 15":\r
    - year: 1461\r
      event: "Trebizond Empire falls"\r
    - year: 1620\r
      event: "Mayflower"\r
    - year: 1900\r
      event: "Boxer Rebellion"\r
    - year: 1947\r
      event: "India independence"\r
    - year: 1998\r
      event: "Omagh Bombing"\r
    - year: 2021\r
      event: "Taliban->Kabul"\r
  \r
  "Aug 16":\r
    - year: 1513\r
      event: "Battle of Spurs (Henry VIII)"\r
    - year: 1858\r
      event: "Queen Vic -> Buchanan 1st telegraph"\r
  \r
  "Aug 18":\r
    - year: 1590\r
      event: "Roanoke"\r
    - year: 1903\r
      event: "Pulitzer (US)"\r
    - year: 1945\r
      event: "Korea N/S"\r
    - year: 1998\r
      event: "Clinton admits"\r
  \r
  "Aug 19":\r
    - year: "43BC"\r
      event: "Octavian/Augustus->Consul"\r
    - year: 1839\r
      event: "Daguerrotype published"\r
  \r
  "Aug 20":\r
    - year: 1619\r
      event: "1st slaves in Brit colonies"\r
    - year: 1741\r
      event: "Bering->Alaska"\r
    - year: 1905\r
      event: "Sun Yat-sen->Tongmenghui"\r
    - year: 1993\r
      event: "Oslo peace accords"\r
  \r
  "Aug 21":\r
    - year: 1888\r
      event: "Burrough's adding machine"\r
    - year: 1959\r
      event: "Hawaii"\r
  \r
  "Aug 22":\r
    - year: 1485\r
      event: "Rich III killed. War of Roses ends"\r
    - year: 1642\r
      event: "Eng Civil War starts"\r
    - year: 1775\r
      event: "George III -> War on Colonies"\r
    - year: 1864\r
      event: "1st Geneva Convention"\r
  \r
  "Aug 23":\r
    - year: 1942\r
      event: "Battle of Stalingraad"\r
    - year: 1943\r
      event: "Battle of Kursk (10,000 Tanks!)"\r
  \r
  "Aug 24":\r
    - year: 410\r
      event: "Visigoths sack Rome"\r
    - year: 1814\r
      event: "British->DC"\r
    - year: 79\r
      event: "Vesuvius erupts (old date)"\r
  \r
  "Aug 25":\r
    - year: 1718\r
      event: "NOLA founded"\r
    - year: 1768\r
      event: "Cook departs"\r
    - year: 1991\r
      event: "Linux born"\r
  \r
  "Aug 26":\r
    - year: 1873\r
      event: "First free kindergarten"\r
    - year: 1996\r
      event: "Clinton: welfare reforms"\r
    - year: 1910\r
      event: "William James died"\r
  "Aug 27":\r
    - year: 479BCE\r
      event: "Battle of Mycale"\r
    - year: 1883\r
      event: "Krakatoa erupts"\r
  "Aug 28":\r
    - year: 1609\r
      event: "Hudson discovers Delaware Bay"\r
    - year: 1830\r
      event: "Horse vs train (\\"Tom thumb\\") 1st US train"\r
    - year: 1963\r
      event: "MLK dream speech"\r
  "Aug 29":\r
    - year: 1526\r
      event: "Battle of Mohács, Ottomans defeat Hungary"\r
    - year: 1842\r
      event: "Treaty of Nanking, ends 1st Opium War"\r
    - year: 1949\r
      event: "Soviets develop nuclear weapons"\r
    - year: 2005\r
      event: "Hurricane Katrina makes landfall"\r
  "Aug 30":\r
    - year: 1146\r
      event: "Crossbows banned"\r
    - year: 1682\r
      event: "William Penn -> New World"\r
  "Aug 31":\r
    - year: 1854\r
      event: "London cholera outbreak"\r
    - year: 1888\r
      event: "Jack the Ripper's first victim found"\r
    - year: 1917\r
      event: "Sun Yat-sen elected Commander-in-Chief (by his own parlament?)"\r
    - year: 1997\r
      event: "Princess Diana dies"\r
  "Sep 1":\r
    - year: 1939\r
      event: "WWII begins.  Germany->Poland"\r
    - year: 1715\r
      event: "Louis XIV dies"\r
    - year: 1969\r
      event: "Gaddafi comes to power in Libya"\r
  \r
  "Sep 2":\r
    - year: "31 BC"\r
      event: "Battle of Actium, Octavian -> Antony and Cleo"\r
    - year: 1192\r
      event: "Saladin + Lionheart: Treaty of Jaffa"\r
    - year: 1666\r
      event: "Great Fire of London (80% destroyed)"\r
    - year: 1792\r
      event: "French Revolution September Massacres"\r
    - year: 1864\r
      event: "Sherman -> Atl"\r
  \r
  "Sep 3":\r
    - year: 1783\r
      event: "Treaty of Paris"\r
    - year: 1939\r
      event: "Britain declares war on Germany"\r
    - year: 1944\r
      event: "Anne Frank deported to Auschwitz"\r
  \r
  "Sep 4":\r
    - year: "476 BC"\r
      event: "Romulus Augustulus abdicates (fall of Western Roman Empire)"\r
    - year: 1781\r
      event: "Los Angeles founded"\r
    - year: 1862\r
      event: "Robert E. Lee invades the North"\r
    - year: 1957\r
      event: "Orval Faubus calls the National Guard (to prevent integration at Little Rock Central High School)"\r
    - year: 1839\r
      event: "1st Opium War"\r
  \r
  "Sep 5":\r
    - year: 1781\r
      event: "Cornwallis surrenders"\r
  \r
  "Sep 6":\r
    - year: 1522\r
      event: "Magellan's ships return w/o him"\r
    - year: 1901\r
      event: "McKinley killed"\r
    - year: 1914\r
      event: "WWI – 1st Battle of the Marne"\r
  \r
  "Sep 7":\r
    - year: 70\r
      event: "Titus plunders Jerusalem"\r
    - year: 1812\r
      event: "Napoleon: Battle of Borodino"\r
    - year: 1940\r
      event: "Blitz begins (57 nights)"\r
  \r
  "Sep 8":\r
    - year: 1504\r
      event: "Statue of David unveiled"\r
    - year: 1565\r
      event: "1st permanent settl' in US: St. Augustine, Florida"\r
    - year: 1941\r
      event: "Siege of Leningrad begins (28 months) - 1.5 million deaths"\r
  \r
  "Sep 9":\r
    - year: 1000\r
      event: "Battle of Svolder"\r
    - year: 1543\r
      event: "Mary → Queen of Scots"\r
    - year: 1827\r
      event: "Alex Twilight 1st Black grad from US college"\r
  \r
  "Sep 10":\r
    - year: 1977\r
      event: "Hamida Djandoubi, convicted of torture and murder, is the last person to be executed by guillotine in France"\r
    - year: 2008\r
      event: "The Large Hadron Collider at CERN, described as the biggest scientific experiment in the history of mankind, is powered up in Geneva, Switzerland"\r
    - year: 2020\r
      event: "California's August Complex wildfire becomes the largest recorded in state history at 471,000 acres (736 square miles)"\r
  \r
  "Sep 11":\r
    - year: 1297\r
      event: "William Wallace wins Battle of Stirling Bridge"\r
    - year: 1916\r
      event: "1st super market Piggly Wiggly"\r
    - year: 2001\r
      event: "9/11"\r
  \r
  "Sep 12":\r
    - year: 1624\r
      event: "1st submarine"\r
    - year: 1958\r
      event: "Arkansas Central HS ordered to integrate"\r
    - year: 1959\r
      event: "Luna 2 (Soviet) 1st to impact moon"\r
  \r
  "Sep 13":\r
    - year: 1501\r
      event: "Michaelangelo begins David"\r
    - year: 1845\r
      event: "Faraday effect discovered"\r
    - year: 1993\r
      event: "Oslo Accords unveiled"\r
  \r
  "Sep 14":\r
    - year: 1752\r
      event: "British adopt Gregorian calendar"\r
    - year: 1939\r
      event: "1st helicopter takes flight"\r
    - year: 1956\r
      event: "IBM → RAMAC 305"\r
  \r
  "Sep 15":\r
    - year: 1616\r
      event: "1st free public school"\r
    - year: 1835\r
      event: "Darwin → Galápagos"\r
    - year: 1928\r
      event: "Fleming → Penicillin"\r
\r
  "Sep 16":\r
    - year: 1795\r
      event: "British → Cape Town captured from Dutch"\r
    - year: 1848\r
      event: "France abolishes slavery"\r
    - year: 1920\r
      event: "Wall Street bombing"\r
\r
  "Sep 17":\r
    - year: 1683\r
      event: "Leeuwenhoek → Bacteria"\r
    - year: 1862\r
      event: "Battle of Antietam - 22,000 killed"\r
\r
  "Sep 18":\r
    - year: 1812\r
      event: "Great fire of Moscow - 12,000 dead, 75% destroyed"\r
    - year: 1947\r
      event: "CIA founded by Truman"\r
    - year: 1976\r
      event: "Mao Zedong funeral"\r
\r
  "Sep 19":\r
    - year: 1870\r
      event: "Prussia → Paris siege"\r
    - year: 1893\r
      event: "New Zealand first to allow women to vote"\r
    - year: 1986\r
      event: "1st retroviral for AIDS/HIV"\r
\r
  "Sep 20":\r
    - year: 1519\r
      event: "Magellan sets off"\r
    - year: 1854\r
      event: "Battle of the Alma. Crimean War. (Russian Empire lost.)"\r
    - year: 2001\r
      event: "Bush → War on Terror"\r
\r
  "Sep 21":\r
    - year: 1922\r
      event: "Warren G Harding → Official Support for Palestine"\r
    - year: 1949\r
      event: "Mao Zedong → PRC"\r
\r
  "Sep 23":\r
    - year: 1884\r
      event: "Herman Hollerith patents tabulating machine"\r
    - year: 1957\r
      event: "Eisenhower → troops to Little Rock Central HS"\r
\r
  "Sep 24":\r
    - year: 1493\r
      event: "Columbus 2nd trip embarks"\r
    - year: 1789\r
      event: "6-member Supreme Court"\r
    - year: 1869\r
      event: "Black Fri (Gold conspiracy)"\r
    - year: 1950\r
      event: "Operation Magic Carpet 45K Jews Yemen -> Israel"\r
\r
  "Sep 26":\r
    - year: 1580\r
      event: "Francis Drake returns"\r
    - year: 1901\r
      event: "UK annexes Ashanti Kingdom → Gold Coast (Ghana)"\r
\r
  "Sep 27":\r
    - year: 1066\r
      event: "William the Conq. → England"\r
    - year: 1821\r
      event: "Spanish leave Mexico City to Agostín de Iturbide"\r
    - year: 1822\r
      event: "Champollion uses Rosetta Stone"\r
    - year: 1905\r
      event: "E = mc² published"\r
    - year: 1909\r
      event: "1st Model T"\r
\r
  "Sep 29":\r
    - year: -480\r
      event: "Battle of Salamis (sea) *Themistocles > Xerxes I*"\r
    - year: 1567\r
      event: "War of Religion - Huguenots try kidnap Charles IX"\r
    - year: 2008\r
      event: "Dow falls 777.68"\r
\r
  "Oct 1":\r
    - year: -331\r
      event: "Alexander → Darius III"\r
    - year: 1814\r
      event: "Congress of Vienna redraws map after Napoleon"\r
    - year: 1867\r
      event: "Marx → Das Kapital"\r
    - year: 1988\r
      event: "Gorbachev heads Soviet Union"\r
\r
  "Oct 2":\r
    - year: 1187\r
      event: "Saladin captures Jerusalem"\r
    - year: 1492\r
      event: "Henry IV invades France"\r
\r
  "Oct 3":\r
    - year: 1922\r
      event: "Photo sent by telephone"\r
    - year: 1935\r
      event: "Italy invades Ethiopia"\r
    - year: 1990\r
      event: "Germany reunified"\r
\r
  "Oct 4":\r
    - year: 1537\r
      event: "1st print of Bible"\r
    - year: 1883\r
      event: "Orient Express Paris → Istanbul"\r
    - year: 1900\r
      event: "Ashantis defeated"\r
    - year: 1957\r
      event: "Sputnik ↑"\r
\r
  "Oct 5":\r
    - year: 1274\r
      event: "Mongols → Japan"\r
    - year: 1813\r
      event: "W. H. Harrison → Tecumseh's Confederacy"\r
    - year: 1864\r
      event: "Calcutta ← Cyclone"\r
\r
  "Oct 6":\r
    - year: 1949\r
      event: "Truman strengthens NATO with Mutual Defense Assistance Act"\r
    - year: 1951\r
      event: "Stalin announces A-bomb"\r
    - year: 1956\r
      event: "Albert Sabin → polio vaccine"\r
\r
  "Oct 7":\r
    - year: 2001\r
      event: "US invasion of Afghanistan begins with air assault and covert ground operations"\r
    - year: 2023\r
      event: "Hamas launches major air and ground attack on Israel from Gaza"\r
\r
  "Oct 8":\r
    - year: 1769\r
      event: "Captain James Cook lands in New Zealand, Te Maro killed in misunderstanding"\r
    - year: 1856\r
      event: "Second Opium War begins with Arrow Incident on Pearl River"\r
    - year: 1917\r
      event: "Leon Trotsky named chairman of Petrograd Soviet as Bolsheviks gain control"\r
\r
  "Oct 9":\r
    - year: 768\r
      event: "Charlemagne and Carloman I crowned King of the Franks"\r
    - year: 1000\r
      event: "Leif Erikson reaches Vinland, first European to reach North America"\r
    - year: 1941\r
      event: "FDR approves atomic program (Manhattan Project)"\r
    - year: 2006\r
      event: "North Korea conducts first nuclear test"\r
\r
  "Oct 10":\r
    - year: 1780\r
      event: "Great Hurricane of 1780 kills 20,000-30,000 in Caribbean"\r
    - year: 1871\r
      event: "Great Chicago Fire extinguished after 3 days"\r
    - year: 1911\r
      event: "Chinese revolutionaries begin Wuchang Uprising against Qing dynasty"\r
\r
  "Oct 11":\r
    - year: 1945\r
      event: "Chinese Civil War begins between Kuomintang and Communist Party"\r
    - year: 1986\r
      event: "Reagan and Gorbachev open Reykjavik summit talks"\r
\r
  "Oct 12":\r
    - year: -539\r
      event: "Cyrus the Great takes Babylon"\r
    - year: 1900\r
      event: "First modern submarine USS Holland commissioned by US Navy"\r
    - year: 1999\r
      event: "Day of Six Billion proclaimed as 6 billionth human born"\r
\r
  "Oct 13":\r
    - year: 54\r
      event: "Agrippina the Younger murders Emperor Claudius to secure succession for Nero"\r
    - year: 1884\r
      event: "International Meridian Conference establishes Greenwich as prime meridian"\r
    - year: 1924\r
      event: "Mecca falls to Saudi forces led by Abdulaziz Ibn Saud"\r
    - year: 1943\r
      event: "Italy switches sides and declares war on Germany"\r
\r
  "Oct 14":\r
    - year: 1066\r
      event: "Battle of Hastings: William the Conqueror defeats Harold II"\r
    - year: 1933\r
      event: "Nazi Germany withdraws from League of Nations"\r
    - year: 1982\r
      event: "Reagan proclaims war on drugs"\r
\r
  "Oct 15":\r
    - year: 1581\r
      event: "First ballet 'Ballet Comique de la Reine' staged in Paris"\r
    - year: 1815\r
      event: "Napoleon arrives on Saint Helena to begin exile"\r
    - year: 1993\r
      event: "Mandela and de Klerk awarded Nobel Peace Prize"\r
\r
  "Oct 16":\r
    - year: 1813\r
      event: "Battle of Leipzig: Napoleon defeated by Prussia, Austria, Russia"\r
    - year: 1962\r
      event: "Cuban Missile Crisis begins as JFK shown Soviet missile photos"\r
\r
  "Oct 17":\r
    - year: 1907\r
      event: "Marconi begins first commercial transatlantic wireless service"\r
    - year: 1943\r
      event: "Burma Railway completed by Allied POWs and Asian laborers"\r
    - year: 1973\r
      event: "OPEC uses oil as economic weapon in Arab-Israeli War"\r
\r
  "Oct 18":\r
    - year: 1867\r
      event: "US takes formal possession of Alaska from Russia for $7.2 million"\r
    - year: 1931\r
      event: "Al Capone convicted on tax evasion charges"\r
    - year: 1962\r
      event: "Watson, Crick and Wilkins win Nobel Prize for DNA structure work"\r
\r
  "Oct 19":\r
    - year: "202BCE"\r
      event: "Battle of Zama: Scipio Africanus defeats Hannibal, ending Second Punic War"\r
    - year: 1781\r
      event: "Cornwallis surrenders to Washington at Yorktown, ending American Revolutionary War"\r
    - year: 2015\r
      event: "Scientists find evidence life on Earth began 4.1 billion years ago"\r
\r
  "Oct 20":\r
    - year: 1803\r
      event: "US Senate ratifies Louisiana Purchase"\r
    - year: 2020\r
      event: "US Justice Department sues Google for illegal monopoly"\r
\r
  "Oct 21":\r
    - year: 1805\r
      event: "Battle of Trafalgar: Nelson defeats French-Spanish fleet, Nelson killed"\r
    - year: 1854\r
      event: "Florence Nightingale sent to Crimean War with 38 nurses"\r
    - year: 1950\r
      event: "Chinese Communist forces occupy Tibet"\r
\r
  "Oct 22":\r
    - year: 1721\r
      event: "Tsar Peter the Great titles himself Emperor of All Russia"\r
    - year: 1879\r
      event: "Thomas Edison perfects carbonized cotton filament light bulb"\r
\r
  "Oct 23":\r
    - year: "42BCE"\r
      event: "Second Battle of Philippi: Brutus defeated by Mark Antony and Octavian"\r
    - year: 1977\r
      event: "Discovery of 3.4 billion-year-old single-celled fossil announced"\r
\r
  "Oct 24":\r
    - year: 1929\r
      event: "Black Thursday: Dow Jones drops 12.8%, start of stock market crash"\r
    - year: 2008\r
      event: "Bloody Friday: World stock exchanges experience worst decline in history"\r
\r
  "Oct 25":\r
    - year: 1415\r
      event: "Battle of Agincourt: Henry V defeats French army with longbow tactics"\r
    - year: 1854\r
      event: "Charge of the Light Brigade during the Crimean War"\r
\r
  "Oct 26":\r
    - year: 1861\r
      event: "Pony Express ends after 19 months"\r
    - year: 1863\r
      event: "Geneva conference leads to formation of Red Cross"\r
    - year: 1977\r
      event: "Last natural case of smallpox discovered in Somalia"\r
    - year: 2019\r
      event: "US Special Forces kill ISIS leader Abu Bakr al-Baghdadi"\r
\r
  "Oct 27":\r
\r
  "Oct 28":\r
\r
  "Oct 29":\r
\r
  "Oct 30":\r
\r
  "Oct 31":\r
\r
  "Nov 1":\r
\r
  "Nov 2":\r
\r
  "Nov 3":\r
\r
  "Nov 4":\r
\r
  "Nov 5":\r
    - year: 1895\r
      event: "George Selden receives the first U.S. patent for an automobile"\r
\r
  "Nov 6":\r
    - year: 1869\r
      event: "Rutgers and Princeton play the first intercollegiate football game"\r
\r
  "Nov 7":\r
\r
  "Nov 8":\r
    - year: 1731\r
      event: "Benjamin Franklin opens the first public library in Philadelphia"\r
\r
  "Nov 9":\r
    - year: 1906\r
      event: "Theodore Roosevelt is the first U.S. president to visit other countries (Puerto Rico and Panama)"\r
\r
  "Nov 10":\r
    - year: 1926\r
      event: "Hirohito becomes Emperor of Japan"\r
\r
  "Nov 11":\r
    - year: 1939\r
      event: "God Bless America is publicly sung for the first time by Kate Smith"\r
\r
  "Nov 12":\r
    - year: 1954\r
      event: "Ellis Island immigration station in NY Harbor is closed"\r
\r
  "Nov 13":\r
\r
  "Nov 14":\r
\r
  "Nov 15":\r
\r
  "Nov 16":\r
    - year: 1532\r
      event: "Inca Empire falls to Spaniard Pizarro"\r
\r
  "Nov 17":\r
    - year: 1868\r
      event: "Suez Canal in Egypt opens, linking Mediterranean and Red Seas"\r
\r
  "Nov 18":\r
    - year: 1928\r
      event: "Mickey Mouse makes his animated debut in Steamboat Willie"\r
\r
  "Nov 19":\r
\r
  "Nov 20":\r
    - year: 1945\r
      event: "International War Crimes Tribunal begins trials in Neuremburg, Germany"\r
\r
  "Nov 21":\r
    - year: 1620\r
      event: "The Mayflower Compact was signed"\r
\r
  "Nov 22":\r
    - year: 1962\r
      event: "President John F. Kennedy was assasinated"\r
\r
  "Nov 23":\r
\r
  "Nov 24":\r
\r
  "Nov 25":\r
\r
  "Nov 26":\r
\r
  "Nov 27":\r
\r
  "Nov 28":\r
\r
  "Nov 29":\r
    - year: 1929\r
      event: "Commander Richard E. Byrd flies over the South Pole"\r
\r
  "Nov 30":\r
\r
  "Dec 1":\r
    - year: 1955\r
      event: "Rosa Parks arrested for not moving to the back of the bus"\r
    - year: 1880\r
      event: "The White House has its first telephone installed"\r
\r
  "Dec 2":\r
    - year: 1823\r
      event: "The Monroe Doctrine declares European powers must stay out of the Western Hemisphere"\r
\r
  "Dec 3":\r
\r
  "Dec 4":\r
    - year: 1973\r
      event: "Pioneer 10 reaches Jupiter"\r
\r
  "Dec 5":\r
    - year: 1933\r
      event: "Prohibition ends"\r
\r
  "Dec 6":\r
\r
  "Dec 7":\r
    - year: 1941\r
      event: "Japan bombs Pearl Harbor, Hawaii"\r
    - year: 1787\r
      event: "Delaware is the first state to ratify the U.S. Constitution"\r
\r
  "Dec 8":\r
    - year: 1980\r
      event: "John Lennon shot and killed in NYC"\r
    - year: 1941\r
      event: "U.S. and Britain declare war on Japan"\r
\r
  "Dec 9":\r
\r
  "Dec 10":\r
\r
  "Dec 11":\r
    - year: 1941\r
      event: "US declares war on Germany and Italy"\r
    - year: 1620\r
      event: "103 pilgrims land at Plymouth Rock"\r
\r
  "Dec 12":\r
    - year: 1800\r
      event: "Washington, D.C. is established as the U.S. capital"\r
\r
  "Dec 13":\r
\r
  "Dec 14":\r
    - year: 1911\r
      event: "South Pole first reached by Roald Amundsen"\r
\r
  "Dec 15":\r
    - year: 1791\r
      event: "U.S. Bill of Rights signed"\r
\r
  "Dec 16":\r
    - year: 1773\r
      event: "The Boston Tea Party"\r
\r
  "Dec 17":\r
    - year: 1770\r
      event: "Ludwig Von Beethoven is born"\r
\r
  "Dec 18":\r
\r
  "Dec 19":\r
\r
  "Dec 20":\r
    - year: 1998\r
      event: "U.S. President William Jefferson Clinton is impeached"\r
\r
  "Dec 21":\r
    - year: 1898\r
      event: "Pierre and Marie Curie discover radium"\r
\r
  "Dec 22":\r
    - year: 1865\r
      event: "General Sherman takes Savannah"\r
\r
  "Dec 23":\r
    - year: 1888\r
      event: "Dutch Painter Vincent Van Gogh cuts off his own ear"\r
\r
  "Dec 24":\r
    - year: 1814\r
      event: "War of 1812 Peace Treaty signed"\r
\r
  "Dec 25":\r
    - year: 1776\r
      event: "General George Washington and his troops cross the Delaware River"\r
\r
  "Dec 26":\r
\r
  "Dec 27":\r
\r
  "Dec 28":\r
    - year: 1895\r
      event: "World's first movie theater opens in Paris"\r
\r
  "Dec 29":\r
    - year: 1890\r
      event: "The Battle of Wounded Knee, S.D."\r
\r
  "Dec 30":\r
\r
  "Dec 31":\r
\r
  "Jan 1":\r
    - year: 1863\r
      event: "Abraham Lincoln signs the Emancipation Proclamation ending slavery"\r
\r
  "Jan 2":\r
    - year: 1968\r
      event: "First successful human heart transplant performed"\r
\r
  "Jan 3":\r
    - year: 1959\r
      event: "Alaska becomes 49th U.S. state"\r
\r
  "Jan 4":\r
    - year: 1642\r
      event: "Sir Isaac Newton is born"\r
\r
  "Jan 5":\r
    - year: 1920\r
      event: "Boston Red Sox sell Babe Ruth to NY Yankees"\r
\r
  "Jan 6":\r
    - year: 1412\r
      event: "French heroine Joan of Arc born"\r
\r
  "Jan 7":\r
\r
  "Jan 8":\r
    - year: 1935\r
      event: "Elvis Presly is born"\r
\r
  "Jan 9":\r
\r
  "Jan 10":\r
\r
  "Jan 11":\r
\r
  "Jan 12":\r
\r
  "Jan 13":\r
    - year: 1930\r
      event: "First Mickey Mouse comic strip appears"\r
\r
  "Jan 14":\r
\r
  "Jan 15":\r
\r
  "Jan 16":\r
\r
  "Jan 17":\r
    - year: 1706\r
      event: "Benjamin Franklin is born"\r
\r
  "Jan 18":\r
    - year: 1778\r
      event: "Capt. James Cook finds Sandwich (Hawaiian) Islands"\r
\r
  "Jan 19":\r
    - year: 1793\r
      event: "French King Louis XVI sentenced to death"\r
\r
  "Jan 20":\r
\r
  "Jan 21":\r
    - year: 1799\r
      event: "Edward Jenners smallpox vaccine introduced"\r
\r
  "Jan 22":\r
\r
  "Jan 23":\r
\r
  "Jan 24":\r
    - year: 1924\r
      event: "St. Petersburg, Russia renamed Leningrad"\r
    - year: 1848\r
      event: "Gold discovered at Sutter's Mill starts California Gold Rush"\r
\r
  "Jan 25":\r
    - year: 1915\r
      event: "Alexander Graham Bell makes 1st transcontinental phone call"\r
\r
  "Jan 26":\r
    - year: 1875\r
      event: "Dentist's electric drill patented"\r
\r
  "Jan 27":\r
    - year: 1967\r
      event: "Apollo 1 fire kills astronauts Grissom, White, and Chaffee"\r
\r
  "Jan 28":\r
    - year: 1986\r
      event: "Space Shuttle Chanlleger explodes killing all on board"\r
\r
  "Jan 29":\r
    - year: 1886\r
      event: "First successful gasoline driven car patented by Karl Benz in Germany"\r
\r
  "Jan 30":\r
    - year: 1933\r
      event: "The Lone Ranger premieres on ABC radio"\r
\r
  "Jan 31":\r
    - year: 1865\r
      event: "Congress passes 13th Amendment abolishing slavery"\r
\r
  "Feb 1":\r
\r
  "Feb 2":\r
    - year: 1848\r
      event: "Treaty of Guadalupe Hidalgo end U.S-Mexican War"\r
\r
  "Feb 3":\r
\r
  "Feb 4":\r
\r
  "Feb 5":\r
\r
  "Feb 6":\r
\r
  "Feb 7":\r
\r
  "Feb 8":\r
    - year: 1587\r
      event: "Mary Queen of Scots beheaded"\r
\r
  "Feb 9":\r
\r
  "Feb 10":\r
\r
  "Feb 11":\r
\r
  "Feb 12":\r
\r
  "Feb 13":\r
    - year: 1866\r
      event: "Jesse James hold up his first bank in Liberty, MO"\r
\r
  "Feb 14":\r
\r
  "Feb 15":\r
\r
  "Feb 16":\r
    - year: 1923\r
      event: "Tutankhamen's burial chamber is opened"\r
\r
  "Feb 17":\r
\r
  "Feb 18":\r
\r
  "Feb 19":\r
    - year: 1878\r
      event: "Edison patents the gramophone"\r
\r
  "Feb 20":\r
    - year: 1792\r
      event: "U.S. Postal Service is created"\r
\r
  "Feb 21":\r
\r
  "Feb 22":\r
\r
  "Feb 23":\r
    - year: 1945\r
      event: "U.S. Marines raise the flag on Iwo Jima"\r
\r
  "Feb 24":\r
    - year: 1821\r
      event: "Mexico gains independence from Spain"\r
\r
  "Feb 25":\r
\r
  "Feb 26":\r
    - year: 1870\r
      event: "First NYC subway line opens"\r
\r
  "Feb 27":\r
\r
  "Feb 28":\r
    - year: 1854\r
      event: "Republican Party formally organized"\r
\r
  "Feb 29":\r
\r
  "Mar 1":\r
    - year: 1790\r
      event: "First U.S. census authorized"\r
\r
  "Mar 2":\r
    - year: 1973\r
      event: "Vietnam peace treaty signed in Paris"\r
\r
  "Mar 3":\r
    - year: 1931\r
      event: "The Star Spangled Banner become the U.S. national athem"\r
\r
  "Mar 4":\r
\r
  "Mar 5":\r
\r
  "Mar 6":\r
\r
  "Mar 7":\r
    - year: 1926\r
      event: "First transatlantic telephone call"\r
\r
  "Mar 8":\r
    - year: 1965\r
      event: "First U.S. troops arrive in Vietnam"\r
\r
  "Mar 9":\r
\r
  "Mar 10":\r
    - year: 1862\r
      event: "First U.S. paper currency is issued"\r
\r
  "Mar 11":\r
    - year: 1953\r
      event: "Nuclear bomb accidentally dropped on North Carolina"\r
\r
  "Mar 12":\r
\r
  "Mar 13":\r
\r
  "Mar 14":\r
\r
  "Mar 15":\r
\r
  "Mar 16":\r
    - year: 1830\r
      event: "Slowest day ever for NY Stock Exchange"\r
\r
  "Mar 17":\r
\r
  "Mar 18":\r
    - year: 1949\r
      event: "NATO is formed"\r
\r
  "Mar 19":\r
\r
  "Mar 20":\r
\r
  "Mar 21":\r
    - year: 1965\r
      event: "Martin Luther King Jr. leads march from Selma to Montgomery, AL"\r
\r
  "Mar 22":\r
    - year: 1903\r
      event: "Niagra Falls runs dry due to drought"\r
\r
  "Mar 23":\r
\r
  "Mar 24":\r
    - year: 1837\r
      event: "Canada grants blacks the right to vote"\r
\r
  "Mar 25":\r
    - year: 1911\r
      event: "Triangle Shirtwaist Factory fire kills 145, only 13 girls survive"\r
\r
  "Mar 26":\r
\r
  "Mar 27":\r
    - year: 1914\r
      event: "First successful blood transfusion"\r
\r
  "Mar 28":\r
\r
  "Mar 29":\r
    - year: 1932\r
      event: "Jack Benny debuts on radio"\r
\r
  "Mar 30":\r
    - year: 1932\r
      event: "Amelia Earhart is first woman to fly solo across the Atlantic"\r
\r
  "Mar 31":\r
\r
  "Apr 1":\r
\r
  "Apr 2":\r
    - year: 1978\r
      event: "Velcro is first sold"\r
\r
  "Apr 3":\r
    - year: 1882\r
      event: "Jesse James is killed"\r
\r
  "Apr 4":\r
    - year: 1581\r
      event: "Frances Drake completes circumnavigation of the world"\r
\r
  "Apr 5":\r
\r
  "Apr 6":\r
\r
  "Apr 7":\r
\r
  "Apr 8":\r
    - year: 1513\r
      event: "Ponce de Leon claims Florida for Spain"\r
\r
  "Apr 9":\r
    - year: 1865\r
      event: "Gen. Lee surrenders to Gen. Grant at Appomattox"\r
\r
  "Apr 10":\r
    - year: 1849\r
      event: "The safety pin is patented"\r
\r
  "Apr 11":\r
\r
  "Apr 12":\r
\r
  "Apr 13":\r
\r
  "Apr 14":\r
    - year: 1614\r
      event: "Pochahontas marries John Rolfe"\r
\r
  "Apr 15":\r
    - year: 1452\r
      event: "Leonardo da Vinci is born"\r
\r
  "Apr 16":\r
    - year: 1922\r
      event: "Annie Oakley shoot a record 100 clay targets in a row"\r
\r
  "Apr 17":\r
\r
  "Apr 18":\r
\r
  "Apr 19":\r
    - year: 1906\r
      event: "The Great San Francisco Earthquake"\r
    - year: 1956\r
      event: "Grace Kelley marries Prince Ranier III of Monaco"\r
\r
  "Apr 20":\r
    - year: 1889\r
      event: "Adolf Hitler was born"\r
\r
  "Apr 21":\r
\r
  "Apr 22":\r
\r
  "Apr 23":\r
    - year: 1564\r
      event: "WIlliam Shakespeare was born"\r
\r
  "Apr 24":\r
\r
  "Apr 25":\r
\r
  "Apr 26":\r
    - year: 1986\r
      event: "The Chernobyl nuclear disaster"\r
\r
  "Apr 27":\r
\r
  "Apr 28":\r
    - year: 1789\r
      event: "Fletcher Christian leads mutiny on HMS Bounty"\r
\r
  "Apr 29":\r
    - year: 1913\r
      event: "The zipper is patented"\r
\r
  "Apr 30":\r
    - year: 1803\r
      event: "U.S. purchased Louisiana Territory"\r
\r
  "May 1":\r
\r
  "May 2":\r
    - year: 1945\r
      event: "Berlin surrenders to the Russian army"\r
\r
  "May 3":\r
\r
  "May 4":\r
    - year: 1970\r
      event: "Four students killed by National Guard at Kent State University"\r
\r
  "May 5":\r
    - year: 1961\r
      event: "Alan Shepard is first American in space"\r
\r
  "May 6":\r
    - year: 1915\r
      event: "Ocean liner Lusitania sunk by German submarines"\r
\r
  "May 7":\r
\r
  "May 8":\r
\r
  "May 9":\r
\r
  "May 10":\r
    - year: 1994\r
      event: "Nelson Mandela sworn in as South Africa's first black president"\r
\r
  "May 11":\r
\r
  "May 12":\r
\r
  "May 13":\r
\r
  "May 14":\r
\r
  "May 15":\r
\r
  "May 16":\r
\r
  "May 17":\r
    - year: 1845\r
      event: "The rubber band was patented"\r
\r
  "May 18":\r
    - year: 1804\r
      event: "Napoleon became Emperor of France"\r
\r
  "May 19":\r
\r
  "May 20":\r
\r
  "May 21":\r
    - year: 1881\r
      event: "Clara Barton founded the American Red Cross"\r
\r
  "May 22":\r
\r
  "May 23":\r
    - year: 1945\r
      event: "British Prime Minister Winston Churchill resigns"\r
\r
  "May 24":\r
    - year: 1884\r
      event: "Samuel Morse send the first telegraph message"\r
\r
  "May 25":\r
\r
  "May 26":\r
    - year: 1896\r
      event: "Nicholas II crowned Czar of Russia"\r
\r
  "May 27":\r
    - year: 1923\r
      event: "Henry Kissenger was born"\r
\r
  "May 28":\r
    - year: 1934\r
      event: "The Dionne quintuplets were born"\r
\r
  "May 29":\r
\r
  "May 30":\r
\r
  "May 31":\r
    - year: 1962\r
      event: "Nazi war criminal Adolf Eichmann executed"\r
\r
  "Jun 1":\r
\r
  "Jun 2":\r
    - year: 1924\r
      event: "U.S. Congress grants Native Americans citizenship"\r
\r
  "Jun 3":\r
\r
  "Jun 4":\r
    - year: 1940\r
      event: "German forces invade Paris"\r
\r
  "Jun 5":\r
    - year: 1967\r
      event: "Six Day War begins between Isreal and it's Arab neighbors"\r
\r
  "Jun 6":\r
\r
  "Jun 7":\r
\r
  "Jun 8":\r
\r
  "Jun 9":\r
\r
  "Jun 10":\r
\r
  "Jun 11":\r
\r
  "Jun 12":\r
    - year: 1939\r
      event: "Baseball Hall of Fame opens in Cooperstown"\r
\r
  "Jun 13":\r
\r
  "Jun 14":\r
\r
  "Jun 15":\r
\r
  "Jun 16":\r
\r
  "Jun 17":\r
\r
  "Jun 18":\r
    - year: 1815\r
      event: "Wellington defeats Napolean at Waterloo"\r
\r
  "Jun 19":\r
\r
  "Jun 20":\r
\r
  "Jun 21":\r
\r
  "Jun 22":\r
    - year: 1970\r
      event: "26th Amendment lowers voting age to 18"\r
\r
  "Jun 23":\r
\r
  "Jun 24":\r
    - year: 1948\r
      event: "Soviet Union begins the Berlin Blockade"\r
\r
  "Jun 25":\r
\r
  "Jun 26":\r
\r
  "Jun 27":\r
\r
  "Jun 28":\r
    - year: 1919\r
      event: "Treaty of Versailles signed, ending WWI"\r
\r
  "Jun 29":\r
    - year: 1854\r
      event: "Gadsen Purchase--U.S. aquires parts of present day AZ & NM"\r
\r
  "Jun 30":\r
    - year: 1936\r
      event: "Gone With the Wind is published"\r
\r
  "Jul 1":\r
    - year: 1963\r
      event: "U.S. Postal Service starts using ZIP code system"\r
\r
  "Jul 2":\r
\r
  "Jul 3":\r
\r
  "Jul 4":\r
    - year: 1997\r
      event: "Mars Pathfinder lands on Mars"\r
\r
  "Jul 5":\r
\r
  "Jul 6":\r
    - year: 1933\r
      event: "First all star game is played at Chicago's Wrigley Field"\r
\r
  "Jul 7":\r
\r
  "Jul 8":\r
    - year: 1835\r
      event: "The Libery Bell cracks"\r
\r
  "Jul 9":\r
\r
  "Jul 10":\r
\r
  "Jul 11":\r
    - year: 1804\r
      event: "Alexander Hamilton shot by V.P. Aaron Burr in a duel"\r
\r
  "Jul 12":\r
\r
  "Jul 13":\r
    - year: 1977\r
      event: "New York City paralyzed by 25 hour black-out"\r
\r
  "Jul 14":\r
\r
  "Jul 15":\r
    - year: 1099\r
      event: "Crusaders take control of Jerusalem"\r
\r
  "Jul 16":\r
    - year: 1945\r
      event: "First atomic bomb detonated in NM"\r
\r
  "Jul 17":\r
    - year: 1998\r
      event: "Nicholas II of Russia and family buried 80 years after they are assasinated"\r
\r
  "Jul 18":\r
    - year: 1921\r
      event: "Black Sox trial begins in Chicago"\r
\r
  "Jul 19":\r
\r
  "Jul 20":\r
    - year: 1944\r
      event: "Franklin D. Roosevelt nominated for a fourth term as U.S. President"\r
\r
  "Jul 21":\r
\r
  "Jul 22":\r
    - year: 1934\r
      event: "Public Enemy #1 John Dillinger killed by FBI agents in Chicago"\r
\r
  "Jul 23":\r
    - year: 1935\r
      event: "An airplane crashes into the Empire State Building"\r
\r
  "Jul 24":\r
\r
  "Jul 25":\r
    - year: 1952\r
      event: "Puerto Rico becomes a self-governing commonwealth of the U.S."\r
\r
  "Jul 26":\r
    - year: 1946\r
      event: "President Truman orders desegregation of all U.S. forces"\r
\r
  "Jul 27":\r
    - year: 1940\r
      event: "Bugs Bunny makes his debut"\r
\r
  "Unknown":\r
    - year: 399BCE\r
      event: "Socrates died"\r
    - year: 2700BCE\r
      event: "Pyramids begun"\r
    - year: 2500BCE\r
      event: "Pyramids completed"\r
    - year: 3400BCE\r
      event: "Invention of writing"\r
    - year: 1714\r
      event: "Leibniz writes *Monadology*"`,tp=()=>{try{return np.load(lp).dates}catch(a){return console.error("Error parsing YAML:",a),{}}},Jc=tp(),I0=()=>{const a=[];let i=1;return Object.entries(Jc).forEach(([o,f])=>{!f||!Array.isArray(f)||f.forEach(d=>{let y;o==="Unknown"?y=d.year.toString():y=`${o}, ${d.year}`,a.push({id:i++,date:y,description:d.event})})}),a},ap=()=>{const a=new Date,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],f=a.getDate(),d=`${o} ${f}`,y=Jc[d];return!y||!Array.isArray(y)?[]:y.map((v,g)=>({id:`today-${g}`,year:v.year,event:v.event,date:`${d}, ${v.year}`}))},up=Object.freeze(Object.defineProperty({__proto__:null,getFormattedDates:I0,getTodaysEvents:ap,historicalDatesData:Jc},Symbol.toStringTag,{value:"Module"})),rp=()=>{const[a,i]=Nn.useState(new Date),[o,f]=Nn.useState([]),d=async O=>{const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][O.getMonth()],B=O.getDate(),G=`${U} ${B}`;try{const J=(await Hh(()=>Promise.resolve().then(()=>up),void 0)).historicalDatesData[G];if(!J||!Array.isArray(J)){f([]);return}const V=J.map((I,_e)=>({id:`${G}-${_e}`,year:I.year,event:I.event,date:`${G}, ${I.year}`}));f(V)}catch($){console.error("Error loading historical data:",$),f([])}};Nn.useEffect(()=>{d(a)},[a]);const y=()=>{const O=new Date(a);O.setDate(O.getDate()-1),i(O)},v=()=>{const O=new Date(a);O.setDate(O.getDate()+1),i(O)},g=()=>{i(new Date)},m=()=>{const O=new Date;return a.toDateString()===O.toDateString()},b=a.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return L.jsxs("div",{className:"today-in-history",children:[L.jsxs("div",{className:"history-header",children:[L.jsxs("h2",{children:["📅 ",m()?"Today":"This Day"," in History"]}),L.jsxs("div",{className:"date-navigation",children:[L.jsx("button",{className:"nav-arrow",onClick:y,title:"Previous day",children:"◀"}),L.jsxs("div",{className:"date-display",children:[L.jsx("p",{className:"current-date",children:b}),!m()&&L.jsx("button",{className:"today-btn",onClick:g,children:"Back to Today"})]}),L.jsx("button",{className:"nav-arrow",onClick:v,title:"Next day",children:"▶"})]})]}),!o||o.length===0?L.jsx("p",{className:"no-events",children:"No recorded historical events for this date."}):L.jsx("div",{className:"events-list",children:o.map(O=>L.jsxs("div",{className:"event-item",children:[L.jsx("div",{className:"event-year",children:O.year}),L.jsx("div",{className:"event-description",children:O.event})]},O.id))})]})};function ip(){const[a,i]=Nn.useState("table"),o=I0();return L.jsxs("div",{className:"app",children:[L.jsxs("header",{className:"app-header",children:[L.jsx("h1",{children:"Historical Dates SRS"}),L.jsx("p",{children:"Study and memorize important historical dates"}),L.jsxs("nav",{className:"view-nav",children:[L.jsx("button",{className:`nav-btn ${a==="grid"?"active":""}`,onClick:()=>i("grid"),children:"Grid View"}),L.jsx("button",{className:`nav-btn ${a==="table"?"active":""}`,onClick:()=>i("table"),children:"Table View"})]})]}),L.jsxs("main",{className:"app-main",children:[L.jsx(rp,{}),a==="grid"?L.jsx(zh,{dates:o}):L.jsx(Rh,{dates:o})]})]})}Nh.createRoot(document.getElementById("root")).render(L.jsx(Nn.StrictMode,{children:L.jsx(ip,{})}));
