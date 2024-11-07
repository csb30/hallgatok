var redirectMW = require('../middleware/redirect');
var renderMW = require('../middleware/render');
var getHallgatokMW = require('../middleware/hallgatok/getHallgatok');
var addHallgatokMW = require('../middleware/hallgatok/addHallgatok');
var deleteHallgatokMW = require('../middleware/hallgatok/deleteHallgatok');
var updateHallgatokMW = require('../middleware/hallgatok/updateHallgatok');
const hallgato = require('../models/hallgato');
const szamitogep = require('../models/szamitogep');

module.exports = function (app) {
    const objRepo = {hallgato: hallgato, szamitogep: szamitogep};

    /**
     * Redirects to /hallgatok
     */
    app.get('/',
        redirectMW('/hallgatok')
    );

    /**
     * Renders /hallgatok (students table)
     */
    app.get('/hallgatok',
        getHallgatokMW(),
        renderMW('hallgatok')
    );

    /**
     * Adds a hallgato to the db
     */
    app.post('/hallgatok/add',
        addHallgatokMW(),
        redirectMW('/hallgatok')
    );

    /**
     * Deletes a hallgato from db
     */
    app.get('/hallgatok/delete/:hallgatoid',
        deleteHallgatokMW(),
        redirectMW('/hallgatok')
    );

    /**
     * Updates a hallgato in db
     */
    app.post('/hallgatok/update',
        updateHallgatokMW(),
        redirectMW('/hallgatok')
    );
};