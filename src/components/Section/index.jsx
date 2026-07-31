import Style from './styles.module.css'
import Card from './Cards'
import ProgressBar from '../ProjectSection/ProgresstBar'



function Section() {
  return (
    <section className={Style.sectionContent}>
      <div className={Style.information}>
        <div className={Style.title}>
          <h1>Visão Geral da Operação</h1>
          <p>Monitore os principais indicadores de desempenho de todos os seus projetos em tempo real.</p>
        </div>
        <div className={Style.card}>
          <Card variant="container"
            titulo="Obras ativas"
            numero="14"
            status="2"
            text="vs mês anterior"
            tipo="obras"
            
          />
          <Card variant="container"
            titulo="Produtividade média"
            numero="92%"
            status="5,4%"
            text="vs meta"
            tipo="produtividade"
            
            />
          <Card variant="container"
            titulo="Equipes em campo"
            numero="38"
            status=""
            text="420 operarios"
            tipo="equipe"
            
             />
          <Card variant="container"
            titulo="Status cronograma"
            numero="85%"
            indicador={<ProgressBar progress={85} />}
            text="no cronogram geral"
            tipo="cronograma"
            
             />
        </div>

      </div>
    </section>
  )
}

export default Section