var hallgatokRedirectMW = require('../middleware/hallgatok/hallgatokRedirect');
var renderMW = require('../middleware/render');
var getHallgatokMW = require('../middleware/hallgatok/getHallgatok');

module.exports = function (app) {
    /**
     * Redirects to /hallgatok
     */
    app.get('/',
        hallgatokRedirectMW()
    );

    /**
     * Renders /hallgatok (students table)
     */
    app.get('/hallgatok',
        getHallgatokMW(),
        renderMW('hallgatok.html')
    );
};