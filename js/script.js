/*jslint browser: true*/
/*global $, jQuery, alert*/



$('body').on('click', '.js-expand-link', function (event) {
    
    $('.expandElement').toggleClass('expand');
    return false;
});
