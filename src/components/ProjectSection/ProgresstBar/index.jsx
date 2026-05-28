 import Styles from './styles.module.css'
 
 function ProgressBar(progress) {

  return (

    <div className={Styles.container}>

      <div
        className={Styles.fill}
        style={{ width: `${progress}%` }}
      >
      </div>

    </div>

  )
}

export default ProgressBar 

