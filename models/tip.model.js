const db = require('./db')
const helper = require('./helper')

const tip = function(tip) {
    this.title = tip.title
    this.body = tip.body
}

tip.getAll = async function() {
    const rows = await db.query(`SELECT * FROM tip`)
    return {
        data: helper.emptyOrRows(rows)
    }
}

module.exports = tip