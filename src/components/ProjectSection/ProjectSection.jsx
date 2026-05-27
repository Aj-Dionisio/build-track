import ProjectStyles from './ProjectStyles.module.css'

function ProjectSection() {

  return (
  <section className={ProjectStyles.projectInfo}>
    <div className={ProjectStyles.projectText}>
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
      <div className='divCard'></div>
      <div className='divCard'></div>
      <div className='divCard'></div>
    </div>

    <button>Ver todos os Projetos</button>

  </section>
  )
}

export default ProjectSection