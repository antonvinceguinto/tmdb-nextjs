const API_KEY = process.env.API_KEY

export default {
	fetchPopularMovies: {
		title: 'Popular',
		url: `/popular?api_key=${API_KEY}&language=en-US`
	}
}
