import{w as s}from"./lodash-es-fd5b777b.js";import{d as e,q as a,o as r,c as t,a as i}from"./@vue.runtime-core-6173334e.js";import{r as o}from"./@vue.reactivity-54707199.js";import{_ as n}from"./_plugin-vue_export-helper-1b428a4d.js";import{p as m,q as l}from"./@vue.shared-0cc4c744.js";const p=e({name:"cl-svg",props:{name:{type:String},className:{type:String},size:{type:[String,Number]}},setup:e=>({style:o({fontSize:s(e.size)?e.size+"px":e.size}),iconName:a((()=>`#icon-${e.name}`)),svgClass:a((()=>["cl-svg",`cl-svg__${e.name}`,String(e.className||"")]))})}),c=["xlink:href"];const u=n(p,[["render",function(s,e,a,o,n,p){return r(),t("svg",{class:m(s.svgClass),style:l(s.style),"aria-hidden":"true"},[i("use",{"xlink:href":s.iconName},null,8,c)],6)}],["__scopeId","data-v-c7aa0a4e"]]);export{u as default};