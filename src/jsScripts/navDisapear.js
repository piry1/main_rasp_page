function checkScroll() {
    var startY = $('.navbar').height(); //The point where the navbar changes in px
    
    if ($(window).scrollTop() < startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

$(window).on("scroll load resize", function () {
    checkScroll();
});
