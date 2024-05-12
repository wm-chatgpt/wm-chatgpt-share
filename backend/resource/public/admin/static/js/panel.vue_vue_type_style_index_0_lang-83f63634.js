import{Z as e,_ as l,W as a,V as s,$ as t}from"./@element-plus.icons-vue-2c9f4d7f.js";import"./browser-2d7b7d5f.js";import"./vue-echarts-bffdbdc9.js";import{a as i,b as n}from"./element-plus-cc31d756.js";import"./store-acbd10e3.js";import{e as o}from"./index-dd9d36be.js";import{u as r}from"./index-5926ad47.js";import{u as c}from"./component-5f09aecc.js";import{w as u}from"./@vue.runtime-dom-532828a1.js";import{i as p}from"./index.umd.min-b551c2d1.js";import{y as d,d as v,q as m,e as f,W as y,o as _,c as g,a as h,b as k,J as b,N as w,F as x,U as j,I as C,M as I,al as V,ak as z,p as D,_ as M,K as P,z as E}from"./@vue.runtime-core-6173334e.js";import{r as O,u as T,h as q}from"./@vue.reactivity-54707199.js";import{p as A,L as F,q as G}from"./@vue.shared-0cc4c744.js";import{_ as N}from"./_plugin-vue_export-helper-1b428a4d.js";import{f as S,_ as U,a as $}from"./viewer.vue_vue_type_script_setup_true_name_item-viewer_lang-2eebb179.js";import{i as L}from"./@vueuse.core-cb7ad152.js";function W(){return{space:d("space")}}const B={class:"item-category"},H={class:"item-category__head"},J=(e=>(V("data-v-6b2853a3"),e=e(),z(),e))((()=>h("span",null,"类型",-1))),K={class:"item-category__list"},R=["onClick","onContextmenu"],Z=v({name:"item-category"}),Q=N(v({...Z,setup(a){const{service:s}=r(),{space:t}=W(),{ViewGroup:o}=c(),d=p.useForm(),v=O([]),V=O(""),z=m((()=>v.value.filter((e=>(e.name||"").includes(V.value)))));async function D(){return s.space.type.list({order:"createTime",sort:"asc"}).then((e=>{var l;e.unshift({name:"全部文件",id:void 0}),v.value=e,(null==(l=o.value)?void 0:l.selected)||P()}))}function M(e={}){var l;null==(l=d.value)||l.open({title:"添加分类",width:"400px",props:{labelPosition:"top"},dialog:{controls:["close"]},items:[{label:"分类名称",prop:"name",value:"",required:!0,component:{name:"el-input",props:{maxlength:20,clearable:!0}}}],form:{...e},on:{submit(l,{done:a,close:t}){let n=null;n=e.id?s.space.type.update({...l,id:e.id}):s.space.type.add(l),n.then((()=>{D(),t()})).catch((e=>{i.error(e.message),a()}))}}})}function P(e){var l,a;e||(e=v.value[0]),e&&(t.refresh({page:1,classifyId:e.id}),null==(l=o.value)||l.select(e),null==(a=o.value)||a.setTitle(e.name))}return f((()=>{D()})),(a,t)=>{const r=y("el-button"),c=y("el-icon"),v=y("el-empty"),m=y("el-scrollbar"),f=y("cl-form");return _(),g(x,null,[h("div",B,[h("div",H,[J,k(r,{type:"success",bg:"",size:"small",onClick:t[0]||(t[0]=e=>M())},{default:b((()=>[w("添加")])),_:1})]),h("div",K,[k(m,null,{default:b((()=>[h("ul",null,[(_(!0),g(x,null,j(T(z),((a,t)=>{var r,d;return _(),g("li",{key:t,class:A({"is-active":a.id==(null==(d=null==(r=T(o))?void 0:r.selected)?void 0:d.id)}),onClick:e=>P(a),onContextmenu:u((e=>function(e,{id:l,name:a}){if(!l)return!1;p.ContextMenu.open(e,{hover:{target:"item"},list:[{label:"刷新",callback(e){D(),e()}},{label:"编辑",callback(e){M({id:l,name:a}),e()}},{label:"删除",callback(e){n.confirm(`此操作将删除【${a}】下的文件, 是否继续?`,"提示",{type:"warning"}).then((()=>{s.space.type.delete({ids:[l]}).then((()=>{var e,a;i.success("删除成功"),l==(null==(a=null==(e=o.value)?void 0:e.selected)?void 0:a.id)&&P(),D()})).catch((e=>{i.error(e.message)}))})).catch((()=>null)),e()}}]})}(e,a)),["stop","prevent"])},[k(c,{class:"icon"},{default:b((()=>{var s,t;return[(null==(t=null==(s=T(o))?void 0:s.selected)?void 0:t.id)==a.id?(_(),C(T(e),{key:0})):(_(),C(T(l),{key:1}))]})),_:2},1024),h("span",null,F(a.name),1)],42,R)})),128)),0==T(z).length?(_(),C(v,{key:0,"image-size":80})):I("",!0)])])),_:1})])]),k(f,{ref_key:"Form",ref:d},null,512)],64)}}}),[["__scopeId","data-v-6b2853a3"]]),X={class:"item-video"},Y=["src"],ee=v({name:"item-video"}),le=N(v({...ee,props:{data:Object,list:Array},setup(e,{expose:l}){const t=e,{space:i}=W(),n=O(),o=m((()=>t.data||{})),r=m((()=>void 0===o.value.progress||100===o.value.progress));function c(){var e;i.list.value.forEach((e=>{e.isPlay=o.value.id==e.id})),null==(e=n.value)||e.play()}function p(){var e;const l=i.list.value.find((e=>e.id==o.value.id));l&&(l.isPlay=!1),null==(e=n.value)||e.pause()}return D((()=>o.value.isPlay),(e=>{e?c():p()})),l({play:c,pause:p}),(e,l)=>{const t=y("el-icon");return _(),g("div",X,[h("video",{ref_key:"Video",ref:n,src:T(o).url},null,8,Y),T(r)?(_(),g(x,{key:0},[T(o).isPlay?(_(),C(t,{key:0,class:"icon is-pause",onClick:u(p,["stop"])},{default:b((()=>[k(T(a))])),_:1},8,["onClick"])):(_(),C(t,{key:1,class:"icon is-play",onClick:u(c,["stop"])},{default:b((()=>[k(T(s))])),_:1},8,["onClick"]))],64)):I("",!0)])}}}),[["__scopeId","data-v-5c7586d0"]]),ae={class:"item-file__wrap"},se=["onContextmenu"],te={key:0,class:"item-file__error"},ie={class:"image-error"},ne={key:2,class:"item-file__name"},oe={class:"item-file__progress-bar"},re={class:"item-file__progress-value"},ce={key:2,class:"item-file__mask"},ue=v({name:"item-file"}),pe=N(v({...ue,props:{data:Object,list:Array},emits:["select","remove"],setup(e,{emit:l}){const a=e,{copy:s}=L(),{space:t}=W(),n=O(),r=m((()=>a.data||{})),c=m((()=>t.selection.value.findIndex((e=>e.id===r.value.id)))),d=m((()=>c.value>=0)),v=m((()=>r.value.preload||r.value.url)),f=m((()=>$(r.value.type||"")));function w(){l("select",r.value)}function j(e){p.ContextMenu.open(e,{hover:{target:"item-file__wrap"},list:[{label:"预览",callback(e){var l,s;"image"==r.value.type?null==(s=n.value)||s.open(r.value.url,null==(l=a.list)?void 0:l.filter((e=>"image"==e.type)).map((e=>e.url))):window.open(r.value.url),e()}},{label:"复制地址",callback(e){r.value.url&&(s(r.value.url),i.success("复制成功")),e()}},{label:d.value?"取消选中":"选中",callback(e){w(),e()}},{label:"删除",callback(e){l("remove",r.value),e()}}]})}return(l,a)=>{var s,t;const i=y("el-image"),p=y("el-progress");return _(),g(x,null,[h("div",ae,[h("div",{class:A(["item-file",[`is-${T(r).type}`]]),onClick:w,onContextmenu:u(j,["stop","prevent"])},[T(r).error?(_(),g("div",te,"上传失败："+F(T(r).error),1)):(_(),g(x,{key:1},["image"===T(r).type?(_(),C(i,{key:0,fit:"contain",src:T(v),lazy:""},{error:b((()=>[h("div",ie,[h("span",null,F(T(v)),1)])])),_:1},8,["src"])):"video"===T(r).type?(_(),C(le,{key:1,data:T(r),list:e.list},null,8,["data","list"])):(_(),g("span",ne,F(T(S)(T(v)))+"."+F(T(o)(T(v))),1)),h("span",{class:"item-file__type",style:G({backgroundColor:null==(s=T(f))?void 0:s.color})},F(null==(t=T(f))?void 0:t.label),5),T(r).progress>0&&T(r).progress<100?(_(),g(x,{key:3},[h("div",oe,[k(p,{percentage:T(r).progress,"show-text":!1},null,8,["percentage"])]),h("span",re,F(T(r).progress),1)],64)):I("",!0)],64)),T(d)?(_(),g("div",ce,[h("span",null,F(T(c)+1),1)])):I("",!0)],42,se)]),k(U,{ref_key:"Viewer",ref:n},null,512)],64)}}}),[["__scopeId","data-v-e2d978fb"]]),de={class:"cl-upload-panel__header"},ve={style:{margin:"0px 10px"}},me={"infinite-scroll-immediate":!1},fe={key:1,class:"empty"},ye=h("p",null,"将文件拖到此处，或点击按钮上传",-1),_e=v({name:"cl-upload-panel"}),ge=v({..._e,props:{limit:{type:Number,default:99},accept:String,selectable:Boolean},emits:["selection-change"],setup(e,{expose:l,emit:a}){const s=e,{service:o,browser:u}=r(),{ViewGroup:p}=c(),d=O(),v=O(),m=O(!1),f=O([]),V=O([]),z=q({page:1,size:50,total:0});function F(){f.value=[]}function G(e){var l,a;o.space.info.add({classifyId:null==(a=null==(l=p.value)?void 0:l.selected)?void 0:a.id,...e}).then((l=>{e.id=l.id})).catch((e=>{i.error(e.message)}))}function N(e){V.value.unshift(e)}const S={page:1};async function U(e){var l;F(),Object.assign(S,{type:null==(l=s.accept)?void 0:l.split("/")[0],...z,...e}),1==S.page&&(m.value=!0),await o.space.info.page(S).then((e=>{Object.assign(z,e.pagination),1==S.page&&(V.value=[]),V.value.push(...e.list)})),m.value=!1}function $(e){const l=f.value.findIndex((l=>l.id===e.id));l>=0?f.value.splice(l,1):1==s.limit?f.value=[e]:f.value.length<s.limit&&f.value.push(e)}function L(e){const l=e?[e.id]:f.value.map((e=>e.id));n.confirm("此操作将删除文件, 是否继续?","提示",{type:"warning"}).then((()=>{i.success("删除成功"),l.forEach((e=>{[V.value,f.value].forEach((l=>{const a=l.findIndex((l=>l.id===e));l.splice(a,1)}))})),o.space.info.delete({ids:l}).catch((e=>{i.error(e.message)}))})).catch((()=>null))}function W(){V.value.length&&V.value.length<z.total&&U({page:z.page+1})}function B(e){e.preventDefault()}function H(e){e.preventDefault(),e.dataTransfer.files.forEach(((e,l)=>{setTimeout((()=>{d.value.upload(e)}),10*l)}))}return D(f,(e=>{a("selection-change",e)}),{deep:!0}),E("space",{selection:f,refresh:U,loading:m,list:V}),l({selection:f,open:open,close:close,clear:F,refresh:U}),(l,a)=>{const s=y("el-button"),i=y("cl-upload"),n=y("el-icon"),o=y("el-scrollbar"),r=y("cl-view-group"),c=M("infinite-scroll"),z=M("loading");return _(),g("div",{class:"cl-upload-panel",onDragover:B,onDrop:H},[k(r,{ref_key:"ViewGroup",ref:p,title:"全部文件"},{left:b((()=>[k(Q)])),right:b((()=>[h("div",{class:"cl-upload-panel__right",ref_key:"Content",ref:v},[h("div",de,[k(s,{onClick:a[0]||(a[0]=e=>U({page:1}))},{default:b((()=>[w("刷新")])),_:1}),h("div",ve,[k(i,{ref_key:"Upload",ref:d,type:"file","show-file-list":!1,limit:e.limit,"limit-upload":!1,accept:e.accept,multiple:"",onSuccess:G,onUpload:N},{default:b((()=>[k(s,{type:"primary"},{default:b((()=>[w("点击上传")])),_:1})])),_:1},8,["limit","accept"])]),e.selectable?I("",!0):(_(),C(s,{key:0,type:"danger",disabled:0==f.value.length,onClick:a[1]||(a[1]=e=>L())},{default:b((()=>[w("删除选中文件")])),_:1},8,["disabled"]))]),P((_(),C(o,{class:"cl-upload-panel__file"},{default:b((()=>[P((_(),g("div",me,[V.value.length>0?(_(),g("div",{key:0,class:A(["list",{"is-mini":T(u).isMini}])},[(_(!0),g(x,null,j(V.value,(e=>(_(),g("div",{class:"item",key:e.preload||e.url},[k(pe,{data:e,list:V.value,onSelect:$,onRemove:L},null,8,["data","list"])])))),128))],2)):(_(),g("div",fe,[k(n,{class:"el-icon--upload"},{default:b((()=>[k(T(t))])),_:1}),ye]))])),[[c,W]])])),_:1})),[[z,m.value]])],512)])),_:1},512)],32)}}});export{ge as _};
