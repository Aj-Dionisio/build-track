import Style from './styles.module.css'
import Card from './Cards'

function Section() {
  return (
    <section className={Style.sectionContent}>
      <div className={Style.information}>
        <div className={Style.title}>
          <h1>Visão Geral da Operação</h1>
          <p>Monitore os principais indicadores de desempenho de todos os seus projetos em tempo real.</p>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </section>
  )
}

export default Section