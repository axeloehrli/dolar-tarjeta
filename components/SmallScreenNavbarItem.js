import styles from "../styles/SmallScreenNavbarItem.module.css"

export default function SmallScreenNavbarItem({ data }) {
  return (
    <div className={styles.navbarItem}>
      <div className={styles.navbarItemMain}>
        <p>{data.mainTitle}</p>
      </div>
      {data.contentTitles &&
        <div className={styles.navbarItemContent}>
          {data.contentTitles.map(e =>
            <p key={e.title}>{e.title} {"->"}</p>
          )}
        </div>
      }
    </div>
  )
} 