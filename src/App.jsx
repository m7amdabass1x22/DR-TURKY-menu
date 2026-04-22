import React from 'react'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hotdrinks from './Hotdrinks'
import Coffeeside from './Coffeeside'
import Colddrinks from './Colddrinks'
import More from './More'

export default function App() {
	return (
		<div className='w-full'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Hotdrinks/>} />
					<Route path='/Colddrinks' element={<Colddrinks/>} />
					<Route path='/Coffeeside' element={<Coffeeside/>} />
					<Route path='/More' element={<More/>} />

				</Routes>

			</BrowserRouter>
		</div>
	)
}
