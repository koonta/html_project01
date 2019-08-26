$(document).ready(function(){
    
    
    $(".gotop").hide();
    $(".smwrap ul li").click(function(){
        var d = $(this).index();
        $(".smwrap ul li").removeClass();
        $(".smwrap ul li").eq(d).addClass("long");
        $(".gnbwrap ul li").removeClass();
        $(".gnbwrap ul li").eq(d).addClass("pa")
        
        var i = $(this).index();
//        console.log(i);
        $(".pbox").eq(i).offset().top;
//        console.log("aaa");
        var mTop = $("div.pbox").eq(i).offset().top;
       $("html, body").stop().animate({"scrollTop":mTop+"px"},1000);
        
    });
//    $(".mbox").click(function(){
//        var d = $(this).index()+1;
//        $(".smwrap ul li").removeClass();
//        $(".smwrap ul li").eq(d).addClass("long");    
//    });
    
    
   
	 $(".mbox").click(function(){
		 if(!$(this).hasClass("active")){
			 
				$(".mbox").each(function(){
					if($(this).hasClass("active")){
						
						$(this).removeClass("active");
				   
					}
				});
			 
			  $(this).addClass("active");
			  
				}else{
//					console.log("sdfawefawe");
				$(this).removeClass("active");
				
//                var linum = (".smwrap ul li").index();
//                $(".smwrap ul li").removeClass();
//                $(".smwrap ul li").eq(linum).addClass("long");    
				}
	 });
    
     $(".pbox").each(function(){
            $(this).on("mousewheel",function(e){
//                e.preventDefault();
                var delta = 0;
                var lk = window.pageYOffset;
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
        
//        화살표 클릭
        $(".wd").on("click",function(s){
//                e.preventDefault();
                
                var lk = window.pageYOffset;
                var moveTop = null; //각페이지의 탑값계산
                moveTop=$("div.pbox").next().offset().top;
                

                $("html, body").stop().animate({"scrollTop":moveTop+"px"},1000);
            });
            
            
            $(".pbox:nth-child(2) .pb02 .box").mouseover(function(){
                $(".line-l").stop().animate({height:"500px"},1000);                   
                $(".line-t").stop().animate({width:"700px"},1000);
                $(".te-box p").stop().animate({color:"navy"},800);
            });
            $(".pbox:nth-child(2) .pb02 .box").mouseout(function(){
                $(".line-l").stop().animate({height:"0px"},1000);                   
                $(".line-t").stop().animate({width:"0px"},1000);
                $(".te-box p").stop().animate({color:"transparent"},800);
            });
            
            
        
    
    
    
    
    
        $(window).scroll(function(){
            var sct = window.pageYOffset;
//            console.log(sct);
           
            $(".pbox").each(function(index){
                if(sct>=$(this).offset().top){
                    
                    $(".smwrap ul li").removeClass("long");
                    $(".smwrap ul li").eq(index).addClass("long");
                    $(".gnbwrap ul li").removeClass("pa");
                    $(".gnbwrap ul li").eq(index).addClass("pa");
                    $(".smwrap ul li").removeClass("cm00");
                    $(".smwrap ul li").removeClass("cm01");
                    $(".smwrap ul li").removeClass("cm02");
                    $(".smwrap ul li").removeClass("cm03");
                    $(".smwrap ul li").addClass("cm0"+index);
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
    
        
        
        $("#header .ham").click(function(){
            $("#header .ham span").toggleClass("move");                                     $(".nwrap").toggleClass("open");
            $(".nwrap").toggleClass("nopen");
            $(".mbox:nth-child(1)").css({"top":"0px","opacity":"1"});
            $(".mbox:nth-child(2)").css({"top":"80px","opacity":"1"});
            $(".mbox:nth-child(3)").css({"top":"160px","opacity":"1"});
            $(".mbox:nth-child(4)").css({"top":"240px","opacity":"1"});
            $(".mbox:nth-child(5)").css({"top":"320px","opacity":"1"});
            $(".hello p:nth-child(2)").removeClass("front01");
//            $(".con-box01").css({"opacity":"0"});
        });
    
//        $("#header .ham").on({
//            'click':function(){
//            $("#header .ham span").toggleClass("move");                                     $(".nwrap").toggleClass("open");                                         $(".mbox:nth-child(1)").css({"top":"0px","opacity":"1"});
//            $(".mbox:nth-child(2)").css({"top":"80px","opacity":"1"});
//            $(".mbox:nth-child(3)").css({"top":"160px","opacity":"1"});
//            $(".mbox:nth-child(4)").css({"top":"240px","opacity":"1"});
//            $(".mbox:nth-child(5)").css({"top":"320px","opacity":"1"});
//            $(".hello p:nth-child(2)").removeClass("front01");
//        },
//            "touchstart":function(){
//            $("#header .ham span").toggleClass("move");                                     $(".nwrap").toggleClass("open");                                         $(".mbox:nth-child(1)").css({"top":"0px","opacity":"1"});
//            $(".mbox:nth-child(2)").css({"top":"80px","opacity":"1"});
//            $(".mbox:nth-child(3)").css({"top":"160px","opacity":"1"});
//            $(".mbox:nth-child(4)").css({"top":"240px","opacity":"1"});
//            $(".mbox:nth-child(5)").css({"top":"320px","opacity":"1"});                
//                             }
//        });
    
    
    
    
        $(".gotop").click(function(){
            $("html, body").stop().animate({"scrollTop":0+"px"},1000);
        });
        
        $(".mbox").click(function(){
            var mb = $(this).index();
//            console.log(mb);
            
            if(mb == 0){
                $(".pbox02").removeClass("left");
                $(".pbox03").removeClass("left");
                $(".pbox04").removeClass("left");
                $(".hello p:nth-child(2)").removeClass("front01");
            }
            
            if(mb == 1){
                $(".pbox02").toggleClass("left");
                $(".pbox03").removeClass("left");
                $(".pbox04").removeClass("left");
                $(".hello p:nth-child(2)").removeClass("front01");
                $(".hello p:nth-child(2)").addClass("front01");
            }
            if(mb == 2){
                $(".pbox02").removeClass("left");
                $(".pbox04").removeClass("left");
                $(".pbox03").toggleClass("left");
                $(".hello p:nth-child(2)").removeClass("front01");
                $(".hello p:nth-child(2)").toggleClass("front01");
            }
            if(mb == 3){
                $(".pbox02").removeClass("left");
                $(".pbox03").removeClass("left");
                $(".pbox04").toggleClass("left");
                $(".hello p:nth-child(2)").removeClass("front01");
                $(".hello p:nth-child(2)").addClass("front01");
            }
        });
    
        $("header img").click(function(){
            $(".mbox").removeClass("active");
            $(".pbox02").removeClass("left");
            $(".pbox03").removeClass("left");
            $(".pbox04").removeClass("left");
        });
    
        $(".gnbwrap ul li").click(function(){
            var mp = $(this).index();
            $(".pbox").eq(mp).offset().top;
            
            var mTop = $("div.pbox").eq(mp).offset().top;
            $("html, body").stop().animate({"scrollTop":mTop+"px"},1000);
        });
    
        $(".gnbwrap ul li:nth-child(1)").click(function(){
            $(".pbox02").removeClass("left");
            $(".pbox03").removeClass("left");
            $(".pbox04").removeClass("left");
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
                console.log("cu"+cu);
                if(cu == 0){
                    $("div#cu").eq(1).removeClass("eu02");
                    $("div#cu").eq(2).removeClass("eu03");
                    $("div#cu").eq(3).removeClass("eu04");
                    $("div#cu").eq(4).removeClass("eu05");
                    $("div#cu").eq(5).removeClass("eu06");
                    $("div#cu").eq(0).addClass("eu01");
                    $(".f01-arr .f01-i").stop().animate({top:"-30px"},2000);
                    $(".f01-arr").stop().animate({top:"50px"},2000);
                    $(".front .f01-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f01-arr f01-i").stop().animate({top:"-30px"},2000);
                    $(".f01-arr").stop().animate({top:"150px"},2000);
                    $(".front .f01-sp").stop().animate({opacity:"0"},700);
                }
                if(cu == 1){
                    $("div#cu").eq(0).removeClass("eu01");
                    $("div#cu").eq(2).removeClass("eu03");
                    $("div#cu").eq(3).removeClass("eu04");
                    $("div#cu").eq(4).removeClass("eu05");
                    $("div#cu").eq(5).removeClass("eu06");
                    $("div#cu").eq(1).addClass("eu02");
                    $(".f03-arr .f03-i").stop().animate({top:"-30px"},2000);
                    $(".f03-arr").stop().animate({top:"50px"},2000);
                    $(".left01 span").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f03-arr .f03-i").stop().animate({top:"-30px"},2000);
                    $(".f03-arr").stop().animate({top:"150px"},2000);
                    $(".left01 span").stop().animate({opacity:"0"},700);
                }
                if(cu == 2){
                    $("div#cu").eq(1).removeClass("eu02");
                    $("div#cu").eq(0).removeClass("eu01");
                    $("div#cu").eq(3).removeClass("eu04");
                    $("div#cu").eq(4).removeClass("eu05");
                    $("div#cu").eq(5).removeClass("eu06");
                    $("div#cu").eq(2).addClass("eu03");
                    $(".f02-arr .f02-i").stop().animate({top:"-30px"},2000);
                    $(".f02-arr").stop().animate({top:"50px"},2000);
                    $(".back span").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f02-arr .f02-i").stop().animate({top:"-30px"},2000);
                    $(".f02-arr").stop().animate({top:"150px"},2000);
                    $(".back span").stop().animate({opacity:"0"},700);
                }
                if(cu == 3){
                    $("div#cu").eq(1).removeClass("eu02");
                    $("div#cu").eq(0).removeClass("eu01");
                    $("div#cu").eq(2).removeClass("eu03");
                    $("div#cu").eq(4).removeClass("eu05");
                    $("div#cu").eq(5).removeClass("eu06");
                    $("div#cu").eq(3).addClass("eu04");
                    $(".f04-arr .f04-i").stop().animate({top:"-30px"},2000);
                    $(".f04-arr").stop().animate({top:"50px"},2000);
                    $(".right .f04-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f04-arr .f04-i").stop().animate({top:"-30px"},2000);
                    $(".f04-arr").stop().animate({top:"150px"},2000);
                    $(".right .f04-sp").stop().animate({opacity:"0"},700);
                }
                if(cu == 4){
                    $("div#cu").eq(1).removeClass("eu02");
                    $("div#cu").eq(0).removeClass("eu01");
                    $("div#cu").eq(3).removeClass("eu04");
                    $("div#cu").eq(2).removeClass("eu03");
                    $("div#cu").eq(5).removeClass("eu06");
                    $("div#cu").eq(4).addClass("eu05");
                    $(".f05-arr .f05-i").stop().animate({top:"-30px"},2000);
                    $(".f05-arr").stop().animate({top:"50px"},2000);
                    $(".top .f05-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f05-arr .f05-i").stop().animate({top:"-30px"},2000);
                    $(".f05-arr").stop().animate({top:"150px"},2000);
                    $(".top .f05-sp").stop().animate({opacity:"0"},700);
                }
                if(cu == 5){
                    $("div#cu").eq(1).removeClass("eu02");
                    $("div#cu").eq(0).removeClass("eu01");
                    $("div#cu").eq(3).removeClass("eu04");
                    $("div#cu").eq(4).removeClass("eu05");
                    $("div#cu").eq(2).removeClass("eu03");
                    $("div#cu").eq(5).addClass("eu06");
                    $(".f06-arr .f06-i").stop().animate({top:"-30px"},2000);
                    $(".f06-arr").stop().animate({top:"50px"},2000);
                    $(".bottom .f06-sp").stop().animate({opacity:"1"},2000);
                }else{
                    $(".f06-arr .f06-i").stop().animate({top:"-30px"},2000);
                    $(".f06-arr").stop().animate({top:"150px"},2000);
                    $(".bottom .f06-sp").stop().animate({opacity:"0"},700);
                }
            });
    
        $(".box #cu").on("click",function(){
            var cu = $(this).index();
            $(".box #cu").removeClass("du01");
            $(".box #cu").eq(cu).addClass("du01");
            
        });
    
//        pbox3
        var jjk = 0;
        $(".l-arr").click(function(){
            
//            console.log("zbc"+jjk);
//            var hjk = $(".smpt-box>ul").offset().left;
            $(".bigpt-box").removeClass("b-box");
            $(".bigpt-box").addClass("b-box02");
            $(".bigpt-box03").removeClass("ani");
            $(".bigpt-box02").removeClass("ani");
            $(".bigpt-box .view-box").removeClass("tobg");
            $(".bigpt-box .view-box").removeClass("tobg1");
            $(".bigpt-box>.mo-01>a:nth-child(1)").hide();
            $(".bigpt-box>.mo-01>a:nth-child(2)").hide();
            $(".ptwrap .l-linebox").removeClass("li-la");
            $(".ptwrap .t-linebox").removeClass("li-la2");
            $(".ptwrap .r-linebox").removeClass("li-ra2");
            $(".ptwrap .b-linebox").removeClass("li-ra");
            if(jjk >= 0 ){
                if(jjk == 0){
                    $(".smpt-box>ul").css("left","-108.2%");
                    $(".smpt-pager>span").removeClass("dot");
                    $(".smpt-pager>span").eq(1).addClass("dot");
                }
                if(jjk == 1){
                    $(".smpt-box>ul").css("left","-6%");
                    $(".smpt-pager>span").removeClass("dot");
                    $(".smpt-pager>span").eq(0).addClass("dot");
                }
                jjk++;
                if(jjk==2){jjk=0};
            }
            
            
        });
        $(".r-arr").click(function(){
            
//            console.log("zbc"+jjk);
//            var hjk = $(".smpt-box>ul").offset().left;
            $(".bigpt-box").removeClass("b-box");
            $(".bigpt-box").addClass("b-box02");
            $(".bigpt-box").removeClass("ani");
            $(".bigpt-box02").removeClass("ani");
            $(".bigpt-box .view-box").removeClass("tobg");
            $(".bigpt-box .view-box").removeClass("tobg1");
            $(".bigpt-box>.mo-01>a:nth-child(1)").hide();
            $(".bigpt-box>.mo-01>a:nth-child(2)").hide();
            $(".ptwrap .l-linebox").removeClass("li-la");
            $(".ptwrap .t-linebox").removeClass("li-la2");
            $(".ptwrap .r-linebox").removeClass("li-ra2");
            $(".ptwrap .b-linebox").removeClass("li-ra");
            if(jjk >= 0 ){
                if(jjk == 1){
                    $(".smpt-box>ul").css("left","-6%");
                    $(".smpt-pager>span").removeClass("dot");
                    $(".smpt-pager>span").eq(0).addClass("dot");
                }
                if(jjk == 0){
                    $(".smpt-box>ul").css("left","-108.2%");
                    $(".smpt-pager>span").removeClass("dot");
                    $(".smpt-pager>span").eq(1).addClass("dot");
                }
                jjk--;
                if(jjk==-1){jjk=1};
            }
            
            
        });
    
        $(".smpt-pager>span").click(function(){
            var dot = $(this).index();
            $(".bigpt-box").removeClass("b-box");
            $(".bigpt-box").addClass("b-box02");
            $(".bigpt-box").removeClass("ani");
            $(".bigpt-box02").removeClass("ani");
            $(".bigpt-box03").removeClass("ani");
            $(".bigpt-box .view-box").removeClass("tobg");
            $(".bigpt-box .view-box").removeClass("tobg1");
            $(".ptwrap .l-linebox").removeClass("li-la");
            $(".ptwrap .t-linebox").removeClass("li-la2");
            $(".ptwrap .r-linebox").removeClass("li-ra2");
            $(".ptwrap .b-linebox").removeClass("li-ra");
            $(".bigpt-box>.mo-01>a:nth-child(1)").hide();
            $(".bigpt-box>.mo-01>a:nth-child(2)").hide();
                if(dot == 1){
                    $(".smpt-box>ul").css("left","-108.2%");
                    $(".smpt-pager>span").removeClass("dot");
                    $(".smpt-pager>span").eq(1).addClass("dot");
                }
                if(dot == 0){
                    $(".smpt-box>ul").css("left","-6%");
                    $(".smpt-pager>span").removeClass("dot");
                    $(".smpt-pager>span").eq(0).addClass("dot");
                }
               
                
            
        });
    
        $(".bigpt-box>.mo-01>a").hide();
//        $(".bigpt-box>.mo-01>a:nth-child(2)").hide();
        $(".smpt-box>ul>li").click(function(){
            var vbox = $(this).index();
            if(vbox == 0){
                $(".bigpt-box .view-box").removeClass("tobg");
                $(".bigpt-box .view-box").addClass("tobg");
                $(".bigpt-box>.mo-01>a:nth-child(1)").show();
                $(".bigpt-box02").removeClass("ani");
                $(".bigpt-box02").addClass("ani");
                $(".bigpt-box").removeClass("b-box02");
                $(".bigpt-box").addClass("b-box");
                
            }else{
                $(".bigpt-box .view-box").removeClass("tobg");
                $(".bigpt-box>.mo-01>a").hide();
                $(".bigpt-box02").removeClass("ani");
                
            }
            if(vbox == 1){
                $(".bigpt-box .view-box").removeClass("tobg");
                $(".bigpt-box .view-box").addClass("tobg1");
                $(".bigpt-box>.mo-01>a:nth-child(2)").show();
                $(".bigpt-box03").removeClass("ani");
                $(".bigpt-box03").addClass("ani");
                $(".bigpt-box").removeClass("b-box02");
                $(".bigpt-box").addClass("b-box");
            }else{
                $(".bigpt-box .view-box").removeClass("tobg1");
                $(".bigpt-box>.mo-01>a:nth-child(2)").hide();
                $(".bigpt-box03").removeClass("ani");
            }
        });
        
    $(".smpt-box>ul>li").click(function(){
        $(".ptwrap .l-linebox").removeClass("li-la");
        $(".ptwrap .l-linebox").addClass("li-la");
        $(".ptwrap .t-linebox").removeClass("li-la2");
        $(".ptwrap .t-linebox").addClass("li-la2");
        $(".ptwrap .r-linebox").removeClass("li-ra2");
        $(".ptwrap .r-linebox").addClass("li-ra2");
        $(".ptwrap .b-linebox").removeClass("li-ra");
        $(".ptwrap .b-linebox").addClass("li-ra");
    });
    
    
});