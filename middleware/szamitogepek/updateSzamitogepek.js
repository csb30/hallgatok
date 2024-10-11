module.exports = function (params) {
    /**
     * Updates a PC in the db
     */
    return function (req, res, next) {
        console.log("updateSzamitogepek "+JSON.stringify(req.body));
        return next();
    };

};