module.exports = function (params) {
    /**
     * Deletes a hallgato to the db
     */
    return function (req, res, next) {
        console.log(req.params);
        return next();
    };

};