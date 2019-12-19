$(document).ready(function(){
    $('.slickSlider').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,

        centerMode: true,
        centerPadding: '5%',
        slidesToShow: 1,

    });
    $('.birthdaySlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        // autoplay:true,
        // autoplaySpeed:3000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    $('.recipesSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        // autoplay:true,
        // autoplaySpeed:3000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    $('.clientSlider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        autoplay:true,
    });
});