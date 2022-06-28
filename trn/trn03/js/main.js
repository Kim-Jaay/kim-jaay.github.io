$(function () {

    $('.mainSlider').slick({
        arrows: true,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.slider02').slick({
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
    });

    $('.slider05').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
    });


    $('.slider05').on('init afterChange', function (e, s, c) {
        $('.slider05 figure.slick-current').addClass('on').siblings().removeClass('on');
    });

    $('.arrows05 i:nth-child(1)').on('click', function () {
        $('.slider05').slick('slickPrev');
    });

    $('.arrows05 i:nth-child(2)').on('click', function () {
        $('.slider05').slick('slickNext');
    });




});