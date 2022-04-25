const mysql = require("mysql2/promise");

let pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "dohealking",
  connectionLimit: 20,
  queueLimit: 0,
});

module.exports.getConnection = () => {
  return pool;
};

module.exports.executePreparedStatement = async (sql, params = []) => {
  this.paramsCheck(params);
  try {
    const [rows, fields] = await pool.execute(sql, params);
    return {
      rows,
      fields,
    };
  } catch (err) {
    //console.log(err);
    throw err;
  }
};

module.exports.paramsCheck = (params = []) => {
  for (const x of params) {
    if (!x) {
      throw { msg: "undefined elements" };
    }
  }
};
