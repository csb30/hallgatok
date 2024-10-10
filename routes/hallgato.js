var renderMW = require('../middleware/render');
var getSzamitogepekMW = require('../middleware/szamitogepek/getSzamitogepek')

module.exports = function (app) {
    /**
     * Renders /hallgato (PCs belonging to a Student table)
     */
    app.get('/hallgato/:hallgatoid',
        getSzamitogepekMW('hallgato==hallgatoid'),
        renderMW('example_hallgato.html')
    );
};