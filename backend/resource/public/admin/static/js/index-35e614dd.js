import{a2 as e}from"./@element-plus.icons-vue-2c9f4d7f.js";import{p as s}from"./index-dd9d36be.js";import{d as r,q as o,W as t,o as a,c as i,b as l,J as c,a as n}from"./@vue.runtime-core-6173334e.js";import{_ as p}from"./_plugin-vue_export-helper-1b428a4d.js";import{p as u,q as m}from"./@vue.shared-0cc4c744.js";import"./store-acbd10e3.js";import"./axios-bb93cf32.js";import"./lodash-es-fd5b777b.js";import"./@vue.reactivity-54707199.js";const d=r({name:"cl-avatar",components:{User:e},props:{modelValue:String,src:String,size:{type:[String,Number],default:36},shape:{type:String,default:"square"},backgroundColor:{type:String,default:"#f7f7f7"},color:{type:String,default:"#ccc"}},setup(e){const r=s(e.size);return{style:o((()=>({height:r,width:r,backgroundColor:e.backgroundColor})))}}}),f={class:"image-slot"};const g=p(d,[["render",function(e,s,r,o,p,d){const g=t("user"),v=t("el-icon"),h=t("el-image");return a(),i("div",{class:u(["cl-avatar",[e.size,e.shape]]),style:m([e.style])},[l(h,{src:e.src||e.modelValue,alt:"头像"},{error:c((()=>[n("div",f,[l(v,{size:20,color:e.color},{default:c((()=>[l(g)])),_:1},8,["color"])])])),_:1},8,["src"])],6)}],["__scopeId","data-v-1b3e67c4"]]);export{g as default};
