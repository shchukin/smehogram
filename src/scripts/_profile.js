(function($) {

    const $html = $('html');

    $('.action--profile').on('click', function (event) {
        $html.addClass('profile-expanded');
    });



    $('.profile__close').on('click', function (event) {
        event.preventDefault();
        $html.removeClass('profile-expanded');
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $html.removeClass('profile-expanded');
        }
    });

    /* Клик вне .profile */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.profile, .action--profile').length) {
            $html.removeClass('profile-expanded');
        }
    });

})(jQuery);
