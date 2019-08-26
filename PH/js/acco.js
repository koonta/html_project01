$(function(){
    
    var h = $(this).index();
    console.log(h);
    $(".item").on("click", function(){
        $(".item>div").addClass("sopen");
    });
    
});