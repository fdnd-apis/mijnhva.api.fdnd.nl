const db = require("./db");
const helper = require("./helper");

const faq = function (faq) {
  this.question = faq.question;
  this.answer = faq.answer;
};

faq.getAll = async function () {
  const rows = await db.query(
    `SELECT * FROM faq INNER JOIN faq_category ON faq.faq_category_id = faq_category.faq_category_id`
  );
  return {
    data: helper.emptyOrRows(rows),
  };
};

faq.getById = async function(id) {
  const rows = await db.query(`SELECT * FROM section WHERE section_id = ?`, [id])
  return {
    data: helper.emptyOrRows(rows)
  }
}

faq.create = async function (faq) {
  const rows = db.query(
    `INSERT INTO faq SET question = ?, answer = ?`,
    prepareForInsert(faq)
  );

  return {
    data: [faq],
    meta: {
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    },
  };
};

faq.delete = async function (faqId) {
  const rows = await db.query(`DELETE FROM faq WHERE faq_id = ?`, [faqId]);
  return {
    meta: {
      faqId,
      affectedRows: rows.aaffectedRows,
      changedRows: rows.changedRows,
    },
  };
};

faq.update = async function (faq) {
  const rows = await db.query(
    `UPDATE faq SET question = ?, answer = ? WHERE faq_id = ?`,
    perpareForUpdate(faq)
  );
  return {
    data: { faq },
    meta: {
      faq_id: faq.faq_id,
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    },
  };
};

module.exports = faq;

function prepareForInsert(faq) {
  return [faq.question, faq.answer];
}

function prepareForUpdate(faq) {
  return [...prepareForInsert(faq), faq.faq_id];
}
