function hamburger() {
    $('.navbar').toggleClass('show-mobile-nav');
    $('.burger-nav').toggleClass('show-mobile-links');
}

$(".burger-link").on("click", function() {
    const burgerGroup = $(this).next();
    const arrow = $(this).children();
    burgerGroup.toggleClass('show-burger-group');
    arrow.toggleClass('flip-arrow');
})

$(".navbar-li").on("click mouseenter", function() {
    const list = $(this).children().eq(1);
    const arrow = $(this).children().eq(0).children();
    list.toggleClass('show-navbar-group');
    arrow.toggleClass('flip-arrow');
})

$(".navbar-li").on("click mouseleave", function() {
    const list = $(this).children().eq(1);
    const arrow = $(this).children().eq(0).children();
    list.toggleClass('show-navbar-group');
    arrow.toggleClass('flip-arrow');
})