const szamitogepek = require("../../routes/szamitogepek");

module.exports = function (params) {
    /**
     * Gets list of students from db and returns it
     */

    const hallgato_modell = params['hallgato'];
    const szamitogep_modell = params['szamitogep']; 
    return async function (req, res, next) {
        console.log("getHallgatok");
        //res.locals.hallgatok = [{id: 1, name: 'Példa Péter', neptun: 'ABC123', szamitogep: 3}, {id: 2, name: 'Gipsz Jakab', neptun: 'DEF456', szamitogep: 1}];
        try {
            res.locals.hallgatok = await hallgato_modell.find({});
            const db = [];
            for (let index = 0; index < res.locals.hallgatok.length; index++) {
                db.push({...res.locals.hallgatok[index]._doc, szamitogep: (await szamitogep_modell.find({_hallgato: res.locals.hallgatok[index]})).length});
            }
            res.locals.hallgatok = db;
            return next();
        } catch (error) {
            return next(error);
        }
    };

};