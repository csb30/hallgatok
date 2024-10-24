const szamitogepek = require("../../routes/szamitogepek");

module.exports = function (params) {
    /**
     * Gets list of students from db and returns it
     */
    return function (req, res, next) {
        console.log("getHallgatok");
        res.locals.hallgatok = [{id: 1, name: 'Példa Péter', neptun: 'ABC123', szamitogep: 3}, {id: 2, name: 'Gipsz Jakab', neptun: 'DEF456', szamitogep: 1}];
        return next();
    };

};