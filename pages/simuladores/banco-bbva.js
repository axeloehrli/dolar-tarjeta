/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/plazo-fijo-banco-nacion.module.css"
import PlazoFijo from "../../classes/PlazoFijo"
import { useState } from "react"
import Head from "next/head"
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
        <title>Simulador Plazo Fijo Banco BBVA</title>
        <meta name='keywords' content='simulador plazo fijo banco BBVA dinero dolar interes inversion dolares' />
        <meta name="description" content='Simulador de plazo fijo en el Banco BBVA.' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Simulador Plazo Fijo Banco BBVA</h1>
        <div className={styles.inputs}>
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
              Los plazos fijos son una opción atractiva si quiere inmovilizar su dinero durante un tiempo determinado. Suelen estar disponibles con tipos de interés más altos que otros tipos de cuentas de depósito.
            </p>
            <p>
              Los depósitos a plazo fijo en Argentina suelen ofrecer vencimientos más largos que los depósitos a plazo de precio similar en otras partes del mundo. Los plazos más largos también implican tipos de interés más altos, lo que puede hacerlos atractivos en comparación con otros tipos de instrumentos del mercado monetario.
            </p>
            <p>
              Los depósitos a plazo fijo suelen tener un importe mínimo de inversión, pero algunos proveedores permiten invertir tan sólo 100 o 250 dólares al día. Si no alcanza este mínimo, los proveedores le cobrarán una comisión por reembolso anticipado. Esta comisión suele ser pequeña y sólo se paga si deja sus fondos invertidos durante al menos un mes después de la fecha de vencimiento.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>¿Qué es el Banco BBVA?</h2>
            <p>
              El Banco BBVA, filial del Banco Bilbao Vizcaya Argentaria S.A., es un grupo español que ofrece servicios bancarios a particulares y empresas.
            </p>
            <p>
              El BBVA existe desde 1855, cuando fue fundado por la unión de dos bancos de Bilbao, España. Hoy tiene su sede en Madrid y cuenta con más de 2 millones de clientes en España, Estados Unidos, América Latina y Asia.
            </p>
            <p>
              Las ofertas de depósitos a plazo fijo del banco están entre las mejores del mercado actual. Ofrecen atractivos tipos de interés garantizados durante seis meses o hasta la fecha de vencimiento.
            </p>

          </div>
          <div className={styles.infoContainer}>
            <h2>¿Cómo funcionan los plazos fijos en el Banco BBVA?</h2>
            <p>
              El depósito a plazo fijo es un tipo de inversión segura que le permite fijar el tipo de interés que desee, además de una cantidad fija de dinero, mientras inmoviliza sus fondos durante un periodo de tiempo determinado.
            </p>
            <p>
              Los depósitos a plazo fijo están disponibles en el Banco BBVA y en nuestros socios. Se presentan en diferentes formatos y tienen diferentes plazos, pero pueden utilizarse para los mismos fines: ahorrar durante periodos de tiempo cortos o largos y acceder a un tipo de interés fijo en sus ahorros.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Flexibilidad del plazo fijo del Banco BBVA</h2>
            <p>
              El depósito a plazo fijo del Banco BBVA es una excelente opción para aquellos que quieren asegurar un tipo de interés fijo durante un corto período de tiempo. También es una opción atractiva para aquellos que quieren realizar parte de sus operaciones bancarias con el Banco BBVA.
            </p>
            <p>
              El depósito a plazo fijo del Banco BBVA está disponible sólo en Argentina y es uno de los pocos depósitos a plazo fijo que ofrecen flexibilidad. El banco no exige que comprometas tus fondos durante 30 o 90 días, como hacen la mayoría de los demás bancos. En su lugar, puede elegir cualquier plazo entre 1 mes y 5 años.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <h2>Protección contra la inflación</h2>
            <p>
              El Banco BBVA es un muy buen banco en Argentina. Los tipos de interés de los préstamos son bajos, los intereses de los depósitos son bajos y los reembolsos son rápidos.
            </p>
            <p>
              La protección contra la inflación es una característica clave de los depósitos a plazo fijo. Puedes elegir entre diferentes opciones de duración: desde 6 meses hasta 1 año.
            </p>
            <p>
              También puede elegir entre tipos de interés fijos y variables, así como entre la protección contra la inflación y el reembolso en pesos o en dólares estadounidenses.
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