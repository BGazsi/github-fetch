// var mock  = require('../public/mockDetails');

module.exports = function () {
    return function (req, res, next) {
        let FetchClass = require('../classes/FetchClass');
        let fetcher = new FetchClass('https://api.github.com/repos/addyosmani/' + req.params['name']);
        fetcher.collect(req, res, next);
    };
};