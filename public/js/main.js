$(function(){var d=this,a=false;$("#button-menu").bind("click",e);$("#module li").bind("click",function(g){var f=parseInt($(this).attr("data-scroll"));
$("html,body").stop().animate({scrollTop:$("article").eq(f).offset().top},300,"swing");});$("#button-next").bind("click",function(f){$("html,body").stop().animate({scrollTop:$("article").eq(1).offset().top},300,"swing");
});$(".work").hover(function(){$(this).find("img").addClass("img-trans-in");$(this).find("img").removeClass("img-trans-out");$(this).find(".mask, .state").stop().animate({opacity:1},300,"swing");
},function(){$(this).find("img").addClass("img-trans-out");$(this).find("img").removeClass("img-trans-in");$(this).find(".mask, .state").stop().animate({opacity:0},300,"swing");
});$("#tab p").click(function(f){$("#c").stop().animate({top:"0"},200,"swing");});$("#button-close-tab").click(function(f){$("#c").stop().animate({top:"-100%"},200,"swing");
});$("#footer span").click(function(f){$("html,body").stop().animate({scrollTop:0},300,"swing");});$(window).scroll(function(g){var h=1-$(window).scrollTop()*0.002,f=30-$(window).scrollTop()*0.01;
if(h<=0||f<=0){return;}$("#background").css({opacity:h+"",width:f+"%"});});function e(f){var h=$("#aside").width();if(!a){a=true;$("#page").bind("click",e);
$("#page, #aside, #button-menu, #show").stop().animate({left:"+="+h+"px"},400,"easeOutSine");g();}else{a=false;$("#page").unbind("click",e);$("#page, #aside, #button-menu, #show").stop().animate({left:"-="+h+"px"},300,"easeInSine");
g();}f.stopPropagation();function g(){$("#button-menu").hasClass("is-active")?$("#button-menu").removeClass("is-active"):$("#button-menu").addClass("is-active");
}}function c(){$("#show").fadeIn("400",function(){});}function b(){$("#show").fadeOut("400",function(){});}$(".work").bind("click",c);$("#button-exit").bind("click",b);
});