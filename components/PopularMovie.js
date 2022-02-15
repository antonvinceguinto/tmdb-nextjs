import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PopularMovie({ movies }) {
	return <div className='container max-w-full pt-8 pl-14'>{ControlledCarousel({ movies })}</div>
}

function ControlledCarousel({ movies }) {
	const [ index, setIndex ] = useState(0)

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			interval={5000}
			className='justify-center text-center'
			indicators={false}
		>
			{movies.map((movie) => (
				// <Link href={`/movie/${movie.id}`} key={movie.id} passHref>
				<Carousel.Item key={movie.id} className='cursor-pointer'>
					<Image
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						width={1400}
						height={700}
						objectFit='object-contain'
						alt={movie.title}
					/>
					<Carousel.Caption className='px-20'>
						<h3 className='text-white font-bold text-4xl pb-6 text-left opacity-100 sm:opacity-0'>{movie.title}</h3>
						<div className='opacity-100 sm:opacity-0'>
							<p className='pb-4 text-left'>{movie.overview}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				// </Link>
			))}
		</Carousel>
	)
}
