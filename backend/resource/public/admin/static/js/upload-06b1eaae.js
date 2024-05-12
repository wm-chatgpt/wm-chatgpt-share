import{l as e,w as a,v as s}from"./@vue.runtime-dom-532828a1.js";import{d as t}from"./dayjs-f8876307.js";import{D as o}from"./vuedraggable-e5a8a8b4.js";import{J as l,u as r,P as i}from"./@element-plus.icons-vue-2c9f4d7f.js";import{u as p,m as u}from"./browser-2d7b7d5f.js";import"./vue-echarts-bffdbdc9.js";import{a as d}from"./element-plus-cc31d756.js";import{h as n,u as c,e as m}from"./index-dd9d36be.js";import{u as f}from"./index-5926ad47.js";import{_ as v,g,f as h,b as y,c as _}from"./viewer.vue_vue_type_script_setup_true_name_item-viewer_lang-2eebb179.js";import{r as j,w as b}from"./lodash-es-fd5b777b.js";import{d as w,q as k,p as x,W as z,o as S,c as U,a as B,b as C,J as D,E as q,M as F,I as V,G as $,F as A,N as L,K as I}from"./@vue.runtime-core-6173334e.js";import{r as M,h as P,u as N}from"./@vue.reactivity-54707199.js";import{p as O,L as Y}from"./@vue.shared-0cc4c744.js";import{_ as E}from"./_plugin-vue_export-helper-1b428a4d.js";import"./axios-bb93cf32.js";import"./sortablejs-1d1e1d3d.js";import"./vue-21f38777.js";import"./monaco-editor-89e755bd.js";import"./store-acbd10e3.js";import"./nprogress-27d9be10.js";import"./vue-router-25454f45.js";import"./@vueuse.core-cb7ad152.js";import"./@vueuse.shared-feb01f08.js";import"./pinia-77f7f468.js";import"./vue-demi-71ba0ef2.js";import"./mockjs-005b47e8.js";import"./index.umd.min-b551c2d1.js";import"./resize-detector-2312ef2b.js";import"./echarts-e550b62f.js";import"./tslib-a4e99503.js";import"./zrender-f72fb7be.js";import"./@popperjs.core-b696b006.js";import"./@ctrl.tinycolor-a951068a.js";import"./async-validator-ff95bfc9.js";import"./memoize-one-63ab667a.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui.dom-92665be4.js";import"./@floating-ui.core-c1b3624a.js";const J={key:0,class:"cl-upload__file-btn"},K={key:0,class:"cl-upload__footer"},G={class:"cl-upload__item"},R={class:"cl-upload__text"},T={class:"cl-upload__name"},H={class:"cl-upload__size"},W={class:"cl-upload__actions"},Q=["onClick"],X=["onClick"],Z={key:2,class:"cl-upload__progress"},ee={key:3,class:"cl-upload__error"},ae=w({name:"cl-upload"}),se=E(w({...ae,props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},accept:String,multiple:Boolean,limit:Number,limitSize:Number,limitUpload:{type:Boolean,default:!0},size:[String,Number,Array],text:String,prefixPath:{type:String,default:"app"},showFileList:{type:Boolean,default:!0},draggable:Boolean,disabled:Boolean,customClass:String,beforeUpload:Function,isEdit:null,scope:null,isDisabled:Boolean},emits:["update:modelValue","upload","success","error","progress"],setup(w,{expose:E,emit:ae}){const se=w;e((e=>({"033290e3":N(pe)[0],"03329102":N(pe)[1]})));const{service:te}=f(),{user:oe}=p(),{options:le}=u.get("upload"),re=M(),ie=M(),pe=k((()=>{const e=se.size||le.size;return(j(e)?e:[e,e]).map((e=>b(e)?e+"px":e))})),ue=k((()=>se.isDisabled||se.disabled)),de=se.limit||le.limit.upload,ne=se.limitSize||le.limit.size,ce=se.text||le.text,me=k((()=>({Authorization:oe.token}))),fe=M([]),ve=P({options:{group:"Upload",animation:300,ghostClass:"Ghost",dragClass:"Drag",draggable:".is-drag",disabled:!se.draggable}}),ge=k((()=>se.accept||("file"==se.type?"*":"image/*"))),he=k((()=>se.multiple?de-fe.value.length>0:0==fe.value.length));function ye(e){var a;return"image"==se.type?"image":null==(a=_(e))?void 0:a.value}async function _e(e,a){function s(){const s={type:ye(e.name),preload:"",progress:0,url:"",uid:e.uid,size:e.size};return s.preload="image"==s.type?window.webkitURL.createObjectURL(e):e.name,a?Object.assign(a,s):se.multiple?!he.value&&se.limitUpload||fe.value.push(s):fe.value=[s],ae("upload",s),!0}if(se.beforeUpload){const t=se.beforeUpload(e,a);return n(t)?t.then(s).catch((()=>null)):t&&s(),t}return e.size/1024/1024>=ne?(d.error(`上传文件大小不能超过 ${ne}MB!`),!1):s()}function je(e){fe.value.splice(e,1),ke()}function be(){fe.value=[]}async function we(e,a){if(a||(a=fe.value.find((a=>a.uid==e.file.uid))),!a)return!1;try{let s=c()+"_"+e.file.name;const{mode:o,type:l}=await te.base.comm.uploadMode();return new Promise(((r,i)=>{async function p({host:l,preview:p,data:u}){const n=new FormData;for(const e in u)n.append(e,u[e]);"cloud"==o&&(s=[se.prefixPath,t().format("YYYY-MM-DD"),s].filter(Boolean).join("/")),n.append("key",s),n.append("file",e.file),await te.request({url:l,method:"POST",headers:{"Content-Type":"multipart/form-data"},timeout:6e5,data:n,onUploadProgress(e){a.progress=parseInt(String(e.loaded/e.total*100)),ae("progress",a)},proxy:"local"==o}).then((e=>{a.url="local"===o?e:`${p||l}/${s}`,ae("success",a),r(a.url),ke()})).catch((e=>{d.error(e.message),a.error=e.message,ae("error",a),i(e)}))}"local"==o?p({host:"/admin/base/comm/upload"}):te.base.comm.upload().then((e=>{switch(l){case"cos":p({host:e.url,data:e.credentials});break;case"oss":p({host:e.host,data:{OSSAccessKeyId:e.OSSAccessKeyId,policy:e.policy,signature:e.signature}});break;case"qiniu":p({host:e.uploadUrl,preview:e.publicDomain,data:{token:e.token}})}})).catch(i)}))}catch(s){d.error("上传配置错误")}}function ke(){fe.value.find((e=>!e.url))||ae("update:modelValue",g(fe.value))}return x((()=>se.modelValue),(e=>{const a=(j(e)?e:(e||"").split(",")).filter(Boolean);fe.value=a.map((e=>{const a=fe.value.find((a=>e==a.url));return a||{type:ye(e),progress:0,uid:c(),url:e,preload:e}})).filter(((e,a)=>!!se.multiple||0==a))}),{immediate:!0}),E({isAdd:he,list:fe,check:function(){return fe.value.find((e=>100!=e.progress))},clear:be,remove:je,upload(e){be(),re.value.clearFiles(),re.value.handleStart(e),re.value.submit()}}),(e,t)=>{const p=z("el-button"),u=z("el-upload"),d=z("el-icon"),n=z("el-image"),c=z("el-progress");return S(),U(A,null,[B("div",{class:O(["cl-upload__wrap",[w.customClass]])},[B("div",{class:O(["cl-upload",[`cl-upload--${w.type}`,{"is-disabled":N(ue)}]])},["file"==w.type?(S(),U("div",J,[C(u,{ref_key:"Upload",ref:re,action:"",accept:N(ge),"show-file-list":!1,"before-upload":_e,"http-request":we,headers:N(me),multiple:w.multiple,disabled:N(ue)},{default:D((()=>[q(e.$slots,"default",{},(()=>[C(p,{type:"success"},{default:D((()=>[L(Y(N(ce)),1)])),_:1})]),!0)])),_:3},8,["accept","headers","multiple","disabled"])])):F("",!0),w.showFileList?(S(),V(N(o),$({key:1,class:"cl-upload__list",tag:"div",modelValue:fe.value,"onUpdate:modelValue":t[0]||(t[0]=e=>fe.value=e)},ve.options,{"item-key":"uid",onEnd:ke}),{footer:D((()=>["image"==w.type&&N(he)?(S(),U("div",K,[C(u,{ref_key:"Upload",ref:re,action:"",accept:N(ge),"show-file-list":!1,"before-upload":_e,"http-request":we,headers:N(me),multiple:w.multiple,disabled:N(ue)},{default:D((()=>[q(e.$slots,"default",{},(()=>[B("div",G,[C(d,{size:24},{default:D((()=>[C(N(l))])),_:1}),B("span",R,Y(N(ce)),1)])]),!0)])),_:3},8,["accept","headers","multiple","disabled"])])):F("",!0)])),item:D((({element:t,index:o})=>[w.showFileList?(S(),V(u,{key:0,action:"",class:"is-drag",accept:N(ge),"show-file-list":!1,"http-request":e=>we(e,t),"before-upload":e=>{_e(e,t)},headers:N(me),disabled:N(ue)},{default:D((()=>[q(e.$slots,"item",{item:t,index:o},(()=>[B("div",{class:O(["cl-upload__item",[`is-${t.type}`]])},["image"==t.type?(S(),V(n,{key:0,src:t.preload,fit:"cover"},null,8,["src"])):(S(),U(A,{key:1},[B("span",T,Y(N(h)(t.preload))+"."+Y(N(m)(t.preload)),1),B("span",H,Y(N(y)(t.size)),1)],64)),B("div",W,[I(B("span",{class:"icon-preview",onClick:a((e=>function(e){var a;"image"==e.type?null==(a=ie.value)||a.open(e.preload,fe.value.map((e=>e.preload))):window.open(e.url)}(t)),["stop"])},[C(d,null,{default:D((()=>[C(N(r))])),_:1})],8,Q),[[s,t.url]]),N(ue)?F("",!0):(S(),U("span",{key:0,class:"icon-delete",onClick:a((e=>je(o)),["stop"])},[C(d,null,{default:D((()=>[C(N(i))])),_:1})],8,X))]),t.progress>0&&t.progress<100?(S(),U("div",Z,[C(c,{percentage:t.progress,"show-text":!1},null,8,["percentage"])])):F("",!0),t.error?(S(),U("div",ee,Y(t.error),1)):F("",!0)],2)]),!0)])),_:2},1032,["accept","http-request","before-upload","headers","disabled"])):F("",!0)])),_:3},16,["modelValue"])):F("",!0)],2)],2),C(v,{ref_key:"Viewer",ref:ie},null,512)],64)}}}),[["__scopeId","data-v-5bc496c6"]]);export{se as default};
