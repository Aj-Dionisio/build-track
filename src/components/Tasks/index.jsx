import Styles from './styles.module.css'

const tipos ={
    alta: Styles.alta,
    media:Styles.media,
    baixa:Styles.baixa,

}
function Tasks ({taskTitle,taskStatus,taskHour,tipo}){
    return(
        <div className={Styles.container}>
            <div className={Styles.task}>
                <p className={Styles.taskTitle}><input className={Styles.checkbox} type="checkbox" />{taskTitle}</p>
                <div className={Styles.taskInfo}>                    
                    <span className={`${Styles.status} ${tipos[tipo]}`}>{taskStatus}</span>
                    <p className={Styles.taskHour}>{taskHour}</p>
                </div>                
                
            </div>
            

        </div>

    )}

   export default Tasks