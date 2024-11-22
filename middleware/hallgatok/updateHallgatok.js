module.exports = function (params) {
    /**
     * Updates a hallgato in the db
     */
    const hallgato_modell = params['hallgato']; 
    return function (req, res, next) {
        console.log("updateHallgatok"+JSON.stringify(req.body));
        
        return next();
    };

};