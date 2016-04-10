/*jslint browser: true*/
/*global $, jQuery, alert*/

(function() {
  $(function() {
    return Boxgrid.init();
  });

}).call(this);

$('body').on('click', '.js-expand-link', function (event) {
    
    $('.expandElement').toggleClass('expand');
    return false;
});
