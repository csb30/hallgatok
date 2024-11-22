const szamitogep = require("../../models/szamitogep");

module.exports = function (params) {
    /**
     * Assigns a PC to a hallgato
     */
    const szamitogep_modell = params['szamitogep'];
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        console.log("addHallgatoSzamitogep "+JSON.stringify(req.body));
        const szamitogep = await szamitogep_modell.findOne({id: req.body.szamitogepid});
        const hallgato = await hallgato_modell.findOne({id: req.body.hallgatoid});
        if (szamitogep && hallgato) {
            szamitogep._hallgato = hallgato;
            szamitogep.save();
        }
        return res.redirect(`/hallgato/${req.params.hallgatoid}`);
    };

};
