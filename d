[1mdiff --git a/public/js/main.js b/public/js/main.js[m
[1mindex 0ce7fe8..62c1f47 100644[m
[1m--- a/public/js/main.js[m
[1m+++ b/public/js/main.js[m
[36m@@ -1,13 +1,11 @@[m
[31m-$(function(){var d=this,a=false;$("#button-menu").bind("click",e);$("#module li p").hover(function(){$(this).siblings(".ani").stop().animate({opacity:1},300,"swing");[m
[31m-},function(){$(this).siblings(".ani").stop().animate({opacity:0},300,"swing");});$("#module li").bind("click",function(g){var f=parseInt($(this).attr("data-scroll"));[m
[32m+[m[32m$(function(){var d=this,a=false;$("#button-menu").bind("click",e);$("#module li").bind("click",function(g){var f=parseInt($(this).attr("data-scroll"));[m
 $("html,body").stop().animate({scrollTop:$("article").eq(f).offset().top},300,"swing");});$("#button-next").bind("click",function(f){$("html,body").stop().animate({scrollTop:$("article").eq(1).offset().top},300,"swing");[m
 });$(".work").hover(function(){$(this).find("img").addClass("img-trans-in");$(this).find("img").removeClass("img-trans-out");$(this).find(".mask, .state").stop().animate({opacity:1},300,"swing");[m
 },function(){$(this).find("img").addClass("img-trans-out");$(this).find("img").removeClass("img-trans-in");$(this).find(".mask, .state").stop().animate({opacity:0},300,"swing");[m
 });$("#tab p").click(function(f){$("#c").stop().animate({top:"0"},200,"swing");});$("#button-close-tab").click(function(f){$("#c").stop().animate({top:"-100%"},200,"swing");[m
 });$("#footer span").click(function(f){$("html,body").stop().animate({scrollTop:0},300,"swing");});$(window).scroll(function(g){var h=1-$(window).scrollTop()*0.002,f=30-$(window).scrollTop()*0.01;[m
 if(h<=0||f<=0){return;}$("#background").css({opacity:h+"",width:f+"%"});});function e(f){var h=$("#aside").width();if(!a){a=true;$("#page").bind("click",e);[m
[31m-$("#page, #aside, #button-menu, #show").stop().animate({left:"+="+h+"px"},400,"easeOutSine");$("#button-menu").addClass("is-active");}else{a=false;$("#page").unbind("click",e);[m
[31m-$("#page, #aside, #button-menu, #show").stop().animate({left:"-="+h+"px"},300,"easeInSine");$("#button-menu").removeClass("is-active");}f.stopPropagation();[m
[31m-function g(){$("#button-menu div").eq(0).addClass("rotate-1");$("#button-menu div").eq(1).addClass("rotate-2");$("#button-menu div").eq(2).addClass("rotate-3");[m
[32m+[m[32m$("#page, #aside, #button-menu, #show").stop().animate({left:"+="+h+"px"},400,"easeOutSine");g();}else{a=false;$("#page").unbind("click",e);$("#page, #aside, #button-menu, #show").stop().animate({left:"-="+h+"px"},300,"easeInSine");[m
[32m+[m[32mg();}f.stopPropagation();function g(){$("#button-menu").hasClass("is-active")?$("#button-menu").removeClass("is-active"):$("#button-menu").addClass("is-active");[m
 }}function c(){$("#show").fadeIn("400",function(){});}function b(){$("#show").fadeOut("400",function(){});}$(".work").bind("click",c);$("#button-exit").bind("click",b);[m
 });[m
\ No newline at end of file[m
warning: LF will be replaced by CRLF in public/js/main.js.
The file will have its original line endings in your working directory.
