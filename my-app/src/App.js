import React, { useState } from "react";
import produce from "immer";
import "./App.css";

const numRows = 50;
const numCols = 50;

function App() {
	const [grid, setGrid] = useState(() => {
		const rows = [];
		for (let i = 0; i < numRows; i++) {
			rows.push(Array.from(Array(numCols), () => 0));
		}
		return rows;
	});

	const [running, setRunning] = useState(false);

	return (
		<div className="App">
			<div className="buttons">
				<button
					onClick={() => {
						setRunning(!running);
					}}
				>
					{running ? "Stop" : "Start"}
				</button>
				<button>Pause</button>
				<button>Reset</button>
				<button>Randomize</button>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: `repeat(${numCols}, 20px)`,
				}}
			>
				{grid.map((rows, i) =>
					rows.map((col, k) => (
						<div
							key={`${i}-${k}`}
							onClick={() => {
								const newGrid = produce(grid, (gridCopy) => {
									gridCopy[i][k] = grid[i][k] ? 0 : 1;
								});
								setGrid(newGrid);
							}}
							style={{
								width: 20,
								height: 20,
								backgroundColor: grid[i][k] ? "aqua" : undefined,
								border: "solid 1px black",
							}}
						></div>
					))
				)}
			</div>
		</div>
	);
}

export default App;
