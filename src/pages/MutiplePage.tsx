import RenderOptions from "../components/RenderOptions"

const MutiplePage = () => {
	const options = ["En la pizza", "En el parque", "La cancha", "La marmota"]
	const correctOpt = "En la pizza"
	let points = 1

	const handleButtonClick = (option: string) => {
		if (option === correctOpt) {
			points++
		}
		console.log(points)
	}

	return (
		<main className="flex min-h-screen flex-col items-center p-2 max-w-xl mx-auto">
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
