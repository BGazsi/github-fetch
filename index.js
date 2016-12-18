var express = require('express');
var compression = require('compression');

var app = express();
app.set('view engine', 'ejs');
app.use(compression());
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));
app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

require('./routes/home')(app);

app.listen(5000, function() {
    console.log('Node app is running on port 5000');
});