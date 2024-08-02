type PointsHolderPops = {
	score: number
}

const PointsHolder = ({ score }: PointsHolderPops) => {
	return <span>{score}</span>
}

export default PointsHolder
