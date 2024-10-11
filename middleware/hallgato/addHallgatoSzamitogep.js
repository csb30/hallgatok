module.exports = function (params) {
    /**
     * Assigns a PC to a hallgato
     */
    return function (req, res, next) {
        console.log("addHallgatoSzamitogep "+JSON.stringify(req.body));
        return next();
    };

};