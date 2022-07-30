import Image from "next/image"
import styles from "../styles/Header.module.css"
import MenuIcon from "../public/menu.svg"
import CloseIcon from "../public/close.svg"
import { useState, useEffect } from "react"
import NavbarItem from "./NavbarItem"


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const onMenuClick = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.image}>
          <Image width={30} height={30} src={MenuIcon} alt="menu" onClick={onMenuClick} />
        </div>
        <h2 className={styles.h2}>Dólar tarjeta</h2>
        <div className={showMenu ? styles.navbarContainerActive : styles.navbarContainer} >
          <nav className={styles.navbar}>
            <div className={styles.menuTop}>
              <h2 className={styles.menuHeader}>Dólar Tarjeta</h2>
              <div className={styles.menuClose}>
                <Image width={30} height={30} src={CloseIcon} alt="menu" onClick={onMenuClick} />
              </div>
            </div>
            <NavbarItem
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
            <NavbarItem
              data={{
                mainTitle: "Simuladores",
                contentTitles: [
                  {
                    title: "Plazo fijo Banco Nación",
                    href: "/"
                  },
                  {
                    title: "Plazo fijo Banco Provincia",
                    href: "/"
                  }
                ]
              }}
            />
            <NavbarItem
              data={{
                mainTitle: "Tarjetas",
                contentTitles: [
                  {
                    title: "Ualá",
                    href: "/"
                  },
                  {
                    title: " Lemoncash",
                    href: "/"
                  }
                ]
              }}
            />
            <NavbarItem
              data={{
                mainTitle: "Noticias",
              }}
            />
            <NavbarItem
              data={{
                mainTitle: "Contacto",
              }}
              noBorder
            />
          </nav>
        </div>
      </div>
    </header>
  )
}