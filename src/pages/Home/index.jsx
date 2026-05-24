import './style.css'
import PROJECT from '../../assets/make-plant.avif'
import styles from '../../components/styles.module.css'



function Home() {

  return (
    <div className='page'>
      <div className='container'>

        <nav className={styles.navContent}>
          <div className={styles.logo}>logo aqui</div>
          <div className={styles.links}>
            <a href="">Home</a>
            <a href="">Dashboard Principal </a>
            <a href="">Projetos</a>
            <a href="">Relatórios</a>
          </div>
          <div className={styles.login}>
            <button className={styles.navButton} type='button'>Login</button>
            <button className={styles.navButton} type='button'>Criar conta</button>
          </div>
        </nav>
        <div className={styles.textContent}>
          <div className={styles.text}>
            <h1>
              Tecnologia e Engenharia <br></br> <span> trabalhando juntas</span>
            </h1>
            <p>
              Gerencie obras, equipes e cronogramas em tempo real com nossa plataforma SaaS. Decisões baseadas em dados para a construção civil do futuro.
            </p>

            <button className={styles.textButton} type='button'>
              Ver Dashboard
            </button>

            <button className={styles.textButton} type='button'>
              Ver Projetos
            </button>

          </div>
          <div className={styles.containerImg}>
            <div className={styles.image}>
              <img src={PROJECT} />
            </div>
          </div>
        </div>

      </div>

      <section className={styles.sectionContent}>
        <div className={styles.information }>
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
      <section className={styles.projectInfo}>
        <div className= {styles.projectText}>
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
