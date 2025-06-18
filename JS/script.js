$(document).ready(function(){
    $('.btnMobile').on('click', function(){
        $('#mobileMenu').toggleClass('active');
        $('.btnMobile').find('i').toggleClass("fa-x");
    });
});

