var renderMW = require('../middleware/render');
var getSzamitogepekMW = require('../middleware/szamitogepek/getSzamitogepek');

module.exports = function (app) {
    /**
     * Renders /szamitogepek (PCs table)
     */
    app.get('/szamitogepek',
        getSzamitogepekMW(),
        renderMW('szamitogepek.html')
    );
};