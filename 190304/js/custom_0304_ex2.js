$(document).ready(function(){
	
    
});

   
//1번
//function add(name,age){
//
//	var header = document.createElement('h3');
//    var textNode = document.createTextNode('내이름은 '+name+'이며, 나이는 '+age+'입니다.');
//    header.appendChild(textNode);
//    document.body.appendChild(header);
//
//}
//
//function imgAdd(imgName){
//    
//    var img = document.createElement('img');
//    
//    img.src = '../190304/img/'+imgName;
//    img.width = "400";
//    img.height = "300";
//    document.body.appendChild(img);
//}
//
//function imgAdd(imgName){
//    
//    var img = document.createElement('img');
//    
//    img.src = '../190304/img/'+imgName;
//    img.width = "400";
//    img.height = "300";
//    document.body.appendChild(img);
//}
// function imgUp(){
//     
//     var img = document.getElementsByTagName('img')
//     var Length = img.length;
//     
//     for(var i=0; i<Length;i++){
//         img[i].width += 100;
//         img[i].height += 100;
//     }
//     
// }
//
//function del(){
//    
//    var bodyEl = document.getElementsByTagName('img')[0];
//    var header = document.getElementsByTagName('h3')[0];
//    bodyEl.remove(bodyEl);
//    header.remove(header);
//}

//-------------2번

//var nStartX;
//var nEndX;
//var nCurrentX;
//var nTimeId;
//var nStep;
//var objIMG;
//
//window.onload = function(){
//    init();
//    initEventListener();
//}
//function init(){
//    var objBar = document.getElementById("bar");
//    nStartX = objBar.offsetLeft;
//    nEndX = objBar.clientWidth + nStartX -120;
//    
//    nCurrentX = nStartX;
//    nStep = 2;
//    nTimeId = 0;
//    
//    objIMG = document.getElementById("img");
//}
// function initEventListener(){
//     document.getElementById("btn_start").addEventListener("click",function(){
//         start();
//     });
//     document.getElementById("btn_stop").addEventListener("click",function(){
//         stopMove();
//     });
// }
//function start(){
//    if(nTimeId == 0){
//        nTimeId = setInterval(startMove,30);
//    }
//}
//
//function startMove(){
//    nCurrentX += nStep;
//    
//    if(nCurrentX > nEndX){
//        nCurrentX = nEndX;
//        nStep = -2;
//        objIMG.className="view";
//    }
//    if(nCurrentX < nStartX){
//        nCurrentX = nStartX;
//        nStep = 2;
//        objIMG.className="";
//    }
//    
//    objIMG.style.left = nCurrentX + "px";
//}
//function stopMove(){
//    if(nTimeId !=0){
//        clearInterval(nTimeId);
//        nTimeId = 0;
//    }
//}


$(document).ready(function(){
    var $fish = $("#img");
    
var step = 2;
var timerID = 0;
$("#btn_start").click(function(){
    if(timerID==0){
        timerID = setInterval(function(){
            var x = $fish.position().left+step;
            if(x >= 420){
                x=420;
                $fish.css("transform", "rotateY(189deg)");
                step=-2;
            }
            if(x<50){
                x=50;
                $fish.css("transform", "rotateY(0deg)");
                step=2;
            }
            $fish.css("left",x);
        }, 100);
    }
});

$("#btn_stop").click(function(){
    clearInterval(timerID);
    timerID=0;
});


});






















