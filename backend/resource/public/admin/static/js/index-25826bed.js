import{d as e}from"./dayjs-f8876307.js";import{s as a,u as s,m as l,b as t}from"./browser-564f0c02.js";import"./vue-echarts-bffdbdc9.js";import"./element-plus-cc31d756.js";import"./store-acbd10e3.js";import"./index-dd9d36be.js";import{u as n}from"./index-a1c3173c.js";import{J as i,a4 as o,a5 as c,Q as r,a6 as u,a7 as d,m}from"./@element-plus.icons-vue-2c9f4d7f.js";import{y as v,d as p,q as f,W as h,_ as g,K as j,o as _,c as y,a as x,F as k,b,M as w,U as z,J as C,N as M,I,n as T,z as N}from"./@vue.runtime-core-6173334e.js";import{d as V}from"./pinia-77f7f468.js";import{r as U,u as q}from"./@vue.reactivity-54707199.js";import{i as S}from"./index.umd.min-b551c2d1.js";import{i as B}from"./@vueuse.core-cb7ad152.js";import{L as Y,p as D}from"./@vue.shared-0cc4c744.js";import{_ as H}from"./_plugin-vue_export-helper-1b428a4d.js";import{d as J}from"./lodash-es-fd5b777b.js";import"./axios-bb93cf32.js";import"./monaco-editor-89e755bd.js";import"./nprogress-27d9be10.js";import"./vue-router-25454f45.js";import"./mockjs-005b47e8.js";import"./resize-detector-2312ef2b.js";import"./echarts-e550b62f.js";import"./tslib-a4e99503.js";import"./zrender-f72fb7be.js";import"./@vueuse.shared-feb01f08.js";import"./@vue.runtime-dom-532828a1.js";import"./@popperjs.core-b696b006.js";import"./@ctrl.tinycolor-a951068a.js";import"./async-validator-ff95bfc9.js";import"./memoize-one-63ab667a.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui.dom-92665be4.js";import"./@floating-ui.core-c1b3624a.js";import"./vue-demi-71ba0ef2.js";import"./vue-21f38777.js";function F(){return{chat:v("chat")}}const L=V("chat-message",(()=>{const e=U(!1),s=U([]),l=U({page:1,total:0,size:20});return{loading:e,list:s,pagination:l,get:async function(t){e.value=!0,1==(null==t?void 0:t.page)&&(s.value=[]),await a.chat.message.page(t).then((e=>{s.value=e.list.map((e=>(e.content=JSON.parse(e.content),e))),l.value=e.pagination})),e.value=!1}}})),R=V("chat-session",(()=>{const e=U(!1),s=U([]),l=U();function t(e){l.value=e}return{loading:e,list:s,value:l,get:async function(n){e.value=!0,await a.chat.session.page(n).then((e=>{l.value||t(e.list[0]),s.value=e.list})),e.value=!1},set:t}}));function K(){return{session:R(),message:L()}}const O={class:"chat-message","element-loading-text":"消息列表加载中"},Q={class:"head"},W={class:"avatar"},A={class:"name"},E={class:"list scroller1"},G={class:"avatar"},P=["onContextmenu"],X={class:"h"},Z={class:"name"},$={class:"content"},ee={key:0,class:"is-text"},ae={key:1,class:"is-image"},se={class:"footer"},le={class:"tools"},te={class:"input"},ne=p({name:"undefined"}),ie=H(p({...ne,setup(e){const{user:a}=s(),{chat:l}=F(),{message:t,session:n}=K(),{copy:r}=B(),u=U(""),d=f((()=>{let e=0;return t.list.map((s=>{var l;return 1==s.contentType&&(s._index=e++),s.isMy=s.fromId==(null==(l=a.info)?void 0:l.id),s}))})),m=f((()=>t.list.filter((e=>1==e.contentType)).map((e=>{var a;return null==(a=e.content)?void 0:a.imageUrl})).filter(Boolean)));function v(){l.send({contentType:0,content:{text:u.value}},!0),u.value=""}function p(e){l.send({contentType:1,content:{imageUrl:e.url}},!0),u.value=""}return(e,a)=>{var s,l,f,I;const T=h("el-avatar"),N=h("el-image"),V=h("el-icon"),U=h("cl-upload"),B=h("el-input"),H=h("el-button"),J=g("loading");return j((_(),y("div",O,[x("div",Q,[(null==(s=q(n))?void 0:s.value)?(_(),y(k,{key:0},[x("div",W,[b(T,{size:30,shape:"square",src:null==(l=q(n))?void 0:l.value.avatar},null,8,["src"])]),x("span",A,"与“"+Y(null==(f=q(n))?void 0:f.value.nickName)+"”聊天中",1)],64)):w("",!0)]),x("div",E,[x("ul",null,[(_(!0),y(k,null,z(q(d),((e,a)=>(_(),y("li",{key:a},[x("div",{class:D(["item",{"is-right":e.isMy}])},[x("div",G,[b(T,{size:36,shape:"square",src:e.avatar},null,8,["src"])]),x("div",{class:"det",onContextmenu:a=>{!function(e,a){S.ContextMenu.open(e,{hover:{target:"content"},list:[{label:"复制",callback(e){r(a.content.text||""),e()}},{label:"转发"},{label:"删除"}]})}(a,e)}},[x("div",X,[x("span",Z,Y(e.nickName),1)]),x("div",$,[0==e.contentType?(_(),y("div",ee,[x("span",null,Y(e.content.text),1)])):1==e.contentType?(_(),y("div",ae,[b(N,{src:e.content.imageUrl,"preview-src-list":q(m),"initial-index":e._index,"scroll-container":".chat-message .list"},null,8,["src","preview-src-list","initial-index"])])):w("",!0)])],40,P)],2)])))),128))])]),x("div",se,[x("div",le,[x("ul",null,[b(U,{onSuccess:p,"show-file-list":!1},{default:C((()=>[x("li",null,[b(V,null,{default:C((()=>[b(q(i))])),_:1})])])),_:1}),x("li",null,[b(V,null,{default:C((()=>[b(q(o))])),_:1})]),x("li",null,[b(V,null,{default:C((()=>[b(q(c))])),_:1})])])]),x("div",te,[b(B,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),type:"textarea",rows:4,resize:"none",autosize:{minRows:4,maxRows:10},placeholder:"输入内容"},null,8,["modelValue"]),b(H,{size:"small",type:"success",onClick:v,disabled:!u.value},{default:C((()=>[M("发送")])),_:1},8,["disabled"])])])])),[[J,null==(I=q(t))?void 0:I.loading]])}}}),[["__scopeId","data-v-29a48b6e"]]),oe={class:"chat-session"},ce={class:"head"},re={class:"tools"},ue={class:"list"},de=["onClick"],me={class:"avatar"},ve={class:"det"},pe={class:"name"},fe={class:"message"},he={class:"status"},ge={class:"date"},je=p({name:"undefined"}),_e=H(p({...je,setup(e){const{chat:a}=F(),{session:s,message:l}=K(),t=U(""),n=f((()=>(null==s?void 0:s.list.filter((e=>{var a;return null==(a=e.nickName)?void 0:a.includes(t.value)})))||[]));return(e,i)=>{var o;const c=h("el-input"),u=h("el-icon"),d=h("el-avatar"),m=h("el-badge"),v=h("el-empty"),p=h("el-scrollbar"),f=g("loading");return _(),y("div",oe,[x("div",ce,[b(c,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:"关键字搜索",clearable:""},null,8,["modelValue"]),x("ul",re,[x("li",{onClick:i[1]||(i[1]=e=>q(s).get())},[b(u,{size:16},{default:C((()=>[b(q(r))])),_:1})])])]),j((_(),y("div",ue,[b(p,{class:"scroller"},{default:C((()=>[(_(!0),y(k,null,z(q(n),((e,t)=>{var n,i;return _(),y("div",{class:D(["item",{"is-active":e.id==(null==(i=null==(n=q(s))?void 0:n.value)?void 0:i.id)}]),key:t,onClick:t=>async function(e){a.expand(!1),s.set(e),await l.get({page:1}),a.scrollToBottom()}(e)},[x("div",me,[b(m,{value:e.num,hidden:0==e.num},{default:C((()=>[b(d,{shape:"square",src:e.avatar},null,8,["src"])])),_:2},1032,["value","hidden"])]),x("div",ve,[x("p",pe,Y(e.nickName),1),x("p",fe,Y(e.text),1)]),x("div",he,[x("p",ge,Y(e.createTime),1)])],10,de)})),128)),0==q(n).length?(_(),I(v,{key:0,"image-size":100,description:"暂无会话"})):w("",!0)])),_:1})])),[[f,null==(o=q(s))?void 0:o.loading]])])}}}),[["__scopeId","data-v-f1175bed"]]),ye={class:"cl-chat__wrap"},xe={class:"cl-chat__session"},ke={class:"cl-chat__right"},be={class:"cl-dialog__controls-icon"},we=p({name:"cl-chat"}),ze=p({...we,setup(a,{expose:i}){n();const{browser:o,onScreenChange:c}=t(),{session:r,message:v}=K(),{user:p}=s();l.get("chat");const f=U(!1),g=U(!0),j=U(parseInt(String(100*Math.random())));function k(){!async function(){await r.get(),await v.get(),M()}()}function w(){f.value=!0,k()}function z(a){var s,l,t,n;v.list.push({fromId:null==(s=p.info)?void 0:s.id,toId:null==(l=r.value)?void 0:l.userId,avatar:null==(t=p.info)?void 0:t.headImg,nickName:null==(n=p.info)?void 0:n.nickName,createTime:e().format("YYYY-MM-DD HH:mm:ss"),...a}),M()}const M=J((()=>{T((()=>{const e=document.querySelector(".cl-chat .chat-message .list");null==e||e.scroll({top:1e5+Math.random(),behavior:"smooth"})}))}),300);return N("chat",{get socket(){},send:function(e,a){a&&z(e)},append:z,expand:function(e){g.value=void 0===e?!g.value:e},scrollToBottom:M}),c((()=>{g.value=!o.isMini})),i({open:w,close:function(){f.value=!1}}),(e,a)=>{const s=h("el-icon"),l=h("el-badge"),t=h("cl-dialog");return _(),y("div",ye,[x("div",{class:"cl-chat__icon",onClick:w},[b(l,{value:j.value},{default:C((()=>[b(s,{size:15},{default:C((()=>[b(q(u))])),_:1})])),_:1},8,["value"])]),b(t,{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=e=>f.value=e),title:"聊天窗口",height:"630px",width:"1200px","keep-alive":"","close-on-click-modal":!1,"close-on-press-escape":"","append-to-body":"",controls:["slot-expand","cl-flex1","fullscreen","close"]},{"slot-expand":C((()=>[x("button",be,[g.value?(_(),I(s,{key:1,onClick:a[1]||(a[1]=e=>g.value=!1)},{default:C((()=>[b(q(m))])),_:1})):(_(),I(s,{key:0,onClick:a[0]||(a[0]=e=>g.value=!0)},{default:C((()=>[b(q(d))])),_:1}))])])),default:C((()=>[x("div",{class:D(["cl-chat",{"is-mini":q(o).isMini,"is-expand":g.value}])},[x("div",xe,[b(_e)]),x("div",ke,[b(ie)])],2)])),_:1},8,["modelValue"])])}}});export{ze as default};