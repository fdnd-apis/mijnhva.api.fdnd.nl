const db = require("./db");
const helper = require("./helper");

const tip = function (tip) {
  this.title = tip.title;
  this.body = tip.body;
};

tip.getAll = async function () {
  const rows = await db.query(`SELECT * FROM tip`);
  return {
    data: helper.emptyOrRows(rows),
  };
};

tip.create = async function (tip) {
  const rows = db.query(
    `INSERT INTO tip SET title = ?, body = ?`,
    prepareForInsert(tip)
  );

  return {
    data: [tip],
    meta: {
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    },
  };
};

tip.delete = async function (tipId) {
  const rows = await db.query(`DELETE FROM tip WHERE tip_id = ?`, [tipId]);
  return {
    meta: {
      tipId,
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    },
  };
};

tip.update = async function (tip) {
  const rows = db.query(
    `UPDATE tip SET title = ?, body = ? WHERE tip_id = ?`,
    prepareForUpdate(tip)
  );
  return {
    data: { tip },
    meta: {
      tip_id: tip.tip_id,
      affectedRows: rows.affectedRows,
      changedRows: rows.changedRows,
    },
  };
};

module.exports = tip;

function prepareForInsert(tip) {
  return [tip.title, tip.body];
}

function prepareForUpdate(tip) {
  return [...prepareForInsert(tip), tip.tip_id];
}
