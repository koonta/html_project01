$(document).ready(function(){
    
     $(".w-box").each(function(){
            $(this).on("mousewheel",function(e){
//                e.preventDefault();
                var delta = 0;
                var lk = window.pageYOffset;
//                console.log("off"+lk);
                delta = event.wheelDelta/120;
                var moveTop = null; //각페이지의 탑값계산
                if(delta<0){
                   if($(this).next() != undefined){
                      moveTop=$(this).next().offset().top;
                      }
                   }else{
                   if($(this).prev() != undefined){
                      moveTop=$(this).prev().offset().top;
                      }
                   }
            
                $("html, body").stop().animate({"scrollTop":moveTop+"px"},1000);
            });
        });
    $(".gnbwrap>ul>li").click(function(){
        var i = $(this).index();
//        console.log(i);
        $("div.w-box").eq(i).offset().top;
//        console.log("aaa");
        var mTop = $("div.w-box").eq(i).offset().top;
        $("html, body").stop().animate({"scrollTop":mTop+"px"},1000);
        
        $(".gnbwrap>ul>li>span").removeClass();
        $(".gnbwrap>ul>li").eq(i).find("span").addClass("on");
    });
    
//    scroll li color
    $(window).scroll(function(){
            var sct = window.pageYOffset;
            console.log("sct"+sct);
           
            $(".w-box").each(function(index){
                if(sct>=$(this).offset().top){
                    
                    $(".gnbwrap>ul>li>span").removeClass("on");
                    $(".gnbwrap>ul>li>span").eq(index).addClass("on");
                }
            if(sct == 0){
                $(".holinel").addClass("movel");
                $(".holiner").addClass("mover");
                $(".text-box>p").eq(0).addClass("boxsize");
                $(".arr-box").removeClass("vii")
                $(".arr-box").addClass("vi")
            }else{
                $(".holinel").removeClass("movel");
                $(".holiner").removeClass("mover");
                $(".text-box>p").eq(0).removeClass("boxsize");
                $(".arr-box").removeClass("vi")
                $(".arr-box").addClass("vii")
            }     
                
                
                if(sct >= 4200 ){
                   $(".smwrap").hide();
                   $(".gotop").show();
                   }else {
                       $(".smwrap").show();
                       $(".gotop").hide();
                   }
            });
        });
    
//    arr-box
    $(".arr-box>ul>li").eq(0).mouseover(function(){
        $(".arr-box>ul>li").eq(0).addClass("mo");
        $(".arr-box>ul>li>i").addClass("moco");
        
    });
    $(".arr-box>ul>li").mouseleave(function(){
        $(".arr-box>ul>li").removeClass("mo");
        $(".arr-box>ul>li>i").removeClass("moco");
    });
    $(".arr-box>ul>li").on("click",function(s){
//                e.preventDefault();
                
                var lk = window.pageYOffset;
//                console.log("set"+lk)
                var moveTop = null; //각페이지의 탑값계산
                moveTop=$(".w-box").next().offset().top;
                

                $("html, body").stop().animate({"scrollTop":moveTop+"px"},1000);
            });
    
/*  cube    */

        var f = $(this).index();
//        var g = $(".du0+index");
//        console.log(g);
        $("#cu:nth-child(1)").click(function(){
                
                $('.box').animate(
                    { deg: 0 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box #cu').animate(
                    { deg: 0},
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box02').animate(
                    { deg: 0},
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
            });
        $("#cu:nth-child(2)").click(function(){
                
                $('.box').animate(
                    { deg: 60 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box #cu').animate(
                    { deg: 60},
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box02').animate(
                    { deg: 60},
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
                
            });
        $("#cu:nth-child(3)").click(function(){
                
                $('.box').animate(
                    { deg: 120 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box #cu').animate(
                    { deg: 120 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box02').animate(
                    { deg: 120 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
        });
        $("#cu:nth-child(4)").click(function(){
                
                $('.box').animate(
                    { deg: 180 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box #cu').animate(
                    { deg: 180 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
            $('.box02').animate(
                    { deg: 180 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                ); 
            });
        $("#cu:nth-child(5)").click(function(){
                
                $('.box').animate(
                    { deg: 240 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box #cu').animate(
                    { deg: 240 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
            $('.box02').animate(
                    { deg: 240 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                ); 
            });
        $("#cu:nth-child(6)").click(function(){
                
                $('.box').animate(
                    { deg: 300 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                $('.box #cu').animate(
                    { deg: 300 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                );
            $('.box02').animate(
                    { deg: 300 },
                    { duration: 0,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotate(' + -now +'deg) rotateZ(0deg)' });}
                    }
                ); 
            });
        $("#cu:nth-child(1)").click(function(){
//                console.log("aaaaaa");
                $('.cube').animate(
                    { deg: 0 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                
            });
            $("#cu:nth-child(2)").click(function(){
//                console.log("aaaaaa");
                $('.cube').animate(
                    { deg: 90 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                
            });
            $("#cu:nth-child(3)").click(function(){
//                console.log("aaaaaa");
                $('.cube').animate(
                    { deg: 180 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                
            });
            $("#cu:nth-child(4)").click(function(){
//                console.log("aaaaaa");
                $('.cube').animate(
                    { deg: 270 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( 0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
                
            });
            $("#cu:nth-child(5)").click(function(){
//                console.log("aaaaaa");
                $('.cube').animate(
                    { deg: 90 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( ' + now +'deg) rotateY(0deg) rotateZ(0deg)' });}
                    }
                );
                
            });
            $("#cu:nth-child(6)").click(function(){
//                console.log("aaaaaa");
                $('.cube').animate(
                    { deg: 270 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX( ' + now +'deg) rotateY(0deg) rotateZ(0deg)' });}
                    }
                );
                
            });
    
            $("div#cu").click(function(){
                var cu = $(this).index();
//                console.log("cu"+cu);
                if(cu == 0){
                    $("div#cu").removeClass("onn");
                    $("div#cu").eq(cu).addClass("onn");
                    $(".f01-arr .f01-i").stop().animate({top:"-30px"},2000);
                    $(".f01-arr").stop().animate({top:"50px"},2000);
                    $(".front .f01-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f01-arr f01-i").stop().animate({top:"-30px"},2000);
                    $(".f01-arr").stop().animate({top:"150px"},2000);
                    $(".front .f01-sp").stop().animate({opacity:"0"},700);
                }
                if(cu == 1){
                    $("div#cu").removeClass("onn");
                    $("div#cu").eq(cu).addClass("onn");
                    $(".f03-arr .f03-i").stop().animate({top:"-30px"},2000);
                    $(".f03-arr").stop().animate({top:"50px"},2000);
                    $(".left01 span").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f03-arr .f03-i").stop().animate({top:"-30px"},2000);
                    $(".f03-arr").stop().animate({top:"150px"},2000);
                    $(".left01 span").stop().animate({opacity:"0"},700);
                }
                if(cu == 2){
                    $("div#cu").removeClass("onn");
                    $("div#cu").eq(cu).addClass("onn");
                    $(".f02-arr .f02-i").stop().animate({top:"-30px"},2000);
                    $(".f02-arr").stop().animate({top:"50px"},2000);
                    $(".back span").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f02-arr .f02-i").stop().animate({top:"-30px"},2000);
                    $(".f02-arr").stop().animate({top:"150px"},2000);
                    $(".back span").stop().animate({opacity:"0"},700);
                }
                if(cu == 3){
                    $("div#cu").removeClass("onn");
                    $("div#cu").eq(cu).addClass("onn");
                    $(".f04-arr .f04-i").stop().animate({top:"-30px"},2000);
                    $(".f04-arr").stop().animate({top:"50px"},2000);
                    $(".right .f04-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f04-arr .f04-i").stop().animate({top:"-30px"},2000);
                    $(".f04-arr").stop().animate({top:"150px"},2000);
                    $(".right .f04-sp").stop().animate({opacity:"0"},700);
                }
                if(cu == 4){
                    $("div#cu").removeClass("onn");
                    $("div#cu").eq(cu).addClass("onn");
                    $(".f05-arr .f05-i").stop().animate({top:"-30px"},2000);
                    $(".f05-arr").stop().animate({top:"50px"},2000);
                    $(".top .f05-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f05-arr .f05-i").stop().animate({top:"-30px"},2000);
                    $(".f05-arr").stop().animate({top:"150px"},2000);
                    $(".top .f05-sp").stop().animate({opacity:"0"},700);
                }
                if(cu == 5){
                    $("div#cu").removeClass("onn");
                    $("div#cu").eq(cu).addClass("onn");
                    $(".f06-arr .f06-i").stop().animate({top:"-30px"},2000);
                    $(".f06-arr").stop().animate({top:"50px"},2000);
                    $(".bottom .f06-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f06-arr .f06-i").stop().animate({top:"-30px"},2000);
                    $(".f06-arr").stop().animate({top:"150px"},2000);
                    $(".bottom .f06-sp").stop().animate({opacity:"0"},700);
                }
            });
        $(".reset-bt").click(function(){
            
             $(".graph-box>div").removeClass("nameani");
            $(".f01>div").stop().animate({top:"150px"},2000);
            $(".cube-all>span").stop().animate({opacity:"0"},700);
        });
        $(".box #cu").on("click",function(){
            var cu = $(this).index();
            $(".box #cu").removeClass("du01");
            $(".box #cu").eq(cu).addClass("du01");
             $(".graph-box>div").eq(cu).addClass("nameani");
        });
        
        
        $(".box").mouseover(function(){
            $(".tlinebox").removeClass("tline-re");
            $(".tlinebox").addClass("tline");
            $(".llinebox").removeClass("lline-re");
            $(".llinebox").addClass("lline");
            $(".rlinebox").removeClass("rline-re");
            $(".rlinebox").addClass("rline");
            $(".blinebox").removeClass("bline-re");
            $(".blinebox").addClass("bline");
        });
        $(".box").mouseleave(function(){
            $(".tlinebox").removeClass("tline");
            $(".tlinebox").addClass("tline-re");
            $(".llinebox").removeClass("lline");
            $(".llinebox").addClass("lline-re");
            $(".rlinebox").removeClass("rline");
            $(".rlinebox").addClass("rline-re");
            $(".blinebox").removeClass("bline");
            $(".blinebox").addClass("bline-re");
        });
        
        var jjk = 0;
        $(".prev").click(function(){
            
            $(".viewbox").removeClass("vup");
            $(".jview>.j").removeClass("slmove");
            $(".exbox").removeClass("exdown");
            if(jjk >= 0 ){
                if(jjk == 0){
                    $(".slidebox>ul").css("top","-695px");
                }
                if(jjk == 1){
                    $(".slidebox>ul").css("top","10px");
                }
                jjk++;
                if(jjk==2){jjk=0};
            }
        });
        $(".next").click(function(){
            
            $(".viewbox").removeClass("vup");
            $(".jview>.j").removeClass("slmove");
            $(".exbox").removeClass("exdown");
            if(jjk >= 0 ){
                if(jjk == 1){
                    $(".slidebox>ul").css("top","10px");
                }
                if(jjk == 0){
                    $(".slidebox>ul").css("top","-695px");
                }
                jjk--;
                if(jjk==-1){jjk=1};
            }
        });
        
        $(".bar").click(function(){
            $(".viewbox").removeClass("vup");
            $(".jview>.j").removeClass("slmove");
            $(".exbox").removeClass("exdown");
        });
        
        $(".slidebox>ul>li").click(function(){
            var sl = $(this).index();
            $(".viewbox").removeClass("vup");
            $(".viewbox").addClass("vup");
            $(".jview>.j").removeClass("slmove");
            $(".jview>.j").eq(sl).addClass("slmove");
            $(".exbox").removeClass("exdown");
            $(".exbox").eq(sl).addClass("exdown");
        });
    
    
    
    
    
    
    
    
    
    
    
});