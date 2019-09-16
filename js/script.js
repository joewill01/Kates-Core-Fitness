$(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
        $(".nav-holder").addClass("nav-holder-onscroll");
        $(".nav-logo").addClass("nav-logo-onscroll");
        $(".nav-link").addClass("nav-link-onscroll");
    } else if($(window).scrollTop() < 60) {
        $(".nav-holder").removeClass("nav-holder-onscroll");
        $(".nav-logo").removeClass("nav-logo-onscroll");
        $(".nav-link").removeClass("nav-link-onscroll");
    }
});
