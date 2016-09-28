$(function(){
	$(".slide li:first").show();
	var $num=0;
	//鼠标移上去停止定时器
	$(".slide").mouseover(function(){
		clearInterval($(".slide ul")[0].timer);
	})
	//鼠标移开开启定时器
	$(".slide").mouseout(function(){
	    $(".slide ul")[0].timer=setInterval(fnNext,3000);
	})
	$(".slide ul")[0].timer=setInterval(fnNext,3000);
	$("#next").click(fnNext);
	$("#prev").click(fnPrev);
	function fnChange(){
		$(".slide li").fadeOut().eq($num).fadeIn();
		$(".number li").removeClass("red").eq($num).addClass("red");
	}
	function fnNext(){
		$num++;
		if($num>=$(".slide li").length){
			$num=0;
		}
    	fnChange();
	}
	function fnPrev(){
		$num--;
		if($num<0){
			$num=$(".slide li").length-1;
		}
    	fnChange();
    	
	}
	$(".number li:first").addClass("red");
	$(".number li").mouseover(function(){
		clearTimeout($(".number")[0].timer);
		var  _this=this;
		$(".number")[0].timer=setTimeout(function(){
			if($num!=$(_this).index()){	
				$num=$(_this).index();
    	        fnChange()}
	},200)
	})
	//主页ajax部分
	$.ajax({
		url:"data/index.txt",
		type:"get",
		cache:false,
		async:true,
		success: function(str){
			var arr = eval(str);
			console.log(arr);
			for(var i=0; i<arr[0].length; i++){
				$(".floor2").append("<img src='images/allkind/"+arr[0][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[1].length; i++){
				$(".floor3_right").append("<img src='images/allkind/"+arr[1][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[2].length; i++){
				$(".floor4_left").append("<img src='images/allkind/"+arr[2][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[3].length; i++){
				$(".floor4_bottom").append("<img src='images/allkind/"+arr[3][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[4].length; i++){
				$(".floor5_right").append("<img src='images/allkind/"+arr[4][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[5].length; i++){
				$(".floor5_bottom").append("<img src='images/allkind/"+arr[5][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[6].length; i++){
				$(".floor6").append("<img src='images/allkind/"+arr[6][i]+".jpg'/> ")
			}
			for(var i=0; i<arr[7].length; i++){
				$(".floor7").append("<img src='images/allkind/"+arr[7][i]+".jpg'/> ")
			}
			
		},
		error: function(xhr){
			alert(xhr.status);
		}
	});
	//楼梯部分
	$(".floor_ctrl span").click(function(){
		//$(this).addClass("active").siblings().removeClass("active");
		var $index=$(this).index();
		var $top=$(".floor").eq($index).offset().top-50;
		$("body,html").animate({"scrollTop":$top},500)//点到几就是几楼
	})
	$(window).scroll(function(){
		var $offset=-$("body,html").offset().top;
		 clearTimeout( $(".floor_ctrl")[0].timer);
		 $(".floor_ctrl")[0].timer=setTimeout(function(){
		 	if($offset>10){
			  $(".floor_ctrl").stop().animate({"width":"60px","height":"276px","oapcity":"1"},300);
				//$(".floor_ctrl").fadeIn();
			}else{
			   $(".floor_ctrl").stop().animate({"width":"0","height":"0","oapcity":"0"},300)
			   //$(".floor_ctrl").fadeOut();
			}
		 },200)
		$(".floor_ctrl span").each(function(index){
			var $top=$(".floor").eq(index).offset().top;
			//console.log($offset,$top)
			if($offset>=$top-450){
	        	$(this).addClass("active").siblings().removeClass("active");
			}
		})
	})
	//回到顶部
	$(".backtop").click(function(){
		$("body,html").animate({"scrollTop":"0"},400)
	})
	//侧边导航AJAX部分
	$.ajax({
				type:"get",
				url:"data/list.txt",
				cache:false,
				async:true,
				success:function(str){
				 var arr=eval(str);
			   	 console.log(arr);
			      for(var i=0;i<arr.length;i++){
			     	 var json=arr[i];
			     	 $(".left ul").append("<li><img src='"+json["catlogo"]+"'>"+json["catname"]+"</li>")
  		
			     	 var div=$("<div></div>");
			     	 var arr01=json["catlist"];
			     	 for(var j=0;j<arr01.length;j++){
			     	 	var json01=arr01[j];
			     	 	var dl=$("<dl><dt>"+json01["catname"]+"</dt></dl>");
			     	 	var dd=$("<dd></dd>");
			     	 	var arr02=json01["catlist"];
			     	 	for(var k=0;k<arr02.length;k++){
			     	 		var href=$("<a href='javascript:;'>"+arr02[k]+"</a>");
			     	 		dd.append(href);
			     	 	}
			     	 	dl.append(dd);
			     	 	div.append(dl);
			     	 }
			     	 $(".right").append(div);
			     }
					    $(function(){
						$(".left").mouseover(function(){
							$(".right").show();
						}).find("li").mouseover(function(){
							$(this).addClass("active").siblings().removeClass("active");
							$(".right div").eq($(this).index()).show().siblings().hide();
						})
						$(".left").mouseleave(function(){
							$(".right").hide();
							$(this).find("li").removeClass("active");
						})
					})
				},
					error: function(xhr){
						alert(xhr.status);
					}
				});
			
})