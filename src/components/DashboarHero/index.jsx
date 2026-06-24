import Styles from './styles.module.css'
import NavBar from '../../components/Navbar'
import Cards from '../Section/Cards'

function DashboardHero() {
	return (
		<div className={Styles.container}>
			<section className={Styles.navegation}>
				<NavBar />
			</section>

			<setion className={Styles.metricCards}>
				<Cards />
				<Cards />
				<Cards />
			</setion>

			<main className={Styles.dashboardPainel}>

			</main>


		</div>


	)



}

export default DashboardHero
