module.exports = function (params) {
    /**
     * Adds a hallgato to the db
     */
    return function (req, res, next) {
        console.log("addHallgatok "+JSON.stringify(req.body));
        return next();
    };

};