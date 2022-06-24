$(function () {

    // 바뀌고 난 직후 시점
    $('.main_slider').on('init reInit afterChange', function(){
        var here = $('.slick-current');
        here.addClass('on').siblings().removeClass('on')
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

})

