$(document).ready(function () 
{
    $(".js--scroll-to-home").click(function () {
        $("html,body").animate({ scrollTop: $(".js--home").offset().top }, 1500);
    });
    $(".js--contact").click(function () {
        $("html,body").animate({ scrollTop: $(".js--contacthere").offset().top }, 1500);
    });
    $(".js--about").click(function () {
        $("html,body").animate({ scrollTop: $(".js--abouthere").offset().top }, 1500);
    });
});
