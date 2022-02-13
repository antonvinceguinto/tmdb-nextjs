import MovieCard from './MovieCard'

export default function UpcomingMovie({ upcomingMovies }) {
	return (
		<div className='container max-w-full mx-auto pb-10 pl-20'>
			<h1 className='text-white text-2xl pt-8 pb-2 font-bold pl-8'>Upcoming Movies</h1>
			<div className='flex overflow-x-scroll scrollbar'>
				{upcomingMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
			</div>
		</div>
	)
}
