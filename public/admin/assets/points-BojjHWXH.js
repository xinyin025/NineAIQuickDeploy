
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-D6-4wUAO.js";import{d as K,r as p,m as F,a as L,n as u,g as _,c as k,b as e,w as l,h as V,e as c,F as O,s as A,z as x,v as G,G as J,E as S,j as Q,_ as X,t as Y,k as j}from"./index-CAe0BuuW.js";import{a as C}from"./config-CwtVyG0K.js";const Z=c("div",{class:"flex items-center gap-4"},"网站显示配置",-1),ee=c("div",{class:"text-sm/6"},[c("div",null,"网站显示配置用于控制，积分、侧边菜单、朗读按钮等显示设置。"),c("div",null,"同时可以按需添加绘图风格标签。")],-1),le={style:{display:"flex","flex-wrap":"wrap",gap:"10px"}},te=K({__name:"points",setup(ae){const f=p(),w=p(!1),v=p(""),b=p(),a=F({isHideModel3Point:"",isHideModel4Point:"",isHideDrawMjPoint:"",isHideDefaultPreset:"",model3Name:"",model4Name:"",drawMjName:"",drawingStyles:"",isHideSidebar:"",showWatermark:"",isHideTts:""}),U=p({model3Name:[{required:!0,message:"请输入普通积分名称",trigger:"blur"}],model4Name:[{required:!0,message:"请输入高级积分名称",trigger:"blur"}],drawMjName:[{required:!0,message:"请输入绘画积分名称",trigger:"blur"}]}),H=p();async function y(){const n=await C.queryConfig({keys:["isHideModel3Point","isHideModel4Point","isHideDrawMjPoint","isHideDefaultPreset","model3Name","model4Name","drawMjName","drawingStyles","isHideSidebar","showWatermark","isHideTts"]});Object.assign(a,n.data),n.data.drawingStyles?f.value=n.data.drawingStyles.split(","):f.value=[]}function h(){w.value=!0,J(()=>{b.value.focus()})}function M(){const n=v.value.trim();n&&f.value.push(n),w.value=!1,v.value=""}function D(n){f.value.splice(n,1)}function T(){var n;a.drawingStyles=f.value.join(","),(n=H.value)==null||n.validate(async t=>{if(t){try{await C.setConfig({settings:B(a)}),S.success("变更配置信息成功")}catch{}y()}else S.error("请填写完整信息")})}function B(n){return Object.keys(n).map(t=>({configKey:t,configVal:n[t]}))}return L(()=>{y()}),(n,t)=>{const N=Q,q=X,R=E,r=u("el-switch"),m=u("el-tooltip"),d=u("el-form-item"),i=u("el-col"),s=u("el-row"),g=u("el-input"),W=u("el-tag"),I=u("el-button"),$=u("el-form"),z=u("el-card");return _(),k("div",null,[e(R,null,{title:l(()=>[Z]),content:l(()=>[ee]),default:l(()=>[e(q,{outline:"",onClick:T},{default:l(()=>[e(N,{name:"i-ri:file-text-line"}),V(" 保存设置 ")]),_:1})]),_:1}),e(z,{style:{margin:"20px"}},{default:l(()=>[e($,{ref_key:"formRef",ref:H,rules:U.value,model:a,"label-width":"150px"},{default:l(()=>[e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏普通积分",prop:"isHideModel3Point"},{default:l(()=>[e(m,{content:"隐藏后用户端将不显示普通积分，用户仍可以通过地址栏访问页面！",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.isHideModel3Point,"onUpdate:modelValue":t[0]||(t[0]=o=>a.isHideModel3Point=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"普通积分名称",prop:"model3Name"},{default:l(()=>[e(g,{modelValue:a.model3Name,"onUpdate:modelValue":t[1]||(t[1]=o=>a.model3Name=o),placeholder:"普通积分名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏高级积分",prop:"isHideModel4Point"},{default:l(()=>[e(m,{content:"隐藏后用户端将不显示高级积分，用户仍可以通过地址栏访问页面！",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.isHideModel4Point,"onUpdate:modelValue":t[2]||(t[2]=o=>a.isHideModel4Point=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"高级积分名称",prop:"model4Name"},{default:l(()=>[e(g,{modelValue:a.model4Name,"onUpdate:modelValue":t[3]||(t[3]=o=>a.model4Name=o),placeholder:"高级积分名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏绘画积分",prop:"isHideDrawMjPoint"},{default:l(()=>[e(m,{content:"隐藏后用户端将不显示绘画积分，用户仍可以通过地址栏访问页面！",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.isHideDrawMjPoint,"onUpdate:modelValue":t[4]||(t[4]=o=>a.isHideDrawMjPoint=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"绘画积分名称",prop:"drawMjName"},{default:l(()=>[e(g,{modelValue:a.drawMjName,"onUpdate:modelValue":t[5]||(t[5]=o=>a.drawMjName=o),placeholder:"绘画积分名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏侧边菜单",prop:"isHideSidebar"},{default:l(()=>[e(m,{content:"隐藏后用户端将不显示侧边菜单、用户仍可以通过地址栏访问页面！",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.isHideSidebar,"onUpdate:modelValue":t[6]||(t[6]=o=>a.isHideSidebar=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"显示全局水印",prop:"showWatermark"},{default:l(()=>[e(m,{content:"开启后将在对话页显示用户名水印",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.showWatermark,"onUpdate:modelValue":t[7]||(t[7]=o=>a.showWatermark=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏首页默认预设",prop:"isHideDefaultPreset"},{default:l(()=>[e(m,{content:"隐藏后首页将不显示默认预设",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.isHideDefaultPreset,"onUpdate:modelValue":t[8]||(t[8]=o=>a.isHideDefaultPreset=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏朗读按钮",prop:"isHideTts"},{default:l(()=>[e(m,{content:"隐藏后用户端将不显示朗读按钮",placement:"top","show-after":500},{default:l(()=>[e(r,{modelValue:a.isHideTts,"onUpdate:modelValue":t[9]||(t[9]=o=>a.isHideTts=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"mt-2"},{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"绘图风格显示",prop:"drawingStyles"},{default:l(()=>[c("div",le,[(_(!0),k(O,null,A(f.value,(o,P)=>(_(),x(W,{key:P,closable:"",style:{"margin-bottom":"10px"},onClose:oe=>D(P)},{default:l(()=>[V(Y(o),1)]),_:2},1032,["onClose"]))),128)),w.value?(_(),x(g,{key:0,ref_key:"inputRef",ref:b,modelValue:v.value,"onUpdate:modelValue":t[10]||(t[10]=o=>v.value=o),size:"small",style:{"margin-left":"10px",width:"auto","min-width":"80px"},onKeyup:G(M,["enter"]),onBlur:M},null,8,["modelValue"])):(_(),x(I,{key:1,size:"small",style:{"margin-left":"10px"},onClick:h},{default:l(()=>[V(" + 添加风格 ")]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof j=="function"&&j(te);export{te as default};