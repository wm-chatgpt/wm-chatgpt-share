import{u as s}from"./browser-564f0c02.js";import"./vue-echarts-bffdbdc9.js";import"./element-plus-cc31d756.js";import"./store-acbd10e3.js";import"./index-dd9d36be.js";import{u as e}from"./index-a1c3173c.js";import{d as r,W as o,o as t,c as a,a as i,b as n,J as u,N as c}from"./@vue.runtime-core-6173334e.js";import{r as p,u as d}from"./@vue.reactivity-54707199.js";import{L as m}from"./@vue.shared-0cc4c744.js";import{_ as l}from"./_plugin-vue_export-helper-1b428a4d.js";const f={class:"error-page"},v={class:"code"},j={class:"desc"},y={key:0,class:"btns"},_={key:1,class:"btns"},b=r({name:"undefined"}),h=l(r({...b,props:{code:Number,desc:String},setup(r){const{router:l}=e(),{user:b}=s(),h=p(!1);function k(){l.push("/login")}async function g(){h.value=!0,b.logout()}function x(){l.push("/")}return(s,e)=>{const p=o("el-button");return t(),a("div",f,[i("h1",v,m(r.code),1),i("p",j,m(r.desc),1),d(b).token||h.value?(t(),a("div",y,[n(p,{onClick:x},{default:u((()=>[c("回到首页")])),_:1}),n(p,{type:"primary",onClick:g},{default:u((()=>[c("重新登录")])),_:1})])):(t(),a("div",_,[n(p,{type:"primary",onClick:k},{default:u((()=>[c("返回登录页")])),_:1})]))])}}}),[["__scopeId","data-v-ddc7187a"]]);export{h as E};
