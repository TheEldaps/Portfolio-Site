import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

export default function page() {
  return (
    <section className='bg-[#0B0F19] text-white'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />

    </section>
  )
}
