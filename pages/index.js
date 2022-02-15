import axios from 'axios'
import PopularMovie from '../components/PopularMovie'
import UpcomingMovie from '../components/UpcomingMovie'
import { server } from './../config/index'
import Sidebar from '../components/Sidebar'

export default function Home({ popularMovies, upcomingMovies }) {
	// console.log(upcomingMovies.results);
	return (
		<div className='bg-black '>
			<PopularMovie movies={popularMovies.results} />
			<UpcomingMovie upcomingMovies={upcomingMovies.results} />
			<div className='flex'>
				<Sidebar />
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const popularRes = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const popularMovies = popularRes.data

	const upcomingRes = await axios(`${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const upcomingMovies = upcomingRes.data

	return {
		props: {
			popularMovies,
			upcomingMovies
		}
	}
}
