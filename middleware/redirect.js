module.exports = function (site) {

    /**
     * Redirets to site
     */

    return function (req, res, next) {
        return res.redirect(site);
    };

};