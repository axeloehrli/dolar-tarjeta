/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/plazo-fijo-banco-nacion.module.css"
import PlazoFijo from "../../classes/PlazoFijo"
import { useState } from "react"
import Head from "next/head"
import BancoLogo from "../../public/banconacion.png"
import Image from "next/image"
import CalculateButton from "../../components/CalculateButton"
export default function PlazoFijoBancoNacion() {
  const [plazoFijo, setPlazoFijo] = useState(new PlazoFijo({ rate: 0.695, amount: 50000, days: 30 }))
  const [amountInput, setAmountInput] = useState(50000)
  const [daysInput, setDaysInput] = useState(30)

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  const onAmountChange = e => {
    setAmountInput(e.target.value)
  }

  const onDaysChange = e => {
    setDaysInput(e.target.value)
  }

  const onButtonClick = () => {
    setPlazoFijo(
      new PlazoFijo(
        {
          rate: 0.695,
          amount: amountInput,
          days: daysInput
        }
      )
    )
  }

  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>Simulador Plazo Fijo Banco Nación</title>
        <meta name='keywords' content='simulador plazo fijo banco nacion bna BNA dinero dolar interes inversion dolares' />
        <meta name="description" content='Simulador de plazo fijo en el Banco Nación. Ingrese su monto inicial y el período de tiempo y obtenga los intereses ganados.' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Simulador Plazo Fijo Banco Nación</h1>
        <div className={styles.inputs}>
          <div>
            <Image src={BancoLogo} alt="Banco Nación" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="amount">Monto a invertir (ARS)</label>
            <div className={styles.amountContainer}>
              <span className={styles.inputLeft}>$</span>
              <input
                id="amount"
                value={amountInput}
                onChange={onAmountChange}
              ></input>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="days">Período de tiempo (días)</label>
            <input
              id="days"
              value={daysInput}
              onClick={() => setShowDropdown(prevState => !prevState)}
              onChange={onDaysChange}
            >
            </input>
          </div>
          <CalculateButton handleClick={onButtonClick}/>
          <div className={styles.results}>
            <div className={styles.resultContainer}>
              <label>Monto inicial:</label>
              <p>${plazoFijo.amount}</p>
            </div>
            <div className={styles.resultContainer}>
              <label>Tasa de interés:</label>
              <p>{plazoFijo.rate * 100}%</p>
            </div>
            <div className={styles.resultContainer}>
              <label>Período de tiempo:</label>
              <p>{plazoFijo.days} {plazoFijo.days === 1 ? "día" : "días"}</p>
            </div>
            <div className={styles.resultContainerImportant}>
              <label>Monto acumulado:</label>
              <p>{formatter.format(plazoFijo.total).replace(/\s+/g, '')}</p>
            </div>
            <div className={styles.resultContainerImportant}>
              <label>Intereses ganados:</label>
              <p>{formatter.format(plazoFijo.gainedInterest).replace(/\s+/g, '')}</p>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <h2>¿Qué es un plazo fijo?</h2>
            <p>
              Un plazo fijo es una herramienta financiera que posee
              fines de ahorro, teniendo un riesgo de nivel bajo. Se
              basa en depositar nuestro capital en una entidad financiera
              y de esta manera hacerlo rentable. A partir de ese momento,
              el banco tendrá custodia total de nuestro dinero, el cual
              no podremos mover.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cómo funciona un plazo fijo en el BNA?</h2>
            <p>
              El BNA (Banco Nación) nos permite llevar a cabo un plazo
              fijo incluso sin ser clientes. Una vez terminado el contrato,
              se le depositará el monto acumulado (intereses ganados y
              el capital inicial) a su cuenta bancaria. <br></br>
              El monto mínimo a depositar es de $1.500, y el máximo de $10.000.000.
              La cantidad de días mínima es de 30 días, y la máxima de 365 días.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cuánto se ganaría con una inversión de ${plazoFijo.amount}?</h2>
            <p>
              Si usted desease invertir ${plazoFijo.amount} <br />
              a {plazoFijo.days} días en el Banco Nación, asumiendo una tasa de interés
              del {plazoFijo.rate * 100}%, al finalizar el plazo fijo
              obtendría una ganancia de {formatter.format(plazoFijo.gainedInterest).replace(/\s+/g, '')}.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Requisitos para plazo fijo en el Banco Nación</h2>
            <p>
              Para poder invertir en un plazo fijo en el Banco Nación,
              se deben cumplir los siguientes requisitos: <br></br>
              <strong>- Documentos: </strong> DNI, Libreta de Enrolamiento o Libreta Cívica <br></br>
              <strong>- En caso de que el domicilio que se declara es diferente al del DNI:</strong> Certificado de domicilio.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cómo llevar a cabo el plazo fijo?</h2>
            <p>
              Se puede realizar de las siguientes maneras: <br />
              - En las distintas sucursales del Banco Nación <br />
              - En la App BNA+ <br />
              - A través de Homebanking <br />
              - A través de cajeros automáticos <br />
              - Por teléfono
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Puedo realizar mi plazo fijo con dólares?</h2>
            <p>
              Si. El Banco Nación ofrece la posibilidad de llevarlo a cabo
              con un período de entre 30 y 365 días, con una TNA que varía
              entre 0.5% y 1.75%, dependiendo del período de tiempo.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Puedo retirar mi dinero antes de que termine el plazo?</h2>
            <p>
              No, una vez empezado el plazo fijo se debe esperar hasta la fecha
              de vencimiento del mismo. De todas formas, el banco ofrece una modalidad
              llamada "Plazo Fijo Pre-Cancelable", la cuál nos permite retirar
              el dinero (cancelando la operación) a los 31 días, siempre y
              cuando se avise con 48 horas de anterioridad.
            </p>
          </div>
        </div>
      </main>
      <aside className={styles.aside}>

      </aside>
    </div >
  )
}