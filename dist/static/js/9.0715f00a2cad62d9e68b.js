webpackJsonp([9],{129:function(t,e,n){function o(t){n(270)}var r=n(42)(n(242),n(298),o,"data-v-02e88caa",null);t.exports=r.exports},133:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},138:function(t,e,n){t.exports={default:n(139),__esModule:!0}},139:function(t,e,n){var o=n(133),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},148:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return d}),n.d(e,"h",function(){return l}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"e",function(){return p}),n.d(e,"d",function(){return g}),n.d(e,"c",function(){return m});var o=n(17),r=n.n(o),a=n(16),i=n.n(a),s=function(t){return r()({url:"/iotadmin/users/login",method:t._method,data:t.body}).then(function(t){return t})},d=function(t){return r()({url:"/iotadmin/users/"+t.userId,method:t._method,headers:{"content-type":"application/json","Rtt-Sign":i()(sessionStorage.getItem("login_TokenId")+t._url+t._method)+","+sessionStorage.getItem("login_Signature")}}).then(function(t){return t})},l=function(t){return r()({url:"/iotadmin/smsCodes/"+t.SMSCode,method:t._method,data:t.body}).then(function(t){return t})},u=function(t){return r()({url:"/iotadmin/smsCodes",method:t._method,data:t.body}).then(function(t){return t})},c=function(t){return r()({url:"/iotadmin/users",method:t._method,data:t.body}).then(function(t){return t})},p=function(t){return r()({url:"/iotadmin"+t._url,method:t._method,headers:{"content-type":"application/json","Rtt-Sign":i()(sessionStorage.getItem("login_TokenId")+t._url+t._method)+","+sessionStorage.getItem("login_Signature")}}).then(function(t){return t})},g=function(t){return r()({url:"/iotadmin"+t._url,method:t._method,headers:{"content-type":"application/json","Rtt-Sign":i()(sessionStorage.getItem("login_TokenId")+t._url+t._method)+","+sessionStorage.getItem("login_Signature")}}).then(function(t){return t})},m=function(t){return r()({url:"/iotadmin"+t._url,method:t._method,data:t._body,headers:{"content-type":"application/json","Rtt-Sign":i()(sessionStorage.getItem("login_TokenId")+t._url+t._method+t._body)+","+sessionStorage.getItem("login_Signature")}}).then(function(t){return t})}},149:function(t,e,n){"use strict";function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in n)if(new RegExp("("+o+")").test(e)){var a=n[o]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?a:r(a))}return e}function r(t){return("00"+t).substr(t.length)}e.a=o},242:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(138),r=n.n(o),a=n(149),i=n(148);e.default={data:function(){return{dialogTableVisible:!1,showList:!0,Results:[],Firmwares:[]}},watch:{$route:"detailView"},mounted:function(){this.$nextTick(function(){this.listView()})},methods:{formatNum:function(t,e){return 1==t.UpgradeMode?"可选升级":2==t.UpgradeMode?"强制升级":3==t.UpgradeMode?"静默升级":"未知"},formatStatus:function(t,e){return 1==t.Status?"当前版本":0==t.Status?"历史版本":"未知"},listView:function(){var t=this,e=sessionStorage.getItem("productId"),o={_url:"/products/"+e+"/upgrade",_method:"GET",body:""};this.listLoading=!0,n.i(i.d)(o).then(function(e){console.log(e.data),null==e.data.Results?(console.log(2222),t.showList=!1):(t.showList=!0,t.Results=e.data.Results,t.listLoading=!1,console.log(t.Results)),t.information=e.data}).catch(function(t){return t.response?(console.log(t.response.data),console.log("222:"+t.response.status),console.log("333:"+t.response.header),(t.response.data.ErrCode="40000004")?void self.$message.error("网络错误，请稍后再试"):(self.$message.error("网络错误，请稍后再试"),!1)):(console.log(t),console.log("Error",t.message),!1)})},handleAdd:function(t){this.$router.push("/addUpgraded")},formatDate:function(t){var e=t.CreatedTime;if(void 0==e||""==e)return"无";var o=new Date(1e3*e);return n.i(a.a)(o,"yyyy-MM-dd hh:mm")},handleEdit:function(t,e){console.log(t,e),this.$router.push("/upgradedEdit")},handleDeviceList:function(t){sessionStorage.setItem("AllowDevices",r()(t.AllowDevices)),this.$router.push("/isUpgradedList")},handleFirmwareList:function(t){this.dialogTableVisible=!0,this.Firmwares=t.Firmwares,console.log(this.Firmwares)},handleDelete:function(t,e){var n=this;console.log(t,e),this.$confirm("此操作将永久删除该设备信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.$message({type:"success",message:"删除成功!"},n.$router.push("/deviceList"))}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}}}},246:function(t,e,n){e=t.exports=n(106)(!0),e.push([t.i,".ms-doc h3[data-v-02e88caa]{padding:9px 10px 10px;margin:0;font-size:14px;line-height:25px;background-color:#f5f5f5;border:1px solid #d8d8d8;border-bottom:0;border-radius:3px 3px 0 0}.ms-doc article[data-v-02e88caa]{padding:45px;word-wrap:break-word;background-color:#fff;border:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.ms-doc article>div[data-v-02e88caa]{padding:10px 0}.ms-doc article th[data-v-02e88caa]{min-width:120px;display:block;text-align:center!important}","",{version:3,sources:["C:/Users/Administrator/Desktop/realthread_IoT/vue_admin/src/views/upgraded/UpgradedList.vue"],names:[],mappings:"AACA,4BACC,sBAAuB,AACvB,SAAU,AACV,eAAgB,AAChB,iBAAkB,AAClB,yBAA0B,AAC1B,yBAA0B,AAC1B,gBAAiB,AACjB,yBAA2B,CAC3B,AACD,iCACC,aAAc,AACd,qBAAsB,AACtB,sBAAuB,AACvB,sBAAuB,AACvB,+BAAgC,AAChC,6BAA+B,CAC/B,AACD,qCACC,cAAgB,CAChB,AACD,oCACC,gBAAiB,AACjB,cAAe,AACf,2BAA8B,CAC9B",file:"UpgradedList.vue",sourcesContent:["\n.ms-doc h3[data-v-02e88caa] {\n\tpadding: 9px 10px 10px;\n\tmargin: 0;\n\tfont-size: 14px;\n\tline-height: 25px;\n\tbackground-color: #f5f5f5;\n\tborder: 1px solid #d8d8d8;\n\tborder-bottom: 0;\n\tborder-radius: 3px 3px 0 0;\n}\n.ms-doc article[data-v-02e88caa] {\n\tpadding: 45px;\n\tword-wrap: break-word;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n\tborder-bottom-right-radius: 3px;\n\tborder-bottom-left-radius: 3px;\n}\n.ms-doc article>div[data-v-02e88caa] {\n\tpadding: 10px 0;\n}\n.ms-doc article th[data-v-02e88caa] {\n\tmin-width: 120px;\n\tdisplay: block;\n\ttext-align: center !important;\n}\n"],sourceRoot:""}])},270:function(t,e,n){var o=n(246);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(107)("051cb5f2",o,!0)},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ms-doc"},[n("h3",{staticClass:"clearfix header"},[t._v("\n\t\t\t\t版本列表\n\t\t\t\t"),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(e){t.handleAdd("upgraded")}}},[t._v("+ 新建OTA版本")])],1),t._v(" "),n("article",[t.showList?t._e():n("span",{staticStyle:{color:"#999"}},[t._v("暂无升级任务")]),t._v(" "),t.showList?n("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.Results,border:"","default-sort":{prop:"date",order:"descending"}}},[n("el-table-column",{attrs:{prop:"Version",label:"版本号",align:"center",width:"110"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Status",label:"状态",align:"center",formatter:t.formatStatus,width:"110"}}),t._v(" "),n("el-table-column",{attrs:{prop:"CreatedTime",label:"创建时间",sortable:"",align:"center",formatter:t.formatDate,width:"155"}}),t._v(" "),n("el-table-column",{attrs:{prop:"DeviceList",label:"允许升级的设备列表",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){t.handleDeviceList(e.row)}}},[t._v("查看列表")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"FirmwareList",align:"center",label:"固件列表",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){t.handleFirmwareList(e.row)}}},[t._v("查看列表")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"备注",prop:"Description"}})],1):t._e()],1),t._v(" "),n("el-dialog",{attrs:{title:"固件列表",size:"small",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Firmwares,border:"","max-height":"520px"}},[n("el-table-column",{attrs:{prop:"Index",label:"升级序号",align:"center",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"UpgradeMode",formatter:t.formatNum,align:"center",width:"100",label:"升级方式"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Type",label:"固件型号",align:"center",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Version",label:"固件版本号",align:"center",width:"130"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Name",label:"文件名字",align:"center",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"FileSize",label:"文件大小",align:"center",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Description",label:"描述",align:"center",width:"171"}})],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=9.0715f00a2cad62d9e68b.js.map