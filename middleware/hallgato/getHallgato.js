module.exports = function (params) {
    /**
     * Gets list of PCs owned by a student
     */
    const szamitogep_modell = params['szamitogep'];
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        try {
            console.log('getHallgato');
            res.locals.hallgato = await hallgato_modell.findOne({id: req.params.hallgatoid});
            res.locals.szamitogepek = await szamitogep_modell.find({_hallgato: res.locals.hallgato});
            res.locals.szabad = await szamitogep_modell.find({_hallgato: null})
            return next();
        } catch (error) {
            return next(error);
        }
    };

};