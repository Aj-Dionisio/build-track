import './style.css'
import NavBar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Project from '../../components/ProjectSection'
import Contact from '../../components/Contact'


function Home() {

  return (
    <div className='page'>
      <div className='container'>
        <NavBar />
        <Hero />
      </div>
      <Section />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
