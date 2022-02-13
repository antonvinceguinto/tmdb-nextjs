import Link from 'next/link'
export default function Navbar() {
	return (
		<nav className='bg-black'>
			<div className='font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-mukta'>
				<Link href='/'>
					<a className='text-base md:text-2xl'>
						Wet<span className='text-red-500'>flix</span>
					</a>
				</Link>
			</div>
		</nav>
	)
}
