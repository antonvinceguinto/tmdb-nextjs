import axios from 'axios'
import PopularMovie from '../components/PopularMovie'
import Hero from './../components/Hero'
import { server } from './../config/index'

export default function Home({ movies }) {
	return (
		<div className='bg-black'>
			<PopularMovie movies={movies[0].name.results} />
			<PopularMovie movies={movies[0].name.results} />
			<PopularMovie movies={movies[0].name.results} />
		</div>
	)
}

export async function getStaticProps() {
	const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const movies = [ { name: res.data } ]

	return {
		props: {
			movies
		}
	}
}
