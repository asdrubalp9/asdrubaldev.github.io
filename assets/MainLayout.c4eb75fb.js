import{u as Re,a as Fe,c as rt,b as it,d as st,e as ut,f as dt,g as ct,h as J,i as ft,j as vt,k as ht,l as mt,m as de,Q as pt}from"./format.fbb620fb.js";import{c as $,h as Y,a as bt,b as Le,d as gt,e as yt,Q as ce}from"./QBtn.61f323f7.js";import{c,h as S,g as R,k as I,n as xe,l as wt,m as Z,p as fe,q as $e,t as ve,u as ye,v as he,x as Ct,i as qe,y as ae,r as q,w,z as te,o as A,A as X,B as xt,C as We,D as qt,E as we,G as Ae,H as ee,a as St,_ as Ne,I as H,J as j,K as V,j as O,L as U,M as Be,N as kt,F as Oe,O as _t,P as me,Q as pe,R as Tt,S as Pe}from"./index.2815e858.js";import{u as Ee}from"./vue-i18n.esm-bundler.b603be2a.js";var zt=$({name:"QList",props:{...Re,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:l}){const i=R(),s=Fe(e,i.proxy.$q),t=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S("div",{class:t.value},Y(l.default))}});const Se={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Lt=Object.keys(Se);Se.all=!0;function De(e){const l={};for(const i of Lt)e[i]===!0&&(l[i]=!0);return Object.keys(l).length===0?Se:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}function Me(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function be(e,l,i){const s=ye(e);let t,o=s.left-l.event.x,n=s.top-l.event.y,f=Math.abs(o),u=Math.abs(n);const a=l.direction;a.horizontal===!0&&a.vertical!==!0?t=o<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=n<0?"up":"down":a.up===!0&&n<0?(t="up",f>u&&(a.left===!0&&o<0?t="left":a.right===!0&&o>0&&(t="right"))):a.down===!0&&n>0?(t="down",f>u&&(a.left===!0&&o<0?t="left":a.right===!0&&o>0&&(t="right"))):a.left===!0&&o<0?(t="left",f<u&&(a.up===!0&&n<0?t="up":a.down===!0&&n>0&&(t="down"))):a.right===!0&&o>0&&(t="right",f<u&&(a.up===!0&&n<0?t="up":a.down===!0&&n>0&&(t="down")));let g=!1;if(t===void 0&&i===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,g=!0,t==="left"||t==="right"?(s.left-=o,f=0,o=0):(s.top-=n,u=0,n=0)}return{synthetic:g,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:s,direction:t,isFirst:l.event.isFirst,isFinal:i===!0,duration:Date.now()-l.event.time,distance:{x:f,y:u},offset:{x:o,y:n},delta:{x:s.left-l.event.lastX,y:s.top-l.event.lastY}}}}let $t=0;var ge=bt({name:"touch-pan",beforeMount(e,{value:l,modifiers:i}){if(i.mouse!==!0&&I.has.touch!==!0)return;function s(o,n){i.mouse===!0&&n===!0?Ct(o):(i.stop===!0&&ve(o),i.prevent===!0&&$e(o))}const t={uid:"qvtp_"+$t++,handler:l,modifiers:i,direction:De(i),noop:xe,mouseStart(o){Me(o,t)&&wt(o)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Me(o,t)){const n=o.target;Z(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,n){if(I.is.firefox===!0&&fe(e,!0),t.lastEvt=o,n===!0||i.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0)){const a=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&$e(a),o.cancelBubble===!0&&ve(a),Object.assign(a,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:a}}ve(o)}const{left:f,top:u}=ye(o);t.event={x:f,y:u,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:u}},move(o){if(t.event===void 0)return;const n=ye(o),f=n.left-t.event.x,u=n.top-t.event.y;if(f===0&&u===0)return;t.lastEvt=o;const a=t.event.mouse===!0,g=()=>{s(o,a),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),rt(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{C(),d()},50):C()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(o,t.event.mouse);const{payload:d,synthetic:C}=be(o,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&g(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=C===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){g(),t.event.detected=!0,t.move(o);return}const b=Math.abs(f),y=Math.abs(u);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&u<0||t.direction.down===!0&&b<y&&u>0||t.direction.left===!0&&b>y&&f<0||t.direction.right===!0&&b>y&&f>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,n){if(t.event!==void 0){if(he(t,"temp"),I.is.firefox===!0&&fe(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(be(o===void 0?t.lastEvt:o,t).payload);const{payload:f}=be(o===void 0?t.lastEvt:o,t,!0),u=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(u):u()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,i.mouse===!0&&Z(t,"main",[[e,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),I.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const i=e.__qtouchpan;i!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&i.end(),i.handler=l.value),i.direction=De(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),he(l,"main"),he(l,"temp"),I.is.firefox===!0&&fe(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});const Qe=150;var Bt=$({name:"QDrawer",inheritAttrs:!1,props:{...it,...Re,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...st,"on-layout","mini-state"],setup(e,{slots:l,emit:i,attrs:s}){const t=R(),{proxy:{$q:o}}=t,n=Fe(e,o),{preventBodyScroll:f}=ft(),{registerTimeout:u}=ut(),a=qe(ae,()=>{console.error("QDrawer needs to be child of QLayout")});let g,b,y;const d=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),C=c(()=>e.mini===!0&&d.value!==!0),k=c(()=>C.value===!0?e.miniWidth:e.width),p=q(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),P=c(()=>e.persistent!==!0&&(d.value===!0||Ue.value===!0));function v(r,m){if(B(),r!==!1&&a.animate(),L(0),d.value===!0){const T=a.instances[K.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),D(1),a.isContainer.value!==!0&&f(!0)}else D(0),r!==!1&&ie(!1);u(()=>{r!==!1&&ie(!0),m!==!0&&i("show",r)},Qe)}function _(r,m){Q(),r!==!1&&a.animate(),D(0),L(F.value*k.value),se(),m!==!0&&u(()=>{i("hide",r)},Qe)}const{show:h,hide:x}=dt({showing:p,hideOnRouteChange:P,handleShow:v,handleHide:_}),{addToHistory:B,removeFromHistory:Q}=ct(p,x,P),E={belowBreakpoint:d,hide:x},z=c(()=>e.side==="right"),F=c(()=>(o.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),ke=q(0),W=q(!1),oe=q(!1),_e=q(k.value*F.value),K=c(()=>z.value===!0?"left":"right"),le=c(()=>p.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),ne=c(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(z.value?"R":"L")>-1||o.platform.is.ios===!0&&a.isContainer.value===!0),N=c(()=>e.overlay===!1&&p.value===!0&&d.value===!1),Ue=c(()=>e.overlay===!0&&p.value===!0&&d.value===!1),je=c(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&W.value===!1?" hidden":"")),Xe=c(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),Te=c(()=>z.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Ye=c(()=>z.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ke=c(()=>{const r={};return a.header.space===!0&&Te.value===!1&&(ne.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&Ye.value===!1&&(ne.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),Ge=c(()=>{const r={width:`${k.value}px`,transform:`translateX(${_e.value}px)`};return d.value===!0?r:Object.assign(r,Ke.value)}),Je=c(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ze=c(()=>`q-drawer q-drawer--${e.side}`+(oe.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(ne.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Te.value===!0?" q-drawer--top-padding":""))),et=c(()=>{const r=o.lang.rtl===!0?e.side:K.value;return[[ge,lt,void 0,{[r]:!0,mouse:!0}]]}),tt=c(()=>{const r=o.lang.rtl===!0?K.value:e.side;return[[ge,ze,void 0,{[r]:!0,mouse:!0}]]}),at=c(()=>{const r=o.lang.rtl===!0?K.value:e.side;return[[ge,ze,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function re(){nt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}w(d,r=>{r===!0?(g=p.value,p.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&g!==!1&&(p.value===!0?(L(0),D(0),se()):h(!1))}),w(()=>e.side,(r,m)=>{a.instances[m]===E&&(a.instances[m]=void 0,a[m].space=!1,a[m].offset=0),a.instances[r]=E,a[r].size=k.value,a[r].space=N.value,a[r].offset=le.value}),w(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&re()}),w(()=>e.behavior+e.breakpoint,re),w(a.isContainer,r=>{p.value===!0&&f(r!==!0),r===!0&&re()}),w(a.scrollbarWidth,()=>{L(p.value===!0?0:void 0)}),w(le,r=>{M("offset",r)}),w(N,r=>{i("on-layout",r),M("space",r)}),w(z,()=>{L()}),w(k,r=>{L(),ue(e.miniToOverlay,r)}),w(()=>e.miniToOverlay,r=>{ue(r,k.value)}),w(()=>o.lang.rtl,()=>{L()}),w(()=>e.mini,()=>{e.modelValue===!0&&(ot(),a.animate())}),w(C,r=>{i("mini-state",r)});function L(r){r===void 0?te(()=>{r=p.value===!0?0:k.value,L(F.value*r)}):(a.isContainer.value===!0&&z.value===!0&&(d.value===!0||Math.abs(r)===k.value)&&(r+=F.value*a.scrollbarWidth.value),_e.value=r)}function D(r){ke.value=r}function ie(r){const m=r===!0?"remove":a.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function ot(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),oe.value=!0,b=setTimeout(()=>{oe.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function lt(r){if(p.value!==!1)return;const m=k.value,T=J(r.distance.x,0,m);if(r.isFinal===!0){T>=Math.min(75,m)===!0?h():(a.animate(),D(0),L(F.value*m)),W.value=!1;return}L((o.lang.rtl===!0?z.value!==!0:z.value)?Math.max(m-T,0):Math.min(0,T-m)),D(J(T/m,0,1)),r.isFirst===!0&&(W.value=!0)}function ze(r){if(p.value!==!0)return;const m=k.value,T=r.direction===e.side,G=(o.lang.rtl===!0?T!==!0:T)?J(r.distance.x,0,m):0;if(r.isFinal===!0){Math.abs(G)<Math.min(75,m)===!0?(a.animate(),D(1),L(0)):x(),W.value=!1;return}L(F.value*G),D(J(1-G/m,0,1)),r.isFirst===!0&&(W.value=!0)}function se(){f(!1),ie(!0)}function M(r,m){a.update(e.side,r,m)}function nt(r,m){r.value!==m&&(r.value=m)}function ue(r,m){M("size",r===!0?e.miniWidth:m)}return a.instances[e.side]=E,ue(e.miniToOverlay,k.value),M("space",N.value),M("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),A(()=>{i("on-layout",N.value),i("mini-state",C.value),g=e.showIfAbove===!0;const r=()=>{(p.value===!0?v:_)(!1,!0)};if(a.totalWidth.value!==0){te(r);return}y=w(a.totalWidth,()=>{y(),y=void 0,p.value===!1&&e.showIfAbove===!0&&d.value===!1?h(!1):r()})}),X(()=>{y!==void 0&&y(),clearTimeout(b),p.value===!0&&se(),a.instances[e.side]===E&&(a.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(xt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),et.value)),r.push(Le("div",{ref:"backdrop",class:je.value,style:Xe.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>at.value)));const m=C.value===!0&&l.mini!==void 0,T=[S("div",{...s,key:""+m,class:[Je.value,s.class]},m===!0?l.mini():Y(l.default))];return e.elevated===!0&&p.value===!0&&T.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Le("aside",{ref:"content",class:Ze.value,style:Ge.value},T,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>tt.value)),S("div",{class:"q-drawer-container"},r)}}}),Ot=$({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:i}}=R(),s=qe(ae,()=>{console.error("QPageContainer needs to be child of QLayout")});We(qt,!0);const t=c(()=>{const o={};return s.header.space===!0&&(o.paddingTop=`${s.header.size}px`),s.right.space===!0&&(o[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(o.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(o[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),o});return()=>S("div",{class:"q-page-container",style:t.value},Y(l.default))}});const{passive:He}=we,Pt=["both","horizontal","vertical"];var Et=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Pt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,t,o;w(()=>e.scrollTarget,()=>{u(),f()});function n(){s!==null&&s();const b=Math.max(0,ht(t)),y=mt(t),d={top:b-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const C=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";i.position={top:b,left:y},i.directionChanged=i.direction!==C,i.delta=d,i.directionChanged===!0&&(i.direction=C,i.inflectionPoint=i.position),l("scroll",{...i})}function f(){t=vt(o,e.scrollTarget),t.addEventListener("scroll",a,He),a(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",a,He),t=void 0)}function a(b){if(b===!0||e.debounce===0||e.debounce==="0")n();else if(s===null){const[y,d]=e.debounce?[setTimeout(n,e.debounce),clearTimeout]:[requestAnimationFrame(n),cancelAnimationFrame];s=()=>{d(y),s=null}}}const g=R();return A(()=>{o=g.proxy.$el.parentNode,f()}),X(()=>{s!==null&&s(),u()}),Object.assign(g.proxy,{trigger:a,getPosition:()=>i}),xe}});function Dt(){const e=q(!Ae.value);return e.value===!1&&A(()=>{e.value=!0}),e}const Ie=typeof ResizeObserver!="undefined",Ve=Ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ce=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let i=null,s,t={width:-1,height:-1};function o(u){u===!0||e.debounce===0||e.debounce==="0"?n():i===null&&(i=setTimeout(n,e.debounce))}function n(){if(clearTimeout(i),i=null,s){const{offsetWidth:u,offsetHeight:a}=s;(u!==t.width||a!==t.height)&&(t={width:u,height:a},l("resize",t))}}const f=R();if(Object.assign(f.proxy,{trigger:o}),Ie===!0){let u;return A(()=>{te(()=>{s=f.proxy.$el.parentNode,s&&(u=new ResizeObserver(o),u.observe(s),n())})}),X(()=>{clearTimeout(i),u!==void 0&&(u.disconnect!==void 0?u.disconnect():s&&u.unobserve(s))}),xe}else{let g=function(){clearTimeout(i),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",o,we.passive),a=void 0)},b=function(){g(),s&&s.contentDocument&&(a=s.contentDocument.defaultView,a.addEventListener("resize",o,we.passive),n())};const u=Dt();let a;return A(()=>{te(()=>{s=f.proxy.$el,s&&b()})}),X(g),()=>{if(u.value===!0)return S("object",{style:Ve.style,tabindex:-1,type:"text/html",data:Ve.url,"aria-hidden":"true",onLoad:b})}}}}),Mt=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:i}){const{proxy:{$q:s}}=R(),t=q(null),o=q(s.screen.height),n=q(e.container===!0?0:s.screen.width),f=q({position:0,direction:"down",inflectionPoint:0}),u=q(0),a=q(Ae.value===!0?0:de()),g=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=c(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),y=c(()=>a.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),d=c(()=>a.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function C(h){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};f.value=x,e.onScroll!==void 0&&i("scroll",x)}}function k(h){const{height:x,width:B}=h;let Q=!1;o.value!==x&&(Q=!0,o.value=x,e.onScrollHeight!==void 0&&i("scroll-height",x),P()),n.value!==B&&(Q=!0,n.value=B),Q===!0&&e.onResize!==void 0&&i("resize",h)}function p({height:h}){u.value!==h&&(u.value=h,P())}function P(){if(e.container===!0){const h=o.value>u.value?de():0;a.value!==h&&(a.value=h)}}let v;const _={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:o,containerHeight:u,scrollbarWidth:a,totalWidth:c(()=>n.value+a.value),rows:c(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:f,animate(){v!==void 0?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),v=void 0},155)},update(h,x,B){_[h][x]=B}};if(We(ae,_),de()>0){let B=function(){h=null,x.classList.remove("hide-scrollbar")},Q=function(){if(h===null){if(x.scrollHeight>s.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(B,300)},E=function(z){h!==null&&z==="remove"&&(clearTimeout(h),B()),window[`${z}EventListener`]("resize",Q)},h=null;const x=document.body;w(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),St(()=>{E("remove")})}return()=>{const h=gt(l.default,[S(Et,{onScroll:C}),S(Ce,{onResize:k})]),x=S("div",{class:g.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},h);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Ce,{onResize:p}),S("div",{class:"absolute-full",style:y.value},[S("div",{class:"scroll",style:d.value},[x])])]):x}}}),Qt=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const i=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:i.value},Y(l.default))}});const Ht=S("div",{class:"q-space"});var Vt=$({name:"QSpace",setup(){return()=>Ht}}),Rt=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const i=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value},Y(l.default))}}),Ft=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:i}){const{proxy:{$q:s}}=R(),t=qe(ae,()=>{console.error("QHeader needs to be child of QLayout")}),o=q(parseInt(e.heightHint,10)),n=q(!0),f=c(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||s.platform.is.ios&&t.isContainer.value===!0),u=c(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return n.value===!0?o.value:0;const v=o.value-t.scroll.value.position;return v>0?v:0}),a=c(()=>e.modelValue!==!0||f.value===!0&&n.value!==!0),g=c(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),b=c(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=c(()=>{const v=t.rows.value.top,_={};return v[0]==="l"&&t.left.space===!0&&(_[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(_[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function d(v,_){t.update("header",v,_)}function C(v,_){v.value!==_&&(v.value=_)}function k({height:v}){C(o,v),d("size",v)}function p(v){g.value===!0&&C(n,!0),i("focusin",v)}w(()=>e.modelValue,v=>{d("space",v),C(n,!0),t.animate()}),w(u,v=>{d("offset",v)}),w(()=>e.reveal,v=>{v===!1&&C(n,e.modelValue)}),w(n,v=>{t.animate(),i("reveal",v)}),w(t.scroll,v=>{e.reveal===!0&&C(n,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const P={};return t.instances.header=P,e.modelValue===!0&&d("size",o.value),d("space",e.modelValue),d("offset",u.value),X(()=>{t.instances.header===P&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const v=yt(l.default,[]);return e.elevated===!0&&v.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(S(Ce,{debounce:0,onResize:k})),S("header",{class:b.value,style:y.value,onFocusin:p},v)}}});const Wt={name:"HeaderComponent",setup(){const{locale:e}=Ee({useScope:"global"}),{t:l}=Ee(),i=q(null),s=q(!1),t=q(""),o=q("hidden");A(()=>{window.addEventListener("scroll",()=>{window.scrollY>50?(s.value=!0,t.value="bg-dark"):(s.value=!1,t.value=""),window.scrollY>200?o.value="flipInX animated":o.value="hidden"})});function n(){e.value=e.value==="en-US"?"es":"en-US"}const f=q([{label:c(()=>l("headAbout")),type:"link",scrollTo:"#dru"},{label:c(()=>l("headServices")),type:"link",scrollTo:"#servicios"},{label:c(()=>l("headContact")),type:"link",scrollTo:"#contactame"},{label:c(()=>l("headDownloadCV")),type:"download",link:c(()=>`https://docs.google.com/presentation/d/${l("downloadCvLink")}/export/pdf`),iconRight:"fa-solid fa-cloud-arrow-down",outline:!0,rounded:!0,class:"bg-white text-primary text-weight-bold toolbar-cvLink",style:"border: 4px solid #ea4747"},{label:c(()=>e.value==="en-US"?"ES":"US"),type:"action",class:"bg-white text-primary text-weight-bold",style:"border: 4px solid #ea4747"}]);return{refHead:i,elevated:s,toolbarClass:t,topNavMenu:f,scrollPageTo:a=>{if(a){let g=document.querySelector(`${a}`);g&&g.scrollIntoView({behavior:"smooth"})}},toggleLang:n,locale:e,toolbarTitleClass:o}}},At=_t(" Dr\xFA ");function Nt(e,l,i,s,t,o){return H(),j(Ft,{elevated:s.elevated,class:"transparent fixed-top",ref:"refHead",id:"topHeader"},{default:V(()=>[O(Rt,{class:U([s.toolbarClass,"topToolBar"])},{default:V(()=>[O(Qt,{class:U(["primary-text text-h2 q-pt-md q-ml-xl text-weight-bold toolbarTitle",s.toolbarTitleClass])},{default:V(()=>[At]),_:1},8,["class"]),O(Vt),(H(!0),Be(Oe,null,kt(s.topNavMenu,(n,f)=>(H(),Be(Oe,null,[n.type==="link"?(H(),j(ce,{flat:"",class:U(["q-ma-md primary-text topnavbutton",n.class]),outline:n.outline,rounded:n.rounded,label:n.label,"icon-right":n.iconRight,"aria-label":n.ariaLabel,style:me(n.style),key:f,onClick:u=>s.scrollPageTo(n.scrollTo)},null,8,["outline","rounded","label","icon-right","aria-label","class","style","onClick"])):pe("",!0),["action"].includes(n.type)?(H(),j(ce,{flat:"",class:U(["q-ma-md primary-text topnavbutton",n.class]),outline:n.outline,rounded:n.rounded,label:n.label,"icon-right":n.iconRight,"aria-label":n.ariaLabel,style:me(n.style),key:f,onClick:l[0]||(l[0]=u=>s.toggleLang())},null,8,["outline","rounded","label","icon-right","aria-label","class","style"])):pe("",!0),["download"].includes(n.type)?(H(),j(ce,{flat:"",target:"_blank",class:U(["q-ma-md primary-text topnavbutton",n.class]),outline:n.outline,rounded:n.rounded,label:n.label,"icon-right":n.iconRight,"aria-label":n.ariaLabel,href:n.link,style:me(n.style),key:f},null,8,["outline","rounded","label","icon-right","aria-label","class","href","style"])):pe("",!0)],64))),256))]),_:1},8,["class"])]),_:1},8,["elevated"])}var It=Ne(Wt,[["render",Nt]]);const Ut=Tt({name:"MainLayout",setup(){const e=q(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},components:{HeaderComponent:It}});function jt(e,l,i,s,t,o){const n=Pe("HeaderComponent"),f=Pe("router-view");return H(),j(Mt,{view:"lHh Lpr lFf"},{default:V(()=>[O(n),O(Bt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=u=>e.leftDrawerOpen=u),bordered:""},{default:V(()=>[O(zt,null,{default:V(()=>[O(pt,{header:""})]),_:1})]),_:1},8,["modelValue"]),O(Ot,null,{default:V(()=>[O(f)]),_:1})]),_:1})}var Zt=Ne(Ut,[["render",jt]]);export{Zt as default};
