const expect = require('chai').expect;
const getHallgatoMW = require('../middleware/hallgato/getHallgato');

describe('get_hallgato', function () {
    let res;
    beforeEach(function () {
        res = {
            locals: {},
        }
    });

    it('should return hallgato', function (done) {
        const mw = getHallgatoMW({
            hallgato:
                {
                    findOne: (obj) => {
                        const hallgatok = [{id: 1, name: 'Példa Péter', neptun: 'ABC123'}, {
                            id: 2,
                            name: 'Gipsz Jakab',
                            neptun: 'DEF456'
                        }]
                        for (let i = 0; i < hallgatok.length; i++) {
                            if (hallgatok[i].id === obj.id) {
                                return hallgatok[i];
                            }
                        }
                        return null;
                    },
                    find: () => {
                        return [];
                    }
                },
            szamitogep:
                {
                    find: () => {
                        return []
                    }
                }
        })

        mw({params: {hallgatoid: 2}}, res, function (error) {
            expect(res.locals).to.be.eql({
                hallgato: {id: 2, name: 'Gipsz Jakab', neptun: 'DEF456'},
                szamitogepek: [],
                szabad: []
            });
            expect(error).to.be.undefined;
            done();
        })
    });

    it('should return hallgato', function (done) {
        const mw = getHallgatoMW({
            hallgato:
                {
                    findOne: (obj) => {
                        throw new Error("Hiba");
                    },
                }
        })

        mw({params: {hallgatoid: 2}}, res, function (error) {
            expect(error).to.be.eql(new Error("Hiba"));
            done();
        })
    });
});