import Styles from './styles.module.css'

function ProjectSection() {

  return (
  <section className={Styles.projectInfo}>
    <div className={Styles.projectText}>
      <div>
        <h1>Projetos em Destaque</h1>
        <p>Acompanhamento detalhado das principais obras.</p>
      </div>

      <div>
        <button className='left'>esquerda</button>
        <button className='right'>direita</button>
      </div>
    </div>

    <div>
      <div className={Styles.card}></div>
      <div className={Styles.card}></div>
      <div className={Styles.card}></div>
    </div>

    <button>Ver todos os Projetos</button>

  </section>
  )
}

export default ProjectSection