import Styles from './styles.module.css'



function Card({ variant = "container",titulo , numero, status,tipo}) {

    const tipos = {
    obras: Styles.obras,
    produtividade: Styles.produtividade,
    alertas: Styles.alertas,
    equipe: Styles.equipe
};
    
    return (
        
        <section className={`${variant === "metricCards"
            ? Styles.metricCards
            : Styles.container} ${tipos[tipo]}`}>

            <div className={Styles.geral}>
                <div className={Styles.text}>
                    <h2>{titulo}</h2>
                    <span>{numero}</span></div>
                <article className={Styles.img}></article>
            </div>
            <div className={Styles.info}>
                <div className={Styles.infoStatus}> {status}</div>
                <p className={Styles.infoText}>texto xpto</p>
            </div>
        
        
        </section>
    )
}



export default Card


