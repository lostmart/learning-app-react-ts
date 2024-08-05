import { useState } from "react"
import RenderOptions from "../components/RenderOptions"
import PointsHolder from "../components/PointsHolder"
import { useNavigate } from "react-router-dom"

const FillInBlank = () => {
	const navigate = useNavigate()
	const options = ["En la pizza", "En el parque", "La cancha", "La marmota"]
	const correctOpt = "En la pizza"

	let [points, setPoints] = useState(0)

	const handleButtonClick = (option: string) => {
		if (option === correctOpt) {
			setPoints((prevPoints) => prevPoints + 1)
		}
		navigate("/writeOpt")
	}

	return (
		<main className="flex min-h-screen flex-col items-center p-2 max-w-xl mx-auto">
			<PointsHolder score={points} />
			<h2 className="text-xl my-2">Write right now !!</h2>
			<img
				className="rounded-sm mb-2"
				src="https://images.pexels.com/photos/20827831/pexels-photo-20827831/free-photo-of-person-fingers-holding-dandelion-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="no temas a la noche oscura"
			/>
			<p className="mb-4 mt-2">Donde esta la ____ ?</p>
			<RenderOptions options={options} handleButtonClick={handleButtonClick} />
		</main>
	)
}

export default FillInBlank
