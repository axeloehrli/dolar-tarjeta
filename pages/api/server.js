const express = require("express")
const db = require("./queries")
const fetch = require("node-fetch")
const cheerio = require("cheerio")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.get("/", db.getDollarPrice)
app.get("/interest-rates", db.getInterestRates)
app.get("/clicks", db.getClicks)
app.post("/", (req, res) => {
  console.log("hello world");
})
app.post("/calculate-button-click", (req, res) => {
  const { userIp, lat, lng, city, region, country } = req.body
  console.log(userIp, lat, lng, city, region, country);
  db.insertCalculateButtonClick(userIp, lat, lng, city, region, country)
  res.write("hello world")
})

app.listen(9999, () => {
  console.log("Running on port 9999");
})

const scrapeWebsiteDollarPrice = async () => {
  try {
    const res = await fetch("https://www.bna.com.ar/Personas");
    const text = await res.text()
    const $ = cheerio.load(text)

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

const scrapeWebsiteInterestRate = async () => {

  const res = await fetch("http://www.bcra.gob.ar/BCRAyVos/Plazos_fijos_online.asp");
  const text = await res.text()
  const $ = cheerio.load(text)

  const td = $('td:contains("BANCO DE LA NACION ARGENTINA")')

  let interestValue
  td.siblings().each((i, el) => {
    if (i === 1) {
      interestValue = parseFloat($(el).text().replace(/%/g, ''))
    }
  })

  const interestRate = interestValue / 100

  return interestRate
}

const saveDollarPrice = async () => {
  const newDollarPrice = await scrapeWebsiteDollarPrice()
  const prevDollarPrice = await fetchPrevDollarPrice()
  if (newDollarPrice === prevDollarPrice) {
    const date = new Date()
    console.log(date.getHours(), ":", date.getMinutes(), "Same dollar value");
    return
  }
  /* If new price is different than prev price,
  push it to the database */
  db.insertDollarPrice(await scrapeWebsiteDollarPrice())
}

const saveInterestRate = async  () => {
  const prevInterestRate = await fetchPrevInterestRate()
  const newInterestRate = await scrapeWebsiteInterestRate()
  if (prevInterestRate === newInterestRate) {
    const date = new Date()
    console.log(date.getHours(), ":", date.getMinutes(), "Same interest rate");
    return
  }
  db.insertInterestRate(newInterestRate)
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

const fetchPrevInterestRate = async () => {
  try {
    const req = await fetch("http://localhost:9999/interest-rates")
    const res = await req.json()
    return parseFloat(res[0].value)
  } catch (error) {
    console.log(error);
  }
}

const schedule = (fn1, fn2, time, isFirstTime) => {
  if (isFirstTime) {
    fn1()
    fn2()
  }
  setTimeout(() => {
    fn1()
    fn2()
    schedule(fn1, fn2, time, false)
  }, time);
}

schedule(saveDollarPrice, saveInterestRate, 1800000, true)