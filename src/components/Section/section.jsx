import SectionStyle from './section.module.css'

function Section (){
    return(<section className={SectionStyle.sectionContent}>
        <div className={SectionStyle.information}>
          <div>
            <h1>Visão Geral da Operação</h1>
            <p>Monitore os principais indicadores de desempenho de todos os seus projetos em tempo real.</p>
          </div>

          <div className='divCard'>
            <div className='divCardText'></div>
            <div className='divCardImg'></div>
            <div className='divCardPercent'></div>
          </div>

          <div className='divCard'>
            <div className='divCardText'></div>
            <div className='divCardImg'></div>
            <div className='divCardPercent'></div>
          </div>

          <div className='divCard'>
            <div className='divCardText'></div>
            <div className='divCardImg'></div>
            <div className='divCardPercent'></div>
          </div>

          <div className='divCard'>
            <div className='divCardText'></div>
            <div className='divCardImg'></div>
            <div className='divCardPercent'></div>
          </div>

        </div>
      </section>
      )
}

export default Section