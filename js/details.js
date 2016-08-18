$(function(){
	//左边选项卡部分
	$(".product_left_small").find("li").mouseover(function(){
		var $index=$(this).index();
		matchpic($index);
		$(".product_left_small").find("li").css({"border":"none"}).eq($index).css({"border":"2px solid black"});
		
	})
	
	$(".color_sort_each").find("li").click(function(){
		var $index=$(this).index()+5;
		matchpic($index);
		$(".color_sort_each").find("li").css({"border":"1px solid #ccc"}).eq($index-5).css({"border":"2px solid #c40000"});
		
	})
	
	function matchpic(m){
		$(".product_left_medium").find("img").css({"display":"none"}).eq(m).css({"display":"block"});
		$(".showbigger").find("img").css({"display":"none"}).eq(m).css({"display":"block"});
	}
	
	//放大镜部分
	$(".product_left_medium").mouseover(function(){
  		$(".rec").show();
  		$(".showbigger").show();
  	})
  	$(".product_left_medium").mouseout(function(){
  		$(".rec").hide();
  		$(".showbigger").hide();
  	})
  	$(".product_left_medium").mousemove(function(ev){
		
  		var scrollT=$("body").scrollTop();
  		var Rw=parseFloat($(".rec").css("width"));
  		//console.log(Lw)  231;
  		var Rh=parseFloat($(".rec").css("height"));
  		var Lw=parseFloat($(".product_left_medium").css("width"));
  		//console.log(Lw)  430;
  		var Lh=parseFloat($(".product_left_medium").css("height"));
  		var nLeft,nTop;console.log($(".product_left_medium").offset().left);
  		if(ev.clientX-$(".product_left_medium").offset().left<Rw/2){
  			nLeft=0;
  		}else if(ev.clientX-$(".product_left_medium").offset().left>Lw-Rw/2){
  		    nLeft=Lw-Rw;
  		}else{
  			nLeft=ev.clientX-$(".product_left_medium").offset().left-Rw/2
  		};
  		//console.log($(".product_left_medium").position().top);   30
  		
  		if(ev.clientY-$(".product_left_medium").offset().top+scrollT<Rh/2){
  			nTop=0;
  		}else if(ev.clientY-$(".product_left_medium").offset().top+scrollT>Lh-Rh/2){
  		    nTop=Lh-Rh;
  		}else{
  			nTop=ev.clientY-$(".product_left_medium").offset().top+scrollT-Rh/2
  		};
  		
  		$(".rec").css({"left":nLeft+"px","top":nTop+"px"});
  		$(".showbigger img").css({"left":-nLeft*1.86046512+'px',"top":-nTop*1.86046512+"px"})
  	})
  	//加减商品数量
  	var count=0;
  	$(".plus").click(function(){
  		count++;
  		$("#counts").val(count);
  	})
  	$(".sub").click(function(){
  		count--;
  		if(count<=0){
  		 $("#counts").val(0);
  		 count=0;
  		}else{$("#counts").val(count);}
  	})
  	//支付方式部分
  	var onOff=true;
  	$(".choose_paystyle").click(function(){
  		if(onOff){
  			$(".paystyle_sort").css({"display":"block"});
  			$(".choose_paystyle").find("img")[0].src="images/details/pay5.jpg";
  			onOff=!onOff;
  		}else{
  			$(".paystyle_sort").css({"display":"none"});
  			$(".choose_paystyle").find("img")[0].src="images/details/pay6.jpg";
  			onOff=!onOff;
  		}
  	})
	//加入购物车
	var buycount=0;
	$(".putincar").click(function(){
		buycount++;
		$(".shoppingcar").find("span").text("("+buycount+")");
	})
	//选择套的选项卡部分
	$(function(){
		$(".choosesuit").each(function(index,element){
			Tag(element);
		})
	})
	function Tag(ele){
		$(ele).find(".choosesuit_tag>a").click(function(){
			var $index=$(this).index();
			$(ele).find(".choosesuit_tag>a").css({"color":"#222","border":"none"}).eq($index).css({"color":"#c40000","borderTop":"2px solid #c40000"});
			$(ele).find(".choosesuit_area>img").css({"display":"none"}).eq($index).fadeIn();
		})
	}
	//看了又看部分
	var lookmorecount_up=0;
	$(".lookmore_up").click(function(){
		lookmorecount_up++;
		lookmorecount_up%=4;
		if(lookmorecount_up==0){
			$(".morekind").css({"top":"0"});
		    lookmorecount_up++;
		}
		$(".morekind").animate({"top":-842*lookmorecount_up},1000);
	})
	var lookmorecount_down=4;
	$(".lookmore_down").click(function(){
		lookmorecount_down--;
		lookmorecount_down%=4;
		if(lookmorecount_down==3){
			$(".morekind").css({"top":"-2526px"});
		    lookmorecount_down--;
		}
		$(".morekind").animate({"top":-842*lookmorecount_down},1000);
		if(lookmorecount_down==0){
			lookmorecount_down=4
		}
	})
	//评价和详情部分
	//详情部分
	   $(function(){
			$(".moreaboutme").each(function(index,element){
				Tag2(element);
			})
		})
		function Tag2(ele){
			$(ele).find(".moreaboutme_tag>a").click(function(){
				var $index=$(this).index();
				$(ele).find(".moreaboutme_tag>a").css({"color":"#222","border":"none"}).eq($index).css({"color":"#c40000","borderTop":"2px solid #c40000"});
				$(ele).find(".moreaboutme_area>div").css({"display":"none"}).eq($index).css({"display":"block"});
			})
		}
	//评价部分
	$(".judge_btn .pinglun").click(function(){
		var $value = $(".judge_msg_input input").val();
		$(".judge_msg_input input").val("");
		$(".judge ul").prepend("<li/>");
		$(".judge ul li:first").append('<div class="judge_left"><span><img src="images/details/touxiang.jpg"/></span></div><div class="judge_right"><div class="userinfo"><cite>47#</cite><span class="name">谷子的心</span><span class="info">神马级手机控</span></div><div class="msg">'+$value+'</div><div class="func"><cite><a class="del" href="javascript:;">删除</a><a class="huifu" href="javascript:;">回复</a></cite></div></div>');
		$(".judge ul li:first").find("a.huifu").click(function(){
			$(".msg_input input").val("");
			$("button.pinglun").hide();
			$("button.huifu").show();
			$("button.huifu").unbind("click");
			var $this=this;//DOM二级事件addEventListener
			$("button huifu").unbind("click");
			$("button.huifu").click(function(){
				$("button.pinglun").show();
				$("button.huifu").hide();
				var $val = $(".judge_msg_input input").val();
				$(".judge_msg_input input").val("");
			$($this).parents(".func").prev().before('<div class="callback"><p>米TUO posted on 2016-08-01 20:43:36</p><p>'+$val+'</p></div>');
			});
		});
		$(".judge ul li:first").find("a.del").click(function(){
				$(this).parents("li").remove();
			})
	});
})
