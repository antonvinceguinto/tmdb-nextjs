import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import Image from 'next/image'

export default function PopularMovie({ movies }) {
	return (
		<div className='container max-w-full'>
			{ControlledCarousel({ movies })}
		</div>
	)
}

function ControlledCarousel({ movies }) {
	const [ index, setIndex ] = useState(0)

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} interval={5000} className='justify-center text-center'>
			{movies.map((movie) => (
				<Carousel.Item key={movie.id}>
					<Image
						src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
						width={1400}
						height={700}
						objectFit='contain'
						alt={movie.title}
					/>
					<Carousel.Caption className='px-16'>
						<h3 className='text-white font-bold text-4xl pb-6 text-left'>{movie.title}</h3>
						<p className='pb-4 text-left'>{movie.overview}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}
