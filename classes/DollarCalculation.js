const IMPUESTO_PAIS = 0.3
const IMPUESTO_A_LAS_GANANCIAS = 0.45

export default class DollarCalculation {
  constructor(dollarAmount, currentDollarInfo) {
    this.dollarAmount = dollarAmount
    this.currentDollarInfo = currentDollarInfo
  }

  getCostInPesos() {
    return this.dollarAmount * this.currentDollarInfo.price
  }

  getImpuestoPais() {
    const costInPesos = this.getCostInPesos()
    const result = costInPesos * IMPUESTO_PAIS
    const roundedResult = Math.round((result + Number.EPSILON) * 100) / 100
    return roundedResult
  }

  getImpuestoALasGanancias() {
    const costInPesos = this.getCostInPesos()
    const result = costInPesos * IMPUESTO_A_LAS_GANANCIAS
    const roundedResult =  Math.round((result + Number.EPSILON) * 100) / 100
    return roundedResult
  }

  getTotalPrice() {
    const costInPesos = this.getCostInPesos()
    const impuestoPais = this.getImpuestoPais()
    const impuestoALasGanancias = this.getImpuestoALasGanancias()

    return costInPesos + impuestoPais + impuestoALasGanancias
  }

}