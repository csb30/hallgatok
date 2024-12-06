const expect = require('chai').expect;
const getHallgatokMW = require('../middleware/hallgatok/getHallgatok');

describe('get_hallgatok', function () {
    let res;
    beforeEach(function () {
        res = {
            locals: {},
        }
    });

    it('should return hallgato', function (done) {
        const mw = getHallgatokMW({
            hallgato:
                {
                    find: () => {
                        return [{id: 1, name: 'Példa Péter', neptun: 'ABC123', _doc: {id: 1, name: 'Példa Péter', neptun: 'ABC123'}}];
                    }
                },
            szamitogep:
                {
                    find: () => {
                        return [0,0,0]
                    }
                }
        });

        mw({}, res, function (error) {
            expect(res.locals).to.be.eql({hallgatok: [{id: 1, name: 'Példa Péter', neptun: 'ABC123', szamitogep: 3}]});
            expect(error).to.be.undefined;
            done();
        })
    });


    it('should return an error if there is a problem', function (done) {
        const mw = getHallgatokMW({
            hallgato:
                {
                    find: () => {
                        throw new Error("Hiba");
                    }
                },
        });

        mw({}, res, function (error) {
            expect(error).to.be.eql(new Error("Hiba"));
            done();
        })
    });
});