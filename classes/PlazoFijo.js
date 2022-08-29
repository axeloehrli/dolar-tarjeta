export default class PlazoFijo {
  constructor(values) {
    this.rate = values.rate
    this.amount = values.amount
    this.days = values.days
    this.gainedInterest = this.getGainedInterest()
    this.total = this.getTotal()
  }
  getTotal() {
    const amount = parseFloat(this.amount)
    const num = amount + this.gainedInterest
    return num
  }
  getGainedInterest() {
    const amount = parseFloat(this.amount)
    const rate = parseFloat(this.rate)
    const days = parseFloat(this.days)

    const num = amount * (rate * days) / 365
    const rounded = Math.round((num + Number.EPSILON) * 100) / 100
    return rounded
  }
}