//API接口
//使用方式为 
//使用例子：api.manage.handle("getlists","activity")

  var allurl = {
    // activity : "Addon/ActivityInformation/Index/getList?no=*",
    // activityadd : "Addon/ActivityInformation/Index/addNews",
    // activityItemGet : "Addon/ActivityInformation/Index/getNews?id=",
    // activityupdate :"Addon/ActivityInformation/Index/updNews",
    // activitydelete: "Addon/ActivityInformation/Index/delNews",
    
      activityVote: "/vote/index.php/Home/ActivityVote/submit",
  };


exports.manage = { 

  handle: function(name,action,param,flag){
    return this["_"+name](allurl[action],param,flag);
  },
  //获取列表
  _getlists: function(url) {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        async:false,//为了把数据赋值给上个作用域，需要同步进行
        success: function(data) {
          result = data.content; 
        },
        error: function(jqXHR){
           console.log("发生错误：" + jqXHR.status);
        }
    });
    //console.log(result);
    return result;
  },
  //获取单条项目
  _getitem: function(url,id) {
    var result = "";
    $.ajax({
      type: "GET",
      url: url + id,
      dataType: "json",
      async:false,//为了把数据赋值给上个作用域，需要同步进行
      success:  function(data) {
        result = data.content;
      },
      error: function(jqXHR){
         console.log("发生错误：" + jqXHR.status);
      }
    });
    return result;
  },
  //添加单项
  _add: function(url,item,check) {
    var result = "";
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      traditional:true,
      data: item, //直接传
      async:false,//为了把数据赋值给上个作用域，需要同步进行
      success:  function(data) {
        if(check == "content"){
          result = data.content;
        }else{
          result = data.status;
        }
        
      }
    });
    return result;
  },
  //更新子项内容
  _update:function(url,item){
    var result = "";
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      traditional:true,
      data: item, //直接传
      async:false,//为了把数据赋值给上个作用域，需要同步进行
      success:  function(data) {
        result = data.status;
      }
    });
    return result;
  },
  //删除单条项目
  _delete:function(url,id){
    var result = "";
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      traditional:true,
      data: id, //直接传
      async:false,//为了把数据赋值给上个作用域，需要同步进行
      success:  function(data) {
        result = data.status;
      }
    });
    return result;
  },
  //登录 
  _login:function(){

  },
  //注册
  _reg:function(){

  },
  //检查是否登录
  _checkstatus:function(){

  },
  //图片上传
  _imgupload:function(){

  },
};