import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/login' element={<LoginScreen />} exact />
						<Route
							path='/register'
							element={<RegisterScreen />}
							exact
						/>
						<Route
							path='/profile'
							element={<ProfileScreen />}
							exact
						/>
						<Route
							path='/products/:id'
							element={<ProductScreen />}
						/>
						<Route
							path='/cart/:id/:qty'
							element={<CartScreen />}
							exact
						/>
						<Route path='/' element={<HomeScreen />} exact />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
