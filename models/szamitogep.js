const db = require('../config/db');
const Schema = require('mongoose').Schema;
const szamitogep = db.model('szamitogep', {
    id: Number,
    cpu: String,
    ram: Number,
    _hallgato: {type: Schema.Types.ObjectId, ref: 'hallgato'}
})
module.exports = szamitogep;