import { PERSONAL } from '../data'
import styles from './Hero.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.glow2} />
      <div className={styles.grid} />
      <div className={styles.arc} />
      <div className={styles.arc2} />

      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={`${styles.eyebrow} fu`}>
            {PERSONAL.role} · {PERSONAL.location}
          </div>
          <h1 className={`${styles.title} fu2`}>
            Building clean<br />systems with<br /><em>purpose</em>
          </h1>
          <p className={`${styles.sub} fu3`}>{PERSONAL.heroDesc}</p>
          <div className={`${styles.btns} fu4`}>
            <button className="btn-blue" onClick={() => scrollTo("projects")}>
              View My Work
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("contact")}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className={styles.loc}>
        <div className={styles.locDot} />
        {PERSONAL.location}
      </div>
    </section>
  )
}
