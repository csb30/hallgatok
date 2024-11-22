module.exports = function (params) {
    /**
     * Gets list of PCs from db and returns it
     */
    const szamitogep_modell = params['szamitogep'];
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        console.log("getSzamitogepek");
        //res.locals.szamitogepek = [{id: 1, cpu: 'i3-7100', ram: 8, hallgato: 'Példa Péter'}, {id: 2, cpu: 'i7-7700k', ram: 16, hallgato: 'Gipsz Jakab'}]
        res.locals.szamitogepek = await szamitogep_modell.find({}).populate('_hallgato');
        console.log(res.locals.szamitogepek);

        return next();
    };

};