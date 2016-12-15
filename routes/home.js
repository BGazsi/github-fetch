var fetchDataMW = require('../middlewares/fetchData');
var renderTemplateMW = require('../middlewares/renderTemplate');
var getDetailsMW = require('../middlewares/getDetails');
var redirectToHomeMW = require('../middlewares/redirectToHome');

exports = module.exports = app => {
    app.use('/fetch/:page',
        fetchDataMW(),
        renderTemplateMW('index')
    );
    app.use('/details/:name',
        getDetailsMW(),
        renderTemplateMW('details')
    );
    app.use('/fetch',
        redirectToHomeMW()
    );

    //a favicon keres beesett a /-re, ezert csinaltam ezt a hacket
    app.use('/favicon.ico',
    () => {
        return false;
    });
    app.use('/',
        redirectToHomeMW()
    )
};