import Styles from './styles.module.css'
import NavBar from '../../components/Navbar'
import Cards from '../Section/Cards'

import SearchBar from '../SearchBar'



function DashboardHero() {
	return (
		<div className={Styles.container}>
			
			<section className={Styles.sideBar}>
				<NavBar variant="sidebar" />
			</section>

			<header className={Styles.mainContent}>
				<article className={Styles.titleAndSearch}>
					<div className={Styles.title}>
					<h2>Dashboard de operações</h2>
					<p>visão geral em tempo de real de obras atrivas</p>
					</div>
					<div>
						<SearchBar />
						
					</div>
				</article>
				<section className={Styles.metricCards}>
					<Cards variant="metricCards"
						titulo ="Obras em andamento"
						numero="12"
						status="2%"
						tipo="obras"
					
					/>
					<Cards variant="metricCards"
						titulo ="Produtividade Global"
						numero="87%"
						status="4,2%"
						tipo="produtividade"
					
					/>
					<Cards variant="metricCards"
						titulo ="Alertas Ativos"
						numero="3"
						status="Atenção"
						tipo="alertas"
					
					/>
					<Cards variant="metricCards"
						titulo ="Equipe em Campo"
						numero="342"
						status="Total"
						tipo="equipe"
					
					/>
				</section>
				<section className={Styles.dashboardPainel}>AQUI VEM O DASHBOARD</section>
				<section className={Styles.climaStatus}>AQUI VEM A PARTE DO CLIMA</section>
				<section className={Styles.criticalTasks}>AQUI VEM A PARTE DAS TAREFAS CRITICAS</section>
			</header>


		</div>


	)



}

export default DashboardHero
