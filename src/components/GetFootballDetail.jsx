import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

const GetFootballDetail = () => {
	const { id } = useParams()
	const [football, setFootball] = useState(null)
	const [loading, setLoading] = useState(false)
	const api =
		`https://api.betting-api.com/1xbet/football/match/${id}?token=d8bee65f9c4e427bb7d4bcc6711a98f89dcfad5f484b4192b26dbdb5d0d8c239`
		useEffect(() => {
			const getFootballs = async () => {
				setLoading(true)
				const res = await axios.get(api)
				console.log(res.data)
				setFootball(res.data)
				setLoading(false)
			}
			getFootballs()
		}, [id])
		if (loading) {
			return (
				<div className='text-center h-[555px] relative bottom-[146px]'>
					<div className="loader-line w-screen">
						<div></div>
					</div>
				</div>
			)
		}
	return (
		<div className='h-[570px]'>
			<div>
				{football && (
					<div className='shadow-2xl w-[1400px] mx-auto border mt-10 pt-2 pb-10 bg-white opacity-80'>
						<h1 className='text-5xl text-red-700 font-mono p-10'>
							{football.title}
						</h1>
						<div className='flex justify-around text-green-700 text-3xl'>
							<p className='pr-[200px]'>{football.team1}</p>
							<p className='relative right-[100px]'>{football.score1}-{football.score2}</p>
							<p className=''>{football.team2}</p>
						</div>
						<div className='flex justify-center pt-10 shadow-2xl'>
							<div className='border mr-2 border-black h-[150px] w-[300px]'>
							</div>
							<div className='border border-black h-[150px] w-[300px]'></div>
							<div className='border ml-2 border-black h-[150px] w-[300px]'></div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export {GetFootballDetail}
