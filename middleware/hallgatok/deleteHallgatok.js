module.exports = function (params) {
    /**
     * Deletes a hallgato to the db
     */
    const szamitogep_modell = params['szamitogep'];
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        console.log("deleteHallgatok"+JSON.stringify(req.params));
        try{
            const hallgato = await hallgato_modell.findOne({id: req.params.hallgatoid});
            console.log(hallgato);
            await szamitogep_modell.updateMany({_hallgato: hallgato._id}, {_hallgato: null});
            await hallgato.deleteOne();
        }
        catch(err){
            return next(err);
        }
        return res.redirect("/");
    };

};