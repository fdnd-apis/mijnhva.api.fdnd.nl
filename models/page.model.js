const db = require('./db')
const helper = require('./helper')

const page = function(page) {
  this.title = page.title
  this.slug = page.slug
}

page.findBySlug = async function(slug) {
  const rows = await db.query(`SELECT section_id, section.title, body FROM section LEFT JOIN page ON page.page_id = section.page_id WHERE page.slug = ?`, [slug])
  return {
    data: helper.emptyOrRows(rows),
    meta: { slug }
  }
}

module.exports = page