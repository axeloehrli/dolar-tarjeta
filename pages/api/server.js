const express = require("express")
const db = require("./queries")
const fetch = require("node-fetch")
const cheerio = require("cheerio")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.get("/", db.getDollarPrice)
app.post("/", (req, res) => {
  console.log("hello world");
})
app.post("/calculate-button-click", (req, res) => {
  const { userIp, lat, lng, city, region, country } = req.body
  db.insertCalculateButtonClick(userIp, lat, lng, city, region, country)
  res.write("hello world")
})

app.listen(9999, () => {
  console.log("Running on port 9999");
})

const scrapeWebsite = async () => {
  try {
    const req = await fetch("https://www.bna.com.ar/Personas");
    const res = await req.text()
    const $ = cheerio.load(res)

    const dollarValues = $("td:contains('Dolar U.S.A')")

    let dollarPrice
    dollarValues.siblings().each((i, el) => {
      if (i === 1) {
        dollarPrice = $(el).text()
      }
    })
    const formattedDollarPrice = dollarPrice.replace(/,/g, ".")

    return parseFloat(formattedDollarPrice)
  } catch (error) {
    console.log(error);
  }
}

const saveDollarPrice = async () => {
  const newDollarPrice = await scrapeWebsite()
  const prevDollarPrice = await fetchPrevDollarPrice()
  if (newDollarPrice === prevDollarPrice) {
    const date = new Date()
    console.log(date.getHours(), ":", date.getMinutes(), "Same dollar value");
    return
  }
  /* If new price is different than prev price,
  push it to the database */
  db.insertDollarPrice(await scrapeWebsite())
}

const fetchPrevDollarPrice = async () => {
  try {
    const req = await fetch("http://localhost:9999")
    const res = await req.json()
    return parseFloat(res[0].price)
  } catch (error) {
    console.log(error);
  }
}

const schedule = (fn, time, isFirstTime) => {
  if (isFirstTime) {
    fn()
  }
  setTimeout(() => {
    fn()
    schedule(fn, time, false)
  }, time);
}

schedule(saveDollarPrice, 1800000, true)