$(document).ready(function(){
    $(".amallbtn").each(function(){
        $(this).prepend("<i class='sbg'></i>")
    })
    function getMousePos(event,obj) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x - $(obj).offset().left, 'y': y - $(obj).offset().top};
    }
    $(".amallbtn").mousemove(function(){
        var event = window.event;
        $(this).find(".sbg").css({
            "top":getMousePos(event,this).y,
            "left":getMousePos(event,this).x
        })
    })


    $(".header .menu").click(function(){
        $(this).toggleClass("on")
        if($(this).hasClass("on")){
            $(".header .close").show()
        }else{
            $(".header .close").hide()
        }
        $(".header .nav").fadeToggle(200)
        $(".header .btn").fadeOut(200)
    })
    $(".header .user").click(function(){
        $(this).toggleClass("on")
        if($(this).hasClass("on")){
            $(".header .close").show()
        }else{
            $(".header .close").hide()
        }
        $(".header .btn").fadeToggle(200)
        $(".header .menu").removeClass("on")
        $(".header .nav").fadeOut(200)
    })
    $(".header .close").click(function(){
        $(".header .menu,.header .user").removeClass("on")
        $(".header .btn").fadeOut(200)
        $(".header .nav").fadeOut(200)
        $(this).hide()
    })
    $(".header .nav li").each(function(){
        if($(this).find("dl").length!=0){
            $(this).append("<i></i>")
        }
    })
    $(".header .nav li i").click(function(){
        $(this).toggleClass("a").siblings("dl").slideToggle(200)
    })
});