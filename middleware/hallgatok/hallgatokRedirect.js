module.exports = function () {

    /**
     * Redirets to /hallgatok
     */

    return function (req, res, next) {
        return res.redirect('/hallgatok');
    };

};