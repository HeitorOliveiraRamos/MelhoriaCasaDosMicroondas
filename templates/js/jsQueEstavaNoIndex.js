// Código que acredito ser para funcionar com o Google analitcs
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-92072355-1');

// Código usado para o banner
jQuery(window).on('load', function () {
    jQuery('#vt_nivo_slider94').nivoSlider({
    effect: 'fold', // Specify sets like: 'fold,fade,sliceDown'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 500, // Slide transition speed
    pauseTime: 3000, // How long each slide will show
    startSlide: 1, // Set starting Slide (0 index)
    directionNav: true, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    pauseOnHover: true, // Stop animation while hovering
    manualAdvance: false, // Force manual transitions
    prevText: 'Prev', // Prev directionNav text
    nextText: 'Next', // Next directionNav text
    randomStart: true, // Start on a random slide
    });
});