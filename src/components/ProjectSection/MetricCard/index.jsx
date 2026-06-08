import ProgressBar from '../ProgresstBar'
import Styles from './styles.module.css'


function Card({title, city,progress,status}) {
    return (
        < div className={Styles.cardContainer}>
            <div className={Styles.sup}>

                <div className={Styles.img}></div>
                <div className={Styles.text}>{title} <span>{city}</span></div>

                <div className={Styles.status}>{status}</div>
            </div>
            <div className={Styles.bar}>
                <div className={Styles.info}> Progresso Geral</div>
                <div> <ProgressBar progress={{progress}}/></div>
                <div className={Styles.inf}>
                    <div className={Styles.people}></div>
                    <button>Detalhes  &#8594; </button>
                </div>
            </div>


        </div >
    )
}

export default Card



