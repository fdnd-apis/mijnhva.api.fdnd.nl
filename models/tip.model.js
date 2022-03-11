const db = require('./db')
const helper = require('./helper')

const tip = function (tip) {
    this.title = tip.title
    this.body = tip.body
}

tip.getAll = async function () {
    const rows = await db.query(`SELECT * FROM tip`)
    return {
        data: helper.emptyOrRows(rows)
    }
}

tip.create = async function (tip) {
    const rows = db.query(
        `INSERT INTO tip SET title = ?, body = ?, tip_id = ?`,
        prepareForInsert(tip)
    )

    return {
        data: [tip],
        meta: {
            affectedRows: rows.affectedRows,
            changedRows: rows.changedRows,
        }
    }
}

module.exports = tip

function prepareForInsert(tip) {
    return [
        tip.title,
        tip.body,
        tip.tip_id
    ]
}