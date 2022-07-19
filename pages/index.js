/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React, { useState } from "react"
import styles from '../styles/Home.module.css'
import { formatRelative, parseISO } from 'date-fns'
import Header from '../components/Header'
import DollarCalculation from "../classes/DollarCalculation"
import { es } from "date-fns/locale"
export default function Home({ error, currentDollarInfo }) {
  const formatter = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })
  const [inputValue, setInputValue] = useState(1)
  const [dollarCalculation, setDollarCalculation] = useState(new DollarCalculation(1, currentDollarInfo))
  dollarCalculation.getCostInPesos()

  const onInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    setDollarCalculation(new DollarCalculation(inputValue, currentDollarInfo))
  }
  if (error) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Dólar tarjeta</title>
          <meta name='keywords' content='dolar tarjeta convertir' />
        </Head>
        <h1>There was an error fetching data</h1>
      </div>
    )
  }
  console.log(currentDollarInfo);
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora dólar tarjeta</title>
        <meta name='keywords' content='dolar tarjeta convertir' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Calculadora "Dólar tarjeta": Impuesto País del 30% + Ganancias del 45%</h1>
        <div className={styles.inputs}>
          <label className={styles.inputLabel} htmlFor='dollars'>Cantidad de dólares (USD)</label>
          <div className={styles.inputContainer}>
            <span className={styles.inputSide}>$</span>
            <input
              className={styles.input}
              type="number"
              id='dollars'
              value={inputValue}
              onChange={onInputChange}
            />
          </div>
          <button
            className={styles.button}
            onClick={handleButtonClick}
          >Calcular</button>
          <div className={styles.infoContainer}>
            <p className={styles.infoP}>Costo en pesos:</p>
            <p className={styles.infoP}>{formatter.format(dollarCalculation.getCostInPesos())}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoP}>Impuesto país del 30%</p>
            <p className={styles.infoP}>{formatter.format(dollarCalculation.getImpuestoPais())}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoP}>Impuesto a las ganancias del 45%</p>
            <p className={styles.infoP}>{formatter.format(dollarCalculation.getImpuestoALasGanancias())}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.total}>Total:</p>
            <p className={styles.total}>{formatter.format(dollarCalculation.getTotalPrice())}</p>
          </div>
          <p className={styles.dollarCotizacion}>COTIZACIÓN DOLAR OFICIAL</p>
          <p className={styles.infoP}>1 USD = <span className={styles.total}>{currentDollarInfo.price}</span> ARS</p>
          <p suppressHydrationWarning className={styles.updateTime}>Actualizado {formatRelative(parseISO(currentDollarInfo.fetched_at), new Date(), { locale: es })}</p>
        </div>
        <div className={styles.dolarTarjetaInfo}>
          <div className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Qué es el dólar tarjeta?</h2>
            <p>
              También conocido como <strong>"Dólar turista"</strong>, el dólar tarjeta
              es el que se paga por realizar compras fuera del país,
              o dentro del país si se trata de servicios dolarizados,
              como Spotify o Netflix.
            </p>
          </div>
          <div className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Cómo se calcula el precio del dólar tarjeta?</h2>
            <p>
              El precio del dólar tarjeta se calcula utilizando
              la cotización del dólar del mercado oficial, sumándole
              el 30% del <strong>impuesto PAÍS</strong> y el 45% del <strong>impuesto a las ganancias</strong>.
            </p>
          </div>
          <div className={styles.dolarTarjetaInfoContainer}>
            <h2>¿En qué transacciones se utiliza el dólar tarjeta?</h2>
            <p> - <strong>Compra de divisas</strong> como el Dólar o el Euro.</p>
            <p> - Pago de <strong>servicios o bienes extranjeros</strong>, tales como Spotify o Netflix.</p>
            <p> - Compra de <strong>pasajes a países extranjeros</strong>, ya sean aéreos,
              terrestres o acuáticos.
            </p>
          </div>
          <div className={styles.dolarTarjetaInfoContainer}>
            <h2>¿En qué operaciones no aplica el dólar tarjeta?</h2>
            <p> - Compras de <strong>libros</strong> y utilización de <strong>plataformas educativas</strong></p>
            <p> - Gastos relacionados a la salud (como <strong></strong>)</p>
            <p> - Compra de <strong>pasajes a países extranjeros</strong>, ya sean aéreos,
              terrestres o acuáticos.
            </p>
          </div>
        </div>
      </main>
      <aside className={styles.aside}>

      </aside>
    </div>
  )
}


export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:9999")
    const data = await res.json()

    const currentDollarInfo = data[0]
    return {
      props: { currentDollarInfo }
    }
  } catch (error) {
    console.log(error);
    return {
      props: { error: true }
    }
  }
}
