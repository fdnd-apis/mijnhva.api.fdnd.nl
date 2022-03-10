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

module.exports = section