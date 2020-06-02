jQuery(document).ready(function() {
    var btn = $('#button');
    btn.hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '400');
    });

});