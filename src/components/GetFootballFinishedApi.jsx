import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FootballCardFinished from './FootballCardFinished'
import Pagination from './Pagination'

const GetFootballFinishedApi = () => {
	const api =
		'https://api.betting-api.com/1xbet/football/live/all?token=d8bee65f9c4e427bb7d4bcc6711a98f89dcfad5f484b4192b26dbdb5d0d8c239'
	const [footballLive, setFootballLive] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [footballsPerPage] = useState(10)

	useEffect(() => {
		const getFootballs = async () => {
			setLoading(true)
			const res = await axios.request(api)
			console.log(res.data)
			setFootballLive(res.data)
			setLoading(false)
		}
		getFootballs()
	}, [])

	const lastFootballIndex = currentPage * footballsPerPage
	const firstFootballIndex = lastFootballIndex - footballsPerPage
	const currentFootball = footballLive.slice(
		firstFootballIndex,
		lastFootballIndex
	)
	const paginate = pageNumber => setCurrentPage(pageNumber)
	const nextPage = () => setCurrentPage(prev => prev + 1)
	const prevPage = () => setCurrentPage(prev => prev - 1)

	return (
		<div>
			<Pagination
				footballsPerPage={footballsPerPage}
				totalFootballs={footballLive.length}
				paginate={paginate}
			/>
			{/* <button
				className='text-white border px-2 mt-2 bg-red-400 font-mono hover:bg-transparent hover:text-green-400'
				onClick={prevPage}
			>
				Prev Page
			</button>
			<button
				className='ml-2 px-2 border text-white mt-2 bg-green-400 font-mono hover:bg-transparent hover:text-red-400'
				onClick={nextPage}
			>
				Next Page
			</button> */}

			<FootballCardFinished footballs={currentFootball} loading={loading} />
		</div>
	)
}

export default GetFootballFinishedApi
