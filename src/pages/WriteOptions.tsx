import React from "react"

const WriteOptions = () => {
	return (
		<main className="flex min-h-screen flex-col items-center p-2 max-w-xl mx-auto">
			<h2 className="text-xl my-2">Write the options right now ...</h2>

			<img
				className="rounded-sm mb-2"
				src="https://images.pexels.com/photos/17918776/pexels-photo-17918776/free-photo-of-dandelion-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="no temas a la noche oscura"
			/>
			<p>___________________________________________</p>
			<div className="pt-4 flex gap-2 flex-wrap justify-center">
				<button className="px-3 py-1 mb-3 border-2">la matraca</button>
				<button className="px-3 py-1 mb-3 border-2">la matraca</button>
				<button className="px-3 py-1 mb-3 border-2">la matraca</button>
				<button className="px-3 py-1 mb-3 border-2">la matraca</button>
			</div>
		</main>
	)
}

export default WriteOptions
