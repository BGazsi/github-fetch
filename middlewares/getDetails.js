// var mock  = require('../public/mockDetails');
module.exports = function () {
    var fetch = require('node-fetch');

    return function (req, res, next) {
        // res.tpl.details = mock();
        // return next();

        fetch('https://api.github.com/repos/addyosmani/' + req.params['name'])
            .then(function(res) {
                return res.text();
            }).then(function(repos) {
            res.tpl.details = JSON.parse(repos);
            return next();
        });
    }
};