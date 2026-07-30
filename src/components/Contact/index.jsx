 import Styles from './styles.module.css'

function Contact (){
    return(
    <section>
        <div className={Styles.container}>
          <h1 className={Styles.containerTitle}>Pronto para transformar sua gestão?</h1>
          <p className={Styles.conteinerParagraph}>Junte-se a centenas de construtoras que já otimizaram suas operações com nossa plataforma de inteligência.</p>
          <div className={Styles.buttonContainer}>
          <button className={Styles.textbutton}>Solicitar Demonstração</button>
          <button className={Styles.textbutton}>Falar com Consutor</button>
        </div>
        
        </div>
    </section>
    
)
}

export default Contact
