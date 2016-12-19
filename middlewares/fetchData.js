module.exports = function () {
    return function (req, res, next) {
        let FetchClass = require('../classes/FetchClass');
        let CONSTANTS = require('../config/constants');
        let pageNumber = req.params['page'] || 1;
        let fetcher = new FetchClass(CONSTANTS.REPOS_URL + (parseInt(pageNumber)));

        res.tpl.pageNumber = pageNumber;

        fetcher.collect(req, res, next);
    };

};