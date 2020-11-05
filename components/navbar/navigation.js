$(document).ready(function () {
    "use strict";
    $('ul.navbar-nav > li').click(function (e) {
        if (!$(this).hasClass('disabled')) {
            $('ul.navbar-nav > li').removeClass('active');
            $(this).addClass('active');
        }
    });
});