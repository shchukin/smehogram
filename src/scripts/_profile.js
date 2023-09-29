(function($) {

    const $profile = $('.profile');

    $('.action--profile').on('click', function (event) {
        $profile.addClass('profile--expanded');
    });



    $('.profile__close').on('click', function (event) {
        event.preventDefault();
        $profile.removeClass('profile--expanded');
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $profile.removeClass('profile--expanded');
        }
    });

    /* Клик вне .profile */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.profile, .action--profile').length) {
            $profile.removeClass('profile--expanded');
        }
    });

})(jQuery);
