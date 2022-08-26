export default class PlazoFijo {
  constructor(values) {
    this.rate = values.rate
    this.amount = values.amount
    this.days = values.days
    this.gainedInterest = this.getGainedInterest()
  }
  getGainedInterest() {
    const num = this.amount * (this.rate * this.days) / 365
    const rounded = Math.round((num + Number.EPSILON) * 100) / 100
    return rounded
  }
}