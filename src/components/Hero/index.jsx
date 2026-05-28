import Styles from './styles.module.css'
import PROJECT from '../../assets/make-plant.avif'


function Main() {
    return (
        <div className={Styles.textContent}>
                  <div className={Styles.text}>
                    <h1>
                      Tecnologia e Engenharia <br></br> <span> trabalhando juntas</span>
                    </h1>
                    <p>
                      Gerencie obras, equipes e cronogramas em tempo real com nossa plataforma SaaS. Decisões baseadas em dados para a construção civil do futuro.
                    </p>
        
                    <button className={Styles.textButton} type='button'>
                      Ver Dashboard
                    </button>
        
                    <button className={Styles.textButton} type='button'>
                      Ver Projetos
                    </button>
        
                  </div>
                  <div className={Styles.containerImg}>
                    <div className={Styles.image}>
                      <img src={PROJECT} />
                    </div>
                  </div>
                </div>
    )
}

export default Main