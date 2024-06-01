(function ($) {

    const $question = $('.question');
    const $questionSwipe = $('.question__swipe');

    let isDesktop = window.matchMedia("(width < 740px)").matches;


    /* Horizontal swipe */

    $('.question__control--left, .question__control--right').on('click', function () {
        let toScroll;
        if ($(this).hasClass('question__control--right')) {
            toScroll = isDesktop ? $(window).outerWidth() : '900px';
        }
        if ($(this).hasClass('question__control--left')) {
            toScroll = 0;
        }
        $questionSwipe.addClass('question__swipe--disable-snapping');
        $questionSwipe.animate({
            scrollLeft: toScroll
        }, 400, function () {
            $('.question__swipe').removeClass('question__swipe--disable-snapping');
        });
    });


    /* Vertical swipe */

    $('.question__control--top, .question__control--bottom').on('click', function () {
        let toScroll;
        if ($(this).hasClass('question__control--bottom')) {
            toScroll = $(window).outerHeight();
        }
        if ($(this).hasClass('question__control--top')) {
            toScroll = 0;
        }
        $question.addClass('question--disable-snapping');
        $question.animate({
            scrollTop: toScroll
        }, 400, function () {
            $('.question').removeClass('question--disable-snapping');
        });
    });

})(jQuery);
