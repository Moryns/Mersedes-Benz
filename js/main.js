$(function(){
    $('.design-slider').slick({
        dots:false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-prev" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-next" src="images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});