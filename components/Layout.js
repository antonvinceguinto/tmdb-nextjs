import Navbar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<div>
			<Meta />
			<Navbar />
			<main className='bg-black'>{children}</main>
			<Footer />
		</div>
	)
}
