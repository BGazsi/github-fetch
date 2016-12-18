// var mock = require('../public/mockRepos');

module.exports = function () {
    return function (req, res, next) {
        let FetchClass = require('./FetchClass');
        let pageNumber = req.params['page'] || 1;
        let fetcher = new FetchClass('https://api.github.com/users/addyosmani/repos?page=' + (parseInt(pageNumber)));

        res.tpl.pageNumber = pageNumber;

        fetcher.collect(req, res, next);
    };

};