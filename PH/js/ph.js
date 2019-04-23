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
    
        $(".box #cu").on("click",function(){
            var cu = $(this).index();
            $(".box #cu").removeClass("du01");
            $(".box #cu").eq(cu).addClass("du01");
            
        });
    
});