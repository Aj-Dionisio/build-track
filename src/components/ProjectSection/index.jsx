import Styles from './styles.module.css'
import Card from './MetricCard'

function ProjectSection() {

  return (
    <section className={Styles.projectInfo}>
      <div className={Styles.projectText}>
        <div>
          <h2>Projetos em Destaque</h2>
          <p>Acompanhamento detalhado das principais obras.</p>
        </div>

        <div className={Styles.divButton}>
          <button className='left'>&lt;</button>
          <button className='right'>&gt;</button>
        </div>
      </div>

      <div className={Styles.cardProject}>
        <Card />
        <Card />
        <Card />
      </div>

      <button>Ver todos os Projetos &#8594;</button>
    </section>
  )
}

export default ProjectSection