$(function(){
	$.ajax({
		url:"data/special.txt",
		type:"get",
		cache:false,
		async:true,
		success: function(str){
			var arr = eval(str);
			console.log(arr);
			for(var i=0; i<arr.length; i++){
				var json = arr[i];
				$(".special_content").append("<dl><dt><img src='images/special/loading.gif' data-original='images/special/"+arr[i].pic+".jpg'/></dt><dd><p class='good_type'>"+arr[i].tit1+"</p><p class='good_name'>"+arr[i].tit2+"</p><span class='act_price'>活动价：</span><span class='good_price'>"+arr[i].p+"</span><div class='rubber'>点击抢购</div></dd></dl>");
			}
			
			//懒加载
			$("img").lazyload({effect: "fadeIn"});
		},
		error: function(xhr){
			alert(xhr.status);
		}
	});	
		
})