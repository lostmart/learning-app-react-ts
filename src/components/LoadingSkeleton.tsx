import React from "react"

const LoadingSkeleton: React.FC = () => {
	return (
		<div style={{ padding: "20px", textAlign: "center" }}>
			<div
				style={{
					backgroundColor: "#ccc",
					width: "100%",
					height: "200px",
					marginBottom: "10px",
				}}
			/>
			<div style={{ backgroundColor: "#ccc", width: "100%", height: "20px" }} />
		</div>
	)
}

export default LoadingSkeleton
