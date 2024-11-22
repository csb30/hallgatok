module.exports = function (params) {
    /**
     * Deletes a PC from the db
     */
    const szamitogep_modell = params['szamitogep'];
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        console.log("deleteSzamitogepek "+JSON.stringify(req.params));
        try{
            const szamitogep = await szamitogep_modell.findOne({id: req.params.szamitogepid});
            await szamitogep.deleteOne();
        }
        catch(err){
            return next(err);
        }
        return res.redirect("/szamitogepek");
    };

};