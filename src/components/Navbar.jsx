import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='flex items-center justify-end h-[50px] bg-red-400 shadow-md'>
			<ul className='flex'>
				<Link
					to='/football'
					className='pl-2 pr-2 text-white cursor-pointer hover:text-black transition'
				>
					Football
				</Link>
				<Link
					to='/basketball'
					className='pr-10 text-white cursor-pointer hover:text-black transition'
				>
					Basketball
				</Link>
			</ul>
		</div>
	)
}

export default Navbar
