import MainStyles from './main.module.css'
import PROJECT from '../../assets/make-plant.avif'


function Main() {
    return (
        <div className={MainStyles.textContent}>
                  <div className={MainStyles.text}>
                    <h1>
                      Tecnologia e Engenharia <br></br> <span> trabalhando juntas</span>
                    </h1>
                    <p>
                      Gerencie obras, equipes e cronogramas em tempo real com nossa plataforma SaaS. Decisões baseadas em dados para a construção civil do futuro.
                    </p>
        
                    <button className={MainStyles.textButton} type='button'>
                      Ver Dashboard
                    </button>
        
                    <button className={MainStyles.textButton} type='button'>
                      Ver Projetos
                    </button>
        
                  </div>
                  <div className={MainStyles.containerImg}>
                    <div className={MainStyles.image}>
                      <img src={PROJECT} />
                    </div>
                  </div>
                </div>
    )
}

export default Main