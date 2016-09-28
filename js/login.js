
	
$(function(){
	function getCookie(key){
	var str=document.cookie;
	//console.log(str);
	var arr=str.split("; ");
		for(var i=0;i<arr.length;i++){
			var newArr=arr[i].split("=");
			if(newArr[0]==key){
				return decodeURI(newArr[1]);
			}
		};
   }
	function setCookie(key,value,t){
		var mydate=new Date();
		mydate.setDate(mydate.getDate()+t); 	
		document.cookie=key+"="+encodeURI(value)+";expires="+mydate.toGMTString();	
	}
	function removeCookie(key){
		setCookie(key,"",-1);
	}
	
	if(getCookie("username")){
		   $(".username").val(getCookie("username"));
		   $(".auto").click(function(){
		   	  $(".secretcode").val(getCookie("password"));
		   })
		}
	   $(".login_click").click(function(){
	   	var a=confirm("您是否需要保存用用户名和密码");
			if(a){
				setCookie("username",$(".username").val(),5);
				setCookie("password",$(".secretcode").val(),5);
			}
			     alert("登录成功");
			window.location.href="index.html";
			     
	   })
	
})
