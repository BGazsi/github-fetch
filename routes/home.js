var fetchDataMW = require('../middlewares/fetchData');
var fetchNextPageDataMW = require('../middlewares/fetchNextPageData');
var renderTemplateMW = require('../middlewares/renderTemplate');
var getDetailsMW = require('../middlewares/getDetails');
var redirectToHomeMW = require('../middlewares/redirectToHome');

exports = module.exports = function(app) {
    app.use('/fetch/:page',
        fetchDataMW(),
        fetchNextPageDataMW(),
        renderTemplateMW('index')
    );
    app.use('/details/:name',
        getDetailsMW(),
        renderTemplateMW('details')
    );
    app.use('/fetch',
        redirectToHomeMW()
    );
    app.use('/',
        redirectToHomeMW()
    )
};