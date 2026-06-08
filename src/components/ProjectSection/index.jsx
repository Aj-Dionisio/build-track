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
        <Card
          title="Residencial Aurora"
          city="São Paulo, SP"
          status="No Prazo"
          progress ={68}
        />
        <Card
          title="Complexo Viario Sul"
          city="Curitiba-PR"
          status="Atenção"
          progress ={42}
        />
        <Card
          title="Hospital central"
          city="Belo Horizonte-MG"
          status="No Prazo"
          progress ={89}
        />
      </div>

      <button>Ver todos os Projetos &#8594;</button>
    </section>
  )
}

export default ProjectSection