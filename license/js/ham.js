const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});


$(".hamburger").click(function(){
    
    $(".hamburger>div:nth-child(1)").toggleClass("lr");
    $(".hamburger>div:nth-child(2)").toggleClass("lr1");
    $(".hamburger>div:nth-child(3)").toggleClass("lr2");
});