webpackJsonp([3],{126:function(e,t,r){function o(e){r(286)}var n=r(42)(r(239),r(314),o,"data-v-91ce90d6",null);e.exports=n.exports},133:function(e,t){var r=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r)},134:function(e,t,r){e.exports=!r(140)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},135:function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},136:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},137:function(e,t,r){var o=r(142),n=r(151),i=r(147),s=Object.defineProperty;t.f=r(134)?Object.defineProperty:function(e,t,r){if(o(e),t=i(t,!0),o(r),n)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},138:function(e,t,r){e.exports={default:r(139),__esModule:!0}},139:function(e,t,r){var o=r(133),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},140:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},141:function(e,t,r){var o=r(137),n=r(143);e.exports=r(134)?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},142:function(e,t,r){var o=r(136);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},143:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},144:function(e,t,r){var o=r(135),n=r(133),i=r(154),s=r(141),a=function(e,t,r){var l,c,u,d=e&a.F,p=e&a.G,f=e&a.S,m=e&a.P,v=e&a.B,g=e&a.W,h=p?n:n[t]||(n[t]={}),A=h.prototype,w=p?o:f?o[t]:(o[t]||{}).prototype;p&&(r=t);for(l in r)(c=!d&&w&&void 0!==w[l])&&l in h||(u=c?w[l]:r[l],h[l]=p&&"function"!=typeof w[l]?r[l]:v&&c?i(u,o):g&&w[l]==u?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):m&&"function"==typeof u?i(Function.call,u):u,m&&((h.virtual||(h.virtual={}))[l]=u,e&a.R&&A&&!A[l]&&s(A,l,u)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},147:function(e,t,r){var o=r(136);e.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},150:function(e,t,r){var o=r(136),n=r(135).document,i=o(n)&&o(n.createElement);e.exports=function(e){return i?n.createElement(e):{}}},151:function(e,t,r){e.exports=!r(134)&&!r(140)(function(){return 7!=Object.defineProperty(r(150)("div"),"a",{get:function(){return 7}}).a})},153:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},154:function(e,t,r){var o=r(153);e.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},157:function(e,t,r){e.exports={default:r(158),__esModule:!0}},158:function(e,t,r){r(171),e.exports=r(133).Number.isInteger},161:function(e,t,r){var o=r(136),n=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&n(e)===e}},171:function(e,t,r){var o=r(144);o(o.S,"Number",{isInteger:r(161)})},239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(138),n=r.n(o),i=r(157),s=r.n(i);t.default={data:function(){return{showDevices:!0,form:{names:[{text:""}]},AllowDevicesId:[],Devices:[],_data1:[],options:[],value5:[],ruleForm:{Firmwares:[{Index:1,UpgradeMode:"1",FirmwareId:""}],Version:"",Description:""},rules:{Index:[{validator:function(e,t,r){if(!t)return r(new Error("请输入升级编号"));setTimeout(function(){s()(t)?t<1?r(new Error("编号必须大于0")):r():r(new Error("请输入整数"))},500)},trigger:"blur"}],Firmware:[{required:!0,trigger:"change"}]}}},mounted:function(){this.$nextTick(function(){this.listView(),this.listView2()})},computed:{DevicesId:{get:function(){var e=[];return this.Devices.forEach(function(t){e.push({DeviceId:t.DeviceId})}),e}},AllowDevices:{get:function(){var e=[];return this.AllowDevicesId.forEach(function(t){e.push({DeviceId:t})}),e}},DenyDevices:{get:function(){var e=[];this.Devices.forEach(function(t){e.push({DeviceId:t.DeviceId})});var t=[];this.AllowDevicesId.forEach(function(e){t.push({DeviceId:e})});for(var r=e.length-1;r>=0;r--)for(var o=e[r].DeviceId,n=t.length-1;n>=0;n--){var i=t[n].DeviceId;if(o===i){e.splice(r,1),t.splice(n,1);break}}return e}}},methods:{addModel:function(){this.ruleForm.Firmwares.push({Index:this.ruleForm.Firmwares.length+1,UpgradeMode:"1",FirmwareId:""}),console.log(this.ruleForm.Firmwares.length)},deleteModel:function(e,t){console.log(e);var r=this.ruleForm.Firmwares.length;this.ruleForm.Firmwares.splice(r-1,1)},listView:function(){var e=this,t=sessionStorage.getItem("productId"),r="/products/"+t+"/firmware",o=sessionStorage.getItem("login_TokenId")+r+"GET",n=this.md5(o)+","+sessionStorage.getItem("login_Signature");this.$http({url:"/iotadmin"+r,method:"GET",headers:{"content-type":"application/json","Rtt-Sign":n}}).then(function(t){console.log("固件列表：",t.data.Results),e.options=t.data.Results}).catch(function(e){return e.response?(console.log(e.response.data),console.log("222:"+e.response.status),console.log("333:"+e.response.header),(e.response.data.ErrCode="40000004")?void self.$message.error("网络错误，请稍后再试"):(self.$message.error("网络错误，请稍后再试"),!1)):(console.log(e),console.log("Error",e.message),!1)})},listView2:function(){var e=this,t=sessionStorage.getItem("productId"),r="/products/"+t+"/devices",o=sessionStorage.getItem("login_TokenId")+r+"GET",n=this.md5(o)+","+sessionStorage.getItem("login_Signature");this.$http({url:"/iotadmin"+r,method:"GET",headers:{"content-type":"application/json","Rtt-Sign":n}}).then(function(t){null==t.data.Results?e.showDevices=!1:(e.Devices=t.data.Results,e.showDevices=!0,console.log("Devices"),console.log(e.Devices))}).catch(function(e){return e.response?(e.response.data.ErrCode="40000004")?void self.$message.error("网络错误，请稍后再试"):(self.$message.error("网络错误，请稍后再试"),!1):(console.log(e),console.log("Error",e.message),!1)})},submitForm:function(e){var t=this,r=this.ruleForm.Firmwares,o=this.options,i=[];console.log("options",this.options),console.log("options",r),r.forEach(function(e){for(var t=0;t<o.length;t++)o[t].FirmwareId===e.FirmwareId&&i.push({Index:e.Index,UpgradeMode:parseInt(e.UpgradeMode),Type:o[t].Type,Version:o[t].Version,Name:o[t].Name,FileSize:o[t].FileSize,FileUrl:o[t].FileUrl,FileMd5:o[t].FileMd5,FirmwareId:o[t].FirmwareId,Description:o[t].Description})}),console.log(i,"_data");var s=this,a=sessionStorage.getItem("productId"),l="/products/"+a+"/upgrade",c={Firmwares:i,AllowDevices:this.AllowDevices,DenyDevices:this.DenyDevices,Description:s.ruleForm.Description},u=n()(c),d=sessionStorage.getItem("login_TokenId")+l+"POST"+u,p=this.md5(d)+","+sessionStorage.getItem("login_Signature");console.log(u,"body"),console.log(l,"_url"),console.log(s.ruleForm),s.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$http({url:"/iotadmin"+l,method:"POST",headers:{"content-type":"application/json","Rtt-Sign":p},data:u}).then(function(e){t.add_suc(e)}).catch(function(e){console.log("error:"+e),t.add_err(e)})})},add_suc:function(e){if(200==e.status){this.$notify({title:"GOOD",message:"新建OTA版本成功",type:"success"});var t=sessionStorage.getItem("productId"),r=sessionStorage.getItem("productName");console.log("productId:"+t),console.log("productName:"+r),this.$router.push({name:"upgradedList",params:{productId:t,productName:r}})}else this.$message.error("新建OTA版本失败")},add_err:function(e){var t=this;if(!e.response)return console.log("Error",e.message),t.$message.error("网络错误，请稍候再试"),!1;if(console.log(e.response.data),console.log(e.response.data.ErrCode),40000101==e.response.data.ErrCode)t.$message.error("新建OTA版本失败");else{if(40000101!=e.response.data.ErrCode)return t.$message.error("新建OTA版本失败"),!1;t.$message.error("可升级设备列表不能为空")}},escForm:function(e){this.$refs[e].resetFields(),this.$router.go(-1)}}}},262:function(e,t,r){t=e.exports=r(106)(!0),t.push([e.i,".ms-doc[data-v-91ce90d6]{width:100%;max-width:980px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif}.ms-doc h3[data-v-91ce90d6]{padding:9px 10px 10px;margin:0;font-size:14px;line-height:17px;background-color:#f5f5f5;border:1px solid #d8d8d8;border-bottom:0;border-radius:3px 3px 0 0}.ms-doc article[data-v-91ce90d6]{padding:45px;word-wrap:break-word;background-color:#fff;border:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.ms-doc article .el-input[data-v-91ce90d6]{width:300px}","",{version:3,sources:["C:/Users/Administrator/Desktop/realthread_IoT/vue_admin/src/views/upgraded/AddUpgraded.vue"],names:[],mappings:"AACA,yBACE,WAAY,AACZ,gBAAiB,AACjB,gFAAyF,CAC1F,AACD,4BACE,sBAAuB,AACvB,SAAU,AACV,eAAgB,AAChB,iBAAkB,AAClB,yBAA0B,AAC1B,yBAA0B,AAC1B,gBAAiB,AACjB,yBAA2B,CAC5B,AACD,iCACE,aAAc,AACd,qBAAsB,AACtB,sBAAuB,AACvB,sBAAuB,AACvB,+BAAgC,AAChC,6BAA+B,CAChC,AACD,2CACE,WAAa,CACd",file:"AddUpgraded.vue",sourcesContent:['\n.ms-doc[data-v-91ce90d6] {\n  width: 100%;\n  max-width: 980px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;\n}\n.ms-doc h3[data-v-91ce90d6] {\n  padding: 9px 10px 10px;\n  margin: 0;\n  font-size: 14px;\n  line-height: 17px;\n  background-color: #f5f5f5;\n  border: 1px solid #d8d8d8;\n  border-bottom: 0;\n  border-radius: 3px 3px 0 0;\n}\n.ms-doc article[data-v-91ce90d6] {\n  padding: 45px;\n  word-wrap: break-word;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.ms-doc article .el-input[data-v-91ce90d6] {\n  width: 300px;\n}\n\n'],sourceRoot:""}])},286:function(e,t,r){var o=r(262);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(107)("2ce468bb",o,!0)},314:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"ms-doc"},[r("h3",[e._v("新建OTA版本")]),e._v(" "),r("article",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[e._l(e.ruleForm.Firmwares,function(t,o){return r("div",{key:o},[r("el-form-item",{attrs:{label:"选择固件"+t.Index,prop:"Firmwares."+o+".FirmwareId"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.FirmwareId,callback:function(e){t.FirmwareId=e},expression:"firmwareInfo.FirmwareId"}},e._l(e.options,function(t){return r("el-option",{key:t.FirmwareId,attrs:{label:t.Type,value:t.FirmwareId}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.Type))]),e._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.Version))])])})),e._v(" "),o>0?r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.deleteModel(o)}}},[e._v("删除模块")]):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"升级模式",prop:"Firmwares."+o+".UpgradeMode"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.UpgradeMode,callback:function(e){t.UpgradeMode=e},expression:"firmwareInfo.UpgradeMode"}},[r("el-option",{attrs:{label:"可选升级",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"强制升级",value:"2"}}),e._v(" "),r("el-option",{attrs:{label:"静默升级",value:"3"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"升级顺序编号：",prop:"Firmwares."+o+".Index"}},[r("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.Index,callback:function(r){t.Index=e._n(r)},expression:"firmwareInfo.Index"}})],1)],1)}),e._v(" "),r("el-form-item",[r("el-button",{on:{click:e.addModel}},[e._v("新增模块")])],1),e._v(" "),r("el-form-item",{attrs:{label:"可升级设备列表："}},[e.showDevices?e._e():r("span",{staticStyle:{color:"#999"}},[e._v(" 请先添加设备")]),e._v(" "),e.showDevices?r("el-transfer",{attrs:{titles:["设备列表","可升级设备列表"],"button-texts":["移除","添加"],props:{key:"DeviceId",label:"SN"},data:e.Devices},model:{value:e.AllowDevicesId,callback:function(t){e.AllowDevicesId=t},expression:"AllowDevicesId"}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"Description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.Description,callback:function(t){e.ruleForm.Description=t},expression:"ruleForm.Description"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){e.escForm("ruleForm")}}},[e._v("取消")])],1)],2)],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=3.5bf63a829ebc2b9c4371.js.map