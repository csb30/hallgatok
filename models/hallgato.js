const db = require('../config/db')
const hallgato = db.model('hallgato', {
    id: Number,
    name: String,
    neptun: String
})
module.exports = hallgato;