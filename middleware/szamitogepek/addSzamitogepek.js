module.exports = function (params) {
    /**
     * Adds a PC to the db
     */
    return function (req, res, next) {
        console.log("addSzamitogepek "+JSON.stringify(req.body));
        return next();
    };

};