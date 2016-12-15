$(document).ready(function() {
    var pageNumber = $('.main-content').data('page');
    if(pageNumber) {
        sessionStorage.setItem('pageNumber', pageNumber);
    }

    $('[data-component~="back-btn"]').on('click', function() {
        window.location = '/fetch/' + sessionStorage.getItem('pageNumber');
    });
});