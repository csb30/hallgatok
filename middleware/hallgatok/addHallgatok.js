module.exports = function (params) {
    /**
     * Adds a hallgato to the db
     */
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        console.log("addHallgatok "+JSON.stringify(req.body));
        const db_data = await hallgato_modell.findOne({id: req.body['id']});
        const hallgato = db_data ?? new hallgato_modell();
        hallgato.id = req.body['id'];
        hallgato.name = req.body['name'];
        hallgato.neptun = req.body['neptun'];
        hallgato.save();
        return res.redirect('/');
    };

};