// var mock = require('../public/mockRepos');

module.exports = function () {
    var fetch = require('node-fetch');

    return function (req, res, next) {
        let pageNumber = req.params['page'] || 1;
        res.tpl.pageNumber = pageNumber;
        // res.tpl.repos = mock();
        // res.tpl.prevBtn = pageNumber > 1;
        // return next();

        fetch('https://api.github.com/users/addyosmani/repos?page=' + pageNumber)
            .then(function(res) {
                return res.text();
            }).then(function(repos) {
                res.tpl.repos = JSON.parse(repos);
                res.tpl.prevBtn = pageNumber > 1;
                return next();
        });
    };

};