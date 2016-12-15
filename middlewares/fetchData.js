// var mock = require('../public/mockRepos');
var FetchClass = require('./FetchClass');

module.exports = function () {
    return function (req, res, next) {
        let pageNumber = req.params['page'] || 1;
        let fetcher = new FetchClass(pageNumber, 'addyosmani');

        res.tpl.pageNumber = pageNumber;
        res.tpl.prevBtn = pageNumber > 1;

        fetcher.collect(req, res, next);
    };

};