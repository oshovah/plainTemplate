// My JavaScript
jQuery(document).ready(function() {

  // Replace SVG with PNG on Browser with no SVG support
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }

  // Insert Custom JS

});