const db = require('./db')
const helper = require('./helper')


const section = function(section) {
  this.title = section.title
  this.body = section.body
  this.pageId = section.pageId
}

section.getAll = async function() {
  const rows = await db.query(`SELECT * FROM section`)
  return {
    data: helper.emptyOrRows(rows)
  }
}

section.create = async function(section) {
  const rows = await db.query(
    `INSERT INTO section SET title = ?, body = ?, page_id = ?`,
    prepareForInsert(section)
  )
  return {
    data: [section],
    meta: {
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    }
  }
}

module.exports = section

function prepareForInsert(section) {
  return [
    section.title,
    section.body,
    section.page_id
  ]
}