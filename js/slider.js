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
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.recipesSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.clientSlider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        autoplay:true,

        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    });
});