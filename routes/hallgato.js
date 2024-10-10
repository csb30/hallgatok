var renderMW = require('../middleware/render');
var getSzamitogepekMW = require('../middleware/szamitogepek/getSzamitogepek')

module.exports = function (app) {
    /**
     * Renders /hallgato (PCs belonging to a Student table)
     * Writes hallgatoid to console -> this will be used for query later
     */
    app.get('/hallgato/:hallgatoid',
        getSzamitogepekMW('hallgato==hallgatoid'),
        renderMW('example_hallgato.html')
    );
};