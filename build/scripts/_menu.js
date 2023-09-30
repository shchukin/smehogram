(function($) {

    const $html = $('html');

    $('.action--menu').on('click', function (event) {
        $html.addClass('menu-expanded');
    });

    $('.menu__close').on('click', function (event) {
        event.preventDefault();
        $html.removeClass('menu-expanded');
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $html.removeClass('menu-expanded');
        }
    });

    /* Клик вне .menu */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu, .action--menu').length) {
            $html.removeClass('menu-expanded');
        }
    });

})(jQuery);
