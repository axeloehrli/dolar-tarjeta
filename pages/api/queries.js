const Pool = require("pg").Pool
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
})

const getDollarPrice = (req, res) => {
  pool.query("SELECT * FROM dolar_info ORDER BY fetched_at DESC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const insertDollarPrice = (value) => {
  const sqlStatement = `INSERT INTO dolar_info (price) VALUES (${value})`
  const date = new Date()
  console.log(date.getHours(), ":", date.getMinutes(), value);
  pool.query(sqlStatement, (err, res) => {
    if (err) {
      console.log(err);
    }
  })
}

module.exports = { getDollarPrice, insertDollarPrice }