$(document).foundation();

$(document).ready(function($) {
    $('section.landing').addClass('is-animating');

    $("#loginMessage").hide();

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        $("#loginMessage").fadeIn('fast');
    });

    $('#loginModal').on('closed.zf.reveal', function() {
        console.log('closeme');
        $("#loginMessage").fadeOut('fast');
    });
});
