import{C as o}from"./clipboard-5b6e343e.js";const e=e=>{const d=void 0===(null==e?void 0:e.appendToBody)||e.appendToBody;return{toClipboard:(e,n)=>new Promise(((t,c)=>{const r=document.createElement("button"),i=new o(r,{text:()=>e,action:()=>"copy",container:void 0!==n?n:document.body});i.on("success",(o=>{i.destroy(),t(o)})),i.on("error",(o=>{i.destroy(),c(o)})),d&&document.body.appendChild(r),r.click(),d&&document.body.removeChild(r)}))}};export{e as u};