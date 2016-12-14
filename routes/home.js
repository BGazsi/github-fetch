var fetchDataMW = require('../middlewares/fetchData');
var fetchNextPageDataMW = require('../middlewares/fetchNextPageData');
var renderTemplateMW = require('../middlewares/renderTemplate');

exports = module.exports = function(app) {
    app.use('/fetch/:page',
        fetchDataMW(),
        fetchNextPageDataMW(),
        renderTemplateMW('index')
    );
    app.use('/fetch',
        fetchDataMW(),
        fetchNextPageDataMW(),
        renderTemplateMW('index')
    )
};