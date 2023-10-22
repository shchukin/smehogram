(function ($) {
    $(function () {

        /*
         * Блокирование страницы
         */

        var documentWidthWithScroll = 0;
        var documentWidthWithoutScroll = 0;
        var scrollWidth = 0;

        var $html = $('html');


        function lockPage() {
            if (!$html.hasClass('html-lock')) {
                documentWidthWithScroll = $(window).width();
                $html.addClass('html-lock');
                documentWidthWithoutScroll = $(window).width();
                $html.css('padding-right', (documentWidthWithoutScroll - documentWidthWithScroll) + 'px');
            }
        }

        function unlockPage() {
            if ($html.hasClass('html-lock')) {
                $html.css('padding-right', '');
                $html.removeClass('html-lock');
            }
        }


        /*
         * Popup
         */

        function popupShow(popup) {
            lockPage();
            popup.css('display', 'block');
            popup.scrollTop(0);
        }

        function popupHide(popup) {
            if (!popup) { // Если закрываем по Esc. В этом случае закрываем все открытые модалки
                popup = $('.popup');
            }

            popup.css('display', 'none');
            unlockPage();
        }


        /* Показываем по клику на [data-popup-show] */

        $('[data-popup-show]').on('click', function (event) {
            event.preventDefault();
            popupHide(); // Закрываем все остальные попапы
            popupShow($($(this).attr('href')));
        });


        /* Закрываем по клику на [data-popup-close] */

        $('[data-popup-close]').on('click', function (event) {
            event.preventDefault();
            popupHide($(this).parents('.popup'));
        });


        /* Закрываем по клику в фон */

        $('.popup').on('click', function (event) {
            if (!$(event.target).closest('.popup__slot').length) {
                popupHide($('.popup'));
            }
        });


        /* Закрываем по Esc */

        $(document).on('keyup', function (event) {
            if (event.keyCode === 27) {
                popupHide();
            }
        });

    });
})(jQuery);

