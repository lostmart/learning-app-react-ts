import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaHome, FaInfoCircle, FaList } from "react-icons/fa"

const NavBar = () => {
	const location = useLocation()
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		setShowMenu(false)
	}, [location])

	const handleMenuToggle = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu)
	}

	const links = [
		{
			to: "/",
			text: "Home",
			icon: <FaHome />,
		},
		{
			to: "/about",
			text: "About",
			icon: <FaInfoCircle />,
		},
		{
			to: "/mutiple",
			text: "Mutiple",
			icon: <FaList />,
		},
	]

	type LinkElementProp = {
		to: string
		text: string
		icon: React.ReactElement
		index: number
	}

	const RenderLinks = ({ to, text, icon, index }: LinkElementProp) => {
		return (
			<li className="w-full p-2" style={{ animationDelay: `${index * 150}ms` }}>
				<Link
					className="text-2xl flex justify-center items-center gap-2 text-gray-800"
					to={to}
				>
					{icon}
					{text}
				</Link>
			</li>
		)
	}

	return (
		<nav className="py-2 px-4 bg-primary-default main-menu">
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
				{links.map((link, index) => (
					<RenderLinks key={link.to} {...link} index={index} />
				))}
			</ul>
			<div
				onClick={handleMenuToggle}
				className="backdrop"
				style={
					showMenu
						? { visibility: "visible", opacity: 1 }
						: { visibility: "hidden", opacity: 0 }
				}
			></div>
		</nav>
	)
}

export default NavBar
