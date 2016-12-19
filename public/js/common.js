document.addEventListener('DOMContentLoaded', function() {
    var pageNumber = document.querySelector('.main-content').getAttribute('data-page');
    if (pageNumber) {
        sessionStorage.setItem('pageNumber', pageNumber);
    }

    var backBtn = document.querySelector('[data-component~="back-btn"]');

    if(backBtn) {
        backBtn.addEventListener('click', function () {
            window.location = '/fetch/' + sessionStorage.getItem('pageNumber');
        });
    }

}, false);