/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React, { useState } from "react"
import styles from '../styles/Home.module.css'
import { formatRelative, parseISO } from 'date-fns'
import DollarCalculation from "../classes/DollarCalculation"
import { es } from "date-fns/locale"
import Adsense, { GoogleAd } from '../components/GoogleAd'
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
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora dólar tarjeta</title>
        <meta name='keywords' content='dolar tarjeta calculadora convertir 45% impuesto ganancias 35% impuesto pais' />
        <meta name="description" content='Calculadora dolar tarjeta actualizada (35% PAÍS y 45% GANANCIAS)' />
      </Head>
      <main className={styles.main}>
         <GoogleAd />
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
        <GoogleAd />
        <ul className={styles.dolarTarjetaInfo}>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Qué es el dólar tarjeta?</h2>
            <p>
              También conocido como "Dólar turista", el dólar tarjeta
              es el que se paga por realizar compras fuera del país,
              o dentro del país si se trata de servicios dolarizados,
              como Spotify o Netflix.
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Cómo se calcula el precio del dólar tarjeta?</h2>
            <p>
              El precio del dólar tarjeta se calcula utilizando
              la cotización del dólar del mercado oficial, sumándole
              el 30% del <strong>impuesto PAÍS</strong> y el 45% del <strong>impuesto a las ganancias</strong>.
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿En qué transacciones se utiliza el dólar tarjeta?</h2>
            <p> - <strong>Compra de divisas</strong> como el Dólar o el Euro.</p>
            <p> - Pago de <strong>servicios o bienes extranjeros</strong>, tales como Spotify o Netflix.</p>
            <p> - Compra de <strong>pasajes a países extranjeros</strong>, ya sean aéreos,
              terrestres o acuáticos.
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿En qué operaciones no aplica el dólar tarjeta?</h2>
            <p> - Compras de <strong>libros</strong> y utilización de plataformas educativas</p>
            <p> - Gastos relacionados a la salud (como medicamentos)</p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Desde cuándo se paga el 45% de ganancias?</h2>
            <p>A partir del <strong>14 de Julio del 2022</strong>, la Administración Nacional de Ingresos Públicos (AFIP)
              subió la percepción por bienes y ganancias un 10%, saltando de 35% a 45%. La AFIP afirmó
              que la decisión de avanzar con la modificación fue tomada con fines del "robustecer el
              frente fiscal". Hizo también foco en la capacidad contributiva de los sectores económicos
              que utilizan el dólar tarjeta como medio de cambio para compras extranjeras y servicios dolarizados.
            </p>
          </li>
        </ul>
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
