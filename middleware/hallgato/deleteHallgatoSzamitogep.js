module.exports = function (params) {
    /**
     * Deletes a PC from a hallgato (PC will still exist)
     */
    const szamitogep_modell = params['szamitogep'];
    const hallgato_modell = params['hallgato'];
    return async function (req, res, next) {
        console.log("deleteHallgatoSzamitogep "+JSON.stringify(req.params));
        const szamitogep = await szamitogep_modell.findOne({id: req.params.szamitogepid});
        const hallgato = await hallgato_modell.findOne({id: req.params.hallgatoid});
        szamitogep._hallgato = null;
        szamitogep.save();
        return res.redirect(`/hallgato/${req.params.hallgatoid}`);
    };

};