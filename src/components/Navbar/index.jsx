import Styles from './styles.module.css'
import Logo from '../../assets/logo2.png'
import {Link} from 'react-router-dom'



function NavBar({variant = "navbar"}) {
    return (
        <nav className={variant === "sidebar"
          ? Styles.sidebar
          : Styles.navContent} >
                <div className={Styles.logo}>
                    <img src={Logo} alt="Logo" /></div>
                <div className={Styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard Principal </Link>
                    <a to="">Projetos</a>
                    <a to="">Relatórios</a>
                </div>
                <div className={Styles.login}>
                    <button className={Styles.navButton} type='button'>Login</button>
                    <button className={Styles.navButton} type='button'>Criar conta</button>
                </div>
            </nav >
    )
        
            
        
        
}

export default NavBar