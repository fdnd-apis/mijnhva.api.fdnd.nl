const db = require('./db')
const helper = require('./helper')

const page = function(page) {
  this.title = page.title
  this.slug = page.slug
}

page.getAll = async function(page = 1) {
  const rows = await db.query(`SELECT * FROM page LIMIT ?, ?`, [
    helper.getOffset(page, process.env.LIST_PER_PAGE),
    Number(process.env.LIST_PER_PAGE)
  ])
  return {
    data: helper.emptyOrRows(rows),
    meta: { page }
  }
}

page.findBySlug = async function(slug) {
  const rows = await db.query(`SELECT section_id, section.title, body FROM section LEFT JOIN page ON page.page_id = section.page_id WHERE page.slug = ?`, [slug])
  return {
    data: helper.emptyOrRows(rows),
    meta: { slug }
  }
}

page.create = async function(page) {
  const rows = await db.query(
    `INSERT INTO page SET title = ?, slug = ?`,
    prepareForInsert(page)
  )
  return {
    data: [page],
    meta: {
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    }
  }
}

module.exports = page

function prepareForInsert(page) {
  return [
    page.title,
    page.slug
  ]
}