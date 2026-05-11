import './index.css'
import './globals.css'

import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './Experience'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Education  from './Education'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
