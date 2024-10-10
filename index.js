var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static('static'));

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
});

require('./routes/hallgatok')(app);
require('./routes/szamitogepek')(app);
require('./routes/hallgato')(app);

var server = app.listen(3000, function (){
    console.log('Running on :3000');
})