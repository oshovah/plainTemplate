Modernizr.load([
  {
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
    complete: function () {
      if ( !window.jQuery ) {
        Modernizr.load('assets/javascripts/jquery-1.9.1.min.js');
      }
    }
  }
]);

jQuery(document).ready(function() {
  /* Replace SVG with PNG on Browser with no SVG support */
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }
});