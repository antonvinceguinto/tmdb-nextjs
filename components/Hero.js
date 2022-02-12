import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
	return (
		<div className='text-center pb-10'>
			<div className='w-60 mx-auto pt-8'>
				<Image src={'/images/logo.png'} width={200} height={200} layout='responsive' alt='logo' />
			</div>
			<h1 className='text-2xl text-white uppercase font-bold mt-4'>Welcome to Wetflix</h1>
			<p className='text-gray-500'>Checkout the latest and upcoming Movies!</p>
		</div>
	)
}
