import { PERSONAL } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.txt}>© 2026 {PERSONAL.name} · {PERSONAL.location}</span>
      <span className={styles.txt}>{PERSONAL.role}</span>
    </footer>
  )
}
