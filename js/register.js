$(function(){
	//手机号部分正则
	
	$(".tel_inp").blur(function(){
	 // console.log($(".tel_inp").val());
	  $(".warning_tel").css({"display":"none"});
	  $(".tel_inp").css({"border":"1px solid #dbdbd9"});
	  var tel =$(".tel_inp").val();
	    if(!/^[1]+[3,5,8]+\d{9}$/.test(tel)){
	    	$(".right_tel").css({"display":"none"});
	    	
	    	$(".warning_tel").css({"display":"block"});
	    	$(".tel_inp").css({"border":"1px solid #e22"});
	    }else{
	    	$(".right_tel").css({"display":"block"});
	    }
	})
	    	
	//密码部分正则
	$(".setcode_inp").blur(function(){
	    console.log($(".setcode_inp").val());
		 $(".warning_code").css({"display":"none"});
	     $(".setcode_inp").css({"border":"1px solid #dbdbd9"});
		//以字母开头，长度在6~18之间，只能包含字符、数字和下划线
		var setcode=$(".setcode_inp").val();
		if(!/^[a-zA-Z]\w{5,17}$/.test(setcode)){
	    	$(".right_code").css({"display":"none"});
			$(".warning_code").css({"display":"block"});
	    	$(".setcode_inp").css({"border":"1px solid #e22"});
		}else{
	    	$(".right_code").css({"display":"block"});
	    	
	    	
		}
	})
	//验证密码是否一致
	$(".confirmcode_inp").blur(function(){
	    console.log($(".confirmcode_inp").val());
	    $(".right_confirm").css({"display":"none"});
		$(".warning_dif").css({"display":"none"});
	    $(".confirmcode_inp").css({"border":"1px solid #dbdbd9"});
		var confirmcode=$(".confirmcode_inp").val();
		if(confirmcode!=$(".setcode_inp").val()||confirmcode==""||!/^[a-zA-Z]\w{5,17}$/.test(confirmcode)){
			$(".right_code").css({"display":"none"});
			$(".warning_dif").css({"display":"block"});
	    	$(".confirmcode_inp").css({"border":"1px solid #e22"});
		}else{
			$(".right_confirm").css({"display":"block"});
	    	$(".right_code").css({"display":"block"});
	    
			
		}
	})
	//四位数字验证码
	$(".testcode_inp").blur(function(){
	    
		 $(".warning_testcode").css({"display":"none"});
	     $(".testcode_inp").css({"border":"1px solid #dbdbd9"});
		
		var testcode=$(".testcode_inp").val();
		if(!/^\d{1,4}$/.test(testcode)){
	    	$(".right_testcode").css({"display":"none"});
			$(".warning_testcode").css({"display":"block"});
	    	$(".testcode_inp").css({"border":"1px solid #e22"});
		}else{
	    	$(".right_testcode").css({"display":"block"});
	    
	    	
		}
	})
	//验证是否成功 跳转页面
	$(".reg_click").click(function(){
		if((/^[1]+[3,5,8]+\d{9}$/.test($(".tel_inp").val()))&&(/^[a-zA-Z]\w{5,17}$/.test($(".setcode_inp").val()))&&($(".setcode_inp").val()==$(".confirmcode_inp").val())&&(/^\d{1,4}$/.test($(".testcode_inp").val()))&&($("#reg_agree").attr("checked"))){
			window.location.href="register_success.html";
		}
	})
	
	//电视用户和普通用户的切换
	$(".g_user").click(function(){
		$(".g_user  a").css({"border-bottom":"2px solid #ff7d01","color":"black"})
		$(".tv_user  a").css({"border-bottom":"1px solid #e4e4e4","color":"#91949b"})
	})
	$(".tv_user").click(function(){
		$(".tv_user  a").css({"border-bottom":"2px solid #ff7d01","color":"black"})
		$(".g_user  a").css({"border-bottom":"1px solid #e4e4e4","color":"#91949b"})
	})
})

