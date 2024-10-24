module.exports = function (params) {
    /**
     * Gets list of PCs owned by a student
     */
    return function (req, res, next) {
        console.log('getHallgato');
        res.locals.szamitogepek = [{id: 1, cpu: 'i3-7100', ram: 8, hallgato: 'Példa Péter'}, {id: 2, cpu: 'i7-7700k', ram: 16, hallgato: 'Gipsz Jakab'}]
        res.locals.filtered = [];
        res.locals.hallgatoid = req.params.hallgatoid;
        res.locals.szamitogepek.forEach(element => {
            if (element.id == req.params.hallgatoid) {
                res.locals.filtered.push(element)
            }
        });
        return next();
    };

};