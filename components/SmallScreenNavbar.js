import styles from "../styles/SmallScreenNavbar.module.css"
import CloseIcon from "../public/close.svg"
import Image from "next/image"
import SmallScreenNavbarItem from "./SmallScreenNavbarItem"
import { useState } from "react"
export default function SmallScreenNavbar({ showNavbar, toggle }) {
  return (
    <nav className={showNavbar ? "smallScreenNav active" : "smallScreenNav"}>
      <div className="smallScreenNavImg" onClick={toggle}>
        <Image width={30} height={30} src={CloseIcon} alt="Close Icon" />
      </div>
      <h2 className="smallScreenNavH2">Dólar tarjeta</h2>
      <div className="smallScreenNavItems">
        <SmallScreenNavbarItem
          toggle={toggle}
          data={{
            mainTitle: "Calculadoras",
            contentTitles: [
              {
                title: "Calculadora dólar tarjeta",
                href: "/"
              },
              {
                title: "Calculadora dólar blue",
                href: "/"
              }
            ]
          }}
        />
        <SmallScreenNavbarItem
          toggle={toggle}
          data={{
            mainTitle: "Simuladores",
            contentTitles: [
              {
                title: "Plazo fijo Banco Nación",
                href: "/simuladores/banco-nacion"
              },
              {
                title: "Plazo fijo Banco Santander",
                href: "/simuladores/banco-santander"
              },
              {
                title: "Plazo fijo Banco Credicoop",
                href: "/simuladores/banco-credicoop"
              },
            ]
          }}
        />
        <SmallScreenNavbarItem
          toggle={toggle}
          data={{
            mainTitle: "Tarjetas",
            contentTitles: [
              {
                title: "Mastercard",
                href: "/tarjetas/mastercard"
              },
              {
                title: "VISA",
                href: "/tarjetas/visa"
              },
              {
                title: "Ualá",
                href: "/tarjetas/uala"
              },
              {
                title: "Lemoncash",
                href: "/tarjetas/lemoncash"
              },
              {
                title: "Mercado Pago",
                href: "/tarjetas/mercado-pago"
              }
            ]
          }}
        />
        <SmallScreenNavbarItem
          toggle={toggle}
          data={{
            mainTitle: "Noticias",
          }}
        />
        <SmallScreenNavbarItem
          toggle={toggle}
          data={{
            mainTitle: "Contacto",
          }}
        />
      </div>
    </nav>
  )
}