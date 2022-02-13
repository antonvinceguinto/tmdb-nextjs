import { FaFire, FaGithub, FaLinkedin, FaPoop } from 'react-icons/fa'

export default function Sidebar() {
	return (
		<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
			<SideBarIcon icon={<FaFire size='28' />} text='Website by: Anton' url=''/>
			<SideBarIcon icon={<FaGithub size='28' />} text='Checkout my Github'  url='https://github.com/antonvinceguinto' />
			<SideBarIcon icon={<FaLinkedin size='28' />} text='Check me out at LinkedIn' url='https://linkedin.com/in/guinto/' />
		</div>
	)
}

const SideBarIcon = ({ icon, text = 'tooltip', url }) => {
	return (
		<a href={url} target={url == '' ? '' : '_blank'} rel='noreferrer'>
			<div className='sidebar-icon group'>
				{icon}
				<span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
			</div>
		</a>
	)
}
