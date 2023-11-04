(function ($) {

    $('.answer').on('click', function () {
        $('.answer').not($(this)).removeClass('answer--current');
        $(this).toggleClass('answer--current');
    });

})(jQuery);
