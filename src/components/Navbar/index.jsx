import Styles from './styles.module.css'

function NavBar() {
    return (
        <nav className={Styles.navContent} >
                <div className={Styles.logo}>logo aqui</div>
                <div className={Styles.links}>
                    <a href="">Home</a>
                    <a href="">Dashboard Principal </a>
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