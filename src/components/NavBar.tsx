import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<nav>
			<ul className="flex justify-around border-b-2">
				<li className="p-3">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="p-3">
					<Link to={"/about"}>About</Link>
				</li>
				<li className="p-3">
					<Link to={"/mutiple"}>Mutiple</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
