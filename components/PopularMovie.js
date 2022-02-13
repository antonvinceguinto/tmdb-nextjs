import MovieCard from './MovieCard'

export default function PopularMovie({ movies }) {
	return (
		<div className='container max-w-full mx-auto pb-10'>
			<h1 className='text-white text-2xl pt-8 pb-5 font-bold pl-8'>Popular Movies</h1>
			<div className='flex overflow-x-scroll scrollbar'>
				{movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
			</div>
		</div>
	)
}
