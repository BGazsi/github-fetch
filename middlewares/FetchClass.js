class FetchClass {
    constructor(pageNumber, user) {
        this.pageNumber = pageNumber;
        this.user = user;
        this.fetch = require('node-fetch');
    }
    collect(req, res, next) {
        this.fetch('https://api.github.com/users/' + this.user + '/repos?page=' + (parseInt(this.pageNumber)))
            .then(res => {
                return res.text();
            }).then(repos => {
                res.tpl.repos = JSON.parse(repos);
            // res.tpl.repos = require('../public/mockRepos')();
        }).then(function(){return this.collectNextPage(req, res, next)}.bind(this))
    }

    collectNextPage(req, res, next) {
        this.fetch('https://api.github.com/users/' + this.user + '/repos?page=' + (parseInt(this.pageNumber) + 1))
            .then(res => {
                return res.text();
            }).then(reposNext => {
            res.tpl.reposNext = JSON.parse(reposNext);
            // res.tpl.reposNext = require('../public/mockRepos')();
            res.tpl.nextBtn = !!res.tpl.reposNext.length;
            return next();
        });
    }
}

module.exports = FetchClass;