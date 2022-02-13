import axios from 'axios'
import PopularMovie from '../components/PopularMovie'
import UpcomingMovie from '../components/UpcomingMovie'
import Hero from './../components/Hero'
import { server } from './../config/index'

export default function Home({ popularMovies, upcomingMovies }) {
	// console.log(upcomingMovies.results);
	return (
		<div className='bg-black'>
			<PopularMovie movies={popularMovies.results} />
			<UpcomingMovie upcomingMovies={upcomingMovies.results} />
			<UpcomingMovie upcomingMovies={upcomingMovies.results} />
		</div>
	)
}

export async function getStaticProps() {
	const popularRes = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const popularMovies = popularRes.data

	const upcomingRes = await axios(`${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const upcomingMovies = upcomingRes.data

	return {
		props: {
			popularMovies,
			upcomingMovies,
		}
	}
}
