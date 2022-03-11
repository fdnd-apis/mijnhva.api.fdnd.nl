const db = require('./db')
const helper = require('./helper')

const faq = function (faq) {
    this.question = faq.question
    this.answer = faq.answer
}

faq.getAll = async function () {
    const rows = await db.query(`SELECT * FROM faq`)
    return {
        data: helper.emptyOrRows(rows)
    }
}

faq.create = async function (faq) {
    const rows = db.query(
        `INSERT INTO faq SET question = ?, answer = ?`,
        prepareForInsert(faq)
    )

    return {
        data: [faq],
        meta: {
            affectedRows: rows.affectedRows,
            changedRows: rows.changedRows,
        }
    }
}

module.exports = faq

function prepareForInsert(faq) {
    return [
        faq.question,
        faq.answer,
    ]
}