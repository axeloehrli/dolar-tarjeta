/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/plazo-fijo-banco-nacion.module.css"
import PlazoFijo from "../../classes/PlazoFijo"
import { useState } from "react"
import Head from "next/head"
import BancoLogo from "../../public/galicia.png"
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
        <title>Simulador Plazo Fijo Banco Galicia</title>
        <meta name='keywords' content='simulador plazo fijo banco galicia dinero dolar interes inversion dolares' />
        <meta name="description" content='Simulador de plazo fijo en el Banco Galicia.' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Simulador Plazo Fijo Banco Galicia</h1>
        <div className={styles.inputs}>
          <div>
            <Image src={BancoLogo} alt="Banco Galicia" />
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
            <p>
              El Banco Galicia es una gran institución financiera de Argentina. Ofrece una variedad de productos financieros, incluyendo depósitos a plazo fijo y préstamos. Estos están disponibles a través de su sitio web, así como en cualquiera de sus sucursales en todo el país.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>El Banco Galicia ofrece un servicio de depósito a plazo fijo en Argentina.</h2>
            <p>
              Los depósitos a plazo fijo son un tipo de cuenta que te permite ahorrar dinero por un período de tiempo determinado y retirarlo en cualquier momento en el futuro. Podés abrir una por Internet en el Banco Galicia, o bien acercarte a una sucursal en Argentina y abrir una allí.
            </p>
            <p>
              Para abrir una cuenta de depósito a plazo fijo, tendrá que facilitar sus datos personales y bancarios. También deberá elegir el importe que desea ahorrar y el tiempo que desea mantenerlo.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Seguridad de un plazo fijo en el Banco Galicia</h2>
            <p>
              Un depósito a plazo es una inversión segura porque le garantiza que su capital estará protegido y que recibirá una rentabilidad por su inversión. Los depósitos a plazo también se conocen como depósitos a plazo fijo o cuentas de ahorro.
            </p>
            <p>
              Los depósitos a plazo son mantenidos por los bancos u otras instituciones financieras durante determinados períodos de tiempo; pueden tener un vencimiento de un año, dos años, tres años o más. Cuanto más largo sea el plazo del depósito, más alto será el tipo de interés que pueden pagar estos bancos y otras instituciones financieras durante ese periodo de tiempo. Si no se especifica ningún tipo de interés, todos los depositantes deben acordar un método para liquidar los saldos de sus cuentas durante las reuniones periódicas mensuales entre las partes implicadas para asegurarse de que todo el mundo sabe cuánto dinero se ha prestado/depositado en cada cuenta, de modo que todo el mundo sepa en qué punto se encuentra todo en este momento, sin que haya sorpresas más adelante cuando la gente pruebe cosas nuevas sin saber nada de ellas de antemano.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Los depósitos a plazo fijo del Banco Galicia ofrecen flexibilidad para elegir el monto y el plazo de su depósito.</h2>
            <p>
              El Banco Galicia ofrece una serie de depósitos a plazo fijo que le permiten elegir el monto y el plazo de su depósito. La inversión mínima es de 1500 pesos, mientras que la máxima es de 500.000 pesos.
            </p>
            <p>
              El plazo es de un año, dos años, tres años y cuatro años. El tipo de interés cambiará cada mes en función de las condiciones del mercado en ese momento.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>
              Los depósitos a plazo fijo de Banco Galicia están libres de intermediarios y comisiones.
            </h2>
            <p>
              Los plazos fijos de Banco Galicia no tienen intermediarios ni comisiones. El banco no cobra ningún tipo de arancel y no cobra comisión a sus clientes.
              No hay costos ocultos, como comisiones por extracciones o transferencias, ni tampoco hay cargos por usar la tarjeta de crédito en cajeros automáticos fuera de Argentina.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>A mayor plazo de inversión, mayor es la tasa de interés.</h2>
            <p>
              Cuanto más tiempo permanezca su inversión en el plazo fijo del Banco Galicia, menor será el riesgo de perder dinero.
              Es menos probable que tengas que retirar tu dinero antes de tiempo y pagar penalidades por hacerlo.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Cada peso que invierte está protegido por el Banco Central de la República Argentina.</h2>
            <p>
              El Banco Central de Argentina es una institución pública y el Comité de Política Monetaria (CMB) se encarga de regular y supervisar el sistema bancario.
            </p>
            <p>
              El Banco Central de Argentina es una institución pública y el Comité de Política Monetaria (CMB) se encarga de regular y supervisar el sistema bancario. El gobierno también ha puesto en marcha varias estrategias para mejorar la inclusión financiera y aumentar el acceso al crédito de los hogares de bajos ingresos.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Conclusión</h2>
            <p>
              En conclusión, el Banco Galicia ofrece una variedad de depósitos a plazo fijo que se adaptan a las necesidades de todos. Podés elegir el monto y el plazo de tu depósito, y vas a poder hacer los pagos en efectivo (en cualquier sucursal) o por Internet. Cuanto mayor sea el plazo de la inversión, mayor será el tipo de interés. Cada peso que inviertas está protegido por el Banco Central de la República Argentina.
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