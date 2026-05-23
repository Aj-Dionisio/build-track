import './style.css'
import PROJECT from '../../assets/make-plant.avif'

function Home() {

  return (
    <div className='page'>
      <div className='container'>

        <nav className='navContent'>
          <a href="">Home</a>
          <a href="">Dashboard Principal </a>
          <a href="">Projetos</a>
          <a href="">Relatórios</a>
          <button className='loginButton' type='button'>Login</button>
          <button className='createButton' type='button'>Criar conta</button>

        </nav>

        <div className='text'>
          <h1>
            Tecnoligiia e Engenharia <br></br>trabalhando juntas
          </h1>
          <p>
            Gerencie obras, equipes e cronogramas em tempo real com nossa plataforma SaaS. Decisões baseadas em dados para a construção civil do futuro.
          </p>

          <button type='button'>
            Ver Dashboard
          </button>

          <button type='button'>
            Ver Projetos
          </button>

        </div>

        <div className='image'>
          <img src={PROJECT} />

        </div>

      </div>

      <section>
        <div className='sectionContent'>
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
      <section>
        <div >
          <div>
            <h1>Projetos em Destaque</h1>
            <p>Acompanhamento detalhado das principais obras.</p>
          </div>
        
          <div>
          <button className='left'></button>
          <button className='right'></button>
          </div>
        </div>

        <div>
          <div className='divCard'></div>
          <div className='divCard'></div>
          <div className='divCard'></div>
        </div>

         <button>Ver todos os Projetos</button>
        
      </section>
      <section>
        <div>
          <h1>Pronto para transformar sua gestão?</h1>
          <p>Junte-se a centenas de construtoras que já otimizaram suas operações com nossa plataforma de inteligência.</p>
          <button>Solicitar Demonstração</button>
          <button>Falar com Consutor</button>
        </div>
      </section>
    </div>






  )
}

export default Home
