var redirectMW = require('../middleware/redirect');
var renderMW = require('../middleware/render');
var getHallgatoMW = require('../middleware/hallgato/getHallgato')
var deleteHallgatoSzamitogepMW = require('../middleware/hallgato/deleteHallgatoSzamitogep')
var addHallgatoSzamitogepMW = require('../middleware/hallgato/addHallgatoSzamitogep')
const hallgato = require('../models/hallgato');
const szamitogep = require('../models/szamitogep');

module.exports = function (app) {
    const objRepo = {hallgato: hallgato, szamitogep: szamitogep};
    /**
     * Renders /hallgato (PCs belonging to a Student table)
     * Writes hallgatoid to console -> this will be used for query later
     */
    app.get('/hallgato/:hallgatoid',
        getHallgatoMW(objRepo),
        renderMW('hallgato')
    );

    /**
     * Deletes a PC from a hallgato (PC will still exist)
     */
    app.get('/hallgato/:hallgatoid/delete/:szamitogepid',
        deleteHallgatoSzamitogepMW(objRepo),
    );

    /**
     * Assigns a PC to a hallgato
     */
    app.post('/hallgato/:hallgatoid/add',
        addHallgatoSzamitogepMW(objRepo),
    );
};