class FetchClass {
    constructor(url) {
        this.url = url;
        this.fetch = require('node-fetch');
    }
    collect(req, res, next) {
        this.fetch(this.url)
        .then(result => {
            res.tpl.header = result.headers.get('link');
            return result.text()
        }).then(data => {
            res.tpl.data = JSON.parse(data);
            return next();
        })
    }
}

module.exports = FetchClass;