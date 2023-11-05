(function ($) {

    $('.answer--selectable').on('click', function () {
        $('.answer--selectable').not($(this)).removeClass('answer--current');
        $(this).toggleClass('answer--current');
    });

})(jQuery);
