(function ($) {

    let isDesktop = window.matchMedia("(width < 740px)").matches;

    $('.question__control').on('click', function () {
        const $questionSwipe = $(this).parents('.question__stage').find('.question__swipe');
        console.log($questionSwipe)
        let toScroll;
        if ($(this).hasClass('question__control--next')) {
            toScroll = isDesktop ? $(window).outerWidth() : '900px';
        }
        if ($(this).hasClass('question__control--prev')) {
            toScroll = 0;
        }
        $questionSwipe.addClass('question__swipe--disable-snapping');
        $questionSwipe.animate({
            scrollLeft: toScroll
        }, 400, function () {
            $questionSwipe.removeClass('question__swipe--disable-snapping');
        });
    });

})(jQuery);
