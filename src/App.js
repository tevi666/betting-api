import React from 'react'
import GetFootballApi from './components/GetFootballApi'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import GetFootballLineApi from './components/GetFootballLineApi'
import GetFootballFinishedApi from './components/GetFootballFinishedApi';
import { GetFootballDetail } from './components/GetFootballDetail'
import { GetFootballDetailParematch } from './components/GetFootballDetailParematch'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Tabs />
			<Routes>
				<Route path='/live' element={<GetFootballApi />} />
				<Route path='/' element={<GetFootballApi />} />
				<Route path='/football/match/:id' element={<GetFootballDetail />} />
				<Route path='/parematch' element={<GetFootballLineApi />} />
				<Route
					path='/football/line/:id'
					element={<GetFootballDetailParematch />}
				/>

				<Route path='/finished' element={<GetFootballFinishedApi />} />
				<Route
					path='/football/finished/:id'
					element={<GetFootballDetailParematch />}
				/>

				<Route path='*' element={<GetFootballApi />} />
			</Routes>
		</div>
	)
}

export default App
