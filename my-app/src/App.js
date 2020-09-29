import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./App.css";

const numRows = 40;
const numCols = 50;
let generation = 0;
let timer = 1000;

const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];
const generateEmptyGrid = () => {
	const rows = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0));
	}

	return rows;
};

function App() {
	const [grid, setGrid] = useState(() => {
		return generateEmptyGrid();
	});

	const [running, setRunning] = useState(false);

	const runningRef = useRef(running);
	runningRef.current = running;

	const runSimulation = useCallback(() => {
		if (!runningRef.current) {
			return;
		}
		generation++;
		setGrid((g) => {
			return produce(g, (gridCopy) => {
				for (let i = 0; i < numRows; i++) {
					for (let k = 0; k < numCols; k++) {
						let neigbors = 0;
						operations.forEach(([x, y]) => {
							const newI = i + x;
							const newK = k + y;
							if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
								neigbors += g[newI][newK];
							}
						});

						if (neigbors < 2 || neigbors > 3) {
							gridCopy[i][k] = 0;
						} else if (g[i][k] === 0 && neigbors === 3) {
							gridCopy[i][k] = 1;
						}
					}
				}
			});
		});

		setTimeout(runSimulation, timer);
	}, []);

	return (
		<div className="App">
			<div className="header">
				<h1>Conway's Game of Life</h1>
			</div>

			<div className="game-container">
				<div className="buttons-and-about">
					<div className="buttons">
						<button
							onClick={() => {
								setRunning(!running);
								if (!running) {
									runningRef.current = true;
									runSimulation();
								}
							}}
						>
							{running ? "Stop" : "Start"}
						</button>
						<button
							onClick={() => {
								setGrid(generateEmptyGrid());
							}}
						>
							Clear
						</button>
						<button
							onClick={() => {
								const rows = [];
								for (let i = 0; i < numRows; i++) {
									rows.push(
										Array.from(Array(numCols), () =>
											Math.random() > 0.9 ? 1 : 0
										)
									);
								}

								setGrid(rows);
							}}
						>
							Randomize
						</button>
						<div className="speed">
							<button
								onClick={() => {
									timer -= 100;
								}}
							>
								faster
							</button>
							<button
								onClick={() => {
									timer += 100;
								}}
							>
								slower
							</button>
						</div>
					</div>
					<div className="generation">Generation: {`${generation}`}</div>
					<div className="about">
						<h2>Rules of the Game:</h2>
						<ol>
							<li>
								Any live cell with fewer than two live neighbours dies, as if by
								underpopulation.
							</li>
							<li>
								Any live cell with two or three live neighbours lives on to the
								next generation.
							</li>
							<li>
								Any live cell with more than three live neighbours dies, as if
								by overpopulation.
							</li>
							<li>
								Any dead cell with exactly three live neighbours becomes a live
								cell, as if by reproduction.
							</li>
						</ol>

						{/* <h2>Turing Complete</h2>
				<p>
					A machine or language is considered Turning complete if when given
					enough time and memory are able to compute any program.
				</p> */}
					</div>
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
		</div>
	);
}

export default App;
