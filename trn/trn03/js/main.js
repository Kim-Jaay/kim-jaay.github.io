$(function () {

    $('.mainSlider').slick({
        arrows: true,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.slider02').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
    });


})