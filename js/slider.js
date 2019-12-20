$(document).ready(function(){
    $('.slickSlider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        
    });
    $('.choca').on('click',function(){
        $(".slickSlider").slick('slickNext');
    });

    $('.birthdaySlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        prevArrow: $('.birthPrev'),
        nextArrow: $('.birthNext'),
    });
    $('.recipesSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
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