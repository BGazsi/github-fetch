var fetchDataMW = require('../middlewares/fetchData');
var renderTemplateMW = require('../middlewares/renderTemplate');
var getDetailsMW = require('../middlewares/getDetails');
var setButtonsMW = require('../middlewares/setButtons');
var redirectToHomeMW = require('../middlewares/redirectToHome');

exports = module.exports = app => {
    app.use('/fetch/:page',
        fetchDataMW(),
        setButtonsMW(),
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