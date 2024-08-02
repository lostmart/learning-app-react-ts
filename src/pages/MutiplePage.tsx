import { useState } from "react"
import RenderOptions from "../components/RenderOptions"
import PointsHolder from "../components/PointsHolder"

const MutiplePage = () => {
	const options = ["En la pizza", "En el parque", "La cancha", "La marmota"]
	const correctOpt = "En la pizza"
	let [points, setPoints] = useState(0)

	const handleButtonClick = (option: string) => {
		console.log("running")

		if (option === correctOpt) {
			setPoints((prevPoints) => prevPoints + 1)
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center p-2 max-w-xl mx-auto">
			<PointsHolder score={points} />
			<h2 className="text-xl my-2">Donde sta la casa?</h2>
			<img
				className="rounded-sm mb-2"
				src="https://images.pexels.com/photos/27025471/pexels-photo-27025471/free-photo-of-nourriture-aliments-pizza-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="no temas a la noche oscura"
			/>
			<RenderOptions options={options} handleButtonClick={handleButtonClick} />
		</main>
	)
}

export default MutiplePage
