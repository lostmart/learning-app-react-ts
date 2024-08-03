import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaHome, FaInfoCircle, FaList } from "react-icons/fa"

const NavBar = () => {
	const location = useLocation()
	const [showMenu, setShowMenu] = useState(false)
	useEffect(() => {
		setShowMenu(() => false)
	}, [location])

	const handleMenuToggle = () => {
		setShowMenu(() => !showMenu)
	}

	return (
		<nav className="py-2 px-4 bg-primary-default main-menu">
			{/* <ul className="flex justify-around border-b-2"> */}
			<button
				onClick={handleMenuToggle}
				className="toggle-btn"
				style={
					showMenu ? { transform: "translateX(-12px)" } : { transform: "none" }
				}
			>
				<span
					style={
						showMenu
							? { transform: "rotate(45deg) translateX(8px)" }
							: { transform: "none" }
					}
				></span>
				<span style={showMenu ? { opacity: 0 } : { opacity: 1 }}></span>
				<span
					style={
						showMenu
							? { transform: "rotate(-45deg) translateX(8px)" }
							: { transform: "none" }
					}
				></span>
			</button>
			<ul
				className={showMenu ? "show-menu" : "hidden"}
				onClick={handleMenuToggle}
			>
				<li className="p-3 w-full md:px-20 lg:px-30">
					<Link
						className="text-2xl flex items-center gap-2 text-gray-800"
						to={"/"}
					>
						<FaHome /> Home
					</Link>
				</li>
				<li className="p-3 w-full md:px-20 lg:px-30">
					<Link
						className="text-2xl flex items-center gap-2 text-gray-800"
						to={"/about"}
					>
						<FaInfoCircle /> About
					</Link>
				</li>
				<li className="p-3 w-full md:px-20 lg:px-30">
					<Link
						className="text-2xl flex items-center gap-2 text-gray-800"
						to={"/mutiple"}
					>
						<FaList /> Mutiple
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
