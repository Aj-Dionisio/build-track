import './style.css'
import NavBar from '../../components/Navbar/NavBar'
import Hero from '../../components/Hero/main'
import Section from '../../components/section/section'
import Project from '../../components/ProjectSection/ProjectSection'
import Contact from '../../components/Contact/Contact'


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
