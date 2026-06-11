import ProgressBar from '../ProgresstBar'
import Styles from './styles.module.css'
import TeamMembers from '../TeamMembers'


function Card({ title, city, progress, status }) {
    return (
        < div className={Styles.cardContainer}>
            <div className={Styles.sup}>

                <div className={Styles.img}></div>
                <div className={Styles.text}><h3>{title}</h3> <span>{city}</span></div>

                <div
                    className={`${Styles.status} 
                    ${status === "Atrasado"
                            ? Styles.delay
                            : Styles.onTime
                        }`}
                >
                    {status}
                </div>
            </div>
            <div className={Styles.bar}>
                <div className={Styles.info}> Progresso Geral</div>
                <div> <ProgressBar progress={progress} /></div>
                <div className={Styles.inf}>
                    <div className={Styles.people}><TeamMembers /></div>
                    <button>Detalhes  &#8594; </button>
                </div>
            </div>


        </div >
    )
}

export default Card



