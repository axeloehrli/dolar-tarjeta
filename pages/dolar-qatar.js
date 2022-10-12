/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React, { useState } from "react"
import styles from '../styles/Home.module.css'
import { formatRelative, parseISO } from 'date-fns'
import DollarCalculation from "../classes/DollarCalculation"
import { es } from "date-fns/locale"
import Adsense, { GoogleAd } from '../components/GoogleAd'
import CalculateButton from '../components/CalculateButton'
import DollarQatarCalculation from '../classes/DollarQatarCalculation'
export default function Home({ error, currentDollarInfo }) {
  const formatter = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })
  const [inputValue, setInputValue] = useState(1)
  const [dollarCalculation, setDollarCalculation] = useState(new DollarQatarCalculation(1, currentDollarInfo))
  dollarCalculation.getCostInPesos()

  const onInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    setDollarCalculation(new DollarQatarCalculation(inputValue, currentDollarInfo))
  }
  return (
    <div className={styles.container}>
      <Head>
        <link rel='canonical' href='https://dolartarjeta.com.ar' />
        <meta name="google-site-verification" content="-zlK0Qapx3a1sAjVOesTRBIm96KqXmKPFA90hRNyCpA" />
        <title>Calculadora dólar Qatar con impuestos</title>
        <meta name='keywords' content='dolar qatar calculadora calcular calculo cálculo hoy convertir 45% impuesto ganancias 35% impuesto pais 25% bienes personales' />
        <meta name="description" content='Calculadora dolar tarjeta actualizada (35% PAÍS y 45% GANANCIAS)' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Calculadora "Dólar Qatar": Impuesto País del 30% + Ganancias del 45% + 25% Bienes Personales </h1>
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
          <CalculateButton handleClick={handleButtonClick} />
          <div className={styles.infoContainer}>
            <p className={styles.infoP}>Costo en pesos:</p>
            <p className={styles.infoP}>{formatter.format(dollarCalculation.getCostInPesos())}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoP}>Impuesto Bienes Personales del 25%</p>
            <p className={styles.infoP}>{formatter.format(dollarCalculation.getImpuestoBienesPersonales())}</p>
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
        <ul className={styles.dolarTarjetaInfo}>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Qué es el Dólar Qatar?</h2>
            <p>
              El dólar Qatar es el que se pagará a
              partir del 12/10 al realizar compras
              al extranjero o por utilización de servicios dolarizados.
              Se diferencia del dólar tarjeta ya que, además de
              los impuestos PAIS (30%) y GANANCIAS (45%), se deberá
              pagar un 25% por el impuesto a Bienes Personales.
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Cómo se calcula el precio del dólar Qatar?</h2>
            <p>
              Para obtener el precio del dólar Qatar, se parte
              de la cotización del dólar oficial, a la cual se le
              añade un 30% del impuesto PAÍS, un 45% del impuesto
              a las ganancias y un 25% del impuesto a Bienes Personales.
              Nuestra calculadora realiza los cálculos por usted de
              manera automática.
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Quien paga el dólar Qatar?</h2>
            <p>
              El dólar Qatar será pagado por todos aquellos
              argentinos que gasten más de 300 dólares por mes
              con su tarjeta de crédito o débito.
            </p>
            <p>
              Algunos se preguntarán, ¿Qué ocurre si mis gastos
              están divididos en distintas tarjetas de distintos bancos?
              La respuesta es que el gobierno usará el número de CUIT para
              llevar la cuenta de los gastos en dólares de cada persona, por
              lo cual deberá pagar de todas maneras si su total excede
              los 300 dólares.
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿En qué operaciones no aplica el dólar Qatar?</h2>
            <p>
              El abono de servicios tales como Spotify,
              Disney+, Netflix, y otras plataformas de streaming
              quedarán exentas de esta nueva medida económica.
              Tampoco aplica para el llamado "Dólar Ahorro".
            </p>
          </li>
          <li className={styles.dolarTarjetaInfoContainer}>
            <h2>¿Desde cuándo aplica el dólar Qatar?</h2>
            <p>
              El dólar Qatar fue anunciado el fin de semana largo por el
              nuevo Ministro de Economía Sergio Massa, y tomará efecto a partir
              del miércoles 12 de octubre del 2022. Se lo llamó dolar Qatar 
              por el momento en el que fue anunciado, ya que se encuentra muy cerca 
              de la fecha del Campeonato Mundial de Fútbol, en el cual muchos
              argentinos viajarán a Qatar y gastaran grandes cantidades de dólares.
            </p>
            <p>
              Esta medida fue tomada por el gobierno con la esperanza de 
              reducir los 800 millones de dólares que escapan 
              del país todos los meses a raíz del turismo internacional.
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
