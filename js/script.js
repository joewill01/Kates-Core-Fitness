$(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
        $(".nav-holder").addClass("nav-holder-onscroll");
        $(".nav-holder-mobile").addClass("nav-holder-onscroll");
        $(".nav-logo").addClass("nav-logo-onscroll");
        $(".nav-link").addClass("nav-link-onscroll");
    } else if($(window).scrollTop() < 60) {
        $(".nav-holder").removeClass("nav-holder-onscroll");
        $(".nav-holder-mobile").removeClass("nav-holder-onscroll");
        $(".nav-logo").removeClass("nav-logo-onscroll");
        $(".nav-link").removeClass("nav-link-onscroll");
    }
});

if ($(window).width() < 550) {
     $(".nav-holder-mobile").css("display", "block");
     $(".nav-holder").css("display", "none");
  }
 else {
    $(".nav-holder-mobile").css("display", "none");
     $(".nav-holder").css("display", "block");
 }

$(window).resize(function() {
  if ($(window).width() < 550) {
     $(".nav-holder-mobile").css("display", "block");
     $(".nav-holder").css("display", "none");
  }
 else {
    $(".nav-holder-mobile").css("display", "none");
     $(".nav-holder").css("display", "block");
 }
});

 function hideMenu() {
     $("#hamburger-toggle").prop("checked", false);
 }