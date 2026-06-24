import Styles from './styles.module.css'
import Logo from '../../assets/logo2.png'
import {Link} from 'react-router-dom'



function NavBar() {
    return (
        <nav className={Styles.navContent} >
                <div className={Styles.logo}>
                    <img src={Logo} alt="Logo" /></div>
                <div className={Styles.links}>
                    <Link href="/">Home</Link>
                    <Link to="/dashboard">Dashboard Principal </Link>
                    <a href="">Projetos</a>
                    <a href="">Relatórios</a>
                </div>
                <div className={Styles.login}>
                    <button className={Styles.navButton} type='button'>Login</button>
                    <button className={Styles.navButton} type='button'>Criar conta</button>
                </div>
            </nav >
    )
        
            
        
        
}

export default NavBar