module.exports = function (params) {
    /**
     * Gets list of PCs from db and returns it
     */
    return function (req, res, next) {
        console.log("getSzamitogepek");
        res.locals.szamitogepek = [{id: 1, cpu: 'i3-7100', ram: 8, hallgato: 'Példa Péter'}, {id: 2, cpu: 'i7-7700k', ram: 16, hallgato: 'Gipsz Jakab'}]
        return next();
    };

};