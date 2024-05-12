import"./browser-2d7b7d5f.js";import"./vue-echarts-bffdbdc9.js";import{a as e,b as s}from"./element-plus-cc31d756.js";import"./store-acbd10e3.js";import"./index-dd9d36be.js";import{u as r}from"./index-5926ad47.js";import{i as o}from"./index.umd.min-b551c2d1.js";import{d as t,e as i,W as l,_ as a,o as p,I as m,J as n,b as u,K as c,N as d}from"./@vue.runtime-core-6173334e.js";import{r as j,u as h}from"./@vue.reactivity-54707199.js";import"./monaco-editor-89e755bd.js";import"./axios-bb93cf32.js";import"./nprogress-27d9be10.js";import"./lodash-es-fd5b777b.js";import"./vue-router-25454f45.js";import"./@vueuse.core-cb7ad152.js";import"./@vueuse.shared-feb01f08.js";import"./pinia-77f7f468.js";import"./vue-demi-71ba0ef2.js";import"./mockjs-005b47e8.js";import"./resize-detector-2312ef2b.js";import"./echarts-e550b62f.js";import"./tslib-a4e99503.js";import"./zrender-f72fb7be.js";import"./@vue.shared-0cc4c744.js";import"./@vue.runtime-dom-532828a1.js";import"./@element-plus.icons-vue-2c9f4d7f.js";import"./@popperjs.core-b696b006.js";import"./@ctrl.tinycolor-a951068a.js";import"./dayjs-f8876307.js";import"./async-validator-ff95bfc9.js";import"./memoize-one-63ab667a.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui.dom-92665be4.js";import"./@floating-ui.core-c1b3624a.js";import"./vue-21f38777.js";const f=t({name:"sys-log"}),b=t({...f,setup(t){const{service:f}=r(),b=j(1),v=o.useCrud({service:f.base.sys.log},(e=>{e.refresh()})),g=o.useTable({contextMenu:["refresh"],columns:[{type:"index",label:"#",width:60},{prop:"userId",label:"用户ID"},{prop:"name",label:"昵称",minWidth:150},{prop:"action",label:"请求地址",minWidth:200,showOverflowTooltip:!0},{prop:"params",label:"参数",minWidth:200,showOverflowTooltip:!0},{prop:"ip",label:"ip",minWidth:150},{prop:"ipAddr",label:"ip地址",minWidth:150},{prop:"createTime",label:"创建时间",minWidth:160,sortable:"desc"}]});function y(){f.base.sys.log.setKeep({value:b.value}).then((()=>{e.success("保存成功")})).catch((s=>{e.error(s.message)}))}function w(){s.confirm("是否要清空日志？","提示",{type:"warning"}).then((()=>{f.base.sys.log.clear().then((()=>{var s;e.success("清空成功"),null==(s=v.value)||s.refresh()})).catch((s=>{e.error(s.message)}))})).catch((()=>null))}return i((()=>{f.base.sys.log.getKeep().then((e=>{b.value=Number(e)}))})),(e,s)=>{const r=l("cl-refresh-btn"),o=l("el-button"),t=l("el-input-number"),i=l("cl-filter"),j=l("cl-flex1"),x=l("cl-search-key"),_=l("cl-row"),W=l("cl-table"),k=l("cl-pagination"),z=l("cl-crud"),T=a("permission");return p(),m(z,{ref_key:"Crud",ref:v},{default:n((()=>[u(_,null,{default:n((()=>[u(r),c((p(),m(o,{type:"danger",onClick:w},{default:n((()=>[d(" 清空 ")])),_:1})),[[T,h(f).base.sys.log.permission.clear]]),u(i,{label:"日志保存天数"},{default:n((()=>[u(t,{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=e=>b.value=e),"controls-position":"right",max:1e4,min:1,onChange:y},null,8,["modelValue"])])),_:1}),u(j),u(x,{placeholder:"搜索请求地址、参数、ip"})])),_:1}),u(_,null,{default:n((()=>[u(W,{ref_key:"Table",ref:g},null,512)])),_:1}),u(_,null,{default:n((()=>[u(j),u(k)])),_:1})])),_:1},512)}}});export{b as default};
