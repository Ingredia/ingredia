$(function(){var c=this,a=false;$("#button-menu").bind("click",d);$("#module li p").hover(function(){$(this).siblings(".ani").stop().animate({opacity:1},300,"swing");
},function(){$(this).siblings(".ani").stop().animate({opacity:0},300,"swing");});$("#module li").bind("click",function(g){var f=parseInt($(this).attr("data-scroll"));
$("html,body").stop().animate({scrollTop:$("article").eq(f).offset().top},300,"swing");});$("#button-next").bind("click",function(f){$("html,body").stop().animate({scrollTop:$("article").eq(1).offset().top},300,"swing");
});$(".work").hover(function(){$(this).find("img").addClass("img-trans-in");$(this).find("img").removeClass("img-trans-out");$(this).find(".mask, .state").stop().animate({opacity:1},300,"swing");
},function(){$(this).find("img").addClass("img-trans-out");$(this).find("img").removeClass("img-trans-in");$(this).find(".mask, .state").stop().animate({opacity:0},300,"swing");
});$("#tab p").click(function(f){$("#c").stop().animate({top:"0"},200,"swing");});$("#button-close-tab").click(function(f){$("#c").stop().animate({top:"-100%"},200,"swing");
});$("#footer span").click(function(f){$("html,body").stop().animate({scrollTop:0},300,"swing");});$(window).scroll(function(g){var h=1-$(window).scrollTop()*0.003,f=30-$(window).scrollTop()*0.02;
if(h<=0||f<=0){return;}$("#background").css({opacity:h+"",width:f+"%"});});function d(f){var g=$("#aside").width();if(!a){a=true;$("#page").bind("click",d);
$("#page, #aside, #button-menu, #show").stop().animate({left:"+="+g+"px"},400,"easeOutSine");e();}else{a=false;$("#page").unbind("click",d);$("#page, #aside, #button-menu, #show").stop().animate({left:"-="+g+"px"},300,"easeInSine");
$("#button-menu div").eq(0).removeClass("rotate-1");$("#button-menu div").eq(1).removeClass("rotate-2");$("#button-menu div").eq(2).removeClass("rotate-3");
}f.stopPropagation();}function e(){$("#button-menu div").eq(0).addClass("rotate-1");$("#button-menu div").eq(1).addClass("rotate-2");$("#button-menu div").eq(2).addClass("rotate-3");
}function b(){$("#show").addClass("show");}$(".work").bind("click",b);});