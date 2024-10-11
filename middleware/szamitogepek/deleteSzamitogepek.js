module.exports = function (params) {
    /**
     * Deletes a PC from the db
     */
    return function (req, res, next) {
        console.log("deleteSzamitogepek "+JSON.stringify(req.params));
        return next();
    };

};