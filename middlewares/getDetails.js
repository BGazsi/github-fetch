module.exports = function () {
    return function (req, res, next) {
        let FetchClass = require('../classes/FetchClass');
        let CONSTANTS = require('../config/constants');
        let fetcher = new FetchClass(CONSTANTS.DETAILS_URL + req.params['name']);
        fetcher.collect(req, res, next);
    };
};