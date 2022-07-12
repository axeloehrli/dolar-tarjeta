/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React, { useState } from "react"
import styles from '../styles/Home.module.css'
import { formatRelative, parseISO } from 'date-fns'
import Header from '../components/Header'
import DollarCalculation from "../classes/DollarCalculation"
import {es} from "date-fns/locale"
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
    <div>
      <Head>
        <title>Dólar tarjeta</title>
        <meta name='keywords' content='dolar tarjeta convertir' />
      </Head>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.header}>Calculadora "Dólar tarjeta" + Impuesto País del 30% + Retención del 35%</h1>
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
            <p className={styles.infoP}>Impuesto a las ganancias del 35%</p>
            <p className={styles.infoP}>{formatter.format(dollarCalculation.getImpuestoALasGanancias())}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.total}>Total:</p>
            <p className={styles.total}>{formatter.format(dollarCalculation.getTotalPrice())}</p>
          </div>
          <p className={styles.dollarCotizacion}>COTIZACIÓN DOLAR OFICIAL</p>
          <p className={styles.infoP}>1 USD = <span className={styles.total}>{currentDollarInfo.price}</span> ARS</p>
          <p className={styles.updateTime}>Actualizado {formatRelative(parseISO(currentDollarInfo.fetched_at), new Date(), {locale:es})}</p>
        </div>
      </div>
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