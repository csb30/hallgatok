var redirectMW = require('../middleware/redirect');
var renderMW = require('../middleware/render');
var getSzamitogepekMW = require('../middleware/szamitogepek/getSzamitogepek');
var addSzamitogepekMW = require('../middleware/szamitogepek/addSzamitogepek');
var deleteSzamitogepekMW = require('../middleware/szamitogepek/deleteSzamitogepek');
var updateSzamitogepekMW = require('../middleware/szamitogepek/updateSzamitogepek');

module.exports = function (app) {
    /**
     * Renders /szamitogepek (PCs table)
     */
    app.get('/szamitogepek',
        getSzamitogepekMW(),
        renderMW('szamitogepek')
    );

    /**
     * Adds a PC to the db
     */
    app.post('/szamitogepek/add',
        addSzamitogepekMW(),
        redirectMW('/szamitogepek')
    );

    /**
     * Deletes a PC from db
     */
    app.get('/szamitogepek/delete/:szamitogepid',
        deleteSzamitogepekMW(),
        redirectMW('/szamitogepek')
    );

    /**
     * Updates a PC in db
     */
    app.post('/szamitogepek/update',
        updateSzamitogepekMW(),
        redirectMW('/szamitogepek')
    );
};