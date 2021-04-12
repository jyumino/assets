$(window).on('load', function() {
    $('.owl-carousel').owlCarousel({
        margin: 15,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        },
        lazyLoad: true          
    });
    console.log(1);
});