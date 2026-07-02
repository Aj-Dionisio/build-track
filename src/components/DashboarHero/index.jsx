import Styles from './styles.module.css'
import NavBar from '../../components/Navbar'
import Cards from '../Section/Cards'

function DashboardHero() {
	return (
		<div className={Styles.container}>
			
			<section className={Styles.sidebar}>
				<NavBar variant="sidebar" />
			</section>

			<header className={Styles.mainContent}>
				<article className={Styles.titleAndSearch}>
					<h2>Dashboard de operações</h2>
					<p>visão geral em tempo de real de obras atrivas</p>
				</article>
				<setion className={Styles.metricCards}>
					<Cards />
					<Cards />
					<Cards />
					<Cards /> 
				</setion>
				<section className={Styles.dashboardPainel}>AQUI VEM O DASHBOARD</section>
				<section className={Styles.climaStatus}>AQUI VEM A PARTE DO CLIMA</section>
				<section className={Styles.criticalTasks}>AQUI VEM A PARTE DAS TAREFAS CRITICAS</section>
			</header>


		</div>


	)



}

export default DashboardHero
