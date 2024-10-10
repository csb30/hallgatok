module.exports = function (params) {
    /**
     * Updates a hallgato in the db
     */
    return function (req, res, next) {
        console.log(req.body);
        return next();
    };

};