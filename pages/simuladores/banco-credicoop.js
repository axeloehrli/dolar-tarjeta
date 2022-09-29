/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/plazo-fijo-banco-nacion.module.css"
import PlazoFijo from "../../classes/PlazoFijo"
import { useState } from "react"
import Head from "next/head"
import BancoLogo from "../../public/credicoop.png"
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
        <title>Simulador Plazo Fijo Banco Credicoop</title>
        <meta name='keywords' content='simulador plazo fijo banco credicoop dinero dolar interes inversion dolares' />
        <meta name="description" content='Simulador de plazo fijo en el Banco Credicoop.' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Simulador Plazo Fijo Banco Credicoop</h1>
        <div className={styles.inputs}>
          <div>
            <Image src={BancoLogo} alt="Banco Credicoop" />
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
              El plazo fijo se trata de uno de los instrumentos de ahorro disponibles en el mercado. Consiste en transferir dinero a una institución financiera (como un banco) para su custodia durante un período de tiempo determinado. Al final del período se reciben los intereses más el capital inicial.
              Para entender esto, hemos desarrollado un simulador para visualizar la ejecución de un plazo fijo en el Banco Credicoop.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cómo funciona un plazo fijo en el Banco Credicoop?</h2>
            <p>
              En Banco Credicoop podemos realizar un plazo fijo siempre y cuando seamos clientes de la entidad. Pasado el tiempo acordado, el capital acumulado (intereses + importe inicial) será abonado en nuestra cuenta. La cantidad mínima que se puede depositar es de $500. El plazo mínimo es de 30 días, el máximo es de 900 días.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cuánto ganaría invirtiendo ${plazoFijo.amount}?</h2>
            <p>
              Si quisieras invertir ${plazoFijo.amount} <br />
              a {plazoFijo.days} días en el Banco Credicoop, asumiendo una tasa de interés
              del {plazoFijo.rate * 100}%, cuando termine el contrato
              recibiría {formatter.format(plazoFijo.gainedInterest).replace(/\s+/g, '')} en intereses.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Requisitos para plazo fijo en el Banco Credicoop</h2>
            <p>
              Para poder llevar a cabo un plazo fijo en el Banco Credicoop,
              debe cumplir con los siguientes requisitos: <br></br>
              - Tener una caja de ahorro o cuenta corriente en el Banco Credicoop. <br></br>
              - <strong>Ser mayor de edad</strong> <br></br>
              - <strong>Documentos:</strong> DNI, Libreta de Enrolamiento o Libreta Cívica <br></br>
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿De qué forma se puede realizar el plazo fijo?</h2>
            <p>
              Existen dos opciones: <br />
              - Banca Internet <br />
              - Aplicación Credicoop Movil
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Puedo realizar mi plazo fijo con dólares?</h2>
            <p>
              Sí, pero esto solo es posible en la modalidad de preaviso con un plazo mínimo de 180 días y un monto mínimo de USD 30.000.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Puedo retirar mi dinero antes de que termine el plazo?</h2>
            <p>
              No, debes respetar la fecha de caducidad. La única modalidad que permite esta opción es Plazo Fijo con Cancelación Anticipada, que permite cancelar la transacción a los 31 días con 48 horas hábiles de anticipación a su vencimiento.
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