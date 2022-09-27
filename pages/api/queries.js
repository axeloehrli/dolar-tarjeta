require("dotenv").config()
const Pool = require("pg").Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})

const getDollarPrice = (req, res) => {
  pool.query("SELECT * FROM dolar_info ORDER BY fetched_at DESC", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const insertCalculateButtonClick = (userIp, lat, lng, city, region, country)  => {
  pool.query(`INSERT INTO clicks (element, user_ip, lat, lng, city, region, country) VALUES ('calculate_button', '${userIp}', ${lat}, ${lng}, '${city}', '${region}', '${country}')`, (err, res) => {
    if(err) {
      console.log(err);
    }
  })
}

const insertDollarPrice = (value) => {
  if (value === undefined && value === null) return;
  const sqlStatement = `INSERT INTO dolar_info (price) VALUES (${value})`
  const date = new Date()
  console.log(date.getHours(), ":", date.getMinutes(), value);
  pool.query(sqlStatement, (err, res) => {
    if (err) {
      console.log(err);
    }
  })
}

module.exports = { getDollarPrice, insertDollarPrice, insertCalculateButtonClick }
