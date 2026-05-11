import { EDUCATION } from './data'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.wrap}>
        <p className="sec-label">Academic Background</p>
        <h2 className="sec-title">Education & Certifications</h2>
        <div className="sec-rule" />
        <div className={styles.grid}>
          {EDUCATION.map((e, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>🎓</div>
              <div className={styles.degree}>{e.degree}</div>
              <div className={styles.school}>{e.school}</div>
              <div className={styles.year}>{e.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
