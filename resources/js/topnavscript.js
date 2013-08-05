$(document).ready(function(){$("ul#topnav li").hover(function(){$(this).find("span").slideDown('fast')},function(){$(this).find("span").hide()});

 $("ul#topnav li").hover(function(){
    $("#topnavbg").addClass("shadow");
    },function(){
    $("#topnavbg").removeClass("shadow");
  });
  
  
  
   $("ul#topnav li").hover(function(){
    $("#topnavbg").css({zIndex:"980"});
    },function(){
    $("#topnavbg").css({zIndex:"-1"});
  });
  
  
       $("ul#topnav li").hover(function(){
    $("ul#topnav").css({background:"#b3b3b3"});
    },function(){
    $("ul#topnav").css({background:"#fff"});
  })
  

         $("ul#topnav li").hover(function(){
    $("ul#firstnav").css({background:"#b3b3b3"});
    },function(){
    $("ul#firstnav").css({background:"#fff"});
  })
  

  
     $("ul#topnav li").hover(function(){
    $("#topnavbg").css({display:"block"});
    },function(){
    $("#topnavbg").css({display:"none"});
  });
  

      /*
     $("ul#topnav li a").hover(function(){
    $("ul#topnav li a:hover").addClass("topnavsides");
    },function(){
    $("ul#topnav li a:hover").removeClass("topnavsides");
  });
  
       $("ul#topnav li a").hover(function(){
    $("ul#topnav li a:hover").removeClass("topnavsideswhite");
    },function(){
    $("ul#topnav li a:hover").addClass("topnavsideswhite");
  });
  
     $("ul#topnav li div.furniture a").hover(function(){
    $("ul#topnav li div.furniture a:hover").css({zIndex:"1000"});
    },function(){
    $("ul#topnav li").css({zIndex:"0"});
  });
 
 $("div.furniture").hover(function(){
	$("ul#topnav li div.box a,ul#topnav li div.boxhighlight a,ul#topnav li div.boxall a,ul#topnav li div.newitems a").css({color:"#747679"});
	},function(){
    $("ul#topnav li div.box a,ul#topnav li div.boxhighlight a,ul#topnav li div.boxall a,ul#topnav li div.newitems a").css({color:"#747679"});
  });
  
 */
 

$("div.furniture").hover(function(){$("ul#topnav li div.furniture a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall1 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.furniture a").css({color:"#747679"})});
$("ul#topnav li div.box a,ul#topnav li div.boxhighlight a,ul#topnav li div.boxall a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});
$("ul#topnav li div.boxall1 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"747679"})},function(){$(this).css({color:"#747679"})});

$("div.accessories").hover(function(){$("ul#topnav li div.accessories a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall2 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.accessories a").css({color:"#747679"})});
$("ul#topnav li div.boxall2 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"747679"})},function(){$(this).css({color:"#747679"})});

$("div.lighting").hover(function(){$("ul#topnav li div.lighting a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall3 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.lighting a").css({color:"#747679"})});
$("ul#topnav li div.boxall3 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.gifts").hover(function(){$("ul#topnav li div.gifts a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall4 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.gifts a").css({color:"#747679"})});
$("ul#topnav li div.boxall4 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.garden").hover(function(){$("ul#topnav li div.garden a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall5 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.garden a").css({color:"#747679"})});
$("ul#topnav li div.boxall5 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.bathroom").hover(function(){$("ul#topnav li div.bathroom a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall6 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.bathroom a").css({color:"#747679"})});
$("ul#topnav li div.boxall6 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.toiletries").hover(function(){$("ul#topnav li div.toiletries a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall12 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.toiletries a").css({color:"#747679"})});
$("ul#topnav li div.boxall12 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.bedroom").hover(function(){$("ul#topnav li div.bedroom a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall7 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.bedroom a").css({color:"#747679"})});
$("ul#topnav li div.boxall7 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.dining").hover(function(){$("ul#topnav li div.dining a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall8 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.dining a").css({color:"#747679"})});
$("ul#topnav li div.boxall8 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.living").hover(function(){$("ul#topnav li div.living a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall9 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.living a").css({color:"#747679"})});
$("ul#topnav li div.boxall9 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.kitchen").hover(function(){$("ul#topnav li div.kitchen a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall10 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.kitchen a").css({color:"#747679"})})
;$("ul#topnav li div.boxall10 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.office").hover(function(){$("ul#topnav li div.office a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$("ul#topnav li div.boxall11 a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.office a").css({color:"#747679"})});
$("ul#topnav li div.boxall11 a,ul#topnav li div.newitems a").hover(function(){$(this).css({color:"#747679"})},function(){$(this).css({color:"#747679"})});

$("div.brands").hover(function(){$("ul#topnav li div.brands a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.brands a").css({color:"#747679"})});

$("div.offers").hover(function(){$("ul#topnav li div.offers a").css({color:"#747679"});
$("ul#topnav li div.box a,ul#topnav li div.boxall a,ul#topnav li div.boxhighlight a,ul#topnav li div.newitems a").css({color:"#747679"});
$(this).css({background:"#ffffff"})},function(){$(this).css({background:"none"});
$("div.offers a").css({color:"#747679"})})});
$(".box").click(function(){window.location=$(this).find("a").attr("href"); return false;});function showgift (a){$(a).show();}function hidegift (a) {$(a).hide();}