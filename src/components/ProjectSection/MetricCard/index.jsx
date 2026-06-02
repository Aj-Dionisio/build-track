import ProgressBar from '../ProgresstBar'
import Styles from './styles.module.css'


function Card() {
    return (
        < div className={Styles.cardContainer}>
            <div className={Styles.sup}>

                <div className={Styles.img}></div>
                <div className={Styles.text}>Nome da Obra <span>localização</span></div>

                <div className={Styles.status}></div>
            </div>
            <div className={Styles.bar}>
                <div className={Styles.info}> Progresso Geral</div>
                <div> <ProgressBar progress={25} /></div>
                <div className={Styles.inf}>
                    <div className={Styles.people}></div>
                    <button>Detalhes</button>
                </div>
            </div>


        </div >
    )
}

export default Card



