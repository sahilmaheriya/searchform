$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle')
    })
    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times')
        $('.nav').removeClass('nav-toggle')
    })
})
