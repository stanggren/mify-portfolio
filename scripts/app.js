// /**
//  * runs main() onload
//  */
window.onload = main;

// /**
//  * functions that needs to be run on initial page load
//  */
function main() {
    startSlideShowAnimation();
    // renderProject();
}

/**
 * returns window pageYOffset (number of pixels the document is currently scrolled along the vertical axis)
 */
function getScrollTop(){
    return pageYOffset;
}

/**
 * Displays header on 0 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 0){
        highlightText('header');
    } 
})

/**
 * Displays skills wrapper  on 600 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 1000){
        highlightText('works');
    } 
})


/**
 * Displays contact wrapper on 2350 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 1780){
        highlightText('contact');
    } 
})

/**
 * On click event (sidebar). Scrolls down to header wrapper
 */
$("#header").click(function() {
    $('html,body').animate({
        scrollTop: $("#header-wrapper").offset().top},
        'slow');
});

/**
 * On click event (sidebar). Scrolls down to skills wrapper
 */
$("#works").click(function() {
    $('html,body').animate({
        scrollTop: $("#image-gallery").offset().top},
        'slow');
});

/**
 * On click event (sidebar). Scrolls down to contact wrapper
 */
$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-title").offset().top},
        'slow');
});





