module.exports = function (params) {
    /**
     * Deletes a PC from a hallgato (PC will still exist)
     */
    return function (req, res, next) {
        console.log("deleteHallgatoSzamitogep "+JSON.stringify(req.params));
        return next();
    };

};