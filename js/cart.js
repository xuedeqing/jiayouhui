$(function(){
     //根据打勾来统计数量和总价钱
	function calculate(){
	     	if($(".check_one").eq(0).attr("checked")){
	        var count1=parseInt($(".count_input").eq(0).val());
	        var price1=parseFloat($(".subtotal").eq(0).text());
	     	$("#finallycount").text(count1);
	     	$("#finallyprice").text(price1);
	     }else{
	     	$("#finallycount").text("0");
	     	$("#finallyprice").text("0");
	     	count1=0;
	     	price1=0;
	     }
	     if($(".check_one").eq(1).attr("checked")){
	        var count2=parseInt($(".count_input").eq(1).val());
	        var price2=parseFloat($(".subtotal").eq(1).text());
	     	$("#finallycount").text(count1+count2);
	     	$("#finallyprice").text(price1+price2);
	     }else{
	     	$("#finallycount").text(count1);
	     	$("#finallyprice").text(price1);
	     	count2=0;
	     	price2=0;
	     }
	     if($(".check_one").eq(2).attr("checked")){
	        var count3=parseInt($(".count_input").eq(2).val());
	        var price3=parseFloat($(".subtotal").eq(2).text());
	     	$("#finallycount").text(count1+count2+count3);
	     	$("#finallyprice").text(price1+price2+price3);
	     }else{
	     	count3=0;
	     	price3=0;
	     	$("#finallycount").text(count1+count2);
	     	$("#finallyprice").text(price1+price2);
	     	
	     }
	     if($(".check_one").eq(3).attr("checked")){
	        var count4=parseInt($(".count_input").eq(3).val());
	        var price4=parseFloat($(".subtotal").eq(3).text());
	     	$("#finallycount").text(count1+count2+count3+count4);
	     	$("#finallyprice").text(price1+price2+price3+price4);
	     }else{
	     	count4=0;
	     	price4=0;
	     	$("#finallycount").text(count1+count2+count3);
	     	$("#finallyprice").text(price1+price2+price3);
	     	
	     }
	 }
	
	//实现加号的功能
	
	for(var i=0;i<$(".add").length;i++){
		//加号功能
		(function(i){$(".add").eq(i).click(function(){
          var count_now=$(".count_input").eq(i).val();
          $(".reduce").eq(i).text("-");
          $(".count_input").eq(i).val(++count_now);
         // console.log($(".count_input").eq(i).val());
         var eachtotal= $(".eachprice").eq(i).text()*$(".count_input").eq(i).val();
         $(".subtotal").eq(i).text((eachtotal).toFixed(2));
			calculate();
         
		})})(i);
		//减号功能
		(function(i){$(".reduce").eq(i).click(function(){
          var count_now=$(".count_input").eq(i).val();
			if(count_now==1){
	         
              $(".count_input").eq(i).val("1");
			}else{
		          $(".count_input").eq(i).val(--count_now);
		         var eachtotal= $(".eachprice").eq(i).text()*$(".count_input").eq(i).val();
		         $(".subtotal").eq(i).text((eachtotal).toFixed(2));
		         if(count_now==1){
		         	 $(".reduce").eq(i).text("");
		         }
			}
			calculate();
		})})(i);
		
	}
	//全选和取消全选
	$(".check_all")[0].choose=0;
	$(".check_all").click(function(){
		 
			if($(".check_all")[0].choose==4){
				$(".check_all")[0].choose=0;
				$(".check_one").attr("checked",false);
				
			}else{
				$(".check_all")[0].choose=4;
				$(".check_one").attr("checked",true);
			}
		//console.log($(".check_all")[0].choose)
		calculate();
	})
	$(".check_one").click(function(){
		
		if($(this).attr("checked")){
			$(".check_all")[0].choose++;
		}else{
			$(".check_all")[0].choose--;
			
		}
		if($(".check_all")[0].choose==4){
			$(".check_all").attr("checked",true);
		}else{
			$(".check_all").attr("checked",false);
			
		}
		 calculate();
	//	console.log($(".check_all")[0].choose)
	})
	
	//删除物品部分
	 var m=0;
	for(var i=0;i<$(".delete").length;i++){
	 (function(i){
	 	 $(".delete").eq(i).click(function(){
	 	  m++;
	 	  //console.log(m);
	   	  $(this).parent().parent().hide();
	   	  $(".count_input").eq(i).val("0");
	   	  $(".subtotal").eq(i).text("0");
	   	  if(m==$(".delete").length){
	      $(".tobuy").css({"display":"block"});	   	  	
	   	  }
	   })
	   $(".deleteall").eq(i).click(function(){
	   	  $("table").hide();
	   	  $("#finallycount").text("0");
	      $("#finallyprice").text("0");
	      $(".tobuy").css({"display":"block"});
	   })
	   
	 })(i);
	}
	
	
})
