import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const FootballCardLine = ({ footballs, loading }) => {
	if (loading) {
		return (
			<div className='text-center h-[555px] pt-[200px]'>
				<div className='lds-circle'>
					<div></div>
				</div>
			</div>
		)
	}
	return (
		<div>
			{footballs.map((football, i) => (
				<Link key={football.id} to={`/football/line/${football.id}`}>
					<div key={i}>
						<div
							className='text-center hover:opacity-100 border justify-center cursor-pointer font-mono pt-2 pb-2 mt-10 shadow-md bg-white opacity-90 transition-opacity'
							key={i}
						>
							<div className='text-red-400'>
								<span className='text-gray-600'>ID:</span> {football.id}
							</div>
							<div className='text-green-400'>
								<span className='text-gray-600'>Country:</span>{' '}
								{football.country}
							</div>
							<div className='text-teal-400'>
								<span className='text-gray-600'>Date Start:</span>{' '}
								{football.date_start}
							</div>
							<div className='text-yellow-400'>
								<span className='text-gray-600'>Club 1:</span> {football.team1}
							</div>
							<div className='text-pink-400'>
								<span className='text-gray-600'>Club 2:</span> {football.team2}
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default FootballCardLine
