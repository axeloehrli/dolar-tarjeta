const IMPUESTO_PAIS = 0.3
const IMPUESTO_A_LAS_GANANCIAS = 0.45
const IMPUESTO_BIENES_PERSONALES = 0.25

export default class DollarQatarCalculation {
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

  getImpuestoBienesPersonales() {
    const costInPesos = this.getCostInPesos()
    const result = costInPesos * IMPUESTO_BIENES_PERSONALES
    const roundedResult =  Math.round((result + Number.EPSILON) * 100) / 100
    return roundedResult
  }

  getTotalPrice() {
    const costInPesos = this.getCostInPesos()
    const impuestoPais = this.getImpuestoPais()
    const impuestoALasGanancias = this.getImpuestoALasGanancias()
    const impuestoBienesPersonales = this.getImpuestoBienesPersonales()

    return costInPesos + impuestoPais + impuestoALasGanancias + impuestoBienesPersonales
  }

}