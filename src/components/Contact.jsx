import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { PERSONAL } from '../data'
import { EMAILJS_CONFIG } from '../emailjs.config'
import styles from './Contact.module.css'

function validate(form) {
  const errors = {}
  if (!form.name.trim())    errors.name    = true
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errors.email = true
  if (!form.message.trim()) errors.message = true
  return errors
}

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('')

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false })
  }

  async function send() {
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    'Guru Vishnu',
          reply_to:   form.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrMsg('Something went wrong. Please try again or email me directly.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <p className="sec-label">Get In Touch</p>
        <h2 className="sec-title">Let's work together</h2>
        <div className="sec-rule" />

        <div className={styles.grid}>

          {/* Left — info */}
          <div>
            <p className={styles.intro}>
              Have a project, a role, or just want to connect? I'm always open to meaningful
              conversations. I typically respond within a day.
            </p>
            <div className={styles.links}>
              <a className={styles.link} href={`mailto:${PERSONAL.email}`}>
                <div className={styles.icon}>✉</div>
                <span>{PERSONAL.email}</span>
              </a>
              <a className={styles.link} href={PERSONAL.linkedin} target="_blank" rel="noreferrer">
                <div className={styles.icon} style={{ fontSize: '.72rem', fontWeight: 500 }}>in</div>
                <span>linkedin.com/in/guru-vishnu-b-m</span>
              </a>
              <a className={styles.link} href={PERSONAL.github} target="_blank" rel="noreferrer">
                <div className={styles.icon} style={{ fontSize: '.72rem', fontWeight: 500 }}>gh</div>
                <span>github.com/guruvishnu</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className={styles.field}>
              <label>Your Name</label>
              <input
                name="name" value={form.name} onChange={handle}
                placeholder="Jane Smith"
                className={errors.name ? styles.inputError : ''}
              />
            </div>
            <div className={styles.field}>
              <label>Email Address</label>
              <input
                name="email" value={form.email} onChange={handle}
                placeholder="jane@company.com"
                className={errors.email ? styles.inputError : ''}
              />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea
                name="message" value={form.message} onChange={handle}
                rows={5} placeholder="Tell me about your project or opportunity..."
                className={errors.message ? styles.inputError : ''}
              />
            </div>

            {status === 'success' && (
              <div className={`${styles.alert} ${styles.success}`}>
                ✓ &nbsp;Message sent! I'll get back to you within a day.
              </div>
            )}
            {status === 'error' && (
              <div className={`${styles.alert} ${styles.error}`}>
                ✕ &nbsp;{errMsg}
              </div>
            )}

            <button
              className={styles.sendBtn}
              onClick={send}
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? <><span className={styles.spinner} /> Sending…</>
                : 'Send Message'
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
