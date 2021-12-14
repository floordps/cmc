$(function () {
    $('#contactus-gform').on('submit', function () {
        var $form = $(this);
        $('#contactus-iframe').off().on('load', function() {
            $('.contactus-alert').removeClass('d-none');
            $form.get(0).reset();
            window.setTimeout( function() {
                $('.contactus-alert').addClass('d-none');
            }, 5000);
        });
    });
});