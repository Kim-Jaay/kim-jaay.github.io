$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    });


    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
    });

    $('.slider02').slick({
        slidesToShow: 3,
        autoplay: true,
        pauseOnHover: false,
    });
})