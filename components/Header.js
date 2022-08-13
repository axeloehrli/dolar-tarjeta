import Image from "next/image"
import styles from "../styles/Header.module.css"
import MenuIcon from "../public/menu.svg"
import CloseIcon from "../public/close.svg"
import { useState, useEffect } from "react"
import NavbarItem from "./NavbarItem"
import BigScreenNavbar from "./BigScreenNavbar"
import SmallScreenNavbar from "./SmallScreenNavbar"


export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false)
  const onMenuClick = () => {
    setShowNavbar(prevState => !prevState)
  }

  const [isBigScreen, setIsBigScreen] = useState()
  useEffect(() => {
    setIsBigScreen(window.innerWidth >= 1000 ? true : false)
    window.addEventListener("resize", () => {
      if (isBigScreen && window.innerWidth < 1000) {
        setIsBigScreen(false)
        return
      }
      if (!isBigScreen && window.innerWidth >= 1000) {
        setIsBigScreen(true)
        return
      }
    })
  }, [isBigScreen])

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.image}>
          <Image width={30} height={30} src={MenuIcon} alt="menu" onClick={onMenuClick} />
        </div>
        <h2 className={styles.h2}>Dólar tarjeta</h2>
        {isBigScreen ? <BigScreenNavbar /> : <SmallScreenNavbar showNavbar={showNavbar} toggle={onMenuClick}/>}
      </div>
    </header>
  )
}

/* 
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
          </nav> */