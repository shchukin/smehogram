(function($) {

    $('.bubble-handler').on('click', function () {
        var $target = $(this).parents('.bubble-context').find('.bubble');
        $('.bubble--visible').not($target).removeClass('bubble--visible'); /* закрываем все остальные */
        $target.toggleClass('bubble--visible');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.bubble, .bubble-handler').length) {
            $('.bubble--visible').removeClass('bubble--visible');
        }
    });

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.bubble--visible').removeClass('bubble--visible');
        }
    });


})(jQuery);
