<template>
  <div class="main">
<div id="main" @click="onFocus($event)" v-if="activeShell" >
      <div class="tips">
        <p class="resp">
          【shell】命令行控制台 --当前用户：$username
        </p>
        <span class="resp">
          用法提示：<br/>  
           1.输入“命令 参数1 参数2 ……”回车<br/>  
           2.鼠标选中文本即可复制<br/>  
        </span>
      </div>
      <div>
        <div v-if="msg_start" v-for="(msg,index) in messages" :key="index">
          <div class="line">
            <pre class="message" v-text="msg.message"> </pre>
          </div>
        </div>
        <div>
          <pre class="message" v-text="messagess"> </pre>
          </div>
        <div>
          <span id="host" class="resa">{{userName}}</span>
          <input id="command" type="text" class="cmdp" autofocus="true" v-model="message" @keyup.enter="send"
                 @keyup.down="showList(down)" @keyup.up="showList(up)"/>
          <input id="copyIn" type="hidden"/></div>
        </div>
        <div><a id="msg_end">&nbsp</a></div>

    </div>   
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        down: 'down',
        up: 'up',
        socket: null,
        command: '',
        messages: [],
        messagess: '',
        myMessages: [],
        msgLength: 0,
        msgState: null,
        message: '',
        channel: 'channel',
        showMsg:true,
        userName:"msh />",
        msg_start:true
        
      }
    },
    props : {
      activeShell : {
        type : Boolean
      }
    },
    watch : {
      activeShell (value,oldvalue) {
        if(value == false){
          this.socket.close();
          this.messages=[];
          this.$router.go(0)
        }else {
          $("#command").focus();
        }
      },
       messages() {
    this.$nextTick(() => {
      var msg_end = document.getElementById("msg_end");
        msg_end.scrollIntoView(); 
    })
    }
    
    },
    created: function () {
      const self = this,
        shellUrl = sessionStorage.getItem('shellUrl'),
        deviceId = sessionStorage.getItem('deviceId'),
        signature = sessionStorage.getItem('login_Signature'),
        sign = sessionStorage.getItem('login_TokenId') + sessionStorage.getItem('deviceId');
      // 创建一个Socket实例
      this.socket = new WebSocket(shellUrl);
      self.messages.push({message: "开始连接服务器\n"});
      this.socket.addEventListener('open', function (event) {
        self.messages.push({ message: "连接服务器成功\n"});
        const message = '{"deviceId": "' + deviceId + '",' +
          '"signature": "' + signature + '",' +
          '"sign": "' + self.md5(sign) + '"}'
        self.socket.send(message);
      });
// Listen for messages
      this.socket.addEventListener('message', function (event) {
        if(typeof event.data == 'object') {
          const reader = new FileReader();
          reader.addEventListener('loadend', (e) => {
            var tag = e.target || e.srcElement;
            const text = tag.result;
            console.log("text:"+tag.result)
            var reg =/msh.*?>$/g;
            var reg2 =/finsh.*?>$/g;           
            if(reg.test(text)){
              const  str = text.split("msh");
              self.userName = "msh"+str[1];
              const _text = text.substring(0,text.length-self.userName.length)
              self.messages.push({message: _text});
            }else if(reg2.test(text)){
              const  str = text.split("finsh");
              self.userName = "finsh"+str[1];
              const _text = text.substring(0,text.length-self.userName.length)
              self.messages.push({message: _text});
            }else{
                self.messages.push({message: text});
            }
            self.messagess = ""
            if(self.messages.length>=2){
              self.msg_start=false
            }else{
              self.msg_start=true
            }
            for(var i=0;i<self.messages.length;i++){
              self.messagess+=self.messages[i].message
            }
            console.log(self.messagess)
            console.log(self.messages)
                self.showMsg= false;
          });
          reader.readAsText(event.data);
        }
        if(event.data instanceof ArrayBuffer){
          var buffer = event.data;
          console.log("Received arraybuffer");
        }
      });
      this.socket.addEventListener('close', function (event) {
        //console.log('断开连接');
        self.messages.push({name: "$device:>", message: "与服务器断开连接"});
        //self.$router.go(0)
      });
    },
//    mounted: function () {
//      this.$nextTick(function () {
//        Terminal.init(document.getElementById("terminal"), sessionStorage.getItem('shellUrl'));
//      })
//    },
    methods: {
      onFocus(e) {
        if (e.target.id == "main") {
          $("#command").focus();
        }
      },
      send: function () {
        const self = this;
        if (self.message) {
          //console.log("readyState:",self.socket.readyState)
          if (self.socket.readyState === WebSocket.OPEN) {
//open的时候即可发送
            //console.log('已发送数据')
            self.socket.send(this.message);
            self.socket.send(String.fromCharCode('13'));
            //console.log(this.message);
          } else {
            //console.log('没有发送数据')
// Do something else in this case.
//Possibly ignore the data or enqueue it.
          }
        }
        if(self.message==null || self.message ==""){
          self.messages.push(
          {name: "$username:>", message: self.userName+"\n"}
        ); 
        }else{
          self.messages.push(
          {name: "$username:>", message: self.userName+self.message+"\n"}
        ); 
        }
       self.messagess = ""
            if(self.messages.length>=2){
              self.msg_start=false
            }else{
              self.msg_start=true
            }
            for(var i=0;i<self.messages.length;i++){
              self.messagess+=self.messages[i].message
            }

        self.myMessages.push(
          {myMessage: self.message}
        );
        self.msgLength = self.myMessages.length;
        self.msgState = null;
        self.message = null;
      },
      showList(val) {
        const self = this;
        if (self.myMessages != "") {
          if (self.msgState==null){
            self.msgState = self.msgLength;
            console.log(self.msgState)
            this.showBack(val);
          }else if(self.msgState<=self.msgLength&&self.msgState>=0) {
            this.showBack(val);
          }else{
            self.message = self.message
          }
        } else {
        }
      },
      showBack(val){
        const self = this;
        if (val == "down") {                          //判断向下按钮逻辑
          if (self.msgState+1>=self.msgLength) {      //返回到最后一个值的时候
            self.msgState=self.msgLength
            self.message = ""
          } else {
            self.msgState=self.msgState+1
            self.message = self.myMessages[self.msgState].myMessage
          }
        } else if (val == "up") {                     //判断向上按钮逻辑
          if (self.msgState == 0) {                   //返回到第一个值的时候
            self.msgState=self.msgState
            self.message = self.myMessages[self.msgState].myMessage
          } else {
            self.msgState = self.msgState - 1
            self.message = self.myMessages[self.msgState].myMessage
          }
        }
      },
      handleClose() {
        this.socket.close();
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
  .messageName {
    color: #337ab7;
  }
  .message {
    color: #ccc;
    line-height: 25px;
  }
  .main {
    width: 98%;
    height: 98%;
    
    margin: 0px;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 14px;
  }
  #main {
overflow: auto;
  }

  .resp {
    margin: 5px 0;
    line-height: 25px;
  }
  .tips{
    margin-bottom: 15px;
  }
.line{
  line-height: 25px;
}
  .resa {
    margin: 5px 0px;
    display: inline-block;
    color: #337ab7;
  }

  .cmdp {
    color: white;
    margin: 5px 0px;
    width: 80%;
    font-size: 14px;
    background-color: black;
    border: 0px;
    display: inline-block;
    outline: none;

  }
</style>
