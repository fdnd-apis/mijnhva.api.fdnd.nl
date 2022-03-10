const db = require('./db')
const helper = require('./helper')

const faq = function (faq) {
    this.question = faq.question
    this.answer = faq.answer
}

faq.getAll = async function () {
    const rows = await db.query(`SELECT * FROM faq`)
    return {
        data: helper.emtpryOrRows(rows)
    }
}

module.exports = faq