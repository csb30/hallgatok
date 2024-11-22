const szamitogep = require("../../models/szamitogep");

module.exports = function (params) {
    /**
     * Adds a PC to the db
     */
    const szamitogep_modell = params['szamitogep'];
    return async function (req, res, next) {
        console.log("addSzamitogepek "+JSON.stringify(req.body));

        const db_data = await szamitogep_modell.findOne({id: req.body['id']});
        const szamitogep = db_data ?? new szamitogep_modell();
        szamitogep.id = req.body['id'];
        szamitogep.cpu = req.body['cpu'];
        szamitogep.ram = req.body['ram'];
        szamitogep.save();
        return res.redirect('/szamitogepek');
    };

};