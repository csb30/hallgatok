module.exports = function (params) {
    /**
     * Deletes a hallgato to the db
     */
    return function (req, res, next) {
        console.log("deleteHallgatok"+JSON.stringify(req.params));
        return next();
    };

};