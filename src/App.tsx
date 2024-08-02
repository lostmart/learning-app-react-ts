// src/App.tsx
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

import MutiplePage from "./pages/MutiplePage"
import Home from "./pages/Home"
import About from "./pages/About"

const Contact = () => <div>Contact</div>
const Error = () => <div>para !!!!</div>

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/mutiple" element={<MutiplePage />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
