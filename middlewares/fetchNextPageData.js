// var mock = require('../public/mockRepos');

module.exports = function () {
    var fetch = require('node-fetch');

    return function (req, res, next) {
        let pageNumber = req.params['page'] || 1;
        // res.tpl.reposNext = mock();
        // res.tpl.nextBtn = !!res.tpl.reposNext;
        // return next();

        fetch('https://api.github.com/users/addyosmani/repos?page=' + (parseInt(pageNumber) + 1))
            .then(function (res) {
                return res.text();
            }).then(function (reposNext) {
            res.tpl.reposNext = JSON.parse(reposNext);
            res.tpl.nextBtn = !!res.tpl.reposNext.length;
            return next();
        });
    }
};