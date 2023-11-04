(function ($) {

    let isDesktop = window.matchMedia("(width < 740px)").matches;

    $('.question__control').on('click', function () {
        let toScroll;
        if ($(this).hasClass('question__control--next')) {
            toScroll = isDesktop ? $(window).outerWidth() : '900px';
        }
        if ($(this).hasClass('question__control--prev')) {
            toScroll = 0;
        }
        $('.question__swipe').addClass('question__swipe--disable-snapping');
        $('.question__swipe').animate({
            scrollLeft: toScroll
        }, 400, function () {
            $('.question__swipe').removeClass('question__swipe--disable-snapping');
        });
    });

})(jQuery);
