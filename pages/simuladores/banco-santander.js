/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/plazo-fijo-banco-nacion.module.css"
import PlazoFijo from "../../classes/PlazoFijo"
import { useState } from "react"
import Head from "next/head"
import BancoLogo from "../../public/santander.png"
import Image from "next/image"
import CalculateButton from "../../components/CalculateButton"
export default function PlazoFijoBancoNacion({ currentInterestRate }) {
  const [plazoFijo, setPlazoFijo] = useState(new PlazoFijo({ rate: currentInterestRate, amount: 50000, days: 30 }))
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
          rate: currentInterestRate,
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
        <title>Simulador Plazo Fijo Banco Santander</title>
        <meta name='keywords' content='simulador plazo fijo banco santander rio dinero dolar interes inversion dolares' />
        <meta name="description" content='Simulador de plazo fijo en el Banco Santander.' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Simulador Plazo Fijo Banco Santander</h1>
        <div className={styles.inputs}>
          <div>
            <Image src={BancoLogo} alt="Banco Santander" />
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
          <CalculateButton handleClick={onButtonClick} />
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
              Los plazos fijos son una manera de ahorrar dinero con un
              nivel de riesgo muy bajo. Al depositar nuestro dinero en
              un banco, este se hace con la custodia del capital hasta finalizar
              el contrato y no podremos utilizarlo. En ese momento,
              el banco nos paga intereses dependiendo del tiempo
              que se depositó el dinero.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cómo funciona un plazo fijo en el Banco Santander?</h2>
            <p>
              En el Banco Santander podemos realizar un plazo fijo
              siempre y cuando seamos clientes de la institución.
              Luego de acabarse el plazo acordado, nos depositarán
              el capital acumulado (intereses + monto inicial) en nuestra cuenta.
              El monto mínimo que se puede depositar es de $500. El plazo
              mínimo es de 30 días y el máximo de 913 días.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cuánto ganaría invirtiendo ${plazoFijo.amount}?</h2>
            <p>
              Si usted invirtiera ${plazoFijo.amount} <br />
              a {plazoFijo.days} días en el Banco Santander, con una tasa de interés
              del {plazoFijo.rate * 100}%, al finalizar el contrato
              obtendría {formatter.format(plazoFijo.gainedInterest).replace(/\s+/g, '')} en intereses.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Requisitos para plazo fijo en el Banco Santander</h2>
            <p>
              Para poder llevar a cabo un plazo fijo en el Banco Santander,
              debe cumplir con los siguientes requisitos: <br></br>
              Ser cliente del Banco Santander, es decir, tener una caja de ahorro o cuenta corriente. <br></br>
              <strong>Documentos:</strong> DNI, Libreta de Enrolamiento o Libreta Cívica <br></br>
              <strong>Si el domicilio declarado es distinto al del DNI:</strong> Certificado de domicilio
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿De qué manera se puede llevar a cabo mi plazo fijo?</h2>
            <p>
              Existen dos opciones: <br />
              - A través de <a href="https://www.personas.santander.com.ar/obp-webapp/angular/#!/login">homebanking</a>
              - Por teléfono: llamando al 4345-2400 o al 0810-333-2400.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Puedo realizar mi plazo fijo con dólares?</h2>
            <p>
              Si, ya que el Banco Santander nos permite realizar
              el Super Plazo Fijo Tradicional tanto en pesos como en dólares.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Puedo retirar mi dinero antes de que termine el plazo?</h2>
            <p>
              No, ya que a partir del comienzo del plazo fijo, el Banco se hace
              con la custodia total del dinero hasta que finalize el tiempo acordado.
              De todas maneras, el banco nos da la posibilidad de realizar un "Plazo Fijo
              Pre-Cancelable", con el cual podemos retirar nuestro dinero a partir de los 30 días,
              avisando con 2 días de antelación.
            </p>
          </div>
        </div>
      </main>
      <aside className={styles.aside}>

      </aside>
    </div >
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:9999/interest-rates")
    const data = await res.json()

    const currentInterestRate = data[0].value

    console.log(currentInterestRate);
    return {
      props: { currentInterestRate }
    }
  } catch (error) {
    console.log(error);
    return {
      props: { error: true }
    }
  }
}