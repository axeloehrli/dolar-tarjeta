/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import styles from "../styles/Home.module.css"
export default function contacto() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.header}>
          Cómo contactarnos
        </h1>
        <div className={styles.dolarTarjetaInfo}>
          <p>
            En Dólar Tarjeta, nuestra principal misión es ayudarlo a administrar sus finanzas y brindarle información para que pueda tomar decisiones inteligentes en su día a día en lo que respecta al aspecto económico de su vida.
          </p>
          <p>
            Puede contactarnos llamando al 0800-234814, o a través de gmail, a la dirección dolartarjeta.com.ar@gmail.com También estamos disponibles en Facebook y Twitter e Instagram.
          </p>

          <p>
            El sitio web Dólar Tarjeta es una forma estupenda de sacar el máximo partido a tu tarjeta, así que descárgatela. También puedes leer nuestro blog para obtener más información sobre el mundo de las finanzas y cómo puedes aprovecharlo. También nos gustaría invitarle a suscribirse a nuestro boletín de noticias. Te ayudará a estar al día de las últimas novedades, ofertas y consejos para sacar el máximo partido a tu tarjeta.
          </p>
          <p>
            Si tiene alguna consulta, no dude en contactarnos en los medios mencionados anteriormente. Esperamos tener noticias suyas pronto.
          </p>
          <h2>Conócenos en persona</h2>
          <p>
            También puede vernos en persona en nuestras oficinas en la ciudad de Buenos Aires Estaremos encantados de recibirle y responder a todas sus preguntas sobre nuestras herramientas. También puede acudir para otras cuestiones relacionadas con su cuenta o asuntos bancarios. Consulte nuestros datos de contacto más arriba.
          </p>
        </div>
      </main>
      <aside className={styles.aside}></aside>
    </div>
  )
}







