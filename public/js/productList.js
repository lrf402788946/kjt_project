/**
 * Created by lenovo on 2017/5/12.
 */
//$(document).ready(function() {
//
//    $('.listUl .list1').each(function () {
//        $(this).hover(function() {
//            var meng = $(".meng");
//            meng.style.display = "block";
//        })
//
//    })
//})

$(document).ready(function(){

    $('.listUl .list1').each(function(){

        $(this).find('.meng1').css('top', -$(this).height());

        $(this).hover(function(){
            $(this).find('.meng1').animate({
                'top': '0'
            },300);
        },function(){
            $(this).find('.meng1').animate({
                'top':$(this).height()
            },{
                duration: 300,
                complete:function(){
                    $(this).css('top', -174+"px")
                }
            });
        });

    });

});