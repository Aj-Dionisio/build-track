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

      <div className={Styles.divButtons}>
        <button className='left'>esquerda</button>
        <button className='right'>direita</button>
      </div>
    </div>

    <div className={Styles.cardProject}>
     <Card/>
    </div>

    <button>Ver todos os Projetos</button>
  </section>
  )
}

export default ProjectSection