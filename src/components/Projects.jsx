import { PROJECTS } from '../data'
import styles from './Projects.module.css'

function ProjectCard({ tag, title, desc, stack, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.arrow}>↗</div>
      <span className={styles.tag}>{tag}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <div className={styles.stack}>
        {stack.map((s) => <span key={s}>{s}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <p className="sec-label">Selected Work</p>
        <h2 className="sec-title">Projects I've shipped</h2>
        <div className="sec-rule" />
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
