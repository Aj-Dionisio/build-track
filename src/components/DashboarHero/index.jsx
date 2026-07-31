import Styles from './styles.module.css'
import NavBar from '../../components/Navbar'
import Cards from '../Section/Cards'
import SearchBar from '../SearchBar'
import Charts from '../Charts'
import Weather from '../Weather'
import Tasks from '../Tasks'


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
						titulo="Obras em andamento"
						numero="12"
						status="2%"
						tipo="obras"

					/>
					<Cards variant="metricCards"
						titulo="Produtividade Global"
						numero="87%"
						status="4,2%"
						tipo="produtividade"

					/>
					<Cards variant="metricCards"
						titulo="Alertas Ativos"
						numero="3"
						status="Atenção"
						tipo="alertas"

					/>
					<Cards variant="metricCards"
						titulo="Equipe em Campo"
						numero="342"
						status="Total"
						tipo="equipe"

					/>
				</section>
				<section className={Styles.dashboardPainel}><Charts /></section>
				<section className={Styles.climaStatus}><Weather /></section>
				<section className={Styles.criticalTasks}>
					<div className={Styles.titleTask}>
						<div className={Styles.titleText}>
							<h2>Tarefas Críticas</h2>
							<p>Ações pendentes para hoje</p>
						</div>
						<button className={Styles.titleButton}>+</button>
					</div>
					<Tasks
						taskTitle="Aprovação de projeto estrutural"
						taskStatus="Alta prioridade"
						taskHour="14:00"
						tipo="alta"
					/>

					<Tasks
						taskTitle="Revisão de material cimento lote ..."
						taskStatus="Média"
						taskHour="12:00"
						tipo="media"
					/>

					<button className={Styles.allTasks}>
						Ver todas as tarefas &#8594;
					</button>
				</section>
			</header>


		</div>


	)



}

export default DashboardHero
