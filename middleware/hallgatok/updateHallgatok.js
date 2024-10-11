module.exports = function (params) {
    /**
     * Updates a hallgato in the db
     */
    return function (req, res, next) {
        console.log("updateHallgatok"+JSON.stringify(req.body));
        return next();
    };

};