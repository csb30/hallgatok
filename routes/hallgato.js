var redirectMW = require('../middleware/redirect');
var renderMW = require('../middleware/render');
var getHallgatoMW = require('../middleware/hallgato/getHallgato')
var deleteHallgatoSzamitogepMW = require('../middleware/hallgato/deleteHallgatoSzamitogep')
var addHallgatoSzamitogepMW = require('../middleware/hallgato/addHallgatoSzamitogep')

module.exports = function (app) {
    /**
     * Renders /hallgato (PCs belonging to a Student table)
     * Writes hallgatoid to console -> this will be used for query later
     */
    app.get('/hallgato/:hallgatoid',
        getHallgatoMW('hallgato==hallgatoid'),
        renderMW('example_hallgato.html')
    );

    /**
     * Deletes a PC from a hallgato (PC will still exist)
     */
    app.get('/hallgato/:hallgatoid/delete/:szamitogepid',
        deleteHallgatoSzamitogepMW(),
        (req, res, next) => {
            redirectMW(`/hallgato/${req.params.hallgatoid}`);
        }
    );

    /**
     * Assigns a PC to a hallgato
     */
    app.post('/hallgato/:hallgatoid/add',
        addHallgatoSzamitogepMW(),
        (req, res, next) => {
            redirectMW(`/hallgato/${req.body.hallgatoid}`);
        }
    );
};