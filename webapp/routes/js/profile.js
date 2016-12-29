var textMore = $(".comment li strong");
// textMore.onoff = true;
textMore.tap( function (e) {
    e.preventDefault();
    $(this).siblings("p").toggleClass("more");
})
