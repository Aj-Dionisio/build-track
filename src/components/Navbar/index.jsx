import Styles from './styles.module.css'
import Logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'



function NavBar({ variant = "navbar" }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={variant === "sidebar"
            ? Styles.sideBar
            : Styles.navContent} >
            <div className={Styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <button className={Styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX /> : <HiMenu />}
            </button>
            <div className={`${Styles.links} ${menuOpen ? Styles.active : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard Principal </Link>
                <Link to="#">Projetos</Link>
                <Link to="#">Relatórios</Link>
            </div>
            <div className={Styles.login}>
                <button className={Styles.navButton} type='button'>Login</button>
                <button className={Styles.navButton} type='button'>Criar conta</button>
            </div>
        </nav >
    )




}

export default NavBar