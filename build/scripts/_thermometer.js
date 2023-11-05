(function ($) {
    $('.thermometer__item').on('click', function () {
        $(this).siblings('.thermometer__item').removeClass('thermometer__item--current');
        $(this).toggleClass('thermometer__item--current');
    });
})(jQuery);
