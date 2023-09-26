(function($) {

    $('.achievements__item--achieved').on('click', function (event) {
        $('.achievements').addClass('achievements--expanded')
        event.stopPropagation(); /* чтобы не сработало закрытие по клику вне модалки из (1) */
    });


    $('.achievements__close').on('click', function (event) {
        event.preventDefault();
        $('.achievements').removeClass('achievements--expanded');
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.achievements').removeClass('achievements--expanded');
        }
    });


    /* Клик вне .achievements__popup (1) */

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.achievements__popup').length) {
            $('.achievements').removeClass('achievements--expanded');
        }
    });

})(jQuery);
