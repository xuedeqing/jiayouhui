$(function(){
	//注册成功10s后自动跳转
	function countDown(secs,surl){ 
	 var $lefts=$("#leftseconds").text();
	  $("#leftseconds").text(secs); 
	console.log($("#leftseconds").text());
	 setTimeout(function(){
	  	if(--secs>0){
	  		countDown(secs,surl)
	  	}else
			 {  
			  location.href=surl; 
			 } 
	  },1000);
	}
	countDown(10,"index.html");
})
