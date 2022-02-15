import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ movie }) {
	return (
		<Link href={`/movie/${movie.id}`} passHref>
			<div className='cursor-pointer w-96 mx-2 my-2 flex-shrink-0 relative'>
				<Image
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
					className='rounded-md'
					width={200}
					height={100}
					layout='responsive'
					alt={movie.title}
				/>
				<div className='text-white font-bold text-xl absolute bottom-3 left-4 drop-shadow-lg'>{movie.title}</div>
			</div>
		</Link>
	)
}
