$(document).ready(function() {
    $('.slider').slick({
        dots: true,
    });

    $('.navbar-toggler').click(function (){
        $('.fixOverlay__onMobile').removeClass('d-none');
    });

    $('.vj-navbar__onMobile-close').click(function (){
        $('.fixOverlay__onMobile').addClass('d-none');
        $('.navbar-collapse').removeClass('show');
    });
});
