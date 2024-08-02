import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

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
		<nav className="py-2 px-4">
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
			<ul className={showMenu ? "show-menu" : "hidden"}>
				<li className="p-3">
					<Link className="text-2xl" to={"/"}>
						Home
					</Link>
				</li>
				<li className="p-3">
					<Link className="text-2xl" to={"/about"}>
						About
					</Link>
				</li>
				<li className="p-3">
					<Link className="text-2xl" to={"/mutiple"}>
						Mutiple
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
