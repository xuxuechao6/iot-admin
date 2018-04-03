<template>
  <div>

    <div class="ms-doc">
      <h3 class="clearfix header">
        <span class="btn_back" @click="handleHome">设备信息</span>/<span class="btn_back" @click="handleBack">设备详情</span>/设备日志
   <el-button type="info" style="float: right" @click="handNowleLog()">实时LOG</el-button>
      </h3>
      <article>

        <div class="block">
    <span class="demonstration">log日期范围:</span>
    <el-date-picker
      v-model="startTime"
      type="datetime"
      placeholder="选择开始时间"
      align="right"
      :picker-options="pickerOptions1">
    </el-date-picker>
    <span class="demonstration">至</span>
    <el-date-picker
      v-model="endTime"
      type="datetime"
      placeholder="选择结束时间"
      align="right"
      :picker-options="pickerOptions1">
    </el-date-picker>
    <el-button type="info" style="float: right" @click="handleLog()">查询</el-button>
  </div>
        
        <span v-if="!viewList">暂无数据</span>
        <div v-if="viewList" class="message_time_title">
              时间
              </div>
            <div v-if="viewList" class="message_data_title">
              log内容
        </div>
        <div class="message" v-for="(message,index) in item" :key="index">
           <div class="message_time">
             {{ message.CreatedTime | formatDate(message.CreatedTime) }}
              </div>
            <div class="message_data">
              <pre >{{ message.Data }} </pre>
              </div>
        </div>
        <!-- <form v-on:submit="send">
          <input id="message" v-model="message"/>
          <button class="btn btn-primary">Send</button>
        </form> -->


      </article>
    </div>

  </div>
</template>

<script>
import {formatDate} from './../format/data';
  export default {
    data: function () {
      return {
         pickerOptions1: {
          shortcuts: [
            {
            text: '此刻',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          },{
            text: '5分钟前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 5 * 60 * 1000);
              picker.$emit('pick', date);
            }
          },{
            text: '10分钟前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 10 * 60 * 1000);
              picker.$emit('pick', date);
            }
          },{
            text: '20分钟前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 20 * 60 * 1000);
              picker.$emit('pick', date);
            }
          }, {
            text: '30分钟前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 30 * 60 * 1000);
              picker.$emit('pick', date);
            }
          },{
            text: '1小时前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000);
              picker.$emit('pick', date);
            }
          },{
            text: '2小时前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 2);
              picker.$emit('pick', date);
            }
          },{
            text: '12小时前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 12);
              picker.$emit('pick', date);
            }
          },{
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
         startTime: '',
         endTime: '',
        viewList: false,
        item: "",
        down: 'down',
        up: 'up',
        socket: null,
        command: '',
        messages: [],
        myMessages: [],
        msgLength: 0,
        msgState: null,
        message: '',
        channel: 'channel'
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.detailView();
      })
    },
        watch : {
      activeShell (value,oldvalue) {
        if(value == false){
          this.socket.close();
          this.messages=[];
          console.log('监听关闭')
          this.$router.go(0)
        }else {
          $("#command").focus();
        }
      }
    },
    created: function () {
    },
    filters:{
      formatDate(val) {
            if(val==undefined||val==""){
              return ""
            }else {
              let date = new Date(val*1000);
              return formatDate(date, "yyyy-MM-dd hh:mm:ss");
            }

          },
    },
    methods: {
        detailView: function () {
        let self = this,
          endTime= Date.parse( new Date()),
          _endTime= parseInt(endTime.toString().substring(0,10)),
          startTime = endTime-24*60*60*1000,
          _startTime= parseInt(startTime.toString().substring(0,10)),
          DeviceId = sessionStorage.getItem('DeviceId'),
          _url = "/logs/" + DeviceId+"?StartTime="+_startTime+"&EndTime="+_endTime,
          _method = "GET",
          sign1 = sessionStorage.getItem('login_TokenId') + _url + _method,
          sign = this.md5(sign1) + "," + sessionStorage.getItem('login_Signature');
        //将对象转为字符串
        //签名的 定义过程
        this.$http({
          url: "/iotadmin" + _url,
          method: _method,
          headers: {
            'content-type': 'application/json',
            'Rtt-Sign': sign
          },
        }).then((res) => {
          console.log(res.data)
          if (res.data.Results == "") {
            this.viewList = false;
          } else {
            this.viewList = true;
            const _date1 =[];
            const _date2 =[];
            const reg = //g
            res.data.Results.forEach((Results) => {
               if(Results.Data.indexOf("[2K")!= -1){
                 console.log(6666666667)
                  const _Data = Results.Data.replace("[2K","\n")                 
                   _date1.push({
                  CreatedTime: Results.CreatedTime,
                  Data:_Data
                  });
                }else if(reg.test(Results.Data)){
                  console.log(666666666)
                  const _Data = Results.Data.replace(//g,"")
                  _date1.push({
                  CreatedTime: Results.CreatedTime,
                  Data:_Data
                  });
                }else{
                  _date1.push({
                  CreatedTime: Results.CreatedTime,
                  Data:Results.Data
                  });
                }
            });
            _date1.forEach((Results) => {
                  if(Results.Data.indexOf("msh /")!= -1){
            _date2.push({
                  CreatedTime: Results.CreatedTime,
                  Data:Results.Data
                  });
              }else if(Results.Data.indexOf("finsh>")!= -1){
                _date2.push({
                  CreatedTime: Results.CreatedTime,
                  Data:Results.Data
                  });
                }else{
                _date2.push({
                  CreatedTime: "",
                  Data:Results.Data
                  });
              
                  
                }
              
          });
          _date2[0].CreatedTime=res.data.Results[0].CreatedTime
          this.item = _date2
          }
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log("222:" + error.response.status);
            console.log("333:" + error.response.header);
            //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
            if (error.response.data.ErrCode = "40000004") {
              self.$message.error('网络错误，请稍后再试');
            } else {
              self.$message.error('网络错误，请稍后再试');
              return false
            }
          } else {
            console.log(error);
            //一些错误是在设置请求的时候触发
            console.log('Error', error.message);
            return false
          };
        });
      },
            send: function () {
        const self = this;
        if (this.message) {
          console.log("readyState:",self.socket.readyState)
          if (self.socket.readyState === WebSocket.OPEN) {
//open的时候即可发送
            console.log('已发送数据')
            self.socket.send(this.message);
            self.socket.send(String.fromCharCode('13'));
            console.log(this.message);
          } else {
            console.log('没有发送数据')
// Do something else in this case.
//Possibly ignore the data or enqueue it.
          }
        }
        self.messages.push(
          {name: "$username:>", message: self.message}
        );
        self.myMessages.push(
          {myMessage: self.message}
        );
        self.msgLength = self.myMessages.length;
        self.msgState = null;
        self.message = null
      },

      handleLog() {
          let self = this,
          endTime= Date.parse(self.endTime),
          _endTime= parseInt(endTime.toString().substring(0,10)),
          startTime = Date.parse(self.startTime),
          _startTime= parseInt(startTime.toString().substring(0,10)),
          DeviceId = sessionStorage.getItem('DeviceId'),
          _url = "/logs/" + DeviceId+"?StartTime="+_startTime+"&EndTime="+_endTime,
          _method = "GET",
          sign1 = sessionStorage.getItem('login_TokenId') + _url + _method,
          sign = this.md5(sign1) + "," + sessionStorage.getItem('login_Signature');
        //将对象转为字符串
        //签名的 定义过程
        this.$http({
          url: "/iotadmin" + _url,
          method: _method,
          headers: {
            'content-type': 'application/json',
            'Rtt-Sign': sign
          },
        }).then((res) => {
          console.log(res.data)
          if (res.data.Results == "") {
            this.viewList = false;
          } else {
            this.viewList = true;
                        const _date1 =[];
            res.data.Results.forEach((Results) => {
              if(Results.Data.indexOf("msh />")!= -1){
            _date1.push({
                  CreatedTime: Results.CreatedTime,
                  Data:Results.Data
                  });
              }else{
                _date1.push({
                  CreatedTime: "",
                  Data:Results.Data
                  });
              }
          });
          _date1[0].CreatedTime=res.data.Results[0].CreatedTime
          this.item = _date1;
          }
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log("222:" + error.response.status);
            console.log("333:" + error.response.header);
            //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
            if (error.response.data.ErrCode = "40000004") {
              self.$message.error('网络错误，请稍后再试');
            } else {
              self.$message.error('网络错误，请稍后再试');
              return false
            }
          } else {
            console.log(error);
            //一些错误是在设置请求的时候触发
            console.log('Error', error.message);
            return false
          };
        });
      },
      handNowleLog(){
        
      },
      handleHome(back) {
        this.$router.go(-2);
      },
      handleBack(back) {
        this.$router.go(-1);
      },
    }
  }

</script>

<style scoped>
.message_time_title{
 font-size: 14px;
  margin-right: 15px;
  width: 135px;
  height: 20px;
  float: left;
  text-align: center;
}
.message_data_title{
  font-size: 14px;
 margin-left: 250px;
}
.message{
  padding: 5px 0;
}
.message_time{
  color: #00d1b2;
  font-size: 14px;
  margin-right: 15px;
  width: 135px;
  height: 20px;
  float: left;
}
.message_data{
  color:#666;
  margin-left: 150px;
}

</style>
