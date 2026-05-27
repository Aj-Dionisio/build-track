 import ContacStyles from './Contact.module.css'

function Contact (){
    return(
    <section>
        <div className={ContacStyles.container}>
          <h1>Pronto para transformar sua gestão?</h1>
          <p>Junte-se a centenas de construtoras que já otimizaram suas operações com nossa plataforma de inteligência.</p>
          <div className={ContacStyles.buttonContainer}>
          <button className={ContacStyles.textbutton}>Solicitar Demonstração</button>
          <button className={ContacStyles.textbutton}>Falar com Consutor</button>
        </div>
        
        </div>
    </section>
    
)
}

export default Contact
