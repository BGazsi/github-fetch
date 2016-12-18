module.exports = function () {
    return function (req, res, next) {
        let headerArray = res.tpl.header.split(',');
        res.tpl.nextBtn = res.tpl.prevBtn = false;

        headerArray.forEach(value => {
            if(value.indexOf('rel="next"') !== -1) {
                res.tpl.nextBtn = true;
            }
            if(value.indexOf('rel="prev"') !== -1) {
                res.tpl.prevBtn = true;
            }
        });
        return next();
    };
};