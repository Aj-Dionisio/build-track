import NavStyles from './Navbar.module.css'

function NavBar() {
    return (
        <nav className={NavStyles.navContent} >
                <div className={NavStyles.logo}>logo aqui</div>
                <div className={NavStyles.links}>
                    <a href="">Home</a>
                    <a href="">Dashboard Principal </a>
                    <a href="">Projetos</a>
                    <a href="">Relatórios</a>
                </div>
                <div className={NavStyles.login}>
                    <button className={NavStyles.navButton} type='button'>Login</button>
                    <button className={NavStyles.navButton} type='button'>Criar conta</button>
                </div>
            </nav >
    )
        
            
        
        
}

export default NavBar