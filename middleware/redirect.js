module.exports = function (site) {

    /**
     * Redirets to site
     */

    return function (req, res, next) {
        console.log("redirect: "+site);
        return res.redirect(site);
    };

};